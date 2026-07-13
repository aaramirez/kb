---
title: "Software Architect: Rol y Responsabilidades"
tags:
  - sf/estructura
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Estructura y Organización"
aliases:
  - "Arquitecto de Software"
  - "Software Architecture"
related:
  - "[[../02-Estructura/03-tech-lead|Tech Lead]]"
  - "[[../02-Estructura/09-adr-decisiones|ADR]]"
  - "[[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]]"
  - "[[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]"
---

# Software Architect: Rol y Responsabilidades

El Software Architect define la visión técnica de largo plazo, toma decisiones de arquitectura system-wide y guía al equipo en la implementación correcta.

## ¿Qué es un Software Architect?

Un Software Architect es responsable de la **calidad estructural** del sistema de software. Mientras el Tech Lead se enfoca en un squad, el Architect opera a nivel de sistema o portfolio.

> "The architect's primary responsibility is to maintain the integrity of the architectural vision." — George Fairbanks, *Just Enough Software Architecture*

## Responsabilidades Core

### Architecture Decisions
- Definir patrones arquitectónicos: [[../01-Fundamentos/12-monolito-microservicios|microservicios, event-driven, CQRS]]
- Establecer boundaries entre sistemas y servicios
- Seleccionar tecnologías de infraestructura
- Documentar decisiones en [[../02-Estructura/09-adr-decisiones|ADR]]

### Tech Radar
Mantener y evolucionar el tech radar del equipo/organización:

| Quadrant | Ejemplos |
|---|---|
| **Languages & Frameworks** | Kotlin, Spring Boot, React, FastAPI |
| **Platforms** | AWS, Kubernetes, PostgreSQL, Redis |
| **Tools** | Terraform, GitHub Actions, ArgoCD |
| **Techniques** | Event Sourcing, Circuit Breaker, Strangler Fig |

Cada tecnología se clasifica en:
- **Adopt**: listo para uso general
- **Trial**: valioso, probar en proyectos reales
- **Assess**: investigar y crear POC
- **Hold**: no usar en nuevos proyectos

### Design Reviews
- Revisar diseños de arquitectura antes de implementación
- Identificar risks y tradeoffs
- Asegurar compliance con estándares
- Facilitar [[../02-Estructura/08-gobernanza-tecnica|design reviews]] formales

### Technology Strategy
- Roadmap técnico de 6-18 meses
- Migraciones y modernización
- Evaluación de build vs buy
- Gestión de [[../01-Fundamentos/09-technical-debt|technical debt]] a nivel estratégico

## Decisiones de Arquitectura

### Framework de Decisión

```
1. Contexto: ¿Qué problema resolvemos?
2. Options: ¿Cuáles son las alternativas?
3. Criterios: ¿Qué importa? (cost, time, risk, scalability)
4. Decision: ¿Qué elegimos y por qué?
5. Consequences: ¿Qué tradeoffs aceptamos?
```

Ver [[../02-Estructura/09-adr-decisiones|ADR]] para el formato estándar.

### Tipos de Decisiones

| Tipo | Scope | Ejemplo | Quién decide |
|---|---|---|---|
| **Strategic** | Org-wide | Cloud provider, main tech stack | CTO + Architects |
| **Tactical** | Team/system level | API design, data model | Architect + Tech Lead |
| **Operational** | Feature-level | Implementation pattern | Tech Lead + Senior devs |

## Architect vs Tech Lead (Detalle)

| Dimensión | Software Architect | Tech Lead |
|---|---|---|
| **Time horizon** | 1-3 años | 1-3 sprints |
| **Scope** | Sistema completo / portfolio | 1 squad |
| **Código** | POCs, prototypes, spikes | Feature code diario |
| **Stakeholders** | Leadership, múltiples teams | 1 team + PO |
| **Deliverables** | ADRs, diagrams, tech radar | Working software |
| **Risk management** | Architectural risks | Implementation risks |
| **Knowledge** | Breadth (multi-domain) | Depth (team stack) |

## Artefactos del Architect

| Artefacto | Propósito | Frecuencia |
|---|---|---|
| Architecture diagrams | Documentar estructura del sistema | On change |
| ADRs | Registrar decisiones y contexto | Per decision |
| Tech radar | Evaluar tecnologías | Quarterly |
| Architecture reviews | Validar diseños | Per feature major |
| Capacity planning | Escalar infra y equipo | Quarterly |
| Run books | Operaciones críticas | On need |

Ver [[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]] para el proceso completo.

## Modelo de Madurez del Architect

| Nivel | Capacidad | Ejemplo |
|---|---|---|
| **Nivel 1** | Diseña features dentro de un sistema existente | API design, DB schema |
| **Nivel 2** | Diseña subsistemas completos | Payment service, notification engine |
| **Nivel 3** | Define arquitectura de sistema multi-service | E-commerce platform |
| **Nivel 4** | Arquitectura de portfolio, múltiples productos | Enterprise architecture |
| **Nivel 5** | Define technical strategy org-wide, innova | Distinguished Engineer |

## Errores Comunes

| Error | Impacto | Mitigación |
|---|---|---|
| **Ivory tower architecture** | Diseños que nadie implementa | Stay close to code, pair with devs |
| **Resume-driven development** | Elegir tech por hype | Evaluate pragmatically, ADR |
| **Over-engineering** | Complejidad innecesaria | YAGNI, [[../01-Fundamentos/04-principios-ingenieria-software|principios de ingeniería]] |
| **Under-documenting** | Knowledge loss, onboarding lento | Mandatory ADRs for key decisions |
| **Ignoring Conway** | Architecture doesn't match org structure | Consider org design in architecture |

## Herramientas del Architect

| Categoría | Herramientas |
|---|---|
| Diagramming | Structurizr, PlantUML, Mermaid, C4 model |
| ADR | adr-tools, Log4brains, markdown |
| Tech Radar | ThoughtWorks Tech Radar, internal tools |
| Architecture Review | Architecture Fitness Functions, ArchUnit |
| Documentation | Docusaurus, Notion, Confluence |

## Referencias

- [[../02-Estructura/03-tech-lead|Tech Lead]]
- [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]
- [[../01-Fundamentos/12-monolito-microservicios|De Monolito a Microservicios]]
- [[../02-Estructura/13-arbol-deportes|Team Topologies]]
- [[../01-Fundamentos/10-conway-ley|Ley de Conway]]
