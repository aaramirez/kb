---
title: "Humanos dirigen, agentes ejecutan: harness engineering en OpenAI según Ryan Lopopolo"
tags:
  - arnes/nota
  - type/nota
  - arnes/fabricas-de-software
  - arnes/flujos-de-trabajo
  - arnes/contexto-y-memoria
channel: "AI Engineer"
speaker: "Ryan Lopopolo (OpenAI)"
videoId: "am_oeAoUhew"
source: "https://www.youtube.com/watch?v=am_oeAoUhew"
language: "en"
playlistOrder: 22
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harness Engineering: How to Build Software When Humans Steer, Agents Execute — Ryan Lopopolo, OpenAI"
related:
  - "[[am_oeAoUhew - humanos-dirigen-agentes-ejecutan-openai|Transcripción]]"
---

# Humanos dirigen, agentes ejecutan: harness engineering en OpenAI según Ryan Lopopolo

Keynote de Ryan Lopopolo, miembro del staff técnico de OpenAI, en la AI Engineer de Londres, seguida de una sesión de preguntas moderada (unos 46 minutos en total). Lopopolo lleva nueve meses construyendo software **exclusivamente con agentes**: prohibió a su equipo tocar el editor y consume más de mil millones de tokens de salida al día ("token billionaire"). Es autor del artículo "Harness Engineering".

La charla explica cómo operacionalizar el repositorio, las herramientas y los procesos del equipo para que los agentes hagan "el trabajo completo": documentar los requisitos no funcionales, convertirlos en lints, tests y agentes revisores que inyectan instrucciones en el momento justo, y estructurar el código para que sea legible y predecible para los modelos.

## Resumen

- **El código es gratis**: la implementación ya no es el recurso escaso; producir, refactorizar y borrar código no cuesta. Los recursos escasos son el tiempo humano, la atención (humana y del modelo) y la ventana de contexto.
- **Cada ingeniero es un staff engineer**: dispone de 5, 50 o 5.000 ingenieros de capacidad 24/7; su rol pasa a diseño de sistemas y delegación.
- **Lo importante no es el código, sino el prompt y los guardrails**: documentación, ADRs, docs por persona, historial de tickets y code reviews.
- **Requisitos no funcionales escritos**: un buen parche implica ~500 pequeñas decisiones; hay que escribir qué es un trabajo aceptable.
- **Todo es un prompt**: AGENTS.md, skills, mensajes de error de lints, tests y comentarios de agentes revisores.
- **Instrucciones justo a tiempo**: no cargar todo al inicio; surfacing de requisitos en lint/test time. Eso no lo volverá obsoleto la mejora de los modelos.
- **Hacer el código igual en todas partes**: un ORM, un lenguaje, un helper de concurrencia; los tokens se vuelven predecibles.
- **Garbage collection day**: los viernes, eliminar categóricamente cada tipo de "slop" observado en la semana.
- **Agentes revisores por persona** (front-end, fiabilidad, escalabilidad) en cada push, alimentados por la documentación.
- **Cada vez que escribes "continúa" es un fallo del harness**.
- **El LLM como compilador difuso**: el código es un artefacto compilado de una especificación; cambiar de modelo es como cambiar de backend del compilador.

## Contenido estructurado

### El código es gratis y los nuevos recursos escasos

Lopopolo sitúa el cambio a finales de 2025: para él, el momento mágico fue GPT-5.2, capaz de "hacer el trabajo completo de un ingeniero de software". Los modelos son pacientes e infinitamente paralelos, así que producir, mantener, refactorizar y borrar código deja de ser una restricción.

> "La implementación ya no es el recurso escaso. El código es gratis."

Recursos escasos:
1. **Tiempo humano**: hay que ver adónde va, automatizarlo y mover el tiempo síncrono a actividades de más palanca.
2. **Atención humana y del modelo**.
3. **Ventana de contexto del modelo**.

Consecuencias:
- Ya no hay solo P0 y P2: las P3 se lanzan de inmediato, quizá 4 en paralelo, y se elige la mejor.
- Las herramientas internas pueden tener localización e internacionalización desde el primer día (colegas en Londres, Dublín, París, Bruselas, Zúrich y Múnich).
- Las migraciones ya no quedan abiertas seis meses: se lanzan 15 agentes y se terminan.

### Hacer el entorno legible para los agentes

> "Lo importante no es el código, sino el prompt y los guardrails que te llevaron allí."

Dejar rastros: documentación, ADRs, documentación orientada a personas sobre qué es un buen trabajo, historial de tickets y code reviews. Escribirlos en forma nativa para el agente, respetando el contexto escaso, y **hacer que los tokens necesarios sean fáciles de predecir**: hacer las cosas iguales todo lo posible para limitar la atención que el modelo necesita activar.

### Requisitos no funcionales: qué es hacer un buen trabajo

Un solo parche bien hecho requiere unas 500 decisiones sobre requisitos no funcionales poco especificados. Los modelos vieron billones de líneas con todas las elecciones posibles; el trabajo humano es **especificar** cuáles son las aceptables.

> "Basta con decir: no produzcas slop. Si no aceptas slop, no tendrás slop en tu código."

Esto exige aceptar pérdidas de velocidad a corto plazo para entender en qué falla el agente, poner guardrails y luego dedicarse a actividades de más palanca. Cada miembro del equipo (arquitectura front-end, escalabilidad back-end, visión de producto) documenta su expertise; así, cada ingeniero que dirige agentes obtiene lo mejor de todo el equipo. Ejemplo: si una persona documenta cómo escribir un buen plan de QA, cada trayectoria de agente tendrá un buen plan de QA.

### Refrescar el contexto: revisores, lints y tests sobre el código

Con la autocompactación (GPT-5.4 y Codex la hacen muy bien; "casi nunca escribo /new"), el contexto se va paginando, así que hay que **refrescarlo continuamente** durante la tarea:

- **Agentes revisores en CI** (seguridad y fiabilidad) que en cada push leen la documentación y el parche: "¿hay timeouts y reintentos en este código de red?", "¿la interfaz es imposible de usar mal?".
- **Lints a medida**: un lint que revisa cada llamada a `fetch` y exige reintento y timeout. Resuelve el problema de forma duradera, apoyado en que el código es gratis y se puede migrar todo el repo.
- **Tests sobre el código fuente**, distintos de los lints: por ejemplo, que ningún archivo supere 350 líneas, para que el código sea eficiente en contexto.
- **Mensajes de error con pasos de remediación**: no basta con "lint failure"; el mensaje debe explicar, por ejemplo, que no debe haber un `unknown` porque "parseamos, no validamos, en el borde" y el tipo ya deriva de Zod.

Método: identificar las clases de fallo recurrentes de agentes y humanos, diseñar una solución que elimine sistemáticamente esa clase y seguir observando y refinando.

### Todo es un prompt

> "Todo lo que he contado hoy es un prompt. Puedes hacerlo sin tocar los pesos del modelo."

Cada avance en la forma de interactuar con los modelos vino de más capacidad y de formas más especializadas de inyectar prompts: rules files, skills, mensajes de lint, comentarios de agentes revisores que el agente debe atender antes de proponer el merge, y SDK de agentes embebidos en los tests. Lopopolo incluso pidió a Codex sintetizar una skill de escritura de prompts a partir de los cookbooks de OpenAI, y la usa para escribir prompts. Todo este apalancamiento "se apila increíblemente bien".

### Flujo de trabajo: tickets, skills y mini-harnesses

- El trabajo empieza en **tickets** que se dan al agente junto con algunas skills.
- **Codex es el punto de entrada** ("de fuera hacia dentro"): en lugar de un shell donde se lanza Codex, hay skills que le enseñan a arrancar la app, levantar un stack local de observabilidad (logs y telemetría) y conectarse a Chrome DevTools mediante una CLI local y un daemon.
- **Mini-harnesses en el repo**: un paquete grande de reglas ESLint propias en cada paquete pnpm, y tests estructurales que verifican privacidad de paquetes, dependencias entre capas, deduplicación de schemas Zod y una única implementación de helpers async. Motivo: los agentes optimizan la coherencia local de un paquete en vez de usar utilidades compartidas.
- **Pocas skills, mejores**: centralizan el apalancamiento en 5–10 skills y esconden debajo la complejidad cambiante. Cuando pasaron de usar el protocolo de Chrome DevTools directamente a un daemon, Lopopolo no se enteró durante tres semanas.

### Evitar la sobreingeniería: instrucciones justo a tiempo

Para que el trabajo no quede obsoleto (la *bitter lesson*), hace la gestión de contexto mínima necesaria. El contexto nunca será obsoleto: los modelos siempre necesitarán los requisitos y guardrails.

> "Los modelos están entrenados para seguir instrucciones. Lo único que debe hacer el harness es mostrarle las instrucciones al modelo en el momento adecuado."

Ejemplo: no cargar al inicio la regla de descomponer componentes React en piezas pequeñas y sin estado; dejar que el agente prototipe y, en lint o test time, exigir la descomposición. El agente toma la instrucción nueva, ajusta el parche y lo sube a GitHub.

### Harnesses de primera parte y colaboración

- Los laboratorios hacen post-training de los modelos **en el contexto de su harness principal** (la herramienta apply patch, la semántica de comillas del bash tool). Depender de Codex o Claude Code vía SDK o app server permite aprovechar ese apalancamiento y enfocarse en qué es código correcto, y en las diferencias de comportamiento entre versiones del modelo.
- La colaboración ocurre en **archivos markdown en el repo y GitHub**. El PR es un dominio de difusión tipo *hub and spoke* donde humanos y agentes colaboran sin bloquear. El agente implementador puede aceptar, posponer o rechazar el feedback; exigir que todo comentario se atienda provoca que el agente sea "acosado por los revisores". Se prefiere código aceptado, no perfecto.

### Cómo empezar y agentes que trabajan solos

Dos vías para empezar:
1. Usar agentes para **aumentar la confianza en el código actual** (escribir tests), lo que también mejora la capacidad del agente para navegarlo.
2. Mirar **en qué se va tu tiempo** (escribir código, esperar tests, CI lento, tests flaky, revisiones humanas) y automatizarlo de forma incremental.

Lopopolo lanza tareas antes de salir de la oficina, ata el portátil (conectado al teléfono) en el asiento trasero del coche y deja que el agente trabaje los 30 minutos de trayecto, con skills que dicen "sigue hasta que los tests estén en verde". El sueño: 50 agentes 24/7 sin interacción.

> "Cada vez que tengo que escribirle 'continúa' al agente es un fallo del harness al darle suficiente contexto sobre qué significa llegar al final."

### Escalar: estructura del repositorio y progressive disclosure

Empezaron con una app Electron en un solo paquete y acabó en un desastre: sin privacidad de paquetes, sin fronteras de dominio en el sistema de archivos. Pasaron a una arquitectura "de organización de 10.000 ingenieros": **750 paquetes en el workspace pnpm**, aislados por dominio o capa, con utilidades pequeñas reutilizables cuyo uso se verifica con lints.

- Estructurar el repo para que la mayoría de cambios se hagan en un subárbol acotado.
- El código también es texto, por tanto prompt: hacerlo igual en todas partes genera contexto transferible.
- "Una forma de hacer un helper de concurrencia acotada, un ORM, un lenguaje, una forma de escribir scripts de CI, una forma de añadir lints."
- Empoderar a alguien como "dictador" de la forma correcta, escribirla y migrar todo el código con agentes.

### Code review y garbage collection day

Con 3–5 PRs por ingeniero al día (en un equipo de tres), los conflictos de merge eran terribles. Respuestas: dividir más el código en árbol y reducir el tiempo que los PRs están abiertos, cuyo cuello de botella era la revisión humana.

- **Garbage collection day** (viernes): cada ingeniero dedica el día a eliminar categóricamente cada tipo de slop observado en la semana.
- El ciclo: feedback humano en el PR → indica un fallo de contexto → se documenta en el repo → se inyecta automáticamente (test fallido o agente revisor) para que el agente se autocorrija.
- Las revisiones se clasificaron por **persona** (arquitecto front-end, ingeniero de fiabilidad, escalabilidad) y por cada una se creó un **agente revisor** que en cada push busca "P2 o superiores que bloqueen el merge" según la documentación. Al seguir ampliando esos archivos, el slop se fue reduciendo.

### Tokens, planes y el LLM como compilador difuso

- Uso de tokens: aproximadamente **un tercio en planificación/tickets/documentación, un tercio en implementación y un tercio en CI**.
- No usa *plan mode*; usó "exec plans" (una proto-skill con hitos y criterios de aceptación). Aprobar un plan sin leerlo codifica instrucciones no deseadas. Si se usan planes, subirlos como PR propio, revisado línea a línea por un humano antes de ejecutarse.
- Gastar tokens en CI es necesario: lo difícil ya no es escribir código, sino que se acepte.
- **¿El código es un artefacto desechable?** "Sí." Con Symphony, el orquestador de agentes que publicaron, la librería es una especificación bien definida de la que el código es un artefacto compilado. El contexto del harness funciona como restricciones y pases de optimización (como LLVM al compilar Rust); cambiar de modelo es como cambiar de LLVM a Cranelift.

### El futuro

Tomar un presupuesto de tokens y el trabajo de un trimestre, semestre o año, con la priorización humana y métricas de éxito y fiabilidad, y que las máquinas avancen el producto sin "manos en el volante". Cada fase (alpha interna, beta, alpha externa) reveló capacidades que empezaban en cero, como el smoke testing de artefactos antes de distribuirlos, y los agentes tuvieron que construirse herramientas para ello. Más allá del código: triaje de feedback y alertas, vigilar fugas de PII en logs, runbooks para operaciones de usuario. Escribir procesos y criterios de aceptación se convierte en la "metaprogramación" del trabajo.

## Conceptos clave

- **Harness engineering**: operacionalizar repo, herramientas y procesos para que los agentes hagan el trabajo completo con mínima intervención humana.
- **Code is free**: el costo de producir código es casi nulo; el escaso es el tiempo y la atención humanos y el contexto.
- **Requisitos no funcionales**: decisiones implícitas de calidad que hay que escribir para que el agente sepa qué es aceptable.
- **Instrucciones just-in-time**: mostrar requisitos al agente cuando son relevantes (lint/test time) en vez de cargarlos al inicio.
- **Agente revisor por persona**: revisor automático en CI especializado en una perspectiva (front-end, fiabilidad, escalabilidad) y guiado por documentación.
- **Garbage collection day**: día semanal para eliminar sistemáticamente las clases de slop recurrentes.
- **Tests estructurales**: tests sobre la forma del código (dependencias entre capas, tamaño de archivos, deduplicación), no sobre su comportamiento.
- **LLM como compilador difuso**: la especificación más los guardrails producen código aceptable independientemente del modelo usado.

## Herramientas y referencias mencionadas

- OpenAI Codex (app server y SDK), GPT-5.2, GPT-5.4, Claude Code, OpenCode.
- Symphony (orquestador de agentes de OpenAI), exec plans, cookbooks de prompting de OpenAI.
- ESLint, pnpm workspaces, Zod, Chrome DevTools Protocol, Electron, Kafka (ejemplo), GitHub, Linear.
- LLVM, Cranelift y Rust (analogía del compilador).
- Artículo "Harness Engineering" de Ryan Lopopolo; episodio del podcast Latent Space; la *bitter lesson*.

## Referencias

- Transcripción: [[am_oeAoUhew - humanos-dirigen-agentes-ejecutan-openai|Transcripción completa]]
- Video: [Harness Engineering: How to Build Software When Humans Steer, Agents Execute — Ryan Lopopolo, OpenAI](https://www.youtube.com/watch?v=am_oeAoUhew) — AI Engineer
