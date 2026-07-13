---
title: "Ley de Conway y Diseño de Sistemas"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "Ley de Conway"
  - "Conway's Law"
  - "Inverse Conway Maneuver"
related:
  - "[[../01-Fundamentos/01-que-es-software-factory|Software Factory]]"
  - "[[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]"
  - "[[../01-Fundamentos/13-plataformas-ingenieria|Plataformas]]"
---

# Ley de Conway y Diseño de Sistemas

La **Ley de Conway** (1967) establece una relación profunda entre la estructura organizacional y la arquitectura de los sistemas que construye.

## Definición original

> "Organizaciones que diseñan sistemas están limitadas a producir diseños que son copias de las estructuras de comunicación de las organizaciones." — Melvin Conway

**En otras palabras:** la forma en que tu equipo se comunica determina la forma en que tu software se estructura.

## Ejemplo clásico

```
Organización:          Sistema resultante:
┌─────────┐           ┌─────────┐
│  Equipo A│──→       │   Módulo A│
└─────────┘           └────┬────┘
                           │
┌─────────┐           ┌────▼────┐
│  Equipo B│──→       │   Módulo B│
└─────────┘           └─────────┘
```

Si los equipos no se comunican, los módulos no se comunican. Si los equipos se comunican mucho, los módulos se acoplan.

## Inverse Conway Maneuver

La **inversión** de la Ley de Conway sugiere:

> Diseña primero la arquitectura deseada del sistema, y luego organiza los equipos para que coincidan.

```
INVERSO:
1. Diseñar arquitectura target
2. Definir boundaries de sistemas
3. Organizar equipos alrededor de esos boundaries
4. Los equipos construyen lo que les corresponde
```

### Ejemplo práctico

| Arquitectura deseada | Equipo necesario |
|---------------------|------------------|
| API Gateway | Equipo de Platform |
| User Service | Equipo de Identity |
| Payment Service | Equipo de Payments |
| Notification Service | Equipo de Comms |

## Team Topologies

Matthew Skelton y Manuel Pais formalizaron este concepto en **Team Topologies** (2019):

### 4 tipos de equipos

| Tipo | Responsabilidad | Ejemplo |
|------|-----------------|---------|
| **Stream-aligned** | aligned con flujo de negocio | Equipo de producto |
| **Platform** | provee servicios internos | Equipo de plataforma |
| **Enabling** | habilita a otros equipos | Equipo de DevOps |
| **Complicated-subsystem** | especialización profunda | Equipo de ML/AI |

### 3 tipos de interacción

| Tipo | Descripción | Duración |
|------|-------------|----------|
| **Collaboration** | Trabajar juntos en algo nuevo | Temporal |
| **X-as-a-Service** | Un equipo consume servicio de otro | Permanente |
| **Facilitating** | Un equipo ayuda a otro a mejorar | Temporal |

## Aplicación en Software Factory

La [[../01-Fundamentos/01-que-es-software-factory|Software Factory]] aplica la Ley de Conway:

### Estructura tipo

```
┌─────────────────────────────────────────┐
│           PLATFORM TEAM                │
│  (Infra, CI/CD, Observability)         │
├──────────┬──────────┬───────────────────┤
│ PRODUCT  │ PRODUCT  │ PRODUCT           │
│ TEAM A   │ TEAM B   │ TEAM C            │
│ (User)   │ (Pay)    │ (Notif)           │
└──────────┴──────────┴───────────────────┘
```

### Principios

1. **Equipos cross-functionales**: cada equipo tiene todas las habilidades
2. **Ownership claro**: cada equipo es dueño de su dominio
3. **Interfaces definidas**: contratos entre equipos
4. **Platform como servicio**: equipo central soporta a otros
5. **Reducir dependencias**: minimizar sincronización entre equipos

## Errores comunes

### 1. Microservicios con equipo monolítico

```
❌ Un equipo construye 50 microservicios
✅ Cada equipo construye 2-3 microservicios relacionados
```

### 2. Monolito con equipos aislados

```
❌ Un monolito donde cada equipo toca todo
✅ Monolito con módulos claros por equipo
```

### 3. Equipos sin boundaries claros

```
❌ "El equipo de backend hace todo"
✅ "Equipo A: User Domain, Equipo B: Payment Domain"
```

## Ley de Conway y Arquitectura Limpia

[[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]] se beneficia de la Ley de Conway:

- **Dependency Rule**: las dependencias van hacia adentro → equipos independientes
- **Ports & Adapters**: interfaces claras → contratos entre equipos
- **Use Cases**: lógica de negocio separada → ownership por dominio

## Métricas de Conway

| Métrica | Descripción |
|---------|-------------|
| **Communication patterns** | Cómo se comunican los equipos |
| **Dependency graph** | Dependencias entre módulos |
| **Code ownership** | Quién es dueño de qué |
| **Change coupling** | Qué cambia junto |

## Relación con otros conceptos

- Fundamenta la estructura de la [[../01-Fundamentos/01-que-es-software-factory|Software Factory]]
- Se integra con [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]
- Se soporta en [[../01-Fundamentos/13-plataformas-ingenieria|Plataformas de ingeniería]]
- Complementa [[../01-Fundamentos/14-software-categoria-a|segmentación de software]]
- Aplicable en [[../03-Procesos/README|procesos y flujos]]
