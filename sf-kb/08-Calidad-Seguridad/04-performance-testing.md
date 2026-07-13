---
title: "Performance Testing y Load Testing"
tags:
  - sf/calidad
  - type/herramienta
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Calidad y Seguridad"
aliases:
  - "Load Testing"
  - "Performance Testing"
related:
  - "[[../05-Herramientas/07-monitoring|Monitoring]]"
  - "[[../06-Metricas/01-dora-metrics|DORA Metrics]]"
  - "[[../09-DevOps/02-infraestructura|Infrastructure]]"
---

# Performance Testing y Load Testing

## Tipos de Performance Testing

| Tipo | Objetivo | Preguntas que responde |
|------|----------|------------------------|
| **Load Testing** | Carga esperada | ¿Funciona bajo carga normal? |
| **Stress Testing** | Más allá del límite | ¿Qué pasa cuando se satura? |
| **Spike Testing** | Picos repentinos | ¿Soporta tráfico viral? |
| **Endurance Testing** | Larga duración | ¿Hay memory leaks? |
| **Scalability Testing** | Escalabilidad | ¿Crece con la demanda? |

## Herramientas Comparación

| Herramienta | Lenguaje | Tipo | Curva aprendizaje |
|-------------|----------|------|-------------------|
| **k6** | JavaScript | Script | Baja |
| **Gatling** | Scala/Java | Script | Media |
| **JMeter** | Java | GUI/XML | Alta |
| **Locust** | Python | Script | Baja |
| **Artillery** | YAML/JS | Config | Baja |

## k6 (Recomendado)

### Instalación
```bash
# macOS
brew install k6

# Docker
docker pull grafana/k6
```

### Script Básico
```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },  // Ramp up
    { duration: '1m', target: 20 },   // Stay at 20 users
    { duration: '30s', target: 0 },   // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],  // 95% under 500ms
    http_req_failed: ['rate<0.01'],    // < 1% errors
  },
};

export default function () {
  const res = http.get('https://api.example.com/users');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });
  sleep(1);
}
```

### Escenarios Avanzados
```javascript
export const options = {
  scenarios: {
    constant_load: {
      executor: 'constant-vus',
      vus: 50,
      duration: '5m',
    },
    spike_test: {
      executor: 'ramping-vus',
      stages: [
        { duration: '1m', target: 10 },
        { duration: '10s', target: 200 },  // Spike
        { duration: '1m', target: 10 },
      ],
    },
  },
};
```

## Locust

```python
from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 3)

    @task(3)  # Weight: 3x more likely
    def view_products(self):
        self.client.get("/products")

    @task(1)
    def purchase(self):
        self.client.post("/orders", json={
            "product_id": 1,
            "quantity": 2
        })
```

## JMeter

```xml
<?xml version="1.0" encoding="UTF-8"?>
<jmeterTestPlan>
  <TestPlan>
    <ThreadGroup numThreads="100" rampTime="30">
      <HTTPSampler domain="api.example.com"
                   path="/users"
                   method="GET"/>
      <ResponseAssertion>
        <testStrings>
          <string>200</string>
        </testStrings>
      </ResponseAssertion>
    </ThreadGroup>
  </TestPlan>
</jmeterTestPlan>
```

## Métricas Clave

| Métrica | Descripción | Target |
|---------|-------------|--------|
| **Response Time** | Tiempo de respuesta promedio | < 200ms |
| **p95/p99** | Percentiles de latencia | < 500ms / < 1s |
| **Throughput** | Requests por segundo | Según capacidad |
| **Error Rate** | Porcentaje de errores | < 0.1% |
| **Apdex Score** | Satisfacción del usuario | > 0.95 |

## Thresholds y Alerts

```javascript
// k6: Thresholds
export const options = {
  thresholds: {
    'http_req_duration': [
      'p(50)<200',   // Mediana < 200ms
      'p(95)<500',   // 95th percentile < 500ms
      'p(99)<1000',  // 99th percentile < 1s
    ],
    'http_req_failed': ['rate<0.01'],
    'http_reqs': ['rate>100'],  // > 100 req/s
  },
};
```

## CI/CD Integration

```yaml
# GitHub Actions con k6
performance:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - name: Run k6 tests
      uses: grafana/k6-action@v0.3.1
      with:
        filename: tests/performance.js
    - name: Upload results
      uses: actions/upload-artifact@v4
      with:
        name: k6-results
        path: results/
```

## Ver también

- [[03-automated-testing|Testing Automatizado]]
- [[../05-Herramientas/07-monitoring|Monitoring y Observabilidad]]
- [[../06-Metricas/01-dora-metrics|DORA Metrics]]
- [[../09-DevOps/02-infraestructura|Infrastructure as Code]]
