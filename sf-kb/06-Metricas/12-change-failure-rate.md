---
title: "Change Failure Rate"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "Change Failure Rate"
  - "CFR"
  - "Deployment Failure Rate"
  - "Rollback Rate"
related:
  - "[[01-dora-metrics|DORA Metrics]]"
  - "[[11-deployment-frequency|Deployment Frequency]]"
  - "[[13-mean-time-recovery|MTTR]]"
  - "[[04-defect-rate|Tasa de Defectos]]"
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]"
  - "[[../03-Procesos/11-change-management|Change Management]]"
  - "[[../04-Practicas/11-definition-of-done|Definition of Done]]"
---

## Visión General

Change Failure Rate (CFR) es una de las 4 DORA metrics. Mide el porcentaje de cambios a producción que resultan en un fallo de servicio (degradation, rollback o hotfix). Es el indicador clave de la calidad del proceso de deployment.

## Definición y Medición

### Fórmula

```
CFR = (Cambios que causan fallo / Total cambios) × 100

Ejemplo: 5 fallos en 100 deploys = 5% CFR → ELITE
```

### Qué cuenta como "fallo"

| Evento | Incluir | Ejemplo |
|--------|---------|---------|
| **Rollback inmediato** | Sí | Deploy revertido < 1 hora |
| **Hotfix** | Sí | Fix crítico dentro de 24h |
| **Degradación** | Sí | Alerta de monitoreo activada |
| **Data corruption** | Sí | Pérdida o corrupción de datos |
| **Partial outage** | Sí | Feature unavailable |
| **Performance degradation** | Sí | Latencia > SLA |

### Qué NO contar

| Evento | Razón |
|--------|-------|
| Failed CI build (before deploy) | No llegó a producción |
| Feature flag disable | No es deployment failure |
| Scheduled maintenance | Esperado, no es fallo |
| Third-party outage | Fuera de control |

## Niveles de Desempeño

| Nivel | CFR | Interpretación |
|-------|-----|----------------|
| **Elite** | 0-15% | Muy bajo riesgo por cambio |
| **High** | 16-30% | Riesgo moderado |
| **Medium** | 16-30% | Similar a high (varía por contexto) |
| **Low** | 16-30% | Riesgo inaceptable |

## Segmentación

### Por Tipo de Cambio

```
CFR por tipo:
  Feature deploy:    8%   [████░░░░░░] OK
  Bug fix:           3%   [██░░░░░░░░] Great
  Hotfix:            15%  [██████░░░░] Acceptable
  Config change:     2%   [█░░░░░░░░░] Great
  Infrastructure:    12%  [█████░░░░░] OK
```

### Por Complejidad

| Complejidad | CFR típico | Acción |
|-------------|------------|--------|
| Simple (config) | < 5% | OK |
| Moderate (feature) | 5-15% | Monitorear |
| Complex (arch change) | 15-25% | Extra QA |
| High risk (migration) | 25-40% | War room |

## Estrategias de Reducción

### 1. Testing Automation

```
Before: Manual testing → 25% CFR
After: Automated testing suite → 8% CFR

Investment: 3 months, 2 engineers
Payback: 17% reduction in failures × cost per failure
```

Ver [[05-code-coverage|Code Coverage]] para métricas de testing.

### 2. Progressive Rollout

```
Canary deploy:
  1% traffic → 5% → 25% → 50% → 100%

Si falla en 1%, impacto es mínimo
Reduce CFR significativamente
```

### 3. Automated Rollbacks

```yaml
# ArgoCD rollback config
strategy:
  canary:
    steps:
      - setWeight: 5
      - pause: {duration: 5m}
      - analysis:
          templates:
            - templateName: success-rate
          args:
            - name: service-name
              value: my-service
    rollback:
      enabled: true
      failureThreshold: 3
```

### 4. Quality Gates

| Gate | Qué verifica | Herramienta |
|------|-------------|-------------|
| Unit tests pass | Lógica core | Jest, JUnit |
| Integration tests pass | APIs, DB | Testcontainers |
| Security scan clean | Vulnerabilities | Snyk, Trivy |
| Performance test pass | Latencia, throughput | k6, Gatling |
| Code review approved | Calidad de código | GitHub PRs |

### 5. Feature Flags

```
Deploy con flag OFF → Test in production safely → Enable gradually

Reduce riesgo de cada deployment a casi cero.
```

## Análisis de Causa Raíz

Cuando CFR aumenta, investigar:

| Causa raíz | Señal | Solución |
|------------|-------|----------|
| Tests insuficientes | Bugs que testing debería catch | [[05-code-coverage\|Mejorar coverage]] |
| Merge conflicts | Conflictos no detectados | Más feature flags, trunk-based |
| Config errors | Fallos en deployment | Config as code, validation |
| Infrastructure issues | Infra inconsistente | [[../05-Herramientas/07-iac-terraform\|IaC]] |
| Human error | Deploy manual | Automatizar deploy |
| Missing monitoring | Fallos no detectados | [[../04-Practicas/12-observabilidad-practicas\|Observabilidad]] |

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────────┐
│         CHANGE FAILURE RATE DASHBOARD            │
├──────────────────────────────────────────────────┤
│ Overall CFR:  8.5%  [████░░░░░░] ELITE          │
│ Trend:        ↘ Mejorando (12% → 8.5% en Q)     │
│                                                  │
│ Últimos 30 días:                                 │
│   Total deploys:    126                          │
│   Failures:         11                           │
│   Rollbacks:        7                            │
│   Hotfixes:         4                            │
│                                                  │
│ Por tipo de fallo:                               │
│   Performance:  4  [████████░░]                  │
│   Functional:   3  [██████░░░░]                  │
│   Config:       2  [████░░░░░░]                  │
│   Infra:        2  [████░░░░░░]                  │
│                                                  │
│ Top failure causes:                              │
│   1. Missing test case (36%)                     │
│   2. Config error (27%)                          │
│   3. Race condition (18%)                        │
│   4. Third-party dependency (9%)                 │
└──────────────────────────────────────────────────┘
```

## Conexiones

- [[01-dora-metrics|DORA Metrics]] — CFR es una de las 4 key metrics
- [[11-deployment-frequency|Deployment Frequency]] — Más deploys ≠ más fallos
- [[13-mean-time-recovery|MTTR]] — Qué hacer cuando falla
- [[04-defect-rate|Tasa de Defectos]] — Defectos en producción
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]] — Automatizar para reducir CFR
- [[../03-Procesos/11-change-management|Change Management]]
- [[../04-Practicas/13-feature-flags|Feature Flags]]
