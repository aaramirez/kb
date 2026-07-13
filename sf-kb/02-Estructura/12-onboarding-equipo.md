---
title: "Onboarding de Nuevo Talento"
tags:
  - sf/estructura
  - type/guia
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Estructura y Organización"
aliases:
  - "Onboarding"
  - "Plan 30-60-90"
  - "Buddy System"
related:
  - "[[../02-Estructura/05-engineering-manager|Engineering Manager]]"
  - "[[../02-Estructura/02-roles-equipo|Roles del Equipo]]"
  - "[[../11-Cultura-Equipo/README|Cultura de Equipo]]"
  - "[[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]"
---

# Onboarding de Nuevo Talento

Un buen onboarding reduce el time-to-productivity de 6 meses a 6 semanas y mejora drásticamente la retención.

## ¿Por Qué Importa el Onboarding?

| Métrica | Sin onboarding formal | Con onboarding formal |
|---|---|---|
| Time to first PR | 3-4 semanas | 3-5 días |
| Time to productive | 6 meses | 6-8 semanas |
| Retención a 1 año | 60-70% | 85-95% |
| eNPS de nuevos | < 10 | > 30 |
| Manager satisfaction | Baja | Alta |

> El 28% de nuevos empleados renuean en el primer año si el onboarding es pobre (SHRM).

## Plan 30-60-90 Días

### Días 1-30: Aprender

| Semana | Objetivo | Actividades |
|---|---|---|
| **Semana 1** | Setup y context | Computer setup, access, team intro, company overview |
| **Semana 2** | Herramientas y process | CI/CD, repos, coding standards, agile process |
| **Semana 3** | Primer contribution | Pair programming, small bug fix, first PR |
| **Semana 4** | Deep dive | Architecture overview, [[../02-Estructura/09-adr-decisiones|ADRs]], domain knowledge |

**Deliverables del primer mes:**
- [ ] Environment de desarrollo funcionando
- [ ] Primer PR merged (bug fix o small feature)
- [ ] Conoce a todos los miembros del equipo
- [ ] Entiende el product domain
- [ ] Completó security training

### Días 31-60: Contribuir

| Semana | Objetivo | Actividades |
|---|---|---|
| **Semana 5-6** | Feature ownership | Own una feature small-to-medium de principio a fin |
| **Semana 7-8** | Team integration | Participar en design discussions, sprint planning |

**Deliverables del segundo mes:**
- [ ] Feature completa merged a production
- [ ] Participa activamente en code reviews
- [ ] Entiende los [[../02-Estructura/08-gobernanza-tecnica|processes de gobernanza]]
- [ ] Ha hecho al menos 1 pair programming session
- [ ] Conoce las key ADRs del proyecto

### Días 61-90: Ownership

| Semana | Objetivo | Actividades |
|---|---|---|
| **Semana 9-10** | Independence | Leading small features, making technical decisions |
| **Semana 11-12** | Full integration | Part of all team ceremonies, contributing ideas |

**Deliverables del tercer mes:**
- [ ] Feature compleja entregada independentemente
- [ ] Ha presentado en un tech talk o demo
- [ ] Participa en hiring (interviews)
- [ ] Tiene un [[../02-Estructura/05-engineering-manager|IDP]] con su EM
- [ ] Se siente como miembro integral del equipo

## Buddy System

### ¿Qué es un Buddy?

Un buddy es un miembro senior del equipo asignado para guiar al nuevo durante las primeras semanas.

| Aspecto | Detalle |
|---|---|
| **Quién** | Senior engineer del mismo equipo |
| **Duración** | 30-90 días |
| **Commitment** | 2-4 horas/semana |
| **Relación** | No es manager, es guía y mentor |

### Responsabilidades del Buddy

| Semana | Responsabilidades |
|---|---|
| **Semana 1** | Setup, tour, introductions, answered questions |
| **Semana 2-4** | Pair programming, code reviews, context sharing |
| **Semana 5-8** | Feature guidance, architecture explanations |
| **Semana 9-12** | Delegation, trust building, check-ins |

### Reglas para Buddies

1. **No hacer el trabajo** del nuevo — guiar, no resolver
2. **Preguntar, no asumir** — "¿Necesitas ayuda con...?"
3. **Feedback honesto** — positivo y constructivo
4. **Disponibilidad** — ser accessible pero no 24/7
5. **Retrospective** — feedback al EM sobre el proceso

## Documentación de Onboarding

### Checklist para el Equipo

**Pre-arrival (antes del día 1):**
- [ ] Laptop orderado y configurado
- [ ] Accounts creados (email, Slack, GitHub, Jira, VPN)
- [ ] Welcome email con first-day instructions
- [ ] Buddy asignado
- [ ] Team notified

**Day 1:**
- [ ] Welcome meeting con EM
- [ ] Tour de la office / virtual office
- [ ] Team introductions (1:1 brief)
- [ ] Setup checklist
- [ ] First lunch con buddy

**Week 1:**
- [ ] Access a todos los repos necesarios
- [ ] Development environment running
- [ ] CI/CD pipeline understood
- [ ] First PR submitted
- [ ] Security training completado
- [ ] Coding standards review

### Knowledge Base de Onboarding

Crear una sección en el KB del equipo:

```
team-wiki/
├── onboarding/
│   ├── checklist.md
│   ├── day-1-guide.md
│   ├── week-1-guide.md
│   ├── architecture-overview.md
│   ├── coding-standards.md
│   ├── useful-links.md
│   └── glossary.md
├── architecture/
├── processes/
└── decisions/ (ADRs)
```

Ver [[../02-Estructura/14-plataforma-interna|Internal Developer Platform]] para self-service onboarding.

## Métricas de Onboarding

| Métrica | Target | Cadencia |
|---|---|---|
| Time to first PR | < 5 días | Per hire |
| Time to productive | < 6 semanas | Per hire |
| Buddy satisfaction (survey) | > 4/5 | Day 30 |
| New hire satisfaction | > 4/5 | Day 30, 90 |
| 90-day retention | 100% | Quarterly |
| Onboarding NPS | > 50 | Per cohort |

## Errores Comunes

| Error | Impacto | Solución |
|---|---|---|
| **Overwhelming first day** | Anxiety, disengagement | Gradual information load |
| **No buddy** | Isolation, slow ramp | Always assign buddy |
| **Sink or swim** | Fear, mistakes | Structured guidance |
| **No feedback loop** | Process never improves | Regular retrospectives |
| **Documentation void** | Every new hire restarts | Maintain living docs |
| **Only technical onboarding** | Cultural disconnect | Include culture, values, people |

## Onboarding Remoto

| Aspecto | Adaptación |
|---|---|
| **Communication** | More async, more documentation |
| **Buddy** | Daily check-ins first week, then weekly |
| **Social** | Virtual coffee chats, team channels |
| **Tools** | Screen sharing, Loom videos, pair programming tools |
| **Environment** | Ship equipment early, home office stipend |

## Referencias

- [[../02-Estructura/05-engineering-manager|Engineering Manager]]
- [[../11-Cultura-Equipo/README|Cultura de Equipo]]
- [[../02-Estructura/01-organizacion-tipica|Organización Típica]]
- [[../02-Estructura/14-plataforma-interna|Internal Developer Platform]]
