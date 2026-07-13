---
title: "Deployment Frequency en Detalle"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "Deployment Frequency"
  - "Deploy Frequency"
  - "Release Frequency"
related:
  - "[[01-dora-metrics|DORA Metrics]]"
  - "[[12-change-failure-rate|Change Failure Rate]]"
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]"
  - "[[../03-Procesos/06-trunk-based-development|Trunk-Based Dev]]"
  - "[[../04-Practicas/13-feature-flags|Feature Flags]]"
  - "[[../03-Procesos/09-release-management|Release Management]]"
  - "[[03-cycle-time|Cycle Time]]"
---

## Visión General

Deployment Frequency es una de las 4 DORA metrics y mide con qué frecuencia el equipo despliega código a producción. Es un proxy de la velocidad de delivery y la madurez del pipeline CI/CD.

## Definición y Medición

### Fórmula

```
Deployment Frequency = Nº deploys exitosos a producción / Período

Ejemplos:
  - 120 deploys / mes = 6/día → ELITE
  - 20 deploys / mes = 1/2 días → HIGH
  - 4 deploys / mes = 1/sem → MEDIUM
  - 1 deploy / mes → LOW
```

### Qué Contar

| Incluir | No incluir |
|---------|------------|
| Deploys a producción | Deploys a staging/dev |
| Feature releases | Hotfixes (separar) |
| Configuration changes | Database migrations (separar) |
| Infrastructure updates | Rollbacks (contar como separate event) |

### Fuentes de Datos

| Fuente | Cómo extraer |
|--------|-------------|
| GitHub Actions | `workflow_run` events for deploy workflows |
| Jenkins | Deploy job completion timestamps |
| ArgoCD | Sync events |
| Kubernetes | `kubectl rollout history` |
| AWS CodeDeploy | Deployment history API |
| Vercel/Netlify | Deployment API |

## Niveles de Desempeño

| Nivel | Frecuencia | Características |
|-------|------------|-----------------|
| **Elite** | On-demand, múltiples/día | CI/CD completo, feature flags, trunk-based |
| **High** | Entre semanal y mensual | CI/CD maduro, test automation |
| **Medium** | Entre mensual y semanal | CI básico, deployment manual parcial |
| **Low** | Menos que mensual | Deploy manual, fear-based |

## Estrategias de Mejora

### 1. Trunk-Based Development

```
Feature Branch Model:
  main ──●──●──●──●── (merge cada 2 semanas)
         └──feat1──┘

Trunk-Based:
  main ──●─●─●─●─●─●─●─ (merge diario)
         │ │ │ │ │ │
         └─┴─┴─┴─┴─┘ (pequeños PRs)
```

Ver [[../03-Procesos/06-trunk-based-development|Trunk-Based Development]].

### 2. Feature Flags

```python
# Deploy sin feature visible
if feature_flag("new_checkout", user):
    show_new_checkout()
else:
    show_old_checkout()
```

Desacoplar **deploy** de **release** permite deployear más frecuentemente sin riesgo.

Ver [[../04-Practicas/13-feature-flags|Feature Flags]].

### 3. CI/CD Pipeline Completo

| Stage | Herramienta | Automatización |
|-------|-------------|----------------|
| Build | GitHub Actions, Jenkins | 100% |
| Test | Jest, pytest, JUnit | 100% |
| Security scan | Snyk, Trivy | 100% |
| Deploy staging | ArgoCD, Spinnaker | 100% |
| Deploy prod | ArgoCD, Spinnaker | 100% (con approval) |
| Monitoring | Prometheus, Grafana | 100% |

### 4. Reduce Deployment Batch Size

```
Menor batch size → Menor riesgo → Mayor frecuencia

Deploy 1 feature     → Risk bajo  → Deploy frecuente
Deploy 20 features   → Risk alto  → Deploy infrecuente
```

## Deployment Frequency por Tipo

| Tipo | Frecuencia típica | Ejemplo |
|------|-------------------|---------|
| Hotfix | On-demand | Bug crítico en producción |
| Feature deploy | Diario-semanal | Nueva funcionalidad |
| Infrastructure | Semanal-mensual | Kubernetes upgrade |
| Configuration | On-demand | Feature flag change |

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────────┐
│         DEPLOYMENT FREQUENCY DASHBOARD           │
├──────────────────────────────────────────────────┤
│ Current:  4.2 deploys/día  [ELITE]              │
│ Trend:    ↗ Mejorando (3.1 → 4.2 en 3 meses)   │
│                                                  │
│ Breakdown:                                       │
│   Features:  2.8/día  [████████████░]           │
│   Hotfixes:  0.3/día  [███░░░░░░░░░]           │
│   Config:    0.8/día  [███████░░░░░]           │
│   Infra:     0.3/día  [███░░░░░░░░░]           │
│                                                  │
│ Pipeline metrics:                                │
│   Build time:      4.2 min (P50)                │
│   Test time:       8.5 min (P50)                │
│   Deploy time:     1.2 min (P50)                │
│   Total pipeline:  14 min                       │
│                                                  │
│ Success rate: 98.5% (1.5% require rollback)     │
│ Avg WIP deploys: 3.2 (parallel deploys)         │
└──────────────────────────────────────────────────┘
```

## Métricas Relacionadas

| Métrica | Conexión |
|---------|----------|
| [[12-change-failure-rate\|Change Failure Rate]] | Calidad de cada deploy |
| [[13-mean-time-recovery\|MTTR]] | Qué pasa cuando falla |
| [[03-cycle-time\|Cycle Time]] | Velocidad del flujo |
| [[05-code-coverage\|Code Coverage]] | Quality gate antes de deploy |
| [[09-business-value-metrics\|Time to Market]] | Impacto en entrega de valor |

## Referencias

- [[01-dora-metrics|DORA Metrics]]
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]
- [[../03-Procesos/06-trunk-based-development|Trunk-Based Development]]
- [[../04-Practicas/13-feature-flags|Feature Flags]]
- [[../03-Procesos/09-release-management|Release Management]]
- [[../05-Herramientas/02-herramientas-ci-cd|Herramientas CI/CD]]
