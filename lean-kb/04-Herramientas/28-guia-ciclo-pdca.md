---
title: "Guía del Ciclo PDCA"
tags:
  - lean/herramientas
  - type/guia
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Guía PDCA
  - Ciclo PDCA Práctico
  - Guía del Ciclo PDCA
  - Plan Do Check Act
related:
  - "[[10-pdca]]"
  - "[[03-a3-resolucion-problemas]]"
  - "[[02-Pilares/03-kaizen]]"
  - "[[19-trabajo-estandarizado]]"
---

# Guía del Ciclo PDCA

Esta guía práctica describe cómo aplicar el ciclo [[10-pdca|PDCA]] (Plan-Do-Check-Act) en situaciones reales del día a día.

## ¿Cuándo Usar PDCA?

- Para resolver un problema específico
- Para implementar un cambio en un proceso
- Para mejorar un estándar existente
- Para validar una idea antes de implementarla a gran escala
- Para cualquier situación donde no se tenga certeza del resultado

## Las Cuatro Fases

### PLAN (Planificar)

**Objetivo:** Definir qué se va a hacer y cómo se va a medir.

**Pasos:**
1. **Definir el problema o la oportunidad**
   - ¿Qué está pasando vs qué debería pasar?
   - ¿Cuánto impacta? (datos, no suposiciones)

2. **Analizar la causa raíz**
   - Usar [[12-los-cinco-porques|5 Porqués]] o [[23-analisis-causa-raiz|otras herramientas de RCA]]
   - Ir al [[06-gemba|Gemba]] para observar

3. **Diseñar la contramedida**
   - ¿Qué acción ataca la causa raíz?
   - ¿Qué resultados esperamos?

4. **Definir cómo se medirá**
   - Métrica antes (línea base)
   - Métrica objetivo
   - Plazo de medición

**Ejemplo:**
```
PROBLEMA: 20% de los deployments fallan
CAUSA RAÍZ: Falta de tests de integración
CONTRAMEDIDA: Agregar tests de integración al pipeline
MÉTRICA: % de deployments exitosos
LÍNEA BASE: 80%
OBJETIVO: 95%
PLAZO: 2 semanas
```

### DO (Hacer)

**Objetivo:** Implementar la contramedida de forma controlada.

**Pasos:**
1. **Implementar en escala pequeña** — No cambiar todo a la vez
2. **Documentar lo que se hace** — Para poder replicar o revertir
3. **Observar durante la implementación** — Anotar lo que ocurre
4. **Recoger datos** — Medir según lo definido en Plan

**Consejo:** El "Do" no es "implementar y olvidar". Es implementar y observar activamente.

### CHECK (Verificar)

**Objetivo:** Comparar los resultados reales con lo esperado.

**Pasos:**
1. **Recoger todos los datos** — Según la métrica definida
2. **Comparar con la línea base** — ¿Hubo mejora?
3. **Comparar con el objetivo** — ¿Se alcanzó?
4. **Identificar qué funcionó y qué no**
5. **Buscar efectos no esperados** — ¿Algo salió mal que no anticipamos?

**Ejemplo de verificación:**
```
Métrica: % de deployments exitosos
Antes: 80%
Después de 2 semanas: 92%
Objetivo: 95%
Resultado: PARCIALMENTE ALCANZADO

Efectos positivos: Menos fallos de integración
Efectos no esperados: Los tests增加了5 minutos al pipeline
```

### ACT (Actuar)

**Objetivo:** Basándose en lo aprendido, decidir el siguiente paso.

**Opciones:**

| Resultado | Acción |
|-----------|--------|
| Éxito total | Estandarizar el cambio, actualizar el [[19-trabajo-estandarizado\|estándar]] |
| Éxito parcial | Ajustar la contramedida y repetir PDCA |
| Sin cambio | Buscar otra causa raíz, volver a Plan |
| Empeoró | Revertir el cambio, analizar qué salió mal |

**Si fue exitoso:**
1. Actualizar el estándar
2. Capacitar al equipo en el nuevo estándar
3. Compartir la lección aprendida
4. Buscar la siguiente oportunidad de mejora

## Ejemplo Completo de PDCA

```
SITUACIÓN: Los usuarios reportan 15 errores de validación por día

PLAN:
- Problema: 15 errores/día de validación
- Causa raíz: El formulario no valida en tiempo real
- Contramedida: Agregar validación client-side
- Métrica: Errores de validación por día
- Línea base: 15/día
- Objetivo: <3/día
- Plazo: 1 semana

DO:
- Implementar validación en tiempo real en el formulario
- Deploy a ambiente de staging
- Probar con 5 usuarios beta
- Recoger feedback durante 3 días

CHECK:
- Errores bajaron de 15 a 4 por día
- Mejora del 73%
- No se alcanzó el objetivo de <3
- Efecto no esperado: Algunos usuarios encontraron la validación "molesta"

ACT:
- Éxito parcial → Ajustar la validación (hacerla menos restrictiva)
- Repetir PDCA con la ajuste
- La lección: validar en tiempo real pero no bloquear al usuario
```

## PDCA en el A3

El [[03-a3-resolucion-problemas|A3]] es la documentación estructurada de un ciclo PDCA:

| Sección A3 | Fase PDCA |
|-----------|-----------|
| Contexto y Condición Actual | **PLAN** — Entender el problema |
| Meta y Análisis | **PLAN** — Definir qué lograr y por qué |
| Contramedidas e Implementación | **DO** — Hacer el cambio |
| Seguimiento | **CHECK** — Verificar resultados |
| Estandarización | **ACT** — Estandarizar el éxito |

## Errores Comunes

| Error | Consecuencia | Solución |
|-------|-------------|----------|
| Saltar el Plan | Se actúa sin entender el problema | Siempre empezar con análisis |
| No medir antes | No se puede comparar después | Establecer línea base siempre |
| Implementar a gran escala | Si falla, el impacto es grande | Empezar pequeño (piloto) |
| No hacer Check | No se aprende de la experiencia | Siempre medir resultados |
| No estandarizar el éxito | La mejora se pierde con el tiempo | Actualizar estándares en Act |

## Consejos Prácticos

1. **Un PDCA a la vez** — No intentar resolver todo en un ciclo
2. **Documentar** — Para poder repetir o enseñar a otros
3. **Ser paciente** — PDCA es un ciclo, no una línea recta
4. **Involucrar al equipo** — Las mejores ideas vienen de quien hace el trabajo
5. **Celebrar los pequeños éxitos** — Cada ciclo completado es una mejora

## Notas Relacionadas

- [[10-pdca]] — Conceptos del ciclo PDCA
- [[03-a3-resolucion-problemas]] — Documentación estructurada de PDCA
- [[02-Pilares/03-kaizen|Kaizen]] — PDCA es el motor de Kaizen
- [[19-trabajo-estandarizado]] — Los estándares se actualizan en la fase Act
- [[06-gemba]] — Observar para Planificar y para Check
- [[12-los-cinco-porques]] — Herramienta del Plan
- [[21-kaizen-event]] — Un evento Kaizen es un PDCA intensivo
