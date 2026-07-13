---
title: "Continuous Delivery"
tags:
  - sf/devops
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "CD"
  - "Continuous Deployment"
  - "Delivery Pipeline"
  - "Jez Humble"
related:
  - "[[../09-DevOps-Infra/01-devops-ciclo|El Ciclo de DevOps]]"
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]"
  - "[[../09-DevOps-Infra/07-gitops|GitOps]]"
  - "[[../06-Metricas/11-deployment-frequency|Deployment Frequency]]"
  - "[[../09-DevOps-Infra/08-site-reliability|SRE]]"
---

# Continuous Delivery

Continuous Delivery (CD) es la capacidad de entregar cambios de software de forma frecuente, segura y sostenible a producción. Basado en los principios de Jez Humble y David Farley.

## Principios fundamentales

> "Continuous Delivery is the ability to get changes of all types — including new features, configuration changes, bug fixes and experiments — into production or into the hands of users safely and quickly in a sustainable way."
> — Jez Humble

### Los 10 principios de CD

1. **Repeatable and reliable process**: el proceso de deploy debe ser automatizado y repetible
2. **Automatizar casi todo**: build, test, deploy, infrastructure
3. **Keep everything in version control**: código, configs, scripts, infrastructure
4. **Done means deployed**: done implica en producción
5. **Test, test, test**: test pyramid, contract testing
6. **Deploy often**: frecuencia reduce riesgo
7. **Build quality in**: quality gates, no gates manuales
8. **Everyone can see**: transparencia en el pipeline
9. **Improve regularly**: retrospectives, métricas

## Deployment Pipeline

```
┌──────────┐   ┌──────────┐   ┌───────────┐   ┌──────────┐   ┌──────────┐
│  Commit  │──►│  Build   │──►│  Test     │──►│ Staging  │──►│Production│
│          │   │          │   │           │   │          │   │          │
│  Git     │   │ Maven    │   │ Unit      │   │ Deploy   │   │ Deploy   │
│  Push    │   │ npm      │   │ Integ.    │   │ Test     │   │ Blue-    │
│          │   │ Gradle   │   │ E2E       │   │ Perf     │   │ Green    │
└──────────┘   └──────────┘   └───────────┘   └──────────┘   └──────────┘
     │              │              │               │               │
     ▼              ▼              ▼               ▼               ▼
  Webhook       Artifact       Test Report     Smoke Tests    Canary
  Triggered     Published      Generated       Pass/Fail      Release
```

### Fases del pipeline

| Fase | Qué ejecuta | Criterio de calidad |
|------|------------|---------------------|
| **Commit** | Build, unit tests, lint | 0 errores, tests pasan |
| **Artifact** | Package, docker build | Artifact publicado |
| **Integration** | API tests, contract tests | Contratos válidos |
| **E2E** | UI tests, smoke tests | Flujos críticos OK |
| **Staging** | Deploy a environment igual a prod | Deploy exitoso |
| **Performance** | Load tests, stress tests | SLAs de performance |
| **Production** | Blue-green o canary deploy | Health checks OK |

### Quality Gates

```yaml
# Ejemplo de quality gates en pipeline
stages:
  - build:
      gate:
        min_coverage: 80
        max_vulnerabilities: 0
        lint_errors: 0

  - integration:
      gate:
        all_tests_pass: true
        contract_compatibility: true

  - staging:
      gate:
        smoke_tests: pass
        performance_regression: "< 10%"

  - production:
      gate:
        canary_error_rate: "< 1%"
        canary_latency_p99: "< 500ms"
```

## Estrategias de deployment

### Blue-Green Deployment

```
              Load Balancer
                    │
        ┌───────────┼───────────┐
        │           │           │
    ┌───▼───┐   ┌───▼───┐
    │ Blue  │   │ Green │
    │(current)  │(new)  │
    │  v1.0 │   │  v2.0 │
    └───┬───┘   └───┬───┘
        │           │
    ┌───▼───┐   ┌───▼───┐
    │ DB    │   │ DB    │
    │(shared)   │(copy) │
    └───────┘   └───────┘

Steps:
1. Deploy v2.0 to Green
2. Run tests on Green
3. Switch LB to Green
4. Keep Blue as rollback
```

**Ventajas**: rollback instantáneo, zero downtime
**Desventajas**: duplica infraestructura, migration de DB compleja

### Canary Release

```
      Load Balancer
            │
    ┌───────┴───────┐
    │               │
90% │           10% │
    │               │
┌───▼───┐       ┌───▼───┐
│ v1.0  │       │ v2.0  │
│(stable│       │(canary│
└───────┘       └───────┘

Steps:
1. Deploy v2.0 a 10% del tráfico
2. Monitor error rate, latency
3. Si OK, incrementar gradualmente
4. Si error, rollback automático
5. 100% → v2.0 es el nuevo stable
```

**Ventajas**: riesgo reducido, feedback real
**Desventajas**: complejo de implementar, necesita feature flags

### Rolling Update (Kubernetes)

```yaml
apiVersion: apps/v1
kind: Deployment
spec:
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxUnavailable: 1    # Máximo 1 pod no disponible
      maxSurge: 1           # Máximo 1 pod extra
  template:
    spec:
      containers:
        - name: app
          image: myapp:v2.0
          readinessProbe:
            httpGet:
              path: /health
              port: 8080
            initialDelaySeconds: 5
            periodSeconds: 5
```

## Continuous Delivery vs Continuous Deployment

| Aspecto | Continuous Delivery | Continuous Deployment |
|---------|--------------------|-----------------------|
| **Deploy a prod** | Automatizado pero manual trigger | Automático en cada commit |
| **Aprobación** | Manual gate antes de prod | Automática con quality gates |
| **Frecuencia** | Cuando se decida | En cada cambio aprobado |
| **Riesgo** | Bajo (tested) | Muy bajo (small batches) |
| **Requisito** | Pipeline completo | Pipeline + testing completo |

```
Continuous Integration → Continuous Delivery → Continuous Deployment
        │                       │                        │
   Build + Test          + Deploy to Staging      + Deploy to Prod
                                        (manual)        (automatic)
```

## Feature Flags

```javascript
// Feature flag para deployment seguro
const config = {
  newCheckout: {
    enabled: true,
    percentage: 25,
    whitelist: ['beta-users@company.com']
  }
};

function checkout(user) {
  if (config.newCheckout.enabled) {
    if (isInRolloutGroup(user, config.newCheckout)) {
      return newCheckoutFlow(user);
    }
  }
  return legacyCheckout(user);
}
```

| Tipo | Uso |
|------|-----|
| **Release** | Rollout gradual de features |
| **Experiment** | A/B testing |
| **Ops** | Kill switches, circuit breakers |
| **Permission** | Feature gating por plan |

## Métricas de CD

Relacionado con [[../06-Metricas/01-dora-metrics|DORA Metrics]]:

| Métrica | Objetivo CD |
|---------|-------------|
| **Lead Time for Changes** | < 1 hora |
| **Deployment Frequency** | Múltiples veces al día |
| **Change Failure Rate** | < 5% |
| **MTTR** | < 1 hora |
| **Pipeline Duration** | < 30 minutos |
| **Time to Restore** | < 15 minutos |

## Herramientas de CD

| Categoría | Herramientas |
|-----------|-------------|
| **CI/CD Platform** | Jenkins, GitHub Actions, GitLab CI, CircleCI |
| **GitOps** | ArgoCD, Flux (ver [[../09-DevOps-Infra/07-gitops|GitOps]]) |
| **Deploy** | Spinnaker, Harness, Octopus Deploy |
| **Feature Flags** | LaunchDarkly, Unleash, Flagsmith |
| **Artifact** | Nexus, Artifactory, GitHub Packages |

## Anti-patrones

| Anti-patrón | Problema | Solución |
|-------------|----------|----------|
| **Deploy by hand** | Deploy manual cada vez | Automatizar pipeline |
| **Long-lived branches** | Branches que viven semanas | Trunk-based development |
| **Flaky tests** | Tests que fallan intermitentemente | Fix o quarantinar |
| **Big-bang release** | Months of work, one release | Small, frequent releases |
| **No rollback plan** | Deploy sin plan de reversión | Blue-green, canary |

## Relación con otros conceptos

- [[../09-DevOps-Infra/01-devops-ciclo|El Ciclo de DevOps]] — Framework CALMS
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]] — Implementación técnica
- [[../03-Procesos/06-trunk-based-development|Trunk-Based Development]] — Branching strategy para CD
- [[../09-DevOps-Infra/07-gitops|GitOps]] — CD declarativo basado en Git
- [[../08-Calidad-Seguridad/11-quality-gates|Quality Gates]] — Criterios de calidad
- [[../09-DevOps-Infra/08-site-reliability|SRE]] — Deployment con error budgets
- [[../06-Metricas/11-deployment-frequency|Deployment Frequency]] — Métrica clave
