---
title: "Trabajo Estandarizado (Standardized Work)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Trabajo Estandarizado
  - Standardized Work
  - Standard Work
  - Estándares de Trabajo
related:
  - "[[14-takt-time]]"
  - "[[18-gestion-visual]]"
  - "[[02-Pilares/03-kaizen]]"
  - "[[10-pdca]]"
  - "[[01-5s]]"
  - "[[06-gemba]]"
---

# Trabajo Estandarizado (Standardized Work)

**Trabajo Estandarizado** (Standardized Work) es un método de [[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general|Lean Manufacturing]] para **documentar la mejor forma conocida** de realizar una tarea. No es una restricción, sino la **línea base** sobre la cual se mejora continuamente.

## Definición

El Trabajo Estandarizado define la secuencia óptima de operaciones para que cada trabajador realice su tarea de la manera más eficiente, segura y de calidad posible. Es el resultado de observar el [[06-gemba|Gemba]] y estandarizar las mejores prácticas.

> "Sin estándares, no hay base para la mejora. Sin mejora, los estándares se degradan."

## Los Tres Elementos del Standard Work

### 1. Takt Time (Ritmo de Producción)
El [[14-takt-time|Takt Time]] define el ritmo al que se debe producir para satisfacer la demanda. Es el "pulso" que sincroniza todo el trabajo.

```
Takt Time = Tiempo disponible / Demanda del cliente
```

### 2. Secuencia de Trabajo (Work Sequence)
La secuencia exacta de pasos que el operador sigue, en el orden correcto, con los tiempos asignados a cada paso.

**Ejemplo de secuencia:**
```
1. Tomar pieza del contenedor (5 seg)
2. Insertar en fixture (8 seg)
3. Soldar puntos A y B (12 seg)
4. Inspeccionar visualmente (5 seg)
5. Colocar en contenedor de salida (3 seg)
   Total: 33 seg < Takt Time (60 seg)
```

### 3. Inventario Estándar (Standard Inventory)
La cantidad mínima de inventario en proceso necesario para que el operador pueda trabajar sin interrupciones.

## Documentos de Standard Work

### 1. Hoja de Trabajo Estandarizado
Documento principal que contiene:
- Diagrama de layout del proceso
- Secuencia de operaciones
- Tiempos de cada operación
- Takt Time
- Condiciones de seguridad

### 2. Hoja de Combinación de Trabajo (Work Combination Sheet)
Muestra la combinación de trabajo manual, automático y caminata del operador:

```
Operación     │ Manual │ Auto │ Caminar │ Tiempo
──────────────┼────────┼──────┼─────────┼───────
Tomar pieza   │ █████  │      │         │ 5s
Insertar      │ ████   │      │         │ 8s
Soldar        │        │██████│         │ 12s
Caminar       │        │      │ ████    │ 4s
Inspeccionar  │ ████   │      │         │ 5s
```

### 3. Hoja de Tiempos (Time Observation Sheet)
Registro de tiempos de cada operación, observado en el [[06-gemba|Gemba]].

## Proceso para Crear Standard Work

1. **Observar en Gemba** — Ver cómo se realiza el trabajo actual
2. **Medir tiempos** — Cronometrar cada paso (múltiples ciclos)
3. **Identificar la mejor práctica** — Cuál es la forma más eficiente
4. **Documentar** — Crear la hoja de trabajo estandarizado
5. **Capacitar** — Enseñar el estándar al equipo
6. **Verificar** — Confirmar que se cumple el estándar
7. **Mejorar** — Cuando se encuentra una mejor forma, actualizar el estándar

## Standard Work y Kaizen

El estándar es la **base para Kaizen** (mejora continua):

```
  Estandar Actual ─── Kaizen ───→ Nuevo Estandar
        ↑                              │
        └──────── Kaizen ←─────────────┘
```

Sin estándares, no hay base para medir si una mejora es real. El ciclo es:
1. **Establecer estándar** → Es la mejor forma conocida hoy
2. **Seguir el estándar** → Todos trabajan igual
3. **Mejorar el estándar** → Cuando se encuentra algo mejor
4. **Estandarizar la mejora** → El nuevo estándar para todos

## Beneficios

| Beneficio | Impacto |
|-----------|---------|
| Consistencia | Todos producen igual, reduce variación |
| Calidad | Menos defectos por operación inconsistente |
| Capacitación | Fácil enseñar el trabajo a nuevos empleados |
| Seguridad | Procedimientos seguros documentados |
| Base para mejora | Sin estándar, no hay cómo medir mejoras |
| Reducción de tiempos | Identificar desperdicios en la secuencia |

## Standard Work y Otras Herramientas

- **[[14-takt-time|Takt Time]]** — Primer elemento del Standard Work
- **[[18-gestion-visual|Gestión Visual]]** — Los estándares se muestran visualmente
- **[[02-Pilares/03-kaizen|Kaizen]]** — El estándar es la base de la mejora
- **[[10-pdca|PDCA]]** — Crear, verificar y mejorar estándares con PDCA
- **[[01-5s|5S]]** — El espacio estandarizado facilita el trabajo estandarizado
- **[[06-gemba|Gemba]]** — La observación en Gemba crea los estándares

## Standard Work en Software

Aplicado a desarrollo:
- **Coding standards** — Convenciones de código documentadas
- **Definition of Done** — Criterios que todo PR debe cumplir
- **Runbooks** — Procedimientos operacionales documentados
- **Playbooks de incidentes** — Pasos para resolver incidentes comunes
- **Onboarding guides** — Procedimientos para nuevos miembros del equipo

## Errores Comunes

- Crear estándares desde la oficina sin observar el Gemba
- Tratar el estándar como regla rígida en vez de base para mejora
- No actualizar los estándares cuando el proceso cambia
- Documentar y no capacitar al equipo
- No incluir tiempos de seguridad o variabilidad

## Notas Relacionadas

- [[14-takt-time]] — Ritmo que define el Standard Work
- [[18-gestion-visual]] — Estándares visibles en el piso
- [[02-Pilares/03-kaizen|Kaizen]] — Mejora continua de estándares
- [[10-pdca]] — Ciclo para crear y mejorar estándares
- [[01-5s]] — Espacio que facilita el trabajo estandarizado
- [[06-gemba]] — Observación que crea los estándares
- [[07-heijunka]] — Nivelación que requiere estándares consistentes
