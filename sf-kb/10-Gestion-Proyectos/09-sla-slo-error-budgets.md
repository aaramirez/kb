---
title: "SLAs, SLOs y Error Budgets"
tags:
  - sf/gestion
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Gestión de Proyectos"
aliases:
  - "SLA"
  - "SLO"
  - "Error Budget"
  - "Service Level Agreement"
  - "Service Level Objective"
related:
  - "[[../09-DevOps-Infra/08-site-reliability|Site Reliability Engineering]]"
  - "[[../06-Metricas/01-dora-metrics|DORA Metrics]]"
  - "[[../03-Procesos/10-incidient-management|Incident Management]]"
  - "[[../09-DevOps-Infra/09-incident-response|Incident Response]]"
---

# SLAs, SLOs y Error Budgets

Definir y gestionar niveles de servicio es fundamental para balancear confiabilidad con velocidad de innovación.

## Jerarquía de niveles de servicio

```
SLA (Service Level Agreement)    ← Compromiso externo con clientes
  └── SLO (Service Level Objective) ← Meta interna de confiabilidad
       └── SLI (Service Level Indicator) ← Métrica medida en producción
            └── Error Budget ← Tolerancia允许ada de fallos
```

## SLI (Service Level Indicator)

La métrica concreta que mide el nivel de servicio.

### SLIs comunes

| SLI | Fórmula | Ejemplo de medición |
|-----|---------|-------------------|
| **Disponibilidad** | exit requests / total requests | 99.95% uptime |
| **Latencia** | requests < threshold / total requests | 99% < 200ms |
| **Throughput** | successful requests / time | 10K req/min |
| **Error rate** | errors / total requests | < 0.1% |
| **Durabilidad** | data retained / data written | 99.999999% |

### Ejemplo de SLI con datos

```python
# Disponibilidad en 30 días
total_requests = 10_000_000
failed_requests = 2_500
availability = (total_requests - failed_requests) / total_requests
# = 99.975%

# Latencia p99
latencies = [...] # 10M samples
p99 = percentile(latencies, 99)
# = 180ms (target: < 200ms ✓)
```

## SLO (Service Level Objective)

El target interno que el equipo se compromete a mantener.

### SLOs típicos por tipo de servicio

| Tipo de servicio | Disponibilidad | Latencia p99 | Error rate |
|-----------------|----------------|-------------|------------|
| **Mission-critical** (pagos) | 99.99% | < 100ms | < 0.01% |
| **Business-critical** (API pública) | 99.95% | < 200ms | < 0.1% |
| **Standard** (internal tools) | 99.9% | < 500ms | < 0.5% |
| **Best effort** (analytics) | 99.5% | < 1s | < 1% |

### Plantilla de SLO

```markdown
## SLO: [Nombre del servicio]

**Período de medición**: Rolling 30 days
**SLO target**: 99.95% disponibilidad

### SLI elegido
[Descripción de cómo se mide]

### Justificación del target
- Requisito del cliente: 99.9%
- Competitive benchmark: 99.95%
- Costo de mayor confiabilidad: $X/mes

### Consecuencias de violar
- Customer impact assessment
- Revenue impact
- Brand impact
```

## Error Budget

La cantidad máxima de fallos permitidos antes de que el SLO se incumpla.

### Cálculo del Error Budget

```
Error Budget = 1 - SLO

SLO 99.9%  → Error Budget = 0.1% = 43.8 minutos/mes
SLO 99.95% → Error Budget = 0.05% = 21.9 minutos/mes
SLO 99.99% → Error Budget = 0.01% = 4.38 minutos/mes
```

### Budget por dimensiones

| SLO | Time Budget | Request Budget (10M req/mes) |
|-----|-------------|------------------------------|
| 99.9% | 43.8 min/mes | 10,000 failed requests |
| 99.95% | 21.9 min/mes | 5,000 failed requests |
| 99.99% | 4.38 min/mes | 1,000 failed requests |

### Error Budget Policy

```markdown
## Error Budget Policy

### Consumo < 50% (Saludable)
- Deploy libremente
- Innovation sprints permitidos
- Tech debt paydown permitido

### Consumo 50-80% (Precaución)
- Deploy con approvals adicionales
- Focus en testing y observabilidad
- Reducir scope de features nuevas

### Consumo 80-100% (Crítico)
- Solo deploy de bug fixes y hotfixes
- Freeze de features nuevas
- Todas las manos en deck: reliability sprint

### Consumo 100% (Violación)
- Incidente mayor declarado
- Post-mortem obligatorio
- Plan de remediación en 48 horas
- Review con management
```

## SLA (Service Level Agreement)

Compromiso contractual externo con consecuencias medibles.

### Elementos de un SLA

| Elemento | Descripción | Ejemplo |
|----------|-------------|---------|
| **Scope** | Servicios cubiertos | API pública, dashboard |
| **Metrics** | SLIs medidos | Disponibilidad, latencia |
| **Targets** | SLOs contractuales | 99.9% uptime |
| **Reporting** | Frecuencia y formato | Monthly report |
| **Remedies** | Penalizaciones por incumplimiento | Credit 10% del fee |
| **Exclusions** | Qué no cubre | Maintenance windows |

### Ejemplo de SLA structure

```markdown
## Service Level Agreement — API Service

### 1. Disponibilidad
Provider garantiza 99.95% de disponibilidad mensural.

### 2. Medición
Basado en health check endpoint, medido cada 60 segundos.

### 3. Maintenance Windows
Primer martes de cada mes, 02:00-04:00 UTC.
No contabiliza para availability.

### 4. Reporting
Dashboard público actualizado en tiempo real.
Reporte mensual enviado por email.

### 5. Remedies
| Availability | Credit |
|-------------|--------|
| 99.9% - 99.95% | 5% monthly fee |
| 99.0% - 99.9% | 10% monthly fee |
| < 99.0% | 25% monthly fee |
```

## Implementación práctica

### Stack de medición

| Componente | Herramienta | Propósito |
|-----------|-------------|-----------|
| **Metrics** | Prometheus, Datadog | Collect SLIs |
| **Alerting** | PagerDuty, OpsGenie | Alert on SLO burn |
| **Dashboard** | Grafana, Datadog | Visualize error budget |
| **Reporting** | Custom scripts | Monthly SLA reports |
| **Incident tracking** | Jira, PagerDuty | Track incidents |

### Burn rate alerting

```
Burn Rate = actual_error_rate / SLO_error_rate

Burn Rate 14.4x → Alert en 1 hora (budget agota en 1 día)
Burn Rate 6x   → Alert en 6 horas
Burn Rate 3x   → Alert en 1 día
Burn Rate 1x   → Alert en 3 días (budget agota en 30 días)
```

## Anti-patterns

- **100% SLO**: objetivo irreal, crea miedo a deploy
- **Vanity SLOs**: metrics que nadie monitorea
- **No consequences**: error budget que no afecta decisiones
- **Ignoring maintenance windows**: no descontar maintenance planificado
- **Gaming metrics**: optimizar el SLI sin mejorar el servicio real
