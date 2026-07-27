---
title: "Harness: DevOps / Infraestructura"
tags:
  - agents/harness
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Harness por Rol"
aliases:
  - "DevOps Harness"
  - "SRE"
related:
  - "[[01-diseno-de-harnesses]]"
  - "[[10-harness-soporte-operaciones]]"
---

# Harness: DevOps / Infraestructura

## Perfil del Rol

| Aspecto | Descripción |
|---------|-------------|
| **Cargo** | DevOps Engineer, SRE, Infraestructura |
| **Enfoque** | CI/CD, monitoreo, deployments, disponibilidad |
| **Volumen** | Alto (alertas, incidents) |
| **Sensibilidad** | Alta (acceso a infraestructura) |

## Harness Diseñado

```yaml
model: claude
mode: primary
permission:
  read: allow
  edit: allow   # Puede modificar configs (con supervisión)
  bash: allow   # Puede ejecutar scripts de infra

tools:
  - web_search
  - context7
  - file_read
  - file_write
  - bash

context:
  - kb-devops/          # Procesos CI/CD
  - kb-infraestructura/ # Arquitectura de infra
  - kb-monitoreo/       # Dashboards y alertas

rules:
  - "Nunca hacer deploy a producción sin aprobación"
  - "Siempre verificar health checks post-deploy"
  - "Mantener rollback plan para cada cambio"
  - "Documentar incidentes post-mortem"
  - "Seguir principios de Infrastructure as Code"
```

## Agentes Recomendados

| Agente | Función | Ejemplo de uso |
|--------|---------|----------------|
| **CI/CD Agent** | Gestiona pipelines | "¿Por qué falló el build #1234?" |
| **Monitoreo** | Analiza métricas | "¿Cuál es el uptime del último mes?" |
| **Incident Manager** | Gestiona incidents | "Hay un incidente P1, ¿qué pasos seguir?" |
| **Capacity Planner** | Planifica capacidad | "¿Necesitamos escalar recursos?" |

## Ver también

- [[01-diseno-de-harnesses|Diseño de Harnesses]]
- [[10-harness-soporte-operaciones|Siguiente: Soporte]]
- [[06-Arquitectura/06-escalabilidad|Escalabilidad]]
