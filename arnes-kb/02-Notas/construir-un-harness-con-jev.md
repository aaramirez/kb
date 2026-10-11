---
title: "Construir un harness con Jev: modelos System 1 para decisiones rápidas y tipadas"
tags:
  - arnes/nota
  - type/nota
  - arnes/construccion
  - arnes/evals-y-observabilidad
  - arnes/frameworks
channel: "LangChain"
speaker: "Sydney (product manager del equipo open source de LangChain)"
videoId: "VE5dsWll06M"
source: "https://www.youtube.com/watch?v=VE5dsWll06M"
language: "en"
playlistOrder: 47
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Building a Harness with Jev"
related:
  - "[[VE5dsWll06M - construir-un-harness-con-jev|Transcripción]]"
---

# Construir un harness con Jev: modelos System 1 para decisiones rápidas y tipadas

Sydney, product manager del equipo open source de LangChain, presenta en una charla breve con diapositivas (unos 9 minutos) **Jev**, un modelo nuevo de la startup **TypeSafe AI**, y la integración `langchain-typesafe`. Jev es un modelo "System 1": no genera texto, sino que evalúa un estado frente a una serie de preguntas y devuelve respuestas tipadas con probabilidades.

Para el harness engineering, la idea central es que muchos pasos del harness (enrutar modelos, decidir si una llamada a herramienta es riesgosa, juzgar la calidad en evals) son en realidad **tareas de clasificación** que hoy se le encargan a un LLM. Sacarlas del LLM hacia un modelo especializado, mucho más rápido y barato, cambia el coste y la latencia de esos controles.

## Resumen

- **Bucle central del agente**: petición → LLM → herramientas → resultados → seguir o devolver resultado. Es potente, pero los LLM son impredecibles (texto que entra, texto que sale).
- **Primitivas de estructura**: tool calling y salidas estructuradas (*structured outputs*) se añadieron para que los LLM encajen en aplicaciones basadas en tipos.
- **Jev, modelo System 1**: evalúa un estado más preguntas y devuelve respuestas tipadas con probabilidades, sin generar texto.
- **Velocidad y coste**: según el video, entre 20 y 200 veces más rápido y entre 40 y 400 veces más barato que un LLM en tareas de clasificación. No sustituye a un LLM.
- **Inspiración en Kahneman**: System 1 (rápido, intuitivo, barato) frente a System 2 (lento, deliberado, caro), al que se parecen los LLM.
- **Tres tipos de preguntas**: elección (*choice*), puntuación en escala (*score*) y booleana. Responde muchas preguntas en paralelo sobre un mismo estado.
- **Caso 1, enrutamiento de modelos**: decidir al instante si una tarea va a un modelo rápido y barato o a uno potente.
- **Caso 2, auto mode**: clasificar si una llamada a herramienta es riesgosa y bloquearla en tiempo de ejecución, ahora sin penalizar la productividad.
- **Caso 3, juez de evals en línea**: puntuar respuestas del agente según una rúbrica, más barato, rápido, fiable y consistente que LLM-as-a-judge, según el blog de LangChain.

## Contenido estructurado

### Repaso: el bucle del agente y las primitivas de estructura

El bucle básico es este: llega una petición, se envía al LLM, este llama herramientas, procesa los resultados y decide si continúa el bucle o devuelve un resultado.

> "Este bucle es muy potente, pero los LLM son un poco impredecibles, ¿verdad? Reciben texto y producen texto."

Para usarlos en aplicaciones que dependen de tipos estructurados se añadieron dos primitivas:

- **Tool calling**: el modelo envía una petición estructurada (por ejemplo, `get_order` con un ID) y la herramienta devuelve datos estructurados.
- **Salidas estructuradas**: se vincula un tipo de salida al modelo para que el resultado final cumpla un JSON Schema.

### Qué es Jev

Según la documentación de TypeSafe AI que cita la ponente:

> "Los modelos System 1 son una clase de modelos de IA construidos para tomar decisiones rápidas y estructuradas que el software puede usar directamente. Un modelo System 1 evalúa un estado y unas preguntas y devuelve respuestas tipadas y probabilidades."

- No es "texto entra, texto sale" como los LLM tradicionales.
- Entre 20 y 200 veces más rápido y entre 40 y 400 veces más barato en tareas tipo clasificación.
- No es un sustituto directo del LLM, sino un especialista para tareas que hoy se le piden al LLM.

### System 1 vs. System 2

El nombre viene del libro *Thinking, Fast and Slow* (*Pensar rápido, pensar despacio*) de Daniel Kahneman:

| | System 1 (Jev) | System 2 (LLM) |
|---|---|---|
| Velocidad | Rápido, casi instantáneo | Lento |
| Coste | Barato | Caro |
| Salida | Decisiones tipadas | Texto generado |
| Fuerte en | Clasificación y decisiones acotadas | Razonamiento paso a paso sobre problemas abiertos |

**Demo**: ante la pregunta "¿hay PII en este texto?", el LLM produce texto más salida estructurada y tarda unos 5 segundos. Jev responde casi al instante con un 98 % de probabilidad de que haya PII.

### Tipos de preguntas

Se ilustran con un mismo estado: *"Hola, llevo tres días intentando conectar mi cuenta de Stripe y sigue fallando. Estoy perdiendo ventas. Por favor, ayuda cuanto antes."*

1. **Elección (choice)**: seleccionar una opción. "¿Qué equipo debe atender esto?" → *billing* con puntuación 0.84 y confianza 0.596.
2. **Puntuación (score)**: un valor en una escala. "¿Qué tan frustrado parece el cliente?" (tranquilo → frustrado → muy enojado) → 1.035: frustrado pero no muy enojado.
3. **Booleana**: sí/no en escala de 0 a 1. "¿El mensaje transmite urgencia?" → 0.999.

Se puede enviar **un solo estado con muchas preguntas**, que Jev responde en paralelo, frente al razonamiento más secuencial de los LLM.

### Integración en LangChain

- Paquete `langchain-typesafe`, del que se importa `TypeSafeClassifier`.
- Requiere una API key de TypeSafe (typesafe.ai).
- Se invoca con un estado y preguntas, y la respuesta trae una respuesta por pregunta.
- Instalación: `uv pip install langchain-typesafe`.

### Caso de uso 1: enrutamiento de modelos

Si un agente hace trabajo simple y trabajo complejo, no conviene usar el modelo más potente para todo. LangChain lo está explorando con sus agentes internos de código, que deben alternar entre modelos rápidos y baratos y modelos caros y potentes según la complejidad de la pregunta o tarea. Jev evalúa el prompt contra criterios definidos y decide casi al instante.

### Caso de uso 2: auto mode (bloqueo de herramientas riesgosas)

LangChain ya ofrece un **middleware de auto mode** prediseñado: Jev analiza si una llamada a herramienta es riesgosa y la bloquea en tiempo de ejecución (por ejemplo, borrar una base de datos o archivos importantes).

> "Personalmente apagué el auto mode en mi agente de código hace poco, porque el paso de clasificar si una llamada era riesgosa era demasiado lento para sentirme productiva. Pero ya está encendido otra vez, ahora que Jev toma estas decisiones tan rápido."

### Caso de uso 3: Jev como juez de evals en línea

- Con evals a escala no es razonable revisar cada traza a mano, y los evaluadores de código no bastan.
- Entradas: la pregunta inicial, la respuesta del agente y una **rúbrica** (¿es correcta?, ¿coincide con la referencia?, ¿está fundamentada?, ¿cita una fuente?).
- Jev puntúa la respuesta en cada criterio de la rúbrica.
- Es una evolución de LLM-as-a-judge, que es útil pero caro. El blog de LangChain reporta que Jev es más barato y rápido y, además, más fiable y consistente entre evals.

## Conceptos clave

- **Bucle central del agente**: ciclo petición → LLM → llamada a herramienta → resultado → continuar o terminar.
- **Tool calling**: primitiva por la que el modelo emite peticiones estructuradas a herramientas.
- **Salidas estructuradas**: vincular un tipo o JSON Schema a la salida final del modelo.
- **Modelo System 1**: modelo que evalúa un estado y unas preguntas y devuelve respuestas tipadas con probabilidades, sin generar texto. Es rápido y barato.
- **Estado + preguntas**: forma de la entrada a Jev; un estado admite múltiples preguntas respondidas en paralelo.
- **Tipos de pregunta**: elección, puntuación y booleana.
- **Enrutamiento de modelos**: decidir qué modelo atiende cada tarea según su complejidad.
- **Auto mode**: middleware que clasifica y bloquea en tiempo real las llamadas a herramientas riesgosas.
- **Juez de evals en línea**: modelo que puntúa la salida del agente según una rúbrica sobre trazas de producción.

## Herramientas y referencias mencionadas

- Jev (TypeSafe AI), typesafe.ai
- LangChain, paquete `langchain-typesafe` (`TypeSafeClassifier`), middleware de auto mode
- LLM-as-a-judge
- Daniel Kahneman, *Thinking, Fast and Slow*
- Stripe (en el ejemplo)
- Blog de LangChain sobre Jev como juez

## Referencias

- Transcripción: [[VE5dsWll06M - construir-un-harness-con-jev|Transcripción completa]]
- Video: [Building a Harness with Jev](https://www.youtube.com/watch?v=VE5dsWll06M) — LangChain
