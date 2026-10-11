---
title: "Orquestadores de agentes de IA en 2026: escritorio, CLI, agent managers y editores"
tags:
  - arnes/nota
  - type/nota
  - arnes/orquestacion-multiagente
  - arnes/herramientas-y-sandbox
  - arnes/opinion
channel: "Fazt"
speaker: "Fazt"
videoId: "rANNn5fIVmg"
source: "https://www.youtube.com/watch?v=rANNn5fIVmg"
language: "es"
playlistOrder: 7
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Orquestadores de IA 2026: ¿Cuál vale la pena? Codex, Claude, Orca y Herder"
related:
  - "[[rANNn5fIVmg - orquestadores-de-ia-2026|Transcripción]]"
---

# Orquestadores de agentes de IA en 2026: escritorio, CLI, agent managers y editores

Fazt presenta, en un video de unos 28 minutos en formato de repaso comentado con capturas de pantalla, una clasificación de las interfaces que existen hoy para trabajar con agentes de código: aplicaciones de escritorio (Codex Desktop, Claude Code Desktop, OpenCode Desktop), herramientas de terminal (Codex, Claude Code, OpenCode y otros CLI), administradores u orquestadores de agentes que agrupan varias terminales (cmux, Conductor, Orca, Tracer, Superset, Herder), editores de código con vista de agentes (VS Code, Cursor, Antigravity), asistentes personales (Hermes, OpenClaw) y terminales reconvertidas (Warp). Para cada categoría da su opinión de uso diario y recomienda qué elegir según el perfil.

Para el harness engineering el video es interesante porque explica, desde la práctica, por qué el mismo modelo rinde distinto según el harness (Claude Code CLI frente a VS Code o la app de escritorio) y cómo surge la **orquestación de agentes**: planificar con un modelo caro y delegar subtareas a agentes de otros proveedores desde una sola interfaz.

## Resumen

- **Categorías de interfaces**: escritorio, terminal (CLI), orquestadores/agent managers, editores de código con vista de agentes y asistentes personales; casi cualquier herramienta nueva cae en una de ellas.
- **Escritorio = puerta de entrada**: Codex Desktop y Claude Code Desktop son competidores directos y casi equivalentes; la diferencia real es la suscripción y el ecosistema de modelos al que te atan.
- **OpenCode abre el abanico**: interfaz abierta a muchos proveedores y suscripción propia (OpenCode Go) con modelos open weight como DeepSeek, Qwen, MiniMax o Kimi.
- **CLI mejor que escritorio para código**: las herramientas de terminal están más pensadas para desarrollo; la versión de escritorio apunta a usuarios menos técnicos.
- **Harness engineering**: Claude Opus responde mejor en Claude Code que en VS Code porque Anthropic adaptó esa herramienta a sus modelos; no basta con usar el mismo modelo.
- **Orquestación de agentes**: un agente principal planifica con el modelo más potente y delega tareas menores a otros agentes y suscripciones.
- **Orquestadores de terminales**: cmux y Conductor (solo Mac), Orca (open source, multiplataforma, terminales que se comunican entre sí), Tracer (contexto compartido vía markdown), Superset (en preview) y Herder (comando ligero, su favorito).
- **Los editores pierden protagonismo**: VS Code, Cursor y Antigravity añaden ventanas de agentes; Cursor vale sobre todo por lo barato de su suscripción.
- **Hermes y OpenClaw no son agentes de código**: son asistentes personales 24/7; conviene que deleguen el código a Codex o Claude Code.
- **Recomendación final**: si empiezas, una sola herramienta; si quieres orquestar, un agente de terminal más Herder u Orca.

## Contenido estructurado

### El problema: demasiadas interfaces

El autor parte de la confusión que generan proyectos como cmux, Conductor o Herder, junto con Codex Desktop, Claude Code Desktop y los editores que ahora también gestionan múltiples agentes. Promete categorizarlos para saber cuál conviene usar y si vale la pena pagar una suscripción. (El tramo inicial incluye un patrocinio de Odoo Proyectos.)

Estas herramientas reciben distintos nombres, sin uno estándar:

- **Agent managers** (administradores de agentes).
- **Agent development environments** (entornos de desarrollo de agentes).
- **Orquestadores de agentes**.

La idea común: administrar distintos agentes desde una sola interfaz y, según la herramienta, hacer que trabajen en conjunto. El autor reconoce usar unas tres a diario, porque no hacen lo mismo.

### Interfaces de escritorio

- **Codex Desktop** (ChatGPT/OpenAI): no es el chat web genérico; genera código, crea scripts y reconfigura programas porque tiene acceso al sistema operativo. Más pulido en Mac; en Windows "falla bastante"; no hay versión para Linux. Usa la misma suscripción de ChatGPT.
- **Claude Code Desktop**: misma idea (chat, navegador al lado, sesiones a la izquierda). Anthropic empezó por el chat e integró Claude Code después; OpenAI se adelantó con una interfaz centrada en desarrollo e incluso ofrecía migración desde Claude Code.

Por qué no elegir solo uno: **la suscripción**. Cada app te encierra en su ecosistema. En Claude Code tienes solo modelos de Anthropic (Opus 5 y Fable 5, que el autor considera los mejores para código; Fable 5 sería el más avanzado a la fecha). GPT-5.6 Sol es comparable a Opus 5 y el autor lo prefiere como asistente diario por precio y generosidad del plan (leer correos, automatizar, tareas puntuales de código), pero para escribir código usa los modelos de Anthropic.

### OpenCode y los modelos open weight

- **OpenCode** es una alternativa a Claude Code y Codex que no está ligada a GPT ni a Claude: ofrece modelos chinos (DeepSeek, Qwen, MiniMax, Kimi) mediante la suscripción **OpenCode Go**.
- Su app de escritorio propone un diseño propio y es una **interfaz abierta**: admite proveedores como NVIDIA, la suscripción de Kimi con tu clave, etc.
- **Modelos open weight**: modelos abiertos cuyo desarrollo o investigación se comparte en gran medida.
- Estas interfaces son sencillas, no requieren conocimiento técnico, aunque en la práctica se parecen a tener varios chats en una ventana.

### CLI frente a escritorio

Cada app de escritorio tiene su equivalente de terminal: `codex`, `claude` (Claude Code) y `opencode`. Ofrecen la misma experiencia con sus propios modelos.

> "Para la mayoría de tareas puede que no noten ninguna diferencia, pero cuando hablamos de generación de código, por lo general estas herramientas [de terminal] sí son un poco mejores."

El autor reconoce que no hay una métrica oficial (Anthropic no compara Claude Code Desktop con Claude Code CLI), pero, a partir de las filtraciones del código de Claude Code de meses atrás, considera que la CLI está mucho más pensada para el desarrollo, mientras que la versión de escritorio apunta a usuarios no técnicos y al *vibe coding*.

### Harness engineering según el autor

> "Por más que utilices el mismo modelo, no te va a responder igual."

- Usar Claude Opus desde VS Code o GitHub Copilot no equivale a usarlo desde Claude Code: Anthropic adaptó su herramienta de consola para generar código y llamar comandos, mientras que VS Code está hecho para funcionar con múltiples modelos.
- Define **harness** como estas aplicaciones de escritorio o de consola que ejecutan uno o varios modelos.

### Orquestación de agentes

Como las CLI se pueden abrir desde cualquier terminal, aparecen interfaces que las agrupan (no se puede meter una app de escritorio dentro de otra, pero sí terminales). De ahí nace la **orquestación de agentes**:

1. Un agente principal (por ejemplo Claude Code) genera la planificación con el modelo más caro y capaz (Fable 5).
2. Las tareas resultantes, más pequeñas, se delegan a otros agentes: OpenCode, Codex u otra suscripción.

Cada CLI está ligada a modelos concretos: Kimi Code solo usa modelos de Kimi; Amp admite varios modelos con su propia suscripción; otros son harnesses abiertos (como OpenCode) donde instalas cualquier proveedor. El resultado es que acabas abriendo tres o cuatro terminales.

### Multiplexores y orquestadores de terminales

- **tmux**: programa clásico, anterior a la IA, que divide una terminal en paneles; exige memorizar atajos de teclado.
- **cmux**: interfaz gráfica para ejecutar múltiples terminales, cada una con un agente (Claude Code, Codex, OpenCode…). Estable y popular, pero solo Mac.
- **Conductor**: también solo Mac; chats a un lado y terminales en el centro, de cualquier proveedor. Ganan popularidad porque muchos pagan varias suscripciones y quieren unificarlas.
- **Orca**: open source y multiplataforma. Su rasgo destacado es que las terminales se comunican: una sesión de Claude Code puede enviar instrucciones a otra que ejecuta Codex, Kimi u OpenCode. Incluye explorador de archivos, editor y varios proyectos a la vez.

> "En mi opinión, esto sería como el editor de código de esta época."

El autor sostiene que los editores no han muerto, pero navegar archivos pasa a ser una tarea de *review*; lo principal es que la IA genere el código. También anticipa más integración con móviles (Telegram, Slack) para controlar agentes que corren en un servidor o equipo de escritorio.

- **Tracer**: varias terminales con **paso de contexto entre agentes**; lo que un agente genera se guarda en un markdown interno que otro puede leer (comparten archivos de planificación). No soporta todos los agentes.
- **Superset**: proyecto nuevo, aún en preview o con acceso por solicitud.
- **Herder**: su favorito. No es una app de escritorio sino un comando que abre múltiples terminales desde una sola; consume poco, se instala en un servidor/VPS, tiene plugins (le recuerda a Neovim), es open source y se conecta con un bot de Telegram. Lo usa para lanzar instancias de Claude Code y Codex en un servidor y hacer que se comuniquen.

Estas herramientas solo tienen sentido si necesitas orquestar: aprovechar todas tus suscripciones, comunicar agentes y elaborar planificaciones grandes. Si estás aprendiendo, empieza con un solo agente.

### Editores de código con vista de agentes

- **VS Code**: un botón abre una vista de sesiones de agentes similar a Codex Desktop, con los archivos en segundo plano.
- **Cursor**: además del editor, ofrece ventanas de agentes (que ya es la vista por defecto para usuarios nuevos), con los modelos de su suscripción.
- **Antigravity** (Google): editor enfocado en múltiples agentes, con su CLI; Antigravity 2.0 le parece "mucho menos trabajado" que Cursor.

Su valoración: VS Code es abierto, pero usarlo con agentes implica pagar Copilot, que considera caro; Cursor vale por su suscripción barata, no tanto por la interfaz; Antigravity, si ya pagas algo de Google. Para administrar agentes recomienda los orquestadores dedicados.

El autor usa sobre todo Herder con Claude Code y Codex, y añade otra suscripción según el modelo de moda (hoy Kimi K3, mañana una nueva versión de GLM o MiniMax), porque los benchmarks cambian constantemente.

### Asistentes personales: Hermes y OpenClaw

- No son agentes de código. **Hermes** es su asistente personal: lee correos, asigna tareas, descarga contenido; tiene skills interesantes y apps de escritorio y consola; funciona 24/7 conectado a Telegram.
- Delegarle código directamente con GPT-5.6 Sol da menos calidad que usar Codex; mejor que Hermes ejecute Codex o Claude Code por ti.
- **OpenClaw** hace lo mismo, pero sus aplicaciones cliente le parecen de las peores; su app móvil la califica de "AI slop".

El autor salta entre interfaces según la tarea: Cursor o Claude Code Desktop por la suscripción, Hermes como asistente, Herder para varias herramientas de terminal.

### Warp

Antes era una terminal; ahora pivotó a agent manager con panel lateral para varios asistentes. Le gusta la interfaz pero no la usa porque carga demasiado (prefiere WezTerm, Alacritty o Kitty) y porque espera que uses su suscripción de IA.

### Recomendaciones finales

| Perfil | Recomendación |
|---|---|
| Empiezas y quieres algo sencillo | Apps de escritorio: Codex Desktop (si usas GPT), Claude Code Desktop (si usas Claude), OpenCode Desktop (modelos variados) |
| Sabes usar la terminal | Codex o Claude Code ("de lo mejorcito"); OpenCode por variedad y precio |
| Quieres un asistente personal | Hermes, instalado aparte en un VPS; dejar para después |
| Sigues apegado al editor | Cursor como puente entre editor y agent manager |
| Quieres orquestar agentes | Agente de terminal + Herder (más liviano) u Orca (gráfico y más amigable) |

> "Si solamente desarrollas un solo proyecto, pues en realidad no necesitas esto. Solamente necesitas utilizar una suscripción de cualquier proveedor que te guste."

## Conceptos clave

- **Agent manager / orquestador de agentes**: programa (escritorio, web o consola) que administra distintos agentes desde una sola interfaz y puede hacerlos trabajar en conjunto.
- **Harness**: aplicación de escritorio o consola que ejecuta uno o varios modelos; su diseño hace que el mismo modelo rinda distinto.
- **Harness engineering**: adaptar la herramienta al modelo (comandos, generación de código) para obtener mejores resultados que con un harness genérico.
- **Orquestación de agentes**: planificar con un modelo potente y delegar tareas pequeñas a otros agentes o suscripciones.
- **Modelos open weight**: modelos abiertos cuyo desarrollo o investigación se comparte en buena medida.
- **CLI (command line interface)**: versión de terminal de los agentes; según el autor, más adecuada para desarrollo que las apps de escritorio.
- **Paso de contexto entre agentes**: compartir lo que un agente escribió (por ejemplo, vía archivos markdown de planificación) para que otro lo reutilice.

## Herramientas y referencias mencionadas

- Apps de escritorio: Codex Desktop (OpenAI), Claude Code Desktop (Anthropic), OpenCode Desktop.
- CLI: Codex, Claude Code, OpenCode, Kimi Code, Amp.
- Modelos: Claude Opus 5, Fable 5, GPT-5.6 Sol, DeepSeek, Qwen, MiniMax, Kimi (K3), GLM, Gemini.
- Orquestadores: tmux, cmux, Conductor, Orca, Tracer, Superset, Herder.
- Editores: VS Code (con GitHub Copilot), Cursor, Antigravity / Antigravity 2.0.
- Asistentes: Hermes, OpenClaw.
- Terminales: Warp, WezTerm, Alacritty, Kitty.
- Suscripción OpenCode Go; integraciones con Telegram y Slack; patrocinio de Odoo Proyectos.

## Referencias

- Transcripción: [[rANNn5fIVmg - orquestadores-de-ia-2026|Transcripción completa]]
- Video: [Orquestadores de IA 2026: ¿Cuál vale la pena? Codex, Claude, Orca y Herder](https://www.youtube.com/watch?v=rANNn5fIVmg) — Fazt
