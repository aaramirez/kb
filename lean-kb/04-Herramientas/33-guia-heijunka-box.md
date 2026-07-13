---
title: "Guía de Heijunka Box"
tags:
  - lean/herramientas
  - type/guia
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Guía Heijunka Box
  - Caja Heijunka
  - Heijunka Box Guide
  - Nivelación de Producción
related:
  - "[[07-heijunka]]"
  - "[[09-kanban]]"
  - "[[14-takt-time]]"
  - "[[13-smed]]"
  - "[[05-flujo-continuo]]"
---

# Guía de Heijunka Box

Esta guía describe cómo diseñar y usar una [[07-heijunka|Heijunka Box]] (caja de nivelación) para planificar y nivelar la producción por volumen y mezcla.

## ¿Qué es una Heijunka Box?

Una Heijunka Box es un tablero físico que organiza la producción en intervalos de tiempo iguales, distribuyendo la variedad de productos de forma equilibrada. Es la herramienta que hace posible la [[07-heijunka|Heijunka]] (nivelación).

## Diseño de la Heijunka Box

### Estructura Básica

```
┌─────────────────────────────────────────────────────────────┐
│                    HEIJUNKA BOX                              │
├──────┬──────┬──────┬──────┬──────┬──────┬──────┬────────────┤
│      │ 7:00 │ 7:30 │ 8:00 │ 8:30 │ 9:00 │ 9:30 │   ...     │
├──────┼──────┼──────┼──────┼──────┼──────┼──────┼────────────┤
│Prod A│ [A]  │ [A]  │ [A]  │ [A]  │ [A]  │ [A]  │           │
├──────┼──────┼──────┼──────┼──────┼──────┼──────┼────────────┤
│Prod B│ [B]  │ [B]  │ [B]  │      │ [B]  │ [B]  │           │
├──────┼──────┼──────┼──────┼──────┼──────┼──────┼────────────┤
│Prod C│      │ [C]  │      │ [C]  │      │ [C]  │           │
├──────┼──────┼──────┼──────┼──────┼──────┼──────┼────────────┤
│Prod D│ [D]  │      │ [D]  │      │ [D]  │      │           │
└──────┴──────┴──────┴──────┴──────┴──────┴──────┴────────────┘

[C] = Tarjeta Kanban de producción
Cada columna = Un intervalo de tiempo (ej: 30 minutos)
```

### Paso 1: Determinar el Intervalo de Tiempo

El intervalo depende del [[14-takt-time|Takt Time]] y la variedad:

- **Takt Time < 5 min:** Intervalos de 15-30 minutos
- **Takt Time 5-15 min:** Intervalos de 30-60 minutos
- **Takt Time > 15 min:** Intervalos de 60-120 minutos

**Regla general:** El intervalo debe ser suficiente para producir al menos una unidad de cada producto.

### Paso 2: Calcular la Secuencia de Producción

Para cada producto, calcular cuántas unidades por intervalo:

**Ejemplo:**
- Demanda diaria: Prod A = 24, Prod B = 12, Prod C = 8, Prod D = 6
- Turno: 8 horas = 16 intervalos de 30 minutos

| Producto | Demanda | Por intervalo | Frecuencia |
|----------|---------|---------------|------------|
| Prod A | 24 | 24/16 = 1.5 → 2 | Cada intervalo |
| Prod B | 12 | 12/16 = 0.75 → 1 | Cada 2 intervalos |
| Prod C | 8 | 8/16 = 0.5 | Cada 2 intervalos |
| Prod D | 6 | 6/16 = 0.375 → 1 | Cada 3 intervalos |

### Paso 3: Crear la Secuencia de Mezcla

Distribuir los productos de forma equilibrada:

```
Secuencia óptima: A-B-A-C-A-B-A-D-A-B-A-C-A-B-A-D

Intervalo:  1    2    3    4    5    6    7    8
Producto:   A-B  A-C  A-B  A-D  A-B  A-C  A-B  A-D
```

### Paso 4: Diseñar el Tablero

**Materiales:**
- Tablero de corcho o pizarra
- Ranuras para tarjetas Kanban
- Tarjetas de colores por producto
- Etiquetas de tiempo

**Layout físico:**
```
┌──────────────────────────────────────────────────────────┐
│  HEIJUNKA BOX - Línea de Ensamble                       │
├────────┬──────┬──────┬──────┬──────┬──────┬──────┬───────┤
│        │7:00  │7:30  │8:00  │8:30  │9:00  │9:30  │...    │
├────────┼──────┼──────┼──────┼──────┼──────┼──────┼───────┤
│Prod A  │▓A▓▓▓ │▓A▓▓▓ │▓A▓▓▓ │▓A▓▓▓ │▓A▓▓▓ │▓A▓▓▓ │       │
│(azul)  │      │      │      │      │      │      │       │
├────────┼──────┼──────┼──────┼──────┼──────┼──────┼───────┤
│Prod B  │░B░░░ │      │░B░░░ │      │░B░░░ │      │       │
│(rojo)  │      │      │      │      │      │      │       │
├────────┼──────┼──────┼──────┼──────┼──────┼──────┼───────┤
│Prod C  │      │▒C▒▒▒ │      │▒C▒▒▒ │      │▒C▒▒▒ │       │
│(verde) │      │      │      │      │      │      │       │
├────────┼──────┼──────┼──────┼──────┼──────┼──────┼───────┤
│Prod D  │█D███ │      │      │█D███ │      │      │       │
│(amaril)│      │      │      │      │      │      │       │
└────────┴──────┴──────┴──────┴──────┴──────┴──────┴───────┘
```

## Uso Diario de la Heijunka Box

### Flujo de Tarjetas

```
Inicio del turno:
1. Productor retira tarjetas del intervalo actual
2. Produce las cantidades indicadas
3. Entrega el producto al siguiente proceso
4. Mueve la tarjeta a "Completado"

Fin del intervalo:
5. Se activan las tarjetas del siguiente intervalo
```

### Reglas de Uso

1. **Solo producir lo indicado en la tarjeta** — No más, no menos
2. **Respetar la secuencia** — No saltar productos
3. **Respetar el intervalo** — No adelantar producción
4. **Reportar problemas** — Si no se puede cumplir, alertar inmediatamente
5. **Reducir inventario** — La Heijunka reduce la necesidad de stock

## Integración con Kanban

La Heijunka Box usa tarjetas [[09-kanban|Kanban]] como señales de producción:

| Tipo de Kanban | Función en Heijunka |
|----------------|---------------------|
| Kanban de producción | Señal para producir en la celda |
| Kanban de supermarket | Señal para reponer desde almacén |
| Kanban de secuencia | Secuencia específica de ensamble |

## Requisitos Previos

Antes de implementar una Heijunka Box, se necesita:
- **[[13-smed|SMED]]** — Tiempos de cambio cortos para alternar productos
- **[[01-5s|5S]]** — Espacio organizado para la Heijunka
- **[[19-trabajo-estandarizado|Standard Work]]** — Procesos estandarizados
- **[[05-flujo-continuo|Flujo Continuo]]** — Procesos con flujo entre celdas

## Beneficios

| Beneficio | Impacto |
|-----------|---------|
| Nivelación de volumen | Produce lo mismo cada intervalo |
| Nivelación de mezcla | Distribuye variedad equilibradamente |
| Reducción de inventario | No se produce "para tener stock" |
| Previsibilidad | El equipo sabe qué producir y cuándo |
| Detección temprana de problemas | La Heijunka expone fallas de capacidad |

## Errores Comunes

| Error | Consecuencia | Solución |
|-------|-------------|----------|
| No tener SMED | Los cambios de producto toman demasiado | Implementar SMED primero |
| No respetar la secuencia | Se pierde la nivelación | Capacitar y hacer auditorías |
| Intervalos muy grandes | Se acumula inventario | Ajustar intervalos al Takt Time |
| No reportar problemas | El sistema se desajusta | Crear protocolo de alertas |
| No actualizar la demanda | La Heijunka no refleja la realidad | Recalcular semanalmente |

## Notas Relacionadas

- [[07-heijunka]] — Conceptos de nivelación de producción
- [[09-kanban]] — Tarjetas que usan la Heijunka Box
- [[14-takt-time]] — Base para calcular intervalos
- [[13-smed]] — Requisito previo para Heijunka
- [[05-flujo-continuo]] — Flujo que la Heijunka soporta
- [[01-5s]] — Espacio para la Heijunka Box
- [[19-trabajo-estandarizado]] — Procesos estandarizados que la Heijunka usa
