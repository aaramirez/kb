---
title: "Construir un arnés de IA desde cero: agent loop, tools, proveedores, subagentes y memoria"
tags:
  - arnes/nota
  - type/nota
  - arnes/construccion
  - arnes/herramientas-y-sandbox
  - arnes/contexto-y-memoria
channel: "BettaTech"
speaker: "Martí (BettaTech)"
videoId: "2B9QTg_-nyc"
source: "https://www.youtube.com/watch?v=2B9QTg_-nyc"
language: "es"
playlistOrder: 3
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Construyo mi propio arnés de IA… y te enseño como hacer el tuyo"
related:
  - "[[2B9QTg_-nyc - construyendo-mi-propio-arnes-de-ia|Transcripción]]"
---

# Construir un arnés de IA desde cero: agent loop, tools, proveedores, subagentes y memoria

Tercera y última parte de la serie de BettaTech (Martí) sobre harness engineering. Tras explicar el concepto y adaptar un arnés existente (Claude Code), aquí construye el núcleo de un arnés propio en Go: el bucle del agente, la definición y ejecución de herramientas, la abstracción de proveedores, permisos, subagentes, MCP, compactación, costes y memoria. Es un tutorial largo con código y demos, acompañado de un repositorio educativo (en español e inglés) con capítulos, tutoriales y ejercicios.

Es especialmente útil para entender qué hay "dentro" de herramientas como Claude Code o Codex: muestra que el núcleo es sencillo (un ejemplo mínimo de unas 175 líneas) y que las decisiones de diseño del arnés (qué hereda un subagente, cómo se compacta, dónde va el `AGENTS.md`) explican por qué cambiar de arnés tiene tantas implicaciones.

## Resumen

- **Arnés como cebolla**: el núcleo son las llamadas al LLM (SDK); encima, capas de tools, subagentes, skills y configuración. Se puede hacer harness engineering en la capa del binario o en la de configuración.
- **Dos bucles**: el bucle REPL (read-eval-print-loop) de interacción con el usuario y el bucle interno de evaluación, donde el modelo pide tools hasta que termina.
- **La IA no ejecuta herramientas**: solo las conoce y pide usarlas; el arnés las ejecuta en tu máquina.
- **La descripción de la tool importa**: el modelo infiere qué herramienta usar a partir de ella.
- **Polimorfismo para proveedores**: una interfaz `Provider` con tipos genéricos permite cambiar entre Anthropic, OpenAI, modelos locales o un mock para tests.
- **Gateway de permisos**: antes de ejecutar una tool, pedir aprobación al usuario.
- **Un agente es una instancia del proveedor** con su propio bucle, tools y system prompt; el root agent es el primero.
- **Los subagentes son una tool más** (`delegate`) que instancia un nuevo bucle interno; el arnés decide si hereda contexto.
- **Extensiones**: MCP como wrapper de tools, slash commands, estrategias de compactación intercambiables, conteo de costes y memoria con tools `recall`/`remember`.
- **Modo debug**: visualizar payloads y respuestas para ver cómo afectan el contexto, el system prompt y la compactación.

## Contenido estructurado

### Las capas del arnés
El autor visualiza el arnés como una cebolla:

- **Núcleo**: el código que hace las llamadas al LLM (SDK de Claude, de OpenAI...): el "cerebro" y su control.
- **Capas externas**: creación de tools, subagentes y skills, que afectan al comportamiento del núcleo.

En los videos anteriores se modificaron las capas externas de Claude Code (por ejemplo, un flujo SDD). Aquí se construye el núcleo: "podríamos incluso verlo como crear nuestro propio Claude Code".

### El game loop como analogía
En un videojuego, cada frame sigue un bucle: leer el input → actualizar el estado (física, vida, disparos) → renderizar → repetir. Un agente es igual:

- **Read**: el usuario escribe en el chat.
- **Eval**: se decide qué hacer con la entrada (mandarla al SDK o ejecutar algo interno, por ejemplo un slash command).
- **Print**: mostrar el resultado en la UI.
- **Loop**: volver a empezar.

Es el bucle **REPL**.

### El bucle interno de evaluación
La fase de evaluación puede tener varios pasos. Dentro de ella está el **bucle interno**, que habla con el LLM:

1. Se llama al modelo.
2. Si puede responder directamente, responde y termina.
3. Si necesita una tool, devuelve un *tool use*; el arnés ejecuta la tool y le pasa el resultado.
4. Se repite hasta que el modelo indica que ha terminado (*stop reason*).

> "Si te has de quedar con algo de lo que sería el agent loop, es que son dos bucles."

### Implementación mínima en Go
- Go elegido porque el lenguaje no es lo importante.
- `main` importa el SDK de Anthropic (Claude Opus).
- Bucle exterior: imprime un prompt, lee el texto, construye el historial de mensajes.
- Bucle interno: llama a `messages.new`, itera sobre los bloques de respuesta (puede haber varias respuestas o varias llamadas a tools), distingue texto de *tool use* y ejecuta con una función `executeTool`.
- Demo: `go run examples/minimal/main.go`, saludo, y "how many files are there in this folder?" dispara la tool `bash`; "write me a new file with the word hello in it" dispara `write_file`.
- El ejemplo mínimo son unas 175 líneas con solo el SDK de Anthropic como dependencia.

### Herramientas: definición y ejecución
Tools del ejemplo: `bash`, `read_file`, `write_file`.

> "La IA no ejecuta las herramientas. La IA solamente las conoce y le dice al arnés: 'Ey, quiero ejecutar esta herramienta'. Es como ver el martillo en la mesa [...] El arnés hace lo que el LLM le pide y lo ejecuta en tu máquina."

Al SDK se le pasa la lista de tools con nombre, descripción y parámetros. Una mala descripción hace que el modelo no sepa cuándo usarla, porque decide por inferencia. No todos los SDK soportan tools igual: hay que revisar la documentación de cada proveedor.

### Abstracción de proveedores con polimorfismo
El gran poder de un arnés propio es poder cambiar el modelo (Claude, Codex, Llama...). Para ello:

- Interfaz `Provider` (`internal/provider/provider.go`) con funciones para fijar y leer el modelo y enviar un mensaje (mensajes, tools disponibles y contexto) que devuelve una respuesta.
- Tipos genéricos propios (`APIMessage`, `APIToolDef`, `APIResponse`) para aislar al arnés de las diferencias entre SDKs.
- Implementación de Anthropic: único sitio donde se importa su SDK; traduce los tipos genéricos a los del SDK (tools, mensajes, máximo de tokens, modo thinking) y las respuestas de vuelta.
- Implementación de OpenAI: misma interfaz, otra llamada.
- Se pueden añadir un modelo local o un **mock** con respuestas aleatorias para ejecutar tests sin pagar.

### System prompt y capas de configuración
El arnés lee un system prompt (el primer mensaje que recibe el modelo) y, si existe, añade `AGENTS.md`. Es una decisión de cada arnés: meterlo en el system prompt o como mensaje de usuario, o incluso añadir información del repo.

Este arnés no tiene configuración externa: todo está en código para mostrar que exponer configuración es lo que permite afectar al arnés desde fuera.

> "Puedes hacer harness engineering en la capa de binario o puedes hacer harness engineering en la capa de configuración. Todo depende de cuánto el arnés te deja o no afectar su propio comportamiento."

### Gateway de permisos
El arnés ejecutaba tools sin supervisión, lo que es un riesgo de seguridad. La solución: en la función que ejecuta tools (bucle interno), antes de ejecutar, preguntar al usuario. Si acepta, se ejecuta; si no, se devuelve que el usuario no lo permitió.

Cada tool está en su propio fichero de la carpeta `tools`, con dos funciones vía polimorfismo:

- `Definition`: la descripción que recibe el LLM.
- `Execute`: la acción que realiza el arnés.

### Agentes y root agent
Los arneses actuales (Claude Code, Codex) generan subagentes. En el núcleo se tiene control total:

- Un agente es una instancia concreta del proveedor: tipo `Agent` con proveedor, tools y system prompt, y funciones para fijar o limpiar mensajes, enviar (que lanza el bucle interno) y ejecutar tools.
- Se pueden instanciar bajo demanda, "como enemigos de un videojuego".
- Cada agente puede tener un proveedor distinto (OpenAI, Anthropic, local) y un conjunto de tools restringido (solo lectura, solo Git...).
- Al arrancar se crea el **root agent**, que recibe el system prompt.

### Subagentes con la tool `delegate`
Para que el modelo pueda lanzar subagentes basta con una nueva acción: una tool `delegate` cuya descripción incluye los subagentes disponibles (por ejemplo, uno de research). Su `Execute` instancia un nuevo agente y llama a `run`, que arranca otro bucle interno.

> "No es magia, es simplemente una herramienta más que el LLM puede decidir utilizar."

Decisión de diseño: el subagente empieza con contexto vacío y no hereda los mensajes del root, aunque podría hacerlo.

> "Es por esto que cambiar de un arnés a otro tiene tantas implicaciones, porque estas decisiones no siempre son las mismas."

### MCP, slash commands y compactación
- **MCP**: un `MCPTool` que envuelve el sistema de tools (definición + ejecución). Un registro con `LoadConfig` lee un `mcp.json` (con un ejemplo de DeepWiki), consulta el servidor y registra las tools en un map. La carga se hizo en paralelo con goroutines para no bloquear la UI.
- **Slash commands**: `/help` y otros para ver tools, agentes en ejecución, cambiar proveedor o modelo, listar subagentes y ver tokens; hay un status bar programable.
- **Compactación**: una interfaz que recibe mensajes y devuelve mensajes compactados, con tres estrategias en la carpeta `compact`:
  - `none`: no hace nada.
  - `sliding`: ventana deslizante que conserva un tramo concreto.
  - `summary`: pide al propio LLM un resumen de la conversación y reemplaza el contexto.

### Costes y memoria
- **Costes**: cada proveedor tiene una tabla de precios por modelo (que hay que actualizar según la documentación). Con los tokens que devuelve la API se calcula coste y uso.
- **Memoria**: sin ella, cerrar la sesión significa empezar de cero, porque el contexto vive en la RAM del proceso. Solución con dos tools:
  - `remember`: guardar en memoria.
  - `recall`: recordar.
- El modelo decide si usarlas según su descripción. La implementación (carpeta `memory`) define un *store* con funciones de recall, preamble y save. El store de ficheros guarda JSON en `.harness/`: un índice con tags que apunta a ficheros de sesión con el detalle.
- Demo: "dime qué hicimos ayer" lanza `recall` con una query; el agente, dentro del bucle de aprobaciones, concluye que no tiene memoria de ese momento.

> "Construir un arnés no deja de ser tener un bucle. Es como construir un videojuego."

La UI de terminal usa Bubble Tea (Go), aunque podría ser web, CLI o .NET.

### Repositorio tutorial y modo debug
El repositorio (público, en español e inglés) incluye capítulos sobre el agent loop, gestor de contexto, memoria, herramientas, subagentes y servidores MCP, con navegación paso a paso. Es educativo: puede no seguir las mejores prácticas de Go ni estar listo para producción.

El **modo debug** (`/debug on`) muestra cada llamada al proveedor, el payload JSON enviado y la respuesta. Observaciones de la demo:

- `AGENTS.md` "hinchó" el system prompt de forma brutal.
- Cada mensaje reenvía todo el historial y el system prompt, de modo que los tokens de entrada se acumulan: el system prompt debe ser pequeño.
- `/compact summary` consume tokens (llama al proveedor) y sustituye el contexto por un resumen; con `verbose on` se ve el antes y el después.

### Tutoriales y ejercicios
La web incluye tutoriales (añadir políticas de permisos, proveedores, herramientas) y seis ejercicios, por ejemplo:

- Modificar el agent loop para reintentar herramientas que fallan.
- Cargar subagentes desde ficheros Markdown (como hace Claude Code) en lugar de tenerlos hardcodeados.

## Conceptos clave

- **Agent loop**: la combinación del bucle REPL externo y el bucle interno de evaluación con tools.
- **REPL**: read-eval-print-loop, el bucle de interacción con el usuario.
- **Tool use**: respuesta del modelo que solicita ejecutar una herramienta; la ejecuta el arnés.
- **Provider**: interfaz polimórfica que aísla al arnés del SDK concreto de cada proveedor de LLM.
- **Root agent**: el primer agente, que recibe el system prompt al arrancar el arnés.
- **Delegate tool**: herramienta que instancia un subagente con su propio bucle interno.
- **Compactación**: estrategia para reducir el contexto (none, sliding window, summary).
- **Gateway de permisos**: aprobación humana antes de ejecutar una tool.
- **Store de memoria**: almacenamiento persistente al que acceden las tools `recall` y `remember`.

## Herramientas y referencias mencionadas

- Go, SDK de Anthropic (Claude Opus, Sonnet), SDK de OpenAI, Codex, Llama, modelos locales.
- Claude Code, Codex como arneses de referencia.
- MCP, `mcp.json`, DeepWiki.
- Bubble Tea (framework de TUI en Go).
- Principios SOLID y patrones de diseño (videos del canal).
- Repositorio y web tutorial del autor (enlace en la descripción).

## Referencias

- Transcripción: [[2B9QTg_-nyc - construyendo-mi-propio-arnes-de-ia|Transcripción completa]]
- Video: [Construyo mi propio arnés de IA… y te enseño como hacer el tuyo](https://www.youtube.com/watch?v=2B9QTg_-nyc) — BettaTech
