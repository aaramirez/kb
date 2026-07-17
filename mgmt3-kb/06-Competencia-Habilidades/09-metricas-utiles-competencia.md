---
title: "Métricas Útiles de Competencia"
tags:
  - mgmt3/competencia
  - type/concepto
created: 2026-07-16
updated: 2026-07-16
category: "Competencia y Habilidades"
aliases:
  - "Competence metrics"
  - "Skill metrics"
  - "Medición de competencia"
related:
  - "[[03-matrices-competencia]]"
  - "[[07-evaluacion-de-habilidades]]"
  - "[[02-sub-optimizacion]]"
---

# Métricas Útiles de Competencia

## El problema de las métricas de competencia

Medir la competencia de un equipo es inherentemente difícil. Las métricas fáciles de medir (número de certificaciones, horas de capacitación, líneas de código) casi nunca capturan lo que realmente importa. Las métricas que importan (capacidad de entregar valor, resiliencia del equipo, velocidad de aprendizaje) son más difíciles de cuantificar pero infinitamente más útiles.

## Métricas que SÍ importan

### 1. Velocity de aprendizaje

¿Qué tan rápido el equipo adquiere nuevas habilidades cuando las necesita? No se mide en certificaciones obtenidas sino en: "Cuando apareció la necesidad de usar Redis, ¿cuánto tiempo tomó que al menos dos personas del equipo pudieran usarlo de forma productiva?"

**Cómo medirla:** registrar cuándo surge una nueva necesidad de habilidad y cuándo el equipo la alcanza a nivel competente. Tendencia a la baja = equipo que aprende más rápido = buena señal.

### 2. Cobertura de habilidades (skill coverage)

Porcentaje de habilidades críticas que están cubiertas por al menos dos personas con nivel competente o superior. Si una habilidad crítica solo tiene un experto, la cobertura es del 0% para esa habilidad (porque el risk no está mitigado).

**Fórmula simplificada:**
```
Skill Coverage = (Habilidades con ≥2 personas nivel competente) / (Total de habilidades críticas) × 100
```

**Objetivo:** 80% o más de cobertura en habilidades críticas. Las habilidades no críticas pueden tener cobertura más baja.

### 3. Bus factor de habilidades

Extensión del concepto de "bus factor" (si una persona desaparece, ¿cuánto conocimiento se pierde?) aplicado a cada habilidad. Un bus factor de 1 en una habilidad crítica es un riesgo inaceptable.

**Cómo usarlo:** Identificar habilidades con bus factor = 1 y priorizar cross-training en esas áreas.

### 4. Time-to-competence

Cuánto tiempo tarda un nuevo miembro del equipo en alcanzar nivel competente en las habilidades necesarias para su rol. Un tiempo menor indica que el equipo tiene buenas prácticas de onboarding y mentoring.

### 5. Distribución de conocimiento

Qué tan equitativamente está distribuido el conocimiento entre los miembros del equipo. Un equipo donde una persona tiene el 80% del conocimiento crítico es frágil, sin importar cuán competente sea esa persona.

**Cómo medirla:** Usar el coeficiente de Gini o un índice similar sobre la matriz de competencia. Más bajo = más distribuido = más resiliente.

### 6. Aplicación de habilidades

¿Las habilidades que el equipo tiene se están usando? Si el equipo tiene 3 expertos en testing pero se lanzan features sin tests, la competencia existe pero no se aplica. La métrica clave es: ¿las habilidades disponibles se traducen en calidad del output?

## Métricas que NO sirven (vanidad metrics)

### ❌ Número de horas de capacitación
Una persona puede sentarse 40 horas en un curso y no aprender nada. Las horas invertidas no garantizan competencia adquirida.

### ❌ Número de certificaciones
Una certificación indica que alguien pasó un examen, no que puede aplicar el conocimiento en contexto real. Útil como indicador auxiliar, nunca como métrica principal.

### ❌ Líneas de código por persona
Mide actividad, no competencia. Una persona que escribe menos líneas pero más elegantes y mantenibles es más competente que una que genera miles de líneas spaghetti.

### ❌ Número de bugs encontrados por QA
Incentiva la cantidad sobre la calidad. Un QA que encuentra 100 bugs triviales no es necesariamente más competente que uno que previene 10 bugs críticos.

### ❌ Velocidad del equipo como proxy de competencia
La velocidad (story points por sprint) es una métrica de output, no de competencia. Un equipo puede ser veloz pero incompetente en calidad, mantenibilidad o diseño.

## Cómo implementar métricas de competencia

### 1. Elegir pocas métricas
No más de 3-4 métricas de competencia. Más que eso crea complejidad administrativa que distrae del trabajo real.

### 2. Hacerlas visibles
Publicar las métricas en un dashboard visible para todo el equipo. La transparencia genera conversaciones y acciones.

### 3. Revisarlas en retrospectivas
Cada retrospective, dedicar 10 minutos a revisar las métricas de competencia. ¿Mejoraron? ¿Empeoraron? ¿Por qué?

### 4. Usarlas para decidir, no para juzgar
Las métricas de competencia son inputs para decisiones de inversión en capacitación, no para evaluar personas. Si el bus factor de una habilidad es 1, la métrica dice "invierte en cross-training", no "contrata a alguien mejor".

## El balance

Management 3.0 recomienda combinar métricas de competencia con métricas de resultado (lead time, quality, customer satisfaction). Una organización con alta competencia pero bajo impacto tiene un problema de dirección, no de habilidades. Una organización con bajo impacto y baja competencia tiene un problema de inversión. Las métricas de competencia solo tienen sentido en el contexto del valor que el equipo entrega.
