---
title: "Anthropic y los harnesses que sobran: planificador, generador y evaluador"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/orquestacion-multiagente
  - arnes/frameworks
channel: "AI LABS"
speaker: "AI LABS"
videoId: "nBH07G-zayk"
source: "https://www.youtube.com/watch?v=nBH07G-zayk"
language: "en"
playlistOrder: 48
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Anthropic Just Killed All Your Agent Harnesses"
related:
  - "[[nBH07G-zayk - anthropic-y-el-fin-de-los-harnesses|Transcripción]]"
---

# Anthropic y los harnesses que sobran: planificador, generador y evaluador

El canal AI LABS analiza en un video explicativo (unos 14 minutos) un artículo de Anthropic. En él, Anthropic experimentó con su propio harness para agentes de larga duración: quitó componentes uno a uno y midió cuáles importaban realmente. Su conclusión, según el canal, es que buena parte de lo que incluyen los frameworks de codificación con IA (BMAD, GSD, Spec Kit, Superpowers) es ahora **peso muerto** con modelos como Claude Opus 4.6.

El video importa para el harness engineering por su principio central: **cada componente del harness codifica una suposición sobre lo que el modelo no puede hacer solo**. Esas suposiciones caducan a medida que el modelo mejora, así que el harness debe evolucionar con él. El canal reduce el núcleo a tres roles (planificador, generador y evaluador) y recomienda cómo adaptar la configuración actual.

## Resumen

- **Experimento de ablación**: Anthropic quitó componentes de su harness uno a uno y midió su impacto. Muchos resultaron prescindibles con Opus 4.6.
- **Principio central**: cada componente codifica una suposición sobre las limitaciones del modelo. Hay que someterla a prueba porque puede ser falsa o quedar obsoleta.
- **Núcleo mínimo**: agentes para planificación, generación y evaluación. El resto son "formas de hacer las cosas" que se vuelven lastre.
- **Planificación de alto nivel**: los planes micro-técnicos propagan en cascada cualquier error. Hoy basta con definir entregables a nivel de producto.
- **Generador y evaluador separados**: el agente que escribe el código no debe evaluarlo, porque tiende a elogiar su propio trabajo, sobre todo en tareas subjetivas como la UI.
- **Contratos de sprint**: necesarios con Opus 4.5, innecesarios con Opus 4.6. Siguen siendo útiles con modelos menores (Sonnet, Haiku).
- **Ansiedad de contexto**: los modelos anteriores cerraban tareas prematuramente al llenarse el contexto. Desde Opus 4.5 ya no pasa, y la compactación basta en lugar de los resets de contexto.
- **Evaluación calificada**: rúbricas con puntuación por criterio (en frontend: diseño, originalidad, oficio y funcionalidad), no un simple pasa/no pasa.
- **Recomendación práctica**: usar GSD y mejorar su evaluador con criterios puntuados, o montar el harness de Anthropic con *agent teams* (generador y evaluador que se comunican entre sí y prueban con Playwright).

## Contenido estructurado

### El punto de partida: los frameworks se quedaron atrás

El canal ha cubierto frameworks como BMAD, GSD, Spec Kit y Superpowers. Todos persiguen lo mismo, hacer que los agentes funcionen mejor en horizontes largos, pero se diseñaron cuando los modelos eran menos capaces.

> "Cada componente de un framework codifica una suposición sobre lo que el modelo no puede hacer por sí solo. Y con Opus 4.6, esas suposiciones han caducado."

Ejemplo: GSD se centra en el aislamiento de contexto, pero eso ya no es un problema con Opus 4.6. Una razón es la ventana de un millón de tokens; la otra se explica más adelante (la ansiedad de contexto).

### El principio: suposiciones que caducan

Según el artículo de Anthropic, todo lo que un harness necesita son agentes de **planificación, generación y evaluación**.

> "Estas suposiciones deben ponerse a prueba porque pueden ser incorrectas, y caducarán a medida que el modelo mejore."

Por tanto, el harness debe evolucionar con los modelos. Trabajar con los principios de hace unos meses es quedarse atrás.

### Planificación: de nivel de implementación a nivel de producto

- **Antes**: los harnesses de larga duración de Anthropic exigían una especificación detallada por adelantado. BMAD y Spec Kit fragmentaban la tarea en microtareas con pasos que el agente seguía "sin pensar", porque los modelos necesitaban micro-guía.
- **Hallazgo**: si el planificador especifica detalles técnicos micro por adelantado, **un solo error se propaga en cascada** por todos los niveles de implementación y al agente le cuesta desviarse para corregir. Todo depende de lo bien escrito que esté el plan.
- **Ahora**: con Opus 4.5 y 4.6 la planificación es de alto nivel. Se le dicen al agente los entregables y él encuentra el camino.

Recomendaciones del canal:

- Limitar BMAD a la fase de planificación hasta generar el PRD, sin el *sharding* técnico. Sus agentes especializados aportan contexto externo de producto que Claude no tendría por sí solo.
- Alternativa: la sesión de preguntas de Superpowers, pensada para identificar casos límite, que puede ser más efectiva que la documentación de tareas en varios niveles.

> "El problema de fondo de la planificación demasiado detallada es que encierra al agente y no deja espacio para que la IA haga descubrimientos y resuelva las cosas por sí misma."

### El agente planificador

- Anthropic publicó un ejemplo de plan generado por su agente planificador, que puede usarse para crear uno propio.
- El plan debe **ser ambicioso en alcance** y llevar la idea de la app más allá, manteniéndose a nivel de producto y no de implementación.
- Diferencia con el *plan mode* de Claude: aunque pregunta y genera un plan detallado, se centra mucho en detalles de implementación y no opera realmente a nivel de producto, lo que contradice los hallazgos de Anthropic.
- El plan resultante incluye un desglose completo de funcionalidades a nivel de producto y, en cada fase, historias de usuario que muestran su perspectiva. Esto ayuda a implementar los flujos que el usuario espera.

(El video incluye un segmento patrocinado de MiniMax / MaxClaw que no forma parte del contenido técnico.)

### Separar generador y evaluador

> "El agente que escribe el código no debería ser el que lo evalúa."

- La autoevaluación falla porque el agente responde con mucha seguridad y elogia su trabajo aunque la calidad sea mediocre.
- Es más manejable con métricas cuantitativas (¿funcionan las APIs?), pero se agrava en tareas sin resultado verificable. El mayor ejemplo es la UI, donde lo "bueno" es subjetivo.
- GSD, BMAD y Superpowers ya separan implementador y evaluador, lo que mejora mucho la precisión y la fiabilidad de las evaluaciones.

### Contratos de sprint

- Antes de implementar, generador y evaluador **negocian un contrato** sobre qué significa "terminado". Con planes de alto nivel siguen haciendo falta pasos accionables.
- Al quitar el contrato: con **Opus 4.5** el sistema era menos eficiente porque el evaluador tenía que intervenir para detectar problemas. Con **Opus 4.6** el contrato no hacía falta, porque el generador resolvía casi todo solo.
- Conclusión: con modelos menores (Sonnet, Haiku) conviene seguir documentando tareas, dividirlas en sprints y acordar qué es "completo". Con modelos más capaces, Opus puede ejecutar el plan de alto nivel sin esos pasos.

### Ansiedad de contexto, resets y compactación

- **Ansiedad de contexto**: los modelos menores pierden coherencia en tareas largas al llenarse la ventana de contexto. Cierran el trabajo prematuramente y afirman haber implementado tareas que no implementaron.
- Solución anterior: **reset de contexto** (vaciar la ventana antes de implementar), apoyado en un desglose de tareas documentado fuera, que persiste entre resets. La compactación sola no bastaba.
- Desde **Opus 4.5** los modelos ya no muestran este comportamiento. Pueden trabajar durante toda la sesión y la compactación de Claude basta.
- Consecuencia: los resets de contexto y los desgloses detallados de BMAD o Spec Kit ya no son necesarios. Basta con guía de alto nivel.

### El generador

- Es el implementador principal: construye la app funcionalidad por funcionalidad a partir de las especificaciones del plan, integrado con Git.
- Coordina con el evaluador: tras cada funcionalidad la entrega para pruebas y recibe feedback.
- Flujo: entender la tarea → implementar (con cuatro subfases que cubren distintos aspectos) → refinar. Sigue la dirección de diseño, verifica su trabajo y lo entrega al evaluador.

### El evaluador adversarial

- Actúa como **adversario** del generador. No hace una pasada genérica de búsqueda de bugs: parte de la premisa de que los bugs existen.
- Usa herramientas como **Playwright** para simular interacciones de usuario, identifica bugs según criterios predefinidos y devuelve feedback.
- Lee el plan para saber qué significa "terminado".

Comparación con otros frameworks:

| Framework | Mecanismo de validación |
|---|---|
| BMAD | Agentes especializados de code review y QA que generan y ejecutan pruebas desde varios ángulos |
| GSD | Subagente verificador que contrasta la implementación con el plan y produce un informe |
| Superpowers | Subagentes nuevos y TDD estricto: no se escribe código antes de los tests, y se bloquea si se intenta saltar |
| Spec Kit | Las specs son la fuente de verdad y el agente verifica el código contra la documentación |

Ninguno ofrece un mecanismo de **puntuación** tan riguroso como el de Anthropic, cuyo evaluador se parece más a la ejecución estricta del *Ralph loop* con evaluación calificada.

### Evaluación calificada: criterios para frontend

El agente no sabe cómo es para ti la salida correcta, sobre todo cuando no es cuantificable, y la IA tiende a converger en resultados parecidos. Anthropic definió cuatro criterios para generador y evaluador:

1. **Calidad del diseño**: ¿el conjunto es coherente o son componentes sueltos encadenados?
2. **Originalidad**: clave, porque la IA tiende al mismo degradado morado y blanco. En el diseño humano cada elección es deliberada.
3. **Oficio (craft)**: tipografía, consistencia de espaciado, armonía de color y relaciones de contraste.
4. **Funcionalidad**: cada componente cumple un papel en la experiencia de usuario.

Claude ya puntúa bien en oficio y funcionalidad. Le cuestan más los otros dos, y los prompts deben empujarlo enfatizando la calidad. Recomendación: definir criterios similares para cualquier área (arquitectura de código, frontend, flujos UX…), cada uno con su propia puntuación, y referenciar esos archivos en el agente evaluador, que es quien puntúa según la rúbrica.

### Qué hacer ahora

**Opción 1, usar un framework: GSD.**
- GSD ya usa por defecto el bucle planificador → generador → evaluador.
- Su evaluador solo contrasta el código con los planes y se apoya en pruebas de aceptación de usuario, con un mecanismo de pasa/no pasa sin puntuación.
- Mejora sugerida: cambiar el agente evaluador y combinarlo con los criterios de evaluación calificada de Anthropic.

**Opción 2, montar el harness de Anthropic por tu cuenta.**
- Crear agentes por rol y coordinarlos con **agent teams**: un miembro como generador y otro como evaluador.
- Por qué agent teams: sus miembros se comunican entre sí, mientras que los subagentes no pueden y tendrían que escribir en un documento, con la sobrecarga que eso supone.
- Claude crea las tareas desde el plan de alto nivel y lanza ambos agentes a la vez. Uno implementa; el otro espera actualizaciones y prueba con el **Playwright MCP** en el navegador. Así se coordinan hasta que la app cumple tus estándares.

## Conceptos clave

- **Harness de agente**: estructura que hace que los agentes funcionen mejor en horizontes largos (planificación, contexto, evaluación…).
- **Suposición codificada**: cada componente del harness presupone una limitación del modelo. Debe probarse y retirarse cuando caduca.
- **Ablación del harness**: quitar componentes uno a uno y medir su impacto para saber cuáles aportan valor.
- **Planificación a nivel de producto**: plan centrado en entregables, funcionalidades e historias de usuario, no en pasos técnicos.
- **Separación generador/evaluador**: el implementador no evalúa su propio trabajo, para evitar la autocomplacencia.
- **Contrato de sprint**: acuerdo previo entre generador y evaluador sobre qué es "terminado".
- **Ansiedad de contexto**: degradación de coherencia y cierre prematuro de tareas cuando se llena la ventana de contexto.
- **Reset de contexto vs. compactación**: vaciar el contexto apoyándose en notas externas, frente a resumirlo y continuar.
- **Evaluador adversarial**: evaluador que parte de que hay bugs y prueba activamente (por ejemplo, con Playwright).
- **Evaluación calificada (graded)**: rúbricas con puntuación por criterio en lugar de pasa/no pasa.

## Herramientas y referencias mencionadas

- Anthropic (artículo sobre harnesses para agentes de larga duración), Claude Opus 4.5 / 4.6, Sonnet, Haiku
- Frameworks: BMAD, GSD, Spec Kit, Superpowers
- Claude Code: plan mode, subagentes, agent teams, compactación
- Playwright y Playwright MCP
- Ralph loop
- Git
- Patrocinador: MiniMax (MaxClaw, M2.7)
- AI LABS Pro (recursos del canal)

## Referencias

- Transcripción: [[nBH07G-zayk - anthropic-y-el-fin-de-los-harnesses|Transcripción completa]]
- Video: [Anthropic Just Killed All Your Agent Harnesses](https://www.youtube.com/watch?v=nBH07G-zayk) — AI LABS
