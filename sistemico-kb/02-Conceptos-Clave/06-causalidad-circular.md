---
title: Causalidad Circular
tags:
  - sistemico/conceptos
  - type/concepto
source: Senge (1990), Meadows (2008), Capra (1996)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Circular Causality
  - Pensamiento Circular
---

# Causalidad Circular

La **causalidad circular** es el cambio fundamental que el pensamiento sistémico introduce en nuestra forma de entender las relaciones causa-efecto.

## Lineal vs. Circular

### Causalidad Lineal
```
A ───> B ───> C
```
A causa B, B causa C. Simple, intuitiva. Funciona para sistemas simples.

### Causalidad Circular
```
    ┌──────────┐
    │    B     │
    │  ↗  ↖    │
    │ A    C   │
    │  ↖  ↗    │
    │    D     │
    └──────────┘
```
A influye a B, B influye a C, C influye a A. Nadie tiene la culpa. Todos están conectados.

## Implicaciones

| Aspecto | Lineal | Circular |
|---------|--------|----------|
| **Culpa** | Alguien es responsable | El sistema produce el comportamiento |
| **Causa raíz** | Existe una causa última | Las causas son redes de relaciones |
| **Solución** | Arreglar la pieza dañada | Rediseñar las interacciones |
| **Predicción** | A → B siempre | Depende del contexto y los bucles activos |

## Ejemplo Práctico

**Problema**: Baja moral del equipo.

- **Lineal**: El líder es malo. Cambiar al líder.
- **Circular**: La moral baja → menos comunicación → más errores → más presión → moral baja. El líder y el equipo están atrapados en un bucle. La intervención debe romper el patrón, no cambiar la pieza.

> "En un sistema circular, la idea de culpa pierde sentido. No hay causa primera, solo patrones que se auto-refuerzan." — Fritjof Capra

## Cómo Practicar la Causalidad Circular

1. **Busca bucles, no flechas**: Cuando veas A→B, pregúntate "¿B también afecta a A?"
2. **Evita el lenguaje de culpa**: Reemplaza "quién" por "qué interacciones"
3. **Pregunta sistémica**: "¿Qué está generando este comportamiento como producto del sistema, no como falla de una persona?"

## Conexión con IA

La [[07-Pensamiento-Sistemico-y-IA/01-feedback-loops-en-ml|retroalimentación en ML]] es inherentemente circular:
- El modelo afecta las decisiones de los usuarios → los datos que generan → el siguiente modelo
- Un sistema de recomendación que muestra cierto contenido → usuarios consumen ese contenido → el modelo aprende que ese contenido funciona → muestra más

Este bucle circular puede generar **sesgo auto-reforzado** si no se introduce un balanceador.

## Referencias

- Senge, P. (1990). *The Fifth Discipline.*
- Meadows, D. (2008). *Thinking in Systems.*
- Capra, F. (1996). *The Web of Life.*
- Bateson, G. (1972). *Steps to an Ecology of Mind.*
