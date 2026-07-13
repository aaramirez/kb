---
title: "Definition of Done"
tags:
  - sf/practicas
  - type/gua
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
aliases:
  - "DoD"
  - "Done checklist"
  - "Team agreement"
related:
  -  "./06-code-review-best-practices|Code review"
  -  "./09-git-conventions|Git conventions"
  -  "./01-coding-standards|Coding standards"
  -  "./03-test-driven-development|TDD"
  -  "./04-behavior-driven-development|BDD"
  -  "./07-documentacion-tecnca|Documentation"
  -  "./11-definition-of-done|Refactoring"
  -  "../03-Procesos/agile-methodology|Agile Methodology"
  -  "../06-Metricas/velocity-metrics|Velocity"
  -  "../01-Fundamentos/collaboration-basics|Collaboration"
  -  "../05-Herramientas/jira-workflows|Jira workflows"
  -  "../05-Herramientas/github-projects|GitHub projects"
  -  "../02-Estructura/README|Structure"
  -  "./08-api-design-standards|API Standards"
  -  "./08-api-design-standards|API Standards"
  -  "./12-observabilidad-practicas|Observabilidad"
  -  "./14-chaos-engineering|Chaos Engineering"
category: "Prácticas y estándares"
---


# Definition of Done

## What is DoD?

Definition of Done is a shared agreement within the team on what it means for a work item to be considered complete. Team defines it together.

## Standard object checklist

### For every story/PR:

| Requirement | Status |
|-------------|--------|
| Code compiles | ✓ |
| Unit tests passed | ✓ |
| Linting passes | ✓ |
| Integration/API tests passed | ✓ |
| Code reviewed and approved | ✓ |
| Documentation updated ADR or README | ✓ |
| Branch name follows convention (.e.g feat/xxx) | ✓ |
| Conventional commit message | ✓ |
| PR description is clear | ✓ |
| PR is ≤ 400 lines | ✓ |
| Feature flag added (if togglable) | ✓ |
| Logging added for observability | ✓ |
| Monitoring metrics/dashboards set | ✓ |

### For a feature:

| Requirement | Status |
|-------------|--------|
| Acceptance criteria met | ✓ |
| Tests pass in CI | ✓ |
| PO reviewed (if possible) | ✓ |
| No open PR comments | ✓ |
| Breaking changes documented | ✓ |

## DoD by artifact type

| Artifact | DoD |
|----------|-----|
| Epic | DoD defined, all stories accepted, PO signoff |
| Feature | DoD Defined, all stories accepted, PO signoff |
| Story | DoD checklist complete, 100% tests passing |
| PR | All check items complete + reviewed/master approved |
| Bug | reproduced test added, fix verified on staging |

## How to create a DoD

1. Hold a team workshop
2. Review past incomplete items
3. Define the minimum criteria
4. Get agreement from whole dev team and product (PO)
5. Write it into the repo (DOCUMENTATION)
6. reference in PR template

## why DoD matters

- Eliminates "finished but not done" syndrome
- Creates clear expectations for developers and stakeholders
- Increases transparency about progress
- Reduces the number of open tickets

## Anti-pattern

| Anti-pattern | Issue |
|--------------|-------|
| DoD is ignored | Team does not enforce it |
| DoD is too long | Creates friction, becomes noise |
| DoD is not reviewed | As the project grows, the DoD must adapt |
| DoD is owned only by dev | PO and QA must be inside DoD decisions |

## DoD and technical debt

Related: [[10-refactoring-continuo|Refactoring continuo]]. Without DoD, you can't manage tech debt.

## See also

- [Code Review](./06-code-review-best-practices) – DOD for PRs
- [Git conventions](./09-git-conventions) – Branch naming, commit style
- [Observability](./12-observabilidad-practicas) – Dr DoD condition for monitoring
- [Feature flags](./13-feature-flags) – DoD condition for toggled features
