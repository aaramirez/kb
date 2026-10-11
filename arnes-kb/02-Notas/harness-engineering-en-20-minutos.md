---
title: "Harness engineering en 20 minutos: las capas de ChatGPT y los cinco componentes"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/construccion
channel: "Aishwarya Srinivasan"
speaker: "Aishwarya Srinivasan"
videoId: "bsmUh5bTNZ4"
source: "https://www.youtube.com/watch?v=bsmUh5bTNZ4"
language: "en"
playlistOrder: 28
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harness Engineering Explained in 20 Mins!"
related:
  - "[[bsmUh5bTNZ4 - harness-engineering-en-20-minutos|Transcripción]]"
---

# Harness engineering en 20 minutos: las capas de ChatGPT y los cinco componentes

Aishwarya Srinivasan presenta un explicador de unos 20 minutos sobre harness engineering. Tiene más de 10 años en machine learning, un máster en ciencia de datos por Columbia y fue científica de datos en Microsoft, Google e IBM. También dirigió developer relations en Fireworks AI y es cofundadora de Gen Academy. El video tiene tres partes: qué es un harness y por qué un modelo solo está limitado, un análisis por capas del harness de la app de escritorio de ChatGPT (Chat, Work y Codex), y los cinco componentes de todo harness de producción con una hoja de ruta de cinco pasos para construir uno.

Para el harness engineering es una buena síntesis introductoria. Sitúa la disciplina frente al prompt engineering y el context engineering, cuenta el origen del término (Mitchell Hashimoto, el informe de OpenAI sobre Codex y el artículo de Anthropic) y propone una taxonomía de componentes con pasos accionables.

> La transcripción se reconstruyó al inglés desde subtítulos automáticos transliterados (los metadatos del video indicaban otro idioma).

## Resumen

- **El modelo es la parte fácil**: los equipos que despliegan los sistemas de IA más impresionantes compiten en el harness, no en el modelo.
- **Un LLM aislado es una función pura**: un conjunto congelado de pesos que transforma tokens de entrada en tokens de salida, sin estado persistente, sin ejecutar código, sin leer archivos y sin verificar lo que afirma.
- **Harness = la fontanería alrededor del modelo**: herramientas y sus esquemas, contexto inyectado, chequeos de salida, límites de permisos y logging.
- **Tres capas de disciplina**: el prompt engineering es lo que le dices al caballo, el context engineering es lo que le dejas ver y el harness engineering es todo lo demás que lo mantiene en la pista.
- **La regla de Hashimoto**: cada vez que el agente comete un error, se modifica el entorno para que no pueda repetirlo. Es un arreglo permanente, no un prompt mejor.
- **Mismo modelo, tres productos**: en la app de ChatGPT, Chat, Work y Codex son el mismo modelo con harnesses de peso creciente.
- **Cinco componentes**: sistema de registro, herramientas, bucles de feedback y verificación, guardrails y permisos, y observabilidad y memoria.
- **Hoja de ruta de cinco pasos**: crear el archivo de instrucciones, montar un bucle de verificación, estudiar un harness existente y extenderlo con MCP, leer los fallos y construir un harness completo para un flujo acotado.
- **La hoja de ruta está en tus logs de fallos**: cada ejecución fallida indica qué pieza del harness construir a continuación.
- **El harness es el foso** (*moat*): el modelo se vuelve un commodity, y se consigue un mejor agente con un mejor harness, no con un mejor modelo.

## Contenido estructurado

### Por qué importa: el caso del equipo de OpenAI

Según el video, un equipo de 3 personas de OpenAI empezó con un repositorio vacío a finales de agosto de 2025. Durante cinco meses no escribieron código ellos mismos y terminaron con un millón de líneas de código de producción y 1.500 pull requests fusionados, todo generado por Codex.

> "Lo que obsesionaba a ese equipo no era el prompt, y ni siquiera era el modelo. Era el harness."

El harness engineering se apoya directamente en el *loop engineering* y el *context engineering*, temas de videos anteriores de la autora.

### La analogía del caballo y los límites de un LLM

El término viene del arnés (*harness*) de un caballo. El caballo es potente y rápido, pero la potencia bruta no es trabajo útil. Sin arnés no puede tirar de un carro ni arar un campo. El arnés convierte la potencia bruta en trabajo dirigido y útil. **El modelo es el caballo, y el harness es todo lo que se construye alrededor.**

Un LLM por sí solo es un objeto mucho más limitado de lo que se cree:
- Es un conjunto congelado de pesos que mapea tokens de entrada a tokens de salida, y esa es toda su interfaz.
- No tiene estado persistente: todo desaparece al cerrarse la ventana de contexto.
- No puede ejecutar código, leer un archivo del disco ni hacer una llamada a una API.
- No puede verificar ni una sola afirmación que produce.

> "Todo lo que experimentas como una IA haciendo trabajo útil viene de la capa que envuelve al modelo. Y esa capa es el harness."

Concretamente, el harness incluye:
- las herramientas que el modelo puede invocar y los esquemas para llamarlas;
- la información que se inyecta en el contexto antes de cada ejecución;
- los chequeos que se ejecutan sobre las salidas;
- los límites de permisos sobre lo que puede tocar;
- el logging que registra lo que realmente hizo.

**Harness engineering** es diseñar ese entorno de ejecución de forma deliberada: qué herramientas recibe el agente, de dónde viene su información, cómo valida su propio trabajo y cuándo se detiene y devuelve el control al humano.

### Prompt, contexto y harness como tres capas

| Disciplina | Qué optimiza | Metáfora |
|---|---|---|
| Prompt engineering | Un intercambio aislado: una instrucción, una salida | Lo que le dices al caballo |
| Context engineering | Lo que el modelo puede ver: qué se recupera y qué cabe en la ventana | Lo que le dejas ver al caballo |
| Harness engineering | Lo que pasa cuando un agente corre autónomo durante horas y toma cientos de decisiones sin supervisión | Todo lo demás que mantiene al caballo en la pista |

### Origen del término

- **Febrero de 2026**: Mitchell Hashimoto, cofundador de HashiCorp y creador de Terraform, publica un post sobre su camino de adopción de IA y describe una etapa llamada "engineering the harness". Su regla es que cada vez que un agente se equivoca, se modifica el entorno para que no pueda repetir ese error.
- **Seis días después**, OpenAI publica el informe sobre el millón de líneas escritas con Codex, y Anthropic responde con su artículo sobre harnesses eficaces para agentes de larga duración.
- En pocas semanas el término estaba "en todas partes".

¿Es solo calidad del modelo disfrazada? Hay un experimento limpio: un ingeniero tomó 15 LLM distintos y mejoró el rendimiento en código de todos ellos en una sola tarde sin tocar ningún modelo. Solo cambió el harness: "los mismos pesos, mejor entorno y resultados mediblemente mejores".

### Pelando la cebolla: el harness dentro de la app de ChatGPT

En julio de 2026, OpenAI fusionó la app de Codex y la de ChatGPT en una sola aplicación de escritorio con tres experiencias: Chat, Work y Codex. El lanzamiento principal de ese día no fue un modelo nuevo sino el harness. La misma familia de modelos se comporta como tres productos completamente distintos según el entorno en el que corre. La autora aclara que el video no está patrocinado por OpenAI.

**Capa 1: Chat (harness ligero)**. Parece hablar directamente con un modelo, pero incluso aquí hay un harness fino:
- un system prompt que moldea el comportamiento antes de que escribas;
- herramientas invocables, como búsqueda web cuando hace falta información fresca;
- un sistema de memoria que persiste datos sobre tus sesiones;
- un entorno Python en sandbox para analizar archivos;
- generación de imágenes integrada;
- filtros de seguridad sobre la entrada y la salida.

Es un harness ligero ajustado a conversaciones turno a turno.

**Capa 2: Work (harness más pesado)**. Es la misma app con un interruptor, y ahora hablas con un agente que reúne contexto de tus archivos y aplicaciones conectadas, descompone un objetivo en pasos y trabaja durante horas para producir documentos, hojas de cálculo y presentaciones terminados. La capacidad del modelo no cambió, pero el harness se hizo más pesado:
- un bucle de planificación;
- conectores a tus herramientas reales y la capacidad de actuar sobre ellas;
- puntos de aprobación donde se detiene antes de hacer algo con consecuencias;
- tareas programadas que siguen corriendo cuando te vas.

Esos puntos de aprobación son un guardrail y un componente del harness, colocados por un ingeniero que decidió que el agente debía detenerse exactamente ahí.

**Capa 3: Codex (el harness más pesado)**. Es la más instructiva para perfiles técnicos:
- un entorno de ejecución en sandbox o acceso acotado a una carpeta local donde concedes explícitamente lo que puede tocar;
- antes de escribir una línea, lee el `AGENTS.md` de la raíz del repositorio, que recoge las instrucciones y convenciones acumuladas del equipo;
- una terminal para ejecutar el build y la suite de tests y observar sus propios fallos;
- diffs inline para tu revisión, y la capacidad de revisar pull requests.

> "Cada capacidad está acotada, registrada y envuelta en un bucle de feedback. Por eso la misma inteligencia que charla en la pestaña Chat puede refactorizar de forma autónoma una base de código en la pestaña Codex. Los pesos no cambiaron. Cambiaron el entorno y el harness."

Cuando alguien pregunta qué IA es la mejor, en realidad está preguntando por el caballo cuando debería preguntar por el arnés.

(El video incluye un segmento patrocinado por Granola, un bloc de notas con IA para reuniones, que no aporta al tema.)

### Implicación profesional

Quien usa Chat, Work, Codex o Claude Code es un **cliente de harness**: otra persona diseñó ese entorno. El harness engineering consiste en aprender a construir esa capa para tus propios agentes y flujos de trabajo.

### Los cinco componentes de un harness de producción

Casi todo sistema de producción combina estos cinco, y se nota cuando falta uno.

1. **Sistema de registro** (*system of record*): archivos de instrucciones como `CLAUDE.md` o `AGENTS.md` en la raíz del proyecto. Son markdown plano que el agente lee antes de trabajar: estructura del proyecto, convenciones, comandos de build y decisiones ya tomadas por el equipo. Al equipo de OpenAI, sin respuestas a preguntas como "qué abstracciones debo usar", el agente le adivinaba y se equivocaba una y otra vez. Su conclusión:
   > "Si el conocimiento vive en hilos de Slack o en documentos de Google en lugar del repositorio, el agente no puede verlo, así que es como si no existiera. Todo lo que el agente necesita tiene que vivir donde el agente trabaja."
2. **Herramientas**: lo que el agente puede hacer, como ejecutar comandos de shell, editar archivos, buscar en la web o consultar bases de datos. Hay dos extremos frecuentes: acceso a todo, que vuelve el comportamiento impredecible, o acceso a casi nada, que hace que el agente hable pero no actúe. Un buen diseño es un conjunto pequeño y deliberado en el que se puede justificar por qué el agente necesita cada herramienta.
3. **Bucles de feedback y verificación**: "la parte que más gente se salta". El agente necesita una forma de comprobar su trabajo sin preguntarte. En código esa maquinaria ya existe: un linter, un type checker o una suite de tests real que se ejecuta automáticamente tras cada cambio, para que el agente vea sus fallos y los corrija antes de que tú mires.
4. **Guardrails y permisos**: lo que el agente tiene prohibido explícitamente, qué partes son de solo lectura, qué comandos requieren aprobación y en qué punto se detiene y pregunta en lugar de adivinar. Los avisos de aprobación de ChatGPT Work son este componente a escala de OpenAI. Toda herramienta seria de agentes expone estos ajustes y casi nadie los toca, así que hay que configurarlos deliberadamente.
5. **Observabilidad y memoria**: la observabilidad es el registro de todo lo que hizo el agente (cada llamada a herramienta, cada decisión, cada error). La memoria lleva estado útil entre sesiones, porque el modelo no puede llevar nada. Cuando una ejecución sale mal, "y saldrá mal", el registro es la única forma de reconstruir lo ocurrido sin adivinar.

### Hoja de ruta: cómo construir uno

**Paso 1: crear tu sistema de registro esta semana.**
- Codex (CLI o pestaña de la app de escritorio): `AGENTS.md` en la raíz del repositorio, que se carga automáticamente.
- Claude Code: `CLAUDE.md`. El comando `/init` genera un punto de partida.
- Cursor: también lee `AGENTS.md`.
- Escribe cuatro cosas: cómo está estructurado el proyecto, cómo ejecutarlo, cómo testearlo y tus cinco convenciones principales. Que ocupe menos de una página.
- Adopta la disciplina de Hashimoto como regla personal: cuando el agente comete el mismo error dos veces, no se lo explicas en el chat, sino que escribes el arreglo en el archivo de forma permanente. Hashimoto ha dicho que casi cada línea del `AGENTS.md` de su proyecto vino de un fallo pasado del agente, y que una vez añadida la regla el error prácticamente no se repite.
  > "Ese hábito es harness engineering en miniatura, y se acumula."

**Paso 2: construir tu bucle de verificación.**
- En Python, un linter como Ruff y un puñado de tests reales. En JavaScript, la misma idea con las herramientas estándar.
- Configura el agente para ejecutar esos chequeos tras cada cambio. En Claude Code se conectan con **hooks** para que se disparen solos, sin depender de que el agente lo recuerde.
- Si el agente no escribe código, el principio sigue valiendo: define cómo es una salida correcta, escribe un script o una checklist que la valide y haz que ese chequeo forme parte de cada ejecución.
- Objetivo: que el agente descubra sus errores antes que tú.

**Paso 3: ser deliberado con las herramientas.**
- Antes de construir algo a medida, pasa una semana trabajando dentro de un harness serio existente (Claude Code o Codex) y estudia cómo se comporta: cuándo pide permiso, cómo usa tu archivo de instrucciones, cómo ejecuta tus tests. "Aprendes más observando un harness bien construido que con cualquier tutorial de YouTube, incluido este."
- Luego extiéndelo: conecta el agente a un sistema real que uses a diario mediante MCP (Model Context Protocol).
- Para cada conexión, hazte **la pregunta del harness**: "¿Qué es lo peor que podría hacer el agente con este acceso, y he hecho algo para impedirlo?"

**Paso 4: leer tus fallos.**
- Activa el logging que ofrezca tu herramienta y, cuando una ejecución salga mal, lee paso a paso lo que hizo el agente. Es tedioso, pero según la autora es "el hábito de mayor apalancamiento de todo el video".
- Cada ejecución fallida dice qué pieza construir: una instrucción que falta, un chequeo que falta o una herramienta a la que no debería haber tenido acceso.
  > "La hoja de ruta de tu harness está escrita en tus logs de fallos."

**Paso 5: construir un harness completo para un flujo acotado** (el "proyecto de graduación").
- Elige una tarea repetitiva y bien definida que hagas cada semana.
- Construye el bucle completo: archivo de instrucciones, conjunto pequeño de herramientas, verificación automatizada, permisos claros y logging.
- Debe ejecutar un flujo de punta a punta de forma fiable sin que tengas que vigilarlo.

### Conclusión: el harness como ventaja competitiva

En 2026 o 2027 el modelo se vuelve cada vez más un commodity del stack. Todos tienen acceso a una inteligencia de frontera parecida, sobre todo con los modelos abiertos (menciona Kimi K3). Lo que de verdad compite es el entorno que construyes alrededor: archivos de instrucciones, bucles de feedback, permisos y observabilidad.

> "No consigues un mejor agente encontrando un mejor modelo. Consigues un mejor agente construyéndolo con un mejor harness."

Al final, todo se reduce a ingeniería de software y a la fontanería alrededor de un modelo. (El cierre promociona una masterclass gratuita y la certificación de seis semanas *Mastering Agentic AI* de Gen Academy.)

## Conceptos clave

- **Harness**: la capa que envuelve al modelo (herramientas, contexto, chequeos, permisos, logging) y convierte su potencia bruta en trabajo útil.
- **Harness engineering**: diseñar deliberadamente el entorno de ejecución del agente: herramientas, fuentes de información, autovalidación y momentos de devolver el control al humano.
- **Regla de Hashimoto**: ante cada error del agente, modificar el entorno para que no pueda repetirlo.
- **Sistema de registro**: archivo de instrucciones versionado en el repo (`AGENTS.md`, `CLAUDE.md`) donde vive todo lo que el agente necesita saber.
- **Bucle de verificación**: chequeos automáticos (linter, tipos, tests, scripts de validación) que el agente ejecuta tras cada cambio.
- **Guardrails y permisos**: límites explícitos sobre lo que el agente puede tocar, lo que requiere aprobación y cuándo debe preguntar.
- **Observabilidad**: registro completo de llamadas a herramientas, decisiones y errores para reconstruir ejecuciones fallidas.
- **Cliente de harness**: quien usa un harness diseñado por otros (ChatGPT, Codex, Claude Code) en lugar de construir el suyo.
- **La pregunta del harness**: qué es lo peor que podría hacer el agente con un acceso dado y qué se ha hecho para impedirlo.

## Herramientas y referencias mencionadas

- ChatGPT desktop (Chat, Work, Codex), Codex CLI, Claude Code (`/init`, hooks), Cursor
- `AGENTS.md`, `CLAUDE.md`, Ruff, MCP (Model Context Protocol)
- Mitchell Hashimoto (HashiCorp, Terraform) y su post sobre adopción de IA
- OpenAI, informe sobre el millón de líneas de código escritas con Codex
- Anthropic, artículo sobre harnesses eficaces para agentes de larga duración
- Kimi K3 (modelo abierto)
- Granola (patrocinador), Gen Academy, Fireworks AI

## Referencias

- Transcripción: [[bsmUh5bTNZ4 - harness-engineering-en-20-minutos|Transcripción completa]]
- Video: [Harness Engineering Explained in 20 Mins!](https://www.youtube.com/watch?v=bsmUh5bTNZ4) — Aishwarya Srinivasan
