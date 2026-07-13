---
title: "Herramientas de Monitoreo y Observabilidad"
tags:
  - sf/herramientas
  - type/herramienta
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Herramientas y Tecnología"
aliases:
  - "Monitoring Tools"
  - "Observability Stack"
  - "APM"
related:
  - "[[../06-Metricas/README|Métricas]]"
  - "[[06-container-kubernetes]]"
  - "[[../04-Practicas/README|Prácticas]]"
---

## Visión General

Monitoreo y observabilidad son esenciales para operar sistemas confiables. Siguiendo los [[../06-Metricas/README|principios de medición]], un stack completo cubre métricas, logs y traces — los tres pilares de la observabilidad.

## Los Tres Pilares de Observabilidad

| Pilar | Qué captura | Herramientas típicas |
|-------|-------------|---------------------|
| **Metrics** | Agregaciones numéricas over time | Prometheus, Datadog |
| **Logs** | Eventos discretos con contexto | ELK, Loki |
| **Traces** | Request flow entre servicios | Jaeger, Zipkin, Tempo |

## Métricas: Prometheus + Grafana

### Prometheus

| Aspecto | Detalle |
|---------|---------|
| **Modelo** | Pull-based metrics collection |
| **Query** | PromQL |
| **Storage** | Local TSDB + remote write |
| **Alerting** | Alertmanager |
| **Escalabilidad** | Federation, Thanos, Cortex |
| **Costo** | Open-source, self-hosted |

**Conceptos clave**:
- **Metrics**: counters, gauges, histograms, summaries
- **Scrape interval**: Default 15s
- **Service discovery**: Kubernetes, Consul, EC2
- **Recording rules**: Pre-compute expensive queries

```promql
# Ejemplo PromQL
# Error rate por servicio
rate(http_requests_total{status=~"5.."}[5m])
  / rate(http_requests_total[5m])

# P99 latency
histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m]))
```

### Grafana

| Aspecto | Detalle |
|---------|---------|
| **Función** | Visualization + dashboarding |
| **Data sources** | Prometheus, Loki, Tempo, ES, SQL, etc. |
| **Alerting** | Unified alerting |
| **Plugins** | +180 data sources, panels |
| **On-call** | Grafana OnCall (free) |
| **Costo** | Open-source + Cloud tiers |

**Dashboards recomendados**:
- **RED metrics**: Rate, Errors, Duration
- **USE metrics**: Utilization, Saturation, Errors
- **SLI/SLO**: Error budget tracking
- Referencia: [[../06-Metricas/README|Definición de SLIs]]

## Logs: ELK Stack vs Loki

### ELK Stack (Elasticsearch, Logstash, Kibana)

| Aspecto | Detalle |
|---------|---------|
| **Indexing** | Full-text search indexing |
| **Storage** | High (inverted index) |
| **Query** | KQL, Lucene, ESQL |
| **Costo** | Alto (storage + compute) |
| **Features** | ML anomaly detection, SIEM |

### Grafana Loki

| Aspecto | Detalle |
|---------|---------|
| **Modelo** | Index labels only, grep content |
| **Storage** | Bajo (no full-text index) |
| **Query** | LogQL (PromQL-like) |
| **Costo** | Bajo |
| **Integration** | Native Grafana |

**Comparativa directa**:

| Factor | ELK | Loki |
|--------|-----|------|
| Full-text search | ✅✅ | ⚙️ grep-based |
| Storage cost | Alto | ✅ Bajo |
| Query speed | ✅✅ | ✅ |
| Operational cost | Alto | ✅ Bajo |
| Integration | Standalone | ✅ Grafana native |
| Scalability | ✅✅ | ✅ |

## Distributed Tracing: Jaeger vs Zipkin vs Tempo

### Jaeger

| Aspecto | Detalle |
|---------|---------|
| **Origin** | Uber, CNCF graduated |
| **Storage** | Cassandra, Elasticsearch |
| **Client libs** | OpenTelemetry compatible |
| **Sampling** | Adaptive, rate-based |
| **UI** | Trace visualization, comparison |

### Grafana Tempo

| Aspecto | Detalle |
|---------|---------|
| **Integration** | Grafana native |
| **Storage** | Object storage (S3, GCS) |
| **Costo** | Bajo (no indexing) |
| **Query** | TraceQL |
| **Exemplars** | Link metrics → traces |

**Comparativa**:

| Factor | Jaeger | Zipkin | Tempo |
|--------|--------|--------|-------|
| CNCF status | Graduated | — | — |
| Storage cost | Medio | Medio | ✅ Bajo |
| Grafana integration | Plugin | Plugin | ✅✅ Native |
| OpenTelemetry | ✅✅ | ✅ | ✅✅ |
| Query language | — | — | TraceQL |

## APM Commercial

### Datadog

| Aspecto | Detalle |
|---------|---------|
| **Coverage** | Metrics + Logs + Traces + APM + RUM |
| **Pricing** | Per host + per feature |
| **Strengths** | Turnkey, 700+ integrations |
| **AI** | Watchdog anomaly detection |
| **Cost** | $15-23/host/mo + extras |

### New Relic

| Aspecto | Detalle |
|---------|---------|
| **Pricing** | Per-user + data ingest |
| **Free tier** | 100GB/month |
| **Strengths** | Full observability, NRQL |
| **AI** | NRAI (Natural Language Queries) |

### Comparison: Open-source vs Commercial

| Factor | Prometheus/Grafana | Datadog | New Relic |
|--------|-------------------|---------|-----------|
| Cost | ✅ Bajo | ❌ Alto | ⚙️ Medio |
| Setup effort | ❌ Alto | ✅✅ Bajo | ✅ Bajo |
| Customization | ✅✅ Total | ⚙️ | ⚙️ |
| Support | Community | ✅✅ Enterprise | ✅ Enterprise |
| Vendor lock-in | ❌ | ❌ Alto | ⚙️ Medio |
| Features | ✅ | ✅✅ | ✅✅ |

## OpenTelemetry

| Aspecto | Detalle |
|---------|---------|
| **Qué es** | Standard de observabilidad (CNCF) |
| **Signals** | Traces, metrics, logs |
| **Vendor neutral** | Exporta a cualquier backend |
| **Auto-instrumentation** | Libraries para múltiples lenguajes |
| **Collector** | Proxy unificado |

**Recomendación**: Adoptar OpenTelemetry como standard de instrumentación. Vendor-neutral, future-proof.

## Stack Recomendado

### Startup / Small Team
```
Prometheus + Grafana + Loki + Tempo + OpenTelemetry
```

### Enterprise con budget
```
Datadog (full platform) o New Relic
```

### Enterprise open-source
```
Prometheus + Grafana Enterprise + Loki + Tempo + OpenTelemetry
```

## Alerting Best Practices

- Alert on symptoms, not causes
- Use SLO-based alerts
- Route alerts to correct on-call
- Avoid alert fatigue (noise reduction)
- Referencia: [[../04-Practicas/README|On-call practices]]

## Integración

- **Kubernetes**: [[06-container-kubernetes]] — Exporters y sidecars
- **CI/CD**: [[02-herramientas-ci-cd]] — Post-deploy monitoring
- **Testing**: [[04-herramientas-testing]] — Performance baselines
- **Métricas**: [[../06-Metricas/README|SLIs, SLOs, Error Budgets]]
- **AI**: [[07-IA-Software/README|AI-powered observability]]
