---
title: Agentes como Sistemas Autónomos
tags:
  - sistemico/ia
  - type/concepto
source: Russell & Norvig (2020), Wooldridge (2009)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Autonomous Agents
  - AI Agents
  - Agentes Autónomos
---

# Agentes como Sistemas Autónomos

Un agente de IA es un **sistema abierto** (ver [[01-Fundamentos/05-sistemas-abiertos-vs-cerrados]]) que percibe su entorno, procesa información, actúa y aprende de las consecuencias.

## El Ciclo del Agente

```
                ┌──────────────────────────────┐
                │          ENTORNO             │
                └──┬──────────┬──────────┬─────┘
                   │          │          │
         Percepción│          │          │Acción
                   ▼          │          ▲
            ┌──────────┐      │      ┌──────────┐
            │ Sensores │      │      │Actuadores│
            └────┬─────┘      │      └────┬─────┘
                 │            │           │
                 ▼            ▼           │
            ┌─────────────────────────┐   │
            │     Procesamiento       │───┘
            │ (Modelo + Memoria +     │
            │  Razonamiento)          │
            └─────────────────────────┘
                        │
                        ▼
                 ┌──────────────┐
                 │  Memoria     │ (stock)
                 │ (Experiencia)│
                 └──────────────┘
```

## La Memoria como Stock

La memoria del agente es un **stock** (ver [[04-System-Dynamics/02-diagramas-stock-flujo]]):
- **Inflow**: Nueva información del entorno
- **Outflow**: Información que sale de la ventana de contexto
- **Stock acumulado**: Historia de interacciones

El manejo de la memoria (qué se retiene, qué se olvida) determina el comportamiento del agente.

## Tipos de Agentes como Sistemas

| Tipo | Percepción | Procesamiento | Actuación | Aprendizaje |
|------|------------|---------------|-----------|-------------|
| **Reactivo** | Inmediata | Reglas fijas | Directa | Ninguno |
| **Basado en modelo** | +Estado interno | Modelo del mundo | Planificada | Ninguno |
| **Basado en objetivos** | +Estado interno | +Metas | Planificada hacia meta | Ninguno |
| **Basado en utilidad** | +Estado interno | +Metas +Preferencias | Optimizada | Ninguno |
| **Aprendizaje** | Todo lo anterior | Todo lo anterior | +Aprendizaje | Continuo |

## Propiedades Sistémicas del Agente

| Propiedad | En el Agente |
|-----------|-------------|
| **Sistema abierto** | El agente intercambia información con el entorno |
| **Auto-regulación** | Ajusta su comportamiento según feedback |
| **Equifinalidad** | Puede lograr el mismo objetivo por diferentes caminos |
| **Adaptación** | Cambia su comportamiento con la experiencia |
| **Límites** | Su alcance está definido por herramientas y contexto |
| **Retardos** | Delay entre acción y feedback |

## Conexión con la KB

- [[01-Fundamentos/05-sistemas-abiertos-vs-cerrados]] — El agente como sistema abierto
- [[04-System-Dynamics/02-diagramas-stock-flujo]] — Memoria como stock
- [[02-Conceptos-Clave/01-bucles-retroalimentacion]] — Ciclo percepción→acción→feedback
- [[02-Conceptos-Clave/04-emergencia-y-auto-organizacion]] — Comportamiento emergente en MAS
- [[03-Grandes-Pensadores/05-ludwig-von-bertalanffy]] — El agente como sistema abierto
- [[07-Pensamiento-Sistemico-y-IA/06-diseno-sistemas-ai-native]] — Diseño de arquitecturas de agentes

## Referencias

- Russell, S. & Norvig, P. (2020). *Artificial Intelligence: A Modern Approach.* Pearson.
- Wooldridge, M. (2009). *An Introduction to MultiAgent Systems.* Wiley.
- Minsky, M. (1986). *The Society of Mind.* Simon & Schuster.
- Brooks, R. (1990). "Elephants Don't Play Chess." *Robotics and Autonomous Systems.*
