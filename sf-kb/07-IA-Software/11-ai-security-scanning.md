---
title: "IA en Seguridad de Código"
tags:
  - sf/ia-software
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "AI Security Scanning"
  - "AI SAST"
related:
  - "[[../07-IA-Software/05-ai-code-analysis|Análisis de Código]]"
  - "[[../08-Calidad-Seguridad/README|Calidad y Seguridad]]"
  - "[[../09-DevOps-Infra/README|DevOps e Infraestructura]]"
---

# IA en Seguridad de Código

La IA está transformando la seguridad de código, desde SAST mejorado hasta detección de vulnerabilidades complejas y remediación automática.

## AI Security Landscape

```
┌──────────────────────────────────────────────┐
│       AI EN SEGURIDAD DE CÓDIGO              │
├──────────────┬───────────────┬───────────────┤
│  DETECCIÓN   │  ANÁLISIS     │  REMEDIACIÓN  │
│              │               │               │
│ SAST + AI    │ Context-aware │ Auto-fix      │
│ Secret scan  │ Logic flaws   │ Patch suggest │
│ Dependency   │ Race cond.    │ Upgrade guide │
│ IaC scan     │ Business logic│ Policy as code│
└──────────────┴───────────────┴───────────────┘
```

## AI-Enhanced SAST

### Traditional vs AI SAST

| Aspecto | Traditional SAST | AI-enhanced SAST |
|---------|-----------------|-------------------|
| Detection method | Pattern matching | Context-aware analysis |
| False positive rate | 30-50% | 10-20% |
| Logic flaws | Cannot detect | Can detect |
| Custom rules | Manual configuration | Auto-learn |
| Remediation | Generic suggestions | Specific code fixes |
| Speed | Very fast | Fast |
| Training needed | Rule maintenance | Minimal |

### OWASP Top 10 Detection with AI

| Vulnerability | AI Detection Accuracy | Example |
|---------------|----------------------|---------|
| A01: Broken Access Control | 85% | IDOR, privilege escalation |
| A02: Cryptographic Failures | 90% | Weak algorithms, hardcoded keys |
| A03: Injection | 95% | SQL, NoSQL, LDAP, XSS |
| A04: Insecure Design | 70% | Missing security controls |
| A05: Security Misconfiguration | 85% | Default credentials, debug mode |
| A06: Vulnerable Components | 95% | Known CVEs in dependencies |
| A07: Auth Failures | 80% | Weak password policies |
| A08: Data Integrity Failures | 75% | Unsigned updates, insecure deserialization |
| A09: Logging Failures | 65% | Insufficient audit logging |
| A10: SSRF | 80% | Unvalidated URLs |

### Ejemplo: Detection + Auto-fix

```python
# ❌ Vulnerable code
def get_user(user_id):
    query = f"SELECT * FROM users WHERE id = {user_id}"  # SQL Injection
    return db.execute(query)

def hash_password(password):
    return md5(password.encode()).hexdigest()  # Weak hashing

API_KEY = "sk-abc123xyz789"  # Hardcoded secret

# ✅ AI-suggested fix
import os
import hashlib
from sqlalchemy import text

def get_user(user_id: int):
    query = text("SELECT * FROM users WHERE id = :user_id")
    return db.execute(query, {"user_id": user_id})

def hash_password(password: str) -> str:
    salt = os.urandom(32)
    key = hashlib.pbkdf2_hmac('sha256', password.encode(), salt, 100000)
    return salt.hex() + ':' + key.hex()

API_KEY = os.environ.get("API_KEY")  # Environment variable
```

## Secret Detection

### AI-enhanced secret scanning

```
Secret Detection Results:
──────────────────────────
File: .env.production
⚠ Line 12: Possible AWS key (AKIA...)
⚠ Line 15: Possible database URL with password
⚠ Line 23: Possible API key pattern

File: config/database.py
⚠ Line 8: Hardcoded database password
⚠ Line 12: API token in connection string

File: scripts/deploy.sh
⚠ Line 5: SSH private key path
⚠ Line 8: GPG passphrase in variable

Auto-fix available: 3/5
Manual review needed: 2/5
```

## Dependency Security

### AI-powered dependency analysis

```
Dependency Security Report:
────────────────────────────
Total dependencies: 156
├── Critical: 2 (immediate action)
├── High: 5 (within 1 week)
├── Medium: 12 (within 1 month)
├── Low: 23 (when convenient)
└── Secure: 114

AI Recommendations:
1. lodash@4.17.15 → Upgrade to 4.17.21 (prototype pollution)
2. express@4.17.0 → Upgrade to 4.18.2 (open redirect)
3. Remove unused: moment.js (use date-fns instead)
4. Replace: request (deprecated) → axios
```

## IaC Security Scanning

### Terraform/K8s security

```hcl
# ❌ AI-detected security issues

resource "aws_security_group" "web" {
  # ⚠️ CRITICAL: Allow all inbound
  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_s3_bucket" "data" {
  # ⚠️ HIGH: No encryption configured
  # ⚠️ HIGH: No versioning enabled
  # ⚠️ MEDIUM: No public access block
}

# ✅ AI-suggested fix
resource "aws_security_group" "web" {
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["10.0.0.0/8"]  # Internal only
  }
}

resource "aws_s3_bucket" "data" {
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "aws:kms"
      }
    }
  }
  versioning {
    enabled = true
  }
}
```

## Herramientas de AI Security

| Tool | Type | AI Features | Pricing |
|------|------|-------------|---------|
| Snyk Code | SAST | AI-enhanced detection | Free tier + paid |
| CodeRabbit | PR review | Security review | $12/mes |
| SonarQube AI | SAST/SCA | AI suggestions | Enterprise |
| GitHub Advanced Security | SAST/secret | Copilot integration | $49/committer |
| Checkmarx | SAST/SCA | AI remediation | Enterprise |
| Trivy + AI | Container/IaC | AI analysis | Open Source |

## Security Review Workflow

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Code     │───▶│ AI Scan  │───▶│ Triage   │───▶│ Fix      │
│  Commit   │    │ (auto)   │    │ (human)  │    │ (AI+human│
└──────────┘    └──────────┘    └──────────┘    └──────────┘
     │               │               │               │
     ▼               ▼               ▼               ▼
  Pre-commit     SAST + SCA      Prioritize     Auto-fix
  hook triggers  + secret scan   by severity    + verify
```

## Best Practices

1. **Shift-left security**: AI scanning en IDE, no solo en CI
2. **Context matters**: AI necesita entender el context de la app
3. **Continuous learning**: Entrenar AI en vulnerabilidades del domain
4. **Human review**: AI detecta, humano decide la remediación
5. **Policy as code**: Automatizar reglas de seguridad
6. **Audit trail**: Mantener registro de findings y fixes

## Relación con otros conceptos

- Análisis: [[../07-IA-Software/05-ai-code-analysis|Análisis de Código]]
- Calidad: [[../08-Calidad-Seguridad/README|Calidad y Seguridad]]
- DevOps: [[../09-DevOps-Infra/README|DevOps e Infraestructura]]
- Herramientas: [[../05-Herramientas/README|Herramientas]]
- SAST: [[../08-Calidad-Seguridad/README|Herramientas de seguridad]]
