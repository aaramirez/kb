---
title: "Curso: construir una fábrica de software con agentes que funcione"
tags:
  - sf/fabricas-ia
  - type/nota
  - sf/practicas
  - sf/ia-software
  - sf/herramientas
channel: "Greg Isenberg"
speaker: "Ross Mike, entrevistado por Greg Isenberg"
videoId: "_LCeJZFIsd4"
source: "https://www.youtube.com/watch?v=_LCeJZFIsd4"
language: "en"
playlistOrder: 2
created: 2026-10-11
updated: 2026-10-11
category: "Software Factories con IA"
aliases:
  - "Building a Software Factory that actually works (Full Course)"
related:
  - "[[_LCeJZFIsd4 - curso-construir-una-fabrica-de-software-que-funcione|Transcripción]]"
  - "[[../../01-Fundamentos/01-que-es-software-factory|¿Qué es una Software Factory?]]"
  - "[[../../03-Procesos/07-gitflow-alternativas|GitFlow y Alternativas]]"
  - "[[../../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]]"
  - "[[../../05-Herramientas/11-ai-code-review|AI en Code Review]]"
  - "[[../../08-Calidad-Seguridad/11-quality-gates|Quality Gates en CI/CD]]"
---

# Curso: construir una fábrica de software con agentes que funcione

Episodio del podcast de Greg Isenberg (unos 31 minutos) en el que Ross Mike ("Mickey") explica, con diagramas y PRs reales, cómo funciona su propia software factory. Greg actúa como interlocutor "no técnico" que traduce cada paso a la analogía de una fábrica física. La tesis central: una fábrica de software no es un producto ni un harness especial, sino un flujo de trabajo empaquetado en unos pocos archivos markdown (un AGENTS.md y varias skills) que es agnóstico de modelo y de harness.

Para una software factory con IA es un ejemplo práctico, a escala de desarrollador individual o equipo pequeño, de una cadena de cuatro estaciones —**Isolate → Build → Prove → Ship**— con un bucle de calidad automático: el agente vuelve a construir hasta que un revisor externo (Greptile) da 5/5, y solo entonces interviene el humano para hacer merge.

## Resumen

- **Una fábrica es un flujo, no un producto**: workflows, skills y conocimiento de dominio empaquetados en archivos markdown; funciona con cualquier modelo y harness (Codex, Claude Code, Cursor…).
- **Objetivo**: en cada paso del desarrollo, maximizar la capacidad del modelo y moverse rápido "sin perder calidad", con estructura y velocidad de cinta transportadora.
- **AGENTS.md útil**: no describe el código (eso el agente ya lo puede leer), sino un flujo de trabajo que no es nativo del agente.
- **Paso 1, Isolate**: cada feature empieza en un git worktree nuevo desde `origin/main`; nunca se construye sobre main. Permite muchos agentes en paralelo sin pisarse.
- **Paso 2, Build**: la skill *code structure* impone una arquitectura de capa de servicios para que el código sea legible por humanos y por otros agentes, no solo "que funcione".
- **Paso 3, Prove**: el agente debe demostrar su trabajo con evidencia (grabación o capturas *before/after*, o métricas medidas si no es visual); si la evidencia no cumple, vuelve a construir.
- **Paso 4, Ship**: abre el PR con la evidencia y ejecuta el bucle *Grep Loop*: Greptile revisa y puntúa; mientras la confianza sea menor que 5/5, el agente vuelve a Build → Prove → Ship.
- **El humano entra al final**: con 5/5 solo queda hacer merge; Ross trabaja así en hasta 15 features simultáneas.
- **Confianza como en un equipo de ingeniería**: el PR con descripción, pruebas y evidencia replica lo que un senior revisaba en las organizaciones tradicionales.
- **Usa un agente de code review**: si vas en serio con software que usarán personas, recomiendan Greptile, CodeRabbit, Macroscope u otro.

## Contenido estructurado

### Qué es una software factory (según Ross Mike)

Greg la presenta como el concepto viral de usar agentes de IA para entregar software "que no sea slop", como una línea de ensamblaje que en lugar de productos físicos produce software. Ross aclara que muchas startups usan el término, pero:

> "Una software factory es completamente agnóstica de harness y de modelo: no importa qué modelo ni qué harness uses, debería funcionar. Porque una software factory trata más del flujo de trabajo, las skills y el conocimiento de dominio de alguien, empaquetados en skills específicas que usa en su proceso de desarrollo."

Contrasta con el flujo habitual: escribir "quiero construir esto" en Codex, Claude Code o Cursor, ver el resultado, pedir cambios, desplegar en Vercel e iterar. La fábrica se pregunta, en cada paso, cómo aprovechar al máximo la capacidad del modelo y cómo moverse rápido; si se usa la palabra "fábrica" es porque hay "estructura, velocidad y naturaleza de cinta transportadora que me permite entregar lo más rápido posible sin perder calidad".

Por qué importa: la inteligencia de los modelos sigue aumentando, y una buena fábrica permite sistematizarlos y usarlos de forma eficiente en vez de ir y venir escribiendo prompts. Ross comparte sus skills gratis, pero pide no copiarlas a ciegas: entender el proceso y aplicarlo al propio.

### Los archivos de la fábrica y el AGENTS.md

Su fábrica son unos cinco o seis archivos. El central es el **AGENTS.md**, un markdown que se inyecta en la conversación con el agente cada vez que se le escribe. Remite a un episodio anterior donde argumentó que la mayoría de los AGENTS.md son inútiles porque describen cómo es el código, información que el agente ya puede obtener del codebase. El suyo, en cambio, contiene un flujo de trabajo sencillo **que no es nativo del agente** y explica claramente cómo seguirlo.

### Paso 1 — Isolate: un worktree por feature

La skill *new feature* dice: "Cada nueva feature empieza en un git worktree nuevo creado desde `origin/main`, para que los agentes puedan trabajar en paralelo sin conflictos. Nunca construyas sobre main."

- La mayoría trabaja de forma lineal, una feature tras otra sobre la misma rama; al intentar varias a la vez aparecen conflictos y quejas de "el agente borró/sobrescribió este archivo".
- Un worktree es una copia de la app en un momento dado: como copiar un texto a otro documento, trabajar ahí y luego fusionarlo con el original.
- Ejemplo del diagrama: Greg quiere rehacer la landing page y Mike acelerar las llamadas a la API; cada uno trabaja en su worktree y luego fusiona, en cualquier orden, sin conflictos.
- Causa de los desastres típicos: varios agentes con tareas distintas en la misma rama. El agente que optimiza la API "ve que esas páginas llaman mal a la API, las borra y las reescribe", mientras otro agente trabajaba el diseño de esa página.
- Hay un proceso de limpieza: cuando el trabajo se fusiona, el worktree se elimina.
- Demostración: cuatro pestañas de terminal con cuatro features en paralelo sobre la misma app (un cliente de email, un entorno Linux para el agente, una actualización de landing page…).

Greg lo resume como trabajar con agentes "como un equipo" —ningún equipo de ingenieros haría push todos directamente a main— y señala que muchos no técnicos que ahora construyen apps se topan con esto; Ross bromea con renombrar el paso ("Isolate suena a proteína de suero").

### Paso 2 — Build: la skill de estructura de código

Los modelos son excelentes haciendo el trabajo, pero no necesariamente de la mejor manera:

> "Si puede hacerlo de forma descuidada, lo hará de forma descuidada."

- Ross elogia a Fable como uno de los primeros modelos que escribe código "mejor que algunos de los mejores ingenieros que he visto"; incluso con su modelo favorito (GPT-6 Astra) algunas decisiones de calidad son pobres, no por falta de capacidad sino porque "solo lo resuelve".
- Ejemplo: código de GPT-5.6 que funcionaba, pero al revisarlo Fable dijo "esto es asqueroso": duplicaciones, funciones dispersas, código muerto. "Que funcione no significa que esté bien escrito."
- La skill *code structure* hace que el agente escriba con una **arquitectura de capa de servicios** (service layer): fácil de entender para un desarrollador contratado, para él mismo y para otros agentes sin contexto del codebase; evita "el cañón de slop" que confunde (o encarece) a quien tenga que revisarlo.
- Ejemplo: al pedirle un repositorio de skills al que sus agentes se conectan para guardar skills, el agente fue consultando la skill de estructura mientras escribía el código.

### Paso 3 — Prove: evidencia antes que promesas

> "Los agentes no pueden hacer promesas de meñique."

Aunque algunos modelos alucinan menos, la mayoría puede ser empujada a mentir o a afirmar que terminó cuando no lo hizo ("me di cuenta de que no hice este trabajo"). Por eso el agente debe **probar** lo que hizo. Dos skills:

- **Evidence-driven testing**: si la máquina lo permite, graba el estado *antes* (p. ej. el bug en acción) y, tras el arreglo, graba la versión funcionando *después*. "Te sorprendería: a veces el agente escribe el código y cree que funcionó, pero no lo probó y solo te dijo que funcionaba."
- **Before and after**: si no se puede grabar, capturas antes/después en el PR. Ejemplo: un PR del agente para crear una página de administración de email conectada a su servicio de correo, con la captura "antes" (la página no existía) y "después".

Ross admite que ya casi no lee su código ("ni siquiera hago skim"): se apoya en que siga la skill de estructura y en la evidencia visual. Otro ejemplo: una funcionalidad para darle un computador a su agente que en la primera ejecución no funcionaba (sin la fábrica configurada); al pedirle "usa las skills, usa la fábrica", la captura posterior mostraba la app funcionando.

Bucle interno: a veces el agente revisa su propia captura o video "después" y concluye que no terminó la feature, así que **vuelve a Build sin que nadie se lo diga**: las skills están escritas para que sepa que el criterio before/after no se cumplió.

**Pruebas no visuales**: para una mejora de rendimiento (clics poco ágiles), el agente escribe tests y reporta resultados medidos: una página que tardaba 850 ms ("un pecado en desarrollo web"; escrita por GPT-5.6, "un gran modelo") bajó a unos 60 ms; otra, de 817 a 61 ms.

### Confianza: el agente como miembro del equipo

Greg lo traduce: en una fábrica la confianza es clave, y Ross actúa como "gestor de agentes" que ya no está metido en el código; la evidencia visual es "como pasar historias de Instagram: sí, sí, no".

> "Esto es lo que las organizaciones normales hacían con sus ingenieros: construías una feature y un senior revisaba tu trabajo; tu PR tenía una descripción, mostraba el trabajo hecho y los tests escritos. Es lo mismo, pero ahora con máquinas."

Muestra también un video de "prueba de mejora" generado con agentes en la nube de Cursor (el agente usando la app), que le permite hacer merge sin leer código.

### Paso 4 — Ship: Greptile y el bucle Grep Loop

Ross usa **Greptile**, un agente de code review, y su skill **Grep Loop**:

- Greptile deja un resumen, comentarios (p. ej. un problema de paginación, un espacio de menú no preservado) y un **puntaje de confianza** de 1 a 5. Un PR estaba en 3/5 antes de que el agente atendiera los comentarios y pasó a 5/5 después.
- La skill (que el agente invoca automáticamente): abre el PR con la evidencia before/after en la descripción (capturas si hay superficie visible; números medidos o pares de salida si no), ejecuta Grep Loop —o **Grep Loop Ops** si el cambio supera unas 10.000 líneas— hasta que Greptile reporte 5/5 sin comentarios pendientes, y termina presentando la URL del PR.
- El bucle: con 3/5, el agente vuelve a **Build → Prove → Ship** y espera el nuevo puntaje; con 4/5 repite; con 5/5 queda listo. "Este es un buen bucle."
- Solo entonces entra el humano: hacer clic en merge, y el cambio vuelve a la versión principal de la app. Así ha trabajado en 15 features simultáneas con distintos agentes y sub-agentes.

> "Esto permite que un agente tenga una instancia aislada donde trabajar por su cuenta, guías sobre cómo construir, una metodología para probar su trabajo y un servicio externo que revisa ese trabajo. Si no está a la altura, tiene que seguir en un bucle hasta cumplir el estándar. Cuando tengo un cinco de cinco, ahí entro yo."

> "Esto es una software factory. Fíjate que no hablamos de modelos ni de harness. Todo son workflows, skills y un poco de conocimiento de dominio."

### La analogía con la fábrica física (Greg Isenberg)

| Paso | Fábrica física | Software |
|---|---|---|
| Isolate | Un pedido personalizado recibe su propia estación para no interferir con el resto de la producción | Rama / worktree aislado |
| Build | La línea de ensamblaje: cortar, soldar, ensamblar, cablear | Escribir código, cambiar archivos, dar estructura |
| Prove | Control de calidad: ¿enciende?, ¿encaja?, ¿resiste presión? | Tests, previews, logs, capturas |
| Ship | Sale por la puerta tras pasar control de calidad | Merge, deploy del PR, release notes, feedback al equipo de producto si no pasa (y se repite el bucle) |

Ross acepta que sus nombres "son terribles" y que quizá adopte los de Greg.

### Cierre: una fábrica son archivos markdown

> "Una software factory no es un producto. No es un harness especial... es literalmente un montón de archivos markdown."

Comenta, como tema aparte, que algunas startups hoy son "un agente con un par de archivos markdown". Ambos insisten en usar un agente de code review si el software lo usarán personas reales: muchos tienen planes gratuitos, y "hay un nivel de empatía con el usuario del otro lado" (Greg aclara que no tiene afiliación con Greptile).

## Conceptos clave

- **Software factory (versión Ross Mike)**: flujo de trabajo de desarrollo con agentes, empaquetado en AGENTS.md y skills, agnóstico de modelo y harness.
- **AGENTS.md de flujo**: archivo inyectado en cada interacción que describe un proceso que el agente no sigue de forma nativa, en vez de describir el código.
- **Git worktree**: copia de trabajo aislada del repositorio, creada desde `origin/main`, que permite varios agentes en paralelo sin conflictos.
- **Service layer architecture**: estilo de estructura de código impuesto por la skill *code structure* para que el código sea legible por humanos y agentes.
- **Evidence-driven testing / before and after**: el agente debe aportar evidencia (grabaciones, capturas o métricas antes/después) de que el cambio funciona.
- **Grep Loop**: bucle automático en el que el agente atiende la revisión de Greptile y repite Build → Prove → Ship hasta un puntaje de confianza de 5/5.
- **Puntaje de confianza**: calificación 1–5 que el revisor externo asigna al PR y que actúa como criterio de salida.
- **Gestor de agentes**: el rol humano que ya no escribe ni lee todo el código, sino que revisa evidencia y aprueba merges.

## Relación con el SF KB

- [[../../01-Fundamentos/01-que-es-software-factory|¿Qué es una Software Factory?]] — reduce la fábrica a su núcleo de proceso: estaciones estandarizadas (isolate, build, prove, ship) codificadas como skills, independientes de la herramienta.
- [[../../03-Procesos/07-gitflow-alternativas|GitFlow y Alternativas]] — aplica ramas de feature cortas desde main mediante git worktrees, ahora como mecanismo para paralelizar agentes y evitar que se pisen.
- [[../../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]] — muestra orquestación práctica: decenas de agentes en paralelo, cada uno aislado en su worktree, con un humano que integra al final.
- [[../../05-Herramientas/11-ai-code-review|AI en Code Review]] — añade Greptile (y Macroscope) a las herramientas y un patrón de uso: el revisor de IA no solo comenta, sino que dirige un bucle automático de corrección.
- [[../../08-Calidad-Seguridad/11-quality-gates|Quality Gates en CI/CD]] — el 5/5 de Greptile y la evidencia before/after funcionan como quality gates que el agente debe superar antes de la aprobación humana.

## Herramientas y referencias mencionadas

- Harnesses y entornos: Codex, Claude Code, Cursor (incluidos sus agentes en la nube), Vercel
- Modelos citados por Ross: GPT-6 Astra, Fable, GPT-5.6
- Code review: Greptile (skills Grep Loop y Grep Loop Ops), CodeRabbit, Macroscope
- Git worktrees, AGENTS.md
- Skills de Ross Mike: *new feature*, *code structure*, *evidence-driven testing*, *before and after* (compartidas gratis por el autor)
- Patrocinador del episodio: Brex

## Referencias

- Transcripción: [[_LCeJZFIsd4 - curso-construir-una-fabrica-de-software-que-funcione|Transcripción completa]]
- Video: [Building a Software Factory that actually works (Full Course)](https://www.youtube.com/watch?v=_LCeJZFIsd4) — Greg Isenberg
