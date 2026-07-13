---
title: "Internal Developer Platform (IDP)"
tags:
  - sf/estructura
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Estructura y Organización"
aliases:
  - "IDP"
  - "Internal Developer Platform"
  - "Developer Platform"
related:
  - "[[../02-Estructura/13-arbol-deportes|Team Topologies]]"
  - "[[../01-Fundamentos/13-plataformas-ingenieria|Plataformas de Ingeniería]]"
  - "[[../09-DevOps-Infra/README|DevOps e Infra]]"
  - "[[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]"
---

# Internal Developer Platform (IDP)

Una IDP es un layer de abstractions que permite a los desarrolladores provisionar y gestionar infraestructura de forma self-service, sin entender la complejidad subyacente.

## ¿Qué es una Internal Developer Platform?

Una IDP es el **punto único de interacción** entre los desarrolladores y toda la infraestructura, tooling, y servicios que necesitan para hacer su trabajo.

> "An Internal Developer Platform is the sum of all the tech and tools that a platform team glues together to build golden paths that reduce cognitive load for developers." — Humanitec

## Componentes de una IDP

### Core Components

| Componente | Qué hace | Herramientas |
|---|---|---|
| **Developer Portal** | Interfaz unificada para todo | Backstage, Port, Cortex |
| **Service Catalog** | Registry de todos los servicios | Backstage, Service Catalog |
| **Golden Paths** | Templates pre-aprobados para nuevos proyectos | Backstage Templates, Cookiecutter |
| **CI/CD** | Build, test, deploy pipelines | GitHub Actions, GitLab CI, ArgoCD |
| **Infrastructure** | Provisioning de cloud resources | Terraform, Pulumi, Crossplane |
| **Secrets Management** | Gestión de secrets y config | Vault, AWS Secrets Manager |
| **Observability** | Logs, metrics, traces unificados | Grafana, Datadog, New Relic |
| **Service Mesh** | Networking entre servicios | Istio, Linkerd, Cilium |

### Developer Experience Layer

| Capa | Función | Ejemplo |
|---|---|---|
| **CLI tools** | Comandos para interactuar con la plataforma | `platform create-service`, `platform deploy` |
| **API** | Programmatic access a la plataforma | REST/GraphQL API |
| **UI** | Dashboard web | Backstage, custom portal |
| **Git integration** | Infra as code, PR-based workflows | Terraform PRs, ArgoCD sync |

## Backstage: El Estándar de la Industria

### ¿Qué es Backstage?

Backstage es un **developer portal** open source creado por Spotify y donado a la CNCF.

| Aspecto | Detalle |
|---|---|
| **Propósito** | Unificar tooling, servicios, y documentación |
| **Extensible** | Plugin system para customizar |
| **Adoptado por** | Spotify, Netflix, American Airlines, many more |
| **CNCF Status** | Incubating project |

### Componentes de Backstage

```
Backstage
├── Software Catalog
│   ├── Services (APIs, websites, libraries)
│   ├── Resources (databases, S3 buckets)
│   ├── Components (microservices)
│   └── Systems (group of components)
├── Software Templates (Golden Paths)
│   ├── Create new service
│   ├── Create new library
│   ├── Create new documentation
│   └── Custom templates
├── TechDocs
│   ├── Documentation as code
│   ├── Auto-generated from markdown
│   └── Integrated con service catalog
├── Tech Radar
│   ├── Visualización de tecnología adopt/trial/assess/hold
│   └── Contributions from engineers
└── Plugins (100+)
    ├── Kubernetes
    ├── GitHub Actions
    ├── PagerDuty
    ├── Datadog
    └── Custom plugins
```

### Backstage vs Otras Soluciones

| Herramienta | Tipo | Pricing | Customizable |
|---|---|---|---|
| **Backstage** | Open source portal | Free (self-hosted) | Highly |
| **Port** | SaaS portal | Paid | Moderately |
| **Cortex** | SaaS service catalog | Paid | Moderately |
| **OpsLevel** | SaaS platform | Paid | Moderately |
| **Custom** | Build your own | Dev cost | Fully |

## Build vs Buy

### Build (Custom IDP)

| Aspecto | Detalle |
|---|---|
| **Ventajas** | Full control,定制 exact needs, no vendor lock-in |
| **Desventajas** | High dev cost (2-4 engineers full-time), maintenance burden |
| **Cuándo** | Org con requirements muy específicos, budget alto |
| **Timeline** | 6-12 months para MVP |

### Buy (SaaS Solutions)

| Aspecto | Detalle |
|---|---|
| **Ventajas** | Fast setup, maintained by vendor, support |
| **Desventajas** | Less custom, ongoing cost, vendor dependency |
| **Cuándo** | Org want fast time-to-value, standard needs |
| **Timeline** | 2-4 weeks para setup |

### Hybrid (Backstage + Custom Plugins)

| Aspecto | Detalle |
|---|---|
| **Ventajas** | Open source base, customizable, large community |
| **Desventajas** | Still need dev effort for plugins, Backstage learning curve |
| **Cuándo** | Most organizations — the sweet spot |
| **Timeline** | 2-3 months para useful MVP |

### Framework de Decisión

```
¿Tienes un equipo de platform dedicado?
├── Sí (3+ engineers)
│   ├── ¿Requirements estándar? → Backstage + plugins
│   └── ¿Requirements únicos? → Custom IDP
├── No
│   ├── ¿Budget para SaaS? → Port, Cortex, OpsLevel
│   └── ¿Budget limitado? → Backstage + managed hosting
└── ¿Quieres empezar rápido?
    ├── Sí → SaaS o Backstage con templates básicos
    └── No → Custom IDP
```

## Golden Paths

Los Golden Paths son **templates pre-aprobados** que guían a los desarrolladores por el camino correcto.

### Ejemplo: Golden Path para Nuevo Microservicio

```yaml
# backstage/template.yaml
apiVersion: scaffolder.backstage.io/v1beta3
kind: Template
metadata:
  name: microservice-template
  description: Create a new microservice with best practices
  tags:
    - microservice
    - java
    - spring-boot
spec:
  owner: platform-team
  type: service
  steps:
    - id: fetch-template
      action: fetch:template
      input:
        url: ./template
    - id: create-repo
      action: github:repo:create
      input:
        name: ${{ parameters.name }}
    - id: setup-cicd
      action: github:actions:workflow
      input:
        workflowPath: .github/workflows/ci.yml
    - id: register-catalog
      action: catalog:register
      input:
        catalogInfoPath: /catalog-info.yaml
```

**Lo que el developer obtiene:**
- Repo con estructura estándar
- CI/CD pipeline configurado
- Service catalog entry
- Observability hooks
- Documentation template
- Security scanning integrado

## Métricas de una IDP

| Métrica | Target | Cadencia |
|---|---|---|
| Developer satisfaction (DX score) | > 4/5 | Quarterly |
| Time to first deploy (new service) | < 1 día | Per service |
| Self-service ratio | > 80% | Monthly |
| Platform adoption rate | > 90% del equipo | Monthly |
| Golden path usage | > 70% de nuevos proyectos | Monthly |
| Time to onboard (new engineer) | < 5 días | Per hire |

## Referencias

- [[../02-Estructura/13-arbol-deportes|Team Topologies]]
- [[../01-Fundamentos/13-plataformas-ingenieria|Plataformas de Ingeniería]]
- [[../02-Estructura/12-onboarding-equipo|Onboarding]]
- [[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]
- [[../09-DevOps-Infra/README|DevOps e Infra]]
- [[../05-Herramientas/README|Herramientas]]
