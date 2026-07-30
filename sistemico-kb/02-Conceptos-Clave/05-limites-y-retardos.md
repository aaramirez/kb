---
title: Límites y Retardos
tags:
  - sistemico/conceptos
  - type/concepto
source: Meadows (2008), Sterman (2000), Dörner (1996)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Limits
  - Delays
---

# Límites y Retardos

## Límites

Todo sistema opera dentro de límites. Los límites pueden ser físicos (recursos finitos), estructurales (capacidad), o sociales (aceptación).

> "El crecimiento no es ilimitado. Los sistemas tienen límites. Ignorarlos no los hace desaparecer." — Donella Meadows

### Tipos de Límites
| Tipo | Ejemplo |
|------|---------|
| **Físico** | Materias primas, energía, espacio |
| **Informacional** | Capacidad de procesar datos |
| **Cognitivo** | Capacidad de atención humana |
| **Estructural** | Throughput de un pipeline |
| **Social** | Confianza, cultura, regulación |

El arquetipo de [[02-Conceptos-Clave/02-arquetipos-sistemicos|límites del crecimiento]] describe cómo el crecimiento inicial se frena al encontrar uno o más límites.

## Retardos (Delays)

Los retardos son el **tiempo entre una acción y su efecto** en el sistema. Son una de las causas más comunes de comportamiento contra-intuitivo.

> "Los retardos son los responsables de que intervenciones bien intencionadas produzcan desastres." — Dietrich Dörner

### Problemas Causados por Retardos

1. **Overshoot** — Se sigue invirtiendo después de que el efecto debería haber llegado
2. **Oscilación** — El sistema sobrecorrige porque no recibe feedback a tiempo
3. **Colapso** — Se cruza un umbral irreversible antes de que el feedback llegue

### Ejemplo Clásico: Ciclo de Contratación

```
  Contratar → 3 meses (retardo) → Persona productiva
                                 → Equipo ya necesitó la capacidad hace 2 meses
                                 → Sobrecontrata → Luego tiene exceso de personal
```

### Cómo Manejar Retardos
1. **Acortarlos** — Mejorar flujo de información y procesos
2. **Anticiparlos** — Modelar el delay y actuar antes
3. **Reducir la ganancia** — No reaccionar con toda la potencia hasta ver el efecto

## La Trampa de la Evidencia

Dörner demostró experimentalmente que los humanos **sobre-reaccionamos a problemas agudos** (visibles ahora) e **ignoramos problemas crónicos** (cuyo efecto llega con retardo). Esto explica por qué:

- Se atienden bugs urgentes y se ignora deuda técnica
- Se apagan incendios y se descuida la prevención
- Se optimiza el trimestre y se sacrifica el año

## Conexión con IA

| Concepto | Ejemplo en IA |
|----------|---------------|
| **Límite** | Ventana de contexto, capacidad de razonamiento, datos de entrenamiento |
| **Retardo** | Feedback de usuarios puede tardar días en llegar al modelo |
| **Overshoot** | Entrenar de más → overfitting |
| **Cognitivo** | Capacidad del humano para revisar outputs de IA |
| **Oscilación** | Modelo que sobrecorrige tras un update de seguridad |

En [[07-Pensamiento-Sistemico-y-IA/01-feedback-loops-en-ml|bucles de feedback en ML]], los retardos en la detección de drift o sesgo pueden causar degradación silenciosa del modelo.

## Referencias

- Meadows, D. (2008). *Thinking in Systems.*
- Sterman, J. (2000). *Business Dynamics.*
- Dörner, D. (1996). *The Logic of Failure.*
- Forrester, J. (1971). *Counterintuitive Behavior of Social Systems.*
