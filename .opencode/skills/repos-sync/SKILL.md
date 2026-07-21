---
name: repos-sync
description: Synchronize reference repositories for knowledge sharing and dependency management.
license: MIT
scripts:
  - repos-sync.js
---

# repos-sync

Manage reference repositories defined in `repos.json`. Clone and update external repos into the `references/` directory for knowledge sharing and dependency management.

## Configuration

Reference repos are defined in `repos.json` at the project root:

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

| Field | Required | Default | Description |
|-------|----------|---------|-------------|
| `name` | yes | — | `owner/repo` format, used as identifier and directory name |
| `url` | yes | — | Git clone URL (https) |
| `branch` | no | `main` | Branch to track |
| `description` | no | — | Human-readable description |

## Usage

### Clone repos

```bash
node .opencode/scripts/repos-sync.js get all          # clone all
node .opencode/scripts/repos-sync.js get owner/repo   # clone one
```

### Update repos

```bash
node .opencode/scripts/repos-sync.js update all       # update all
node .opencode/scripts/repos-sync.js update owner/repo # update one
```

### List repos

```bash
node .opencode/scripts/repos-sync.js list
```

## Options

| Flag | Description |
|------|-------------|
| `--dry-run` | Show actions without executing |
| `--verbose` | Show git output |
| `--help` | Show help |

## Behavior

- Shallow clones (`--depth 1`) for speed and minimal storage
- Skips repos that are already cloned (use `update` to refresh)
- Continues batch operations on individual failures
- Reports summary: ok, skipped, failed
