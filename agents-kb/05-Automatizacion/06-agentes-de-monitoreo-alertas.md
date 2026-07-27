---
title: "Agentes de Monitoreo y Alertas"
tags:
  - agents/automatizacion
  - type/concepto
  - difficulty/avanzado
created: 2026-07-27
updated: 2026-07-27
category: "Automatización"
aliases:
  - "Monitoring"
  - "Alert Management"
related:
  - "[[02-agentes-de-gestion-de-red]]"
  - "[[07-agentes-de-reportes-dashboards]]"
---

# Agentes de Monitoreo y Alertas

## Arquitectura

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   FUENTES   │───▶│   AGENTE    │───▶│  ACCIONES   │
│  de Datos   │    │ de Monitoreo│    │             │
└─────────────┘    └──────┬──────┘    └─────────────┘
                          │
                   ┌──────▼──────┐
                   │  DECISIÓN   │
                   │  ¿Alertar?  │
                   │  ¿Escalar?  │
                   │  ¿Resolver? │
                   └─────────────┘
```

## Tipos de Alertas

| Nivel | Urgencia | Ejemplo | Acción |
|-------|----------|---------|--------|
| **P1 - Crítica** | Inmediata | Caída de servicio | Alerta + escala humano |
| **P2 - Alta** | < 15 min | Degradación severa | Alerta + intento resolver |
| **P3 - Media** | < 1 hora | Anomalía detectada | Registra + revisión |
| **P4 - Baja** | Diaria | Métricas fuera de rango | Reporte |

## Agentes de Monitoreo

| Agente | Función | Cobertura |
|--------|---------|-----------|
| **Infrastructure Monitor** | Servidores, red, storage | Infraestructura |
| **Application Monitor** | Performance de apps | Capa de aplicación |
| **Business Monitor** | KPIs de negocio | Capa de negocio |
| **Security Monitor** | Intentos de acceso, anomalías | Seguridad |

## Respuesta Automática

```yaml
auto_response:
  - condition: "cpu > 90% for 5min"
    action: "scale_up_instances"
    notify: "infra-team"
    
  - condition: "error_rate > 10% for 2min"
    action: "rollback_last_deploy"
    notify: "dev-team + management"
    
  - condition: "disk > 85%"
    action: "cleanup_logs"
    notify: "infra-team"
```

## Ver también

- [[02-agentes-de-gestion-de-red|Gestión de Red]]
- [[07-agentes-de-reportes-dashboards|Reportes]]
- [[03-Harness-Por-Rol/09-harness-devops-infraestructura|Harness DevOps]]
