---
title: "Value Stream Mapping en Software"
tags:
  - sf/procesos
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "VSM"
  - "Value Stream Map"
  - "Mapeo de Flujo de Valor"
related:
  - "[[../01-Fundamentos/16-lean-software|Lean Software]]"
  - "[[../03-Procesos/14-flujo-tirón-pull|Sistema de Tirón]]"
  - "[[../06-Metricas/README|Métricas de Flujo]]"
  - "[[../03-Procesos/02-kanban-software|Kanban]]"
  - "[[../03-Procesos/01-sdlc|SDLC]]"
---

# Value Stream Mapping en Software

**Value Stream Mapping (VSM)** es una herramienta de Lean que visualiza el flujo de valor desde la solicitud del cliente hasta la entrega, identificando desperdicio y oportunidades de mejora.

## Definición

> Value Stream Mapping es una técnica para visualizar y analizar el flujo de trabajo y materiales/información necesarios para entregar un producto o servicio al cliente, identificando valor agregado vs desperdicio.

## ¿Por qué VSM en Software?

| Problema | Cómo VSM lo resuelve |
|----------|---------------------|
| **Lead time largo** | Identifica wait times y handoffs |
| **Silos entre equipos** | Visualiza el flujo completo |
| **Ineficiencias ocultas** | Mide tiempo real vs tiempo de trabajo |
| **Mejoras dispersas** | Enfoca en el cuello de botella más grande |
| **Falta de visibilidad** | Crea un mapa compartido del proceso |

## Mapa de Value Stream para Software

### Estado actual (Current State)

```
Solicitud       Análisis      Desarrollo     QA           Deploy
del cliente      ↓              ↓             ↓             ↓
┌──────┐      ┌──────┐      ┌──────┐      ┌──────┐      ┌──────┐
│      │  →   │      │  →   │      │  →   │      │  →   │      │
│ 2d   │      │ 3d   │      │ 5d   │      │ 4d   │      │ 1d   │
│      │      │      │      │      │      │      │      │      │
└──────┘      └──────┘      └──────┘      └──────┘      └──────┘
  Value         Value         Value         Value         Value
  +2d wait      +1d wait      +2d wait      +3d wait
                (handoff)     (merge)       (regression)

Total Lead Time: 20 días
Value-Added Time: 15 días
Flow Efficiency: 75%
```

### Métricas en el mapa

| Métrica | Cálculo | Ejemplo |
|---------|---------|---------|
| **Lead Time** | Tiempo total de inicio a fin | 20 días |
| **Process Time** | Tiempo de trabajo real | 15 días |
| **Wait Time** | Tiempo de espera entre pasos | 5 días |
| **Flow Efficiency** | Process Time / Lead Time | 75% |
| **Touch Time** | Tiempo de interacción humana | 10 días |
| **Handoffs** | Número de transferencias | 4 |

## Pasos para crear un VSM

### Paso 1: Definir el alcance

```
¿Qué flujo vamos a mapear?
├── Feature development (idea → producción)
├── Bug fix (reporte → resuelto)
├── Onboarding (solicitud → acceso)
└── Incident (alerta → resuelto)
```

### Paso 2: Recopilar datos

| Dato | Cómo obtenerlo |
|------|----------------|
| **Lead time** | Git logs, Jira cycle time |
| **Process time** | Estimación del equipo |
| **Wait time** | Análisis de transiciones |
| **Handoffs** | Entrevistas al equipo |
| **Batch size** | Revisar PRs promedio |
| **WIP** | Contar items activos |

### Paso 3: Dibujar el mapa actual

```
┌─────────────────────────────────────────────────────────┐
│                    FLUJO DE VALOR                       │
├──────────┬──────────┬──────────┬──────────┬────────────┤
│  BACKLOG │  DEV     │  REVIEW  │  QA      │  DEPLOY    │
├──────────┼──────────┼──────────┼──────────┼────────────┤
│ PT: 0    │ PT: 3d  │ PT: 0.5d│ PT: 2d  │ PT: 0.5d  │
│ WT: 2d   │ WT: 1d  │ WT: 1d  │ WT: 3d  │ WT: 0d    │
├──────────┴──────────┴──────────┴──────────┴────────────┤
│ Total LT: 10d │ Value-Added: 6d │ Efficiency: 60%     │
└─────────────────────────────────────────────────────────┘

PT = Process Time, WT = Wait Time
```

### Paso 4: Identificar desperdicios (7 wastes de Lean)

| Desperdicio | En Software | Ejemplo |
|------------|-------------|---------|
| **Transport** | Handoffs innecesarios | Dev → QA → Dev → QA |
| **Inventory** | WIP alto | 20 items en progreso |
| **Motion** | Cambios de contexto | Multi-proyecto simultáneo |
| **Waiting** | Tiempo muerto | Esperando review, aprobación |
| **Over-processing** | Trabajo innecesario | Docs que nadie lee |
| **Over-production** | Features no usadas | Construir sin validar |
| **Defects** | Bugs y rework | Fix que genera otro bug |

### Paso 5: Diseñar el mapa futuro (Future State)

```
Estado Futuro: Eliminar wait times, reducir batch size

┌─────────────────────────────────────────────────────────┐
│                    FLUJO DE VALOR                       │
├──────────┬──────────┬──────────┬────────────────────────┤
│  BACKLOG │  DEV+QA  │  REVIEW  │  DEPLOY (auto)        │
├──────────┼──────────┼──────────┼────────────────────────┤
│ PT: 0    │ PT: 4d  │ PT: 0.5d│ PT: 0.5d              │
│ WT: 0.5d │ WT: 0.5d│ WT: 0.5d│ WT: 0d                │
├──────────┴──────────┴──────────┴────────────────────────┤
│ Total LT: 6d │ Value-Added: 5d │ Efficiency: 83%       │
└─────────────────────────────────────────────────────────┘

Mejoras:
- QA integrado (elimina wait de 3d)
- Deploy automatizado
- Pull system con WIP limits
```

## Métricas de Value Stream

| Métrica | Estado Actual | Estado Futuro | Objetivo |
|---------|--------------|---------------|----------|
| **Lead Time** | 10 días | 6 días | -40% |
| **Process Time** | 6 días | 5 días | -17% |
| **Wait Time** | 4 días | 1.5 días | -63% |
| **Flow Efficiency** | 60% | 83% | +23pp |
| **Handoffs** | 4 | 2 | -50% |
| **Batch Size** | 5 PRs/sprint | 2 PRs/sprint | -60% |

Ver más en [[../06-Metricas/README|Métricas de Flujo]].

## Herramientas de VSM

| Herramienta | Tipo |
|-------------|------|
| **Miro / Mural** | Colaborativo visual |
| **Draw.io** | Diagramas gratuitos |
| **ValueStreamMap.com** | Template online |
| **Excel/Sheets** | Datos y cálculos |
| **Git + Jira** | Datos de lead time automatizados |

## Value Stream Mapping en practice

### Workshop de VSM (2-4 horas)

1. **Preparación** (antes): recopilar datos de lead time
2. **Dibujar mapa actual** (60 min): equipo completo
3. **Identificar desperdicios** (30 min): los 7 wastes
4. **Diseñar mapa futuro** (60 min): ideal state
5. **Crear plan de acción** (30 min): priorizar mejoras

### Anti-patterns

| Anti-pattern | Problema |
|-------------|----------|
| **Mapa perfecto sin datos** | Sin evidencia, sin mejoras |
| **Solo proceso, no personas** | Ignora la realidad humana |
| **Mapa estático** | Nunca se actualiza |
| **Enfoque en局部** | Optimizar un paso no optimiza el flujo |

## Relación con otros conceptos

- [[../01-Fundamentos/16-lean-software|Lean Software]] es la base filosófica de VSM
- [[../03-Procesos/14-flujo-tirón-pull|Pull systems]] son el mecanismo de mejora
- [[../06-Metricas/README|Métricas de Flujo]] proveen los datos
- [[../03-Procesos/02-kanban-software|Kanban]] es la herramienta de implementación
- [[../03-Procesos/01-sdlc|SDLC]] es el proceso que se mapea
