---
title: "Sub-optimización"
tags:
  - mgmt3/competencia
  - type/concepto
created: 2026-07-16
updated: 2026-07-16
category: "Competencia y Habilidades"
aliases:
  - "Sub-optimization"
  - "局部最优"
  - "Local optimization"
related:
  - "[[01-siete-enfoques-competencia]]"
  - "[[03-matrices-competencia]]"
  - "[[09-metricas-utiles-competencia]]"
---

# Sub-optimización

## Definición

La sub-optimización ocurre cuando se optimiza un componente del sistema de forma aislada, mejorando su rendimiento local pero degradando el rendimiento del sistema en su conjunto. En el contexto de competencia y habilidades, esto significa invertir enormemente en desarrollar habilidades que no contribuyen al valor que el equipo necesita entregar.

## Cómo se manifiesta en competencia

**Especialización excesiva:** Un equipo donde todos son expertos en una única tecnología pero nadie puede cubrir roles complementarios. Cada persona es excelente de forma individual, pero el equipo es frágil porque cualquier ausencia crea un vacío crítico.

**Habilidades no alineadas con el valor:** Un equipo que invierte meses en certificaciones de una plataforma que la organización planea abandonar. La competencia individual creció, pero el sistema no se benefició.

**Optimización de métricas locales:** Un equipo de QA que mide su eficiencia por el número de bugs reportados y genera cientos de issues triviales para inflar la métrica, mientras el equipo de desarrollo pierde tiempo en false positives y el time-to-market se dispara.

## Ejemplos concretos

| Situación | Optimización local | Impacto en el sistema |
|-----------|-------------------|----------------------|
| Un desarrollador se especializa en una librería obsoleta | Se vuelve el más rápido en esa librería | Nadie más puede mantenerlo; se crea dependencia |
| Un equipo de datos optimiza sus pipelines internos | Sus tiempos de ejecución bajan 50% | Los equipos consumidores no reciben datos a tiempo porque la interfaz no cambió |
| Un manager envía a sus mejores personas a capacitación externa | Sus habilidades crecen | El equipo restante se sobrecarga y la productividad global baja |

## Cómo reconocer sub-optimización

1. **Pregunta clave:** "¿Esta inversión en competencia beneficia al sistema completo o solo a un componente?"
2. **Señales de alerta:**
   - Un miembro del equipo es el único que puede hacer X, y nadie más lo aprende
   - Las métricas de un área mejoran consistentemente mientras otras empeoran
   - El equipo es "eficiente" pero el valor entregado al cliente no crece
   - Las decisiones de capacitación se toman por disponibilidad de cursos, no por necesidad del sistema

## Estrategias para evitarla

**Pensamiento sistémico:** Antes de invertir en una habilidad, preguntarse: ¿cómo afecta esto al flujo de valor completo? ¿Mejora la capacidad del equipo para entregar, o solo la de un individuo?

**Matrices de competencia visibles:** Cuando las habilidades se hacen visibles a todo el equipo, es más fácil detectar desequilibrios. Si la matriz muestra que todos son expertos en backend pero nadie sabe frontend, la sub-optimización es evidente.

**Cross-training intencional:** No permitir que la especialización se convierta en aislamiento. Si alguien domina una habilidad, su responsabilidad incluye asegurar que al menos una persona más la alcance nivel competente.

**Métricas de sistema, no de componente:** Medir el tiempo de entrega de valor al cliente (lead time), no la eficiencia de cada paso individual. Cuando se mide el sistema, las decisiones de competencia se alinean con el objetivo real.

## La trampa del "expert"

La sub-optimización más común en equipos técnicos es la idolatría del experto. Cuando un individuo se convierte en el único poseedor de conocimiento crítico, el equipo lo protege, lo sobrecarga y evita que enseñe (porque "nadie lo hace tan bien"). Esto optimiza la velocidad del experto pero crea un riesgo sistémico enorme: si se enferma, se va o simplemente tiene un mal día, todo el sistema se detiene.

Management 3.0 propone que la competencia de equipo siempre debe ser mayor que la suma de las competencias individuales. Un equipo donde cinco personas son "buenas" en una habilidad es más resiliente que uno donde una persona es "excelente" y las demás no saben nada.
