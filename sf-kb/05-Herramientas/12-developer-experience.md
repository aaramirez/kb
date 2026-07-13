---
title: "Developer Experience (DX)"
tags:
  - sf/herramientas
  - type/framework
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Herramientas y Tecnología"
aliases:
  - "DX"
  - "Developer Portal"
  - "Internal Developer Platform"
related:
  - "[[../04-Practicas/README|Prácticas]]"
  - "[[../06-Metricas/README|Métricas]]"
  - "[[13-legacy-modernizacion]]"
---

## Visión General

Developer Experience (DX) mide la efectividad y satisfacción del development workflow. Herramientas DX crean Internal Developer Platforms (IDPs) que simplifican la complejidad operativa, permitiendo a developers enfocarse en product development.

## DX Maturity Model

| Level | Name | Characteristics |
|-------|------|-----------------|
| **1** | Ad-hoc | Cada developer configura su entorno |
| **2** | Standardized | Tools y processes documentados |
| **3** | Self-service | Developers provision resources sin tickets |
| **4** | Platform | IDP con golden paths |
| **5** | Optimized | AI-enhanced, continuous improvement |

Referencia: [[../01-Fundamentos/README|Levels of engineering maturity]]

## Internal Developer Platforms

### Backstage (Spotify)

| Aspecto | Detalle |
|---------|---------|
| **Creator** | Spotify (CNCF incubating) |
| **Type** | Developer portal framework |
| **Tech Stack** | React, TypeScript |
| **Features** | Service catalog, scaffolding, docs |
| **Plugins** | 100+ community plugins |
| **Cost** | Open-source, free |

**Core Features**:

| Feature | Descripción |
|---------|-------------|
| **Software Catalog** | Centralized service registry |
| **Software Templates** | Project scaffolding (golden paths) |
| **TechDocs** | Auto-generated documentation |
| **Search** | Unified search across services |
| **API Documentation** | OpenAPI, AsyncAPI registry |

**Plugin Ecosystem**:
- Kubernetes plugin
- CI/CD (GitHub Actions, Jenkins)
- Monitoring (Grafana, Datadog)
- Security (Snyk, Trivy)
- Cost management (Kubecost)

### Port

| Aspecto | Detalle |
|---------|---------|
| **Type** | Developer portal (SaaS) |
| **Approach** | No-code platform builder |
| **Features** | Self-service actions, dashboards, scorecards |
| **Integration** | GitHub, K8s, Terraform, +more |
| **Pricing** | Free tier, Team, Enterprise |

**Features clave**:
- **Self-service actions**: Developers provision infra/resources
- **Scorecards**: Track service maturity
- **Dashboards**: Real-time visibility
- **Automation**: Workflow automation

### Cortex

| Aspecto | Detalle |
|---------|---------|
| **Type** | Service catalog + scorecards |
| **Focus** | Reliability and ownership |
| **Features** | Catalog, scorecards, incidents, docs |

### OpsLevel

| Aspecto | Detalle |
|---------|-------------|
| **Type** | Service ownership platform |
| **Focus** | Standards compliance |
| **Features** | Catalog, checks, ownership |

## Comparison Matrix

| Feature | Backstage | Port | Cortex | OpsLevel |
|---------|-----------|------|--------|----------|
| Open-source | ✅✅ | ❌ | ❌ | ❌ |
| Self-hosted | ✅✅ | ❌ (SaaS) | ❌ (SaaS) | ❌ (SaaS) |
| Customizability | ✅✅ | ✅ | ⚙️ | ⚙️ |
| Self-service | ✅ | ✅✅ | ⚙️ | ✅ |
| Scorecards | Plugin | ✅✅ | ✅✅ | ✅✅ |
| Learning curve | Alta | Baja | Baja | Baja |
| Maintenance | ❌ Alto | ✅ | ✅ | ✅ |
| Plugin ecosystem | ✅✅ | ✅ | ⚙️ | ⚙️ |

## Golden Paths

### Qué son

Golden paths son camino pre-aprobados y facilitados para tareas comunes:
- **Create new service**: Template con CI/CD, monitoring, docs
- **Add API endpoint**: Scaffold con validación, tests, docs
- **Deploy to production**: Self-service con approvals
- **Onboard new developer**: Automated setup

### Implementación

```yaml
# Backstage template example
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: microservice-template
  title: New Microservice
spec:
  owner: platform-team
  type: service
  steps:
    - id: fetch
      action: fetch:template
      input:
        url: ./template
    - id: create-github-repo
      action: github:repo:create
    - id: setup-ci
      action: github:actions:workflow
    - id: register-catalog
      action: catalog:register
```

## Developer Portals vs CLIs vs Scripts

| Approach | Pros | Cons |
|----------|------|------|
| **Portal (Backstage)** | Visual, self-service, discoverable | Complex setup, maintenance |
| **CLI tools** | Fast, scriptable, composable | Learning curve, fragmented |
| **Scripts** | Quick to create, simple | No governance, hard to maintain |
| **API platform** | Programmatic, automatable | Needs client tooling |

**Recommendation**: Start with CLI/scripts, graduate to portal as team grows.

## DX Metrics

| Metric | Description | Target |
|--------|-------------|--------|
| **Time to first commit** | New dev → first PR | < 1 day |
| **Time to deploy** | Code change → production | < 1 hour |
| **Onboarding time** | New hire → productive | < 1 week |
| **Developer satisfaction** | Survey score (eNPS) | > 8/10 |
| **Cognitive load** | Subjective complexity | Decreasing |
| **Environment setup time** | Clone → running locally | < 10 min |

Referencia: [[../06-Metricas/README|DX metrics]]

## DORA Metrics Integration

DX tools should improve DORA metrics:

| DORA Metric | DX Tool Impact |
|-------------|----------------|
| Deployment frequency | Self-service deploys |
| Lead time for changes | Golden paths, templates |
| Change failure rate | Automated quality gates |
| Mean time to recovery | Incident response tools |

Referencia: [[../06-Metricas/README|DORA metrics]]

## Implementation Roadmap

### Phase 1: Foundation (Month 1-2)
1. Audit current developer pain points
2. Document existing processes
3. Set up basic service catalog (even spreadsheet)
4. Measure baseline DX metrics

### Phase 2: Standardize (Month 3-4)
1. Create golden path templates
2. Standardize tooling choices
3. Document best practices
4. Set up CI/CD templates

### Phase 3: Self-service (Month 5-8)
1. Deploy Backstage or Port
2. Implement self-service actions
3. Connect to infrastructure providers
4. Add monitoring dashboards

### Phase 4: Optimize (Ongoing)
1. Measure DX metrics
2. Iterate based on feedback
3. Add AI-powered suggestions
4. Expand self-service catalog

## Common DX Anti-Patterns

| Anti-Pattern | Impact | Solution |
|-------------|--------|----------|
| Tool sprawl | Confusion, context switching | Consolidate, standardize |
| No golden paths | Inconsistency, wasted time | Templates, conventions |
| Manual provisioning | Bottlenecks, delays | Self-service platform |
| No feedback loop | Stagnant DX | Metrics, surveys |
| Over-engineering | Complexity > value | Start simple, iterate |

## Integración

- **Practices**: [[../04-Practicas/README|Development practices]]
- **Metrics**: [[../06-Metricas/README|Measuring DX]]
- **CI/CD**: [[02-herramientas-ci-cd]] — CI/CD templates
- **Containers**: [[06-container-kubernetes]] — Developer environments
- **Modernization**: [[13-legacy-modernizacion]] — DX in legacy migration
- **AI**: [[09-ai-coding-assistants]] — AI as DX component
