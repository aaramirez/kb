---
title: "La arquitectura multiagente que sí entrega: Missions de Factory"
tags:
  - sf/fabricas-ia
  - type/nota
  - sf/ia-software
  - sf/calidad
  - sf/procesos
channel: "AI Engineer"
speaker: "Luke Alvoeiro (Factory)"
videoId: "ow1we5PzK-o"
source: "https://www.youtube.com/watch?v=ow1we5PzK-o"
language: "en"
playlistOrder: 7
created: 2026-10-11
updated: 2026-10-11
category: "Software Factories con IA"
aliases:
  - "The Multi-Agent Architecture That Actually Ships — Luke Alvoeiro, Factory"
related:
  - "[[ow1we5PzK-o - arquitectura-multiagente-que-entrega|Transcripción]]"
  - "[[../../07-IA-Software/18-multi-agent-systems|Sistemas Multi-agente]]"
  - "[[../../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]]"
  - "[[../../08-Calidad-Seguridad/11-quality-gates|Quality Gates en CI/CD]]"
  - "[[../../04-Practicas/11-definition-of-done|Definition of Done]]"
---

# La arquitectura multiagente que sí entrega: Missions de Factory

Charla de conferencia (unos 18 minutos) en el canal AI Engineer. Habla **Luke Alvoeiro**, que inició en Block el proyecto que se convirtió en **Goose** (agente de código open source, donado a la Agentic AI Foundation) y que hoy lidera el harness central de agentes en **Factory**, empresa cuya misión es "llevar la autonomía a todo el ciclo de vida del desarrollo de software". Propone una taxonomía de cinco patrones multiagente y explica **Missions**, el sistema de Factory que combina cuatro de ellos para ejecutar proyectos durante horas o días.

Para una software factory con IA es una de las referencias más concretas sobre cómo sostener trabajo autónomo de larga duración: un **contrato de validación** escrito antes del código, validadores que nunca vieron la implementación, **handoffs estructurados**, ejecución **serial** de features y elección deliberada del modelo para cada rol. Incluye datos de producción (una misión de 16 días, un clon de Slack con 90 % de cobertura).

## Resumen

- **El cuello de botella es la atención humana**: los modelos ya son capaces de resolver un backlog de 50 features; lo que falta es ancho de banda humano para supervisarlas.
- **Cinco patrones multiagente**: delegación, creador-verificador, comunicación directa, negociación y broadcast.
- **Missions combina cuatro** (todos menos la comunicación directa) en un flujo: describir objetivo, acotarlo conversando, aprobar el plan y dejar que el sistema ejecute.
- **Tres roles**: orquestador (planifica), workers (implementan con contexto limpio) y validadores (verifican).
- **Contrato de validación**: define qué significa "terminado" antes de escribir código, con cientos de aserciones asignadas a features.
- **Validar comportamiento, no solo código**: un validador de escrutinio (tests, tipos, lint, code review) y otro de pruebas de usuario que usa la aplicación como un QA.
- **Validación adversarial por diseño**: ningún validador vio el código antes.
- **Handoffs estructurados**: cada worker documenta lo hecho, lo pendiente, comandos y códigos de salida, problemas y cumplimiento de procedimientos; así el sistema se autocorrige en los hitos.
- **Serial, no paralelo**: un solo worker o validador a la vez, con paralelización solo de operaciones de lectura; menos velocidad aparente, muchos menos errores.
- **El modelo correcto en cada asiento**: planificación, implementación y validación piden capacidades distintas; ningún modelo ni proveedor es el mejor en las tres.
- **Diseñado para la lección amarga**: casi toda la orquestación vive en prompts y skills (unas 700 líneas de texto), no en una máquina de estados.
- **Resultados**: misión más larga de 16 días (creen posibles 30); en el clon de Slack, 50 % de las líneas son tests y la cobertura llega al 90 %.

## Contenido estructurado

### La tesis: atención humana, no inteligencia

> "El cuello de botella en la ingeniería de software hoy no es la inteligencia. Ahora está limitado por la atención humana."

Incluso los mejores ingenieros solo avanzan un par de tareas a la vez: pueden tener 50 features en el backlog, pero cada tarea exige su atención y cada commit su revisión. La pregunta de Factory fue: ¿y si el humano decide *qué* construir y un sistema resuelve *cómo*, trabajando horas o días hasta que vuelvas y encuentres el trabajo terminado?

### Taxonomía de cinco patrones multiagente

El campo está "un poco desordenado": cada uno tiene su framework, su terminología y sus opiniones. Propone cinco patrones:

| Patrón | Descripción | Observaciones |
|---|---|---|
| **Delegación** | Un agente lanza otro ("averigua el esquema de la base de datos") y recibe la respuesta. | El más simple y el primero que se implementa; los sub-agentes de las herramientas de código son el ejemplo típico. |
| **Creador-verificador** | Un agente construye y otro revisa. | Separación de responsabilidades: el implementador está sesgado a favor de su código; un agente con contexto fresco encuentra más problemas, igual que en la code review humana. |
| **Comunicación directa** | Agentes que se comunican sin coordinador central, "como mandarse mensajes directos". | Difícil de hacer bien: el estado se fragmenta entre conversaciones y no hay una única fuente de verdad. |
| **Negociación** | Agentes que se comunican sobre un recurso compartido (la misma API, la misma parte del código). | No tiene por qué ser adversarial; el mejor caso es el intercambio de suma positiva, donde ambos ganan. |
| **Broadcast** | Un agente envía información a muchos: actualizaciones de estado, contexto nuevo, restricciones compartidas. | Menos vistoso pero crítico para mantener la coherencia en tareas largas. |

### Missions: un ecosistema, no una sesión

Missions combina delegación, creador-verificador, broadcast y negociación. El flujo es: describes un objetivo, lo acotas conversando, apruebas un plan y el sistema ejecuta durante horas o días. Una misión "no es una sesión de un solo agente", sino un ecosistema de agentes que se comunican mediante handoffs estructurados y estado compartido.

**Arquitectura de tres roles:**

1. **Orquestador (planificación)**. Funciona como interlocutor: hace las preguntas estratégicas correctas, detecta requisitos poco claros y produce un plan con **features, hitos y un contrato de validación**.
2. **Workers (implementación)**. Cada feature se asigna a un worker con contexto limpio, "sin equipaje acumulado, sin atención degradada". Lee su especificación, implementa y hace commit en Git, de modo que el siguiente worker hereda "una pizarra limpia y un código que funciona".
3. **Validadores (verificación)**. Además de lint, type check, tests y code review, validan el **comportamiento**: no solo "¿el código se ve bien?", sino "¿funciona de punta a punta?". Eso es lo que permite a las misiones correr días sin desviarse.

### Repensar la validación: el contrato

El patrón habitual con agentes: construyen la feature, escriben tests, pasan, hay cobertura total... pero los tests fueron moldeados por el código y no por lo que el código debía hacer.

> "Los tests escritos después de la implementación no atrapan bugs. Confirman decisiones."

Si la validación depende de eso, el sistema termina desviándose. Por eso el **contrato de validación** se escribe durante la planificación, antes de cualquier código, y define la corrección de forma independiente de la implementación:

- En un proyecto complejo puede tener **cientos de aserciones**.
- Cada feature recibe una o más aserciones que debe satisfacer.
- La suma de las features debe cubrir **todas** las aserciones.

Tras cada hito corren dos validadores:

- **Validador de escrutinio**: más tradicional; corre la suite de tests, type checking y lint, y lanza agentes de code review dedicados para cada feature completada del hito.
- **Validador de pruebas de usuario**: actúa como un ingeniero de QA; levanta la aplicación, interactúa con ella mediante *computer use* o algo similar, llena formularios, comprueba que las páginas rendericen, pulsa botones y verifica que los flujos funcionales funcionen en conjunto. Tarda bastante más; de hecho, **la mayor parte del tiempo de reloj de una misión se pasa aquí**, esperando la ejecución real y no generando tokens.

> "Ningún validador ha visto el código antes. No están comprometidos con la implementación, así que la validación es adversarial por diseño."

### Handoffs estructurados y autocorrección

Para trabajos de varios días hay que evitar perder contexto entre agentes. Al terminar una feature, el worker no dice solo "terminé": rellena un **handoff estructurado** con:

- qué se completó y qué quedó sin hacer;
- qué comandos ejecutó durante su bucle y con qué códigos de salida;
- qué problemas descubrió;
- si respetó los procedimientos que el orquestador definió para ese worker.

Así se detectan los problemas y el sistema **se autocorrige**: los errores se atrapan en los límites de hito, se acota trabajo correctivo y la misión vuelve al rumbo, "no esperando que los agentes recuerden lo que pasó, sino obligándolos a escribirlo". La lógica determinista bloquea el progreso mientras haya problemas de handoff sin resolver. La misión más larga duró **16 días**, "mucho más que un sprint completo", y creen que pueden llegar a 30, algo posible solo gracias a la estructura.

### Serial con paralelización dirigida

La opción obvia es el paralelismo (10 agentes = 10 veces el throughput). Lo probaron y en desarrollo de software no funciona bien: los agentes entran en conflicto, pisan los cambios de otros, duplican trabajo y toman decisiones de arquitectura inconsistentes. La coordinación se come la ganancia de velocidad mientras se queman tokens.

Missions ejecuta las features **en serie**: solo un worker o validador activo a la vez. Dentro de una feature se paralelizan las operaciones de solo lectura (buscar en el código, investigar APIs) y, dentro de los validadores, también (como la code review).

> "Parece más lento sobre el papel, pero la tasa de errores cae drásticamente, y cuando tienes tareas que duran muchos días, esa corrección se compone."

### Mission Control

Una interfaz de chat no sirve para algo que dura días. **Mission Control** es una vista dedicada que muestra cuánto del proyecto se completó, cuánto del presupuesto inicial se consumió, qué hace el worker activo, los resúmenes de handoff, qué descubrieron workers y validadores y cómo se corregirá el rumbo. Permite seguir la misión como un project manager o desentenderse por completo y "salir con los amigos esa noche".

### El modelo correcto en cada rol

- **Planificación**: razonamiento lento y cuidadoso.
- **Implementación**: fluidez de código rápida y creatividad.
- **Validación**: seguimiento preciso de instrucciones.

Ningún modelo ni proveedor es el mejor en las tres. Esto exige una habilidad nueva que en Factory llaman **"droid whispering"**: modelar mentalmente cómo interactúan los distintos LLM, dónde fallan, cómo esos fallos se componen en una ejecución de varios días, y decidir qué modelo ocupa cada asiento. Theo, el ingeniero que construyó el prototipo, definió los modelos por defecto, pero animan a personalizarlos; por ejemplo, la validación puede usar **otro proveedor** para no compartir el sesgo de los mismos datos de entrenamiento.

> "Eres tan fuerte como tu eslabón más débil."

Atarse a un proveedor limita a la capacidad más débil de esa familia; a medida que los modelos se especializan, poder poner el modelo correcto en cada asiento es una ventaja que se compone. Y funciona en sentido inverso: los contratos de validación y los checkpoints de hito permiten correr misiones con éxito incluso con **modelos open-weight** que no están en la frontera.

### Producción: un clon de Slack

Del ejemplo de construir un clon de Slack destaca:

- **60 %** del tiempo y **60 %** de los tokens se van en implementación.
- La validación **nunca pasa a la primera**: casi siempre hay que crear features de seguimiento, lo que demuestra el valor del bucle de QA.
- Al final, **50 %** de las líneas de código son tests y la cobertura llega al **90 %**.
- Usan mucho el **prompt caching** para compensar el costo de una tarea tan larga.

Usos en empresas (donde Factory "brilla"): prototipar ideas y features de la noche a la mañana, construir herramientas internas, grandes refactors y migraciones, investigación de ML y modernizar codebases para que los agentes sean más productivos en ellos.

### La lección amarga: orquestación en prompts

Quien construye sistemas multiagente teme que el siguiente modelo deje obsoleta su arquitectura. Missions se diseñó para mejorar con cada modelo nuevo:

- Casi toda la lógica de orquestación está en **prompts y skills**, no en una máquina de estados codificada.
- Cómo descomponer features y manejar fallos cabe en unas **700 líneas de texto**; cuatro frases pueden cambiar mucho la estrategia de ejecución.
- El comportamiento de los workers lo definen **skills que el orquestador crea por misión**.
- La lógica determinista es muy delgada: llevar la contabilidad, correr la validación y bloquear el progreso si hay problemas de handoff sin resolver.

> "Las misiones aseguran la disciplina, y los modelos aportan la inteligencia", usando primitivas que ya conocen, como `AGENTS.md` y las skills.

### Qué desbloquea

Un equipo de cinco ingenieros que antes llevaba unas 10 líneas de trabajo a la vez podría llevar 30. El equipo se concentra en arquitectura y decisiones de producto en lugar de la ejecución, y el codebase termina **más limpio** que al principio: los tests end-to-end, los unitarios, las skills y la estructura hacen más productivos a agentes y humanos después.

Resumen de cómo aparece cada patrón: **delegación** cuando el orquestador lanza workers y sub-agentes de investigación; **creador-verificador** porque implementación y validación siempre son agentes distintos con contexto separado; **broadcast** en el estado compartido de la misión; **negociación** en los límites de hito, cuando el orquestador decide si el handoff es correcto y si hay que crear features de seguimiento o reacotar. Pero las estrategias no bastan: hace falta el "tejido conectivo" de los handoffs, el modelo correcto en cada rol y una arquitectura que mejore con cada modelo.

Preguntas abiertas: cómo paralelizar más para que las misiones corran más rápido y cómo orquestar misiones entre sí en flujos más complejos. Cierre: abrir Droid, ejecutar `/missions`, discutir el alcance con el orquestador, aprobar el plan "y luego ir a hacer otra cosa".

## Conceptos clave

- **Mission**: ecosistema de agentes que ejecuta un objetivo aprobado durante horas o días mediante handoffs estructurados y estado compartido.
- **Orquestador / worker / validador**: los tres roles de Missions (planificar, implementar con contexto limpio, verificar).
- **Contrato de validación**: conjunto de aserciones escrito en la planificación, antes del código, que define "terminado" independientemente de la implementación; cada feature cubre algunas y entre todas lo cubren todo.
- **Validador de escrutinio**: tests, type checking, lint y agentes de code review por feature.
- **Validador de pruebas de usuario**: agente tipo QA que usa la aplicación real (computer use) para verificar flujos de punta a punta.
- **Handoff estructurado**: informe obligatorio del worker (hecho, pendiente, comandos y códigos de salida, problemas, cumplimiento de procedimientos).
- **Ejecución serial con paralelización dirigida**: una feature a la vez; solo se paralelizan operaciones de solo lectura.
- **Droid whispering**: habilidad de entender cómo fallan y se combinan distintos LLM para asignar el modelo adecuado a cada rol.
- **Arquitectura agnóstica de modelo**: permite usar otro proveedor para validar y evitar sesgos compartidos, o incluso modelos open-weight.
- **Lección amarga aplicada**: poner la orquestación en prompts y skills para que el sistema mejore con cada modelo en lugar de quedar obsoleto.

## Relación con el SF KB

- [[../../07-IA-Software/18-multi-agent-systems|Sistemas Multi-agente]] — aporta una taxonomía práctica de cinco patrones (delegación, creador-verificador, comunicación directa, negociación, broadcast) y descarta la comunicación directa por fragmentar el estado.
- [[../../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]] — matiza la idea de paralelizar sub-agentes: en desarrollo de software Factory ejecuta features en serie y paraleliza solo lo de lectura, y pone la orquestación en prompts y skills en vez de una máquina de estados.
- [[../../08-Calidad-Seguridad/11-quality-gates|Quality Gates en CI/CD]] — los validadores por hito funcionan como quality gates ampliados que, además de tests, lint y review, prueban el comportamiento de la aplicación en vivo y bloquean el avance.
- [[../../04-Practicas/11-definition-of-done|Definition of Done]] — el contrato de validación es una Definition of Done verificable, escrita antes del código y repartida entre las features.

Otras notas de esta sección: la crítica a paralelizar contrasta con el planner paralelo + merger de [[fabrica-de-software-afk-open-source|Sandcastle]], y la importancia de validar y de no fiarse del harness enlaza con [[por-que-fallan-las-fabricas-de-software|Por qué fallan las fábricas de software con IA]].

## Herramientas y referencias mencionadas

- **Factory** y su agente **Droid**, con el comando `/missions` y la vista **Mission Control**.
- **Goose** (Block), agente de código open source donado a la **Agentic AI Foundation**.
- **Theo**, ingeniero de Factory que construyó el prototipo de Missions.
- *Computer use* para el validador de pruebas de usuario; prompt caching.
- `AGENTS.md` y skills como primitivas de orquestación.
- "La lección amarga" (*the bitter lesson*) como principio de diseño.

## Referencias

- Transcripción: [[ow1we5PzK-o - arquitectura-multiagente-que-entrega|Transcripción completa]]
- Video: [The Multi-Agent Architecture That Actually Ships — Luke Alvoeiro, Factory](https://www.youtube.com/watch?v=ow1we5PzK-o) — AI Engineer
