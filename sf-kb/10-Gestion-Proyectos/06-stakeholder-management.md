---
title: "Gestión de Stakeholders"
tags:
  - sf/gestion
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Gestión de Proyectos"
aliases:
  - "Stakeholder Management"
  - "Power/Interest Grid"
  - "Communication Plan"
related:
  - "[[../10-Gestion-Proyectos/05-risk-management|Gestión de Riesgos]]"
  - "[[../10-Gestion-Proyectos/10-okr-software|OKRs]]"
  - "[[../02-Estructura/06-product-owner|Product Owner]]"
  - "[[../02-Estructura/01-organizacion-tipica|Organización Típica]]"
---

# Gestión de Stakeholders

Identificar, analizar y gestionar a todas las personas o grupos que tienen interés en el resultado del proyecto de software.

## Identificación de stakeholders

### Categorías principales

| Categoría | Ejemplos | Interés típico |
|-----------|----------|----------------|
| **Executive** | CEO, CTO, VP Engineering | ROI, strategy, timeline |
| **Product** | PO, PM, Design Lead | Features, user value, roadmap |
| **Technical** | Tech Lead, Architects | Quality, scalability, tech debt |
| **Operations** | DevOps, SRE, Support | Stability, monitoring, incidents |
| **Business** | Sales, Marketing, Finance | Revenue, competitive advantage |
| **Customer** | End users, beta testers | Usability, reliability, features |
| **Compliance** | Legal, Security, Audit | Regulatory, data protection |
| **External** | Vendors, partners, regulators | Contracts, integration, standards |

## Power/Interest Grid

Clasifica stakeholders por su poder de influencia y nivel de interés.

### Matriz 2×2

```
                    INTERÉS
                Bajo         Alto
         ┌────────────┬────────────┐
  Alto   │  KEEP      │  MANAGE    │
  PODER  │  SATISFIED │  CLOSELY   │
         ├────────────┼────────────┤
  Bajo   │  MONITOR   │  KEEP      │
         │  (mínimo)  │  INFORMED  │
         └────────────┴────────────┘
```

### Acciones por cuadrante

| Cuadrante | Estrategia | Frecuencia | Ejemplo |
|-----------|-----------|------------|---------|
| **Manage Closely** | Involucrar en decisiones clave | Semanal | CTO, PO |
| **Keep Satisfied** | Comunicar progreso, buscar input | Quincenal | VP Sales |
| **Keep Informed** | Actualizar regularmente | Mensual | Dev team |
| **Monitor** | Check-in mínimo, no gastar tiempo | Trimestral | Otros deptos |

## Communication Plan

### Matriz de comunicación

| Audiencia | Formato | Frecuencia | Responsable | Contenido |
|-----------|---------|------------|-------------|-----------|
| Executive | Dashboard + Slack | Semanal | EM | KPIs, risks, decisions needed |
| Product | Sprint review + Backlog | Cada sprint | PO | Features, progress, blockers |
| Tech team | Standup + Tech review | Diaria/Semanal | TL | Technical decisions, architecture |
| Customer | Release notes + Demo | Por release | PO/PM | New features, improvements |
| Operations | Runbook + Monitoring | Continuo | SRE | System health, incidents |

### Canales de comunicación

| Canal | Uso | Audiencia |
|-------|-----|-----------|
| **Slack/Teams** | Comunicación rápida, alertas | Todo el equipo |
| **Email** | Comunicación formal, decisiones | Stakeholders externos |
| **Jira/Linear** | Tracking de trabajo | Equipo técnico |
| **Confluence/Notion** | Documentación | Toda la organización |
| **Sprint Review** | Demo y feedback | Stakeholders amplios |
| **1:1 Meetings** | Feedback individual | Reports directos |
| **All Hands** | Comunicación organizacional | Toda la empresa |

## Stakeholder Mapping Template

### Para cada stakeholder clave

```markdown
## Stakeholder: [Nombre / Rol]

**Poder**: Alto / Medio / Bajo
**Interés**: Alto / Medio / Bajo
**Actitud**: Supportive / Neutral / Resistant
**Influencia**: Alta / Media / Baja

### Necesidades
- [Qué necesita saber]
- [Qué necesita decidir]

### Expectativas
- [Qué espera del proyecto]

### Estrategia de engagement
- [Cómo involucrarlo]
- [Frecuencia de comunicación]
- [Canal preferido]

### Riesgo
- [Qué pasa si lo ignoramos]
```

## Gestión de resistencia

### Tipos de resistencia y respuestas

| Tipo | Señales | Respuesta |
|------|---------|-----------|
| **Fear of change** | "Siempre lo hemos hecho así" | Demostrar beneficios, quick wins |
| **Lack of trust** | Micro-managing, skepticism | Transparencia, datos, consistencia |
| **Competing priorities** | "No tengo tiempo" | Mostrar alineación con sus OKRs |
| **Technical disagreement** | "Esa tecnología no funciona" | Spike, PoC, data-driven |
| **Political** | "Mi equipo no puede" | Escalation, executive sponsorship |

## Reporting para stakeholders

### Dashboard ejecutivo (ejemplo semanal)

| Métrica | Valor | Trend | Target |
|---------|-------|-------|--------|
| Sprint velocity | 42 SP | ↑ | 40 SP |
| Features completadas | 5/8 | → | 6/8 |
| Bug open | 12 | ↓ | < 15 |
| Tech debt items | 8 | → | < 10 |
| On-time delivery | 92% | ↑ | > 90% |
| Risk score | 8 (Low) | ↓ | < 15 |

### Formato de status report

```
1. Resumen ejecutivo (1-2 oraciones)
2. Logros de la semana
3. Próximos pasos
4. Riesgos y blockers
5. Decisiones necesarias
6. Métricas clave
```

## Anti-patterns

- **Stakeholder vacuum**: no comunicar hasta que preguntan
- **Info dump**: enviar toda la información sin filtrar
- **Ignoring resistencia**: asumir que todos están alineados
- **One-size-fits-all**: mismo reporte para audiencias diferentes
- **Only upward reporting**: solo comunicar hacia arriba, no hacia abajo
