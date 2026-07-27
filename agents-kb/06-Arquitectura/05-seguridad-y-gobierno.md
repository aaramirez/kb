---
title: "Seguridad y Gobierno"
tags:
  - agents/arquitectura
  - type/guia
  - difficulty/avanzado
created: 2026-07-27
updated: 2026-07-27
category: "Arquitectura"
aliases:
  - "Security"
  - "Governance"
related:
  - "[[04-gestion-de-permisos]]"
  - "[[06-escalabilidad]]"
---

# Seguridad y Gobierno

## Marco de Gobierno de IA

```
┌─────────────────────────────────────────┐
│         COMITÉ DE IA                    │
│  (Estrategia, políticas, aprobación)    │
└──────────────────┬──────────────────────┘
                   │
    ┌──────────────┼──────────────┐
    │              │              │
┌───▼───┐    ┌────▼────┐    ┌───▼───┐
│SEGURIDAD│  │CALIDAD  │  │ETICA   │
│         │  │         │  │        │
│Permisos │  │Testing  │  │Sesgos  │
│Auditoría│  │Monitoreo│ │Transparencia│
│Datos    │  │Métricas │  │DDHH    │
└─────────┘  └─────────┘  └────────┘
```

## Pilares de Seguridad

### 1. Datos
- Clasificar datos: pública, interna, confidencial, restringida
- Agentes NUNCA acceden a datos restringidos sin autorización explícita
- Encriptar datos en tránsito y en reposo

### 2. Acceso
- Autenticación fuerte (OAuth 2.0)
- Autorización basada en roles (RBAC)
- Tokens de corta duración

### 3. Auditoría
- Log de cada acción del agente
- Retención de logs por 6+ meses
- Revisión periódica de auditoría

### 4. Resiliencia
- Backup de knowledge bases
- Plan de recuperación ante incidentes
- Failover a humano

## Compliance Regulatorio

| Regulación | Requisito para Agentes |
|------------|----------------------|
| **PDPA/LFPDPPP** | Protección de datos personales |
| **ISO 27001** | Gestión de seguridad |
| **SOC 2** | Controles de seguridad |
| **GDPR** | Derecho al olvido (si aplica) |

## Ver también

- [[04-gestion-de-permisos|Permisos]]
- [[06-escalabilidad|Escalabilidad]]
- [[07-Retos-Soluciones/03-retos-de-seguridad|Retos de Seguridad]]
