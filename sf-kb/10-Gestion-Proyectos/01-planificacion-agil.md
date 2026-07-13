---
title: "Planificación Ágil"
tags:
  - sf/gestion
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Gestión de Proyectos"
aliases:
  - "Agile Planning"
  - "Roadmapping"
  - "PI Planning"
related:
  - "[[../03-Procesos/03-scrum|Scrum Framework]]"
  - "[[../03-Procesos/04-scaled-agile-safe|SAFe]]"
  - "[[../10-Gestion-Proyectos/04-backlog-grooming|Backlog Refinement]]"
  - "[[../10-Gestion-Proyectos/12-delivery-ritmos|Ritmos de Delivery]]"
---

# Planificación Ágil

La planificación ágil es un enfoque iterativo e incremental para planificar trabajo de software, adaptándose al cambio en lugar de seguir un plan rígido.

## Niveles de planificación

| Nivel | Horizonte | Participantes | Artefacto principal |
|-------|-----------|---------------|---------------------|
| **Product Vision** | 2-5 años | Product, Leadership | Product roadmap |
| **Roadmap** | 6-18 meses | Product, Engineering | Quarterly roadmap |
| **Release Planning** | 1-3 meses | Squad completo | Release plan |
| **Sprint Planning** | 1-2 semanas | Equipo Scrum | Sprint backlog |
| **Daily** | 1 día | Equipo Scrum | Sprint board |

## Product Roadmapping

Un roadmap comunica la dirección estratégica del producto. No es una lista de features, sino una narrativa de valor.

### Tipos de roadmap

| Tipo | Uso principal | Audiencia |
|------|--------------|-----------|
| **Now-Next-Later** | Comunicación ágil, bajo detalle | Equipos, stakeholders |
| **Timeline** | Compromisos fechados | Leadership, clientes |
| **Outcome-based** | Orientado a métricas | Product, executives |
| **Theme-based** | Alineación estratégica | Organización completa |

### Plantilla Now-Next-Later

```
NOW (este sprint/quarter)
├── Feature A — impacto: alto, confianza: alta
├── Feature B — impacto: alto, confianza: media
└── Tech debt: migración DB — urgencia: crítica

NEXT (próximos 1-2 quarters)
├── Feature C — exploración en curso
└── Feature D — depende de A

LATER (horizonte 3-6+ meses)
├── Feature E — viable, no priorizado
└── Feature F — idea early stage
```

## PI Planning (Program Increment Planning)

Eventeo central de SAFe donde múltiples equipos sincronizan su plan para un Program Increment (8-12 semanas).

### Estructura del PI Planning

| Fase | Duración | Actividad |
|------|----------|-----------|
| **Prep** | 1 día | Visión, arquitectura, roadmap |
| **Day 1 AM** | 4h | Business context, product vision |
| **Day 1 PM** | 4h | Team breakouts: estimar, identificar dependencias |
| **Day 2 AM** | 4h | Adjustments, plan final, risk/dependency discussion |
| **Day 2 PM** | 2h | Confidence vote, management review |

### Confidence Vote (Fist of Five)

| Voto | Significado |
|------|-------------|
| ✊ (5) | Totalmente confiado, puedo comprometerme |
| 4 | Confianza alta, menores preocupaciones |
| 3 | Neutral, necesito hablar |
| 2 | Preocupaciones serias |
| 1 | No puedo comprometerme con este plan |

Si el promedio es < 3, se re-plana.

## Release Planning

Planificar releases concretas con objetivos claros de negocio.

### Checklist de Release Planning

- [ ] Objetivo de negocio definido y comunicado
- [ ] Features priorizadas con estimaciones de alto nivel
- [ ] Dependencias identificadas y gestionadas
- [ ] Riesgos principales documentados
- [ ] Criteria of Acceptance claros
- [ ] Stakeholders informados y alineados
- [ ] Capacity del equipo verificada

## Horizon Planning

Divide el roadmap en horizontes para balancear certeza y flexibilidad.

| Horizonte | Detail level | Re-planning | Scope |
|-----------|-------------|-------------|-------|
| **H1** (0-3 meses) | Story level | Cada sprint | Detallado |
| **H2** (3-6 meses) | Feature level | Mensual | Moderado |
| **H3** (6-18 meses) | Theme level | Trimestral | Estratégico |

## Anti-patterns

- **Commitment-driven planning**: comprometer fechas sin estimación técnica
- **Waterfall disfrazado**: planificar todo el quarter de una vez sin revisar
- **Roadmap como lista de features**: en lugar de outcomes y métricas
- **Planning sin capacity**: asumir 100% disponibilidad del equipo
- **Ignoring tech debt**: no incluir mantenimiento en la planificación

## Métricas de planificación

| Métrica | Fórmula | Target típico |
|---------|---------|---------------|
| **Plan accuracy** | (completed / committed) × 100 | > 80% |
| **Forecast accuracy** | 1 - (|estimado - real| / real) | > 70% |
| **Sprint goal rate** | sprints con goal / total sprints | > 85% |
| **On-time release** | releases on-time / total releases | > 90% |
