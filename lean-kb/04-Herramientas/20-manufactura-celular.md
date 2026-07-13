---
title: "Manufactura Celular (Cellular Manufacturing)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Manufactura Celular
  - Cellular Manufacturing
  - Celdas de Manufactura
  - Celdas de Trabajo
related:
  - "[[05-flujo-continuo]]"
  - "[[14-takt-time]]"
  - "[[19-trabajo-estandarizado]]"
  - "[[01-5s]]"
  - "[[20-manufactura-celular]]"
  - "[[07-heijunka]]"
---

# Manufactura Celular (Cellular Manufacturing)

**Manufactura Celular** es un enfoque de [[Lean Manufacturing]] que organiza máquinas y estaciones de trabajo en **celdas** dispuestas para permitir el flujo continuo de un producto sin transports ni esperas innecesarias.

## Definición

Una celda de manufactura es un grupo de estaciones de trabajo organizadas en secuencia de proceso, generalmente en forma de **U**, que procesan una familia de productos de principio a fin con mínimo movimiento y espera.

> "La celda elimina el transporte entre procesos. El producto se mueve, las personas y máquinas permanecen."

## El Problema que Resuelve

En el layout tradicional (funcional), las máquinas del mismo tipo están agrupadas juntas:
- Piezas viajan largas distancias entre departamentos
- Alto inventario entre procesos
- Largo lead time
- Difícil coordinar la producción

La celda elimina estos problemas al agrupar las máquinas **en orden de proceso**.

## Layout Funcional vs Celda

```
LAYOUT FUNCIONAL:              CELDA U:
┌────────┐ ┌────────┐         ┌──────────────────┐
│  Taladro│ │  Prensa │         │ Taladro → Prensa  │
└────────┘ └────────┘         │                    │
                              │                    │
┌────────┐ └────────┘         │ Ensamble → Empaque │
│Ensamble│ │ Empaque │         │                    │
└────────┘ └────────┘         └──────────────────┘

Transporte largo               Flujo corto
Inventario alto                Inventario bajo
Lead time largo                Lead time corto
```

## Características de una Celda

### Forma U
La forma de **U** permite que un solo operador atienda múltiples máquinas, moviéndose fácilmente entre ellas. El inicio y el fin de la celda están juntos.

### Familia de Productos
Cada celda está diseñada para una **familia de productos** — productos que comparten procesos similares. Esto maximiza la utilización.

### Flujo Continuo
El producto se mueve de una estación a la siguiente sin inventario intermedio. Se aplica el [[05-flujo-continuo|Flujo Continuo]] dentro de la celda.

### Operador Múltiple (Multi-Process Handling)
Un operador puede atender múltiples máquinas en la celda, lo que reduce la mano de obra y mejora la eficiencia.

## Elementos de una Celda

```
┌─────────────────────────────────────┐
│              CELDA U                │
│                                     │
│  Estación 1 → Estación 2 → Est. 3  │
│      ↑                       │      │
│      │                       ↓      │
│  Estación 6 ← Estación 5 ← Est. 4  │
│                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐      │
│  │Insumo│  │Buffer│  │Salida│      │
│  └──────┘  └──────┘  └──────┘      │
│                                     │
│  Operador se mueve dentro de la U   │
└─────────────────────────────────────┘
```

## Beneficios

| Beneficio | Impacto |
|-----------|---------|
| Reducción de transporte | El producto no viaja entre departamentos |
| Menor inventario | Flujo continuo sin buffer entre procesos |
| Lead time corto | El producto se completa en minutos, no horas |
| Mejor comunicación | Operadores trabajan juntos en la celda |
| Mayor flexibilidad | La celda puede ajustar la secuencia fácilmente |
| Reducción de espacio | Menos espacio que layouts funcionales |
| Mayor calidad | Problemas se detectan inmediatamente |

## Proceso para Crear una Celda

1. **Identificar familia de productos** — Agrupar productos con procesos similares
2. **Determinar Takt Time** — [[14-takt-time|Takt Time]] para la demanda
3. **Balancear trabajo** — Distribuir tareas entre estaciones según el Takt Time
4. **Diseñar layout U** — Organizar estaciones en forma de U
5. **Crear [[19-trabajo-estandarizado|Standard Work]]** — Documentar secuencia y tiempos
6. **Implementar [[01-5s|5S]]** — Preparar el espacio
7. **Probar y ajustar** — Ejecutar y refinar con [[10-pdca|PDCA]]

## Manufactura Celular y Otras Herramientas

- **[[05-flujo-continuo|Flujo Continuo]]** — La celda es la unidad fundamental de flujo continuo
- **[[14-takt-time|Takt Time]]** — El diseño de la celda se basa en el Takt Time
- **[[19-trabajo-estandarizado|Standard Work]]** — Cada celda tiene sus estándares
- **[[01-5s|5S]]** — La celda requiere espacio organizado
- **[[07-heijunka|Heijunka]]** — La nivelación usa múltiples celdas
- **[[09-kanban|Kanban]]** — El flujo entre celdas se regula con Kanban

## Manufactura Celular en Software

Aplicado a desarrollo:
- **Squad/Feature Team:** Equipo autocontenido con todas las habilidades necesarias
- **Cross-functional:** Diseño, frontend, backend, QA juntos en un "equipo celda"
- **Microservicios:** Cada servicio es una "celda" de la arquitectura
- **Stream-aligned team:** Equipo alineado con un flujo de valor específico

## Errores Comunes

- No agrupar correctamente por familia de productos
- Diseñar la celda sin medir el Takt Time
- No capacitar a los operadores en múltiples máquinas
- Ignorar el balanceo de trabajo entre estaciones
- No mantener la celda con [[01-5s|5S]] y [[19-trabajo-estandarizado|Standard Work]]

## Notas Relacionadas

- [[05-flujo-continuo]] — La celda es la unidad de flujo continuo
- [[14-takt-time]] — Takt Time determina el diseño de la celda
- [[19-trabajo-estandarizado]] — Estándares de cada celda
- [[01-5s]] — Base para mantener la celda organizada
- [[07-heijunka]] — Nivelación entre múltiples celdas
- [[09-kanban]] — Regula el flujo entre celdas
- [[10-pdca]] — Mejora continua del diseño de celdas
