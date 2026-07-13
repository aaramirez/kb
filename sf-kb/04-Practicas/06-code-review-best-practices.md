---
title: "Buenas prácticas de Code Review"
tags:
  - sf/practicas
  - type/guia
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Prácticas y Estándares"
aliases:
  - "Code Review"
  - "PR Review"
  - "async review"
  - "review checklist"
related:
  -  "[[./02-clean-code|Clean Code]]"
  -  "[[./05-pair-programming|Pair Programming]]"
  -  "[[./09-git-conventions|Git conventions]]"
  -  "[[./11-definition-of-done|Definition of Done]]"
  -  "[[./01-coding-standards|Coding Standards]]"
  -  "[[../03-Procesos/continuous-improvement|Continuous improvement]]"
  -  "[[../05-Herramientas/gh-actions|GitHub actions]]"
  -  "[[../06-Metricas/code-quality-metrics|Code quality metrics]]"
  -  "../08-Calidad/READ-LINT|Calidad de código"
  -  "../01-Fundamentos/READ-OPEN|Open source contribution"

---

# Code Review Best Practices

## Introducción

Code reviews sistemáticos reducen bugs y mejoran la consistencia. Deben ser amigables, constructivos y orientados al aprendizaje.

## Async vs. Sync reviews

| Aspect | Async Review | Sync Review |
|--------|--------------|-------------|
| Modo | Autor escribe, revisor comenta | En vivo, pair style |
| Herramienta | GitHub/GitLab PRs | Live Share / Team zoom |
| Ventaja | Tiempo de reflexión | retroalimentación inmediata |
| Desventaja | Ciclo de retroalimentación largo | Sincronización de agendas |
| Uso | Cr, features, refactors | Bug fixing, diseño crítico |

## Review checklist

| Category | Items |
|----------|-------|
| Design | ¿Está diseñado correctamente? |
| Functionality | ¿Hace lo que debe? |
| Complexity | ¿Se puede simplificar? |
| Tests | ¿Son suficiente? |
| naming | ¿Sigue las convenciones? |
| Comments | ¿Son claros y necesarios? |
| Style | Coincide con guía de estilo? |
| Documentation | README y ADRs actualizados? |

## Automation

Usar CI/CD para errores básicos:

| Task | Tool |
|------|------|
| Linting | ruff / eslint / golangci |
| Formatting | prettier / black |
| Secrets scanning | git-secrets / trivy / detect-secrets |
| Dependency check | Dependabot |
| Metrics diff | SonarCloud / CodeClimate |

## How to review

### Good practices for the reviewer

- Comenta en tono constructivo. Propón alternativas.
- Diferencia entre "Idea" y "debe cambiarse".
- Usa markdown con estilo.
- Limita a 200-400 lines de código por review.
- Busca bugs, malas prácticas, complejidad innecesaria.

### Good practices for the author

- Haz commits pequeños.
- PR menor a 500 líneas.
- Aporta descripción detallada.
- Anticipate preguntas: ¿por qué esta implementación?
- Responde a todos los comentarios.

## Metrics for code review

| Metric | Target |
|--------|--------|
| Review turnaround | < 24 hrs |
| Lines per PR | < 400 |
| Comment resolution rate | 100% |
| Number of cycles before acceptance | < 3 |
| Author satisfaction | > 80% |

## Code review in remote teams

Same as [[05-pair-programming|Pair programming remote]].

## Conclusion

| Do | Don't |
|----|-------|
| Be kind | Be personal |
| Provide alternatives | just point out things |
| Ask questions | Assume knowledge |
| Focus on correctness | nitpick formatting |

Related: [[11-definition-of-done]] for DoD.
