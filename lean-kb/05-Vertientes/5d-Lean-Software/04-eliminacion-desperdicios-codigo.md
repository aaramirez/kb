---
title: "Eliminación de Desperdicios en Código"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/software
created: 2026-07-12
updated: 2026-07-12
category: "Lean Software Development"
aliases:
  - Software Waste
  - Desperdicios en Software
related:
  - "[[05-Vertientes/5d-Lean-Software/02-siete-principios-lean-software]]"
  - "[[05-Vertientes/5d-Lean-Software/03-cadena-de-valor-software]]"
  - "[[01-Glosario/G-01-desperdicio]]"
---

# Eliminación de Desperdicios en Código

## Los 7 desperdicios del software

Los [[01-Glosario/G-01-desperdicio|7 desperdicios de Lean Manufacturing]] se traducen así al contexto del software:

### 1. Trabajo parcialmente terminado (Partially Done Work)
- Features a medias que no se pueden entregar
- Ramas de código sin merge
- Documentación incompleta
- **Solución:** Definition of Done estricta, continuous integration

### 2. Features extra (Extra Features)
- Construir features que nadie pidió
- Over-engineering por "por si acaso"
- Complejidad innecesaria
- **Solución:** [[05-Vertientes/5c-Lean-Startup/03-mvp-minimo-viable|MVP]], validar antes de construir

### 3. Reaprendizaje (Relearning)
- Equipo nuevo repitiendo errores de otros
- Decisiones no documentadas
- Knowledge lost when people leave
- **Solución:** Documentación viva, ADRs, pair programming

### 4. Handoffs
- Transferencia de diseño → desarrollo → QA → ops
- Pérdida de contexto en cada paso
- **Solución:** Cross-functional teams, collaboration

### 5. Context switching
- Cambiar entre múltiples proyectos
- Pérdida de productividad estimada en 20-40%
- **Solución:** WIP limits, focus time, dedicated teams

### 6. Defectos
- Bugs que regresan del QA o producción
- Tech debt acumulada
- **Solución:** [[05-Vertientes/5d-Lean-Software/05-amplificacion-aprendizaje|TDD]], automated testing, code reviews

### 7. Retrasos (Delays)
- Esperando aprobaciones, reviews, deploy windows
- Waiting for dependencies
- **Solución:** [[05-Vertientes/5d-Lean-Software/08-devops-lean-perspectiva|CI/CD]], automated approvals

## Cómo identificar desperdicios

| Señal | Desperdicio probable |
|-------|---------------------|
| Código en ramas por semanas | Partially done work |
| Features sin uso después de release | Extra features |
| Devs preguntando "¿por qué hicimos esto?" | Relearning |
| Reuniones de "handoff" entre equipos | Handoffs |
| Devs en 3+ proyectos simultáneos | Context switching |
| Bugs reportados en producción | Defectos |
| Deploy cada pocas semanas | Delays |

## Métricas de desperdicio

- **% del tiempo en value-add activities** — meta: > 60%
- **Lead time vs process time** — gap = desperdicio
- **WIP (Work In Progress)** — menos es mejor
- **Rework rate** — % de trabajo que se repite
- **Deployment frequency** — más frecuencia = menos batch waste

## Conexiones

- [[05-Vertientes/5d-Lean-Software/02-siete-principios-lean-software]] — Principio 1: Eliminar desperdicio
- [[05-Vertientes/5d-Lean-Software/03-cadena-de-valor-software]] — Desperdicios en el flujo
- [[01-Glosario/G-01-desperdicio]] — Los 7 desperdicios originales
- [[05-Vertientes/5d-Lean-Software/05-amplificacion-aprendizaje]] — Cómo aprender para evitar desperdicios
- [[05-Vertientes/5d-Lean-Software/07-optimizacion-del-todo]] — Ver el sistema completo
- [[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general]] — Lean Manufacturing como base
