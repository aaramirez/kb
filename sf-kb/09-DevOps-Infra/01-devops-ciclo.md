---
title: "El Ciclo de DevOps"
tags:
  - sf/devops
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "DevOps Cycle"
  - "Infinity Loop"
  - "CALMS Framework"
related:
  - "[[../01-Fundamentos/07-devops-filosofia|DevOps como Filosofía]]"
  - "[[../01-Fundamentos/16-lean-software|Lean Software]]"
  - "[[../01-Fundamentos/08-shift-left|Shift-Left]]"
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]"
  - "[[../06-Metricas/01-dora-metrics|DORA Metrics]]"
---

# El Ciclo de DevOps

DevOps es un ciclo continuo de retroalimentación que integra desarrollo y operaciones en un flujo sin fin. Este artículo profundiza en el **infinity loop**, el framework **CALMS** y las prácticas que lo sustentan.

## El Infinity Loop

```
         ┌────────────────────────────────────────────┐
         │                DEVOPS LOOP                 │
         │                                            │
         │   Plan ──► Code ──► Build ──► Test          │
         │    ▲                           │           │
         │    │         Operate ◄── Deploy │           │
         │    │              ▲             │           │
         │    └──── Monitor ◄┘             │           │
         │                                 │           │
         └────────────────────────────────────────────┘

  DEVELOPMENT                          OPERATIONS
  ──────────                          ──────────
  Plan                                Deploy
  Code                                Operate
  Build                               Monitor
  Test                                Feedback
```

### Las 8 fases del ciclo

| Fase | Descripción | Herramientas típicas |
|------|-------------|---------------------|
| **Plan** | Planificación del trabajo | Jira, Linear, GitHub Issues |
| **Code** | Escritura y revisión de código | Git, GitHub, GitLab |
| **Build** | Compilación y empaquetado | Maven, npm, Gradle |
| **Test** | Pruebas automatizadas | JUnit, Selenium, Cypress |
| **Release** | Gestión de versiones | Semantic Release, Versioning |
| **Deploy** | Despliegue a producción | Kubernetes, ArgoCD, Terraform |
| **Operate** | Ejecución en producción | Docker, cloud providers |
| **Monitor** | Observabilidad y alertas | Prometheus, Grafana, Datadog |

### Feedback loops

El ciclo no es lineal — cada fase retroalimenta a las anteriores:

```
Monitor ──feedback──► Plan
  │                     │
  ▼                     ▼
Alertas              Mejoras
  │                     │
  ▼                     ▼
Runbooks             Features
```

**Tipos de feedback:**
- **Fast feedback**: build y test en minutos (CI)
- **Medium feedback**: deploy a staging, QA automático
- **Slow feedback**: métricas de producción, NPS, usage analytics

## CALMS: El framework de DevOps

### C — Culture (Cultura)

> La cultura DevOps se basa en la colaboración, la confianza y la responsabilidad compartida.

```
Traditional Silos:              DevOps Culture:
┌──────┐  ┌──────┐             ┌──────────────────┐
│ Dev  │  │ Ops  │             │  Cross-Functional │
│      │  │      │             │      Team         │
└──────┘  └──────┘             └──────────────────┘
     ▲        ▲                        │
     │ finger │                   shared
     │ pointing│                   ownership
```

**Prácticas culturales:**
- **Blameless post-mortems**: analizar sistemas, no personas
- **Shared on-call**: developers participan en rotación
- **ChatOps**: incidentes y operaciones en canales compartidos
- **Game days**: simulacros de fallos controlados

### A — Automation (Automatización)

| Área | Qué automatizar | Impacto |
|------|-----------------|---------|
| **Build** | Compilación, linting, empaquetado | Consistencia, velocidad |
| **Test** | Unit, integration, e2e, security | Calidad, confianza |
| **Deploy** | Blue-green, canary, rolling updates | Reducción de riesgo |
| **Infra** | Provisionamiento, configuración | Reproducibilidad |
| **Monitor** | Alertas, dashboards, incidentes | Visibilidad |

**Niveles de automatización:**
1. **Nivel 0**: Manual — builds y deploys manuales
2. **Nivel 1**: Scripts — bash scripts repetitivos
3. **Nivel 2**: CI básico — build automático en commit
4. **Nivel 3**: CD avanzado — deploy automático con quality gates
5. **Nivel 4**: Auto-remediation — corrección automática de fallos

### L — Lean (Pensamiento Lean)

Derivado de [[../01-Fundamentos/16-lean-software|Lean Software Development]]:

- **Eliminar desperdicio**: código muerto, contexto innecesario
- **Amplificar aprendizaje**: experimentos rápidos
- **Decidir lo más tarde posible**: opciones flexibles
- **Entregar lo más rápido posible**: batch pequeño
- **Empoderar al equipo**: autonomous teams
- **Optimizar el todo**: no局部 optimizar

**Kanban en DevOps:**
```
To Do │ In Progress │ Code Review │ Testing │ Done │ Deployed
      │      WIP=3  │    WIP=2    │  WIP=3  │      │
```

### M — Measurement (Medición)

Las [[../06-Metricas/01-dora-metrics|DORA Metrics]] son el estándar:

| Métrica | Elite | High | Medium | Low |
|---------|-------|------|--------|-----|
| **Deployment Frequency** | On-demand | Weekly-monthly | Monthly-halfly | Halfly-yearly |
| **Lead Time** | < 1 day | 1 day-1 week | 1 week-1 month | > 6 months |
| **Change Failure Rate** | 0-15% | 16-30% | 16-30% | > 6 months |
| **MTTR** | < 1 hour | < 1 day | 1 week-1 month | > 6 months |

**Métricas complementarias:**
- **Cycle Time**: tiempo de desarrollo por feature
- **Code Coverage**: cobertura de tests
- **Defect Escape Rate**: bugs que llegan a producción
- **Toil Ratio**: % de trabajo manual vs automático

### S — Sharing (Conocimiento Compartido)

| Práctica | Descripción |
|----------|-------------|
| **Documentation as Code** | Docs en repo, versionados con el código |
| **Internal Tech Talks** | Sesiones de conocimiento entre equipos |
| **Pair/Mob Programming** | Programación colaborativa |
| **Runbooks compartidos** | Guías de operación estandarizadas |
| **ChatOps** | Incidentes y decisiones en canales abiertos |
| **Blameless culture** | Aprendizaje sin culpables |

## DevOps y la cadena de valor

```
Idea → Code → Build → Test → Deploy → Operate → Feedback
  │                                                    │
  └────────────────────────────────────────────────────┘
                    Continuous loop
```

Relación con [[../03-Procesos/13-value-stream-mapping|Value Stream Mapping]]:
- **Lead Time Total**: idea hasta valor en producción
- **Process Time**: tiempo de transformación real
- **% C&A**: % de actividad sin rework

## Anti-patrones en DevOps

| Anti-patrón | Señales | Solución |
|-------------|---------|----------|
| **DevOps Team** | Equipo dedicado a DevOps | Embed en equipos productivos |
| **Tool obsession** | Compran herramientas sin cultura | Cultura primero, herramientas después |
| **Silo automation** | CI/CD automatizado pero no colaboración | Romper silos con prácticas compartidas |
| **No measurement** | "Hacemos DevOps" sin métricas | DORA metrics, dashboards |
| **Blame culture** | Post-mortems que buscan culpables | Blameless post-mortems |

## DevOps en la Software Factory

La [[../01-Fundamentos/01-que-es-software-factory|Software Factory]] implementa DevOps como:

1. **Pipeline estándar**: todos los proyectos usan el mismo flujo
2. **Herramientas compartidas**: centro de plataforma
3. **Métricas unificadas**: dashboards consolidados
4. **Gobernanza automatizada**: quality gates
5. **Onboarding acelerado**: playbooks de DevOps

## Relación con otros conceptos

- [[../01-Fundamentos/07-devops-filosofia|DevOps como Filosofía]] — Fundamentos teóricos
- [[../01-Fundamentos/06-manifiesto-agile|Manifiesto Ágil]] — Raíces del mindset
- [[../01-Fundamentos/16-lean-software|Lean Software]] — Eliminar desperdicio
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]] — Implementación práctica
- [[../06-Metricas/01-dora-metrics|DORA Metrics]] — Cómo medir DevOps
- [[../01-Fundamentos/13-plataformas-ingenieria|Plataformas de Ingeniería]] — Internal Developer Platforms
- [[../09-DevOps-Infra/07-gitops|GitOps]] — Flujo declarativo basado en Git
