---
title: "Por qué el harness importa más que el modelo: historia, harnesses auto-mejorables y tres casos (Prime Agent, OpenJarvis, QM)"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/contexto-y-memoria
  - arnes/orquestacion-multiagente
channel: "Y Combinator"
speaker: "Anfitrión del YC Paper Club; Seth (Prime Intellect / Princeton); Jon Saad-Falcon (Stanford); Josh y Rean (YC)"
videoId: "n9xKblqyQ28"
source: "https://www.youtube.com/watch?v=n9xKblqyQ28"
language: "en"
playlistOrder: 31
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Why The Harness Matters More Than The Model | YC Paper Club"
related:
  - "[[n9xKblqyQ28 - el-harness-importa-mas-que-el-modelo|Transcripción]]"
---

# Por qué el harness importa más que el modelo

Sesión del **YC Paper Club** ("Harness Night") de Y Combinator, de aproximadamente una hora y en formato de charlas encadenadas. El anfitrión abre con una defensa del harness como objeto de investigación y repasa en cinco minutos la historia de la literatura, desde GPT-2 hasta los harnesses que se auto-modifican. Después hablan tres equipos: **Seth** (Prime Intellect / Princeton) presenta **Prime Agent**, un harness RLM auto-mejorable; **Jon Saad-Falcon** (Stanford, Hazy Research) presenta **OpenJarvis**, un stack de IA personal ejecutado en el dispositivo; y **Josh y Rean** (YC Labs) presentan **QM**, el harness open source de agentes que usa todo el personal de YC.

La tesis común es que, con el mismo archivo de pesos, el harness (contexto, herramientas, memoria, subagentes, sandboxes, bucles de mejora) decide la diferencia entre que una tarea funcione o no. En ARC-AGI 3 el modelo solo llega a ~30% y con harness supera el 95%. La sesión ofrece un mapa conceptual del harness engineering y lecciones prácticas de producción.

## Resumen

- **El harness no es "solo un wrapper"**: aunque en foros se lo descarta como prompt engineering o como algo que "no es investigación", cambiar de harness da saltos como un 18% en benchmarks, o pasar de 30% a 95–100% en ARC-AGI.
- **Dos eras**: la del *harness estático* (se le añaden capacidades, pero no se mejora a sí mismo) y la de los últimos ~6 meses, la del *harness auto-mejorable* (aprende su system prompt o su propio código).
- **La historia del harness es una historia de innovaciones en contexto y en espacio de acción**: few-shot, chain of thought, herramientas (Toolformer, WebGPT), memoria editable (MemGPT), skills (Voyager), código como acción (InterCode), reflexión (ReAct, Self-Refine, Reflexion), subagentes y RLM recursivos.
- **Prime Agent** trata al LLM como un procesador de tokens y al harness como la capa que añade estado persistente, herramientas y cómputo. Lo organiza como una jerarquía de "caché" (pesos → contexto activo → REPL → sistema de archivos) con CRUD en todos los niveles.
- **Expresividad controlada por el modelo**: el modelo debe poder invocar compactación, usar un REPL de Python, crear subagentes de forma programática y modificar su estado. Quitar cualquiera de esas piezas elimina una capacidad.
- **Resultados de Prime Agent**: 95,5% en ARC-AGI 3 con Opus usando un prompt genérico. Paridad o ligera ventaja en evals long-horizon y una corrida de Factorio de 7 días con 633 agentes que nunca se estancó.
- **OpenJarvis**: cinco primitivas (interfaz, lógica agéntica, inteligencia/motor, herramientas y memoria vía MCP, aprendizaje). Un LLM de la nube optimiza el stack local, que después corre sin costo de nube, con costos hasta 800x menores.
- **QM (YC)**: saca "el cerebro" del sandbox y lo centraliza en Postgres. Los sandboxes pasan a ser un recurso que el agente elige. El núcleo es un harness muy delgado de tres herramientas.
- **Lecciones de producción**: los agentes se rinden demasiado pronto (de ahí la *grind tool* con presupuestos de tiempo o tokens), se confunden en contextos multijugador y no entienden los contextos sociales. El límite de lo que se puede poner en "el cerebro" lo marca el sistema de permisos.
- **Bucles de auto-mejora sobre trazas**: prometen, pero si se usa LLM-as-judge sin un humano aparece una "main character syndrome" (cada agente arregla solo su pedazo del elefante).

## Contenido estructurado

### Por qué una noche dedicada al harness

El anfitrión cita comentarios de Reddit que menosprecian el tema ("no estoy seguro de que este tipo de prompt engineering pertenezca a una conferencia de ML de primer nivel"; "la ingeniería de contexto no es un problema de investigación"). Contra eso pone varios datos:

- Entre un harness y otro hay un 18% de diferencia.
- En las gráficas clásicas de METR (fecha de lanzamiento contra cuánto tiempo puede correr un agente), buena parte del progreso viene de los harnesses.
- Cita una idea del CEO de Trajectory: se sigue empujando la dimensión de "IQ" (perplejidad), pero apenas se aprovecha la **experiencia en tiempo de prueba**. Con ICL, la mejora se satura tras 40–50 ejemplos, y después hay que saltar a LoRA de rango bajo, LoRA de rango alto o SFT. Ahí es donde brillan los harnesses, y eso es lo que mide ARC-AGI: la rapidez con que algo se adapta a una distribución nueva.

> "Con algo de harness, esa cosa que 'no merece investigación', solo un wrapper y algo de scaffolding, podemos llegar a 95, y AVO de Nvidia llegó al 100%."

Claude Opus fue de los primeros modelos verificados en el conjunto privado de ARC-AGI y sacó 30%.

### Un auto-investigador construido "por accidente"

Cuando Karpathy lanzó su *auto-researcher* (marzo), el anfitrión lo bifurcó para hacerle una interfaz de seguimiento y terminó construyendo un harness sin proponérselo:

1. Se especifica un **propósito**. Por ejemplo: "los LLM de difusión no superan a los autorregresivos, pero quizá sí si se fragmentan (*shard*) en un ensamble", aprovechando la alta intensidad aritmética por GPU.
2. Se dan **ideas semilla** (variar el tamaño del ensamble, fragmentar 100x, 10x, 5x) y una **métrica de validación** (p. ej., GSM8K con un setup tipo GPT-2).
3. El flujo pasa por un **agente de scoping**, que busca papers y repos, y luego por un **agente PI** ("Chris Ré") que delega en un **agente investigador**. Este consulta a un **consejo** con feedback humano, y el PI lo vigila cada hora. Al final, un **agente autor** congela la idea, escribe ablaciones y redacta el paper.
4. Un "cockpit" accesible desde cualquier lugar (vía Tailscale) y actualizaciones por email.

Hoy le asigna ocho ideas a ocho nodos de 8×H100 y recibe papers que, según él, "son buenos". Lo único que cambió es el scaffolding.

### Breve historia del harness (sin orden cronológico estricto)

- **Harness V0 (GPT-2, feb. 2019)**: un bucle `while not EOS`, muestreo top-p y un entorno. Sin herramientas ni skills. Ejemplo en GSM8K: el system prompt de persona ("eres un profesor de matemáticas"), el problema y la respuesta tras `####`. Se recompensa con +1/−1.
- **Few-shot** (*Language Models are Few-Shot Learners*, julio de 2020): se ponen ejemplos en el contexto.
- **Chain of thought**: en vez de predecir la respuesta directamente, se reparte el cómputo en muchos más tokens. Son innovaciones de contexto y de espacio de salida o acción.
- **WebGPT → Toolformer**: herramientas como objetos JSON. En lugar de calcular `5 − 2` en los pesos, se llama a Python con `sub(5,3)`. Las herramientas se exponen en el system prompt.
- **MemGPT**: una de las herramientas "más geniales" es poder leer y escribir el propio contexto. Antes solo se podía añadir; ahora hay CRUD sobre un bloque llamado *memoria*.
- **Voyager (Minecraft)**: encadenar herramientas para una tarea, aprenderla y destilarla de vuelta al prompt. Es el origen de las **skills** (`skills.md` con nombre buscable y procedimiento).
- **InterCode**: generar código da herramientas o skills "al vuelo". El anfitrión admite que no sabe si una función generada es una herramienta o una skill.
- **ReAct → Self-Refine → Reflexion**: roles múltiples. Un evaluador interno detecta el error (p. ej., invertir el 3 y el 5), pide señal de recompensa al entorno y la reflexión corrige. Son de las primeras ideas multiagente.
- **Subagentes persistentes**: generar subagentes que viven en REPLs persistentes y con los que se puede seguir interactuando.
- **RLM (Recursive Language Models)**: expone una llamada `rlm_query` que se invoca recursivamente, con llamadas a LLM en las hojas y un orquestador principal.

### Harness v1 (estático)

Resumido como una especificación de agente:

- System prompt, límite de turnos y de llamadas a herramientas ("no quieres permitir infinitas").
- Lista de herramientas, de skills y de subagentes.
- Todo dentro de un bucle que se dispara por prompt (p. ej., en Slack) o por cron ("despierta cada hora y decide trabajar").
- Gestión de sesión, **compilación de contexto** → llamada al LLM → acción → invocación de herramientas → se añade al contexto.

Menciona a GStack (de Garry Tan) como referente.

### Harnesses que se auto-mejoran

- **DSPy** (*Demonstrate, Search, Predict*): con un conjunto pequeño de ejemplos aprende el system prompt óptimo. Como no se puede hacer backprop, usa **programación genética** (generar candidatos, fusionarlos, evaluarlos e iterar). Da CRUD sobre el system prompt.
- **Darwin machines (Darwin Gödel Machine)**: además del prompt, modifica el **código del harness**. Mantiene un archivo de agentes (harness + prompt), muestrea, evalúa con una función de fitness y reincorpora al archivo. Un **meta-harness** permite que el agente modifique su propio harness. "El harness principal produce harnesses."
- **Continual harness**: añade clases de memoria (p. ej., historial) y, la parte favorita del anfitrión, **aprendizaje online estilo DAgger** que actualiza los pesos (test-time training con pocos ejemplos), que él considera una dirección de investigación muy importante.

### Prime Agent: primeros principios (Seth)

> "Mi trabajo esta noche es convencerlos de adoptar un enfoque de primeros principios para pensar cómo construyen su harness."

- El LLM crudo es un procesador secuencial con pesos fijos y contexto visible: tokens que entran, tokens que salen. **El harness es la capa entre el LLM y el mundo que añade estado persistente, herramientas y cómputo.**
- Experiencia de usuario: una vista de agentes con todas las sesiones paralelas resumidas y una **sesión raíz** que orquesta el proyecto. Usa subagentes cuando le resultan útiles, sin que se lo pidan.
- Todo vive en un **shell IPython** (principio RLM): herramientas, memorias y subagentes se llaman de forma programática.
- Un **daemon persistente** mantiene los agentes corriendo aunque se cierre la laptop o se haga Ctrl+C.
- De *continual harness* toma el **CRUD en vivo** de memoria, skills, subagentes y su propio system prompt.

#### Jerarquía de contexto como caché

| Nivel | Qué es | Gestión |
|---|---|---|
| Pesos | La información más rápida, pero cara de actualizar (fine-tuning) | — |
| Contexto activo | Tokens de entrada, ejemplos in-context | **Compactación** (el harness mínimo que todos usan) |
| L2 – REPL vivo | Variables en RAM manipulables por programa, ahorra tokens; subagentes que reportan al final | **Garbage collection agéntico** |
| L3 – sistema de archivos | Skills, memorias y prompts en disco | **Refinamiento** (actualizar y borrar) |

> "Cuando miras el LLM crudo se parece más a una máquina de Turing [...] cuando miras un harness se parece mucho más a una computadora de von Neumann", con lectura y escritura en memoria externa, lo que le permite resolver otra clase de problemas.

#### Expresividad sobre procedimientos rígidos

Los primeros harnesses imponían pasos fijos (planificar, actuar, criticar). Los modelos ya lo hacen de forma nativa, así que no hace falta forzar un bucle ReAct. Lo que sí necesitan es **expresividad controlada por el modelo**: poder llamar a la compactación, tener un REPL de Python, crear subagentes de forma programática, acceder al estado y contar con mecanismos de feedback. "Si quitas uno de esos, estás quitando una capacidad."

Conviene construir el harness **un poco por encima de lo que los modelos actuales saben hacer**. Las trazas de razonamiento resultantes sirven para entrenar la siguiente generación, que se "bootstrapea" hacia un rendimiento mayor.

#### Subagentes persistentes y mensajería

- A diferencia del paper de RLM, los subagentes son **subsesiones persistentes**: terminan su tarea, quedan inactivos en RAM con su contexto, el padre puede volver a escribirles, y pueden pasar a disco y reactivarse con un mensaje.
- Un agente puede **escribirle a cualquier otro** dentro de una "familia nuclear" (padres, hijos, hermanos). Nació para coordinar el trabajo en "cinco mil millones de direcciones" y resultó útil para la ingeniería de software y los trabajos largos.
- **Evaluación long-horizon**: comparar modelos con presupuestos distintos esconde rendimiento. Seth busca la **meseta práctica**, el punto donde más tokens de prueba solo dan ganancias incrementales.

### Resultados de Prime Agent

- **ARC-AGI 3**: con *continual harness* había sacado 20% (Gemini Pro). Tomó el system prompt de un leaderboard comunitario y la primera corrida dio 99,9%, pero "estaba haciendo trampa", así que montó un sandboxing correcto. Después obtuvo 78% con GPT Sol, 25,7% con GPT Terra y **95,5% con Opus**, con un prompt genérico ("usa un world model para resolver ARC-AGI 3" más las acciones) y el prompt general de Prime Agent (REPL, subagentes). Las trazas muestran código, procesamiento de imágenes y razonamiento razonable apoyado en el REPL.
- Otros harnesses populares no rinden donde Prime Agent sí. Con uno gastaron unos **5.000 USD** sin avances y lo cortaron. Con Claude Code los resultados fueron malos y se remitió a los resultados oficiales. **La relación costo/rendimiento importa**, y manipular el contexto por programa ahorra dinero.
- En evals long-horizon (OOLONG, un *emulator bench* que replica emuladores completos, como una Game Boy Color, y kernels de GPU) quedó en paridad o ligeramente mejor frente a otros harnesses, con modelos desde GLM 5.2 hasta Opus 5 / 5.6. Eso indica que no está sobreajustado a una sola eval.
- **Auto-research** (NanoGPT speedrun en 8×H200 durante una semana): alta varianza, sin atribución clara. Pero modelos como DeepSeek V4, GLM 5.3 y Kimi K3 hicieron **experimentos fuera del bucle** en CPU (búsqueda de hiperparámetros, análisis) para no gastar H200.
- **Factorio, 7 días**: 633 agentes y 23 millones de tokens de salida. Los subagentes se reparten tareas y el refinamiento aprovecha el pasado. No se estancó y seguía progresando en el árbol tecnológico al final.

Lo que recomienda añadir al propio harness: **gestión agéntica del contexto, swarms, RLM y evals estandarizadas** (reproducibles con el paquete *verifiers* de Prime Intellect).

### OpenJarvis: IA personal en el dispositivo (Jon Saad-Falcon)

Problema: OpenClaw o Hermes Agent dependen de LLMs en la nube, lo que significa miles de dólares al año, falta de privacidad, inteligencia "alquilada" y un consumo de energía órdenes de magnitud mayor. Los LLM locales van **6–12 meses por detrás** de la frontera: Qwen 3.8 27B rinde como Claude Opus 4.6 (estado del arte en agosto de 2025), y la brecha se cierra con aceleradores nuevos (el nuevo Mac Mini, Nvidia).

Pregunta: ¿se puede ejecutar el núcleo del stack (inferencia, ejecución agéntica, memoria, aprendizaje) completamente en el dispositivo y seguir siendo competitivo?

Cinco primitivas:

1. **Interfaces** de usuario (escritorio, agentes continuos con cron).
2. **Lógica agéntica**: razonamiento componible, inteligencias y herramientas.
3. **Inteligencia y motor**: modelo (Qwen, GPT-OSS, Gemma 3n) y motor de inferencia (Ollama, llama.cpp, vLLM, SGLang) sobre Apple Silicon o Nvidia.
4. **Herramientas y memoria** mediante MCP.
5. **Aprendizaje**: por prompt (GEPA, DSPy) o por pesos (GRPO, SFT, LoRA).

Idea central: **un LLM de la nube (Claude, ChatGPT) diagnostica, propone y filtra cambios para optimizar el stack local**, que luego se despliega sin costo de nube. Resultados: los stacks optimizados superan a los de serie, rivalizan con la nube en tareas personales, de código y agénticas, con **costos hasta 800x menores** y menos latencia. Opus 5 y GPT 5.6 Sol son los mejores optimizadores, aunque Gemini, Kimi o GLM también sirven. Prevé que una gran parte (quizá la mayoría) de las llamadas diarias de inferencia se hará en dispositivos locales.

### QM: el harness de agentes de YC (Josh y Rean)

QM le da a cada empleado de YC un asistente estilo OpenClaw, personalizable y disponible en Slack o en una interfaz web. Cada persona tiene su contexto, su sandbox, sus archivos y sus crons, y también puede usarlo en modo multijugador. Lo usan para triaje de email, flujos legales y financieros, edición de documentos, consultas a la base interna, apps web internas y planificación de eventos.

Evolución:

1. **Ene. 2025, "general agent"**: system prompt + herramientas en un bucle, igual para todos. Mejoraba a medida que mejoraban los modelos. Luego se conectó a Slack, con crons.
2. **Jun. 2025**: Claude Code y Codex en VMs, invocados desde Slack. Corría CI y levantaba entornos de desarrollo. Había un bucle de observar fallos y actualizar `AGENTS.md`.
3. **Ene. 2026**: los partners adoptan OpenClaw, el primer agente "con su propia computadora".
4. **Abr. 2026**: una flota de más de 50 agentes Hermes en VMs. Útiles, pero difíciles de configurar y de administrar ("whack-a-mole" entrando por SSH).

#### Unhobbling: llevar más lejos las capacidades

Con la idea de *unhobbling* (de *Situational Awareness*), la pregunta fue qué pasa si se les da cada vez más capacidades:

- **Sacar el cerebro del sandbox**: en OpenClaw y Hermes el agente queda "atrapado" en su computadora. QM centraliza todo (conversaciones y sesiones) en **Postgres** y se lo expone al propio agente.
- **Sandbox como recurso** que el agente usa cuando lo necesita, no como su hogar.
- Las trazas forman un gran **eval set** para hacer hill-climbing. Los resultados son mixtos: con LLM-as-judge y una "torrente" de agentes arreglando bugs aparece la *main character syndrome*. **El humano en el bucle sigue siendo importante.**
- **Conectarlo a todos los recursos**: el CLI interno de YC, claves de API arbitrarias, OAuth con device code guardado en un keychain que se refresca, "paridad con un empleado en su laptop".
- La base de datos es casi siempre de **solo lectura**. Las escrituras pasan por upserts masivos revisados por un humano (el agente propone un plan). Ya empiezan a aprobarlos sin mirar, igual que pasó con las herramientas en Claude Code, y lo vigilan de cerca.

#### Sandboxes, runtime y harness delgado

- El agente usa por defecto el sandbox del usuario, pero puede ir a entornos compartidos, a **máquinas más potentes** para cargas pesadas o a sandboxes más simples. "Llevar esa decisión al agente en lugar del harness ha sido muy poderoso."
- **Control del runtime**: el agente puede cambiar de proveedor de modelo para evitar rechazos (p. ej., en investigación de IA o ciberseguridad) y de proveedor de sandbox.
- **Harness extremadamente delgado**, con tres herramientas núcleo: (1) ejecución en un sandbox remoto, (2) lectura y escritura en object storage, (3) publicación de apps internas (respaldadas en git). Las herramientas de memoria y cron se ven como parches temporales. Buscan ser un "harness que anticipa la AGI".

#### Problemas observados

- **Los agentes se rinden demasiado pronto**: crearon una ***grind tool*** que fija presupuestos por objetivo. El agente no puede abandonar antes de cierto tiempo de reloj (un par de horas) o cierto gasto de tokens. Mejora investigaciones e informes, en línea con cómo OpenAI y Anthropic resolvieron problemas abiertos de matemáticas.
- **Confusión de situación** en entornos multijugador (Slack), aunque el system prompt lo explique, por artefactos del entrenamiento. Hacen falta affordances locales.
- **Contexto social**: los agentes no saben dónde es apropiado compartir información, y lo privilegiado se filtra con facilidad.

> "La información que puedes poner en el cerebro está acotada por lo bueno que sea tu sistema de permisos."

YC ya tenía permisos de grano fino. Muchas organizaciones no los tienen.

## Conceptos clave

- **Harness**: la capa entre el LLM y el mundo que añade estado persistente, herramientas y cómputo. Convierte una "máquina de Turing" en una "computadora de von Neumann".
- **Harness estático vs. auto-mejorable**: el primero acumula funcionalidades fijas. El segundo aprende su system prompt (DSPy), su código (Darwin machines) o incluso sus pesos (continual harness con DAgger).
- **Meta-harness**: un harness cuyo producto son otros harnesses. El agente modifica su propio harness y se evalúa contra una función de fitness.
- **Compilación de contexto**: armar en cada iteración el contexto que va a la llamada del LLM a partir del prompt, las herramientas, las skills y el historial.
- **RLM (Recursive Language Model)**: el agente opera desde un REPL y llama de forma recursiva a sub-LLMs (`rlm_query`). Manipula datos como variables en vez de meterlos en el contexto.
- **Subagentes persistentes**: subsesiones que conservan su contexto, quedan inactivas, pueden pasar a disco y se reactivan con mensajes.
- **Garbage collection agéntico y refinamiento**: limpiar variables y subagentes del REPL, y actualizar o borrar skills, memorias y prompts en disco.
- **Expresividad controlada por el modelo**: capacidades que el modelo decide usar (compactar, REPL, crear subagentes) en lugar de pasos impuestos por el harness.
- **Meseta práctica**: el punto en que más tokens de prueba dan ganancias solo incrementales. Es el criterio de Seth para evaluar long-horizon.
- **Unhobbling**: liberar inteligencia latente del modelo dándole más capacidades (computadora, datos, runtime).
- **Grind tool**: un presupuesto mínimo de tiempo o tokens antes de que el agente pueda abandonar una tarea.
- **Main character syndrome**: en los bucles automáticos de mejora, cada agente arregla localmente "su pedazo del elefante" sin ver el sistema completo.

## Herramientas y referencias mencionadas

- **Papers e ideas**: GPT-2, *Language Models are Few-Shot Learners*, Chain of Thought, WebGPT, Toolformer, MemGPT, Voyager, InterCode, ReAct, Self-Refine, Reflexion, RLM (Recursive Language Models), DSPy, GEPA, Darwin Gödel Machine, Continual Harness, DAgger, *Situational Awareness*.
- **Benchmarks**: ARC-AGI / ARC-AGI 3, GSM8K, OOLONG, Emulator Bench (alternativa a Program Bench), NanoGPT speedrun, Factorio, gráficas de METR.
- **Harnesses y agentes**: Prime Agent, OpenJarvis, QM, Claude Code, Codex, Pi, OpenClaw, Hermes Agent, GStack, auto-researcher de Karpathy, AVO (Nvidia).
- **Infra y modelos**: Prime Intellect *verifiers*, Tailscale, Postgres, MCP, Ollama, llama.cpp, vLLM, SGLang, Apple Silicon, Nvidia H100/H200; modelos Claude Opus (4.6, 5, 5.6), GPT Sol / Terra / 5.6, Gemini, Qwen 3.8, GPT-OSS, Gemma 3n, DeepSeek V4, GLM 5.2/5.3, Kimi K3.
- **Personas e instituciones**: Y Combinator (YC Labs), Prime Intellect, Princeton, Stanford Hazy Research (Christopher Ré, Azalia Mirhoseini), Greg Kamradt y François Chollet (ARC Prize), Andrej Karpathy, Garry Tan, Trajectory.

## Referencias

- Transcripción: [[n9xKblqyQ28 - el-harness-importa-mas-que-el-modelo|Transcripción completa]]
- Video: [Why The Harness Matters More Than The Model | YC Paper Club](https://www.youtube.com/watch?v=n9xKblqyQ28) — Y Combinator
