---
title: "Plataformas Cloud"
tags:
  - sf/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Herramientas y Tecnología"
aliases:
  - "Cloud Providers"
  - "AWS"
  - "Azure"
  - "GCP"
  - "Multi-cloud"
related:
  - "[[07-iac-terraform]]"
  - "[[06-container-kubernetes]]"
  - "[[05-herramientas-monitoring]]"
---

## Visión General

Las plataformas cloud son el foundation para workloads modernos. La elección de provider impacta costos, [[06-container-kubernetes|managed services]], [[07-iac-terraform|IaC]], y [[../03-Procesos/README|team capabilities]].

## Los Tres Grandes

### Amazon Web Services (AWS)

| Aspecto | Detalle |
|---------|---------|
| **Market share** | ~31% (leader) |
| **Services** | 200+ managed services |
| **Regions** | 34+ regions, 108+ AZs |
| **Free tier** | 12 months + always free |

**Servicios clave**:

| Categoría | Servicios |
|-----------|-----------|
| **Compute** | EC2, Lambda, ECS, EKS, Fargate |
| **Storage** | S3, EBS, EFS, Glacier |
| **Database** | RDS, DynamoDB, Aurora, ElastiCache |
| **Networking** | VPC, CloudFront, Route 53, ALB/NLB |
| **AI/ML** | SageMaker, Bedrock, Rekognition |
| **Analytics** | Athena, Glue, EMR, Kinesis |
| **DevOps** | CodePipeline, CodeBuild, CodeDeploy |

**Fortalezas**: Broadest service portfolio, largest community, most mature.

**Debilidades**: Pricing complexity, steep learning curve, console UX.

### Microsoft Azure

| Aspecto | Detalle |
|---------|---------|
| **Market share** | ~24% |
| **Services** | 200+ services |
| **Regions** | 60+ regions |
| **Strength** | Enterprise integration (.NET, Active Directory, Office 365) |

**Servicios clave**:

| Categoría | Servicios |
|-----------|-----------|
| **Compute** | VMs, AKS, Azure Functions, Container Apps |
| **Storage** | Blob Storage, Azure Files, Managed Disks |
| **Database** | Azure SQL, Cosmos DB, PostgreSQL Flexible |
| **Networking** | VNet, Front Door, Traffic Manager |
| **AI/ML** | Azure OpenAI, Cognitive Services |
| **Enterprise** | Active Directory, DevOps, Logic Apps |

**Fortalezas**: Hybrid cloud (Arc), .NET ecosystem, enterprise agreements, OpenAI partnership.

**Debilidades**: Service naming inconsistency, portal complexity.

### Google Cloud Platform (GCP)

| Aspecto | Detalle |
|---------|---------|
| **Market share** | ~11% |
| **Strengths** | Data/ML, Kubernetes native, networking |
| **Kubernetes** | Created K8s, best managed (GKE) |
| **AI/ML** | Vertex AI, TPUs, Gemini |

**Servicios clave**:

| Categoría | Servicios |
|-----------|-----------|
| **Compute** | Compute Engine, GKE, Cloud Run, Functions |
| **Storage** | Cloud Storage, Persistent Disk |
| **Database** | Cloud SQL, Firestore, Spanner, BigQuery |
| **Networking** | VPC, Cloud CDN, Cloud Armor |
| **AI/ML** | Vertex AI, TPUs, BigQuery ML |
| **Data** | BigQuery, Dataflow, Pub/Sub, Dataproc |

**Fortalezas**: Best Kubernetes (GKE), BigQuery (analytics), networking, open-source commitment.

**Debilidades**: Smaller enterprise footprint, fewer regions than AWS.

## Comparison Matrix

| Feature | AWS | Azure | GCP |
|---------|-----|-------|-----|
| Market share | ✅✅ (~31%) | ✅ (~24%) | ⚙️ (~11%) |
| Service breadth | ✅✅ | ✅ | ✅ |
| K8s managed | EKS | AKS | ✅✅ GKE |
| Serverless | Lambda | Functions | Cloud Run ✅ |
| AI/ML | SageMaker, Bedrock | Azure OpenAI | ✅✅ Vertex AI |
| Data analytics | Athena, Redshift | Synapse | ✅✅ BigQuery |
| Hybrid | Outposts | ✅✅ Arc | Anthos |
| .NET support | ✅ | ✅✅ | ✅ |
| Pricing | Complex | Complex | Simpler |
| Free tier | ✅✅ | ✅ | ✅ |
| Open source | ✅ | ✅ | ✅✅ |

## Serverless Options

| Service | Provider | Use Case |
|---------|----------|----------|
| **AWS Lambda** | AWS | Event-driven, API |
| **Azure Functions** | Azure | Event-driven, .NET |
| **Google Cloud Run** | GCP | Container-based, HTTP |
| **AWS Fargate** | AWS | Container without management |
| **Azure Container Apps** | Azure | Microservices |
| **AWS App Runner** | AWS | Simplified container deploy |

**Serverless Decision**:
```
Event-driven + AWS?       → Lambda
Container-based?         → Cloud Run
Microservices + Azure?   → Container Apps
Full control containers? → Fargate
```

## Multi-Cloud Strategy

### Cuándo Multi-Cloud

| Scenario | Approach |
|----------|----------|
| Best of breed | Select best service per use case |
| Risk mitigation | Avoid vendor lock-in |
| Regulatory | Data residency requirements |
| M&A | Different providers por company |
| Performance | Edge deployment |

### Herramientas Multi-Cloud

| Herramienta | Tipo |
|-------------|------|
| Terraform/Pulumi | IaC multi-cloud |
| Kubernetes | Orchestration portable |
| OpenTelemetry | Observability vendor-neutral |
| Terraform Cloud | Multi-cloud state management |

### Multi-Cloud Challenges

- Network complexity (peering, VPN)
- Identity federation across providers
- Cost management tools per provider
- Skills split del equipo
- Referencia: [[07-iac-terraform|IaC multi-cloud]]

## Cloud Cost Management

| Herramienta | Tipo |
|-------------|------|
| **AWS Cost Explorer** | Built-in |
| **Azure Cost Management** | Built-in |
| **GCP Cost Tools** | Built-in |
| **Infracost** | IaC cost estimation |
| **Kubecost** | Kubernetes cost allocation |
| **CloudHealth** | Multi-cloud |
| **Spot.io** | Spot instance management |

Referencia: [[../06-Metricas/README|Cost metrics]]

## Cloud Migration Strategies (6 Rs)

| Strategy | Descripción | Ejemplo |
|----------|-------------|---------|
| **Rehost** | Lift and shift | VM → EC2 |
| **Replatform** | Lift and reshape | VM → RDS |
| **Repurchase** | SaaS replacement | On-prem → Salesforce |
| **Refactor** | Re-architect | Monolith → Lambda |
| **Retain** | Keep on-prem | Legacy systems |
| **Retire** | Decommission | Unused systems |

Referencia: [[13-legacy-modernizacion|Modernización legacy]]

## Decision Framework

```
Enterprise + Microsoft ecosystem?    → Azure
Data/ML + Kubernetes focus?          → GCP
Broadest services + largest community? → AWS
Multi-cloud?                         → Primary + secondary
Budget constrained?                  → Compare spot/preemptible pricing
```

## Security y Compliance

- Shared responsibility model
- Compliance certifications: SOC2, HIPAA, PCI-DSS, GDPR
- Cloud security posture management (CSPM)
- Identity: AWS IAM, Azure AD, GCP IAM
- Referencia: [[04-Practicas/README|Security practices]]

## Integración

- **IaC**: [[07-iac-terraform]] — Provisionar infraestructura
- **Containers**: [[06-container-kubernetes]] — Managed K8s
- **CI/CD**: [[02-herramientas-ci-cd]] — Deploy pipelines
- **Monitoring**: [[05-herramientas-monitoring]] — Cloud observability
- **AI**: [[07-IA-Software/README|AI services]]
