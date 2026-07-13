---
title: "Los 7 Principios de Lean Software"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/software
created: 2026-07-12
updated: 2026-07-12
category: "Lean Software Development"
aliases:
  - 7 Principios Lean Software
related:
  - "[[05-Vertientes/5d-Lean-Software/01-lean-software-vista-general]]"
  - "[[05-Vertientes/5d-Lean-Software/04-eliminacion-desperdicios-codigo]]"
  - "[[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general]]"
---

# Los 7 Principios de Lean Software

## 1. Eliminar desperdicio

Todo lo que no agrega valor al cliente es desperdicio. En software, los [[05-Vertientes/5d-Lean-Software/04-eliminacion-desperdicios-codigo|7 desperdicios]] incluyen:

- Trabajo parcialmente terminado
- Features extra (over-engineering)
- Reaprendizaje
- Handoffs
- Context switching
- Defectos
- Retrasos

## 2. Amplificar aprendizaje

El desarrollo de software es un proceso de **aprendizaje**, no solo de construcción. Amplificarlo significa:

- [[05-Vertientes/5d-Lean-Software/05-amplificacion-aprendizaje|Experimentos frecuentes]]
- [[05-Vertientes/5c-Lean-Startup/04-aprendizaje-validado|Aprendizaje validado]]
- Feedback loops cortos
- Documentar decisiones y por qué se tomaron

## 3. Decidir lo más tarde posible

Retener opciones hasta el **último momento responsable**:

- No commitment premature de arquitectura
- Diseñar para cambio (SOLID, interfaces)
- [[05-Vertientes/5d-Lean-Software/06-decision-empoderada|Empoderar]] al equipo para decidir
- Basar decisiones en datos, no en suposiciones

## 4. Entregar lo más rápido posible

Velocidad de entrega genera feedback y reduce riesgo:

- [[05-Vertientes/5a-Manufactura/05-flujo-pieza-por-pieza|One-Piece Flow]] → Continuous delivery
- Lot sizes pequeños → deployments frecuentes
- Automatizar todo lo que se pueda
- Reducir lead time del concepto al código en producción

## 5. Empoderar al equipo

Los que hacen el trabajo saben mejor qué hacer:

- [[05-Vertientes/5d-Lean-Software/06-decision-empoderada|Decisiones descentralizadas]]
- Eliminar micromanagement
- Dar contexto, no instrucciones
- Crear seguridad psicológica para experimentar

## 6. Construir integridad

La calidad no se inspecciona — se **construye** en el producto:

- [[03-Pilares/01-cero-defectos|Built-in quality]]
- Arquitectura modular
- [[05-Vertientes/5b-Lean-Six-Sigma/07-dmaic-controlar|Continuous testing]]
- Definición de "done" completa
- Pair programming, code reviews

## 7. Ver el todo

Optimizar el **sistema completo**, no componentes aislados:

- [[05-Vertientes/5d-Lean-Software/07-optimizacion-del-todo|Systems thinking]]
- Value stream end-to-end
- Evitar optimización local
- Medir outcome, no output

## Resumen visual

```
1. Eliminar desperdicio    ──── Reducir lo que no vale
2. Amplificar aprendizaje  ──── Aprender más rápido
3. Decidir lo más tarde    ──── Mantener opciones abiertas
4. Entregar rápido         ──── Feedback inmediato
5. Empoderar equipo        ──── Mejores decisiones
6. Construir integridad    ──── Calidad integrada
7. Ver el todo             ──── Optimizar el sistema
```

## Conexiones

- [[05-Vertientes/5d-Lean-Software/01-lean-software-vista-general]] — Contexto de Lean Software
- [[05-Vertientes/5d-Lean-Software/04-eliminacion-desperdicios-codigo]] — Principio 1 en detalle
- [[05-Vertientes/5d-Lean-Software/05-amplificacion-aprendizaje]] — Principio 2 en detalle
- [[05-Vertientes/5d-Lean-Software/06-decision-empoderada]] — Principios 3 y 5 en detalle
- [[05-Vertientes/5d-Lean-Software/07-optimizacion-del-todo]] — Principio 7 en detalle
- [[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general]] — Lean Manufacturing original
