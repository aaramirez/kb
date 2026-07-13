---
title: "Convenciones de Git"
tags:
  - sf/practicas
  - type/guia
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Prácticas y Estándares"
aliases:
  - "Git conventions"
  - "conventional commits"
  - "branching"
  - "PR templates"
related:
  -  "./06-code-review-best-practices|Code Review"
  -  "./11-definition-of-done|DoD"
  -  "./01-coding-standards|Coding Standards"
  -  "./03-test-driven-development|TDD"
  -  "./04-behavior-driven-development|BDD"
  -  "../03-Procesos/ci-cd-pipelines|CI/CD"
  -  "../05-Herramientas/gh-actions|GitHub actions"
  -  "../06-Metricas/velocity-metrics|Velocity metrics"
  -  "../01-Fundamentos/version-control-basics|Version control basics"
  -  "./07-documentacion-tecnca|Documentation"

---

# Git Conventions

## Branches

### naming naming

| Branch type | naming |
|-------------|----------|
| feature | feat/IO-100-login          |
| bugfix | fix/IO-201-fix-npe         |
| release| release/v2.1.0             |
| hotfix  | hotfix/critical-patch    |
| chore   | chore/update-deps           |

### Branching lifecycle

```
main ← release/v2.0.0 ← feat/I0-100
```

1. feat branch from main.
2. PR to main.
3. Squash merge with conventional commit.
4. Delete feature branch.

## Conventional Commits

```
<type>(<scope>): <description>

[optional body]
[optional footers]
```

### Types

| Type | Description |
|------|------------|
| feat | A new feature |
| fix | A bug fix |
| docs | Documentation |
| style | Formatting |
| refactor | Code improvement|
| test | Adding/fixing tests|
| chore| Routine tasks|
| perf | Performance improvement |
| ci | CI/CD changes|
| build | Build/deps|

### Examples

```
feat(auth): add support for JWT-based API key
fix(stripe): address NPE when customer is undefined
feat(!): drop support for node 12
docs(readme): add Quick start

BREAKING: Support removed for node 12
```

## PR templates

Template file at `.github/PULL_REQUEST_TEMPLATE.md`:

```markdown
## Description

## Related Issue

## Type of Change
- [ ] feat
- [ ] fix
- [ ] docs
- [ ] refactor
- [ ] test

## Testing

## Checklist
- [ ] Code follows coding standards
- [ ] Tests pass
- [ ] Documentation updated
- [ ] This PR has <= 400 lines
```

Related: [[06-code-review-best-practices]]

## Merge strategies

| Strategy | Used for |
|----------|----------|
| Squash merge | Feature branches |
| Merge commit | release merges |
| rebase | update feature branches |

## Git hooks (pre-commit)

| Hook | Action |
|------|--------|
| pre-commit | Lint + format |
| pre-commit | Run unit tests |
| commit-msg | Validate conventional commit |

## Git flow Summary

| Action | command |
|--------|---------|
| start feature | \`git checkout -b feat/IO-100-description\`|
| finish feature | PR from feat to main (squash)|
| fix a bug | fix/IO-xxx-description|
| create release | release/vMAJOR.MINOR.PATCH|

## Related

- [[11-definition-of-done|DoD checklist]]
- [[06-code-review-best-practices|Code review]]
