---
title: "Guía de Implementación VSM"
tags:
  - lean/herramientas
  - type/guia
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Guía VSM
  - Implementación VSM
  - Guía de Implementación VSM
  - Mapeo de Cadena de Valor
related:
  - "[[17-vsm]]"
  - "[[05-flujo-continuo]]"
  - "[[06-gemba]]"
  - "[[10-pdca]]"
  - "[[04-analisis-de-cuellos-de-botella]]"
---

# Guía de Implementación VSM

Esta guía describe cómo conducted un ejercicio de [[17-vsm|Value Stream Mapping]] (VSM) completo, desde la preparación hasta la implementación del estado futuro.

## Preparación del Equipo

### Selección del Equipo
- **Tamaño:** 4-8 personas
- **Composición:** Representantes de cada área del flujo
- **Habilidades:** Conocimiento del proceso actual
- **Liderazgo:** Un facilitador experimentado en VSM

### Preparación Inicial
1. Definir el **producto o familia de productos** a mapear
2. Definir el **cliente** y la **demanda**
3. Identificar los **procesos** desde proveedor hasta cliente
4. Programar **1-2 días completos** para el mapeo

## Paso 1: Dibujar el Flujo de Alto Nivel

Antes de ir al [[06-gemba|Gemba]], dibujar un diagrama simple del flujo:

```
Proveedor → [Recepción] → [Corte] → [Soldadura] → [Ensamble] → [Empaque] → Cliente
```

Esto da la estructura para el mapeo detallado.

## Paso 2: Recoger Datos en Gemba

### Ir al Gemba
El equipo camina cada paso del proceso, desde el inicio hasta el fin.

### Datos a Recoger en Cada Proceso

| Dato | Descripción | Ejemplo |
|------|-------------|---------|
| Tiempo de ciclo (CT) | Tiempo en completar una unidad | 45 seg |
| Tiempo de cambio (C/O) | Tiempo en cambiar de producto | 30 min |
| Disponibilidad (Avail) | % del tiempo que opera | 85% |
| Uptime | % del tiempo sin averías | 90% |
| Número de operadores | Personas en el proceso | 2 |
| Lote de procesamiento | Cantidad por lote | 100 uds |
| Inventario entre procesos | Stock entre este y el siguiente | 4,800 uds (2 días) |

### Datos de Información
- ¿Cómo se planifica la producción?
- ¿Cómo se comunica entre procesos?
- ¿Qué sistema se usa (MRP, ERP, Excel)?
- Frecuencia de planificación

### Datos de Entrega
- Frecuencia de entrega al cliente
- Cantidad por entrega
- Transporte utilizado

## Paso 3: Dibujar Estado Actual

### Flujo de Materiales (Parte Inferior)

Dibujar cada proceso con sus datos:

```
┌──────────────────────────────────────────────────────────────┐
│                    ESTADO ACTUAL                              │
│                                                              │
│   PROVEEDOR ────────────────────────────────→ CLIENTE        │
│                                                              │
│  [Recepción]    [Corte]     [Soldadura]   [Ensamble]        │
│  CT: 30s        CT: 45s     CT: 60s       CT: 35s           │
│  C/O: 0         C/O: 15m    C/O: 45m      C/O: 10m          │
│  Avail: 100%    Avail: 90%  Avail: 85%    Avail: 95%        │
│  Op: 1          Op: 2       Op: 3          Op: 2             │
│                                                              │
│     ──→  ▒▒▒▒  ──→  ▒▒▒▒  ──→  ▒▒▒▒  ──→                   │
│          4,800       2,400       3,200                       │
│          (2 días)    (1 día)     (1.3 días)                  │
└──────────────────────────────────────────────────────────────┘
```

### Timeline (Parte Inferior)

Agregar una línea de tiempo que muestre:
- **Tiempo de valor agregado (VA):** Tiempo que el producto se transforma
- **Tiempo de no valor agregado (NVA):** Espera, inventario, transporte

```
Timeline:
VA:    ▓▓  ▓▓▓  ▓▓▓▓▓  ▓▓  = 170 segundos total
NVA:   ░░░░░░░░░░░░░░░░░░░░░  = 3.3 días (inventario)

Lead Time Total: 3.3 días
Value-Added Time: 170 segundos
Efficiency: 0.6%
```

## Paso 4: Identificar Desperdicios

Marcar en el mapa los [[03-Desperdicios|desperdicios]] encontrados:
- Inventario excesivo entre procesos
- Tiempos de espera largos
- Transporte innecesario
- Pasos que no agregan valor
- Overprocessing

## Paso 5: Diseñar Estado Futuro

### Preguntas Guía
1. ¿Dónde se puede implementar [[05-flujo-continuo|flujo continuo]]?
2. ¿Dónde se necesita [[09-kanban|Kanban]] (procesos discretos)?
3. ¿Cuál es el [[14-takt-time|Takt Time]]?
4. ¿Dónde hay [[04-analisis-de-cuellos-de-botella|cuellos de botella]]?
5. ¿Qué inventarios se pueden reducir?

### Elementos del Estado Futuro

```
┌──────────────────────────────────────────────────────────────┐
│                    ESTADO FUTURO                              │
│                                                              │
│   PROVEEDOR ════════════════════════════════════→ CLIENTE    │
│         (Kanban de replenishment)                             │
│                                                              │
│  [Corte] ═══→ [Soldadura] ═══→ [Ensamble] ═══→ [Empaque]    │
│  Flujo        Flujo Continuo  Flujo Continuo                 │
│  Continuo                                            │      │
│                                                      ▼      │
│                                                  [Supermercado]
│                                                  (Kanban)    │
│                                                              │
│  Tiempo de ciclo total: 140 segundos                        │
│  Lead Time: 0.5 días (reducido de 3.3)                     │
└──────────────────────────────────────────────────────────────┘
```

### Compara de Estados

| Métrica | Estado Actual | Estado Futuro | Mejora |
|---------|--------------|---------------|--------|
| Lead Time | 3.3 días | 0.5 días | -85% |
| Inventario | 10,400 uds | 2,000 uds | -81% |
| Value-Added Time | 170 seg | 140 seg | -18% |
| Personas | 8 | 7 | -12% |

## Paso 6: Plan de Implementación

### Priorizar Acciones
1. Identificar las acciones de mayor impacto
2. Estimar esfuerzo y recursos
3. Crear un cronograma usando [[10-pdca|PDCA]]
4. Asignar responsables

### Cronograma Tipo

| Semana | Acción | Responsable |
|--------|--------|-------------|
| 1-2 | Implementar flujo continuo Corte→Soldadura | [Nombre] |
| 3-4 | Instalar Kanban en Supermercado | [Nombre] |
| 5-6 | Reducir inventario en proceso | [Nombre] |
| 7-8 | Medir resultados y ajustar | [Nombre] |

## Paso 7: Seguimiento

- Medir resultados vs plan cada semana
- Ajustar el plan con [[10-pdca|PDCA]]
- Actualizar el VSM cuando el proceso cambie
- Compartir resultados con la organización

## Errores Comunes

| Error | Consecuencia | Solución |
|-------|-------------|----------|
| Mapear desde la oficina | Datos inexactos | Siempre ir al Gemba |
| Mapear solo un proceso | Se pierde el flujo completo | Mapear de proveedor a cliente |
| No incluir datos de tiempo | No se puede comparar | Medir CT, C/O, Avail siempre |
| No involucrar al equipo | Falta conocimiento real | Incluir operadores del proceso |
| No priorizar acciones | El estado futuro se queda en papel | Crear plan de implementación |

## Notas Relacionadas

- [[17-vsm]] — Conceptos de Value Stream Mapping
- [[05-flujo-continuo]] — Objetivo del estado futuro
- [[06-gemba]] — Fuente de datos reales
- [[10-pdca]] — Ciclo para implementar el estado futuro
- [[04-analisis-de-cuellos-de-botella]] — Qué revela el VSM
- [[09-kanban]] — Elemento del estado futuro
- [[14-takt-time]] — Dato clave para el diseño del estado futuro
- [[07-heijunka]] — Componente del estado futuro
