---
title: "Plantilla A3"
tags:
  - lean/herramientas
  - type/plantilla
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Plantilla A3
  - A3 Template
  - Reporte A3
  - Formato A3
related:
  - "[[03-a3-resolucion-problemas]]"
  - "[[10-pdca]]"
  - "[[12-los-cinco-porques]]"
  - "[[06-gemba]]"
  - "[[23-analisis-causa-raiz]]"
---

# Plantilla A3

La **Plantilla A3** es el formato estructurado para crear un [[03-a3-resolucion-problemas|Reporte A3]]. El tamaño A3 (297 × 420 mm) obliga a ser conciso y visual. Cada sección sigue el ciclo [[10-pdca|PDCA]].

## Estructura del A3

```
┌─────────────────────────────────────────────────────────────┐
│                    TÍTULO / TEMA                            │
├─────────────────────────────┬───────────────────────────────┤
│                             │                               │
│  1. CONTEXTO                │  2. CONDICIÓN ACTUAL          │
│  (Background)              │  (Current Condition)           │
│                             │                               │
│  [Contexto del problema]   │  [Datos, gráficos, VSM]       │
│  [Por qué importa]         │  [Situación actual medida]     │
│                             │                               │
├─────────────────────────────┼───────────────────────────────┤
│                             │                               │
│  3. META / OBJETIVO        │  4. ANÁLISIS                  │
│  (Goal / Target)           │  (Analysis)                    │
│                             │                               │
│  [Qué se quiere lograr]    │  [5 Porqués]                  │
│  [Métrica específica]      │  [Causa raíz identificada]    │
│  [Fecha límite]            │  [Ishikawa si aplica]         │
│                             │                               │
├─────────────────────────────┴───────────────────────────────┤
│                                                             │
│  5. CONTRAMEDIDAS                                         │
│  (Countermeasures)                                         │
│                                                             │
│  [Lista de acciones propuestas]                           │
│  [Responsable de cada acción]                             │
│  [Fecha de cada acción]                                   │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  6. PLAN DE IMPLEMENTACIÓN                                │
│  (Implementation Plan)                                    │
│                                                             │
│  [Calendario de acciones]                                 │
│  [Hitos y fechas]                                         │
│  [Recursos necesarios]                                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  7. SEGUIMIENTO / FOLLOW-UP                               │
│  (Follow-up)                                              │
│                                                             │
│  [Resultados esperados vs reales]                         │
│  [Efectividad de la contramedida]                         │
│  [Lecciones aprendidas]                                   │
│  [Estándares actualizados]                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Sección 1: Contexto (Background)

**Qué incluir:**
- ¿Por qué este problema es importante?
- ¿Cómo se alinea con los objetivos del negocio?
- ¿Quién es el cliente afectado?
- ¿Cuándo empezó el problema?

**Tips:**
- Ser breve (5-6 líneas máximo)
- Usar datos de contexto, no opiniones
- Conectar con la estrategia organizacional

**Placeholders:**
```
El problema de [NOMBRE] afecta a [CLIENTE/PROCESO] desde [FECHA].
Impacta en [MÉTRICA] con un efecto de [CUANTIFICACIÓN].
Se alinea con el objetivo estratégico de [OBJETIVO].
```

## Sección 2: Condición Actual

**Qué incluir:**
- Datos medidos del problema actual
- [[17-vsm|VSM]] simplificado del proceso
- Gráficos de tendencias
- Fotografías del [[06-gemba|Gemba]]

**Tips:**
- Ir al Gemba para obtener datos reales
- Usar gráficos, no solo texto
- Cuantificar el impacto actual

**Placeholders:**
```
Medición actual: [MÉTRICA] = [VALOR]
Frecuencia: [CUÁNTO OCURRE]
Tendencia: [AUMENTA / DISMINUYE / ESTABLE]
Impacto: [CONSECUENCIA MEDIBLE]
```

## Sección 3: Meta / Objetivo

**Qué incluir:**
- Meta específica y medible
- Fecha límite para alcanzarla
- Cómo se verificará el éxito

**Tips:**
- Usar SMART (Specific, Measurable, Achievable, Relevant, Time-bound)
- Incluir la métrica objetivo
- Poner fecha realista

**Placeholders:**
```
Meta: Reducir [MÉTRICA] de [VALOR_ACTUAL] a [VALOR_OBJETIVO]
Fecha límite: [FECHA]
Criterio de éxito: [CÓMO SE VERIFICARÁ]
```

## Sección 4: Análisis

**Qué incluir:**
- [[12-los-cinco-porques|5 Porqués]] aplicados
- [[23-analisis-causa-raiz|Causa raíz]] identificada
- Diagrama de Ishikawa si el problema es complejo

**Tips:**
- No conformarse con la primera respuesta
- La causa raíz debe ser un proceso, no una persona
- Verificar que al corregirla, el problema no regresa

**Placeholders:**
```
Problema: [PROBLEMA]
¿Por qué? → [RESPUESTA 1]
¿Por qué? → [RESPUESTA 2]
¿Por qué? → [RESPUESTA 3]
¿Por qué? → [RESPUESTA 4]
¿Por qué? → [CAUSA RAÍZ]
```

## Sección 5: Contramedidas

**Qué incluir:**
- Lista de acciones específicas
- Responsable de cada acción
- Fecha de cada acción
- Qué se espera lograr con cada una

**Tips:**
- Las contramedidas deben atacar la causa raíz, no los síntomas
- Incluir tanto contramedidas permanentes como provisionales
- Asignar un responsable por cada acción

**Placeholders:**
```
1. [ACCIÓN] — Responsable: [NOMBRE] — Fecha: [FECHA] — Efecto: [ESPERADO]
2. [ACCIÓN] — Responsable: [NOMBRE] — Fecha: [FECHA] — Efecto: [ESPERADO]
3. [ACCIÓN] — Responsable: [NOMBRE] — Fecha: [FECHA] — Efecto: [ESPERADO]
```

## Sección 6: Plan de Implementación

**Qué incluir:**
- Calendario visual (Gantt simplificado)
- Hitos clave
- Recursos necesarios
- Dependencias

**Tips:**
- Incluir tanto las acciones como los hitos de verificación
- Ser realista con los tiempos
- Identificar riesgos y planes de contingencia

## Sección 7: Seguimiento

**Qué incluir:**
- Resultados medidos vs meta
- Si la contramedida fue efectiva
- Lecciones aprendidas
- [[19-trabajo-estandarizado|Estándares]] actualizados

**Tips:**
- No cerrar el A3 hasta verificar resultados
- Documentar lecciones para futuro aprendizaje
- Actualizar estándares para prevenir recurrencia

## Relación con PDCA

| Sección A3 | Fase PDCA |
|-----------|-----------|
| 1. Contexto | — (Preparación) |
| 2. Condición Actual | — (Preparación) |
| 3. Meta | **Plan** (Definir qué lograr) |
| 4. Análisis | **Plan** (Entender la causa) |
| 5. Contramedidas | **Plan** (Diseñar solución) |
| 6. Plan de Implementación | **Do** (Implementar) |
| 7. Seguimiento | **Check** + **Act** (Verificar y ajustar) |

## Notas Relacionadas

- [[03-a3-resolucion-problemas]] — Concepto y filosofía del A3
- [[10-pdca]] — Ciclo que estructura el A3
- [[12-los-cinco-porques]] — Herramienta clave de la sección 4
- [[06-gemba]] — Fuente de datos para la sección 2
- [[23-analisis-causa-raiz]] — Metodología para encontrar causa raíz
- [[17-vsm]] — Puede incluirse en la sección 2
- [[19-trabajo-estandarizado]] — Se actualiza en la sección 7
