---
title: "Caso: Agente de Conocimiento Lean"
tags:
  - agents/casos
  - type/caso-uso
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Casos de Uso"
aliases:
  - "Lean Knowledge Agent"
  - "Lean KB Agent"
related:
  - "[[02-caso-agentes-pmo-portafolio]]"
---

# Caso: Agente de Conocimiento Lean

## Contexto

Un equipo de mejora continua quiere hacer accesible el conocimiento de Lean, Agile y Management 3.0 para toda la organización.

## Problema

- 400+ archivos en 5 knowledge bases
- Difícil encontrar información específica
- Cada persona busca de forma diferente
- Conocimiento valioso pero inaccesible

## Solución

### Arquitectura

```
┌─────────────────────────────────────┐
│         AGENTE LEAN                 │
│                                     │
│  ┌─────────┐  ┌─────────────────┐  │
│  │ lean-kb │  │ leanc-kb        │  │
│  │ 208 files│ │ 52 files        │  │
│  └────┬────┘  └────┬────────────┘  │
│       │            │               │
│  ┌────▼────┐  ┌────▼────────────┐  │
│  │ mgmt3-kb│  │ sf-kb           │  │
│  │ 124 files│ │ 35 files        │  │
│  └────┬────┘  └────┬────────────┘  │
│       │            │               │
│  ┌────▼────────────▼────────────┐  │
│  │     MEGA-PROMPT LEAN         │  │
│  │  (mapeo topicos → KBs)       │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Capacidades del Agente
- Responde preguntas sobre Lean, Agile, Mgmt 3.0
- Cita fuentes específicas (archivo + sección)
- Navega entre KBs automáticamente
- Solo lectura (no modifica contenido)

## Resultados

| Métrica | Antes | Después | Mejora |
|---------|-------|---------|--------|
| Tiempo de búsqueda | 15-30min | < 1min | -95% |
| Uso del conocimiento | 20% del equipo | 80% | +300% |
| Satisfacción | 2.8/5 | 4.6/5 | +64% |

## Ver también

- [[lean-kb/Index|Lean KB]]
- [[mgmt3-kb/Index|Mgmt3 KB]]
- [[leanc-kb/Index|LeanC KB]]
