---
title: "Portfolio Management"
tags:
  - sf/gestion
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Gestión de Proyectos"
aliases:
  - "Prioritization Frameworks"
  - "RICE"
  - "WSJF"
  - "Cost of Delay"
related:
  - "[[../10-Gestion-Proyectos/10-okr-software|OKRs]]"
  - "[[../10-Gestion-Proyectos/07-budget-cost|Presupuesto y Costos]]"
  - "[[../10-Gestion-Proyectos/01-planificacion-agil|Planificación Ágil]]"
  - "[[../10-Gestion-Proyectos/04-backlog-grooming|Backlog Refinement]]"
---

# Portfolio Management

Priorizar iniciativas de software a nivel de portfolio usando frameworks basados en datos, no en intuición.

## Frameworks de priorización

### Comparación rápida

| Framework | Mejor para | Complejidad | Sesgo principal |
|-----------|-----------|-------------|-----------------|
| **RICE** | Features de producto | Baja | Overconfidence en estimates |
| **WSJF** | Agile at scale | Media | Difficulty estimating delay |
| **MoSCoW** | Scope negotiation | Baja | Everything becomes "Must" |
| **Value vs Effort** | Quick prioritization | Baja | Oversimplification |
| **Kano** | Feature categorization | Media | Requires user research |
| **Cost of Delay** | Business case | Alta | Hard to quantify |
| **OpScore** | Resource allocation | Alta | Complex to maintain |

## RICE Score

Developed by Intercom. Prioriza por impacto relativo ajustado por esfuerzo.

### Fórmula

```
RICE = (Reach × Impact × Confidence) / Effort
```

| Factor | Escala | Descripción |
|--------|--------|-------------|
| **Reach** | Users/quarter | Cuántos usuarios afecta |
| **Impact** | 0.25, 0.5, 1, 2, 3 | Impacto por usuario |
| **Confidence** | 100%, 80%, 50%, 20% | Certeza de los estimates |
| **Effort** | Person-months | Trabajo del equipo |

### Ejemplo RICE

| Feature | Reach | Impact | Confidence | Effort | RICE |
|---------|-------|--------|------------|--------|------|
| Search v2 | 5000 | 3 | 80% | 2 | 6000 |
| SSO integration | 2000 | 2 | 50% | 3 | 667 |
| Export to PDF | 8000 | 0.5 | 100% | 1 | 4000 |
| Dark mode | 10000 | 0.25 | 100% | 0.5 | 5000 |

**Ranking**: Search v2 (6000) > Dark mode (5000) > Export (4000) > SSO (667)

## WSJF (Weighted Shortest Job First)

Framework de SAFe. Prioriza por costo de retraso dividido por duración.

### Fórmula

```
WSJF = Cost of Delay / Job Size
```

### Componentes del Cost of Delay

```
CoD = User/Business Value + Time Criticality + Risk Reduction

User/Business Value:  1-10 (1=baja, 10=crítica)
Time Criticality:     1-10 (1= sin fecha, 10=deadline mañana)
Risk Reduction:       1-10 (1=no reduce riesgo, 10=previene catástrofe)
```

### Job Size (Fibonacci)

| Tamaño | Duración approx |
|--------|-----------------|
| 1 | 1 día |
| 2 | 2-3 días |
| 3 | 1 semana |
| 5 | 2 semanas |
| 8 | 1 mes |
| 13 | 2+ meses |

### Ejemplo WSJF

| Iniciativa | UV | TC | RR | CoD | Size | WSJF |
|-----------|----|----|----|----|------|-------|
| Fix checkout bug | 10 | 10 | 5 | 25 | 2 | 12.5 |
| New dashboard | 7 | 3 | 2 | 12 | 5 | 2.4 |
| API v2 | 8 | 5 | 7 | 20 | 8 | 2.5 |
| Dark mode | 3 | 1 | 1 | 5 | 3 | 1.7 |

**Ranking**: Fix checkout bug (12.5) > API v2 (2.5) > Dashboard (2.4) > Dark mode (1.7)

## MoSCoW

Categoriza features en 4 niveles de prioridad.

| Categoría | Significado | % típico del scope |
|-----------|-------------|-------------------|
| **Must have** | Sin esto, el sistema no funciona | 60% |
| **Should have** | Importante pero no crítico | 20% |
| **Could have** | Nice to have, si hay tiempo | 15% |
| **Won't have** (this time) | Fuera de scope este ciclo | 5% |

### Regla de MoSCoW

- Máximo **60%** en Must Have
- Si todo es Must, nada es Must
- Won't have = decisión explícita, no olvido

## Value vs Effort Matrix

```
              ESFUERZO
              Bajo        Alto
         ┌────────────┬────────────┐
  ALTO   │  QUICK     │  MAJOR     │
  VALOR  │  WINS      │  PROJECTS  │
         │  (hacer)   │  (planear) │
         ├────────────┼────────────┤
  BAJO   │  FILL-INS  │  THANKLESS │
  VALOR  │  (si hay   │  TASKS     │
         │   tiempo)  │  (evitar)  │
         └────────────┴────────────┘
```

## Portfolio Balancing

### Framework de categorías

| Categoría | % del portfolio | Horizonte | Riesgo |
|-----------|----------------|-----------|--------|
| **Run** (mantener) | 40-60% | Corto | Bajo |
| **Grow** (expandir) | 20-30% | Medio | Medio |
| **Transform** (innovar) | 10-20% | Largo | Alto |

### Ejemplo de distribución

```
Portfolio Total: 100 points (capacity del equipo)

RUN (50 pts):
├── Bug fixes & maintenance: 20 pts
├── Tech debt reduction: 15 pts
└── Operational improvements: 15 pts

GROW (30 pts):
├── Feature enhancements: 20 pts
└── Platform improvements: 10 pts

TRANSFORM (20 pts):
├── New product exploration: 10 pts
└── Architecture modernization: 10 pts
```

## Portfolio Review Meeting

| Frecuencia | Participantes | Agenda |
|------------|---------------|--------|
| **Mensual** | EM, PO, Tech Lead, PM | Review status, rebalance |
| **Quarterly** | + Leadership, Finance | Strategic alignment, budget |

### Agenda típica (90 min)

```
1. Portfolio health dashboard (10 min)
2. Active initiatives status (20 min)
3. Completed initiatives outcomes (15 min)
4. New initiatives candidates (20 min)
5. Reprioritization discussion (15 min)
6. Resource allocation decisions (10 min)
```

## Anti-patterns

- **HiPPO**: Highest Paid Person's Opinion drives decisions
- **Sunk cost**: continuing because of past investment
- **Feature factories**: measuring output not outcome
- **No kill criteria**: launching but never stopping initiatives
- **Checkbox mentality**: completing without measuring value
- **Analysis paralysis**: over-analyzing without deciding
