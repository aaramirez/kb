---
title: "Masterclass de harness engineering: las primitivas de un sistema agéntico"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/construccion
channel: "The Carbon Layer"
speaker: "The Carbon Layer"
videoId: "mQfTdNVCOB0"
source: "https://www.youtube.com/watch?v=mQfTdNVCOB0"
language: "en"
playlistOrder: 35
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harness Engineering Masterclass: Technical Deep Dive on how to build Agentic Systems"
related:
  - "[[mQfTdNVCOB0 - masterclass-de-harness-engineering|Transcripción]]"
---

# Masterclass de harness engineering: las primitivas de un sistema agéntico

Charla técnica en solitario (unos 28 minutos) del canal The Carbon Layer que intenta "desmitificar" el harness engineering de agentes de IA. El ponente construye, capa por capa, un diagrama de las **primitivas** que rodean al modelo en sistemas como Claude Code, Codex o Gemini CLI. Avisa que no son definiciones consensuadas sino su forma de explicar qué hay detrás de estos productos además del modelo.

Cada primitiva se presenta con el mismo patrón narrativo: qué resuelve, cuál es su límite y por qué ese límite motiva la siguiente. El resultado es un mapa útil para diagnosticar fallos de agentes: en vez de culpar al modelo, preguntar qué capa del harness "se quedó sin camino".

## Resumen

- **El harness es el sistema alrededor del modelo**: decide qué ve el modelo, sobre qué puede actuar, qué recuerda, qué se delega, cómo se verifica y cómo se recupera de los fallos.
- **Tres conceptos distintos**: modelo (motor de razonamiento), runtime (el bucle observar-decidir-llamar-actuar) y harness (el sistema alrededor del runtime).
- **Cuando un agente falla, a menudo no es el modelo**: suele ser una capa del harness que no le dio el soporte necesario.
- **Diez primitivas encadenadas**: instrucciones, entrega de contexto, gestión de contexto, interfaz de herramientas, entorno de ejecución, estado durable, orquestación, subagentes, skills y verificación/observabilidad.
- **El contexto incorrecto es peor que el que falta**: ofrece al modelo una "distracción plausible"; el harness gestiona la atención del modelo.
- **El entorno de ejecución hace práctica la confianza**: no se le pide al modelo que no toque secretos; simplemente no se le dan.
- **La verificación pide recibos**: no se confía en la frase final porque suene segura; "a mí me parece bien" no es una estrategia de verificación.
- **La observabilidad convierte "el agente la lió" en un sistema depurable**: el bug suele estar en un paso intermedio, no en el mensaje final.
- **Los fallos se convierten en infraestructura**: cada clase de fallo debe cambiar el sistema (regla de recuperación, esquema, permiso, test, memoria, skill) para que el harness se acumule.

## Contenido estructurado

### El harness como sistema alrededor del modelo

El modelo importa ("por eso tenemos la guerra de modelos y los benchmarks"), pero en flujos reales es solo una pieza de la máquina. Un modelo solo recibe un prompt y devuelve texto; ya es útil (explicar, redactar un plan o un correo), pero tiene un límite claro: solo ve lo que está en el prompt y en sus datos de entrenamiento. Si tu repositorio, ticket o incidente no está en la entrada, el modelo adivina, y eso es la alucinación.

> "La primera pregunta no es si el modelo es inteligente; es qué le estamos dando para trabajar."

### Modelo, runtime y harness

Según el Agents SDK de OpenAI, un agente es un LLM configurado con instrucciones, herramientas y un entorno sobre el que actuar; Codex y Claude Code son la versión de producto. El bucle razonar → actuar → observar → repetir es el **bucle agéntico**. Para no confundir términos:

1. **Modelo**: el motor de razonamiento.
2. **Runtime**: el bucle donde el modelo observa, decide, llama y actúa.
3. **Harness**: el sistema alrededor de ese runtime (tema de la charla).

### 1. Instrucciones

Le dicen al modelo quién es, qué trabajo hace, el tono, las restricciones, los estilos de código, las reglas de revisión y lo que no debe hacer. Formas: `AGENTS.md`, `CLAUDE.md`, system prompts, instrucciones personalizadas, reglas de repositorio, Cursor rules.

- Son poderosas porque trasladan al entorno la guía que de otro modo repetirías; el harness las inyecta automáticamente.
- **Límite**: son pasivas. Pueden decir "sigue las convenciones del proyecto", pero no descubrirlas; pueden decir "cuidado con las migraciones", pero no inspeccionarlas.

### 2. Entrega de contexto

Da al modelo el material que necesita: referenciar archivos con `@`, el test que falla, el stack trace. Es la diferencia entre un modelo desnudo que da un arreglo genérico y un agente que da una respuesta específica.

- **Límite**: volcar todo no es ingeniería de contexto. Chats demasiado largos o logs de incidentes enormes producen *AI slop*, porque la ventana de contexto es finita y "la atención no es gratis".

> "El contexto equivocado a veces es mucho peor que el contexto que falta, porque le da al modelo una distracción plausible."

### 3. Gestión de contexto

La pregunta cambia de "¿podemos dar contexto?" a "¿quién decide qué contexto importa?". El harness lo hace en nombre del humano:

- RAG (recuperación aumentada) y re-ranking de fragmentos recuperados.
- Resúmenes periódicos y **compactación** al acercarse al límite.
- Compresores de contexto, caché de prompts, resúmenes de sesión.

> "Los nombres cambian, pero el trabajo sigue siendo: ¿cómo protegemos la atención del modelo?"

- **Límite**: el agente sigue siendo sobre todo un "conversador": puede identificar el archivo o proponer el comando, pero alguien tiene que actuar.

### 4. Interfaz de herramientas

Las herramientas dan al modelo acción estructurada: nombre, descripción, esquema de entrada y quizá de salida. El modelo decide qué herramienta llamar y con qué argumentos (su lado del contrato). **MCP** (Model Context Protocol) abstrae cómo los proveedores exponen sus herramientas. Function calling de OpenAI, tool use de Anthropic, herramientas MCP, `bash`, `grep` o `find` pertenecen a esta primitiva.

- **Límite**: si el modelo decide correr los tests, ¿dónde? ¿En el portátil, en un contenedor, en un sandbox en la nube, con red, con secretos, con permiso de escritura sobre todo el repo? Además, las herramientas fallan, devuelven texto desordenado, las páginas web pueden contener *prompt injection* y las APIs datos parciales.

### 5. Entorno de ejecución

Donde las llamadas a herramientas se convierten en "realidad acotada": alcance del sistema de archivos, red, credenciales, sandboxing, contenedores, sesiones de navegador, workspaces en la nube, dev containers, worktrees, perfiles de navegador. Hay empresas dedicadas a esta capa (Daytona, E2B; Docker tiene ahora un sandbox).

- Ejecutar cada tarea en un sandbox aislado "no es un detalle de despliegue, es una primitiva del harness".
- El modelo pide ejecutar un comando; el harness decide dónde corre, qué ve, qué puede cambiar y si necesita aprobación humana.
- Aquí la confianza se vuelve práctica: no decirle "por favor no toques los secretos", sino hacer que no los reciba.
- **Límite**: un sandbox limpio no basta para trabajo largo; las tareas se pausan, se reanudan, se bifurcan y fallan.

### 6. Estado durable

"El banco de trabajo que sobrevive al turno actual": archivos de plan, checkpoints, estado de tareas, resúmenes de sesión, logs, diffs, almacenes de memoria. Si el progreso solo vive en el contexto del modelo, se pierde ante un fallo.

- La gestión de contexto decide qué entra ahora; el estado durable preserva hechos, artefactos y progreso fuera del prompt.
- Agentes de código: rama con cambios, log de tests, documento de plan, resumen de fallos. Agentes de investigación: mapa de fuentes, citas extraídas, tabla de confianza.
- Lo importante no es el formato sino que el progreso sea **inspeccionable** fuera de la atención actual del modelo.
- **Límite**: preserva el trabajo pero no lo coordina; un plan no decide qué reintentar ni cuándo, un log no decide si pedir aprobación, una memoria no programa la siguiente ejecución.

### 7. Orquestación

"El harness decidiendo cómo se mueve el trabajo": hooks de ciclo de vida, heartbeats (como en OpenClaw), reintentos, puertas de aprobación, traspaso a humanos, envoltura de herramientas, orden de pasos, listas de tareas, enrutamiento de modelos. Los hooks de Claude Code son un gran ejemplo; los frameworks exponen eventos de ciclo de vida porque los sistemas reales necesitan puntos de intercepción.

> "El modelo no hace todo eso por fuerza de voluntad; el harness carga con el flujo de trabajo."

Con esta capa el trabajo del agente empieza a parecerse menos a un chat y más a un runtime.

- **Límite**: un agente tiene un solo flujo de atención. En serie, las ramas (investigar, revisar diagramas, verificar el render en el navegador) son lentas y abarrotan el contexto.

### 8. Subagentes

Permiten dividir el trabajo en bucles acotados: uno explora el código, otro revisa el diff, otro verifica fuentes, otro redacta un plan; el agente principal conserva la responsabilidad de integrar los resultados. No todos los harness los traen de serie (Pi es el ejemplo: se pueden añadir).

Dos patrones del Agents SDK de OpenAI:

- **Agentes como herramientas**: un manager mantiene el control y llama a especialistas.
- **Handoffs**: la conversación activa pasa a un especialista.

> "Un subagente no es simplemente más modelo; es un modelo con un trabajo más estrecho, un contexto más estrecho y, a menudo, herramientas más estrechas."

- **Límite (el problema de la delegación)**: si cada subagente inventa su propio proceso, se obtiene "inconsistencia paralela": todos vuelven con interpretaciones distintas.

### 9. Skills y procedimientos

Know-how reutilizable que se carga cuando hace falta: cómo revisar un PR, cómo preparar un episodio, cómo usar cierto repositorio, cómo hacer pruebas de navegador. Aparece como skills, slash commands, playbooks, runbooks, recetas y workflows.

Una buena skill codifica un flujo: cuándo usarla, qué entradas recibe, qué pasos sigue y en qué orden, qué herramientas preferir. Mueven la experiencia repetida de "recuerda hacer esto" (instrucción) a una capacidad con nombre que el harness puede invocar. El ponente considera un momento crucial que las skills se volvieran estándar (ahora bajo la Linux Foundation, según dice).

- **Límite**: las skills hacen el trabajo repetible pero no prueban que tuvo éxito. "El procedimiento es necesario, pero no es evidencia."

### 10. Verificación y observabilidad

**Verificación** pide recibos: tests, builds, type check, lint, capturas de navegador, inspección visual, evals. El agente dice "terminé" y el harness responde "muéstramelo".

- Código: que los tests corran y pasen. Presentaciones: captura sin texto superpuesto. Investigación: fuentes primarias y tabla de afirmaciones.
- Anécdota: su primera experiencia con un agente que, sin que se lo pidiera, dijo "ahora voy a correr los tests". Mucha gente lo atribuyó a la inteligencia del modelo, pero el harness estaba escrito para empujarlo a verificar.

> "'A mí me parece bien' no es una estrategia de verificación."

**Observabilidad**: la verificación dice si algo pasó, no por qué falló. ¿Fue el contexto, la salida de una herramienta, el archivo equivocado, un subagente que ignoró una restricción? La observabilidad es la grabadora de la ejecución: trazas, líneas de tiempo de llamadas a herramientas, logs, coste, latencia, versiones de prompts y herramientas, eventos de aprobación; la cadena completa desde la intención del usuario hasta la salida.

> "El bug a menudo no está en el mensaje final; está tres llamadas antes, cuando el agente buscó el símbolo equivocado, confió en la página equivocada o se saltó el test que fallaba."

### Evolución del harness: los fallos se vuelven infraestructura

"No puedes mejorar lo que no puedes inspeccionar." El ciclo de *post mortem* aplicado al agente:

| Fallo observado | Cambio en el harness |
|---|---|
| Fallo de contexto repetido | Nueva regla de recuperación |
| Mala salida de una herramienta | Esquema más estricto |
| Comando peligroso | Puerta de permisos |
| Caso límite no cubierto | Nuevo test |
| Corrección recurrente | Memoria |
| Flujo repetido | Skill (lo que hace Hermes Agent) |

> "No se trata de producir una ejecución perfecta una vez, sino de que la siguiente ejecución empiece desde un lugar mejor."

Sin esta capa, cada sesión "entrega la misma lección con un envoltorio nuevo"; con ella, el harness se acumula y deja de ser "cuidar al agente".

### Síntesis y prueba práctica

Al juntar todas las primitivas, el diagrama se parece a los análisis publicados de la arquitectura de Claude Code, y "a cierto nivel" así funcionan también Codex y Gemini CLI. Cada primitiva tiene un propósito.

La prueba práctica final: cuando un agente falla, no preguntar solo si el modelo era suficientemente bueno, sino qué capa del harness se quedó sin camino:

- ¿Faltaba la instrucción? ¿Era incorrecto el contexto? ¿Se quedó obsoleta la memoria?
- ¿Era vago el esquema de la herramienta? ¿Corrió el comando en el entorno equivocado?
- ¿Necesitaba estado durable? ¿Necesitaba orquestación? ¿Debió delegarse?
- ¿No había skill? ¿No había verificación? ¿No había traza para mirar dentro?
- ¿No aprendimos nada del último fallo?

> "El harness engineering es cómo pasamos de agentes ingeniosos a sistemas confiables. El modelo sigue siendo importante, pero la fiabilidad se construye en el sistema alrededor del modelo."

## Conceptos clave

- **Harness**: el sistema alrededor del runtime del modelo que gestiona contexto, herramientas, entorno, estado, flujo, delegación, verificación y aprendizaje.
- **Runtime / bucle agéntico**: el ciclo razonar-actuar-observar-repetir donde el modelo llama herramientas.
- **Entrega vs. gestión de contexto**: aportar material relevante frente a decidir qué entra en la ventana en cada momento (RAG, re-ranking, compactación) para proteger la atención.
- **Entorno de ejecución**: los límites reales donde corren las herramientas (sistema de archivos, red, credenciales, sandbox, aprobación).
- **Estado durable**: progreso inspeccionable que sobrevive al turno y a los fallos (planes, checkpoints, logs, memorias).
- **Orquestación**: hooks, reintentos, aprobaciones y orden de pasos que mueven el trabajo.
- **Subagente**: modelo con trabajo, contexto y herramientas más estrechos; patrones de agentes-como-herramientas y handoff.
- **Inconsistencia paralela**: problema de delegar sin procedimientos compartidos.
- **Skill**: procedimiento reutilizable con nombre que el harness puede invocar.
- **Verificación / observabilidad**: recibos externos de que el trabajo funcionó y registro completo de la ejecución para depurar por qué no.

## Herramientas y referencias mencionadas

- Claude Code (y sus hooks), Codex, Gemini CLI, Cursor (Cursor rules), ChatGPT
- `AGENTS.md`, `CLAUDE.md`
- OpenAI Agents SDK (agentes como herramientas, handoffs), function calling de OpenAI, tool use de Anthropic
- MCP (Model Context Protocol)
- Daytona, E2B, Docker Sandbox
- OpenClaw (heartbeats), Pi (harness sin subagentes integrados), Hermes Agent (convierte flujos repetidos en skills)
- Linux Foundation (estandarización de skills)

## Referencias

- Transcripción: [[mQfTdNVCOB0 - masterclass-de-harness-engineering|Transcripción completa]]
- Video: [Harness Engineering Masterclass: Technical Deep Dive on how to build Agentic Systems](https://www.youtube.com/watch?v=mQfTdNVCOB0) — The Carbon Layer
