---
title: "Root Cause Analysis (Análisis de Causa Raíz)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Análisis de Causa Raíz
  - Root Cause Analysis
  - RCA
  - Análisis de causa raíz
related:
  - "[[12-los-cinco-porques]]"
  - "[[03-a3-resolucion-problemas]]"
  - "[[10-pdca]]"
  - "[[06-gemba]]"
  - "[[21-kaizen-event]]"
---

# Root Cause Analysis (Análisis de Causa Raíz)

El **Análisis de Causa Raíz** (Root Cause Analysis o RCA) es un proceso sistemático de [[Lean Manufacturing]] para identificar la **causa fundamental** de un problema, y no solo sus síntomas superficiales.

## Definición

RCA es el conjunto de técnicas y procesos para descubrir la causa real que origina un problema. Su objetivo es encontrar qué puede corregirse para que el problema no se repita.

> "Resolver síntomas es apagar incendios. Resolver causas raíz es prevenirlos."

## ¿Por Qué RCA es Importante en Lean?

En Lean, no se busca culpar personas sino encontrar **fallas del sistema**. RCA permite:
- Atacar la causa, no el síntoma
- Prevenir recurrencia del problema
- Mejorar procesos, no solo resultados
- Generar conocimiento organizacional

## Principales Herramientas de RCA

### 1. Los 5 Porqués (5 Whys)

La herramienta más simple y directa. Se usa en el [[12-los-cinco-porques|note dedicada]].

```
Problema → ¿Por qué? → ¿Por qué? → ¿Por qué? → ¿Por qué? → ¿Por qué? → Causa Raíz
```

**Cuándo usar:** Problemas simples con causa lineal.

### 2. Diagrama de Ishikawa (Espina de Pescado)

También llamado **Diagrama de Causa y Efecto** o **Fishbone Diagram**. Organiza las posibles causas en categorías:

```
            Mano de Obra        Método         Material
                │                │                │
                ▼                ▼                ▼
    ──────────────────────────────────────────────────▶ PROBLEMA
                ▲                ▲                ▲
                │                │                │
          Maquinaria       Medición        Medio Ambiente
```

**Categorías comunes (6M):**
- **Mano de Obra:** Habilidades, capacitación, fatiga
- **Método:** Procedimientos, estándares, procesos
- **Material:** Calidad, especificaciones, proveedores
- **Maquinaria:** Equipos, herramientas, mantenimiento
- **Medición:** Calibración, precisión, datos
- **Medio Ambiente:** Temperatura, humedad, iluminación

**Cuándo usar:** Problemas complejos con múltiples causas posibles.

### 3. A3 Report

El [[03-a3-resolucion-problemas|A3]] integra RCA en su sección de análisis. Documenta todo el proceso de resolución en una hoja A3.

**Cuándo usar:** Problemas que requieren documentación completa y seguimiento.

### 4. Análisis de 5 Porqués + Ishikawa

Combinación poderosa: Ishikawa para identificar categorías, 5 Porqués para profundizar en cada una.

## Proceso General de RCA

```
1. Definir el problema
   │  (Qué, cuándo, dónde, cuánto)
   ▼
2. Recoger datos
   │  (Del [[06-gemba|Gemba]], no de la oficina)
   ▼
3. Identificar causas posibles
   │  (Ishikawa, brain storming)
   ▼
4. Profundizar en causas
   │  (5 Porqués en cada causa)
   ▼
5. Verificar causa raíz
   │  (¿Se puede demostrar?)
   ▼
6. Implementar contramedida
   │  (Acción que elimina la causa)
   ▼
7. Verificar resultado
   │  (¿El problema se resolvió?)
   ▼
8. Estandarizar
   (Documentar para prevenir recurrencia)
```

## Características de una Buena Causa Raíz

| Criterio | Ejemplo Correcto | Ejemplo Incorrecto |
|----------|------------------|-------------------|
| Actionable | "No hay estándar de calibración" | "El operador se equivocó" |
| Específica | "El filtro #3 no se limpia semanalmente" | "Falta mantenimiento" |
| Es de proceso | "No hay checklist de verificación" | "Juan es descuidado" |
| Previene recurrencia | Instalar alarma + checklist | "Recordar limpiar el filtro" |

## RCA y Otras Herramientas

- **[[12-los-cinco-porques|5 Porqués]]** — Herramienta fundamental de RCA
- **[[03-a3-resolucion-problemas|A3]]** — Documenta todo el análisis
- **[[10-pdca|PDCA]]** — La implementación de la contramedida sigue PDCA
- **[[06-gemba|Gemba]]** — RCA se hace con datos reales del Gemba
- **[[21-kaizen-event|Kaizen Event]]** — Puede incluir RCA como actividad

## RCA en Software

Aplicado a incidentes:
- **Post-mortem / Incident review:** Análisis de incidentes en producción
- **Blameless post-mortem:** Cultura de no culpar, entender el sistema
- **Error budgets:** Límites de errores que guían priorización
- **5 Whys en debugging:** Preguntar por qué hasta llegar al bug raíz

**Ejemplo:**
1. El deploy falló → ¿Por qué? → Test de integración falló
2. Test falló → ¿Por qué? → API retornó error 500
3. API error → ¿Por qué? → Validación de input falló
4. Validación falló → ¿Por qué? → No hay schema validation
5. No hay schema validation → Causa raíz: falta un paso de diseño

## Errores Comunes

- Conformarse con la primera respuesta (síntoma, no causa raíz)
- Culpar personas en vez de analizar procesos
- No verificar con datos si la causa identificada es real
- No implementar contramedidas permanentes
- No documentar el análisis para futuro aprendizaje

## Notas Relacionadas

- [[12-los-cinco-porques]] — La herramienta más directa de RCA
- [[03-a3-resolucion-problemas]] — Documentación del análisis
- [[10-pdca]] — Implementación de contramedidas
- [[06-gemba]] — Fuente de datos reales
- [[21-kaizen-event]] — Actividad que incluye RCA
- [[11-poka-yoke]] — Contramedida que previene recurrencia
- [[02-Pilares/03-kaizen|Kaizen]] — RCA alimenta la mejora continua
