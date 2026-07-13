---
title: "TOC: Los 5 Pasos de Enfoque"
tags:
  - lean/complementarias
  - type/concepto
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: "Complementarias"
aliases:
  - 5 Focusing Steps
  - Cinco Pasos TOC
related:
  - "[[02-teoria-de-restricciones]]"
  - "[[04-Herramientas/04-analisis-de-cuellos-de-botella]]"
  - "[[04-Herramientas/05-flujo-continuo]]"
  - "[[01-six-sigma-vista-general]]"
  - "[[04-Herramientas/10-pdca]]"
  - "[[11-mapa-metodologias-comparativo]]"
---

# TOC: Los 5 Pasos de Enfoque

## ¿Qué son los 5 Pasos?

Los 5 Pasos de Enfoque son el corazón metodológico de la [[02-teoria-de-restricciones|Teoría de Restricciones (TOC)]]. Constituyen un ciclo iterativo para mejorar continuamente el desempeño de cualquier sistema.

> *"No se puede mejorar todo a la vez. Se debe mejorar la restricción a la vez."*

## Los 5 Pasos

```
┌─────────────────────────────────────┐
│  1. IDENTIFICAR la restricción      │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│  2. EXPLOTAR la restricción         │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│  3. SUBORDINAR todo lo demás        │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│  4. ELEVAR la restricción           │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│  5. PREVENIR la inercia             │
└──────────────┬──────────────────────┘
               │
               └──→ Volver al paso 1
```

### Paso 1: Identificar la Restricción

La restricción (cuello de botella) es lo que **más limita** el throughput del sistema.

**Cómo identificarla:**
- ¿Dónde se acumula el WIP (work-in-process)?
- ¿Qué proceso tiene la mayor carga de trabajo?
- ¿Qué recurso tiene la menor capacidad relativa?
- ¿Qué proceso tiene el mayor tiempo de espera?

**Ejemplo:** En una línea de producción con 4 estaciones, la estación con el tiempo de ciclo más largo es la restricción.

### Paso 2: Explotar la Restricción

Maximizar el uso de la restricción **sin invertir** en más capacidad.

**Estrategias:**
- Asegurar que la restricción nunca esté ociosa
- Eliminar tiempo muerto (setup, cambios, breaks)
- Procesar solo unidades de calidad (no reprocesar)
- Optimizar la secuencia de trabajo
- Reducir tiempo de cambio ([[04-Herramientas/13-smed|SMED]])

### Paso 3: Subordinar Todo lo Demás

Sincronizar todo el sistema al ritmo de la restricción.

**Principios:**
- No producir más de lo que la restricción puede procesar
- Liberar trabajo solo cuando la restricción lo necesita
- Usar [[04-Herramientas/09-kanban|Kanban]] para controlar el flujo hacia la restricción
- Los procesos antes de la restricción deben producir según la demanda del drum

### Paso 4: Elevar la Restricción

Aumentar la capacidad de la restricción.

**Opciones:**
- Agregar capacidad (más máquinas, más turnos, más personal)
- Subcontratar temporalmente
- Automatizar procesos manuales
- Mejorar la tecnología o herramientas
- Rediseñar el proceso para dividir la restricción

### Paso 5: Prevenir la Inercia

Si la restricción se resuelve, puede que **ya no sea la restricción**. Repetir el ciclo desde el paso 1.

**Señales de inercia:**
- "Así siempre lo hemos hecho"
- Las métricas ya no reflejan la realidad del sistema
- Se siguen aplicando reglas de la restricción anterior
- El throughput deja de mejorar

## Ejemplo Práctico

**Situación:** Planta con 3 estaciones

| Estación | Capacidad | Demanda | Estado |
|----------|-----------|---------|--------|
| Cortado | 100 u/día | 80 u/día | Exceso |
| Soldadura | 60 u/día | 80 u/día | **Restricción** |
| Ensamble | 90 u/día | 80 u/día | Exceso |

**Aplicación de los 5 pasos:**
1. **Identificar:** Soldadura es la restricción (60 < 80)
2. **Explotar:** Eliminar tiempos muertos, optimizar secuencia
3. **Subordinar:** Cortado produce solo 60 u/día (no más)
4. **Elevar:** Agregar una celda de soldadura adicional
5. **Prevenir:** Repetir análisis — ahora la restricción puede ser Ensamble

## Relación con PDCA

Los 5 Pasos de TOC siguen una lógica similar a [[04-Herramientas/10-pdca|PDCA]]:

| TOC | PDCA |
|-----|------|
| Identificar y Explotar | Plan |
| Subordinar | Do |
| Elevar y Verificar | Check |
| Prevenir Inercia | Act |

## Cuándo Aplicar

- El throughput del sistema es claramente limitado por un recurso
- Se necesita priorizar dónde enfocar mejoras
- La planta tiene cuellos de botella recurrentes
- Se busca maximizar产出 sin grandes inversiones

## Notas Relacionadas

- [[02-teoria-de-restricciones]] — Teoría completa de TOC
- [[04-Herramientas/04-analisis-de-cuellos-de-botella]] — Aplicación práctica
- [[04-Herramientas/05-flujo-continuo]] — Flujo continuo vs restricciones
- [[04-Herramientas/10-pdca]] — PDCA como ciclo complementario
- [[04-Herramientas/13-smed]] — SMED para explotar restricciones
- [[11-mapa-metodologias-comparativo]] — Comparativa con otras metodologías
- [[01-six-sigma-vista-general]] — Six Sigma como alternativa complementaria
