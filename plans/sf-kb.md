# Plan: sf-kb — Software Factory en la Era de la IA

## Objetivo

Crear un vault de Obsidian completo sobre **Software Factory en la Era de la IA**, cubriendo estructura, organización, procesos, prácticas, estándares, métricas, desempeño, herramientas, cultura y el impacto de la IA en el desarrollo de software moderno.

## Principios

- **Idioma**: Español con términos técnicos en inglés preservados
- **Enfoque**: Conceptual + práctico — marcos de referencia, modelos, guías aplicables
- **Profundidad uniforme** en todas las secciones
- **Wikilinks**: 3-10+ por nota, conectando secciones
- **Frontmatter**: `title`, `tags`, `created`, `updated`, `category`, `aliases`, `related`
- **Formato de archivos**: `kebab-case`, un concepto por nota
- **Patrón**: Mismas convenciones que `lean-kb`

## Taxonomía — 12 Secciones (166 archivos)

```
sf-kb/
├── Index.md
├── como-usar-este-kb.md
├── sf-glossary.md
├── sf-timeline.md
│
├── 01-Fundamentos/          # Qué es, historia, evolución, era AI
├── 02-Estructura/           # Organización, roles, gobernanza, equiposs
├── 03-Procesos/             # SDLC, Agile, DevOps, flujos de trabajo
├── 04-Practicas/            # Code review, testing, docs, estándares
├── 05-Herramientas/         # IDEs, CI/CD, AI tools, plataformas
├── 06-Metricas/             # KPIs, DORA, velocity, calidad, desempeño
├── 07-IA-Software/          # AI en dev, copilots, generación de código
├── 08-Calidad-Seguridad/    # QA, seguridad, compliance, testing
├── 09-DevOps-Infra/         # IaC, cloud, containers, monitoreo
├── 10-Gestion-Proyectos/    # Planning, estimación, delivery, riesgos
├── 11-Cultura-Equipo/       # Cultura, remoto, colaboración, onboarding
└── 12-Casos-Aplicacion/     # Casos reales, anti-patrones,Transformación
```

## Contenido por Sección

### 01-Fundamentos (16 notas)
| # | Archivo | Título |
|---|---------|--------|
| 01 | `01-que-es-software-factory.md` | ¿Qué es una Software Factory? |
| 02 | `02-evolucion-software-factory.md` | Evolución: taller → fábrica de software |
| 03 | `03-era-ia-contexto.md` | La Era de la IA: contexto y cambio de paradigma |
| 04 | `04-principios-ingenieria-software.md` | Principios de ingeniería de software |
| 05 | `05-modelos-madurez.md` | Modelos de madurez (CMMI, SPICE) |
| 06 | `06-manifiesto-agile.md` | El Manifiesto Ágil y sus principios |
| 07 | `07-devops-filosofía.md` | DevOps como filosofía |
| 08 | `08-shift-left.md` | Shift-Left: mover calidad hacia atrás |
| 09 | `09-technical-debt.md` | Technical Debt: deuda técnica |
| 10 | `10-conway-ley.md` | Ley de Conway y diseño de sistemas |
| 11 | `11-arquitectura-limpia.md` | Arquitectura Limpia y principios SOLID |
| 12 | `12-monolito-microservicios.md` | De Monolito a Microservicios |
| 13 | `13-plataformas-ingenieria.md` | Plataformas de ingeniería (Internal Developer Platforms) |
| 14 | `14-software-categoria-a.md` | Software de Categoría A vs B |
| 15 | `15-producto-vs-proyecto.md` | Modelo Producto vs Proyecto |
| 16 | `16-lean-software.md` | Lean Software Development |

### 02-Estructura y Organización (14 notas)
| # | Archivo | Título |
|---|---------|--------|
| 01 | `01-organizacion-tipica.md` | Organización típica de una Software Factory |
| 02 | `02-roles-equipo.md` | Roles del equipo de desarrollo |
| 03 | `03-tech-lead.md` | Tech Lead: rol y responsabilidades |
| 04 | `04-architect.md` | Software Architect: rol y responsabilidades |
| 05 | `05-engineering-manager.md` | Engineering Manager |
| 06 | `06-product-owner.md` | Product Owner / Business Analyst |
| 07 | `07-squad-tribe-chapter.md` | Squads, Tribes, Chapters (Modelo Spotify) |
| 08 | `08-gobernanza-tecnica.md` | Gobernanza técnica |
| 09 | `09-adr-decisiones.md` | Architecture Decision Records (ADR) |
| 10 | `10-equipos-autonomos.md` | Equipos autónomos y auto-organizados |
| 11 | `11-estructura-matricial.md` | Estructura matricial vs funcional |
| 12 | `12-onboarding-equipo.md` | Onboarding de nuevo talento |
| 13 | `13-arbol-deportes.md` | Team Topologies (Árbol de Deportes) |
| 14 | `14-plataforma-interna.md` | Internal Developer Platform (IDP) |

### 03-Procesos y Flujo (14 notas)
| # | Archivo | Título |
|---|---------|--------|
| 01 | `01-sdlc.md` | Software Development Life Cycle |
| 02 | `02-scrum.md` | Scrum: framework ágil |
| 03 | `03-kanban-software.md` | Kanban en desarrollo de software |
| 04 | `04-scaled-agile-safe.md` | SAFe: scaled agile framework |
| 05 | `05-ci-cd-pipeline.md` | CI/CD: integración y despliegue continuo |
| 06 | `06-trunk-based-development.md` | Trunk-Based Development |
| 07 | `07-gitflow-alternativas.md` | GitFlow y alternativas de branching |
| 08 | `08-code-review-proceso.md` | Proceso de Code Review |
| 09 | `09-release-management.md` | Release Management |
| 10 | `10-incidient-management.md` | Gestión de incidentes (Incident Response) |
| 11 | `11-change-management.md` | Change Management |
| 12 | `12-problema-management.md` | Problem Management |
| 13 | `13-value-stream-mapping.md` | Value Stream Mapping en Software |
| 14 | `14-flujo-tirón-pull.md` | Sistema de Tirón en desarrollo |

### 04-Prácticas y Estándares (14 notas)
| # | Archivo | Título |
|---|---------|--------|
| 01 | `01-coding-standards.md` | Estándares de codificación |
| 02 | `02-clean-code.md` | Clean Code: principios y prácticas |
| 03 | `03-test-driven-development.md` | Test-Driven Development (TDD) |
| 04 | `04-behavior-driven-development.md` | Behavior-Driven Development (BDD) |
| 05 | `05-pair-programming.md` | Pair Programming y Mob Programming |
| 06 | `06-code-review-best-practices.md` | Buenas prácticas de Code Review |
| 07 | `07-documentacion-tecnica.md` | Documentación técnica efectiva |
| 08 | `08-api-design-standards.md` | Estándares de diseño de APIs |
| 09 | `09-git-conventions.md` | Convenciones de Git (commits, branches) |
| 10 | `10-refactoring-continuo.md` | Refactoring continuo |
| 11 | `11-definition-of-done.md` | Definition of Done (DoD) |
| 12 | `12-observabilidad-practicas.md` | Observabilidad: logs, métricas, traces |
| 13 | `13-feature-flags.md` | Feature Flags y launches graduales |
| 14 | `14-chaos-engineering.md` | Chaos Engineering |

### 05-Herramientas y Tecnología (14 notas)
| # | Archivo | Título |
|---|---------|--------|
| 01 | `01-ides-editores.md` | IDEs y editores modernos |
| 02 | `02-herramientas-ci-cd.md` | Herramientas CI/CD (Jenkins, GitHub Actions, etc.) |
| 03 | `03-gestion-repositorios.md` | Gestión de repositorios (GitHub, GitLab, Bitbucket) |
| 04 | `04-herramientas-testing.md` | Herramientas de testing |
| 05 | `05-herramientas-monitoring.md` | Herramientas de monitoreo y observabilidad |
| 06 | `06-container-kubernetes.md` | Containers y Kubernetes |
| 07 | `07-iac-terraform.md` | Infrastructure as Code (Terraform, Pulumi) |
| 08 | `08-plataformas-cloud.md` | Plataformas Cloud (AWS, Azure, GCP) |
| 09 | `09-ai-coding-assistants.md` | AI Coding Assistants (Copilot, Cursor, etc.) |
| 10 | `10-ai-testing-tools.md` | Herramientas de testing con IA |
| 11 | `11-ai-code-review.md` | AI en Code Review |
| 12 | `12-developer-experience.md` | Developer Experience (DX) tools |
| 13 | `13-legacy-modernizacion.md` | Herramientas de modernización de legacy |
| 14 | `14-evaluacion-herramientas.md` | Framework de evaluación de herramientas |

### 06-Métricas y Desempeño (14 notas)
| # | Archivo | Título |
|---|---------|--------|
| 01 | `01-dora-metrics.md` | Métricas DORA (4 claves) |
| 02 | `02-velocity-throughput.md` | Velocity vs Throughput |
| 03 | `03-cycle-time.md` | Cycle Time y Lead Time |
| 04 | `04-defect-rate.md` | Tasa de defectos |
| 05 | `05-code-coverage.md` | Code Coverage y métricas de testing |
| 06 | `06-technical-debt-metrics.md` | Métricas de deuda técnica |
| 07 | `07-team-health-metrics.md` | Métricas de salud del equipo |
| 08 | `08-customer-satisfaction.md` | Satisfacción del cliente (NPS, CSAT) |
| 09 | `09-business-value-metrics.md` | Métricas de valor de negocio |
| 10 | `10-ai-productivity-metrics.md` | Métricas de productividad con IA |
| 11 | `11-deployment-frequency.md` | Deployment Frequency en detalle |
| 12 | `12-change-failure-rate.md` | Change Failure Rate |
| 13 | `13-mean-time-recovery.md` | Mean Time to Recovery (MTTR) |
| 14 | `14-balance-scorecard.md` | Balanced Scorecard para Software |

### 07-IA en Software Factory (24 notas)
| # | Archivo | Título |
|---|---------|--------|
| 01 | `01-ia-en-ingenieria.md` | IA en ingeniería de software: panorama general |
| 02 | `02-copilot-efecto.md` | GitHub Copilot y el efecto copilot |
| 03 | `03-generacion-codigo.md` | Generación de código con IA |
| 04 | `04-ai-test-generation.md` | Generación de tests con IA |
| 05 | `05-ai-code-analysis.md` | Análisis de código con IA |
| 06 | `06-ai-documentation.md` | IA en documentación técnica |
| 07 | `07-prompt-engineering-dev.md` | Prompt Engineering para desarrolladores |
| 08 | `08-ai-pair-programming.md` | AI Pair Programming |
| 09 | `09-ai-software-design.md` | IA en diseño de software y arquitectura |
| 10 | `10-ai-legacy-modernization.md` | IA para modernización de legacy |
| 11 | `11-ai-security-scanning.md` | IA en seguridad de código |
| 12 | `12-ai-limitaciones-riesgos.md` | Limitaciones y riesgos de IA en dev |
| 13 | `13-ai-metrics-impact.md` | Impacto de IA en métricas |
| 14 | `14-agentes-ia-vison-general.md` | Agentes de IA: visión general |
| 15 | `15-agentes-autonomos.md` | Agentes autónomos vs asistidos |
| 16 | `16-arquitectura-agentes.md` | Arquitecturas de agentes (ReAct, Plan-and-Execute, Multi-Agent) |
| 17 | `17-sub-agentes-orquestacion.md` | Sub-agentes y orquestación |
| 18 | `18-multi-agent-systems.md` | Sistemas multi-agente |
| 19 | `19-mcp-protocol.md` | Model Context Protocol (MCP) |
| 20 | `20-mcp-servers-tools.md` | MCP Servers, Tools y Resources |
| 21 | `21-ai-tools-ecosystem.md` | Ecosistema de herramientas AI (LangChain, CrewAI, AutoGen) |
| 22 | `22-ai-scripts-automation.md` | Scripts y automatización con IA |
| 23 | `23-ai-devops-integration.md` | Integración de IA en DevOps (AIOps) |
| 24 | `24-futuro-ia-software.md` | El futuro de IA en software factories |

### 08-Calidad y Seguridad (12 notas)
| # | Archivo | Título |
|---|---------|--------|
| 01 | `01-qa-moderno.md` | QA moderno: más allá del testing manual |
| 02 | `02-testing-piramide.md` | La Pirámide de Testing |
| 03 | `03-automated-testing.md` | Testing automatizado (unit, integration, e2e) |
| 04 | `04-performance-testing.md` | Performance Testing y Load Testing |
| 05 | `05-security-testing.md` | Security Testing (SAST, DAST, SCA) |
| 06 | `06-owasp-top10.md` | OWASP Top 10 |
| 07 | `07-devsecops.md` | DevSecOps: seguridad integrada |
| 08 | `08-compliance-regulaciones.md` | Compliance y regulaciones (GDPR, SOC2) |
| 09 | `09-zero-trust.md` | Zero Trust en desarrollo |
| 10 | `10-supply-chain-security.md` | Seguridad de cadena de suministro |
| 11 | `11-quality-gates.md` | Quality Gates en CI/CD |
| 12 | `12-defect-prevention.md` | Prevención de defectos vs detección |

### 09-DevOps e Infraestructura (12 notas)
| # | Archivo | Título |
|---|---------|--------|
| 01 | `01-devops-ciclo.md` | El ciclo de DevOps |
| 02 | `02-continuous-delivery.md` | Continuous Delivery en detalle |
| 03 | `03-infrastructure-as-code.md` | Infrastructure as Code |
| 04 | `04-containers-docker.md` | Containers y Docker |
| 05 | `05-kubernetes-orchestration.md` | Kubernetes y orquestación |
| 06 | `06-service-mesh.md` | Service Mesh (Istio, Linkerd) |
| 07 | `07-gitops.md` | GitOps como práctica |
| 08 | `08-site-reliability.md` | Site Reliability Engineering (SRE) |
| 09 | `09-incident-response.md` | Incident Response y post-mortems |
| 10 | `10-cloud-native.md` | Cloud Native Architecture |
| 11 | `11-serverless-edge.md` | Serverless y Edge Computing |
| 12 | `12-cost-optimization.md` | Optimización de costos en cloud |

### 10-Gestión de Proyectos (12 notas)
| # | Archivo | Título |
|---|---------|--------|
| 01 | `01-planificacion-agil.md` | Planificación ágil (roadmapping) |
| 02 | `02-estimacion-tecnicas.md` | Técnicas de estimación |
| 03 | `03-story-points-tshirt.md` | Story Points vs T-Shirt Sizing |
| 04 | `04-backlog-grooming.md` | Backlog Grooming / Refinement |
| 05 | `05-risk-management.md` | Gestión de riesgos en software |
| 06 | `06-stakeholder-management.md` | Gestión de stakeholders |
| 07 | `07-budget-cost.md` | Presupuesto y costos en software |
| 08 | `08-contratacion-modelos.md` | Modelos de contratación (T&M, Fixed, Dedicated) |
| 09 | `09-sla-slo-error-budgets.md` | SLAs, SLOs y Error Budgets |
| 10 | `10-okr-software.md` | OKRs para equipos de software |
| 11 | `11-portfolio-management.md` | Portfolio Management |
| 12 | `12-delivery-ritmos.md` | Ritmos de delivery (sprints, increments) |

### 11-Cultura y Equipo (12 notas)
| # | Archivo | Título |
|---|---------|--------|
| 01 | `01-cultura-ingenieria.md` | Cultura de ingeniería |
| 02 | `02-psychological-safety.md` | Seguridad psicológica |
| 03 | `03-remote-hybrid.md` | Trabajo remoto e híbrido |
| 04 | `04-collaboration-tools.md` | Herramientas de colaboración |
| 05 | `05-knowledge-sharing.md` | Compartir conocimiento (tech talks, guilds) |
| 06 | `06-mentoria-coaching.md` | Mentoring y coaching técnico |
| 07 | `07-career-ladders.md` | Career ladders (IC vs Management) |
| 08 | `08-diversidad-inclusion.md` | Diversidad e inclusión en tech |
| 09 | `09-burnout-prevencion.md` | Burnout: prevención y detección |
| 10 | `10-motivacion-devs.md` | Motivación de desarrolladores |
| 11 | `11-communities-practice.md` | Communities of Practice |
| 12 | `12-innovation-time.md` | Innovation Time (20% time, hackathons) |

### 12-Casos y Aplicación (12 notas)
| # | Archivo | Título |
|---|---------|--------|
| 01 | `01-transformacion-digital.md` | Casos de transformación digital |
| 02 | `02-migracion-cloud.md` | Migración a cloud: casos reales |
| 03 | `03-adopcion-devops.md` | Adopción de DevOps: casos reales |
| 04 | `04-ai-adopcion-casos.md` | Adopción de IA en equipos |
| 05 | `05-anti-patrones.md` | Anti-patrones en Software Factories |
| 06 | `06-fallidos-comunes.md` | Errores comunes y cómo evitarlos |
| 07 | `07-buenas-practicas-compendium.md` | Compendio de buenas prácticas |
| 08 | `08-checklist-proyecto.md` | Checklist para nuevo proyecto |
| 09 | `09-checklist-squad.md` | Checklist para nuevo squad |
| 10 | `10-playbook-transformacion.md` | Playbook de transformación |
| 11 | `11-antologia-pensadores.md` | Antología de pensadores clave |
| 12 | `12-glosario-avanzado.md` | Glosario avanzado y Siglas |

## Archivos Raíz (4)

| Archivo | Propósito |
|---------|-----------|
| `Index.md` | Punto de entrada, navegación, tabla de secciones |
| `como-usar-este-kb.md` | Guía de uso de Obsidian y el vault |
| `sf-glossary.md` | Glosario maestro (50+ términos) |
| `sf-timeline.md` | Línea temporal: mainframes → cloud → IA |

## Total: 166 archivos

| Sección | Notas |
|---------|-------|
| Raíz | 4 |
| 01-Fundamentos | 16 |
| 02-Estructura | 14 |
| 03-Procesos | 14 |
| 04-Prácticas | 14 |
| 05-Herramientas | 14 |
| 06-Métricas | 14 |
| 07-IA Software | 24 |
| 08-Calidad-Seguridad | 12 |
| 09-DevOps-Infra | 12 |
| 10-Gestión-Proyectos | 12 |
| 11-Cultura-Equipo | 12 |
| 12-Casos-Aplicación | 12 |
| **Total** | **166** |

## Frontmatter Estándar

```yaml
---
title: "Título de la nota"
tags:
  - sf/seccion
  - type/concepto|herramienta|guia|checklist
  - difficulty/principiante|intermedio|avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Nombre de Sección"
aliases:
  - "Alias 1"
  - "Alias 2"
related:
  - "[[seccion/archivo-relacionado]]"
---
```

## Tags

### Por sección
- `sf/fundamentos`, `sf/estructura`, `sf/procesos`, `sf/practicas`
- `sf/herramientas`, `sf/metricas`, `sf/ia-software`, `sf/calidad`
- `sf/devops`, `sf/gestion`, `sf/cultura`, `sf/casos`

### Por tipo
- `type/concepto`, `type/herramienta`, `type/guia`, `type/checklist`, `type/framework`
- `type/agente`, `type/arquitectura`, `type/protocolo` (para sección IA)

### Por dificultad
- `difficulty/principiante`, `difficulty/intermedio`, `difficulty/avanzado`

## Estrategia de Implementación

### Fase 1: Estructura raíz + Fundamentos (20 archivos)
1. Crear directorios
2. Index.md, como-usar-este-kb.md, sf-glossary.md, sf-timeline.md (4)
3. 01-Fundamentos/ (16 notas)

### Fase 2: Estructura + Procesos + Prácticas (42 archivos)
4. 02-Estructura/ (14 notas)
5. 03-Procesos/ (14 notas)
6. 04-Prácticas/ (14 notas)

### Fase 3: Herramientas + Métricas + IA (52 archivos)
7. 05-Herramientas/ (14 notas)
8. 06-Métricas/ (14 notas)
9. 07-IA-Software/ (24 notas — expandido con agentes, MCP, tools)

### Fase 4: Calidad + DevOps + Gestión + Cultura + Casos (60 archivos)
10. 08-Calidad-Seguridad/ (12 notas)
11. 09-DevOps-Infra/ (12 notas)
12. 10-Gestion-Proyectos/ (12 notas)
13. 11-Cultura-Equipo/ (12 notas)
14. 12-Casos-Aplicacion/ (12 notas)

**Total: 20 + 42 + 52 + 60 = 174 archivos** (incluye root files)

## Verificación

1. Abrir `sf-kb/` en Obsidian — graph view debe mostrar conexiones entre secciones
2. Cada nota debe tener 3-10+ wikilinks a otras secciones
3. Glosario debe contener 50+ términos
4. No debe haber notas huérfanas (sin wikilinks entrantes)
5. Frontmatter consistente en todas las notas
6. Ejecutar `node .opencode/scripts/ci-validate.js` para verificar estructura

## Generación de PDFs

```bash
for section in 01-Fundamentos 02-Estructura 03-Procesos 04-Practicas 05-Herramientas 06-Metricas 07-IA-Software 08-Calidad-Seguridad 09-DevOps-Infra 10-Gestion-Proyectos 11-Cultura-Equipo 12-Casos-Aplicacion; do
  node .opencode/scripts/docgen-vault.js --vault sf-kb --scope module --module "$section" --output docs/sf-kb
done
```
