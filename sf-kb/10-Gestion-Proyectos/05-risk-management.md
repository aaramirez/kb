---
title: "Gestión de Riesgos en Software"
tags:
  - sf/gestion
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Gestión de Proyectos"
aliases:
  - "Risk Management"
  - "Risk Register"
  - "Gestión de Riesgos"
related:
  - "[[../10-Gestion-Proyectos/06-stakeholder-management|Gestión de Stakeholders]]"
  - "[[../10-Gestion-Proyectos/07-budget-cost|Presupuesto y Costos]]"
  - "[[../09-DevOps-Infra/09-incident-response|Incident Response]]"
  - "[[../10-Gestion-Proyectos/05-risk-management|Risk Management]]"
---

# Gestión de Riesgos en Software

Identificar, evaluar y mitigar riesgos antes de que se conviertan en problemas es fundamental para la entrega exitosa de software.

## Framework de gestión de riesgos

```
1. Identificar → 2. Evaluar → 3. Priorizar → 4. Mitigar → 5. Monitorear
      ↑                                                      │
      └──────────────────────────────────────────────────────┘
                        (ciclo continuo)
```

## Risk Register Template

| ID | Riesgo | Probabilidad | Impacto | Score | Propietario | Mitigación | Estado |
|----|--------|-------------|---------|-------|-------------|------------|--------|
| R01 | Key developer leaves | 3/5 | 4/5 | 12 | EM | Knowledge sharing, doc | Active |
| R01 | API vendor changes pricing | 2/5 | 5/5 | 10 | PO | Evaluate alternatives | Monitoring |
| R03 | Scope creep en módulo X | 4/5 | 3/5 | 12 | PO | Strict change control | Active |
| R04 | Performance under load | 2/5 | 4/5 | 8 | TL | Load testing early | Mitigated |

## Evaluación de probabilidad e impacto

### Probabilidad

| Nivel | Valor | Descripción |
|-------|-------|-------------|
| Muy baja | 1/5 | < 10% chance de ocurrir |
| Baja | 2/5 | 10-30% |
| Media | 3/5 | 30-60% |
| Alta | 4/5 | 60-80% |
| Muy alta | 5/5 | > 80% |

### Impacto

| Nivel | Valor | Schedule | Cost | Quality |
|-------|-------|----------|------|---------|
| Negligible | 1/5 | < 1 semana | < 5% budget | Sin efecto |
| Menor | 2/5 | 1-2 semanas | 5-10% | Menores defects |
| Moderado | 3/5 | 2-4 semanas | 10-25% | Features afectados |
| Mayor | 4/5 | 1-3 meses | 25-50% | Quality significant |
| Catastrófico | 5/5 | > 3 meses | > 50% | System failure |

### Matriz de priorización (Probability × Impact)

```
Impacto →    1     2     3     4     5
Prob ↓
  5        M     H     H     E     E
  4        L     M     H     E     E
  3        L     M     M     H     E
  2        L     L     M     M     H
  1        L     L     L     M     M

L = Low (monitorear)
M = Medium (plan de mitigación)
H = High (mitigar activamente)
E = Extreme (actuar inmediatamente)
```

## Categorías de riesgos en software

| Categoría | Ejemplos | Estrategia típica |
|-----------|----------|-------------------|
| **Técnico** | Deuda técnica, performance, scalabilidad | Spike, PoC, architecture review |
| **Personas** | Turnover, knowledge silos, burnout | Pair programming, documentation |
| **Requisitos** | Scope creep, requirements ambiguity | Prototyping, early feedback |
| **Schedule** | Fechas comprometidas, dependencias | Buffer, parallel tracks |
| **Terceros** | Vendor lock-in, API changes | Abstraction, multi-vendor |
| **Seguridad** | Vulnerabilidades, compliance | Threat modeling, audits |
| **Organizacional** | Budget cuts, reorg, shifting priorities | Stakeholder management |

## Estrategias de mitigación

| Estrategia | Descripción | Ejemplo |
|-----------|-------------|---------|
| **Avoid** | Eliminar el riesgo cambiando el plan | No usar tecnología experimental |
| **Mitigate** | Reducir probabilidad o impacto | Agregar testing, code review |
| **Transfer** | Mover el riesgo a tercero | Contratar seguro, usar managed services |
| **Accept** | Reconocer y preparar plan de contingencia | Buffer en timeline, runbook |
| **Exploit** | Aprovechar la oportunidad (para riesgos positivos) | Adoptar tecnología nueva temprano |

## Risk Burndown Chart

Mide la reducción de riesgos a lo largo del proyecto.

### Template de tracking

| Sprint | Riesgos abiertos | Riesgos cerrados | Risk score total |
|--------|-----------------|-----------------|-----------------|
| Sprint 1 | 8 | 0 | 32 |
| Sprint 2 | 7 | 1 | 28 |
| Sprint 3 | 5 | 3 | 18 |
| Sprint 4 | 3 | 5 | 10 |
| Sprint 5 | 1 | 7 | 3 |

### Indicadores de salud

| Métrica | Target |
|---------|--------|
| Risk burndown rate | > 1的风险 por sprint |
| New risks identified | < 2 por sprint |
| Overdue mitigations | 0 |
| Risk register freshness | Revisado cada sprint |

## Plantilla de Risk Assessment

```markdown
## Risk: [Nombre del riesgo]

**ID**: R##
**Fecha identificación**: YYYY-MM-DD
**Propietario**: [Nombre]

### Descripción
[Cómo podría ocurrir, contexto]

### Probabilidad: [1-5]
### Impacto: [1-5]
### Risk Score: P × I = ##

### Mitigación plan
1. [Acción 1] — responsable — fecha
2. [Acción 2] — responsable — fecha

### Contingencia
[Qué hacer si el riesgo materializa]

### Trigger
[Señal de alerta temprana]

### Estado: Active | Monitoring | Mitigated | Closed
```

## Anti-patterns

- **Risk blindness**: no documentar riesgos conocidos
- **Analysis paralysis**: evaluar riesgos infinitamente sin actuar
- **Single point of failure**: no tener backup para personas críticas
- **Ignoring positive risks**: no aprovechar oportunidades
- **Risk theater**: documentar riesgos pero no mitigarlos
