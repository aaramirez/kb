---
title: "Observabilidad — Prácticas"
tags:
  - sf/practicas
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
aliases:
  - "Observabilidad"
  - "OpenTelemetry"
  - "Logs metrics traces"
  - "Telemetry"
  - "Monitoring"
related:
  -  "../06-Metricas/performance-metrics|Performance metrics"
  -  "./11-definition-of-done|DoD"
  -  "./01-coding-standards|Coding"
  -  "./03-test-driven-development|TDD"
  -  "./06-code-review-best-practices|Code Review"
  -  "./08-api-design-standards|API Standards"
  -  "../03-Procesos/incident-response|IR"
  -  "../05-Herramientas/monitoring-tools|Monitoring tools"
  -  "../01-Fundamentos/observability-basics|Observability basics"
  -  "./14-chaos-engineering|Chaos Engineering"
  -  "../08-Calidad/READ-SRE|SRE Quality"
  -  "../06-Metricas/coverage-metrics|Coverage"
  -  "./11-definition-of-done|DoD"

category: "Prácticas y estándares"
---

# Observabilidad – Prácticas

## Introducción

Observabilidad es la capacidad de inferir el estado interno de un sistema a partir de las señales externas. los tres pilares:
logs, metrics and traces.

## The three pillars

| Pilar | Descripción |
|-------|-------------|
| **Logs** | Eventos individuales, con nivel de severidad |
| **Metrics** | Datos agregados sobre comportamiento |
| **Traces** | Narrativa de una solicitud a través de un sistema |

## Logging best practices

### Log structure

```json
{"timestamp":"2026-07-13T10:00:00Z","level":"WARN","message":"Connection pool exhausted","service":"orders","trace_id":"abc123"}
```

### Log levels

| Level | Use for |
|-------|---------|
| ERROR | system is broken |
| WARN | something unexpected, but handled |
| INFO | routine important events |
| DEBUG | verbose, for development |
| TRACE | extremely detailed steps |

### rules

- No sensitive information in logs.
- Write structured logs (JSON).
- Use correlation IDs (trace_id) to link logs.

### Metrics

- Counters: number of requests, errors
- Gauges: current memory, queue size
- Histograms: latency p50/p95/p99

### traces

OpenTemeletry is recommended:

```python
from opentelemetry import trace
tracer = trace.get_tracer(__name__)
with tracer.start_as_current_span("process-payment"):
    do_payment()
```

## OpenTelemetry

Ot is the standard for observability, providing libraries and agents to emit logs, traces and metrics. Itement from application code.

| Component | function |
|----------|----------|
| OTel API | defines how to generate telemetry |
| OTel SDK | Implementation |
| OTel Collector | receive, process, export |

## Dashboards

Each service should provide a Grafana dashboard:

- Health overview
- Error rate
- p50/p99 latency
- Throughput (RPM/CPM)
- Resource usage (CPU/RAM)

## SLO / SLA / Error budget

| Concept | definition |
|---------|-----------|
| SLO | target level of reliability |
| SL| actual performance contract |
| Error Budget | allowed window of unavailability |

Related: [[../06-Metricas/performance-metrics|Performance metrics]].

## Observability in practice

### Instrumentation checklist:

| action | tool/approach |
|--------|---------------|
| Log correlation | set trace_id for each request |
| automated response monitoring | p99 latency alert |
| dashboard for a new service | SLO initial target (e.g., 99.9%) |
| 4 golden signals per service | latency, traffic, errors, saturation |

### Post-launch observability

1. Deploy with feature flag
2. Validate logs/metrics/traces make sense
3. adjust thresholds

See also: [[13-feature-flags]] and [[14-chaos-engineering]].

## Related pages

- [DoD checklist](./11-definition-of-done) — Observability as condition for release
- [Chaos Engineering](./14-chaos-engineering) — validates observability
- [Feature flags](./13-feature-flags) — gradual rollout + observability
- [Performance metrics](../06-Metricas/performance-metrics) — Basis for SLOs
