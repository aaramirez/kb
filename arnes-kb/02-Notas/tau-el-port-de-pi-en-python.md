---
title: "Tau: el port de Pi en Python — curso rápido de un harness de código"
tags:
  - arnes/nota
  - type/nota
  - arnes/construccion
  - arnes/contexto-y-memoria
  - arnes/frameworks
channel: "Hugging Face"
speaker: "Hugging Face"
videoId: "qo1QNxWcm28"
source: "https://www.youtube.com/watch?v=qo1QNxWcm28"
language: "en"
playlistOrder: 4
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Tau Crash Course: The Python Port of Pi"
related:
  - "[[qo1QNxWcm28 - tau-el-port-de-pi-en-python|Transcripción]]"
---

# Tau: el port de Pi en Python — curso rápido de un harness de código

Video tutorial de unos 25 minutos del canal de Hugging Face en el que su desarrollador (no se identifica por nombre) presenta **Tau**, un harness de código desarrollado internamente en Hugging Face y escrito íntegramente en Python. Tau es un *port* de **Pi**: comparte su arquitectura, su system prompt, sus comandos y su formato de sesiones; lo que cambia es la interfaz de terminal (TUI), construida con el framework **Textual** en lugar de la TUI propia de Pi en TypeScript.

El video es una visita guiada práctica: instalación, barra lateral de estado, login y selección de modelo, gestión de sesiones como árboles en archivos JSONL, exportación de sesiones para que otro agente las analice, skills, custom prompts, extensiones y temas, y por último las diferencias concretas con Pi. Para el harness engineering es útil porque muestra, sobre un harness mínimo y transparente, cómo se resuelven piezas clave: el contexto visible, las sesiones bifurcables, la separación entre skills (que el agente conoce) y prompts (que solo conoce el front-end), y la extensibilidad compatible entre harnesses.

## Resumen

- **Tau es Pi en Python**: misma arquitectura, mismo system prompt (copiado de Pi), mismas cuatro herramientas por defecto (read, write, edit, bash) y mismos comandos; la diferencia principal es la TUI basada en Textual.
- **Visibilidad del contexto**: la barra lateral muestra el uso acumulado de tokens (entrada, salida y costo), la compactación, los archivos cargados en contexto (system prompt, AGENTS.md global y del proyecto), las herramientas, skills, prompts y extensiones activas.
- **Bash con o sin contexto**: `!comando` ejecuta bash y añade la salida al contexto; `!!comando` la ejecuta sin añadirla.
- **Sesiones en árbol**: cada mensaje tiene un `parent`, lo que permite bifurcar la conversación desde cualquier punto con `/tree`; todo se guarda en un único archivo JSONL por sesión, ligado al directorio de trabajo.
- **Exportar para mejorar**: `/export` genera un HTML navegable (con filtros y vista de árbol) o un JSONL; pasar el ID de sesión a otro agente permite analizarla y mejorar skills, herramientas o servidores MCP.
- **Skills vs. custom prompts**: las descripciones de las skills están en el system prompt y el agente puede invocarlas solo; los prompts son sustituciones de texto en el front-end que el agente desconoce.
- **Extensiones compatibles con Pi**: usan los mismos eventos, así que basta con portarlas; existe ya una extensión de subagentes creada por la comunidad.
- **Autoextensible**: Tau, como Pi, sabe crear sus propias skills, custom prompts y temas (JSON).
- **Diferencias con Pi**: nombrado automático de sesiones, comandos `/skills`, `/prompts` y `/tools`, y notificaciones al terminar una tarea.

## Contenido estructurado

### Qué es Tau y por qué existe

El video parte de una premisa:

> "Recientemente ha quedado muy claro que los harnesses de código son una de las partes más importantes a la hora de crear flujos de trabajo de IA fiables."

Tau es un harness de código desarrollado en Hugging Face, completamente en Python, y "literalmente lo mismo" que Pi por dentro:

> "Si te gusta Pi, probablemente te gustará Tau, porque es literalmente lo mismo. Todo detrás de escena funciona exactamente igual. Lo único un poco distinto es la interfaz de terminal."

El autor reconoce que llegar a un funcionamiento estable "fue una batalla dura". Se instala con un script que funciona en Mac, Linux y Windows. La TUI no se construyó desde cero sino con **Textual**, lo que hace que algunas funciones de terminal difieran de Pi, aunque los comandos son prácticamente los mismos.

### La interfaz y la barra lateral

- **Prompt** con soporte para comandos bash: `!` añade la salida al contexto; `!!` la ejecuta sin añadirla.
- **Nombre de la sesión**, asignado automáticamente tras el primer mensaje.
- **Actividad**: número de turnos del agente y de llamadas a herramientas.
- **Uso acumulado**: distinto del contexto; es el total de tokens de la sesión (entrada y salida) y su costo si se usa vía API.
- **Compactación**: información sobre cuándo se ejecutará automáticamente.
- **Archivos en contexto**: el system prompt base (el mismo de Pi) y los AGENTS.md del directorio personal y del proyecto.
- **Herramientas cargadas**: por defecto cuatro, igual que Pi: read, write, edit y bash; pueden cambiar según las extensiones.
- **Skills, prompts personalizados (slash commands) y extensiones** cargados, más la versión de Tau.

### Login y selección de modelo

- `/login` conecta con el proveedor de LLM por **suscripción** (Codex, Anthropic, GitHub Copilot), por **API key** (OpenAI, Anthropic, Gemini, etc.) o mediante un **proveedor personalizado**. El autor recomienda el de Hugging Face, que da acceso a todos los proveedores de inferencia de Hugging Face mediante un único router.
- `/model` lista los modelos disponibles según las cuentas conectadas (en la demo, GLM 5.2 vía Hugging Face).
- Durante la ejecución, cada llamada a herramienta aparece en amarillo mientras se ejecuta y en verde al terminar; la respuesta se renderiza en Markdown y se transmite en streaming.
- `Ctrl+T` expande los tokens de razonamiento; `Ctrl+O` expande los resultados de herramientas. Al seleccionar texto se copia automáticamente en Markdown limpio, algo que "las TUI a veces hacen mal".

### Sesiones: nombres, reanudación y árboles

- La sesión se nombra automáticamente con el mismo modelo seleccionado; `/name` permite renombrarla y el nombre se refleja en la pestaña del terminal. Esto es una desviación respecto a Pi, que no renombra automáticamente.
- `/resume` lista las sesiones previas del directorio de trabajo (las sesiones están ligadas al directorio en que se ejecutaron), con fecha, último modelo usado y nombre.
- **Las sesiones son árboles, no listas**:

> "Cada mensaje tiene una propiedad llamada parent que apunta al mensaje anterior. Eso hace muy fácil bifurcar una conversación: tomas un mensaje y creas una nueva hoja cuyo padre es ese mensaje."

- `/tree` muestra todos los mensajes (con opción de ocultar las llamadas a herramientas) y permite continuar la conversación desde cualquier punto, creando una nueva rama.

### Almacenamiento en JSONL

Las sesiones se guardan en `~/.tau/sessions/<ruta del directorio de trabajo>/`, igual que Pi lo hace en su carpeta de sesiones de agente. Cada sesión es un archivo **JSONL** (un objeto JSON por línea), con campos como `id`, `parentId`, marca de tiempo, tipo de mensaje y contenido:

> "Un archivo JSONL hace muy fácil mantener transcripciones, porque cada mensaje puede ser simplemente una nueva línea."

El autor abre en paralelo una sesión de Tau y otra de Pi para mostrar que el formato es el mismo.

### Exportar sesiones y analizarlas con otro agente

Es "una de sus funciones favoritas" de Pi y de Tau:

- `/export` exporta la sesión con su ID como nombre; `/export <ruta>/test.html` permite elegir ruta y nombre.
- El HTML muestra a la izquierda todos los eventos (información de sesión, cambios de modelo, llamadas a herramientas) con filtros para ocultar herramientas o eventos (cambio de nombre, de modelo, de nivel de razonamiento), una visualización del árbol completo con sus bifurcaciones y un botón para descargar el JSONL.
- Si se exporta con extensión `.jsonl`, se genera directamente un JSONL.
- `/session` muestra dónde está guardada la sesión, cuántas herramientas y skills tiene, su ID y su nombre.

El flujo de mejora que propone: copiar el ID y pedir a otro agente de Tau "analiza esta sesión". El agente sabe que las sesiones están en `.tau/sessions`, la encuentra, la lee y da feedback:

> "Es muy útil si estás probando una nueva skill, un nuevo conjunto de herramientas o un nuevo servidor MCP: simplemente haces que otro agente analice la sesión."

### Skills

- Son instrucciones procedimentales en Markdown, que pueden ir acompañadas de scripts o plantillas.
- Tau las lee del directorio personal o de la raíz del proyecto, en `.agents`, `.tau` y `.pi`.
- Invocación explícita: `/skill:<nombre>` con autocompletado y contexto adicional opcional.
- Invocación automática: las descripciones de las skills cargadas están en el contexto del agente desde el inicio, así que si lo considera necesario para la tarea, las invoca por sí mismo.
- `Esc` detiene al agente a mitad de turno.
- **Comando `/skills`** (inspirado en Claude Code): como la barra lateral no puede listar todas las skills sin saturarse, este comando las muestra todas; `F1` abre la descripción y `Ctrl+Enter` permite leer el contenido completo de la skill dentro de la TUI **sin añadirla al contexto**, algo útil para depurar skills. `Enter` la añade al prompt.

### Custom prompts frente a skills

Los custom prompts son slash commands que se sustituyen por un prompt más largo (en la demo, `/issue` para abrir un issue en GitHub). La diferencia con las skills es de abstracción:

> "El agente no tiene idea de que tiene custom prompts disponibles a menos que lea su propia documentación. De las skills sabe porque están en su system prompt; los prompts se reemplazan a nivel del front-end, así que el agente solo recibe el prompt completo."

### Extensiones, recarga y temas

- Las extensiones se tratarán en otro video porque hay mucho desarrollo en curso. Se menciona una extensión creada por Ryan para ejecutar subagentes dentro de Tau.
- **Todas las extensiones son compatibles con Pi**: usan los mismos eventos, solo hay que portarlas.
- Al crear una skill o un prompt con Tau abierto, hay que ejecutar `/reload` para que relea skills, prompts, extensiones y temas.
- Temas: tau-light, alto contraste y temas propios definidos en archivos JSON simples (en la demo, un tema Catppuccin Mocha creado por el propio Tau). Tau, como Pi, sabe crear sus propias skills, prompts y temas.

### Diferencias entre Tau y Pi

1. **TUI**: la de Tau está construida con Textual e inspirada en OpenCode y otros agentes; la de Pi está hecha desde cero en TypeScript.
2. **Comandos adicionales**: `/skills`, `/prompts` y `/tools`. Este último muestra todas las herramientas y su origen: con la extensión de subagentes aparecen, además de las cuatro integradas, tres herramientas nuevas (crear subagentes, etc.).
3. **Notificaciones**: al terminar una tarea, Tau emite una notificación, útil cuando se trabaja con varios agentes en paralelo. El autor usa **Cmux**, un terminal con barra lateral vertical para agentes. Pi no lo hace por defecto, aunque puede hacerlo con una extensión.
4. **Nombrado automático de sesiones**.

El autor anuncia más videos sobre cada parte de la arquitectura "para que también puedas construir tus propios agentes de código".

## Conceptos clave

- **Harness de código**: el software que envuelve al modelo con herramientas, contexto, sesiones y extensiones; según el video, una de las piezas más importantes para flujos de IA fiables.
- **Port**: reimplementación de Pi en otro lenguaje (Python) manteniendo la misma arquitectura.
- **Uso acumulado vs. contexto**: el total de tokens consumidos en la sesión frente a lo que ocupa la ventana de contexto actual.
- **Sesión en árbol**: modelo de datos en que cada mensaje apunta a su padre, lo que permite bifurcar y navegar ramas.
- **JSONL**: formato de un objeto JSON por línea, usado para guardar las transcripciones de sesión.
- **Skill**: instrucciones procedimentales en Markdown cuya descripción está en el system prompt y que el agente puede invocar por sí mismo.
- **Custom prompt**: slash command que se sustituye por texto en el front-end; el agente no sabe que existe.
- **Extensión**: módulo que añade herramientas o comportamiento escuchando eventos del harness; compatible entre Tau y Pi.

## Herramientas y referencias mencionadas

- Pi (harness de código del que Tau es port)
- Textual (framework de TUI en Python)
- Hugging Face (router de proveedores de inferencia), Codex, Anthropic, GitHub Copilot, OpenAI, Gemini
- Modelos mencionados en la demo: GLM 5.2, Claude Opus 5, "Sol"
- Claude Code (inspiración del comando `/skills`), OpenCode (inspiración de la TUI)
- Cmux (terminal para trabajar con varios agentes)
- Extensión de subagentes de Ryan
- Skills de ejemplo: explore project, Firecrawl Parse, SDLC

## Referencias

- Transcripción: [[qo1QNxWcm28 - tau-el-port-de-pi-en-python|Transcripción completa]]
- Video: [Tau Crash Course: The Python Port of Pi](https://www.youtube.com/watch?v=qo1QNxWcm28) — Hugging Face
