---
description: Update reference repositories already cloned in references/
---

Update the repository `$ARGUMENTS` with the latest changes from remote.

## Process

1. Read `repos.json` from the project root
2. If `$ARGUMENTS` is `all`, pull latest for every cloned repo
3. If `$ARGUMENTS` is a repo name, update that specific repo
4. Report results: updated, no changes, failed

## Usage

- `/updaterepo all` — update all cloned repos
- `/updaterepo owner/repo` — update a specific repo by name

## Script

Run the repos-sync script:

```bash
node .opencode/scripts/repos-sync.js update $ARGUMENTS
```

## Error Handling

- If a repo is not cloned, suggest running `/getrepo` first
- If a pull fails (diverged history, etc.), report the error
- If `repos.json` is missing, report the error clearly
