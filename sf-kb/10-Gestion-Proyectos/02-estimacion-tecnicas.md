---
title: "Técnicas de Estimación"
tags:
  - sf/gestion
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Gestión de Proyectos"
aliases:
  - "Estimation Techniques"
  - "Planning Poker"
  - "T-Shirt Sizing"
related:
  - "[[../10-Gestion-Proyectos/03-story-points-tshirt|Story Points vs T-Shirt]]"
  - "[[../10-Gestion-Proyectos/04-backlog-grooming|Backlog Refinement]]"
  - "[[../06-Metricas/02-velocity-throughput|Velocity & Throughput]]"
  - "[[../01-Fundamentos/09-technical-debt|Technical Debt]]"
---

# Técnicas de Estimación

Estimar es predecir el esfuerzo, tiempo o costo de un trabajo. Ninguna técnica elimina la incertidumbre, pero todas la hacen más manejable.

## Principios fundamentales

- Estimar es **proyectar**, no comprometer
- Mejor estimar en **rangos** que en valores puntuales
- Las estimaciones se **calibran** con datos históricos
- Incluir siempre el **factor de incertidumbre** (±)
- Re-estimar cuando cambia el **scope** o la información

## Planning Poker

Técnica de estimación colaborativa usando cartas con valores de la serie Fibonacci modificada.

### Flujo

1. Product Owner presenta la historia de usuario
2. Cada miembro selecciona una carta (oculta)
3. Todos revelan simultáneamente
4. Si hay divergencia > 2 puntos, se discute
5. Se repite hasta lograr consenso

### Valores típicos

| Carta | Significado |
|-------|-------------|
| 0 | Trivial, ya hecho |
| 1 | Muy pequeño (< 1 día) |
| 2 | Pequeño (1-2 días) |
| 3 | Medio-pequeño (2-3 días) |
| 5 | Medio (3-5 días) |
| 8 | Medio-grande (1 semana) |
| 13 | Grande (1-2 semanas) |
| 20 | Muy grande, necesita splitting |
| 40 | Enorme, decomponer obligatorio |
| 100 | Masivo, no estimable aún |
| ? | No tengo información |
| ☕ | Necesito una pausa / discusión |

### Tips para Planning Poker

- Estimadores con **experiencia técnica** deben participar
- El **PO no vota** pero puede aclarar requisitos
- Si todos votan igual en la primera ronda → aceptar
- Usar datos de **velocity** para calibrar la escala

## T-Shirt Sizing

Asigna tamaños relativos: XS, S, M, L, XL, XXL. Útil para estimación de alto nivel.

### Mapeo típico

| Talla | Story Points | Days approx | Uso |
|-------|-------------|-------------|-----|
| XS | 1 | 0.5-1 | Quick fix, config |
| S | 2-3 | 1-3 | Feature pequeña |
| M | 5 | 3-5 | Feature estándar |
| L | 8-13 | 5-10 | Feature compleja |
| XL | 20-40 | 10-20 | Epic que necesita splitting |
| XXL | 40+ | 20+ | Initiative, no estimar aún |

### Cuando usar T-Shirt Sizing

| Situación | Recomendación |
|-----------|---------------|
| Roadmap de alto nivel | ✅ T-Shirt |
| PI Planning | ✅ T-Shirt |
| Sprint Planning | ❌ Story Points |
| Comparación entre equipos | ✅ T-Shirt |
| Presupuesto preliminar | ✅ T-Shirt |
| Sprint commitment | ❌ Story Points |

## Reference Class Forecasting (RCF)

Basado en datos históricos reales, no en estimaciones subjetivas.

### Pasos

1. **Identificar clase de referencia**: encontrar proyectos similares en el historial
2. **Recopilar datos**: duración real, costo, scope de la clase
3. **Estimar distribución**: calcular percentiles (P10, P50, P90)
4. **Seleccionar estimación**: usar P50 como punto medio, P85 como compromiso

### Ejemplo

| Proyecto similar | Duración real |
|------------------|---------------|
| API migration v1 | 12 semanas |
| API migration v2 | 15 semanas |
| API migration v3 | 10 semanas |
| **Promedio** | **12.3 semanas** |
| **Desvío estándar** | **2.5 semanas** |

Estimación nueva: 12 semanas (P50), 15 semanas (P85)

## Estimación por analogía

Comparar directamente con historial de stories similares ya completadas.

### Template

```
Historia nueva: "Implementar pagos con Stripe"
├── Similar a: "Implementar pagos con PayPal" → 8 SP
├── Diferencia: Stripe tiene más documentación → -1 SP
├── Factor riesgo: primera integración con 3DS → +2 SP
└── Estimación final: 9 SP (redondear a 8 o 13)
```

## Estimación de three-point (PERT)

Usa tres estimaciones para calcular un valor esperado con incertidumbre.

```
Optimista (O) = mejor caso
Most Likely (M) = caso más probable
Pessimistic (P) = peor caso

Expected = (O + 4M + P) / 6
Std Dev  = (P - O) / 6
```

| Story | O | M | P | Expected | Std Dev |
|-------|---|---|---|----------|---------|
| Login | 2 | 3 | 7 | 3.5 | 0.83 |
| Pago | 5 | 8 | 20 | 9.2 | 2.5 |
| Report | 3 | 5 | 12 | 5.8 | 1.5 |

## Errores comunes

| Error | Descripción | Cómo evitarlo |
|-------|-------------|---------------|
| **Anchoring** | Primera estimación domina el grupo | Votar simultáneamente |
| **Commitment bias** | Presión por comprometerse | Estimar =/= comprometer |
| **Hofstadter's Law** | Siempre toma más de lo esperado | Agregar buffer (×1.3) |
| **Precision illusion** | Dar números exactos innecesarios | Usar rangos |
| **Availability bias** | Recordar el último incidente grande | Mirar historial completo |

## Métricas de calibración

| Métrica | Fórmula | Target |
|---------|---------|--------|
| **Estimation accuracy** | | estimado - real | / real × 100 | < 30% |
| **Bias ratio** | overestimates / underestimates | 0.8-1.2 |
| **Confidence interval** | % de estimaciones dentro del rango | > 80% |
| **Calibration score** | predicciones correctas / total | > 70% |
