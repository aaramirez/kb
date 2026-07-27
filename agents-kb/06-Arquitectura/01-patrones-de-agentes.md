---
title: "Patrones de Agentes"
tags:
  - agents/arquitectura
  - type/concepto
  - difficulty/avanzado
created: 2026-07-27
updated: 2026-07-27
category: "Arquitectura"
aliases:
  - "Design Patterns"
  - "Agent Patterns"
related:
  - "[[02-sub-agentes-y-orquestacion]]"
  - "[[03-multi-agente-empresarial]]"
---

# Patrones de Agentes

## Patrón 1: Agente Simple

```
Usuario ──▶ Agente ──▶ Respuesta
```

**Uso**: Consultas directas, FAQs
**Complejidad**: Baja

## Patrón 2: Agente con Herramientas

```
Usuario ──▶ Agente ──┬──▶ Tool 1
                     ├──▶ Tool 2
                     └──▶ Tool 3
```

**Uso**: Consultas que requieren acceder a sistemas
**Complejidad**: Media

## Patrón 3: Cadena de Agentes

```
Usuario ──▶ Agente 1 ──▶ Agente 2 ──▶ Agente 3 ──▶ Respuesta
```

**Uso**: Procesos con múltiples pasos
**Complejidad**: Media-Alta

## Patrón 4: Agente Orquestador

```
                    ┌──▶ Sub-agente A
Usuario ──▶ Orquestador ──▶ Sub-agente B
                    └──▶ Sub-agente C
```

**Uso**: Tareas complejas que requieren especialización
**Complejidad**: Alta

## Patrón 5: Multi-Agente Colaborativo

```
┌─────────┐     ┌─────────┐
│ Agente A│◀───▶│ Agente B│
└────┬────┘     └────┬────┘
     │               │
     └───────┬───────┘
             │
      ┌──────▼──────┐
      │  Consenso   │
      │  o Agregación│
      └─────────────┘
```

**Uso**: Decisiones que requieren múltiples perspectivas
**Complejidad**: Muy alta

## Cuándo Usar Cada Patrón

| Situación | Patrón Recomendado |
|-----------|-------------------|
| FAQ simple | Agente Simple |
| Consulta a BD | Agente con Herramientas |
| Proceso de 3+ pasos | Cadena |
| Tarea con sub-tareas | Orquestador |
| Decisión compleja | Multi-Agente |

## Ver también

- [[02-sub-agentes-y-orquestacion|Orquestación]]
- [[03-multi-agente-empresarial|Multi-Agente]]
