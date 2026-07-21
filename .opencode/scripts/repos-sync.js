#!/usr/bin/env node
/**
 * repos-sync.js — Clone and update reference repositories.
 *
 * Usage:
 *   node repos-sync.js get <name|all>    — clone repos into references/
 *   node repos-sync.js update <name|all> — pull latest changes
 *   node repos-sync.js list              — list repos with status
 *
 * Options:
 *   --dry-run   Show what would be done without executing
 *   --verbose   Show git output
 *   --help      Show this help
 */

import { readFileSync, existsSync, mkdirSync } from 'fs';
import { join, resolve } from 'path';
import { execSync } from 'child_process';
import { parseArgs, println, warn, showHelp } from './create-base.js';

const USAGE = 'node repos-sync.js <get|update|list> [name|all]';
const DESC = 'Clone and update reference repositories defined in repos.json.';
const OPTIONS = {
  '--dry-run': 'Show actions without executing',
  '--verbose': 'Show git output',
  '--help':    'Show this help',
};

export function readReposJson(filePath) {
  if (!existsSync(filePath)) {
    throw new Error(`repos.json not found: ${filePath}`);
  }
  let raw;
  try {
    raw = readFileSync(filePath, 'utf8');
  } catch (e) {
    throw new Error(`Cannot read ${filePath}: ${e.message}`);
  }
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    throw new Error(`Invalid JSON in ${filePath}: ${e.message}`);
  }
  if (!Array.isArray(data)) {
    throw new Error(`repos.json must be an array, got ${typeof data}`);
  }
  for (const [i, repo] of data.entries()) {
    if (!repo.name) throw new Error(`Repo at index ${i} missing "name" field`);
    if (!repo.url) throw new Error(`Repo "${repo.name}" missing "url" field`);
  }
  return data;
}

export function findRepo(repos, name) {
  return repos.find(r => r.name === name);
}

export function resolveRefsDir(root) {
  return join(root, 'references');
}

export function isCloned(refsDir, name) {
  return existsSync(join(refsDir, name, '.git'));
}

export function listRepos(repos, refsDir) {
  return repos.map(repo => ({
    name: repo.name,
    description: repo.description || '',
    branch: repo.branch || 'main',
    cloned: isCloned(refsDir, repo.name),
  }));
}

export async function cloneRepo(repo, refsDir, opts = {}) {
  const { verbose = false, dryRun = false } = opts;
  const branch = repo.branch || 'main';
  const target = join(refsDir, repo.name);

  if (isCloned(refsDir, repo.name)) {
    return { ok: true, skipped: true, message: `${repo.name} already cloned` };
  }

  if (dryRun) {
    return { ok: true, dryRun: true, message: `Would clone ${repo.url} → ${target}` };
  }

  mkdirSync(target, { recursive: true });
  const gitArgs = `git clone --depth 1 --branch ${branch} ${repo.url} "${target}"`;
  try {
    execSync(gitArgs, { stdio: verbose ? 'inherit' : 'pipe', timeout: 60000 });
    return { ok: true, message: `Cloned ${repo.name}` };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

export async function updateRepo(name, refsDir, opts = {}) {
  const { verbose = false, dryRun = false } = opts;
  const repoDir = join(refsDir, name);

  if (!isCloned(refsDir, name)) {
    return { ok: false, error: `${name} is not cloned — run /getrepo first` };
  }

  if (dryRun) {
    return { ok: true, dryRun: true, message: `Would pull in ${repoDir}` };
  }

  try {
    execSync('git pull --ff-only', { cwd: repoDir, stdio: verbose ? 'inherit' : 'pipe', timeout: 30000 });
    return { ok: true, message: `Updated ${name}` };
  } catch (e) {
    return { ok: false, error: e.message };
  }
}

async function main() {
  const raw = process.argv.slice(2);
  const opts = parseArgs(raw);
  const positional = raw.filter(a => !a.startsWith('--'));

  if (opts.help) {
    showHelp('repos-sync.js', USAGE, DESC, OPTIONS);
    process.exit(0);
  }

  const command = positional[0];
  const target = positional[1];

  if (!command || !['get', 'update', 'list'].includes(command)) {
    println('  Error: command required (get, update, list)');
    println(`  Usage: ${USAGE}`);
    process.exit(1);
  }

  const root = process.cwd();
  const reposJsonPath = join(root, 'repos.json');
  const refsDir = resolveRefsDir(root);

  const repos = readReposJson(reposJsonPath);

  if (command === 'list') {
    const list = listRepos(repos, refsDir);
    for (const r of list) {
      const status = r.cloned ? '✓' : ' ';
      println(`  [${status}] ${r.name}${r.description ? ' — ' + r.description : ''} (${r.branch})`);
    }
    println(`\n  ${list.filter(r => r.cloned).length}/${list.length} cloned`);
    return;
  }

  if (!target) {
    println(`  Error: ${command} requires a name or "all"`);
    process.exit(1);
  }

  const toProcess = target === 'all' ? repos : (() => {
    const repo = findRepo(repos, target);
    if (!repo) {
      println(`  Error: "${target}" not found in repos.json`);
      println(`  Available: ${repos.map(r => r.name).join(', ')}`);
      process.exit(1);
    }
    return [repo];
  })();

  let ok = 0, fail = 0, skip = 0;
  for (const repo of toProcess) {
    const fn = command === 'get' ? cloneRepo : updateRepo;
    const arg = command === 'get' ? repo : repo.name;
    const result = await fn(arg, refsDir, { verbose: opts.verbose, dryRun: opts.dryRun });
    if (result.ok) {
      if (result.skipped) { skip++; println(`  ⊘ ${result.message}`); }
      else { ok++; println(`  ✓ ${result.message}`); }
    } else {
      fail++;
      warn(`${repo.name}: ${result.error}`);
    }
  }
  println(`\n  Summary: ${ok} ok, ${skip} skipped, ${fail} failed`);
}

if (process.argv[1] && process.argv[1].endsWith('repos-sync.js')) {
  main().catch(e => { warn(e.message); process.exit(1); });
}
