---
title: "Método Kanban Ágil"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/agile
created: 2026-07-12
updated: 2026-07-12
category: "Vertientes"
aliases:
  - Kanban Agil
  - Agile Kanban
related:
  - "[[01-agile-lean-vista-general]]"
  - "[[04-scrum-y-lean]]"
  - "[[../../03-Metodologias/05-kanban]]"
  - "[[../../02-Filosofia/03-desperdicios-muda]]"
  - "[[../../04-Herramientas/01-tablero-kanban]]"
---

# Método Kanban Ágil

## ¿Qué es el Kanban Ágil?

El **Método Kanban** fue adaptado por David Anderson para el trabajo del conocimiento, tomando los principios del Kanban de Toyota y aplicándolos a desarrollo de software y gestión de proyectos.

## Principios del Kanban Ágil

1. **Comenzar con lo que se tiene** — no cambiar el proceso actual
2. **Acordar buscar mejoras incrementales** — kaizen gradual
3. **Respetar el proceso actual** — respetar roles y responsabilidades
4. **Fomentar el liderazgo en todos los niveles** — empoderamiento

## El Tablero Kanban

```
┌─────────┬─────────┬─────────┬─────────┐
│ Backlog │  To Do  │   WIP   │  Done   │
│         │         │   (3)   │         │
├─────────┼─────────┼─────────┼─────────┤
│ ○ ○ ○   │  ○ ○    │  ● ●    │  ○ ○ ○  │
│ ○ ○     │  ○      │         │  ○      │
└─────────┴─────────┴─────────┴─────────┘
```

Cada columna representa una etapa del flujo. Las tarjetas se mueven de izquierda a derecha.

## Límites WIP (Work in Progress)

Los límites WIP son el corazón del Kanban:

- **Reducen el multitasking** — forzar focus en pocas tareas
- **Exponen cuellos de botella** — si hay trabajo estancado, se ve
- **Mejoran el throughput** — menos contexto switching = más productividad
- **Crean pull system natural** — solo se arrastra nuevo trabajo cuando hay capacidad

## Clases de servicio

Kanban define diferentes prioridades:

| Clase | Descripción | Ejemplo |
|-------|-------------|---------|
| **Expedite** | Urgente, sin espera | Bug crítico en producción |
| **Fixed Date** | Fecha comprometida | Feature para lanzamiento |
| **Standard** | Flujo normal | Tareas del backlog |
| **Intangible** | Tareas que no generan valor directo | Mejoras técnicas |

## Métricas de flujo

Kanban promueve cuatro métricas clave:

- **Lead Time**: tiempo desde solicitud hasta entrega
- **Cycle Time**: tiempo de trabajo activo
- **Throughput**: unidades entregadas por período
- **WIP**: trabajo en progreso actual

## Conexión con Lean Kanban

El Kanban ágil preserva los principios de Lean pero los adapta:

- **Pull system** → Se mantiene idéntico
- **Visual management** → Tablero digital o físico
- **WIP limits** → El mecanismo central
- **Kaizen** → Mejoras incrementales basadas en métricas

## Ver también

- [[../../03-Metodologias/05-kanban]] - Kanban en profundidad
- [[../../04-Herramientas/01-tablero-kanban]] - Diseño de tableros
- [[04-scrum-y-lean]] - Comparativa con Scrum
