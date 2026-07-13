---
title: "Squads, Tribes, Chapters (Modelo Spotify)"
tags:
  - sf/estructura
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Estructura y Organización"
aliases:
  - "Spotify Model"
  - "Squad Tribe Chapter"
related:
  - "[[../02-Estructura/13-arbol-deportes|Team Topologies]]"
  - "[[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]"
  - "[[../02-Estructura/01-organizacion-tipica|Organización Típica]]"
  - "[[../01-Fundamentos/06-manifiesto-agile|Manifiesto Ágil]]"
---

# Squads, Tribes, Chapters — Modelo Spotify

El modelo Spotify es un framework organizacional popular en la industria de software. Aunque Spotify lo describe como "inspiración" más que modelo, su estructura se ha replicado ampliamente.

## La Estructura Spotify

### Squad
| Aspecto | Detalle |
|---|---|
| **Definición** | Equipo autónomo, cross-functional, dedicado a un área |
| **Tamaño** | 6-12 personas |
| **Analogía** | Como un "mini-startup" dentro de la organización |
| **Contiene** | Devs, QA, designers, PO |
| **Liderazgo** | Squad Lead (puede ser EM o senior engineer) |
| **Objetivo** | Ship value de forma autónoma |

### Tribe
| Aspecto | Detalle |
|---|---|
| **Definición** | Colección de squads relacionados |
| **Tamaño** | 40-150 personas |
| **Analogía** | Como un "campus" de startups |
| **Contiene** | Múltiples squads con dominio similar |
| **Liderazgo** | Tribe Lead |
| **Objetivo** | Coordinación entre squads, shared alignment |

### Chapter
| Aspecto | Detalle |
|---|---|
| **Definición** | Grupo de personas con el mismo skill set across squads |
| **Ejemplos** | Chapter de Backend, Chapter de QA, Chapter de Data |
| **Contiene** | Engineers del mismo specialty de diferentes squads |
| **Liderazgo** | Chapter Lead (línea funcional) |
| **Objetivo** | Best practices, career growth, hiring standards |

### Guild
| Aspecto | Detalle |
|---|---|
| **Definición** | Comunidad de interés, transversal |
| **Ejemplos** | Guild de security, guild de AI, guild de testing |
| **Contiene** | Miembros voluntarios de cualquier tribe/squad |
| **Liderazgo** | Community-driven, sin management formal |
| **Objetivo** | Knowledge sharing, innovation, standards |

## Diagrama de Estructura

```
Tribe A (Payments)
├── Squad: Checkout
│   ├── 3 Backend devs (Chapter Backend)
│   ├── 2 Frontend devs (Chapter Frontend)
│   ├── 1 QA (Chapter Quality)
│   └── 1 Designer
├── Squad: Fraud Detection
│   ├── 2 Backend devs
│   ├── 1 ML engineer
│   └── 1 Data analyst
└── Squad: Billing
    ├── 2 Backend devs
    └── 1 QA

Chapter Backend (across all squads)
├── Chapter Lead: Senior Backend
├── Standards: Java, Spring Boot, testing patterns
└── Career: IC track, mentorship

Guild: AI/ML (across all tribes)
├── Monthly meetup
├── Shared tooling
└── Knowledge base
```

## Líneas de Reporte Dueling

```
Squad Lead ──── management line ────→ Tribe Lead
     │                                      │
     │ daily work, delivery                 │ strategy, alignment
     │                                      │
Chapter Lead ←── skill line ──→ Individual Engineer
     │
     │ career, standards, hiring
     ↓
  Engineering Manager (funcional)
```

**Doble reporte:**
- **Management line**: Squad Lead → Tribe Lead (delivery focus)
- **Skill line**: Chapter Lead → Chapter members (career/standards focus)

## Ventajas del Modelo Spotify

| Ventaja | Descripción |
|---|---|
| **Autonomía** | Squads deciden cómo trabajar |
| **Ownership** | Cada squad owns su dominio |
| **Alignment** | Tribes agrupan esfuerzos relacionados |
| **Career growth** | Chapters proporcionan path funcional |
| **Knowledge sharing** | Guilds diseminan innovación |
| **Scalability** | Se puede replicar el patrón |

## Desventajas y Críticas

| Desventaja | Descripción |
|---|---|
| **Complejidad de reporte** | Doble línea puede generar confusión |
| **Cultural dependency** | Requiere alta madurez ágil |
| **No es un template** | Spotify dice "no nos copien" |
| **Coordination cost** | Cross-squad dependencies son difíciles |
| **Role ambiguity** | Squad Lead vs EM vs Chapter Lead se superpone |

> En 2020, Spotify mismo reconoció que su modelo ha evolucionado significativamente y no es tan "flat" como se presenta.

## Cuándo Usar Este Modelo

| Contexto | Recomendación |
|---|---|
| SF con 50+ ingenieros | Buen ajuste |
| SF con 10-30 ingenieros | Considerar version simplificada |
| Organización con múltiples productos | Tribe = producto, Squad = feature |
| Organización matricial existente | Puede ser difícil migrar |
| Startup pequeña | Over-engineering organizacional |

## Modelo Simplificado para SFs Pequeñas

Para una Software Factory de 20-50 personas:

```
Engineering Director
├── Squads (3-4 personas cada uno)
│   ├── Squad 1: Product A
│   ├── Squad 2: Product B
│   └── Squad 3: Platform
├── Tech Leads (comparten chapter duties)
└── Guilds informales (weekly tech talks)
```

## Comparación con Otros Modelos

| Modelo | Estructura | Autonomía | Complejidad |
|---|---|---|---|
| **Spotify** | Squad/Tribe/Chapter | Alta | Alta |
| **Team Topologies** | 4 tipos de equipo | Media | Media |
| **Amazon Two-Pizza** | Small autonomous teams | Alta | Baja |
| **Traditional Matrix** | Funcional + proyectos | Baja | Media |

Ver [[../02-Estructura/13-arbol-deportes|Team Topologies]] y [[../02-Estructura/11-estructura-matricial|Estructura Matricial]].

## Referencias

- [[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]
- [[../02-Estructura/01-organizacion-tipica|Organización Típica]]
- [[../02-Estructura/13-arbol-deportes|Team Topologies]]
- [[../01-Fundamentos/10-conway-ley|Ley de Conway]]
- [[../11-Cultura-Equipo/README|Cultura de Equipo]]
