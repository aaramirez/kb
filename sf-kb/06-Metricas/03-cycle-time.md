---
title: "Cycle Time y Lead Time"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "Cycle Time"
  - "Lead Time"
  - "Flow Time"
  - "Tiempo de Entrega"
related:
  - "[[01-dora-metrics|DORA Metrics]]"
  - "[[02-velocity-throughput|Velocity y Throughput]]"
  - "[[../03-Procesos/02-kanban-software|Kanban]]"
  - "[[../03-Procesos/13-value-stream-mapping|Value Stream Mapping]]"
  - "[[../04-Practicas/12-observabilidad-practicas|Observabilidad]]"
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]"
---

## Visión General

Cycle Time y Lead Time son métricas de flujo que miden la velocidad real de entrega. A diferencia de [[02-velocity-throughput|velocity]], miden tiempo transcurrido, no esfuerzo estimado, lo que las hace más objetivas y accionables.

## Definiciones

### Lead Time

Tiempo total desde que se solicita algo hasta que se entrega al usuario.

```
Lead Time = Timestamp(Entrega al usuario) − Timestamp(Solicitud)

Ejemplo: Solicitud martes 9am → Entrega viernes 3pm = 3.25 días
```

**Componentes del Lead Time**:
- Tiempo de espera (backlog prioritization)
- Tiempo de desarrollo activo
- Tiempo de code review
- Tiempo de CI/CD
- Tiempo de deployment
- Tiempo de validación post-deploy

### Cycle Time

Tiempo desde que comienza el trabajo activo hasta que se entrega.

```
Cycle Time = Timestamp(Entrega) − Timestamp(Primer commit)

Ejemplo: Primer commit lunes 10am → Deploy miércoles 2pm = 2.1 días
```

### Diferencia Clave

```
|←──── Lead Time ────→|
|  Wait  |← Cycle Time →|
| Backlog|  Dev  | Review | CI | Deploy |
```

## Fórmulas y Métricas Relacionadas

### Percentiles

```
P50 (Mediana) = 50% de los items se completan en este tiempo
P85 = 85% de los items se completan en este tiempo
P95 = 95% de los items se completan en este tiempo

Ejemplo: P50 = 2.5d, P85 = 5d, P95 = 12d
→ El 50% de las features se entregan en menos de 2.5 días
```

Usar percentiles en vez de promedio es fundamental — el promedio oculta la variabilidad.

### Flow Efficiency

```
Flow Efficiency = (Tiempo activo / Cycle Time total) × 100

Ejemplo: 8h activo / 48h total = 16.7%
```

Un flow efficiency del 16.7% significa que el 83% del tiempo el trabajo está esperando. Los equipos elite típicamente alcanzan 30-50%.

### Throughput (conectado)

```
Throughput = WIP / Cycle Time (Little's Law)

Si WIP promedio = 8 y Cycle Time = 3 días
→ Throughput = 8/3 = 2.67 items/día
```

Ver [[02-velocity-throughput]] para más detalles.

## Cómo Medir

### Herramientas

| Herramienta | Cómo mide | Costo |
|-------------|-----------|-------|
| **Jira** | Built-in reports (Control Chart) | Licencia |
| **GitHub Projects** | Custom fields + queries | Gratis |
| **Linear** | Built-in metrics | SaaS |
| **Jellyfish** | Engineering analytics | Enterprise |
| **Pluralsight Flow** | Git-based analysis | SaaS |

### Medición Manual (Git)

```bash
# Cycle time entre PR merge y deploy
git log --format="%H %ai" --merges | \
  while read hash date; do
    # Calcular diferencia con timestamp de deploy
  done
```

### Data Points Necesarios

| Evento | Fuente | Qué captura |
|--------|--------|-------------|
| Story creada | Jira/GitHub | Inicio del Lead Time |
| Commit inicial | Git | Inicio del Cycle Time |
| PR abierto | GitHub | Inicio de review |
| PR mergeado | GitHub | Fin de review |
| Deploy exitoso | CI/CD | Fin del Cycle Time |

## Estrategias de Mejora

### Reducir Cycle Time

| Estrategia | Impacto | Esfuerzo |
|------------|---------|----------|
| Reducir WIP limit | Alto | Bajo |
| Trunk-based development | Alto | Medio |
| CI/CD automatizado | Alto | Medio |
| Code review same-day | Medio | Bajo |
| Feature flags | Alto | Medio |
| Smaller PRs | Medio | Bajo |

### Reducir Lead Time

| Estrategia | Impacto | Esfuerzo |
|------------|---------|----------|
| Priorización continua | Alto | Bajo |
| Eliminar handoffs | Alto | Alto |
| Cross-functional teams | Alto | Alto |
| Automatizar testing | Medio | Medio |

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────────┐
│         CYCLE TIME DASHBOARD - ÚLTIMOS 30 DÍAS   │
├──────────────────────────────────────────────────┤
│ P50:  2.3 días  ████████████                     │
│ P85:  4.8 días  ████████████████████████         │
│ P95:  8.1 días  ██████████████████████████████   │
│                                                  │
│ Flow Efficiency: 28% (meta: 40%)                │
│                                                  │
│ Por tipo:                                        │
│   Bugfix:     P50 = 0.8d  ████                  │
│   Feature:    P50 = 3.2d  ██████████████████     │
│   Tech Debt:  P50 = 1.5d  ████████              │
│   Hotfix:     P50 = 0.3d  ██                    │
└──────────────────────────────────────────────────┘
```

## Conexiones

- [[01-dora-metrics|DORA Metrics]] — Lead Time es una de las 4 key metrics
- [[02-velocity-throughput|Velocity y Throughput]] — Cycle Time es superior a velocity
- [[../03-Procesos/13-value-stream-mapping|Value Stream Mapping]] — Identificar desperdicios en el flujo
- [[../03-Procesos/02-kanban-software|Kanban]] — WIP limits reducen cycle time
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]] — Automatizar reduces tiempos
- [[04-defect-rate|Tasa de Defectos]] — Código rápido sin calidad es insostenible
- [[../04-Practicas/12-observabilidad-practicas|Observabilidad]] — Medir tiempos end-to-end
