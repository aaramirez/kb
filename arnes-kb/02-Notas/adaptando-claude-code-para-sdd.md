---
title: "Un arnés de Spec-Driven Development sobre Claude Code"
tags:
  - arnes/nota
  - type/nota
  - arnes/flujos-de-trabajo
  - arnes/orquestacion-multiagente
  - arnes/construccion
channel: "BettaTech"
speaker: "Martí (BettaTech)"
videoId: "ElGlTv2A_bM"
source: "https://www.youtube.com/watch?v=ElGlTv2A_bM"
language: "es"
playlistOrder: 2
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Esto es lo que Aprendí Adaptando Claude Code para SDD"
related:
  - "[[ElGlTv2A_bM - adaptando-claude-code-para-sdd|Transcripción]]"
---

# Un arnés de Spec-Driven Development sobre Claude Code

Segunda entrega de la serie de BettaTech (Martí) sobre harness engineering. Es un tutorial con demo: el autor muestra cómo adaptó Claude Code mediante subagentes y ficheros Markdown para imponer un flujo de Spec-Driven Development (SDD) con aprobación humana, inspirado en Kiro de Amazon.

Su valor para el harness engineering es doble: aclara la relación entre "arnés" y "flujo de trabajo" (el arnés automatiza un flujo; SDD es solo uno de ellos) y enseña un patrón concreto de agentes especializados, memoria externa por ficheros y estados de tarea con puntos de control humanos.

## Resumen

- **Harness engineering vs. SDD**: el harness engineering es la disciplina de automatizar flujos de trabajo con IA; SDD es un flujo concreto que se puede implementar con un arnés, igual que TDD o métodos ágiles.
- **SDD**: la especificación es la fuente de verdad; la IA la transforma en código "como un compilador" y luego se valida.
- **Cuatro agentes**: spec author (especifica), implementer (implementa), reviewer (valida) y líder (orquesta según el estado de la tarea).
- **Memoria externa por niveles**: una lista de tareas en JSON para el líder y una carpeta `specs/<tarea>` con el contexto de cada spec.
- **Contexto curado**: el implementador no recibe el chat con el spec author, solo los ficheros de la spec aprobada.
- **Tres ficheros por spec** (estilo Kiro): `requirements.md`, `design.md` y `tasks.md`.
- **Notación EARS**: cada requisito se traduce directamente en un test.
- **Humano en el bucle**: estados `pending` → `spec ready` (pausa para aprobación) → `in progress` → `done`.
- **SDD opcional por tarea**: un booleano en la lista de tareas evita usar SDD en tareas triviales.
- **Construye tu propio flujo**: más importante que adoptar herramientas "opinionadas" es aprender a montar el arnés que se ajusta a tu forma de trabajar.

## Contenido estructurado

### Arnés frente a flujo de trabajo
La premisa: lo que más impacto tiene no es el modelo sino el ecosistema sobre el que trabaja (el arnés). Muchos comentarios del video anterior preguntaban la diferencia entre SDD y harness engineering. La respuesta del autor:

> "El harness engineering sería la disciplina para automatizar el flujo de trabajo con inteligencia artificial."

Flujos hay muchos: cascada, iterativo, TDD... El harness engineering consiste en tomar uno de ellos y generar agentes que ejecuten cada etapa de forma eficiente. SDD es "un flujo concreto de trabajo" en el que primero se especifica (la spec) y luego se implementa.

### Qué es SDD
- Una especificación es cualquier explicación de qué software se quiere: historias de usuario, requisitos del cliente (a menudo vagos)...
- SDD propone usar la spec como fuente de verdad para que la IA genere el código.
- Llevado al extremo, el desarrollador nunca toca el código: trabaja sobre la spec y la IA actúa como un compilador o transpilador (con el debate abierto sobre el no determinismo).
- Ciclo: especificar → la IA implementa → la IA valida (por ejemplo con tests) → volver a empezar.

### Diseño del arnés SDD con subagentes
| Agente | Responsabilidad |
|---|---|
| **Spec author** | Redacta la especificación en un formato negociado. |
| **Implementer** | Implementa el código a partir de la spec. |
| **Reviewer** | Evalúa el código: tests, estilo y conformidad con la spec. |
| **Líder** | Orquestador: lanza la etapa de spec, implementación o validación según el estado. |

### Memoria externa
- **Lista de tareas** (JSON en el ejemplo; podría ser una base de datos o un sistema de ticketing): memoria de alto nivel que lee el líder para decidir si hay tareas pendientes.
- **Carpeta `specs/<nombre-de-tarea>`**: el spec author guarda ahí su contexto. Si se cancela la sesión, se puede retomar sin empezar de cero.
- Los mismos ficheros sirven para pasar al implementador solo el contexto necesario:

> "No le pasamos el chat, los prompts, el historial de la conversación que yo he tenido con el agente de spec [...] Entonces el implementador tiene el contexto mínimo necesario para poder hacer su trabajo."

### El código del arnés
En la carpeta de agentes:

- **Implementer**: ejecuta una sola feature de la lista siguiendo los specs; tiene precondiciones y un protocolo de cierre.
- **Reviewer**: su única función es aprobar o rechazar, leyendo el documento de arquitectura y convenciones.
- **Spec author** (inspirado en Kiro): crea en `specs/` tres ficheros:
  - `requirements.md`: requisitos (en lugar de historias de usuario, un formato más conciso).
  - `design.md`: explicación técnica (qué ficheros cambiar, qué clases y funciones crear).
  - `tasks.md`: lo que ejecuta el implementador.

> "Lo que estoy haciendo es filtrar el contexto, curarlo [...] para que el implementador tenga un contexto muy pequeño."

### El líder, estados y aprobación humana
El líder sabe que el repo usa SDD, consulta la documentación de specs y debe pasar por las fases con aprobación humana. El autor no es partidario de quitar al humano del ciclo, porque a la larga se pierde el contexto del propio software.

Flujo de estados:

1. `pending` → el líder lanza al spec author, que redacta los tres ficheros y **se detiene sin lanzar al implementer**.
2. `spec ready` → pausa hasta que el humano aprueba la spec.
3. `in progress` → trabajan el implementer y el reviewer.
4. `done`.

### Formato de specs y notación EARS
Un documento `specs.md` define el formato de los tres ficheros. Para los requisitos usa **EARS**, una notación sencilla. Ejemplo: "Cuando el usuario ejecuta X comando, el sistema debe imprimir hasta cinco notas en orden descendente".

> "Aunque estemos hablando de conceptos que parecen superclejos [...] no dejan de ser ficheros MD."

El `CLAUDE.md` simplemente indica que la sesión arranca con el rol de líder. Sirve igual en otras CLIs como OpenCode: basta con mover los ficheros a las carpetas que use cada herramienta.

### Demo: de la tarea pendiente a la spec
Proyecto de ejemplo: un gestor de notas en Python.

1. Prompt: "implementa la siguiente tarea pendiente".
2. El agente lee `leader.md`, ejecuta `init.sh` (obligatorio: verifica entorno y tests) y encuentra la feature 7 pendiente.
3. La feature tiene `sdd: true` (un booleano que el autor usa porque en tareas muy cortas SDD sería *overkill*).
4. Se lanza el spec author, que crea la feature "CLI recent":
   - `requirements.md` en EARS, por ejemplo: sin `--limit`, imprimir como máximo cinco notas; con un entero n > 0, imprimir como máximo n.
   - `design.md`: archivos a tocar, nuevo comando, registrar un parser, cuatro tests nuevos, qué ficheros no tocar.
   - `tasks.md`: tareas T4, T5 y T6.
5. El agente pregunta si pasar la tarea de `pending` a `spec ready`, y no implementa todavía.

Ventaja de EARS frente a historias de usuario: cada requisito se traduce en un test, mientras que una historia puede requerir mucho código y muchos tests.

### Revisión humana y paso a implementación
El humano revisa los tres ficheros, pide cambios a Claude si hace falta y cambia el estado a `in progress` (a mano, o en Linear o Jira). Entonces el líder relee la lista, lanza el implementer con la spec aprobada y este escribe en `progress` la tarea actual y ejecuta `tasks.md`, verificando con `init.sh`.

Las tareas podrían ir a Linear vía MCP (por ejemplo, un proyecto por spec) para compartirlas con el equipo.

### Personalización del arnés
Todo se puede adaptar cambiando los prompts de los agentes:

- Hacer un commit por cada tarea (protocolo del implementer).
- Crear una rama por cada nueva spec (líder).
- Usar un MCP de memoria para guardar decisiones.
- Decidir dónde guardar el historial, cuándo hacer pull requests, etc.

> "Hay un montón de sitios en internet que te van a compartir herramientas opinionadas [...] Para mí, lo realmente importante es que aprendas a construirte el tuyo propio."

### Tests, reviewer y cierre
El autor revisa los tests que genera la IA, porque son la capa de validación. Luego el reviewer lee su definición, las convenciones, las specs y los tests, y los ejecuta. El humano ha revisado en dos fases: diseño y tests.

> "Por mucho que utilicemos IA, no tenemos que perder nuestro propio criterio como desarrolladores, nuestra experiencia y nuestros conocimientos."

Al terminar: la tarea pasa a `done`, la memoria se mueve a `history.md` (historial de todos los cambios de los agentes) y Claude Code muestra un resumen. Es un arnés SDD básico, sin herramientas externas, ampliable a voluntad.

## Conceptos clave

- **Spec-Driven Development (SDD)**: flujo en el que la especificación es la fuente de verdad y la IA genera el código a partir de ella.
- **Spec author**: agente que redacta la especificación (requisitos, diseño, tareas).
- **Líder (orquestador)**: agente que decide qué etapa lanzar según el estado de la tarea.
- **Human in the loop**: puntos de aprobación humana obligatorios (spec y tests) antes de avanzar.
- **Notación EARS**: formato de requisitos ("cuando..., el sistema debe...") que mapea uno a uno con tests.
- **Contexto curado**: pasar a cada agente solo los ficheros estrictamente necesarios, no el historial de conversación.
- **Memoria externa por ficheros**: lista de tareas, carpeta `specs/`, `progress/` y `history.md`.
- **Herramienta opinionada**: herramienta que impone el flujo de trabajo de su autor.

## Herramientas y referencias mencionadas

- Claude Code (`CLAUDE.md`, subagentes), OpenCode.
- Kiro (Amazon), como inspiración del formato de specs.
- Notación EARS.
- Linear, Jira, MCP.
- `init.sh`, `history.md`, carpeta `progress`.
- Video previo del canal sobre harness engineering y otro sobre tipos de SDD.
- Curso gratuito del autor sobre serverless en AWS (Lambda, API Gateway, SQS, SNS).

## Referencias

- Transcripción: [[ElGlTv2A_bM - adaptando-claude-code-para-sdd|Transcripción completa]]
- Video: [Esto es lo que Aprendí Adaptando Claude Code para SDD](https://www.youtube.com/watch?v=ElGlTv2A_bM) — BettaTech
