---
title: "Meta-harness: Omni de Databricks para ejecutar todos tus agentes bajo una sola capa"
tags:
  - arnes/nota
  - type/nota
  - arnes/orquestacion-multiagente
  - arnes/herramientas-y-sandbox
  - arnes/frameworks
channel: "Prompt Engineering"
speaker: "Prompt Engineering"
videoId: "141biWM1mlE"
source: "https://www.youtube.com/watch?v=141biWM1mlE"
language: "en"
playlistOrder: 44
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "This Meta-Harness Changes How You Run AI Agents"
related:
  - "[[141biWM1mlE - meta-harness-para-ejecutar-agentes|Transcripción]]"
---

# Meta-harness: Omni de Databricks para ejecutar todos tus agentes bajo una sola capa

El canal Prompt Engineering presenta, en un video patrocinado por Databricks (que le dio acceso anticipado), **Omni**, un *meta-harness* de código abierto (Apache 2.0) que se coloca por encima de harnesses como Claude Code, Codex o Pi para ejecutarlos bajo un mismo techo. El video combina explicación conceptual (qué es un harness, por qué los agentes están aislados, qué es un meta-harness) con una demo local de orquestación multiagente.

Su relevancia para el harness engineering está en el cambio de nivel: si un harness envuelve a un modelo, un meta-harness envuelve a los harnesses. Eso permite sesiones compartidas, revisión cruzada entre proveedores, políticas aplicadas en cada llamada a herramienta, sandbox con gestión de secretos y colaboración en tiempo real, evitando el lock-in en una capa concreta.

## Resumen

- **Agente = modelo + harness**: el modelo solo predice texto; el harness (bucle, herramientas, memoria, UI) es lo que hace el trabajo.
- **Agentes aislados**: cada harness tiene su propia memoria, UI y herramientas, sin sesión ni historial compartidos; el usuario hace de "pegamento" con copiar y pegar.
- **Lock-in**: si construyes sobre un harness, adoptar un modelo o SDK mejor implica rehacer la integración.
- **Interfaz común**: todos los harnesses reciben mensajes y archivos y devuelven texto y llamadas a herramientas, lo que permite una capa superior uniforme.
- **Omni**: meta-harness open source de Databricks con tres piezas (agentes, runner con sandbox, servidor con Postgres) y una sola sesión accesible desde terminal, web, app nativa, móvil o API REST.
- **Composición**: un agente es un YAML corto (prompt, herramientas, harness); cambiar de Claude a Codex es una línea.
- **Polly**: agente "tech lead" que planifica, reparte trabajo en paralelo en worktrees y envía cada diff a un revisor de otro proveedor.
- **Debbie**: compañero de brainstorming con dos modelos (Claude y GPT) que pueden debatir con `/debate` hasta converger.
- **Control**: cada acción pasa por un gate (permitir, denegar o preguntar) aplicado en cada llamada a herramienta, con reglas que pueden depender del historial.
- **Seguridad y colaboración**: sandbox del SO, secretos inyectados por un proxy de aprobación y sesiones compartibles por enlace o bifurcables.

## Contenido estructurado

### Qué es un harness y el problema de los agentes aislados

> "Un agente hoy es básicamente el modelo más el harness. Un modelo por sí solo solo predice texto. Un harness es todo lo que lo envuelve para que el trabajo se haga."

Un harness suele incluir bucle de agente, herramientas, memorias y una UI. Codex, Claude Code y Pi son harnesses con ideas similares pero implementaciones y capacidades muy diferentes.

El problema tiene dos caras:

- **Como usuario**: usamos varios agentes a la vez, pero ninguno ve a los demás. "Eres tú quien los conecta. Copiar, pegar y repetir."
- **Como constructor**: si construyes agentes sobre uno de ellos, cuando sale un modelo mejor, un SDK nuevo o un harness más potente, adoptarlo obliga a "replomar" todo y el coste sube. "Quedas atado a la capa en la que empezaste."

### La idea del meta-harness

Por dentro los harnesses son distintos, pero por fuera "hablan el mismo idioma": entran mensajes y archivos, salen texto y llamadas a herramientas. Como la interfaz es idéntica, se puede construir una capa por encima de todos ellos.

> "Un harness se sienta sobre un modelo y esta capa se sienta sobre el harness. Podemos llamarla meta-harness."

Cada harness pasa a ser un **trabajador intercambiable**.

### Omni: arquitectura

Databricks lo publicó como open source (Apache 2.0), lo usa internamente y se instala con un comando. Tres piezas:

1. **Agentes** (izquierda): propietarios como Claude Code o Codex, o agentes propios definidos en YAML.
2. **Runner**: envuelve cualquiera de ellos en una **sesión de sandbox uniforme**.
3. **Servidor**: añade búsqueda en el historial, políticas, MCPs, skills y artefactos. Usa Postgres y se despliega en Docker, Railway, Fly o un sandbox en la nube.

La sesión vive en la capa, no en la herramienta: hay **un único objeto de sesión** (archivos e historial del agente) y cada dispositivo es solo una ventana a él. Se puede empezar en la terminal, continuar en el navegador y retomarlo en el móvil.

### Primer desbloqueo: composición

- Un agente es un YAML corto con un prompt, algunas herramientas y un harness.
- Cambiar de Claude a Codex es un cambio de una línea; se pueden ejecutar varios a la vez como equipo.
- Los agentes pueden escribir agentes: describes uno y genera el archivo.

**Polly** (agente incluido):
- No escribe código; actúa como *tech lead*.
- Planifica y reparte el trabajo entre agentes de código en paralelo, cada uno en su propio git worktree.
- Envía cada diff a un **revisor de un proveedor distinto** al que escribió el código (lo que escribe Claude lo revisa Codex y viceversa).
- Cuando el resultado te convence, haces merge.

> "No quieres que el mismo agente que escribió el código lo revise, porque tiene sesgos internos."

El presentador destaca la importancia del patrón **planificador–ejecutor–revisor/verificador**, y que la revisión cruzada entre proveedores solo es posible gracias a esta capa.

**Debbie** (agente incluido):
- Compañero de brainstorming "con dos cabezas": Claude y GPT (posiblemente se puede añadir otro).
- Cada pregunta va a ambos y se obtienen dos respuestas lado a lado.
- Con `/debate` se critican mutuamente durante varias rondas y luego convergen. Útil para decisiones de arquitectura o para el flujo de planificar con un modelo e implementar con otro.

### Segundo desbloqueo: control

- Cada acción pasa por un **gate**: permitir, denegar o preguntar antes.
- No es "una petición educada en un prompt": se **aplica en cada llamada a herramienta**.
- Como vive en la capa, las reglas pueden **depender del historial**.
- Casos: topes de coste, puntuaciones de riesgo, ámbitos de repositorio y archivos, escaneos de PII.

> "Esto es importante especialmente si no quieres ejecuciones YOLO y quieres asegurarte de que los agentes sigan políticas específicas."

**Sandbox del SO**: cada agente corre encerrado y solo puede tocar los archivos y la red permitidos. Además, los agentes **no pueden leer directamente las claves secretas**: la capa las inyecta a la salida a través de un **proxy de aprobación**, de modo que incluso en modo YOLO es mucho más seguro que darle acceso directo al agente.

### Tercer desbloqueo: colaboración

- Con una sesión en vivo, puedes compartir un enlace y un compañero puede observar el trabajo o chatear con él en tiempo real (co-conducción).
- Los mensajes del compañero se ejecutan en tu máquina.
- También puede bifurcar (*fork*) la conversación y llevarla por su cuenta.

### Demo: instalación y configuración

- Se instala con un comando y se configura en local.
- El presentador usa su suscripción de Claude Code, la de Codex y Pi con Ollama; también se pueden usar API keys.
- Se puede elegir el harness de código (Claude Code, Codex) o un agente incluido como Polly.

> "Omni no es un harness de código. Te permite interactuar con varios harnesses directamente."

Polly descompone el objetivo en subtareas y delega cada una a un subagente que corre en su propio harness y worktree. Al iniciar una sesión se abre una UI web junto a la terminal (también hay app de escritorio), todas compartiendo la misma sesión.

### Demo: tarea orquestada

Tarea: crear una web de una sola página que use el modelo Gemini "Nano Banana" para generar imágenes a partir de texto, con un campo para que el usuario introduzca su API key.

1. Omni no detectaba las CLIs de Pi y Claude Code; se le pidió que las configurara y lo hizo solo.
2. La misma conversación aparece en la terminal y en la web.
3. Claude Code implementa; Codex revisa. Corre de forma autónoma y "te despierta cuando termina".
4. Hay visibilidad de lo que hace cada agente; probó la app automáticamente.
5. La verificación independiente con Codex recibe **solo los diffs**, ya que cada harness trabaja en su propio worktree.
6. Se puede hablar directamente con un agente concreto (preguntarle algo a Claude Code mientras Codex revisa).
7. Otra sesión de navegador muestra el mismo proceso: desplegado en la nube o en red local, los compañeros pueden interactuar con la misma sesión.

Resultado: la revisión de Codex encontró problemas, se devolvieron, Claude Code reimplementó y se volvió a probar. "Este es el tipo de bucle que quieres." Se puede escribir esta orquestación a mano, pero Omni la incluye con Polly. La app final generó "una estrella de mar con gafas de sol saltando de felicidad".

### Costos y políticas contextuales

- Se ve el **coste de la sesión** con desglose de tokens consumidos por cada modelo.
- **Políticas contextuales**: limitar llamadas a herramientas, denegar peticiones con PII, controlar acceso a herramientas o conectores.
- Recomendación del presentador: fijar **presupuestos de coste** por sesión o por usuario y día (por ejemplo, 10 dólares), con umbrales de aviso suave.

> "Esto va a ser cada vez más importante para las organizaciones."

### Conclusión

El presentador considera que esta capa de meta-harness u orquestación será crítica a medida que haya harnesses distintos diseñados para tareas concretas. Advierte que es un proyecto en fase temprana que puede requerir ajustes, pero que al ser open source probablemente crecerá rápido.

## Conceptos clave

- **Harness**: todo lo que envuelve al modelo para que haga trabajo: bucle de agente, herramientas, memoria y UI.
- **Meta-harness**: capa que se sitúa sobre varios harnesses aprovechando su interfaz común (mensajes y archivos de entrada; texto y llamadas a herramientas de salida) y los trata como trabajadores intercambiables.
- **Sesión en la capa**: un único objeto de sesión (archivos e historial) independiente del harness y del dispositivo.
- **Revisión cruzada entre proveedores**: el código escrito por el modelo de un proveedor lo revisa el de otro para evitar sesgos de autorrevisión.
- **Patrón planificador–ejecutor–revisor**: separar planificación, implementación y verificación en agentes distintos.
- **Gate de políticas**: control obligatorio (permitir, denegar, preguntar) en cada llamada a herramienta, con reglas que pueden depender del historial.
- **Proxy de aprobación de secretos**: mecanismo por el que el agente nunca ve las claves; la capa las inyecta en las peticiones salientes.
- **Lock-in de capa**: dependencia del harness sobre el que se construyó, que encarece adoptar modelos o SDKs mejores.

## Herramientas y referencias mencionadas

- Omni (meta-harness open source de Databricks, Apache 2.0) y sus agentes Polly y Debbie
- Databricks (patrocinador del video)
- Claude Code, Codex y Pi (harnesses)
- Ollama (para ejecutar Pi con modelos locales)
- Claude y GPT (modelos en Debbie)
- Postgres, Docker, Railway, Fly
- MCP, skills, git worktrees
- Gemini "Nano Banana" y Google AI Studio (en la app de la demo)

## Referencias

- Transcripción: [[141biWM1mlE - meta-harness-para-ejecutar-agentes|Transcripción completa]]
- Video: [This Meta-Harness Changes How You Run AI Agents](https://www.youtube.com/watch?v=141biWM1mlE) — Prompt Engineering
