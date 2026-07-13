---
title: "Análisis de Cuellos de Botella"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Cuellos de Botella
  - Bottleneck Analysis
  - TOC
  - Theory of Constraints
  - Análisis de Restricciones
related:
  - "[[05-flujo-continuo]]"
  - "[[07-heijunka]]"
  - "[[09-kanban]]"
  - "[[03-a3-resolucion-problemas]]"
  - "[[10-pdca]]"
  - "[[12-los-cinco-porques]]"
---

# Análisis de Cuellos de Botella

El **Análisis de Cuellos de Botella** (Bottleneck Analysis) es una herramienta de [[Lean Manufacturing]] para identificar y eliminar la restricción que limita el throughput (capacidad de salida) de un sistema. Se fundamenta en la **Teoría de Restricciones** (TOC) de Eliyahu Goldratt.

## Definición

Un **cuello de botella** (bottleneck) es cualquier recurso o proceso cuya capacidad es **igual o menor** que la demanda que se le impone, limitando así la capacidad total del sistema.

> "El throughput de un sistema está determinado por su recurso más limitado." — Eliyahu Goldratt

## Teoría de Restricciones (TOC)

La TOC establece que todo sistema tiene al menos **una restricción** que limita su desempeño. Los cinco pasos de enfoco de la TOC son:

1. **Identificar** la restricción del sistema
2. **Explotar** la restricción (maximizar su uso sin grandes inversiones)
3. **Subordinar** todo lo demás a la restricción
4. **Elevar** la restricción (aumentar su capacidad)
5. **Prevenir** la inercia — repetir el ciclo si la restricción cambia

**Relación con [[10-pdca|PDCA]]:** Estos pasos siguen un ciclo de mejora continua similar a PDCA.

## Cómo Identificar Cuellos de Botella

### Señales Comunes
- **Colas de trabajo** acumulándose antes de un paso del proceso
- **Tiempo de espera** excesivo en una estación
- **Productos a medio acabar** (WIP) concentrados en un área
- **Sobrecarga** de equipo o personas en un punto específico
- **Entregas tardías** repetitivas

### Métodos de Identificación

1. **Observación directa (Gemba)** — Ir al lugar de los hechos y observar el flujo de trabajo
2. **Mapa de flujo de valor (VSM)** — Mapear tiempos de cada paso
3. **Medición de capacidad** — Comparar capacidad de cada paso con la demanda
4. **Análisis de datos** — Métricas de throughput, tiempos de ciclo, utilización

## Métodos de Análisis

### Análisis de Capacidad vs Demanda

| Estación | Capacidad | Demanda | Estado |
|----------|-----------|---------|--------|
| Estación A | 100 u/día | 80 u/día | ✅ OK |
| Estación B | 60 u/día | 80 u/día | 🔴 Cuello de botella |
| Estación C | 90 u/día | 80 u/día | ✅ OK |

### Diagrama de Ishikawa (Espina de Pescado)

Para analizar las causas del cuello de botella, se puede usar un diagrama de Ishikawa结合 con [[12-los-cinco-porques|5 Porqués]] para llegar a la causa raíz.

## Estrategias para Mejorar el Cuello de Botella

### Sin Inversión (Explotar)
- Eliminar tiempo muerto en la estación
- Optimizar secuencia de trabajo
- Reducir tiempo de cambio (SMED)
- Asegurar que la estación nunca esté ociosa

### Con Inversión (Elevar)
- Agregar capacidad (más máquinas, más personal)
- Automatizar procesos manuales
- Mejorar la tecnología existente

### Rediseño del Proceso
- Redistribuir trabajo entre estaciones
- Dividir el cuello de botella en dos o más pasos
- Eliminar pasos innecesarios ([[03-Desperdicios/01-marco-3m|Muda]])

## Relación con Flujo y Takt Time

- **[[05-flujo-continuo|Flujo Continuo]]** se ve interrumpido por los cuellos de botella. El flujo solo funciona si todas las estaciones tienen capacidad suficiente.
- **[[07-heijunka|Takt Time]]** define el ritmo necesario. Si un proceso no puede alcanzar el Takt Time, es un cuello de botella.
- **[[09-kanban|Kanban]]** puede exponer cuellos de botella al limitar el WIP y hacer visibles las acumulaciones.

## Ejemplo

Una línea de producción tiene 4 estaciones:

```
Estación A → Estación B → Estación C → Estación D
(8 min/ud)  (12 min/ud)  (8 min/ud)  (8 min/ud)
```

La demanda es 50 unidades por día (8 horas = 480 min). Takt Time = 480/50 = **9.6 min/ud**.

- Estación B tiene un tiempo de ciclo de 12 min, mayor al Takt Time de 9.6 min.
- **Estación B es el cuello de botella.**

Solución: Reducir el tiempo de ciclo de Estación B a ≤9.6 min mediante [[10-pdca|PDCA]].

## Errores Comunes

- **Mejorar donde no hay cuello** — Optimizar estaciones que no son la restricción es desperdicio
- **Ignorar cuellos externos** — Proveedores, sistemas de IT, procesos administrativos
- **No re-evaluar** — La restricción puede cambiar después de mejorar una
- **Local vs Global** — Una mejora local que no mejora el throughput global es inútil

## Notas Relacionadas

- [[05-flujo-continuo]] — El flujo continuo requiere eliminar cuellos de botella
- [[07-heijunka]] — La nivelación ayuda a prevenir cuellos de botella
- [[09-kanban]] — El sistema Kanban expone cuellos de botella
- [[03-a3-resolucion-problemas]] — Documentar el análisis de cuello de botella en A3
- [[10-pdca]] — Ciclo para implementar mejoras en el cuello de botella
- [[12-los-cinco-porques]] — Analizar causa raíz del cuello de botella
- [[06-gemba]] — Observar el cuello de botella en el lugar real
- [[01-Fundamentos/01-que-es-lean|Lean Manufacturing]] — Contexto general
