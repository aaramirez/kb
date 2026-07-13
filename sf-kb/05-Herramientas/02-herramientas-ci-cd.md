---
title: "Herramientas CI/CD"
tags:
  - sf/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Herramientas y Tecnología"
aliases:
  - "CI/CD Tools"
  - "Continuous Integration"
  - "Continuous Delivery"
related:
  - "[[../03-Procesos/README|Procesos]]"
  - "[[04-herramientas-testing]]"
  - "[[07-iac-terraform]]"
---

## Visión General

CI/CD es el backbone del [[../03-Procesos/README|desarrollo moderno]]. Estas herramientas automatizan build, test y deployment, habilitando [[../04-Practicas/README|prácticas como trunk-based development]] y delivery continuo.

## Arquitectura Típica de un Pipeline

```
Code Push → Build → Unit Tests → Integration Tests → Security Scan → Deploy Staging → E2E Tests → Deploy Prod
```

### Componentes Clave

| Componente | Propósito | Ejemplos |
|------------|-----------|----------|
| **CI Server** | Ejecuta pipelines | Jenkins, GitHub Actions |
| **Artifact Registry** | Almacena builds | Docker Hub, Nexus, JFrog |
| **Secrets Management** | Gestiona credenciales | Vault, AWS Secrets Manager |
| **Notification** | Alerta resultados | Slack, Teams, Email |
| **Infrastructure** | Agents/Runners | Self-hosted, cloud |

## Comparativa de Herramientas CI/CD

### GitHub Actions

| Aspecto | Detalle |
|---------|---------|
| **Hosted** | GitHub cloud runners |
| **Self-hosted** | ✅ runners en cualquier infra |
| **Pricing** | Free tier generoso (2000 min/mes) |
| **YAML** | Workflow syntax |
| **Marketplace** | +20,000 actions |
| **Re-usable** | Composite actions, reusable workflows |
| **Matrix builds** | ✅ nativo |
| **Secrets** | Encrypted, org-level |

```yaml
# Ejemplo workflow básico
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm test
```

**Fortalezas**: Deep integration con GitHub, ecosistema masivo, fácil de empezar.

**Debilidades**: Vendor lock-in a GitHub, debugging workflows puede ser difícil.

### Jenkins

| Aspecto | Detalle |
|---------|---------|
| **Modelo** | Self-hosted, open-source |
| **Plugins** | +1,800 plugins |
| **Configuration** | Jenkinsfile (Groovy DSL) |
| **Distributed** | Master-agent architecture |
| **Pipeline as Code** | ✅ declarative y scripted |
| **Extensibilidad** | Máxima |
| **Learning Curve** | Alto |

**Fortalezas**: Control total, extensibilidad ilimitada, madurez enterprise.

**Debilidades**: Mantenimiento pesado, UI obsoleta, curva de aprendizaje alta.

### GitLab CI/CD

| Aspecto | Detalle |
|---------|---------|
| **Integration** | Nativo en GitLab |
| **Runners** | Shared + specific |
| **Auto DevOps** | Pipeline automático |
| **Container Registry** | Integrado |
| **Security Scanning** | SAST, DAST, dependency scanning incluido |
| **Environments** | Review apps, staging, production |
| **Pricing** | Included in GitLab tiers |

**Fortalezas**: All-in-one platform, security scanning built-in, auto DevOps.

**Debilidades**: Completo pero pesado, self-hosted requiere resources.

### CircleCI

| Aspecto | Detalle |
|---------|---------|
| **Speed** | Caching agresivo, parallelism |
| **Orbs** | Paquetes reutilizables |
| **Docker** | First-class support |
| **SSH Debug** | ✅ interactuar con jobs |
| **Pricing** | Generoso free tier |

**Fortalezas**: Velocidad, debugging SSH, caching inteligente.

**Debilidades**: Menos ecosistema que GitHub Actions.

### ArgoCD (GitOps)

| Aspecto | Detalle |
|---------|---------|
| **Modelo** | GitOps declarativo |
| **Kubernetes** | Native K8s delivery |
| **Sync** | Auto or manual |
| **UI** | Visual diff de estado deseado vs actual |
| **Multi-cluster** | ✅ |

**Fortalezas**: GitOps puro, visual, multi-cluster.

**Debilidades**: Solo Kubernetes, requires GitOps maturity.

## Comparison Matrix

| Feature | GitHub Actions | Jenkins | GitLab CI | CircleCI | ArgoCD |
|---------|---------------|---------|-----------|----------|--------|
| Cloud-hosted | ✅ | ❌ | ✅ | ✅ | ❌ |
| Self-hosted | ✅ | ✅ | ✅ | ✅ | ✅ |
| Free tier | ✅✅ | ✅ | ✅ | ✅ | ✅ |
| Marketplace | ✅✅ | ✅✅ | ✅ | ✅ | ⚙️ |
| Security scanning | ⚙️ | ⚙️ | ✅✅ | ⚙️ | ❌ |
| GitOps | ⚙️ | ⚙️ | ✅ | ❌ | ✅✅ |
| Learning curve | Baja | Alta | Media | Baja | Media |
| Maintenance | Baja | Alta | Media | Baja | Media |
| K8s native | ⚙️ | ⚙️ | ✅ | ✅ | ✅✅ |

## Decision Framework

```
¿Ya usas GitHub?           → GitHub Actions
¿Necesitas control total?  → Jenkins
¿Quieres all-in-one?       → GitLab CI
¿Velocidad es prioridad?   → CircleCI
¿GitOps + Kubernetes?      → ArgoCD
¿Enterprise strict?        → Jenkins o GitLab CI self-hosted
```

## Mejores Prácticas

### Pipeline Design
- **Fast feedback**: Unit tests primero, E2E al final
- **Parallelización**: Dividir jobs independientes
- **Caching**: Dependencies, build artifacts
- **Fail fast**: Stops en primer error significativo

### Security en CI/CD
- **Secrets scanning** en repositorio
- **SAST** en cada pull request
- **Dependency scanning** automático
- **Container scanning** para imágenes Docker
- Referencia: [[04-herramientas-testing|Testing tools]]

### Pipeline como Código
- Versionado con el código fuente
- Revisado en [[../03-Procesos/README|code review]]
- Testeado (self-testing pipelines)
- Documentado con README del repo

## Métricas de CI/CD

| Métrica | Target | Referencia |
|---------|--------|------------|
| Build duration | < 10 min | [[../06-Metricas/README|Métricas]] |
| Deployment frequency | Diaria+ | DORA metrics |
| Lead time for changes | < 1 día | DORA metrics |
| Change failure rate | < 5% | DORA metrics |
| Mean time to recovery | < 1 hora | DORA metrics |

## Integración con Otras Herramientas

- **Testing**: [[04-herramientas-testing]] — Ejecutar tests en pipeline
- **IaC**: [[07-iac-terraform]] — Deploy infra desde CI/CD
- **Containers**: [[06-container-kubernetes]] — Build y push imágenes
- **Monitoring**: [[05-herramientas-monitoring]] — Post-deploy verification
- **AI**: [[09-ai-coding-assistants]] — AI en pipeline (review, test gen)
