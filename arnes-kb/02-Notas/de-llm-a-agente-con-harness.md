---
title: "De LLM a agente con un harness: herramientas, memoria y bucle agéntico"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/frameworks
channel: "AI with Thiru"
speaker: "Thiru (AI with Thiru)"
videoId: "wlSXhSGMJpA"
source: "https://www.youtube.com/watch?v=wlSXhSGMJpA"
language: "ta"
playlistOrder: 39
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harness Engineering Explained | Turn your LLM in to AI Agent."
related:
  - "[[wlSXhSGMJpA - de-llm-a-agente-con-harness|Transcripción]]"
---

# De LLM a agente con un harness: herramientas, memoria y bucle agéntico

Este video de unos 13 minutos es un explicador introductorio del canal AI with Thiru, dirigido a un público no técnico. Su tesis es que el *agentic harness* (harness engineering) permite que cualquier modelo de IA se convierta en un agente, incluso para tareas pequeñas y sin programar. Recorre la evolución de prompt engineering a context engineering y luego a harness engineering. Define tres pilares del harness: herramientas, memoria y bucle agéntico. Cierra comparando el harness de Claude Code (cerrado y de pago) con una alternativa open source que presenta como el harness de DeepSeek.

Para el harness engineering es una introducción de nivel básico. Su valor está en la analogía del modelo como "cerebro sin manos" y en una taxonomía mínima de tres componentes. No entra en detalles de implementación.

> El video está hablado en **tamil con muchos términos en inglés** (tanglish). La transcripción muestra primero una **traducción al inglés hecha segmento a segmento** a partir de los subtítulos automáticos en tamil, y al final el original en tamil. La traducción puede tener pequeñas imprecisiones de matiz.

## Resumen

- **De modelos sueltos a IA agéntica**: ya hace falta implementar IA agéntica incluso en tareas pequeñas. Generar un PDF o un PPT de calidad requiere datos en tiempo real, mucho contexto y ciertas skills.
- **El problema de acceso**: los desarrolladores pueden implementarlo, pero los usuarios no. El *agentic harness* nace para que todos puedan hacerlo.
- **Evolución en tres etapas**: prompt engineering, luego context engineering y luego harness engineering.
- **El modelo es solo un cerebro**: un LLM o modelo de frontera es generativo (texto, imagen, video o audio) y por sí solo no puede ejecutar tareas. Le faltan "manos".
- **Jerarquía de términos**: modelo de IA (la base), más un harness, da un agente de IA. Varios agentes corriendo a la vez forman IA agéntica.
- **Tres pilares del harness**: herramientas, memoria y bucle agéntico.
- **Herramientas**: superan el *cutoff* del modelo. Por ejemplo, la búsqueda web para saber quién ganó la IPL 2025.
- **Memoria = contexto**: una buena gestión de memoria evita alucinaciones. La analogía: para mediar en una pelea hay que saber por qué empezó.
- **Bucle agéntico**: entrada, modelo, herramientas, salida, validación y, si no se cumple la condición, repetición. Así mejoran el contexto y la precisión y bajan las alucinaciones.
- **Claude Code**, según el autor, tiene el mejor harness del mercado (skills, plugins, herramientas y gestión de memoria integrados), pero no es gratuito.
- **Alternativa open source**: el autor presenta un "harness de DeepSeek" open source, compatible con múltiples modelos, 100 % personalizable y configurable solo con prompts.

## Contenido estructurado

### El punto de partida: ya no basta con usar un modelo

Antes bastaba con dar un prompt y generar un PDF o un PPT con un modelo. Hoy, para generar ese mismo entregable con calidad, el modelo necesita:

- **datos en tiempo real**,
- **mucho contexto**,
- **ciertas skills** para dar una salida realmente adecuada.

Un desarrollador puede montar todo eso, pero un usuario común no. Para cerrar esa brecha se introdujo el término *agentic harness*, también llamado **harness engineering**.

### Evolución: prompt, context y harness engineering

El autor presenta la secuencia histórica así:

1. **Prompt engineering**: se asigna un rol ("eres un desarrollador Python", "eres un desarrollador full stack"), se da el objetivo y el modelo genera el código. No se habilitan herramientas ni memoria.
2. **Context engineering**: se entrega al modelo, en un archivo Markdown o de texto, el contexto de lo hecho antes: qué se hizo, por qué y para qué. El modelo entiende mejor la tarea, pero sigue sin herramientas ni memoria. Con un modelo de frontera directamente "no se puede hacer nada" más allá de eso.
3. **Harness engineering**: además de dar contexto, se pueden **habilitar herramientas**, **habilitar memoria** y **configurar el bucle agéntico** para el modelo que se use. Así el LLM "se implementa como IA agéntica y empieza a trabajar".

### El modelo como cerebro sin manos

Los modelos actuales (GPT, "el recién lanzado 6", Claude Opus 5, Gemini 3.7, según los nombra el autor) son **modelos generativos**: reciben una entrada y generan texto, imagen, video o audio. No pueden ejecutar una tarea porque son modelos *standalone*.

> "Es solo un cerebro. Así como en el cuerpo humano hay un cerebro, solo si ese cerebro tiene manos puede usarlas para hacer algo y ejecutar una tarea. Pero este modelo de IA es solo un cerebro."

Usar ChatGPT o Gemini para generar una imagen o un PDF y quedarse con la salida "no es un aprovechamiento completo". El agentic harness viene a resolver eso.

### Capas: modelo, harness, agente e IA agéntica

Da igual dónde se construya el agente (Copilot, Claude Code, Lindy u otra herramienta). Dentro siempre hay:

```
Agente de IA
 └─ Agentic harness (sistema)
     └─ Modelo de IA (la base)
```

- **Modelo de IA + harness = agente de IA**.
- **Varios agentes corriendo a la vez = IA agéntica**.

Sin harness, una persona no técnica no puede programar las capacidades necesarias y "no puede aprovechar el agente a fondo". Con el harness se puede convertir **cualquier** modelo en agente o en IA agéntica, "incluso para una tarea pequeña".

### Pilar 1: herramientas

El ejemplo del autor es GPT-4o, con fecha de corte en 2024. La fecha de corte es el momento en que se deja de entrenar el modelo con datos nuevos.

- Si se le pregunta quién ganó la IPL 2025, responde mal (dice CSK). El ganador fue RCB, pero ese dato no está en el modelo.
- Con una herramienta externa de **búsqueda web**, el modelo obtiene datos en vivo y responde bien.
- Al habilitar la herramienta, el LLM normal **se convierte en un agente de IA**, y quien lo habilita es el agentic harness.
- Antes, que cada persona habilitara sus propias herramientas personalizadas era difícil.

### Pilar 2: memoria (contexto)

La memoria define cómo el modelo almacena el contexto. Es muy necesaria porque:

- Para que el modelo **no alucine**, la gestión de memoria tiene que ser excelente.
- Solo así el modelo sabe qué pasó en el contexto previo.

La analogía del autor:

> "Dos personas se están peleando y tú vas a resolver esa pelea. Solo si sabes por qué pelearon puedes resolverla. Esa es la regla básica. Eso que averiguas es el contexto, y ese contexto es la memoria."

Esa misma memoria hay que habilitarla en el LLM, y el agentic harness lo hace posible.

### Pilar 3: el bucle agéntico

Es el componente que el autor considera "muy, muy importante":

1. Se da una entrada.
2. La entrada va al modelo.
3. El modelo usa herramientas externas para obtener los datos que necesita.
4. Genera una salida.
5. La salida **no llega directamente al usuario**: pasa por una **validación**.
6. Si no se cumple la condición definida, vuelve al modelo, que usa herramientas de nuevo, produce otra salida y la valida otra vez, y así hasta cumplirla.

Efectos según el autor: el modelo obtiene mejor contexto y más datos, la precisión aumenta y las alucinaciones bajan. Cuantos más datos, más contexto y mejor gestión de memoria.

> "El agentic harness se apoya en estas tres cosas: herramientas, memoria y bucle agéntico."

### Desarrolladores frente a usuarios comunes

Un desarrollador puede implementar los tres pilares en código con frameworks como **CrewAI** o **LangGraph**. El autor se pregunta cómo lo haría "un hombre común". Su respuesta es que para eso se han publicado muchas herramientas open source de harness.

### Closed source: el harness de Claude Code

Para el autor, el harness de **Claude Code** es "el mejor del mercado": con una entrada da una salida "perfecta", ya sea para construir un producto o para generar un informe. Lo que llama harness en Claude Code es:

- skills integradas,
- plugins,
- herramientas,
- las skills necesarias para la gestión de memoria.

Todo viene ya configurado. Su limitación es que no es gratis y no todos pueden usarlo.

### Open source: el "harness de DeepSeek"

Como alternativa directa, el autor presenta lo que llama el **harness de DeepSeek** (a veces dice "Deep harness"), que también es un agentic harness. Le atribuye estas características:

- **100 % open source**.
- **Agnóstico de modelo**: se pueden conectar modelos de OpenAI, de Claude, modelos gratuitos vía **Ollama** y modelos vía **OpenRouter**, lo que sale "muy barato".
- **100 % personalizable**: plugins, skills, gestión de memoria y bucles agénticos adaptados a cada tarea. El autor afirma que en otros harnesses eso no se puede hacer.
- **Configuración por prompt**: crear plugins, cambiar la UI o habilitar herramientas no requiere trabajo técnico, como modificar archivos JSON. "Dentro del prompt lo hace todo él mismo", así que basta con saber dar bien el prompt.

Remite a un video dedicado del canal sobre cómo instalarlo, conectar un modelo y personalizarlo.

## Conceptos clave

- **Agentic harness / harness engineering**: la capa que se implementa sobre un modelo de IA para convertirlo en agente, habilitando herramientas, memoria y bucle agéntico.
- **Modelo de frontera / LLM**: un modelo generativo standalone (texto, imagen, video o audio). Es "solo un cerebro".
- **Agente de IA**: un modelo de IA con un harness implementado encima.
- **IA agéntica**: varios agentes de IA corriendo a la vez.
- **Fecha de corte (cutoff)**: el momento en que se deja de entrenar el modelo con datos nuevos. Las herramientas permiten superarla.
- **Memoria / contexto**: lo que el modelo sabe de lo ocurrido antes. Su buena gestión evita alucinaciones.
- **Bucle agéntico**: el ciclo modelo → herramientas → salida → validación → repetición hasta cumplir la condición.
- **Context engineering**: dar al modelo el historial y los motivos de la tarea mediante archivos Markdown o de texto, sin herramientas ni memoria.

## Herramientas y referencias mencionadas

- Modelos: GPT-4 / GPT-4o, "GPT 6", Claude Opus 5, Gemini 3.7
- ChatGPT, Gemini
- Constructores de agentes: GitHub Copilot, Claude Code, Lindy
- Frameworks: CrewAI, LangGraph
- Harness de DeepSeek (open source, según el autor)
- Conectividad de modelos: Ollama, OpenRouter
- Ejemplo de la IPL 2025 (CSK y RCB)

## Referencias

- Transcripción: [[wlSXhSGMJpA - de-llm-a-agente-con-harness|Transcripción completa]]
- Video: [Harness Engineering Explained | Turn your LLM in to AI Agent.](https://www.youtube.com/watch?v=wlSXhSGMJpA) — AI with Thiru
