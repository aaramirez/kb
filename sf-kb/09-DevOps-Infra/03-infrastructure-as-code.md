---
title: "Infrastructure as Code"
tags:
  - sf/devops
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "IaC"
  - "Terraform"
  - "Infrastructure Automation"
related:
  - "[[../09-DevOps-Infra/04-containers-docker|Containers y Docker]]"
  - "[[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes]]"
  - "[[../09-DevOps-Infra/07-gitops|GitOps]]"
  - "[[../05-Herramientas/07-iac-terraform|Terraform en Herramientas]]"
  - "[[../08-Calidad-Seguridad/10-supply-chain-security|Supply Chain Security]]"
---

# Infrastructure as Code

Infrastructure as Code (IaC) es la práctica de gestionar y provisionar infraestructura de computación a través de archivos de configuración en lugar de procesos manuales o scripts ad-hoc.

## ¿Qué es IaC?

```
Traditional:                    IaC:
┌──────────────┐               ┌──────────────┐
│  Click       │               │  Code        │
│  Click       │               │  (Versioned) │
│  Click       │               │  (Tested)    │
│  Deploy      │               │  (Reviewed)  │
└──────────────┘               └──────┬───────┘
                                      │
                              ┌───────▼───────┐
                              │   Pipeline    │
                              │   (Automated) │
                              └───────┬───────┘
                                      │
                              ┌───────▼───────┐
                              │  Infrastructure│
                              │  (Reproducible)│
                              └───────────────┘
```

### Beneficios de IaC

| Beneficio | Descripción |
|-----------|-------------|
| **Reproducibilidad** | Mismo resultado cada vez |
| **Version control** | Historial de cambios en infra |
| **Collaboración** | PRs para cambios de infra |
| **Testing** | Validar infra como código |
| **Self-documenting** | El código documenta la infra |
| **Speed** | Provisionar en minutos, no días |

## Modelos de IaC

### Declarativo vs Imperativo

**Declarativo** (qué quieres):
```hcl
# Terraform - Declarativo
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"

  tags = {
    Name = "web-server"
  }
}
```

**Imperativo** (cómo hacerlo):
```python
# Pulumi - Imperativo (también soporta declarativo)
import pulumi
import pulumi_aws as aws

web = aws.ec2.Instance("web",
    ami="ami-0c55b159cbfafe1f0",
    instance_type="t3.micro",
    tags={"Name": "web-server"})
```

### Approaches de IaC

```
┌──────────────────────────────────────────────────┐
│                  IaC Approaches                   │
├──────────────┬──────────────┬────────────────────┤
│  Push-based  │ Pull-based   │  Agent-based      │
│              │              │                    │
│ Terraform    │ Ansible      │ Puppet             │
│ CloudFormation│ SaltStack   │ Chef               │
│ Pulumi       │              │                    │
├──────────────┼──────────────┼────────────────────┤
│ "Push config │ "Pull config │ "Agent maintains   │
│  to servers" │  from master"│  desired state"    │
└──────────────┴──────────────┴────────────────────┘
```

## Terraform

### Conceptos básicos

```hcl
# Provider configuration
provider "aws" {
  region = "us-east-1"
}

# Resource definition
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"

  tags = {
    Name = "main-vpc"
  }
}

# Data source
data "aws_ami" "ubuntu" {
  most_recent = true

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-jammy-22.04-amd64-server-*"]
  }
}

# Output
output "vpc_id" {
  value = aws_vpc.main.id
}
```

### State Management

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Code (HCL)  │────►│   State      │────►│  Provider    │
│              │     │   File       │     │  (AWS, GCP)  │
│  desired     │     │              │     │              │
│  state       │     │  current     │     │  actual      │
│              │     │  state       │     │  state       │
└──────────────┘     └──────────────┘     └──────────────┘
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                     ┌───────▼───────┐
                     │  Terraform    │
                     │  Plan         │
                     │  (diff)       │
                     └───────────────┘
```

**Remote State (recomendado):**
```hcl
terraform {
  backend "s3" {
    bucket         = "my-terraform-state"
    key            = "prod/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}
```

### Módulos

```
┌─────────────────────────────────┐
│         Root Module             │
│  ┌───────────────────────────┐  │
│  │   module "vpc"            │  │
│  │   module "eks"            │  │
│  │   module "rds"            │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
         │         │         │
    ┌────▼───┐ ┌───▼────┐ ┌──▼───┐
    │ VPC    │ │  EKS   │ │  RDS │
    │ Module │ │ Module │ │Module│
    └────────┘ └────────┘ └──────┘
```

```hcl
module "vpc" {
  source = "./modules/vpc"

  cidr_block = "10.0.0.0/16"
  azs        = ["us-east-1a", "us-east-1b"]

  private_subnets = ["10.0.1.0/24", "10.0.2.0/24"]
  public_subnets  = ["10.0.101.0/24", "10.0.102.0/24"]
}

module "eks" {
  source = "./modules/eks"

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets
}
```

## Ansible

### Configuration Management

```yaml
# playbook.yml
---
- hosts: webservers
  become: yes
  vars:
    http_port: 80
    app_version: "2.1.0"

  tasks:
    - name: Install dependencies
      apt:
        name:
          - nginx
          - python3
        state: present
        update_cache: yes

    - name: Deploy application
      copy:
        src: "dist/app-{{ app_version }}.tar.gz"
        dest: /opt/app/
      notify: Restart app

    - name: Configure nginx
      template:
        src: nginx.conf.j2
        dest: /etc/nginx/nginx.conf
      notify: Reload nginx

  handlers:
    - name: Restart app
      service:
        name: myapp
        state: restarted

    - name: Reload nginx
      service:
        name: nginx
        state: reloaded
```

### Terraform vs Ansible

| Aspecto | Terraform | Ansible |
|---------|-----------|---------|
| **Type** | Provisioning | Configuration Management |
| **State** | Manages state | Agentless, stateless |
| **Language** | HCL (declarative) | YAML (procedural) |
| **Use case** | Create infrastructure | Configure infrastructure |
| **Cloud** | Multi-cloud | Multi-platform |
| **Idempotency** | Yes | Yes |

## Pulumi

```typescript
// Pulumi - TypeScript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("my-bucket", {
    tags: {
        Environment: "dev",
    },
});

const role = new aws.iam.Role("role", {
    assumeRolePolicy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
            Action: "sts:AssumeRole",
            Effect: "Allow",
            Principal: {
                Service: "lambda.amazonaws.com",
            },
        }],
    }),
});

exports.bucketName = bucket.id;
exports.roleArn = role.arn;
```

## Testing Infrastructure

```bash
# Terraform validate y plan
terraform validate
terraform plan -out=tfplan

# Terratest (Go)
func TestVpcModule(t *testing.T) {
    terraformOptions := terraform.WithDefaultRetryableErrors(t, &terraform.Options{
        TerraformDir: "../modules/vpc",
        Vars: map[string]interface{}{
            "cidr_block": "10.0.0.0/16",
        },
    })
    defer terraform.Destroy(t, terraformOptions)
    terraform.InitAndApply(t, terraformOptions)

    vpcId := terraform.Output(t, terraformOptions, "vpc_id")
    assert.Regexp(t, `^vpc-`, vpcId)
}
```

## Mejores prácticas

| Práctica | Descripción |
|----------|-------------|
| **Remote state** | Nunca commit local state |
| **State locking** | DynamoDB para Terraform |
| **Modules** | Reutilizar patrones comunes |
| **Environments** | Separate state per env |
| **Drift detection** | Detectar cambios manuales |
| **Plan before apply** | Siempre revisar diff |
| **Secrets management** | Vault, SSM, never in code |
| **Code review** | PRs para cambios de infra |

## IaC y GitOps

```
Git Repo (IaC) → Pipeline → Plan/Validate → Apply → State
     │                                                 │
     └──── drift detection ─────────────────────────────┘
```

Ver [[../09-DevOps-Infra/07-gitops|GitOps]] para el flujo declarativo completo.

## Relación con otros conceptos

- [[../09-DevOps-Infra/04-containers-docker|Containers y Docker]] — Infraestructura para containers
- [[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes]] — Orquestación declarativa
- [[../09-DevOps-Infra/07-gitops|GitOps]] — Flujo GitOps para infra
- [[../05-Herramientas/07-iac-terraform|Terraform en Herramientas]] — Evaluación de herramientas
- [[../08-Calidad-Seguridad/10-supply-chain-security|Supply Chain Security]] — Seguridad en dependencias
- [[../09-DevOps-Infra/12-cost-optimization|Optimización de Costos]] — Cost awareness en IaC
