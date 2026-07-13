---
title: "DMAIC: Analizar"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/six-sigma
created: 2026-07-12
updated: 2026-07-12
category: "Lean Six Sigma"
aliases:
  - DMAIC Analizar
  - Analyze Phase
related:
  - "[[05-Vertientes/5b-Lean-Six-Sigma/04-dmaic-medir]]"
  - "[[05-Vertientes/5b-Lean-Six-Sigma/06-dmaic-mejorar]]"
  - "[[01-Glosario/G-01-desperdicio]]"
---

# DMAIC: Analizar

## El propósito de Analyze

La fase Analyze identifica las **causas raíz** del problema. No se trata de adivinar, sino de usar datos y herramientas estadísticas para encontrar qué variables realmente impactan el resultado.

> *"El análisis sin datos es una opinión. Los datos sin análisis son solo números."*

## Root Cause Analysis

### Ishikawa (Diagrama de Causa-Efecto)
- Categorías: Mano de obra, Método, Material, Maquinaria, Medición, Medio ambiente (6M)
- Lluvia de ideas estructurada
- Validar cada causa con datos

### 5 Whys
- Preguntar "¿por qué?" 5 veces consecutivas
- Llegar a la causa raíz (no solo al síntoma)
- Simple pero poderoso

### Pareto Analysis
- Regla 80/20: 20% de causas generan 80% de efectos
- Priorizar esfuerzos en las causas principales
- Usar datos del [[05-Vertientes/5b-Lean-Six-Sigma/04-dmaic-medir|fase Measure]]

## Análisis estadístico

### Correlación y regresión
- **Correlación** — fuerza de la relación entre dos variables
- **Regresión lineal** — Y = β₀ + β₁X₁ + ... + ε
- **Regresión multiple** — múltiples factores predictoras
- **R²** — cuánto de la variación se explica por el modelo

### Análisis de varianza (ANOVA)
- Comparar medias entre 3+ grupos
- H₀: todas las medias son iguales
- H₁: al menos una media es diferente
- p-value < 0.05 → rechazar H₀

### Hypothesis Testing
| Tipo | Uso | Ejemplo |
|------|-----|---------|
| t-test | Comparar 2 medias | Proceso A vs Proceso B |
| ANOVA | Comparar 3+ medias | 3 turnos diferentes |
| Chi-square | Comparar proporciones | Defecto sí/no por proveedor |
| f-test | Comparar varianzas | Consistencia entre máquinas |

## Mapa de causa-efecto

```
Problema (Y) = f(X₁, X₂, X₃, ...)
```

- **Y** = variable de respuesta (el problema)
- **X** = variables de entrada (las causas)
- El objetivo es encontrar las X's significativas

## Herramientas complementarias

- **Multi-Vari Study** — variación por fuente (posicional, temporal, ciclo a ciclo)
- **Capability Analysis** — [[05-Vertientes/5b-Lean-Six-Sigma/04-dmaic-medir|revisión de capability]]
- **Regression Analysis** — modelo estadístico
- **Residual Analysis** — validar supuestos del modelo

## Conexiones

- [[05-Vertientes/5b-Lean-Six-Sigma/04-dmaic-medir]] — Fase anterior: Measure
- [[05-Vertientes/5b-Lean-Six-Sigma/06-dmaic-mejorar]] — Siguiente fase: Improve
- [[05-Vertientes/5b-Lean-Six-Sigma/02-dmaic-metodologia]] — DMAIC como framework
- [[01-Glosario/G-01-desperdicio]] — Las causas raíz suelen ser desperdicios
- [[05-Vertientes/5a-Manufactura/02-toyota-way-en-la-practica]] — Genchi Genbutsu: ir a ver
- [[05-Vertientes/5b-Lean-Six-Sigma/08-belts-six-sigma]] — Roles del equipo
