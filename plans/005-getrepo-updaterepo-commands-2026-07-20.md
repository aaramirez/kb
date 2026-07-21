# /getrepo & /updaterepo Commands + repos-sync Infrastructure

## Objective

Create commands `/getrepo` and `/updaterepo` to clone and update reference repositories defined in `repos.json`, along with the supporting `repos-sync` skill and `repos-sync.js` script.

## Requirements

1. `/getrepo <name|all>` command — clone repos from `repos.json` into `references/` — priority: high
2. `/updaterepo <name|all>` command — pull/update existing repos in `references/` — priority: high
3. `repos-sync.js` script — Node.js module that handles git clone/pull operations — priority: high
4. `repos-sync` skill — SKILL.md with instructions and usage — priority: high
5. `repos.json` schema — define proper structure with name, url, description, branch — priority: high
6. Register commands in `opencode.json` — priority: high
7. Update `AGENTS.md` — document new commands — priority: medium
8. Error handling — graceful failures for missing repos, network errors, invalid JSON — priority: medium
9. Cross-platform — Node.js only, no shell dependencies — priority: high

## Architecture

### repos.json Schema

```json
[
  {
    "name": "owner/repo",
    "url": "https://github.com/owner/repo.git",
    "branch": "main",
    "description": "Description of this reference repo"
  }
]
```

Fields:
- `name` (required): `owner/repo` format, used as identifier and directory name
- `url` (required): Git clone URL (https)
- `branch` (optional, default: `main`): Branch to track
- `description` (optional): Human-readable description

### repos-sync.js — Core Script

**Location:** `.opencode/scripts/repos-sync.js`

**Responsibilities:**
1. Read `repos.json` from project root
2. `getRepo(name)` — clone a single repo into `references/<name>/`
3. `updateRepo(name)` — pull updates for an existing repo
4. `getRepos()` / `updateRepos()` — batch operations on all repos
5. `listRepos()` — list repos with status (cloned/not cloned/branch)
6. Validate `repos.json` structure

**Key decisions:**
- Uses `child_process.execSync` for git operations (cross-platform via Node.js)
- All git operations use `--depth 1` for shallow clones (faster, less storage)
- Respects branch field from repos.json
- Outputs progress to stdout, errors to stderr
- Supports `--dry-run` and `--verbose` flags
- Uses `parseArgs` from `create-base.js` for CLI parsing

**Error handling:**
- Missing repos.json → clear error message
- Invalid JSON → parse error with line number
- Repo already exists → skip clone, suggest `updaterepo`
- Network failure → catch and report, continue with other repos
- Unknown repo name → list available repos

### Commands

#### `/getrepo`

**File:** `.opencode/commands/getrepo.md`

**Behavior:**
- `/getrepo all` — clones all repos from repos.json that aren't already in `references/`
- `/getrepo <name>` — clones a specific repo by name (matches `name` field in repos.json)
- Reports: cloned, skipped (already exists), failed

#### `/updaterepo`

**File:** `.opencode/commands/updaterepo.md`

**Behavior:**
- `/updaterepo all` — pulls latest changes for all repos in `references/`
- `/updaterepo <name>` — updates a specific repo
- Reports: updated, no changes, failed

### repos-sync Skill

**File:** `.opencode/skills/repos-sync/SKILL.md`

**Contents:**
- YAML frontmatter with name, description, scripts
- Instructions for when/how to use the repos-sync functionality
- Reference to repos.json and the repos-sync.js script
- Usage examples

## File Changes

### New Files

| File | Description |
|------|-------------|
| `.opencode/commands/getrepo.md` | /getrepo command definition |
| `.opencode/commands/updaterepo.md` | /updaterepo command definition |
| `.opencode/skills/repos-sync/SKILL.md` | repos-sync skill instructions |
| `.opencode/scripts/repos-sync.js` | Core sync script (git operations) |

### Modified Files

| File | Changes |
|------|---------|
| `repos.json` | Update schema to include `branch` field, add example repos |
| `opencode.json` | Register `getrepo` and `updaterepo` commands |
| `AGENTS.md` | Add new commands to CLI quick reference table |

## TDD Flow

### Step 1: Write tests → FAIL

Create `.opencode/scripts/repos-sync.test.js` with:
- Test `readReposJson()` — reads and validates repos.json
- Test `readReposJson()` — throws on missing file
- Test `readReposJson()` — throws on invalid JSON
- Test `getRepo()` — clones a repo (mock git)
- Test `getRepo()` — skips if already exists
- Test `updateRepo()` — pulls updates (mock git)
- Test `listRepos()` — returns status of each repo

### Step 2: Implement → PASS

Implement `repos-sync.js` with all functions. Verify tests pass.

### Step 3: Refactor → still PASS

Clean up code, ensure cross-platform compatibility.

## Verification

- [ ] `repos-sync.js` reads repos.json correctly
- [ ] `/getrepo` command clones repos into `references/`
- [ ] `/getrepo <name>` clones a specific repo
- [ ] `/getrepo all` clones all repos
- [ ] `/getrepo` skips already-cloned repos
- [ ] `/updaterepo` pulls latest changes
- [ ] `/updaterepo <name>` updates a specific repo
- [ ] `/updaterepo all` updates all repos
- [ ] Error messages are clear and actionable
- [ ] `opencode.json` commands are registered
- [ ] `AGENTS.md` documentation updated
- [ ] Skill SKILL.md follows frontmatter convention
- [ ] Cross-platform: no shell-specific commands
