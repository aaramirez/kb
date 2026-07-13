---
title: "CI/CD Pipeline"
tags:
  - sf/procesos
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "CI/CD"
  - "Pipeline de Despliegue"
  - "Continuous Integration"
  - "Continuous Delivery"
related:
  - "[[../01-Fundamentos/07-devops-filosofia|DevOps]]"
  - "[[../01-Fundamentos/08-shift-left|Shift-Left]]"
  - "[[../03-Procesos/09-release-management|Release Management]]"
  - "[[../05-Herramientas/README|Herramientas]]"
  - "[[../03-Procesos/06-trunk-based-development|Trunk-Based Dev]]"
---

# CI/CD Pipeline

El **pipeline de CI/CD** es el corazón de la automatización en una Software Factory: integra, testea y despliega código de forma continua y confiable.

## Definiciones

| Término | Significado |
|---------|-------------|
| **CI** (Continuous Integration) | Fusionar código frecuentemente con build y test automáticos |
| **CD** (Continuous Delivery) | CI + preparar código para deploy con un botón |
| **CD** (Continuous Deployment) | Delivery + desplegar automáticamente a producción |

```
Continuous Integration → Continuous Delivery → Continuous Deployment
       Build + Test         + Staging Ready        + Auto Deploy
```

## Etapas del Pipeline

```
┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
│  Source   │ → │  Build   │ → │  Test    │ → │  Stage   │ → │ Production│
│          │   │          │   │          │   │          │   │          │
│  Git     │   │ Compile  │   │ Unit +   │   │ Deploy   │   │ Deploy   │
│  Push    │   │ Package  │   │ Int + E2E│   │ Staging  │   │ Prod     │
└──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘
```

### 1. Source (Código fuente)

- Trigger: push a branch o PR
- Validación de branch naming
- Commit lint (conventional commits)

### 2. Build (Compilación)

| Actividad | Herramienta |
|-----------|-------------|
| Compilación | Maven, Gradle, npm, Go build |
| Empaquetamiento | Docker, JAR, WAR, binary |
| Análisis estático | SonarQube, ESLint, RuboCop |
| Snyk, Trivy | Vulnerability scan |

### 3. Test (Pruebas)

```
         ┌── Unit Tests (rápidos, 5 min)
         │
Test ────┼── Integration Tests (15-30 min)
         │
         ├── E2E Tests (largo, 30-60 min)
         │
         └── Performance / Security (nocturno)
```

| Nivel | Cobertura objetivo | Tiempo |
|-------|--------------------|--------|
| **Unit** | > 80% | < 5 min |
| **Integration** | > 60% | < 30 min |
| **E2E** | Flujos críticos | < 60 min |
| **Performance** | Benchmarks | Nocturno |

### 4. Stage (Staging)

- Deploy a ambiente similar a producción
- Smoke tests automáticos
- Validación manual opcional
- Performance testing

### 5. Production

- Deploy automatizado o con approval
- Health checks post-deploy
- Rollback automático si falla
- Monitoring y alertas activos

## Estrategias de Deployment

### Blue-Green Deployment

```
┌─────────────┐     ┌─────────────┐
│   Blue      │     │   Green     │
│ (Producción)│ ←→  │ (Staging)   │
│  v1.2       │     │  v1.3       │
└─────────────┘     └─────────────┘
        │                    │
        └─── Load Balancer ──┘
```

- Dos ambientes idénticos
- Swap instantáneo entre versiones
- Rollback = volver al anterior

### Canary Deployment

```
Users ──→ 95% ──→ v1.2 (estable)
       └── 5% ──→ v1.3 (nueva)
```

- Liberar a un % pequeño de usuarios
- Monitorear métricas clave
- Escalar gradualmente o revertir

### Rolling Update

```
Step 1: [v1.2] [v1.2] [v1.2] [v1.2]
Step 2: [v1.3] [v1.2] [v1.2] [v1.2]
Step 3: [v1.3] [v1.3] [v1.2] [v1.2]
Step 4: [v1.3] [v1.3] [v1.3] [v1.2]
Step 5: [v1.3] [v1.3] [v1.3] [v1.3]
```

- Actualizar instancias una por una
- Sin downtime
- Rollback gradual

### Feature Flags

```javascript
if (featureFlags.isEnabled('new-checkout')) {
  showNewCheckout();
} else {
  showLegacyCheckout();
}
```

- Deploy código sin activar features
- Activar/desactivar por usuario, region, %
- Eliminar flags tras validación

## Herramientas CI/CD

| Categoría | Herramientas |
|-----------|-------------|
| **CI/CD Servers** | Jenkins, GitHub Actions, GitLab CI, CircleCI |
| **Cloud Native** | AWS CodePipeline, Azure DevOps, GCP Cloud Build |
| **Containers** | Docker, Kubernetes, Helm |
| **IaC** | Terraform, Ansible, Pulumi |
| **Artifact Registry** | Nexus, JFrog, Docker Hub, ECR |
| **Secrets** | Vault, AWS Secrets Manager, SOPS |

Ver más en [[../05-Herramientas/README|Herramientas]].

## Mejores prácticas

1. **Pipeline como código** — versionar el pipeline (Jenkinsfile, .gitlab-ci.yml)
2. **Build reproducible** — mismo input = mismo output siempre
3. **Fast feedback** — build < 10 min, tests < 30 min
4. **No flaky tests** — tests inestables se arreglan o eliminan
5. **Rollback automático** — si health check falla, revertir
6. **Secrets nunca en código** — usar vaults y masked variables
7. **Artifact inmutable** — un build, un artifact, deploy el mismo artifact

## Métricas de CI/CD

| Métrica | Objetivo |
|---------|----------|
| **Build Time** | < 10 minutos |
| **Lead Time** | < 1 hora (commit → deploy) |
| **Deployment Frequency** | Diaria o más |
| **Change Failure Rate** | < 5% |
| **MTTR** | < 1 hora |

Ver más en [[../06-Metricas/README|Métricas de Flujo]].

## Relación con otros conceptos

- [[../01-Fundamentos/07-devops-filosofia|DevOps]] se materializa en el CI/CD pipeline
- [[../01-Fundamentos/08-shift-left|Shift-Left]] incluye testing y seguridad en el pipeline
- [[../03-Procesos/06-trunk-based-development|Trunk-Based Dev]] es la estrategia de branching ideal para CI/CD
- [[../03-Procesos/09-release-management|Release Management]] define cuándo y cómo deployar
- [[../04-Practicas/README|Prácticas]] complementan con engineering excellence
