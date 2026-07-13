---
title: "Quality Gates en CI/CD"
tags:
  - sf/calidad
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Calidad y Seguridad"
aliases:
  - "Quality Gates"
  - "Quality Checks"
related:
  - "[[01-qa-moderno|QA Moderno]]"
  - "[[02-testing-piramide|Pirámide de Testing]]"
  - "[[../09-DevOps/01-pipelines|Pipelines]]"
---

# Quality Gates en CI/CD

## ¿Qué es un Quality Gate?

Punto de verificación en el pipeline que debe cumplirse antes de avanzar a la siguiente etapa.

```
Code → [Quality Gate 1] → Build → [Quality Gate 2] → Test → [Quality Gate 3] → Deploy
         │                        │                        │
         │ Coverage > 80%         │ No critical issues     │ E2E pass
         │ No SAST errors         │ Build succeeds         │ DAST pass
```

## Tipos de Quality Gates

| Gate | Fase | Criterios |
|------|------|-----------|
| **Commit** | Pre-commit | Lint, format, secrets |
| **PR** | Code review | Tests, coverage, SAST |
| **Build** | CI | Compilation, unit tests |
| **Deploy** | CD | Integration tests, DAST |
| **Production** | Release | Performance, security |

## Criterios Comunes

### Code Quality

```yaml
quality_gates:
  coverage:
    metric: "line_coverage"
    threshold: 80
    type: "greater_than"

  duplications:
    metric: "duplicated_lines"
    threshold: 3
    type: "less_than"

  complexity:
    metric: "cyclomatic_complexity"
    threshold: 10
    type: "less_than"

  violations:
    metric: "new_violations"
    threshold: 0
    type: "equal"
```

### Security

```yaml
security_gates:
  sast:
    tool: semgrep
    fail_on:
      - severity: "ERROR"
      - confidence: "HIGH"

  sca:
    tool: snyk
    fail_on:
      - severity: "critical"
      - severity: "high"

  secrets:
    tool: gitleaks
    fail_on: any_detection
```

### Performance

```yaml
performance_gates:
  response_time:
    metric: "p95_latency"
    threshold: 500  # ms
    type: "less_than"

  error_rate:
    metric: "http_errors"
    threshold: 1  # percent
    type: "less_than"

  throughput:
    metric: "requests_per_second"
    threshold: 100
    type: "greater_than"
```

## Implementación con SonarQube

### Quality Gate Configuration

```yaml
# sonarqube-quality-gate.yml
name: "Custom Quality Gate"
conditions:
  - metric: new_coverage
    operator: LESS_THAN
    value: 80
    period: NEW_CODE

  - metric: new_duplicated_lines_density
    operator: GREATER_THAN
    value: 3
    period: NEW_CODE

  - metric: new_bugs
    operator: GREATER_THAN
    value: 0
    period: NEW_CODE

  - metric: new_vulnerabilities
    operator: GREATER_THAN
    value: 0
    period: NEW_CODE
```

### CI Integration

```yaml
# GitHub Actions: SonarQube
sonarqube:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
      with:
        fetch-depth: 0
    - uses: sonarqube-community/sonarqube-scan-action@master
      env:
        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
        SONAR_HOST_URL: ${{ secrets.SONAR_HOST_URL }}
    - uses: sonarqube-community/sonarqube-quality-gate-action@master
      timeout-minutes: 5
      env:
        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

## GitHub Status Checks

```yaml
# branch protection rules
branches:
  main:
    required_status_checks:
      strict: true
      contexts:
        - "coverage/patch"
        - "security/sast"
        - "security/sca"
        - "tests/unit"
        - "tests/integration"
    required_pull_request_reviews:
      required_approving_review_count: 1
      dismiss_stale_reviews: true
```

## Custom Gate Scripts

```bash
#!/bin/bash
# quality-gate.sh

set -e

echo "=== Quality Gate Checks ==="

# Check coverage
COVERAGE=$(cat coverage/coverage-summary.json | jq '.total.lines.pct')
if (( $(echo "$COVERAGE < 80" | bc -l) )); then
  echo "FAIL: Coverage $COVERAGE% < 80%"
  exit 1
fi
echo "PASS: Coverage $COVERAGE%"

# Check vulnerabilities
VULNS=$(snyk test --severity-threshold=high --json | jq '.vulnerabilities | length')
if [ "$VULNS" -gt 0 ]; then
  echo "FAIL: $VULNS high/critical vulnerabilities"
  exit 1
fi
echo "PASS: No high/critical vulnerabilities"

# Check code smells
ISSUES=$(sonar-scanner -q -Dsonar.qualitygate.wait=true | jq '.status')
if [ "$ISSUES" != "OK" ]; then
  echo "FAIL: Quality gate not met"
  exit 1
fi
echo "PASS: Quality gate met"

echo "=== All checks passed ==="
```

## Metrics Dashboard

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Code Coverage | 82% | 80% | ✅ |
| Duplications | 2.5% | 3% | ✅ |
| Bugs | 0 | 0 | ✅ |
| Vulnerabilities | 1 | 0 | ⚠️ |
| Security Hotspots | 3 | 0 | ⚠️ |
| Technical Debt | 2.5 days | 5 days | ✅ |

## Best Practices

| Practice | Descripción |
|----------|-------------|
| **Fail Fast** | Gate más rápido primero |
| **Automate** | Todo automatizado, no manual |
| **New Code Focus** | Evaluar solo código nuevo |
| **Progressive** | Gates más estrictos en producción |
| **Block/Warn** | Diferenciar errores de warnings |

## Ver también

- [[01-qa-moderno|QA Moderno]]
- [[02-testing-piramide|Pirámide de Testing]]
- [[03-automated-testing|Testing Automatizado]]
- [[05-security-testing|Security Testing]]
- [[12-defect-prevention|Prevención de Defectos]]
- [[../09-DevOps/01-pipelines|Pipelines CI/CD]]
