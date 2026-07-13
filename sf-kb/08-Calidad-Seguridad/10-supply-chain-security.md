---
title: "Seguridad de Cadena de Suministro"
tags:
  - sf/calidad
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Calidad y Seguridad"
aliases:
  - "Supply Chain Security"
  - "SBOM SLSA"
related:
  - "[[07-devsecops|DevSecOps]]"
  - "[[09-zero-trust|Zero Trust]]"
  - "[[06-owasp-top10|OWASP Top 10]]"
---

# Seguridad de Cadena de Suministro

## Amenazas Comunes

| Amenaza | Descripción | Ejemplo |
|---------|-------------|---------|
| **Dependency Confusion** | Paquetes maliciosos en repositorios públicos | event-stream incident |
| **Typosquatting** | Paquetes con nombres similares | lodash-es vs lodash |
| **Compromised Maintainer** | Cuenta de mantenedor comprometida | ua-parser-js |
| **Build Compromise** | Sistema de build comprometido | SolarWinds |
| **Source Code Tampering** | Modificación del código fuente | codecov breach |

## SBOM (Software Bill of Materials)

### ¿Qué es un SBOM?

Inventario completo de componentes de software, dependencias y relaciones.

```json
{
  "spdxVersion": "SPDX-2.3",
  "dataLicense": "CC0-1.0",
  "name": "my-application",
  "packages": [
    {
      "name": "lodash",
      "version": "4.17.21",
      "supplier": "Organization: lodash",
      "downloadLocation": "https://registry.npmjs.org/lodash",
      "checksums": [
        {
          "algorithm": "SHA256",
          "value": "..."
        }
      ]
    }
  ]
}
```

### Herramientas SBOM

| Herramienta | Lenguaje | Formato |
|-------------|----------|---------|
| **Syft** | Multi | SPDX, CycloneDX |
| **CycloneDX** | Multi | CycloneDX |
| **FOSSA** | Multi | SPDX |
| **Tern** | Containers | SPDX |

### Generar SBOM

```bash
# Syft: Generar SBOM
syft scan dir:. -o spdx > sbom.spdx.json
syft scan dir:. -o cyclonedx-json > sbom.cdx.json

# Docker image SBOM
syft scan docker:myapp:latest -o spdx > sbom.spdx.json

# Escanear SBOM
grype sbom:sbom.spdx.json
```

## SLSA (Supply-chain Levels for Software Artifacts)

### Niveles

| Level | Requisito | Protección |
|-------|-----------|------------|
| **L1** | Build process documented | Provenance |
| **L2** | Hosted build, signed provenance | Tampering |
| **L3** | Hardened builds, non-falsifiable | Insider threat |
| **L4** | Reproducible builds, hermetic | Compromise |

### Provenance

```json
{
  "predicateType": "https://slsa.dev/provenance/v0.2",
  "predicate": {
    "builder": {
      "id": "https://github.com/actions/runner"
    },
    "buildType": "https://github.com/actions/workflow",
    "invocation": {
      "configSource": {
        "uri": "git+https://github.com/org/repo@refs/heads/main",
        "digest": {
          "sha1": "abc123..."
        }
      }
    },
    "metadata": {
      "buildInvocationId": "https://github.com/org/repo/actions/runs/123",
      "buildStartedOn": "2026-01-13T00:00:00Z",
      "completeness": {
        "parameters": true,
        "environment": true,
        "materials": true
      },
      "reproducible": true
    }
  }
}
```

## Sigstore / Cosign

### Firmar Contenedores

```bash
# Cosign: Firma de contenedores
cosign sign --key cosign.key myregistry/myapp:latest

# Verificar firma
cosign verify --key cosign.pub myregistry/myapp:latest

# Firma con keyless (OIDC)
cosign sign --identity-token $OIDC_TOKEN myregistry/myapp:latest
```

### Software Signing Pipeline

```yaml
# GitHub Actions: Sign artifacts
sign-artifacts:
  runs-on: ubuntu-latest
  permissions:
    id-token: write
    contents: write
  steps:
    - uses: actions/checkout@v4
    - uses: sigstore/cosign-installer@v3

    - name: Build and push
      run: |
        docker build -t myregistry/app:${{ github.sha }} .
        docker push myregistry/app:${{ github.sha }}

    - name: Sign container
      run: cosign sign myregistry/app:${{ github.sha }}

    - name: Attach SBOM
      run: |
        syft scan docker:myregistry/app:${{ github.sha }} \
          -o spdx > sbom.spdx.json
        cosign attach sbom \
          --sbom sbom.spdx.json \
          myregistry/app:${{ github.sha }}
```

## Dependabot / Renovate

### Dependabot Configuration

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
      day: "monday"
    open-pull-requests-limit: 10
    reviewers:
      - "security-team"
    labels:
      - "dependencies"
      - "security"
```

### Renovate Configuration

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": [
    "config:recommended",
    ":security"
  ],
  "vulnerabilityAlerts": {
    "enabled": true,
    "labels": ["security"]
  },
  "packageRules": [
    {
      "matchUpdateTypes": ["patch"],
      "automerge": true
    }
  ]
}
```

## Container Security

### Image Signing Verification

```yaml
# Kyverno: Enforce image signatures
apiVersion: kyverno.io/v1
kind: ClusterPolicy
metadata:
  name: verify-image-signatures
spec:
  validationFailureAction: Enforce
  rules:
    - name: check-image-signature
      match:
        any:
          - resources:
              kinds:
                - Pod
      verifyImages:
        - imageReferences:
            - "myregistry/*"
          attestors:
            - entries:
                - keys:
                    publicKeys: |-
                      -----BEGIN PUBLIC KEY-----
                      ...
                      -----END PUBLIC KEY-----
```

## Dependency Review

```yaml
# GitHub: Dependency Review
name: Dependency Review
on: pull_request
jobs:
  dependency-review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/dependency-review-action@v3
        with:
          fail-on-severity: high
          deny-licenses: GPL-3.0, AGPL-3.0
```

## Ver también

- [[07-devsecops|DevSecOps]]
- [[09-zero-trust|Zero Trust]]
- [[05-security-testing|Security Testing]]
- [[06-owasp-top10|OWASP Top 10]]
- [[08-compliance-regulaciones|Compliance]]
