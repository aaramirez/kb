---
title: "Métricas y Desempeño"
tags:
  - sf/metricas
  - type/guia
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "Metrics"
  - "KPIs"
  - "Engineering Metrics"
  - "Performance"
related:
  - "[[../01-Fundamentos/README|Fundamentos]]"
  - "[[../03-Procesos/README|Procesos]]"
  - "[[../04-Practicas/README|Prácticas]]"
  - "[[../05-Herramientas/README|Herramientas]]"
  - "[[../07-IA-Software/README|IA en Software]]"
---

## Visión General

Las métricas son el sistema nervioso de una software factory. Sin medición no hay mejora posible: lo que no se mide, no se puede gestionar. Esta sección cubre las métricas más relevantes para evaluar el desempeño de equipos, procesos y productos de software.

## Principios Clave

1. **Medir para mejorar, no para castigar** — Las métricas deben驱动 improvement, no performance reviews
2. **Outcome over output** — Preferir métricas de resultado sobre métricas de actividad
3. **Context matters** — Ninguna métrica tiene sentido sin contexto de negocio
4. **Leading over lagging** — Métricas predictivas son más útiles que las retrospectivas
5. **Automatizar la recolección** — La métrica manual es inútil a largo plazo

## Mapa de Métricas

### Métricas de Flujo y Entrega

| Métrica | Archivo | Foco |
|---------|---------|------|
| DORA Metrics | [[01-dora-metrics]] | 4 key metrics del Accelerate State of DevOps |
| Velocity y Throughput | [[02-velocity-throughput]] | Story points vs throughput, limitaciones |
| Cycle Time y Lead Time | [[03-cycle-time]] | Tiempo de desarrollo y entrega |
| Deployment Frequency | [[11-deployment-frequency]] | Frecuencia de despliegues |
| Change Failure Rate | [[12-change-failure-rate]] | Tasa de fallos en cambios |
| Mean Time to Recovery | [[13-mean-time-recovery]] | Tiempo de recuperación |

### Métricas de Calidad

| Métrica | Archivo | Foco |
|---------|---------|------|
| Tasa de Defectos | [[04-defect-rate]] | Defect density, escaped defects |
| Code Coverage | [[05-code-coverage]] | Cobertura de tests, mutation testing |
| Deuda Técnica | [[06-technical-debt-metrics]] | SonarQube, code smells, maintainability |

### Métricas de Personas y Negocio

| Métrica | Archivo | Foco |
|---------|---------|------|
| Salud del Equipo | [[07-team-health-metrics]] | eNPS, retention, velocity trends |
| Satisfacción del Cliente | [[08-customer-satisfaction]] | NPS, CSAT, CES |
| Valor de Negocio | [[09-business-value-metrics]] | ROI, time-to-market, OKRs |

### Métricas Especializadas

| Métrica | Archivo | Foco |
|---------|---------|------|
| Productividad con IA | [[10-ai-productivity-metrics]] | Acceptance rate, time saved |
| Balanced Scorecard | [[14-balance-scorecard]] | Framework integral 4 perspectivas |

## Framework de Métricas

```
┌─────────────────────────────────────────────┐
│              BUSINESS VALUE                 │
│  ROI · Time-to-Market · OKR Alignment       │
├─────────────────────────────────────────────┤
│           CUSTOMER SATISFACTION             │
│  NPS · CSAT · CES                           │
├─────────────────────────────────────────────┤
│              TEAM HEALTH                    │
│  eNPS · Retention · Flow State              │
├─────────────────────────────────────────────┤
│              DELIVERY CAPABILITY            │
│  DORA · Cycle Time · Deployment Freq        │
├─────────────────────────────────────────────┤
│              CODE QUALITY                   │
│  Coverage · Defect Rate · Tech Debt         │
└─────────────────────────────────────────────┘
```

## Cómo Usar Esta Sección

1. **Implementando DORA** → [[01-dora-metrics]] como punto de partida
2. **Evaluando calidad** → [[04-defect-rate]] + [[05-code-coverage]]
3. **Midendo equipo** → [[07-team-health-metrics]] con encuestas
4. **Alineando con negocio** → [[14-balance-scorecard]]
5. **Incorporando IA** → [[10-ai-productivity-metrics]]
6. **Definiendo dashboard** → Combinar métricas de arriba

## Anti-Patrones Comunes

| Anti-Patrón | Problema | Solución |
|-------------|----------|----------|
| Vanity metrics | Números que suenan bien pero no impulsan acción | Medir outcomes, no outputs |
| Metric fixation | Optimizar la métrica en vez del valor | Usar métricas como signal, no target |
| Goodhart's Law | "Cuando una métrica se convierte en target, deja de ser buena métrica" | Combinar múltiples métricas |
| Measure what's easy | Medir solo lo que es fácil de capturar | Invertir en telemetría adecuada |

## Referencias

- [[../01-Fundamentos/07-devops-filosofia|DevOps Filosofía]]
- [[../01-Fundamentos/05-modelos-madurez|Modelos de Madurez]]
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]
- [[../04-Practicas/12-observabilidad-practicas|Observabilidad]]
- [[../04-Practicas/11-definition-of-done|Definition of Done]]
- [[../05-Herramientas/05-herramientas-monitoring|Herramientas de Monitoreo]]
- [[../07-IA-Software/README|IA en Software]]
