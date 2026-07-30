---
title: Redes y Conectividad
tags:
  - sistemico/complejidad
  - type/concepto
source: Barabási (2002), Watts (2003)
created: 2026-07-29
updated: 2026-07-29
aliases:
  - Network Science
  - Graph Theory
  - Small World
  - Scale-Free
---

# Redes y Conectividad

La ciencia de redes (network science) estudia cómo la **estructura de las conexiones** determina el comportamiento de los sistemas. Es la anatomía de la complejidad.

## Elementos

```
Nodos (vértices) ──── Enlaces (aristas)
    ● ──────────── ●
     ╲             ╱
      ● ────────── ●
```

- **Nodo**: Elemento del sistema (persona, neurona, servidor)
- **Enlace**: Relación entre nodos (amistad, sinapsis, conexión de red)
- **Grado**: Número de conexiones de un nodo

## Patrones de Red

### Red Aleatoria (Erdős–Rényi)
```
●──●──●──●
╲  ╱╲  ╱
 ●──●──●
```
Conexiones al azar. Distribución de grados: Poisson.

### Red Small-World (Watts-Strogatz)
```
●══●══●══●══●══●
╱  ╲          ╱╲
●══●══●══●══●══●
```
Alta agrupación local + caminos cortos globales. Como las redes sociales reales.

### Red Scale-Free (Barabási–Albert)
```
     ●
     │
●────●────●────●
     │    │
     ●    ●
```
Pocos hubs con muchas conexiones, muchos nodos con pocas. Distribución: ley de potencia.

## Propiedades Clave

| Propiedad | Descripción | Implicación |
|-----------|-------------|-------------|
| **Small-world** | 6 grados de separación | La información viaja rápido |
| **Hubs** | Pocos nodos concentran conexiones | Vulnerabilidad: atacar hubs colapsa la red |
| **Agrupamiento** | Los vecinos de un nodo se conocen | Comunidades, cámaras de eco |
| **Resiliencia** | Las scale-free resisten fallos aleatorios | Robustas ante error, frágiles ante ataque |

## Leyes de Potencia en Redes

En redes scale-free, la probabilidad de que un nodo tenga grado k sigue:

P(k) ~ k^(-γ)

Esto significa: **muchos nodos con pocas conexiones, pocos hubs con muchas**. Es la misma distribución de Pareto (80/20).

## Conexión con IA

Las redes son el sustrato de los sistemas de IA modernos:

| Concepto de Red | En IA |
|-----------------|-------|
| **Red scale-free** | Modelos fundacionales como hubs, modelos especializados como nodos periféricos |
| **Small-world** | Sistemas multi-agente con agentes especializados que se comunican |
| **Hubs** | Agentes orquestadores que concentran flujo de información |
| **Resiliencia** | Robustez: si un agente falla, el sistema sigue funcionando |
| **Agrupamiento** | Equipos de agentes que colaboran en dominios específicos |
| **Ley de potencia** | Distribución de uso de herramientas/funciones por agentes |

En [[07-Pensamiento-Sistemico-y-IA/02-sistemas-multi-agente|sistemas multi-agente]], la topología de la red (cómo se conectan los agentes) determina propiedades como velocidad, resiliencia y calidad del output.

## Referencias

- Barabási, A-L. (2002). *Linked: The New Science of Networks.* Perseus.
- Watts, D. (2003). *Six Degrees: The Science of a Connected Age.* Norton.
- Newman, M. (2010). *Networks: An Introduction.* Oxford.
- Watts, D. & Strogatz, S. (1998). "Collective dynamics of 'small-world' networks." *Nature.*
- Barabási, A-L. & Albert, R. (1999). "Emergence of scaling in random networks." *Science.*
