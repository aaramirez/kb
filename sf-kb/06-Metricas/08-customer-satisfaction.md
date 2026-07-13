---
title: "Satisfacción del Cliente"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "Customer Satisfaction"
  - "NPS"
  - "CSAT"
  - "CES"
  - "User Satisfaction"
related:
  - "[[09-business-value-metrics|Valor de Negocio]]"
  - "[[07-team-health-metrics|Salud del Equipo]]"
  - "[[01-dora-metrics|DORA Metrics]]"
  - "[[../02-Estructura/06-product-owner|Product Owner]]"
  - "[[../04-Practicas/11-definition-of-done|Definition of Done]]"
  - "[[../03-Procesos/10-incidient-management|Incident Management]]"
---

## Visión General

La satisfacción del cliente mide si el software cumple las expectativas de quienes lo usan. Es el puente entre las métricas de ingeniería y el valor real de negocio. Un equipo puede tener métricas DORA perfectas y aun así construir el producto equivocado.

## Las 3 Métricas Clave

### NPS (Net Promoter Score)

```
NPS = % Promotores − % Detractores

Pregunta: "Del 0 al 10, ¿qué tan probable es que recomiendes nuestro producto?"
  9-10 = Promotor
  7-8  = Pasivo
  0-6  = Detractor

Ejemplo: 55% promotores − 20% detractores = NPS +35
```

| NPS Range | Interpretación |
|-----------|----------------|
| > 70 | Excelente |
| 50-70 | Muy bueno |
| 0-50 | Necesita mejora |
| < 0 | Crítico |

**NPS relacional** vs **NPS transaccional**:
- **Relacional**: Midió periódicamente (trimestral), relationship con el producto
- **Transaccional**: Después de una interacción específica (soporte, features)

### CSAT (Customer Satisfaction Score)

```
CSAT = (Satisfechos / Total respuestas) × 100

Pregunta: "¿Qué tan satisfecho estás con [feature/experiencia]?"
Escala: 1-5 (o 1-7, o emoji-based)

Ejemplo: 420 satisfechos (4-5) / 500 respuestas = 84% CSAT
```

| CSAT | Interpretación |
|------|----------------|
| > 90% | Excelente |
| 80-90% | Bueno |
| 70-80% | Aceptable |
| < 70% | Preocupante |

**Cuándo usar CSAT vs NPS**:
- CSAT → Para features específicas, transacciones puntuales
- NPS → Para percepción general del producto, relación a largo plazo

### CES (Customer Effort Score)

```
CES = Promedio de esfuerzo percibido

Pregunta: "Qué tan fácil fue [completar tarea X]?"
Escala: 1 (muy difícil) a 7 (muy fácil)

Ejemplo: CES promedio = 5.2 (de 7)
```

| CES | Interpretación |
|-----|----------------|
| > 5.5 | Experiencia effortless |
| 4-5.5 | Aceptable |
| < 4 | Friction significativa |

**CES es el predictor más fuerte de futuras transacciones** según Gartner.

## Métricas de Soporte

| Métrica | Fórmula | Meta típica |
|---------|---------|-------------|
| **First Response Time** | Tiempo hasta primera respuesta | < 1 hora (email), < 5 min (chat) |
| **Resolution Time** | Tiempo hasta resolución completa | < 24 horas |
| **First Contact Resolution** | % resueltos en primer contacto | > 70% |
| **Ticket Volume** | Tickets / usuario / período | Trend ↘ |
| **Self-service Rate** | % resueltos sin intervención | > 40% |

## Métricas de Uso del Producto

| Métrica | Qué mide | Fórmula |
|---------|----------|---------|
| **DAU/MAU** | Engagement diario/mensual | Daily active / Monthly active |
| **Session Duration** | Tiempo promedio por sesión | Total time / Sessions |
| **Feature Adoption** | % usuarios usando nueva feature | Users of feature / Total users |
| **Churn Rate** | % usuarios que se van | Lost / Starting users × 100 |
| **Retention Rate** | % usuarios que vuelven | (1 − Churn) × 100 |

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────────┐
│         CUSTOMER SATISFACTION DASHBOARD - Q3     │
├──────────────────────────────────────────────────┤
│ NPS:       +42   [████████████░] ↗ improving    │
│ CSAT:      86%   [█████████████] → stable       │
│ CES:       5.4   [████████████░] ↗ improving    │
│                                                  │
│ Support Metrics:                                 │
│   First Response:   45 min (target: <60) ✅     │
│   Resolution Time:  18h   (target: <24) ✅     │
│   FCR:              72%   (target: >70) ✅     │
│   Ticket Volume:    ↘ 12% vs last quarter       │
│                                                  │
│ Product Metrics:                                 │
│   DAU/MAU:          42% (sticky!)               │
│   Feature Adoption: 68% (new dashboard)         │
│   Churn Rate:       2.1%/month                  │
│   Self-service:     45%                         │
└──────────────────────────────────────────────────┘
```

## Cómo Medir en Software

### Integración con el Producto

1. **In-app surveys** — Micro-encuestas contextuales
2. **NPS emails** — Trimestrales, segmentados
3. **Support ticket analysis** — NLP para sentiment
4. **Usage analytics** — Mixpanel, Amplitude, PostHog
5. **Feedback widgets** — Canny, Nolt, ProductBoard

### Segmentación

| Segmento | Qué observar |
|----------|-------------|
| Power users | Feature adoption, CES |
| New users | Onboarding success, first-week retention |
| Enterprise | NPS relacional, SLA compliance |
| At-risk | Churn predictors, declining usage |

## Conexiones

- [[09-business-value-metrics|Valor de Negocio]] — CSAT impacta revenue
- [[07-team-health-metrics|Salud del Equipo]] — Happy team → happy customers
- [[01-dora-metrics|DORA Metrics]] — Mejores métricas = mejor entrega
- [[../02-Estructura/06-product-owner|Product Owner]] — Dueño de customer satisfaction
- [[../04-Practicas/11-definition-of-done|Definition of Done]] — Incluir validación de usuario
- [[../03-Procesos/10-incidient-management|Incident Management]] — Impacto en CSAT
