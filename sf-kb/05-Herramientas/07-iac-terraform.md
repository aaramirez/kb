---
title: "Infrastructure as Code"
tags:
  - sf/herramientas
  - type/herramienta
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Herramientas y Tecnología"
aliases:
  - "IaC"
  - "Terraform"
  - "Infrastructure Automation"
related:
  - "[[08-plataformas-cloud]]"
  - "[[06-container-kubernetes]]"
  - "[[02-herramientas-ci-cd]]"
---

## Visión General

Infrastructure as Code (IaC) permite gestionar infraestructura de forma declarativa, versionada y reproducible. Es componente esencial de [[08-plataformas-cloud|plataformas cloud]] y [[06-container-kubernetes|containers]].

## Herramientas Principales

### Terraform

| Aspecto | Detalle |
|---------|---------|
| **Creator** | HashiCorp |
| **Language** | HCL (HashiCorp Configuration Language) |
| **State** | State file (local o remoto) |
| **Providers** | 3,000+ (AWS, Azure, GCP, K8s, etc.) |
| **Plan** | `terraform plan` — dry-run |
| **Apply** | `terraform apply` — execute |
| **Destroy** | `terraform destroy` — cleanup |
| **License** | BSL 1.1 (post-AUG 2023) |

```hcl
# Ejemplo Terraform
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"

  tags = {
    Name = "WebServer"
  }
}

resource "aws_security_group" "web_sg" {
  name = "web-sg"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
```

**Módulos recomendados**:
- `terraform-aws-modules/vpc`
- `terraform-aws-modules/eks`
- `terraform-aws-modules/rds`

**State Management**:
- S3 + DynamoDB (AWS)
- Azure Storage
- GCS + Cloud Spanner
- Terraform Cloud

### Pulumi

| Aspecto | Detalle |
|---------|---------|
| **Language** | TypeScript, Python, Go, C#, Java |
| **Model** | Imperativo + declarativo |
| **State** | Pulumi Cloud o self-managed |
| **Providers** | 150+ (same as Terraform) |
| **License** | Apache 2.0 |
| **Secrets** | Built-in encryption |

```typescript
// Pulumi TypeScript example
import * as aws from "@pulumi/aws";

const server = new aws.ec2.Instance("web-server", {
    ami: "ami-0c55b159cbfafe1f0",
    instanceType: "t3.micro",
    tags: { Name: "WebServer" },
});
```

**Ventaja sobre Terraform**: Lenguajes de programación completos, testing nativo, type safety.

### Ansible

| Aspecto | Detalle |
|---------|---------|
| **Modelo** | Imperativo, agentless |
| **Language** | YAML (playbooks) + Jinja2 |
| **Execution** | SSH (push-based) |
| **State** | Stateless |
| **Use cases** | Configuration management, provisioning |
| **AWX/Tower** | UI + RBAC + orchestration |
| **License** | GPL (core), Ansible Automation Platform (paid) |

```yaml
# Ansible playbook
- hosts: webservers
  become: yes
  tasks:
    - name: Install nginx
      apt:
        name: nginx
        state: present
    - name: Start nginx
      service:
        name: nginx
        state: started
```

### CloudFormation (AWS)

| Aspecto | Detalle |
|---------|---------|
| **Provider** | AWS only |
| **Language** | YAML/JSON |
| **State** | Managed by AWS |
| **Integration** | Native AWS services |
| **Rollback** | Automatic |
| **Drift detection** | Built-in |

## Comparison Matrix

| Feature | Terraform | Pulumi | Ansible | CloudFormation |
|---------|-----------|--------|---------|----------------|
| Type | Declarative | Imperative+Declarative | Imperative | Declarative |
| Language | HCL | Real languages | YAML | YAML/JSON |
| State | File-based | Cloud/managed | Stateless | AWS-managed |
| Multi-cloud | ✅✅ | ✅✅ | ✅ | ❌ (AWS only) |
| Learning curve | Media | Baja (si conoces lenguaje) | Baja | Media |
| Testing | ⚙️ (terratest) | ✅✅ (native) | ⚙️ | ⚙️ |
| Drift detection | ✅ | ✅ | ❌ | ✅✅ |
| Rollback | Manual | ⚙️ | Manual | ✅✅ Auto |
| Maturity | ✅✅ | ✅ | ✅✅ | ✅✅ |
| Ecosystem | ✅✅ | ✅ | ✅✅ | ✅✅ |

## Decision Framework

```
Multi-cloud + maturity?       → Terraform
Developer-first?              → Pulumi
Config management + prov?     → Ansible
AWS-only + native?            → CloudFormation
Both infra + config?          → Terraform + Ansible
All-in-one?                   → Pulumi (with Ansible for config)
```

## Best Practices

### State Management
- Remote state (nunca local en team settings)
- State locking (DynamoDB, Pulumi Cloud)
- Encryption at rest
- Separate state files por environment
- Referencia: [[08-plataformas-cloud|Cloud strategy]]

### Code Organization
```
infra/
  modules/
    vpc/
    eks/
    rds/
  environments/
    dev/
    staging/
    prod/
  policies/
   .sentinel (Terraform) / (OPA for Pulumi)
```

### Security
- Secrets in Vault, never in code
- Least privilege for IaC identity
- Policy as Code (Sentinel, OPA, Kyverno)
- Drift detection automático
- Referencia: [[04-Practicas/README|Security practices]]

### Testing
- **Plan verification**: Check plan output antes de apply
- **Policy testing**: Sentinel/OPA policies
- **Integration testing**: Terratest, Pulumi Testing
- **Drift detection**: Periodic reconciliation
- Referencia: [[04-herramientas-testing|Testing tools]]

## GitOps con IaC

```
Git commit → CI pipeline → terraform plan → PR review → terraform apply → drift detection
```

- Plan output en PR comments
- Require approval antes de apply
- Auto-drift detection (diario)
- Referencia: [[02-herramientas-ci-cd|CI/CD pipelines]]

## Migration Strategies

### De ClickOps a IaC
1. **Terraformer** — Import existing infrastructure
2. **Former2** — Generate IaC from existing resources
3. **Manual import** — `terraform import` / `pulumi import`

### Entre herramientas
1. **Terraform → Pulumi**: Import existing state
2. **CF → Terraform**: CloudFormer + refactor
3. **Ansible → Terraform**: Separate infra from config

Referencia: [[13-legacy-modernizacion|Modernización legacy]]

## Integración

- **Cloud**: [[08-plataformas-cloud]] — Providers cloud
- **Containers**: [[06-container-kubernetes]] — EKS/GKE provisioning
- **CI/CD**: [[02-herramientas-ci-cd]] — Pipeline automation
- **Monitoring**: [[05-herramientas-monitoring]] — Infra metrics
- **Security**: [[04-Practicas/README|Security practices]]
