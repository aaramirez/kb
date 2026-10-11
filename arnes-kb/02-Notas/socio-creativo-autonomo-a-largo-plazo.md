---
title: "Arnés agéntico como socio creativo autónomo: del guion al storyboard"
tags:
  - arnes/nota
  - type/nota
  - arnes/construccion
  - arnes/orquestacion-multiagente
  - arnes/contexto-y-memoria
channel: "Jordan Urbs"
speaker: "Jordan Urbs y Scott Graham"
videoId: "d33CK8uuji0"
source: "https://www.youtube.com/watch?v=d33CK8uuji0"
language: "en"
playlistOrder: 55
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Build a Long-Term Autonomous AI Creative Partner (AI Harness Engineering Guide)"
related:
  - "[[d33CK8uuji0 - socio-creativo-autonomo-a-largo-plazo|Transcripción]]"
---

# Arnés agéntico como socio creativo autónomo: del guion al storyboard

Video largo (1:20 h) de Jordan Urbs, con una sección de taller impartida por Scott Graham dentro de la comunidad AI Captain's School. Tiene tres partes: (1) una demo en la que Jordan usa en Claude Code una plantilla open source de arnés agéntico (*Story Systems*, derivada del *Safe Agentic Workflow* de Scott) para escribir un guion de cine completo con un equipo de 11 agentes; (2) una explicación conceptual de Scott sobre qué es un arnés y cómo encajan skills, comandos, hooks, subagentes, bucles con criterio de salida y context engineering; y (3) la creación de un arnés nuevo a partir de la misma plantilla, que convierte el guion en storyboard e imágenes (Venice API + Nano Banana Pro) y luego en clips de video (Veo 3.1).

El hilo conductor es una respuesta a Ben Affleck, que criticó que la IA "escribe muy mal y no es confiable". La tesis del video es que el problema es usar la IA en una sola conversación (*one-shotting*). Un arnés con memoria persistente en archivos, skills cargadas a demanda, agentes especializados y compuertas de calidad da resultados estables y de alta calidad en trabajos de largo horizonte. Interesa para el harness engineering porque muestra que la arquitectura sirve en dominios distintos del código.

## Resumen

- **Un arnés es el entorno donde "vive" la IA**: según Scott, es el lugar donde el agente entiende qué skills, comandos, hooks y agentes tiene disponibles para hacer y terminar trabajo de forma autónoma. Claude Code y Agent Zero son arneses.
- **One-shotting ya no sirve**: un LLM no puede escribir un guion completo con mundo, arcos y estructura en una sola conversación. Hace falta memoria persistente (beat sheet, registro de personajes, arc chart) y revisión por agentes especializados.
- **Plantilla universal de 11 agentes**: story architect, dialogue writer, scene writer, continuity, script supervisor, etc. Los roles se pueden mapear a otros dominios (system architect en software, senior partner en derecho, investigador principal en medicina).
- **Compuertas con veto**: el story architect y el script supervisor pueden vetar el avance si no se alcanza la calidad.
- **Primer borrador de 108 páginas en unos 14 minutos** de ejecución autónoma (alrededor de una hora en total), seguido de un *writer's room* de seis agentes en paralelo que detectó problemas estructurales y propuso reescrituras.
- **Skills frente a base de conocimiento**: una skill traduce el conocimiento en lo que el agente necesita justo cuando lo necesita. Solo se cargan nombre y descripción (frontmatter YAML), lo que evita el context rot que produce cargar toda la base.
- **Bucle con criterio de salida (LLM como juez)**: se itera hasta cumplir el estándar, con límite para no entrar en un bucle infinito y con escalamiento al humano. Después viene un proceso de QA.
- **Context engineering**: "encontrar el conjunto más pequeño de tokens de alta señal que maximice la probabilidad del resultado". Se apoya en preferir CLI y LSP sobre MCP y en usar búsqueda de herramientas.
- **Defensa en profundidad**: herramientas limitadas por agente (el agente de QA no puede escribir código), hooks pre y post uso de herramienta y estándares que bloquean.
- **El arnés se mejora con retrospectivas**: cuando algo sale mal se corrige el proceso, se documenta lo aprendido en skills y CLAUDE.md, y el error no se repite.
- **La misma plantilla sirve para un arnés nuevo**: en plan mode, Jordan generó un arnés de storyboard con agentes, skills y comandos nuevos, y lo fue refinando por iteración ("desarrollo guiado por intención").

## Contenido estructurado

### Motivación: por qué la IA "escribe mal"

Jordan parte de la crítica de Ben Affleck y sostiene que a quien no le funciona la IA es porque no la usa bien. Define el arnés agéntico como "un agente autónomo de largo plazo que puede darte resultados de alta calidad cada vez". Scott usa la analogía de *50 First Dates*:

> "Cada vez que hablas con un agente, es como si ni siquiera supiera tu nombre."

Y la de leer un libro frente a aprender en la práctica:

> "Una cosa es darte un libro sobre cómo talar un árbol. Otra es sacarte al bosque y enseñarte a talarlo físicamente. Esa es la magnitud de la diferencia."

Antes, el agente se movía por conocimiento ("déjame buscar en la base, comparar prompts, hacer un plan"). Ahora activa partes de sí mismo según las palabras clave de la petición, como haría un humano. Jordan compara con los agentes de largo plazo comerciales (deep research de OpenAI, NotebookLM, Perplexity) y plantea la idea de aplicar esa tecnología al dominio de cada uno. Según él, con la plantilla se puede tener un arnés propio en unas dos horas.

### Demo 1: escribir un guion con la plantilla Story Systems

**Montaje**
- VS Code + Claude Code. La plantilla también funciona con Gemini CLI u OpenAI Codex.
- Extensión *Better Fountain* para ver el formato de guion (`.fountain`) en tiempo real mientras escribe el agente.
- Instalación con el bloque de "essentials" de la guía, que al final abre Claude.
- Comandos: `start scene`, `start project`, `end session`, `check format`, `check continuity`, `new scene`, `new character`, más comandos de formato (añadir nota Fountain, transición…). Mucho del flujo es automático.

**Arquitectura del equipo de 11 agentes**
- Un session manager coordina a los demás.
- Story analyst y story architect trabajan por separado de los escritores y del anotador de escenas.
- Después actúan calidad y continuidad, y al final investigación y producción.
- El story architect y el script supervisor tienen veto.

**Flujo seguido**
1. Página de título e idea: Captain Jax, fundador de la AI Captains Academy en un mundo retro synthwave de 16 bits, exsoldado de un "ejército corporativo de vigilancia por suscripción".
2. Construcción del mundo con humano en el bucle. Jordan quiere controlar esa parte ("pásame lo que tengas, aunque sean fragmentos y vibras") y el agente genera un *world bible* con vocabulario propio (Pocket Mind, CIT, NeuroBoard…).
3. Artefactos persistentes en `templates/`: beat sheet (acto 1, tema, planteamiento, catalizador…), registro de personajes y arc chart.
4. Invocación explícita de skills: *character arcs* (arco del protagonista: "el orden es seguridad… la libertad es desordenada") y *story check* (12 preguntas críticas de evaluación; aprobó 10 de 12).
5. Revisión de `CLAUDE.md`: ubicación del arnés, agentes, comandos, skills, hooks, invocación de agentes ("actuando como el story architect, evalúa la estructura de tres actos…"), un esquema de capacidades, plantillas y un flujo que hace commit automático del progreso.
6. Esquema de escenas (46 escenas, 108 páginas) y escritura autónoma: unos 14 minutos mientras Jordan estaba en la playa.

Jordan señala que los artefactos (beat sheet, registro, arc chart) "se convierten en contexto para memoria persistente", que es lo que hace viable un proyecto grande.

**Writer's room**
Después del primer borrador (2.888 líneas), la skill *writer's room* lanzó seis agentes en paralelo, en segundo plano, cada uno con su revisión (story architect, story analyst, scene writer reviewer…). En unos 10 minutos entregó:
- Balance de tres actos "casi ideal" y los mejores momentos estructurales.
- Arreglos estructurales, por ejemplo una escena 33 "huérfana".
- Notas por personaje (Jax 9/10), líneas que no funcionan ("frase de pegatina de parachoques") y escenas que se pueden fusionar.
- Un informe consolidado de dirección creativa. Los seis coincidieron en que la escena 43 necesitaba reescritura, que el personaje del Archivista era el eslabón débil y que al acto 3 le faltaban riesgos físicos.

> "Esta IA escribió todo el guion, y luego otra IA dentro de la misma IA dice: esto no es suficiente, esto es lo que tienes que arreglar."

Por último, una skill exporta el guion a PDF. Jordan admite que la dirección temática no lo convence del todo, pero el objetivo era el tutorial.

### Qué es un arnés (taller de Scott Graham)

Scott habla de "entrega basada en evidencia": en contextos empresariales no hay margen de error y el trabajo se verifica. Lo que distingue a la tecnología es cómo se combinan sus capas.

**Skills, comandos y agentes**
- Una skill "traduce lo que está en tu base de conocimiento a lo que los agentes entienden en el momento en que lo necesitan".
- Hoy skills y comandos casi se solapan, pero hacen cosas distintas. Un agente o subagente puede tomar una skill por su cuenta, o la skill puede integrarse en un comando explícito. Los comandos acaban siendo flujos de trabajo.
- Gracias al frontmatter YAML, el agente solo carga palabras clave y descripción. Con `/skills` se ven las skills y cuántos tokens ocupan. Se pueden tener 100 skills sin llenar el contexto, cosa que no pasa con 100 MCP.

**Caso de Jordan**: trabaja en VS Code con una base de conocimiento por proyecto, por ejemplo un archivo de referencia de creación de contenido con audiencia, oferta, misión y valores. Con unos 20 archivos aparece pronto el context rot. Por eso está pasando a skills las tareas repetitivas, segmentadas por flujo de trabajo.

**El bucle del arnés**
- No basta con traer herramientas y skills cuando hacen falta. Hay que añadir requisitos: la definición de terminado según los estándares de cada uno.
- Los estándares se meten "en la receta" mediante comandos, hooks y skills. Por ejemplo, una skill puede exigir que antes de terminar se ejecute un hook pre-commit que valide todos los estándares.
- Primero hay un agente orquestador (con el que se chatea) y luego subagentes. Todos deben cumplir un estándar de entrega.

> "Las máquinas son para la velocidad, la repetición y la necesidad. Los humanos son para la historia, la novedad, el mito y el significado."

El gusto es difícil de traducir, pero el trabajo se puede organizar según los estándares de cada uno para eliminar las "pérdidas de tiempo" y dejar al humano el corte final.

**LLM como juez y salida del bucle**
> "¿Alcanzamos el estándar? Si no, iteramos otra vez… Oye Jordan, llevamos cuatro horas y estos no lo logran. Te lo envío. No quieres un bucle infinito."

Después del bucle sigue haciendo falta QA. No hace falta un arnés tan sofisticado: "toma de aquí lo que necesites".

### Context rot y context engineering

- Scott muestra una gráfica: un 2 % de desalineación al principio lleva a un 40 % de fallos al final de una conversación multiturno. La compactación es una tecnología reciente.
- En cada turno se reenvía todo lo anterior, así que se gastan muchos tokens de entrada para pocos de salida.
- Soluciones *just-in-time*: buscar solo lo necesario con herramientas de código (grep, head, búsquedas, IDs de sesión, historial de Claude, commits de GitHub). Esa historia es una base de conocimiento que mucha gente pasa por alto.
- Regla destacada: **encontrar el conjunto más pequeño de tokens de alta señal que maximice la probabilidad del resultado**.
- El context engineering ya no se expresa como base de conocimiento. Se expresa dentro del arnés como skill, comando, hook o agente.

### CLAUDE.md, políticas y empezar ligero

- `CLAUDE.md` es la fuente de verdad compartida del repositorio para el equipo.
- En empresas hay políticas globales (cumplimiento, seguridad, SOC 2, HIPAA, PII) y de proyecto, y conviene usarlas como andamiaje para que cada proyecto nuevo nazca igual.
- Recomendación: empezar muy ligero y convertir en skill algo que se haga todo el tiempo.

### Herramientas: LSP, CLI frente a MCP, proceso como servicio

- Si hace falta una API key, va en los secretos. Con eso el agente puede escribir herramientas al vuelo en lugar de cargar un MCP completo.
- El soporte de **LSP** en Claude Code le da la inteligencia semántica del IDE (definiciones, referencias), reduce la carga cognitiva del agente y ahorra tokens.
- Scott lo llama **process as a service**: procesos que se le entregan al agente justo cuando los necesita.
- "Siempre que puedas usar algo desde la CLI, hazlo en lugar de un MCP. No uses el MCP de GitHub… usa GitHub CLI."
- La búsqueda de herramientas, frente a la carga tradicional, mejora los resultados y aumenta el trabajo que cabe antes de compactar.

> "Nadie quiere comprar un taladro. Solo quieren agujeros."

### Defensa en profundidad y línea de ensamblaje

- Por encima de la capa de comportamiento, los hooks y el uso de herramientas se pueden limitar por agente. En el arnés de software de Scott, el agente de QA solo puede buscar, leer y escribir informes. No tiene herramientas para programar.
- Hooks pre y post uso de herramienta que bloquean si no se cumple un estándar, por ejemplo un formato de publicación. El agente corrige y vuelve a pasar.
- Analogía de la fábrica de autos: inspección de calidad en cada estación. El proceso humano (John, Susie, Peter de cumplimiento, el VP, el ejecutivo final) se traslada tal cual al arnés como controles sucesivos.
- Bucle agéntico: leer, trabajar, commit, con un estado de salida ("¿completamos el trabajo según nuestros estándares?"). Se puede pasar el trabajo, junto con los artefactos, a otro agente experto que tiene su propia ventana de contexto. Así son posibles operaciones de días.
- Sin un plan claro no se puede esperar autonomía de largo plazo.

### Vibe coding con guardarraíles, n8n y nuevos modelos de servicio

- El arnés asume cerca del 40 % de la carga cognitiva en autenticación, autorización y acceso a servicios, para que el vibe coding se haga dentro de los estándares del proyecto. Esto es crítico cuando hay clientes que pagan.
- Migrar desde n8n: se toma la plantilla, se pide en plan mode que reproduzca el flujo de n8n, y a partir de ahí los cambios se hacen en lenguaje natural dentro del repositorio.

> "Los agentes más efectivos no solo son inteligentes: están bien equipados, bien gobernados y son conscientes del contexto."

Scott subraya la parte de "consciente del contexto": el agente solo necesita saber lo del trabajo que tiene en ese momento. Un solo chat que intenta hacerlo todo funciona mal. Pensar el arnés como un equipo da resultados "asombrosos".
- Casos en otros dominios: primeros borradores de contratos en derecho. Scott imagina que los proveedores de servicios (un contador, por ejemplo) entregarán skills y comandos para los agentes del cliente: "la entrega de inteligencia en piezas pequeñas".
- Marketplace de plugins de Claude Code para ampliar el núcleo.

> "Aquí están las condiciones de trabajo. Ve a hacerlo. Y aquí están las condiciones de éxito. No vuelvas hasta cumplirlas."

- Cuando alguien falla no se le despide: se hace una retrospectiva y se mejora el proceso. Antes los agentes no podían cumplir un estándar. Ahora sí.

### Demo 2: arnés de guion a storyboard y video

**Creación**
- Workspace nuevo (*long form AI vidgen*) con la plantilla Safe Agentic Workflow, Claude Code en plan mode y un prompt de rol: "eres un desarrollador full-stack de IA…".
- Requisitos: storyboard completo desde un guion largo, imágenes con Venice API usando Nano Banana Pro a 1K, consistencia total de personajes y descripción completa de cada personaje en cada prompt.
- Cinco agentes en segundo plano lo implementaron, incluido un agente de render HTML.
- Jordan echó en falta un `CLAUDE.md` y pidió crearlo con una regla clave: el usuario no ejecuta comandos (npx); todo se hace en lenguaje natural.

**Pipeline resultante**
1. Ingesta del guion `.fountain` (71 escenas, 24 personajes).
2. Estética: el agente propuso seis direcciones (Blade Runner neo-noir, distopía limpia "Apple meets Orwell", retrofuturismo Moebius, anime realista *Ghost in the Shell*/*Akira*, sci-fi analógica de los 70, píxel SNES). Generó una imagen de prueba por estética en paralelo y Jordan eligió sci-fi analógica de los 70.
3. **Aprendizaje incorporado al arnés**: Jordan pidió que la generación de muestras de estética fuera automática después de la ingesta, sin preguntar antes, y que lo aprendido sobre Venice y Nano Banana Pro quedara documentado en skills y CLAUDE.md "para que no vuelva a pasar".
4. Bloqueo de personajes: cuatro imágenes de referencia por personaje desde varios ángulos, más fichas de personajes y tecnología.
5. Storyboard de la escena 1: 26 paneles y un visor HTML autocontenido. Problemas: relación 1:1 en lugar de 16:9 (corregido) y falta del texto del diálogo.
6. Se añadió una etapa de prompt de video (movimiento a lo largo del tiempo a partir del primer fotograma) para Veo 3.1, con clips de 8 segundos. El JSON por toma incluye prompt de imagen y prompt de video. Apareció un agente nuevo, *prompt engineer* (consistencia de personajes y prompts de video), con skills de Venice y de composición de tomas, y comandos de generación de video.

**Resultado y límites**
- Unos 3 minutos de metraje para una escena que debería durar unos 45 segundos, lo que deja un trabajo de edición grande en Final Cut.
- Saltos de iluminación, tomas con aspecto "muy IA" y consistencia de personajes buena pero no perfecta.
- Jordan lo llama **desarrollo guiado por intención**: "iteras, iteras, iteras; tu intención se vuelve más clara". El arnés se refina regla a regla.

## Conceptos clave

- **Arnés agéntico**: entorno donde vive la IA y que le da skills, comandos, hooks y agentes para conducir y terminar trabajo de forma autónoma y con calidad estable.
- **Autonomía de largo horizonte**: capacidad de trabajar durante horas o días sobre un plan, manteniendo estado en artefactos y pasando contexto entre agentes.
- **Skill**: conocimiento procedimental empaquetado que se carga justo a tiempo. Solo el frontmatter (nombre, descripción, palabras clave) ocupa contexto hasta que se activa.
- **Comando**: invocación explícita que puede encadenar skills y convertirse en flujo de trabajo.
- **Hook**: control pre o post uso de herramienta que valida estándares y puede bloquear.
- **Definición de terminado / condiciones de éxito**: el estándar que el bucle tiene que alcanzar antes de salir.
- **LLM como juez**: subagente que evalúa si se alcanzó el estándar y decide si se itera o se escala al humano.
- **Context rot**: degradación por acumulación de contexto; una desalineación temprana pequeña se amplifica en conversaciones multiturno.
- **Context engineering**: encontrar el conjunto más pequeño de tokens de alta señal que maximice la probabilidad del resultado.
- **Process as a service**: entregar procesos al agente justo cuando los necesita (skills, LSP, CLI).
- **Defensa en profundidad**: capas de control (herramientas restringidas por agente, hooks, compuertas con veto) para que los errores no avancen.
- **Desarrollo guiado por intención**: refinar el arnés por iteración a medida que la intención del usuario se aclara.

## Herramientas y referencias mencionadas

- Claude Code, Gemini CLI, OpenAI Codex, Agent Zero (también un arnés)
- Plantilla *Story Systems* y *Safe Agentic Workflow* (Scott Graham), open source en GitHub
- VS Code, extensión Better Fountain, formato `.fountain`
- Venice API, Nano Banana Pro (imagen), Veo 3.1 (video), ElevenLabs (música, mencionado de pasada), Final Cut
- OpenAI Pro / deep research, NotebookLM, Perplexity
- LSP (Language Server Protocol) e IntelliSense, GitHub CLI frente al MCP de GitHub
- Marketplace de plugins de Claude Code
- n8n, Zapier
- SOC 2, HIPAA, PII (marcos de cumplimiento)
- AI Captain's School / AI Captains Academy (comunidad de Jordan Urbs)
- Ben Affleck (crítica a la escritura con IA que motiva el video)

## Referencias

- Transcripción: [[d33CK8uuji0 - socio-creativo-autonomo-a-largo-plazo|Transcripción completa]]
- Video: [Build a Long-Term Autonomous AI Creative Partner (AI Harness Engineering Guide)](https://www.youtube.com/watch?v=d33CK8uuji0) — Jordan Urbs
