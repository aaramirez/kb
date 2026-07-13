---
title: "Métricas de Deuda Técnica"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "Technical Debt Metrics"
  - "Code Smells"
  - "Tech Debt Ratio"
  - "Maintainability Index"
related:
  - "[[../01-Fundamentos/09-technical-debt|Deuda Técnica Concepto]]"
  - "[[05-code-coverage|Code Coverage]]"
  - "[[04-defect-rate|Tasa de Defectos]]"
  - "[[../04-Practicas/10-refactoring-continuo|Refactoring]]"
  - "[[../04-Practicas/02-clean-code|Clean Code]]"
  - "[[../05-Herramientas/01-ides-editores|IDEs]]"
  - "[[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]"
---

## Visión General

La deuda técnica es el costo implícito de elegir soluciones fáciles a corto plazo sobre las correctas. Medir la deuda técnica permite priorizar refactoring y prevenir que el codebase se degrad hasta volverse ingobernable.

## Métricas Principales

### Tech Debt Ratio (TDR)

```
TDR = (Costo de remediar deuda técnica / Costo total de desarrollo) × 100

Ejemplo: 150 hours para limpiar / 2000 hours de desarrollo = 7.5% TDR
```

**Benchmarks**:
| TDR | Calidad | Acción |
|-----|---------|--------|
| < 5% | Excelente | Mantener |
| 5-10% | Buena | Monitorear |
| 10-20% | Aceptable | Planificar limpieza |
| > 20% | Problemática | Invertir urgentemente |

### Maintainability Index (MI)

```
MI = 171 − 5.2 × ln(Volume) − 0.23 × (Halstead Volume) − 16.2 × ln(LOC) + 50 × sin(√(2.4 × Cyclomatic Complexity))

Simplificado (SonarQube):
MI = 206.835 − 10.1 × (HAL) − 0.23 × (G) − 16.2 × ln(LOC)
```

| Rango | Significado |
|-------|-------------|
| 80-100 | Alta mantenibilidad |
| 60-79 | Moderada |
| 20-59 | Baja |
| 0-19 | Crítico |

### Cyclomatic Complexity

```
CC = Número de paths independientes en el programa
   = Edges − Nodes + 2 (para grafos de control de flujo)
```

| CC | Riesgo | Acción |
|----|--------|--------|
| 1-10 | Bajo | OK |
| 11-20 | Moderado | Refactorizar |
| 21-50 | Alto | Refactorizar urgente |
| > 50 | Extremo | Rewrite probable |

### Code Smells (SonarQube)

```
Code Smell Count = Total de code smells detectados
Code Smell Density = Code Smells / KLOC
```

**Categorías principales**:
| Categoría | Ejemplo | Impacto |
|-----------|---------|---------|
| Duplicación | Code copiado > 10 líneas | Mantenibilidad |
| Complejidad | Métodos con CC > 15 | Comprensión |
| Naming | Variables/methods poco claros | Legibilidad |
| Long methods | Métodos > 50 líneas | Mantenibilidad |
| Large classes | Clases > 500 líneas | Acoplamiento |
| Dead code | Código no utilizado | Complejidad innecesaria |

### Debt Remediation Time

```
Debt Remediation = Σ(Esquemas de remediación por issue) / Horas disponibles del equipo

Ejemplo: 450 hours de deuda / 160 hours/mes = 2.8 meses para eliminar toda la deuda
```

## Herramienta Principal: SonarQube

### Métricas de SonarQube

| Métrica | Descripción | Gate típico |
|---------|-------------|-------------|
| **Reliability Rating** | Bugs por 1K LOC | A (0 bugs) |
| **Security Rating** | Vulnerabilidades | A (0 vulns) |
| **Security Hotspot** | Código sospechoso | 0 hotspots |
| **Maintainability Rating** | Code smells | A (density < 5%) |
| **Coverage** | Cobertura de tests | > 80% |
| **Duplications** | Code duplicado | < 3% |

### Quality Gate de Ejemplo

```
Quality Gate Conditions:
  ✓ Coverage on new code >= 80%
  ✓ Duplicated lines on new code <= 3%
  ✓ Maintainability Rating = A
  ✓ Reliability Rating = A
  ✓ Security Rating = A
  ✓ Security Hotspots Reviewed = 100%
```

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────────┐
│         TECH DEBT DASHBOARD - Julio 2026         │
├──────────────────────────────────────────────────┤
│ Tech Debt Ratio:     8.3%  [████████░░] ⚠      │
│ Maintainability:     72    [██████████░] OK     │
│ Cyclomatic Avg:      8.2   [███████░░░] OK     │
│ Code Smells:         127   density: 4.2/KLOC    │
│ Duplications:        2.8%  [████░░░░░░] OK     │
│                                                  │
│ Por módulo:                                      │
│   core-api:     MI=78  CC=6   ✅                │
│   frontend:     MI=65  CC=12  ⚠ refactor needed │
│   legacy-batch: MI=42  CC=22  ⚠⚠ critical      │
│                                                  │
│ Remediation Time: 340h (2.1 months @ current)   │
│ Trend: ↗ Debt growing 0.3% per sprint           │
└──────────────────────────────────────────────────┘
```

## Estrategias de Gestión

### Boy Scout Rule
"Dejar el campground más limpio de como lo encontraste" — refactorizar small amounts en cada PR.

### Tech Debt Budget
Asignar un % fijo del sprint capacity a deuda técnica:
- **Sano**: 15-20% del capacity
- **Degradando**: 25-30%
- **Crítico**: 40%+ (considerar rewrite)

### Debt Quadrants (Martin Fowler)

| | Deliberado | Inadvertido |
|---|-----------|-------------|
| **Prudent** | "Hay que shippear, refactorizamos después" | "Ahora entendemos mejor el diseño" |
| **Reckless** | "No tenemos tiempo para diseño" | "¿Qué es un patrón de diseño?" |

## Conexiones

- [[../01-Fundamentos/09-technical-debt|Deuda Técnica - Concepto]]
- [[../04-Practicas/10-refactoring-continuo|Refactoring Continuo]]
- [[../04-Practicas/02-clean-code|Clean Code]]
- [[05-code-coverage|Code Coverage]]
- [[04-defect-rate|Tasa de Defectos]]
- [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]
- [[../05-Herramientas/01-ides-editores|IDEs (static analysis)]]
