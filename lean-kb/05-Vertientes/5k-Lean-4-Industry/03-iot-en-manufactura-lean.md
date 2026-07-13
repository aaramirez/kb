---
title: "IoT en Manufactura Lean"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/lean-4
created: 2026-07-12
updated: 2026-07-12
category: "Vertientes"
aliases:
  - IoT Lean
  - IoT Manufactura
related:
  - "[[01-lean-4-vista-general]]"
  - "[[02-gemelos-digitales-lean]]"
  - "[[04-ia-mejora-continua]]"
  - "[[../../03-Metodologias/01-lean-manufacturing]]"
  - "[[../../02-Filosofia/03-desperdicios-muda]]"
---

# IoT en Manufactura Lean

## ¿Qué es IoT en Lean?

El **Internet of Things** (IoT) conecta sensores físicos con sistemas digitales, permitiendo detectar desperdicios y anomalías en **tiempo real** — algo que Lean clásico hacía manualmente con visitas al Gemba.

## Detección de desperdicio en tiempo real

IoT permite identificar los 8 desperdicios automáticamente:

| Desperdicio | Sensor/Tecnología | Ejemplo |
|-------------|-------------------|---------|
| **Waiting** | Sensores de presencia | Máquina ociosa detectada |
| **Defectos** | Cámaras de inspección | Pieza defectuosa marcada |
| **Overproduction** | Contadores de producción | Exceso de unidades detectado |
| **Motion** | RFID/GPS | Movimiento innecesario de material |
| **Inventory** | Sensores de nivel | Stock excesivo alertado |
| **Transportation** | GPS en flota | Rutas ineficientes identificadas |
| **Overprocessing** | Sensores de ciclo | Pasos redundantes detectados |
| **Non-utilized talent** | Sistemas de asignación | Habilidades no aprovechadas |

## Mantenimiento predictivo

IoT transforma el mantenimiento Lean:

```
Reactivo        Preventivo       Predictivo
(Lean clásico)  (Con schedule)   (IoT + AI)
    ↓               ↓                ↓
Máquina falla  → Intervención  → Predicción de
                                  falla con días
                                  de anticipación
```

## Smart Factory (Fábrica Inteligente)

El concepto de fábrica inteligente integra:

- **Sensores** en cada máquina y estación
- **Edge computing** para procesamiento local
- **Dashboard en tiempo real** con métricas Lean
- **Alertas automáticas** cuando se detectan anomalías
- **Automatización** de respuestas estándar

## Métricas habilitadas por IoT

- **OEE en tiempo real** — no semanal
- **Cycle time por pieza** — granularidad máxima
- **Detección de micro-paradas** — que antes eran invisibles
- **Tasa de defectos** — por lote, por máquina, por turno

## Retos de implementación

- **Inversión inicial** sensores, conectividad, plataforma
- **Ciberseguridad** — más puntos de acceso
- **Gestión de datos** — volumen masivo de información
- **Cultura** — el equipo debe confiar y usar los datos

## Ver también

- [[01-lean-4-vista-general]] - Marco Lean 4.0
- [[02-gemelos-digitales-lean]] - Gemelos digitales
- [[../../02-Filosofia/03-desperdicios-muda]] - Los 8 desperdicios
