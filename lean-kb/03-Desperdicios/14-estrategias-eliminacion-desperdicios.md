---
title: "Estrategias de Eliminación de Desperdicios"
tags:
  - lean/desperdicios
  - type/guia
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Lean Manufacturing
aliases:
  - Eliminacion de Desperdicios
  - Waste Elimination
related:
  - "[[02-muda-desperdicio]]"
  - "[[01-marco-3m]]"
  - "[[13-identificacion-de-desperdicios]]"
  - "[[05-desperdicio-sobreproduccion]]"
  - "[[09-desperdicio-inventario]]"
  - "[[11-desperdicio-defectos]]"
  - "[[12-desperdicio-talento-no-utilizado]]"
---

# Estrategias de Eliminación de Desperdicios

Guía para eliminar [[02-muda-desperdicios|desperdicios]] de forma sistemática y sostenible.

## Jerarquía de Eliminación

El enfoque correcto sigue un orden de prioridad:

```
1. ELIMINAR    → ¿Se puede quitar el paso completamente?
2. SIMPLIFICAR → ¿Se puede hacer más simple?
3. AUTOMATIZAR → ¿Se puede mecanizar lo que queda?
```

**Nunca automatizar un proceso desperdiciado** — solo se automatiza más rápido un desperdicio.

## Estrategia por Tipo de Desperdicio

### [[05-desperdicio-sobreproduccion|Sobreproducción]]
- Implementar sistema **pull** (jabón)
- Usar **[[Kanban]]** para controlar producción
- Aplicar **[[Heijunka]]** para nivelar
- Reducir tiempos de preparación (SMED)

### [[06-desperdicio-espera|Espera]]
- Crear **flujo continuo** (One-Piece Flow)
- **Balancear la línea** (Yamazumi)
- Establecer **[[Takt Time]]**
- Implementar **TPM** para reducir averías

### [[07-desperdicio-transporte|Transporte]]
- Diseñar **celdas de manufactura**
- Reorganizar **layout por flujo de valor**
- Reducir **tamaño de lotes**
- Integrar almacén en la línea

### [[08-desperdicio-sobreprocesamiento|Sobreprocesamiento]]
- Definir **trabajo estandarizado** (Standard Work)
- Realizar **análisis de valor** (Value Analysis)
- Eliminar **aprobaciones innecesarias**
- Simplificar **reportes y formularios**

### [[09-desperdicio-inventario|Inventario]]
- Implementar **JIT**
- Usar **[[Kanban]]** para controlar stock
- Reducir **tiempos de setup** (SMED)
- Mejorar **confiabilidad de proveedores**

### [[10-desperdicio-movimiento|Movimiento]]
- Aplicar **5S** en el área de trabajo
- Diseñar **estaciones ergonómicas**
- Definir **trabajo estandarizado**
- **Uso de ayudas mecánicas**

### [[11-desperdicio-defectos|Defectos]]
- Implementar **Jidoka** (autonomación)
- Usar **Poka-Yoke** (a prueba de errores)
- Definir **trabajo estandarizado**
- Invertir en **capacitación**

### [[12-desperdicio-talento-no-utilizado|Talento No Utilizado]]
- Crear **sistemas de sugerencia**
- Involucrar equipo en **Kaizen**
- **Empoderar** al equipo operativo
- Desarrollar **habilidades** continuamente

## Herramienta: Kaizen Events

Los eventos Kaizen son mejoras intensivas de corta duración (3-5 días) enfocadas en un proceso específico.

### Estructura de un Evento Kaizen

1. **Seleccionar** el proceso y desperdicio a atacar
2. **Formar** el equipo multifuncional
3. **Documentar** el estado actual (VSM)
4. **Analizar** causas raíz
5. **Diseñar** el estado futuro
6. **Implementar** cambios
7. **Medir** resultados
8. **Estandarizar** lo que funciona

## Herramienta: Ciclo PDCA

El ciclo **Plan-Do-Check-Act** estructura la mejora continua:

```
    ┌─────────┐
    │  PLAN   │ ← Identificar el desperdicio y planificar
    └────┬────┘
         ↓
    ┌─────────┐
    │   DO    │ ← Implementar la solución a pequeña escala
    └────┬────┘
         ↓
    ┌─────────┐
    │  CHECK  │ ← Verificar resultados vs esperado
    └────┬────┘
         ↓
    ┌─────────┐
    │   ACT   │ ← Estandarizar o ajustar
    └─────────┘
```

## Sostenibilidad

La eliminación de desperdicios no es un evento único. Para que sea sostenible:

1. **Estandarizar** las mejoras alcanzadas
2. **Medir** continuamente con indicadores
3. **Involucrar** al equipo en la vigilancia
4. **Auditar** regularmente con [[13-identificacion-de-desperdicios|Gemba Walks]]
5. **Celebrar** los logros y compartir aprendizajes

## Prerrequisitos

- [[13-identificacion-de-desperdicios]] — Cómo encontrar desperdicios
- [[02-muda-desperdicio]] — Los 8 desperdicios
- [[01-marco-3m]] — Marco conceptual 3M
