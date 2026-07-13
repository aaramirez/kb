---
title: "QA Moderno: Más Allá del Testing Manual"
tags:
  - sf/calidad
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Calidad y Seguridad"
aliases:
  - "Quality Engineering"
  - "Shift-Left Testing"
related:
  - "[[02-testing-piramide|Pirámide de Testing]]"
  - "[[03-automated-testing|Testing Automatizado]]"
  - "[[../04-Practicas/03-code-review|Code Review]]"
---

# QA Moderno: Más Allá del Testing Manual

## Evolución del QA

El QA tradicional centrado en testing manual está siendo reemplazado por un enfoque de **Quality Engineering** donde todos los roles contribuyen a la calidad.

| Era | Enfoque | Rol QA | Limitación |
|-----|---------|--------|------------|
| 2000s | Testing manual | Executor de tests | Bottleneck |
| 2010s | Automation | Configurador de herramientas | Silo separado |
| 2020s | Quality Engineering | Strategist de calidad | — |

## Principles del QA Moderno

### 1. Shift-Left
Mover la detección de defectos hacia etapas tempranas del ciclo de vida.

```
Traditional: Code → Test → Fix → Test again
Shift-Left:  Design → Review → Code → Test (early) → Deploy
```

### 2. Automation-First
La automatización es la estrategia por defecto, manual es la excepción.

### 3. Quality as Code
Las reglas de calidad se definen en código, no en documentos.

```yaml
# Ejemplo: Quality Gates como código
quality_gates:
  - name: "coverage"
    threshold: 80
    metric: "line_coverage"
  - name: "complexity"
    threshold: 10
    metric: "cyclomatic_complexity"
```

## Roles en QA Moderno

| Rol | Responsabilidad | Herramientas |
|-----|-----------------|--------------|
| **SDET** | Desarrollo de testing | Selenium, Cypress |
| **Quality Coach** | Estrategia y mentoring | Procesos, métricas |
| **Platform Engineer** | Infraestructura de testing | Docker, K8s |
| **Security Champion** | Seguridad en calidad | SAST, DAST |

## Métricas de Calidad

| Métrica | Objetivo | Medición |
|---------|----------|----------|
| Defect Escape Rate | < 5% | Bugs en producción |
| Test Coverage | > 80% | Cobertura de código |
| Mean Time to Detect | < 1 hora | Tiempo para detectar issues |
| Automated Test Ratio | > 70% | Tests automatizados vs total |

## Implementación

### Fase 1: Assessment
Evaluar el estado actual de QA en la organización.

### Fase 2: Strategy
Definir estrategia de testing basada en riesgos.

### Fase 3: Tooling
Seleccionar e integrar herramientas en CI/CD.

### Fase 4: Culture
Fomentar cultura de calidad compartida.

## Ver también

- [[02-testing-piramide|Pirámide de Testing]]
- [[03-automated-testing|Testing Automatizado]]
- [[11-quality-gates|Quality Gates]]
- [[../06-Metricas/01-dora-metrics|DORA Metrics]]
