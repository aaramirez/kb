---
title: "Flujo de Selección de Herramientas"
tags:
  - lean/herramientas
  - type/guia
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Selección de Herramientas
  - Tool Selection Flow
  - Flujo de Selección de Herramientas
  - Árbol de Decisión Lean
related:
  - "[[34-matriz-comparativa-herramientas]]"
  - "[[01-5s]]"
  - "[[09-kanban]]"
  - "[[10-pdca]]"
  - "[[06-gemba]]"
  - "[[17-vsm]]"
---

# Flujo de Selección de Herramientas

Esta guía es un **árbol de decisión** para seleccionar la herramienta Lean correcta según el tipo de problema que enfrentas.

## Árbol de Decisión

```
¿Cuál es tu problema principal?
│
├── ▶ DESORDEN / BÚSQUEDA
│       │
│       └── ¿El espacio de trabajo está desorganizado?
│              │
│              ├── SÍ ──→ [[01-5s|5S]]
│              └── NO ──→ [[18-gestion-visual|Gestión Visual]]
│
├── ▶ DEFECTOS / CALIDAD
│       │
│       ├── ¿Los defectos son por error humano?
│       │       └── SÍ ──→ [[11-poka-yoke|Poka-Yoke]]
│       │
│       ├── ¿Los defectos son por falta de estándares?
│       │       └── SÍ ──→ [[19-trabajo-estandarizado|Standard Work]]
│       │
│       ├── ¿Los defectos son por equipo mal mantenido?
│       │       └── SÍ ──→ [[15-tpm|TPM]]
│       │
│       └── ¿Necesitas encontrar la causa raíz?
│               └── SÍ ──→ [[12-los-cinco-porques|5 Whys]] + [[23-analisis-causa-raiz|RCA]]
│
├── ▶ FLUJO / PROCESO LENTO
│       │
│       ├── ¿Hay inventario acumulado entre procesos?
│       │       └── SÍ ──→ [[05-flujo-continuo|Flujo Continuo]]
│       │
│       ├── ¿Necesitas organizar en celdas?
│       │       └── SÍ ──→ [[20-manufactura-celular|Manufactura Celular]]
│       │
│       ├── ¿Necesitas mapear todo el flujo?
│       │       └── SÍ ──→ [[17-vsm|VSM]]
│       │
│       └── ¿Hay un cuello de botella identificado?
│               └── SÍ ──→ [[04-analisis-de-cuellos-de-botella|Cuellos de Botella]]
│
├── ▶ INVENTARIO ALTO
│       │
│       ├── ¿Se produce por pronóstico (push)?
│       │       └── SÍ ──→ [[09-kanban|Kanban]] (sistema pull)
│       │
│       ├── ¿La producción es irregular (picos y valles)?
│       │       └── SÍ ──→ [[07-heijunka|Heijunka]]
│       │
│       └── ¿Los tiempos de cambio son largos?
│               └── SÍ ──→ [[13-smed|SMED]]
│
├── ▶ EQUIPO / MÁQUINAS
│       │
│       ├── ¿Las máquinas fallan frecuentemente?
│       │       └── SÍ ──→ [[15-tpm|TPM]]
│       │
│       ├── ¿Necesitas medir la efectividad?
│       │       └── SÍ ──→ [[16-oee|OEE]]
│       │
│       └── ¿Los tiempos de cambio son largos?
│               └── SÍ ──→ [[13-smed|SMED]]
│
├── ▶ PROBLEMA COMPLEJO / NECESITAS ANÁLISIS
│       │
│       ├── ¿Necesitas documentar todo el análisis?
│       │       └── SÍ ──→ [[03-a3-resolucion-problemas|A3]]
│       │
│       ├── ¿Necesitas acción rápida e intensiva?
│       │       └── SÍ ──→ [[21-kaizen-event|Kaizen Event]]
│       │
│       ├── ¿Necesitas observar la realidad?
│       │       └── SÍ ──→ [[06-gemba|Gemba]]
│       │
│       └── ¿Necesitas medir antes de actuar?
│               └── SÍ ──→ [[17-vsm|VSM]] + [[16-oee|OEE]]
│
├── ▶ MEJORA CONTINUA
│       │
│       ├── ¿Necesitas un ciclo estructurado?
│       │       └── SÍ ──→ [[10-pdca|PDCA]]
│       │
│       ├── ¿Necesitas alinear la organización?
│       │       └── SÍ ──→ [[08-hoshin-kanri|Hoshin Kanri]]
│       │
│       └── ¿Necesitas un evento de mejora?
│               └── SÍ ──→ [[21-kaizen-event|Kaizen Event]]
│
└── ▶ SEÑALIZACIÓN / COMUNICACIÓN
        │
        ├── ¿Necesitas una señal visual de problemas?
        │       └── SÍ ──→ [[02-andon|Andon]]
        │
        ├── ¿Necesitas un tablero de flujo de trabajo?
        │       └── SÍ ──→ [[09-kanban|Kanban]]
        │
        └── ¿Necesitas comunicación visual general?
                └── SÍ ──→ [[18-gestion-visual|Gestión Visual]]
```

## Guía Rápida por Problema

| Si tu problema es... | Empieza con... | Luego usa... |
|---------------------|---------------|--------------|
| El espacio está desordenado | 5S | Gestión Visual |
| Hay muchos defectos | Poka-Yoke | Standard Work + TPM |
| El proceso es lento | VSM | Flujo Continuo |
| Hay demasiado inventario | Kanban | Heijunka + SMED |
| Las máquinas fallan | TPM | OEE + Seis Grandes Pérdidas |
| No sabes qué está pasando | Gemba | VSM + 5 Whys |
| Necesitas resolver un problema | 5 Whys | A3 o Kaizen Event |
| Necesitas mejorar un proceso | PDCA | Kaizen Event |
| Necesitas alinear la organización | Hoshin Kanri | PDCA |

## Flujo de Implementación Recomendado

```
PASO 1: Entender la realidad
   Gemba ──→ VSM ──→ 5 Whys
   (Observar)  (Mapear)  (Analizar)

PASO 2: Establecer base
   5S ──→ Standard Work ──→ Gestión Visual
   (Organizar)  (Estandarizar)  (Comunicar)

PASO 3: Crear flujo
   Flujo Continuo ──→ Kanban ──→ Takt Time
   (Conectar)  (Señalizar)  (Sincronizar)

PASO 4: Nivelar y mantener
   Heijunka ──→ SMED ──→ TPM
   (Nivelar)  (Reducir setup)  (Mantener)

PASO 5: Medir y mejorar
   OEE ──→ PDCA ──→ Kaizen Event
   (Medir)  (Mejorar continuamente)  (Acelerar)
```

## Consejos para Seleccionar

1. **Empieza por el problema más grande** — No intentes resolver todo a la vez
2. **Mide primero** — Usa VSM u OEE para entender el estado actual
3. **Construye sobre base sólida** — 5S y Standard Work son prerrequisitos
4. **Una herramienta a la vez** — No implementes 5 herramientas simultáneamente
5. **Usa las combinaciones** — Las herramientas son más poderosas juntas
6. **Adapta al contexto** — No todas las herramientas aplican a todas las situaciones

## Notas Relacionadas

- [[34-matriz-comparativa-herramientas]] — Comparación detallada de herramientas
- [[01-5s]] — La base de todo
- [[06-gemba]] — Donde comienza todo
- [[10-pdca]] — El motor de todas las mejoras
- [[17-vsm]] — Herramienta de diagnóstico
- [[02-Pilares/03-kaizen|Kaizen]] — Filosofía que une todas las herramientas
- [[01-Fundamentos/01-que-es-lean|Lean Manufacturing]] — Contexto general
