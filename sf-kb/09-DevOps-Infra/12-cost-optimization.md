---
title: "Optimización de Costos en Cloud"
tags:
  - sf/devops
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "FinOps"
  - "Cloud Cost Optimization"
  - "Cost Management"
  - "Reserved Instances"
related:
  - "[[../09-DevOps-Infra/10-cloud-native|Cloud Native]]"
  - "[[../09-DevOps-Infra/03-infrastructure-as-code|Infrastructure as Code]]"
  - "[[../09-DevOps-Infra/11-serverless-edge|Serverless]]"
  - "[[../06-Metricas/09-business-value-metrics|Business Value Metrics]]"
---

# Optimización de Costos en Cloud

FinOps es el framework operativo que trae la responsabilidad financiera al consumo de cloud, permitiendo a los equipos tomar decisiones basadas en datos de costo.

## ¿Qué es FinOps?

```
┌─────────────────────────────────────────────────────┐
│                  FinOps Lifecycle                    │
│                                                     │
│    Inform ───► Optimize ───► Operate                │
│       ▲                         │                   │
│       └─────────────────────────┘                   │
│              (Continuous)                           │
│                                                     │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐│
│  │ Visibility   │ │ Allocation   │ │ Automation   ││
│  │              │ │              │ │              ││
│  │ Showbacks    │ │ Tagging      │ │ Budgets      ││
│  │ Dashboards   │ │ Cost per svc │ │ Alerts       ││
│  │ Reports      │ │ Unit economics│ │ Rightsizing  ││
│  └──────────────┘ └──────────────┘ └──────────────┘│
└─────────────────────────────────────────────────────┘
```

## Pilares de optimización

### 1. Right-sizing

```
Before (over-provisioned):        After (right-sized):
┌─────────────────────┐           ┌─────────────────────┐
│  m5.2xlarge         │           │  t3.medium          │
│  8 vCPU, 32GB RAM   │    →      │  2 vCPU, 4GB RAM    │
│  $221/month         │           │  $30/month          │
│                     │           │                     │
│  CPU avg: 5%        │           │  CPU avg: 45%       │
│  Memory avg: 15%    │           │  Memory avg: 60%    │
└─────────────────────┘           └─────────────────────┘
    Savings: $191/month (86%)
```

| Estrategia | Ahorro | Riesgo |
|------------|--------|--------|
| **Right-sizing** | 30-60% | Bajo |
| **Reserved Instances** | 40-70% | Medio (commitment) |
| **Spot Instances** | 60-90% | Alto (interrupción) |
| **Scheduling** | 65% (off-hours) | Bajo |
| **Graviton/ARM** | 20% | Bajo |

### 2. Reserved Instances y Savings Plans

```
┌──────────────────────────────────────────────┐
│           Instance Pricing Models            │
│                                              │
│  On-Demand:  $0.10/hr  (no commitment)      │
│                                              │
│  Reserved:   $0.06/hr  (1yr commitment)     │
│              $0.04/hr  (3yr commitment)     │
│                                              │
│  Spot:       $0.03/hr  (can be interrupted) │
│                                              │
│  Savings Plan: Flexible commitment           │
│              $0.05/hr  (1yr, $10k commit)   │
└──────────────────────────────────────────────┘
```

**Estrategia de cobertura:**
```
Total usage: 100%
├── Reserved/Savings Plans: 70% (base load)
├── On-Demand: 25% (variable)
└── Spot: 5% (fault-tolerant workloads)
```

### 3. Spot Instances

```yaml
# Kubernetes Spot Instances
apiVersion: apps/v1
kind: Deployment
metadata:
  name: batch-processor
spec:
  replicas: 10
  template:
    spec:
      affinity:
        nodeAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
            nodeSelectorTerms:
              - matchExpressions:
                  - key: node.kubernetes.io/capacity-type
                    operator: In
                    values: ["spot"]
      tolerations:
        - key: "spot"
          operator: "Equal"
          value: "true"
          effect: "NoSchedule"
      containers:
        - name: processor
          image: batch-processor:latest
```

**Cuándo usar spot:**
| Workload | Spot suitable? |
|----------|---------------|
| **Batch processing** | ✓ Yes |
| **CI/CD runners** | ✓ Yes |
| **Development environments** | ✓ Yes |
| **Fault-tolerant apps** | ✓ Yes |
| **Stateful services** | ✗ No |
| **Mission-critical** | ✗ No |
| **Real-time serving** | ⚠️ Maybe with fallback |

### 4. Scheduling

```
Work schedule:
┌──────────────────────────────────────────────┐
│ Mon-Fri: 8am-8pm  │  Scale UP               │
│ Mon-Fri: 8pm-8am  │  Scale DOWN             │
│ Weekends: ALL DAY  │  Scale DOWN             │
│ Holidays: ALL DAY  │  Scale DOWN             │
└──────────────────────────────────────────────┘
```

```yaml
# Cron-based autoscaling
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: work-hours-scaler
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myapp
  minReplicas: 2
  maxReplicas: 20
  metrics:
    - type: External
      external:
        metric:
          name: queue_messages_ready
        target:
          type: AverageValue
          averageValue: "10"
  behavior:
    scaleUp:
      stabilizationWindowSeconds: 60
      policies:
        - type: Percent
          value: 50
          periodSeconds: 60
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
        - type: Percent
          value: 25
          periodSeconds: 120
```

## Unit Economics

### Cost per transaction

```python
# Cost per user
total_cloud_cost = 10000  # monthly
total_users = 100000      # monthly active users
cost_per_user = total_cloud_cost / total_users
# $0.10 per user per month

# Cost per transaction
total_transactions = 5000000
cost_per_transaction = total_cloud_cost / total_transactions
# $0.002 per transaction

# Cost as % of revenue
monthly_revenue = 500000
cost_percentage = (total_cloud_cost / monthly_revenue) * 100
# 2% of revenue (healthy: <10%)
```

### Cost allocation tags

```yaml
# Required tags for cost allocation
tags:
  Environment: production
  Team: payments
  Service: checkout-api
  CostCenter: engineering
  Project: checkout-v2
  ManagedBy: terraform
```

## Herramientas de FinOps

| Tool | Type | Features |
|------|------|----------|
| **AWS Cost Explorer** | Native | Recommendations, forecasting |
| **AWS Compute Optimizer** | Native | Right-sizing suggestions |
| **Kubecost** | K8s | Cost per namespace, pod |
| **CloudHealth** | Multi-cloud | Showback, optimization |
| **Infracost** | IaC | Cost estimates in PRs |
| **OpenCost** | CNCF | K8s cost allocation |

```bash
# Infracost - Cost estimates in PRs
$ infracost diff --path .

Project: myproject

+ aws_instance.web
  +$45.60/mo

~ aws_instance.api (t3.large → t3.medium)
  -$22.80/mo

Monthly cost change: -$22.80 (-15%)
```

## Alertas de costos

```yaml
# Budget alerts
budgets:
  - name: "Monthly budget"
    amount: 10000
    alerts:
      - threshold: 80
        notify: ["finance@company.com", "eng-leads@company.com"]
      - threshold: 100
        notify: ["cto@company.com"]
        action: "notify-only"

  - name: "Unexpected spike"
    type: "anomaly"
    threshold: 150  # 150% of daily average
    notify: ["on-call@company.com"]
```

## Checklist de optimización

| Área | Acción | Ahorro potencial |
|------|--------|-----------------|
| **Compute** | Right-size instances | 30-60% |
| **Storage** | Lifecycle policies (S3) | 40-70% |
| **Database** | Reserved capacity | 40-60% |
| **Network** | CDN for static assets | 20-50% |
| **Containers** | Spot for non-critical | 60-90% |
| **Dev/Staging** | Auto-shutdown off-hours | 65% |
| **Images** | Delete old snapshots | 20-40% |
| **Logs** | Retention policies | 30-50% |

## Relación con otros conceptos

- [[../09-DevOps-Infra/10-cloud-native|Cloud Native]] — Cloud cost visibility
- [[../09-DevOps-Infra/03-infrastructure-as-code|IaC]] — Cost estimates in code
- [[../09-DevOps-Infra/11-serverless-edge|Serverless]] — Pay-per-use pricing
- [[../06-Metricas/09-business-value-metrics|Business Value Metrics]] — Cost vs value
- [[../05-Herramientas/08-plataformas-cloud|Plataformas Cloud]] — Provider comparisons
- [[../09-DevOps-Infra/08-site-reliability|SRE]] — Capacity planning
