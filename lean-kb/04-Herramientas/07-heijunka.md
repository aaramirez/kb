---
title: "Heijunka (Nivelación de Producción)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Heijunka
  - Nivelacion
  - Production Leveling
  - Nivelación de Producción
related:
  - "[[09-kanban]]"
  - "[[05-flujo-continuo]]"
  - "[[04-analisis-de-cuellos-de-botella]]"
  - "[[10-pdca]]"
  - "[[08-hoshin-kanri]]"
  - "[[03-Desperdicios/01-marco-3m|Marco 3M]]"
---

# Heijunka (Nivelación de Producción)

**Heijunka** (平準化) es una herramienta de [[Lean Manufacturing]] que consiste en **nivelar la producción** tanto por volumen como por mezcla de productos a lo largo del tiempo. Es la base para lograr un sistema estable, predecible y eficiente.

## Definición

Heijunka significa literalmente "nivelación" o "alisar". Su objetivo es eliminar las fluctuaciones en la producción (Mura) y la sobrecarga (Muri) que resultan de una planificación desbalanceada.

> Sin Heijunka, no hay Flujo Continuo. Sin Flujo Continuo, no hay JIT.

## El Problema que Resuelve

Sin nivelación, la producción fluctúa:
- Lunes: 200 unidades
- Martes: 50 unidades (por falta de pedidos)
- Miércoles: 300 unidades (por acumulación de pedidos)

Esto genera:
- **[[03-Desperdicios/01-marco-3m|Mura]]** (desigualdad) — Carga inconsistente
- **[[03-Desperdicios/01-marco-3m|Muri]]** (sobrecarga) — Esfuerzo excesivo los días de alta demanda
- **[[03-Desperdicios/01-marco-3m|Muda]]** (desperdicio) — Esperas los días de baja demanda, defectos los de alta

## Nivelación por Volumen y Mezcla

### Nivelación por Volumen
Producir la **misma cantidad** cada día, independientemente de las fluctuaciones de demanda.

**Ejemplo:** Si la demanda semanal es 1000 unidades, producir 200/día en vez de 400 Lunes, 100 Martes, 500 Miércoles.

### Nivelación por Mezcla
Producir una **combinación equilibrada** de diferentes productos cada día, en lugar de producir todos los de un tipo el lunes y todos de otro el martes.

**Ejemplo:** Si produces 3 productos (A, B, C) y el mix es 50-30-20, cada día producirás 100A, 60B, 40C (para 200 u/día).

## El Concepto de Takt Time

Heijunka se basa en el [[07-heijunka|Takt Time]]:

**Takt Time = Tiempo Disponible / Demanda del Cliente**

- Si trabajamos 480 minutos/día y la demanda es 120 unidades/día
- Takt Time = 480/120 = **4 minutos por unidad**
- Cada 4 minutos debe salir una unidad terminada

Heijunka asegura que la producción se mantenga al ritmo del Takt Time.

## El Tablero Heijunka

El **tablero Heijunka** es una herramienta visual que organiza la secuencia de producción:

```
┌─────────────────────────────────────────────┐
│ Hora    │ 08:00 │ 08:04 │ 08:08 │ 08:12 │...│
├─────────┼───────┼───────┼───────┼───────┼───┤
│ Tipo A  │  ████ │       │  ████ │       │   │
│ Tipo B  │       │  ████ │       │       │   │
│ Tipo C  │       │       │       │  ████ │   │
└─────────┴───────┴───────┴───────┴───────┴───┘
```

Cada slot representa un intervalo igual (basado en Takt Time). Los tarjetas [[09-kanban|Kanban]] se colocan en el tablero para indicar qué producir y cuándo.

## Beneficios de Heijunka

| Beneficio | Descripción |
|-----------|-------------|
| Eliminación de Mura | Carga de trabajo estable y predecible |
| Eliminación de Muri | Sin sobrecargas ni subcargas |
| Flujo Continuo estable | Base para [[05-flujo-continuo|Flujo Continuo]] |
| Menos inventario | Se produce lo necesario, cuando se necesita |
| Mejor utilización de recursos | Personas y máquinas trabajan a ritmo constante |
| Mayor predecibilidad | Fácil planificar cuando la producción es estable |

## Relación con JIT, Kanban y Takt Time

```
Takt Time → Define el ritmo de producción
     │
     ▼
Heijunka → Nivelar la producción al ritmo de Takt Time
     │
     ▼
Kanban → Señal visual de cuándo producir según el tablero
     │
     ▼
Flujo Continuo → Mover piezas una a una al ritmo establecido
```

- **[[09-kanban|Kanban]]** regula la cantidad de inventario permitido
- **Heijunka** regula la secuencia y el ritmo de producción
- **Takt Time** define el ritmo que Heijunka debe igualar
- **[[05-flujo-continuo|Flujo Continuo]]** es posible gracias a Heijunka

## Consideraciones de Implementación

1. **Comenzar con un producto piloto** — No nivelar toda la línea de golpe
2. **Reducir tiempos de cambio** — Heijunka requiere alternar productos frecuentemente
3. **Establecer buffers pequeños** — Al inicio, un buffer ayuda a suavizar transiciones
4. **Capacitar al equipo** — Todos deben entender el sistema
5. **Monitorear y ajustar** — Usar [[10-pdca|PDCA]] para perfeccionar la nivelación

## Relación con Mura, Muri y Muda

Heijunka es la herramienta principal contra [[03-Desperdicios/01-marco-3m|Mura]] (desigualdad). Al eliminar Mura:
- Se reduce Muri (sobrecarga) porque la carga es constante
- Se reduce Muda (desperdicio) porque no hay tiempos muertos ni sobrecarga

## Notas Relacionadas

- [[09-kanban]] — Señales que regulan la producción según el tablero Heijunka
- [[05-flujo-continuo]] — Flujo que Heijunka hace posible
- [[04-analisis-de-cuellos-de-botella]] — Heijunka previene cuellos de botella
- [[10-pdca]] — Ciclo para mejorar la nivelación
- [[08-hoshin-kanri]] — Heijunka alinea producción con estrategia
- [[03-Desperdicios/01-marco-3m|Marco 3M]] — Heijunka ataca Mura y Muri
- [[02-Pilares/01-just-in-time|JIT]] — Heijunka es componente esencial de JIT
- [[01-Fundamentos/01-que-es-lean|Lean Manufacturing]] — Contexto general
