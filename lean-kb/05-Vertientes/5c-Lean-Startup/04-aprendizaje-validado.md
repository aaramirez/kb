---
title: "Aprendizaje Validado"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/startup
created: 2026-07-12
updated: 2026-07-12
category: "Lean Startup"
aliases:
  - Validated Learning
  - Aprendizaje Validado
related:
  - "[[05-Vertientes/5c-Lean-Startup/02-construir-medir-aprender]]"
  - "[[05-Vertientes/5c-Lean-Startup/03-mvp-minimo-viable]]"
  - "[[05-Vertientes/5c-Lean-Startup/06-contabilidad-de-innovacion]]"
---

# Aprendizaje Validado

## Definición

Aprendizaje validado es el proceso de **comprobar hipótesis sobre el negocio** usando datos reales del comportamiento del cliente, no opiniones ni suposiciones.

> *"El aprendizaje validado es la unidad fundamental de progreso en una startup."* — Eric Ries

## ¿Por qué "validado"?

No todo aprendizaje es igual. Hay tres niveles:

| Nivel | Fuente | Confiabilidad |
|-------|--------|---------------|
| **Opinión** | Lo que la gente dice que haría | Baja — la gente miente o se equivoca |
| **Comportamiento** | Lo que la gente realmente hace | Media — datos observados |
| **Experimento controlado** | Comparación A/B con métricas definidas | Alta — causalidad demostrada |

El aprendizaje validado opera en el nivel más alto.

## Diseño de experimentos

### Estructura básica
1. **Hipótesis** — "Creemos que [acción] resultará en [resultado]"
2. **Métrica** — "Mediremos [métrica específica]"
3. **Mínimo experimento** — "Probaremos con [MVP/experimento]"
4. **Criterio de éxito** — "Si [umbral], la hipótesis se valida"
5. **Decisión** — "Si se valida → perseverar. Si no → pivotar"

### Ejemplo
```
Hipótesis: Los usuarios del plan free convertirán a paid si ven
           un paywall después de 5 usos de la feature premium.

Métrica:   Tasa de conversión free → paid después del paywall.

Mínimo:    Implementar paywall para 10% de usuarios free.

Éxito:     Conversión ≥ 5% en 2 semanas.

Decisión:  Si ≥ 5% → implementar para todos.
           Si < 5% → iterar o pivotar.
```

## Métricas que importan

### Vanity Metrics vs Actionable Metrics
| Vanity (evitar) | Actionable (usar) |
|-----------------|-------------------|
| Total de usuarios注册 | Usuarios activos semanales |
| Descargas totales | Retention a 7 días |
| Page views | Tasa de conversión |
| Revenue total | Revenue per user / cohort |

### Cohort Analysis
- Agrupar usuarios por fecha de registro
- Comparar comportamiento entre cohorts
- Detectar si los cambios mejoran métricas para nuevos usuarios

## Framework de validación

```
Hipótesis → Experimento → Datos → Análisis → Decisión
   │                                              │
   └──────────── Learning Loop ───────────────────┘
```

## Errores comunes

- No definir criterios de éxito antes del experimento
- Cambiar métricas durante el experimento
- Muestrear solo usuarios favorables
- Confundir correlación con causalidad
- No documentar aprendizaje (se olvida)

## Conexiones

- [[05-Vertientes/5c-Lean-Startup/02-construir-medir-aprender]] — Aprendizaje es la fase "Learn"
- [[05-Vertientes/5c-Lean-Startup/03-mvp-minimo-viable]] — MVP genera datos para aprendizaje
- [[05-Vertientes/5c-Lean-Startup/06-contabilidad-de-innovacion]] — Cómo medir aprendizaje
- [[05-Vertientes/5c-Lean-Startup/05-pivotar-o-perseverar]] — Decisión basada en aprendizaje
- [[05-Vertientes/5b-Lean-Six-Sigma/04-dmaic-medir]] — Data Collection Plan como herramienta similar
- [[04-Mentalidad/01-kaizen-continuo]] — Aprendizaje continuo como cultura
