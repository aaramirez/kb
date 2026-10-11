---
title: "Arquitectura de IA: no todo es un agente (agentes, skills, subagentes y harness)"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/orquestacion-multiagente
channel: "Attekita Dev"
speaker: "Carol (Attekita Dev)"
videoId: "JXCvqJzOp-g"
source: "https://www.youtube.com/watch?v=JXCvqJzOp-g"
language: "pt"
playlistOrder: 8
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Pare de chamar tudo de Agente: Aprenda Arquitetura de IA do jeito certo"
related:
  - "[[JXCvqJzOp-g - arquitectura-de-ia-no-todo-es-un-agente|Transcripción]]"
---

# Arquitectura de IA: no todo es un agente (agentes, skills, subagentes y harness)

Video conceptual en portugués del canal Attekita Dev, presentado por Carol. Es una charla introductoria que ordena la "sopa de letras" del uso estructurado de la IA (agentes, skills, subagentes, harness, MCP) bajo el paraguas de la **arquitectura de IA**, y ofrece criterios prácticos sobre cuándo usar cada pieza, con ejemplos de sus propias skills para generar metadatos y thumbnails de YouTube.

Para el harness engineering aporta una definición clara de agente (LLM + harness en un bucle de acción), sitúa el harness como el lugar donde "ocurre la arquitectura" y propone una guía de decisión: script, skill, agente o subagentes según la previsibilidad y el tamaño de la tarea.

## Resumen

- **Skills y agentes no compiten**: ambos forman parte de la arquitectura de IA y se combinan.
- **El contexto es lo más importante**: la calidad del output depende de la calidad del input; el prompt repetitivo es una forma casual y poco eficiente de dar contexto.
- **No todo es un agente**: un agente es un LLM puesto en un ciclo de acción (LLM + harness) que no solo responde sino que ejecuta acciones.
- **Evolución**: asistentes de texto sin conexión al exterior (2022) → MCP como interfaz universal de herramientas (2024) → agentes autónomos.
- **Agent loop**: entender, planificar el siguiente paso, usar herramientas, verificar y ajustar hasta concluir.
- **El harness es donde ocurre la arquitectura**: define instrucciones, skills permitidas, herramientas, archivos, permisos y memoria.
- **Producto ≠ modelo**: el mismo LLM con harness distintos produce agentes especializados distintos (Claude Code, Claude Design, Codex).
- **Skill = proceso conocido y previsible**; **agente = proceso desconocido o investigativo** que requiere especialización.
- **Subagentes para proteger la ventana de contexto**: ejecutan tareas en una ventana paralela y devuelven solo el resultado.
- **No todo necesita un LLM**: un proceso bien definido puede ser un script o una automatización en n8n o Zapier.

## Contenido estructurado

### Del prompt al uso estructurado
La pregunta de partida es "¿skills o agentes?". La respuesta: no es uno u otro; ambos, junto con subagentes y harness, forman la arquitectura de IA.

La autora insiste en el contexto: la información que se le da a la IA para que trabaje. Si se usa el mismo prompt una y otra vez, o se entra en un bucle de corrección para lograr calidad, probablemente no se está usando la IA de forma estructurada. Las skills y los agentes surgieron para no tener que repetir lo mismo cada vez.

> "La calidad del output también depende de la calidad de tu input."

### Qué es (y qué no es) un agente
Hoy "todo es agente": cualquier automatización recibe ese nombre. Definición propuesta:

> "Un agente básicamente es un modelo, un gran modelo de lenguaje, colocado en un ciclo de acción; es decir, es un gran modelo de lenguaje más lo que llamamos harness."

Evolución histórica:

- **2022, asistentes de IA**: interacción en lenguaje natural, salida de texto, sin conexión con herramientas ni capacidad de actuar (el ChatGPT inicial).
- **2024, MCP**: interfaz universal para conectar herramientas con el LLM. Antes cada integración era reinventar la rueda; el estándar produjo un *boom* de integraciones y fue la base de los agentes.
- **Hoy, agentes autónomos**: a partir del prompt, el agente entiende qué hacer, piensa el siguiente paso, se conecta a herramientas, ejecuta y verifica en un bucle (*agent loop*) hasta completar la tarea.

Ejemplo: Claude Code es un agente de codificación: un LLM (por ejemplo Claude Opus 4.7) conectado a un harness. Ante "investiga los errores de este proyecto y arréglalos", investiga, propone, verifica y repite hasta concluir.

### LLM + harness
- El **LLM** es el motor de razonamiento ("el cerebro"). Sin herramientas ni guías, se limita a lo conversacional, como un chatbot.
- El **harness** le aporta herramientas, memoria, permisos, archivos y guías. Antes quizá se llamaba *context engineering*.
- **Producto ≠ modelo**: con un GPT o cualquier LLM se puede construir un agente especializado con un harness específico, y normalmente se puede cambiar el modelo central.

> "El harness es donde la arquitectura de verdad ocurre."

Un harness bien diseñado responde preguntas que normalmente se empujarían a un prompt:

- ¿Cuándo debe cargarse una skill?
- ¿Qué herramientas se pueden usar y con qué tipo de ejecución?
- ¿El agente puede editar archivos o necesita permisos?
- ¿Qué debe ser memoria persistente y qué solo estado temporal?
- ¿Cuándo conviene delegar en un subagente para optimizar la ventana de contexto?

Crear un agente especializado es más simple de lo que parece: archivos Markdown con guías de qué puede y no puede hacer, que se pueden generar con Codex o Claude Code. Al estar preconfigurados y optimizados, evitan repetir información y consumir tokens de más, porque "contexto es igual a tokens". Ejemplo: un agente especializado en code review.

### Qué es una skill
> "Una skill es para procesos en los que sabes exactamente qué pasos deben seguirse."

- Paquete de instrucciones reutilizable que debe seguirse paso a paso para lograr previsibilidad.
- Reutilizable por distintos agentes: una skill de "escribir informe" puede usarla un agente de investigación o uno de code review.
- Se usan agentes para procesos desconocidos o investigativos; skills para procesos con pasos conocidos que requieren previsibilidad (informes, artículos, prompts de thumbnails, propuestas comerciales).

### Ejemplos de la autora
- **Agente code reviewer**: revisa PRs y devuelve una code review.
- **Skill de metadatos de YouTube**: sigue un paso a paso y consulta archivos de referencia (estrategia de contenido, guía, estrategia de marca) para producir título, hashtags y palabras clave. Sustituye una herramienta de pago que usaba antes.
- **Skill de prompts de thumbnails**: genera tres opciones de titular y, a partir de la interacción, los prompts para generar las imágenes en ChatGPT (GPT Image) o Nano Banana. Solo entrega el prompt; dentro de un agente se podría conectar a otras herramientas para generar las imágenes.
- **Agente estratega de contenido**: puede usar ambas skills para tareas concretas.

### Arquitectura híbrida
El problema del "agente suelto" para tareas previsibles: puede acceder a demasiados archivos innecesarios y gastar más tokens de los debidos. La skill está optimizada para ese propósito. Pero no es excluyente: un agente hiperespecializado puede usar skills ya desarrolladas.

### Subagentes y la fatiga de la ventana de contexto
Un subagente es una forma distinta de ejecutar una definición de agente, pensada para ahorrar ventana de contexto, uno de los mayores cuellos de botella actuales: el modelo pierde capacidad de razonamiento a medida que la ventana crece.

Funcionamiento: desde la ventana principal se pide, por ejemplo, a Claude que invoque a un agente de investigación como subagente; este abre una ventana de contexto paralela, ejecuta la tarea (con skills u otras herramientas) y devuelve solo el resultado, sin contaminar la ventana principal.

> "Todo lo que pensamos hoy en arquitectura [...] skills, agents, subagents, es justamente para optimizar la ventana de contexto, entregarte un mejor resultado y, sobre todo, reducir costos."

### Guía de decisión
| Situación | Pieza recomendada |
|---|---|
| Proceso bien definido sin necesidad de interpretación (mover o convertir archivos) | Script o automatización (n8n, Zapier); no hace falta un LLM. |
| Tarea que exige interpretación pero con pasos definidos (de un briefing a una propuesta de presupuesto) | Skill. |
| Tarea más amplia o investigativa | Agente especializado, que puede usar varias skills. |
| Tarea grande divisible entre especialistas | Subagentes en ventanas paralelas. |

> "Si hay un paso a paso, eso puede ser una skill. Si hay una especialización, eso puede ser un agente."

### Profesionalización
Se habló mucho de prompting; ahora se empieza a hablar de arquitectura de IA. El siguiente nivel es "transformar conocimiento en sistema". Las empresas buscan no a quien sabe interactuar con Claude Code mediante un prompt, sino a quien usa la IA de forma optimizada por resultado, coste y rendimiento. Muchas frustraciones (alucinaciones, bucles de corrección) vienen de contaminar la ventana de contexto por no usar la IA de forma estructurada. La autora reconoce que el tema es nuevo para todos y que nadie puede "dictar reglas" todavía.

## Conceptos clave

- **Arquitectura de IA**: la organización de agentes, skills, subagentes, harness y herramientas para usar la IA de forma estructurada.
- **Agente**: LLM en un ciclo de acción, es decir, LLM + harness, capaz de ejecutar acciones, no solo de responder.
- **Harness**: el sistema que rodea al LLM (herramientas, memoria, permisos, archivos, guías) y define cómo opera el agente.
- **Agent loop**: ciclo de entender, actuar, verificar y ajustar hasta completar la tarea.
- **Skill**: paquete de instrucciones reutilizable para un proceso conocido que requiere previsibilidad.
- **Subagente**: ejecución de una definición de agente en una ventana de contexto paralela que devuelve solo el resultado.
- **MCP**: interfaz universal para conectar herramientas con LLMs; base de los agentes.
- **Fatiga de la ventana de contexto**: pérdida de capacidad de razonamiento del modelo conforme crece el contexto.

## Herramientas y referencias mencionadas

- Claude Code, Claude Design, Codex, ChatGPT.
- Claude Opus 4.7 (como ejemplo de LLM).
- MCP (Model Context Protocol).
- GPT Image, Nano Banana (generación de imágenes).
- n8n, Zapier (automatización sin LLM).
- Spec-Driven Development (video previo de la autora).
- Patrocinio: MBAs de TripleTen (Nebius), con certificado de Arizona State University.

## Referencias

- Transcripción: [[JXCvqJzOp-g - arquitectura-de-ia-no-todo-es-un-agente|Transcripción completa]]
- Video: [Pare de chamar tudo de Agente: Aprenda Arquitetura de IA do jeito certo](https://www.youtube.com/watch?v=JXCvqJzOp-g) — Attekita Dev
