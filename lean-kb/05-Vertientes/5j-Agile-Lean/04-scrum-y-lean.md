---
title: "Scrum y Lean"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/agile
created: 2026-07-12
updated: 2026-07-12
category: "Vertientes"
aliases:
  - Scrum Lean
  - Scrum y Lean
related:
  - "[[01-agile-lean-vista-general]]"
  - "[[03-metodo-kanban-agil]]"
  - "[[06-lean-y-agile-diferencias]]"
  - "[[../../03-Metodologias/03-scrum]]"
  - "[[../../02-Filosofia/02-principios-lean]]"
---

# Scrum y Lean

## Scrum como implementación Lean

Scrum es, en esencia, una implementación de principios Lean para el desarrollo de software. Sus artefactos y eventos reflejan conceptos Lean fundamentales.

## El Sprint como PDCA

Cada Sprint es un ciclo **Plan-Do-Check-Act**:

```
┌─────────────────────────────────────┐
│              Sprint                 │
│                                     │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌───┐ │
│  │Plan │→ │ Do  │→ │Check│→ │Act│ │
│  │     │  │     │  │     │  │   │ │
│  └─────┘  └─────┘  └─────┘  └───┘ │
│                                     │
│  Sprint Planning → Desarrollo →     │
│  Sprint Review → Retrospective      │
└─────────────────────────────────────┘
```

## Desperdicios en Scrum

Los 8 desperdicios de Lean se manifiestan en Scrum:

| Desperdicio Lean | Manifestación en Scrum | Solución |
|------------------|----------------------|----------|
| **Defectos** | Bugs en el incremento | Definition of Done |
| **Overproduction** | Features no solicitadas | Product Backlog refinement |
| **Waiting** | Esperando aprobaciones | Cross-functional teams |
| **Non-utilized talent** | Roles subutilizados | Self-organization |
| **Transportation** | Handoffs entre equipos | Co-located teams |
| **Inventory** | Código sin entregar | Continuous delivery |
| **Motion** | Context switching | WIP limits |
| **Extra-processing** | Documentación excesiva | Working software focus |

## Mejorando Scrum con Lean

### Thinking Lean en Scrum

- **Eliminar muda**: preguntar en cada Sprint qué se puede eliminar
- **Eliminar mura**: nivelar el flujo de trabajo (leveling)
- **Eliminar muri**: no sobrecargar al equipo (capacity planning)

### Value Stream en Scrum

El flujo de valor en Scrum va desde la idea hasta el software funcionando:

1. Idea → Backlog (Sprint Planning)
2. Backlog → Sprint (Pull)
3. Sprint → Incremento (Delivery)
4. Incremento → Feedback (Review)
5. Feedback → Mejora (Retrospective)

## Métricas que conectan

- **Velocity** ↔ **Throughput**
- **Cycle Time** ↔ **Lead Time**
- **Burn-down** ↔ **Flow metrics**

## Ver también

- [[../../03-Metodologias/03-scrum]] - Fundamentos de Scrum
- [[03-metodo-kanban-agil]] - Kanban como alternativa/complemento
- [[../../02-Filosofia/02-principios-lean]] - Principios Lean
