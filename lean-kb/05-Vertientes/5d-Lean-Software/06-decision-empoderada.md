---
title: "Decisión Empoderada"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/software
created: 2026-07-12
updated: 2026-07-12
category: "Lean Software Development"
aliases:
  - Empowered Teams
  - Decision As Late As Possible
related:
  - "[[05-Vertientes/5d-Lean-Software/02-siete-principios-lean-software]]"
  - "[[05-Vertientes/5a-Manufactura/02-toyota-way-en-la-practica]]"
  - "[[05-Vertientes/5d-Lean-Software/01-lean-software-vista-general]]"
---

# Decisión Empoderada

## Dos principios, una idea

Este concepto cubre dos principios de [[05-Vertientes/5d-Lean-Software/02-siete-principios-lean-software|Lean Software]]:

- **Principio 3:** Decidir lo más tarde posible
- **Principio 5:** Empoderar al equipo

Ambos se tratan de **mejores decisiones** a través de confianza y contexto.

## Decidir lo más tarde posible

### El último momento responsable
- Cada decisión temprana es una **apuesta** con información incompleta
- Cuanto más tarde decidas, más información tendrás
- Pero no esperar demasiado (hay un sweet spot)

### Ejemplos en software

| Decisión | Temprano (malo) | Tarde (bueno) |
|----------|----------------|---------------|
| Base de datos | Elegir DB antes de conocer requirements | Elegir después de prototipar |
| Framework | Comprometerse en el mes 1 | Evaluar alternativas con datos |
| Arquitectura | Big design up front | Architecture emergente con refactorings |
| Team structure | Organizar antes de conocer el dominio | Reorganizar según se aprende |

### Cómo decidir tarde
- **Diseñar para cambio** — interfaces, abstractions, plugins
- **Options thinking** — mantener múltiples opciones abiertas
- **Commitment decisions** vs **Delay decisions** — saber cuál es cuál
- **Evolutionary architecture** — arquitectura que evoluciona

## Empoderar al equipo

### ¿Qué significa empoderar?

| Micromanagement | Empoderamiento |
|----------------|----------------|
| "Implementa esto exactamente así" | "Este es el problema, encuéntrale solución" |
| Decisiones arriba, ejecución abajo | Decisiones cerca de quien ejecuta |
| Información retenida | Contexto compartido libremente |
| Castigar errores | Aprender de errores |

### Cómo empoderar

1. **Dar contexto, no instrucciones** — el "por qué" es más importante que el "cómo"
2. **Seguridad psicológica** — poder equivocarse sin miedo
3. **Autonomía técnica** — elegir herramientas y approach
4. **Ownership** — responsabilidad y autoridad juntas
5. **Información abierta** — métricas, roadmap, strategy accesibles

### Decentralized decision-making

En Lean, las decisiones se toman **cerca de la información**:

```
Decisión estratégica → Dirección
Decisión de producto  → Product team
Decisión técnica      → Engineering team
Decisión de diseño    → Design team
```

Cada nivel decide lo que mejor puede, con contexto del nivel superior.

## Conexiones

- [[05-Vertientes/5d-Lean-Software/02-siete-principios-lean-software]] — Los dos principios relevantes
- [[05-Vertientes/5a-Manufactura/02-toyota-way-en-la-practica]] — Toyota Way: respeto a las personas
- [[05-Vertientes/5d-Lean-Software/01-lean-software-vista-general]] — Contexto de Lean Software
- [[05-Vertientes/5d-Lean-Software/05-amplificacion-aprendizaje]] — Mejores decisiones = mejor aprendizaje
- [[05-Vertientes/5d-Lean-Software/07-optimizacion-del-todo]] — Ver el todo para decidir bien
- [[05-Vertientes/5c-Lean-Startup/05-pivotar-o-perseverar]] — Decisión como acto de empoderamiento
