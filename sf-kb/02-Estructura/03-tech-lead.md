---
title: "Tech Lead: Rol y Responsabilidades"
tags:
  - sf/estructura
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Estructura y Organización"
aliases:
  - "Technical Lead"
  - "Tech Leader"
related:
  - "[[../02-Estructura/04-architect|Software Architect]]"
  - "[[../02-Estructura/05-engineering-manager|Engineering Manager]]"
  - "[[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]]"
  - "[[../02-Estructura/09-adr-decisiones|ADR]]"
---

# Tech Lead: Rol y Responsabilidades

El Tech Lead es el puente entre la visión técnica y la ejecución del equipo. Combina coding hands-on con liderazgo técnico.

## ¿Qué es un Tech Lead?

Un Tech Lead es un ingeniero senior que asume responsabilidades de liderazgo técnico **sin dejar de escribir código**. No es un rol de management — es un rol técnico con influencia organizacional.

> "A Tech Lead is a software engineer who is responsible for the technical quality of the team's output." — Will Larson, *An Elegant Puzzle*

## Responsabilidades Core

### Decisiones Técnicas
- Evaluar y seleccionar tecnologías, frameworks, herramientas
- Definir approach técnico para features complejos
- Balancear entre "perfecto" y "good enough" (time-to-market)
- Tomar decisiones de [[../02-Estructura/09-adr-decisiones|ADR]] cuando corresponda

### Code Review
- Establecer estándares de code review en el equipo
- Revisar PRs críticos, particularmente los de arquitectura
- Enforce coding standards y patterns
- Mentorear a developers junior en reviews

### Architecture Guidance
- Diseñar la solución técnica a nivel de feature/sprint
- Identificar y mitigar technical debt
- Definir interfaces entre componentes
- Coordinar con el [[../02-Estructura/04-architect|Software Architect]] para decisions de system-wide

### Mentoring y Coaching
- Guiar el crecimiento técnico del equipo
- Pair programming sessions
- Tech talks internos
- Code review como herramienta de enseñanza

### Communication Bridge
- Traducir business requirements a technical specifications
- Comunicar constraints y tradeoffs al [[../02-Estructura/06-product-owner|Product Owner]]
- Escalar blockers al [[../02-Estructura/05-engineering-manager|Engineering Manager]]

## Tech Lead vs Otros Roles

| Aspecto | Tech Lead | Software Architect | Engineering Manager |
|---|---|---|---|
| **Escribe código** | Sí (50-70%) | Opcionalmente (20-40%) | Raramente (<10%) |
| **Decisiones técnicas** | Feature-level | System-wide | Delega al Tech Lead |
| **People management** | No directo | No | Sí (1:1s, hiring, performance) |
| **Scope** | 1 squad / team | Múltiples sistemas | Múltiples personas |
| **Reporting** | EM o Arquitecto | VP Engineering | Director / VP |
| **Accountability** | Technical quality del team | Architecture quality | People & delivery |

## Días Típicos de un Tech Lead

| Hora | Actividad |
|---|---|
| 09:00 | Sprint standup, revisar blockers |
| 09:30 | Code review block (2-3 PRs) |
| 10:30 | Pair programming con mid-level dev |
| 11:30 | Tech design session para feature upcoming |
| 12:00 | Lunch |
| 13:00 | 1:1 con EM o Arquitecto |
| 13:30 | Architecture discussion con architect |
| 14:00 | Coding block (feature implementation) |
| 16:00 | Cross-team sync (dependencias) |
| 16:30 | Sprint planning / refinement prep |
| 17:00 | Documentation, ADR writing |

## Habilidades Clave

### Técnicas
- Profundidad en el tech stack del equipo
- Conocimiento de [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]] y design patterns
- Comprensión de tradeoffs (CAP theorem, performance vs maintainability)
- Testing strategies y [[../04-Practicas/README|engineering practices]]

### Soft Skills
- **Influencia sin autoridad**: motivar al equipo sin ser su jefe directo
- **Comunicación**: explicar decisiones técnicas a audiencias no-técnicas
- **Priorización**: balancear tech debt, features, y bugs
- **Conflict resolution**: mediar desacuerdos técnicos

## Errores Comunes

| Error | Consecuencia | Alternativa |
|---|---|---|
| Código en solitario | Bottleneck, knowledge silo | Pair programming, distribute |
| No delegar | Burnout, team growth stunted | Mentorear, trust the team |
| Ignorar tech debt | Velocity decay | Dedicate 20% a refactor |
| Micro-managing | Team autonomy erosion | Define standards, let team execute |
| Solo coding, no leading | Team lacks direction | Balance coding & leadership |

## Tech Lead como IC Track

En muchas [[../02-Estructura/01-organizacion-tipica|Software Factories]], el Tech Lead es el primer paso del **Individual Contributor (IC) track**:

```
IC Track:  IC → Senior IC → Staff Engineer → Principal → Distinguished
                    ↕ (puede transicionar)
Mgmt Track: EM → Senior EM → Director → VP → CTO
```

## Métricas de un Tech Lead Effectivo

| Métrica | Target |
|---|---|
| PR review turnaround | < 4 horas |
| Sprint velocity (team) | Estable o creciente |
| Technical debt ratio | < 15% del sprint |
| Bus factor del squad | >= 3 |
| Onboarding time nuevos | < 2 semanas para primer PR |

## Referencias

- [[../02-Estructura/02-roles-equipo|Roles del Equipo]]
- [[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]]
- [[../04-Practicas/README|Prácticas de Ingeniería]]
- [[../01-Fundamentos/09-technical-debt|Technical Debt]]
