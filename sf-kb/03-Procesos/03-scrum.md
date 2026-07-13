---
title: "Scrum Framework"
tags:
  - sf/procesos
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "Scrum"
  - "Sprint"
  - "Agile Scrum"
related:
  - "[[../03-Procesos/02-kanban-software|Kanban]]"
  - "[[../01-Fundamentos/06-manifiesto-agile|Manifiesto Ágil]]"
  - "[[../02-Estructura/06-product-owner|Product Owner]]"
  - "[[../03-Procesos/01-sdlc|SDLC]]"
  - "[[../06-Metricas/README|Métricas]]"
---

# Scrum Framework

**Scrum** es el marco Agile más utilizado para gestionar trabajo complejo, enfocado en entregar valor incremental en iteraciones time-boxed llamadas **sprints**.

## Definición

> Scrum es un framework ligero que ayuda a personas, equipos y organizaciones a generar valor mediante soluciones adaptativas para problemas complejos.

## Los 3 pilares de Scrum

| Pilar | Significado | Práctica |
|-------|-------------|----------|
| **Transparencia** | Todo el trabajo es visible | Backlog visible, daily, dashboards |
| **Inspección** | Revisar frecuentemente | Sprint Review, retrospectives |
| **Adaptación** | Ajustar cuando sea necesario | Cambios en backlog, procesos |

## Los 5 valores de Scrum

1. **Courage** — Hacer lo correcto, enfrentar problemas
2. **Focus** — Concentrarse en el trabajo del sprint
3. **Respect** — Valorar las perspectivas de todos
4. **Openness** — Compartir progreso y desafíos
5. **Commitment** — Comprometerse con el sprint goal

## Roles de Scrum

### Product Owner (PO)

- [[../02-Estructura/06-product-owner|Ver detalle en Estructura]]
- Dueño del Product Backlog
- Define prioridades y ROI
- Representa al usuario/cliente
- **No** gestiona personas, gestiona valor

### Scrum Master (SM)

- Facilitador del proceso
- Elimina impedimentos
- Protector del equipo
- Coach en prácticas Agile
- **No** es manager, es servant leader

### Development Team

- Cross-funcional (7±2 personas)
- Auto-organizado
- Comprometido con el sprint goal
- Responsable colectiva del deliverable

## Artefactos de Scrum

### Product Backlog

```
Prioridad
  ▲
  │  ┌──────────────────────────┐
  │  │ User Story: Login OAuth  │  ← Alto valor
  │  ├──────────────────────────┤
  │  │ User Story: Dashboard    │
  │  ├──────────────────────────┤
  │  │ Tech Debt: Upgrade dep   │
  │  ├──────────────────────────┤
  │  │ Feature: Notifications   │
  │  └──────────────────────────┘
  └──────────────────────────────→
```

| Campo | Descripción |
|-------|-------------|
| **User Story** | Quién, qué, por qué |
| **Acceptance Criteria** | Cómo verificar completitud |
| **Estimación** | Story points o tiempo |
| **Prioridad** | Valor de negocio + riesgo |

### Sprint Backlog

Subconjunto del Product Backlog seleccionado para el sprint:

- Sprint Goal
- Selección de items del Product Backlog
- Plan de entrega

### Increment

El resultado tangible al final del sprint:

- Debe ser "Done" (Definition of Done)
- Potencialmente desplegable
- Integra todo el trabajo del sprint

## Eventos de Scrum (Ceremonias)

```
Sprint (2-4 semanas)
├── Sprint Planning ( inicio)
│   ├── ¿Qué entregaremos?
│   └── ¿Cómo lo haremos?
├── Daily Scrum (diario, 15 min)
│   ├── ¿Qué hice ayer?
│   ├── ¿Qué haré hoy?
│   └── ¿Hay impedimentos?
├── Sprint Review (final)
│   ├── Demo del incremento
│   └── Feedback del stakeholder
└── Sprint Retrospective (final)
    ├── ¿Qué salió bien?
    ├── ¿Qué mejorar?
    └── Acción concreta
```

### Sprint Planning

| Pregunta | Respuesta esperada |
|----------|-------------------|
| ¿Qué podemos entregar? | Selección del backlog |
| ¿Cómo lo lograremos? | Descomposición en tareas |
| ¿Cuánto tiempo tenemos? | Time-box de 8h (sprint de 2 sem) |

### Daily Scrum

**Formato eficiente (3 preguntas):**
1. ¿Contribuí al sprint goal?
2. ¿Contribuiré al sprint goal hoy?
3. ¿Hay impedimentos?

**Anti-patterns a evitar:**
- Status report al manager
- Sesiones > 15 minutos
- Solo hablan 2-3 personas

### Sprint Review

- Demo del incremento funcional
- Feedback de stakeholders
- Ajuste del Product Backlog
- **No** es una presentación de PowerPoint

### Sprint Retrospective

| Método | Formato |
|--------|---------|
| **Start/Stop/Continue** | Qué empezar, parar, continuar |
| **Mad/Sad/Glad** | Emociones del equipo |
| **4Ls** | Liked, Learned, Lacked, Longed for |
| **Sailboat** | Viento (ayuda), Anclas (frenan), Roca (riesgo) |

## Sprint

| Aspecto | Recomendación |
|---------|---------------|
| **Duración** | 1-4 semanas (típico: 2 semanas) |
| **Consistencia** | Misma duración siempre |
| **Buffer** | No incluir vacaciones, feriados |
| **Velocity** | Se estabiliza tras 3-5 sprints |

## Definition of Done (DoD)

Checklist que todos los items deben cumplir:

- [ ] Código revisado y aprobado
- [ ] Tests unitarios pasando
- [ ] Tests de integración pasando
- [ ] Sin bugs críticos o altos abiertos
- [ ] Documentación actualizada
- [ ] Desplegado en ambiente de staging
- [ ] Aceptado por PO

## Métricas de Scrum

| Métrica | Descripción | Cómo usarla |
|---------|-------------|-------------|
| **Velocity** | Story points completados/sprint | Planificación, no performance |
| **Sprint Goal Rate** | % de sprints que logran el goal | Compromiso y planificación |
| **Defect Escape Rate** | Bugs que llegan a producción | Calidad del proceso |
| **Cycle Time** | Tiempo medio de completar item | Eficiencia del flujo |

Ver más en [[../06-Metricas/README|Métricas de Flujo]].

## Scrum vs Kanban

| Aspecto | Scrum | [[../03-Procesos/02-kanban-software|Kanban]] |
|---------|-------|--------|
| **Cambios** | No en sprint | Continuos |
| **WIP** | Por sprint | Por columna |
| **Roles** | SM, PO, Team | Ninguno definido |
| **Events** | Obligatorios | Opcionales |
| **Ideal para** | Producto nuevo | Soporte, mantenimiento |

## Relación con otros conceptos

- [[../01-Fundamentos/06-manifiesto-agile|Manifiesto Ágil]] fundamenta Scrum
- [[../02-Estructura/06-product-owner|Product Owner]] es un rol clave
- [[../03-Procesos/04-scaled-agile-safe|SAFe/LeSS]] escalan Scrum a múltiples equipos
- [[../03-Procesos/08-code-review-proceso|Code Review]] complementa la calidad en el sprint
- [[../01-Fundamentos/16-lean-software|Lean]] complementa con eficiencia
