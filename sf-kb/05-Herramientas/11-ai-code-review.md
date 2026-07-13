---
title: "AI en Code Review"
tags:
  - sf/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Herramientas y Tecnología"
aliases:
  - "AI Code Review"
  - "Automated Code Review"
  - "AI PR Review"
related:
  - "[[09-ai-coding-assistants]]"
  - "[[10-ai-testing-tools]]"
  - "[[../04-Practicas/README|Code Review Practices]]"
---

## Visión General

AI code review tools automatizan parte del [[../04-Practicas/README|code review process]], detectando bugs, security issues, y code smells antes de que humanos revisen. Complementan, no reemplazan, la revisión humana.

## Herramientas Principales

### CodeRabbit

| Aspecto | Detalle |
|---------|---------|
| **Type** | AI code review bot |
| **Integration** | GitHub PR, GitLab MR |
| **Approach** | LLM-powered review with context |
| **Features** | PR review, code suggestions, security |
| **Pricing** | Free tier, Pro ($12/mes) |
| **Learning** | Learns from team's feedback |

**Features clave**:
- **Line-by-line review**: Comentarios específicos por línea
- **Walk-through**: Resumen ejecutivo del PR
- **Security analysis**: Detección de vulnerabilities
- **Style enforcement**: Consistencia de código
- **Fix suggestions**: Propone correcciones directas
- **Chat interactivity**: Ask follow-up questions

### Qodo (formerly CodiumAI)

| Aspecto | Detalle |
|---------|---------|
| **Type** | AI code analysis + review |
| **Approach** | Behavior-focused analysis |
| **Features** | Test generation, code review, PR agent |
| **Integration** | GitHub, IDE plugins |
| **Pricing** | Free, Pro |

**Features clave**:
- **PR Agent**: Automated review en GitHub/GitLab
- **Behavior coverage**: Analiza completeness del código
- **Code suggestions**: Propuestas de mejora
- **Test suggestions**: Genera tests alongside review
- **Multiple review types**: Security, performance, style

### SonarQube (with AI features)

| Aspecto | Detalle |
|---------|---------|
| **Type** | Static analysis + AI |
| **Model** | Self-hosted + Cloud |
| **Rules** | 5,000+ rules (multiple languages) |
| **AI Features** | Smart fixes, code explanations |
| **Integration** | CI/CD, IDE, GitHub |
| **Pricing** | Community (free), Developer ($150/yr), Enterprise |

**Features clave**:
- **Quality gates**: Pass/fail en CI/CD
- **Security hotspots**: Prioritized security issues
- **Code smells**: Maintainability analysis
- **Coverage tracking**: Test coverage trends
- **AI-powered fixes**: Suggests remediation

### Codacy

| Aspecto | Detalle |
|---------|---------|
| **Type** | Automated code review |
| **Languages** | 40+ languages |
| **Features** | Static analysis, security, patterns |
| **Integration** | GitHub, GitLab, Bitbucket |
| **Pricing** | Free tier, Pro, Enterprise |

### DeepSource

| Aspecto | Detalle |
|---------|---------|
| **Type** | Automated code review + fix |
| **Features** | 130+ analyzers, auto-fix PRs |
| **Integration** | GitHub, GitLab |
| **Autofix** | Auto-generated fix PRs |
| **Pricing** | Free for open-source, paid for teams |

### Amazon CodeGuru

| Aspecto | Detalle |
|---------|---------|
| **Type** | AI code review (AWS) |
| **Focus** | Performance, security, best practices |
| **Languages** | Java, Python |
| **Integration** | GitHub, CodeCommit, Bitbucket |

## Comparison Matrix

| Feature | CodeRabbit | Qodo | SonarQube | Codacy | DeepSource |
|---------|-----------|------|-----------|--------|------------|
| AI review | ✅✅ | ✅✅ | ✅ | ⚙️ | ⚙️ |
| Security analysis | ✅ | ✅ | ✅✅ | ✅ | ✅ |
| Auto-fix suggestions | ✅ | ✅ | ⚙️ | ⚙️ | ✅✅ |
| Test generation | ❌ | ✅✅ | ❌ | ❌ | ❌ |
| Learning from team | ✅ | ⚙️ | ⚙️ | ❌ | ❌ |
| Self-hosted | ❌ | ✅ | ✅✅ | ✅ | ❌ |
| Free tier | ✅ | ✅ | ✅ | ✅ | ✅ |
| Multi-language | ✅ | ⚙️ | ✅✅ | ✅✅ | ✅✅ |
| PR integration | ✅✅ | ✅✅ | ⚙️ | ✅ | ✅ |

## Code Review Workflow with AI

```
Developer pushes code
  → AI review (automatic)
    → Security scan
    → Style check
    → Logic review
    → Test suggestions
  → Human review (focused on architecture, design, business logic)
  → Merge
```

### Best Practices

1. **AI first, human after**: Let AI catch obvious issues first
2. **Configure rules**: Customize AI rules for team conventions
3. **Focus human review**: Architecture, design patterns, business logic
4. **Feedback loop**: Train AI with team preferences
5. **Don't skip human review**: AI catches syntax; humans catch design

## Integration with Code Review Process

### GitHub Pull Request

```yaml
# .github/workflows/review.yml
name: AI Review
on: [pull_request]
jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: coderabbit-ai/ai-pr-reviewer@latest
        with:
          review_comment: true
```

### Pre-commit Integration

```yaml
# .pre-commit-config.yaml
repos:
  - repo: https://github.com/codium-ai/pr-agent
    hooks:
      - id: pr-agent
```

## Impact Metrics

| Metric | Without AI | With AI | Improvement |
|--------|-----------|---------|-------------|
| Review turnaround | 24-48h | 2-4h | 80%+ faster |
| Bugs caught in review | Baseline | +40-60% | More caught early |
| Security issues | Post-deploy | Pre-merge | Shift-left |
| Reviewer fatigue | High | Medium | Reduced noise |
| Time to merge | 3-5 days | 1-2 days | 50%+ faster |

Referencia: [[../06-Metricas/README|Review metrics]]

## Security Code Review

| Tool | Type | Focus |
|------|------|-------|
| **Snyk Code** | SAST | Vulnerabilities |
| **Semgrep** | SAST | Pattern-based rules |
| **CodeQL** | SAST | Query-based analysis |
| **Trivy** | Container | Image vulnerabilities |
| **OWASP ZAP** | DAST | Runtime security |

Referencia: [[04-Practicas/README|Security practices]]

## Decision Framework

```
Quick wins for small team?       → CodeRabbit (easy setup)
Enterprise with test gen?        → Qodo (PR agent + tests)
Full quality platform?           → SonarQube + AI features
Open-source friendly?            → DeepSource + Semgrep
Security-focused?                → SonarQube + Snyk
All-in-one?                      → CodeRabbit + SonarQube
```

## Adopting AI Code Review

### Phase 1: Pilot (1-2 weeks)
1. Install on selected repos
2. Configure team rules
3. Measure false positive rate

### Phase 2: Team rollout (2-4 weeks)
1. Train team on using AI suggestions
2. Establish feedback loop
3. Tune configuration

### Phase 3: Organization (1-3 months)
1. Rollout to all repos
2. Integrate with quality gates
3. Report metrics to leadership
4. Iterate on configuration

Referencia: [[14-evaluacion-herramientas|Evaluación framework]]

## Integración

- **AI Assistants**: [[09-ai-coding-assistants]] — Code generation context
- **Testing**: [[10-ai-testing-tools]] — Generate tests during review
- **CI/CD**: [[02-herramientas-ci-cd]] — Quality gates in pipeline
- **Practices**: [[../04-Practicas/README|Code review practices]]
- **Metrics**: [[../06-Metricas/README|Review quality metrics]]
