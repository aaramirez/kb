---
title: "Cadena de Valor en Software"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/software
created: 2026-07-12
updated: 2026-07-12
category: "Lean Software Development"
aliases:
  - Value Stream Software
  - Cadena de Valor Software
related:
  - "[[05-Vertientes/5d-Lean-Software/01-lean-software-vista-general]]"
  - "[[02-Fundamentos/02-cadena-de-valor]]"
  - "[[05-Vertientes/5d-Lean-Software/04-eliminacion-desperdicios-codigo]]"
---

# Cadena de Valor en Software

## ¿Qué es una Value Stream de software?

Una Value Stream (cadena de valor) en software es la secuencia completa de **pasos desde la idea hasta el valor entregado al cliente**. Mapearla revela desperdicios ocultos y cuellos de botella.

> *"Si no puedes ver el flujo completo, no puedes mejorarlo."* — Mary Poppendieck

## Value Stream típico de software

```
Idea → Análisis → Diseño → Desarrollo → Testing → Deploy → Operación → Valor
```

Cada paso puede medirse en:
- **Lead time** — tiempo total desde el inicio
- **Process time** — tiempo de trabajo real
- **%C&A** — % Complete & Accurate (calidad del input)
- **Wait time** — tiempo de espera entre pasos

## Mapeo de procesos (VSM de software)

| Paso | Lead Time | Process Time | %C&A | Wait Time |
|------|-----------|-------------|------|-----------|
| Backlog refinement | 3 días | 2 horas | 70% | 1 día |
| Sprint planning | 1 día | 2 horas | 90% | 4 horas |
| Desarrollo | 5 días | 3 días | 85% | 2 días |
| Code review | 2 días | 1 día | 75% | 1 día |
| QA testing | 3 días | 1 día | 80% | 2 días |
| Deploy | 1 día | 4 horas | 95% | 8 horas |
| **Total** | **15 días** | **~7 días** | — | **~8 días** |

## Identificar desperdicios en el flujo

Los [[05-Vertientes/5d-Lean-Software/04-eliminacion-desperdicios-codigo|desperdicios]] se esconden en:

- **Wait times** — código esperando review, deploy esperando aprobación
- **Rework** — bugs que regresan del QA o producción
- **Context switching** — devs moviéndose entre features
- **Over-processing** — documentación que nadie lee
- **Handoffs** — transferencia de contexto entre personas/equipos

## Mejoras típicas del Value Stream

| Desperdicio | Mejora Lean |
|-------------|------------|
| Wait time en code review | Pair programming, review diario |
| Rework por bugs | [[05-Vertientes/5d-Lean-Software/05-amplificacion-aprendizaje\|TDD]], test automation |
| Deploy manual y lento | [[05-Vertientes/5d-Lean-Software/08-devops-lean-perspectiva\|CI/CD]] |
| Context switching | WIP limits, focus time |
| Handoffs | Cross-functional teams |

## Métricas de Value Stream

- **Lead time** — tiempo idea → producción
- **Deployment frequency** — cuántas veces deployamos por semana
- **Change failure rate** — % de deployments que causan incidentes
- **Mean time to recovery (MTTR)** — tiempo promedio de recuperación

Estas son las **4 DORA metrics** que conectan Lean con [[05-Vertientes/5d-Lean-Software/08-devops-lean-perspectiva|DevOps]].

## Conexiones

- [[02-Fundamentos/02-cadena-de-valor]] — Value Stream Mapping como fundamento
- [[05-Vertientes/5d-Lean-Software/01-lean-software-vista-general]] — Contexto de Lean Software
- [[05-Vertientes/5d-Lean-Software/04-eliminacion-desperdicios-codigo]] — Desperdicios en el flujo
- [[05-Vertientes/5d-Lean-Software/08-devops-lean-perspectiva]] — CI/CD como acelerador
- [[05-Vertientes/5a-Manufactura/03-diseno-flujo-produccion]] — Diseño de flujo en manufactura
- [[01-Glosario/G-01-desperdicio]] — Los 7 desperdicios
