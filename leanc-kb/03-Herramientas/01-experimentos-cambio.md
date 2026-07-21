---
title: "Experimentos de Cambio"
tags:
  - leanchange/herramientas
  - type/herramienta
created: 2026-07-21
updated: 2026-07-21
category: "Herramientas"
difficulty: "Intermedio"
---

# Experimentos de Cambio

## ¿Qué es un Experimento de Cambio?

Un **Experimento de Cambio** es una intervención mínima y deliberada que se diseña para probar una hipótesis sobre cómo funcionará un cambio organizacional antes de comprometer recursos significativos. A diferencia de los enfoques tradicionales de gestión del cambio —que planifican extensamente y luego ejecutan—, los experimentos permiten aprender con iteraciones rápidas.

La referencia a "Experimentos" en lugar de simplemente "cambios" es deliberada. Como señala Jason Little en *Lean Change Management 2.0*:

> "Los cambios que está planeando pueden parecerle simples y directos, pero no siempre lo son para las personas afectadas por el cambio. [...] Llamar 'Experimentos' a los cambios te ayuda a desarrollar un enfoque que hace aceptable no conocer todo de antemano."

Ver también: [[02-canvas-cambio]], [[05-feedback-rapido]]

---

## Por qué Experimentar en vez de Planificar

Los enfoques tradicionales de cambio asumen que se puede crear un plan completo antes de ejecutar. Sin embargo, en la realidad organizacional:

1. **La incertidumbre es alta**: A medida que la complejidad aumenta, la incertidumbre lo hace también.
2. **Los planes se obsoletan rápido**: Un plan basado en una instantánea de percepciones pierde vigencia antes de implementarse.
3. **La resistencia es un síntoma**: Cuando las personas se resisten, puede ser la señal de que se está intentando el cambio equivocado en el momento equivocado.
4. **Las personas necesitan tiempo para procesar**: El equipo de cambio lleva semanas o meses pensando en el cambio; las personas afectadas necesitan tiempo similar para alcanzar ese nivel de comprensión.

Los experimentos permiten obtener feedback rápido y corregir el rumbo antes de gastar demasiado tiempo y energía.

Ver también: [[03-mapa-resistencia]], [[04-entrevistas-estakeholders]]

---

## El Sub-ciclo de Experimentos

Dentro del [[02-canvas-cambio|ciclo de Lean Change Management]], cada experimento tiene su propio sub-ciclo:

### 1. Preparación
- Definir la **hipótesis** que se quiere validar.
- Identificar **quiénes** se verán afectados.
- Establecer las **métricas** de éxito.
- **Validar** el enfoque con las personas afectadas antes de implementarlo.

### 2. Introducción
- Comenzar a trabajar con las personas afectadas por el cambio.
- Una vez introducido, se considera que el cambio está **en proceso**.
- Limitar el número de cambios simultáneos para evitar la fatiga de cambio.

### 3. Revisión
- Revisar las consecuencias del experimento tras un período determinado.
- Decidir entre tres opciones: **Perseverar**, **Pivotear** o **Abandonar**.

Ver también: [[05-feedback-rapido]], [[07-visual-management]]

---

## Creación de Hipótesis

Toda hipótesis de experimento sigue una plantilla estructurada. En La Comisión, esta fue la plantilla que resultó más útil:

> Desarrollamos una hipótesis para **\<implementar este cambio\>**
> Nosotros **\<resolveremos este problema\>**
> Que tendrá **\<estos beneficios\>**
> Que serán medidos por **\<esta medición\>**

### Ejemplo: Informes de Estado

Jason Little propuso eliminar los informes semanales de estado en La Comisión:

> "Mi hipótesis es que al cambiar nuestro Tablero Kanban Empresarial (TKE) a un tablero a nivel de tareas, podemos eliminar los informes semanales de estado que los PM producen actualmente, reduciendo así sus actividades administrativas, lo que ahorrará al Departamento $150K anualmente, medidos por el tiempo que les lleva a 25 PMs generar esos informes."

**Lo que hicieron**: Crearon una réplica visual de un informe de estado dentro del tablero Kanban, dejándolo intencionalmente con un aspecto irregular para obtener feedback rápido. Invitaron al equipo de PMO a evaluarlo, y la respuesta fue positiva.

### Ejemplo: Tablero Kanban Empresarial (TKE)

Otro experimento en La Comisión consistió en dejar de actualizar el tablero masivo de 6 metros de ancho por 2.4 metros de altura:

- **Hipótesis**: Nadie usaría el TKE si no lo consideraban suyo.
- **Acción**: El equipo de QMO dejó de actualizarlo y los datos se volvieron rancios.
- **Resultado**: Dos meses después, un manager dijo: "Ya sabéis, gente, ¡podríamos utilizar esta pared para visualizar nuestro trabajo!"
- **Decisión**: Perseverar — la propiedad del tablero pasó a las personas.

### Ejemplo: "Comenzar en Rojo"

Un experimento propuesto por Andrew Annett en La Comisión:

- **Hipótesis**: Al comienzo del proyecto se tiene el bolsillo lleno de dinero y la cabeza vacía, por lo que el estado debería reflejar la incertidumbre real.
- **Propuesta**: Comenzar todos los proyectos en rojo y avanzar hacia el verde a medida que se gane conocimiento.
- **Resultado**: Se socializó la idea pero nunca se probó formalmente en La Comisión. El CIO se enamoró de la idea, pero Frank (director de PMO) reaccionó con silencio estupefacto.

Ver también: [[08-historias-cambio]]

---

## Los Tres Destinos de un Experimento

Al revisar los resultados de un experimento, el equipo de cambio tiene tres opciones claras:

| Decisión | Significado | Ejemplo |
|----------|-------------|---------|
| **Perseverar** | El cambio funcionó. Seguir haciendo cambios similares. | Un equipo adoptó las prácticas Agile con éxito → ampliar a más equipos. |
| **Pivotear** | Funcionó parcialmente, pero algo requiere adaptación. | La herramienta de automatización gustaba pero era difícil de usar → cambiar de herramienta. |
| **Abandonar** | No es el momento adecuado. Puede reconsiderarse más tarde. | Eliminar los informes de estado generó reacciones violentas → archivar la idea. |

> **Clave**: "Abandonar" no significa fracasar. Significa que aún no es el momento. Las ideas abandonadas pueden revisarse periódicamente cuando cambien las condiciones.

Ver también: [[03-mapa-resistencia]]

---

## Métricas de los Experimentos

### Mediciones Cualitativas
- Comentarios espontáneos de las personas afectadas.
- Observaciones durante el gemba.
- Historias de éxito y aprendizajes.
- Nivel de satisfacción en retrospectivas (escala 0-5 con la mano).

### Mediciones Cuantitativas
- Frecuencia de uso de nuevas prácticas o herramientas.
- Tiempo dedicado a tareas administrativas antes vs. después.
- Número de reuniones de coordinación requeridas.
- Flujo de trabajo (lead time, cycle time).

### Indicadores Proactivos
- Número de personas que voluntariamente se acercan al cambio.
- Asistencia a sesiones de Lean Coffee u otros foros.
- Preguntas recibidas sobre el cambio.

### Indicadores Reactivos
- Quejas o resistencia expresada.
- Retorno a prácticas anteriores.
- Ausencia de participación.

### Reglas para las Métricas

Jason Little enfatiza que las métricas deben evolucionar con el tiempo:

1. **Al principio**: Usar evidencia anecdótica e historias para tomar decisiones.
2. **Conforme avanza**: Refinar las métricas en función de los resultados buscados.
3. **Evitar**: Medir comportamientos de las personas de forma punitiva — genera amenaza y destruye la confianza.
4. **Cambiar**: Las métricas que dejen de ser útiles deben modificarse o eliminarse.

Ver también: [[05-feedback-rapido]], [[07-visual-management]]

---

## Validación Antes de la Implementación

Un error común es validar los experimentos **después** de implementarlos. En Lean Change Management, la validación debe ocurrir **antes**:

### Paso 1: Con el equipo de cambio
1. ¿Cómo sabremos que este experimento ha sido exitoso?
2. ¿Cómo sabremos que nos estamos moviendo hacia nuestro resultado esperado?

### Paso 2: Con las personas afectadas
- Revisar el experimento con las personas que se verán impactadas.
- Observar sus reacciones: si reaccionan violentamente (metafóricamente), el experimento podría ser una mala idea.
- Si simplemente no es el momento correcto, archivar y reintentar más tarde.

> **Aprendizaje de La Comisión**: "La validación de nuestros experimentos sucedía *después* de su introducción. [...] Medir el comportamiento puede ser peligroso. Tan pronto como las personas sienten que están siendo evaluadas, comienzan a sentirse amenazadas."

---

## Buenas Prácticas para Experimentos

### Hacer
- **Empezar pequeño**: Las intervenciones mínimas generan la mínima disrupción.
- **Involucrar a los afectados**: Las personas que vivirán el cambio deben participar en su diseño.
- **Aceptar la incertidumbre**: No saber todo de antemano es aceptable y saludable.
- **Socializar las hipótesis**: Compartir el razonamiento con stakeholders para obtener feedback temprano.
- **Revisar periódicamente**: Establecer un ritmo de revisión (quincenal, mensual).

### No Hacer
- **No medir comportamientos de forma punitiva**: Genera sentimiento de amenaza.
- **No diseñar marcos de 200 páginas**: Los equipos pueden enamorarse de su creación en vez de del impacto.
- **No obviar la validación**: Un experimento sin criterios de éxito predefinidos es solo una suposición.
- **No cambiar demasiadas cosas a la vez**: La fatiga de cambio es real.

---

## Herramientas Relacionadas

| Herramienta | Uso |
|------------|-----|
| [[02-canvas-cambio]] | Plantilla para diseñar la iniciativa completa de cambio |
| [[05-feedback-rapido]] | Obtener retroalimentación continua durante el experimento |
| [[07-visual-management]] | Hacer visible el progreso del experimento |
| [[06-gemba-cambio]] | Observar directamente cómo funciona el cambio en el lugar de trabajo |
| [[04-entrevistas-estakeholders]] | Recopilar perspectivas para diseñar hipótesis |

---

## Preguntas Clave para Tus Experimentos

1. ¿Cuál es la hipótesis que queremos validar?
2. ¿Quiénes se verán afectados por este cambio?
3. ¿Cuál es el beneficio esperado?
4. ¿Cómo mediremos si tuvimos éxito?
5. ¿Cómo validaremos con las personas afectadas antes de implementar?
6. ¿Cuánto tiempo necesitamos para ver resultados significativos?
7. ¿Qué otros cambios simultáneos podrían interferir?
8. ¿Podemos empezar con una intervención mínima?

---

## Referencias

- Little, J. (2014). *Lean Change Management 2.0*. Happy Melly Express. Capítulos 6-7.
- Little, J. (2020). *Change Agility*. Capítulos sobre gestión de trabajo de cambio.
- Annett, A. (concepto) — "Comenzar en Rojo".
- Nemeth, C. (2003). Universidad de California — Visiones alternativas y potencial creativo.
