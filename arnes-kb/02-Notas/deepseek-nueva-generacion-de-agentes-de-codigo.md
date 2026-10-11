---
title: "El harness de DeepSeek: un agente de código donde todo es un plugin"
tags:
  - arnes/nota
  - type/nota
  - arnes/frameworks
  - arnes/construccion
  - arnes/opinion
channel: "Cole Medin"
speaker: "Cole Medin"
videoId: "yipfaA-GXPg"
source: "https://www.youtube.com/watch?v=yipfaA-GXPg"
language: "en"
playlistOrder: 6
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "DeepSeek Just Built the Next Generation of Coding Agents"
related:
  - "[[yipfaA-GXPg - deepseek-nueva-generacion-de-agentes-de-codigo|Transcripción]]"
---

# El harness de DeepSeek: un agente de código donde todo es un plugin

Video de unos 13 minutos en el que **Cole Medin** revisa el harness de código que DeepSeek ha construido y liberado como open source, y que según él alcanzó 165.000 estrellas en GitHub en una semana. Combina opinión con demostración en pantalla: instalación, modos de trabajo, la vista de trayectoria, la delegación a Claude Code y Codex como subagentes y la creación de plugins propios.

Su tesis es que este harness representa lo contrario de Claude Code y Codex —atados a modelos concretos y cerrados a la personalización— y lleva al extremo la filosofía de Pi: **todo, incluso la propia interfaz y el bucle del agente, es un plugin** que se puede activar, desactivar, instalar o crear. Para el harness engineering es relevante como ejemplo de **agente autoextensible** con un marco explícito para que el propio agente añada o quite componentes, y por su observabilidad integrada.

## Resumen

- **Opuesto a Claude Code y Codex**: no ata a ningún modelo ni oculta el funcionamiento interno; se puede usar DeepSeek, OpenRouter o cualquier proveedor.
- **Todo es un plugin**: inyección de contexto, llamadas a herramientas, preguntas al usuario, botones de la UI y adjuntar archivos son plugins individuales que se pueden desactivar.
- **Pi llevado más lejos**: comparte la filosofía minimalista y extensible de Pi ("hay muchos agentes de código, pero este es el mío"), con una granularidad mayor.
- **Agente autoextensible**: el sistema de plugins da al agente un estándar para añadir o deshabilitar funcionalidad y adaptar su propio bucle a tu flujo y tus codebases.
- **Modo creador**: guía la creación de plugins mediante preguntas aclaratorias y los instala automáticamente.
- **Modo orquestador**: permite usar Claude Code y Codex como subagentes; esa delegación también es un plugin.
- **Vista de trayectoria**: muestra cada paso del bucle del agente y el plugin que lo originó, al estilo de LangFuse o LangSmith.
- **Poder arreglar el agente**: frente a la frustración diaria con Claude Code o Codex, aquí se puede modificar el bucle interno.
- **Trade-off**: está "bastante sin pulir" y tiene fallos en herramientas y plugins; requiere más inversión de tiempo, pero según Medin este tipo de harness será óptimo en uno o dos años.

## Contenido estructurado

### Un harness en las antípodas de Claude Code y Codex

Medin presenta el harness de DeepSeek como "el nuevo chico del barrio" y lo contrapone a los agentes cerrados:

> "Con esos agentes de código estás atado a un conjunto específico de modelos y no tienes acceso al funcionamiento interno del agente para personalizar nada."

> "Si hay algo que sé con seguridad es que el futuro de la programación con IA pasa por harnesses que sean lo más fáciles posible de extender y personalizar. Y lo que DeepSeek ha creado es la versión definitiva de eso."

Lo más parecido es **Pi**, cuyo lema original era "hay muchos agentes de código, pero este es mío": algo minimalista sobre lo que construir mediante extensiones. DeepSeek comparte esa filosofía, pero la lleva más lejos.

### Todo es un plugin

> "Literalmente, todo lo que compone la interfaz del harness y el propio harness subyacente está hecho de plugins."

- Los plugins son las unidades componibles que, cosidas, forman el sistema completo.
- Cada componente puede activarse o desactivarse.
- Existe un **marketplace** de plugins de terceros y se pueden crear plugins propios fácilmente.

Medin no recomienda saltar ya desde Claude Code, Codex o Pi, pero sí prestarle atención:

> "Toma nota: este tipo de harness va a ser óptimo para ti muy pronto."

### Software que se auto-evoluciona

El argumento: si los agentes ya construyen software de forma muy autónoma, también es realista que un agente se haga evolucionar a sí mismo. Eso hizo popular a Pi a comienzos de año. Pero para que sea viable el agente necesita un marco:

> "Necesita guía y un estándar sobre cómo añade nuevos componentes de funcionalidad y cómo los deshabilita mientras prueba cosas y cambia su propio proceso y su bucle para optimizarlo a tu flujo de trabajo y tus codebases."

El sistema de plugins de DeepSeek es "tan granular como puede ser", no solo para las herramientas nuevas sino para el funcionamiento interno del harness.

### Modo creador e instalación

- El **modo creador** guía la creación de plugins para cualquier funcionalidad que describas; el harness viene preparado para construirse sobre sí mismo.
- Instalación: desde npm o desde el código fuente. Medin le pasó la URL del repositorio a Claude Code y le pidió instalarlo y levantar la interfaz web, que corre localmente.

### Modelos y modos de trabajo

- En la pestaña de modelos se añade una API key de **DeepSeek** u **OpenRouter** para usar el modelo por defecto, DeepSeek V3.1, o cualquier otro proveedor: "no estás atado a ningún modelo específico".
- La interacción es similar a otros agentes (recuerda a Claude.ai o ChatGPT), aunque el sistema subyacente es muy distinto.
- **Modo estándar**: sesión normal con permisos configurables o en modo "YOLO".
- **Modo creador**: construir plugins para que el harness se mejore a sí mismo.
- **Modo orquestador**: invocar Claude Code y Codex como subagentes.

### Patrocinio: plataforma de IA local

El patrocinador es una plataforma open source de IA local de Tether (transcrita como "Qwak"), instalable con un único paquete npm. Medin muestra una app de escritorio para consultar una base de datos bancaria en lenguaje natural con Qwen3 4B y SQLite, funcionando en modo avión, con aprobación de la consulta antes de ejecutarse. Ofrece generación de texto, RAG, fine-tuning (LoRA, incluso en el teléfono), generación de imagen, video y voz, con licencia Apache 2.0 y sin API keys.

### Plugins en la interfaz y vista de trayectoria

> "Todo lo que ves en mi pantalla, en la interfaz del harness, es un plugin. Incluso este botón, incluso adjuntar archivos."

- En ajustes, la **lista de plugins** contiene los incluidos en el proyecto open source, y el **marketplace** los de terceros y los propios.
- Cada conversación tiene una **vista de trayectoria**:

> "Nunca había visto esto en un agente de código. Parece algo de una plataforma de observabilidad de IA como LangFuse o LangSmith."

  Muestra cada acción del bucle del agente (que también es personalizable) y su origen: por ejemplo, una inyección de contexto proviene del plugin de system prompt incluido, y se puede ir a la fuente de cada herramienta. Para Medin esto aporta **auditabilidad** y un acceso al funcionamiento interno que "ni siquiera Pi" ofrece.

### Delegación a subagentes Claude Code y Codex

Basta con pedir "quiero usar el subagente de Claude Code" para delegar trabajo; el agente hace la delegación con una llamada a herramienta, razona sobre lo que vuelve y continúa. Lo mismo con Codex ("haz que Codex escriba esta función en Python"). Así se pueden integrar distintos agentes de código en flujos mayores lanzados desde este harness. Ambas delegaciones son plugins (`subagent Codex`, `subagent Claude Code`).

### Plugins de terceros y propios

- **ModLens**: DeepSeek no procesa imágenes, así que este plugin del marketplace actúa como "puente de visión para modelos solo de texto", llamando a otro modelo que describe la imagen.
- **repo stats**: plugin creado por Medin en modo creador para obtener las estrellas de cualquier repositorio de GitHub. El modo creador le hizo preguntas aclaratorias, construyó el plugin con él y lo instaló automáticamente.

### Arreglar el agente desde dentro

> "Siento que al menos una vez al día tienes esa conversación frustrante en la que el LLM es demasiado verboso, o hay pequeños fallos con los subagentes o los flujos, o se va por una tangente rara, y piensas: ojalá pudiera arreglarte. No puedes arreglar Claude Code o Codex. Puedes intentarlo con reglas, pero nunca es perfecto."

Con el harness de DeepSeek se pueden modificar o crear plugins que cambien incluso el bucle interno. Es una mayor inversión de tiempo, pero "paga dividendos" hasta que el agente y el equipo funcionan "como una máquina bien engrasada".

### ¿Vale la pena tanto minimalismo?

- Medin cree que sí, porque construir componentes es cada vez más fácil y el harness "se entiende a sí mismo", así que es realmente autoextensible.
- Entiende que, por ahora, alguien prefiera algo listo para usar como Claude, o algo más refinado como Pi.
- Predicción: en uno o dos años no tendrá sentido no usar algo tan personalizado como sea posible; quizá no sea el harness de DeepSeek, "pero será algo parecido".
- Advierte que está **sin pulir**: hay muchos fallos en llamadas a herramientas y plugins, incluso en los incluidos.

## Conceptos clave

- **Harness basado en plugins**: arquitectura donde cada función, incluida la UI y el bucle del agente, es una unidad componible activable o desactivable.
- **Agente autoextensible**: agente capaz de añadir, modificar o deshabilitar sus propios componentes siguiendo un estándar del harness.
- **Modo creador**: modo guiado para que el agente construya e instale plugins nuevos.
- **Modo orquestador**: modo que delega trabajo en otros agentes de código como subagentes.
- **Vista de trayectoria**: traza de cada paso del bucle del agente con el plugin que lo originó; aporta auditabilidad.
- **Agnosticismo de modelo**: posibilidad de usar cualquier proveedor o modelo sin quedar atado a un ecosistema.
- **Vision bridge**: plugin que delega el procesamiento de imágenes en otro modelo para un modelo solo de texto.

## Herramientas y referencias mencionadas

- Harness de código open source de DeepSeek; modelo DeepSeek V3.1
- Pi, Claude Code, Codex, Claude.ai, ChatGPT
- OpenRouter, npm
- LangFuse, LangSmith (como referencia de observabilidad)
- Plugins: ModLens, repo stats, subagent Claude Code, subagent Codex, system prompt
- Patrocinador: plataforma de IA local de Tether ("Qwak"), Qwen3 4B, SQLite, Ollama y LM Studio (comparación)

## Referencias

- Transcripción: [[yipfaA-GXPg - deepseek-nueva-generacion-de-agentes-de-codigo|Transcripción completa]]
- Video: [DeepSeek Just Built the Next Generation of Coding Agents](https://www.youtube.com/watch?v=yipfaA-GXPg) — Cole Medin
