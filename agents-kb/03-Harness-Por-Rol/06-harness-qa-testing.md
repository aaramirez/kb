---
title: "Harness: QA / Testing"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "QA Harness"
  - "Quality Assurance"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[07-harness-agilidad-pmo]]"
---

# Harness: QA / Testing

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | Especialista QA, Tester, Automation Engineer |
| **Enfoque** | Calidad, testing, automatización, reportes |
| **Volumen** | Alto de interacciones |
| **Sensibilidad** | Media (acceso a datos de prueba) |

## Harness Diseñado

```yaml
model: claude
mode: primary
permission:
  read: allow
  edit: allow   # Puede crear/modificar tests
  bash: allow   # Puede ejecutar suites de testing

tools:
  - web_search
  - file_read
  - file_write
  - bash

context:
  - kb-qa/              # Procedimientos de QA
  - kb-testing/         # Estrategias de testing
  -kb-regresion/        # Suite de regresión

rules:
  - "Reportar cobertura de tests"
  - "Priorizar bugs por severidad"
  - "Incluir steps to reproduce"
  - "Validar contra requirements"
  - "No aprobar PRs con tests falling"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **Generador de Tests** | Crea tests automáticos | "Genera tests E2E para este flujo" |
| **Analizador de Cobertura** | Identifica gaps | "¿Qué módulos tienen < 80% cobertura?" |
| **Reportador de Bugs** | Documenta issues | "Crea un bug report para este error" |
| **Revisor de Calidad** | Auditó calidad | "¿Este release cumple estándares?" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[07-harness-agilidad-pmo|Siguiente: PMO]]
- [[04-harness-ingenieria-software|Ingeniería]]
