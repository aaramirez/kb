---
title: "Cloud Native Architecture"
tags:
  - sf/devops
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "Cloud Native"
  - "12-Factor App"
  - "CNCF"
  - "Microservices Architecture"
related:
  - "[[../09-DevOps-Infra/04-containers-docker|Containers y Docker]]"
  - "[[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes]]"
  - "[[../09-DevOps-Infra/06-service-mesh|Service Mesh]]"
  - "[[../01-Fundamentos/12-monolito-microservicios|Microservicios]]"
  - "[[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]"
---

# Cloud Native Architecture

Cloud Native es un enfoque para construir y ejecutar aplicaciones que aprovechan completamente las ventajas del modelo de computing en la nube.

## ¿Qué es Cloud Native?

> "Cloud native technologies empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds."
> — CNCF

```
┌─────────────────────────────────────────────────────┐
│              Cloud Native Stack                     │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │         Application Layer                   │   │
│  │  Microservices │ Serverless │ Event-Driven   │   │
│  └─────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────┐   │
│  │         Orchestration Layer                 │   │
│  │  Kubernetes │ Service Mesh │ Operators       │   │
│  └─────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────┐   │
│  │         Runtime Layer                       │   │
│  │  Containers │ OCI │ Containerd │ CRI-O       │   │
│  └─────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────┐   │
│  │         Provisioning Layer                  │   │
│  │  Terraform │ Ansible │ Pulumi                │   │
│  └─────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────┐   │
│  │         Infrastructure Layer                │   │
│  │  AWS │ GCP │ Azure │ Hybrid                 │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

## Las 4 Columnas de Cloud Native

| Columna | Descripción | Herramientas |
|---------|-------------|-------------|
| **Containers** | Packaging y runtime | Docker, containerd, Podman |
| **Microservices** | Arquitectura distribuida | REST, gRPC, Events |
| **Service Mesh** | Networking entre servicios | Istio, Linkerd, Consul |
| **Declarative APIs** | Configuración como código | Kubernetes, Terraform |

## The Twelve-Factor App

| # | Factor | Descripción |
|---|--------|-------------|
| 1 | **Codebase** | One codebase in version control, many deploys |
| 2 | **Dependencies** | Explicitly declare and isolate dependencies |
| 3 | **Config** | Store config in the environment |
| 4 | **Backing services** | Treat backing services as attached resources |
| 5 | **Build, release, run** | Strictly separate build and run stages |
| 6 | **Processes** | Execute the app as one or more stateless processes |
| 7 | **Port binding** | Export services via port binding |
| 8 | **Concurrency** | Scale out via the process model |
| 9 | **Disposability** | Maximize robustness with fast startup and graceful shutdown |
| 10 | **Dev/prod parity** | Keep development, staging, and production as similar as possible |
| 11 | **Logs** | Treat logs as event streams |
| 12 | **Admin processes** | Run admin/management tasks as one-off processes |

### Implementación práctica

```yaml
# Factor 3: Config in environment
apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
        - name: app
          env:
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: db-secret
                  key: url
            - name: LOG_LEVEL
              valueFrom:
                configMapKeyRef:
                  name: app-config
                  key: log_level

# Factor 7: Port binding
          ports:
            - containerPort: 8080

# Factor 6: Stateless processes
          env:
            - name: SESSION_STORE
              value: "redis://redis:6379"
```

## CNCF Landscape

```
┌─────────────────────────────────────────────────────┐
│                  CNCF Projects                      │
│                                                     │
│  Graduated:                                         │
│  ├── Kubernetes    (Orchestration)                  │
│  ├── Prometheus    (Monitoring)                     │
│  ├── Envoy         (Service Proxy)                  │
│  ├── CoreDNS       (DNS)                            │
│  ├── containerd   (Container Runtime)              │
│  ├── etcd          (Key-value Store)                │
│  ├── Jaeger        (Distributed Tracing)            │
│  ├── Helm          (Package Manager)                │
│  ├── ArgoCD        (GitOps)                         │
│  ├── Falco         (Runtime Security)               │
│  └── Flux          (GitOps)                         │
│                                                     │
│  Incubating:                                        │
│  ├── Istio         (Service Mesh)                   │
│  ├── Linkerd       (Service Mesh)                   │
│  ├── OPA           (Policy Engine)                  │
│  ├── CRI-O         (Container Runtime)              │
│  └── TiKV          (Distributed DB)                 │
└─────────────────────────────────────────────────────┘
```

## Observability

### Las 3 pilas de observabilidad

```
┌──────────────────────────────────────────────┐
│              Observability                    │
│                                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐    │
│  │ Metrics  │ │ Tracing  │ │ Logging  │    │
│  │          │ │          │ │          │    │
│  │Prometheus│ │  Jaeger  │ │  ELK     │    │
│  │ Datadog  │ │ Zipkin   │ │ Loki     │    │
│  │ Grafana  │ │ Tempo    │ │ Fluentd  │    │
│  └──────────┘ └──────────┘ └──────────┘    │
│       │             │             │          │
│       └─────────────┼─────────────┘          │
│                     │                        │
│              ┌──────▼──────┐                │
│              │  Dashboard  │                │
│              │  (Grafana)  │                │
│              └─────────────┘                │
└──────────────────────────────────────────────┘
```

### OpenTelemetry

```javascript
// OpenTelemetry instrumentation
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');

const provider = new NodeTracerProvider();
const jaegerExporter = new JaegerExporter({
  serviceName: 'my-service',
});
const prometheusExporter = new PrometheusExporter({ port: 9464 });

provider.addSpanProcessor(new BatchSpanProcessor(jaegerExporter));
provider.register();
```

## Resilience Patterns

| Pattern | Descripción |
|---------|-------------|
| **Circuit Breaker** | Stop calling failing service |
| **Retry** | Retry with exponential backoff |
| **Timeout** | Don't wait forever |
| **Bulkhead** | Isolate failures |
| **Rate Limiting** | Protect from overload |
| **Fallback** | Graceful degradation |

```
Circuit Breaker States:

CLOSED ───(failures>threshold)───► OPEN
  ▲                                   │
  │                              (timeout)
  │                                   │
  └──(success)─── HALF-OPEN ◄────────┘
```

## Cloud Native vs Traditional

| Aspecto | Traditional | Cloud Native |
|---------|-------------|--------------|
| **Architecture** | Monolithic | Microservices |
| **Deployment** | VMs, manual | Containers, automated |
| **Scaling** | Vertical | Horizontal |
| **State** | Stateful | Stateless |
| **Failure** | Prevent all | Embrace failure |
| **Release** | Months | Hours/minutes |
| **Infrastructure** | Pets | Cattle |

## Relación con otros conceptos

- [[../09-DevOps-Infra/04-containers-docker|Containers]] — Building blocks
- [[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes]] — Orchestration platform
- [[../09-DevOps-Infra/06-service-mesh|Service Mesh]] — Networking layer
- [[../01-Fundamentos/12-monolito-microservicios|Microservicios]] — Architecture pattern
- [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]] — Design principles
- [[../09-DevOps-Infra/07-gitops|GitOps]] — Deployment strategy
- [[../09-DevOps-Infra/11-serverless-edge|Serverless]] — Next evolution
