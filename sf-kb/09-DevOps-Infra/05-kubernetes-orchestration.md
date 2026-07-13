---
title: "Kubernetes y Orquestación"
tags:
  - sf/devops
  - type/herramienta
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "K8s"
  - "Kubernetes"
  - "Container Orchestration"
  - "Helm"
related:
  - "[[../09-DevOps-Infra/04-containers-docker|Containers y Docker]]"
  - "[[../09-DevOps-Infra/06-service-mesh|Service Mesh]]"
  - "[[../09-DevOps-Infra/03-infrastructure-as-code|Infrastructure as Code]]"
  - "[[../09-DevOps-Infra/07-gitops|GitOps]]"
  - "[[../05-Herramientas/06-container-kubernetes|Kubernetes en Herramientas]]"
---

# Kubernetes y Orquestación

Kubernetes (K8s) es la plataforma de orquestación de containers de facto para desplegar, escalar y gestionar aplicaciones containerizadas en clusters distribuidos.

## Arquitectura de Kubernetes

```
┌─────────────────────────────────────────────────────────┐
│                    Control Plane                         │
│  ┌────────────┐  ┌────────────┐  ┌────────────────────┐│
│  │ API Server │  │ Scheduler  │  │ Controller Manager  ││
│  │ (etcd)     │  │            │  │                    ││
│  └────────────┘  └────────────┘  └────────────────────┘│
│  ┌──────────────────────────────────────────────────────┐│
│  │              etcd (cluster state)                    ││
│  └──────────────────────────────────────────────────────┘│
└────────────────────────────┬────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
┌───────▼──────┐   ┌────────▼───────┐   ┌───────▼──────┐
│   Worker 1   │   │   Worker 2    │   │   Worker 3   │
│  ┌────────┐  │   │  ┌────────┐  │   │  ┌────────┐  │
│  │kubelet │  │   │  │kubelet │  │   │  │kubelet │  │
│  │kube-   │  │   │  │kube-   │  │   │  │kube-   │  │
│  │proxy   │  │   │  │proxy   │  │   │  │proxy   │  │
│  └────────┘  │   │  └────────┘  │   │  └────────┘  │
│  ┌───┐┌───┐  │   │  ┌───┐┌───┐  │   │  ┌───┐┌───┐  │
│  │pod││pod│  │   │  │pod││pod│  │   │  │pod││pod│  │
│  └───┘└───┘  │   │  └───┘└───┘  │   │  └───┘└───┘  │
└──────────────┘   └──────────────┘   └──────────────┘
```

## Core Resources

### Pods

La unidad más pequeña desplegable en K8s:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
    tier: backend
spec:
  containers:
    - name: myapp
      image: myapp:1.0
      ports:
        - containerPort: 8080
      resources:
        requests:
          memory: "128Mi"
          cpu: "250m"
        limits:
          memory: "256Mi"
          cpu: "500m"
      livenessProbe:
        httpGet:
          path: /health
          port: 8080
        initialDelaySeconds: 15
        periodSeconds: 10
      readinessProbe:
        httpGet:
          path: /ready
          port: 8080
        initialDelaySeconds: 5
        periodSeconds: 5
```

### Deployments

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: myapp
          image: myapp:2.0
          ports:
            - containerPort: 8080
          env:
            - name: DATABASE_URL
              valueFrom:
                secretKeyRef:
                  name: db-secret
                  key: url
```

### Services

```yaml
# ClusterIP (interno)
apiVersion: v1
kind: Service
metadata:
  name: myapp-service
spec:
  selector:
    app: myapp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 8080
  type: ClusterIP

---
# NodePort (exposición externa simple)
apiVersion: v1
kind: Service
metadata:
  name: myapp-nodeport
spec:
  selector:
    app: myapp
  ports:
    - port: 80
      targetPort: 8080
      nodePort: 30080
  type: NodePort

---
# LoadBalancer (cloud)
apiVersion: v1
kind: Service
metadata:
  name: myapp-lb
spec:
  selector:
    app: myapp
  ports:
    - port: 80
      targetPort: 8080
  type: LoadBalancer
```

### Ingress

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: myapp-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  tls:
    - hosts:
        - app.example.com
      secretName: app-tls
  rules:
    - host: app.example.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: myapp-service
                port:
                  number: 80
          - path: /api
            pathType: Prefix
            backend:
              service:
                name: api-service
                port:
                  number: 8080
```

## ConfigMaps y Secrets

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  APP_ENV: "production"
  LOG_LEVEL: "info"
  config.json: |
    {
      "feature_flags": {
        "new_ui": true
      }
    }

---
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  url: cG9zdGdyZXNxbDovL3VzZXI6cGFzc0Bob3N0OjU0MzIvZGI=
  password: cGFzc3dvcmQxMjM=
```

## Horizontal Pod Autoscaler

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myapp-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
    - type: Resource
      resource:
        name: memory
        target:
          type: Utilization
          averageUtilization: 80
```

## Helm

### Conceptos

```
┌──────────────────────────────────────┐
│           Helm Chart                 │
│                                      │
│  Chart.yaml  → metadata             │
│  values.yaml → configuración default│
│  templates/  → Kubernetes manifests │
│  └── deployment.yaml                │
│  └── service.yaml                   │
│  └── ingress.yaml                   │
│  └── configmap.yaml                 │
└──────────────────────────────────────┘
         │
         ▼
  helm install myrelease ./chart
         │
         ▼
  ┌─────────────────────┐
  │   Release           │
  │   (instance)        │
  │   - revision 1      │
  │   - values override │
  └─────────────────────┘
```

### Chart example

```yaml
# Chart.yaml
apiVersion: v2
name: myapp
description: My application Helm chart
version: 1.0.0
appVersion: "2.0.0"
dependencies:
  - name: postgresql
    version: "12.x.x"
    repository: "https://charts.bitnami.com/bitnami"
```

```yaml
# values.yaml
replicaCount: 2

image:
  repository: myapp
  tag: "2.0.0"
  pullPolicy: IfNotPresent

service:
  type: ClusterIP
  port: 80

ingress:
  enabled: true
  hosts:
    - host: app.example.com
      paths:
        - path: /
          pathType: Prefix

resources:
  requests:
    memory: "128Mi"
    cpu: "100m"
  limits:
    memory: "256Mi"
    cpu: "200m"
```

### Helm commands

```bash
# Install
helm install myrelease ./chart -f values-prod.yaml

# Upgrade
helm upgrade myrelease ./chart --set image.tag=2.1.0

# Rollback
helm rollback myrelease 1

# List releases
helm list -A

# Debug
helm template myrelease ./chart
helm diff upgrade myrelease ./chart
```

## Operators

```
┌──────────────────────────────────────────┐
│              Operator Pattern            │
│                                          │
│  Custom Resource Definition (CRD)        │
│  ┌──────────────────────────────────┐   │
│  │ apiVersion: database.example.com │   │
│  │ kind: Database                   │   │
│  │ spec:                            │   │
│  │   replicas: 3                    │   │
│  │   backup: daily                  │   │
│  └──────────────────────────────────┘   │
│                   │                      │
│                   ▼                      │
│  ┌──────────────────────────────────┐   │
│  │       Operator Controller        │   │
│  │  Reconciliation Loop             │   │
│  │  desired state → actual state    │   │
│  └──────────────────────────────────┘   │
└──────────────────────────────────────────┘
```

**Operators populares:**
- Prometheus Operator
- Cert-Manager
- ArgoCD Operator
- PostgreSQL Operator (Zalando, CrunchyData)

## Namespace Strategy

```
cluster
├── kube-system
├── monitoring
│   ├── prometheus
│   └── grafana
├── production
│   ├── frontend
│   └── backend
├── staging
│   ├── frontend
│   └── backend
└── development
    ├── team-a
    └── team-b
```

## Relación con otros conceptos

- [[../09-DevOps-Infra/04-containers-docker|Containers y Docker]] — Base de K8s
- [[../09-DevOps-Infra/06-service-mesh|Service Mesh]] — Red para microservicios en K8s
- [[../09-DevOps-Infra/03-infrastructure-as-code|IaC]] — Provisionar clusters
- [[../09-DevOps-Infra/07-gitops|GitOps]] — Deploy declarativo a K8s
- [[../09-DevOps-Infra/08-site-reliability|SRE]] — Operar K8s en producción
- [[../05-Herramientas/06-container-kubernetes|K8s en Herramientas]] — Evaluación
- [[../09-DevOps-Infra/10-cloud-native|Cloud Native]] — K8s como plataforma cloud native
