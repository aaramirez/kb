---
title: "Gestión de Repositorios"
tags:
  - sf/herramientas
  - type/herramienta
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Herramientas y Tecnología"
aliases:
  - "Source Code Management"
  - "SCM"
  - "Code Hosting"
related:
  - "[[../03-Procesos/README|Procesos]]"
  - "[[02-herramientas-ci-cd]]"
  - "[[../01-Fundamentos/README|Fundamentos]]"
---

## Visión General

Los repositorios son el sistema central de verdad para código fuente. La plataforma elegida define flujos de [[../03-Procesos/README|code review]], [[02-herramientas-ci-cd|CI/CD integration]], y colaboración del equipo.

## Plataformas Principales

### GitHub

| Aspecto | Detalle |
|---------|---------|
| **Users** | 100M+ developers |
| **Repos** | 420M+ repositorios |
| **Pricing** | Free, Team ($4/user/mes), Enterprise ($21/user/mes) |
| **CI/CD** | GitHub Actions (ver [[02-herramientas-ci-cd]]) |
| **Package Registry** | GitHub Packages (npm, Docker, Maven) |
| **Security** | Dependabot, Code Scanning, Secret scanning |
| **AI** | GitHub Copilot integration |

**Features Clave**:
- Branch protection rules
- CODEOWNERS
- Required reviewers
- Status checks
- Auto-merge
- Pull request templates
- Issue templates
- GitHub Projects (project management)
- GitHub Advanced Security

### GitLab

| Aspecto | Detalle |
|---------|---------|
| **Modelo** | Self-hosted + SaaS |
| **Pricing** | Free, Premium ($29/user/mes), Ultimate ($99/user/mes) |
| **CI/CD** | GitLab CI/CD nativo |
| **Security** | SAST, DAST, dependency scanning, container scanning |
| **Wiki** | Built-in |
| **Package Registry** | Built-in (multiple formats) |
| **Milestone** | Integrated DevSecOps |

**Features Clave**:
- All-in-one DevOps platform
- Auto DevOps
- Review Apps
- Environment management
- Feature flags
- Value stream analytics

### Bitbucket

| Aspecto | Detalle |
|---------|---------|
| **Owner** | Atlassian |
| **Pricing** | Free (5 users), Standard ($3/user/mes), Premium ($6/user/mes) |
| **CI/CD** | Bitbucket Pipelines |
| **Integration** | Deep Jira, Trello integration |
| **Branch Permissions** | Granular |
| **Code Insights** | ✅ |

**Features Clave**:
- Jira integration (commit linking)
- Smart mirroring
- IP whitelisting (Premium)
- Merge checks

## Comparison Matrix

| Feature | GitHub | GitLab | Bitbucket |
|---------|--------|--------|-----------|
| Free private repos | ✅ | ✅ | ✅ |
| Built-in CI/CD | ✅ | ✅✅ | ✅ |
| Security scanning | ✅ | ✅✅ | ⚙️ |
| Container registry | ✅ | ✅✅ | ✅ |
| Wiki | ✅ | ✅✅ | ✅ |
| Project management | ✅ | ✅✅ | ⚙️ (Jira) |
| Self-hosted | ✅ (GHES) | ✅ | ✅ |
| AI features | ✅✅ (Copilot) | ✅ | ⚙️ |
| Marketplace | ✅✅ | ✅ | ✅ |
| Learning curve | Baja | Media | Baja |

## Branch Protection Rules

### Configuración Recomendada

```yaml
# Configuración mínima para production repos
branch_protection:
  main:
    required_reviews: 2
    dismiss_stale: true
    require_code_owner_reviews: true
    required_status_checks:
      - ci/build
      - ci/test
      - security/scan
    enforce_admins: true
    restrict_pushes: true
    allow_force_pushes: false
    allow_deletions: false
```

### Estrategias de Branching

| Estrategia | Uso | Branches |
|------------|-----|----------|
| **Trunk-based** | Equipos ágiles, CI/CD maduro | main + short-lived feature branches |
| **GitFlow** | Release cycles largos | main, develop, feature/*, release/*, hotfix/* |
| **GitHub Flow** | Deploy continuo | main + feature branches |
| **GitLab Flow** | Environment-based | main + environment branches |

Referencia: [[../03-Procesos/README|Estrategias de branching]]

## CODEOWNERS

```
# Ejemplo CODEOWNERS
*.js        @frontend-team
*.java      @backend-team
*.tf        @platform-team
/docs/      @tech-writing
/Dockerfile @devops-team
*.test.js   @qa-team
```

**Beneficios**:
- Auto-assign reviewers por path
- Required reviews de owners específicos
- Escalación automática de conocimiento
- Integra con [[04-herramientas-testing|quality gates]]

## Features de Security

### Dependabot / Renovate
- Auto-update dependencias
- Security alerts
- Version management

### Secret Scanning
- Detecta secrets committed accidentalmente
- Pre-commit hooks como primera línea
- GitHub push protection

### Code Scanning (SAST)
- CodeQL en GitHub
- Semgrep integration
- Referencia: [[11-ai-code-review|AI Code Review]]

## Gestión de Monorepos

### Herramientas

| Herramienta | Tipo | Use Case |
|-------------|------|----------|
| Nx | Build system | JavaScript/TypeScript monorepos |
| Turborepo | Build system | JS/TS, caching inteligente |
| Bazel | Build system | Polyglot, escalable |
| Lerna | Package management | npm monorepos |
| Rush | Package management | Enterprise npm |

### Decisiones Monorepo vs Multirepo

| Factor | Monorepo | Multirepo |
|--------|----------|-----------|
| Deploy atómico | ✅ | ❌ |
| Code sharing | ✅✅ | ⚙️ |
| CI complexity | Alta | Baja |
| Team isolation | Baja | ✅✅ |
| Tooling cost | Alto | Bajo |

## Métricas de Repositorio

| Métrica | Target | Herramienta |
|---------|--------|-------------|
| PR review time | < 4 horas | GitHub Insights |
| PR size | < 400 LOC | Guidelines |
| Code churn | < 20% | Analytics |
| Bus factor | ≥ 2 | CODEOWNERS analysis |
| Test coverage | > 80% | [[04-herramientas-testing]] |

## Integración CI/CD

- Configurar [[02-herramientas-ci-cd|pipelines]] en cada push
- Status checks obligatorios antes de merge
- Auto-deploy a staging tras merge a main
- Referencia: [[03-Procesos|Procesos de deployment]]

## Recursos

- GitHub Docs: https://docs.github.com
- GitLab Docs: https://docs.gitlab.com
- Atlassian Git Tutorials: https://www.atlassian.com/git
