---
title: "OKRs para Equipos de Software"
tags:
  - sf/gestion
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Gestión de Proyectos"
aliases:
  - "OKR"
  - "Objectives and Key Results"
  - "OKRs de Ingeniería"
related:
  - "[[../10-Gestion-Proyectos/11-portfolio-management|Portfolio Management]]"
  - "[[../10-Gestion-Proyectos/06-stakeholder-management|Gestión de Stakeholders]]"
  - "[[../06-Metricas/14-balance-scorecard|Balanced Scorecard]]"
  - "[[../11-Cultura-Equipo/README|Cultura y Equipo]]"
---

# OKRs para Equipos de Software

OKRs (Objectives and Key Results) alinean el trabajo técnico con los objetivos de negocio, midiendo outcomes en lugar de outputs.

## Estructura de un OKR

```
Objective: [Cualitativo, inspirador, alcanzable en 1 quarter]
├── KR1: [Cuantificable, medible, ambicioso]
├── KR2: [Cuantificable, medible, ambicioso]
└── KR3: [Cuantificable, medible, ambicioso]
```

### Reglas de calidad

| Componente | Debe ser | No debe ser |
|-----------|----------|-------------|
| **Objective** | Inspirador, ambicioso, cualitativo | Numérico, vago, incremental |
| **Key Result** | Cuantificable, medible, con timeline | Actividad, binario, no medible |
| **Key Result** | Outcome (resultado) | Output (actividad) |

### Buenos vs malos ejemplos

| ❌ Malo | ✅ Bueno | Tipo |
|---------|----------|------|
| "Mejorar el testing" | "Aumentar code coverage del 60% al 85%" | KR |
| "Deploy más rápido" | "Reducir deployment frequency de semanal a diaria" | KR |
| "Hacer code review" | "100% de PRs revisados en < 4 horas" | KR |
| "Ser más confiables" | "Reducir incidentes P1 de 5/mes a 1/mes" | KR |

## OKRs para Engineering — Ejemplos

### Q1: Developer Experience

```
O: Hacer que los desarrolladores sean 50% más productivos
├── KR1: Reducir CI build time de 15min a 7min
├── KR2: Reducir time-to-first-deploy de 2 días a 4 horas
└── KR3: Developer satisfaction score de 6.5 a 8.5/10
```

### Q1: Reliability

```
O: Alcanzar confiabilidad de nivel enterprise
├── KR1: Disponibilidad de 99.9% a 99.95%
├── KR2: MTTR de 45min a 15min
└── KR3: 0 incidents P1 por quarter (vs 3 el quarter anterior)
```

### Q1: Technical Excellence

```
O: Eliminar la deuda técnica crítica del sistema
├── KR1: Reducir critical vulnerabilities de 24 a 0
├── KR2: Migrar 100% de servicios a Kubernetes
└── KR3: Code coverage > 80% en todos los servicios core
```

### Q1: Delivery Speed

```
O: Entregar valor al usuario 3x más rápido
├── KR1: Reducir cycle time promedio de 8 días a 3 días
├── KR2: Aumentar deployment frequency de semanal a diaria
└── KR3: Lead time for changes < 1 día (DORA metric)
```

## Cadencia de OKRs

| Actividad | Frecuencia | Participantes |
|-----------|------------|---------------|
| **Setting OKRs** | Quarterly (antes del quarter) | EM + Tech Lead + PO |
| **Check-in** | Semanal | Equipo |
| **Mid-quarter review** | Mitad del quarter | EM + Stakeholders |
| **Scoring** | End of quarter | EM + Equipo |
| **Retrospective** | Post-scoring | Equipo completo |

### Scoring scale

| Score | Significado |
|-------|-------------|
| 1.0 | Logrado completamente |
| 0.7 | Progreso significativo (target era ambicioso) |
| 0.5 | Progreso moderado |
| 0.3 | Poco progreso |
| 0.0 | Sin progreso |

**Target**: promedio de 0.6-0.7 (ambicioso pero achievable)

## Common Mistakes

| Error | Descripción | Cómo evitarlo |
|-------|-------------|---------------|
| **Too many OKRs** | > 5 objectives por quarter | Máximo 3-5 objectives |
| **Output as KR** | "Implementar feature X" como KR | Medir outcome, no actividad |
| **Not ambitious enough** | Todos score 1.0 | Target: 0.7 average |
| **Set and forget** | No check-ins durante el quarter | Weekly check-ins |
| **Cascading OKRs** | OKRs individuales = team OKRs | Team OKRs, no individuales |
| **Ignoring tech debt** | Solo business outcomes | Incluir 1 OKR técnico |

## OKR Alignment

### Ejemplo de alignment vertical

```
Company OKR:
  O: Ser líder en mercado X
  KR: $10M ARR

├── Product OKR:
│   O: Mejorar activation rate
│   KR: 30% → 50% activation
│
├── Engineering OKR:
│   O: Reducir time-to-value para usuarios
│   KR: Onboarding flow < 5 minutos
│
└── Marketing OKR:
    O: Aumentar awareness
    KR: 100K monthly visitors
```

## OKR vs KPI

| Aspecto | OKR | KPI |
|---------|-----|-----|
| **Propósito** | Alcanzar nuevo nivel | Mantener nivel actual |
| **Ambición** | 70% achievement = éxito | 100% achievement = éxito |
| **Cambio** | Cambia cada quarter | Estable durante largo tiempo |
| **Ejemplo** | "Reducir latency 50%" | "Mantener 99.9% uptime" |
| **Mindset** | Growth / Transformación | Operations / Mantenimiento |

## Anti-patterns

- **OKRs como performance review**: genera gaming de métricas
- **Micromanagement via OKRs**: demasiado granular
- **No psychological safety**: miedo a no alcanzar targets
- **OKRs estáticos**: no ajustar durante el quarter
- **Bottom-up only**: OKRs sin alineación con strategy
