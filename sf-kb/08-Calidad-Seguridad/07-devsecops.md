---
title: "DevSecOps: Seguridad Integrada"
tags:
  - sf/calidad
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Calidad y Seguridad"
aliases:
  - "Security in DevOps"
  - "Shift-Left Security"
related:
  - "[[05-security-testing|Security Testing]]"
  - "[[06-owasp-top10|OWASP Top 10]]"
  - "[[../09-DevOps/01-pipelines|Pipelines]]"
---

# DevSecOps: Seguridad Integrada

## Definición

DevSecOps integra la seguridad en cada fase del ciclo de vida del desarrollo de software, automatizando las prácticas de seguridad.

```
Traditional DevOps:
Code → Build → Test → Deploy → Monitor

DevSecOps:
Code → SAST → Build → SCA → Test → DAST → Deploy → RASP → Monitor
```

## Principles

| Principle | Descripción |
|-----------|-------------|
| **Shift-Left** | Seguridad temprana en el ciclo |
| **Automation** | Seguridad automatizada, no manual |
| **Continuous** | Seguridad continua, no punctual |
| **Shared Responsibility** | Seguridad es responsabilidad de todos |

## Pipeline de Seguridad

### Etapa 1: Planificación
```yaml
# Threat modeling en la planificación
threat_model:
  method: STRIDE
  assets:
    - user_data
    - payment_info
  threats:
    - spoofing: MFA required
    - tampering: Input validation
```

### Etapa 2: Desarrollo
```yaml
# Pre-commit hooks
hooks:
  pre-commit:
    - semgrep --config=auto
    - gitleaks detect
    - detect-secrets scan
```

### Etapa 3: Build
```yaml
# CI Pipeline Security
build:
  stages:
    - name: sast
      script: semgrep --config=p/owasp-top-ten .
    - name: sca
      script: snyk test --severity-threshold=high
    - name: container-scan
      script: trivy image myapp:${CI_COMMIT_SHA}
    - name: sbom
      script: syft scan dir:. -o spdx > sbom.json
```

### Etapa 4: Deploy
```yaml
# Deployment Security
deploy:
  pre_deployment:
    - dast_scan: zap-full-scan.py -t ${STAGING_URL}
    - policy_check: opa eval --data policy.rego --input deploy.json
  post_deployment:
    - smoke_test: security-check.sh
    - monitor_enable: falco --enabled
```

## Herramientas por Fase

| Fase | Herramienta | Tipo |
|------|-------------|------|
| **IDE** | SonarLint, Semgrep | SAST |
| **Pre-commit** | Gitleaks, detect-secrets | Secrets |
| **CI/CD** | Snyk, Trivy, SonarQube | SCA/SAST |
| **Runtime** | Falco, Sysdig | RASP |
| **Monitoring** | Splunk, ELK | SIEM |

## Secrets Management

### Git Secrets
```bash
# Instalación
brew install git-secrets

# Uso
git secrets --install
git secrets --register-aws
git secrets --scan
```

### HashiCorp Vault
```python
# Vault: Obtener secrets
import hvac

client = hvac.Client(url='https://vault.example.com')
client.token = os.environ['VAULT_TOKEN']

# Leer secret
secret = client.secrets.kv.v2.read_secret_version(
    path='database/credentials'
)
db_password = secret['data']['data']['password']
```

### GitHub Actions Secrets
```yaml
# Uso de secrets en GitHub Actions
steps:
  - name: Deploy
    env:
      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    run: aws s3 sync ./dist s3://my-bucket
```

## Infrastructure Security

```terraform
# Terraform: Security groups
resource "aws_security_group" "web" {
  name        = "web-sg"
  description = "Web server security group"

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]  # Only HTTPS
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
```

## Container Security

```dockerfile
# Dockerfile seguro
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM node:18-alpine
RUN addgroup -g 1001 -S appgroup && \
    adduser -S appuser -u 1001
USER appuser
COPY --from=builder --chown=appuser:appgroup /app/dist ./dist
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

## Kubernetes Security

```yaml
# Pod Security
apiVersion: v1
kind: Pod
metadata:
  name: secure-pod
spec:
  securityContext:
    runAsNonRoot: true
    runAsUser: 1001
  containers:
    - name: app
      image: myapp:latest
      securityContext:
        allowPrivilegeEscalation: false
        readOnlyRootFilesystem: true
        capabilities:
          drop:
            - ALL
      resources:
        limits:
          memory: "256Mi"
          cpu: "500m"
```

## Métricas de DevSecOps

| Métrica | Target | Descripción |
|---------|--------|-------------|
| Time to Remediate | < 24h (critical) | Tiempo para fix vulnerabilities |
| Security Tests Coverage | 100% | Pipeline coverage |
| False Positive Rate | < 10% | Precisión de herramientas |
| Secrets Detected | 0 | Secrets en código |

## Ver también

- [[05-security-testing|Security Testing]]
- [[06-owasp-top10|OWASP Top 10]]
- [[08-compliance-regulaciones|Compliance]]
- [[09-zero-trust|Zero Trust]]
- [[10-supply-chain-security|Supply Chain Security]]
- [[../09-DevOps/01-pipelines|Pipelines CI/CD]]
