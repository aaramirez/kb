---
title: "VSM (Value Stream Mapping)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - VSM
  - Mapeo de Cadena de Valor
  - Value Stream Mapping
  - Mapa de Flujo de Valor
related:
  - "[[05-flujo-continuo]]"
  - "[[04-analisis-de-cuellos-de-botella]]"
  - "[[10-pdca]]"
  - "[[06-gemba]]"
  - "[[01-5s]]"
  - "[[13-smed]]"
---

# VSM (Value Stream Mapping)

**VSM** (Value Stream Mapping) es una herramienta de [[Lean Manufacturing]] para **visualizar y analizar** el flujo de materiales e información necesarios para entregar un producto o servicio al cliente. Es el punto de partida para cualquier transformación Lean.

## Definición

VSM es un diagrama que muestra todos los pasos (value-added y non-value-added) en el flujo de un producto o servicio desde la solicitud del cliente hasta la entrega. Permite identificar desperdicios y diseñar un estado futuro mejorado.

> "No puedes mejorar lo que no puedes ver." — Principio fundamental de VSM

## El Mapa de Cadena de Valor

Un VSM tiene dos partes principales:

### Flujo de Materiales (Parte Inferior)
```
Proveedor → [Paso 1] → [Paso 2] → [Paso 3] → Cliente
              ↓            ↓            ↓
           Inventario   Inventario   Inventario
```

### Flujo de Información (Parte Superior)
```
         ← Información de demanda →
              Cliente ──────────→ Central
                                   │
                            ┌──────┼──────┐
                            ↓      ↓      ↓
                         Paso 1  Paso 2  Paso 3
```

## Estados del Mapa

### Estado Actual (Current State)
Documenta **cómo funciona hoy** el proceso, con datos reales:
- Tiempos de ciclo (CT)
- Tiempos de cambio (C/O)
- Disponibilidad (Avail)
- Inventario entre procesos
- Número de operadores
- Frecuencia de entrega

### Estado Futuro (Future State)
Diseña **cómo debería funcionar** el proceso:
- Flujo continuo donde sea posible
- [[09-kanban|Kanban]] en procesos discretos
- [[07-heijunka|Nivelación]] de producción
- [[14-takt-time|Takt Time]] alineado con demanda

## Símbolos Comunes de VSM

```
┌─────────────────────────────────────────────────┐
│  Símbolo          │  Significado                 │
├───────────────────┼──────────────────────────────┤
│  ┌───┐            │  Proceso (celda de trabajo)  │
│  │   │            │                              │
│  └───┘            │                              │
│                   │                              │
│  ──▷              │  Push (producción empujada)  │
│                   │                              │
│  ═══▷             │  Pull (producción tirón)     │
│                   │                              │
│  ▒▒▒              │  Inventario                  │
│                   │                              │
│  📊               │  Datos de proceso            │
│                   │                              │
│  ─ ─ →            │  Flujo de información        │
│                   │                              │
│  ═══ →            │  Flujo de materiales         │
└─────────────────────────────────────────────────┘
```

## Pasos para Crear un VSM

### 1. Definir el Producto y Cliente
Especificar qué producto/servicio y para qué cliente.

### 2. Trazar el Flujo de Alto Nivel
Identificar los procesos principales desde proveedor hasta cliente.

### 3. Recoger Datos en Gemba
Ir al [[06-gemba|Gemba]] y medir tiempos, inventarios y cantidades reales.

### 4. Dibujar Estado Actual
Documentar el flujo actual con todos los datos recogidos.

### 5. Identificar Desperdicios
Marcar donde hay [[03-Desperdicios|desperdicios]] (espera, inventario, movimiento).

### 6. Diseñar Estado Futuro
Proponer mejoras: flujo continuo, Kanban, nivelación.

### 7. Planificar Implementación
Crear plan de acción con prioridades usando [[10-pdca|PDCA]].

## Conexión con Desperdicios

VSM expone los [[03-Desperdicios|8 desperdicios]]:
- **Inventario** — Se ve como inventario entre procesos
- **Espera** — Se ve como tiempo de espera en la timeline
- **Transporte** — Se ve como flechas largas entre procesos
- **Overprocessing** — Se ve como pasos innecesarios en el flujo
- **Defectos** — Se ve como scrap/rework en los datos
- **Motion** — Se identifica al caminar el proceso real
- **Overproduction** — Se ve cuando se produce antes de demanda
- **Sin uso de talento** — Se ve cuando hay pasos que podrían automatizarse

## VSM y Otras Herramientas

- **[[05-flujo-continuo|Flujo Continuo]]** — VSM identifica dónde aplicar flujo continuo
- **[[04-analisis-de-cuellos-de-botella|Cuellos de Botella]]** — VSM los revela en el mapeo
- **[[10-pdca|PDCA]]** — Ciclo para pasar de estado actual a futuro
- **[[06-gemba|Gemba]]** — VSM requiere datos reales del Gemba
- **[[01-5s|5S]]** — VSM requiere espacios ordenados para ser efectivo
- **[[13-smed|SMED]]** — Tiempos de cambio son datos clave del VSM

## VSM en Software

Aplicado a desarrollo de software:
- **Lead time:** Desde solicitud hasta deploy
- **Process time:** Tiempo de coding real
- **Wait time:** Tiempo esperando review, approval, deployment
- **% Complete & Accurate:** % de trabajo que llega sin errores

**Ejemplo VSM de un feature:**
```
Solicitud → Diseño → Desarrollo → Review → QA → Deploy
  2 días    1 día    3 días      2 días  1 día  0.5 días
           ↑                               ↑
        Espera                           Espera
        (1 día)                         (3 días)
```

**Dato revelador:** Solo 7.5 de 12.5 días son tiempo de trabajo real (40% value-added).

## Errores Comunes

- Dibujar el VSM desde la oficina en vez de ir al Gemba
- Usar tiempos estimados en vez de medidos
- No involucrar a todo el equipo en el mapeo
- Diseñar el estado futuro sin atacar las pérdidas identificadas
- No actualizar el VSM cuando el proceso cambia

## Notas Relacionadas

- [[05-flujo-continuo]] — Objetivo del estado futuro
- [[04-analisis-de-cuellos-de-botella]] — Qué revela el VSM
- [[10-pdca]] — Ciclo para implementar el estado futuro
- [[06-gemba]] — Fuente de datos reales para el VSM
- [[01-5s]] — Prerrequisito para un VSM efectivo
- [[13-smed]] — Datos de setup relevantes para el mapeo
- [[07-heijunka]] — Componente del estado futuro
