---
title: "Métricas DORA"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "DORA Metrics"
  - "4 Key Metrics"
  - "Accelerate Metrics"
  - "DevOps Research"
related:
  - "[[../01-Fundamentos/07-devops-filosofia|DevOps]]"
  - "[[11-deployment-frequency|Deployment Frequency]]"
  - "[[12-change-failure-rate|Change Failure Rate]]"
  - "[[13-mean-time-recovery|MTTR]]"
  - "[[03-cycle-time|Lead Time]]"
  - "[[../04-Practicas/12-observabilidad-practicas|Observabilidad]]"
  - "[[../07-IA-Software/README|IA en Software]]"
---

## Visión General

Las métricas DORA (DevOps Research and Assessment), popularizadas por el libro *Accelerate* de Nicole Forsgren, Jez Humble y Gene Kim, son las 4 métricas clave que predicen el desempeño de los equipos de software y la capacidad de entregar valor de negocio.

## Las 4 Key Metrics

| Métrica | Qué mide | Fórmula |
|---------|----------|---------|
| **Deployment Frequency** | Frecuencia de despliegues a producción | Despliegues / período |
| **Lead Time for Changes** | Tiempo desde commit hasta producción | Timestamp(producción) − Timestamp(commit) |
| **Change Failure Rate** | % de cambios que causan fallo en producción | Cambios con fallo / Total cambios × 100 |
| **Mean Time to Recovery (MTTR)** | Tiempo promedio para recuperarse de fallo | Sum(recovery times) / Nº incidents |

## Niveles de Desempeño

| Nivel | Deploy Freq | Lead Time | Change Failure Rate | MTTR |
|-------|-------------|-----------|---------------------|------|
| **Elite** | On-demand (múltiples/día) | < 1 hora | 0-15% | < 1 hora |
| **High** | Entre semanal y mensual | 1 día - 1 semana | 16-30% | < 1 día |
| **Medium** | Entre mensual y semanal | 1 semana - 1 mes | 16-30% | < 1 día |
| **Low** | Entre semanal y mensual | 1-6 meses | 16-30% | 1 día - 1 semana |

## Cómo Medir Cada Métrica

### Deployment Frequency

```
Deployment Frequency = Nº deploys exitosos / Período de tiempo

Ejemplo: 45 deploys / mes = ~2.25 deploys/día
```

**Fuentes de datos**: GitHub Actions, Jenkins, GitLab CI, ArgoCD

**Buenas prácticas**:
- Contar solo deploys a producción (no staging)
- Incluir deploys automáticos y manuales
- Usar mediana en vez de media para evitar outliers

### Lead Time for Changes

```
Lead Time = P50(Production Timestamp − First Commit Timestamp)

Ejemplo: P50 = 3.2 horas → mediana del tiempo de entrega
```

**Fuentes de datos**: Git logs + deployment timestamps, CI/CD pipeline metrics

**Consideraciones**:
- Medir desde el primer commit del changeset, no desde el push
- Incluir tiempo de code review y CI
- Segmentar por tipo de cambio (feature, bugfix, hotfix)

### Change Failure Rate

```
CFR = (Deploys con rollback/fallo detectado / Total deploys) × 100

Ejemplo: 5 fallos en 45 deploys = 11.1% CFR
```

**Definición de "fallo"**:
- Rollback inmediato
- Hotfix dentro de 24 horas
- Degradación de servicio detectada por monitoreo

### Mean Time to Recovery

```
MTTR = Σ(Tiempo de recuperación por incidente) / Nº incidentes

Ejemplo: (45min + 120min + 30min) / 3 = 65 min
```

**Fuentes de datos**: PagerDuty, Opsgenie, incident management tools

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────────┐
│              DORA DASHBOARD - Q3 2026            │
├──────────────────┬───────────────────────────────┤
│ Deploy Frequency │ ████████████ 2.3/día  [ELITE] │
│ Lead Time (P50)  │ ██████ 4.2h         [ELITE]  │
│ Change Fail Rate │ ██████ 12%          [ELITE]  │
│ MTTR (P50)       │ ████████ 38min      [ELITE]  │
├──────────────────┴───────────────────────────────┤
│ Tendencia: ↗ Deploy Freq  ↗ Lead Time (↓ mejor) │
│            ↘ CFR (↓ mejor) ↘ MTTR (↓ mejor)     │
└──────────────────────────────────────────────────┘
```

## Herramientas de Medición

| Herramienta | Tipo | Métricas DORA |
|-------------|------|---------------|
| **DORA metrics (Google)** | Herramienta nativa | Las 4 key metrics |
| **Accelerate plugin** | Jenkins plugin | Deploy freq, lead time |
| **GitLab Analytics** | Built-in | Todas las 4 |
| **Faros AI** | Plataforma | DORA + extras |
| **LinearB** | Plataforma | DORA + flow metrics |
| **改 (改)** | OSS | Custom DORA dashboard |

## Factores que Impulsan el Alto Desempeño

Según el State of DevOps Report, los equipos elite se diferencian por:

1. **Trunk-based development** — No feature branches largos
2. **CI/CD completo** — Deploy on demand
3. **Feature flags** — Desacoplar deploy de release
4. **Automated testing** — Suite de tests confiables
5. **Loose coupling** — Arquitectura que permite despliegues independientes
6. **Generative culture** — Aprendizaje post-incidente, no blame

## Métricas Complementarias

Las DORA metrics son necesarias pero no suficientes. Complementar con:

- [[02-velocity-throughput|Velocity y Throughput]] para capacidad del equipo
- [[04-defect-rate|Tasa de Defectos]] para calidad percibida
- [[07-team-health-metrics|Salud del Equipo]] para sostenibilidad
- [[08-customer-satisfaction|Satisfacción del Cliente]] para valor real

## Anti-Patrones

| Anti-Patrón | Consecuencia |
|-------------|-------------|
| Optimizar solo deployment frequency | Feature factory, código de baja calidad |
| Ignorar change failure rate | Velocidad sin calidad = más incidentes |
| No medir MTTR | No saber si el equipo puede recuperarse |
| Comparar equipos entre sí | Competencia tóxica en vez de mejora |

## Referencias

- [[../01-Fundamentos/07-devops-filosofia|DevOps Filosofía]]
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]
- [[11-deployment-frequency|Deployment Frequency en detalle]]
- [[12-change-failure-rate|Change Failure Rate]]
- [[13-mean-time-recovery|Mean Time to Recovery]]
- [[14-balance-scorecard|Balanced Scorecard]]
