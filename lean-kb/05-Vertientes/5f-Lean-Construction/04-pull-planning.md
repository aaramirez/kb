---
title: "Pull Planning en Construcción"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/construction
created: 2026-07-12
updated: 2026-07-12
category: "Lean Construction"
aliases:
  - Pull Planning
  - Planificación Pull
related:
  - "[[05-Vertientes/5f-Lean-Construction/01-lean-construction-vista-general]]"
  - "[[05-Vertientes/5f-Lean-Construction/02-last-planner-system]]"
  - "[[05-Vertientes/5a-Manufactura/04-sistema-produccion-pull]]"
---

# Pull Planning en Construcción

## ¿Qué es Pull Planning?

Pull Planning es una técnica de planificación de proyectos que trabaja **desde el final hacia el inicio**, definiendo las actividades necesarias en orden inverso. A diferencia del planificación push (cronograma impuesto desde arriba), Pull Planning parte de la entrega final y determina qué se necesita para llegar allí.

> *"Planificar desde el final permite ver las dependencias reales, no las asumidas."*

## Pull vs Push en construcción

| Característica | Planificación Push | Planificación Pull |
|---------------|-------------------|-------------------|
| **Dirección** | Inicio → Final | Final → Inicio |
| **Base** | Estimaciones de duración | Compromisos reales |
| **Responsable** | Gerente de proyecto | Equipo de trabajo |
| **Flexibilidad** | Rígida | Adaptable |
| **Precisión** | Menor | Mayor |

## Planificación de fase inversa (Reverse Phase Planning)

La planificación de fase inversa es el corazón de Pull Planning:

1. **Definir la entrega final** — ¿qué se entrega y cuándo?
2. **Identificar actividades previas** — ¿qué necesita estar listo antes?
3. **Seguir retrocediendo** — ¿qué necesita cada actividad anterior?
4. **Identificar dependencias** — ¿qué actividades son paralelas?
5. **Asignar responsables** — ¿quién se compromete a cada actividad?

### Ejemplo simplificado: Entrega de edificio residencial

| Actividad | Dependencia | Responsable |
|-----------|------------|-------------|
| Entrega al cliente | Fin de acabados | Gerente |
| Acabados interiores | Instalaciones completas | Contratista |
| Instalaciones | Estructura lista | Subcontratista |
| Estructura | Fundaciones curadas | Constructor |
| Fundaciones | Permisos aprobados | Ingeniero |

## Sesiones colaborativas de planificación

Pull Planning funciona mejor como una **sesión colaborativa** donde participan todos los responsables:

### Dinámica de la sesión
- **Preparación** — define el alcance y las fechas objetivo
- **Participación** — cada responsable propone sus actividades
- **Negociación** — se discuten dependencias y tiempos
- **Compromiso** — cada quien asume sus fechas
- **Visualización** — se usa un muro o tablero digital

### Herramientas visuales
- **Sticky notes en muro** — el clásico método presencial
- **Software de planificación** — herramientas digitales colaborativas
- **Tablero Kanban** — visualización del progreso

## Integración con LPS

Pull Planning se integra con el [[05-Vertientes/5f-Lean-Construction/02-last-planner-system|Last Planner System]] como parte de la planificación de fase:

| Fase LPS | Herramienta | Momento |
|----------|-------------|---------|
| Planificación de fase | **Pull Planning** | Inicio del proyecto |
| Look-ahead | Restricciones | 3-6 semanas antes |
| Planificación semanal | Compromisos | Cada semana |
| Seguimiento | PPC | Cada semana |

## Beneficios

- **Mayor compromiso** — el equipo planifica su propio trabajo
- **Menos sorpresas** — las dependencias se identifican temprano
- **Mejor coordinación** — todos conocen el plan del otro
- **Reducción de desperdicios** — menos espera por falta de coordinación
- **Aprendizaje colectivo** — el equipo mejora su capacidad de planificación

## Conexiones

- [[05-Vertientes/5a-Manufactura/04-sistema-produccion-pull]] — origen del concepto pull
- [[05-Vertientes/5f-Lean-Construction/02-last-planner-system]] — sistema integrado
- [[05-Vertientes/5f-Lean-Construction/01-lean-construction-vista-general]] — contexto general
- [[05-Vertientes/5d-Lean-Software/03-metodos-agiles]] — paralelos con Agile
