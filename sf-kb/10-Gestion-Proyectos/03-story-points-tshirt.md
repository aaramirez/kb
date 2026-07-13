---
title: "Story Points vs T-Shirt Sizing"
tags:
  - sf/gestion
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Gestión de Proyectos"
aliases:
  - "Story Points"
  - "T-Shirt Sizing"
  - "Alternativas de estimación"
related:
  - "[[../10-Gestion-Proyectos/02-estimacion-tecnicas|Técnicas de Estimación]]"
  - "[[../06-Metricas/02-velocity-throughput|Velocity & Throughput]]"
  - "[[../10-Gestion-Proyectos/04-backlog-grooming|Backlog Refinement]]"
  - "[[../03-Procesos/03-scrum|Scrum Framework]]"
---

# Story Points vs T-Shirt Sizing

Comparación de las dos técnicas de estimación relativa más usadas en equipos de software ágiles.

## Definiciones

| Aspecto | Story Points | T-Shirt Sizing |
|---------|-------------|----------------|
| **Escala** | Numérica (Fibonacci: 1,2,3,5,8,13...) | Cualitativa (XS, S, M, L, XL, XXL) |
| **Basis** | Esfuerzo + complejidad + incertidumbre | Tamaño relativo percibido |
| **Precisión** | Alta (numérica) | Baja (categórica) |
| **Velocidad** | Requiere calibración del equipo | Inmediata de usar |
| **Comparabilidad** | Entre sprints del mismo equipo | Entre equipos sin calibración |

## Matriz de comparación

| Criterio | Story Points | T-Shirt Sizing | Ganador |
|----------|-------------|----------------|---------|
| Sprint planning | ✅ Ideal | ⚠️ Poco preciso | SP |
| Roadmap alto nivel | ⚠️ Muy detallado | ✅ Ideal | T-Shirt |
| Velocity tracking | ✅ Requerido | ❌ No aplica | SP |
| Cross-team estimation | ⚠️ Requiere calibración | ✅ Funciona directo | T-Shirt |
| Nuevo equipo | ⚠️ Calibración necesaria | ✅ Listo para usar | T-Shirt |
| Presupuesto/timeline | ⚠️ Conversión necesaria | ✅ Mapeo directo | T-Shirt |
| Retrospectivas | ✅ Datos concretos | ⚠️ Difícil medir | SP |
| Comunicación con stakeholders | ❌ Técnico | ✅ Intuitivo | T-Shirt |

## Story Points — Detalle

### Escala Fibonacci modificada

| Puntos | Rango de días | Complejidad |
|--------|--------------|-------------|
| 1 | < 1 día | Trivial |
| 2 | 1-2 días | Simple |
| 3 | 2-3 días | Estándar |
| 5 | 3-5 días | Moderada |
| 8 | 5-8 días | Compleja |
| 13 | 8-13 días | Muy compleja |
| 21+ | > 13 días | Requiere splitting |

### Ventajas

- Base para **velocity** y capacity planning
- Permite **forecasting** con datos históricos
- Captura tres dimensiones: esfuerzo, complejidad, incertidumbre
- Facilita **sprint commitment** basado en capacidad

### Desventajas

- Requiere **período de calibración** (3-5 sprints)
- Los números son **abstractos** para stakeholders no técnicos
- Pueden convertirse en **métrica de performance** (mal uso)
- Comparación entre equipos es **poco fiable** sin normalización

## T-Shirt Sizing — Detalle

### Escala estándar

| Talla | Story Points equiv. | Días approx | Criterio |
|-------|---------------------|-------------|----------|
| XS | 1 | 0.5-1 | Config, fix trivial |
| S | 2-3 | 1-3 | Feature pequeña |
| M | 5 | 3-5 | Feature estándar |
| L | 8-13 | 5-10 | Feature grande |
| XL | 20-40 | 10-20 | Epic / splitting |
| XXL | 40+ | 20+ | Initiative |

### Ventajas

- **Inmediato**: sin período de calibración
- **Intuitivo**: stakeholders lo entienden al instante
- **Cross-team**: funciona sin normalización
- **Adecuado** para早期阶段 de un equipo o proyecto

### Desventajas

- No genera **velocity** numérica
- No permite **forecasting** detallado
- Los rangos son **muy amplios** (M puede ser 3 o 5 días)
- Difícil de **retroalimentar** en retrospectivas

## Cuándo usar cada uno

| Escenario | Recomendación | Razón |
|-----------|---------------|-------|
| Sprint planning semanal | Story Points | Necesitas compromiso numérico |
| PI Planning (SAFE) | T-Shirt → convertir | Alto nivel, muchos equipos |
| Roadmap de 12 meses | T-Shirt | No se necesita precisión |
| Nuevo equipo (< 3 sprints) | T-Shirt | Sin datos históricos |
| Equipo estable (> 5 sprints) | Story Points | Velocity disponible |
| Presupuesto preliminar | T-Shirt + benchmark | Estimación rough |
| Negociación con cliente | T-Shirt | Más fácil de comunicar |
| Forecasting de release | Story Points | Requiere datos numéricos |

## Alternativas a ambos

| Técnica | Descripción | Cuándo usar |
|---------|-------------|-------------|
| **Throughput** | Contar historias completadas por semana | Equipos maduros, stories similares |
| **Cycle Time** | Medir tiempo real de entrega | Kanban, continuous delivery |
| **Ideal Days** | Días ideales de trabajo (sin interrupciones) | Equipos con poca variabilidad |
| **No estimate** | No estimar, medir throughput directo | Teams maduros, flow-based |
| **Dot Voting** | Votos para priorizar, no estimar | Priorización, no tamaño |

## Estrategia híbrida recomendada

```
1. backlog → T-Shirt sizing (rápido, early stage)
2. sprint ready → Story Points (precisión)
3. release plan → Story Points → velocity-based forecast
4. roadmap → T-Shirt (comunicar con stakeholders)
```

## Errores comunes

- Usar story points como **métrica de productividad** individual
- Convertir points → hours (pierde el valor relativo)
- No recalibrar la escala cuando cambia el equipo
- Usar T-Shirt sizing en sprint planning (poco preciso)
- Esperar consistencia perfecta entre talla y puntos
