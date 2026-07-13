---
title: "Compartir Conocimiento"
tags:
  - sf/cultura
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Cultura y Equipo"
aliases:
  - "Knowledge Sharing"
  - "Tech Talks"
  - "Documentation Culture"
  - "Learning Culture"
related:
  - "[[../11-Cultura-Equipo/01-cultura-ingenieria|Cultura de Ingeniería]]"
  - "[[../11-Cultura-Equipo/11-communities-practice|Communities of Practice]]"
  - "[[../11-Cultura-Equipo/06-mentoria-coaching|Mentoring]]"
  - "[[../08-Calidad-Seguridad/02-documentation|Documentation]]"
---

## Por qué Compartir Conocimiento

| Costo de no compartir | Impacto |
|----------------------|---------|
| Knowledge silos | Bus factor = 1, single point of failure |
| Duplicate effort | Mismo problema resuelto 3 veces |
| Slow onboarding | New hires tardan meses en ser productivos |
| Tribal knowledge | Información crítica vive solo en cabezas |
| Repeated mistakes | Aprendizaje no escala |

## Formatos de Knowledge Sharing

### Tech Talks / Lunch & Learns

| Aspecto | Best Practice |
|---------|--------------|
| **Frecuencia** | Semanal o quincenal |
| **Duración** | 30-45 min + 15 min Q&A |
| **Formato** | 20 min charla + demo + discussion |
| **Audience** | Voluntario, anyone can attend |
| **Recording** | Siempre grabar para async access |
| **Topics** | Technical deep-dives, post-mortems, tool demos |

### Tech Talk Template

```markdown
# [Título]

## Problem Statement
¿Qué problema resolvemos?

## Context
¿Qué estábamos haciendo antes?

## Solution
¿Qué hicimos? Demo o walkthrough.

## Results
¿Qué impacto tuvo? Métricas si available.

## Learnings
¿Qué aprenderíamos differently?
```

### Brown Bag Sessions

- Informales, durante lunch
- Temas más broad que deep dives
- Buenos para onboarding y cross-training
- Menos pressure que tech talks formales

### Guilds y Chapters (Spotify Model)

| Unidad | Definición | Actividad |
|--------|-----------|-----------|
| **Chapter** | Personas con el mismo skill set (dentro de tribu) | Best practices, 1:1s, hiring |
| **Guild** | Comunidad de interés transversal (cross-tribe) | Knowledge sharing, talks, tools |

### Documentation Culture

La documentación es knowledge sharing asíncrono y duradero.

| Tipo de doc | Audiencia | Formato |
|-------------|-----------|---------|
| **Architecture Decision Record (ADR)** | Engineering | Markdown con contexto, options, decision |
| **Runbook** | On-call engineers | Step-by-step procedures |
| **RFC / Design Doc** | Stakeholders | Propuesta + discussion |
| **How-to guide** | Developers | Tutorial-style, practical |
| **Post-mortem** | Whole org | Incidente, timeline, learnings |

### ADR Template

```markdown
# ADR-001: Use PostgreSQL as primary database

## Status: Accepted
## Date: 2026-07-13

## Context
Need a relational database for the new payment service.

## Decision
We will use PostgreSQL 16.

## Consequences
- Positive: ACID, mature ecosystem, JSON support
- Negative: Need to learn PostgreSQL-specific features
- Neutral: Team has mixed experience (2/5 expert, 3/5 basic)
```

## Programs Estructurados

### Learning Circles

- Grupo de 4-6 personas que se reúnen semanalmente
- Leen/artículo/book juntos, discuten, aplican
- Rotate facilitator each session
- Low commitment, high learning

### Internal Conference

| Fase | Actividad |
|------|-----------|
| **Call for papers** | 2-4 weeks before |
| **Schedule** | 1-day event, 4-5 tracks |
| **Presentations** | 20-30 min each |
| **Workshops** | 60-90 min hands-on |
| **Hackathon** | Post-conference, 1 day |

### Reading Groups

- Book club technical (ej: "Designing Data-Intensive Applications")
- Article of the week
- Paper reading (para equipos más advanced)
- Shared notes and discussion

## Métricas de Knowledge Sharing

| Métrica | Target | Cómo medir |
|---------|--------|-----------|
| **Tech talks / month** | > 4 | Calendar tracking |
| **Documentation coverage** | > 80% de decisiones documented | Wiki audit |
| **Onboarding time** | < 4 weeks to first PR | HR + Git data |
| **Bus factor** | > 3 en módulos críticos | Code ownership analysis |
| **Internal mobility** | > 10% transfers/year | HR data |

## Incentives para Compartir

| Incentivo | Implementación |
|-----------|---------------|
| **Time allocation** | Dedicate 10% del sprint para learning |
| **Recognition** | Highlight top contributors en all-hands |
| **Career progression** | Knowledge sharing como promotion criterion |
| **Hackathons** | Competitions que generan knowledge sharing |
| **Blog interno** | Platform para publicar learnings |

## Anti-Patterns

| Anti-Patrón | Consecuencia |
|-------------|-------------|
| "Documentation is optional" | Knowledge silos |
| "Only seniors should present" | Excludes fresh perspectives |
| "We don't have time to share" | Short-term speed, long-term debt |
| "Just ask Bob" | Bus factor = 1 |
| Recording without follow-up | Content graveyard |

## Conexiones

- [[../11-Cultura-Equipo/01-cultura-ingenieria|Cultura de Ingeniería]] — sharing culture es cultural pillar
- [[../11-Cultura-Equipo/11-communities-practice|Communities of Practice]] — formalized sharing
- [[../11-Cultura-Equipo/06-mentoria-coaching|Mentoring]] — 1:1 knowledge transfer
- [[../08-Calidad-Seguridad/02-documentation|Documentation]] — documentation standards
- [[../01-Fundamentos/07-devops-filosofia|DevOps]] — learning organization
- [[../11-Cultura-Equipo/02-psychological-safety|Seguridad Psicológica]] — safety enables sharing
- [[../10-Gestion-Proyectos/03-story-points-tshirt|Velocity]] — knowledge sharing improves velocity
