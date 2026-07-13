---
title: "Proceso de Code Review"
tags:
  - sf/procesos
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "Code Review"
  - "Pull Request Review"
  - "Peer Review"
related:
  - "[[../03-Procesos/06-trunk-based-development|Trunk-Based Dev]]"
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD]]"
  - "[[../04-Practicas/README|Prácticas de Calidad]]"
  - "[[../01-Fundamentos/04-principios-ingenieria-software|Principios SOLID]]"
  - "[[../06-Metricas/README|Métricas]]"
---

# Proceso de Code Review

El **Code Review** es el proceso donde otros desarrolladores revisan el código antes de integrarlo, buscando calidad, corrección y mejora compartida de conocimiento.

## ¿Por qué hacer Code Review?

| Beneficio | Descripción |
|-----------|-------------|
| **Calidad** | Detectar bugs antes de llegar a producción |
| **Conocimiento** | Compartir contexto y aprendizaje |
| **Consistencia** | Mantener estándares de código |
| **Seguridad** | Identificar vulnerabilidades |
| **Mantenibilidad** | Código más legible y comprensible |

## Flujo del Code Review

```
Developer         Reviewer            CI/CD
    │                │                  │
    ├─ Crear PR ────→│                  │
    │                │                  │
    │  ◄── Comentarios ─┤              │
    │                │                  │
    ├─ Fix commits ──→│                  │
    │                │                  │
    │  ◄── Approved ───┤               │
    │                │                  │
    ├── Merge ─────────────────────────→│
    │                │                  │
    └───────────────────────────────────┤
```

### Paso a paso

1. **Autor crea PR** con descripción clara
2. **CI ejecuta** tests y quality checks
3. **Reviewer asignado** revisa en < 1 hora
4. **Feedback inline** con sugerencias concretas
5. **Autor resuelve** comentarios
6. **Approved** y merge automático
7. **Branch eliminada** tras merge

## El autor del PR

### Antes de abrir el PR

- [ ] Código compila sin errores
- [ ] Tests pasan localmente
- [ ] No hay TODOs sin resolver
- [ ] Branch está actualizada con main

### Descripción del PR

```markdown
## What
- Describir qué cambia

## Why
- Razón del cambio (link a issue/ticket)

## How
- Approach técnico elegido

## Testing
- Qué tests se agregaron/modificaron

## Screenshots
- Si hay cambio visual
```

### Respondiendo a feedback

- **No tomar personal** — el objetivo es mejorar el código
- **Explicar decisiones** — por qué se eligió ese approach
- **Aceptar sugerencias** — cuando tiene sentido
- **Discutir con argumentos** — no con autoridad

## El reviewer

### Checklists de review

#### Funcionalidad
- [ ] ¿El código hace lo que se propone?
- [ ] ¿Los edge cases están manejados?
- [ ] ¿La lógica es correcta?
- [ ] ¿Los tests cubren los escenarios principales?

#### Código
- [ ] ¿Es legible y comprensible?
- [ ] ¿Sigue los principios [[../01-Fundamentos/04-principios-ingenieria-software|SOLID]]?
- [ ] ¿Nombres descriptivos y consistentes?
- [ ] ¿No hay duplicación significativa?
- [ ] ¿Manejo de errores apropiado?

#### Seguridad
- [ ] ¿Hay inputs sin sanitizar?
- [ ] ¿Secrets hardcodeados?
- [ ] ¿SQL injection, XSS, CSRF?
- [ ] ¿Autenticación y autorización correctas?

#### Performance
- [ ] ¿Queries N+1?
- [ ] ¿Memoria suficiente?
- [ ] ¿Locking adecuado?
- [ ] ¿Algoritmos eficientes?

#### Mantenibilidad
- [ ] ¿Se puede entender sin contexto extra?
- [ ] ¿Documentación actualizada?
- [ ] ¿Feature flags para features nuevas?
- [ ] ¿Backward compatible?

## Métricas de Code Review

| Métrica | Objetivo | Fórmula |
|---------|----------|---------|
| **Review Time** | < 1 hora | Merge time − PR creation |
| **Review Depth** | > 4 comentarios | Comentarios / reviewer |
| **Approval Rate** | > 80% first pass | Approved / total PRs |
| **Defect Density** | < 1 bug / 100 LOC | Bugs found / LOC reviewed |

### SLAs recomendados

| Tamaño PR | Tiempo máximo de review |
|-----------|------------------------|
| < 100 LOC | 30 minutos |
| 100-400 LOC | 1 hora |
| 400-1000 LOC | 2 horas |
| > 1000 LOC | **Rechazar** — dividir en PRs más pequeños |

## Herramientas de automatización

| Herramienta | Propósito |
|-------------|-----------|
| **ESLint / RuboCop** | Linting automático |
| **SonarQube** | Quality gate, bugs, code smells |
| **Snyk / Trivy** | Vulnerability scanning |
| **Codecov** | Cobertura de código |
| **Danger.js** | Checks customizados en PR |
| **GitHub CODEOWNERS** | Auto-asignación de reviewers |

## Anti-patterns

| Anti-pattern | Problema | Solución |
|-------------|----------|----------|
| **Rubber stamping** | Aprobar sin revisar | Checklists, SLAs |
| **Nitpicking excesivo** | PRs retrasados | Priorizar bugs > style |
| **Review masivo** | PRs de > 1000 LOC | Split en PRs pequeños |
| **Solo 1 reviewer** | Knowledge silo | Mínimo 2 reviewers |
| **Review post-merge** | Sin valor real | Review pre-merge obligatorio |

## Code Review en la práctica

### Pair Review (para código crítico)

- 2 personas revisan juntas en tiempo real
- Ideal para: seguridad, arquitectura, cambios complejos
- Herramientas: VS Code Live Share, Tuple

### Async Review (para código routine)

- Revisión asíncrona vía PR
- Ideal para: features, bug fixes, refactors
- SLA: < 1 hora para PRs pequeños

## Relación con otros conceptos

- [[../03-Procesos/06-trunk-based-development|TBD]] requiere reviews rápidos
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD]] ejecuta checks automáticos
- [[../01-Fundamentos/04-principios-ingenieria-software|SOLID]] guía qué buscar en review
- [[../04-Practicas/README|Prácticas]] complementan con pair programming
- [[../06-Metricas/README|Métricas]] miden la efectividad del proceso
