---
title: "Incident Response y Post-Mortems"
tags:
  - sf/devops
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "Incident Management"
  - "Post-Mortem"
  - "On-Call"
  - "Runbook"
related:
  - "[[../09-DevOps-Infra/08-site-reliability|SRE]]"
  - "[[../06-Metricas/13-mean-time-recovery|MTTR]]"
  - "[[../03-Procesos/10-incidient-management|Gestión de Incidentes]]"
  - "[[../09-DevOps-Infra/01-devops-ciclo|El Ciclo de DevOps]]"
---

# Incident Response y Post-Mortems

La respuesta efectiva a incidentes es crítica para mantener la confiabilidad del sistema. Este artículo cubre el ciclo completo: desde la detección hasta la mejora post-incidente.

## Ciclo de Incident Response

```
┌─────────────────────────────────────────────────────┐
│              Incident Response Lifecycle             │
│                                                     │
│  Detection → Triage → Mitigation → Resolution       │
│       │         │          │            │           │
│       ▼         ▼          ▼            ▼           │
│   Alerting   Severity   Contain     Root Cause      │
│   Monitor    Assign     Fix         Analysis        │
│                              │            │          │
│                              ▼            ▼          │
│                           Recovery    Post-Mortem    │
│                              │            │          │
│                              ▼            ▼          │
│                           Verify      Improve       │
└─────────────────────────────────────────────────────┘
```

## Severity Levels

| Level | Nombre | Descripción | Response Time | Ejemplo |
|-------|--------|-------------|---------------|---------|
| **SEV1** | Critical | Service down, data loss, security breach | Immediate | Production outage |
| **SEV2** | Major | Degraded performance, feature unavailable | < 30 min | Slow API responses |
| **SEV3** | Minor | Limited impact, workaround available | < 2 hours | UI bug, non-critical |
| **SEV4** | Low | Cosmetic, no user impact | < 24 hours | Typo, non-urgent |

### Decision matrix

```
Impact: High ─────────────────────────────── Impact: Low
   │                                           │
   │  SEV1: All hands    SEV2: Team leads      │
Severity│  immediately needed              │
High   │  • War room               │  Severity│
   │  • CEO notified       SEV3: Assigned        │ Low
   │                       engineer             │
   │  SEV2: Page on-call   • No escalation      │
   │                       │                    │
   │                       SEV4: Backlog        │
   └──────────────────────────────────────────────┘
```

## On-Call

### Rotation schedule

```yaml
# PagerDuty-style rotation
rotation:
  primary:
    schedule: "1 week on / 2 weeks off"
    responders:
      - name: "Alice"
        phone: "+1-555-0101"
      - name: "Bob"
        phone: "+1-555-0102"

  secondary:
    schedule: "1 week on / 2 weeks off (offset)"
    responders:
      - name: "Charlie"
        phone: "+1-555-0103"
      - name: "Diana"
        phone: "+1-555-0104"

  escalation:
    - after: 15 min
      notify: secondary
    - after: 30 min
      notify: team-lead
    - after: 60 min
      notify: engineering-director
```

### On-call best practices

| Práctica | Descripción |
|----------|-------------|
| **Handoff document** | Context between rotations |
| **Runbook per alert** | Step-by-step for each alert |
| **No hero culture** | Ask for help early |
| **Compensate fairly** | On-call pay or time off |
| **Rotate regularly** | Prevent burnout |
| **Track load** | Monitor pages per rotation |

## Runbooks

### Estructura de un runbook

```markdown
# Runbook: High Error Rate Alert

## Alert
Service: myapp-service
Alert: high_error_rate (>5% for 5 min)

## Impact
Users experiencing 500 errors on API endpoints.
~10% of requests failing.

## Diagnosis

### Step 1: Check service status
kubectl get pods -n production -l app=myapp

### Step 2: Check recent deployments
kubectl rollout history deployment/myapp -n production

### Step 3: Check logs
kubectl logs -n production -l app=myapp --tail=100 | grep ERROR

### Step 4: Check dependencies
curl -s http://myapp-service/health | jq .

## Mitigation

### Option A: Rollback
kubectl rollout undo deployment/myapp -n production

### Option B: Restart pods
kubectl rollout restart deployment/myapp -n production

### Option C: Scale up
kubectl scale deployment/myapp --replicas=5 -n production

## Escalation
If above steps don't resolve:
1. Page team lead
2. Open war room
3. Check downstream services

## Post-Incident
- [ ] Create post-mortem document
- [ ] Update runbook if needed
- [ ] Fix root cause
```

## Blameless Post-Mortems

### Principe fundamental

> "Blameless does not mean we are blind to problems. It means we create an environment where we can discuss failures without fear of punishment."

### Template de post-mortem

```markdown
# Post-Mortem: Production Outage 2026-07-10

## Summary
- **Duration**: 47 minutes (14:23 - 15:10 UTC)
- **Impact**: 100% of API requests failing
- **Severity**: SEV1
- **Incident commander**: Alice

## Timeline
- 14:23 - Alert fires: high_error_rate
- 14:25 - On-call (Bob) acknowledges alert
- 14:28 - Bob starts diagnosis, checks pods
- 14:32 - Bob identifies database connection pool exhaustion
- 14:35 - Bob restarts service (attempts mitigation)
- 14:40 - Restart doesn't fix, escalation to Alice
- 14:45 - Alice identifies root cause: new migration caused connection leak
- 14:50 - Alice rolls back migration
- 15:00 - Database connections recover
- 15:10 - All services healthy, incident resolved

## Root Cause
Database migration v234 introduced a connection leak. Each API request opened a new connection but didn't close it properly after the migration changes.

## Impact
- 100% API failure for 47 minutes
- ~50,000 requests failed
- 3 customer escalations
- No data loss

## What went well
- Alert fired quickly (within 5 min of issue start)
- On-call responded within 2 minutes
- Escalation was smooth
- Rollback was clean

## What went wrong
- Migration wasn't caught in testing
- Connection pool monitoring wasn't alerting
- No load test for migration

## Action Items
| Action | Owner | Deadline | Status |
|--------|-------|----------|--------|
| Add connection pool monitoring | Bob | 2026-07-17 | Open |
| Add migration testing to CI | Charlie | 2026-07-24 | Open |
| Load test all migrations | Diana | 2026-07-31 | Open |
| Fix connection leak in migration | Alice | 2026-07-14 | Done |

## Lessons Learned
- Migrations need connection pool testing
- Monitoring should cover all critical resources
- Small changes can have big impacts
```

### Post-mortem principles

| Principle | Descripción |
|-----------|-------------|
| **Blameless** | Focus on systems, not people |
| **Written** | Documented and shared |
| **Data-driven** | Use metrics and timelines |
| **Action-oriented** | Every finding has an action item |
| **Follow-up** | Verify actions were completed |
| **Time-boxed** | Complete within 1 week |

## Communication during incidents

### Internal communication

```
Incident Channel: #inc-2026-07-10-db-leak

@on-call: Investigating high error rate on API
@on-call: Found database connection pool exhaustion
@lead: Escalating, joining war room
@lead: Root cause identified: migration v234
@lead: Rolling back migration
@on-call: Rollback complete, monitoring recovery
@lead: All services healthy. Incident resolved.
@lead: Post-mortem scheduled for tomorrow 10am
```

### External communication

```markdown
# Status Page Update

[14:23] Investigating
We are investigating reports of API errors.
Some users may experience 500 errors.

[14:45] Identified
We have identified the issue as a database problem.
Working on a fix.

[15:10] Resolved
The issue has been resolved. All API services
are operating normally. We will provide a
post-mortem within 48 hours.
```

## Incident metrics

| Métrica | Descripción | Objetivo |
|---------|-------------|----------|
| **MTTD** | Mean Time To Detect | < 5 min |
| **MTTA** | Mean Time To Acknowledge | < 2 min |
| **MTTM** | Mean Time To Mitigate | < 30 min |
| **MTTR** | Mean Time To Resolve | < 1 hour |
| **MTBF** | Mean Time Between Failures | > 30 days |

Relacionado con [[../06-Metricas/13-mean-time-recovery|MTTR]].

## Relación con otros conceptos

- [[../09-DevOps-Infra/08-site-reliability|SRE]] — Framework para confiabilidad
- [[../06-Metricas/13-mean-time-recovery|MTTR]] — Métrica clave de incidentes
- [[../03-Procesos/10-incidient-management|Gestión de Incidentes]] — Proceso formal
- [[../09-DevOps-Infra/01-devops-ciclo|El Ciclo de DevOps]] — Sharing en CALMS
- [[../08-Calidad-Seguridad/07-devsecops|DevSecOps]] — Security incidents
- [[../06-Metricas/07-team-health-metrics|Team Health Metrics]] — Post-mortem como mejora
