---
title: "PDCA (Plan-Do-Check-Act)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - PDCA
  - Plan Do Check Act
  - Ciclo PDCA
  - Rueda de Deming
related:
  - "[[03-a3-resolucion-problemas]]"
  - "[[12-los-cinco-porques]]"
  - "[[06-gemba]]"
  - "[[02-andon]]"
  - "[[08-hoshin-kanri]]"
  - "[[11-poka-yoke]]"
---

# PDCA (Plan-Do-Check-Act)

**PDCA** (Plan-Do-Check-Act) es el ciclo fundamental de mejora continua en [[Lean Manufacturing]]. También conocido como la **Rueda de Deming** o **Ciclo de Deming**, es el motor que impulsa todas las demás herramientas Lean.

## Definición

PDCA es un método iterativo de cuatro pasos para el control continuo y mejora de procesos y productos:

1. **Plan** (Planificar) — Diseñar una hipótesis y un plan de acción
2. **Do** (Hacer) — Ejecutar el plan a pequeña escala
3. **Check** (Verificar) — Evaluar los resultados contra lo esperado
4. **Act** (Actuar) — Estandarizar o ajustar según los resultados

> PDCA es el método científico aplicado a la mejora de procesos.

## Origen

PDCA fue desarrollado por **W. Edwards Deming** en los años 1950, basándose en el trabajo de **Walter Shewhart**. Deming lo presentó en Japón en 1950 y se convirtió en la base del movimiento de calidad japonés y del [[01-Fundamentos/01-que-es-lean|Sistema de Producción Toyota (TPS)]].

## Las Cuatro Fases en Detalle

### 1. Plan (Planificar)
Definir el problema, analizar la causa raíz y diseñar una solución.

**Actividades clave:**
- Definir el problema con datos (usar [[12-los-cinco-porques|5 Porqués]])
- Analizar la causa raíz
- Diseñar una contramedida
- Definir métricas de éxito
- Crear un plan de implementación

**Herramientas:** A3, Ishikawa, 5 Porqués, Análisis de Datos

### 2. Do (Hacer)
Implementar la solución a pequeña escala (piloto).

**Actividades clave:**
- Ejecutar el plan en un entorno controlado
- Documentar lo que ocurre
- Recoger datos durante la implementación
- Capacitar al equipo involucrado

**Principio clave:** No implementar a gran escala sin antes probar a pequeña escala.

### 3. Check (Verificar)
Comparar los resultados reales con los esperados.

**Actividades clave:**
- Medir los resultados usando las métricas definidas
- Comparar con el baseline y con el objetivo
- Identificar desviaciones
- Entender por qué funcionó o no funcionó

**Relación con [[06-gemba|Gemba]]:** La verificación ocurre en el lugar real, no en una sala de conferencias.

### 4. Act (Actuar)
Tomar acción basada en los resultados del Check.

**Dos caminos posibles:**
- **Si funcionó:** Estandarizar el cambio y expandirlo
- **Si no funcionó:** Ajustar la solución o volver al Plan con nuevo conocimiento

**Actividades clave:**
- Actualizar estándares si el cambio funciona
- Documentar lecciones aprendidas
- Expandir a otras áreas si es apropiado
- Iniciar un nuevo ciclo PDCA si es necesario

## PDCA como Motor de Kaizen

El [[02-Pilares/03-kaizen|Kaizen]] (mejora continua) se ejecuta a través de ciclos PDCA:

```
        ┌─── Plan ───┐
        │             │
      Act             Do
        │             │
        └─── Check ───┘
              │
              ▼
      Mejora Continua
```

Cada ciclo PDCA produce una mejora. Los ciclos sucesivos producen mejoras acumulativas.

## Ejemplo de PDCA

**Problema:** Los tiempos de setup de una máquina son de 45 minutos.

| Fase | Acción |
|------|--------|
| **Plan** | Analizar el setup: 20 min buscando herramientas, 15 min ajustando, 10 min probando. Causa raíz: desorganización (ver [[12-los-cinco-porques|5 Porqués]]). Contramedida: implementar [[01-5s|5S]] en el área de setup. Objetivo: reducir a 20 min. |
| **Do** | Implementar 5S en el área de setup de una máquina piloto durante 2 semanas. |
| **Check** | Resultado: setup reducido de 45 a 25 minutos. No se alcanzó el objetivo de 20 min, pero hubo mejor significativa. |
| **Act** | Estandarizar 5S en todas las máquinas. Iniciar nuevo PDCA para atacar los 25 minutos restantes (quizás SMED). |

## PDCA vs DMAIC

| Aspecto | PDCA | DMAIC |
|---------|------|-------|
| Fases | 4 (Plan, Do, Check, Act) | 6 (Define, Measure, Analyze, Improve, Control) |
| Origen | Deming / Japón | Six Sigma / Motorola |
| Enfoque | Mejora continua iterativa | Resolución de problemas complejos |
| Complejidad | Simple, accesible | Más estructurado y estadístico |
| Uso Lean | Base del Kaizen | Complementario en proyectos grandes |

Ambos son válidos. PDCA es más accesible y se integra mejor con las demás herramientas Lean.

## PDCA en Software

En desarrollo de software, PDCA se manifiesta como:
- **Sprints** (Plan: sprint planning, Do: desarrollo, Check: sprint review, Act: retrospective)
- **A/B testing** (Plan: hipótesis, Do: experimento, Check: métricas, Act: implementar o descartar)
- **CI/CD** (Plan: cambios, Do: deploy, Check: monitoreo, Act: rollback o estandarizar)
- **Incident Response** (Plan: solución, Do: implementar, Check: verificar, Act: documentar)

## Notas Relacionadas

- [[03-a3-resolucion-problemas]] — El A3 es PDCA documentado
- [[12-los-cinco-porques]] — Herramienta de análisis en la fase Plan
- [[06-gemba]] — Verificación en el lugar real
- [[02-andon]] — Las activaciones de Andon inician ciclos PDCA
- [[08-hoshin-kanri]] — PDCA a nivel estratégico
- [[11-poka-yoke]] — Contramedidas que pueden ser Poka-Yoke
- [[02-Pilares/03-kaizen|Kaizen]] — PDCA es el motor del Kaizen
- [[01-Fundamentos/01-que-es-lean|Lean Manufacturing]] — Contexto general
