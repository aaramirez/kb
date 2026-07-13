---
title: "FMEA (Análisis de Modos de Falla)"
tags:
  - lean/complementarias
  - type/concepto
  - difficulty/avanzado
created: 2026-07-12
updated: 2026-07-12
category: "Complementarias"
aliases:
  - FMEA
  - Failure Mode and Effects Analysis
  - Análisis de Modos de Falla
related:
  - "[[10-plantilla-fmea]]"
  - "[[04-Herramientas/11-poka-yoke]]"
  - "[[04-8d-resolucion-problemas]]"
  - "[[06-spc-control-estadistico]]"
  - "[[01-six-sigma-vista-general]]"
  - "[[04-Herramientas/04-analisis-de-cuellos-de-botella]]"
---

# FMEA — Análisis de Modos de Falla

## ¿Qué es FMEA?

FMEA (Failure Mode and Effects Analysis) es una metodología **preventiva** que identifica posibles fallas en un diseño o proceso, evalúa su impacto y prioriza acciones para mitigarlas antes de que ocurran.

> *"FMEA nos permite fallar en el papel para no fallar en la realidad."*

## Tipos de FMEA

| Tipo | Enfoque | Cuándo se usa |
|------|---------|---------------|
| **DFMEA** (Design FMEA) | Fallas potenciales en el diseño del producto | Fase de diseño |
| **PFMEA** (Process FMEA) | Fallas potenciales en el proceso de producción | Fase de planificación de producción |
| **System FMEA** | Fallas en la interacción entre sistemas | Diseño de sistemas complejos |

## Risk Priority Number (RPN)

El RPN es la métrica central de FMEA:

```
RPN = Severidad (S) × Ocurrencia (O) × Detección (D)
```

| Factor | Escala | Descripción |
|--------|--------|-------------|
| **Severidad (S)** | 1-10 | Impacto de la falla en el cliente/usuario |
| **Ocurrencia (O)** | 1-10 | Probabilidad de que la falla ocurra |
| **Detección (D)** | 1-10 | Capacidad de detectar la falla antes de llegar al cliente |

**Interpretación del RPN:**
- **1-50** — Riesgo bajo, monitorear
- **51-100** — Riesgo medio, planificar acciones
- **101-1000** — Riesgo alto, acción inmediata requerida

## Proceso FMEA

1. **Identificar** el componente, proceso o sistema a analizar
2. **Listar** los posibles modos de falla
3. **Evaluar** los efectos de cada falla
4. **Asignar** calificaciones S, O y D
5. **Calcular** el RPN para cada falla
6. **Priorizar** las fallas con mayor RPN
7. **Planificar** acciones de reducción
8. **Re-evaluar** después de implementar acciones

## Conexión con Poka-Yoke

FMEA y [[04-Herramientas/11-poka-yoke|Poka-Yoke]] trabajan juntos:

- FMEA **identifica** qué fallas pueden ocurrir y su impacto
- Poka-Yoke **previene** que esas fallas ocurran en la práctica
- Las acciones de FMEA frecuentemente resultan en Poka-Yokes

## FMEA vs Análisis Reactivo

| Aspecto | FMEA (Preventivo) | 8D (Reactivo) |
|---------|-------------------|---------------|
| **Cuándo** | Antes de que ocurra la falla | Después de que ocurre |
| **Objetivo** | Prevenir | Resolver |
| **Costo** | Menor (inversión preventiva) | Mayor (retrabajo, reclamaciones) |
| **Esfuerzo** | Moderado a alto | Depende de la complejidad |

## Cuándo Usar FMEA

- Diseño nuevo de producto o proceso
- Cambio significativo en diseño o proceso existente
- Problema de calidad recurrente que requiere análisis preventivo
- Requisito de norma (IATF 16949, ISO 9001, Aerospace)
- Antes de una auditoría de calidad

## Notas Relacionadas

- [[10-plantilla-fmea]] — Plantilla completa para análisis FMEA
- [[04-Herramientas/11-poka-yoke]] — Prevención de errores como acción de FMEA
- [[04-8d-resolucion-problemas]] — 8D como complemento reactivo
- [[06-spc-control-estadistico]] — SPC para monitorear variables de FMEA
- [[01-six-sigma-vista-general]] — Six Sigma usa FMEA en fase Analyze
- [[04-Herramientas/04-analisis-de-cuellos-de-botella]] — FMEA para análisis de restricciones
- [[07-doe-diseno-experimentos]] — DOE para validar reducciones de RPN
