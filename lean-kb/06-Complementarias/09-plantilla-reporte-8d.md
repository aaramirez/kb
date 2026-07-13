---
title: "Plantilla Reporte 8D"
tags:
  - lean/complementarias
  - type/plantilla
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: "Complementarias"
aliases:
  - Plantilla 8D
  - 8D Template
related:
  - "[[04-8d-resolucion-problemas]]"
  - "[[04-Herramientas/25-plantilla-8d]]"
  - "[[04-Herramientas/03-a3-resolucion-problemas]]"
  - "[[04-Herramientas/23-analisis-causa-raiz]]"
  - "[[04-Herramientas/12-los-cinco-porques]]"
  - "[[05-fmea-analisis-modos-falla]]"
---

# Plantilla Reporte 8D

Plantilla completa para documentar el proceso de resolución de problemas [[04-8d-resolucion-problemas|8D]]. Cada sección incluye los campos necesarios y orientación para completarla correctamente.

## Encabezado del Reporte

```
═══════════════════════════════════════════════════
REPORTE 8D — NÚMERO: [8D-XXXX]
═══════════════════════════════════════════════════
Fecha de apertura:  [DD/MM/YYYY]
Fecha de cierre:    [DD/MM/YYYY]
Cliente:            [Nombre del cliente]
Producto/Proceso:   [Descripción]
Número de pieza:    [Part Number]
═══════════════════════════════════════════════════
```

## D0 — Preparación y Evaluación

```
D0 — PREPARACIÓN
─────────────────────────────────────────────────
¿Se requiere acción de emergencia?    SÍ / NO
Fecha de detección del problema:
¿Cuántas unidades están afectadas?
¿El problema está contenido?          SÍ / NO
Acción de emergencia tomada (si aplica):
Responsable de la evaluación:
```

**Preguntas guía:** ¿Hay riesgo para el cliente? ¿Cuántas unidades están en riesgo? ¿El problema está contenido?

## D1 — Formar el Equipo

```
D1 — FORMAR EL EQUIPO
─────────────────────────────────────────────────
Líder del equipo:        [Nombre — Cargo]
Calidad:                 [Nombre — Cargo]
Producción:              [Nombre — Cargo]
Ingeniería/Diseño:       [Nombre — Cargo]
Proveedor (si aplica):   [Nombre — Cargo]
Cliente (si aplica):     [Nombre — Cargo]
Otros:                   [Nombre — Cargo]
```

**Consejo:** El equipo debe ser multifuncional. Mínimo 3 personas, máximo 8.

## D2 — Definir el Problema

```
D2 — DEFINIR EL PROBLEMA (5W2H)
─────────────────────────────────────────────────
What (Qué):        [Descripción del problema]
Where (Dónde):     [Ubicación específica]
When (Cuándo):     [Fecha/hora de inicio]
Who (Quién):       [Turno/persona involucrada]
Why (Por qué):     [Impacto en el cliente]
How (Cómo):        [Cómo se detectó]
How much (Cuánto): [Número de unidades/defectos]

Evidencia fotográfica:  SÍ / NO (adjuntar)
Datos de tendencia:     SÍ / NO (adjuntar gráfica)
```

## D3 — Contención Temporal

```
D3 — CONTENCIÓN TEMPORAL
─────────────────────────────────────────────────
Acción de contención:    [Descripción]
Responsable:             [Nombre]
Fecha de implementación: [DD/MM/YYYY]
Efectividad verificada:  SÍ / NO
Verificación:            [Cómo se verificó]
Alcance:                 [Qué se contiene]
```

**Importante:** La contención es **temporal**. NO reemplaza la solución permanente.

## D4 — Causa Raíz

```
D4 — CAUSA RAÍZ
─────────────────────────────────────────────────
Herramientas utilizadas:
  ☐ 5 Porqués
  ☐ Diagrama de Ishikawa
  ☐ Análisis de datos
  ☐ Verificación en Gemba
  ☐ Otro: ___________

Causa Raíz 1: [Descripción]
  Análisis: [Evidencia]
  ¿Por qué? → [Respuesta]

Causa Raíz 2: [Descripción]
  Análisis: [Evidencia]
  ¿Por qué? → [Respuesta]

Causa Raíz verificada con datos: SÍ / NO
```

## D5 — Acciones Correctivas

```
D5 — ACCIONES CORRECTIVAS
─────────────────────────────────────────────────
| # | Acción | Responsable | Fecha | Estado |
|---|--------|-------------|-------|--------|
| 1 |        |             |       |        |
| 2 |        |             |       |        |
| 3 |        |             |       |        |

¿Elimina la causa raíz?    SÍ / NO
¿Es permanente?             SÍ / NO
¿Se puede estandarizar?     SÍ / NO
```

## D6 — Implementación y Verificación

```
D6 — IMPLEMENTACIÓN Y VERIFICACIÓN
─────────────────────────────────────────────────
Fecha de implementación: [DD/MM/YYYY]
Período de verificación: [DD/MM/YYYY — DD/MM/YYYY]
Métrica de verificación: [Qué se mide]
Resultado antes:         [Dato]
Resultado después:       [Dato]
Mejora lograda:          [Porcentaje]
Verificación exitosa:    SÍ / NO
```

## D7 — Prevención

```
D7 — PREVENCIÓN
─────────────────────────────────────────────────
☐ Estándares actualizados (nombres de documentos)
☐ Poka-Yoke implementado (descripción)
☐ FMEA actualizada
☐ Procedimientos de diseño actualizados
☐ Lecciones aprendidas documentadas
☐ Compartido con áreas similares

Documentos modificados:
  1. [Nombre del documento — Cambio realizado]
  2. [Nombre del documento — Cambio realizado]
```

## D8 — Reconocimiento del Equipo

```
D8 — RECONOCIMIENTO
─────────────────────────────────────────────────
Fecha de cierre: [DD/MM/YYYY]
Reconocimiento:  [Descripción del logro]
Lecciones aprendidas: [Resumen]

Firma del líder: _____________  Fecha: ________
Firma del sponsor: ___________  Fecha: ________
```

## Consejos para un 8D Efectivo

- **D2:** Sea específico. "Fallas" no es un problema; "Soldadura con porosidad en pieza X desde marzo" sí lo es
- **D3:** La contención debe ser inmediata, no espere a tener la causa raíz
- **D4:** No acepte "error humano" como causa raíz — siempre hay un proceso que lo permitió
- **D7:** La mejor prevención es Poka-Yoke — haga que sea imposible cometer el error de nuevo
- **Tiempo típico:** 30-90 días para resolver un 8D completo

## Notas Relacionadas

- [[04-8d-resolucion-problemas]] — Teoría completa del método 8D
- [[04-Herramientas/25-plantilla-8d]] — Plantilla original en herramientas
- [[04-Herramientas/03-a3-resolucion-problemas]] — A3 como alternativa
- [[04-Herramientas/23-analisis-causa-raiz]] — Herramientas para D4
- [[04-Herramientas/12-los-cinco-porques]] — 5 Porqués para D4
- [[05-fmea-analisis-modos-falla]] — FMEA para D7 (prevención)
- [[04-Herramientas/11-poka-yoke]] — Poka-Yoke para D7
