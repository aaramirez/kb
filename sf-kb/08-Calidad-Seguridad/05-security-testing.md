---
title: "Security Testing"
tags:
  - sf/calidad
  - type/herramienta
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Calidad y Seguridad"
aliases:
  - "SAST DAST SCA"
  - "Seguridad en Testing"
related:
  - "[[06-owasp-top10|OWASP Top 10]]"
  - "[[07-devsecops|DevSecOps]]"
  - "[[../04-Practicas/03-code-review|Code Review]]"
---

# Security Testing

## Tipos de Security Testing

| Tipo | Nombre Completo | Fase | Velocidad | Cobertura |
|------|-----------------|------|-----------|-----------|
| **SAST** | Static Application Security Testing | Desarrollo | Rápida | Código |
| **DAST** | Dynamic Application Security Testing | Runtime | Lenta | Aplicación |
| **SCA** | Software Composition Analysis | Build | Media | Dependencias |
| **IAST** | Interactive AST | Runtime | Media | Código + Runtime |
| **RASP** | Runtime Application Self-Protection | Runtime | Lenta | Protección activa |

## SAST (Static Analysis)

### Herramientas

| Herramienta | Lenguaje | Open Source | Integración |
|-------------|----------|-------------|-------------|
| **SonarQube** | Multi | Community | CI/CD |
| **Semgrep** | Multi | Sí | CI/CD, IDE |
| **CodeQL** | Multi | Sí | GitHub |
| **Checkmarx** | Multi | No | Enterprise |

### Semgrep
```yaml
# .semgrep.yml
rules:
  - id: sql-injection
    patterns:
      - pattern: |
          $QUERY = "SELECT * FROM users WHERE id = " + $ID
    message: "Potential SQL injection"
    languages: [python]
    severity: ERROR

  - id: hardcoded-secret
    pattern: |
      password = "..."
    message: "Hardcoded password detected"
    languages: [python]
    severity: WARNING
```

```bash
# Uso
semgrep --config=auto .
semgrep --config=p/owasp-top-ten .
```

### SonarQube
```properties
# sonar-project.properties
sonar.projectKey=my-project
sonar.sources=src
sonar.host.url=http://localhost:9000
sonar.qualitygate.wait=true

# Quality Gate
sonar.qualitygate.conditions=coverage > 80,duplicated_lines < 3
```

## DAST (Dynamic Analysis)

### Herramientas

| Herramienta | Tipo | Costo | Curva Aprendizaje |
|-------------|------|-------|-------------------|
| **OWASP ZAP** | Open Source | Gratis | Media |
| **Burp Suite** | Comercial | $$ | Baja |
| **Nikto** | Open Source | Gratis | Alta |
| **Nuclei** | Open Source | Gratis | Media |

### OWASP ZAP
```bash
# Docker scan
docker run -t ghcr.io/zaproxy/zaproxy:stable \
  zap-full-scan.py \
  -t https://example.com \
  -r report.html

# API scan
docker run -t ghcr.io/zaproxy/zaproxy:stable \
  zap-api-scan.py \
  -t https://example.com/openapi.json \
  -f openapi \
  -r api-report.html
```

### ZAP en CI/CD
```yaml
# GitHub Actions
security-scan:
  runs-on: ubuntu-latest
  steps:
    - name: ZAP Baseline Scan
      uses: zaproxy/action-baseline@v0.12.0
      with:
        target: https://staging.example.com
        rules_file_name: 'zap-rules.tsv'
        cmd_options: '-a'
```

## SCA (Software Composition Analysis)

### Herramientas

| Herramienta | Cobertura | Integración | Costo |
|-------------|-----------|-------------|-------|
| **Snyk** | Dependencies | CI/CD, IDE | Freemium |
| **Dependabot** | GitHub deps | GitHub | Gratis |
| **OWASP Dep-Check** | CVEs | CI/CD | Gratis |
| **Trivy** | Containers | CI/CD | Gratis |

### Snyk
```bash
# Instalación
npm install -g snyk

# Escaneo
snyk test
snyk monitor

# Container scan
snyk container test myapp:latest
```

### Dependabot
```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
  - package-ecosystem: "docker"
    directory: "/"
    schedule:
      interval: "weekly"
```

## Integración en Pipeline

```yaml
# Pipeline completo de security testing
stages:
  - name: SAST
    script:
      - semgrep --config=auto .
      - sonar-scanner
    allow_failure: false

  - name: SCA
    script:
      - snyk test
      - trivy fs .
    allow_failure: false

  - name: DAST
    script:
      - docker run -t zaproxy/zaproxy zap-full-scan.py -t $STAGING_URL
    allow_failure: true
    when: manual
```

## Vulnerability Management

| Severidad | SLA Fix | Ejemplo |
|-----------|---------|---------|
| Critical | 24 horas | SQL Injection |
| High | 1 semana | XSS |
| Medium | 1 mes | Information Disclosure |
| Low | Next release | Minor issues |

## Ver también

- [[06-owasp-top10|OWASP Top 10]]
- [[07-devsecops|DevSecOps]]
- [[08-compliance-regulaciones|Compliance]]
- [[09-zero-trust|Zero Trust]]
- [[10-supply-chain-security|Supply Chain Security]]
