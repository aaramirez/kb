---
title: "Dashboard KPI Lean"
tags:
  - lean/implementacion
  - type/guia
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: "Implementación"
aliases:
  - "KPI Dashboard"
  - "Dashboard Lean"
  - "Tablero de Métricas"
related:
  - "[[16-metricas-lean]]"
  - "[[04-sistema-gestion-diaria]]"
  - "[[02-andon]]"
  - "[[15-contabilidad-lean]]"
  - "[[09-plan-despliegue-lean]]"
---

# Dashboard KPI Lean

Un **Dashboard KPI Lean** es un tablero visual que presenta las [[16-metricas-lean|Métricas Lean]] más importantes de forma clara y accionable. Es la columna vertebral del [[04-sistema-gestion-diaria|sistema de gestión diaria]], permitiendo que todos vean el desempeño en tiempo real.

## ¿Por Qué es Importante?

- **Visibilidad** — Todos saben cómo está el desempeño
- **Rapidez** — Los problemas se detectan en minutos
- **Alineación** — Todos apuntan a los mismos objetivos
- **Responsabilidad** — El desempeño es público
- **Aprendizaje** — Los datos guían la mejora

## Principios de Diseño

### 1. Simpleza

- Máximo 5-8 KPIs por tablero
- Colores que comunican estado (rojo/amarillo/verde)
- Fácil de entender en 30 segundos
- Actualización diaria o más frecuente

### 2. Accionabilidad

- Cada KPI debe tener un responsable
- Incluir tendencia (mejorando/empeorando/estable)
- Señalar desviaciones con claridad
- Vinculado con acciones correctivas

### 3. Visual

- [[10-poka-yoke|A prueba de errores]] — Difícil de malinterpretar
- Gráficos simples y directos
- Datos precisos y verificables
- Ubicación visible para todos

## Estructura de un Dashboard Lean

### Sección 1: Resumen de Desempeño

```
┌─────────────────────────────────────────┐
│         DASHBOARD - [Área]              │
│         Fecha: [DD/MM/AAAA]            │
├────────────┬────────────┬───────────────┤
│  CALIDAD   │  ENTREGA   │   COSTO      │
│   FPY      │  Lead Time │  Costo/unidad │
│  ██████    │  ██████    │  ██████       │
│   98.5%    │   3.2 días │   $45.20      │
│  (meta 99%)│ (meta 3d) │  (meta $44)  │
└────────────┴────────────┴───────────────┘
```

### Sección 2: Tendencias

| KPI | Sem 1 | Sem 2 | Sem 3 | Sem 4 | Tendencia |
|-----|-------|-------|-------|-------|-----------|
| FPY | 97.2% | 98.1% | 98.5% | 98.8% | ↑ Mejorando |
| Lead Time | 3.5d | 3.3d | 3.2d | 3.1d | ↑ Mejorando |
| Costo/un | $46.1 | $45.8 | $45.5 | $45.2 | ↑ Mejorando |

### Sección 3: Estado de Acciones

| Acción | Responsable | Estado | Fecha límite |
|--------|-------------|--------|--------------|
| Reducir tiempo de cambio | María | En progreso | 15/07 |
| Capacitar equipo B | Carlos | Completado | 10/07 |
| Implementar Poka-Yoke | Ana | Pendiente | 20/07 |

### Sección 4: Problemas Abiertos

| Problema | Nivel | Fecha detectada | Acción |
|----------|-------|-----------------|--------|
| Defecto tipo X | 2 | 08/07 | A3 en proceso |
| Parada máquina 3 | 1 | 09/07 | Resuelto |
| Falta material Y | 3 | 10/07 | Escalado |

## Frecuencia de Actualización

| Nivel | KPIs | Frecuencia | Responsable |
|-------|------|------------|-------------|
| Operativo | Calidad, productividad | Diaria | Team Leader |
| Táctico | Costo, entrega, moral | Semanal | Supervisor |
| Estratégico | Satisfacción cliente, ROI | Mensual | Gerente |

## Conexiones con la Gestión Diaria

El dashboard se usa en la [[04-sistema-gestion-diaria|gestión diaria]] de esta forma:

1. **Revisión matutina** — Team Leader revisa el tablero
2. **Standup meeting** — Se discuten los números
3. **Acciones del día** — Se priorizan según los datos
4. **Cierre** — Se actualiza el tablero al final del día

## Errores Comunes

- **Demasiados KPIs** — Si no puedes verlo en 30 segundos, hay demasiados
- **No actualizar** — Un tablero desactualizado pierde credibilidad
- **No actuar** — Si hay rojos sin acción, el tablero no sirve
- **No involucrar al equipo** — El tablero es de todos, no solo del líder
- **Diseño confuso** — Si no se entiende a primera vista, rediseñar

## Conexiones

- [[16-metricas-lean|Métricas Lean]] — Las métricas que se muestran
- [[04-sistema-gestion-diaria|Gestión diaria]] — Donde se usa el dashboard
- [[02-andon|Andon]] — El dashboard es el "Andon" de la gestión
- [[15-contabilidad-lean|Contabilidad Lean]] — Perspectiva financiera
- [[09-plan-despliegue-lean|Plan de despliegue]] — Objetivos que se rastrean
- [[13-despliegue-hoshin-kanri|Hoshin Kanri]] — Alineación estratégica visible
- [[08-modelo-madurez|Modelo de madurez]] — Nivel de sofisticación del dashboard

## Lecturas Recomendadas

- *Visual Workplace, Visual Lean* — Gwendolyn Galsworth
- *Creating a Lean Culture* — David Mann
- *The Toyota Way Field Book* — Jeffrey Liker
