---
title: "Métricas de Valor de Negocio"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "Business Value Metrics"
  - "ROI"
  - "Time to Market"
  - "OKR Alignment"
  - "Revenue Impact"
related:
  - "[[08-customer-satisfaction|Satisfacción del Cliente]]"
  - "[[01-dora-metrics|DORA Metrics]]"
  - "[[07-team-health-metrics|Salud del Equipo]]"
  - "[[../02-Estructura/06-product-owner|Product Owner]]"
  - "[[../03-Procesos/04-scaled-agile-safe|SAFe]]"
  - "[[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]]"
  - "[[14-balance-scorecard|Balanced Scorecard]]"
---

## Visión General

Las métricas de valor de negocio conectan el trabajo de ingeniería con resultados financieros y estratégicos. Son las métricas que importan para la dirección, pero requieren colaboración entre ingeniería y negocio para medirse correctamente.

## ROI de Ingeniería

### Fórmula General

```
ROI = (Valor generado − Costo de inversión) / Costo de inversión × 100

Ejemplo: Feature generó $500K revenue, costó $120K desarrollar
ROI = ($500K − $120K) / $120K × 100 = 316%
```

### ROI por Tipo de Proyecto

| Tipo | Fórmula simplificada | Ejemplo |
|------|---------------------|---------|
| **Revenue generation** | (Incremental revenue − Dev cost) / Dev cost | Nueva feature premium |
| **Cost reduction** | (Annual savings − Dev cost) / Dev cost | Automatización de proceso |
| **Risk mitigation** | (Expected loss avoided − Dev cost) / Dev cost | Compliance, security |
| **Developer productivity** | (Hours saved × hourly cost − Dev cost) / Dev cost | Internal tooling |

### Cost of Delay

```
Cost of Delay = Revenue Impact per month × Months of delay

Ejemplo: Feature worth $100K/month, 3 months delay
Cost of Delay = $100K × 3 = $300K
```

**Weighted Shortest Job First (WSJF)**:
```
WSJF = Cost of Delay / Job Size (in story points or time)
```

## Time to Market

### Definiciones

| Métrica | Qué mide |
|---------|----------|
| **Time to Market** | Desde idea hasta lanzamiento |
| **Time to First Value** | Desde lanzamiento hasta primer valor |
| **Time to Scale** | Desde MVP hasta full rollout |
| **Concept-to-Launch** | Desde concepto hasta producción |

### Fórmula

```
Time to Market = Timestamp(Lanzamiento) − Timestamp(Idea aprobada)

Ejemplo: Idea aprobada 1 Marzo → Launch 15 Junio = 106 días
```

### Benchmarking por Tipo

| Tipo de proyecto | TTM típico |
|-----------------|------------|
| Feature incremental | 1-4 semanas |
| Nueva feature completa | 1-3 meses |
| Nuevo producto (MVP) | 3-6 meses |
| Plataforma completa | 6-18 meses |

## OKR Alignment (Alineación con OKRs)

### Framework

```
Company OKR
  └── Department OKR
       └── Team OKR
            └── Individual KR
```

### Métricas de Alineación

| Métrica | Qué mide |
|---------|----------|
| **OKR Achievement Rate** | % de KRs completados (> 70% = good) |
| **Alignment Score** | % de trabajo del equipo alineado a OKRs |
| **Output/Outcome ratio** | Entregas vs resultados impactados |

```
Alignment Score = (Horas en OKR-aligned work / Total hours) × 100

Ejemplo: 1200h en OKR work / 1600h total = 75% alignment
```

## Revenue Impact

### Métricas de Impacto

| Métrica | Fórmula |
|---------|---------|
| **Revenue per engineer** | Total revenue / Nº engineers |
| **Revenue per feature** | Revenue attributable / Features shipped |
| **LTV:CAC ratio** | Customer lifetime value / Acquisition cost |
| **Expansion revenue** | Revenue from existing customers / Total |

### Connecting Engineering to Revenue

```
Engineering Investment = Salaries + Tools + Infrastructure
Revenue Attribution = % of revenue directly enabled by engineering

Ejemplo: $2M engineering investment → $20M revenue enabled
→ Revenue per engineering dollar = $10
```

## Innovation Rate

```
Innovation Rate = (Revenue from new products/features < 12 months) / Total revenue

Ejemplo: $3M from products < 1 year old / $20M total = 15%
```

**Benchmarks**:
- > 20% = Alta innovación (empresas como Amazon)
- 10-20% = Saludable
- < 10% = Risk de disruption

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────────┐
│         BUSINESS VALUE DASHBOARD - Q3 2026       │
├──────────────────────────────────────────────────┤
│ ROI (últimos 3 features):  285% avg             │
│ Time to Market (avg):      47 días (↓ vs 58)    │
│ Cost of Delay (pending):   $420K/mes            │
│                                                  │
│ OKR Alignment:                                  │
│   Company OKR 1:  ████████████░ 82%            │
│   Company OKR 2:  ██████████░░░ 70%            │
│   Company OKR 3:  ████████░░░░░ 55%  ⚠        │
│                                                  │
│ Revenue Metrics:                                │
│   Revenue/Engineer:  $1.2M (↑ 15% YoY)         │
│   Innovation Rate:   18% (↑ vs 14% last year)  │
│   LTV:CAC:           4.2:1                      │
│   Feature Revenue:   $2.1M attributable        │
└──────────────────────────────────────────────────┘
```

## Estrategias para Conectar Ingeniería con Negocio

1. **Regular business reviews** — Ingeniería presente en business reviews
2. **Revenue attribution** — Rastrear qué features generan revenue
3. **Cost of delay visibility** — Hacer visible el costo de no hacer
4. **OKR cascading** — Team OKRs derivan de company OKRs
5. **Post-launch reviews** — Medir impacto real vs predicho

## Conexiones

- [[08-customer-satisfaction|Satisfacción del Cliente]] — NPS/CSAT impulsan revenue
- [[01-dora-metrics|DORA Metrics]] — Better delivery = faster time to market
- [[14-balance-scorecard|Balanced Scorecard]] — Framework integral
- [[../02-Estructura/06-product-owner|Product Owner]] — Dueño de valor de negocio
- [[../03-Procesos/04-scaled-agile-safe|SAFe]] — Portfolio management
- [[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]]
- [[10-ai-productivity-metrics|Productividad con IA]] — AI impact en ROI
