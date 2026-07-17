---
title: "Escalabilidad de Equipos"
tags:
  - mgmt3/estructura
  - type/concepto
created: 2026-07-16
updated: 2026-07-16
category: "Estructura Organizacional"
aliases:
  - "Team Scaling"
  - "Scaling Teams"
related:
  - "[[01-topologia-equipos]]"
  - "[[06-equipos-cruzados]]"
  - "[[README]]"
---

# Escalabilidad de Equipos

Escalar una organización no es simplemente agregar más personas a los equipos existentes. Management 3.0 aborda la escalabilidad desde la perspectiva de cómo crecer sin perder agilidad ni calidad.

## La Ley de Brooks

> "Agregar personas a un proyecto retrasado lo hace más retrasado." — Fred Brooks

El overhead de comunicación crece exponencialmente con el tamaño del equipo. Un equipo de 5 personas tiene 10 canales de comunicación; uno de 10 tiene 45.

## La Regla de la Pizza

Un equipo debe ser lo suficientemente pequeño como para ser alimentado con dos pizzas (aproximadamente 5-9 personas). Más allá de ese tamaño, la coordinación se vuelve excesiva.

### ¿Por qué funciona?
- **Menos canales de comunicación**: facilita la sincronización.
- **Mayor responsabilidad individual**: cada miembro tiene un rol claro.
- **Autogestión viable**: un equipo pequeño puede auto-organizarse sin jerarquía interna.
- **Identidad de equipo**: es más fácil construir cohesión en grupos pequeños.

## Patrones de splitting de equipos

### Por funcionalidad
- Un equipo por feature o componente del producto.
- **Ventaja**: claridad de responsabilidad.
- **Riesgo**: puede crear dependencias entre equipos.

### Por usuario
- Un equipo por tipo de usuario o segmento del mercado.
- **Ventaja**: enfoque profundo en las necesidades del usuario.
- **Riesgo**: duplicación de esfuerzo en funcionalidades compartidas.

### Por flujo de valor
- Un equipo por flujo de valor end-to-end.
- **Ventaja**: máxima autonomía y velocidad.
- **Riesgo**: puede requerir mucha gente si hay muchos flujos.

### Por capa técnica
- Un equipo por capa de la arquitectura (frontend, backend, datos).
- **Ventaja**: especialización profunda.
- **Riesgo**: crea silos y dependencias.

## El overhead de comunicación

| Tamaño del equipo | Canales de comunicación | Nivel de overhead |
|-------------------|------------------------|-------------------|
| 3 personas | 3 | Muy bajo |
| 5 personas | 10 | Bajo |
| 7 personas | 21 | Moderado |
| 9 personas | 36 | Alto |
| 12 personas | 66 | Muy alto |

## Estrategias para escalar

1. **Mantén los equipos pequeños**: mejor tener más equipos pequejos que pocos grandes.
2. **Invierte en herramientas de comunicación**: slack, dashboards, documentación automática.
3. **Define interfaces claras**: contratos de servicio entre equipos.
4. **Usa la topología adecuada**: stream-aligned para velocidad, platform para eficiencia.
5. **Monitorea el overhead**: si la coordinación consume más tiempo que el trabajo, necesitas reestructurar.
