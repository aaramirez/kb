---
title: "GitOps como Práctica"
tags:
  - sf/devops
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "GitOps"
  - "ArgoCD"
  - "Flux"
  - "Git-based Operations"
related:
  - "[[../09-DevOps-Infra/02-continuous-delivery|Continuous Delivery]]"
  - "[[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes]]"
  - "[[../09-DevOps-Infra/03-infrastructure-as-code|Infrastructure as Code]]"
  - "[[../03-Procesos/07-gitflow-alternativas|Git Flow]]"
---

# GitOps como Práctica

GitOps es un modelo operativo donde Git es la fuente única de verdad para la infraestructura y las aplicaciones, declarando el estado deseado del sistema de forma versionada y auditada.

## ¿Qué es GitOps?

> GitOps = IaC + Pull-based + Declarative + Versioned + Automated

```
Traditional CI/CD (Push):        GitOps (Pull):
┌──────────┐                     ┌──────────┐
│   CI     │                     │   Git    │
│ Pipeline │                     │   Repo   │
└────┬─────┘                     └────┬─────┘
     │                                │
     │ push                           │ pull (sync)
     ▼                                ▼
┌──────────┐                     ┌──────────┐
│ Cluster  │                     │  Agent   │
│          │                     │(ArgoCD/  │
│          │                     │ Flux)    │
└──────────┘                     └────┬─────┘
                                      │
                                      ▼
                                 ┌──────────┐
                                 │ Cluster  │
                                 └──────────┘
```

## Los 4 principios de GitOps

| Principio | Descripción |
|-----------|-------------|
| **Declarative** | El estado deseado debe ser declarativo |
| **Versioned** | Todo está en Git, con historial completo |
| **Automated** | Los agents sincronizan automáticamente |
| **Self-healing** | El agent corrige drifts automáticamente |

## GitOps vs Traditional CI/CD

| Aspecto | Traditional CI/CD | GitOps |
|---------|-------------------|--------|
| **Trigger** | Push (pipeline ejecuta) | Pull (agent sincroniza) |
| **Source of truth** | Pipeline config | Git repository |
| **Drift detection** | Manual o no existe | Automático |
| **Rollback** | Re-run pipeline | `git revert` |
| **Audit trail** | Logs de pipeline | Git history |
| **Security** | Pipeline necesita acceso cluster | Agent tiene acceso limitado |
| **Secrets** | En pipeline variables | External secrets, sealed secrets |

```
CI/CD Traditional:
Developer → Push → CI Pipeline → kubectl apply → Cluster

GitOps:
Developer → Push → Git Repo ← Sync ← ArgoCD → Cluster
                                  (self-healing)
```

## ArgoCD

### Arquitectura

```
┌─────────────────────────────────────────────────────┐
│                  ArgoCD                              │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐ │
│  │ API      │  │ Repo     │  │ Application      │ │
│  │ Server   │  │ Server   │  │ Controller       │ │
│  │          │  │          │  │                  │ │
│  │ Web UI   │  │ Git clone│  │ Reconciliation   │ │
│  │ CLI      │  │ Kustomize│  │ Loop             │ │
│  │ gRPC     │  │ Helm     │  │                  │ │
│  └──────────┘  └──────────┘  └──────────────────┘ │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │          Notification Controller             │  │
│  │  Slack, Email, Webhook                       │  │
│  └──────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────┘
        │                    │
        ▼                    ▼
   ┌─────────┐        ┌──────────┐
   │   Git   │        │ Cluster  │
   │  Repo   │        │ (target) │
   └─────────┘        └──────────┘
```

### Application definition

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: myapp-production
  namespace: argocd
spec:
  project: default
  source:
    repoURL: https://github.com/org/k8s-manifests.git
    targetRevision: main
    path: apps/myapp/overlays/production
  destination:
    server: https://kubernetes.default.svc
    namespace: production
  syncPolicy:
    automated:
      prune: true
      selfHeal: true
      allowEmpty: false
    syncOptions:
      - CreateNamespace=true
      - PrunePropagationPolicy=foreground
    retry:
      limit: 5
      backoff:
        duration: 5s
        factor: 2
        maxDuration: 3m
```

### Multi-environment promotion

```
Git Repo Structure:
├── apps/
│   └── myapp/
│       ├── base/
│       │   ├── deployment.yaml
│       │   ├── service.yaml
│       │   └── kustomization.yaml
│       └── overlays/
│           ├── dev/
│           │   ├── kustomization.yaml
│           │   └── replicas-patch.yaml
│           ├── staging/
│           │   ├── kustomization.yaml
│           │   └── replicas-patch.yaml
│           └── production/
│               ├── kustomization.yaml
│               └── replicas-patch.yaml
```

**Promotion flow:**
1. Developer push code
2. CI build & test
3. CI update image tag in `overlays/dev`
4. ArgoCD sync dev automatically
5. After QA approval → PR to staging
6. After staging validation → PR to production

## Flux

### Arquitectura Flux v2

```
┌──────────────────────────────────────────┐
│          Flux GitOps Toolkit             │
│                                          │
│  ┌────────────┐  ┌───────────────────┐  │
│  │ Source     │  │ Kustomize        │  │
│  │ Controller │  │ Controller       │  │
│  │            │  │                  │  │
│  │ Git repos  │  │ Kustomization    │  │
│  │ Helm repos │  │ overlays         │  │
│  │ S3 buckets │  │                  │  │
│  └────────────┘  └───────────────────┘  │
│                                          │
│  ┌────────────┐  ┌───────────────────┐  │
│  │ Helm       │  │ Notification     │  │
│  │ Controller │  │ Controller       │  │
│  │            │  │                  │  │
│  │ HelmRelease│  │ Alerts,Providers │  │
│  │ HelmCharts │  │                  │  │
│  └────────────┘  └───────────────────┘  │
└──────────────────────────────────────────┘
```

### Flux vs ArgoCD

| Aspecto | Flux | ArgoCD |
|---------|------|--------|
| **Architecture** | Toolkit (múltiples controllers) | Monolithic |
| **UI** | Dashboard (weave-gitops) | Rich web UI |
| **Multi-tenancy** | Namespace-based | Project-based |
| **Helm support** | Native HelmRelease | Via chart parameter |
| **Image automation** | Built-in | Via Image Updater |
| **Learning curve** | Moderate | Easier |
| **CNCF Status** | Graduated | Graduated |

## GitOps Maturity Model

```
Level 1: Git as backup
  └── kubectl apply + push to Git

Level 2: Pull-based deployment
  └── Agent syncs from Git (ArgoCD/Flux)

Level 3: Progressive delivery
  └── Canary, blue-green with GitOps

Level 4: Full GitOps
  └── Infrastructure + apps + secrets in Git

Level 5: Self-service platform
  └── Developers create apps via Git PRs
```

## Secrets en GitOps

| Enfoque | Descripción |
|---------|-------------|
| **Sealed Secrets** | Encrypt secrets que solo el cluster puede decrypt |
| **External Secrets** | K8s secrets desde Vault, AWS SM, etc. |
| **SOPS** | Mozilla SOPS con age/KMS encryption |
| **Vault** | HashiCorp Vault con CSI driver |

```yaml
# External Secrets example
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: db-secret
spec:
  refreshInterval: 1h
  secretStoreRef:
    name: aws-secrets-manager
    kind: SecretStore
  target:
    name: db-credentials
  data:
    - secretKey: password
      remoteRef:
        key: prod/myapp/db
        property: password
```

## Mejores prácticas

| Práctica | Descripción |
|----------|-------------|
| **Repo structure** | Base + overlays por ambiente |
| **Branch strategy** | Main branch, promotion via PRs |
| **Automated sync** | Auto-sync en dev/staging, manual en prod |
| **Drift detection** | Self-heal habilitado |
| **Notifications** | Alertas en sync failures |
| **RBAC** | Quién puede deployar a producción |
| **Audit** | Git history como audit trail |

## Relación con otros conceptos

- [[../09-DevOps-Infra/02-continuous-delivery|Continuous Delivery]] — CD push vs GitOps pull
- [[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes]] — Target platform
- [[../09-DevOps-Infra/03-infrastructure-as-code|IaC]] — Infra declarativa en Git
- [[../03-Procesos/07-gitflow-alternativas|Git Flow]] — Estrategia de branching
- [[../08-Calidad-Seguridad/10-supply-chain-security|Supply Chain Security]] — Seguridad en supply chain
- [[../09-DevOps-Infra/12-cost-optimization|Optimización de Costos]] — Visibility en deployments
