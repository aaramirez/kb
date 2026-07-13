---
title: "Chaos Engineering"
tags:
  - sf/practicas
  - type/guia
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
aliases:
  - "Chaos Engineering"
  - "Game day"
  - "Chaos Monkey"
  - "Litmus"
  - "Chaos experiment"
related:
  -  "./12-observabilidad-practicas|Observabilidad"
  -  "./13-feature-flags|Feature flags"
  -  "./11-definition-of-demo|Definition of Done"
  -  "./06-code-review-best-practices|Code review"
  -  "../03-Procesos/incident-response|Incident Response"
  -  "../01-Fundamentos/resilience-patterns|Resilience patterns"
  -  "../05-Herramientas/monitoring-tools|Monitoring tools"
  -  "../06-Metricas/performance-metrics|Performance metrics"
  -  "../08-Calidad/READ-SRE|SRE Quality"
  -  "./12-observabilidad-practicas|Observabilidad"

category: "Prácticas y estándares"
---

# Chaos Engineering

## introduction

Chaos engineering is the practice of testing a system by randomly shutting down resources and components to see how it behaves, with the purpose of discovering weaknesses before they cause outages.

## Principles

| principle | description |
|-----------|-------------|
| Start with baseline | define normal state (e.g., p99 < 100ms) |
| Hypothesize steady state | predict what should happen |
| Introduce variedions | e.g., kill a service, latency |
| measure | Compare actual vs predicted |
| remediate | fix discovered issues |

## Game Day

Game Days are planned chaos exercises. The team simulates failure scenarios in a safe environment.

### Anatomy of Game Day

| Phase | activity |
|-------|----------|
| plan | define what to test, what tools to use |
| execute | run the experiment (using Chaos Monkey, Litmus, etc) |
| observe | monitor dashboards, SLOs, alerts |
| analyze | identify gaps in observability/response |
| improve | create actions for remediation |

### Scenario examples

| scenario | action | Expected observation |
|----------|--------|----------------------|
| Kill a service | stop a pod in Kubernetes | Service mesh redirects to another instance |
| Add latency | inject 2s delay | p99 spikes, circuit breaker opens |
| network partition | introduce failure in traffic | eventual consistency may degrade |
| resource exhaustion | fill up disk | logs management kicks in |

## Tools

| Tool | Use for |
|------|---------|
| Chaos Monkey (Simian Army) | random instance termination |
| Litmus | kubernetes-native chaos |
| gremlin | hosted chaos platform |
| chaos toolkit | customizable experiments |
| wiremock/pumba | service-level fault injection |

### Chaos Monkey example

A Chaos Monkey runs at a specified time interval and randomly shuts down production instances (in a fault-tolerant architecture).

### Litmus example

```yaml
apiVersion: litmuschaos.io/v1alpha1

kind: ChaosEngine
metadata:
  name: engine-nginx
spec:
  appinfo:
    appns: default
    applabel: app=nginx
    appkind: deployment
  chaosServiceAccount: litmus
  experiments:
    - name: pod-delete
      spec:
        components:
          env:
            - name: TOTAL_CHAOS_DURATION
              value: "30"
```

## Observability as a prerequisite

You cannot do Chaos engineering without robust observability. Each experiment must be observable; otherwise you cannot validate the hypothesis.

See [[12-observabilidad-practicas]].

## Blast radius

Run experiments in a controlled fashion, limiting blast radius:

- start in staging or a low impact environment
- Use feature flags for toggle introduce

See [[13-feature-flags]] for gradual rollout.

## When to adopt chaos engineering

- your system has at least basic fault tolerance
- you already have CI/CD
- you have monitoring and alerting
- your team has Incident Response processes

See [[../03-Procesos/incident-reponse|IR]].

## FAQs

| Question | Answer |
|----------|--------|
| Is it safe? | Yes, when done gradually. |
| is it just breaking stuff? | No, it's science: hypothesis, exp, conclusion |
| can it be continued? | Yes, leading organizations run weekly game days |
| who should run it? | SRE / platform / senior dev |

## Related pages

- [Observabilidad](./12-observabilidad-practicas) — prerequisite for chaos
- [Feature flags](./13-feature-flags) — gradual introduce of chaos
- [Definition of done](./11-definition-of-done) — resilience as part of DoD
- [Performance metrics](../06-Metricas/performance-metrics) — baseline for experiments
- [Incident Response](../03-Procesos/incident-response) — what happens when the experiment finds a real outage
