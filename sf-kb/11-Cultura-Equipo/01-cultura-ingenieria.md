---
title: "Cultura de Ingeniería"
tags:
  - sf/cultura
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Cultura y Equipo"
aliases:
  - "Engineering Culture"
  - "Westrum Culture"
  - "Cultura Técnica"
related:
  - "[[../11-Cultura-Equipo/02-psychological-safety|Seguridad Psicológica]]"
  - "[[../11-Cultura-Equipo/11-communities-practice|Communities of Practice]]"
  - "[[../10-Gestion-Proyectos/10-okr-software|OKRs]]"
  - "[[../06-Metricas/07-team-health-metrics|Salud del Equipo]]"
---

## Definición

La cultura de ingeniería es el conjunto de valores, prácticas y normas compartidas que determinan cómo un equipo construye software. No es solo "cómo hacemos las cosas", sino por qué las hacemos de esa manera.

## Modelo de Westrum

Ron Westrum clasificó las culturas organizacionales en tres tipos:

| Tipo | Características | Resultado |
|------|----------------|-----------|
| **Pathological** | Miedo, información ocultada, competencia tóxica | Silos, bajo desempeño |
| **Bureaucratic** | Procesos rígidos, reglas sobre resultados | Lentitud, mediocridad |
| **Generativa** | Confianza, información fluye, aprendizaje continuo | Alto desempeño, innovación |

### Señales de cada tipo

**Pathological:**
- Bugs se ocultan, no se reportan incidentes
- Blame culture después de fallos
- Knowledge hoarding como poder personal

**Bureaucratic:**
- Procesos de approval que toman semanas
- Documentación que nadie lee
- "Eso no es mi responsabilidad"

**Generativa:**
- Post-mortems sin blame, enfocados en mejora
- Documentación viva y actualizada
- Cross-functional collaboration natural

## Cómo Construir Cultura de Ingeniería

### 1. Definir Valores Explícitos

No asumir que la cultura "ocurre". Definirla y comunicarla.

```
Ejemplo de Engineering Culture Playbook:

VALOR: "Ship early, ship often"
- Preferimos deploys pequeños y frecuentes
- Feature flags > long-lived branches
- Medimos deployment frequency como health check

VALOR: "Blameless post-mortems"
- Enfocados en sistema, no en personas
- Acciones correctivas con due dates
- Compartidos públicamente en la org

VALOR: "Documentation as code"
- READMEs actualizados como Definition of Done
- ADRs para decisiones arquitectónicas
- Runbooks para operaciones
```

### 2. Liderazgo por Ejemplo

| Acción del liderazgo | Impacto cultural |
|----------------------|------------------|
| CTO escribe código y hace PRs | Engineering remains hands-on |
| Managers participan en on-call | Empatía con la experiencia del equipo |
| Leaders admiten errores públicamente | Seguridad psicológica crece |
| Leadership invierte en tooling | Productivity y developer experience importan |

### 3. Crear Rituals que Refuercen la Cultura

| Ritual | Frecuencia | Objetivo cultural |
|--------|------------|-------------------|
| Tech Talks | Semanal/quincenal | Knowledge sharing |
| Demo Day | Fin de sprint | Pride en el trabajo |
| Blameless Post-mortem | Cada incidente | Learning, no blame |
| Architecture Review | Mensual | Quality, standards |
| Hackathon | Trimestral | Innovation, creativity |

### 4. Codificar en Procesos

La cultura se sostiene en procesos, no en documentos:

- **Code review guidelines** refuerzan quality standards
- **Incident response process** refuerza blameless culture
- **Hiring rubric** refuerza cultural alignment
- **Onboarding checklist** transmite cultura a nuevos miembros

## Frameworks de Cultura de Ingeniería

### Spotify Model (Squad, Tribe, Chapter, Guild)

| Unidad | Propósito | Cultural impact |
|--------|-----------|-----------------|
| **Squad** | Equipo autónomo cross-functional | Ownership, autonomía |
| **Chapter** | Grupo de mismo skill set | Best practices, mentoring |
| **Guild** | Comunidad de interés transversal | Knowledge sharing |
| **Tribe** | Agrupación de squads alineados | Alignment, escala |

### Netflix Culture Deck

Principios clave:
- **Freedom & Responsibility**: alta autonomía con alta responsabilidad
- **Context, not Control**: dar contexto en lugar de microgestionar
- **Highly Aligned, Loosely Coupled**: alineados en dirección, independientes en ejecución

### Team Topologies (Team Types)

| Tipo | Responsabilidad | Cultural impact |
|------|-----------------|-----------------|
| **Stream-aligned** | Feature delivery | Ownership end-to-end |
| **Platform** | Internal developer platform | Self-service, developer experience |
| **Enabling** | Upskill other teams | Knowledge transfer, mentoring |
| **Complicated-subsystem** | Complex technical domain | Deep expertise |

## Métricas de Salud Cultural

| Métrica | Cómo medir | Target |
|---------|-----------|--------|
| **eNPS** | Survey trimestral | > 30 |
| **Psychological Safety Score** | Survey con escala Likert | > 4.0/5 |
| **Knowledge Sharing Index** | Tech talks, docs contributions | Creciente |
| **Retention Rate** | HR data | > 85% anual |
| **Internal Mobility** | Transferencias internas | > 10% anual |

## Anti-Patterns de Cultura

| Anti-Patrón | Consecuencia |
|-------------|-------------|
| "Culture fit" como excusa para homogeneidad | Lack de diversidad |
| Culture as perks (ping pong, beer fridge) | Superficial, no duradera |
| Hero culture | Bus factor = 1, burnout |
| "Move fast and break things" sin quality bar | Technical debt累积 |
| Perfectionism culture | Paralysis, missed deadlines |

## Conexiones

- [[../11-Cultura-Equipo/02-psychological-safety|Seguridad Psicológica]] — base de la cultura generativa
- [[../11-Cultura-Equipo/05-knowledge-sharing|Compartir Conocimiento]] — ritual cultural clave
- [[../11-Cultura-Equipo/11-communities-practice|Communities of Practice]] — cómo escalar cultura
- [[../06-Metricas/07-team-health-metrics|Salud del Equipo]] — medir lo que importa
- [[../01-Fundamentos/07-devops-filosofia|DevOps Filosofía]] — cultura como pilar DevOps
- [[../01-Fundamentos/06-agile-manifesto|Agile Manifesto]] — valores que inspiran
- [[../10-Gestion-Proyectos/10-okr-software|OKRs]] — alinear cultura con objetivos
