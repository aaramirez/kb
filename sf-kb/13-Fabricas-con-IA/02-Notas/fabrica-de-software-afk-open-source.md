---
title: "Sandcastle: una fábrica de software AFK open source con agentes en sandboxes"
tags:
  - sf/fabricas-ia
  - type/nota
  - sf/ia-software
  - sf/herramientas
  - sf/procesos
channel: "Matt Pocock"
speaker: "Matt Pocock"
videoId: "E5-QK3CDVQM"
source: "https://www.youtube.com/watch?v=E5-QK3CDVQM"
language: "en"
playlistOrder: 6
created: 2026-10-11
updated: 2026-10-11
category: "Software Factories con IA"
aliases:
  - "I Open-Sourced My Own AFK Software Factory"
related:
  - "[[E5-QK3CDVQM - fabrica-de-software-afk-open-source|Transcripción]]"
  - "[[../../07-IA-Software/15-agentes-autonomos|Agentes Autónomos vs Asistidos]]"
  - "[[../../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]]"
  - "[[../../09-DevOps-Infra/04-containers-docker|Containers y Docker]]"
  - "[[../../03-Procesos/08-code-review-proceso|Proceso de Code Review]]"
  - "[[../../04-Practicas/03-test-driven-development|Test-Driven Development]]"
---

# Sandcastle: una fábrica de software AFK open source con agentes en sandboxes

Video tutorial (unos 11 minutos) de Matt Pocock, educador de TypeScript, en el que presenta **Sandcastle**, una librería TypeScript open source que creó para orquestar agentes de código en sandboxes aislados. El objetivo que persigue desde hace seis meses es que sus agentes trabajen totalmente **AFK** (*away from keyboard*, sin él delante): que tomen tareas del backlog, implementen features, hagan QA y, sobre todo, que lo hagan **en paralelo**. Muestra la instalación en un repo vacío, el contenido del directorio `.sandcastle` y una ejecución completa con la plantilla "planner paralelo con paso de revisión".

Para una software factory con IA, el video es interesante porque resuelve el problema práctico que precede a cualquier fábrica autónoma —cómo dejar a los agentes trabajar sin aprobar permisos a mano y sin arriesgar la máquina o los datos— y porque demuestra que una fábrica mínima (planner → implementers paralelos → reviewer → merger) puede expresarse como **código propio y prompts en markdown**, sin depender de un servicio de terceros ni de un único proveedor de agentes.

## Resumen

- **Objetivo AFK**: agentes que recogen tareas del backlog, implementan, hacen QA y corren en paralelo sin supervisión continua.
- **El problema de los permisos**: sin manejarlos, el agente "bombardea" con solicitudes; con modo YOLO puede borrar el directorio home o, en una empresa, exfiltrar datos o enviar código a terceros.
- **La respuesta es el sandbox**: para correr AFK de forma segura los agentes tienen que estar aislados.
- **Insatisfacción con lo existente**: probó Docker sandboxes, pero tuvo demasiados problemas para uso AFK; otras herramientas intentaban venderle un servicio.
- **Sandcastle**: una función `run` a la que se pasa agente, sandbox y prompt; con ella se componen sistemas complejos (paralelismo, autorrevisión, merge).
- **Backlog en GitHub Issues**: los agentes solo recogen los issues con la etiqueta `sandcastle`.
- **Flujo de la plantilla**: planner que elige issues desbloqueados → un implementer por issue en su propio sandbox y rama → reviewer si hubo commits → merger que integra todo en `main`.
- **El reviewer atrapa los errores del implementer**: según el autor, este patrón "ha sido increíblemente potente".
- **Agnóstico de agente**: se puede planificar con Codex e implementar con Claude Code, o hacer revisión adversarial con otro agente.
- **"Ser dueño del proceso"**: las plantillas son un punto de partida, no una prescripción; el autor afirma que esta configuración ha aumentado "masivamente" su velocidad.

## Contenido estructurado

### Por qué hace falta un sandbox para trabajar AFK

Para que los agentes corran sin supervisión hay que resolver las solicitudes de permisos. La salida fácil es el modo YOLO, que omite todas las solicitudes, pero tiene riesgos claros:

> "Si haces eso, Claude hará locuras en tu sistema, como borrar tu directorio home."

En un entorno empresarial preocupa además la exfiltración de datos o el envío del código a terceros. De ahí la conclusión: para que los agentes corran AFK "necesitas que estén en un sandbox". El autor intentó que funcionaran los Docker sandboxes, pero tuvo "demasiados problemas" para ese uso. Lo que quería era sencillo:

> "Una función TypeScript simple que pudiera ejecutar y decir: 'Ejecuta este prompt dentro de este sandbox usando este agente'."

Como las herramientas que encontró querían venderle un servicio de terceros, decidió construir la suya.

### Sandcastle: la primitiva `run`

Sandcastle es "una librería TypeScript para orquestar agentes de IA de código en sandboxes aislados". En cada uno de sus repos open source hay un directorio `.sandcastle` con un `main.ts` lleno de llamadas `sandcastle.run(...)`, cada una con un agente, un sandbox y un prompt. Con esa única función se pueden construir:

- sistemas que paralelizan agentes lado a lado;
- sistemas que revisan su propio código y luego lo integran;
- flujos de ramas con merge a `main` o flujos de pull requests.

> "Es solo código. Es una forma programática de ejecutar Claude Code, de ejecutar Codex, y de construir estos flujos de trabajo que se convierten en mini fábricas de software."

### Instalación paso a paso

1. `npm install` del paquete Sandcastle de AI Hero (la transcripción automática dice "AI hero Sandcastle").
2. `npx sandcastle init`, que pregunta:
   - **Agente**: en la demo, Claude Code.
   - **Proveedor de sandbox**: hay varios proveedores de primera clase (habrá más) y se puede implementar uno propio; en la demo, Docker.
   - **Gestor de backlog**: "los agentes AFK necesitan alguna forma de recoger tickets y saber qué hacer después"; su preferido es GitHub Issues.
   - **Plantilla**: había cinco; elige la más completa, un **planner paralelo con paso de revisión**.
3. Se crea la etiqueta `sandcastle` en GitHub: solo los issues con esa etiqueta los recogen los agentes.
4. Todo queda en `.sandcastle/`, incluido un **Dockerfile** que define el contenedor donde corre el agente: dependencias del sistema, GitHub CLI, renombrar el usuario home a `agent` e instalar Claude Code. Se puede instalar cualquier otra cosa.
5. Se construye la imagen Docker por defecto (fue rápido).
6. Se configuran las variables de entorno en `.sandcastle/.env` (a partir de `.env.example`): una **API key de Anthropic** y un **token de GitHub**. Para usar la suscripción de Claude en lugar de API key remite a un issue del repo, porque Anthropic "es un poco especial" respecto a usar la suscripción para esto.
7. Commit y push, y se añade un script a `package.json` que ejecuta `npx tsx .sandcastle/main.mts` (TSX permite correr TypeScript como script).

### La demo: un issue de scaffolding

El issue creado en GitHub pide: una plantilla TypeScript básica con Vitest, type checking, un CLI muy simple con Commander y un script de CI que haga type checking y corra los tests. Al ejecutar el script:

- Arranca un **planner** en Docker que mira los issues abiertos (solo hay uno), produce un plan con los issues a trabajar y reporta cuánta ventana de contexto usó.
- Arranca un **implementer** que ejecuta `gh issue view 1`, entiende la petición, corre comandos bash dentro del sandbox, instala dependencias y, porque así lo tiene en el prompt, hace **red-green-refactor** escribiendo primero el test.

> "Podemos quedarnos mirando si queremos o, ya sabes, ir a tomarnos una taza de té, relajarnos, y esto hará su trabajo sin nosotros."

### Anatomía de `main.mts` y de los prompts

**Planner.** Una llamada `sandcastle.run` con nombre `planner`, un agente (intercambiable: se puede planificar con Codex en lugar de Claude Code) y un archivo de prompt editable generado por la plantilla. El prompt:

- toma todos los issues abiertos con la etiqueta `sandcastle`, con sus etiquetas, comentarios y cuerpo;
- determina cuáles se pueden hacer ya (solo issues **desbloqueados**);
- devuelve el plan como un objeto JSON envuelto en etiquetas `<plan>`.

`main.mts` extrae el JSON y, **por cada issue, ejecuta un sandbox separado** con un implementer.

**Implementer.** Su prompt recibe argumentos: título del issue, ID de la tarea (el ID del issue) y la rama específica en la que trabajar. El autor insiste en que esto es su propio flujo:

> "Todo esto es solo una configuración que yo me inventé. Sandcastle no te da ninguna prescripción sobre cómo ejecutarlo."

**Reviewer.** El resultado del implementer se guarda en una variable y, si hubo commits, se ejecuta un reviewer:

> "Este patrón ha sido increíblemente potente, porque el implementer puede equivocarse, pero el reviewer generalmente lo detecta."

El prompt de revisión usa una sintaxis copiada de las Claude Skills: un signo de exclamación antes de un bloque con backticks hace que el comando se ejecute al resolver el prompt, de modo que se inyecta el `git diff` entre la rama origen y la rama de trabajo. El proceso es básico —entender el cambio, analizar mejoras, comprobar la corrección, mantener el equilibrio— y, sobre todo, es el lugar para añadir los **estándares de código del proyecto** (hay una sección *coding standards* para completar).

**Variantes posibles** gracias a ser agnóstico de agente:

- **Revisión adversarial**: que un agente distinto (por ejemplo, Codex) revise el código de otro.
- **Implementaciones en competencia**: varios agentes implementan a la vez y un reviewer elige la mejor rama o las combina.

> "Ese es el poder de tener una configuración totalmente agnóstica respecto al agente que ejecutas. Ese es el poder de ser dueño de tu propio proceso."

**Merger.** Todas las ramas creadas pasan a un agente merger que recibe las ramas y los issues resueltos (para entender los cambios) y las integra en `main`. Se usa un agente porque puede haber conflictos de merge entre ramas paralelas, y el autor prefiere un agente "realmente potente" para resolverlos, porque "a veces pueden ser bastante feos". Lo describe como "un desarrollador merger senior" que integra el trabajo de varios agentes que corrieron a la vez. Si se prefiere, las ramas pueden convertirse en pull requests.

### Resultado de la ejecución

- El reviewer concluyó que el código "ya estaba limpio y bien estructurado".
- El merger corrió el type check, integró la rama y **cerró el issue con un comentario**.
- El repo terminó con `tsconfig.json`, `vitest.config.ts` y los archivos del CLI.

El autor resume que se pueden construir flujos relativamente complejos "usando prompts en markdown muy ergonómicos".

## Conceptos clave

- **AFK (away from keyboard)**: modo en el que los agentes trabajan sin supervisión humana, tomando tareas del backlog y ejecutándolas de punta a punta.
- **Modo YOLO**: omitir todas las solicitudes de permisos del agente; cómodo pero peligroso fuera de un sandbox.
- **Sandbox**: entorno aislado (aquí, un contenedor Docker definido por un Dockerfile del repo) donde el agente puede actuar con libertad sin riesgo para la máquina anfitriona.
- **`sandcastle.run`**: primitiva que ejecuta un prompt con un agente dado dentro de un sandbox dado; base para componer flujos.
- **Planner / implementer / reviewer / merger**: roles de la plantilla "planner paralelo con revisión"; planificar issues desbloqueados, implementar cada uno en su rama, revisar y fusionar en `main`.
- **Backlog etiquetado**: GitHub Issues con la etiqueta `sandcastle` como cola de trabajo para los agentes.
- **Revisión adversarial**: que un agente distinto del implementador revise su código.
- **Inyección de comandos en prompts**: sintaxis `!` + backticks (tomada de las Claude Skills) que ejecuta un comando, como `git diff`, al resolver el prompt.
- **Ser dueño del proceso**: la fábrica es código y prompts propios, no una prescripción de la herramienta ni de un proveedor.

## Relación con el SF KB

- [[../../07-IA-Software/15-agentes-autonomos|Agentes Autónomos vs Asistidos]] — el video es un caso concreto de paso de asistido a autónomo (AFK) y pone el sandbox como requisito previo para dar esa autonomía de forma segura.
- [[../../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]] — ilustra una orquestación determinista en código (TypeScript) con roles planner → implementers paralelos → reviewer → merger, en lugar de que un agente orquestador decida el flujo.
- [[../../09-DevOps-Infra/04-containers-docker|Containers y Docker]] — el contenedor deja de ser solo un artefacto de despliegue y pasa a ser la frontera de seguridad del agente: el Dockerfile versionado en el repo define qué puede usar.
- [[../../03-Procesos/08-code-review-proceso|Proceso de Code Review]] — la revisión se automatiza con un agente reviewer que recibe el diff y los estándares del proyecto, con la opción de revisión adversarial entre agentes distintos.
- [[../../04-Practicas/03-test-driven-development|Test-Driven Development]] — el prompt del implementer impone red-green-refactor, lo que muestra a TDD como instrucción explícita para el agente.

Otras notas de esta sección: el flujo planner → implementer → reviewer coincide con el ciclo builder/QA/reviewer de [[fabrica-de-software-automejorable|Una fábrica de software automejorable]], y la apuesta por paralelizar contrasta con la ejecución serial que defiende [[arquitectura-multiagente-que-entrega|La arquitectura multiagente que sí entrega]].

## Herramientas y referencias mencionadas

- **Sandcastle** (AI Hero): librería TypeScript open source para orquestar agentes en sandboxes.
- **Claude Code** y **Codex**: agentes intercambiables dentro de Sandcastle.
- **Docker** y **Docker sandboxes** (probados y descartados para uso AFK).
- **GitHub Issues** y **GitHub CLI** (`gh`) como backlog y herramienta del agente.
- **TSX**, **Vitest**, **Commander**, TypeScript.
- **Claude Skills** (origen de la sintaxis `!` para ejecutar comandos en prompts).
- API key de **Anthropic** y token de GitHub.
- Newsletter del autor "AI skills for real engineers" y su repo de skills.

## Referencias

- Transcripción: [[E5-QK3CDVQM - fabrica-de-software-afk-open-source|Transcripción completa]]
- Video: [I Open-Sourced My Own AFK Software Factory](https://www.youtube.com/watch?v=E5-QK3CDVQM) — Matt Pocock
