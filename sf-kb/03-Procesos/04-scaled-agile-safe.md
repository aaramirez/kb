---
title: "Scaling Agile — SAFe, LeSS, Nexus"
tags:
  - sf/procesos
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "SAFe"
  - "LeSS"
  - "Nexus"
  - "Agile a Escala"
related:
  - "[[../03-Procesos/03-scrum|Scrum]]"
  - "[[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]]"
  - "[[../02-Estructura/07-squad-tribe-chapter|Spotify Model]]"
  - "[[../01-Fundamentos/10-conway-ley|Ley de Conway]]"
  - "[[../03-Procesos/02-kanban-software|Kanban]]"
---

# Scaling Agile — SAFe, LeSS, Nexus

Cuando una organización crece más allá de un solo equipo Scrum, necesitan **marcos para escalar Agile**. Cada framework resuelve la coordination multi-equipo de forma diferente.

## ¿Cuándo escalar?

| Señal | Descripción |
|-------|-------------|
| **Más de 1 equipo** trabajando en el mismo producto | Coordinación necesaria |
| **Dependencias frecuentes** entre equipos | Bloqueos de entrega |
| **Integración compleja** de componentes | Riesgo de incompatibilidad |
| **Roadmap compartido** múltiples equipos | Sincronización de releases |
| **Regulación y compliance** | Gobernanza formal |

## Comparación general

| Aspecto | SAFe | LeSS | Nexus | Spotify Model |
|---------|------|------|-------|---------------|
| **Complejidad** | Alta | Baja | Media | Media |
| **Equipos** | 50-100+ | 2-8 | 3-9 | Ilimitado |
| **Ceremonias** | Muy estructuradas | Mínimas | Leve | Flexibles |
| **Roles nuevos** | PI, ART, RTE | Ninguno | Integration Team | Tribe Lead |
| **Framework** | Pesado | Light | Leve | Cultural |
| **Adopción** | Top-down | Bottom-up | Bottom-up | Orgánica |

## SAFe (Scaled Agile Framework)

El framework más utilizado a gran escala:

```
Portfolio Level
┌─────────────────────────────────────────────┐
│ Strategic Themes │ Lean Budget │ Guardrails │
└─────────────────────────────────────────────┘
                    │
Program Level (ART)
┌─────────────────────────────────────────────┐
│  PI Planning │ Inspect & Adapt │ System Demo│
├─────────────────────────────────────────────┤
│  Team 1  │  Team 2  │  Team 3  │  Team 4   │
│  Scrum   │  Scrum   │  Kanban  │  Scrum    │
└─────────────────────────────────────────────┘
```

### Conceptos clave de SAFe

| Concepto | Descripción |
|----------|-------------|
| **ART** (Agile Release Train) | Grupo de equipos sincronizados |
| **PI** (Program Increment) | Iteración de 8-12 semanas (5 sprints) |
| **PI Planning** | Evento de planificación big-room |
| **RTE** (Release Train Engineer) | Facilitador del ART |
| **System Demo** | Demo integrada de todos los equipos |
| **Inspect & Adapt** | Retrospectiva de PI |
| **Lean Budgets** | Presupuesto por valor, no por proyecto |

### PI Planning (2 días)

**Día 1:**
- Visión del negocio y arquitectura
- Contexto de los equipos
- Identificación de dependencias

**Día 2:**
- Planificación por equipo
- Scrum of Scrums
- Presentación de riesgos
- Commitment del equipo

### Ventajas y desventajas de SAFe

| Ventajas | Desventajas |
|----------|-------------|
| Estructura clara para grandes orgs | Pesado, mucha ceremonia |
| Alineamiento con negocio | Puede generar burocracia |
| Soporte de herramientas (Jira, Azure) | Requiere coaches certificados |
| Escalabilidad probada | Riesgo de "Agile en nombre solamente" |

## LeSS (Large-Scale Scrum)

Menos es más — extiende [[../03-Procesos/03-scrum|Scrum]] a múltiples equipos con cambios mínimos:

### Principios de LeSS

1. **Deep empiricism** — transparencia, inspección, adaptación
2. **Whole product focus** — producto completo, no componentes
3. **Customer-centric** — valor para el usuario final
4. **Continuous improvement** — retrospectives en todos los niveles

### Estructura LeSS

```
Un Product Backlog
Un Product Owner
Un Sprint
┌──────────┬──────────┬──────────┐
│  Team 1  │  Team 2  │  Team 3  │
│ Scrum    │ Scrum    │ Scrum    │
└──────────┴──────────┴──────────┘
         │
    Un incremento integrado
```

**Regla clave**: todos los equipos comparten el mismo Product Backlog y entregan el mismo incremento.

### LeSS Huge

Para más de 8 equipos:
- **Area Requirements** — subdivisiones del backlog
- **Component Owners** — dueños de áreas específicas
- Mantiene la simplicidad de LeSS

### Ventajas de LeSS

- Mínima ceremonia adicional
- No introduce roles nuevos
- Mantiene la esencia de Scrum
- Escalable sin complejidad

## Nexus

Framework de Scrum.org para 3-9 equipos:

### Elementos únicos de Nexus

| Elemento | Descripción |
|----------|-------------|
| **Nexus Integration Team** | Equipo dedicado a integración |
| **Nexus Sprint Planning** | Planificación cross-equipo |
| **Nexus Daily Scrum** | Coordinación diaria |
| **Nexus Sprint Review** | Demo integrada |
| **Nexus Sprint Retrospective** | Mejora cross-equipo |

### Artefactos adicionales

- **Nexus Sprint Backlog** — items que requieren trabajo cross-equipo
- **Integration Increment** — build integrado que todos los equipos producen

## Spotify Model (no es un framework)

Referencia cultural más que proceso formal:

```
Squad (equipo自治) → Tribe (agrupación) → Chapter (especialidad) → Guild (comunidad)
```

| Concepto | Descripción |
|----------|-------------|
| **Squad** | Equipo cross-funcional auto-organizado |
| **Tribe** | Agrupación de squads relacionados |
| **Chapter** | Personas con misma habilidad en squads |
| **Guild** | Comunidad de práctica transversal |

Ver más en [[../02-Estructura/07-squad-tribe-chapter|Spotify Model]].

## ¿Qué framework elegir?

| Situación | Recomendación |
|-----------|---------------|
| 2-8 equipos, mismo producto | LeSS |
| 3-9 equipos, necesidad de integración | Nexus |
| 10+ equipos, regulación, alineamiento con negocio | SAFe |
| Cultura fuerte, autonomía | Spotify Model |
| Equipos diversos, diferentes ritmos | Kanban a escala |

## Relación con otros conceptos

- [[../03-Procesos/03-scrum|Scrum]] es la base de todos estos frameworks
- [[../02-Estructura/10-equipos-autonomos|Equipos Autónomos]] son la unidad fundamental
- [[../02-Estructura/07-squad-tribe-chapter|Spotify Model]] es una referencia cultural
- [[../01-Fundamentos/10-conway-ley|Ley de Conway]] explica por qué la estructura importa
- [[../01-Fundamentos/16-lean-software|Lean]] complementa con eficiencia
