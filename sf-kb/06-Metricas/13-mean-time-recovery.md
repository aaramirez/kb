---
title: "Mean Time to Recovery (MTTR)"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "MTTR"
  - "Mean Time to Recovery"
  - "Tiempo de Recuperación"
  - "Incident Recovery Time"
related:
  - "[[01-dora-metrics|DORA Metrics]]"
  - "[[12-change-failure-rate|Change Failure Rate]]"
  - "[[11-deployment-frequency|Deployment Frequency]]"
  - "[[../03-Procesos/10-incidient-management|Incident Management]]"
  - "[[../04-Practicas/12-observabilidad-practicas|Observabilidad]]"
  - "[[../05-Herramientas/05-herramientas-monitoring|Monitoring Tools]]"
  - "[[08-customer-satisfaction|Satisfacción del Cliente]]"
---

## Visión General

Mean Time to Recovery (MTTR) mide el tiempo promedio que toma un sistema en recuperarse de un fallo en producción. Es una de las 4 DORA metrics y refleja la capacidad del equipo para detectar, diagnosticar y resolver incidentes.

## Definición y Medición

### Fórmula

```
MTTR = Σ(Tiempo de recuperación por incidente) / Nº incidentes

Ejemplo:
  Incident 1: 45 min recovery
  Incident 2: 120 min recovery
  Incident 3: 30 min recovery
  MTTR = (45 + 120 + 30) / 3 = 65 min
```

### Componentes del MTTR

```
MTTR = Detection Time + Diagnostic Time + Remediation Time + Recovery Verification

|← Detection →|← Diagnostic →|← Remediation →|← Verification →|
| Alert fires  | Team gathers | Fix deployed  | Service restored|
```

| Componente | Qué es | Benchmark |
|------------|--------|-----------|
| **Detection time** | Tiempo hasta que alguien se entera | < 5 min (con monitoreo) |
| **Diagnostic time** | Tiempo para encontrar la causa | < 15 min |
| **Remediation time** | Tiempo para aplicar fix | < 30 min |
| **Verification time** | Tiempo para confirmar que funciona | < 10 min |

### Métricas Relacionadas

| Métrica | Diferencia con MTTR |
|---------|---------------------|
| **MTTD** (Detection) | Solo el tiempo de detección |
| **MTTDiag** (Diagnostic) | Solo el tiempo de diagnóstico |
| **MTTA** (Acknowledgment) | Tiempo hasta que alguien responde |
| **MTBF** (Between Failures) | Tiempo promedio entre fallos |

## Niveles de Desempeño

| Nivel | MTTR | Características |
|-------|------|-----------------|
| **Elite** | < 1 hora | Auto-remediation, runbooks, on-call efectivo |
| **High** | < 1 día | Good monitoring, response procedures |
| **Medium** | < 1 día | Basic monitoring, ad-hoc response |
| **Low** | 1 día - 1 semana | Poor observability, manual processes |

## Estrategias de Mejora

### 1. Mejorar Detección (↓ MTTD)

| Estrategia | Impacto | Herramienta |
|------------|---------|-------------|
| Alerting inteligente | Alto | PagerDuty, Opsgenie |
| SLO-based alerts | Alto | Custom dashboards |
| Anomaly detection | Medio | ML-powered monitoring |
| Synthetic monitoring | Medio | Pingdom, Checkly |

Ver [[../04-Practicas/12-observabilidad-practicas|Observabilidad]].

### 2. Mejorar Diagnóstico (↓ MTTDiag)

| Estrategia | Impacto |
|------------|---------|
| Distributed tracing | Alto |
| Structured logging | Alto |
| Runbooks automatizados | Alto |
| War room procedures | Medio |
| Status pages | Medio |

### 3. Mejorar Remediación (↓ Remediation Time)

| Estrategia | Impacto |
|------------|---------|
| Automated rollbacks | Muy alto |
| Feature flag disable | Alto |
| Blue/green deploys | Alto |
| Chaos engineering | Medio |
| Game days | Medio |

Ver [[../04-Practicas/14-chaos-engineering|Chaos Engineering]].

### 4. Incident Response Process

```
1. DETECT    → Alert fires → Pager notification
2. ACKNOWLEDGE → On-call responds → < 5 min
3. TRIAGE    → Assess severity → Assign severity level
4. DIAGNOSE  → Find root cause → Runbook if available
5. REMEDIATE → Fix/rollback → Verify recovery
6. REVIEW    → Post-incident review → Action items
```

## Incident Severity Matrix

| Severidad | Descripción | Response SLA | Recovery SLA |
|-----------|-------------|--------------|--------------|
| **SEV1** | Service down, data loss | 5 min | 1 hora |
| **SEV2** | Major feature broken | 15 min | 4 horas |
| **SEV3** | Minor feature degraded | 1 hora | 24 horas |
| **SEV4** | Cosmetic, workaround exists | 4 horas | 1 semana |

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────────┐
│         MTTR DASHBOARD - Julio 2026              │
├──────────────────────────────────────────────────┤
│ MTTR (Overall):   38 min  [███████░░░] ELITE    │
│ MTTR (SEV1):      22 min  [██████░░░░] ELITE    │
│ MTTR (SEV2):      45 min  [████████░░] ELITE    │
│ MTTR (SEV3):      2.1h    [██████████] HIGH     │
│                                                  │
│ Breakdown (avg):                                 │
│   Detection:      3 min   [██░░░░░░░░]          │
│   Acknowledgment: 5 min   [████░░░░░░]          │
│   Diagnosis:      12 min  [████████░░]          │
│   Remediation:    15 min  [█████████░]          │
│   Verification:   3 min   [██░░░░░░░░]          │
│                                                  │
│ Incidents (30 days):                             │
│   Total:      8                                 │
│   SEV1:       1  (MTTR: 22 min)                 │
│   SEV2:       3  (MTTR: 45 min)                 │
│   SEV3:       4  (MTTR: 2.1h)                  │
│                                                  │
│ MTBF (Mean Time Between Failures): 3.8 days     │
│ Auto-remediated: 3/8 (37.5%)                    │
└──────────────────────────────────────────────────┘
```

## Auto-Remediation Patterns

| Pattern | Ejemplo | Impacto en MTTR |
|---------|---------|-----------------|
| Auto-rollback | Kubernetes rollback on health check fail | ↓ 90% |
| Circuit breaker | Hystrix, Envoy | ↓ 80% |
| Auto-scaling | HPA, VPA | ↓ 70% |
| Self-healing | Restart on OOM | ↓ 60% |

## Post-Incident Review Template

```markdown
## Incident: [Title]
- **Date**: YYYY-MM-DD
- **Duration**: X hours Y minutes
- **Severity**: SEV1/2/3/4
- **MTTR**: X minutes

### Timeline
- HH:MM - Alert fired
- HH:MM - On-call acknowledged
- HH:MM - Root cause identified
- HH:MM - Fix deployed
- HH:MM - Service verified recovered

### Root Cause
[Description]

### Action Items
- [ ] [Owner] [Action] [Due date]
- [ ] [Owner] [Action] [Due date]

### Lessons Learned
[What went well, what didn't]
```

## Conexiones

- [[01-dora-metrics|DORA Metrics]] — MTTR es una de las 4 key metrics
- [[12-change-failure-rate|Change Failure Rate]] — Fallos que causan recovery
- [[11-deployment-frequency|Deployment Frequency]] — Recovery = rollback
- [[../03-Procesos/10-incidient-management|Incident Management]]
- [[../04-Practicas/12-observabilidad-practicas|Observabilidad]]
- [[../05-Herramientas/05-herramientas-monitoring|Monitoring Tools]]
- [[08-customer-satisfaction|Satisfacción del Cliente]]
