---
title: Diagramas de Bucles Causales — Guía Práctica
tags:
  - sistemico/herramientas
  - type/guia
source: Sterman (2000), Kim (1992)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Causal Loop Diagramming Guide
  - CLD Guide
---

# Diagramas de Bucles Causales — Guía Práctica

Guía paso a paso para construir diagramas de bucles causales (CLD). Para la teoría, ver [[04-System-Dynamics/01-diagramas-bucles-causales]].

## Proceso en 5 Pasos

### Paso 1: Define el Propósito
¿Qué problema o comportamiento quieres entender?

**Bien**: "Entender por qué la deuda técnica sigue creciendo"
**Mal**: "Modelar el departamento de tecnología"

### Paso 2: Identifica Variables Clave
Lista de 5 a 15 variables sustantivadas.

- Deuda técnica acumulada
- Velocity del equipo
- Presión de fechas
- Cobertura de tests
- Tiempo de code review
- Bugs en producción
- Moral del equipo

### Paso 3: Traza las Relaciones

Pregunta por cada par: "Si A aumenta, ¿qué pasa con B?"

```
  Deuda técnica (+) → Bugs en producción
  Deuda técnica (−) → Velocity
  Presión de fechas (+) → Deuda técnica
  Cobertura de tests (−) → Bugs en producción
```

### Paso 4: Identifica los Bucles

```
  Bucle 1 (R): Deuda técnica → (+) Bugs → (−) Velocity → (+) Presión → (+) Deuda técnica
  Bucle 2 (B): Bugs → (+) Tests → (+) Calidad → (−) Bugs
```

### Paso 5: Marca Retardos
Identifica dónde el efecto no es inmediato.

```
  Tests → (+) Calidad (|| retardo: semanas)
  Presión → (+) Deuda técnica (|| retardo: inmediato)
```

## Plantilla de Taller

```
Problema: ________________________________

Variables clave:
1. ________________  2. ________________
3. ________________  4. ________________
5. ________________  6. ________________

✓ ¿Son sustantivos? (no verbos)
✓ ¿Hay 5-15?

Bucles encontrados:
R1: ________________________________ (Reforzador)
B1: ________________________________ (Balanceador)

Retardos críticos:
- ________________ → ________________ (____)
- ________________ → ________________ (____)

Punto de apalancamiento: ________________
```

## Errores Comunes

| Error | Cómo evitarlo |
|-------|--------------|
| Variables-verbo | Usa "Deuda técnica", no "Acumular deuda" |
| Demasiadas variables | Prioriza, usa 5-15 |
| Bucle sin signo | Siempre etiqueta (+)/(-) |
| Ignorar el propósito | Vuelve al Paso 1 |
| Querer un CLD perfecto | Es una herramienta de diálogo, no un modelo exacto |

## Referencias

- Sterman, J. (2000). *Business Dynamics.*
- Kim, D. (1992). *Systems Archetypes: Diagnosing Systemic Issues.*
- Meadows, D. (2008). *Thinking in Systems.*
- Senge, P. et al. (1994). *The Fifth Discipline Fieldbook.*
