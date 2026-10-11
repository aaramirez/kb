---
title: "Cuándo construir tu propio harness: middleware, distribución del modelo y el volante de evals"
tags:
  - arnes/nota
  - type/nota
  - arnes/construccion
  - arnes/evals-y-observabilidad
  - arnes/frameworks
channel: "Sequoia Capital"
speaker: "Harrison Chase (LangChain)"
videoId: "HI2q3ci3Iuc"
source: "https://www.youtube.com/watch?v=HI2q3ci3Iuc"
language: "en"
playlistOrder: 30
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "When to Build Your Own Agent Harness | Harrison Chase, LangChain"
related:
  - "[[HI2q3ci3Iuc - cuando-construir-tu-propio-harness|Transcripción]]"
---

# Cuándo construir tu propio harness: middleware, distribución del modelo y el volante de evals

Harrison Chase, cofundador y CEO de LangChain, da una charla de unos 15 minutos con 15 minutos de preguntas en un evento de Sequoia Capital. El tema es "poseer tu propia inteligencia". Un agente se compone de **modelo, contexto y harness**, y la charla se centra en el harness: cómo se personaliza el bucle básico mediante *middleware*, cuándo conviene un harness propio frente a uno comercial, y cómo las **evals** y la **observabilidad** alimentan un volante de datos para mejorar el agente de forma continua. Termina con una demo de LangSmith Engine.

Para el harness engineering aporta un criterio práctico para decidir entre construir y comprar: cuanto más **fuera de distribución** está la tarea respecto a lo que los modelos vieron en su entrenamiento, más sentido tiene personalizar el harness. Las piezas que siguen *dentro* de distribución, como la edición de archivos, deben quedar lo más cerca posible de cómo el modelo fue entrenado.

## Resumen

- **Un agente = harness + modelo + contexto**: poseer tu inteligencia implica poseer las tres partes, y en el caso del modelo, poder cambiarlo para evitar el lock-in.
- **El trabajo principal del harness**: llevar el contexto correcto al modelo en el momento correcto y orquestar las interacciones con sistemas externos.
- **El núcleo es simple**: un LLM en bucle que llama herramientas. Todos los agentes avanzados ejecutan ese bucle con añadidos.
- **Middleware**: hooks antes del agente, antes de cada llamada al modelo y envolviendo llamadas al modelo o a herramientas. Así se añaden sandbox, sistema de archivos, subagentes, memoria, resumen o descarga de contexto.
- **Arquitecturas cognitivas explícitas**: siguen siendo útiles en flujos muy concretos o cuando se exige predictibilidad, como en servicios financieros.
- **Empezar con un harness general** y añadir puertas y chequeos a medida que el caso de uso se define.
- **Regla build vs. buy**: dentro de distribución, el harness comercial es mejor; cuanto más fuera de distribución, más conviene ajustar el harness, conservando las herramientas en las que el modelo fue entrenado (p. ej. *model profiles* para editar archivos).
- **Evals propias**: definen qué es "bueno" en la organización. Harbor se está convirtiendo en el estándar para definir benchmarks de agentes.
- **Observabilidad infravalorada**: los agentes fallan más por mal contexto que por mal modelo, y hay que ver qué entra en la ventana de contexto y cómo se acumula.
- **Volante de datos**: ejecutar el agente, recoger trazas, curarlas con feedback, experimentar y mejorar harness, modelo o contexto. LangSmith Engine intenta automatizar este ciclo.

## Contenido estructurado

### Poseer tu inteligencia: las tres partes de un agente

Para LangChain un agente tiene tres partes principales: **un harness que orquesta un modelo y cierto contexto**.
- **Modelo**: no lo desarrolla en la charla, pero destaca la capacidad de cambiar de modelo. Es el equivalente actual de ser *cloud-agnostic*: sirve para evitar el lock-in y usar el mejor modelo disponible en cada momento.
- **Contexto**: memoria, conocimiento semántico y conversaciones previas, que personalizan y guían al agente.
- **Harness**: el foco de la charla.

### El trabajo del harness y el bucle básico

> "El trabajo principal de un harness es llevar contexto al modelo en el momento correcto."

El harness orquesta el contexto fijo y el dinámico, lo mete en la ventana del modelo, recibe la respuesta y actúa en consecuencia. Los agentes interactúan con sistemas externos que emiten más contexto, el cual vuelve al bucle.

En su forma más simple, un agente es "un LLM corriendo en bucle que llama herramientas": llega una petición, el LLM genera, si la generación incluye una herramienta se invoca y la observación vuelve al LLM. Es la arquitectura detrás de casi todos los agentes actuales. Las diferencias están en lo que se hace en cada etapa.

### Deep Agents y la personalización mediante middleware

- **LangChain** es un harness base y mínimo.
- **Deep Agents** es la versión agnóstica de modelo y de propósito más general, "una especie de Claude Code". Se conecta a sistemas de archivos y tiene skills y subagentes, todo construido sobre el harness simple mediante middleware.

**Puntos de inserción del middleware**:
- ejecutar código antes de invocar al agente;
- ejecutar código antes de cada llamada al modelo;
- envolver las llamadas al modelo;
- envolver las llamadas a herramientas.

Equivale a los *hooks* y *plugins* de los agentes de código: el bucle base sigue igual, pero se le añaden ganchos en distintos puntos. Ejemplos:
- **Resumen** (*summarization*): antes de llamar al modelo se comprueba si el contexto es demasiado largo y se resume.
- **Descarga de contexto** (*context offloading*): envuelve la llamada a la herramienta y vuelca a otro sitio los resultados grandes.
- Acceso a sandbox, sistema de archivos, subagentes y memoria.

> "Todos estos harnesses más avanzados básicamente hacen ese bucle, pero le añaden un montón de cosas mientras siguen ejecutando el bucle central."

### Arquitecturas cognitivas explícitas

La otra forma de personalizar es una **arquitectura cognitiva** explícita. Era lo habitual en 2023-2024, cuando los modelos no eran lo bastante buenos para correr en bucle. Ejemplos: un flujo de *deep research* que genera subpreguntas, las reparte en paralelo y las ejecuta, o un bot de revisión de código con pasos a medida. Mucho de esto se ha absorbido en el harness como modificaciones del bucle central, pero para flujos muy concretos aún se usa.

**Recomendación**: empezar con un harness general, que es lo más rápido para obtener valor. A medida que se acota el caso de uso en el que se quiere ser excelente, se añaden puertas y chequeos para guiarlo.

### ¿Harness propio o comercial? Dentro y fuera de distribución

Los harnesses comerciales suelen ir ligados a modelos concretos: Claude Code y el Claude Agent SDK a los modelos de Anthropic, Codex a los de OpenAI. Chase lo considera "una gran pregunta abierta en la industria". Su respuesta general:

> "Cuanto más dentro de distribución estés respecto a aquello con lo que se entrenaron los modelos, mejor será el harness comercial. En cuanto empiezas a alejarte más y más de la distribución, probablemente querrás ajustar tu harness de alguna manera."

**Matiz: tareas mixtas**. En la IA legal (Gabe, de Harvey, comentó que tienen su propio harness), la tarea global está fuera de distribución, pero subtareas como **editar archivos** están dentro. Todos los modelos han sido entrenados con RL para editar archivos, y cada laboratorio de forma distinta: OpenAI y Claude editan archivos de maneras diferentes en sus harnesses y por eso cada modelo rinde mejor con su propio método. Lo ideal es un harness propio que use la herramienta de edición que está en distribución para el modelo elegido.

En Deep Agents esto se resuelve con **model profiles**: para capacidades en distribución como editar archivos, se cambia de implementación según el modelo en uso.

> "Personalizar el harness global cuando la tarea está fuera de distribución, pero mantener las partes pequeñas que sí están en distribución lo más cerca posible de la capa del modelo."

### Evals y observabilidad

Cita tres ideas de un artículo de Satya (Nadella) en X:
1. "Crea tus evals privadas, porque las evals definen qué es bueno dentro de la organización."
2. "Conserva la propiedad de la memoria, las trazas, el feedback, las decisiones y el contexto institucional de tu organización."
3. Crea tu propia "máquina de aprendizaje continuo y *hill climbing*" para que las inversiones en IA hagan crecer el valor de la empresa.

**Benchmarks propios**: toda empresa que construye un agente crítico acabará construyendo benchmarks para él. Sirven para detectar regresiones o para hacer *hill climbing* ajustando el harness o el modelo.

**Harbor**: runner de evals de código abierto, creado por los autores de Terminal Bench 2 (un benchmark estándar para agentes de código) y popular en muchos dominios. Permite comparar harnesses, modelos y niveles de esfuerzo de razonamiento sobre tu tarea (ejemplo: Frontier Bench).

**Anatomía de una tarea de Harbor**:
- `environment`: el entorno del agente, definido en un Dockerfile y levantado en un sandbox. Los agentes de larga duración y con estado necesitan interactuar con él.
- `solution`: una solución de referencia para comprobar que la tarea tiene sentido.
- `test`: el verificador de la ejecución. Puede ejecutar código, tests unitarios, un LLM como juez o un agente como juez.
- `instruction.md`: el prompt que recibe el agente.

Las tareas se ejecutan en sandboxes, en paralelo, contra agentes (modelo + harness), y se puntúan. En **LangSmith** (integrado con Harbor) se comparan experimentos con puntuaciones de feedback, latencia y tokens, porque además de la precisión importan la latencia y el costo.

### Observabilidad: trayectorias y trazas

> "La observabilidad suena básica, pero creo que es muy importante y está muy infravalorada para los agentes."

Cuando un agente falla, es porque una llamada al LLM salió mal, por una de dos razones: el modelo no es lo bastante bueno, o el contexto que recibió no lo es. Chase cree que **la segunda es la causa más frecuente**. Por eso hay que ver qué entra en la ventana de contexto, cómo se acumula, qué pasos y qué herramientas se ejecutaron.

- **Trayectorias**: la lista de mensajes (humano, llamadas a herramientas, respuestas), cada vez más central en los agentes. LangSmith ofrece una vista amigable similar a Claude Code que agrupa las llamadas a herramientas.
- **Trazas completas**: no bastan las trayectorias, hace falta entrar en cada paso y ver exactamente qué ocurre dentro del modelo.

### El volante de datos para mejorar agentes

Receta para mejorar agentes de forma continua (presentada en el AI Engineer World's Fair de Swyx): construir el agente, ejecutarlo, recoger muchas trazas, curarlas y experimentar sobre esos datos.

- **Feedback del entorno**: el diseño de la UX del agente está infravalorado. Nadie pulsa el pulgar arriba o abajo, pero una UX ingeniosa puede capturar feedback implícito.
- **Feedback sintético**: evaluadores *online* sobre las trazas. Pasar Opus por cada traza "dispara la factura", así que se necesitan formas baratas y rápidas: SLM afinados (un experimento con Harvey redujo mucho el costo del LLM como juez), modelos comerciales con prompts propios o simplemente código si lo que se mide es simple.
- **Qué se actualiza**: cualquiera de las tres partes del agente. El harness con harness engineering, el modelo con fine-tuning y el contexto con memoria. LangChain se centra en el harness engineering.

### Demo: LangSmith Engine

Engine es un agente que trabaja sobre tus trazas para automatizar el ciclo, porque hacerlo a mano es difícil y lento:
- Por debajo es un agente de código con acceso al CLI de LangSmith (para filtrar trazas por feedback, etc.), con un prompt grande y subagentes que exploran los datos.
- Crea **tableros de issues**: descripción del problema, enlaces a las trazas como evidencia y cambios propuestos en prompts, instrucciones o código del harness.
- Ciclo: "ejecutar el agente, obtener trazas, ver patrones, arreglar".

### Preguntas: Engine sobre Engine y la codexificación

- Ejecutan Engine sobre Engine, que además informa de sí mismo en Slack.
- Crearon **Issue Bench**, un benchmark en formato Harbor para Engine, con el que comparan modelos y harnesses. Al probar Deep Agents, Codex y Claude Code vieron que Codex escribía agresivamente pequeños scripts propios para analizar las trazas, y eso le hacía rendir muy bien. Hicieron un sprint de "codexificación" de Engine para llevar ese aprendizaje a su harness.
- Ventaja de tener un benchmark: probar muchas alternativas, ver qué funciona y traer esas ideas al harness propio.

### Preguntas: ¿convergerán los harnesses?

La respuesta honesta de Chase es "no lo sé" (lo ha conversado con Eno, de Factory). Aun así:
- Los harnesses generales ya son lo bastante buenos para muchas tareas básicas, al menos para empezar. Recomienda partir de uno comercial (Deep Agents, Codex, Claude Code), porque los aprendizajes clave, como acceso a sistemas de archivos y subagentes, ya están incorporados.
- **Es un espectro**: cuanto más fuera de distribución, más personalización. En el extremo hay una arquitectura cognitiva completa; en medio, hooks o middleware.
- **Predictibilidad y control**: clientes de servicios financieros ven Deep Agents y dicen "demasiado aterrador", porque prefieren arquitecturas cognitivas controlables.
- Los laboratorios convergen en ser muy buenos en código, pero con diferencias pequeñas e inexplicables, como sus formas distintas de editar archivos. Si un laboratorio apostara, por ejemplo, por biología, sus harnesses podrían divergir.
  > "Es un espacio que se mueve rápido; por eso las evals y la observabilidad son importantes: para medir todo eso."

## Conceptos clave

- **Poseer tu inteligencia**: controlar modelo, contexto y harness de los agentes, incluida la capacidad de cambiar de modelo.
- **Bucle de agente**: LLM que genera, invoca herramientas y recibe observaciones en bucle; es la base de casi todos los agentes.
- **Middleware**: ganchos en puntos del bucle (antes del agente, antes del modelo, envolviendo modelo o herramientas) para añadir capacidades sin cambiar la arquitectura.
- **Arquitectura cognitiva**: flujo explícito y a medida de pasos que guía al modelo, útil para control y predictibilidad.
- **Dentro/fuera de distribución**: si la tarea se parece a aquello con lo que el modelo se entrenó; determina cuánto personalizar el harness.
- **Model profiles**: implementaciones de herramientas (p. ej. editar archivos) que cambian según el modelo para respetar su entrenamiento.
- **Harbor**: runner de evals open source con tareas compuestas por entorno (Dockerfile), solución, test verificador e `instruction.md`.
- **Trayectoria vs. traza**: la lista de mensajes de un agente frente al detalle completo de cada paso interno.
- **Volante de datos**: ciclo de ejecutar, trazar, curar con feedback, experimentar y actualizar harness, modelo o contexto.

## Herramientas y referencias mencionadas

- LangChain, Deep Agents, LangSmith, LangSmith Engine, LangSmith CLI, Issue Bench
- Claude Code, Claude Agent SDK, Codex, Opus
- Harbor, Terminal Bench 2, Frontier Bench
- Harvey (Gabe), Fireworks (Lin), Factory (Eno), Satya Nadella (artículo en X), Swyx (AI Engineer World's Fair)
- Sequoia Capital (organizador del evento)

## Referencias

- Transcripción: [[HI2q3ci3Iuc - cuando-construir-tu-propio-harness|Transcripción completa]]
- Video: [When to Build Your Own Agent Harness | Harrison Chase, LangChain](https://www.youtube.com/watch?v=HI2q3ci3Iuc) — Sequoia Capital
