---
title: "Harness de agente en código real: bucle, memoria, evals y LLMOps con Waku Agent"
tags:
  - arnes/nota
  - type/nota
  - arnes/construccion
  - arnes/contexto-y-memoria
  - arnes/evals-y-observabilidad
channel: "Sean‘s AI Stories"
speaker: "Sean (Shen Sean Chan)"
videoId: "rvRyBhILrls"
source: "https://www.youtube.com/watch?v=rvRyBhILrls"
language: "en"
playlistOrder: 43
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "You Can Learn AI Agent Harness In Real Code In 20 Min | Loop Engineering, Memory, Eval, Open Source"
related:
  - "[[rvRyBhILrls - harness-en-codigo-real-en-20-minutos|Transcripción]]"
---

# Harness de agente en código real: bucle, memoria, evals y LLMOps con Waku Agent

Sean (canal Sean's AI Stories) presenta un recorrido práctico por **Waku Agent**, un asistente personal *local-first* de código abierto que él mismo publicó en GitHub. El video tiene dos partes: una demo de uso (crear eventos de calendario, consultar memoria, Telegram, voz) y un recorrido por el código del repositorio, mostrando dónde vive cada pieza del sistema.

Su interés para el harness engineering es que materializa en código los pilares que el autor había descrito en videos anteriores: **harness, bucle (loop engineering), memoria, evals y LLMOps**. Es comparable en espíritu a OpenClaw o Hermes Agent, pero deliberadamente simple. En palabras del autor, todos estos términos "son buzzwords": lo que se ve en la demo es exactamente lo que significan.

## Resumen

- **Proyecto open source local**: Waku Agent corre íntegramente en la máquina del usuario; datos, memoria y trazas se guardan en local.
- **Bucle de agente**: un loop con un máximo de 10 iteraciones por defecto que llama herramientas (búsqueda web, calendario, notas) hasta completar la tarea.
- **Puerta de recuperación (retrieval gate)**: antes del bucle, el sistema decide si necesita recuperar memoria o no.
- **Tres tipos de memoria**: semántica (hechos duraderos), episódica (eventos fechados) y procedimental (skills).
- **soul.md como system prompt** editable desde el dashboard, con efecto inmediato.
- **Skills = memoria procedimental**: carpetas con `skill.md` que describen cómo actuar; modificarlas cambia el comportamiento del agente.
- **Evals en dos niveles**: tests deterministas basados en reglas y LLM como juez (Anthropic) para preguntas cualitativas.
- **Trazas locales**: tokens, coste, número de llamadas al LLM, activaciones del retrieval gate y duración de cada tarea.
- **Múltiples gateways**: chat web, bot de Telegram y modo de voz con palabra de activación "Waku Waku".
- **Consolidación**: tras cada respuesta, el agente consolida hechos duraderos en la memoria semántica.

## Contenido estructurado

### Demo: el bucle de agente en acción

Primera petición: "encuéntrame los partidos restantes del Mundial y añádelos todos a mi calendario". El sistema:

1. Comprueba si necesita recuperar memoria y concluye que no.
2. Ejecuta el motor de bucle usando herramientas como `search web`, "pensando y repitiendo hasta terminar la tarea".
3. Pide permiso para acceder al calendario y crea el evento (el partido Noruega–Inglaterra) con la herramienta `create event`.

El dashboard muestra la lista de herramientas disponibles, el streaming en vivo del bucle, una vista de la arquitectura del sistema y el gasto en dinero. Por defecto usa las APIs de Anthropic, aunque se pueden usar modelos más baratos, incluidos modelos open source.

### Demo: memoria y recuperación

A la pregunta "¿quién es Sergey?", el sistema pasa por la puerta de recuperación, consulta la memoria y responde que es un amigo cercano. Este tipo de información se guarda en **memoria semántica** porque es un hecho duradero. Ejemplos de hechos almacenados: Sergey es un amigo que adora nadar y cocina muy bien; Raj juega muy bien al tenis y le enseña jerga británica; las cuentas de redes sociales del propio Sean.

A "¿cuáles son mis cuentas de redes sociales?", recupera la memoria y, como no hace falta ninguna herramienta, responde directamente.

También se puede **añadir memoria** conversando: "recuerda que Vincent y yo fuimos a París a hacer una entrevista sobre emprendimiento [...]". El agente llama a la herramienta `save note` y aparece un nuevo hecho semántico asociado a Vincent.

### Trazas y LLMOps

La pestaña de trazas muestra exactamente cuántos tokens y cuánto dinero se gastó, cuántas llamadas al LLM hubo, qué activó el retrieval gate para traer información de la base de datos y qué tareas tardaron más (la de los partidos del Mundial tardó casi 100 segundos). Todo se guarda en archivos locales de trazas.

> "Si usas herramientas de tracing como LangFuse [...], básicamente te ayudan a registrar este tipo de cosas. Pero en una máquina local, lo que quieres es guardarlo en tu ordenador, porque es tu asistente personal."

Si se quiere trazar en la nube, se puede conectar a Supabase o usar LangFuse directamente.

### Gateways: Telegram y voz

- **Telegram**: se crea un bot con BotFather (`/start`, `/newbot`, nombre) y se conversa con el agente; el historial se sincroniza en tiempo real con el dashboard. Todo sigue siendo local.
- **Voz**: `uv run waku voice` arranca un modo que escucha la palabra de activación "Waku Waku" (que significa emoción/entusiasmo en japonés; el proyecto antes se llamaba Jarvis). En la demo consulta el calendario, aunque el autor reconoce que la calidad de voz "todavía no es buena" e invita a contribuir.

### Recorrido del código

**Instalación**: clonar el repositorio desde el quick start del README y lanzar el dashboard en localhost. Hay que configurar en *settings* las API keys de los modelos (en su caso Anthropic y Gemini) y la de **Tavily** para búsqueda web.

**Carpeta `.waku`** (datos locales):
- **Base de datos** con las tablas consultables desde una consola SQL del dashboard.
- **`soul.md`**: el system prompt. Editable desde el dashboard (sección memoria) con efecto en tiempo real. Demo: añadir "di también *muchas gracias* cuando te sientas agradecido" y el agente responde "Muchas gracias" al cumplido.
- **`memory.md`**: los hechos duraderos (memoria semántica), también editables.
- **Trazas**: lista de eventos con herramientas usadas, resultados, tokens de entrada y salida y marcas de tiempo.

### Evals: deterministas y LLM como juez

La carpeta de evals tiene dos subcarpetas:

- **`deterministic`**: reglas explícitas de lo que se quiere comprobar (por ejemplo, que la herramienta de Apple Calendar funciona o que la memoria de trabajo funciona). "A veces el eval puede ser reglas muy simples."
- **`judge`**: usa modelos de Anthropic como juez para preguntas cualitativas ("¿esto fue bueno o no?", calidad de la respuesta). El autor reconoce que aún no ha escrito nada complejo aquí.

En la arquitectura, justo después de que el agente responde, se recorre la traza y se ejecutan los evals. Los resultados aparecen en la pestaña *ops*.

### Skills como memoria procedimental

> "Esto técnicamente también es memoria, pero se llama memoria procedimental. Es básicamente cómo esperas que actúe el agente."

Ejemplo: la skill *schedule meeting* indica resolver fechas relativas, revisar el contexto de memoria sobre preferencias de los asistentes y llamar a la herramienta `create event`. Al editarla para "añade siempre un emoji de corazón al evento" y pedir una reunión con Sam Altman a las 22:00 en Londres, el evento aparece con el corazón.

**Crear una skill nueva**: crear una carpeta en `skills/` con un `skill.md` (se puede escribir a mano o con Claude Code). La skill de ejemplo genera títulos de YouTube al estilo del canal: leer la memoria sobre el canal, usar `search web` para confirmar los últimos 5–10 videos, leer el brief del usuario y proponer un título. Funciona (busca primero en la web porque se le pidió), aunque el resultado "no es muy bueno"; la idea es iterar.

> "Lo único que estamos haciendo es preparar el contexto adecuado para el agente."

### Estructura del código del paquete

- **Gateway**: Telegram y voz.
- **Agent**: el bucle con iteraciones (máximo 10 por defecto) hasta alcanzar el objetivo.
- **Model**: configuración de los modelos de IA.
- **Memory**: almacenamiento de memoria episódica, carga de memoria procedimental (skills) y memoria semántica, actualizada por una tarea de **consolidación**.
- **Ops**: dashboard, publicación de nuevos prompts y tracing.
- **Runtime**: controla las sesiones de cada ejecución del agente.
- **Tools**: Apple Calendar, notas, búsqueda con Tavily; MCPs previstos para futuras iteraciones.
- **Clase `Waku`**: la app principal, un agente de preguntas y respuestas que recibe modelo, cliente, system prompt, mensajes, herramientas, máximo de iteraciones, máximo de tokens, observadores y streaming.

### Recapitulación de la arquitectura

1. El usuario envía una petición por un **gateway**.
2. El sistema prepara la memoria adecuada: una **puerta de recuperación** decide si recuperar o no, y de qué memoria:
   - **Procedimental**: cómo actúa el agente (cómo agendar una reunión, cómo escribir un título).
   - **Semántica**: hechos duraderos (quiénes son Sergey, Raj, Vincent).
   - **Episódica**: eventos fechados (cuándo se crearon los eventos del Mundial o la reunión con Sam Altman).
3. Con esa memoria y contexto, el agente decide qué herramientas usar y ejecuta el **bucle** hasta terminar.
4. Devuelve el resultado, **traza** todo, ejecuta los **evals** y publica nuevos prompts cuando hace falta.
5. Tras la respuesta, **consolida** hechos en la memoria semántica.

## Conceptos clave

- **Harness de agente**: el sistema alrededor del LLM que integra gateway, memoria, bucle, herramientas, trazas y evals.
- **Loop engineering**: diseño del bucle iterativo en el que el agente llama herramientas hasta completar la tarea, con un límite de iteraciones.
- **Retrieval gate**: paso previo que decide si es necesario recuperar memoria para una petición.
- **Memoria semántica**: hechos duraderos sobre personas y el usuario, consolidados tras las conversaciones.
- **Memoria episódica**: eventos con fecha asociada.
- **Memoria procedimental**: skills que describen cómo debe actuar el agente.
- **soul.md**: archivo que actúa como system prompt del agente local.
- **Eval determinista vs. LLM como juez**: reglas fijas para comprobaciones verificables frente a un modelo que evalúa aspectos cualitativos.
- **Consolidación**: proceso que extrae hechos duraderos de las interacciones y actualiza la memoria semántica.

## Herramientas y referencias mencionadas

- Waku Agent (repositorio open source del autor en GitHub)
- OpenClaw y Hermes Agent (agentes personales similares)
- APIs de Anthropic y Gemini; modelos open source como alternativa
- Tavily (API de búsqueda web)
- Apple Calendar
- Telegram y BotFather
- LangFuse, LangGraph y Supabase (para tracing en la nube)
- Claude Code (para escribir skills)
- uv (para ejecutar el modo de voz)

## Referencias

- Transcripción: [[rvRyBhILrls - harness-en-codigo-real-en-20-minutos|Transcripción completa]]
- Video: [You Can Learn AI Agent Harness In Real Code In 20 Min | Loop Engineering, Memory, Eval, Open Source](https://www.youtube.com/watch?v=rvRyBhILrls) — Sean‘s AI Stories
