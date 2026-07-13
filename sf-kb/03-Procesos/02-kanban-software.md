---
title: "Kanban en Desarrollo de Software"
tags:
  - sf/procesos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "Kanban"
  - "Tablero Kanban"
  - "Kanban Board"
related:
  - "[[../03-Procesos/14-flujo-tirón-pull|Sistema de Tirón]]"
  - "[[../03-Procesos/03-scrum|Scrum]]"
  - "[[../01-Fundamentos/16-lean-software|Lean Software]]"
  - "[[../06-Metricas/README|Métricas de Flujo]]"
  - "[[../03-Procesos/01-sdlc|SDLC]]"
---

# Kanban en Desarrollo de Software

**Kanban** es un método de gestión visual del trabajo que optimiza el flujo de valor mediante limitación del trabajo en progreso (WIP) y gestión pull. Originalmente de Toyota, adaptado al desarrollo de software.

## Principios básicos de Kanban

| Principio | Descripción |
|-----------|-------------|
| **Comenzar con lo que hay** | No reemplazar procesos existentes |
| **Acordar aspiraciones de cambio** | Mejora gradual, no revolución |
| **Fomentar liderazgo en todos los nivees** | Ownership distribuido |
| **Gestionar el flujo** | Enfocarse en el movimiento del trabajo |
| **Hacer políticas explícitas** | Reglas visibles en el tablero |
| **Implementar feedback loops** | Reuniones regulares, métricas |
| **Mejorar experimentalmente** | Hipótesis → experimento → resultado |

## El Tablero Kanban

```
┌──────────┬──────────┬──────────┬──────────┬──────────┐
│ Backlog  │  To Do   │ In Progress│ Review  │  Done    │
│ (Buffer) │ (Select) │  (WIP≤3) │ (WIP≤2) │          │
├──────────┼──────────┼──────────┼──────────┼──────────┤
│  ┌────┐  │  ┌────┐  │  ┌────┐  │  ┌────┐  │  ┌────┐  │
│  │ T1 │  │  │ T3 │  │  │ T5 │  │  │ T7 │  │  │ T9 │  │
│  └────┘  │  └────┘  │  └────┘  │  └────┘  │  └────┘  │
│  ┌────┐  │  ┌────┐  │  ┌────┐  │  ┌────┐  │  ┌────┐  │
│  │ T2 │  │  │ T4 │  │  │ T6 │  │  └────┘  │  │ T10│  │
│  └────┘  │  └────┘  │  └────┘  │          │  └────┘  │
└──────────┴──────────┴──────────┴──────────┴──────────┘
                                         WIP →
```

### Columnas típicas

| Columna | Propósito | WIP Limit |
|---------|-----------|-----------|
| **Backlog** | Trabajo futuro priorizado | Sin límite |
| **Ready / To Do** | Seleccionado para el sprint/ciclo | Generalmente 1-2 × team size |
| **In Progress** | Trabajo activo | 1-2 por persona |
| **Review / QA** | Esperando revisión o testing | 2-4 |
| **Done** | Completado y desplegado | Sin límite |

## WIP Limits (Límites de Trabajo en Progreso)

Los WIP limits son **el corazón de Kanban**:

```
Sin WIP limit:              Con WIP limit (3):
┌────────────────────┐      ┌────────────────────┐
│ ████ ████ ████ ████│      │ ████ ████ ████      │
│ ████ ████ ████ ████│  →   │ ████ ████ ████      │
│ ████ ████          │      │                    │
│ 16 items en progreso│      │ 6 items en progreso │
│ Alto multitasking  │      │ Focus, flow          │
└────────────────────┘      └────────────────────┘
```

**Beneficios de WIP limits:**
- Reducen context switching
- Exponen cuellos de botella
- Mejoran la predictibilidad
- Aceleran el throughput

**Cómo establecer WIP limits:**
1. Empezar generosamente (ej: team size × 1.5)
2. Observar el flujo por 2-4 semanas
3. Reducir gradualmente cuando el flujo sea estable
4. El WIP ideal es donde throughput × calidad se maximizan

## Pull System (Sistema de Tirón)

El [[../03-Procesos/14-flujo-tirón-pull|sistema de tirón]] es fundamental en Kanban:

| Push System | Pull System |
|-------------|-------------|
| Se asigna trabajo | Se toma trabajo cuando hay capacidad |
| Sobrecarga frecuente | Flujo equilibrado |
| Prioridades cambiantes | Compromiso visual |
| Multitasking | Focus |

**Regla de oro**: Nunca superar el WIP limit de una columna. Si está lleno, ayuda al upstream o haz review.

## Cadencia y eventos de Kanban

| Evento | Frecuencia | Propósito |
|--------|-----------|-----------|
| **Daily Kanban** | Diaria (15 min) | Revisar flujo, impedimentos |
| **Replenishment** | Semanal | Seleccionar nuevo trabajo |
| **Service Delivery Review** | Quincenal/mensual | Evaluar métricas, mejorar |
| **Kanban Retro** | Mensual | Proceso y mejoras |

### Reunión diaria de Kanban

Enfocada en el **flujo**, no en el status:

1. ¿Hay tarjetas bloqueadas?
2. ¿Alguna columna supera WIP?
3. ¿Qué necesita ayuda urgente?
4. ¿El flujo está saludable?

## Métricas de Kanban

| Métrica | Fórmula | Objetivo |
|---------|---------|----------|
| **Lead Time** | Finish date − Start date | Minimizar |
| **Cycle Time** | Done − In Progress start | Minimizar |
| **Throughput** | Items completados / período | Maximizar |
| **WIP** | Items activos | Mantener bajo |
| **Flow Efficiency** | Time active / total time | Maximizar |
| **Age** | Días desde creación | Alertar items viejos |

Ver más en [[../06-Metricas/README|Métricas de Flujo]].

## Kanban vs Scrum

| Aspecto | Kanban | [[../03-Procesos/03-scrum|Scrum]] |
|---------|--------|------|
| **Cambio** | Continuo | Solo entre sprints |
| **Roles** | No definidos | SM, PO, Dev Team |
| **Eventos** | Opcionales | Obligatorios |
| **WIP** | Limitado por columna | Limitado por sprint |
| **Entrega** | Continua | Al final del sprint |
| **Planificación** | Pull on demand | Sprint planning |
| **Ideal para** | Operaciones, soporte | Desarrollo de producto |

## Implementación gradual

1. **Visualizar**: mapear el flujo actual en un tablero
2. **Limitar WIP**: establecer límites iniciales conservadores
3. **Gestionar flujo**: identificar y resolver cuellos de botella
4. **Implementar feedback loops**: reuniones periódicas
5. **Mejorar experimentalmente**: cambios pequeños y medidos

## Relación con otros conceptos

- [[../01-Fundamentos/16-lean-software|Lean Software]] es la base filosófica de Kanban
- [[../03-Procesos/14-flujo-tirón-pull|Pull systems]] son el mecanismo central
- [[../06-Metricas/README|Métricas]] validan la salud del flujo
- [[../04-Practicas/README|Prácticas]] complementan con engineering practices
- [[../01-Fundamentos/07-devops-filosofia|DevOps]] integra Kanban en operaciones
