---
title: "Architecture Decision Records (ADR)"
tags:
  - sf/estructura
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Estructura y Organización"
aliases:
  - "ADR"
  - "Architecture Decision Records"
  - "Decision Records"
related:
  - "[[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]]"
  - "[[../02-Estructura/04-architect|Software Architect]]"
  - "[[../02-Estructura/03-tech-lead|Tech Lead]]"
  - "[[../01-Fundamentos/09-technical-debt|Technical Debt]]"
---

# Architecture Decision Records (ADR)

Los ADRs son documentos que capturan decisiones arquitectónicas importantes: qué se decidió, por qué, y qué tradeoffs se aceptaron.

## ¿Qué es un ADR?

Un Architecture Decision Record es un documento de una sola página que registra una decisión arquitectónica significativa, su contexto, y sus consecuencias.

> "ADR = el periódico de la arquitectura" — documenta lo que pasó y por qué, antes de que el conocimiento se pierda.

## Por Qué Usar ADRs

| Beneficio | Descripción |
|---|---|
| **Trazabilidad** | Saber por qué se tomó una decisión específica |
| **Onboarding** | Nuevos miembros entienden el contexto histórico |
| **Evitar re-discussion** | No revisitar decisiones ya tomadas sin nueva info |
| **Accountability** | Queda claro quién decidió y cuándo |
| **Comunicación** | Alinear a múltiples equipos sobre decisiones |
| **Preservar contexto** | Cuando el equipo que decidió ya no está |

## Formato Estándar

### Template: Michael Nygard (El más usado)

```markdown
# ADR [ número]: [Título de la Decisión]

## Estado
[Propuesto | Aceptado | Obsoleto | Reemplazado por ADR-XXX]

## Contexto
[Describe el contexto y forces que llevaron a esta decisión.
No es solo technical — incluye business, team, timeline.]

## Decisión
[Describe la decisión tomada de forma clara y concisa.
Usa voz activa: "Decidimos..."]

## Consecuencias
[Que se gana, que se pierde, y qué tradeoffs se aceptan.]

### Positivas
- [Beneficio 1]
- [Beneficio 2]

### Negativas
- [Costo 1]
- [Costo 2]

### Neutrales
- [Impacto que es neither positive nor negative]
```

### Template Avanzado (para decisiones complejas)

```markdown
# ADR [number]: [Title]

## Estado
Propuesto | Aceptado | Obsoleto | Reemplazado por [[ADR-XXX]]

## Fecha
YYYY-MM-DD

## Contexto
### Problema
[¿Qué problema resuelve esta decisión?]

### Drivers
- [Driver 1: business requirement, technical constraint, etc.]
- [Driver 2]
- [Driver 3]

### Constraints
- [Constraint 1: budget, time, team, regulation]
- [Constraint 2]

## Options Considered

### Option A: [Nombre]
**Pros:** ...
**Cons:** ...
**Riesgo:** ...

### Option B: [Nombre]
**Pros:** ...
**Cons:** ...
**Riesgo:** ...

### Option C: [Nombre]
**Pros:** ...
**Cons:** ...
**Riesgo:** ...

## Decision
Decidimos implementar **Option [X]** because [rationale].

## Consecuencias
### Esperadas
- [Consequence 1]
- [Consequence 2]

### Riesgos
- [Risk 1] — Mitigación: [plan]

## Follow-up Actions
- [ ] [Action 1] — Owner: [person] — Due: [date]
- [ ] [Action 2] — Owner: [person] — Due: [date]

## References
- [[ADR-XXX]] (superseded by this)
- [Link to RFC if applicable]
```

## Convención de Numeración

```
docs/adr/
├── 0001-use-postgresql-as-primary-db.md
├── 0002-adopt-event-driven-architecture.md
├── 0003-use-kubernetes-for-orchestration.md
├── 0004-implement-cqrs-for-order-service.md
└── 0005-migrate-from-rest-to-graphql.md
```

**Reglas:**
- Números secuenciales, zero-padded a 4 dígitos
- Nombres descriptivos en kebab-case
- Una carpeta `docs/adr/` en la raíz del repo
- Solo se crean, nunca se borran

## Ejemplos Reales

### ADR 0001: PostgreSQL como Base de Datos Principal

```markdown
# ADR 0001: PostgreSQL como Base de Datos Principal

## Estado
Aceptado

## Contexto
Necesitamos elegir una base de datos relacional para el sistema 
principal de órdenes. El equipo tiene experiencia con PostgreSQL y 
MySQL. Necesitamos ACID compliance, JSON support, y extensibilidad.

## Decisión
Usaremos PostgreSQL como base de datos principal.

## Consecuencias
### Positivas
- JSON/JSONB para datos semi-estructurados
- Extensibilidad (PostGIS, pg_trgm)
- Comunidad activa y ecosistema maduro
- Licencia permisiva

### Negativas
- Curva de aprendizaje para operaciones de DBA
- Menor disponibilidad de hosting managed vs MySQL
```

### ADR 0002: Event-Driven para Comunicación entre Servicios

```markdown
# ADR 0002: Event-Driven Architecture para Communication

## Estado
Aceptado

## Contexto
Tenemos 5 microservicios que necesitan comunicarse. 
El request-response directo genera acoplamiento fuerte y cascade failures.

## Decisión
Usaremos event-driven architecture con Apache Kafka para 
comunicación asincrónica entre servicios.

## Consecuencias
### Positivas
- Desacoplamiento de servicios
- Resiliencia: los consumers fallan independientemente
- Scalability horizontal de event processing

### Negativas
- Complejidad de debugging distribuido
- eventual consistency (no strong consistency)
- Requiere infraestructura adicional (Kafka cluster)
```

## Herramientas para ADRs

| Herramienta | Tipo | Ventaja |
|---|---|---|
| **adr-tools** | CLI | Init, list, new, supersedes |
| **Log4brains** | Web UI | Visualización y navegación |
| **Markdown files** | Manual | Simple, version controlled |
| **Notion/Confluence** | Collaborative | Editable, commentable |
| **GitHub/GitLab** | PR-based | Review process, approval |

### Uso de adr-tools

```bash
# Instalar
npm install -g adr-tools

# Inicializar en un repo
adr init

# Crear nuevo ADR
adr new "Use PostgreSQL as primary database"

# Listar ADRs
adr list

# Referenciar un ADR
adr link 1 superseded-by 3
```

## ADR vs RFC

| Aspecto | ADR | RFC |
|---|---|---|
| **Scope** | 1 decisión arquitectónica | Propuesta amplia |
| **Audience** | Técnico, largo plazo | Técnico + stakeholders |
| **Vida útil** | Permanente | Temporal (se implementa o cierra) |
| **Formato** | Más corto, estructurado | Más largo, incluye alternativas |
| **Cuándo usar** | Decisión tomada | Propuesta en review |

Ver [[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]] para el proceso completo.

## ADRs y AI

Con [[../07-IA-Software/README|IA]], los ADRs pueden ser asistidos por:

- **Generación de draft**: AI genera borrador basado en requirements
- **Review assistance**: AI identifica gaps en el ADR
- **Decision impact analysis**: AI evalúa consecuencias potenciales
- **Historical search**: AI encuentra ADRs relevantes para decisions actuales

## Referencias

- [[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]]
- [[../02-Estructura/04-architect|Software Architect]]
- [[../01-Fundamentos/09-technical-debt|Technical Debt]]
- [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]
