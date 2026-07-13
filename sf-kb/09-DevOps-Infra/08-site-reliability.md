---
title: "Site Reliability Engineering"
tags:
  - sf/devops
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "SRE"
  - "Service Level Objectives"
  - "Error Budget"
  - "SLI/SLO"
related:
  - "[[../09-DevOps-Infra/09-incident-response|Incident Response]]"
  - "[[../06-Metricas/01-dora-metrics|DORA Metrics]]"
  - "[[../09-DevOps-Infra/08-site-reliability|SRE]]"
  - "[[../06-Metricas/13-mean-time-recovery|MTTR]]"
  - "[[../09-DevOps-Infra/10-cloud-native|Cloud Native]]"
---

# Site Reliability Engineering

SRE es un enfoque para la ingeniería de operaciones que usa principios de software para gestionar infraestructura y sistemas, creando un marco para la confiabilidad a escala.

## ¿Qué es SRE?

> "SRE is what happens when you treat operations as a software problem."
> — Google SRE Book

### SRE vs DevOps

| Aspecto | DevOps | SRE |
|---------|--------|-----|
| **Focus** | Cultura y colaboración | Confiabilidad y métricas |
| **Approach** | Philosophical | Engineering-driven |
| **Metric** | DORA metrics | SLIs/SLOs/Error Budgets |
| **Toil** | Goal: reduce | Goal: eliminate (<50%) |
| **Risk** | Shift-left | Manage via error budgets |

```
DevOps ←── complementary ──→ SRE
  │                              │
  │ Culture                      │ Engineering
  │ Collaboration                │ Measurement
  │ Breaking silos               │ Error budgets
  │                              │
  └──────────┬───────────────────┘
             │
     SRE is a implementation
      of DevOps principles
```

## SLIs, SLOs y SLAs

### Niveles de servicio

```
┌─────────────────────────────────────────────────┐
│                    SLA                           │
│  (Service Level Agreement - contractual)        │
│                                                 │
│  ┌─────────────────────────────────────────┐   │
│  │              SLO                         │   │
│  │  (Service Level Objective - internal)    │   │
│  │                                         │   │
│  │  ┌─────────────────────────────────┐   │   │
│  │  │          SLI                     │   │   │
│  │  │  (Service Level Indicator)       │   │   │
│  │  │  What we measure                 │   │   │
│  │  └─────────────────────────────────┘   │   │
│  │  What we promise (internal)            │   │
│  └─────────────────────────────────────────┘   │
│  What we promise (contractual)                 │
└─────────────────────────────────────────────────┘
```

### SLIs comunes

| SLI | Definición | Fórmula |
|-----|-----------|---------|
| **Availability** | % de requests exitosas | successful requests / total requests |
| **Latency** | Tiempo de respuesta | requests < threshold / total requests |
| **Throughput** | Requests por segundo | total requests / time window |
| **Error rate** | % de errores | error responses / total responses |
| **Durability** | Persistencia de datos | data loss events / time period |

### SLO examples

```yaml
# SLO Definition
slo:
  service: myapp
  objective: 99.9%
  sli:
    type: availability
    description: "Percentage of successful HTTP requests"
  window: 30 days
  error_budget:
    total_minutes: 43200  # 30 days
    budget_minutes: 43.2  # 0.1% of 43200
    remaining_minutes: 30
```

### SLA examples

| SLA Level | Availability | Downtime/year | Downtime/month |
|-----------|-------------|---------------|----------------|
| **99%** | "Two nines" | 3.65 days | 7.31 hours |
| **99.9%** | "Three nines" | 8.77 hours | 43.83 min |
| **99.95%** | "Three and half" | 4.38 hours | 21.92 min |
| **99.99%** | "Four nines" | 52.6 min | 4.38 min |
| **99.999%** | "Five nines" | 5.26 min | 26.3 sec |

## Error Budgets

### El concepto

```
SLO: 99.9% availability
Error Budget: 0.1% = 43.2 minutes/month

┌──────────────────────────────────────────────────┐
│ Error Budget Consumption                          │
│                                                  │
│ ████████████░░░░░░░░░░░░░░░░░░ 38% consumed      │
│                                  (16.4 min used) │
│                                                  │
│ Status: HEALTHY                                   │
│ Remaining: 26.8 minutes                          │
└──────────────────────────────────────────────────┘
```

### Error Budget Policy

| Budget Status | Action |
|---------------|--------|
| **>50% remaining** | Normal operations, feature velocity |
| **25-50% remaining** | Caution, more testing, slower rollouts |
| **10-25% remaining** | Freeze non-critical changes |
| **<10% remaining** | Only reliability work, no feature deploys |
| **0% remaining** | All hands on reliability, incident mode |

```yaml
# Error budget policy
policies:
  - name: healthy
    threshold: 50
    actions:
      - allow_feature_deploys: true
      - require_extra_testing: false

  - name: warning
    threshold: 25
    actions:
      - allow_feature_deploys: true
      - require_extra_testing: true
      - notify_team: true

  - name: critical
    threshold: 10
    actions:
      - allow_feature_deploys: false
      - require_reliability_review: true
      - escalate_to_management: true
```

## Toil Reduction

> "Toil is the kind of work that tends to be manual, repetitive, automatable, tactical, devoid of enduring value, and scales linearly as the service grows."

### Categorías de toil

| Tipo | Ejemplo | Solución |
|------|---------|----------|
| **Manual ops** | Restart services manually | Auto-remediation scripts |
| **Repeated debugging** | Same issue, different day | Fix root cause, alerting |
| **Manual provisioning** | Create resources by hand | IaC + self-service |
| **Manual scaling** | Resize instances | HPA, autoscaling |
| **Toil-heavy testing** | Manual regression testing | Automated test suite |

### Medir toil

```
Total engineering time: 40 hours/week
Toil time: 12 hours/week (30%)
Toil budget: < 50%

Goal: Reduce toil to <20% (8 hours/week)
Current gap: 4 hours/week to eliminate
```

**Herramientas para medir:**
- Time tracking en tickets
- Automation coverage reports
- Manual vs automated incident response

## Monitoring y Alerting

### Los 4 signos de黄金 signals (Google)

| Signal | Descripción | SLI |
|--------|-------------|-----|
| **Latency** | Tiempo de servicio | p50, p99 |
| **Traffic** | Demand on the system | RPS |
| **Errors** | Rate of failed requests | % 5xx |
| **Saturation** | How "full" is the service | CPU, memory, connections |

### Alerting philosophy

```yaml
# Multi-window, multi-burn-rate alerting
# SLO: 99.9% over 30 days

alert:
  name: high_error_rate
  sli: availability
  objective: 99.9%
  conditions:
    - window: 1 hour
      burn_rate: 14.4  # 1% budget consumed in 1 hour
    - window: 5 minutes
      burn_rate: 3     # 1% budget consumed in 5 min
  severity: page  # Pages on-call
```

**Alert routing:**
```
Alert → AlertManager → Routing
  │
  ├── Page (critical, needs immediate action)
  ├── Ticket (non-critical, needs action soon)
  └── Log (informational, no action needed)
```

## SRE Practices

### Incident management

Ver [[../09-DevOps-Infra/09-incident-response|Incident Response]] para detalles completos.

### Post-mortems

| Tipo | Descripción |
|------|-------------|
| **Blameless** | Focus en sistemas, no personas |
| **Written** | Documentado y compartido |
| **Action items** | Con owners y deadlines |
| **Follow-up** | Verificar que se implementaron |

### Capacity planning

```
Current usage: 1000 RPS
Growth rate: 20%/month
Target: 12 months

Month 6: 1000 * 1.2^6 = 2986 RPS
Month 12: 1000 * 1.2^12 = 8916 RPS

Current capacity: 1500 RPS
Action needed: Scale by month 4
```

## Relación con otros conceptos

- [[../09-DevOps-Infra/09-incident-response|Incident Response]] — Gestión de incidentes
- [[../06-Metricas/01-dora-metrics|DORA Metrics]] — Métricas de delivery
- [[../06-Metricas/13-mean-time-recovery|MTTR]] — Mean Time To Recovery
- [[../09-DevOps-Infra/10-cloud-native|Cloud Native]] — SRE en cloud
- [[../09-DevOps-Infra/01-devops-ciclo|El Ciclo de DevOps]] — Measurement en CALMS
- [[../06-Metricas/07-team-health-metrics|Team Health Metrics]] — SRE como práctica de equipo
