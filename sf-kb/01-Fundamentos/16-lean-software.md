---
title: "Lean Software Development"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "Lean"
  - "Lean Software"
  - "7 Principios Lean"
related:
  - "[[../01-Fundamentos/06-manifiesto-agile|Manifiesto Ágil]]"
  - "[[../01-Fundamentos/07-devops-filosofia|DevOps]]"
  - "[[../01-Fundamentos/09-technical-debt|Technical Debt]]"
---

# Lean Software Development

**Lean Software Development** es una adaptación de los principios de manufacturing Lean (Toyota Production System) al desarrollo de software. Fue formalizada por Mary y Tom Poppendieck en 2003.

## Los 7 Principios de Lean

```
1. Eliminate Waste        → Eliminar desperdicio
2. Amplify Learning       → Amplificar aprendizaje
3. Decide as Late as Possible → Decidir lo más tarde posible
4. Deliver as Fast as Possible → Entregar lo más rápido posible
5. Empower the Team       → Empoderar al equipo
6. Build Integrity In     → Construir integridad desde adentro
7. See the Whole          → Ver el todo
```

## 1. Eliminate Waste — Eliminar desperdicio

> "Anything that does not add value to the product is waste."

### Tipos de desperdicio en software

| Desperdicio | Ejemplo | Solución |
|-------------|---------|----------|
| **Partially done work** | Features a medias | WIP limits, completion before new |
| **Extra features** | Over-engineering | YAGNI, MVP |
| **Relearning** | Knowledge not shared | Pair programming, docs vivas |
| **Handoffs** | Dev → QA → Ops | Cross-functional teams |
| **Waiting** | Bloqueado por otro equipo | Autonomía, reducir dependencias |
| **Defects** | Bugs que llegan a producción | [[../01-Fundamentos/08-shift-left|Shift-Left]] |
| **Task switching** | Multitasking | Focus, WIP limits |

### Identificar desperdicio

```
Preguntas para identificar desperdicio:
1. ¿Qué código escribimos pero nadie usa?
2. ¿Qué features nadie pidió?
3. ¿Qué meetings no agregan valor?
4. ¿Qué procesos son overhead puro?
5. ¿Qué esperas causan retrasos?
```

## 2. Amplify Learning — Amplificar aprendizaje

> "The only way to win is to learn faster than anyone else."

**Prácticas:**
- **TDD**: aprender mientras se diseña
- **Pair Programming**: knowledge sharing inmediato
- **Retrospectivas**: aprendizaje del equipo
- **Code Review**: aprendizaje mutuo
- **A/B Testing**: learning de usuarios reales
- **Spike solutions**: prototipos para aprender

**Feedback loops:**
```
Code → Test → Deploy → Measure → Learn → Code
 ↑                                          │
 └──────────────────────────────────────────┘
```

## 3. Decide as Late as Possible — Decidir lo más tarde posible

> "Keep your options open as long as possible, but make the decisions at the last responsible moment."

**Aplicación:**
- **Architecture**: no over-designar antes de saber
- **Technology choices**: evaluar cuando sea necesario
- **Feature scope**: ajustar según aprendizaje
- **Infrastructure**: cloud para flexibilidad

**Beneficios:**
- Más información para decidir
- Menos assumption-driven mistakes
- Mayor flexibilidad

## 4. Deliver as Fast as Possible — Entregar lo más rápido posible

> "The faster you deliver, the sooner you get feedback, the sooner you can improve."

**Prácticas:**
- **CI/CD**: delivery continua
- **Feature flags**: entregar parcialmente
- **MVP**: lo mínimo viable primero
- **Small batches**: cambios pequeños y frecuentes
- **[[../01-Fundamentos/07-devops-filosofia|DevOps]]**: automatizar todo

**Velocidad ≠ prisa:**
- Velocidad inteligente: entregar valor rápido
- Prisa: entregar sin calidad

## 5. Empower the Team — Empoderar al equipo

> "Motivated individuals are the core of any successful project."

**Principios:**
- **Autonomía**: decidir CÓMO trabajar
- **Trust**: confiar en el equipo
- **Ownership**: el equipo es dueño del resultado
- **Psychological safety**: poder fallar sin miedo

**Anti-patrones:**
- Micro-management
- Decisiones top-down sin input
- Blame culture
- Silos de información

## 6. Build Integrity In — Construir integridad desde adentro

> "Integrity is not something you add later — it's built in from the start."

**Tipos de integridad:**

| Tipo | Descripción |
|------|-------------|
| **Perceived integrity** | El usuario siente que todo se conecta |
| **Conceptual integrity** | El diseño es coherente y consistente |
| **Technical integrity** | El código es mantenible y testeable |

**Prácticas:**
- [[../01-Fundamentos/04-principios-ingenieria-software|Principios SOLID]]
- [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]
- [[../01-Fundamentos/09-technical-debt|Technical Debt]] management
- Code review y testing

## 7. See the Whole — Ver el todo

> "Optimizing a part never optimizes the whole."

**Aplicación:**
- **System thinking**: ver efectos en cascada
- **Value stream mapping**: entender el flujo completo
- **Cross-functional teams**: visión holística
- **Metrics**: medir el sistema, no solo componentes

**Ejemplo:**
```
Optimizar solo coding → el bottleneck se mueve a testing
Optimizar solo testing → el bottleneck se mueve a deployment
Optimizar todo junto → mejora real del sistema
```

## Lean y [[../01-Fundamentos/06-manifiesto-agile|Agile]]

Lean y Agile se complementan:

| Agile se enfoca en | Lean se enfoca en |
|-------------------|-------------------|
| Valores y principios | Eliminar desperdicio |
| Entregar software | Entregar valor |
| Colaboración | Eficiencia del sistema |
| Responder al cambio | Reducir lead time |
| Individuos | Flujo de trabajo |

## Lean y [[../01-Fundamentos/07-devops-filosofia|DevOps]]

DevOps es la implementación práctica de Lean en operaciones:

| Lean Principle | DevOps Practice |
|----------------|-----------------|
| Eliminate waste | CI/CD, automation |
| Amplify learning | Monitoring, feedback |
| Decide as late | Feature flags, canary |
| Deliver fast | Continuous deployment |
| Empower team | Blameless culture |
| Build integrity | Testing, quality gates |
| See the whole | Observability, DORA metrics |

## Implementación de Lean

### Paso 1: Identificar desperdicio
- Mapear value stream actual
- Identificar wait times y overhead
- Medir lead time

### Paso 2: Establecer flujo
- Implementar WIP limits
- Reducir batch sizes
- Crear pull systems

### Paso 3: Medir y mejorar
- [[../06-Metricas/README|Métricas]] de lead time
- Reducir tiempo de ciclo
- Aprendizaje continuo

## Relación con otros conceptos

- Fundamenta [[../01-Fundamentos/07-devops-filosofia|DevOps]] y su filosofía
- Se integra con [[../01-Fundamentos/06-manifiesto-agile|Agile]]
- Complementa [[../01-Fundamentos/09-technical-debt|gestión de deuda técnica]]
- Se aplica en [[../01-Fundamentos/01-que-es-software-factory|Software Factory]]
- Se mide con [[../06-Metricas/README|métricas de flujo]]
