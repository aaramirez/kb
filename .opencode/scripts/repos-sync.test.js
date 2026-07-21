#!/usr/bin/env node
import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, writeFileSync, rmSync } from 'fs';
import { join } from 'path';
import { execSync } from 'child_process';

const TMP = join(import.meta.dirname, '__tmp_test__');
const TMP_REPOS_JSON = join(TMP, 'repos.json');
const TMP_REFS = join(TMP, 'references');
const SCRIPT = join(import.meta.dirname, 'repos-sync.js');

function cleanup() {
  if (existsSync(TMP)) rmSync(TMP, { recursive: true, force: true });
}

beforeEach(() => { cleanup(); mkdirSync(TMP, { recursive: true }); });
afterEach(() => { cleanup(); });

describe('readReposJson', () => {
  it('reads valid repos.json', async () => {
    const data = [{ name: 'test/repo', url: 'https://github.com/test/repo.git' }];
    writeFileSync(TMP_REPOS_JSON, JSON.stringify(data, null, 2));
    const { readReposJson } = await import(SCRIPT);
    const repos = readReposJson(TMP_REPOS_JSON);
    assert.equal(repos.length, 1);
    assert.equal(repos[0].name, 'test/repo');
  });

  it('throws on missing file', async () => {
    const { readReposJson } = await import(SCRIPT);
    assert.throws(() => readReposJson('/nonexistent/repos.json'), /not found/i);
  });

  it('throws on invalid JSON', async () => {
    writeFileSync(TMP_REPOS_JSON, '{ broken');
    const { readReposJson } = await import(SCRIPT);
    assert.throws(() => readReposJson(TMP_REPOS_JSON));
  });

  it('throws on non-array content', async () => {
    writeFileSync(TMP_REPOS_JSON, JSON.stringify({ name: 'bad' }));
    const { readReposJson } = await import(SCRIPT);
    assert.throws(() => readReposJson(TMP_REPOS_JSON), /array/i);
  });

  it('throws when repo missing required fields', async () => {
    writeFileSync(TMP_REPOS_JSON, JSON.stringify([{ name: 'x' }]));
    const { readReposJson } = await import(SCRIPT);
    assert.throws(() => readReposJson(TMP_REPOS_JSON), /url/i);
  });
});

describe('findRepo', () => {
  it('finds repo by name', async () => {
    const data = [
      { name: 'a/one', url: 'https://github.com/a/one.git' },
      { name: 'b/two', url: 'https://github.com/b/two.git' },
    ];
    writeFileSync(TMP_REPOS_JSON, JSON.stringify(data));
    const { readReposJson, findRepo } = await import(SCRIPT);
    const repos = readReposJson(TMP_REPOS_JSON);
    const repo = findRepo(repos, 'a/one');
    assert.equal(repo.url, 'https://github.com/a/one.git');
  });

  it('returns undefined for unknown name', async () => {
    const data = [{ name: 'a/one', url: 'https://github.com/a/one.git' }];
    writeFileSync(TMP_REPOS_JSON, JSON.stringify(data));
    const { readReposJson, findRepo } = await import(SCRIPT);
    const repos = readReposJson(TMP_REPOS_JSON);
    const repo = findRepo(repos, 'nope');
    assert.equal(repo, undefined);
  });
});

describe('resolveRefsDir', () => {
  it('returns correct references dir', async () => {
    const { resolveRefsDir } = await import(SCRIPT);
    const dir = resolveRefsDir(TMP);
    assert.equal(dir, TMP_REFS);
  });
});

describe('isCloned', () => {
  it('returns false when directory does not exist', async () => {
    const { isCloned } = await import(SCRIPT);
    assert.equal(isCloned(TMP_REFS, 'a/b'), false);
  });

  it('returns true when .git exists', async () => {
    const repoDir = join(TMP_REFS, 'a', 'b');
    mkdirSync(join(repoDir, '.git'), { recursive: true });
    const { isCloned } = await import(SCRIPT);
    assert.equal(isCloned(TMP_REFS, 'a/b'), true);
  });

  it('returns false when dir exists but no .git', async () => {
    mkdirSync(join(TMP_REFS, 'a', 'b'), { recursive: true });
    const { isCloned } = await import(SCRIPT);
    assert.equal(isCloned(TMP_REFS, 'a/b'), false);
  });
});

describe('listRepos', () => {
  it('lists repos with cloned status', async () => {
    const data = [
      { name: 'a/one', url: 'https://github.com/a/one.git' },
      { name: 'b/two', url: 'https://github.com/b/two.git' },
    ];
    writeFileSync(TMP_REPOS_JSON, JSON.stringify(data));
    mkdirSync(join(TMP_REFS, 'a', 'one', '.git'), { recursive: true });
    const { readReposJson, listRepos } = await import(SCRIPT);
    const repos = readReposJson(TMP_REPOS_JSON);
    const list = listRepos(repos, TMP_REFS);
    assert.equal(list.length, 2);
    assert.equal(list[0].cloned, true);
    assert.equal(list[1].cloned, false);
  });
});

describe('cloneRepo (integration)', () => {
  it('clones a real repo shallow', { timeout: 30000 }, async () => {
    const { cloneRepo } = await import(SCRIPT);
    const result = await cloneRepo({
      name: 'octocat/Hello-World',
      url: 'https://github.com/octocat/Hello-World.git',
      branch: 'master',
    }, TMP_REFS, { verbose: false, dryRun: false });
    assert.equal(result.ok, true);
    assert.ok(existsSync(join(TMP_REFS, 'octocat', 'Hello-World', '.git')));
  });
});

describe('updateRepo (integration)', () => {
  it('updates an already-cloned repo', { timeout: 30000 }, async () => {
    const { cloneRepo, updateRepo } = await import(SCRIPT);
    await cloneRepo({
      name: 'octocat/Hello-World',
      url: 'https://github.com/octocat/Hello-World.git',
      branch: 'master',
    }, TMP_REFS, { verbose: false, dryRun: false });
    const result = await updateRepo('octocat/Hello-World', TMP_REFS, { verbose: false, dryRun: false });
    assert.equal(result.ok, true);
  });

  it('fails for non-cloned repo', async () => {
    const { updateRepo } = await import(SCRIPT);
    const result = await updateRepo('no/such-repo', TMP_REFS, { verbose: false, dryRun: false });
    assert.equal(result.ok, false);
    assert.match(result.error, /not cloned/i);
  });
});
