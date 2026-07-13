---
title: "Métricas de Salud del Equipo"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "Team Health Metrics"
  - "eNPS"
  - "Team Satisfaction"
  - "Engagement Metrics"
related:
  - "[[../11-Cultura-Equipo/README|Cultura de Equipo]]"
  - "[[../02-Estructura/02-roles-equipo|Roles]]"
  - "[[../02-Estructura/05-engineering-manager|Engineering Manager]]"
  - "[[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]"
  - "[[02-velocity-throughput|Velocity Trends]]"
  - "[[../04-Practicas/14-chaos-engineering|Chaos Engineering]]"
  - "[[09-business-value-metrics|Valor de Negocio]]"
---

## Visión General

Las métricas de salud del equipo miden el bienestar, engagement y capacidad sostenible de las personas. Un equipo que no se mantiene saludable eventualmente colapsa, independientemente de sus métricas técnicas.

## Métricas Principales

### eNPS (Employee Net Promoter Score)

```
eNPS = % Promotores − % Detractores

Pregunta: "En una escala del 0-10, ¿recomendarías trabajar aquí?"
  9-10 = Promotor
  7-8  = Pasivo
  0-6  = Detractor

Ejemplo: 45% promotores − 15% detractores = eNPS +30
```

| Rango eNPS | Interpretación |
|------------|----------------|
| > 50 | Excelente |
| 20-50 | Bueno |
| 0-20 | Necesita atención |
| < 0 | Crítico |

### Encuestas de Salud (Health Checks)

**Spotify Health Check** (modelo popular):

| Área | Estado | Significado |
|------|--------|-------------|
| Easy to release | 🟢🟡🔴 | Facilidad de deployment |
| Suitable for purpose | 🟢🟡🔴 | Arquitectura adecuada |
| Fun | 🟢🟡🔴 | Diversión y motivación |
| Learning | 🟢🟡🔴 | Crecimiento profesional |
| Mission | 🟢🟡🔴 | Claridad de objetivos |
| Pawns or players | 🟢🟡🔴 | Autonomía del equipo |
| Speed | 🟢🟡🔴 | Velocidad percibida |
| Support | 🟢🟡🔴 | Soporte de la organización |
| Teamwork | 🟢🟡🔴 | Colaboración interna |
| Trust | 🟢🟡🔴 | Confianza entre miembros |

### Retention Rate

```
Retention Rate = ((Empleados al inicio − Bajas) / Empleados al inicio) × 100

Ejemplo: (20 − 2) / 20 = 90% retention (anual)
```

| Retention | Salud |
|-----------|-------|
| > 90% | Excelente |
| 80-90% | Normal |
| 70-80% | Preocupante |
| < 70% | Crítico |

### Velocity Trends (como indicador de salud)

```
Velocity Trend = Velocity promedio últimos 3 sprints vs 3 anteriores

↗ Mejorando → Estable ↘ Preocupante (posible burnout)
```

Ver [[02-velocity-throughput]] para detalles de velocity.

### Work-Life Balance Indicators

| Métrica | Cómo medir | Meta |
|---------|------------|------|
| Horas extras | Tracking de commits después de horario | < 5% del tiempo |
| After-hours alerts | PagerDuty alerts nocturnas | Reducing trend |
| Vacation usage | Días de vacaciones tomados / disponibles | > 80% |
| Meeting load | Horas de reunión / semana por persona | < 15h/semana |

## Herramientas de Survey

| Herramienta | Tipo | Costo |
|-------------|------|-------|
| **Officevibe** | Engagement platform | SaaS |
| **15Five** | Performance + surveys | SaaS |
| **TINYpulse** | Pulse surveys | SaaS |
| **Google Forms** | DIY surveys | Gratis |
| **Slack polls** | Quick checks | Gratis |
| **Culture Amp** | Enterprise engagement | Enterprise |

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────────┐
│         TEAM HEALTH DASHBOARD - Squad Alpha      │
├──────────────────────────────────────────────────┤
│ eNPS:              +35   [██████████░] Bueno     │
│ Retention (12m):   92%   [████████████] OK      │
│ Survey Response:   88%   [███████████░] OK      │
│                                                  │
│ Health Check (Spotify):                         │
│   Easy to release:  🟢  Fun:          🟢        │
│   Mission:          🟢  Learning:     🟡        │
│   Teamwork:         🟢  Trust:        🟢        │
│   Support:          🟡  Speed:        🟢        │
│   Autonomy:         🟢  Purpose:      🟢        │
│                                                  │
│ Velocity Trend:    ↗ Mejorando                  │
│ Meeting Load:      12h/week (target: <15h)      │
│ Vacation Usage:    85%                          │
└──────────────────────────────────────────────────┘
```

## Estrategias de Mejora

1. **Health checks trimestrales** — Ritual regular de auto-evaluación
2. **1-on-1s semanales** — Engineering manager con cada miembro
3. **Action items con due dates** — De survey a acción concreta
4. **Transparencia de resultados** — Compartir findings con el equipo
5. **Celebrate wins** — Reconocer logros y mejora en métricas

## Anti-Patrones

| Anti-Patrón | Problema |
|-------------|----------|
| Surveys sin follow-up | Desensibilización del equipo |
| Usar eNPS para comparar equipos | Competencia tóxica |
| Ignorar feedback negativo | Loss of trust |
| Medir sin actuar | Peor que no medir |

## Conexiones

- [[../11-Cultura-Equipo/README|Cultura de Equipo]]
- [[../02-Estructura/05-engineering-manager|Engineering Manager]]
- [[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]
- [[02-velocity-throughput|Velocity y Throughput]]
- [[08-customer-satisfaction|Satisfacción del Cliente]]
- [[01-dora-metrics|DORA Metrics]]
- [[09-business-value-metrics|Valor de Negocio]]
