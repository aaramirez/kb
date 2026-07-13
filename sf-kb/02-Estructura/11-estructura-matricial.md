---
title: "Estructura Matricial vs Funcional vs por Producto"
tags:
  - sf/estructura
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Estructura y Organización"
aliases:
  - "Organizational Patterns"
  - "Estructura Funcional"
  - "Estructura por Producto"
related:
  - "[[../02-Estructura/01-organizacion-tipica|Organización Típica]]"
  - "[[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]"
  - "[[../01-Fundamentos/10-conway-ley|Ley de Conway]]"
  - "[[../02-Estructura/07-squad-tribe-chapter|Squads, Tribes, Chapters]]"
---

# Estructura Matricial vs Funcional vs por Producto

Tres patrones fundamentales de organización para Software Factories, cada uno con tradeoffs diferentes.

## Visión General

| Patrón | Principio | Ejemplo |
|---|---|---|
| **Funcional** | Agrupar por especialidad | Todos los backend en un departamento |
| **Por Producto** | Agrupar por dominio de negocio | Equipo dedicado a pagos |
| **Matricial** | Combinar ambos | Ingenieros reportan a EM + Tech Lead |
| **Spotify** | Squad/Tribe/Chapter | Híbrido con doble reporte |

## 1. Estructura Funcional

### Diagrama
```
VP Engineering
├── Director Backend
│   ├── Team Backend A
│   ├── Team Backend B
│   └── Team Backend C
├── Director Frontend
│   ├── Team Web
│   ├── Team Mobile
│   └── Team Desktop
├── Director QA
│   ├── Team Manual QA
│   └── Team Automation
└── Director DevOps
    ├── Team CI/CD
    └── Team Infrastructure
```

### Características
| Aspecto | Detalle |
|---|---|
| **Reporting** | Por especialidad técnica |
| **Coordination** | Cross-team projects, matrix coordination |
| **Career path** | Clara dentro de cada función |
| **Knowledge sharing** | Alto dentro de la función |

### Ventajas
- Profundidad técnica (everyone with same skills together)
- Career progression clara (junior → senior → lead)
- Best practices compartidas fácilmente
- Hiring y onboarding por skill set

### Desventajas
- **Silos**: comunicación lenta entre funciones
- **Coordination overhead**: proyectos requieren múltiples departamentos
- **Ownership diluido**: nadie es dueño del producto completo
- **Delivery lento**: pasar features entre departments = handoffs

### Cuándo usar
- Organizaciones con pocos productos pero alta complejidad técnica
- Cuando la especialización es más importante que la velocidad
- Enterprise con compliance requirements por función

## 2. Estructura por Producto

### Diagrama
```
VP Product
├── Director Payments Product
│   ├── Backend devs (pagos)
│   ├── Frontend devs (pagos)
│   ├── QA (pagos)
│   ├── Designer (pagos)
│   └── PO (pagos)
├── Director Catalog Product
│   ├── Backend devs (catálogo)
│   ├── Frontend devs (catálogo)
│   ├── QA (catálogo)
│   └── PO (catálogo)
└── Director Platform Product
    ├── Platform engineers
    ├── SRE
    └── PO (platform)
```

### Características
| Aspecto | Detalle |
|---|---|
| **Reporting** | Por producto/dominio |
| **Coordination** | Cross-product concerns handled by platform team |
| **Career path** | Menos clara (generalists over specialists) |
| **Knowledge sharing** | Within product team es alto, cross-team es bajo |

### Ventajas
- **Ownership total**: el equipo es dueño del producto
- **Speed**: sin handoffs, decisiones rápidas
- **Alignment**: team entiende el business context
- **Autonomy**: el equipo puede iterar independientemente

### Desventajas
- **Duplicación**: cada equipo puede reinventar soluciones
- **Inconsistent standards**: cada equipo tiene sus patterns
- **Career**: más difícil para especialistas crecer técnicamente
- **Resource waste**: duplication de expertise

### Cuándo usar
- Organizaciones con múltiples productos distinctos
- Cuando time-to-market es crítico
- Cuando el business value es más importante que la eficiencia técnica

## 3. Estructura Matricial

### Diagrama
```
Functional Manager (EM Backend)    Project/Product Manager
         │                                    │
         ↓                                    ↓
    ┌─────────┐    Reports to both    ┌──────────┐
    │  Dev A   │ ←──────────────────→ │ Product X │
    └─────────┘                       └──────────┘
    ┌─────────┐                       ┌──────────┐
    │  Dev B   │ ←──────────────────→ │ Product Y │
    └─────────┘                       └──────────┘
```

### Características
| Aspecto | Detalle |
|---|---|
| **Reporting** | Dual: funcional + proyecto/producto |
| **Coordination** | Through the matrix structure |
| **Career path** | Clara en ambas dimensiones |
| **Flexibilidad** | Alta — recursos compartidos |

### Ventajas
- **Flexibilidad**: recursos se mueven entre proyectos
- **Utilización**: people can work on multiple things
- **Dual expertise**: technical depth + product knowledge
- **Resource efficiency**: no duplication de roles

### Desventajas
- **Conflicting priorities**: dos jefes = dos prioridades
- **Complexity**: difícil de manejar
- **Political**:谁 tiene más influence
- **Overhead**: más management needed

### Cuándo usar
- Organizaciones con recursos limitados que sirven múltiples productos
- Cuando la flexibilidad de asignación es prioritaria
- Transiciones entre modelos organizacionales

## 4. Comparación Directa

| Criterio | Funcional | Por Producto | Matricial | Spotify |
|---|---|---|---|---|
| **Velocidad de delivery** | Baja | Alta | Media | Alta |
| **Ownership** | Bajo | Alto | Medio | Alto |
| **Especialización** | Alta | Baja | Media | Media |
| **Flexibilidad** | Baja | Media | Alta | Media |
| **Complejidad org** | Baja | Baja | Alta | Alta |
| **Escalabilidad** | Media | Alta | Media | Alta |
| **Career clarity** | Alta | Baja | Media | Media |
| **Conway alignment** | Monolito | Microservicios | Híbrido | Microservicios |

## Modelo Híbrido Recomendado para SFs

La mayoría de [[../02-Estructura/01-organizacion-tipica|Software Factories]] exitosas usan un **híbrido**:

```
VP Engineering
├── Product-aligned Squads (ownership, speed)
│   ├── Squad: Payments (cross-functional)
│   ├── Squad: Catalog (cross-functional)
│   └── Squad: Mobile (cross-functional)
├── Platform Team (shared infrastructure)
│   ├── Platform Eng
│   ├── SRE
│   └── DevOps
├── Enabling Teams (temporal, knowledge transfer)
│   ├── Security Champions
│   ├── Architecture Guild
│   └── Quality Guild
└── Chapter Leads (career, standards)
    ├── Backend Chapter
    ├── Frontend Chapter
    └── QA Chapter
```

## Decision Framework

| Si necesitas... | Elige... |
|---|---|
| Deep technical expertise | Funcional |
| Fast product delivery | Por producto |
| Resource flexibility | Matricial |
| Balance entre todos | Híbrido (Spotify-like) |

## Referencias

- [[../02-Estructura/01-organizacion-tipica|Organización Típica]]
- [[../01-Fundamentos/10-conway-ley|Ley de Conway]]
- [[../02-Estructura/13-arbol-deportes|Team Topologies]]
- [[../02-Estructura/07-squad-tribe-chapter|Squads, Tribes, Chapters]]
- [[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]
