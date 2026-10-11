---
title: "Construir un harness de agentes event-sourced con stream processors"
tags:
  - arnes/nota
  - type/nota
  - arnes/construccion
  - arnes/herramientas-y-sandbox
  - arnes/orquestacion-multiagente
channel: "AI Engineer"
speaker: "Jonas Templestein y Misha (Iterate)"
videoId: "vi-2nasppAg"
source: "https://www.youtube.com/watch?v=vi-2nasppAg"
language: "en"
playlistOrder: 49
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Make your own event-sourced agent harness using stream processors — Jonas Templestein, Iterate"
related:
  - "[[vi-2nasppAg - harness-event-sourced-con-stream-processors|Transcripción]]"
---

# Construir un harness de agentes event-sourced con stream processors

Taller (workshop) de AI Engineer impartido por Jonas Templestein junto a Misha, ambos de Iterate. Lo plantean como un "hackathon improvisado": el SDK se publicó un minuto antes de empezar y buena parte de la sesión se ve afectada por fallos técnicos (el editor de Jonas deja de responder, cambian de laptop y al final "admiten la derrota" en la demo del agente con OpenAI). Aun así, el valor está en las ideas: Jonas quiere averiguar "si esto es tonto o genial".

La tesis es que un agent harness puede construirse **puramente con event sourcing**: un único primitivo (un stream de eventos append-only con path tipo sistema de archivos, accesible por HTTP) y **stream processors** que reducen el stream a un estado y, ocasionalmente, ejecutan efectos secundarios. De ahí se derivan depurabilidad total, extensibilidad componible, plugins distribuidos en cualquier lenguaje, subagentes como sub-paths y hasta el despliegue de procesadores agregando un evento con su código fuente. Es relevante para el harness engineering porque propone una arquitectura alternativa a los harnesses monolíticos (Claude Code, Pi, OpenCode) y sus APIs de hooks.

## Resumen

- **Todo es un evento**: el harness ideal es puramente event-sourced, "aka depurable"; nada debería ocurrir como efecto secundario visible solo en trazas OpenTelemetry.
- **Un solo primitivo**: streams de eventos crudos organizados por paths jerárquicos (como un sistema de archivos) en el servicio `events.iterate.com`, manipulables con simples `curl`.
- **Agente = reductor + efectos**: se puede construir un agente de código de vanguardia implementando un stream processor que reduce el stream a estado y en `afterAppend` hace side effects (llamadas al LLM, appends).
- **Separar reduce de efectos**: el reducer es síncrono y puro para que, al reanudar tras horas dormido, el procesador se ponga al día sin disparar cientos de llamadas LLM por eventos pasados.
- **Todo agente tiene URL**: los agentes deben vivir en el edge y hablar HTTP desde que existen; así webhooks de Slack, formularios web o terceros entran sin inventar "conectores".
- **Distribuido y políglota**: los plugins pueden correr en otras máquinas y en cualquier lenguaje (Rust, TypeScript…), a costa de posibles race conditions y bucles infinitos, mitigados con un circuit breaker.
- **Subagentes como sub-paths**: crear un subagente es hacer append a `./boris` y suscribirse a su evento de resultado.
- **Desplegar con un evento**: un evento `dynamic worker configured` con el código de un procesador convierte cualquier stream en un agente, ejecutado en dynamic workers de Cloudflare.
- **No a los before hooks**: rompen el caché de contexto y el rendimiento; mejor pensar en un sistema eventualmente consistente con esperas acotadas (p. ej. 200 ms) para procesadores externos.
- **Infraestructura tipo durable streams**: combinación de cola, pub/sub, base de datos de streaming y ejecución de código, inspirada en la especificación Durable Streams.

## Contenido estructurado

### Motivación y principios de diseño

Jonas lleva un año "dándole vueltas" a cómo construiría su propio harness. Antes no existían Claude Code ni Pi y uno hacía su propio harness de código; hoy sigue creyendo que hay una mejor forma. Sus principios:

1. **Event-sourced = depurable.** Los harnesses actuales "rozan" el event sourcing sin llegar a serlo:
   > "Siempre hay algo que tiene un efecto secundario que luego solo puedes ver en las trazas de OTel, lo cual no tiene sentido para mí, porque normalmente estos agentes ya tienen un log de eventos."
   Si todo lo que puede ocurrir está en ese log, depurar es trivial y extender también.
2. **Extensible, también por el propio agente.** Inspirado por Pi: "lo valioso que es hacer un agente extensible, no solo por humanos, sino por sí mismo".
3. **Componible.** Que tus extensiones y las mías se puedan combinar, porque "todavía no sabemos cuál es la mejor receta para los agent harnesses" y experimentar es demasiado difícil incluso en Pi (todo corre en un solo hilo y proceso en una máquina).
4. **En el edge, públicamente direccionable.** Un agente es una entidad digital: un programa conectado a internet que habla HTTP.
   > "En el momento en que un agente existe, debería tener una URL. Si no, acabas inventando un concepto de conector solo para que entren los mensajes de Slack."
5. **Distribuido.** Un agente en un servidor, tu plugin en Rust en otra máquina, el mío en TypeScript en otra. Es "un arma de doble filo": aparecen condiciones de carrera y bucles (dos plugins mandándose mensajes sin fin), pero esos problemas ya existen en la mayoría de harnesses, así que conviene anticiparlos.

Advertencia explícita: nada de lo mostrado es seguro; no hay autenticación y todos pueden ver los streams de todos. No se deben poner secretos en los payloads.

### El servicio events.iterate.com

Construido "la semana pasada" como prueba de concepto, con UI web y API HTTP:

- **Paths de agentes**: cada agente tiene un path jerárquico que empieza con `/` (para tener una raíz bien definida). Los streams se crean implícitamente al hacer POST a cualquier path.
- **Project slug**: cabecera HTTP opcional que da un namespace/base de datos completamente nuevo.
- **Sobre del evento**: solo `type` es obligatorio; normalmente hay `payload`. El servidor añade `streamPath` (de la URL), `offset` (entero autoincremental desde 1, punto de serialización en el servidor) y `createdAt`.
- **Lectura por SSE**: `curl -N` sobre el path devuelve los eventos; con `?live=true` la conexión queda abierta y sigue enviando eventos nuevos (inspirado en el estándar Durable Streams, con pequeñas diferencias). Se puede filtrar con `sed` y `jq .` para formatear.
  > "Esto ya sería un agente de IA si Misha estuviera respondiendo simultáneamente a mi hello world."
- **Tolerancia a entradas inválidas**: si se envía algo sin `type`, el servidor agrega un evento de error ("invalid event appended"). Como todo es event sourcing, el error también es un evento. La teoría de Jonas: los LLM son lo bastante buenos para consumir webhooks crudos de cualquier origen.
- **Tipos como URL**: los tipos creados por el servidor empiezan con `https://events.iterate.com/...` y llevan a la documentación de ese tipo. "Si va a ser una cadena opaca, ¿por qué no hacerla útil?". También valen tipos de una o dos palabras.
- **Idempotency key**: para webhooks, evita agregar dos veces el mismo evento.

### Pausa, circuit breaker, programación y suscripciones

- **Pausar un stream** es, en event sourcing, agregar un evento que dice "estás pausado" (requiere un `reason`). Una vez pausado, el servidor rechaza nuevos eventos y ese rechazo **no** aparece como error en el stream, para no generar infinitos eventos de error. Se reanuda con otro evento.
- **Circuit breaker**: si llegan más de ~100 eventos por segundo, el stream se pausa automáticamente hasta que alguien lo reanude. Se incluyó desde el inicio por la facilidad de crear bucles infinitos.
- **Transformador de objetos JSON**: un plugin configurable por evento que observa ciertos eventos, los reescribe y genera uno nuevo.
- **Programación (scheduling)**: un evento puede pedir un heartbeat cada 5 segundos, algo dentro de 10 minutos o a una hora concreta; también se cancela con un evento.
- **Suscripciones**: además de la suscripción pull (cliente HTTP consumiendo SSE), un evento puede pedir al stream que haga **push** a tu servidor, a un tercero o a la API de Slack cada vez que se agrega un evento, opcionalmente filtrado.

### ¿No son ya event-based los agentes actuales?

Ante esa pregunta del público, Jonas responde que la diferencia está en la superficie de la API. Las APIs de extensiones de OpenCode, Pi o Claude Code son algo más grandes y tratan, por ejemplo, los chunks de streaming parciales como algo distinto:

> "Para mí, 'he recibido cinco letras de una respuesta en streaming' es un evento perfectamente válido. Soy un tipo de una sola abstracción: debería haber una sola cosa, que es un evento."

> "Creo que puedes construir un agente de código expresivo y de vanguardia implementando un stream processor que reduce sobre el stream de eventos y ocasionalmente ejecuta efectos secundarios. Eso es todo lo que hace."

El servicio de eventos es el almacenamiento, casi una base de datos; Jonas lo compara con Convex ("la ilusión de ejecutar TypeScript en la base de datos"): sería un "stream programable", porque se puede agregar un evento con el código fuente del procesador y se ejecuta en cada evento. Así se pueden probar muchas implementaciones de harness que responden a eventos reales de internet sin desplegar servicios. Sobre Iterate: "ahora mismo somos más un club de hackers que una empresa comercial", sin producto lanzado, aunque cualquier producto se basaría en esta arquitectura.

### SDK y carácter políglota

- La API es extremadamente simple, con especificación OpenAPI en `events.iterate.com/api/docs`, de modo que puede usarse desde cualquier lenguaje. Para el taller publicaron un cliente en un paquete npm (`ai-engineer-workshop`) y un repo en `github.com/iterate/ai-engineer-workshop` con `workshop.md` y curls ejecutables.
- Ejemplo básico: `createEventsClient` con base URL y path prefix; `client.stream({ live: true, path })` y, si el evento es de tipo `ping`, `client.append` de un `pong`. Algunos asistentes lo ejecutan con éxito; la máquina de Jonas no (Cursor deja de responder), y pasa varios minutos lidiando con ello hasta usar la laptop de Misha, donde pide por voz a un agente que cree un ejemplo con el SDK de OpenAI.

### El modelo de stream processor

Jonas explica qué es realmente un procesador:

- Existe un **estado del mundo** derivable de los eventos (en el ejemplo de Misha, contar cuántos eventos `hello world` hay en el stream).
- Toda la lógica se escribe como una **función reduce**: síncrona, recibe `(state, event)` y devuelve el nuevo estado (o nada, y se ignora).
- **No se hacen side effects en el reducer.** Para eso está `afterAppend`.
- Razón de la separación: si el programa se duerme (cierras la laptop) y entran 100 eventos, al reanudar no quieres lanzar 100 llamadas LLM por eventos pasados; quieres ponerte al día y decidir qué hacer con el estado final.
- `defineProcessor` crea un procesador inerte; un **runtime** (por ejemplo `PullSubscriptionProcessorRuntime`) es el boilerplate que consume el stream, ejecuta el reducer y luego el hook `afterAppend`.
- En `afterAppend` se puede hacer append al mismo stream, a un path hijo o a un path padre.

**Subagentes**: como los paths son un sistema de archivos, un subagente es simplemente hacer append a `./boris` y suscribirse a eventos especiales que Boris emita ("tengo el resultado"); el padre se despierta automáticamente cuando llega el resultado.

### Diseñar un agente LLM en este paradigma

Jonas recorre el código como si se escribiera desde cero (no logran ejecutarlo):

1. **Preguntar qué estado se necesita.** Para llamar a `openai.responses.create` hacen falta:
   - `model` (en el ejemplo, GPT-5.4).
   - `systemPrompt` (OpenAI lo llama `instructions`; Jonas lo considera un nombre poco acertado).
   - `history`.
   Se define como un tipo TypeScript y con un estado inicial (historial vacío, un system prompt y el modelo). En el futuro se añaden fácilmente campos como "estoy compactando" o "hay una tool call en curso"; el objetivo es que cada capacidad cueste "tres o cuatro líneas de código".
2. **Definir los eventos que derivan ese estado** (con esquemas Zod):
   - `agent-input-added`: deliberadamente lo más simple posible, solo un string. La UI tiene un atajo para crearlo.
   - Cada respuesta de OpenAI, incluso un fragmento mínimo de texto, se guarda como evento, porque "es un hecho que ha ocurrido".
3. **Escribir el reducer**: al encontrar `agent-input-added`, se agrega al historial `{ role: "user", content }`, traduciendo de la visión propia del mundo al formato de la Responses API. Usan Schematch, una pequeña librería de Misha sobre Zod que da seguridad de tipos al payload.
4. **Efectos**: en `afterAppend`, hacer la petición al LLM y agregar como eventos lo que devuelve el streaming.

Ejercicio propuesto: un evento `llm-model-changed` con un reducer de una línea que cambia el modelo de las siguientes peticiones.

### Dónde corren los reducers

Un asistente pregunta si los eventos materializados (deltas de texto agrupados) se persisten o se materializan del lado del cliente. Respuesta: **todo, cada chunk de streaming, se convierte en evento del stream**, y hay reducers corriendo en muchos lugares:

- **Circuit breaker en producción**: estado inicial `paused: false`, `pausedReason: null`; el reducer acumula los timestamps de los últimos 100 eventos y `afterAppend` lanza el evento de pausa si todos caen dentro del último segundo. Así está construido el propio servidor de eventos.
- **La UI también es un stream processor**: proyecta los eventos "interesantes" en **feed items** con mejor renderizado, que no son eventos sino derivados de ellos.
- Como el reducer es una función síncrona, se pueden **reutilizar reducers ajenos**: si existe un procesador del harness de Pi con sus tipos de evento, se importa su reducer "prácticamente gratis" y se construyen abstracciones encima. También se podría conectar Pi, Claude Code u OpenCode y almacenar sus eventos en el stream.

### Dynamic workers: desplegar un procesador con un evento

La parte que Jonas considera más emocionante (y la que le costó la noche):

- En la UI hay eventos predefinidos; uno es `dynamic worker configured`, cuyo payload contiene un `script` (string) con un reducer y un hook `afterAppend`.
- Tras agregarlo a un stream nuevo, enviar `ping` devuelve `pong`:
  > "Tengo un stream que no sabe nada del mundo, le agrego este evento con un poco de JavaScript, y responde pong cuando encuentra ping."
- Los archivos de procesador definidos con `defineProcessor` se pueden **empaquetar (bundle) en un evento**. Así hizo funcionar un agente de IA: "escribes las ~40 líneas de código de un agente básico, las agregas a cualquier stream y ese stream se convierte en un agente".
- **Secretos**: para no poner la API key de OpenAI en el stream, se guarda fuera y el runtime la sustituye en la cabecera al hacer `fetch`.
- Limitación: el script no puede tener dependencias; los paquetes npm deben ir empaquetados en el string. Solución imaginada: un evento "unbundled dynamic worker" con campos `package.json` y `script`, y otro procesador que lo empaqueta y emite el evento "gordo". Eso convertiría el sistema en una especie de IDE para hackear el harness sin instalar nada.
- Los eventos tienen un **slug** (identificador URL-safe) que permite sobrescribirlos; un agente ya puede **darse a sí mismo nueva funcionalidad** haciendo append de un JavaScript distinto.
- **Errores**: lo único que puede pasar es que se emita un evento de error. Misha añade que podría añadirse un paso de compilación TypeScript que emita errores, pasarlos a un LLM para corregir el código y emitir un nuevo evento con el código arreglado.
- Ejecución: en dynamic workers de Cloudflare. Flujo de despliegue típico: ejecutar el procesador localmente vía suscripción SSE; cuando funciona, desplegarlo como servicio web (Cloudflare Workers, Vercel…) con suscripción push, o usar directamente el dynamic worker.

### Plugins remotos y servicios de terceros

- Ejemplo: un servicio de **protección contra prompt injection** en otra máquina. Por MCP no es posible, porque no hay forma de engancharse proactivamente al loop del agente. Aquí el loop podría esperar hasta ~200 ms antes de cada petición al LLM para que los verificadores de seguridad respondan; el verificador puede implementarse como quiera e incluso cobrar por ello.
- Hoy, para convertir un plugin de Claude Code en negocio, hay que instruir a Claude para que llame a tus herramientas MCP o a una CLI autenticada; en cambio, aquí basta con enchufarse al stream: "alguien nota que Claude está a punto de hacer algo y mete más eventos".
- Misha: un agente podría usar servicios just-in-time ofrecidos por otros agentes y pagar por ellos (al principio, el humano).

### Contra los before hooks

> "No hay before hook. Esto es muy, muy importante."

- La única diferencia entre los procesadores internos y los de terceros es que los internos pueden impedir que un evento se agregue (por eso la pausa no la podría implementar un tercero).
- Jonas está "muy en contra" de los before hooks: en OpenClaw hubo regresiones de rendimiento y aumentos de coste porque rompen fácilmente el caché de contexto.
- Alternativa: pensar el sistema como **eventualmente consistente**. Se espera hasta 200 ms por información adicional, pero la petición al LLM se hace igualmente: el sistema debe ser resiliente.
- **RAG como procesador oportunista**: un procesador con un índice de la base de conocimiento de Notion intenta "colar" contexto extra si lo considera relevante; si no llega a tiempo, no pasa nada y el agente no se retrasa.

### Infraestructura y seguridad

- El servicio de Iterate es solo para el ejercicio; la idea funcionaría sobre cualquier cosa con forma de **durable stream**: un log append-only con seguimiento de offsets. Kafka hace que el cliente lleve el offset; los pub/sub de Google Cloud y AWS lo llevan en el servidor. Lo novedoso sería añadir suscripciones push, como hace NATS JetStream. Mencionan Electric SQL y su especificación Durable Streams.
- Es una primitiva de infraestructura interesante: "una combinación de cola, sistema pub/sub y base de datos de streaming que además ejecuta código por ti".
- **Abuso/flooding**: haría falta autenticación. Jonas imagina un namespace público que se borra cada hora para que cualquiera pruebe "un sabor de agente" con un curl. Bien hecho, cada evento llevaría **información de procedencia del cliente** (quién fue, qué podía hacer, qué certeza hay de que estaba autorizado), y eso también se modela como eventos: p. ej. un evento "hacer público este stream"; hasta entonces solo su creador puede escribir.
- Cierre: Jonas se compromete a grabar un video con la demo completa, dado que el taller no pudo mostrarla.

## Conceptos clave

- **Harness event-sourced**: harness en el que todo lo que ocurre (inputs, chunks de streaming, errores, configuración, pausas) es un evento en un log append-only; el estado se deriva siempre de ese log.
- **Stream processor**: componente con un estado inicial, un reducer síncrono `(state, event) => state` sin efectos y un hook `afterAppend` donde se ejecutan los efectos secundarios.
- **afterAppend**: hook que corre tras reducir los eventos, cuando el estado ya está al día; aquí van las llamadas al LLM o los appends a otros streams.
- **Stream path**: identificador jerárquico, tipo sistema de archivos, de cada stream/agente; permite modelar subagentes como paths hijos.
- **Circuit breaker**: procesador interno que pausa un stream si recibe más de ~100 eventos en un segundo, para cortar bucles infinitos entre plugins.
- **Dynamic worker configured**: evento cuyo payload contiene el código de un procesador; al agregarlo, el stream ejecuta ese código en un worker de Cloudflare.
- **Feed items**: proyección de los eventos en elementos de UI con mejor renderizado; derivados por un reducer, no son eventos.
- **Suscripción pull vs. push**: el cliente consume SSE (pull) o el stream notifica a un endpoint externo cada vez que se agrega un evento (push).
- **Durable stream**: log append-only con seguimiento de offsets, base de la arquitectura; el offset puede llevarlo el cliente o el servidor.
- **Consistencia eventual en el loop del agente**: en lugar de before hooks bloqueantes, se espera un tiempo acotado a que procesadores externos aporten eventos y luego se continúa igualmente.

## Herramientas y referencias mencionadas

- **events.iterate.com** (servicio de streams de eventos de Iterate, con UI, API OpenAPI en `/api/docs` y SSE).
- **github.com/iterate/ai-engineer-workshop** y el paquete npm del SDK (`createEventsClient`, `defineProcessor`, `PullSubscriptionProcessorRuntime`).
- **Pi**, **Claude Code**, **OpenCode**, **OpenClaw** (harnesses de agentes comparados).
- **OpenAI SDK / Responses API**, modelo GPT-5.4.
- **Zod** y **Schematch** (librería de Misha para hacer pattern matching tipado de payloads).
- **Cloudflare Workers / dynamic workers**, **Vercel**.
- **Convex** (analogía de "TypeScript en la base de datos").
- **Durable Streams** (especificación), **Electric SQL**, **Kafka**, **NATS JetStream**, pub/sub de Google Cloud y AWS.
- **MCP**, **OpenTelemetry**, **Cursor**, **Notion** (ejemplo de RAG), **Slack** (webhooks).

## Referencias

- Transcripción: [[vi-2nasppAg - harness-event-sourced-con-stream-processors|Transcripción completa]]
- Video: [Make your own event-sourced agent harness using stream processors — Jonas Templestein, Iterate](https://www.youtube.com/watch?v=vi-2nasppAg) — AI Engineer
