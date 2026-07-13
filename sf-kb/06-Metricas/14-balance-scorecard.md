---
title: "Balanced Scorecard para Software"
tags:
  - sf/metricas
  - type/guia
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "Balanced Scorecard"
  - "BSC"
  - "Engineering Scorecard"
  - "4 Perspectives"
related:
  - "[[01-dora-metrics|DORA Metrics]]"
  - "[[09-business-value-metrics|Valor de Negocio]]"
  - "[[08-customer-satisfaction|Satisfacción del Cliente]]"
  - "[[07-team-health-metrics|Salud del Equipo]]"
  - "[[../01-Fundamentos/05-modelos-madurez|Modelos de Madurez]]"
  - "[[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]]"
  - "[[../03-Procesos/04-scaled-agile-safe|SAFe]]"
---

## Visión General

El Balanced Scorecard (BSC), adaptado para software engineering, proporciona un marco integral para medir el desempeño desde 4 perspectivas balanceadas. Evita la optimización local de una métrica a costa de otras.

## Las 4 Perspectivas

```
┌─────────────────────────────────────────────────┐
│                 FINANCIERA                       │
│  ROI · Cost per feature · Revenue per engineer   │
├─────────────────────────────────────────────────┤
│               CLIENTE                            │
│  NPS · CSAT · CES · Feature adoption             │
├─────────────────────────────────────────────────┤
│            PROCESOS INTERNOS                     │
│  DORA · Cycle time · CFR · Quality gates         │
├─────────────────────────────────────────────────┤
│          APRENDIZAJE Y CRECIMIENTO              │
│  eNPS · Training hours · Innovation rate         │
└─────────────────────────────────────────────────┘
```

## Perspectiva 1: Financiera

### KPIs

| KPI | Fórmula | Meta típica |
|-----|---------|-------------|
| **ROI de Ingeniería** | (Revenue attributable − Cost) / Cost | > 200% |
| **Cost per Feature** | Dev cost / Features shipped | Decreasing trend |
| **Revenue per Engineer** | Total revenue / # engineers | Growing YoY |
| **Infrastructure Cost Ratio** | Infra cost / Revenue | < 15% |
| **Innovation Investment** | % budget en new vs maintenance | 20-30% new |

### Dashboard

```
FINANCIERA:
  ROI:           285% ↗
  Cost/Feature:  $12K (↓ from $15K)
  Rev/Engineer:  $1.2M (↑ 15%)
  Infra Ratio:   11% ✅
  Innovation:    22% ✅
```

Ver [[09-business-value-metrics]] para detalles.

## Perspectiva 2: Cliente

### KPIs

| KPI | Fórmula | Meta típica |
|-----|---------|-------------|
| **NPS** | %Promotores − %Detractores | > 40 |
| **CSAT** | Satisfechos / Total × 100 | > 85% |
| **CES** | Promedio esfuerzo (1-7) | > 5.0 |
| **Feature Adoption** | Users of feature / Total users | > 60% |
| **Time to Value** | Time from launch to first value | < 30 días |

### Dashboard

```
CLIENTE:
  NPS:           +42 ↗
  CSAT:          86%
  CES:           5.4
  Adoption:      68%
  Time to Value: 18 days
```

Ver [[08-customer-satisfaction]] para detalles.

## Perspectiva 3: Procesos Internos

### KPIs

| KPI | Fórmula | Meta típica |
|-----|---------|-------------|
| **Deploy Frequency** | Deploys / time | > 1/día |
| **Lead Time** | P50 commit→prod | < 1 día |
| **Change Failure Rate** | Failures / deploys × 100 | < 15% |
| **MTTR** | Avg recovery time | < 1 hora |
| **Cycle Time** | P50 dev time | < 3 días |
| **Test Coverage** | Covered lines / total × 100 | > 80% |
| **Tech Debt Ratio** | Remediation / dev cost × 100 | < 10% |

### Dashboard

```
PROCESOS INTERNOS:
  Deploy Freq:  4.2/día  [ELITE]
  Lead Time:    4.2h     [ELITE]
  CFR:          8.5%     [ELITE]
  MTTR:         38 min   [ELITE]
  Cycle Time:   2.3d     [GOOD]
  Coverage:     87%      [GOOD]
  Tech Debt:    8.3%     [ACCEPTABLE]
```

Ver [[01-dora-metrics]], [[03-cycle-time]], [[11-deployment-frequency]], [[12-change-failure-rate]], [[13-mean-time-recovery]].

## Perspectiva 4: Aprendizaje y Crecimiento

### KPIs

| KPI | Fórmula | Meta típica |
|-----|---------|-------------|
| **eNPS** | %Promotores − %Detractores | > 30 |
| **Retention Rate** | (Start − Leaves) / Start × 100 | > 90% |
| **Training Hours** | Hours per engineer per quarter | > 20h |
| **Innovation Rate** | New product revenue / total | > 15% |
| **AI Adoption** | Active AI users / total engineers | > 80% |
| **Knowledge Sharing** | Internal talks / month | > 2 |

### Dashboard

```
APRENDIZAJE Y CRECIMIENTO:
  eNPS:         +35 ↗
  Retention:    92%
  Training:     24h/qtr
  Innovation:   18%
  AI Adoption:  85%
  Knowledge:    3 talks/mes
```

Ver [[07-team-health-metrics]], [[10-ai-productivity-metrics]].

## Implementación del BSC

### Paso 1: Seleccionar KPIs (3-5 por perspectiva)

```
No intentar medir todo. Elegir las métricas más impactables.
```

### Paso 2: Establecer Baseline

```
Medir durante 2-3 sprints para tener baseline.
Comparar después de establecer el baseline.
```

### Paso 3: Definir Targets

| Target Type | Ejemplo |
|-------------|---------|
| Absolute | MTTR < 1 hora |
| Relative | CFR ↓ 20% vs baseline |
| Directional | eNPS ↗ quarter over quarter |

### Paso 4: Review Cadence

| Review | Frecuencia | Participantes |
|--------|------------|---------------|
| Operational | Weekly | Team leads |
| Tactical | Monthly | Engineering managers |
| Strategic | Quarterly | VP/Director + stakeholders |

### Paso 5: Iterate

```
Cada quarter:
1. Review BSC achievements
2. Adjust targets
3. Add/remove KPIs based on context
4. Present to stakeholders
```

## BSC de Ejemplo: Squad Alpha Q3 2026

```
┌──────────────────────────────────────────────────┐
│         BALANCED SCORECARD - SQUAD ALPHA Q3      │
├──────────────────────────────────────────────────┤
│                                                  │
│ FINANCIERA                    Target │ Actual    │
│   ROI:                        >200%  │ 285% ✅  │
│   Cost/Feature:              <$15K   │ $12K ✅  │
│                                                  │
│ CLIENTE                                      │
│   NPS:                         >40   │ +42 ✅   │
│   Feature Adoption:           >60%   │ 68% ✅   │
│                                                  │
│ PROCESOS                                   │
│   Deploy Freq:                >1/d   │ 4.2 ✅   │
│   CFR:                         <15%   │ 8.5% ✅  │
│   MTTR:                        <60m   │ 38m ✅   │
│                                                  │
│ APRENDIZAJE                               │
│   eNPS:                        >30   │ +35 ✅   │
│   Retention:                   >90%   │ 92% ✅   │
│   Training:                    >20h   │ 24h ✅   │
│                                                  │
│ OVERALL STATUS: ████████████████████ 100% ✅    │
└──────────────────────────────────────────────────┘
```

## Conexiones

- [[01-dora-metrics|DORA Metrics]] — Perspectiva de procesos
- [[09-business-value-metrics|Valor de Negocio]] — Perspectiva financiera
- [[08-customer-satisfaction|Satisfacción del Cliente]] — Perspectiva cliente
- [[07-team-health-metrics|Salud del Equipo]] — Perspectiva de crecimiento
- [[../01-Fundamentos/05-modelos-madurez|Modelos de Madurez]]
- [[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]]
- [[../03-Procesos/04-scaled-agile-safe|SAFe]]
