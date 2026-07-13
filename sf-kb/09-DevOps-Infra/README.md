---
title: "09 — DevOps e Infraestructura"
tags:
  - sf/devops
  - type/index
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "DevOps Infra"
  - "Infraestructura"
---

# DevOps e Infraestructura

Prácticas, herramientas y arquitecturas para entregar software de forma continua, escalable y resiliente. Desde los fundamentos de DevOps hasta la optimización de costos en cloud.

## Contenido

| # | Archivo | Tema | Nivel |
|---|---------|------|-------|
| 01 | [[../09-DevOps-Infra/01-devops-ciclo|El Ciclo de DevOps]] | Infinite loop, CALMS, cultura DevOps | Principiante |
| 02 | [[../09-DevOps-Infra/02-continuous-delivery|Continuous Delivery]] | Principios, deployment pipeline, Jez Humble | Intermedio |
| 03 | [[../09-DevOps-Infra/03-infrastructure-as-code|Infrastructure as Code]] | Terraform, Pulumi, Ansible, state management | Intermedio |
| 04 | [[../09-DevOps-Infra/04-containers-docker|Containers y Docker]] | Dockerfile, compose, networking, volumes | Principiante |
| 05 | [[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes y Orquestación]] | Pods, services, deployments, Helm, operators | Avanzado |
| 06 | [[../09-DevOps-Infra/06-service-mesh|Service Mesh]] | Istio, Linkerd, sidecar pattern, mTLS | Avanzado |
| 07 | [[../09-DevOps-Infra/07-gitops|GitOps]] | Principios, ArgoCD, Flux, GitOps vs CI/CD | Intermedio |
| 08 | [[../09-DevOps-Infra/08-site-reliability|Site Reliability Engineering]] | SLIs/SLOs, Error Budgets, toil reduction | Avanzado |
| 09 | [[../09-DevOps-Infra/09-incident-response|Incident Response]] | Severity, on-call, runbooks, post-mortems | Intermedio |
| 10 | [[../09-DevOps-Infra/10-cloud-native|Cloud Native Architecture]] | 12-factor app, CNCF, microservices, observability | Intermedio |
| 11 | [[../09-DevOps-Infra/11-serverless-edge|Serverless y Edge Computing]] | Lambda, Cloudflare Workers, use cases | Intermedio |
| 12 | [[../09-DevOps-Infra/12-cost-optimization|Optimización de Costos]] | FinOps, rightsizing, reserved instances, spot | Intermedio |

## Mapa conceptual

```
                    ┌─────────────────────┐
                    │   DevOps Culture     │
                    │   (CALMS, 01)       │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
     ┌────────▼───────┐ ┌─────▼──────┐ ┌───────▼────────┐
     │ Continuous      │ │   IaC      │ │   Containers   │
     │ Delivery (02)   │ │   (03)     │ │   Docker (04)  │
     └────────┬────────┘ └─────┬──────┘ └───────┬────────┘
              │                │                │
              └────────────────┼────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │    Kubernetes (05)   │
                    └──────────┬──────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
┌───────▼──────┐  ┌────────────▼───────────┐  ┌───────▼──────┐
│ Service Mesh │  │      GitOps (07)       │  │  Cloud Native│
│    (06)      │  │                        │  │    (10)      │
└───────┬──────┘  └────────────┬───────────┘  └───────┬──────┘
        │                      │                      │
        └──────────────────────┼──────────────────────┘
                               │
           ┌───────────────────┼───────────────────┐
           │                   │                   │
    ┌──────▼──────┐  ┌────────▼────────┐  ┌───────▼──────┐
    │     SRE     │  │ Incident Resp.  │  │    Serverless │
    │    (08)     │  │      (09)       │  │   Edge (11)  │
    └─────────────┘  └─────────────────┘  └──────────────┘
                               │
                    ┌──────────▼──────────┐
                    │  Cost Optimization  │
                    │       (12)          │
                    └─────────────────────┘
```

## Secciones relacionadas

- [[../01-Fundamentos/README|01 — Fundamentos]] — Filosofía DevOps, shift-left, lean
- [[../03-Procesos/README|03 — Procesos]] — CI/CD pipeline, trunk-based development
- [[../05-Herramientas/README|05 — Herramientas]] — Terraform, containers, monitoring
- [[../06-Metricas/README|06 — Métricas]] — DORA metrics, MTTR, deployment frequency
- [[../08-Calidad-Seguridad/README|08 — Calidad y Seguridad]] — DevSecOps, quality gates
