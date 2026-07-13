---
title: "DevOps - Perspectiva Lean"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/software
created: 2026-07-12
updated: 2026-07-12
category: "Lean Software Development"
aliases:
  - DevOps Lean
  - DevOps
related:
  - "[[05-Vertientes/5d-Lean-Software/01-lean-software-vista-general]]"
  - "[[05-Vertientes/5d-Lean-Software/07-optimizacion-del-todo]]"
  - "[[05-Vertientes/5d-Lean-Software/05-amplificacion-aprendizaje]]"
---

# DevOps — Perspectiva Lean

## DevOps como extensión de Lean

DevOps es la aplicación de principios Lean a la **entrega y operación de software**. Donde Lean Software se enfoca en desarrollo, DevOps extiende el flujo hasta producción y operaciones.

> *"DevOps es Lean Thinking aplicado al delivery de software."* — Gene Kim

## El Three Ways (Los 3 Caminos)

### Primer Camino — Flujo (Flow)
Optimizar la **velocidad** de trabajo de izquierda a derecha (dev → ops → cliente)

- [[05-Vertientes/5d-Lean-Software/03-cadena-de-valor-software|Value stream]] completo
- [[05-Vertientes/5a-Manufactura/05-flujo-pieza-por-pieza|One-Piece Flow]] → Continuous delivery
- Reducir tamaños de lote (small batch deployments)
- WIP limits en pipelines
- [[05-Vertientes/5a-Manufactura/04-sistema-produccion-pull|Pull systems]] para infraestructura

### Segundo Camino — Feedback (Amplify Learning)
Crear **loops de retroalimentación** rápidos de derecha a izquierda (producción → dev)

- Monitoring y alerting temprano
- [[05-Vertientes/5d-Lean-Software/05-amplificacion-aprendizaje|Continuous learning]] de incidentes
- Blameless post-mortems
- Feature flags para feedback rápido
- A/B testing en producción

### Tercer Camino — Aprendizaje continuo (Experimentation)
Fomentar una cultura de **experimentación** y toma de riesgos calculados

- Chaos engineering
- Game days
- [[05-Vertientes/5c-Lean-Startup/04-aprendizaje-validado|Experimentos]] en producción
- Innovación permitida y segura

## Continuous Delivery como Lean

| Concepto Lean | Práctica DevOps |
|---------------|-----------------|
| One-Piece Flow | Deploy cada commit |
| [[05-Vertientes/5a-Manufactura/05-flujo-pieza-por-pieza\|Pull]] | Deploy on demand |
| [[05-Vertientes/5a-Manufactura/07-cambio-rapido-smed-practico\|SMED]] | Automated deployments |
| [[05-Vertientes/5a-Manufactura/06-sistema-supermercado\|Supermercado]] | Infrastructure as code |
| [[05-Vertientes/5a-Manufactura/03-diseno-flujo-produccion\|5S]] | Clean, organized pipelines |
| [[01-Glosario/G-02-kanban\|Kanban]] | Pipeline visualization |

## Waste elimination en operations

Los [[05-Vertientes/5d-Lean-Software/04-eliminacion-desperdicios-codigo|desperdicios]] en operaciones:

| Desperdicio | Ejemplo en Ops | Solución DevOps |
|-------------|---------------|-----------------|
| **Wait time** | Deploy manual aprobado | Automated approvals |
| **Rework** | Fix que rompe otro fix | Automated testing |
| **Defects** | Bugs en producción | [[05-Vertientes/5d-Lean-Software/05-amplificacion-aprendizaje\|Canary deployments]] |
| **Handoffs** | Dev → Ops transfer | Shared ownership |
| **Over-processing** | Exceso de permisos | Least privilege, automation |
| **Context switching** | On-call rotando entre servicios | Team-owned services |
| **Partial done work** | Feature flags a medias | Progressive rollouts |

## Métricas DORA (DevOps Research)

Las 4 métricas clave de DevOps/Lean:

| Métrica | Elite | High | Medium | Low |
|---------|-------|------|--------|-----|
| **Deployment frequency** | On demand | Weekly | Monthly | < 6 months |
| **Lead time for changes** | < 1 day | 1 day - 1 week | 1 week - 1 month | > 6 months |
| **Change failure rate** | 0-15% | 16-30% | 16-30% | > 30% |
| **Time to restore** | < 1 hour | < 1 day | < 1 week | > 6 months |

## Implementación Lean DevOps

1. **Mapear value stream** de desarrollo a producción
2. **Identificar desperdicios** en el flujo actual
3. **Implementar CI** como primer paso
4. **Automatizar testing** (unit, integration, e2e)
5. **Implementar CD** para reducir lead time
6. **Establecer monitoring** para feedback loop
7. **Crear cultura blameless** para aprendizaje
8. **Iterar** con [[04-Mentalidad/01-kaizen-continuo|kaizen]] continuo

## Conexiones

- [[05-Vertientes/5d-Lean-Software/01-lean-software-vista-general]] — Contexto de Lean Software
- [[05-Vertientes/5d-Lean-Software/07-optimizacion-del-todo]] — DevOps optimiza el sistema completo
- [[05-Vertientes/5d-Lean-Software/05-amplificacion-aprendizaje]] — CI/CD como amplificador
- [[05-Vertientes/5d-Lean-Software/03-cadena-de-valor-software]] — Value stream hasta producción
- [[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general]] — Lean Manufacturing como inspiración
- [[05-Vertientes/5b-Lean-Six-Sigma/07-dmaic-controlar]] — Control y monitoreo continuo
