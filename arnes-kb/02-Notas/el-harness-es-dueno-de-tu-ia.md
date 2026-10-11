---
title: "No eres dueño de tu IA, lo es el harness: capas, funciones y cómo elegir uno"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/contexto-y-memoria
  - arnes/opinion
channel: "Manolo Remiddi"
speaker: "Manolo Remiddi"
videoId: "k8jYOcQUB_A"
source: "https://www.youtube.com/watch?v=k8jYOcQUB_A"
language: "en"
playlistOrder: 17
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "You Don't Own Your AI. The Harness Does."
related:
  - "[[k8jYOcQUB_A - el-harness-es-dueno-de-tu-ia|Transcripción]]"
---

# No eres dueño de tu IA, lo es el harness: capas, funciones y cómo elegir uno

Manolo Remiddi presenta, en un video de unos 20 minutos que combina explicación con diapositivas y demostración en pantalla, una visión del agente de IA en la que el modelo es solo el motor: lo que lo conduce es el **harness**, "la capa que decide lo que tu IA puede hacer realmente". Describe las capas del stack agéntico, los trabajos que hace un harness, los tipos de interfaz, los criterios para elegir un harness y, al final, muestra su propio proyecto open source, el **Augmentor Agent**, construido sobre un harness con arquitectura de plugins.

Para el harness engineering es una nota de fundamentos: ofrece una taxonomía clara (pesos, motor de inferencia, servicio/API, harness, UI), enumera las responsabilidades del harness (loops, tool calling, contexto, permisos, memoria, hooks y telemetría) y plantea la soberanía del usuario como criterio de diseño: licencia, agnosticismo de modelo, transparencia, control de la compactación, sandbox y costo de salida.

## Resumen

- **El modelo es el motor, el harness conduce**: la obsesión por el modelo ignora el resto del "coche" que hace falta para manejar.
- **Cinco capas**: pesos (modelo), motor de inferencia, servicio/API, harness y UI.
- **Trabajos del harness**: loops del agente, declaración y uso de herramientas, gestión de contexto, permisos, memoria de largo plazo, hooks y telemetría.
- **La compactación degrada al agente**: resumir es un proceso con pérdida; resúmenes de resúmenes hacen que la IA "se vuelva más tonta".
- **Fuente única de verdad externa**: documentos o software fuera de la compactación a los que el agente puede volver; agrandar la ventana es más lento y caro.
- **TUI vs. GUI son decisiones de diseño**, no limitaciones.
- **Ser solo cliente es inestable**: sin soberanía sobre los datos, con modelos y arquitectura que cambian sin aviso y precios que pueden subir drásticamente.
- **Preguntas para elegir harness**: licencia, si es agnóstico de modelo, transparencia, control de la compactación, control de permisos y sandbox, costo de salida.
- **Construir la capa que sí podemos poseer**: no podemos construir los modelos, pero sí el resto; al cambiar a mejores modelos, el sistema propio mejora.

## Contenido estructurado

### El modelo no lo es todo

> "La mayoría está obsesionada con el modelo. Parece que el modelo lo es todo, pero en realidad es solo una parte de tu agente. Es como el motor de un coche, pero necesitas el coche entero si quieres conducir."

> "El harness es la capa que decide lo que tu IA puede hacer realmente."

### Las cinco capas para ejecutar IA agéntica

1. **Pesos**: el modelo (GPT, Claude, Gemini, Qwen, DeepSeek…).
2. **Motor de inferencia**: donde se ejecuta el modelo (llama.cpp, vLLM, Ollama, MLX).
3. **Servicio y API**: si el modelo corre en la nube, servicios como OpenRouter dan acceso a distintos modelos.
4. **Harness**: gestiona los loops del agente, las herramientas, el contexto, los permisos y la memoria.
5. **UI**: donde el humano interactúa (terminal, app de escritorio, web, móvil).

### Los trabajos del harness

- **Loops**: al recibir una tarea se crea un bucle y el agente no se detiene hasta completarla.
- **Tool calling**: el harness gestiona la declaración de herramientas y permite usar navegador, terminal, el computador, etc.
- **Gestión de contexto**: "probablemente una de las partes más importantes que aún tenemos que resolver". La ventana de contexto es la memoria de trabajo; la IA solo trabaja bien con el contexto correcto, que hay que curar.
- **Permisos**: qué puede hacer la IA, si trabaja en un sandbox, si necesita aprobación para escribir en disco o modificar documentos.
- **Memoria**: la memoria de largo plazo (sesiones, datos, instrucciones de proyecto, skills), como una base de datos. Algunos harnesses usan varios sistemas: uno para la relación con el usuario y otro, distinto, para los proyectos.
- **Hooks y telemetría**: checkpoints, conteo de tokens, costos.

Lo que marca la diferencia es **cómo** se gestionan estos elementos, **qué tan transparente** es el proceso y **cuánto se pueden personalizar**.

### El problema de la compactación

- Más datos de calidad producen mejores resultados, pero la ventana es limitada.
- Al llenarse, el sistema **compacta** creando resúmenes, y resumir es un proceso con pérdida.
- Tras compactar, el agente es menos consciente del trabajo previo: "ese es el momento en que sientes que la IA se está volviendo más tonta".
- Al seguir trabajando se compacta de nuevo y aparecen **resúmenes de resúmenes**, cada vez peor.

Soluciones parciales:

- Una **fuente única de verdad externa** (documentos, software) que queda fuera de la compactación y a la que el agente puede volver.
- Lo que hace la industria: **agrandar la ventana**, lo que reduce la compactación pero es más lento y caro. Para él es un problema sin resolver.

### Arquitecturas de interfaz: TUI y GUI

> "No son limitaciones, son decisiones de diseño."

- **TUI** (interfaz de terminal): muestra Hermes en terminal, conectado a su modelo local, con casi la misma funcionalidad que su app; y OpenCode, con una interfaz algo más visual. Ideal para muchos programadores.
- **GUI**: él la prefiere. Ejemplos: Claude Code, ChatGPT, Cursor y el "DeepSeek Harness" (nombre según la transcripción), su harness principal actualmente, aún en versión preview.

La mayoría de las GUI son casi idénticas (selector de modelo, chat, proyectos al costado). La diferencia del harness que usa es que es **open source con licencia MIT** y su arquitectura es "**todo es un plugin**": invita a construir encima. Él creó plugins para:

- Buscar entre los muchos modelos disponibles y fijar algunos arriba (incluido su modelo local).
- Una "meta carpeta" con colores para agrupar y plegar proyectos.

### Ser solo cliente: el problema de la soberanía

> "Aunque esas corporaciones han desarrollado apps realmente buenas con modelos increíblemente potentes, en ese entorno eres solo un cliente."

- No eres soberano de tus datos porque lo compartes todo.
- No hay estabilidad: cambian el modelo de fondo sin pedir permiso, la arquitectura cambia sin tu control, y cambian los precios y lo que permite cada suscripción.
- Cita que OpenAI pierde alrededor de 1,5–1,6 dólares por cada dólar que se gasta (cifra que él mismo dice no recordar con exactitud); para ser rentable probablemente tendría que más que triplicar el precio, lo que lo volvería prohibitivo.

Aclara que usa ambos tipos de herramientas según la necesidad, pero prefiere el open source porque puede personalizarlo, construir negocio sobre él, hacer fork y tener transparencia total.

### Transparencia

En su harness puede:

- Leer cada acción del agente y ver lo que ocurre "detrás del telón".
- Ver la ocupación de la ventana de contexto (en la demo, 12 % utilizado) y por qué elementos.
- Leer el system prompt del agente y el contexto que se inyecta.
- Mejorar el tool calling o ajustar elementos porque ve qué está pasando.

Y por la licencia MIT, incluso podría cambiarle la marca y revenderlo.

### Preguntas para elegir un harness

1. **¿Qué licencia tiene?** MIT, Apache 2, propietaria.
2. **¿Es agnóstico de modelo?** En ChatGPT o Claude Code solo se usan sus modelos; él quiere usar su modelo local y, a veces, modelos en la nube menos restringidos.
3. **¿Es transparente?** ¿Se pueden ver los loops y lo que pasa detrás?
4. **¿Controlas la compactación** (la summarización)?
5. **¿Controlas qué pueden tocar los agentes?** ¿Puedes ajustarlo y ponerlo en un sandbox?
6. **¿Cuál es el costo de salida?** ¿Qué tan difícil es irse mañana y qué tan dependiente eres?

Reconoce que ningún harness (ni el que usa, ni Pi agent) lo resuelve del todo: "cada uno, de una forma u otra, intenta capturar al usuario". Su comunidad intenta resolverlo con **Resonant OS**.

### Demostración: Augmentor Agent

Construido sobre ese harness, es una interfaz distinta que **flota sobre las aplicaciones**:

- Usa su modelo local, con búsqueda y modelos fijados.
- Tiene **control total del computador**.
- **Modo de audio**: conversación por voz; la velocidad "no es increíble, pero es usable".
- **Biblioteca de prompts** con comandos slash: por ejemplo `/news` inyecta un prompt guardado; tiene prompts para mejorar su inglés y para mejorar prompts. Se crean nuevos sin abrir sesiones nuevas.
- **Varios agentes** invocables, con skins y colores distintos.
- **Versión de navegador** (sidecar): se le pide, por ejemplo, ir a augmentoragent.com y resumir la página; toma control de la página, narra lo que hace y entrega el resultado, con capacidad multipaso.
- **Skin Studio**: subir una imagen de fondo, cambiar colores e importar skins.
- **Mejora de prompts**: a partir de un prompt deliberadamente confuso, el agente lo reescribe con sentido; se puede deshacer o enviar.
- Historial, modo compacto, efectos visuales (mariposas) desactivables.
- Open source y gratuito; por ahora solo en Linux (macOS y Windows "pronto"); se instala dando un prompt al propio agente.

### Usuarios activos y soberanos

> "Esta es la dirección: no ser usuarios pasivos, sino usuarios activos y soberanos."

- Las corporaciones construyen algo para todo y para todos, nadie arriesga y todas las apps se parecen.
- Su caso: un agente pequeño que se invoca rápido, aumenta su trabajo y se oculta; para proyectos grandes usa un harness más completo.
- Invita a diseñar la interfaz que cada uno necesita para su caso de uso.

> "Aunque por ahora no podemos construir esos modelos, esos motores, sí podemos construir el resto. [...] Y luego simplemente cambiamos los modelos. A medida que mejoran, nuestro sistema también mejora."

Cierra invitando a su comunidad de Discord (más de 3.600 personas).

## Conceptos clave

- **Harness**: capa que gestiona loops, herramientas, contexto, permisos y memoria del agente; decide lo que la IA puede hacer.
- **Stack agéntico de cinco capas**: pesos, motor de inferencia, servicio/API, harness y UI.
- **Ventana de contexto**: memoria de trabajo del agente; limitada y a curar.
- **Compactación**: resumen con pérdida del contexto cuando la ventana se llena; su repetición degrada al agente.
- **Fuente única de verdad**: documento o sistema externo, fuera de la compactación, al que el agente vuelve.
- **Memoria de largo plazo**: almacenamiento persistente de sesiones, instrucciones de proyecto y skills; puede separarse por usuario y por proyecto.
- **Arquitectura de plugins**: diseño en el que todo es extensible, lo que invita a construir encima.
- **Agnosticismo de modelo**: capacidad del harness de usar cualquier modelo, incluidos locales.
- **Costo de salida**: dificultad de abandonar una plataforma; criterio clave de soberanía.
- **Usuario soberano**: usuario que controla y adapta su propio sistema en lugar de solo consumirlo.

## Herramientas y referencias mencionadas

- Modelos: GPT, Claude, Gemini, Qwen, DeepSeek
- Motores de inferencia: llama.cpp, vLLM, Ollama, MLX
- Servicios: OpenRouter
- Harnesses e interfaces: Hermes, OpenCode, Claude Code, ChatGPT, Cursor, "DeepSeek Harness" (nombre según la transcripción), Pi agent
- Licencias: MIT, Apache 2
- Resonant OS (iniciativa de su comunidad)
- Augmentor Agent (augmentoragent.com), proyecto open source del autor
- OpenAI (cifras de pérdidas por dólar)

## Referencias

- Transcripción: [[k8jYOcQUB_A - el-harness-es-dueno-de-tu-ia|Transcripción completa]]
- Video: [You Don't Own Your AI. The Harness Does.](https://www.youtube.com/watch?v=k8jYOcQUB_A) — Manolo Remiddi
