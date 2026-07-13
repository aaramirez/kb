---
title: "Guía de Trabajo Estandarizado"
tags:
  - lean/herramientas
  - type/guia
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Guía Standard Work
  - Trabajo Estandarizado
  - Guía de Trabajo Estandarizado
  - Standard Work Guide
related:
  - "[[19-trabajo-estandarizado]]"
  - "[[14-takt-time]]"
  - "[[06-gemba]]"
  - "[[18-gestion-visual]]"
  - "[[02-Pilares/03-kaizen]]"
---

# Guía de Trabajo Estandarizado

Esta guía describe cómo crear, documentar y mantener [[19-trabajo-estandarizado|documentos de Trabajo Estandarizado]] (Standard Work).

## ¿Cuándo Crear Standard Work?

- Cuando se detecta variabilidad en cómo se realiza un trabajo
- Cuando hay rotación de personal o nuevos empleados
- Después de un [[21-kaizen-event|Kaizen Event]] que mejora un proceso
- Cuando se implementa un nuevo proceso
- Cuando un proceso tiene problemas de calidad recurrentes

## Paso 1: Observar el Proceso Actual

### 1.1 Ir al Gemba
Observar al operador más experimentado realizar el trabajo completo. Observar **al menos 3 ciclos completos** para identificar la variación.

### 1.2 Cronometrar Cada Paso
Usar un cronómetro para medir cada operación:

| Paso | Ciclo 1 | Ciclo 2 | Ciclo 3 | Promedio |
|------|---------|---------|---------|----------|
| Tomar pieza | 5s | 6s | 5s | 5.3s |
| Insertar en fixture | 8s | 8s | 9s | 8.3s |
| Operación principal | 12s | 11s | 12s | 11.7s |
| Inspeccionar | 5s | 6s | 5s | 5.3s |
| Colocar salida | 3s | 3s | 4s | 3.3s |
| **Total** | **33s** | **34s** | **35s** | **33.7s** |

### 1.3 Identificar la Mejor Práctica
De los 3+ ciclos observados, identificar:
- ¿Cuál es la secuencia más eficiente?
- ¿Qué movimientos son innecesarios?
- ¿Hay variación en los tiempos? ¿Por qué?

## Paso 2: Verificar el Takt Time

Calcular el [[14-takt-time|Takt Time]] y comparar con el tiempo de ciclo:

```
Takt Time = Tiempo disponible / Demanda
Cycle Time = Tiempo real del operador

Si Cycle Time < Takt Time → Hay capacidad ociosa
Si Cycle Time > Takt Time → Hay cuello de botella
Si Cycle Time ≈ Takt Time → Balance correcto
```

**Si Cycle Time > Takt Time:** Considerar agregar un operador o dividir el trabajo.

**Si Cycle Time < Takt Time:** El operador puede atender múltiples estaciones (multi-process handling).

## Paso 3: Crear la Hoja de Trabajo Estandarizado

### 3.1 Diagrama de Layout
Dibujar un diagrama simple del área de trabajo que muestre:
- Ubicación del operador
- Ubicación de materiales de entrada y salida
- Secuencia de movimientos
- Herramientas utilizadas

```
┌─────────────────────────────────────┐
│          HOJA DE LAYOUT              │
│                                      │
│   [Materiales]    [Herramientas]     │
│        │               │            │
│        ▼               ▼            │
│   ┌─────────────────────────┐       │
│   │    ESTACIÓN DE TRABAJO   │       │
│   │                         │       │
│   │    [Fixture] ──→ [Salida]│      │
│   │                         │       │
│   └─────────────────────────┘       │
│                                      │
│   Operador se mueve en zona [===]    │
└─────────────────────────────────────┘
```

### 3.2 Tabla de Operaciones

| Paso # | Operación | Tiempo | Mano | Notas |
|--------|-----------|--------|------|-------|
| 1 | Tomar pieza del contenedor | 5s | Izq | Contenedor a la izquierda |
| 2 | Insertar en fixture | 8s | Der | Alinear con marca |
| 3 | Soldar puntos A y B | 12s | Ambas | Esperar que enfríe 2s |
| 4 | Inspeccionar visualmente | 5s | Izq | Verificar soldadura |
| 5 | Colocar en contenedor salida | 3s | Der | Contenedor a la derecha |
| | **Total** | **33s** | | |

### 3.3 Condiciones de Seguridad
Listar las condiciones de seguridad relevantes:
- Usar guantes al soldar
- Gafas de protección obligatorias
- Verificar que el extractor funciona antes de empezar
- No tocar la pieza recién soldada (caliente)

### 3.4 Puntos Clave de Calidad
Los puntos donde se debe prestar especial atención:
- Verificar que la soldadura cubre los puntos A y B
- Asegurar que no hay poros en la soldadura
- Medir dimensiones críticas una vez por turno

## Paso 4: Crear la Hoja de Combinación de Trabajo

La hoja de combinación muestra gráficamente cómo se distribuye el tiempo entre trabajo manual, automático y caminata:

```
Tiempo (segundos)
0    5    10   15   20   25   30   35   40
│────│────│────│────│────│────│────│────│
Manual: ████████████████████████████████ (23s)
Automático: ░░░░░░░░░░░░ (10s) 
Caminata: ▓▓▓▓▓▓ (4s)
```

**Propósito:** Identificar dónde el operador puede hacer otra tarea mientras la máquina trabaja.

## Paso 5: Crear la Hoja de Tiempos

Documentar los tiempos observados para referencia futura:

| Observación | Fecha | Operador | Ciclo 1 | Ciclo 2 | Ciclo 3 | Prom |
|-------------|-------|----------|---------|---------|---------|------|
| #1 | 12/07 | María | 33s | 34s | 35s | 33.7s |
| #2 | 12/07 | Carlos | 35s | 36s | 34s | 35s |
| #3 | 13/07 | María | 32s | 33s | 33s | 32.7s |

## Paso 6: Capacitar al Equipo

### 6.1 Mostrar el Estándar
Presentar la hoja de Standard Work al equipo:
- Explicar el propósito (mejora, no control)
- Mostrar cada paso con el documento
- Responder preguntas
- Permitir que practiquen

### 6.2 Verificar Comprensión
- Cada operador debe poder explicar la secuencia
- Demostrar los puntos clave de calidad y seguridad
- Asegurar que todos entienden el Takt Time

## Paso 7: Mantener y Actualizar

### Cuándo Actualizar el Estándar
- Cuando se identifica una mejor forma de hacer el trabajo
- Cuando cambia el volumen de producción (nuevo Takt Time)
- Cuando cambian los materiales o herramientas
- Después de un [[21-kaizen-event|Kaizen Event]]
- Cuando hay problemas de calidad recurrentes

### Proceso de Actualización
1. Observar el proceso actual (volver al Gemba)
2. Identificar la mejora
3. Probar la nueva forma
4. Actualizar el documento
5. Capacitar al equipo en el cambio
6. Documentar la fecha y razón del cambio

## Errores Comunes

| Error | Consecuencia | Solución |
|-------|-------------|----------|
| Crear desde la oficina | El estándar no refleja la realidad | Siempre observar en Gemba |
| No incluir al operador | El estándar no se sigue | Involucrar a quien hace el trabajo |
| No actualizar | El estándar se vuelve obsoleto | Revisar periódicamente |
| Usar como herramienta de castigo | Resistencia al cambio | Comunicar que es para mejorar, no castigar |
| No incluir tiempos | No se puede medir el rendimiento | Siempre cronometrar |

## Notas Relacionadas

- [[19-trabajo-estandarizado]] — Conceptos del Standard Work
- [[14-takt-time]] — Takt Time es el primer elemento
- [[06-gemba]] — Observación que crea los estándares
- [[18-gestion-visual]] — Los estándares se muestran visualmente
- [[02-Pilares/03-kaizen|Kaizen]] — El estándar es la base de Kaizen
- [[10-pdca]] — Ciclo para crear y mejorar estándares
- [[01-5s]] — Espacio que facilita el trabajo estandarizado
- [[21-kaizen-event]] — Evento que puede resultar en nuevo Standard Work
