---
title: "DMAIC: Medir"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/six-sigma
created: 2026-07-12
updated: 2026-07-12
category: "Lean Six Sigma"
aliases:
  - DMAIC Medir
  - Measure Phase
related:
  - "[[05-Vertientes/5b-Lean-Six-Sigma/03-dmaic-definir]]"
  - "[[05-Vertientes/5b-Lean-Six-Sigma/05-dmaic-analizar]]"
  - "[[05-Vertientes/5b-Lean-Six-Sigma/01-lean-six-sigma-vista-general]]"
---

# DMAIC: Medir

## El propósito de Measure

La fase Measure establece el **estado actual con datos confiables**. Sin datos, no hay análisis posible. Medimos para entender qué tan mal estamos y cuánto podemos mejorar.

> *"Si no puedes medirlo, no puedes mejorarlo."* — Peter Drucker

## Plan de recolección de datos

| Elemento | Descripción |
|----------|-------------|
| **Qué medir** | Variables de respuesta (Y) y factores (X) |
| **Cómo medir** | Instrumento, método, frecuencia |
| **Quién mide** | Responsable de la medición |
| **Cuándo** | Período de recolección |
| **Cuántos** | Tamaño de muestra necesario |
| **Dónde** | Punto de muestreo en el proceso |

### Tamaño de muestra
- Para proporciones: n = Z² × p(1-p) / E²
- Para medias: n = (Z × σ / E)²
- Regla práctica: mínimo 30 observaciones por subgrupo

## Measurement System Analysis (MSA)

Antes de confiar en los datos, debemos validar el sistema de medición:

### Gage R&R
- **Repeatability** — ¿el mismo operador obtiene el mismo resultado?
- **Reproducibility** — ¿diferentes operadores obtienen el mismo resultado?
- **Aceptable:** <10% de la variación total
- **Marginal:** 10-30%
- **Inaceptable:** >30%

### Otros aspectos de MSA
- **Bias** — ¿la medición está centrada correctamente?
- **Linearity** — ¿es precisa en todo el rango?
- **Estabilidad** — ¿cambia con el tiempo?

## Análisis de capability

La capability mide qué tan bien un proceso cumple especificaciones:

| Métrica | Fórmula | Interpretación |
|---------|---------|----------------|
| **Cp** | (USL - LSL) / 6σ | Capacidad potencial (sin considerar centro) |
| **Cpk** | min[(USL-μ)/3σ, (μ-LSL)/3σ] | Capacidad real (considera centro) |
| **Pp** | Similar a Cp pero con desviación global | Performance a largo plazo |
| **Ppk** | Similar a Cpk pero con desviación global | Performance a largo plazo |

### Interpretación
- Cpk ≥ 1.33: Proceso capaz
- 1.0 ≤ Cpk < 1.33: Marginal, necesita monitoreo
- Cpk < 1.0: Proceso no capaz

## Herramientas de medición

- **Histograma** — distribución de datos
- **Gráficos de control** — estabilidad del proceso
- **Diagrama de Pareto** — priorizar causas frecuentes
- **Box plots** — comparar grupos de datos
- **Scatter diagrams** — relaciones entre variables

## Conexiones

- [[05-Vertientes/5b-Lean-Six-Sigma/03-dmaic-definir]] — Fase anterior: Define
- [[05-Vertientes/5b-Lean-Six-Sigma/05-dmaic-analizar]] — Siguiente fase: Analyze
- [[05-Vertientes/5b-Lean-Six-Sigma/02-dmaic-metodologia]] — DMAIC como framework
- [[05-Vertientes/5b-Lean-Six-Sigma/01-lean-six-sigma-vista-general]] — Contexto de LSS
- [[03-Pilares/01-cero-defectos]] — Medición es base de la calidad
- [[05-Vertientes/5b-Lean-Six-Sigma/08-belts-six-sigma]] — Roles del equipo
