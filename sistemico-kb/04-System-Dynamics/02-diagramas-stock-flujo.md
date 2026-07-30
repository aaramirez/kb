---
title: Diagramas Stock & Flow
tags:
  - sistemico/system-dynamics
  - type/herramienta
source: Sterman (2000), Forrester (1961)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Stock and Flow Diagrams
  - Acumulaciones y Flujos
---

# Diagramas Stock & Flow

Los diagramas **Stock & Flow** representan la anatomía cuantitativa de un sistema. Mientras los [[04-System-Dynamics/01-diagramas-bucles-causales|CLDs]] muestran la dirección causal, los Stock & Flow muestran la **matemática** del cambio.

## Elementos

### Stock (Acumulación)
```
┌─────────────────────┐
│      STOCK         │ ← Una acumulación que persiste en el tiempo
│  (nivel, estado)    │
└─────────────────────┘
```
**Ejemplos**: Población, inventario, deuda técnica, confianza del equipo

### Flow (Flujo)
```
─────⊙───→  (tasa de cambio)
```
**Ejemplos**: Nacimientos/s, producción/día, commits/hora

### Convertidor
```
  ┌──────────┐
  │ Variable │ ← Transforma información
  │  Auxiliar│
  └──────────┘
```

### Conector de información
```
 ─ ─ ─ ─ →  (no es flujo, es información)
```

## Ejemplo: Bañera

```
  ┌──────┐
  │ Agua │ ← Stock (agua en la bañera)
  └──────┘
     ↑
  Caño (inflow)     Drenaje (outflow)
  ────⊙──→           ←──⊙────
```

- Stock = agua acumulada
- Inflow = velocidad del caño
- Outflow = velocidad del drenaje
- Comportamiento: Stock(t) = Stock(t-1) + (inflow - outflow) × Δt

## Ejemplo: Modelo de Población

```
                    Nacimientos                  Muertes
                   ────⊙────────→   POBLACIÓN   ←────⊙────
                                   ┌──────────┐
                                   │ Población │
                                   └──────────┘
                                       ↑    ↑
                                  tasa natal   tasa mortal
```

## Reglas de Modelado

| Regla | Explicación |
|-------|-------------|
| **Los stocks solo cambian por flows** | No existe cambio instantáneo |
| **Los flows dependen de stocks** | El tamaño del stock afecta su tasa de cambio |
| **Los retardos requieren stocks** | Un delay se modela con un stock intermedio |
| **Las decisiones usan stocks** | No se decide sobre flows directamente |

## Por qué Importan los Stocks

Los stocks son el **sistema nervioso** de un sistema:

1. **Amortiguan**: Absorben diferencias entre inflow y outflow
2. **Retardan**: Crean la inercia del sistema
3. **Desacoplan**: Separan el flujo de entrada del de salida
4. **Miden historia**: El stock es la memoria del sistema

> "Los stocks son los elementos que dan inercia y memoria a los sistemas. Sin stocks, no hay historia." — Donella Meadows

## Conexión con IA

En sistemas de IA, los stocks y flows se manifiestan directamente:

| Concepto | Stock | Inflow | Outflow |
|----------|-------|--------|---------|
| Datos | Dataset acumulado | Datos nuevos/día | Datos expirados |
| Modelo | Parámetros del modelo | Tokens de entrenamiento | Tokens de inferencia |
| Memoria | Contexto disponible | Nueva información | Atención olvidada |
| Deuda técnica | Bugs abiertos | Bugs reportados/h | Bugs resueltos/h |

En [[07-Pensamiento-Sistemico-y-IA/05-agentes-como-sistemas-autonomos|agentes autónomos]], la memoria del agente es un stock: se acumula con cada interacción, se depura con ventanas de contexto, y determina el comportamiento futuro.

## Referencias

- Sterman, J. (2000). *Business Dynamics.* McGraw-Hill.
- Forrester, J. (1961). *Industrial Dynamics.* MIT Press.
- Meadows, D. (2008). *Thinking in Systems.*
