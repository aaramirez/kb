---
title: "Construir agentes de IA con Eve y Next.js: del bucle básico al framework"
tags:
  - arnes/nota
  - type/nota
  - arnes/frameworks
  - arnes/construccion
channel: "Jan Marshal"
speaker: "Jan Marshal"
videoId: "VvlgwaAp-lo"
source: "https://www.youtube.com/watch?v=VvlgwaAp-lo"
language: "en"
playlistOrder: 18
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "I Found the BEST Way to Build AI Agents (Eve + Next.js)"
related:
  - "[[VvlgwaAp-lo - agentes-con-eve-y-nextjs|Transcripción]]"
---

# Construir agentes de IA con Eve y Next.js: del bucle básico al framework

Tutorial de Jan Marshal en su canal de YouTube. Primero explica por qué construir agentes solo con el **AI SDK** de Vercel acaba en un "pequeño framework maldito" hecho en casa. Después presenta **Eve**, el framework de agentes de Vercel ("Next.js, pero para agentes"): su arquitectura (runtime + capa de canales), la estructura del directorio `agent/` y una demo paso a paso con instrucciones, tools, skills y canales TUI y web. Termina con un caso real, *Finance Hub*: un agente financiero conectado por MCP a su dashboard y desplegado en Slack.

Para el harness engineering, el video explica bien la diferencia entre **primitivas** (AI SDK: modelo + prompt + tools + loop) e **infraestructura de harness** (durabilidad, sandbox, canales, conexiones, subagentes, humano en el bucle, cron, evals). También muestra cómo un framework declarativo empaqueta esa infraestructura para no reconstruirla en cada agente. El video incluye un segmento patrocinado (Scrimba) que no se resume aquí.

## Resumen

- **El bucle básico es fácil, el agente real no**: modelo + system prompt + tools + loop se monta enseguida. Lo difícil es la memoria, las aprobaciones, los canales, el cron, los reintentos y el sandbox.
- **El riesgo del framework casero**: si añades esa infraestructura a mano en cada agente terminas con un "framework maldito" que solo tú entiendes, y repites trabajo en cada proyecto (se incumple DRY).
- **El AI SDK unifica proveedores**: resuelve las diferencias de API, esquemas, tool calls y system prompts entre proveedores, y ofrece MCP y humano en el bucle. Basta para casos simples.
- **Eve como framework**: Vercel lo presenta como "Next.js para agentes". Es una composición de herramientas, no una sola herramienta.
- **Arquitectura en dos capas**: un runtime (workflow durable, AI SDK, sandbox, connections, tools y subagentes) y una capa de canales (web, Slack, Discord, Teams, WhatsApp, Telegram…).
- **Todo en el directorio `agent/`**: `instructions.md` (el único obligatorio), `agent.ts`, `skills/`, `tools/`, `sandbox/`, `channels/`, `connections/`, subagentes y schedules.
- **Instrucciones frente a skills**: las instrucciones se cargan en cada prompt y deben ser breves. Las skills se cargan solo cuando hacen falta, para no inflar el contexto.
- **Los canales se añaden con un comando**: `npx eve channels add web` genera una app Next.js con el hook `useAgent`. También se pueden crear canales HTTP o WebSocket propios.
- **Tools locales y MCP en el mismo agente**: el caso Finance Hub combina tools locales (con Prisma) y llamadas MCP a un servidor externo.
- **Un agente, muchos canales**: el mismo agente responde en la TUI y en Slack. Las sesiones son durables y conservan el contexto.

## Contenido estructurado

### El problema: de agente a "framework maldito"
- Todo agente empieza igual: un prompt, unas tools y una llamada al modelo. Durante unos 12 minutos "te sientes un genio".
- Luego llega la realidad: memoria, aprobaciones, Slack, cron jobs, reintentos y un sandbox, porque darle a un LLM acceso a tu terminal "es mala idea".
  > "De repente ya no estás construyendo un agente. Estás construyendo un pequeño framework maldito que solo tú entiendes."

### El enfoque tradicional con el AI SDK
- El AI SDK de Vercel es un SDK unificado de TypeScript para apps de IA, con streaming, fallbacks y soporte multimodelo.
- Sin él habría que conectarse a cada proveedor (Anthropic, Google, OpenAI, Z.ai, DeepSeek), cada uno con su API, sus esquemas de entrada y salida, su forma de hacer tool calls y su manejo del system prompt.
- Además unifica la definición de tools y system prompts, la conexión a servidores MCP y el humano en el bucle.
- Demo con el *starter kit* del autor: una ruta de chat con selector de modelo (Opus 4.8) y esfuerzo de razonamiento. Funciona, pero solo responde preguntas, sin tools, sin ejecutar código y sin efectos secundarios.

### Lo que le falta al bucle básico
Para algo más complejo hace falta:
- persistencia y reintentos de tools;
- aprobaciones humanas, que son posibles con el AI SDK "pero no muy simples";
- autenticación y autorización;
- evaluaciones;
- cron jobs;
- más canales que la web, como Slack, que "no es tan simple como crees";
- un sandbox para ejecutar código sin privilegios de administrador en tu máquina;
- workflows durables, conexiones HTTP y MCP, y subagentes.

> "No estás construyendo un agente de IA con este setup. Estás recreando infraestructura para cada nuevo agente."

### Qué es Eve: arquitectura
Eve trata el agente como un proyecto de software completo desde el principio. Tiene dos bloques:

1. **Runtime**: ejecución durable, persistencia de estado y streaming de eventos. Lo componen:
   - **Workflow durable**: pasos con checkpoint, "aparcar" entre mensajes y reanudar cuando llega uno.
   - **AI SDK**: llamadas a modelos y streaming unificados, sea cual sea el proveedor.
   - **Sandbox**: ejecución aislada, sin acceso root.
   - **Connections**: MCP y endpoints HTTP.
   - **Tools y subagentes**: como hacen Claude Code o Cursor.
2. **Capa de canales**: donde aparece el agente (web, Slack, Discord, Linear, WhatsApp, Telegram). Lo único que se necesita es una interfaz que reciba entradas y devuelva salidas.

### Estructura del directorio `agent/`
Funciona como el *app router* de Next.js: todo el código del agente vive en `agent/`.
- `instructions.md`: el **único archivo obligatorio**. Define quién es el agente y cómo se comporta.
- `agent.ts`: configura el modelo y el runtime. Se integra de forma nativa con el AI Gateway de Vercel, pero también admite OpenAI, Google y Anthropic directamente.
- `skills/`: se cargan dinámicamente cuando son relevantes.
- `tools/`: acciones tipadas que el modelo puede llamar, cada una con descripción, `inputSchema` (Zod) y `execute`. Es la misma forma que en el AI SDK.
- `sandbox/`: un lugar aislado para ejecutar comandos o trabajar con archivos, por ejemplo hacer `git clone` de un repo.
- `channels/`: dónde corre el agente (web, Slack, Discord, Teams…).
- `connections/`: sistemas externos, por ejemplo un servidor MCP (el ejemplo de la documentación usa el de Linear) con `defineMcpClientConnection`.
- **Subagentes**: se definen con una sola función (descripción + modelo). El agente principal delega y combina resultados. Antes, con el AI SDK, esto requería mucho código.
- **Schedules**: cron jobs, como ejecutar el agente cada día a las 8:00.

> "Eve es un framework. También construyes encima de él, pero no tienes que construir alrededor de él."

El autor destaca la seguridad: el cómputo en sandbox viene de serie, y mucha gente no implementa sandboxes porque no es fácil.

### Demo: primer agente con canal TUI
- Se crea el proyecto con la CLI de Eve, como con Next.js. Trae `instructions.md`, `agent.ts` (Sonnet 5 vía AI Gateway) y `channels/eve.ts`.
- El canal **Eve** es el nativo por defecto: una TUI para probar el agente desde la terminal. Se arranca con `pnpm run dev`.
- Flujo de un mensaje: canal Eve → runtime (AI SDK) → proveedor (Anthropic) → streaming de vuelta al canal.
- Al cambiar `instructions.md` a "eres un asistente de desarrollo conciso", el agente se identifica así y rechaza preguntas ajenas, como el clima.

### Tools
- `tools/get-project-status.ts`: se usa `defineTool` con descripción, `inputSchema` vacío (es obligatorio aunque no haya datos) y `execute`, que devuelve un objeto. El agente lo invoca al preguntarle "¿está listo el agente financiero?".
- Cómo elige un tool el agente: mira las descripciones disponibles e invoca la que mejor encaja.
- `tools/get-financial-change-preview.ts`: recibe un parámetro `days` con valor por defecto 30 y devuelve datos fijos. Con "últimos 10 días", el agente pasa `days: 10`.

### Skills frente a instrucciones
- `instructions.md` da la instrucción general y **se carga en cada prompt**, así que afecta a la ventana de contexto y conviene que sea pequeño y enfocado.
- Las **skills** dan orientación concreta y **solo se cargan si hacen falta**.
- Ejemplo `skills/financial-summary.md`: formato estándar con nombre, descripción y contenido, del tipo "úsala cuando el usuario pida resumir cambios financieros, explicar el movimiento del patrimonio neto o el gasto en un periodo".
- Con el mismo prompt, el agente hace tres cosas: carga las instrucciones (siempre), carga la skill `financial-summary` y llama al tool `get-financial-change-preview`.

### Eve frente al AI SDK
- Todo esto funciona gracias al AI SDK por debajo, y se podría hacer solo con él. La diferencia:
  > "El AI SDK te da las primitivas para construir tu propio framework, tu propia infraestructura. Eso es buena idea si eres una gran empresa. Pero si no lo eres, ¿por qué lo harías?"
- Eve es de código abierto y trae el *boilerplate* y las "baterías" para un agente seguro y útil.

### Canal web con Next.js
- La TUI sirve para desarrollo, no para producción.
- `npx eve channels add web` instala dependencias, añade una app Next.js (carpeta `app/`) y la despliega automáticamente. El directorio `agent/` no cambia.
- `page.tsx` renderiza un *agent chat* que usa el hook **`useAgent`** (o `useEveAgent`), el equivalente de `useChat` en el AI SDK: `agent.send`, estado, errores y `agent.data.messages`.
- Hay canales para Slack, Discord y Microsoft Teams, y se pueden crear canales HTTP o WebSocket propios con rutas, eventos y metadatos.
- Se puede tener un agente por canal o un mismo agente en todos.

### Caso real: Finance Hub
Es la app de dashboard financiero del autor, con Eve integrado:
- `agent.ts`: modelo Opus 4.8.
- `instructions.md`: "eres un asistente de análisis financiero", con lo que puede hacer, cómo funcionan los datos y cómo responder. Tiene unas 66 líneas, cortas a propósito para no inflar el contexto.
- `tools/analyze-net-worth-change`: el input es el número de snapshots mensuales que se comparan. Usa `withFinance`, `Promise.all` y consultas a **Prisma**.
- `skills/financial-analysis`: para preguntas amplias del tipo "¿cómo voy?".
- `lib/`: utilidades (redondeo, interfaces).
- `connections/finance`: `defineMcpClientConnection` con la URL del servidor MCP propio de Finance Hub, una descripción legible, un bearer token opcional y la lista explícita de tools (opcional, para facilitarle el trabajo al agente).
- `channels/`: `eve.ts` y Slack (ID de Slack y contexto de hilo).

Al preguntar "¿cuánto gasté el mes pasado?", el agente hace una búsqueda de conexión y llama a `finance_get_spending_by_category`, que es la llamada MCP. La respuesta: 3600 € en junio de 2026. En Slack, el mismo agente responde igual y sigue la conversación: mayo (unos 3100 €, unos 536 € menos) y la mayor categoría de gasto (alquiler, 1,8 k, cerca del 50 %).

### Sesiones durables y conclusión
- Cada sesión es durable: se puede volver un mes después y conservar el contexto.
- Según el autor, lo mismo con el AI SDK o sin él costaría "semanas" en lugar de una hora, con muchos errores. Ya usa Eve para agentes personales y en sus productos.

## Conceptos clave

- **Bucle básico de agente**: modelo + system prompt + tools + loop. Es necesario, pero estático e insuficiente para un agente real.
- **Framework maldito (cursed framework)**: infraestructura casera que se acumula al añadir a mano durabilidad, canales, sandbox, etc. a cada agente.
- **Runtime de Eve**: workflow durable, AI SDK, sandbox, connections, tools y subagentes. Da ejecución durable, estado persistente y streaming de eventos.
- **Canal**: la superficie donde se expone el agente (TUI, web, Slack…). Solo necesita entrada y salida.
- **`instructions.md`**: la identidad y el comportamiento general del agente, cargados en cada mensaje.
- **Skill**: orientación concreta que se carga dinámicamente cuando es relevante, para ahorrar contexto.
- **Tool tipado**: una acción con descripción, esquema de entrada Zod y función `execute`. El modelo la elige por su descripción.
- **Connection MCP**: integración con un servidor MCP externo declarada con `defineMcpClientConnection`.
- **Sesión durable**: una conversación persistente que se puede retomar más tarde con su contexto.

## Herramientas y referencias mencionadas

- Eve (framework de agentes de Vercel): CLI, `defineTool`, `defineMcpClientConnection`, `useAgent`/`useEveAgent`
- Vercel AI SDK (`useChat`), Vercel AI Gateway, Next.js (app router)
- Modelos: Claude Opus 4.8, Claude Sonnet 5; proveedores Anthropic, Google, OpenAI, Z.ai, DeepSeek
- Zod, Prisma, MCP (servidor MCP de Linear como ejemplo)
- Canales: Slack, Discord, Microsoft Teams, Linear, WhatsApp, Telegram
- Claude Code, Cursor (como referencia de subagentes)
- Scrimba (patrocinador)

## Referencias

- Transcripción: [[VvlgwaAp-lo - agentes-con-eve-y-nextjs|Transcripción completa]]
- Video: [I Found the BEST Way to Build AI Agents (Eve + Next.js)](https://www.youtube.com/watch?v=VvlgwaAp-lo) — Jan Marshal
