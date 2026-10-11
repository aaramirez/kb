---
title: "Memoria de agentes y harness engineering: las siete capas de un agent harness"
tags:
  - arnes/nota
  - type/nota
  - arnes/contexto-y-memoria
  - arnes/construccion
channel: "AI Engineer"
speaker: "Ignacio Martínez (Oracle)"
videoId: "xs-ob87TTzg"
source: "https://www.youtube.com/watch?v=xs-ob87TTzg"
language: "en"
playlistOrder: 23
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Total Recall: Agent Memory and Harness Engineering — Ignacio Martinez, Oracle"
related:
  - "[[xs-ob87TTzg - memoria-de-agentes-y-harness-engineering|Transcripción]]"
---

# Memoria de agentes y harness engineering: las siete capas de un agent harness

Workshop de Ignacio Martínez, developer advocate de Oracle (siete años en la empresa, coautor de un curso sobre memoria de agentes con Andrew Ng), en la conferencia AI Engineer. Los primeros ~40 minutos son una charla conceptual sobre el *agent stack*, la capa de datos, la memoria y las siete capas de un agent harness; el resto es la puesta en marcha de un workshop práctico ("Total Recall") en GitHub Codespaces con un notebook y una app de demostración, más preguntas del público.

La tesis: los modelos son "la parte congelada del razonamiento", algo que se alquila y no se controla; lo que el equipo sí controla son los datos, y ahí vive el harness. Es una charla con sesgo comercial (Oracle Database, DBFS, Oracle Agent Memory Package), pero aporta un marco útil para pensar memoria, almacenamiento, capa semántica y aprendizaje continuo dentro de un harness.

## Resumen

- **Agente = modelo + harness**: el modelo aporta el razonamiento; memoria, herramientas y percepción son el harness.
- **El objetivo del harness**: convertir un modelo no determinista en resultados fiables y repetibles.
- **La capa de datos es la que controlas**: aplicación, modelo, infraestructura y cómputo se están commoditizando; los datos no.
- **Siete capas del harness**: modelo, almacenamiento, ingeniería de memoria (codificación/búsqueda/recuperación), capa semántica, agent loop y context engineering (más aprendizaje continuo).
- **Archivos frente a bases de datos**: los archivos encajan con el instinto de los modelos pero carecen de consistencia transaccional, búsqueda híbrida y backups; propone un enfoque híbrido.
- **Tipos de memoria**: corto plazo (efímera, p. ej. la to-do list), largo plazo (episódica, procedimental, preferencias) y memoria compartida entre agentes.
- **Context rot**: cuanto más se mete en la ventana, menos atención recibe cada elemento; la ventana debe ser lo más pequeña posible.
- **Capa semántica como *Umwelt***: captura "lo no dicho", el conocimiento tribal e institucional de la organización.
- **Toolbox y skillbox**: recuperar herramientas y skills solo cuando se necesitan y ensamblar el contexto en cada iteración del loop.
- **Aprendizaje continuo en el espacio de tokens**: promover skills y workflows exitosos mediante destilación, sin tocar pesos.

## Contenido estructurado

### El agent stack y la capa de datos

Todo agente se apoya en cinco capas:

1. **Aplicación**: la superficie de producto.
2. **Datos**: memoria, conocimiento, recuperación, codificación, búsqueda.
3. **Modelo**: el LLM que razona.
4. **Infraestructura**: orquestación, qué modelo servir según el esfuerzo de razonamiento.
5. **Cómputo**: nube, GPUs y motor de base de datos.

Todas salvo los datos se están commoditizando: "lo que más controlamos al trabajar con aplicaciones de IA son los datos", y el harness vive muy cerca de esa capa. Dentro de ella están el **gateway y MCP** (que conectan al LLM con datos y herramientas; ejemplo: crear un MCP para que el modelo hable con Outlook) y, encima, las capas de memoria, semántica, recuperación, contexto, herramientas y skills.

### Formas de las aplicaciones y definición de agente

Cuatro formas de aplicaciones de IA:

- **Chatbots LLM**: pasivos, responden cuando se les pregunta.
- **RAG**: semipasivos, con procesamiento en segundo plano.
- **Workflows dirigidos por LLM**: aportan automatización.
- **Agentes de IA**: aportan autonomía.

Herramientas como Claude Code o Codex combinan **automatización (fiabilidad) + autonomía (flexibilidad)** sobre un harness propietario. Definición de agente:

> "Una entidad autónoma cuyas funciones cognitivas están impulsadas por un LLM para el razonamiento, aumentada por una base de datos o archivos para la memoria, extendida mediante herramientas para la acción y anclada en entradas que le permiten percibir su entorno."

El razonamiento es lo que se alquila; memoria, herramientas y percepción son personalizables. Los modelos son intercambiables gracias a interfaces comunes (protocolo de OpenAI, especificación de la API de Anthropic), así que el foco es el harness.

### Las siete capas de un agent harness

1. **Modelo**: el núcleo de razonamiento "congelado"; el 99,9 % del tiempo sus pesos no cambian salvo que se tengan millones de dólares o muchas GPUs.
2. **Almacenamiento**: dónde vive físicamente la memoria (archivos, bases de datos o híbrido).
3. **Ingeniería de memoria**: codificación, búsqueda y recuperación.
4. **Capa semántica**: el vocabulario oculto y propio de la organización que se asume que el LLM conoce.
5. **Agent loop**: el "conductor" que convierte un modelo en agente.
6. **Context engineering**: técnicas para mantener la ventana lo más pequeña y relevante posible.
7. **Aprendizaje continuo**: mejorar el agente con el tiempo.

### Archivos frente a bases de datos

El "dilema" que según el ponente se discute desde enero. Hay maximalistas de ambos lados y "ambos tienen razón":

**Archivos**
- Encajan con el instinto de los modelos; fáciles de crear y de anexar; naturaleza no estructurada.
- Semántica POSIX, compatibles con cualquier sistema operativo.
- Sin consistencia transaccional: con 8, 16 o 32 agentes a la vez no se puede modificar el mismo archivo simultáneamente. El parche actual son los **worktrees**: cada agente trabaja en su worktree y luego se fusiona a main.
- Sin búsqueda híbrida (solo expresiones regulares o derivados) y sin backups.

**Bases de datos**
- ACID, alta disponibilidad con replicación, búsqueda vectorial, relaciones, seguridad.
- "Cosas que la base de datos resolvió hace 35 o 40 años y que la gente ha olvidado."

Propuesta: un sistema híbrido. La **memoria de corto plazo vive en archivos**; lo que se promueve a largo plazo (por ejemplo, preferencias del usuario) va a un espacio estructurado. Oracle ofrece **DBFS** (un sistema de archivos dentro de la base de datos) y, para recuperación, la integración LangChain OracleDB y embeddings dentro de la base de datos (útil para retención y seguridad de datos al no llamar a un servicio externo). En el workshop se hace un experimento con tres agentes intentando actualizar un contador en el mismo archivo.

Describe también el flujo típico de RAG: documentos → bi-encoder (modelo de embeddings) → vectores en un vector store → embedding de la consulta → comparación → cross-encoder (re-ranker). Y el preprocesamiento: tokenización, deduplicación, normalización, redacción de datos personales. Critica la sobrecarga de sincronizar varias bases de datos especializadas (texto, metadatos JSON, vectores) y presenta la base de datos "convergente" de Oracle como respuesta: un motor, una interfaz de consulta y un único vector de ataque que proteger.

### Memoria de agentes

> "La memoria de agentes es la descripción de todos los mecanismos y sistemas que permiten a un agente retener, reutilizar, refinar y recordar información."

El objetivo: que un problema que costó tres horas sea más fácil la próxima vez, para el agente o para el ingeniero.

- **Corto plazo**: efímera, para lo que ocurre ahora (p. ej. la to-do list de un agente de código).
- **Largo plazo**:
  - **Episódica**: conversaciones previas, útiles para refinar workflows y skills.
  - **Procedimental**: workflows que funcionaron (p. ej. un frontend que quedó bien convertido en un flujo repetible).
- **Compartida**: lo que ocurre cuando un subagente se comunica con su padre o dos agentes colaboran.

Ante quienes dicen "basta con una ventana de 15 millones de tokens": la ventana de contexto es solo un tipo de memoria de corto plazo.

### Context rot e ingeniería de memoria

El **context rot** o degradación del contexto: cuanto más se mete en la ventana, menos atención recibe cada cosa. La analogía: una conversación de 30 minutos frente a una de 8 horas. La matriz de atención escala de forma cuadrática (cada token referencia a todos los demás), así que conviene mantener la ventana lo más pequeña posible.

Sin una solución gestionada, el ingeniero debe decidir cuándo compactar, cuándo resumir, cómo escribir el resumidor, qué conservar, qué extraer de conversaciones previas y cuántos tokens usar. El **Oracle Agent Memory Package (OAMP)** pretende resolverlo "en una sola línea de código" mediante una **context card** con:

- **Temas** que orientan al modelo.
- **Resumen** que compacta el hilo y declara la intención actual.
- **Información relevante**: hechos, preferencias y recuerdos asociados.
- **Memorias episódicas** que registran la pregunta abierta en curso.
- **Mensajes recientes** como contexto local.

Ante una pregunta del público, aclara que la context card no va "directo al modelo": es una abstracción del harness para que el modelo rinda de la forma más fiable posible.

### La capa semántica: el *Umwelt* y lo no dicho

Toma el concepto de *Umwelt* de Jakob von Uexküll: cada organismo percibe la realidad a través de la lente de lo que tiene acceso. El agente también tiene una lente: lo que se le entrenó y el contexto que se le da. La capa semántica es el *Umwelt* del agente.

Lo importante es **"lo no dicho"**: el conocimiento que no mencionas a un colega porque ya lo comparten, pero que tendrías que explicar con detalle a alguien nuevo. Es el conocimiento tribal e institucional: cómo se modelan los datos, cómo se ejecutan las consultas, cuáles son los metadatos.

### Agent loop, context engineering y aprendizaje continuo

- **Agent loop**: el ciclo observar → razonar → actuar, tolerante a fallos para no salir del loop. Da autonomía al modelo para que se convierta en agente.
- **Toolbox y skillbox**: almacenar herramientas y skills disponibles y recuperarlas solo cuando hacen falta; en cada iteración se evalúa si siguen siendo pertinentes y, si no, se retiran temporalmente. "Ensamblamos el contexto en cada iteración del agent loop."
- **Aprendizaje continuo** en tres niveles: pesos, representación (embeddings y re-ranking) y contexto/tokens. El workshop se centra en el espacio de tokens por ser el más barato y realista.
- **Promoción de skills y workflows**: un flujo que costó horas y salió bien se guarda en memoria; mediante destilación se genera un `SKILL.md` mejor que el original, se retira la versión vieja y queda una skill más personalizada (tono, preferencias de librerías o motores de base de datos).

### El workshop: Total Recall

- Registro en un sitio web, invitación a un repositorio y apertura en **GitHub Codespaces**.
- Un **notebook de estudiante** construye el harness desde cero: se empieza solo con el modelo (una pregunta vía la API de completions de OpenAI) y se van añadiendo capas; hay 19 tareas con documentación y soluciones.
- Una **app de demostración** ("mission control") con todas las capas implementadas: ante "muestra los ingresos totales por categoría de producto" visualiza las herramientas seleccionadas para el contexto, el esquema, las trazas, las skills cargadas y las llamadas a herramientas (SQL). En la demo detecta un error y sigue intentando gracias al loop tolerante a fallos; muestra además los tokens usados en la ventana.
- Los modelos se sirven desde **OCI Generative AI** (alianzas con Google, Meta, OpenAI y xAI), "el OpenRouter empresarial".

### Preguntas del público

- **Miles de herramientas**: el patrón toolbox con índices HNSW (grafos donde cada nodo es un índice vectorial) hace la recuperación despreciable; en la práctica las herramientas rara vez superan 100 o 1.000.
- **Descripciones de herramientas muy parecidas** (p. ej. unidades de negocio con distinto acceso a datos confidenciales): generar descripciones enriquecidas con un LLM para aumentar la separabilidad en la búsqueda vectorial, en lugar de técnicas "cavernícolas" como el reconocimiento de entidades.
- **Límite del agent loop**: con el modelo que usan en la demo (un "4.1 fast reasoning") un máximo de 8 a 12 llamadas a herramientas antes de rendirse; define una variable de "histéresis" que fija la paciencia del harness con el modelo.
- **Enrutamiento de modelos**: problemas difíciles a un modelo frontera y fáciles a un SLM de pesos abiertos. Su opinión: el futuro es una "mezcla de pequeños expertos" con un orquestador que enruta cada consulta.

## Conceptos clave

- **Agent harness**: todo lo que rodea al modelo (memoria, herramientas, percepción, loop, contexto) para producir resultados fiables y repetibles.
- **Modelo congelado**: el núcleo de razonamiento cuyos pesos no cambian; se alquila y no se controla.
- **Memoria de agentes**: mecanismos para retener, reutilizar, refinar y recordar información.
- **Memoria episódica / procedimental**: recuerdos de conversaciones previas / workflows exitosos reutilizables.
- **Context rot**: degradación de la atención a medida que crece la ventana de contexto.
- **Capa semántica (*Umwelt*)**: la lente con la que el agente interpreta todo; contiene el conocimiento tácito de la organización.
- **Toolbox / skillbox pattern**: recuperación bajo demanda de herramientas y skills para no saturar el contexto.
- **Promoción de skills**: destilar un workflow exitoso en una nueva versión de `SKILL.md`.
- **Histéresis del loop**: variable que fija cuántos intentos tolera el harness antes de rendirse.

## Herramientas y referencias mencionadas

- Oracle Database (base de datos convergente), Oracle DBFS, Oracle Agent Memory Package (OAMP), embeddings dentro de la base de datos
- LangChain OracleDB
- OCI Generative AI Service (Google, Meta, OpenAI, xAI)
- MCP, worktrees de git, índices HNSW
- Claude Code, Codex, Outlook (ejemplo de MCP)
- Andrew Ng: curso sobre memoria de agentes y próximo curso sobre aprendizaje continuo
- Jakob von Uexküll (concepto de *Umwelt*)
- GitHub Codespaces; repositorio "agent harness workshop"

## Referencias

- Transcripción: [[xs-ob87TTzg - memoria-de-agentes-y-harness-engineering|Transcripción completa]]
- Video: [Total Recall: Agent Memory and Harness Engineering — Ignacio Martinez, Oracle](https://www.youtube.com/watch?v=xs-ob87TTzg) — AI Engineer
