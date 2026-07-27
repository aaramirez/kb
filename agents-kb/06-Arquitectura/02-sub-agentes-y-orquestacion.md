---
title: "Sub-Agentes y Orquestación"
tags:
  - agents/arquitectura
  - type/concepto
  - difficulty/avanzado
created: 2026-07-27
updated: 2026-07-27
category: "Arquitectura"
aliases:
  - "Sub-agents"
  - "Orchestration"
related:
  - "[[01-patrones-de-agentes]]"
  - "[[03-multi-agente-empresarial]]"
---

# Sub-Agentes y Orquestación

## Concepto

Un **sub-agente** es un agente invocado por un agente principal para manejar una tarea especializada.

```
┌─────────────────────────────────────────┐
│           AGENTE PRINCIPAL              │
│                                         │
│  "Necesito generar un reporte de        │
│   ventas con análisis de mercado"       │
│                                         │
│  ┌─────────────┐                        │
│  │ Orquestador │                        │
│  │             │                        │
│  │ 1. Consultar datos de ventas         │
│  │ 2. Analizar mercado                  │
│  │ 3. Generar gráficos                  │
│  │ 4. Crear documento                   │
│  └──────┬──────┘                        │
│         │                               │
│    ┌────┴────┬──────────┐               │
│    │         │          │               │
│  ┌─▼──┐  ┌──▼──┐  ┌───▼───┐           │
│  │ SA1│  │ SA2 │  │  SA3  │           │
│  │Data│  │Mktg │  │Docs   │           │
│  └────┘  └─────┘  └───────┘           │
└─────────────────────────────────────────┘
```

## Orquestación

### Secuencial
```
A ──▶ B ──▶ C
```
Cada agente espera al anterior.

### Paralela
```
    ┌──▶ A ──┐
X ──┼──▶ B ──┼──▶ Y
    └──▶ C ──┘
```
Múltiples agentes trabajan simultáneamente.

### Condicional
```
      ¿Condición?
     ┌──SI──┐
     │      │
     A      B
```
El flujo depende de decisiones.

## Ver también

- [[01-patrones-de-agentes|Patrones]]
- [[03-multi-agente-empresarial|Multi-Agente Empresarial]]
- [[04-gestion-de-permisos|Permisos]]
