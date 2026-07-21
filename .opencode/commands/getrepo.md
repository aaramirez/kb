---
description: Clone reference repositories defined in repos.json into references/
---

Clone the repository `$ARGUMENTS` from `repos.json` into the `references/` directory.

## Process

1. Read `repos.json` from the project root
2. If `$ARGUMENTS` is `all`, clone every repo not already present
3. If `$ARGUMENTS` is a repo name, clone that specific repo
4. Report results: cloned, skipped (already exists), failed

## Usage

- `/getrepo all` — clone all repos from repos.json
- `/getrepo owner/repo` — clone a specific repo by name

## Script

Run the repos-sync script:

```bash
node .opencode/scripts/repos-sync.js get $ARGUMENTS
```

## Error Handling

- If `repos.json` is missing or invalid, report the error clearly
- If a repo is already cloned, skip it and report
- If a network error occurs, report and continue with remaining repos
