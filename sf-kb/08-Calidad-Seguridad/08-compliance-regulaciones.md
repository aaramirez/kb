---
title: "Compliance y Regulaciones"
tags:
  - sf/calidad
  - type/guia
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Calidad y Seguridad"
aliases:
  - "Regulatory Compliance"
  - "Cumplimiento Normativo"
related:
  - "[[07-devsecops|DevSecOps]]"
  - "[[09-zero-trust|Zero Trust]]"
  - "[[../01-Fundamentos/01-que-es-devops|¿Qué es DevOps?]]"
---

# Compliance y Regulaciones

## Principales Frameworks

| Framework | Alcance | Multas | Requisitos principales |
|-----------|---------|--------|------------------------|
| **GDPR** | EU | Hasta 4% revenue | Protección datos personales |
| **SOC 2** | Global | Reputacional | Trust service criteria |
| **HIPAA** | USA (salud) | Hasta $1.5M/año | Protected health info |
| **PCI-DSS** | Global (pagos) | $5K-100K/mes | Card data security |
| **ISO 27001** | Global | — | ISMS framework |

## GDPR (General Data Protection Regulation)

### Principios Clave

| Principio | Descripción | Implementación |
|-----------|-------------|----------------|
| **Lawfulness** | Base legal para procesamiento | Consent, contract |
| **Purpose Limitation** | Solo para fines específicos | Data catalog |
| **Data Minimization** | Solo datos necesarios | Field validation |
| **Accuracy** | Datos precisos y actualizados | Update mechanisms |
| **Storage Limitation** | No más del necesario | Retention policies |
| **Integrity** | Seguridad adecuada | Encryption, access control |
| **Accountability** | Demostrar compliance | Documentation |

### Derechos del Usuario

```python
# GDPR: Right to be forgotten
def delete_user_data(user_id):
    # Eliminar de todas las fuentes
    db.users.delete(user_id)
    cache.delete(f"user:{user_id}")
    search.index.delete(user_id)
    s3.delete(f"avatars/{user_id}")

    # Registrar eliminación
    audit_log.record("user_deleted", user_id)
    return {"status": "deleted", "retention": "30_days_backup"}
```

### Technical Implementation

```yaml
# GDPR compliance checklist
gdpr:
  data_inventory:
    - user_email
    - user_name
    - ip_address
    - cookies
  consent:
    - cookie_consent_banner
    - privacy_policy
    - opt_in_required
  security:
    - encryption_at_rest: AES-256
    - encryption_in_transit: TLS 1.3
    - access_logging: enabled
    - data_masking: enabled
  rights:
    - data_export: api_endpoint
    - data_deletion: api_endpoint
    - consent_withdrawal: api_endpoint
```

## SOC 2

### Trust Service Criteria

| Criterio | Descripción | Controles |
|----------|-------------|-----------|
| **Security** | Protección contra acceso no autorizado | Firewalls, MFA |
| **Availability** | Operación del sistema | Uptime SLAs |
| **Processing Integrity** | Procesamiento correcto | QA, monitoring |
| **Confidentiality** | Restricción de datos | Encryption |
| **Privacy** | Uso de información personal | GDPR-like |

### Evidence Collection

```yaml
# SOC 2 evidence automation
evidence:
  access_reviews:
    frequency: quarterly
    tool: okta
    output: access-review-report.pdf
  change_management:
    tool: jira
    queries:
      - "approved_changes_last_quarter"
      - "emergency_changes"
  vulnerability_scans:
    tool: snyk
    frequency: weekly
    output: vulnerability-report.json
  disaster_recovery:
    tool: aws-backup
    frequency: monthly
    output: dr-test-results.pdf
```

## HIPAA

### Protected Health Information (PHI)

| Tipo | Ejemplo | Requisito |
|------|---------|-----------|
| **Identifiers** | Nombre, SSN | Encryption |
| **Health Data** | Diagnósticos | Access control |
| **Financial** | Seguro médico | Audit logging |
| **Technical** | Device identifiers | De-identification |

### Implementation

```python
# HIPAA: Audit logging
import logging
from datetime import datetime

hipaa_logger = logging.getLogger('hipaa_audit')

def access_phi(user_id, patient_id, action):
    hipaa_logger.info({
        'timestamp': datetime.utcnow().isoformat(),
        'user_id': user_id,
        'patient_id': patient_id,
        'action': action,  # VIEW, CREATE, MODIFY, DELETE
        'ip_address': get_client_ip(),
        'justification': get_justification()
    })
```

## PCI-DSS

### Requirements

| Requirement | Descripción |
|-------------|-------------|
| **Network Security** | Firewalls, segmentation |
| **Data Protection** | Encryption, masking |
| **Vulnerability Management** | Regular scans, patching |
| **Access Control** | Need-to-know, MFA |
| **Monitoring** | Logging, IDS |
| **Policy** | Security policies |

### Tokenization Example

```python
# PCI: Tokenización de tarjetas
import stripe

def process_payment(card_number, amount):
    # Nunca almacenar el número completo
    token = stripe.Token.create(
        card={
            'number': card_number,
            'exp_month': exp_month,
            'exp_year': exp_year,
            'cvc': cvc,
        },
    )
    # Usar token, no el número real
    charge = stripe.Charge.create(
        amount=amount,
        currency='usd',
        source=token.id,
    )
    return charge.id
```

## ISO 27001

### ISMS Framework

```
Plan → Do → Check → Act

Plan:   Establish ISMS policy and objectives
Do:     Implement and operate ISMS
Check:  Monitor and review ISMS
Act:    Maintain and improve ISMS
```

### Controls (Annex A)

| Category | Controls |
|----------|----------|
| **A.5** | Information security policies |
| **A.6** | Organization of information security |
| **A.7** | Human resource security |
| **A.8** | Asset management |
| **A.9** | Access control |
| **A.10** | Cryptography |
| **A.11** | Physical security |
| **A.12** | Operations security |
| **A.13** | Communications security |
| **A.14** | System acquisition |
| **A.15** | Supplier relationships |
| **A.16** | Incident management |
| **A.17** | Business continuity |
| **A.18** | Compliance |

## Compliance Automation

```yaml
# Open Policy Agent (OPA)
# policy.rego
package main

default allow = false

allow {
    input.method == "GET"
    input.path == ["api", "users"]
    input.user.role == "admin"
}

# Enforce encryption
allow {
    input.resource.encrypted == true
}
```

## Ver también

- [[07-devsecops|DevSecOps]]
- [[09-zero-trust|Zero Trust]]
- [[05-security-testing|Security Testing]]
- [[06-owasp-top10|OWASP Top 10]]
- [[10-supply-chain-security|Supply Chain Security]]
