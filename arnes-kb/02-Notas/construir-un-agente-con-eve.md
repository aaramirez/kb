---
title: "Construir un agente con Eve, el framework abierto de agentes de Vercel"
tags:
  - arnes/nota
  - type/nota
  - arnes/frameworks
  - arnes/construccion
  - arnes/produccion
channel: "Vercel"
speaker: "Andrew y Casey (tech leads de Eve, Vercel)"
videoId: "eD8pV7nSIxY"
source: "https://www.youtube.com/watch?v=eD8pV7nSIxY"
language: "en"
playlistOrder: 16
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Build an Agent with Eve: The Open Agent Framework - Ship 26 NYC Workshop"
related:
  - "[[eD8pV7nSIxY - construir-un-agente-con-eve|Transcripción]]"
---

# Construir un agente con Eve, el framework abierto de agentes de Vercel

Taller en vivo de la conferencia Ship 26 NYC de Vercel, a cargo de Andrew, uno de los tech leads de **Eve**, con intervenciones de Casey, el otro tech lead. El equipo llevaba unos cuatro meses construyendo el framework, que se presentó pocas semanas antes en Ship London. La primera parte es una demo práctica: crear el proyecto, conectarlo a un modelo, desplegarlo en Slack, añadir una conexión de datos y actualizar instrucciones. Después viene una larga sesión de preguntas del público sobre evals, determinismo, persistencia, extensibilidad del harness, tareas largas, sandboxes y precios.

Para el harness engineering importa porque Eve se presenta justamente como un **harness gestionado**: agentes declarativos basados en el sistema de archivos, con muchas funciones de harness ya incluidas (herramientas por defecto, sandbox, canales, observabilidad, evals, hooks). Corre de forma *serverless* y *stateless* sobre un motor durable de workflows. Los ponentes explican qué parte del harness controla el framework, qué se puede reemplazar y por qué decidieron no dejar que cada uno traiga su propio harness, al menos por ahora.

## Resumen

- **Agentes declarativos en el sistema de archivos**: un agente Eve vive en un directorio `agent/` y, como mínimo, puede ser solo un archivo de instrucciones.
- **Funciones de harness listas de serie**: búsqueda web, web fetch, read/write file, glob, grep y sandbox vienen incluidas. Según el ponente, son cosas que "nunca deberías tener que configurar".
- **Canales como capa superior**: HTTP por defecto, Slack mediante Vercel Connect, TUI y WebSocket. Cada canal decide cómo se presentan el razonamiento, las llamadas a herramientas, las preguntas y las aprobaciones.
- **Contrato de canal determinista**: el agente no recibe una herramienta de Slack. El canal define cómo fluyen los eventos del agente hacia Slack y desde Slack.
- **Tools y connections**: un tool es un mapeo uno a uno, escrito en TypeScript con cualquier librería de Node. Una connection (OpenAPI, MCP) es un tipo especial de tool. Un tool puede exigir aprobación humana.
- **Documentación dentro del paquete**: Eve trae docs en `node_modules` para que los agentes de código (opencode en la demo) construyan agentes Eve de forma fiable.
- **Evals de primera clase**: hay una API para hablar con el agente como en la CLI, con checks deterministas y LLM como juez. El propio framework se prueba con evals.
- **Determinismo cuando hace falta**: output schemas, subagentes y, más adelante, workflows. Aun así, la filosofía es confiar en el modelo y escribir skills en lenguaje natural.
- **Harness stateless y durable**: Eve usa Workflow SDK como motor de persistencia. Puede pasar a otra función serverless en cada llamada a herramienta, así que un turno puede durar horas.
- **Extensible, pero sin reemplazar el harness**: los tools por defecto se pueden desactivar o sustituir, y hay hooks (compactación, pre/post tool call). Más adelante quizá se pueda traer un harness propio, como opencode o Pi.
- **Capa sobre el AI SDK**: Eve se construye encima del AI SDK y añade durabilidad y harness. Si no te gusta el modelo declarativo, tiene sentido usar el AI SDK directamente.
- **Coste serverless**: desplegar no cuesta nada si no se usa. Se paga CPU y duración de funciones, uso de sandbox y tokens, que son "el 90 %" del gasto.

## Contenido estructurado

### Crear y ejecutar un agente Eve
- Se empieza con `npx` + `init`, que genera la aplicación Eve más básica posible.
- La estructura gira en torno al directorio `agent/`:
  > "Estamos haciendo agentes declarativos basados en el sistema de archivos. Y por defecto, un agente puede ser literalmente un archivo de instrucciones y nada más."
- `eve dev` guía la autenticación con un proveedor de modelos. En la demo se usa el **AI Gateway** de Vercel y se crea un proyecto de Vercel, aunque se pueden usar claves y proveedores propios. Se anuncia soporte futuro para cosas como la suscripción de Codex.
- Con eso ya se puede hablar con el agente: es "ChatGPT en una caja". Al preguntar quién ganó las finales de la NBA 2026, el agente invoca la búsqueda web sin configurar nada.

### Canales y despliegue en Slack
- **Canales** es la capa superior de cómo se habla con el agente. Por defecto existe un canal HTTP.
- Slack se conecta con **Vercel Connect** (workspace "ship NYC") y después se despliega. El agente aparece en Slack y responde cuando lo mencionan.
- Cada canal se encarga de su propia presentación. En Slack se muestran indicadores de razonamiento y las llamadas a herramientas, así que no hace falta recrear esa interfaz por defecto.

### Observabilidad
- En el panel de Vercel cada mensaje genera una ejecución (run) que se puede inspeccionar. En la demo sirvió para ver que había fallado la carga de una skill. Eso es observabilidad incluida de serie para depurar.

### Connections: conectar datos
- Partiendo de una especificación OpenAPI de clima (podría ser una base Postgres u otra fuente), el ponente le pide a **opencode** que añada una conexión OpenAPI.
- El agente de código fue directamente a la documentación de Eve en `node_modules`:
  > "Para que construir agentes Eve sea muy eficiente y fiable, enviamos documentación especial dentro del paquete."
- Creó un archivo `weather` usando la API de primera clase de Eve para conexiones OpenAPI. Al preguntar "¿qué tiempo hace en NYC?", el agente hizo una búsqueda de conexión, buscó las coordenadas y consultó la API.
- Luego se le pide al agente de código que actualice las instrucciones para que sea "experto en NYC". El cambio se refleja en tiempo real y el redespliegue en Slack tarda segundos.

### Tools frente a connections, y aprobaciones humanas
- Las **connections** son un tipo especial de tool. Un **tool** es un mapeo uno a uno que se deja en la carpeta `tools/`.
- Ejemplo de MongoDB con dos tools, `query` y `mutate`. Dentro del tool se puede importar cualquier librería de Node.js e interactuar con sandboxes. Diseñar los patrones de consulta le toca al desarrollador.
- Están separados porque `mutate` **requiere aprobación**: nunca se ejecuta sin un humano en el bucle.
- Hay un tool integrado de preguntas: en la TUI se ve de una forma y en Slack con una experiencia nativa. Las aprobaciones pasan por la misma interfaz.

### Conectores, voz y WebSocket
- Un asistente preguntó si Eve podría sustituir a Composio (conectores), LiveKit (voz) o PartyKit (WebSocket). Respuesta:
  > "Las APIs de bajo nivel de Eve existen para que estos agentes de código puedan construir esas cosas."
- En vivo se le pide al agente de código un canal en tiempo real con WebSocket y *debounce*. Vercel ya soporta WebSocket y Eve tiene el canal como primitiva. Más tarde se comprueba que el agente encontró y usó la API de WebSocket correcta.
- El equipo de **Vercel Connect**, separado del de Eve, ya publicó integraciones con Linear, Slack y GitHub, y seguirá ampliándolas.

### Evals y bucle de mejora
- Ante la pregunta de cómo mejorar el agente con el tiempo, el ponente dice que los evals son el punto de partida:
  > "Si vas a iterar en serio sobre un agente dentro de tu empresa, necesitas entender cuál es el estado actual y, a medida que haces cambios, cuál es el nuevo estado."
- El agente de código escribe un eval: "cuando alguien pregunta por el clima, responde con New York City".
- La suite de pruebas de Eve, pública en GitHub, está hecha con evals: subagentes, humano en el bucle, etc. Los evals se pueden enviar a proveedores como **Braintrust**.
- La API permite interactuar con el agente igual que en la CLI, combinando:
  - checks deterministas (por ejemplo, si la respuesta contiene "NYC");
  - **LLM como juez**, para comprobar el significado.

### Frontends y control de comportamiento en Slack
- Next.js es "ciudadano de primera clase". Hay herramientas de frontend como el hook `useEveAgent`, y también se soportan Svelte y Nuxt. Se menciona una demo del Mundial que alguien construyó.
- Controlar Slack es "cuestión de código": desactivar los DMs, limitar quién puede escribir en cada canal o consultar el proveedor de identidad para decidir permisos. El canal por defecto viene vacío y la API es progresiva.
- Casey explica el **contrato de canal**:
  > "El agente no tiene acceso directo para llamar a Slack… Estás definiendo esencialmente un contrato determinista con los eventos del agente sobre cómo deben fluir hacia Slack y viceversa."

### Determinismo frente a autonomía del modelo
- Principio rector de Eve: los modelos son inteligentes y cada vez siguen mejor las instrucciones si describes lo que quieres.
- Herramientas para recuperar determinismo:
  - **output schema**: el SDK de TypeScript permite pedir salidas estructuradas;
  - **subagentes**: por ejemplo, "dame la temperatura como número";
  - **workflows**, en exploración: mezclar llamadas al agente con salidas predeterminadas.
- La recomendación práctica es probar primero, evaluar y escribir una skill en inglés llano ("haz esto, luego esto, luego esto"):
  > "Especialmente con estos modelos de frontera, quedarás muy satisfecho con los resultados de simplemente escribir una skill en lenguaje natural."

### Eve frente a Claude Tag y el multi-tenant
- A **Tag** (Claude en Slack) lo describe como un "binario único", igual para todos, centrado en autoevolución y memoria. Eve es *code-first*, para construir el agente de tu empresa, y Tag se podría construir sobre Eve.
- Hay APIs multi-tenant, como la guía "multi-tenant memory": skills por usuario guardadas en una base de datos, incluso para cientos de miles de usuarios. No descarta un Tag de código abierto sobre Eve.

### Persistencia de mensajes y sesiones
- Todavía no se expone un adaptador de almacenamiento. El motor de persistencia es **Workflow SDK**.
- Eve tiene **sesiones** y **streams** que no dependen del canal. Ejemplo interno: en el agente de datos de Vercel, el 90 % de las invocaciones llegan por Slack, y un botón "abrir en web" retoma la sesión allí.
- Cualquier canal puede retomar cualquier sesión si tiene el **continuation token**.

### Extensibilidad del harness y hooks
- Tools por defecto: read file, write file, web fetch, web search, glob y grep. Todos se pueden desactivar o reemplazar, pero el ponente aconseja "apoyarse fuertemente en los evals" si se hace.
- Los **hooks** se enganchan a eventos del harness: compactación, pre-tool call, post-tool call.
  > "En lugar de cambiar el harness, probablemente quieras construir alrededor de él."
- Quizá en el futuro se pueda ejecutar Eve sobre opencode o Pi. Por ahora controlan el harness porque es **serverless y stateless** y debe funcionar a través de límites de pasos y workflows, cosa difícil con harnesses que esperan un proceso siempre activo.

### Tareas de larga duración
- Deberían funcionar de serie, con turnos de horas. Como el harness no tiene estado, se puede despachar a otra función serverless en cualquier momento del turno y seguir donde se quedó.
- Para el límite de 15 minutos de las funciones serverless, en cada llamada a herramienta se puede pasar a una función nueva. En Vercel esto es automático; en autohospedaje hay que tener otras cosas en cuenta.

### Sandboxes y uso de navegador
- Hoy no hay *browser use* ni *computer use* integrado, solo web fetch y web search. Se puede integrar un proveedor mediante tools o probar con Vercel Sandbox.
- **Cada agente Eve tiene un sandbox por defecto**: Docker en local y Vercel Sandbox en la nube. Es la base de capacidades como grep o guardar archivos. En vivo se le pide al agente de código un `sandbox.ts` con una dependencia de navegador.

### UI generativa
- Ante la pregunta sobre catálogos de componentes con JSON (Vercel JSON render), se enseña la demo del Mundial hecha por alguien en X, con interfaz renderizada a partir del stream de Eve.

### Eve frente al AI SDK y harnesses prefabricados
- Eve es una capa sobre el **AI SDK**: toma sus primitivas y resuelve "lo realmente difícil" (agentes durables, harness). Lo nuevo del AI SDK v7 estuvo disponible en Eve el mismo día.
- Frente a harnesses prefabricados como **OpenClaw** o **Hermes agent**, la diferencia es el control:
  > "Puedes construir un agente entero en Markdown, pero cada archivo Markdown de Eve puede ser un archivo TypeScript y puedes hacer *eject* y aplicar la lógica personalizada que quieras."

### Precios y motor durable
- Desplegar no cuesta nada porque es serverless. Se paga CPU y duración de funciones, sandbox y tokens (Vercel o propios), que suelen ser el 90 % del gasto.
- **Workflow** es el motor durable: da semántica de reintentos y despacho stateless de funciones. La infraestructura de Vercel permite ejecuciones prácticamente ilimitadas. Hay documentación específica para autohospedaje.

## Conceptos clave

- **Agente declarativo basado en archivos**: un agente definido por archivos en `agent/` (instrucciones, tools, skills, canales, conexiones, sandbox). Cada Markdown se puede convertir en TypeScript.
- **Canal (channel)**: la capa superior por la que se habla con el agente (HTTP, Slack, TUI, WebSocket). Controla cómo se presentan los eventos.
- **Contrato de canal**: un mapeo determinista entre los eventos del agente y la superficie (Slack). El agente no recibe una herramienta para publicar libremente.
- **Connection**: un tool especial para integrar fuentes de datos (OpenAPI, MCP) con una API de primera clase.
- **Tool con aprobación**: un tool que solo se ejecuta tras la aprobación de un humano (human-in-the-loop).
- **Eval**: una prueba automatizada que conversa con el agente y valida la respuesta con checks deterministas o con LLM como juez.
- **Output schema**: una salida estructurada que da determinismo a partes de un sistema no determinista.
- **Sesión y continuation token**: conversación persistente, independiente del canal, que se puede retomar desde cualquier superficie con su token.
- **Hooks**: puntos de extensión sobre eventos del harness (compactación, pre/post tool call).
- **Harness stateless y serverless**: un harness que puede cambiar de función entre pasos gracias al motor durable de workflows, lo que permite turnos de horas.

## Herramientas y referencias mencionadas

- Eve (framework de agentes de Vercel), `eve dev`, `useEveAgent`
- Vercel AI Gateway, Vercel Connect, Vercel Sandbox, Workflow SDK, AI SDK (v7)
- opencode (agente de código usado en la demo), Pi
- Slack, Linear, GitHub (integraciones de Vercel Connect)
- MongoDB, Postgres, OpenAPI, Docker
- Braintrust (proveedor de evals)
- Composio, LiveKit, PartyKit (Cloudflare), mencionados por el público
- Next.js, Svelte, Nuxt
- Claude Tag (Claude en Slack), OpenClaw, Hermes agent, Codex

## Referencias

- Transcripción: [[eD8pV7nSIxY - construir-un-agente-con-eve|Transcripción completa]]
- Video: [Build an Agent with Eve: The Open Agent Framework - Ship 26 NYC Workshop](https://www.youtube.com/watch?v=eD8pV7nSIxY) — Vercel
