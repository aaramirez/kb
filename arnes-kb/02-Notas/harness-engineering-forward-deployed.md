---
title: "Harness engineering para forward deployed engineers: cinco pilares y el framework de DeepSeek"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/frameworks
channel: "The Cutting Edge School"
speaker: "The Cutting Edge School (presentado por Ansh y un segundo instructor)"
videoId: "tYchws8hpd8"
source: "https://www.youtube.com/watch?v=tYchws8hpd8"
language: "en"
playlistOrder: 54
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "AI Harness Engineering - Forward Deployed Engineering Tutorial"
related:
  - "[[tYchws8hpd8 - harness-engineering-forward-deployed|Transcripción]]"
---

# Harness engineering para forward deployed engineers: cinco pilares y el framework de DeepSeek

Tutorial introductorio de unos 15 minutos del canal **The Cutting Edge School**. Lo abre Ansh con una analogía histórica (la máquina de vapor de James Watt, el caballo de fuerza y el arnés que controla al caballo) y lo continúa otro instructor. Primero explica el concepto con la analogía del cuerpo humano y lo compara con el prompt engineering y el context engineering. Luego propone **cinco pilares** de todo harness y cierra con una demo en la que instala en local el **framework de harness open source publicado por DeepSeek**, conecta un modelo de OpenAI y recorre su sistema de plugins.

Para el harness engineering es una buena introducción conceptual: el modelo es solo el cerebro, y el producto lo define el entorno. Ilustra también la idea de que "todo es un plugin" en un harness propio, frente a los harnesses cerrados de Claude Code o Codex.

## Resumen

- **El harness importa más que el modelo**: la mayoría cree que elegir el modelo correcto es lo principal de un producto de IA, pero lo principal es el harness.
- **Definición**: diseñar el entorno, las herramientas, el contexto, las reglas, el estado y los ciclos de feedback alrededor del modelo; es decir, el entorno completo donde vive.
- **Analogía del cuerpo**: el modelo es el cerebro; sin memoria, manos y sistema nervioso no puede actuar en el mundo real.
- **Prompt, context y harness engineering**: el prompt da órdenes, el contexto permite ver qué pasa alrededor, y el harness construye todo el entorno (contexto + herramientas + control).
- **Los agentes de larga duración se rompen**: el trabajo del ingeniero es construir el entorno para que no se rompan, con guardrails, seguridad y ciclos de reintento, en lugar de repetir prompts y contexto.
- **Mismo modelo, distintos harnesses**: Claude Chat, Claude Cowork y Claude Code (y ChatGPT frente a Codex) usan el mismo modelo en entornos distintos.
- **Cinco pilares**: contexto (ojos y memoria), acción (manos), orquestación (sistema nervioso), control (sistema inmune y reflejos) y feedback (signos vitales).
- **Demo con el framework de DeepSeek**: open source, admite cualquier modelo, "todo es un plugin", ejecuciones trazables y varios modos (estándar, PTC, mínimo y creador).
- **Cambiar de modelo es trivial**: se añade OpenAI como proveedor con una API key y se cambia el modelo en la sesión.
- **Modo creador**: permite modificar la propia interfaz del harness con plugins (por ejemplo, una ballena flotante o un juego de snake), algo que Claude Code y Codex no exponen directamente.

## Contenido estructurado

### Introducción: caballos de fuerza y arneses

- En la década de 1770, las industrias dependían de caballos. James Watt introdujo la máquina de vapor, pero explicarla en volumen de cilindro o presión de caldera no significaba nada para los dueños de minas, que solo preguntaban cuántos caballos reemplazaba. De ahí se popularizó el término **caballo de fuerza**.
- Un caballo no se controla sin un arnés (collar, hebillas). Del mismo modo, una IA potente necesita un harness: sin él, "malgasta tiempo y dinero y va en direcciones que no quieres".
- **Harness engineering** es la disciplina de crear y probar ese harness, una habilidad que según el video "no se enseña bien en ningún sitio".

> "La mayoría piensa que elegir el modelo de IA correcto es lo principal del producto, pero no lo es. Es el harness."

### Definición y analogía del cuerpo humano

> "Harness engineering es diseñar el entorno, las herramientas, el contexto, las reglas, el estado y los ciclos de feedback alrededor de los modelos de IA."

- Un cerebro aislado en una habitación puede pensar, razonar y decidir, pero no puede hacer mucho en el mundo real: necesita memoria, manos y sistema nervioso.
- El modelo es ese cerebro. Para ser un producto necesita **contexto** (saber qué es relevante), **herramientas** (hacer cosas), **orquestación** (coordinar pasos), **control** (no hacer lo que quiera) y **feedback** (saber si lo que hizo funcionó).

### Prompt, context y harness engineering

| Disciplina | Qué hace |
|---|---|
| Prompt engineering | Le dices al modelo qué hacer; sistema de una o dos vías (orden y respuesta). |
| Context engineering | Le permite ver qué pasa alrededor (documentos, cómo funcionan las cosas) para responder mejor. |
| Harness engineering | Construyes todo el entorno alrededor del modelo: contexto + herramientas necesarias para hacer el trabajo. |

- Si un agente corre el tiempo suficiente, "está destinado a romperse". El trabajo del ingeniero es construir un entorno que lo evite, con **guardrails**, **seguridad** y **ciclos de feedback o de reintento** para que se recupere solo.
- Resultado: "no le vuelves a dar prompts una y otra vez [...] construyes mejores sistemas".

### Mismo modelo, distintos harnesses

- **Claude** tiene tres interfaces con el mismo modelo:
  - **Chat**: preguntas y respuestas con investigación web.
  - **Cowork**: conecta skills y herramientas de trabajo; ejecuta tareas en tu nombre y espera tu aprobación.
  - **Code**: interactúa con tu sistema, la terminal, tus herramientas internas y tu entorno de código; es "la versión mejorada del chat en un mejor harness".
- Lo mismo ocurre con ChatGPT y Codex: entornos distintos para el mismo modelo, que se comporta mejor gracias al harness.

### Los cinco pilares del harness

| Pilar | Componentes | Analogía corporal |
|---|---|---|
| 1. Contexto | Context engineering, memoria, RAG, recuperación de conocimiento, instrucciones | Ojos y memoria |
| 2. Acción | Herramientas, MCP, APIs, acceso al navegador, ejecución de código, archivos | Manos y extremidades |
| 3. Orquestación | Planificación, loops, estado, descomposición de tareas, checkpoints, subagentes, workflows | Sistema nervioso |
| 4. Control | Guardrails, permisos, validaciones, aprobaciones | Sistema inmune y reflejos |
| 5. Feedback | Evals, tracing, logs, monitorización, señales de error, latencia | Signos vitales |

> "Cada vez que intentes construir un agente de IA o el harness a su alrededor, tienes que trabajar en estos cinco pilares."

### Demo: framework de harness open source de DeepSeek

- Como Claude Code y Codex ya existen, el instructor propone construir un harness propio partiendo del **framework open source de DeepSeek** (repositorio en GitHub).
- Características que destaca de su documentación:
  - Admite **cualquier modelo**.
  - **"Todo es un plugin"**: herramientas, frontend, componentes y seguridad se pueden cambiar, actualizar o eliminar.
  - **Cada ejecución es trazable**: se puede monitorizar el agente.
  - **Varios modos de ejecución**: estándar, PTC, mínimo y **creador**.
  - Lema: el harness "es lo que mantiene a los agentes funcionando en entornos reales".
- Instalación para no técnicos: copiar el comando del README, pegarlo en Claude Code o Codex y pedirle "configura esto". Después, pedirle que arranque el servidor, que devuelve una URL local.

### Interfaz y cambio de proveedor de modelo

- La interfaz es parecida a Claude Code o Codex: espacios de trabajo a la izquierda, y cada sesión se limita a una carpeta (crea `demo one`).
- Sin API key no responde. Para demostrar que el modelo es intercambiable:
  1. Crea una API key en platform.openai.com con un nombre descriptivo y caducidad de un día, e insiste en guardarla de forma segura.
  2. En *Settings → Models → Providers* añade OpenAI con la clave.
  3. En una sesión nueva cambia el modelo de DeepSeek a GPT-4.1 y obtiene respuesta.

> "Tu capacidad de crear sistemas es ahora lo importante."

### Plugins y modo creador

- En *Settings* hay modelos, plugins (con archivo de configuración editable), shell, agent loop, subagentes, búsqueda web y una lista de plugins modificables.
- Con Claude Code o Codex no se tiene acceso directo a esos cambios: usas su harness tal como está.
- Demos del sitio de DeepSeek en modo creador: una **ballena flotante** en la app, como una mascota, y un plugin de **juego de snake** creado con un prompt ("añade un juego de snake jugable"), que modifica la propia interfaz.
- Conclusión: el modelo ya no es lo principal de un producto de IA; cuanto mejor sea el contexto y más trabajados estén los cinco pilares, mejor rinde.

## Conceptos clave

- **Harness engineering**: diseño del entorno, herramientas, contexto, reglas, estado y ciclos de feedback alrededor de un modelo.
- **Modelo como cerebro**: el modelo razona, pero sin harness no es un producto.
- **Cinco pilares**: contexto, acción, orquestación, control y feedback.
- **Guardrails y ciclos de reintento**: mecanismos de control y feedback que evitan que un agente de larga duración se rompa.
- **Mismo modelo, distinto entorno**: Chat, Cowork y Code muestran que el comportamiento depende del harness.
- **Arquitectura "todo es un plugin"**: harness en el que herramientas, UI, seguridad y modelo son piezas intercambiables.
- **Modo creador**: modo del framework de DeepSeek para crear workflows y plugins que modifican el propio harness.

## Herramientas y referencias mencionadas

- Framework de harness open source de DeepSeek (GitHub), con modos estándar, PTC, mínimo y creador.
- Claude (Chat, Cowork, Code), ChatGPT y Codex.
- OpenAI Platform (API keys), GPT-4.1.
- MCP, RAG.
- James Watt (analogía histórica).

## Referencias

- Transcripción: [[tYchws8hpd8 - harness-engineering-forward-deployed|Transcripción completa]]
- Video: [AI Harness Engineering - Forward Deployed Engineering Tutorial](https://www.youtube.com/watch?v=tYchws8hpd8) — The Cutting Edge School
