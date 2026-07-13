---
title: "Sistema de Tirón (Pull System) en Desarrollo"
tags:
  - sf/procesos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "Pull System"
  - "Sistema de Tirón"
  - "Pull-Based Development"
related:
  - "[[../03-Procesos/02-kanban-software|Kanban]]"
  - "[[../01-Fundamentos/16-lean-software|Lean Software]]"
  - "[[../03-Procesos/13-value-stream-mapping|Value Stream Mapping]]"
  - "[[../06-Metricas/README|Métricas de Flujo]]"
  - "[[../03-Procesos/01-sdlc|SDLC]]"
---

# Sistema de Tirón (Pull System) en Desarrollo

Un **sistema de tirón** (pull system) es un mecanismo donde el trabajo se mueve hacia adelante solo cuando hay capacidad en el siguiente paso, en contraste con el sistema de empuje (push) donde el trabajo se asigna independientemente de la capacidad.

## Definición

> Un sistema de tirón es un enfoque de producción donde cada paso del proceso "tira" del trabajo del paso anterior solo cuando tiene capacidad disponible, regulando el flujo y evitando sobrecarga.

## Push vs Pull

| Aspecto | Push System | Pull System |
|---------|-------------|-------------|
| **Trabajo** | Se empuja al siguiente paso | Se tira cuando hay capacidad |
| **Sobrecarga** | Frecuente | Minimizada |
| **WIP** | Ilimitado o alto | Controlado por límites |
| **Lead time** | Impredecible | Más predecible |
| **Multitasking** | Alto | Bajo |
| **Flujo** | Irregular | Equilibrado |

### Ejemplo visual

```
PUSH SYSTEM:
┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐
│Step1│ ──→ │Step2│ ──→ │Step3│ ──→ │Step4│
│████ │     │██ ██│     │████ │     │█    │
│████ │     │██ ██│     │██   │     │     │
│████ │     │     │     │     │     │     │
└─────┘     └─────┘     └─────┘     └─────┘
  10 items    8 items    5 items     1 item
  (empujando más)  (sobrecargado)  (esperando)

PULL SYSTEM:
┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐
│Step1│ ──→ │Step2│ ──→ │Step3│ ──→ │Step4│
│██   │     │██   │     │██   │     │██   │
│     │     │     │     │     │     │     │
└─────┘     └─────┘     └─────┘     └─────┘
  2 items    2 items    2 items    2 items
  (WIP=2)    (WIP=2)    (WIP=2)   (WIP=2)
```

## WIP Limits (Límites de Trabajo en Progreso)

Los WIP limits son el **mecanismo central** del pull system:

```
Backlog ──→ [Ready] ──→ [In Progress] ──→ [Review] ──→ [Done]
             WIP=5        WIP=3             WIP=2
```

### Cómo funcionan

```
Estado normal:           WIP limit alcanzado:
┌────────────────┐      ┌────────────────┐
│ ████████████   │      │ ████████████   │
│ ████           │      │ ████████████   │
│                │      │ ████████████   │
│ WIP: 2/3       │      │ WIP: 3/3 (LLENO)│
└────────────────┘      └────────────────┘
  Puede agregar            NO puede agregar
  más trabajo              más trabajo → HELP
```

### Efectos de WIP limits

| WIP Alto | WIP Bajo |
|----------|----------|
| Más multitasking | Focus en 1-2 items |
| Menos context switching | Más context switching |
| Lead time impredecible | Lead time predecible |
| Menos collaboration | Más collaboration |
| Más throughput individual | Menos throughput individual |
| Menos calidad | Más calidad |

### Calibración de WIP limits

1. **Empezar conservador**: team size × 1.5
2. **Observar 2-4 semanas**: medir throughput
3. **Reducir gradualmente**: si throughput estable
4. **Punto óptimo**: donde throughput × calidad se maximizan

**Regla de Little's Law:**
```
WIP = Throughput × Lead Time
```
Si quieres reducir Lead Time, reduce WIP.

## Flow Efficiency (Eficiencia de Flujo)

```
Total Lead Time: 10 días
Value-Added Time: 3 días (trabajo real)
Wait Time: 7 días (esperando)

Flow Efficiency = 3/10 = 30%
```

### Mejorar Flow Efficiency

| Estrategia | Impacto |
|-----------|---------|
| Reducir WIP | Menos esperas |
| Cross-training | Menos dependencias |
| Automatizar handoffs | Menos transferencias |
| Reducir batch size | Menos espera por batch |
| Integrar QA en dev | Eliminar cola de QA |

### Métricas de flujo

| Métrica | Fórmula | Objetivo |
|---------|---------|----------|
| **Flow Efficiency** | Value-Added Time / Total Time | > 50% |
| **Lead Time** | Finish − Start | Minimizar |
| **Cycle Time** | Done − In Progress start | Minimizar |
| **Throughput** | Items completados / período | Maximizar |
| **WIP** | Items activos | Mantener bajo |
| **Age** | Días desde creación | Alertar items viejos |

Ver más en [[../06-Metricas/README|Métricas de Flujo]].

## Pull en la práctica

### Kanban Board como Pull System

```
┌──────────┬──────────┬──────────┬──────────┬──────────┐
│ Backlog  │  Ready   │ In Progress│ Review  │  Done    │
│          │ (WIP: 5) │ (WIP: 3) │ (WIP: 2) │          │
├──────────┼──────────┼──────────┼──────────┼──────────┤
│ [T1]     │ [T5]    │ [T8]     │ [T11]   │ [T13]    │
│ [T2]     │ [T6]    │ [T9]     │ [T12]   │ [T14]    │
│ [T3]     │ [T7]    │ [T10]    │         │ [T15]    │
│ [T4]     │         │          │         │          │
└──────────┴──────────┴──────────┴──────────┴──────────┘
              │            │            │
         Solo sacar    Solo sacar   Solo sacar
         de aquí       de aquí     de aquí
         cuando Ready  cuando In   cuando Done
         tiene espacio Progress    tiene espacio
```

### Pull en CI/CD

```
Commit ──→ Build ──→ Test ──→ Stage ──→ Deploy
           (WIP=5)  (WIP=3)  (WIP=2)   (WIP=1)

Solo avanza cuando el siguiente paso tiene capacidad
```

### Pull en Code Review

```
PR abierto ──→ Reviewer disponible ──→ Review completado
                 (WIP: 2 PRs max)
```

## Anti-patterns de Pull System

| Anti-pattern | Problema | Solución |
|-------------|----------|---------|
| **WIP always at limit** | WIP limit muy bajo | Aumentar o mejorar flujo |
| **Bypass WIP limits** | Sin disciplina | Enforcement en herramientas |
| **No age alerts** | Items estancados | Age-based escalation |
| **Ignoring blocked items** | Flujo bloqueado | Daily flow review |
| **Push disguised as pull** | "Solo esta vez" | Políticas explícitas |

## Implementación gradual

1. **Visualizar**: crear tablero con el flujo actual
2. **Medir**: establish baseline de lead time y throughput
3. **Limitar WIP**: empezar generosamente, reducir gradualmente
4. **Gestionar flujo**: identificar y resolver cuellos de botella
5. **Mejorar**: optimizar continuamente con datos

## Relación con otros conceptos

- [[../03-Procesos/02-kanban-software|Kanban]] es la implementación práctica de pull
- [[../01-Fundamentos/16-lean-software|Lean]] es la base filosófica
- [[../03-Procesos/13-value-stream-mapping|VSM]] identifica dónde aplicar pull
- [[../06-Metricas/README|Métricas de Flujo]] miden la salud del pull system
- [[../03-Procesos/01-sdlc|SDLC]] es el proceso que se optimiza
