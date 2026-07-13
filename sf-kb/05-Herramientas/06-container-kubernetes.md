---
title: "Containers y Kubernetes"
tags:
  - sf/herramientas
  - type/herramienta
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Herramientas y Tecnología"
aliases:
  - "Docker"
  - "Kubernetes"
  - "K8s"
  - "Container Orchestration"
related:
  - "[[07-iac-terraform]]"
  - "[[08-plataformas-cloud]]"
  - "[[05-herramientas-monitoring]]"
---

## Visión General

Containers y orquestación son la base de la infraestructura moderna. Kubernetes se ha consolidado como el standard de facto para orquestación, mientras Docker remains el estándar de empaquetado.

## Docker

### Conceptos Fundamentales

| Concepto | Descripción |
|----------|-------------|
| **Image** | Blueprint inmutable de la aplicación |
| **Container** | Instancia ejecutable de una image |
| **Dockerfile** | Script de construcción de images |
| **Volume** | Persistencia de datos fuera del container |
| **Network** | Comunicación entre containers |
| **Registry** | Almacén de images (Docker Hub, ECR, GCR) |

### Dockerfile Best Practices

```dockerfile
# Multi-stage build para reducir tamaño
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
USER node
CMD ["node", "dist/main.js"]
```

**Reglas clave**:
- Usar multi-stage builds
- Minimizar capas (COPY dependencies antes de código)
- No correr como root
- Usar .dockerignore
- Pinned versions en base images

### Docker Compose

| Uso | Descripción |
|-----|-------------|
| Local dev | Multi-service environments |
| Testing | Integration test environments |
| Demo | Quick-start setups |

## Kubernetes (K8s)

### Arquitectura

```
┌─────────────────────────────────────────────┐
│              Control Plane                  │
│  API Server | Scheduler | Controller Mgr   │
│  etcd (state store)                         │
└─────────────────────────────────────────────┘
          │
┌─────────┴───────────────────────────────────┐
│              Worker Nodes                   │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│  │  Pod    │  │  Pod    │  │  Pod    │     │
│  │┌──────┐ │  │┌──────┐ │  │┌──────┐ │     │
│  ││  C   │ │  ││  C   │ │  ││  C   │ │     │
│  │└──────┘ │  │└──────┘ │  │└──────┘ │     │
│  │┌──────┐ │  │┌──────┐ │  │         │     │
│  ││  C   │ │  ││  C   │ │  │         │     │
│  │└──────┘ │  │└──────┘ │  │         │     │
│  └─────────┘  └─────────┘  └─────────┘     │
│  kubelet | kube-proxy | Container Runtime   │
└─────────────────────────────────────────────┘
```

### Core Resources

| Resource | Descripción | Use |
|----------|-------------|-----|
| **Pod** | Unidad mínima, 1+ containers | Deploy unit |
| **Deployment** | Replica management, rolling updates | Stateless apps |
| **StatefulSet** | Ordered deployment, stable identity | Databases, queues |
| **Service** | Internal load balancing, stable IP | Service discovery |
| **Ingress** | HTTP routing, TLS termination | External access |
| **ConfigMap** | Non-sensitive configuration | App config |
| **Secret** | Sensitive data (base64) | Credentials, keys |
| **PersistentVolume** | Storage abstraction | Stateful data |
| **Namespace** | Logical isolation | Multi-tenancy |

### Networking

| Service Type | Exposición | Use Case |
|-------------|-----------|----------|
| ClusterIP | Interno only | Default, inter-service |
| NodePort | Static port en node | Dev/testing |
| LoadBalancer | Cloud LB | External production |
| ExternalName | DNS CNAME | External service reference |

### Scheduling

| Feature | Descripción |
|---------|-------------|
| **nodeSelector** | Simple label matching |
| **Affinity/Anti-affinity** | Complex placement rules |
| **Taints/Tolerations** | Pod eviction rules |
| **Resource requests/limits** | CPU/memory guarantees |
| **Pod Disruption Budget** | Min available during disruptions |

## Helm

| Aspecto | Detalle |
|---------|---------|
| **Qué es** | Package manager for Kubernetes |
| **Charts** | Templates + values + metadata |
| **Release** | Deployed instance of a chart |
| **Repository** | Helm chart registry |

```yaml
# values.yaml
replicaCount: 3
image:
  repository: myapp
  tag: "1.2.0"
resources:
  requests:
    cpu: 250m
    memory: 256Mi
  limits:
    cpu: 500m
    memory: 512Mi
ingress:
  enabled: true
  hosts:
    - host: myapp.example.com
```

## Kustomize

| Aspecto | Detalle |
|---------|---------|
| **Qué es** | Patching sin templates |
| **Base** | Common YAML files |
| **Overlays** | Environment-specific patches |
| **Built-in** | `kubectl apply -k` |

**Kustomize vs Helm**:

| Factor | Helm | Kustomize |
|--------|------|-----------|
| Templates | Go templates | JSON patches |
| Packaging | Charts | Directory structure |
| Learning curve | Media | Baja |
| Flexibility | ✅✅ | ✅ |
| Ecosystem | ✅✅ | ✅ |
| State management | Releases | In-place |

## Operators

| Aspecto | Detalle |
|---------|---------|
| **Qué es** | Custom controllers con domain knowledge |
| **Pattern** | Reconciliation loop |
| **Use cases** | Databases, message queues, cert management |
| **Framework** | Operator SDK, Kubebuilder |

**Ejemplos populares**:
- Prometheus Operator (kube-prometheus-stack)
- PostgreSQL Operator (CloudNativePG)
- Cert-Manager
- Strimzi (Kafka)

## Security

| Concernión | Herramienta |
|------------|-------------|
| **Policy enforcement** | OPA Gatekeeper, Kyverno |
| **Image scanning** | Trivy, Snyk, Grype |
| **Runtime security** | Falco, Tetragon |
| **Secret management** | Vault, SOPS, Sealed Secrets |
| **Network policies** | Calico, Cilium |
| **RBAC** | Kubernetes native |

## Managed Kubernetes

| Provider | Service | Control Plane Cost |
|----------|---------|--------------------|
| AWS | EKS | $0.10/hr |
| Azure | AKS | Free (control plane) |
| GCP | GKE | Free standard tier |
| DigitalOcean | DOKS | $12/mo |
| Linode | LKE | Free |

Referencia: [[08-plataformas-cloud|Plataformas Cloud]]

## Local Development

| Herramienta | Plataforma | Speed |
|-------------|-----------|-------|
| **minikube** | Any | Medio |
| **kind** | Docker | ✅✅ Rápido |
| **k3d** | Docker | ✅✅ Rápido |
| **Docker Desktop** | Mac/Win | ✅ |
| **Tilt** | Dev tooling | ✅✅ Hot reload |
| **Skaffold** | Dev tooling | ✅✅ |
| **Telepresence** | Proxy local↔cluster | ✅✅ |

## Monitoring Kubernetes

- Instalar kube-prometheus-stack (Prometheus Operator)
- Dashboard: Grafana kubernetes dashboards
- Metrics Server para HPA
- Referencia: [[05-herramientas-monitoring|Monitoring stack]]

## Decision Framework

```
¿Empiezas desde cero?        → Managed K8s (EKS/GKE/AKS)
¿Local dev?                  → kind o k3d
¿Simple deployments?         → Helm charts
¿Custom patching?            → Kustomize
¿Stateful workloads?         → Operators
¿Policy enforcement?         → OPA Gatekeeper
```

## Integración

- **IaC**: [[07-iac-terraform]] — Provisionar clusters
- **Cloud**: [[08-plataformas-cloud]] — Managed Kubernetes
- **CI/CD**: [[02-herramientas-ci-cd]] — Deploy to K8s
- **Monitoring**: [[05-herramientas-monitoring]] — Observability stack
- **Testing**: [[04-herramientas-testing]] — Integration environments
