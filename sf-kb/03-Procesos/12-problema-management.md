---
title: "Problem Management"
tags:
  - sf/procesos
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "Gestión de Problemas"
  - "Root Cause Analysis"
  - "RCA"
  - "5 Whys"
related:
  - "[[../03-Procesos/10-incidient-management|Gestión de Incidentes]]"
  - "[[../01-Fundamentos/09-technical-debt|Technical Debt]]"
  - "[[../03-Procesos/11-change-management|Change Management]]"
  - "[[../06-Metricas/README|Métricas]]"
  - "[[../01-Fundamentos/16-lean-software|Lean Software]]"
---

# Problem Management

**Problem Management** es el proceso de identificar, analizar y eliminar la causa raíz de incidentes recurrentes, evitando que se repitan y reduciendo el impacto a largo plazo.

## Definición

> Problem Management es el proceso que gestiona la causa raíz de incidentes, tanto de forma proactiva (prevención) como reactiva (después de un incidente), para minimizar el impacto al negocio.

## Problem Management vs Incident Management

| Aspecto | [[../03-Procesos/10-incidient-management|Incident Management]] | Problem Management |
|---------|-------|----------------|
| **Objetivo** | Restaurar servicio | Eliminar causa raíz |
| **Urgencia** | Inmediata | Puede ser planificada |
| **Enfoque** | Síntomas | Causas |
| **Duración** | Minutos/horas | Días/semanas |
| **Resultado** | Workaround o fix | Prevención permanente |

## Flujo de Problem Management

```
Incidentes recurrentes → Identificar problema → Investigar causa raíz
                                                      │
                                              ┌───────┴───────┐
                                              │               │
                                         Solución        Workaround
                                         permanente      temporal
                                              │               │
                                              └───────┬───────┘
                                                      │
                                               Verificar fix
                                                      │
                                               Cerrar problema
```

## Técnicas de Root Cause Analysis (RCA)

### 5 Whys (5 Porqués)

Técnica simple para llegar a la causa raíz:

```
Problema: La API devolvió error 500

¿Por qué? → La base de datos no respondió
¿Por qué? → Se agotó el connection pool
¿Por qué? → Queries lentas consumían conexiones
¿Por qué? → Falta índice en tabla de transacciones
¿Por qué? → No se realizó capacity planning

Causa raíz: Falta de capacity planning + falta de índices
Solución: Añadir índices + alertas de connection pool
```

| Nivel | Pregunta | Respuesta |
|-------|----------|-----------|
| 1 | ¿Por qué falló? | DB no respondió |
| 2 | ¿Por qué la DB no respondió? | Connection pool agotado |
| 3 | ¿Por qué se agotó? | Queries lentas |
| 4 | ¿Por qué eran lentas? | Falta índice |
| 5 | ¿Por qué faltaba el índice? | No había proceso de revisión |

### Fishbone Diagram (Ishikawa)

```
        Personas          Procesos         Herramientas
           │                │                  │
           ▼                ▼                  ▼
    ┌──────────────────────────────────────────────┐
    │              PROBLEMA: API DOWN              │
    └──────────────────────────────────────────────┘
           ▲                ▲                  ▲
           │                │                  │
        Medio ambiente    Tecnología        Medición
```

**Categorías típicas (6M):**

| Categoría | Ejemplos |
|-----------|---------|
| **Man** (Personas) | Falta de capacitación, error humano |
| **Machine** (Tecnología) | Bug, hardware defectuoso |
| **Material** (Datos) | Datos corruptos, input inválido |
| **Method** (Procesos) | Proceso inadecuado, falta de testing |
| **Measurement** (Medición) | Métricas incorrectas, alertas falsas |
| **Mother Nature** (Entorno) | Cambio en infra, proveedor |

### 5 Whys + Fishbone (combinado)

```
1. Hacer Fishbone para identificar categorías
2. Aplicar 5 Whys en cada categoría relevante
3. Priorizar causas por impacto
4. Crear action items por causa raíz
```

### Pareto Analysis (80/20)

```
Causa                          Frecuencia    % Acumulado
─────────────────────────────────────────────────────
Falta de testing                   15          35%
Config incorrecta                  10          58%
Falta de monitoreo                  8          77%
Bug en dependencia                  5          89%
Error humano                        3          96%
─────────────────────────────────────────────────────
```

- Enfocarse en el 20% de causas que causan el 80% de problemas

### Fault Tree Analysis (FTA)

```
                    [Falla del sistema]
                    /                  \
            [Falla de DB]        [Falla de red]
            /          \              |
    [Falla de disco] [Falla de CPU] [Timeout]
         |                |
    [Hardware]      [Memoria]
    [defectuoso]    [insuficiente]
```

## Proceso completo de RCA

```markdown
## Root Cause Analysis: Incident INC-2024-0456

### 1. Definición del problema
La API de pagos devolvió errores 500 durante 45 minutos el 15/03/2024.

### 2. Timeline
- 14:00 — Primera alerta de error 500
- 14:05 — Escalado a SEV2
- 14:15 — DB connection pool agotado identificado
- 14:30 — Workaround: reiniciar pods
- 14:45 — Servicio restaurado

### 3. Análisis de causa raíz (5 Whys)
[Ver análisis 5 Whys arriba]

### 4. Causas contribuyentes
- Falta de índice en tabla de transacciones
- Sin alertas de connection pool
- Capacity planning insuficiente

### 5. Acciones correctivas
| Acción | Tipo | Owner | Fecha |
|--------|------|-------|-------|
| Añadir índice DB | Correctiva | @dba | 20/03 |
| Alertas de connection pool | Preventiva | @sre | 22/03 |
| Capacity planning review | Preventiva | @architect | 30/03 |
| Load testing automatizado | Preventiva | @qa | 15/04 |

### 6. Verificación
- Monitorear por 30 días
- Verificar que no hay incidentes similares
- Actualizar runbooks
```

## Problem Management proactivo

| Actividad | Descripción |
|-----------|-------------|
| **Trend Analysis** | Analizar incidentes para encontrar patrones |
| **Capacity Planning** | Predecir necesidades futuras |
| **Maturity Assessment** | Evaluar madurez del sistema |
| **Technology Refresh** | Actualizar componentes obsoletos |
| **Architectural Review** | Identificar fragilidades |

## Métricas de Problem Management

| Métrica | Objetivo |
|---------|----------|
| **Problems Identified** | Tracking de problemas encontrados |
| **Mean Time to Identify** | < 7 días (proactivo) |
| **Solutions Implemented** | > 80% de action items completados |
| **Incident Recurrence** | < 10% de problemas se repiten |
| **Known Errors** | Base de datos de errores documentados |

## Knowledge Management

| Artefacto | Propósito |
|-----------|-----------|
| **Known Error Database** | Errores conocidos y workarounds |
| **Problem Records** | Documentación completa por problema |
| **Root Cause Database** | Patrones de causa raíz recurrentes |
| **Runbooks** | Procedimientos de workaround |

## Relación con otros conceptos

- [[../03-Procesos/10-incidient-management|Incident Management]] provee datos para Problem Management
- [[../01-Fundamentos/09-technical-debt|Technical Debt]] es una causa frecuente de problemas
- [[../03-Procesos/11-change-management|Change Management]] implementa las soluciones
- [[../06-Metricas/README|Métricas]] habilitan el análisis de tendencias
- [[../01-Fundamentos/16-lean-software|Lean]] promueve la eliminación de desperdicio
