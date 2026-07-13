---
title: "Guía de Implementación Kanban"
tags:
  - lean/herramientas
  - type/guia
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Guía Kanban
  - Implementación Kanban
  - Guía de Implementación Kanban
  - Kanban Paso a Paso
related:
  - "[[09-kanban]]"
  - "[[05-flujo-continuo]]"
  - "[[18-gestion-visual]]"
  - "[[10-pdca]]"
  - "[[01-5s]]"
---

# Guía de Implementación Kanban

Esta guía describe los pasos para implementar un sistema [[09-kanban|Kanban]] efectivo, desde el diseño del tablero hasta la gestión diaria.

## Paso 1: Definir el Flujo de Trabajo

### 1.1 Mapear el Proceso Actual
Antes de crear un tablero, entender cómo fluye el trabajo hoy:
- ¿Cuáles son los pasos del proceso?
- ¿Quién realiza cada paso?
- ¿Cuánto tiempo toma cada paso?
- ¿Dónde se acumulan cuellos de botella?

### 1.2 Definir las Columnas
Crear columnas que reflejen **realmente** el flujo de trabajo:

```
Ejemplo Kanban de Desarrollo:
┌────────┬──────────┬──────────┬─────────┬─────────┬───────┐
│ Backlog│ To Do    │ In Dev   │ Review  │ Testing │ Done  │
│        │ (Ready)  │          │         │         │       │
└────────┴──────────┴──────────┴─────────┴─────────┴───────┘
```

**Regla:** Las columnas deben representar estados por los que **realmente** pasa el trabajo, no estados ideales.

## Paso 2: Establecer WIP Limits

Los **WIP Limits** (Work In Progress Limits) son la característica más importante de Kanban.

### ¿Cómo Determinar WIP Limits?

1. **Observar el flujo actual** — ¿Cuánto trabajo está en progreso típicamente?
2. **Comezar conservador** — Empezar con WIP actual y reducir gradualmente
3. **Reducir 10-20%** por iteración
4. **Observar el efecto** — Si se acumula trabajo en una columna, ajustar

### Regla General

```
WIP Limit = Número de personas en el equipo × 1.5 (aproximado)
```

Ejemplo: Equipo de 5 personas → WIP Limit de 7-8 tarjetas en desarrollo.

### Efecto de WIP Limits

| WIP Alto | WIP Bajo |
|----------|----------|
| Mucho trabajo en progreso | Poco trabajo en progreso |
| Problemas ocultos | Problemas visibles |
| Multi-tasking constante | Focus en terminar |
| Lead time largo | Lead time corto |
| Sin presión para entregar | Presión para completar |

## Paso 3: Diseñar el Tablero

### Tablero Físico (Manufactura/Oficina)

**Materiales:**
- Tablero grande (pizarra, corcho, o pared)
- Tarjetas adhesive o tarjetas Kanban
- Espacio para cada columna
- Señaladores de WIP Limit

**Diseño:**
```
┌──────────────────────────────────────────────────────────┐
│                    TABLERO KANBAN                         │
├────────┬──────────┬──────────┬──────────┬───────────────┤
│BACKLOG │ TO DO    │ EN PROCESO│ REVISIÓN │    DONE       │
│        │ WIP: 5   │ WIP: 3   │ WIP: 2   │               │
│ ┌──┐   │ ┌──┐     │ ┌──┐     │ ┌──┐     │ ┌──┐          │
│ │T1│   │ │T3│     │ │T5│     │ │T7│     │ │T9│          │
│ └──┘   │ └──┘     │ └──┘     │ └──┘     │ └──┘          │
│ ┌──┐   │ ┌──┐     │ ┌──┐     │ └──┘     │ ┌──┐          │
│ │T2│   │ │T4│     │ │T6│     │          │ │T10│         │
│ └──┘   │ └──┘     │ └──┘     │          │ └──┘          │
│ ┌──┐   │          │          │          │               │
│ │T3│   │          │          │          │               │
│ └──┘   │          │          │          │               │
└────────┴──────────┴──────────┴──────────┴───────────────┘
```

### Tablero Digital (Software)

Herramientas recomendadas:
- **Jira** — Para equipos grandes con workflow complejo
- **Trello** — Para equipos pequeños y proyectos simples
- **Linear** — Para equipos de producto modernos
- **Azure DevOps** — Para equipos enterprise
- **GitHub Projects** — Integrado con repositorios

## Paso 4: Crear las Tarjetas

Cada tarjeta debe contener:
- **Título claro** — Qué se va a hacer
- **Responsable** — Quién está trabajando en ello
- **Prioridad** — Urgencia/importancia
- **Fecha límite** (si aplica)
- **Etiquetas** — Tipo de trabajo (feature, bug, tech debt)

## Paso 5: Implementar la Gestión Diaria

### 5.1 Reunión Diaria (Daily Kanban)
- **Duración:** 15 minutos máximo
- **Enfocarse en:** El tablero, no en personas
- **Preguntas clave:**
  - ¿Hay tarjetas bloqueadas?
  - ¿Se están respetando los WIP Limits?
  - ¿Hay tarjetas que llevan mucho tiempo en una columna?

### 5.2 Reglas del Tablero
Establecer reglas claras:
1. Solo mover tarjetas hacia adelante
2. No comenzar nueva tarea si WIP está al límite
3. Si hay bloqueo, levantar la mano inmediatamente
4. Las tarjetas completadas se mueven a Done, no se saltan
5. Los WIP Limits se respetan siempre

### 5.3 Métricas de Kanban

| Métrica | Cómo Medir | Target |
|---------|-----------|--------|
| Lead Time | Tiempo desde que se crea hasta Done | Reducir gradualmente |
| Throughput | Número de tarjetas completadas por semana | Estable o creciente |
| WIP promedio | Promedio de tarjetas en proceso | Bajo los WIP Limits |
| Blockages | Número de tarjetas bloqueadas | Cero |

## Paso 6: Mejora Continua con PDCA

Usar el ciclo [[10-pdca|PDCA]] para mejorar el Kanban:
1. **Plan:** Identificar una oportunidad de mejora
2. **Do:** Hacer un cambio pequeño
3. **Check:** Observar el efecto del cambio
4. **Act:** Estandarizar o ajustar

## Errores Comunes

| Error | Consecuencia | Solución |
|-------|-------------|----------|
| No usar WIP Limits | Kanban se convierte en un sistema push | Siempre establecer y respetar WIP Limits |
| Demasiadas columnas | Complejidad innecesaria | Empezar simple, agregar columnas solo si es necesario |
| No hacer la reunión diaria | Pérdida de sincronización | Mantener la rutina diaria |
| No medir métricas | No se puede mejorar lo que no se mide | Registrar lead time y throughput |
| No revisar el tablero | Se acumulan bloqueos | Revisar diariamente el tablero |

## Notas Relacionadas

- [[09-kanban]] — Conceptos del sistema Kanban
- [[05-flujo-continuo]] — Objetivo del Kanban
- [[18-gestion-visual]] — El tablero es gestión visual
- [[10-pdca]] — Mejora continua del sistema
- [[01-5s]] — Espacio ordenado para tablero físico
- [[04-analisis-de-cuellos-de-botella]] — Los WIP Limits revelan cuellos de botella
- [[07-heijunka]] — Nivelación que Kanban soporta
