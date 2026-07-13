---
title: "Estándares de Codificación"
tags:
  - sf/practicas
  - type/guia
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Prácticas y Estándares"
aliases:
  - "Coding Standards"
  - "Linting"
  - "EditorConfig"
related:
  - "[[../05-Herramientas/README|Herramientas]]"
  - "[[../01-Fundamentos/READ-CODE|Code conventions]]"
  - "[[../06-Metricas/README|Métricas de calidad]]"
  - "[[02-clean-code]]"
  - "[[09-git-conventions|Git Conventions]]"
  - "[[10-refactoring-continuo|Refactoring]]"
  - "[[08-api-design-standards|API Standards]]"
  - "[[11-definition-of-done|Definition of Done]]"
  - "[[../03-Procesos/continuous-improvement|Continuous improvement]]"
  - "[[../05-Herramientas/code-quality|Code Quality tools]]"
---

# Estándares de Codificación

## Introducción

Los coding standards son un conjunto acordado de reglas que todo código dentro del proyecto debe seguir. Garantizan uniformidad y facilitan code reviews.

## Naming conventions

| Element | Convention | Example |
|---------|------------|---------|
| Classes | PascalCase | `Customer` |
| Methods | camelCase | `getUser()` |
| Variables | camelCase | `totalAmount` |
| Constants | UPPER_SNAKE | `MAX_RETRIES` |
| private fields | `_likeThis` | `_cache` |

## Formatting con EditorConfig

El archivo `.editorconfig` fuerza una indentación, charset y final de línea consistentes:

```editorconfig
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.ts]
indent_size = 2

[*.{json,yml,yaml}]
indent_size = 2
```

## Linters y Formatters

Usar herramientas que automaticen las reglas:

| Language | Linter | Formatter |
|----------|--------|-----------|
| Python | ruff, pylint | black |
| TypeScript | eslint | prettier |
| Go | golangci-lint | gofmt |

Configura linters en CI, no solo local.

```
workflow_dispatch: (ci-validate)
```

## Commits ligados a estilos

Los commits deberían pasar checks de linting. Referenciar convenciones en [[09-git-conventions]].

## Reglas estructurales

- Una responsabilidad por fichero
- < 200 líneas en métodos
- < 50 líneas en funciones
- Prohibir `eval` y `exec`
- Prohibir imports circulares

## Temas adicionales

- Excepciones: responder en todos los catch
- Laverages de lenguaje: no reinventar herramientas
- Si se añade dependencia externa, registrar razón y aprobar

## Integración en CI

Todo PR falla si el linting no pasa:

```yaml
- name: Lint
  run: ruff check .
```

Relacionado: [[11-definition-of-done|DoD checklist]].

## Herramientas recomendadas

| Tool | Purpose |
|------|---------|
| EditorCofig | cross-editor formatting |
| Prettier | universal formatter |
| Eslint | TS/JS linter |
| Ruff | Python linter |
| golangci-lint | Go linter |

## Más información

- [[../06-Metricas/code-quality-metrics|Métricas de calidad de código]]
- [[../03-Procesos/workflow-git-hooks|Git hooks]]
- [[02-clean-code|Clean Code principles]]
