---
title: JIT vs Jidoka - Comparativa
tags:
  - lean/pilares
  - type/comparativa
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Pilares
aliases:
  - JIT vs Jidoka
  - Comparativa JIT Jidoka
---

# JIT vs Jidoka - Comparativa

**Just-in-Time** y **Jidoka** son los dos pilares técnicos del [[01-Fundamentos/01-que-es-lean|Sistema de Producción Toyota (TPS)]]. Aunque son complementarios, cada uno tiene un enfoque distinto. Esta nota compara ambos para entender sus diferencias, similitudes y cómo se refuerzan.

## Comparación Lado a Lado

| Aspecto | JIT | Jidoka |
|---------|-----|--------|
| **Enfoque principal** | Flujo de materiales | Calidad del producto |
| **Pregunta clave** | ¿Cuándo producir? | ¿Cómo producir bien? |
| **Mecanismo** | Pull system, Takt Time | Stop-and-fix, Andon |
| **Herramientas** | [[04-Herramientas/09-kanban\|Kanban]], [[04-Herramientas/07-heijunka\|Takt Time]], [[04-Herramientas/07-heijunka\|Heijunka]] | [[04-Herramientas/11-poka-yoke\|Poka-Yoke]], [[04-Herramientas/02-andon\|Andon]], 5 Por Qué |
| **Variable que reduce** | Inventario, tiempo de espera | Defectos, retrabajo |
| **Resultado** | Entrega rápida y eficiente | Calidad consistente |
| **Riesgo sin el otro** | Producción de defectos a gran escala | Inventario excesivo y baja productividad |

## JIT se Enfoca en el Flujo

JIT responde a la pregunta: **¿cómo mover el producto desde la materia prima hasta el cliente sin desperdicio ni espera?**

- Implementa **Continuous Flow** (flujo continuo) para procesar uno a uno
- Usa [[04-Herramientas/09-kanban|Kanban]] como señal de tirón
- Calcula [[04-Herramientas/07-heijunka|Takt Time]] para sincronizar con la demanda
- [[04-Herramientas/07-heijunka|Heijunka]] suaviza las fluctuaciones

El resultado es un sistema que **responde ágilmente** a lo que el cliente necesita, sin acumular inventario innecesario.

## Jidoka se Enfoca en la Calidad

Jidoka responde a la pregunta: **¿cómo asegurar que cada producto que fluye esté bien hecho?**

- Implementa **stop-and-fix**: detener la línea ante la primera anomalía
- Usa [[04-Herramientas/02-andon|Andon]] como sistema de señales visuales
- Aplica [[04-Herramientas/11-poka-yoke|Poka-Yoke]] para prevenir errores
- Busca la **causa raíz** con 5 Por Qué antes de reiniciar

El resultado es un sistema donde **los defectos no se propagan** porque se interceptan al instante.

## Cómo se Complementan

JIT y Jidoka no compiten; se necesitan mutuamente:

**JIT sin Jidoka**: Si producimos en flujo continuo pero no detectamos defectos, un problema de calidad se propaga por toda la cadena rápidamente. El inventario es bajo, pero la calidad es pobre.

**Jidoka sin JIT**: Si detectamos y corregimos todos los defectos pero producimos en lotes grandes con inventario excesivo, la corrección llega tarde y el costo es alto.

**JIT + Jidoka**: Flujo continuo que mueve solo productos de calidad. Los problemas se detectan y resuelven antes de que se propaguen. La calidad y la eficiencia se refuerzan mutuamente.

```
JIT (Flujo) ←────→ Jidoka (Calidad)
     │                    │
     └──── Se necesitan ───┘
```

## Cuándo Enfatizar Cada Uno

| Situación | Enfoque recomendado |
|-----------|-------------------|
| Alto inventario y tiempos de entrega largos | Enfatizar [[02-Pilares/01-just-in-time\|JIT]] |
| Alta tasa de defectos y retrabajo | Enfatizar [[02-Pilares/02-jidoka\|Jidoka]] |
| Demanda fluctuante | JIT + [[04-Herramientas/07-heijunka\|Heijunka]] |
| Procesos nuevos sin estandarizar | Jidoka + [[04-Herramientas/06-trabajo-estandarizado\|Trabajo Estandarizado]] |
| Cultura de miedo al error | [[02-Pilares/04-respeto-por-las-personas\|Respeto]] primero, luego Jidoka |
| Organización madura en Lean | Equilibrio entre ambos pilares |

## El Tercer Pilar: Respeto

Ninguno de los dos pilares funciona sin [[02-Pilares/04-respeto-por-las-personas|Respeto por las Personas]]. JIT requiere personas comprometidas con el flujo. Jidoka requiere personas que se sientan seguras para detener la línea. Sin confianza y desarrollo, ambos pilares colapsan.

Ver [[02-Pilares/06-modelo-tres-pilares|Modelo de Tres Pilares]] para una visión integral.

## Notas Relacionadas

- [[02-Pilares/01-just-in-time|Just-in-Time]] — Pilar de flujo
- [[02-Pilares/02-jidoka|Jidoka]] — Pilar de calidad
- [[02-Pilares/04-respeto-por-las-personas|Respeto por las Personas]] — Pilar humano
- [[02-Pilares/05-casa-del-lean|La Casa del Lean]] — Representación visual del sistema
- [[02-Pilares/06-modelo-tres-pilares|Modelo de Tres Pilares]] — Evolución del modelo
- [[04-Herramientas/09-kanban|Kanban]] — Herramienta clave de JIT
- [[04-Herramientas/11-poka-yoke|Poka-Yoke]] — Herramienta clave de Jidoka
