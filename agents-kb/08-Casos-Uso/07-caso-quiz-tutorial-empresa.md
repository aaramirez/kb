---
title: "Caso: Quiz y Tutorial en Empresa"
tags:
  - agents/casos
  - type/caso-uso
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Casos de Uso"
aliases:
  - "Training System"
  - "Quiz System"
related:
  - "[[07-caso-agente-comercial-ventas]]"
---

# Caso: Quiz y Tutorial en Empresa

## Contexto

Una telco necesita capacitar a 500+ empleados en nuevos procesos, herramientas y estándares de forma consistente y medible.

## Problema

- Capacitación presencial costosa y lenta
- Difícil medir conocimiento real
- Cada persona aprende a su ritmo
- Sin gamificación, baja motivación

## Solución

### Sistema de Quiz

```
┌─────────────────────────────────────┐
│         SISTEMA QUIZ               │
│                                     │
│  ┌─────────┐  ┌─────────────────┐  │
│  │  Banks  │  │   Keys          │  │
│  │Preguntas│  │  Respuestas     │  │
│  └────┬────┘  └────┬────────────┘  │
│       │            │               │
│  ┌────▼────────────▼────────────┐  │
│  │     Agente de Evaluación     │  │
│  │  • Crea quiz personalizados  │  │
│  │  • Evalúa respuestas        │  │
│  │  • Genera reportes          │  │
│  │  • Envía resultados         │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Sistema de Tutorial

- Tutoriales interactivos con gamificación
- XP, streaks, logros
- Ramificaciones según respuestas
- Tracking de progreso

## Resultados

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Tiempo de capacitación | 8h presencial | 2h online | -75% |
| Retención de conocimiento | 40% | 75% | +88% |
| Cobertura | 60% empleados | 95% | +58% |
| Satisfacción | 3.0/5 | 4.4/5 | +47% |

## Ver también

- [[skills/quiz/SKILL.md|Skill Quiz]]
- [[skills/tutorial/SKILL.md|Skill Tutorial]]
