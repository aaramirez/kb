---
title: "Kanban - Sistema de Señalización"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Kanban
  - Tarjeta Kanban
  - Sistema Kanban
  - Kanban System
related:
  - "[[05-flujo-continuo]]"
  - "[[07-heijunka]]"
  - "[[01-5s]]"
  - "[[02-andon]]"
  - "[[10-pdca]]"
  - "[[08-hoshin-kanri]]"
---

# Kanban - Sistema de Señalización

**Kanban** (看板, "tablero visible") es un sistema de [[Lean Manufacturing]] que utiliza **señales visuales** para controlar el flujo de producción y materiales. Es la herramienta que hace posible el sistema de **tirón** (pull system) en JIT.

## Origen

Kanban fue inventado por [[01-Fundamentos/01-historia-lean|Taiichi Ohno]] en Toyota en los años 1950. La inspiración vino de los **supermercados estadounidenses**: los estantes se reabastecen solo cuando un cliente retira un producto. Ohno aplicó este concepto a la línea de producción: cada estación produce solo cuando recibe un Kanban de la estación siguiente.

## Definición

Kanban es un sistema de señalización visual que indica:
- **Qué** producir
- **Cuánto** producir
- **Cuándo** producir

Es el mecanismo que activa la producción en un sistema de **tirón** (pull): solo se produce cuando hay demanda real.

> Kanban no es solo un tablero con tarjetas. Es un sistema completo de regulación de la producción.

## El Concepto de Pull vs Push

| Sistema Push | Sistema Pull (Kanban) |
|-------------|----------------------|
| Producir según pronóstico | Producir según demanda real |
| Inventario alto | Inventario bajo |
| Sobreproducción frecuente | Solo lo necesario |
| Problemas ocultos | Problemas visibles |
| Complejo de controlar | Simple de visualizar |

## Componentes del Sistema Kanban

### 1. Tarjeta Kanban (Kanban Card)
Una tarjeta física o digital que contiene:
- Número de parte
- Cantidad
- Ubicación de origen y destino
- Código de barras o identificador

### 2. Contenedor Kanban
El contenedor que porta la tarjeta y el material. Limita la cantidad de inventario.

### 3. Tablero Kanban
Un tablero visual que muestra el estado del flujo de trabajo:

```
┌──────────┬──────────┬──────────┐
│  Por Hacer│ En Curso  │  Hecho   │
├──────────┼──────────┼──────────┤
│  [Tarj1] │  [Tarj3] │  [Tarj5] │
│  [Tarj2] │  [Tarj4] │          │
│  [Tarj6] │          │          │
└──────────┴──────────┴──────────┘
```

### 4. Reglas de Kanban
El sistema Kanban tiene reglas claras:
1. La estación siguiente retira material cuando lo necesita
2. La estación anterior produce solo cuando recibe un Kanban
3. Solo se produce lo indicado en el Kanban
4. Los Kanbans defectuosos no se pasan
5. El número de Kanbans se reduce gradualmente

## Tipos de Kanban

### Kanban de Producción
Señal para producir más unidades. Se activa cuando el inventario baja de un nivel mínimo.

### Kanban de Transporte
Señal para mover material de un lugar a otro. Indica que hay material listo para ser recogido.

### Kanban de Suppliers
Señal para solicitar material a proveedores externos.

### Kanban Digital (Software)
En desarrollo de software, Kanban se implementa como:
- Tableros en Jira, Trello, Asana, Linear
- Columnas que representan estados del flujo
- WIP Limits (límites de trabajo en progreso)
- Métricas: lead time, throughput, cumulative flow

## WIP Limits (Límites de Trabajo en Progreso)

Los **WIP Limits** son una característica clave de Kanban digital:
- Limitan cuántas tarjetas pueden estar en cada columna
- Fuerzan terminar trabajo antes de comenzar nuevo
- Exponen [[04-analisis-de-cuellos-de-botella|cuellos de botella]]
- Promueven el [[05-flujo-continuo|Flujo Continuo]]

## Beneficios

| Beneficio | Descripción |
|-----------|-------------|
| Visibilidad | Todo el equipo ve el estado del trabajo |
| Control de inventario | Se produce solo lo necesario |
| Detección de problemas | WIP excesivo es visible inmediatamente |
| Priorización clara | Lo que está en el tablero es lo que importa |
| Reducción de Lead Time | Menos WIP = tiempos más cortos |
| Flexibilidad | Fácil cambiar prioridades |

## Kanban y Otras Herramientas

- **[[05-flujo-continuo|Flujo Continuo]]** — Kanban regula el flujo continuo
- **[[07-heijunka|Heijunka]]** — El tablero Heijunka usa tarjetas Kanban
- **[[01-5s|5S]]** — Un tablero Kanban necesita espacio organizado
- **[[02-andon|Andon]]** — Las señales Andon complementan Kanban
- **[[10-pdca|PDCA]]** — Kanban se mejora continuamente con PDCA
- **[[08-hoshin-kanri|Hoshin Kanri]]** — Los Kanbans se alinean con objetivos estratégicos

## Errores Comunes

- **Confundir Kanban con un tablero** — Kanban es un sistema completo, no solo un tablero
- **Ignorar los WIP Limits** — Sin límites, Kanban se convierte en un sistema push
- **No reducir gradualmente** — Los Kanbans deben reducirse para mejorar
- **No mantener las reglas** — Romper las reglas destruye el sistema
- **Solo para制造业** — Kanban funciona igual en servicios y software

## Notas Relacionadas

- [[05-flujo-continuo]] — Flujo que Kanban regula
- [[07-heijunka]] — Nivelación que Kanban soporta
- [[01-5s]] — Base visual para el sistema
- [[02-andon]] — Señales complementarias
- [[10-pdca]] — Mejora continua del sistema
- [[08-hoshin-kanri]] — Alineación estratégica de Kanbans
- [[02-Pilares/01-just-in-time|JIT]] — Kanban es herramienta clave de JIT
- [[01-Fundamentos/01-que-es-lean|Lean Manufacturing]] — Contexto general
