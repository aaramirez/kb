---
title: "Plataformas de Ingeniería"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "Internal Developer Platform"
  - "IDP"
  - "Golden Paths"
  - "Backstage"
related:
  - "[[../01-Fundamentos/01-que-es-software-factory|Software Factory]]"
  - "[[../01-Fundamentos/13-plataformas-ingenieria|Plataformas]]"
  - "[[../01-Fundamentos/10-conway-ley|Ley de Conway]]"
---

# Plataformas de Ingeniería

Una **plataformas de ingeniería** es un conjunto de herramientas, procesos y documentación que proporciona a los desarrolladores una experiencia unificada para construir, desplegar y operar software.

## Internal Developer Platform (IDP)

Una **IDP** es la capa de abstracción que simplifica la infraestructura para los desarrolladores.

```
┌─────────────────────────────────────────────┐
│           DEVELOPER EXPERIENCE              │
├─────────────────────────────────────────────┤
│  IDP                                        │
│  ┌──────────┬──────────┬─────────────────┐  │
│  │ CI/CD    │ Monitoring│ Self-service   │  │
│  │ Pipelines│ Stack    │ Provisioning   │  │
│  └──────────┴──────────┴─────────────────┘  │
├─────────────────────────────────────────────┤
│  INFRASTRUCTURE                             │
│  Kubernetes, Cloud, Databases, etc.         │
└─────────────────────────────────────────────┘
```

### Componentes típicos de una IDP

| Componente | Herramientas | Función |
|------------|--------------|---------|
| **CI/CD** | GitHub Actions, GitLab CI | Build y deploy automatizado |
| **Container Orchestration** | Kubernetes, ECS | Ejecución de servicios |
| **Service Catalog** | Backstage | Inventario de servicios |
| **Secrets Management** | Vault, AWS SM | Gestión de secretos |
| **Observability** | Grafana, Datadog | Monitoring y alertas |
| **Infrastructure as Code** | Terraform, Pulumi | Provisioning |
| **Developer Portal** | Backstage, Port | Self-service |

## Golden Paths

Los **Golden Paths** son caminos predefinidos y validados que facilitan la creación de nuevos servicios o features.

### ¿Qué incluye un Golden Path?

```yaml
golden_path:
  name: "Nuevo microservicio"
  template:
    - repo_scaffolding: "service-template"
    - ci_pipeline: "standard-pipeline"
    - cd_config: "k8s-standard"
    - monitoring: "grafana-dashboard"
    - alerts: "pagerduty-standard"
    - docs: "README-template"
  stages:
    - name: "Development"
      tools: ["local-dev", "pre-commit"]
    - name: "CI"
      tools: ["github-actions", "sonarqube"]
    - name: "CD"
      tools: ["argocd", "terraform"]
    - name: "Operations"
      tools: ["grafana", "pagerduty"]
```

### Beneficios de los Golden Paths

1. **Velocidad**: nuevo servicio en minutos, no días
2. **Consistencia**: todos los servicios siguen el mismo patrón
3. **Calidad**: las mejores prácticas están embebidas
4. **Onboarding**: nuevos desarrolladores productivos rápido
5. **Gobernanza**: compliance automático

## Backstage — El portal del desarrollador

[Backstage](https://backstage.io/) es un portal de desarrolladores open-source creado por Spotify.

### Funcionalidades principales

| Feature | Descripción |
|---------|-------------|
| **Service Catalog** | Inventario de todos los servicios |
| **Software Templates** | Golden paths como templates |
| **TechDocs** | Documentación como código |
| **Plugin System** | Extensible con plugins |
| **API Documentation** | APIs documentadas automáticamente |

### Arquitectura de Backstage

```
┌─────────────────────────────────────────┐
│           BACKSTAGE                     │
├─────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐            │
│  │ Software │  │ TechDocs │            │
│  │ Catalog  │  │          │            │
│  └──────────┘  └──────────┘            │
│  ┌──────────┐  ┌──────────┐            │
│  │Templates │  │ Plugins  │            │
│  │(Golden   │  │(Custom   │            │
│  │ Paths)   │  │ Integr.) │            │
│  └──────────┘  └──────────┘            │
└─────────────────────────────────────────┘
         │           │
    ┌────▼───┐  ┌────▼───┐
    │ GitHub │  │ K8s    │
    │ GitLab │  │ Cloud  │
    └────────┘  └────────┘
```

## Self-Service para desarrolladores

Una buena plataforma permite a los desarrolladores:

| Acción | Sin plataforma | Con plataforma |
|--------|---------------|----------------|
| **Crear servicio** | Ticket + 2 semanas | Template + 10 minutos |
| **Deployar** | Manual + approval | CI/CD automático |
| **Monitorear** | Configurar manual | Dashboard automático |
| **Acceder a DB** | Ticket + 1 semana | Self-service con policy |
| **Rotar secretos** | Ops ticket | Vault UI |

## El modelo Team Topologies + Platform

Aplicando [[../01-Fundamentos/10-conway-ley|Team Topologies]]:

```
Platform Team → Provee la IDP
    │
    ├── Stream-aligned Team A → Usa la plataforma
    ├── Stream-aligned Team B → Usa la plataforma
    └── Stream-aligned Team C → Usa la plataforma
```

**Responsabilidades del Platform Team:**
- Mantener la infraestructura base
- Proveer Golden Paths
- Gestionar CI/CD shared
- Soporte a equipos de producto

## Métricas de plataforma

| Métrica | Descripción |
|---------|-------------|
| **Time to First Deploy** | Tiempo para primer deploy de nuevo servicio |
| **Developer Satisfaction** | Encuesta de satisfacción |
| **Platform Adoption** | % de servicios en la plataforma |
| **Self-service Ratio** | % de operaciones sin ticket a ops |
| **Deployment Frequency** | Frecuencia de deploys |

## Plataformas en la era de la IA

La [[../01-Fundamentos/03-era-ia-contexto|IA]] potencia las plataformas:

- **AI-powered scaffolding**: generación automática de código
- **Intelligent monitoring**: anomaly detection
- **Automated onboarding**: AI guides para nuevos desarrolladores
- **Smart Golden Paths**: sugerencias basadas en patrones

## Relación con otros conceptos

- Implementa la [[../01-Fundamentos/01-que-es-software-factory|Software Factory]]
- Se beneficia de [[../01-Fundamentos/10-conway-ley|Ley de Conway]]
- Soporta [[../01-Fundamentos/07-devops-filosofia|DevOps]]
- Se integra con [[../01-Fundamentos/12-monolito-microservicios|microservicios]]
- Se mide con [[../06-Metricas/README|métricas de productividad]]
