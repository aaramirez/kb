---
title: "Tasa de Defectos"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "Defect Density"
  - "Bug Rate"
  - "Escaped Defects"
  - "Bug Backlog"
related:
  - "[[05-code-coverage|Code Coverage]]"
  - "[[06-technical-debt-metrics|Deuda Técnica]]"
  - "[[01-dora-metrics|DORA Metrics]]"
  - "[[../04-Practicas/03-test-driven-development|TDD]]"
  - "[[../04-Practicas/04-behavior-driven-development|BDD]]"
  - "[[../05-Herramientas/04-herramientas-testing|Herramientas Testing]]"
  - "[[../08-Calidad-Seguridad/README|Calidad y Seguridad]]"
---

## Visión General

La tasa de defectos mide la calidad del software desde la perspectiva de errores y fallos. Es un indicador lagging pero esencial para entender la salud técnica del producto y la efectividad de las prácticas de testing.

## Métricas Principales

### Defect Density (Densidad de Defectos)

```
Defect Density = Nº defectos / KLOC (Kilo Lines of Code)
            o   = Nº defectos / Function Point

Ejemplo: 15 defectos / 50 KLOC = 0.3 defectos/KLOC
```

**Benchmarks**:
| Calidad | Defectos/KLOC |
|---------|---------------|
| Excelente | < 0.1 |
| Buena | 0.1 - 0.5 |
| Aceptable | 0.5 - 1.0 |
| Problemática | > 1.0 |

### Escaped Defects (Defectos que Escapan)

```
Escaped Defects Rate = (Defectos encontrados en producción / Total defectos) × 100

Ejemplo: 8 defectos en prod / 45 defectos totales = 17.8%
```

**Segmentación por fase de detección**:
| Fase | Costo relativo de fix |
|------|----------------------|
| Requirements | 1x |
| Design | 5x |
| Code (review) | 10x |
| Testing | 20x |
| Production | 100x |

### Bug Backlog

```
Bug Backlog = Total bugs abiertos - Total bugs cerrados

Net Bug Growth = Nuevos bugs / Cerrados por período
```

**Indicadores saludables**:
- Ratio cerrados/abiertos > 1 → backlog se reduce
- Ratio cerrados/abiertos < 1 → backlog crece (alerta)
- Bugs > 90 días = tech debt crítico

### Mean Time to Detection (MTTD)

```
MTTD = Σ(Tiempo desde introducción hasta detección) / Nº defectos

Ejemplo: Promedio 4.2 días para detectar defectos en producción
```

### Mean Time to Resolution (MTTR de bugs)

```
MTTR_bug = Σ(Tiempo desde reporte hasta fix deployado) / Nº bugs

Ejemplo: P50 = 3 días, P85 = 12 días
```

## Clasificación de Defectos

| Severidad | Descripción | SLA Típico |
|-----------|-------------|------------|
| **S1 - Crítico** | Sistema caído, data loss | 4 horas |
| **S2 - Mayor** | Funcionalidad core rota | 1 día |
| **S3 - Moderado** | Workaround disponible | 1 semana |
| **S4 - Menor** | Cosmético, baja prioridad | Next sprint |

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────────┐
│         DEFECT METRICS DASHBOARD - Q3 2026       │
├──────────────────────────────────────────────────┤
│ Defect Density:    0.22/KLOC  [████████░░]  OK   │
│ Escaped Defects:   12%        [██████░░░░]  OK   │
│ Bug Backlog:       23 abiertos [↗ creciendo] ⚠  │
│ MTTD (P50):        1.8 días   [███████░░░]  OK   │
│ MTTR Bug (P50):    2.1 días   [███████░░░]  OK   │
│                                                  │
│ Por severidad:    S1:0 S2:2 S3:8 S4:13          │
│ Bugs > 30 días:   5 (22% del backlog)            │
│ Ratio cierre:     1.3 cerrados/abiertos          │
└──────────────────────────────────────────────────┘
```

## Estrategias de Mejora

### Prevenir Defectos

| Estrategia | Impacto | Referencia |
|------------|---------|------------|
| TDD | Alto | [[../04-Practicas/03-test-driven-development\|TDD]] |
| BDD | Alto | [[../04-Practicas/04-behavior-driven-development\|BDD]] |
| Pair programming | Medio | [[../04-Practicas/05-pair-programming\|Pair Programming]] |
| Code review | Alto | [[../04-Practicas/06-code-review-best-practices\|Code Review]] |
| Shift-left testing | Alto | [[../01-Fundamentos/08-shift-left\|Shift Left]] |

### Detectar Temprano

| Estrategia | Herramienta |
|------------|-------------|
| Static analysis | SonarQube, ESLint |
| Mutation testing | Pitest, Stryker |
| Property-based testing | Hypothesis, fast-check |
| Contract testing | Pact |

### Gestionar el Backlog

1. **Weekly bug triage** — Revisar bugs abiertos cada semana
2. **Bug debt budget** — Asignar % del capacity a bugs
3. **Auto-close stale bugs** — Bugs > 180 días sin activity
4. **Root cause analysis** — Para S1/S2, no solo hotfix

## Métricas Complementarias

| Métrica | Qué complementa |
|---------|-----------------|
| [[05-code-coverage\|Code Coverage]] | Prevención de defectos |
| [[06-technical-debt-metrics\|Tech Debt]] | Causa raíz de muchos defectos |
| [[12-change-failure-rate\|Change Failure Rate]] | Defectos introducidos por cambios |
| [[08-customer-satisfaction\|CSAT]] | Impacto percibido por el usuario |

## Referencias

- [[../04-Practicas/03-test-driven-development|TDD]]
- [[../04-Practicas/04-behavior-driven-development|BDD]]
- [[../04-Practicas/06-code-review-best-practices|Code Review]]
- [[../05-Herramientas/04-herramientas-testing|Herramientas de Testing]]
- [[../01-Fundamentos/08-shift-left|Shift Left]]
- [[06-technical-debt-metrics|Deuda Técnica]]
- [[01-dora-metrics|DORA Metrics]]
