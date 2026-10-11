---
title: "El flujo de ingeniería agéntica de Matt Pocock: harness, skills como procedimientos y agentes AFK"
tags:
  - arnes/nota
  - type/nota
  - arnes/flujos-de-trabajo
  - arnes/opinion
  - arnes/herramientas-y-sandbox
channel: "David Ondrej"
speaker: "Matt Pocock (entrevistado por David Ondrej)"
videoId: "nQwJVHCtDDY"
source: "https://www.youtube.com/watch?v=nQwJVHCtDDY"
language: "en"
playlistOrder: 34
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Matt Pocock’s Agentic Engineering Workflow (just copy him)"
related:
  - "[[nQwJVHCtDDY - flujo-agentico-de-matt-pocock|Transcripción]]"
---

# El flujo de ingeniería agéntica de Matt Pocock: harness, skills como procedimientos y agentes AFK

Entrevista de una hora de David Ondrej a Matt Pocock (educador de desarrolladores, autor de un popular repositorio de skills y de la herramienta Sandcastle, aihero.dev). La conversación recorre su filosofía —la IA ha "comido" la programación táctica y el valor está en la programación estratégica—, una demostración en vivo de su skill `teach`, su distinción entre skills-procedimiento y skills-habilidad, su setup de trabajo (Claude Code + agentes en sandboxes ejecutados en GitHub Actions) y su visión de "colas, no loops" para el trabajo AFK (away from keyboard).

Importa para el harness engineering porque Pocock defiende explícitamente que el harness pesa tanto como el modelo ("50/50"), que tienes mucho más control sobre el harness que sobre el modelo, y que una base de código bien diseñada (buena *agent experience*) reduce el coste en tokens y permite usar modelos más baratos. Cierra con un consejo radical: borrar todas las skills, plugins, MCP y archivos de instrucciones, observar al agente desnudo y volver a añadir solo lo que haga falta.

## Resumen

- **La IA se comió la programación táctica**: escribir código, pelear con la sintaxis y hacer commits ya lo hace mejor y más barato la IA; el humano debe destacar en programación estratégica (arquitectura, interfaces, velocidad del equipo).
- **Tus habilidades son el techo de la IA**: la IA multiplica a los seniors ~10x y a los juniors muy poco; mejorar con IA es mejorar en tu dominio.
- **Harness y modelo, 50/50**: todos miran el "motor del Fórmula 1", pero el chasis y la aerodinámica (prompts, skills, entorno, base de código) importan igual y están bajo tu control.
- **Skills-procedimiento vs. skills-habilidad**: Pocock prefiere procedimientos que invoca el humano (p. ej. `grill-me`) a habilidades que el modelo invoca solo; así no delega su pensamiento y evita filtrar descripciones al contexto.
- **Cada skill filtra su descripción al contexto**: con 100 skills hay 100 descripciones en la ventana; se puede desactivar con `disable-model-invocation: true`.
- **Agentes AFK en sandboxes**: usa Sandcastle para ejecutar Claude Code en Docker/Podman o sandboxes remotos (Vercel), paralelizando agentes y orquestándolos desde GitHub Actions.
- **Colas, no loops**: el trabajo de desarrollo es una cola de tareas (issues) de la que varios nodos (humanos o agentes) toman elementos; el "Ralph loop" es útil pero no es la imagen completa.
- **Empujar los checkpoints humanos a la derecha**: automatizar exploración, implementación y revisión, dejando al humano una decisión de "un clic" al final, sin perder la observabilidad del sistema.
- **Atacar la causa raíz**: si un modelo nuevo encuentra un bug de seguridad, la lección es construir un sistema (p. ej. una revisión de seguridad diaria por cron) que lo encuentre siempre, incluso con un modelo más barato.
- **Base de código fácil de cambiar = menos tokens**: mejores guardarraíles y arquitectura permiten un modelo "más tonto" y más barato.
- **DX y AX**: la *agent experience* se solapa mucho con la *developer experience*; los seniors aportan saber construir buena DX.
- **Consejo final**: borrar todo (skills, plugins, MCP, CLAUDE.md, AGENTS.md), observar al agente y volver a añadir solo procedimientos que tú decidas.

## Contenido estructurado

### Programación táctica vs. estratégica

Pocock parte del libro *A Philosophy of Software Design* de John Ousterhout y su distinción entre programación táctica (el día a día: escribir código, sintaxis, bugs, commits) y estratégica ("ganar la guerra, no la batalla": cómo debe verse la base de código, qué estrategias mejoran la velocidad).

> "La IA básicamente se ha comido la programación táctica. Se acabó."

Con una "flota infinita de programadores tácticos", el diferencial es ser excelente en lo estratégico. Las habilidades para delegar bien no cambian respecto a delegar en juniors o mid-level:

- Diseñar las partes difíciles por adelantado.
- Acotar muy bien las tareas.
- Pensar en las interfaces entre módulos.
- Pensar en las costuras de test (*test seams*) y en buenos tests.
- Diseñar una base de código fácil de trabajar, con "la documentación justa" para apuntar a la IA a los lugares correctos.

Sobre el aprendizaje: según CTOs con los que habla, la IA hace a los seniors "10 veces mejores", mientras los juniors obtienen solo un pequeño impulso.

> "Tus habilidades son el techo de lo que la IA puede hacer. Si tus habilidades son bajas, la IA no va a poder ir más allá."

### Demostración de la skill `teach`

Pocock (que fue profesor de canto durante años y ahora enseña a desarrolladores) codificó principios pedagógicos —zona de desarrollo próximo, la distinción entre conocimiento, habilidad y sabiduría— en una skill que genera cursos a demanda. Cuenta que aprendió a resolver el cubo de Rubik de memoria con ella.

En la demo se hace pasar por un *vibe coder* que quiere construir una app de agenda para sus alumnos de canto:

1. **Alineación con la misión**: la skill revisa el workspace (debe ejecutarse en uno, porque guarda estado), hace tres preguntas y crea un `mission.md` (quién es, qué quiere construir, por qué importa, cómo luce el éxito).
2. **Investigación de recursos fiables**: busca fuentes confiables sobre aplicaciones full stack.
3. **Material local**: crea un registro de aprendizaje, una hoja de referencia y la primera lección en HTML ("aprender en la terminal es brutal").
4. **Lección 1 — "el botón de deshacer de tu proyecto"** (Git), con ejercicios personalizados según el sistema del usuario y un quiz (las preguntas aumentan la "fuerza de almacenamiento" del recuerdo).
5. **Fuente primaria y seguimiento**: remite al libro *Pro Git* e invita a hacer preguntas para generar la siguiente lección. El conocimiento es un grafo; la skill traza un camino lineal a través de él.

Distingue **skills sin estado** (no necesitan memoria local) de **skills con estado** como `teach`, que guarda su estado localmente "porque un buen profesor recuerda lo que hiciste antes".

Se instala con `npx skills@latest add mattpocock/skills` y funciona tanto en Claude Code como en Codex. Pocock usa Claude Code con Opus 4.8 en esfuerzo medio y prefiere esperar un mes antes de adoptar un modelo nuevo (como Fable) "para ver cómo se asientan las cosas".

### Qué hace buena a una skill: procedimientos vs. habilidades

Dos tipos de skills:

- **Habilidades (*abilities*)**: las invoca el propio modelo cuando las necesita. Ejemplo: estándares de código React ("no uses `useEffect`, usa otra cosa").
- **Procedimientos**: los invoca el humano para que el modelo se comporte de cierta forma. Es como Pocock prefiere sus skills.

El ejemplo estrella es **`grill-me`**: apenas cuatro o cinco frases que convierten al agente en un "entrevistador adversarial" que te pregunta y propone ideas hasta alcanzar un entendimiento compartido. Lo usa como reemplazo del *plan mode*. Su cadena típica: `grill-me` → escribir un PRD (`to-prd`) → convertir el PRD en issues individuales.

> "Prefiero mis skills como procedimientos. Me gusta tener el control... No quiero delegar mi pensamiento al modelo."

Contrasta con Superpowers (de Jesse Vincent, "probablemente el repositorio de skills más popular"), que toma el enfoque opuesto: el modelo tiene el control.

### Coste de contexto y conocimiento, habilidad y sabiduría

Escribir skills es difícil porque cada una "filtra" su descripción a la ventana de contexto. Con `disable-model-invocation: true` (como en su skill `zoom-out`) solo la invoca el usuario y su descripción no entra al contexto. Por eso prefiere ocultar la mayoría de las descripciones a la IA y mantener ese conocimiento en el humano, que "toma el volante".

Compara las skills con la refactorización: igual que una función repetida tres veces se extrae a una función compartida, ahora se pueden extraer procedimientos propios (p. ej. "cómo hacer buenos planes") y distribuirlos al equipo, "elevando el piso" de lo que pueden hacer los ingenieros.

Tres cosas necesarias para ser bueno en algo:

1. **Conocimiento**: entender qué es la cosa.
2. **Habilidad**: haberla hecho muchas veces (memoria muscular).
3. **Sabiduría**: saber cuándo hacerla y cómo encaja en el mundo real; casi imposible de obtener sin haberla hecho en el contexto exacto.

Lo fascinante de esta época es poder empaquetar las dos primeras en algo reutilizable.

### Setup: Claude Code, Sandcastle y GitHub Actions

- **Claude Code** con Opus 4.8 en esfuerzo medio para planificar y algo de implementación local.
- La mayor parte del trabajo lo hace **AFK** con **Sandcastle**, su herramienta para ejecutar agentes dentro de sandboxes (Docker, Podman o sandboxes remotos de Vercel), y luego traer los commits al workspace local. Sin sandbox, un agente "podría borrar tu directorio home o exfiltrar tus variables de entorno".
- Combinado con **GitHub Actions**: por ejemplo, una acción de revisión por agente que se dispara en cada PR, hace checkout de la rama, ejecuta un prompt de revisión, corre el type check y responde en el PR.
- Ventaja: paralelizar todo lo que se quiera sin agotar los recursos de la máquina local.

### Modelo vs. harness

> "Todos están obsesionados con el motor del coche de Fórmula 1, cuando el motor es solo una parte del sistema... Creo que el harness tiene la misma cantidad de trabajo, y tienes mucho más control sobre el harness que sobre el modelo."

Ondrej objeta que un motor mejor mejora todo al instante. Pocock lo concede pero insiste en pensarlo como 50/50, no 90/10. Menciona la **lección amarga** (*the bitter lesson*: el cómputo bruto supera cualquier optimización) y admite que podría estar cayendo en ella, pero sostiene que optimizar el harness y crear buenas bases de código sigue rindiendo.

Rechaza predecir el futuro ("no soy un pundit"): mantener el workspace y el harness lo más agnósticos posible respecto al modelo y aplicar fundamentos de software que han funcionado 30–40 años.

> "¿Cómo optimizar el gasto de tokens? Ten una base de código en la que sea más fácil hacer cambios. Así puedes usar un modelo más tonto."

Una arquitectura mejor da mejores guardarraíles, es más fácil de explorar y el agente "gasta menos tokens golpeándose la cabeza contra la pared".

### Fable, uso de computadora y el papel humano

Ondrej cuenta cómo Cursor con Fable, usando el navegador integrado, depuró la consola de la API de Twitter, creó claves API y movió una app de proyecto (advierte que no lo recomienda en producción) y se sintió menos necesario. Pocock responde que es solo un agente con herramientas y una tarea acotada; el humano sigue siendo necesario para decidir si era lo correcto y para auditar la seguridad.

Ante el argumento de que modelos más potentes encuentran bugs profundos que otros no ven, Pocock propone un **cron diario** que haga revisión de seguridad de una parte distinta del repo con un modelo relativamente simple:

> "Creo que vamos atrasados en nuestras prácticas y esperamos que el modelo compense."

### Sistemas que se mejoran a sí mismos

Si un modelo descubre un problema de seguridad, lo que realmente aprendiste es que tu código tiene problemas de seguridad y necesitas algo que los busque siempre. Ondrej resume: "si alguien te roba la bici una y otra vez, compra un candado". Pocock: hay que diseñar sistemas que se mejoren con el tiempo, como siempre se ha hecho con suites de tests, revisiones humanas y refactorizaciones. Ondrej añade a su "lista" de capacidades del constructor 10x preguntarse cómo llegó a existir el bug y parchear la causa subyacente (nueva skill, nuevo sistema, mejor staging).

### Loops vs. colas: humano en el ciclo y AFK

A raíz del furor por los "loops agénticos" (popularizados por Peter Steinberger), Pocock distingue:

- **Trabajo con humano en el ciclo**: planificación, implementaciones complicadas, trabajo sin acotar.
- **Trabajo AFK**: lanzas al agente y se va a hacer algo. Descubrirlo fue lo que más aumentó su producción: "de repente hay dos de mí, o tres, cuatro, cinco".

El origen es el **Ralph loop** de Geoffrey Huntley (artículo del 14 de julio del año anterior): un `while` que pasa el mismo prompt a Claude Code una y otra vez. Pero lo único que necesita es que el agente AFK tome una tarea concreta y la haga:

> "Pienso en estas cosas como colas, no loops."

En Sandcastle, los issues (bugs, feature requests) son la cola: un agente hace triage/exploración AFK y devuelve el issue a la cola; Pocock añade la etiqueta `agent implement` y GitHub Actions lo implementa; el issue sale de la cola cuando se fusiona el PR. Así han trabajado siempre los equipos: varios nodos tomando tareas de una cola.

Ondrej lo compara con un rey medieval que recibe problemas de sus ministros y prioriza, en vez de despachar ministros que nunca reportan.

### Empujar los checkpoints humanos a la derecha

Ejemplo de pipeline automatizable: telemetría (Sentry) → issue creado automáticamente → etiqueta "explorar" → el agente devuelve datos estructurados (¿se puede arreglar ya o necesita humano?) → implementa → revisa → etiqueta de "¿auto-merge o avisar al usuario?". El humano ve el bug, la exploración, el arreglo y la revisión: "a un clic en lugar de a una sesión de depuración".

Sobre eliminar checkpoints: ¿qué se gana con la revisión?

1. Bloquear cosas peligrosas antes de producción.
2. **Visibilidad del propio sistema**: ver si hizo un buen trabajo, necesaria para mejorar el harness.

Se podría dejar que una IA decida que un refactor interno no necesita revisión, pero "¿quién revisa a la IA que hace eso?". Hay que auditar algunas de esas decisiones y mejorar con el tiempo:

> "No solo revisamos el código. También revisamos el sistema que produce el código."

Para hacer la revisión más rica, cita a gente que hace que la IA grabe un video recorriendo el cambio de front-end con voz generada por texto a voz, adjunto al PR.

### Negocios con IA y producto

Pocock no cree que haya cambiado mucho: hablar con clientes, entender qué necesitan y construir prototipos que resuelvan su problema real. Los libros clásicos de diseño de producto siguen aplicando; la IA da ventaja en la implementación, no en la idea. Hay que preguntarle a la IA qué quitar de la app y cómo simplificarla, en lugar de acumular funciones.

### Seniors, juniors, DX y AX

Contratar juniors entusiastas siempre fue el objetivo porque aprenden rápido. Distingue **DX** (*developer experience*) de **AX** (*agent experience*: la experiencia del agente trabajando en la base de código). Mejorar skills, modelo, harness y base de código mejora la AX; a menudo se olvida mejorar la base de código. Hay un gran solapamiento entre buena DX y buena AX, y ahí aporta el senior. Lo que más importa es una mentalidad experimental y el interés por el harness y la AX.

> "Si eres solo un programador táctico... estás fuera. Ya no puedes ser un *code monkey*. Necesitas pensar estratégicamente."

### Consejo final: empezar de cero

1. Borrar todas las skills, plugins y servidores MCP, el `CLAUDE.md` y el `AGENTS.md`.
2. Observar qué hace el agente en modo básico ("todo el mundo infla su ventana de contexto con demasiadas instrucciones").
3. Añadir capas encima, preferentemente **skills-procedimiento** que tú decidas, instaladas de forma que puedas personalizarlas y experimentar.
4. Ante problemas, buscar soluciones y delegar la implementación a un agente AFK ("requiere algo de preparación, pero una vez montado es una locura").

## Conceptos clave

- **Programación táctica / estratégica**: escribir el código del día a día frente al diseño a largo plazo de la base de código y la velocidad del equipo (Ousterhout).
- **Skill-procedimiento**: skill que invoca el humano para guiar al modelo (p. ej. `grill-me`); mantiene al humano al volante.
- **Skill-habilidad (*ability*)**: skill que el modelo invoca por sí mismo cuando la necesita; su descripción ocupa contexto.
- **Skill con estado**: skill que guarda información local entre sesiones (p. ej. `teach`).
- **`disable-model-invocation`**: opción de frontmatter que impide que el modelo invoque la skill y evita que su descripción entre al contexto.
- **AFK (away from keyboard)**: trabajo en el que el agente opera sin el humano presente, normalmente en un sandbox.
- **Colas vs. loops**: modelar el trabajo como un backlog de tareas que varios nodos consumen, en lugar de un bucle infinito que repite un prompt.
- **Checkpoints humanos**: puntos de revisión que conviene empujar lo más tarde posible en el pipeline sin perder visibilidad del sistema.
- **AX (agent experience)**: la experiencia del agente trabajando en la base de código; se solapa con la DX.
- **Lección amarga (*bitter lesson*)**: idea de ML según la cual el cómputo bruto supera a las optimizaciones manuales.

## Herramientas y referencias mencionadas

- Claude Code (Opus 4.8, esfuerzo medio), Codex, Cursor, Fable
- Sandcastle (herramienta de Matt Pocock para ejecutar agentes en sandboxes), Docker, Podman, Vercel Sandboxes, GitHub Actions
- Repositorio de skills de Matt Pocock (`teach`, `grill-me`, `to-prd`, `zoom-out`), instalado con `npx skills`
- Superpowers (repositorio de skills de Jesse Vincent)
- Ralph loop (Geoffrey Huntley); loops agénticos (Peter Steinberger)
- *A Philosophy of Software Design* (John Ousterhout); *Pro Git*; la lección amarga
- Sentry, Whisper Flow (dictado), SerpApi (patrocinador)
- aihero.dev / aihero.dev/skills

## Referencias

- Transcripción: [[nQwJVHCtDDY - flujo-agentico-de-matt-pocock|Transcripción completa]]
- Video: [Matt Pocock’s Agentic Engineering Workflow (just copy him)](https://www.youtube.com/watch?v=nQwJVHCtDDY) — David Ondrej
