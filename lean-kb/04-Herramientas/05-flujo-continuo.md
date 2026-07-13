---
title: "Flujo Continuo (Continuous Flow)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Flujo Continuo
  - Continuous Flow
  - Flujo de Un Pieza
  - Single-Piece Flow
related:
  - "[[09-kanban]]"
  - "[[07-heijunka]]"
  - "[[01-5s]]"
  - "[[04-analisis-de-cuellos-de-botella]]"
  - "[[02-andon]]"
  - "[[10-pdca]]"
---

# Flujo Continuo (Continuous Flow)

El **Flujo Continuo** es un principio fundamental del [[Lean Manufacturing]] que consiste en mover **una pieza a la vez** a través del proceso de producción, de principio a fin, sin acumular inventario entre estaciones.

## Definición

Flujo Continuo significa que cada unidad de producto avanza al siguiente paso del proceso **inmediatamente** después de completar el paso anterior. No hay esperas, no hay acumulación, no hay lotes.

> El Flujo Continuo es lo opuesto al procesamiento por lotes (batch processing).

## Flujo Continuo vs Procesamiento por Lotes

| Aspecto | Flujo Continuo | Procesamiento por Lotes |
|---------|----------------|------------------------|
| Tamaño de lote | 1 pieza | Muchas piezas |
| Tiempo en sistema | Mínimo | Largo (WIP alto) |
| Detección de defectos | Inmediata | Retrasada |
| Flexibilidad | Alta | Baja |
| Espacio requerido | Menos | Más |
| Complejidad de coordinación | Mayor | Menor |
| Feedback de calidad | Rápido | Lento |

## Concepto: Single-Piece Flow (Un Pieza a la Vez)

El **Single-Piece Flow** es la forma más pura de Flujo Continuo: una pieza se mueve de una estación a la siguiente, completando todo el proceso antes de comenzar la siguiente.

**Ejemplo:**
```
Procesamiento por lotes (10 piezas):
A A A A A A A A A A → B B B B B B B B B B → C C C C C C C C C C
(Tiempo total: 30 unidades de tiempo)

Flujo Continuo (1 pieza):
A → B → C (pieza 1 completa en 3)
A → B → C (pieza 2 completa en 6)
...
(Tiempo total: 12 unidades de tiempo, primera pieza lista en 3)
```

## Requisitos para Flujo Continuo

### 1. Tiempos de Cambio Cortos
El procesamiento por lotes se justifica cuando los cambios de configuración son largos. Flujo Continuo requiere **[[07-heijunka|SMED]]** o tiempos de setup mínimos.

### 2. Trabajo Balanceado
Cada estación debe tener un tiempo de ciclo **igual o menor** al [[07-heijunka|Takt Time]]. Si una estación es más lenta, se crea un [[04-analisis-de-cuellos-de-botella|cuello de botella]].

### 3. Baja Variabilidad
La variabilidad en tiempos de ciclo destruye el Flujo Continuo. Se necesita procesos estables y predecibles.

### 4. Calidad en la Fuente
Los defectos deben detectarse al instante. [[02-andon|Andon]] y [[11-poka-yoke|Poka-Yoke]] son esenciales para que el flujo no se interrumpa.

### 5. Espacio Organizado
[[01-5s|5S]] es la base: un espacio desordenado impide el movimiento fluido de piezas.

## Beneficios del Flujo Continuo

| Beneficio | Descripción |
|-----------|-------------|
| Reducción de inventario | Sin WIP acumulado entre estaciones |
| Detección inmediata de defectos | El problema se ve al momento |
| Tiempo de ciclo corto | La pieza recorre el proceso rápidamente |
| Mayor flexibilidad | Respuesta ágil a cambios de demanda |
| Mejor uso del espacio | Menos área para inventario intermedio |
| Visibilidad de problemas | Sin WIP que esconda ineficiencias |

## Conexión con Pull y JIT

El Flujo Continuo es un componente esencial de [[02-Pilares/01-just-in-time|Just-in-Time (JIT)]]:

- **JIT** = lo correcto, cantidad correcta, momento correcto
- **Flujo Continuo** = el mecanismo para lograr que las piezas se muevan sin pausa
- **[[09-kanban|Kanban]]** = la señal que regula cuándo producir siguiente pieza
- **[[07-heijunka|Heijunka]]** = la nivelación que hace posible el Flujo Continuo

```
JIT = Objetivo
Flujo Continuo = Cómo
Kanban = Señal
Heijunka = Planificación
```

## Flujo Continuo en Software

En desarrollo de software, el Flujo Continuo se manifiesta como:
- **Entrega continua** (Continuous Delivery) de código a producción
- **Feature branches** cortas que se fusionan rápidamente
- **CI/CD pipelines** que mueven código de commit a deploy sin pausa
- **Kanban boards** con WIP limits para forzar Flujo Continuo

**Relación con [[09-kanban|Kanban digital]]:** Los WIP limits en herramientas como Jira o Trello son la implementación de Flujo Continuo en software.

## Desafíos

- **Cambios de configuración** — Requieren tiempos mínimos (SMED)
- **Variabilidad de demanda** — Dificulta balancear el flujo
- **Cuellos de botella** — Un solo proceso lento rompe todo el flujo
- **Resistencia al cambio** — Los lotes son "cómodos" pero ineficientes
- **Procesos con tiempos muy diferentes** — Puede requerir re-diseño del proceso

## Notas Relacionadas

- [[09-kanban]] — Señales que regulan el Flujo Continuo
- [[07-heijunka]] — Nivelación que hace posible el Flujo Continuo
- [[01-5s]] — Base organizativa para el flujo
- [[04-analisis-de-cuellos-de-botella]] — El cuello de botella rompe el flujo
- [[02-andon]] — Protección del flujo ante defectos
- [[10-pdca]] — Ciclo para mejorar el flujo continuamente
- [[02-Pilares/01-just-in-time|JIT]] — El pilar que el Flujo Continuo sostiene
- [[01-Fundamentos/01-que-es-lean|Lean Manufacturing]] — Contexto general
