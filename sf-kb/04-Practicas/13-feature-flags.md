---
title: "Feature Flags"
tags:
  - sf/practicas
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
aliases:
  - "Feature Toggles"
  - "feature toggles"
  - "experimentation"
  - "gradual rollouts"
  - "release flag"
  - "ops flag"
  - "permission flag"
related:
  -  "./12-observabilidad-practicas|Observabilidad"
  -  "./11-definition-of-done|DoD"
  -  "./03-test-driven-development|TDD"
  -  "./06-code-review-best-practices|Code Review"
  -  "./09-git-conventions|Git conventions"
  -  "../03-Procesos/continuous-improvement|Continuous improv."
  -  "../05-Herramientas/ci-cd-pipelines|CI/CD Pipelines"
  -  "../06-Metricas/performance-metrics|Performance metrics"
  -  "../08-Calidad/READ-DEV|Dev quality"
  -  "../01-Fundamentos/software-design-patterns|SW patterns"

category: "Prácticas y estándares"
---

# Feature flags

## Introduction

Feature flags (también feature toggles) are a pattern that allows turning functionality on or off without deploying new code. Used for gradual rollouts, A/B testing, and kill switches.

## Types of feature flags

| Type | lifespan | Description |
|----------|----------|-------------|
| Release flag | short | hide in-prog. work (trunk-based) |
| Experiment flag | medium | A/B tests |
| Ops flag | long | kill switches for prod |
| Permission flag | indefinite | talk to some org or group |

### Release flags

Enable trunk-based workflow: merge incomplete features to main, hidden behind a flag.

### Ops (Kill) flags

When a dangerous feature needs to be turned off ASAP without redeployment.

## Implementation

### Simple example (python)

```python
from featureflags import FeatureFlag

ff = FeatureFlag()

if ff.is_enabled('new-checkout'):
    use_new_checkout()
else:
    use_old_checkout()
```

### Best practices

| practice | rationale |
|-----------|----------|
| Flag config stored in a service (LaunchDarkly, Split) | restartless toggles |
| Name flags semantically | e.g. `checkout-va-2` |
| always default to off | safe, proactive |
| audit flag usage | avoid zombie flags |
| schedule flag removal | prevent flags accumulation |

### Example config (JSON)

```json
{
  "flags": {
    "new-checkout": {
      "enabled": true,
      "users": ["user-abc"]
    },
    "dark-mode": {
      "enabled": false
    }
  }
}
```

## Zombie danger

Feature flags that are no longer needed cause cognitive pollution and should be removed. Include a flag removal in the DoD: [[11-definition-of-done]].

## LaunchDarkly / Split

Fully managed feature flag as a service:

- serve to specific subsets
- Toggle through web UI
- Run experiments
- kill switches with zero downtime

## gradual rollout strategy

1. Enable flag for internal team (canary)
2. Enable for 1% of users
3. Enable for 10%
4. Enable for 100%
5. Monitor performance and errors
6. Remove the flag entirely

Monitoring flag health is critical. See [[12-observabilidad-practicas|Observabilidad]].

## flags vs experiment

| Feature | Feature flag | Experiment |
|---------|------|------------|
| purpose | release/operate | statistical test |
| duration | temporary | limited |
| randomization | not needed | required |
| Hypotesis | not needed | needed |

## flags in code review

- Ensure flags default to off
- Review flag naming
- Ensure flag configuration is documented

Related: [[06-code-review-best-practices|Code Review]].

## Summary

| Do | Don't |
|----|-------|
| Use for trunk-based dev | leave forever |
| Remove after release | accumulate zombie flags |
| Use a service | embed config in code |
| Document each flag | leave flags without owner |

## Related Pages

- [Observabilidad](./12-observabilidad-practicas) — log and metric each feature toggle
- [DoD](./11-definition-of-done) — Include flag removal in DoD
- [Chaos Engineering](./14-chaos-engineering) — use flag to gradually introduce chaos
- [TDD](./03-test-driven-development) — test toggle state within tests
