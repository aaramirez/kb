---
title: Emergencia en LLMs
tags:
  - sistemico/ia
  - type/concepto
source: Wei et al. (2022), Bubeck et al. (2023), Ganguli et al. (2022)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Emergent Abilities
  - Capacidades Emergentes
  - LLM Emergence
---

# Emergencia en LLMs

Los modelos de lenguaje grandes (LLMs) exhiben **capacidades emergentes**: habilidades que no fueron explícitamente entrenadas ni programadas, sino que surgen espontáneamente al escalar el modelo.

## El Fenómeno

A medida que los LLMs aumentan en parámetros y datos, aparecen capacidades que los modelos más pequeños no tienen:

```
  Capacidad
      ▲
      │                       ● (aparece)
      │                   ●
      │              ●
      │         ●
      │    ●
      │ ●
      └──────────────────────────→ Escala (parámetros + datos)
```

> "Estas capacidades no son explícitamente entrenadas —emergen como propiedades del sistema." — Wei et al., 2022

## Capacidades Emergentes Documentadas

| Capacidad | Descripción | Tamaño donde emerge |
|-----------|-------------|-------------------|
| **Chain-of-thought** | Razonamiento paso a paso | ~100B+ parámetros |
| **Instrucción compleja** | Seguir instrucciones con múltiples condiciones | ~70B+ |
| **Traducción zero-shot** | Traducir entre lenguajes no vistos en training | ~175B+ |
| **Razonamiento matemático** | Resolver problemas aritméticos no vistos | ~100B+ |
| **Alineación contextual** | Ajustar comportamiento al contexto sin fine-tuning | ~70B+ |

## Por Qué es Sistémico

La emergencia en LLMs no es un bug —es una propiedad sistémica:

1. **No-linealidad**: Las capacidades no mejoran gradualmente —aparecen en puntos de transición
2. **Auto-organización**: El modelo organiza su conocimiento interno sin supervisión
3. **Irreductibilidad**: No puedes explicar la emergencia mirando solo las neuronas individuales
4. **Sorpresa**: Las capacidades emergentes son imposibles de predecir completamente

Ver [[02-Conceptos-Clave/04-emergencia-y-auto-organizacion]].

## Implicaciones

### Positivas
- Los modelos se vuelven más capaces de forma inesperada
- Se pueden descubrir nuevas aplicaciones no anticipadas
- El escalado produce mejoras cualitativas, no solo cuantitativas

### Riesgos
- Capacidades no deseadas pueden emerger sin control
- Es difícil predecir qué capacidades aparecerán
- La evaluación tradicional se vuelve insuficiente

## Conexión con la KB

- [[02-Conceptos-Clave/04-emergencia-y-auto-organizacion]] — Marco teórico de la emergencia
- [[06-Sistemas-Complejos/01-sistemas-adaptativos-complejos]] — LLM como CAS
- [[06-Sistemas-Complejos/02-teoria-del-caos]] — Transiciones no-lineales
- [[06-Sistemas-Complejos/04-leyes-de-potencia]] — Scaling laws como ley de potencia
- [[07-Pensamiento-Sistemico-y-IA/05-alineamiento-y-gobernanza-sistemica]] — Cómo gobernar lo impredecible

## Referencias

- Wei, J. et al. (2022). "Emergent Abilities of Large Language Models." *TMLR.*
- Bubeck, S. et al. (2023). "Sparks of Artificial General Intelligence." *arXiv.*
- Ganguli, D. et al. (2022). "Predictability and Surprise in Large Generative Models." *FAccT.*
- Kaplan, J. et al. (2020). "Scaling Laws for Neural Language Models." *arXiv.*
