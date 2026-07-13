---
title: "Service Mesh"
tags:
  - sf/devops
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "Service Mesh"
  - "Istio"
  - "Linkerd"
  - "Sidecar Pattern"
related:
  - "[[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes]]"
  - "[[../09-DevOps-Infra/10-cloud-native|Cloud Native]]"
  - "[[../01-Fundamentos/12-monolito-microservicios|Microservicios]]"
  - "[[../09-DevOps-Infra/08-site-reliability|SRE]]"
---

# Service Mesh

Service Mesh es una infraestructura de red dedicada para gestionar la comunicación entre microservicios, proporcionando seguridad, observabilidad y control de tráfico de forma transparente.

## ¿Qué es un Service Mesh?

```
Without Service Mesh:              With Service Mesh:
┌──────────┐  ┌──────────┐       ┌──────────┐  ┌──────────┐
│ Service A│  │ Service B│       │ Service A│  │ Service B│
│          │  │          │       │  ┌────┐  │  │  ┌────┐  │
└────┬─────┘  └────┬─────┘       │  │side│  │  │  │side│  │
     │             │             │  │car │  │  │  │car │  │
     └──────┬──────┘             │  └──┬─┘  │  │  └──┬─┘  │
            │                    └─────┼────┘  └─────┼────┘
     ┌──────▼──────┐                  │              │
     │  Direct     │           ┌──────▼──────────────▼──────┐
     │  Connection │           │       Service Mesh         │
     │             │           │  ┌──────────────────────┐  │
     └─────────────┘           │  │ mTLS │ Observability │  │
                               │  │ Traffic Mgmt │ Pol. │  │
                               │  └──────────────────────┘  │
                               └────────────────────────────┘
```

### Capas del Service Mesh

| Capa | Función | Ejemplo |
|------|---------|---------|
| **Data Plane** | Proxies que interceptan tráfico | Envoy, linkerd2-proxy |
| **Control Plane** | Configura los proxies | Istiod, Linkerd control plane |
| **Observability** | Métricas, tracing, logging | Jaeger, Prometheus, Kiali |
| **Security** | mTLS, authN/authZ | Cert-manager, OPA |
| **Traffic Management** | Routing, load balancing, retries | VirtualService, Gateway |

## Patrón Sidecar

```
┌─────────────────────────────────────────────┐
│                  Pod                         │
│  ┌──────────────┐  ┌──────────────────┐    │
│  │              │  │                  │    │
│  │  App         │  │  Envoy Proxy     │    │
│  │  Container   │◄►│  (Sidecar)       │    │
│  │              │  │                  │    │
│  │  Port: 8080  │  │  Port: 15001    │    │
│  └──────────────┘  └──────────────────┘    │
│         │                    │              │
│         └────────┬───────────┘              │
│                  │ iptables                 │
│                  ▼                          │
│         All traffic goes through            │
│         the sidecar proxy                   │
└─────────────────────────────────────────────┘
```

**Ventajas del sidecar pattern:**
- **Transparencia**: la app no necesita cambiar
- **Lenguaje agnostic**: funciona con cualquier stack
- **Separation of concerns**: networking separado de lógica de negocio
- **Upgrade independiente**: actualizar proxy sin redeploy app

## Istio

### Arquitectura

```
┌─────────────────────────────────────────────────────┐
│                  Istio Control Plane                │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────┐ │
│  │  istiod  │  │ Citadel  │  │ Galley           │ │
│  │          │  │ (certs)  │  │ (config validation)│ │
│  └──────────┘  └──────────┘  └──────────────────┘ │
└──────────────────────────┬──────────────────────────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────▼────┐       ┌────▼────┐       ┌────▼────┐
   │  Pod A  │       │  Pod B  │       │  Pod C  │
   │ ┌─────┐ │       │ ┌─────┐ │       │ ┌─────┐ │
   │ │Envoy│ │       │ │Envoy│ │       │ │Envoy│ │
   │ └─────┘ │       │ └─────┘ │       │ └─────┘ │
   └─────────┘       └─────────┘       └─────────┘
```

### Traffic Management

```yaml
# VirtualService - Routing rules
apiVersion: networking.istio.io/v1beta1
kind: VirtualService
metadata:
  name: myapp-vs
spec:
  hosts:
    - myapp
  http:
    - match:
        - headers:
            x-version:
              exact: "v2"
      route:
        - destination:
            host: myapp
            subset: v2
    - route:
        - destination:
            host: myapp
            subset: v1
          weight: 90
        - destination:
            host: myapp
            subset: v2
          weight: 10

---
# DestinationRule - Load balancing, circuit breaking
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: myapp-dr
spec:
  host: myapp
  trafficPolicy:
    connectionPool:
      tcp:
        maxConnections: 100
      http:
        h2UpgradePolicy: DEFAULT
        http1MaxPendingRequests: 100
        http2MaxRequests: 1000
    outlierDetection:
      consecutive5xxErrors: 5
      interval: 30s
      baseEjectionTime: 3m
  subsets:
    - name: v1
      labels:
        version: v1
    - name: v2
      labels:
        version: v2
```

### Security (mTLS)

```yaml
# PeerAuthentication - Enforce mTLS
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: production
spec:
  mtls:
    mode: STRICT

---
# AuthorizationPolicy - Access control
apiVersion: security.istio.io/v1beta1
kind: AuthorizationPolicy
metadata:
  name: myapp-policy
  namespace: production
spec:
  selector:
    matchLabels:
      app: myapp
  rules:
    - from:
        - source:
            principals: ["cluster.local/ns/production/sa/frontend"]
      to:
        - operation:
            methods: ["GET", "POST"]
            paths: ["/api/*"]
```

## Linkerd

### Comparación con Istio

| Aspecto | Istio | Linkerd |
|---------|-------|---------|
| **Proxy** | Envoy (C++) | linkerd2-proxy (Rust) |
| **Complexity** | Alta | Baja |
| **Performance** | Overhead moderado | Overhead mínimo |
| **Features** | Full-featured | Core features |
| **Learning curve** | Empinada | Suave |
| **Resource usage** | ~100MB por proxy | ~10MB por proxy |

### Linkerd installation

```bash
# Install Linkerd
linkerd install --crds | kubectl apply -f -
linkerd install | kubectl apply -f -

# Inject sidecar
kubectl get deployment myapp -o yaml | linkerd inject - | kubectl apply -f -

# Check health
linkerd check
linkerd viz install | kubectl apply -f -
linkerd viz dashboard
```

## Observability con Service Mesh

```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  Metrics    │  │   Tracing   │  │   Logging   │
│  (Prometheus)│  │  (Jaeger)   │  │  (Fluentd)  │
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       │                │                │
       └────────────────┼────────────────┘
                        │
                ┌───────▼───────┐
                │    Kiali      │
                │  (Dashboard)  │
                └───────────────┘
```

**Métricas que provee:**
- **Request rate**: requests per second
- **Error rate**: 5xx errors percentage
- **Latency**: p50, p90, p99
- **Traffic**: bytes in/out
- **TCP connections**: active connections

## Service Mesh: Cuándo usarlo

| Señal | Acción |
|-------|--------|
| **>10 microservicios** | Considerar service mesh |
| **mTLS requerido** | Service mesh lo resuelve |
| **Multi-language** | Sidecar pattern es ideal |
| **Observability limitada** | Mesh provee métricas gratis |
| **<5 servicios** | Probablemente innecesario |
| **Monolito** | No usar |

## Relación con otros conceptos

- [[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes]] — Plataforma donde corre el mesh
- [[../09-DevOps-Infra/10-cloud-native|Cloud Native]] — Service mesh es patrón cloud native
- [[../01-Fundamentos/12-monolito-microservicios|Microservicios]] — Mesh habilita microservicios
- [[../09-DevOps-Infra/08-site-reliability|SRE]] — Observabilidad y resiliencia
- [[../08-Calidad-Seguridad/09-zero-trust|Zero Trust]] — mTLS y authorization policies
- [[../09-DevOps-Infra/09-incident-response|Incident Response]] — Traffic management durante incidentes
