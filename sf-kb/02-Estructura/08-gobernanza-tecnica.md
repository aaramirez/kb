---
title: "Gobernanza Técnica"
tags:
  - sf/estructura
  - type/guia
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Estructura y Organización"
aliases:
  - "Technical Governance"
  - "Tech Council"
  - "RFC Process"
related:
  - "[[../02-Estructura/09-adr-decisiones|ADR]]"
  - "[[../02-Estructura/04-architect|Software Architect]]"
  - "[[../02-Estructura/03-tech-lead|Tech Lead]]"
  - "[[../02-Estructura/08-gobernanza-tecnica|Tech Radar]]"
---

# Gobernanza Técnica

Sistemas y procesos para tomar decisiones técnicas de forma consistente, transparente y escalable en una organización de software.

## ¿Qué es la Gobernanza Técnica?

La gobernanza técnica es el framework que define **cómo** se toman decisiones técnicas en la organización. No es burocracia — es sobre crear claridad, consistencia y trazabilidad.

## Componentes Principales

### 1. Tech Council

| Aspecto | Detalle |
|---|---|
| **Qué es** | Grupo de senior engineers que revisan decisiones técnicas clave |
| **Quién** | Staff+ engineers, Architects, Senior Tech Leads |
| **Frecuencia** | Quincenal o mensual |
| **Scope** | Decisiones de alcance multi-team |

**Agenda típica de Tech Council:**
```
1. Review de ADRs pendientes (15 min)
2. Tech radar updates (10 min)
3. Architecture review de proyecto importante (20 min)
4. Technical debt prioritization (10 min)
5. Cross-cutting concerns (security, performance) (10 min)
6. New technology evaluations (5 min)
```

### 2. RFC (Request for Comments)

Proceso formal para propuestas técnicas significativas:

| Etapa | Descripción | Owner |
|---|---|---|
| **Draft** | Author escribe la propuesta | Cualquier engineer |
| **Review** | Feedback de stakeholders (1-2 semanas) | Team + Tech Council |
| **Decision** | Aprobación/rechazo con rationale | Tech Council / Architect |
| **Implemented** | La propuesta se ejecuta | Author + team |
| **Closed** | Rechazada o supersedida | Con documentación |

**Template de RFC:**
```markdown
# RFC: [Título]

## Status
Draft | Review | Approved | Rejected | Superseded

## Summary
Una或 dos oraciones sobre qué propone.

## Motivation
¿Por qué es necesario? ¿Qué problema resuelve?

## Detailed Design
Descripción técnica detallada.

## Alternatives Considered
Otras opciones evaluadas.

## Migration Plan
Cómo migrar del estado actual al nuevo.

## Rollback Plan
Cómo revertir si algo sale mal.

## Open Questions
Preguntas que necesitan resolver antes de implementar.
```

### 3. Design Reviews

| Tipo | Cuándo | Participantes |
|---|---|---|
| **Feature design** | Antes de implementar feature compleja | Squad + Architect |
| **Architecture review** | Cambios system-wide | Tech Council + affected teams |
| **Security review** | Features con datos sensibles | Security + Squad |
| **Performance review** | Cambios con impacto de performance | SRE + Squad |
| **Post-mortem** | Después de incidente mayor | Involved teams + management |

### 4. Tech Radar

Actualización trimestral del tech radar:

| Quadrant | Acción requerida |
|---|---|
| **Move to Adopt** | Requiere aprobación de Tech Council |
| **Move to Trial** | Tech Lead puede decidir |
| **Move to Assess** | Cualquier engineer puede proponer |
| **Move to Hold** | Requiere plan de migración |

Ver [[../02-Estructura/04-architect|Software Architect]] para más sobre tech radar.

## Proceso de Decisión Técnica

```
Propuesta (cualquiera)
    ↓
RFC/ADR escrito
    ↓
Review por team affected
    ↓
Escalation (si es cross-team)
    ↓
Tech Council decision
    ↓
Documentado (ADR o RFC)
    ↓
Implementado
    ↓
Follow-up review
```

## Decisiones que Requieren Gobernanza

| Tipo de Decisión | Nivel de Gobernanza | Ejemplo |
|---|---|---|
| **Technology adoption** | Tech Council | Nuevo framework frontend |
| **Architecture pattern** | Architect + Tech Council | Event-driven architecture |
| **Database choice** | Tech Council | PostgreSQL vs MongoDB |
| **CI/CD approach** | Platform team + Tech Lead | GitHub Actions vs GitLab CI |
| **Coding standards** | Chapter leads | Style guide, patterns |
| **Library choice** | Tech Lead | Testing framework |

## Gobernanza Ligera vs Pesada

| Contexto | Ligera | Pesada |
|---|---|---|
| **Startup/SF pequeña** | RFC informal, Slack thread | — |
| **SF mediana** | RFC template, Tech Council mensual | — |
| **SF grande** | Formal RFC process | Architecture review board |
| **Enterprise** | Full governance framework | Compliance, audit trails |

> El objetivo es encontrar el **mínimo proceso necesario** para mantener consistencia sin ralentizar la entrega.

## Métricas de Gobernanza

| Métrica | Target | Cadencia |
|---|---|---|
| RFC turnaround | < 2 semanas | Per RFC |
| ADR coverage | 100% de decisiones key | Quarterly |
| Tech debt ratio | < 15% del capacity | Sprint |
| Tech radar updates | Quarterly | On schedule |
| Design review completion | > 90% | Per review |

## Anti-patrones de Gobernanza

| Anti-patrón | Problema | Solución |
|---|---|---|
| **Rubber stamp council** | Aprobar todo sin review | Require written feedback |
| **Decision by loudest voice** | Dominación de personalidad | Structured decision process |
| **Governance theater** | Proceso sin valor real | Measure outcome, not process |
| **Ivory tower** | Decisiones disconnected from reality | Involve implementers |
| **No documentation** | Decisiones se pierden | Mandatory ADRs |

## Referencias

- [[../02-Estructura/09-adr-decisiones|ADR]]
- [[../02-Estructura/04-architect|Software Architect]]
- [[../02-Estructura/03-tech-lead|Tech Lead]]
- [[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]
- [[../08-Calidad-Seguridad/README|Calidad y Seguridad]]
