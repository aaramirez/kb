---
title: "Product Owner / Business Analyst"
tags:
  - sf/estructura
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Estructura y Organización"
aliases:
  - "PO"
  - "Product Owner"
  - "Business Analyst"
related:
  - "[[../02-Estructura/03-tech-lead|Tech Lead]]"
  - "[[../02-Estructura/05-engineering-manager|Engineering Manager]]"
  - "[[../03-Procesos/README|Procesos]]"
  - "[[../01-Fundamentos/15-producto-vs-proyecto|Producto vs Proyecto]]"
---

# Product Owner / Business Analyst

El Product Owner es el **dueño del backlog** y el puente entre el negocio y el equipo técnico. Define el qué, el equipo define el cómo.

## ¿Qué es un Product Owner?

El PO es responsable de **maximizar el valor** del producto entregado por el equipo. En Software Factories, el PO puede ser interno (dedicado al producto) o externo (client-side).

## Responsabilidades Core

### Backlog Management
| Actividad | Detalle |
|---|---|
| **Crear items** | User stories, technical stories, bugs |
| **Refinar** | Estimar, priorizar, split stories |
| **Mantener** | Actualizar con feedback y datos |
| **Comunicar** | Transparente, accesible al equipo |

### Priorización

#### Framework: RICE
| Factor | Pregunta | Score |
|---|---|---|
| **Reach** | ¿Cuántos usuarios impacta? | Número |
| **Impact** | ¿Cuánto impacta (1-3)? | 1=low, 2=med, 3=high |
| **Confidence** | ¿Qué tan seguros estamos? | 50-100% |
| **Effort** | ¿Cuánto trabajo cuesta? | Person-months |

`RICE Score = (Reach × Impact × Confidence) / Effort`

#### Framework: MoSCoW
- **Must have**: blocking, no launch without it
- **Should have**: importante, pero no critical
- **Could have**: nice to have, time permitting
- **Won't have** (this time): explicitly out of scope

#### Framework: WSJF (Weighted Shortest Job First)
`WSJF = Cost of Delay / Job Size`

Cost of Delay = User Value + Time Criticality + Risk Reduction

### Stakeholder Management
- Recolectar requirements de stakeholders
- Traducir business needs a technical specs
- Manage expectations sobre scope y timeline
- Presentar progress y upcoming priorities
- Negociar tradeoffs con [[../02-Estructura/05-engineering-manager|EM]] y [[../02-Estructura/03-tech-lead|Tech Lead]]

### User Stories

**Formato estándar:**
```
Como [tipo de usuario]
Quiero [acción/funcionalidad]
Para [beneficio/valor]

Criterios de aceptación:
- Dado [contexto], cuando [acción], entonces [resultado]
- Dado [contexto], cuando [acción], entonces [resultado]

Estimación: [story points]
Prioridad: [MoSCoW]
```

**Ejemplo:**
```
Como comprador online
Quiero agregar productos al carrito de compras
Para poder comprar múltiples items en una sola transacción

Criterios de aceptación:
- Dado que estoy en una página de producto, cuando hago clic en 
  "Agregar al carrito", entonces el item se añade con cantidad 1
- Dado que un item ya está en el carrito, cuando lo agrego 
  nuevamente, entonces la cantidad se incrementa en 1
- Dado que el carrito tiene items, cuando voy al checkout, 
  entonces veo el resumen con totales

Estimación: 5 story points
Prioridad: Must have
```

## PO vs BA en Software Factory

| Aspecto | Product Owner | Business Analyst |
|---|---|---|
| **Focus** | Valor del producto | Requisitos del negocio |
| **Decide** | Qué se construye | Cómo se documenta |
| **Backlog** | Owner directo | Contribute y refine |
| **Stakeholders** | Negocio y equipo | Negocio primariamente |
| **Métrica** | ROI, user satisfaction | Requirements coverage |
| **Ubicación** | Dentro del equipo | Puede ser shared |

> En muchas Software Factories, los roles de PO y BA se combinan en una sola persona.

## Días Típicos

| Hora | Actividad |
|---|---|
| 09:00 | Standup con el equipo |
| 09:30 | Backlog refinement (story splitting, estimation) |
| 10:30 | Stakeholder meeting (requirements gathering) |
| 11:30 | User research / feedback review |
| 13:00 | Sprint planning prep (stories ready) |
| 14:00 | Cross-team dependency alignment |
| 15:00 | Demo prep / stakeholder demo |
| 16:00 | Documentation, acceptance criteria |
| 16:30 | Sprint review / retrospective support |

## Métricas del PO

| Métrica | Target |
|---|---|
| Backlog ready ratio | > 80% de upcoming sprint |
| Story cycle time | < 3 días |
| Feature adoption rate | > 60% |
| Stakeholder satisfaction | > 4/5 |
| Requirement churn | < 20% post-planning |

## Anti-patrones del PO

| Anti-patrón | Problema | Solución |
|---|---|---|
| **The order taker** | Solo traduce requests del cliente | Proactive product thinking |
| **The feature factory** | Más features = más valor | Outcome-driven, not output |
| **The bottleneck** | Todo pasa por el PO | Empower team, delegate |
| **The absent PO** | Backlog stale, no refinement | Dedicated time, cadencia |
| **The micromanager** | Define cómo se implementa | Focus on qué y por qué |

## Herramientas

| Categoría | Opciones |
|---|---|
| Backlog management | Jira, Linear, Azure DevOps, Shortcut |
| Prototyping | Figma (with designer), InVision |
| User research | Maze, Hotjar, UserTesting |
| Roadmapping | Productboard, Aha!, Roadmunk |
| Analytics | Mixpanel, Amplitude, Google Analytics |

## Referencias

- [[../01-Fundamentos/15-producto-vs-proyecto|Producto vs Proyecto]]
- [[../02-Estructura/02-roles-equipo|Roles del Equipo]]
- [[../03-Procesos/README|Procesos Ágiles]]
- [[../04-Practicas/README|Prácticas de Ingeniería]]
