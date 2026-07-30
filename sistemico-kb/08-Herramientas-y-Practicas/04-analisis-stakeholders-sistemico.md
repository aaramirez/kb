---
title: Análisis de Stakeholders Sistémico
tags:
  - sistemico/herramientas
  - type/herramienta
source: Ackoff (1999), Checkland (1981)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Systemic Stakeholder Analysis
  - Mapeo de Actores
---

# Análisis de Stakeholders Sistémico

El análisis de stakeholders tradicional cataloga actores. El **análisis sistémico** mapea las **relaciones, bucles y conflictos estructurales** entre ellos.

## Diferencia con el Enfoque Tradicional

| Tradicional | Sistémico |
|-------------|-----------|
| Lista de actores | Red de relaciones |
| Interés de cada actor | Bucles de influencia mutua |
| Matriz poder-interés | Mapa de dinámicas relacionales |
| Estrategia por actor | Diseño del sistema de relaciones |
| Estático | Dinámico (cambia con el tiempo) |

## Metodología

### 1. Identifica a los Actores
No solo los obvios. Pregunta:
- ¿Quién se ve afectado aunque no participe?
- ¿Quién tiene influencia indirecta?
- ¿El sistema mismo como actor (IA, algoritmos, procesos)?

### 2. Mapea las Relaciones
```
  ┌─────────┐              ┌─────────┐
  │  Actor  │──(depende)──►│  Actor  │
  │    A    │◄─(conflicto)─│    B    │
  └─────────┘              └─────────┘
       │                        │
       │    ┌─────────┐         │
       └────│  Actor  │◄────────┘
            │    C    │
            └─────────┘
```

### 3. Identifica Bucles de Relación

**Bucle reforzador**: Conflicto entre A y B → A presiona a C → C apoya a B → más conflicto.

**Bucle balanceador**: Presión externa sobre A y B → ambos cooperan → presión se reduce.

### 4. Puntos de Apalancamiento en la Red

- ¿Qué actor conecta grupos que no se comunican? (broker)
- ¿Qué relación, si cambiara, cambiaría todo el sistema?
- ¿Qué actor tiene influencia desproporcionada?

## Aplicación en Sistemas de IA

Cuando el sistema incluye IA, los stakeholders incluyen:
- Usuarios humanos
- Modelos de IA (como actores con "comportamiento")
- Entrenadores humanos (RLHF)
- Reguladores
- Datos (el dataset como stakeholder pasivo)
- El sistema completo como entidad emergente

## Referencias

- Ackoff, R. (1999). *Re-Creating the Corporation.*
- Checkland, P. (1981). *Systems Thinking, Systems Practice.*
- Freeman, R. E. (1984). *Strategic Management: A Stakeholder Approach.*
- Williams, B. & Hummelbrunner, R. (2009). *Systems Concepts in Action.*
