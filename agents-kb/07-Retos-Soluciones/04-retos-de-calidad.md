---
title: "Retos de Calidad"
tags:
  - agents/retos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Retos"
aliases:
  - "Quality Challenges"
  - "Accuracy"
related:
  - "[[02-retos-tecnicos]]"
  - "[[07-soluciones-comprobadas]]"
---

# Retos de Calidad

## Reto 1: Alucinaciones

**Problema**: El agente inventa respuestas que suenan convincentes
**Medición**: % de respuestas con información incorrecta
**Solución**:
- Anclar respuestas en KB verificada
- Instruir al agente para decir "no tengo información"
- Revisión humana para casos críticos

## Reto 2: Inconsistencia

**Problema**: Responde diferente ante la misma pregunta
**Medición**: Varianza en respuestas similares
**Solución**:
- Temperature baja (0.1-0.3)
- Prompts estandarizados
- Few-shot examples

## Reto 3: Sesgos

**Problema**: Respuestas favorecen ciertos grupos o perspectivas
**Medición**: Análisis de equidad en respuestas
**Solución**:
- Diversidad en training data
- Revisión de sesgos regular
- Instrucciones de imparcialidad

## Reto 4: Degradación Temporal

**Problema**: La calidad baja con el tiempo (KB desactualizada)
**Medición**: Tasa de escalamiento creciente
**Solución**:
- Monitoreo de métricas de calidad
- Actualización programada de KB
- Feedback loop continuo

## Métricas de Calidad

| Métrica | Target | Fórmula |
|---------|--------|---------|
| Precisión | > 95% | Respuestas correctas / Total |
| Consistencia | > 90% | Mismas respuestas / Mismas preguntas |
| Cobertura | > 80% | Preguntas respondidas / Total preguntas |
| Satisfacción | > 4.0/5 | Encuesta post-uso |

## Ver también

- [[02-retos-tecnicos|Retos Técnicos]]
- [[07-soluciones-comprobadas|Soluciones]]
- [[02-Metodologia/06-metricas-de-exito|Métricas]]
