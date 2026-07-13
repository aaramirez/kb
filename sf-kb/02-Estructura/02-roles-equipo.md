---
title: "Roles del Equipo de Desarrollo"
tags:
  - sf/estructura
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Estructura y Organización"
aliases:
  - "Roles en Software Factory"
  - "Equipo de Desarrollo"
related:
  - "[[../02-Estructura/03-tech-lead|Tech Lead]]"
  - "[[../02-Estructura/04-architect|Software Architect]]"
  - "[[../02-Estructura/05-engineering-manager|Engineering Manager]]"
  - "[[../02-Estructura/06-product-owner|Product Owner]]"
---

# Roles del Equipo de Desarrollo

Mapa completo de roles en una Software Factory moderna: responsabilidades, skills requeridas y cómo interactúan entre sí.

## Roles de Ingeniería

### Software Developer / Engineer
| Aspecto | Detalle |
|---|---|
| **Responsabilidad** | Escribir, mantener y revisar código de producción |
| **Skills clave** | Algoritmos, data structures, frameworks, testing |
| **Niveles** | Junior → Mid → Senior → Staff → Principal |
| **Entrega principal** | Feature code, bug fixes, technical documentation |

### QA Engineer / SDET
| Aspecto | Detalle |
|---|---|
| **Responsabilidad** | Garantizar calidad del software antes de producción |
| **Skills clave** | Testing strategies, automation, performance testing |
| **Niveles** | QA → Senior QA → QA Lead → QA Architect |
| **Entrega principal** | Test plans, automated suites, quality reports |

### DevOps Engineer
| Aspecto | Detalle |
|---|---|
| **Responsabilidad** | CI/CD, infraestructura, deployment automation |
| **Skills clave** | Containers, IaC, CI/CD pipelines, cloud platforms |
| **Niveles** | DevOps → Senior DevOps → DevOps Lead |
| **Entrega principal** | Pipelines, infrastructure as code, runbooks |

### Site Reliability Engineer (SRE)
| Aspecto | Detalle |
|---|---|
| **Responsabilidad** | Reliability, observabilidad, incident management |
| **Skills clave** | SLOs/SLIs, distributed systems, monitoring, on-call |
| **Niveles** | SRE → Senior SRE → SRE Manager |
| **Entrega principal** | SLOs, incident reports, reliability improvements |

### Platform Engineer
| Aspecto | Detalle |
|---|---|
| **Responsabilidad** | Internal Developer Platform, golden paths, self-service |
| **Skills clave** | Kubernetes, service mesh, developer experience |
| **Niveles** | Platform Eng → Senior → Platform Lead |
| **Entrega principal** | IDP, templates, documentation, tooling |

### Software Architect
Ver [[../02-Estructura/04-architect|Software Architect]] para detalles completos.

### Tech Lead
Ver [[../02-Estructura/03-tech-lead|Tech Lead]] para detalles completos.

## Roles de Producto

### Product Owner / Business Analyst
Ver [[../02-Estructura/06-product-owner|Product Owner]] para detalles completos.

### UX/UI Designer
| Aspecto | Detalle |
|---|---|
| **Responsabilidad** | Research, wireframes, prototyping, design system |
| **Skills clave** | User research, Figma, accessibility, design thinking |
| **Niveles** | Designer → Senior Designer → Design Lead → Design Director |
| **Entrega principal** | Mockups, prototypes, design system components |

### Scrum Master / Agile Coach
| Aspecto | Detalle |
|---|---|
| **Responsabilidad** | Facilitar procesos ágiles, remover impedimentos |
| **Skills clave** | Facilitation, coaching, conflict resolution |
| **Entrega principal** | Sprint health, team metrics, process improvements |

## Roles de Management

### Engineering Manager
Ver [[../02-Estructura/05-engineering-manager|Engineering Manager]] para detalles completos.

### Project Manager / Delivery Manager
| Aspecto | Detalle |
|---|---|
| **Responsabilidad** | Timeline, budget, stakeholder communication, risk management |
| **Skills clave** | Planning, communication, risk assessment, reporting |
| **Entrega principal** | Project plans, status reports, risk registers |

## Matriz de Interacción entre Roles

```
Product Owner ←→ Tech Lead ←→ Architect
      ↕               ↕            ↕
  Designer     Developers    Platform Eng
      ↕               ↕            ↕
    Users          QA/SRE      DevOps
```

## Distribución Típica por Equipo (Squad de 8-12)

| Rol | Cantidad | % del squad |
|---|---|---|
| Software Developers | 4-6 | 50% |
| QA / SDET | 1-2 | 15% |
| DevOps / Platform | 1 | 10% |
| Product Owner | 1 | 10% |
| UX Designer | 1 | 10% |
| Scrum Master | 1 (puede ser compartido) | 5% |

> En equipos más pequeños, los roles se combinan: un senior developer puede actuar como tech lead, un QA puede cubrir DevOps tasks.

## Evolución de Roles con IA

La [[../07-IA-Software/README|IA está transformando]] los roles tradicionales:

| Rol | Impacto de IA |
|---|---|
| Developer | Copilot + code generation, más focus en architecture |
| QA | AI-assisted testing, predictive quality |
| DevOps | AIOps, self-healing infrastructure |
| Architect | AI-powered design analysis, ADR generation |
| PM/PO | Automated reporting, data-driven prioritization |

## Anti-patrones de Roles

1. **Senior everywhere**: equipo de puros seniors sin mentorship pipeline
2. **Role silos**: "eso no es mi trabajo" culture
3. **Missing QA**: asumir que developers testing = quality
4. **Architect as decision maker**: architect decide todo sin input del team
5. **SM as project manager**: Scrum Master enfocado en tracking, no en coaching

## Referencias

- [[../02-Estructura/01-organizacion-tipica|Organización Típica]]
- [[../02-Estructura/13-arbol-deportes|Team Topologies]]
- [[../01-Fundamentos/06-manifiesto-agile|El Manifiesto Ágil]]
- [[../11-Cultura-Equipo/README|Cultura de Equipo]]
