---
title: "Velocity y Throughput"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "Story Points"
  - "Team Velocity"
  - "Throughput"
  - "Capacity Planning"
related:
  - "[[../03-Procesos/03-scrum|Scrum]]"
  - "[[../03-Procesos/02-kanban-software|Kanban]]"
  - "[[03-cycle-time|Cycle Time]]"
  - "[[01-dora-metrics|DORA Metrics]]"
  - "[[../04-Practicas/11-definition-of-done|DoD]]"
  - "[[../02-Estructura/06-product-owner|Product Owner]]"
---

## Visión General

Velocity y throughput son métricas de capacidad que intentan cuantificar cuánto trabajo entrega un equipo. Aunque son ampliamente usadas, tienen limitaciones importantes que deben entenderse para usarlas correctamente.

## Velocity (Story Points)

### Definición

Velocity es la cantidad de story points completados por un equipo en un sprint (típicamente 2 semanas).

```
Velocity = Σ Story Points del sprint / Nº sprints

Ejemplo: (21 + 18 + 24 + 20 + 22) / 5 = 21 points/sprint (promedio)
```

### Estimación por Complejidad

| Points | Complejidad | Tiempo estimado |
|--------|-------------|-----------------|
| 1 | Trivial | < 1 hora |
| 2 | Simple | 1-3 horas |
| 3 | Moderada | 3-8 horas |
| 5 | Compleja | 1-2 días |
| 8 | Muy compleja | 2-3 días |
| 13 | Épica | > 3 días (partir) |

### Limitaciones de Velocity

| Limitación | Problema |
|------------|----------|
| No es comparable entre equipos | 20 points de equipo A ≠ 20 de equipo B |
| No mide valor | Entregar 20 points de features innecesarias = desperdicio |
| Gaming | Los equipos aprenden a inflar estimaciones |
| Estimación imprecisa | Planning poker es inherentemente inexacto |
| No refleja calidad | Velocity no distingue código limpio de código frágil |

## Throughput (Opción Alternativa)

### Definición

Throughput es el número de items completados por período, sin importar su tamaño.

```
Throughput = Nº items completados / Período

Ejemplo: 14 stories completados / 2 semanas = 7 stories/sprint
```

### Throughput vs Velocity

| Aspecto | Velocity | Throughput |
|---------|----------|------------|
| Base | Story points (estimación) | Conteo de items |
| Estimación requerida | Sí | No |
| Comparabilidad | Solo intra-equipo | Casi comparable |
| Precisión | Depende de la estimación | Simple de medir |
| Gaming risk | Alto | Bajo |

### Little's Law

```
Throughput = WIP / Cycle Time

Si WIP promedio = 5 items y Cycle Time = 2 días
→ Throughput = 5 / 2 = 2.5 items/día
```

Esto conecta directamente con [[03-cycle-time|Cycle Time]] y la gestión de WIP en [[../03-Procesos/02-kanban-software|Kanban]].

## Métricas Superiores a Velocity

| Métrica | Ventaja | Referencia |
|---------|---------|------------|
| **Cycle Time** | Mide velocidad real del flujo | [[03-cycle-time]] |
| **Flow Efficiency** | Identifica tiempo muerto | [[03-cycle-time]] |
| **DORA Metrics** | Outcome-based, no output-based | [[01-dora-metrics]] |
| **OKR Progress** | Alineado con valor de negocio | [[09-business-value-metrics]] |

## Mejores Prácticas

### Usar Velocity Correctamente

1. **Solo para forecasting** — Predecir cuánto cabrá en sprints futuros
2. **Nunca para comparar equipos** — Cada equipo tiene su escala
3. **Tendencia, no absoluto** — Importa si sube o baja, no el número
4. **Complementar con outcome metrics** — Velocity + satisfacción + quality

### Capacity Planning con Velocity

```
Capacidad sprint N+1 = Velocity promedio × Factor de disponibilidad

Ejemplo: 21 pts × 0.85 (vacaciones, feriados) = ~18 points estimados
```

**Factores de disponibilidad**:
- Vacaciones programadas
- Feriados
- Actividades de soporte/mantenimiento
- Onboarding de nuevos miembros
- Actividades técnicas (tech debt, refactoring)

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────┐
│         VELOCITY & THROUGHPUT - ÚLTIMOS 6    │
├──────────────────────────────────────────────┤
│ Sprint │ Velocity │ Throughput │ Cycle Time  │
│ S-21   │   22     │   11       │   3.2d      │
│ S-22   │   18     │    9       │   4.1d      │
│ S-23   │   24     │   12       │   2.8d      │
│ S-24   │   20     │   10       │   3.5d      │
│ S-25   │   21     │   11       │   3.0d      │
│ S-26   │   23     │   12       │   2.9d      │
├──────────────────────────────────────────────┤
│ Avg:   │   21.3   │   10.8     │   3.25d     │
│ Trend: │   →      │   →        │   ↘ (mejor) │
└──────────────────────────────────────────────┘
```

## Conexiones

- [[03-cycle-time|Cycle Time]] — Métrica superior para velocidad de flujo
- [[01-dora-metrics|DORA Metrics]] — Framework completo de medición
- [[09-business-value-metrics|Valor de Negocio]] — Conectar capacidad con valor
- [[07-team-health-metrics|Salud del Equipo]] — Velocity puede indicar burnout
- [[../03-Procesos/03-scrum|Scrum]] — Contexto donde se usa velocity
- [[../03-Procesos/02-kanban-software|Kanban]] — Throughput como alternativa
