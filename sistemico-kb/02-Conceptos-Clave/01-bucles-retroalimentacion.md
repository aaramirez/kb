---
title: Bucles de Retroalimentación
tags:
  - sistemico/conceptos
  - type/concepto
source: Meadows (2008), Senge (1990), Wiener (1948)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Feedback Loops
  - Bucles Causales
---

# Bucles de Retroalimentación

Los bucles de retroalimentación (feedback loops) son el **mecanismo fundamental** del comportamiento sistémico. Un bucle existe cuando una variable se influye a sí misma a través de una cadena de relaciones causales.

> "Los bucles de retroalimentación son la forma en que el sistema se 'habla a sí mismo'." — Donella Meadows

## Dos Tipos Fundamentales

### Bucle Reforzador (R)
Amplifica una dirección de cambio. Genera crecimiento o colapso **exponencial**.

```
    ┌──────────┐
    │ Inversión │
    └─────┬────┘
          │ (+)
          v
    ┌──────────┐
    │ Ingresos │──(+)──> Inversión
    └──────────┘
```

**Ejemplos:**
- Crecimiento de bacterias
- Viralización de contenido
- Data flywheel en plataformas digitales
- Pánico bancario (retiros → quiebra → más retiros)

### Bucle Balanceador (B)
Contrarresta desviaciones para mantener un objetivo o equilibrio.

```
   ┌──────────┐
   │ Objetivo │
   └─────┬────┘
         │
         v
    ┌─────────┐       ┌──────────┐
    │  Gap    │──(+)──>│  Acción  │──(−)──> Estado actual
    └─────────┘       └──────────┘
```

**Ejemplos:**
- Termostato (temperatura → calefacción → temperatura)
- Homeostasis del cuerpo
- Control de calidad
- Oferta y demanda

## Cómo Detectarlos

| Pregunta | Bucle Reforzador | Bucle Balanceador |
|----------|-----------------|-------------------|
| ¿Crece o se acelera? | Sí | No |
| ¿Se estabiliza? | No | Sí |
| Si graficamos, ¿forma S? | No (exponencial) | Sí (curva de aprendizaje) |
| ¿Hay un objetivo? | No | Sí |

## Cadenas de Bucles

En sistemas reales, los bucles no existen aislados. Un sistema está compuesto por **redes de bucles** que interactúan:

```
    ┌──────────────────┐
    │ Crecimiento (R)  │──(limita)──>│ Saturación (B) │
    └──────────────────┘             └─────────────────┘
```

El arquetipo [[02-Conceptos-Clave/02-arquetipos-sistemicos|límites del crecimiento]] es exactamente esto: un bucle reforzador choca con un balanceador que frena el sistema.

## Conexión con IA

En [[07-Pensamiento-Sistemico-y-IA/01-feedback-loops-en-ml|Machine Learning]]:
- **Data flywheel** (R): más usuarios → más datos → mejor modelo → más usuarios
- **Drift por feedback** (R): un modelo que recomienda contenido genera sesgo que se realimenta
- **RLHF** (B): se usa retroalimentación humana para alinear el modelo, actuando como balanceador
- **Exploration vs. Exploitation**: tensión entre bucle reforzador (explotar) y balanceador (explorar)

Los modelos de lenguaje grandes (LLMs) son sistemas con bucles internos complejos: autoregresión (cada token predice el siguiente) es un bucle reforzador que puede derivar en loops o alucinaciones si no hay mecanismos balanceadores.

## Referencias

- Meadows, D. (2008). *Thinking in Systems.*
- Senge, P. (1990). *The Fifth Discipline.*
- Wiener, N. (1948). *Cybernetics.*
- Sterman, J. (2000). *Business Dynamics.*
