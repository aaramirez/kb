---
title: Sistemas Multi-Agente
tags:
  - sistemico/ia
  - type/concepto
source: Wooldridge (2009), Russell & Norvig (2020)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Multi-Agent Systems
  - MAS
  - Agentic Systems
---

# Sistemas Multi-Agente

Los sistemas multi-agente (MAS) son la aplicación más directa del pensamiento sistémico a la IA. Un MAS es un [[06-Sistemas-Complejos/01-sistemas-adaptativos-complejos|sistema adaptativo complejo]] donde los agentes son entidades de IA autónomas.

## Definición

Un sistema multi-agente tiene:
- **Múltiples agentes** con capacidades y roles específicos
- **Interacción** entre agentes (comunicación, cooperación, competencia)
- **Entorno compartido** que los agentes perciben y modifican
- **Organización**: estructura que define cómo se relacionan

> "Un sistema multi-agente es un sistema compuesto por múltiples agentes que interactúan en un entorno común." — Michael Wooldridge

## Arquitecturas

### Orquestador (Centralizada)
```
        ┌──────────────┐
        │ Orquestador  │
        └──┬───┬───┬──┘
           │   │   │
     ┌─────┘   │   └─────┐
     ▼         ▼         ▼
  ┌──────┐ ┌──────┐ ┌──────┐
  │Agent1│ │Agent2│ │Agent3│
  └──────┘ └──────┘ └──────┘
```
Un agente central coordina a los demás. Clara, controlable, cuello de botella.

### Enjambre (Descentralizada)
```
  ┌──────┐     ┌──────┐
  │Agent1│◄───►│Agent2│
  └──────┘     └──────┘
      ▲           ▲
      │           │
  ┌──────┐     ┌──────┐
  │Agent3│◄───►│Agent4│
  └──────┘     └──────┘
```
Agentes peer-to-peer. Auto-organizada, resiliente, difícil de controlar.

### Híbrida (Por niveles)
Combina orquestación a alto nivel con auto-organización local.

## Propiedades Sistémicas

| Propiedad | En MAS | Conexión con KB |
|-----------|--------|-----------------|
| **Emergencia** | Comportamiento global que ningún agente individual planeó | [[02-Conceptos-Clave/04-emergencia-y-auto-organizacion]] |
| **Auto-organización** | Agentes que se coordinan sin control central | [[06-Sistemas-Complejos/01-sistemas-adaptativos-complejos]] |
| **Bucles de feedback** | Agentes que se influyen mutuamente | [[02-Conceptos-Clave/01-bucles-retroalimentacion]] |
| **Redes** | Topología de comunicación entre agentes | [[06-Sistemas-Complejos/03-redes-y-conectividad]] |
| **Límites** | Capacidad de cómputo, ventana de contexto | [[02-Conceptos-Clave/05-limites-y-retardos]] |

## Arquetipos en MAS

| Arquetipo Sistémico | Manifestación en MAS |
|--------------------|---------------------|
| Límites del crecimiento | Más agentes → más comunicación → mayor latencia → límite práctico |
| Desplazamiento de la carga | Agente orquestador que micro-gestiona → agentes no desarrollan autonomía |
| Tragedia del común | Agentes que compiten por recursos compartidos (contexto, herramientas) |
| Éxito para los exitosos | Un agente recibe más tareas porque es bueno → otros no se desarrollan |

## Conexión con la KB

El diseño de MAS requiere aplicar todos los conceptos de esta KB:
- [[01-Fundamentos/04-propiedades-de-los-sistemas]] — Totalidad, sinergia
- [[02-Conceptos-Clave/02-arquetipos-sistemicos]] — Diagnosticar patrones disfuncionales
- [[04-System-Dynamics/02-diagramas-stock-flujo]] — Modelar flujo de información
- [[02-Conceptos-Clave/03-puntos-apalancamiento]] — Dónde intervenir en la arquitectura
- [[03-Grandes-Pensadores/01-peter-senge]] — El MAS como sistema que aprende

## Referencias

- Wooldridge, M. (2009). *An Introduction to MultiAgent Systems.* Wiley.
- Russell, S. & Norvig, P. (2020). *Artificial Intelligence: A Modern Approach.* Pearson.
- Weiss, G. (2013). *Multiagent Systems.* MIT Press.
- Jennings, N. (2000). "On agent-based software engineering." *Artificial Intelligence.*
