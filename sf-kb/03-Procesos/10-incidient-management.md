---
title: "Gestión de Incidentes"
tags:
  - sf/procesos
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "Incident Management"
  - "On-Call"
  - "Post-Mortem"
  - "PagerDuty"
related:
  - "[[../03-Procesos/11-change-management|Change Management]]"
  - "[[../03-Procesos/12-problema-management|Problem Management]]"
  - "[[../01-Fundamentos/07-devops-filosofia|DevOps]]"
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD]]"
  - "[[../06-Metricas/README|Métricas]]"
---

# Gestión de Incidentes

La **Gestión de Incidentes** es el proceso de detectar, responder, resolver y aprender de interrupciones en servicios de producción, minimizando impacto al negocio y usuarios.

## Definición

> Incident Management es el conjunto de procesos para identificar, analizar y resolver anomalías en sistemas de producción, restaurando el servicio lo más rápido posible y documentando el aprendizaje.

## Ciclo de vida de un incidente

```
Detección → Triagem → Investigación → Resolución → Recuperación → Post-Mortem
    │          │            │              │              │              │
  Alerta    Severidad    Root Cause    Fix/Workaround  Monitoring   Learning
```

## Niveles de severidad

| Severidad | Impacto | Tiempo de respuesta | Ejemplo |
|-----------|---------|---------------------|---------|
| **SEV1** (Crítico) | Servicio caído, pérdida de datos | 5 minutos | API principal down, data breach |
| **SEV2** (Mayor) | Degradación significativa | 15 minutos | Performance degradada, feature rota |
| **SEV3** (Menor) | Impacto limitado | 1 hora | Bug en función no crítica |
| **SEV4** (Bajo) | Sin impacto al usuario | Siguiente día | Error en logs, cosmetic bug |

### Escalamiento automático

```
SEV1: Dev → On-Call → Manager → VP Engineering → CEO
       0min    5min     15min       30min         1h

SEV2: Dev → On-Call → Manager
       0min   15min    1h

SEV3: Dev → On-Call
       0min   4h
```

## On-Call (Guarancia)

### Estructura de rotación

| Aspecto | Recomendación |
|---------|---------------|
| **Duración del turno** | 1 semana (no más) |
| **Horario** | 24/7 con compensación |
| **Handoff** | Documentación al cambiar turno |
| **Compensación** | Pago extra, tiempo libre |

### On-Call Engineer checklist

```markdown
## Inicio de turno
- [ ] Revisar alertas activas
- [ ] Verificar dashboards
- [ ] Confirmar acceso a herramientas
- [ ] Revisar incidentes abiertos

## Durante el turno
- [ ] Responder alertas según SLA
- [ ] Documentar acciones en runbook
- [ ] Escalar si es necesario

## Fin de turno
- [ ] Documentar incidentes resueltos
- [ ] Handoff al siguiente on-call
- [ ] Resumen de estado actual
```

### Reglas para on-call saludable

1. **Máximo 1 semana** por rotación
2. **Compensación justa** (dinero o tiempo libre)
3. **Runbooks actualizados** para cada alerta
4. **Escalamiento claro** — nunca solo
5. **Post-shift recovery** — día libre tras semana de on-call intenso

## Runbooks

Documentos paso-a-paso para resolver incidentes conocidos:

```markdown
# Runbook: API High Latency

## Síntomas
- Alerta: p99 latency > 2s
- Users report slowness

## Diagnóstico
1. Verificar dashboard de latency
2. Revisar CPU/memory de pods
3. Verificar DB connection pool

## Acción
1. Si DB pool saturated: 
   kubectl scale deployment api --replicas=6
2. Si CPU high:
   kubectl top pods -l app=api
   Escalar horizontalmente

## Verificación
- Latency vuelve a < 500ms
- Error rate < 0.1%

## Escalamiento
- Si no se resuelve en 15min: SEV2
- Contactar: @oncall-backend
```

### Tipos de runbooks

| Tipo | Propósito | Ejemplo |
|------|-----------|---------|
| **Response runbook** | Resolver incidente específico | "API down" |
| **Escalation runbook** | Cuándo y cómo escalar | "SEV1 procedure" |
| **Recovery runbook** | Restaurar servicio | "DB failover" |
| **Diagnostic runbook** | Investigar problema | "High latency checklist" |

## Post-Mortem (Análisis post-incidente)

### Estructura del post-mortem

```markdown
# Post-Mortem: [Incidente]

## Resumen
- **Fecha**: YYYY-MM-DD
- **Duración**: X horas Y minutos
- **Severidad**: SEV1/2/3
- **Impacto**: X usuarios afectados, $Y perdidos

## Timeline
- 14:00 — Alerta detectada
- 14:05 — On-call notificado
- 14:10 — Investigación inicia
- 14:25 — Root cause identificado
- 14:35 — Fix implementado
- 14:45 — Servicio restaurado

## Root Cause
- [Descripción técnica del problema]

## Contributing Factors
- Factor 1: [descripción]
- Factor 2: [descripción]

## What Went Well
- [Lista de cosas que funcionaron]

## What Could Improve
- [Lista de mejoras]

## Action Items
| Acción | Owner | Fecha | Estado |
|--------|-------|-------|--------|
| [Acción 1] | @dev1 | 2024-04-01 | Pendiente |
| [Acción 2] | @dev2 | 2024-04-15 | Pendiente |
```

### Blameless Post-Mortem

Principios fundamentales:

- **Enfocarse en el sistema**, no en la persona
- **Qué salió mal**, no quién falló
- **Mejorar procesos**, no castigar
- **Sicología segura** para reportar errores

> "Las personas no fallan, los sistemas fallan."

## Herramientas de gestión de incidentes

| Categoría | Herramientas |
|-----------|-------------|
| **Alerting** | PagerDuty, Opsgenie, Grafana Alerting |
| **Monitoring** | Prometheus, Datadog, New Relic |
| **Communication** | Slack (#incident), Statuspage |
| **Tracking** | Jira (incidents), PagerDuty incidents |
| **Post-mortem** | Confluence, Notion, GitHub |

## Métricas de incidentes

| Métrica | Objetivo |
|---------|----------|
| **MTTD** (Mean Time To Detect) | < 5 minutos |
| **MTTA** (Mean Time To Acknowledge) | < 5 minutos |
| **MTTR** (Mean Time To Resolve) | < 1 hora (SEV1) |
| **Incident Frequency** | < 2 SEV1/mes |
| **Escalation Rate** | < 30% |

Ver más en [[../06-Metricas/README|Métricas de Operaciones]].

## Incident Response checklist

```markdown
## Durante el incidente
- [ ] Crear canal de comunicación (#incident-YYYY-MM-DD)
- [ ] Asignar Incident Commander
- [ ] Documentar timeline en tiempo real
- [ ] Comunicar a stakeholders cada 30 min
- [ ] Implementar fix o workaround

## Después del incidente
- [ ] Confirmar resolución
- [ ] Comunicar resolución
- [ ] Programar post-mortem (dentro de 48h)
- [ ] Crear action items en Jira
- [ ] Actualizar runbooks
```

## Relación con otros conceptos

- [[../03-Procesos/11-change-management|Change Management]] previene incidentes
- [[../03-Procesos/12-problema-management|Problem Management]] investiga causas raíz
- [[../01-Fundamentos/07-devops-filosofia|DevOps]] promueve blameless culture
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD]] reduce incidentes con calidad
- [[../06-Metricas/README|Métricas]] miden la efectividad de respuesta
