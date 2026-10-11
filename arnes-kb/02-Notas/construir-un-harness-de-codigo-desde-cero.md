---
title: "Construir un harness de agente de código desde cero, paso a paso y sin frameworks"
tags:
  - arnes/nota
  - type/nota
  - arnes/construccion
  - arnes/contexto-y-memoria
  - arnes/herramientas-y-sandbox
channel: "Neural Breakdown with AVB"
speaker: "AVB (Neural Breakdown with AVB)"
videoId: "Lu1UWqVTbQg"
source: "https://www.youtube.com/watch?v=Lu1UWqVTbQg"
language: "en"
playlistOrder: 12
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Let's build a Coding Agent Harness from Scratch (Step by Step, No frameworks)"
related:
  - "[[Lu1UWqVTbQg - construir-un-harness-de-codigo-desde-cero|Transcripción]]"
---

# Construir un harness de agente de código desde cero, paso a paso y sin frameworks

AVB, del canal Neural Breakdown with AVB, construye en un tutorial de unos 48 minutos un agente de código de terminal en Python, sin frameworks, al que llama **neural code**. Tras estudiar harnesses como Claude Code, Codex, OpenCode y Pi, toma "las mejores partes" de cada uno y recorre commit a commit (unos 15 pasos) la evolución desde una única llamada a la API hasta un harness con herramientas, bucle de agente, skills, inyección tardía de contexto, to-dos, permisos, sandbox, compactación y subagentes. Usa DeepSeek V4 Flash vía OpenRouter, un modelo pequeño y barato.

Para el harness engineering es una referencia práctica de **context engineering**: cada paso muestra una decisión concreta y su porqué, con especial atención a no romper el *prefix cache* (costo de tokens), a mantener el contexto acotado y a separar permisos (qué permite el usuario) de sandbox (qué es posible).

## Resumen

- **Todo es context engineering**: prompts, herramientas, subagentes, sandbox, permisos, gestión de tokens, compactación, sesiones, planes y to-dos.
- **Las herramientas dan capacidades**: el prompt instruye, pero solo las tools permiten actuar fuera de los pesos (leer, escribir, ejecutar bash, usar un navegador).
- **Un agente es un bucle alrededor de una llamada al LLM**: se ejecuta la tool, el resultado se añade con rol `tool` y se vuelve a llamar al modelo.
- **Nunca romper el prefix cache**: añadir al final del historial es barato; cambiar una palabra al principio obliga a pagar todo el input de nuevo.
- **Skills con divulgación progresiva**: solo el front matter (nombre y descripción) va al system prompt; el cuerpo se carga con una tool `read_skill` cuando hace falta.
- **Late injection**: fecha, rama de git, to-dos o archivos modificados se inyectan al final, justo antes de la llamada, sin tocar el historial.
- **Permisos ≠ sandbox**: las listas de permitir/denegar (estilo OpenCode) dan control al usuario; el sandbox (perfil de Codex) impide físicamente salir del workspace.
- **Compactación**: al llegar al 85 % del contexto se reduce al 35 % resumiendo lo eliminado en una nota de traspaso al inicio del system prompt.
- **Salidas de herramientas acotadas**: se guardan en un archivo temporal, se truncan a 10.000 caracteres y se eliminan de los mensajes pasados.
- **Subagentes aislados**: una tool `task` lanza un agente de exploración con su propio contexto, sin herramientas de escritura y sin recursión.

## Contenido estructurado

### Punto de partida: una llamada a la API

- Archivo `.env` con API key y base URL de **OpenRouter**, usando el cliente de OpenAI.
- `llm.py` lee una entrada de teclado y envía dos mensajes: rol `system` con el system prompt y rol `user` con la entrada. Imprime la respuesta y el uso (tokens de prompt y de completion).
- Modelo: **DeepSeek V4 Flash**, de los más rápidos y baratos con buenos benchmarks.

> "Este es el paso más básico y seguro que ya lo conocías, pero créeme, es uno de los más importantes."

### Primera herramienta: bash

- La tool se define como un JSON de tipo `function`, nombre `bash`, descripción "ejecuta un comando de shell y devuelve su salida" y argumento `command`. Esa descripción es lo que el modelo ve.
- Se pasa en `tools=[bash_tool]` a `chat.completions.create`.
- Si el LLM decide usarla, genera una salida estructurada (contenido `None` y un `tool_call` con nombre y argumentos JSON, por ejemplo `pwd`). El harness la parsea y la ejecuta con `subprocess.run`.
- Con bash el agente puede usar cualquier CLI (grep, ripgrep…) e incluso controlar navegadores.

(El video incluye aquí un patrocinio de un navegador para agentes, con una demostración en la que Claude Code resuelve el Wordle del día en tres intentos escribiendo código que se traduce en clics; el objetivo es que el harness propio logre lo mismo.)

### Más herramientas: lectura de archivos

- Se separan las tools en `tools.py`. Se añade `read_file`, que abre una ruta y devuelve el contenido.

> "Las herramientas son básicamente lo que da capacidades a los agentes. Los system prompts instruyen al modelo sobre cómo hacer las cosas, pero las herramientas son lo que, al final, le permite hacer más allá de los pesos de su red."

- Problema: los resultados no vuelven al modelo, así que no puede razonar sobre ellos.

### El bucle del agente

> "Un agente es algo que hace un bucle alrededor de una llamada al LLM."

Estructura de `agent.py`:

```
messages = [system, user]
while True:
    message = call_llm(messages, tools)
    messages.append(message)
    si hay tool_calls:
        para cada tool_call:
            resultado = TOOLS[nombre](**argumentos)
            messages.append({role: "tool", content: resultado})
    si no: mostrar respuesta y pedir nueva entrada
```

En la prueba, el agente lee `llm.py`, `agent.py` y `tools.py` por iniciativa propia antes de explicar la arquitectura.

### Prefix caching: la regla de oro de costos

- Cada token depende solo de los anteriores (dependencia causal), así que lo ya calculado puede reutilizarse cuando el prompt crece por el final. Los proveedores lo cobran como **cached input**, mucho más barato.
- En la interfaz que construye se ve: de 3.624 tokens de prompt, 3.328 estaban en caché; solo unos 300 eran nuevos (la salida de la última tool).

> "Asegúrate siempre, en la medida de lo posible, de no romper tu caché, porque aunque solo cambies una o dos palabras al principio del prompt, toda la caché se rompe y pagas todo el input de una vez."

### Skills: descubrimiento y lectura

- Una skill es un markdown (`SKILL.md`) en un directorio conocido; Claude Code y Codex saben buscarlas ahí. Empieza con un **front matter YAML** (nombre, descripción, licencia) seguido del cuerpo con las instrucciones.
- Solo el front matter va al system prompt; el cuerpo se muestra al agente únicamente cuando decide cargar la skill.
- Implementación en `skills.py`:
  - Directorios: `~/.agents/skills` y `<cwd>/.agents/skills` (se pueden añadir otros, como los de Claude).
  - Busca `SKILL.md` con glob, separa el front matter por los `---`, lo carga con `yaml.safe_load` y devuelve nombre, descripción y ruta.
  - `skills_prompt()` concatena nombre y descripción de todas las skills.
  - `read_skill(nombre)` devuelve el contenido del archivo; se expone como tool.
- System prompt: "Tienes skills disponibles… Si una skill coincide con lo que quiere el usuario, llama a `read_skill` y síguela".

> "Construirlo es bastante fácil y es tan potente que casi da risa que simplemente funcione."

Con solo esto, DeepSeek V4 Flash consigue resolver la tarea del navegador que antes resolvió Claude Code con Opus 5.

### Escritura y edición de archivos

- `write_file(path, content)`: crea un archivo nuevo.
- `str_replace(path, old, new)`: reemplaza un bloque concreto si se encuentra.
- "La magia ocurre dentro del LLM": es el modelo quien decide qué archivo, dónde y con qué reemplazar.

### Late injection (inyección tardía)

- Información de sistema que se obtiene justo antes de llamar al LLM: fecha actual, datos del usuario, rama y commit de git, `git status`, etc.
- `context.py` tiene funciones que devuelven pequeños fragmentos de texto, más un bloque de recordatorio con la fecha.
- Se pega **siempre al final** de los mensajes: si la fecha cambiante estuviera arriba, rompería el prefijo en cada turno.
- Se pasa en la llamada pero **no se guarda en el array de mensajes**, así que fechas y estados viejos nunca reaparecen.
- **Aviso de archivos obsoletos**: un diccionario global `seen` registra el `mtime` cuando el agente lee o escribe un archivo; si cambió en disco, un recordatorio de sistema dice "estos archivos cambiaron desde que los leíste".

### To-dos para tareas largas

- `todos.py` mantiene una lista de tareas con estado: pendiente, en progreso o completada.
- La tool obliga a reescribir la lista completa en cada llamada.
- La lista actual se muestra al agente mediante late injection tras cada mensaje, para mantenerla cerca de su memoria reciente.
- Extensión posible: un `plan.md` escrito por un agente planificador que otro agente luego ejecuta.

### Permisos y sandbox

- **Permisos** (`permissions.py`, diseño inspirado en OpenCode): lista de comandos permitidos de solo lectura (`ls`, `pwd`, `echo`…); los riesgosos (`rm`, `sudo`, cambios de propietario o permisos, `curl`) requieren aprobación del usuario.
- Pero no es seguridad real: un archivo puede borrarse con Python (`shutil.rmtree`).
- **Sandbox** (tomado de Codex, open source con licencia Apache 2): en macOS usa el perfil de Codex, que deniega todo por defecto, permite lecturas, deniega red y solo permite escrituras bajo la carpeta del proyecto (donde se invoca neural code). Linux y Windows requieren mecanismos distintos; la versión Linux la implementó Claude.
- Prueba: al pedir borrar un archivo fuera del proyecto, aunque el usuario apruebe, falla con "operation not permitted".

> "Los permisos permiten al usuario tomar cierto control y definir qué puede ejecutar el agente. Los sandboxes plantean una pregunta completamente distinta: si una operación concreta está permitida o no."

### Gestión del contexto: compactación y salidas de herramientas

- **Compactación**: cuando los tokens llegan al **85 %** del contexto configurado, se reduce al **35 %** quitando mensajes antiguos. No se recorta en cada turno porque rompería la caché.
- Un agente de compactación con el prompt "Estás compactando la transcripción de una sesión de código… escribe la nota de traspaso que permita a un agente nuevo retomar el trabajo sin releerlo todo" resume objetivos, lo ocurrido y los siguientes pasos.
- El resumen se añade al **inicio del system prompt**; como el historial vuelve a llenarse del 35 % al 85 % antes de la siguiente compactación, el prefijo se mantiene estable.
- **Salidas de herramientas**:
  - Se guardan en un archivo temporal que existe hasta que termina el turno.
  - Si superan 10.000 caracteres se truncan y se indica al agente la ruta para paginar con `head`, `tail`, `sed` o `grep` (técnica similar a la de los RLM).
  - En mensajes pasados se eliminan las salidas de herramientas. Esto rompe la caché solo para el último mensaje; después se vuelve a reutilizar porque se aplica de forma consistente.

### Subagentes

- Nueva tool `task`: "entrega una pregunta de exploración autocontenida a un agente nuevo con su propia ventana de contexto".
- Reutiliza `call_llm` con un conjunto de tools reducido: todas menos `task`, `write_todos`, `str_replace` y `write` (sin to-dos propios y sin recursión; profundidad de un nivel).
- System prompt de explorador que no debe escribir archivos.
- Solo se devuelve `message.content` (la respuesta final); ni las tool calls del subagente llegan al agente principal ni el chat del usuario llega al subagente. Relación transaccional.
- Extensible a subagentes en paralelo, enjambres o subagentes con sus propios subagentes (no implementado).

### Demostración final

Con el harness terminado, el autor pide una simulación de *boids*: el agente escribe un `index.html` que casi funciona, lo parchea cuando se le pide y luego añade sliders e interfaz. Todo con DeepSeek V4 Flash.

> "Empezamos con una sola llamada a la API y construimos todo. Ahora tenemos un harness de código minimalista y funcional que contiene todas las características que buscas en un buen harness."

## Conceptos clave

- **Harness de código**: programa que envuelve al LLM con herramientas, bucle, contexto y controles para que pueda programar.
- **Tool call**: salida estructurada del modelo (nombre de función y argumentos JSON) que el harness ejecuta y devuelve con rol `tool`.
- **Bucle del agente**: llamar al LLM, ejecutar las tools pedidas, añadir resultados y repetir hasta obtener una respuesta.
- **Prefix caching / cached input**: reutilización del cómputo del prefijo del prompt; mucho más barato si no se altera el inicio.
- **Skill**: markdown con front matter YAML cuyo resumen va al system prompt y cuyo cuerpo se carga bajo demanda.
- **Late injection**: contexto dinámico añadido al final de la llamada sin persistirlo en el historial.
- **Permisos vs. sandbox**: control declarativo de qué comandos se aprueban frente a aislamiento del sistema operativo que impide operaciones fuera del workspace.
- **Compactación**: resumir lo que se elimina del historial en una nota de traspaso para continuar la sesión.
- **Subagente**: agente aislado con su propio contexto que recibe una tarea y devuelve solo el resultado final.

## Herramientas y referencias mencionadas

- Harnesses estudiados: Claude Code, Codex (código del sandbox, Apache 2), OpenCode (diseño de permisos), Pi.
- OpenRouter, cliente de OpenAI para Python, DeepSeek V4 Flash, Claude Opus 5.
- Python: `subprocess.run`, `yaml.safe_load`, `shutil.rmtree`; `uv` para ejecutar e instalar la herramienta.
- Navegador para agentes del patrocinador (demostración con el Wordle del New York Times).
- RLM (Recursive Language Models) y su técnica de truncar salidas.

## Referencias

- Transcripción: [[Lu1UWqVTbQg - construir-un-harness-de-codigo-desde-cero|Transcripción completa]]
- Video: [Let's build a Coding Agent Harness from Scratch (Step by Step, No frameworks)](https://www.youtube.com/watch?v=Lu1UWqVTbQg) — Neural Breakdown with AVB
