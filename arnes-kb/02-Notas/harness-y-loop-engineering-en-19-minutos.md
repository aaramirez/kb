---
title: "Harness, loop engineering y LLMOps: memoria, bucles, tracing y evals"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/contexto-y-memoria
  - arnes/evals-y-observabilidad
channel: "Sean‘s AI Stories"
speaker: "Sean (Sean's AI Stories)"
videoId: "GrNbuWWJYiI"
source: "https://www.youtube.com/watch?v=GrNbuWWJYiI"
language: "en"
playlistOrder: 51
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "You Can Learn AI Agent Harness & Loop Engineering In 19 Min | LLM Ops, Eval, Tracing, RAG"
related:
  - "[[GrNbuWWJYiI - harness-y-loop-engineering-en-19-minutos|Transcripción]]"
---

# Harness, loop engineering y LLMOps: memoria, bucles, tracing y evals

Sean, del canal Sean's AI Stories, recorre en una explicación con diagramas (en inglés, pensada también para público no técnico) los términos de moda en sistemas de agentes: *agent harness*, *loop engineering*, *LLMOps* y *evals*, además de RAG y tracing. Construye un único diagrama de arquitectura paso a paso: una ejecución de agente (agent run), el sistema de memoria (de trabajo, procedimental, semántica y episódica) con su almacenamiento y consolidación, el bucle de llamadas a herramientas con guardrails de fin de bucle, y un ciclo LLMOps de tracing, evaluación, diagnóstico y despliegue.

Su tesis es que estos conceptos son bloques simples que, combinados, producen un sistema inteligente que se automejora. Para el harness engineering, el video ofrece un mapa integrado: el arnés controla al LLM (el "caballo") y LLMOps cierra el bucle de mejora continua.

## Resumen

- **El LLM es un caballo**: potente, pero sin arneses puede ir a cualquier parte. El *harness* es el conjunto de herramientas para controlarlo y aprovechar todo su potencial.
- **Probabilidad implica aleatoriedad**: un LLM predice la siguiente palabra; para resolver problemas hace falta controlar esa aleatoriedad.
- **El LLM no te conoce**: sabe de todo, pero no sabe quién eres ni cómo quieres que actúe; de ahí la necesidad del arnés y la memoria.
- **Cuatro memorias**: de trabajo (contexto de la ejecución), procedimental (instrucciones y skills), semántica (hechos duraderos) y episódica (serie temporal de eventos y conversaciones previas).
- **La memoria necesita actualización**: bases de datos, registro de cada evento y consolidación periódica con un agente resumidor (que puede usar un modelo más barato).
- **Recuperación híbrida**: RAG para la memoria semántica; SQL y búsqueda semántica combinados para la episódica.
- **El loop forma parte del arnés**: el agente llama herramientas varias veces hasta terminar la tarea; lo esencial es saber cuándo parar (guardrails de fin de bucle).
- **LLMOps**: tracing de cada ejecución, evaluación (por ejemplo, LLM como juez y métricas deterministas), diagnóstico y una compuerta que decide si se despliega una corrección simple o se arregla un fallo profundo.
- **Sistema que se automejora**: el ciclo LLMOps realimenta prompts, configuración del modelo y parámetros de recuperación.

## Contenido estructurado

### Una ejecución de agente (agent run)

- Entrada: el prompt del usuario (por ejemplo, "¿cuándo despidieron a Sam Altman de OpenAI?") más el historial del chat y el system prompt.
- Es **efímera**: no tiene memoria más allá de lo enviado en esa ejecución.
- Todo se carga en la **memoria de trabajo** (o "RAM de contexto"); un LLM actúa como agente de pregunta y respuesta y devuelve la respuesta.
- Problema: la memoria es muy corta.

### Las memorias adicionales

- **Procedimental**: cómo debe actuar el agente, instrucciones de una skill. Suelen ser archivos o texto: las *skills* son texto en markdown que se pasa a un agente como Claude Code.
- **Semántica (hechos duraderos)**: por ejemplo, quién es Sean y qué ha construido, para comparar su trayectoria con la de Sam Altman. El modelo no la conoce si no eres famoso.
- **Episódica**: eventos pasados o conversaciones que no están en la actual; una serie temporal (por ejemplo, "¿cuándo preparé por última vez una candidatura de empleo?").

> "Un LLM es como un cerebro muy potente que sabe todo sobre la humanidad, la ciencia y la historia. Pero no te conoce."

### Qué es un harness

Un arnés es literalmente el equipo para controlar un caballo al montarlo. El LLM es un caballo potente; sin buenas herramientas puedes hacerte daño o acabar en cualquier parte ("en una guerra no quieres eso"). Harness = construir el framework del agente para controlar el LLM y que funcione como queremos. Herramientas del mercado: LangGraph, LangChain, Pydantic, entre otras.

### Almacenamiento y actualización de memorias

- Las memorias no aparecen solas: hay que actualizarlas y guardarlas en bases de datos (AWS, Supabase, Google Cloud, Azure; un servidor propio en casa es posible, pero caro).
- **Episódica**: se registra cada evento con su marca de tiempo; queda una lista larga de la historia.
- **Semántica**: se puede introducir a mano o dejar que evolucione sola consolidando conversaciones.

### Consolidación con un agente resumidor

Ejemplo de una marca D2C de e-commerce: los clientes han preguntado un millón de veces cómo se les reembolsa un producto defectuoso. Esas conversaciones se destilan en un hecho de la memoria semántica.

- Una **compuerta** decide cuándo consolidar: con un millón de clientes (Alibaba, Amazon) no tiene sentido hacerlo en cada conversación; por ejemplo, cada 2.000 conversaciones.
- Un **agente resumidor** (otro arnés de LLM) con su propio system prompt, memorias y modelo configurable; puede ser un modelo abierto más barato, porque recibe mucho texto.
- Flujo completo: cada respuesta se envía a la base de datos; la base alimenta la memoria de trabajo con contexto relevante en cada pregunta; la consolidación hace más rápida la recuperación.

### Recuperación: RAG y SQL

- **Memoria semántica**: RAG (*retrieval augmented generation*), porque son hechos, texto o archivos.
- **Memoria episódica**:
  - "Las últimas 10 conversaciones con este cliente de EE. UU." → basta una consulta SQL.
  - "Mis últimas 20 conversaciones con quejas de calidad que el agente no resolvió" → SQL más búsqueda semántica, para traer las 20 relevantes de entre 2.000 y no todas.

### Llamadas a herramientas y loop engineering

- El agente no solo lee memoria: también ejecuta herramientas (agendar reuniones, leer o escribir en el CRM, consultar pagos en Stripe o Alipay), a menudo varias veces.
- Si le das todo el poder, podría seguir indefinidamente, o no saber cuándo parar ni qué herramientas usar.

> "Un loop es parte del arnés. ¿Por qué? Porque también nos ayuda a controlar esta tecnología para que funcione como queremos."

Ejemplo: "¿De qué se quejan los clientes? ¿Qué seguimiento podemos hacer para recuperarlos? Si piden reembolso, ¿se hizo? Si no, ¿podemos hacerlo?".
1. El agente consulta el CRM (Salesforce, HubSpot…): 30 quejas en dos meses, 12 reembolsadas y 8 sin reembolsar.
2. Agenda reuniones con los 8 clientes pendientes.
3. En una versión más avanzada, dispara el reembolso en Stripe o Alipay.
4. El bucle continúa hasta terminar la tarea. No hay una solución única: depende de la tarea y del sistema.

### Guardrails de fin de bucle

- Lo esencial del loop es **saber cuándo parar**.
- El guardrail puede ser simplemente "la tarea está hecha"; durante la planificación, el agente debería confirmar con el usuario cuál es el punto final (¿reembolsar a los 8 o solo decir quiénes son?).
- Ejemplo con Claude Code: configurar un hook para recibir una notificación en el portátil cuando el agente espera un permiso, para no volver 30 minutos después y descubrir que lleva 25 bloqueado.

### LLMOps: el bucle de retroalimentación

El problema del arnés es que no sabemos qué tan bien funciona. Hace falta un bucle de feedback para evaluar, diagnosticar y corregir: un mejor system prompt, otra configuración del modelo, otra forma de recuperar memorias. Eso es **LLMOps** (*large language model operations*), término que según el autor menciona a menudo Y Combinator.

**1. Tracing.** Una ejecución va del input del usuario a la respuesta, con todas las llamadas a herramientas intermedias. Por cada ejecución se registra un árbol de eventos (con herramientas como Langfuse o LangSmith):
- qué preguntó el usuario y qué se recuperó;
- cuántas veces y cómo se llamaron las herramientas;
- latencia total;
- tokens usados en llamadas, ejecución y RAG.

**2. Evaluación.** Responde a dos preguntas: ¿fue una buena ejecución? y ¿fue saludable?
- LLM como juez para puntuar el desempeño.
- Comprobaciones como: ¿se disparó realmente la reunión?, ¿tardó 20 segundos o 2 milisegundos?, ¿cuántos tokens consumió?
- Puede implementarse con código determinista o con un agente.

**3. Diagnóstico.** Dónde y por qué falló algo:
- La reunión nunca se agendó: investigarlo, por ejemplo con un agente de código como Claude Code.
- Latencia de 20 s: quizá una herramienta tarda demasiado o la memoria de trabajo es enorme; no toda pregunta necesita recuperar de todo el sistema de memoria ("¿cuándo se fundó OpenAI?" ya lo sabe el modelo).
- Un dashboard de métricas para diagnosticar.

**4. Compuerta de despliegue.**
- Si la evaluación pasa, se despliega una corrección simple: nueva versión del prompt, configuración del modelo, cambios de herramientas o parámetros de recuperación. LLMOps los realimenta al agent run y se cierra un ciclo.
- Si algo está profundamente roto: arreglar el bug, volver a ejecutar, volver a trazar y volver a evaluar.

### Visión de conjunto

> "Todo esto es un conjunto de arneses con los que controlamos este caballo, esta tecnología, para que corra en la dirección correcta. Y a la vez tenemos un sistema de evaluación para que el sistema sea autónomo y se automejore con el tiempo."

## Conceptos clave

- **Agent run**: una ejecución desde el input del usuario hasta la respuesta, incluidas las llamadas a herramientas intermedias; efímera por defecto.
- **Harness**: framework de control alrededor del LLM (memoria, herramientas, bucles, guardrails) para reducir la aleatoriedad y dirigirlo.
- **Memoria de trabajo / procedimental / semántica / episódica**: contexto de la ejecución / instrucciones y skills / hechos duraderos / serie temporal de eventos.
- **Consolidación de memoria**: destilar periódicamente conversaciones en hechos semánticos mediante un agente resumidor, controlado por una compuerta.
- **RAG**: recuperación por similitud semántica para traer solo el contexto relevante.
- **Loop engineering**: diseño del bucle de llamadas a herramientas y razonamiento hasta completar la tarea.
- **Guardrails de fin de bucle**: criterios para detener el bucle (tarea terminada, punto final acordado con el usuario, espera de permisos).
- **LLMOps**: operación continua del sistema de agentes: tracing, evaluación, diagnóstico y despliegue de mejoras.
- **Tracing**: registro en árbol de los eventos de cada ejecución (recuperaciones, herramientas, latencia, tokens).
- **LLM como juez**: usar un modelo para puntuar la calidad de una ejecución.

## Herramientas y referencias mencionadas

- Frameworks: LangGraph, LangChain, Pydantic
- Tracing: Langfuse, LangSmith
- Almacenamiento: AWS, Supabase, Google Cloud, Azure
- Herramientas de negocio de ejemplo: Salesforce, HubSpot, Stripe, Alipay
- Claude Code (skills, hooks, permisos), ChatGPT, DeepSeek
- Y Combinator (como difusor del término evals/LLMOps)
- Video previo del autor sobre memoria de agentes

## Referencias

- Transcripción: [[GrNbuWWJYiI - harness-y-loop-engineering-en-19-minutos|Transcripción completa]]
- Video: [You Can Learn AI Agent Harness & Loop Engineering In 19 Min | LLM Ops, Eval, Tracing, RAG](https://www.youtube.com/watch?v=GrNbuWWJYiI) — Sean‘s AI Stories
