---
title: "Harness engineering en 22 minutos: contexto, herramientas, automatizaciones y evals"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/contexto-y-memoria
  - arnes/evals-y-observabilidad
channel: "Shaw Talebi"
speaker: "Shaw Talebi"
videoId: "UmZytjgs2eo"
source: "https://www.youtube.com/watch?v=UmZytjgs2eo"
language: "en"
playlistOrder: 26
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harness Engineering Explained in 22 Minutes"
related:
  - "[[UmZytjgs2eo - harness-engineering-en-22-minutos|Transcripción]]"
---

# Harness engineering en 22 minutos: contexto, herramientas, automatizaciones y evals

Shaw Talebi presenta una explicación didáctica de unos 22 minutos sobre qué es un harness de agente y cómo un usuario puede "tunearlo". No construye un harness desde cero. Se centra en los dos primeros niveles: herramientas listas para usar como Claude Cowork o ChatGPT Work, y herramientas muy configurables como Claude Code. En ellas se pueden accionar tres palancas: **contexto**, **herramientas** y **automatizaciones**, más una palanca extra, las **evals**.

Para el harness engineering ofrece un marco práctico desde el punto de vista del usuario avanzado. Ilustra cada palanca con ejemplos reales de su negocio (Notion, Gmail, HubSpot, Railway, hooks de Claude Code) y cierra con un cambio de mentalidad: pasar de hacer el trabajo a construir el harness que permite al agente hacerlo. Pone como ejemplo *autoresearch* de Karpathy.

## Resumen

- **Harness = todo lo que rodea al modelo**: el modelo es el motor; ruedas, carrocería, volante y tablero son el harness que lo hace útil.
- **Tres niveles según el punto de partida**: comprar un coche de serie (Cowork/ChatGPT Work), tunear un F1 (Claude Code) o construir tu propio vehículo sobre el motor (API + código propio).
- **Palanca 1, contexto**: instrucciones, conocimiento y datos que el agente tiene disponibles (instrucciones de sistema, metadatos, memorias, CLAUDE.md, skills, fuentes externas).
- **Skills con divulgación progresiva**: al inicio el agente solo ve el nombre y la descripción de cada skill y carga el resto cuando la necesita.
- **Fuentes externas como contexto portable**: guardar el contexto en Notion, Obsidian, Confluence o Drive permite reutilizarlo en cualquier herramienta de IA.
- **Palanca 2, herramientas**: acciones sobre apps externas mediante conectores/MCP o mediante scripts dentro de skills, tanto para leer como para escribir.
- **Palanca 3, automatizaciones**: tareas programadas (disparadas por tiempo) y hooks (disparados por eventos, solo en agentes de código).
- **Palanca extra, evals**: pruebas que el propio agente ejecuta para saber si lo hizo bien, de modo que se pasa de *humano en el bucle* a *agente en el bucle*.
- **Cambio de mentalidad**: preguntarse "¿cómo consigo que la IA haga esto de forma fiable?" en vez de "¿cómo hago esta tarea?".
- **Empatía con el agente**: si con el contexto y las herramientas que le diste tú podrías resolver la tarea, el harness es bueno; si no, hay que mejorarlo.

## Contenido estructurado

### Qué es un harness: la analogía del coche

El harness es "todo lo que se construye alrededor de un modelo de IA para hacerlo más útil". El modelo equivale al motor. Las ruedas, la carrocería, los asientos, el volante y el tablero equivalen al harness del agente. Así como un coche se personaliza según tus necesidades, el harness también.

### Tres niveles de harness engineering

Los niveles se distinguen por el punto de partida:

1. **Coche de serie**: Claude Cowork o ChatGPT Work. Puedes elegir acabados, colores, ajustar el asiento o configurar el Bluetooth, pero no cambias las ruedas.
2. **Coche de F1**: Claude Code. Es mucho más potente porque se puede ajustar cada detalle, pero exige experiencia:
   > "No es que te subas y empieces a conducir a 200 mph. Tienes que saber lo que haces."
3. **Construir tu propio harness**: tomas el motor (un modelo vía API o de código abierto) y construyes alrededor lo que quieras: un coche, una bici, un generador o un robot. Ofrece control total y requiere la mayor experiencia (APIs y código propio).

El video se centra en los dos primeros niveles con Claude Cowork y Claude Code, aunque lo explicado se generaliza a ChatGPT Work, Codex, Cursor y similares.

### Palanca 1: contexto

Contexto son las instrucciones, el conocimiento y los datos que se ponen a disposición del agente.

**Lo que ya trae el harness** (escrito por Anthropic):
- Instrucciones de sistema de fábrica.
- Metadatos inyectados automáticamente: fecha, ubicación, nombre.
- Memorias: Claude extrae y guarda información clave de conversaciones pasadas.

**Cómo personalizarlo:**

- **CLAUDE.md / AGENTS.md**: lo que pongas aquí se carga en *cada* conversación. Durante mucho tiempo Shaw lo dejó vacío porque nada merecía cargarse siempre. Hace poco añadió una sola línea: al final de cada conversación en la que se use una skill, Claude debe proponer mejoras para esa skill.
- **Skills**: una carpeta con archivos, entre ellos un `SKILL.md` especial que funciona como un prompt. Pueden incluir referencias o documentación, recursos (logo de la empresa, plantilla de presentación) e incluso código que Claude escribe y ejecuta.
  - **Divulgación progresiva** (*progressive disclosure*): "dar a Claude el contexto correcto en el momento correcto". Al inicio solo ve el nombre y la descripción de cada skill instalada. Si pides redactar una propuesta para un cliente, carga la skill *proposal writer*, lee su markdown y, si este indica poner el logo arriba a la derecha, lo busca en la carpeta de recursos.
  - Así se evita volcar texto inútil y no hay que hacerlo a mano.
- **Fuentes externas**: un archivo en el escritorio, una carpeta local o en Google Drive, una base de datos, o herramientas como Notion, Obsidian y Confluence. Ventajas:
  - No se satura el contexto al inicio.
  - Sobre todo, el contexto queda en herramientas de terceros y es portable: Shaw dirige "todo su negocio en Notion" y lo usa igual desde ChatGPT, Claude, Codex, Claude Code o Cursor.

### Palanca 2: herramientas

Las herramientas son acciones que el agente puede ejecutar para interactuar con apps y servicios externos. De fábrica suele haber búsqueda web e intérprete de código.

**Conectores / servidores MCP**: Shaw usa Gmail, Notion, Google Drive y Google Calendar. Sus clientes usan Slack y HubSpot. Jira es popular en equipos de ingeniería y Canva en marketing. La idea va un paso más allá de "dar contexto": se trata de darle al agente las herramientas para *conseguir* el contexto. Ejemplo: cruzar las llamadas de ventas de los últimos 30 días (Calendar), las notas del CRM (HubSpot) y los hilos de correo (Gmail) para ordenar los leads de más calientes a más fríos.

No se limitan a leer, también escriben:
- Crear invitaciones de calendario, sobre todo con distintas zonas horarias.
- Redactar el primer borrador de la mayoría de sus correos.
- Cada mañana, revisar las reuniones del día, investigar y preparar todo en una página de Notion.

**Herramientas mediante skills con scripts**:
- Editar, actualizar y leer presentaciones de Keynote desde la línea de comandos.
- Editar videos y guardarlos en un formato que abre Final Cut Pro.
- Railway (su hosting) publicó una skill que permite al agente de código interactuar con producción: obtener logs, descargar datos, etc.
- Skills que llaman APIs: analíticas de YouTube, su newsletter en ConvertKit, MUX (donde aloja sus cursos gratuitos) y AssemblyAI (transcripción de audio y video).

Su recomendación: si usas Cowork y no eres técnico, quédate con los conectores. Si estás en Claude Code y sabes programar, construir herramientas vía skills abre muchas posibilidades.

### Palanca 3: automatizaciones

Las automatizaciones son procesos que corren solos, disparados por tiempo o por un evento.

**Las que ya trae el harness**: filtros de contenido en las búsquedas web contra prompt injection, preprocesamiento de archivos (un PDF se convierte en texto para el modelo) y moderación de contenido (mensajes que violan los términos se desvían a otro modelo o a una respuesta automática).

**Tareas programadas** (`/schedule` en Cowork y Claude Code):
- Preparación diaria de llamadas: carga la skill de preparación de reuniones, busca en la web y en LinkedIn, revisa los intercambios de correo y las llamadas del día, y escribe todo en Notion.
- En el lado técnico, una revisión de código nocturna: un agente revisa los últimos commits en busca de bugs, mejoras o violaciones de estándares.

**Hooks** (disparados por eventos; no existen en Cowork, solo en Claude Code y otros agentes de código como Codex o Cursor):
- Al salir de una sesión o limpiar el contexto, sube automáticamente su configuración de Claude (skills, subagentes, conectores) a GitHub. Así cualquier otro agente, como Codex o Cursor, puede usar esas skills desde el mismo repo.
- Borra automáticamente las capturas que genera el MCP de Playwright. Al construir frontends, Claude itera en bucle (captura, revisa, ajusta) y puede dejar decenas de imágenes en el repo.
- Revisión previa al push: un hook de git que, antes de cada push, invoca a Claude en la línea de comandos para hacer chequeos que no se pueden expresar solo con código.

### Palanca extra: evals

Las evals son "pruebas que te dicen si el agente hizo un buen trabajo o no".

- **Sin evals (humano en el bucle)**: envías una petición, revisas la salida, das feedback y repites hasta quedar satisfecho.
- **Con evals**: el agente genera una salida, ejecuta las evaluaciones, la corrige y repite hasta pasarlas todas. Solo entonces te presenta el resultado. El tiempo y el detalle que dedicas a revisar caen significativamente.

**Ejemplo: autoresearch de Andrej Karpathy** (repo viral en GitHub):
- Antes: un humano escribía `prepare.py` y `train.py`, entrenaba, miraba resultados y ajustaba `train.py`, un bucle que podía durar "un doctorado entero".
- Karpathy escribió en su lugar un `program.md`, instrucciones para que un agente optimizara `train.py`. Lo dejó corriendo de noche y obtuvo un `train.py` que rendía mejor que el suyo.
- Se pasa de la velocidad del humano en el bucle a un **agente en el bucle**.

### Conclusiones

- Los modelos solos no son muy útiles, igual que un motor suelto. El valor aparece con el harness adecuado.
- Las palancas son contexto, herramientas y automatizaciones, más las evals.
- **Cambio de mentalidad**: Karpathy no se preguntó "¿cómo optimizo los hiperparámetros?", sino "¿cómo consigo que la IA optimice los hiperparámetros, y de forma fiable?". Se pasa de ejecutar el trabajo a construir el harness que permite al agente ejecutarlo.
- **Empatía con el agente** (*agent empathy*):
  > "Imagínate con el contexto que le diste al agente y con las herramientas que le diste: ¿podrías cumplir la tarea? Si la respuesta es sí, tienes un harness bastante bueno. Si es no, la siguiente pregunta es cómo mejorar el harness para que al agente le resulte más fácil tener éxito."

## Conceptos clave

- **Harness de agente**: todo lo construido alrededor de un modelo para hacerlo útil, como el coche alrededor del motor.
- **Palancas del harness**: contexto, herramientas y automatizaciones (más evals), los mandos que un usuario puede accionar para adaptar el harness a su trabajo.
- **CLAUDE.md / AGENTS.md**: archivo cuyo contenido se carga en cada conversación.
- **Skill**: carpeta con un `SKILL.md` (tipo prompt) más referencias, recursos y scripts opcionales.
- **Divulgación progresiva**: cargar solo nombre y descripción de las skills y traer el resto cuando es relevante.
- **Conector / servidor MCP**: integración que da al agente acceso de lectura y escritura a apps externas.
- **Tarea programada**: automatización disparada por tiempo (`/schedule`).
- **Hook**: automatización disparada por un evento del agente (fin de sesión, uso de una herramienta, push).
- **Eval**: prueba que el agente ejecuta para saber si su salida es buena; permite el *agente en el bucle*.
- **Empatía con el agente**: evaluar el harness poniéndose en el lugar del agente con su mismo contexto y herramientas.

## Herramientas y referencias mencionadas

- Claude Cowork, Claude Code, ChatGPT Work, Codex, Cursor
- Notion, Obsidian, Confluence, Google Drive, Gmail, Google Calendar, Slack, HubSpot, Jira, Canva
- Keynote, Final Cut Pro, Railway, YouTube Analytics, ConvertKit, MUX, AssemblyAI
- Playwright (MCP), Git hooks, GitHub
- Andrej Karpathy, proyecto *autoresearch* (`program.md`, `train.py`)

## Referencias

- Transcripción: [[UmZytjgs2eo - harness-engineering-en-22-minutos|Transcripción completa]]
- Video: [Harness Engineering Explained in 22 Minutes](https://www.youtube.com/watch?v=UmZytjgs2eo) — Shaw Talebi
