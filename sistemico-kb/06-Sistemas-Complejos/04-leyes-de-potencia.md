---
title: Leyes de Potencia y Criticalidad Auto-Organizada
tags:
  - sistemico/complejidad
  - type/concepto
source: Bak (1996), Taleb (2007)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Power Laws
  - Criticalidad
  - Self-Organized Criticality
  - Pareto
---

# Leyes de Potencia y Criticalidad Auto-Organizada

## Leyes de Potencia

Mientras los sistemas simples siguen distribuciones **normales** (campana de Gauss), los sistemas complejos siguen **leyes de potencia**: eventos pequeños son comunes, eventos extremos son raros pero no imposibles.

### Distribución Normal
```
     ╱╲
    ╱  ╲
   ╱    ╲
  ╱      ╲
─────────────
Eventos extremos: prácticamente imposibles
```

### Distribución de Ley de Potencia
```
╲
 ╲
  ╲
   ╲
    ╲
─────────────
Eventos extremos: raros pero esperables
```

### Ejemplos
| Fenómeno | Distribución |
|----------|-------------|
| Altura humana | Normal |
| Ingresos | Ley de potencia (Pareto 80/20) |
| Tamaño de terremotos | Ley de potencia (Gutenberg-Richter) |
| Popularidad de webs | Ley de potencia |
| Tamaño de ciudades | Ley de potencia |
| Rendimiento de modelos de IA | ¿Ley de potencia? (debate abierto) |

## Criticalidad Auto-Organizada

Propuesta por Per Bak (1996): ciertos sistemas complejos **evolucionan naturalmente hacia un estado crítico** donde una pequeña perturbación puede causar un evento de cualquier tamaño.

> "Los sistemas complejos se organizan espontáneamente hacia el punto crítico donde ocurren las avalanchas de todos los tamaños." — Per Bak

### El Montón de Arena
El ejemplo clásico: al añadir granos de arena uno a uno, el montón forma una pendiente crítica. El siguiente grano puede causar una avalancha pequeña (unos pocos granos) o enorme (todo el montón). No hay forma de predecir el tamaño.

## Implicaciones

1. **Eventos extremos son inevitables** en sistemas complejos
2. **No confundir lo normal con lo Gaussiano** —los sistemas complejos no siguen la campana
3. **Resiliencia > precisión**: diseñar para sobrevivir a lo impredecible

## Conexión con IA

| Concepto | En IA |
|----------|-------|
| **Ley de potencia** | Distribución de uso de modelos, popularidad de prompts, tamaño de datasets |
| **Criticalidad** | Punto donde un modelo pequeño escala a capacidades emergentes |
| **Eventos extremos** | Alucinaciones graves, jailbreaks, fallos catastróficos |
| **Resiliencia** | Diseñar sistemas que manejen el caso extremo |
| **Pareto** | 80% del valor viene de 20% de las features |

La criticalidad auto-organizada sugiere que los sistemas de IA pueden tender naturalmente a estados críticos donde el comportamiento es imposible de predecir completamente —una advertencia para el [[07-Pensamiento-Sistemico-y-IA/05-alineamiento-y-gobernanza-sistemica|alineamiento]].

## Referencias

- Bak, P. (1996). *How Nature Works: The Science of Self-Organized Criticality.* Copernicus.
- Taleb, N. (2007). *The Black Swan.* Random House.
- Taleb, N. (2012). *Antifragile.* Random House.
- Newman, M. (2005). "Power laws, Pareto distributions and Zipf's law." *Contemporary Physics.*
