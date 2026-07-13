---
title: "Ritmos de Delivery"
tags:
  - sf/gestion
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Gestión de Proyectos"
aliases:
  - "Delivery Cadence"
  - "Release Cadence"
  - "Sprint Cadence"
  - "Continuous Delivery"
related:
  - "[[../03-Procesos/03-scrum|Scrum Framework]]"
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]"
  - "[[../03-Procesos/09-release-management|Release Management]]"
  - "[[../10-Gestion-Proyectos/01-planificacion-agil|Planificación Ágil]]"
  - "[[../06-Metricas/11-deployment-frequency|Deployment Frequency]]"
---

# Ritmos de Delivery

Definir cadencias claras de entrega permite predecibilidad, reduce anxiety y crea hábitos en el equipo.

## Ciclo de delivery

```
Strategy (quarterly)
  └── Roadmap (monthly)
       └── Release (bi-weekly / monthly)
            └── Sprint (1-2 weeks)
                 └── Daily delivery
                      └── Continuous deploy
```

## Sprint Cadence

### Duraciones típicas

| Duración | Pros | Contras | Cuándo usar |
|----------|------|---------|-------------|
| **1 semana** | Feedback rápido, urgencia baja | Overhead de ceremony | Equipos maduros, Kanban |
| **2 semanas** | Balance ideal | Estándar de industria | La mayoría de equipos |
| **3 semanas** | Más tiempo para features complejas | Feedback más lento | Equipos con features grandes |
| **4 semanas** | Mucho tiempo de desarrollo | Mucha puede cambiar en 4 semanas | Raro, evitar si es posible |

### Eventos del sprint (2 semanas)

| Evento | Duración | Frecuencia | Propósito |
|--------|----------|------------|-----------|
| **Sprint Planning** | 2h | Inicio del sprint | Definir scope del sprint |
| **Daily Standup** | 15 min | Diario | Sincronización |
| **Backlog Refinement** | 1h | Mitad del sprint | Preparar próximo sprint |
| **Sprint Review** | 1h | Final del sprint | Demo y feedback |
| **Sprint Retrospective** | 1h | Final del sprint | Mejora continua |

### Capacidad del sprint

```
Sprint capacity = (días del sprint - holidays - PTO - meetings) × team size

Ejemplo (2 semanas, 5 devs):
Días hábiles: 10
Holidays: 1
PTO: 0.5 (promedio)
Meetings: 1 (sprint ceremonies)

Effective days = 10 - 1 - 0.5 - 1 = 7.5 días/dev
Capacity = 7.5 × 5 = 37.5 días de desarrollo
```

## Release Cadence

### Modelos de release

| Modelo | Frecuencia | Ejemplo | Best for |
|--------|------------|---------|----------|
| **Continuous Delivery** | Cada commit | Netflix, Google | Products web, SaaS |
| **Weekly release** | Cada semana | Shopify, GitHub | Active products |
| **Bi-weekly** | Cada 2 sprints | Many startups | Growing products |
| **Monthly** | Cada month | Enterprise apps | Stable products |
| **Quarterly** | Cada 3 meses | Large enterprises | Regulated industries |
| **Big Bang** | Cuando está listo | V1 launches | New products |

### Release strategy

| Estrategia | Descripción | Rollback |
|-----------|-------------|----------|
| **Trunk-based** | Deploy from main | Feature flags |
| **Release branches** | Branch per release | Revert commit |
| **GitFlow** | Develop + release branches | Merge back |
| **Environment promotion** | Dev → Staging → Prod | Promote previous |
| **Blue-Green** | Two identical environments | Switch traffic |
| **Canary** | Gradual rollout | Route back |

## Increment vs Release

| Concepto | Definición | Frecuencia |
|----------|-----------|------------|
| **Increment** | Nuevo valor añadido al producto | Cada sprint |
| **Release** | Increment puesto a disposición del usuario | Variable |
| **Deployment** | Poner código en producción | Variable |

```
Sprint 1: Increment A (no released — feature flag off)
Sprint 2: Increment B (A released — flag on, B flag off)
Sprint 3: Increment C (A+B+C released together)
```

## Continuous Delivery

### Pipeline stages

```
Code → Build → Test → Stage → Deploy → Monitor
  │      │      │       │       │        │
  │      │      │       │       │        └── Alerting, observability
  │      │      │       │       └── Blue/Green, canary
  │      │      │       └── Staging environment
  │      │      └── Unit, integration, e2e tests
  │      └── Compile, bundle, docker build
  └── Commit, PR, review
```

### Métricas DORA

| Métrica | Low performer | Medium | High performer |
|---------|--------------|--------|----------------|
| **Deployment frequency** | Monthly | Weekly | On-demand (multiple/day) |
| **Lead time for changes** | 1-6 months | 1 week-1 month | < 1 day |
| **Change failure rate** | 46-60% | 16-30% | 0-15% |
| **MTTR** | 1 week-1 month | 1 day-1 week | < 1 hour |

## Delivery Anti-patterns

| Anti-pattern | Problema | Solución |
|-------------|----------|----------|
| **Release train** | Todo sale junto, beaucoup de bugs | Feature flags, smaller releases |
| **Deploy freeze** | No se deploya por miedo | Improbar testing, canary |
| **Sprint hero** | 1 persona hace todo al final | Pair programming, WIP limits |
| **Carry-over** | Stories que nunca terminan | Smaller stories, capacity planning |
| **Definition of Done vago** | "Casi listo" = no listo | DoD estricto y verificado |
| **Demo-driven development** | Features para demo, no para usuario | User feedback loops |

## Cadencia recomendada por tipo de producto

| Tipo de producto | Sprint | Release | Deploy |
|-----------------|--------|---------|--------|
| **SaaS B2B** | 2 semanas | Monthly | Continuous |
| **SaaS B2C** | 2 semanas | Weekly | Continuous |
| **Mobile app** | 2 semanas | Bi-weekly | App store cycle |
| **Enterprise** | 2-3 semanas | Quarterly | Scheduled |
| **API platform** | 2 semanas | As needed | Continuous |
| **Embedded/IoT** | 3-4 semanas | Quarterly | OTA updates |

## Rituals checklist

- [ ] Sprint Planning: scope definido y capacity verificado
- [ ] Daily Standup: blockers identificados y assigned
- [ ] Refinement: top 10 items ready para próximo sprint
- [ ] Sprint Review: demo real con datos de uso
- [ ] Sprint Retro: 3 acciones concretas para mejora
- [ ] Release notes: escritas y comunicadas
- [ ] Monitoring: dashboard actualizado post-deploy
