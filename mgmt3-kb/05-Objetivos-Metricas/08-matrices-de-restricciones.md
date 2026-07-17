---
title: "Matrices de Restricciones"
tags:
  - mgmt3/objetivos
  - type/herramienta
created: 2026-07-16
updated: 2026-07-16
category: "Objetivos y Métricas"
aliases:
  - "Constraint Matrices"
  - "Constraint Visualization"
related:
  - "[[07-restricciones-alineadas]]"
  - "[[08-matrices-de-restricciones]]"
  - "[[02-okrs-management-30]]"
---

# Matrices de Restricciones

## ¿Qué son las matrices de restricciones?

Son herramientas visuales que ayudan a **identificar, clasificar y comunicar** las restricciones que operan sobre un equipo u organización. Hacen visible lo invisible.

## Matriz de Impacto de Restricciones

La matriz principal clasifica restricciones en dos dimensiones: **habilidad para el equipo** vs **impacto en el propósito**.

```
                    ALTO IMPACTO EN PROPÓSITO
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        │   RESTRICCIÓN    │   RESTRICCIÓN    │
        │   PROBLEMA       │   ESTRATÉGICA    │
        │   (Revisar)      │   (Mantener)     │
        │                  │                  │
BAJA ───┼──────────────────┼──────────────────┼─── ALTA
HABILIDAD│                  │                  │  HABILIDAD
        │                  │                  │
        │   RESTRICCIÓN    │   RESTRICCIÓN    │
        │   INERTE          │   HABILITANTE    │
        │   (Eliminar)     │   (Optimizar)    │
        │                  │                  │
        └──────────────────┼──────────────────┘
                           │
                    BAJO IMPACTO EN PROPÓSITO
```

### Cómo usar la matriz

1. Listar todas las restricciones actuales del equipo
2. Evaluar cada una en las dos dimensiones (1-5)
3. Plotear en la matriz
4. Decidir acción para cada cuadrante

### Interpretación de cuadrantes

| Cuadrante | Acción | Ejemplo |
|-----------|--------|---------|
| **Estratégica** (alto impacto, alta habilidad) | Mantener, comunicar, reforzar | "Deploy solo con tests passing" |
| **Habilitante** (bajo impacto, alta habilidad) | Optimizar, simplificar | "Revisión de código antes de merge" |
| **Problema** (alto impacto, baja habilidad) | Revisar, rediseñar | "Aprobación de 3 niveles para compras" |
| **Inerte** (bajo impacto, baja habilidad) | Eliminar o automatizar | "Reporte semanal que nadie lee" |

## Matriz de Restricciones por Tipo

Clasifica restricciones según su naturaleza:

```
┌────────────────┬───────────────┬───────────────┬───────────────┐
│                │   TÉCNICAS    │  ORGANIZACIONALES│  CULTURALES  │
├────────────────┼───────────────┼───────────────┼───────────────┤
│ CÓDIGO         │ Standards de  │ Code review   │ Pair programming│
│                │ codificación  │ obligatorio   │ como práctica │
├────────────────┼───────────────┼───────────────┼───────────────┤
│ PROCESO        │ CI/CD         │ Definition    │ Time-boxing   │
│                │ pipeline      │ of Done       │ de sprints    │
├────────────────┼───────────────┼───────────────┼───────────────┤
│ PERSONAS       │ Capacitación  │ Autogestión   │ Psicológicamente│
│                │ obligatoria   │ de equipo     │ seguro        │
└────────────────┴───────────────┴───────────────┴───────────────┘
```

## Matriz de Restricciones Temporal

Pregunta: **¿Cuándo se revisa cada restricción?**

| Restricción | Frecuencia de revisión | Próxima fecha | Responsable |
|-------------|----------------------|---------------|-------------|
| Definition of Done | Trimestral | 2026-10-01 | Equipo |
| Límite de WIP | Mensual | 2026-08-01 | Scrum Master |
| Standards de código | Semestral | 2027-01-01 | Tech Lead |
| Horario flexible | Anual | 2027-07-01 | Gerencia |

## Matriz de Restricciones para OKRs

Vincula restricciones con objetivos para verificar alineación:

```
┌─────────────────────────────────────────────────────────────┐
│              OKR: "Reducir time-to-market 40%"             │
├────────────────────┬───────────────┬────────────────────────┤
│   RESTRICCIÓN      │  ALINEACIÓN   │   ACCIÓN               │
├────────────────────┼───────────────┼────────────────────────┤
│ Aprobación en      │   ✗ Bloquea  │ Eliminar o simplificar │
│ cadena de mando    │               │                        │
├────────────────────┼───────────────┼────────────────────────┤
│ Deploy automatizado│   ✓ Habilita  │ Mantener y mejorar     │
├────────────────────┼───────────────┼────────────────────────┤
│ Tests obligatorios │   ✓ Protege  │ Mantener               │
├────────────────────┼───────────────┼────────────────────────┤
│ Reunión semanal    │   ? Neutral  │ Evaluar si es necesaria │
│ de status          │               │                        │
└────────────────────┴───────────────┴────────────────────────┘
```

## Workshop de restricciones (60 min)

| Tiempo | Actividad |
|--------|-----------|
| 10 min | Cada persona escribe restricciones que percibe en post-its |
| 15 min | Agrupar y deduplicar en el pizarra |
| 15 min | Colocar en la matriz de impacto/habilidad |
| 10 min | Identificar top 3 restricciones a eliminar |
| 10 planificar acciones concretas |

## Errores comunes

- **Hacer la matriz sola**: Necesita la perspectiva de todo el equipo.
- **No actuar después**: Una matriz sin acción es paperwork.
- **Confundir preferencia con restricción**: "No me gusta hacer X" no es necesariamente una restricción.
- **No revisar**: Las restricciones cambian con el tiempo.

## Referencias

- Appelo, J. (2011). *Management 3.0*
- Goldratt, E. (1984). *The Goal* — Teoría de restricciones
