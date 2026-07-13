---
title: "Zero Trust en Desarrollo"
tags:
  - sf/calidad
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Calidad y Seguridad"
aliases:
  - "Zero Trust Architecture"
  - "Sin Perímetro"
related:
  - "[[07-devsecops|DevSecOps]]"
  - "[[10-supply-chain-security|Supply Chain Security]]"
  - "[[05-security-testing|Security Testing]]"
---

# Zero Trust en Desarrollo

## Principles

| Principle | Descripción |
|-----------|-------------|
| **Never Trust, Always Verify** | Verificar cada request explícitamente |
| **Least Privilege** | Acceso mínimo necesario |
| **Assume Breach** | Asumir que la red está comprometida |
| **Verify Explicitly** | Autenticar y autorizar cada request |

## Arquitectura Zero Trust

```
Traditional:                    Zero Trust:
┌─────────────────────┐        ┌─────────────────────┐
│   Corporate Network  │        │     Internet        │
│  ┌───────────────┐  │        │  ┌───────────────┐  │
│  │    Firewall    │  │        │  │   Identity    │  │
│  │      │        │  │        │  │   Provider    │  │
│  │  ┌───┴───┐    │  │        │  └───────┬───────┘  │
│  │  │ Apps  │    │  │        │          │          │
│  │  └───────┘    │  │        │  ┌───────┴───────┐  │
│  └───────────────┘  │        │  │   Policy     │  │
└─────────────────────┘        │  │   Engine     │  │
                               │  └───────┬───────┘  │
                               │          │          │
                               │  ┌───────┴───────┐  │
                               │  │   Resource    │  │
                               │  └───────────────┘  │
                               └─────────────────────┘
```

## Componentes

### 1. Identity Provider (IdP)

```yaml
# OIDC Configuration
identity:
  provider: keycloak
  protocols:
    - oidc
    - saml
  mfa:
    required: true
    methods:
      - totp
      - webauthn
  session:
    max_duration: 8h
    idle_timeout: 30m
```

### 2. Policy Engine

```rego
# OPA Policy
package authz

default allow = false

# Allow if authenticated and authorized
allow {
    input.method == "GET"
    input.path == ["api", "resources"]
    token.valid
    token.payload.role == "reader"
}

allow {
    input.method == "POST"
    input.path == ["api", "resources"]
    token.valid
    token.payload.role == "writer"
}

# Verify MFA
allow {
    token.payload.mfa_verified == true
}
```

### 3. Service Mesh (mTLS)

```yaml
# Istio: AuthorizationPolicy
apiVersion: security.istio.io/v1
kind: AuthorizationPolicy
metadata:
  name: allow-frontend-to-backend
spec:
  selector:
    matchLabels:
      app: backend
  action: ALLOW
  rules:
    - from:
        - source:
            principals: ["cluster.local/ns/default/sa/frontend"]
      to:
        - operation:
            methods: ["GET", "POST"]
            paths: ["/api/*"]
```

## mTLS Implementation

```yaml
# Istio PeerAuthentication
apiVersion: security.istio.io/v1
kind: PeerAuthentication
metadata:
  name: default
  namespace: istio-system
spec:
  mtls:
    mode: STRICT  # Force mTLS for all services
```

### Certificate Management

```bash
# Cert Manager for automatic certificates
kubectl apply -f - <<EOF
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: app-cert
  namespace: default
spec:
  secretName: app-tls
  issuerRef:
    name: letsencrypt-prod
    kind: ClusterIssuer
  dnsNames:
    - app.example.com
EOF
```

## Implementation Phases

### Phase 1: Identity
```yaml
# Implement MFA
mfa:
  methods:
    - totp: Google Authenticator
    - webauthn: Hardware keys
  enforcement:
    - admin_interfaces: required
    - api_access: required
    - standard_users: optional
```

### Phase 2: Device Trust
```yaml
# Device compliance check
device_trust:
  requirements:
    - os_version: latest
    - disk_encryption: enabled
    - antivirus: active
    - firewall: enabled
  non_compliant_action: block
```

### Phase 3: Network Microsegmentation
```yaml
# Network policies (Kubernetes)
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: backend-policy
spec:
  podSelector:
    matchLabels:
      app: backend
  policyTypes:
    - Ingress
    - Egress
  ingress:
    - from:
        - podSelector:
            matchLabels:
              app: frontend
      ports:
        - protocol: TCP
          port: 8080
```

### Phase 4: Application Access
```yaml
# Proxy-based access
zero_trust_proxy:
  provider: cloudflare-access
  policies:
    - name: admin-access
      include:
        - email: admin@example.com
        - group: admin-group
      require:
        - mfa
        - device_posture: compliant
```

## Zero Trust for Development

| Component | Traditional | Zero Trust |
|-----------|-------------|------------|
| **Code Access** | VPN to repo | Identity-based access |
| **Secrets** | Environment variables | Vault with dynamic secrets |
| **CI/CD** | Shared runners | Isolated, authenticated |
| **Deployments** | SSH + keys | Signed commits + OIDC |
| **Monitoring** | Centralized logs | Distributed tracing |

## Dynamic Secrets

```python
# Vault: Dynamic database credentials
import hvac

client = hvac.Client(url='https://vault.example.com')

# Generate dynamic credentials
secret = client.secrets.database.generate_credentials(
    name='my-role'
)

# Secret expires automatically
username = secret['username']  # v-user-abc123
password = secret['password']  # A1b2C3d4E5
```

## Ver también

- [[07-devsecops|DevSecOps]]
- [[10-supply-chain-security|Supply Chain Security]]
- [[08-compliance-regulaciones|Compliance]]
- [[06-owasp-top10|OWASP Top 10]]
- [[../09-DevOps/01-pipelines|Pipelines]]
