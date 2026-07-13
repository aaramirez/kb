---
title: "Herramientas de Colaboración"
tags:
  - sf/cultura
  - type/herramienta
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Cultura y Equipo"
aliases:
  - "Collaboration Tools"
  - "Dev Tooling"
  - "Stack de Comunicación"
related:
  - "[[../11-Cultura-Equipo/03-remote-hybrid|Trabajo Remoto]]"
  - "[[../11-Cultura-Equipo/05-knowledge-sharing|Compartir Conocimiento]]"
  - "[[../05-Herramientas/README|05 — Herramientas]]"
  - "[[../04-Practicas/README|04 — Prácticas]]"
---

## Stack de Herramientas por Categoría

### Comunicación

| Herramienta | Tipo | Mejor para | Costo |
|-------------|------|-----------|-------|
| **Slack** | Chat async/sync | Teams técnicos, integraciones | $ |
| **Microsoft Teams** | Chat + meetings | Orgs que ya usan M365 | $$ |
| **Discord** | Chat + voice | Comunidades, startups | Free/$ |
| **Zulip** | Chat con topics | Async-heavy teams | Free/OSS |

### Documentación y Knowledge Management

| Herramienta | Tipo | Mejor para | Costo |
|-------------|------|-----------|-------|
| **Notion** | Wiki + database | Docs, project tracking, wikis | $ |
| **Confluence** | Enterprise wiki | Large orgs, Jira integration | $$ |
| **Linear docs** | Embedded docs | Product-eng alignment | $ |
| **Outline** | Open-source wiki | Self-hosted knowledge base | Free/OSS |
| **Obsidian** | Local markdown | Personal knowledge, PKM | Free/$ |

### Project Management

| Herramienta | Tipo | Mejor para | Costo |
|-------------|------|-----------|-------|
| **Linear** | Issue tracking modern | Eng teams, keyboard-first | $ |
| **Jira** | Enterprise PM | Large orgs, complex workflows | $$ |
| **GitHub Projects** | GitHub-native | Teams already on GitHub | Free |
| **Shortcut** | Balanced PM | Mid-size teams | $ |
| **Height** | AI-first PM | Fast-moving teams | $ |

### Visual Collaboration

| Herramienta | Tipo | Mejor para | Costo |
|-------------|------|-----------|-------|
| **Miro** | Whiteboard digital | Workshops, brainstorming | $ |
| **FigJam** | Design whiteboard | Design-eng collaboration | $ |
| **Excalidraw** | Simple sketches | Quick diagrams, OSS | Free |
| **Mermaid** | Diagram-as-code | Architecture, flowcharts | Free |

## Async vs Sync: Decision Framework

| Situación | Async | Sync |
|-----------|-------|------|
| Share status update | ✅ Written update | ❌ |
| Brainstorm ideas | ⚠️ Possible but slower | ✅ Better with discussion |
| Resolve conflict | ❌ Too nuanced | ✅ Needs dialogue |
| Code review | ✅ PR comments | ⚠️ Pair review for complex |
| Decision making | ⚠️ RFC + comments | ✅ Final sync for alignment |
| Onboarding | ⚠️ Docs + async Q&A | ✅ Live sessions needed |
| Retrospective | ❌ Needs psychological safety | ✅ Real-time feedback |
| Incident response | ⚠️ Initial triage | ✅ War room for resolution |

## Selection Criteria

Evaluar herramientas con esta matriz:

| Criterio | Peso | Questions to ask |
|----------|------|------------------|
| **Adoption friction** | 25% | ¿El equipo lo va a usar? |
| **Integration depth** | 20% | ¿Se conecta con nuestro stack? |
| **Async support** | 20% | ¿Soporta working across timezones? |
| **Cost** | 15% | ¿Cabe en el budget? |
| **Security/compliance** | 15% | ¿Cumple requirements legales? |
| **Vendor lock-in** | 5% | ¿Podemos migrar si es necesario? |

## Setup Recommendations por Team Size

| Size | Stack mínimo | Stack ideal |
|------|-------------|-------------|
| **2-5** | GitHub + Slack + Notion | + Linear + Loom |
| **6-15** | + Linear + Miro | + Excalidraw + Gather |
| **16-50** | + Confluence + Jira | + Dedicated tooling team |
| **50+** | Enterprise suite | Platform team managing tooling |

## Integration Patterns

```
GitHub ─────┬── Linear (auto-sync issues)
            ├── Slack (notifications)
            └── Notion (status sync)

Slack ──────┬── Linear (issue creation from threads)
            ├── GitHub (PR notifications)
            ├── PagerDuty (incident alerts)
            └── Notion (daily digests)

Linear ─────┬── GitHub (PR linking)
            ├── Slack (status updates)
            └── Figma (design links)
```

## Anti-Patterns

| Anti-Patrón | Consecuencia |
|-------------|-------------|
| Tool sprawl (10+ tools) | Context switching, confusion |
| "This tool will fix our culture" | Tools enable, don't create culture |
| No integration between tools | Information silos |
| Choosing tools by hype | Adoption failure |
| No training/onboarding on tools | Low adoption, frustration |

## Conexiones

- [[../11-Cultura-Equipo/03-remote-hybrid|Trabajo Remoto]] — tools para distributed teams
- [[../11-Cultura-Equipo/05-knowledge-sharing|Compartir Conocimiento]] — tools como enablement
- [[../05-Herramientas/README|Herramientas]] — stack de herramientas del proyecto
- [[../04-Practicas/README|Prácticas]] — prácticas que estas herramientas habilitan
- [[../11-Cultura-Equipo/01-cultura-ingenieria|Cultura de Ingeniería]] — tools refuerzan cultura
- [[../10-Gestion-Proyectos/12-delivery-ritmos|Ritmos de Delivery]] — tools soportan ceremonies
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD]] — integración con pipeline
