---
title: "Documentación técnica"
tags:
  - sf/practicas
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Prácticas y Estándares"
aliases:
  - "ADR"
  - "RFC"
  - "Technical documentation"
  - "Architecture docs"
  - "API docs"
related:
  -  "[[./02-clean-code|Clean Code]]"
  -  "./01-coding-standards|Coding standards"
  -  "./08-api-design-standards|API Standards"
  -  "./09-git-conventions|Git Conventions"
  -  "./11-definition-of-done|Definition of Done"
  -  "../03-Procesos/continuous-improvement|Continuous improvement"
  -  "../05-Herramientas/documentation-tools|Documentation tools"
  -  "../06-Metricas/code-quality-metrics|Code quality metrics"
  -  "../08-Calidad/READ-LINT|Calidad de código"
  -  "../01-Fundamentos/tech-communication|Technical communications"
  -  "./06-code-review-best-practices|Code Review"

---

# Documentación técnica

## Propósito

La documentación técnica sirve como fuente de verdad para decisiones de diseño, API, arquitectura y evolución del sistema.

## Tipos de documentos

| Tipo | Descripción |
|------|-------------|
| **ADR** | Registro de Decisión de Arquitectura |
| **RFC** | Request For Comments (propuesta a revisión) |
| **README** | Guía de inicio rápido |
| **API Reference** | Documentación generada de código |
| **Architecture docs** | C4 / 4+1 views |

## ADR

Un ADR captura una decisión significativa de arquitectura, el contexto y la consecuencia.

### Template

```markdown
# ADR NNNN - Title

## Status
Accepted | Proposed | Superseded

## Context
What is the issue that we're seeing that is motivating this decision?

## Decision
What is the change that we're proposing?

## Consequences
What becomes easier or more difficult?
```

### ADR lifecycle

1. Draft
2. Proposed
3. Accepted
4. Superseded

An ADR is never deleted, only superseded.

## RFC

Un RFC es un proceso de propuesta. El que la escribe no tiene por qué implementarla.

| Phase | Description |
|-------|-------------|
| Draft | Inicial del autor |
| Review | Equipo comenta y discute |
| Decision | Se acepta, rechaza, o pospone |
| final | RF closes |

## README best practices

- Título y estado (production / beta / archived)
- Quick start: cómo instalar, configurar, ejecutar.
- Links a documentación larga (wiki / docsify / storybook)
- Badges: CI status, coverage, license

## API Reference

Generar documentación directamente del código:

| Tool | Language |
|------|----------|
| Swagger/OpenAPI | REST |
| TypeSpec | API-first |
| godoc | Go |
| Javadoc | Java |
| sphinx | Python |

Ver [[08-api-design-standards]].

## Architecture docs

Recomendado: C4 model (estatic diagrams as code).

- **Context**: diagrama de sistemas
- **Container**: aplicación y servicios
- **Component**: descomposición interna
- **Code**: (
    lectura bajo demanda)

tools: Structurizr, PlantUML.

## Documentation as code

- documentación en iposición a código (`.md` en el repo)
- Se versiona junto al código
- Se actualiza en el mismo PR que el cambio
- Se despliega a doc hub / docsify / vitepress

## Audience

| Audience | what they need |
|----------|---------------|
| Developers | API docs, ADRs, RFCs |
| QA | Test plans, environment docs |
| Ops | Runbooks, arch docs |
| Product | Vision docs, RFCs |

## Related pages

- [[08-api-design-standards|API Standards]]
- [[./09-git-conventions|Git conventions]]
- [[./06-code-review-best-practices|Code Review]]
- [[./11-definition-of-done|DoD]]
