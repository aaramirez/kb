---
title: "Team Topologies"
tags:
  - sf/estructura
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Estructura y Organización"
aliases:
  - "Team Topologies"
  - "4 Types of Teams"
  - "Interaction Modes"
related:
  - "[[../02-Estructura/07-squad-tribe-chapter|Squads, Tribes, Chapters]]"
  - "[[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]"
  - "[[../01-Fundamentos/10-conway-ley|Ley de Conway]]"
  - "[[../01-Fundamentos/12-monolito-microservicios|Microservicios]]"
---

# Team Topologies

Team Topologies es un framework de Matthew Skelton y Manuel Pais que define **4 tipos de equipo** y **3 modos de interacción** para diseñar organizaciones de software efectivas.

## Los 4 Tipos de Equipo

### 1. Stream-Aligned Team

| Aspecto | Detalle |
|---|---|
| **Propósito** | Alineado con un flujo de negocio (stream) |
| **Responsabilidad** | Build, run, y own un flujo de valor end-to-end |
| **Autonomía** | Alta — full ownership de su dominio |
| **Ejemplos** | Equipo de checkout, equipo de onboarding, equipo de pagos |
| **Tamaño** | 5-9 personas (two-pizza rule) |
| **Skills** | Cross-functional: dev, QA, design, ops |

**Características clave:**
- Alineado con un product/service específico
- Minimiza handoffs y dependencias
- Puede hacer release independentemente
- Tiene ownership de la operación en producción

### 2. Enabling Team

| Aspecto | Detalle |
|---|---|
| **Propósito** | Ayudar a otros equipos a adquirir nuevas capacidades |
| **Responsabilidad** | Coaching, tooling, best practices, knowledge transfer |
| **Autonomía** | Media — works across teams |
| **Ejemplos** | Equipo de DevOps adoption, Equipo de Testing, Equipo de Security |
| **Tamaño** | 3-5 personas |
| **Skills** | Deep expertise en un área específica |

**Características clave:**
- **Temporal**: existe hasta que los stream-aligned teams internalizan la capacidad
- **No owns code** de producción (en general)
- **Enables, no does**: enseña a pescar, no da el pez
- **Evolution**: una vez que el stream team es independiente, el enabling team se mueve a otro área

**Ejemplo de enabling team en acción:**
```
Mes 1-3: Enabling team de Kubernetes
├── Week 1-2: Training para Team A
├── Week 3-4: Pair programming con Team A
├── Month 2: Team A deploya a K8s con soporte
├── Month 3: Team A es independiente
└── Month 4: Enabling team se mueve a Team B
```

### 3. Complicated-Subsystem Team

| Aspecto | Detalle |
|---|---|
| **Propósito** | Manages un subsystem con alta complejidad técnica |
| **Responsabilidad** | Build y maintain el subsystem |
| **Autonomía** | Media-alta dentro de su dominio |
| **Ejemplos** | Motor de ML, video codec, motor de reglas fiscales, CAD engine |
| **Tamaño** | 3-7 personas |
| **Skills** | Deep domain expertise |

**Características clave:**
- Alto nivel de expertise necesario (years to master)
- Interfaces bien definidas con el resto del sistema
- Puede tener su propio ciclo de release
- Requiere pessoas con background académico/ Research

### 4. Platform Team

| Aspecto | Detalle |
|---|---|
| **Propósito** | Proveer internal services para otros equipos |
| **Responsabilidad** | Build y operate la [[../02-Estructura/14-plataforma-interna|Internal Developer Platform]] |
| **Autonomía** | Alta sobre la plataforma |
| **Ejemplos** | Platform engineering, DevOps platform, Data platform |
| **Tamaño** | 4-8 personas |
| **Skills** | Infrastructure, developer experience, reliability |

**Características clave:**
- Treats other teams as **customers**
- Provides **self-service** capabilities
- Goal: reduce cognitive load de stream-aligned teams
- Enables [[../02-Estructura/10-equipos-autonomos|autonomía]] de otros equipos

Ver [[../02-Estructura/14-plataforma-interna|Internal Developer Platform]] para más detalles.

## Los 3 Modos de Interacción

### 1. Collaboration

| Aspecto | Detalle |
|---|---|
| **Qué es** | Dos equipos trabajan juntos por un tiempo definido |
| **Cuándo** | Learning a new technology, solving a complex problem |
| **Duración** | Temporal (semanas a meses) |
| **Ejemplo** | Platform team + Stream team during Kubernetes migration |

### 2. X-as-a-Service

| Aspecto | Detalle |
|---|---|
| **Qué es** | Un equipo provee algo al otro con interfaz clara |
| **Cuándo** | Platform team provides tools, APIs, infrastructure |
| **Duración** | Permanente |
| **Ejemplo** | Platform team provides CI/CD as a service |

### 3. Facilitating

| Aspecto | Detalle |
|---|---|
| **Qué es** | Un equipo enseña y habilita al otro |
| **Cuándo** | Enabling team helping stream teams adopt new practices |
| **Duración** | Temporal (hasta que el otro equipo es independiente) |
| **Ejemplo** | Security team helping all teams implement SAST |

## Matriz de Topologías

| Tipo de Equipo | Interacción Principal | Interacción Secundaria |
|---|---|---|
| **Stream-Aligned** | X-as-a-Service (consume) | Collaboration (con subsystem) |
| **Enabling** | Facilitating | — |
| **Complicated-Subsystem** | X-as-a-Service (provee) | Collaboration (con stream) |
| **Platform** | X-as-a-Service (provee) | Facilitating (enable stream teams) |

## Diseñando con Team Topologies

### Paso 1: Identificar los Streams de Valor
```
Business Value Streams:
├── Customer Acquisition
│   └── Stream: Onboarding, Marketing, Sales
├── Order Fulfillment
│   └── Stream: Checkout, Payment, Shipping
└── Customer Support
    └── Stream: Ticketing, Knowledge Base, Chat
```

### Paso 2: Asignar Stream-Aligned Teams
```
Stream Team: Checkout
├── Owns: checkout flow, cart, payment initiation
├── Interacts: Payment subsystem team (X-as-a-Service)
├── Interacts: Platform team (CI/CD, infra)
└── Size: 7 people
```

### Paso 3: Identificar Subsystems Complicados
```
Complicated Subsystem: Payment Processing Engine
├── Owns: payment routing, fraud detection, compliance
├── Provides: API for checkout team
└── Size: 5 people (payment domain experts)
```

### Paso 4: Design Platform y Enabling Teams
```
Platform Team: Developer Platform
├── Provides: CI/CD, monitoring, secrets, databases
├── Interaction: X-as-a-Service con todos los teams
└── Size: 6 people

Enabling Team: Security
├── Facilita: Security practices para todos los teams
├── Duration: 6 months, then rotates
└── Size: 3 people
```

## Team Topologies vs Spotify Model

| Aspecto | Team Topologies | Spotify Model |
|---|---|---|
| **Tipos de equipo** | 4 types + interaction modes | Squads, Tribes, Chapters, Guilds |
| **Focus** | Organizational design for fast flow | Autonomy y alignment |
| **Complexity** | Simpler taxonomy | More roles, more structure |
| **Interaction explicit** | Yes (3 modes) | Implicit |
| **Temporal teams** | Yes (enabling teams) | Not explicitly |
| **Conway alignment** | Core principle | Emergent |

## Anti-patrones

| Anti-patrón | Problema | Solución |
|---|---|---|
| **No stream teams** | Everything is a platform team | Identify value streams |
| **Permanent enabling** | Enabling team never leaves | Set exit criteria |
| **Platform as gatekeeper** | Platform slows everyone down | Self-service, API-first |
| **Subsystem sprawl** | Too many complicated subsystem teams | Merge or simplify |
| **No interaction modes** | Teams don't know how to work together | Define explicitly |

## Referencias

- [[../02-Estructura/07-squad-tribe-chapter|Squads, Tribes, Chapters]]
- [[../02-Estructura/14-plataforma-interna|Internal Developer Platform]]
- [[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]
- [[../01-Fundamentos/10-conway-ley|Ley de Conway]]
- [[../01-Fundamentos/12-monolito-microservicios|Microservicios]]
