---
title: "Ecosistema de Métricas"
tags:
  - mgmt3/objetivos
  - type/concepto
created: 2026-07-16
updated: 2026-07-16
category: "Objetivos y Métricas"
aliases:
  - "Metrics Ecosystem"
  - "Metric Overload"
related:
  - "[[03-metricas-de-salud]]"
  - "[[02-okrs-management-30]]"
  - "[[09-metricas-individuales-vs-equipos]]"
---

# Ecosistema de Métricas

## La metáfora del ecosistema

Las métricas no viven aisladas. Funcionan como un ecosistema: interactúan, se alimentan entre sí y pueden causar efectos colaterales. Igual que en la naturaleza, eliminar o ignorar una parte afecta al todo.

```
                    PROPÓSITO
                       │
          ┌────────────┼────────────┐
          │            │            │
     Felicidad      Flujo       Calidad
     /     \        |         /     \
eNPS  Retención  Lead Time  Defectos  NPS
```

## Las tres preguntas antes de medir

1. **¿Para qué?** — ¿Qué decisión tomaré con esta métrica?
2. **¿A qué costo?** — ¿Cuánto esfuerzo requiere recolectarla?
3. **¿Qué efecto secundario causará?** — ¿Incentiva comportamientos indeseados?

Si no puedes responder la primera pregunta con claridad, no midas esa métrica.

## Categorías de métricas

| Categoría | Propósito | Ejemplo | Frecuencia |
|-----------|-----------|---------|------------|
| **Estratégicas** | Alinear con objetivos de negocio | Revenue, NPS, retención | Trimestral |
| **Operativas** | Optimizar trabajo diario | Lead time, throughput, WIP | Diaria/semanal |
| **Salud** | Mantener sano el sistema | Felicidad, calidad, flujo | Mensual |
| **Aprendizaje** | Generar conocimiento nuevo | Experimentos A/B, satisfacción de usuarios | Variable |

## Anti-patrones de métricas

### Metric overload (Sobrecarga de métricas)

**Síntoma**: El equipo gasta más tiempo reportando métricas que trabajando.

**Solución**: Limitar a 3-5 métricas activas. Si necesitas más, probablemente necesitas mejor organización, no más datos.

### Vanity metrics (Métricas de vanidad)

**Síntoma**: Métricas que siempre van bien y no generan decisiones. Ejemplo: "10,000 usuarios registrados" sin saber cuántos están activos.

**Solución**: Reemplazar con métricas de comportamiento o resultado que importen.

### Perverse incentives (Incentivos perversos)

**Síntoma**: La métrica mejora pero el resultado real empeora. Ejemplo: "reducir tiempo de atención" → atención superficial, clientes insatisfechos.

**Solución**: Medir outcome (resultado), no output (actividad). Complementar con métricas de calidad.

### Goodhart's Law

> "Cuando una medida se convierte en objetivo, deja de ser una buena medida."

**Solución**: Rotar métricas, usar paneles múltiples, revisar periódicamente si las métricas aún sirven.

## Diseñando un ecosistema de métricas saludable

### Paso 1: Empezar con el propósito
¿Qué quiere lograr la organización? Cada métrica debe conectar con algo que importe.

### Paso 2: Elegir métricas de cada dimensión
- Al menos una de felicidad
- Al menos una de flujo
- Al menos una de calidad

### Paso 3: Verificar interacciones
Preguntar: "¿Mejorar esta métrica perjudica alguna otra?" Si es así, necesitas un balance.

### Paso 4: Establecer ciclos de revisión
Las métricas no son permanentes. Cada trimestre, revisar:
- ¿Seguimos midiendo lo correcto?
- ¿Alguna métrica dejó de ser útil?
- ¿Necesitamos agregar o eliminar alguna?

## Ejemplo de ecosistema completo

```
Propósito: "Ayudar a pymes a ser más competitivas"
  │
  ├── Estratégica: NPS clientes ≥ 50
  ├── Operativa: Lead time ≤ 5 días
  ├── Salud-Felicidad: eNPS ≥ 30
  ├── Salud-Flujo: Throughput ≥ 15 historias/sprint
  └── Salud-Calidad: Tasa de defectos ≤ 2%
```

Cada métrica se revisa mensualmente. Si Lead Time sube, se investiga la causa raíz (¿calidad? ¿WIP alto? ¿falta de capacidad?).

## Referencias

- Appelo, J. (2011). *Management 3.0*
- Humble, J. & Farley, D. (2010). *Continuous Delivery*
- Kernight, G. (2012). *Impact Mapping*
