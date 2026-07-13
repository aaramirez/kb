---
title: "Backlog Grooming / Refinement"
tags:
  - sf/gestion
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Gestión de Proyectos"
aliases:
  - "Backlog Refinement"
  - "Backlog Grooming"
  - "Story Refinement"
related:
  - "[[../10-Gestion-Proyectos/01-planificacion-agil|Planificación Ágil]]"
  - "[[../10-Gestion-Proyectos/02-estimacion-tecnicas|Técnicas de Estimación]]"
  - "[[../03-Procesos/03-scrum|Scrum Framework]]"
  - "[[../01-Fundamentos/06-manifiesto-agile|Manifiesto Ágil]]"
---

# Backlog Grooming / Refinement

El refinement es el proceso continuo de mantear el product backlog listo para desarrollo, con historias claras, estimadas y priorizadas.

## Ciclo de vida de una historia

```
Idea → Epic → Feature → Story → Ready for Dev → Done
  │        │          │         │          │
  │        │          │         │          └── Sprint Planning
  │        │          │         └── Refinement (este artículo)
  │        │          └── Story Mapping
  │        └── Roadmap
  └── Vision/OKRs
```

## INVEST Criteria

Cada historia debe cumplir los criterios INVEST para estar "ready":

| Criterio | Significado | Pregunta clave |
|----------|-------------|----------------|
| **I**ndependent | No depende de otras stories | ¿Se puede entregar sola? |
| **N**egotiable | El scope es negociable | ¿Hay más de una forma de hacerlo? |
| **V**aluable | Aporta valor al usuario/negocio | ¿Quién se beneficia? |
| **E stimable** | Se puede estimar razonablemente | ¿Tenemos suficiente info? |
| **S**mall | Lo suficientemente pequeña para un sprint | ¿Cabe en 3-5 días? |
| **T**estable | Tiene criterios de aceptación claros | ¿Cómo sabemos que funciona? |

### Checklist de Definition of Ready

- [ ] Historia de usuario escrita: "Como [rol], quiero [acción] para [beneficio]"
- [ ] Criterios de aceptación definidos (mínimo 2-3)
- [ ] Dependencias identificadas y desbloqueadas
- [ ] Diseño/UX mocks disponibles si aplica
- [ ] Estimación completada (story points o T-Shirt)
- [ ] Datos de ejemplo o seed data definidos
- [ ] Technical approach revisado por el equipo

## Story Mapping

Técnica para organizar historias por user journey y prioridad.

### Estructura

```
User Journey (horizontal)    →  Login  →  Search  →  Purchase  →  Profile
─────────────────────────────────────────────────────────────────────────
Release 3 (MVP)              |         |   MVP    |    MVP     |         |
Release 2 (Foundation)       |  Basic  |  Basic   |   Basic    |  Basic  |
Release 1 (Core)             |  Full   |  Full    |   Full     |  Full   |
─────────────────────────────────────────────────────────────────────────
                            Walking Skeleton → Minimal → Full Feature
```

### Pasos para Story Mapping

1. **Escribir user activities** (ejes horizontales)
2. **Descomponer en user tasks** (bajo cada activity)
3. **Colocar en orden de user journey** (izquierda → derecha)
4. **Dibujar líneas de release** (horizontal: arriba = más prioritario)
5. **Identificar walking skeleton**: el mínimo para que el sistema funcione end-to-end
6. **Llenar releases**: de abajo hacia arriba, priorizando valor

## Story Slicing (INVEST aplicado)

### Patrones de slicing

| Patrón | Ejemplo | Resultado |
|--------|---------|-----------|
| **By workflow step** | "Proceso de pago completo" → "Validar tarjeta", "Cobrar", "Confirmar" | Stories por paso |
| **By data type** | "Gestionar usuarios" → "Crear", "Editar", "Eliminar" | CRUD separado |
| **By platform** | "App responsive" → "Desktop", "Mobile", "Tablet" | Por dispositivo |
| **By business rule** | "Cálculo de impuestos" → "IVA básico", "Exenciones", "Multi-país" | Por regla |
| **By interface** | "Sistema de notificaciones" → "Email", "Push", "SMS" | Por canal |

### INVEST aplicado al slicing

```
Epic: "Sistema de pagos"
├── Story XL: "Acepta todas las formas de pago" ❌ (no INVEST)
│   ├── Story M: "Acepta tarjeta de crédito" ✅
│   ├── Story M: "Acepta PayPal" ✅
│   ├── Story S: "Acepta transferencia bancaria" ✅
│   └── Story M: "Acepta criptomonedas" ✅
```

## Técnicas de Refinement

### Refinement meeting (recomendado)

| Aspecto | Recomendación |
|---------|---------------|
| **Frecuencia** | 1-2 veces por sprint, 30-60 min |
| **Participantes** | Dev team + PO + Tech Lead |
| **Input** | Top 10-15 items del backlog |
| **Output** | Stories listas para sprint siguiente |
| **Timebox** | Máximo 10% de capacity del sprint |

### Refinement asíncrono

- PO escribe stories con acceptance criteria
- Dev team comenta en la herramienta (Jira, Linear)
- Se resuelven dudas antes del refinement meeting
- Ideal para equipos distribuidos

## Anti-patterns

| Anti-pattern | Problema | Solución |
|-------------|----------|----------|
| **Sprint Planning como refinement** | Planning se alarga 4+ horas | Refinar 1-2 sprints adelante |
| **Stories gigantes** | No caben en un sprint | Aplicar story slicing |
| **Acceptance criteria vacíos** | Ambigüedad, rework | PO escribe AC antes de refinement |
| **Refinement solo del PO** | Falta perspectiva técnica | Incluir devs en refinement |
| **Backlog infinito** | Items obsoletos acumulados | Limpiar backlog trimestralmente |

## Métricas de calidad del backlog

| Métrica | Target | Cómo medir |
|---------|--------|------------|
| **% Ready stories** | > 70% del top 20 | Stories que cumplen INVEST |
| **Refinement velocity** | 10-15 items/sprint | Items refinados por sesión |
| **Sprint Planning time** | < 2 horas | Para sprints de 2 semanas |
| **Re-estimation rate** | < 15% | Stories que cambian de estimación |
| **Backlog age** | < 90 días top items | Días desde creación |
