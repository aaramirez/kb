---
title: "Cómo construir una fábrica de software con harness engineering"
tags:
  - arnes/nota
  - type/nota
  - arnes/fabricas-de-software
  - arnes/flujos-de-trabajo
channel: "AI Engineer"
speaker: "Dru Knox (Tessl)"
videoId: "X6l4lpA0_NY"
source: "https://www.youtube.com/watch?v=X6l4lpA0_NY"
language: "en"
playlistOrder: 24
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harness Engineering: How to Build a Software Factory — Dru Knox, Tessl"
related:
  - "[[X6l4lpA0_NY - como-construir-una-fabrica-de-software|Transcripción]]"
---

# Cómo construir una fábrica de software con harness engineering

Charla de Dru Knox, jefe de producto y diseño de Tessl (una plataforma de habilitación de agentes), en la conferencia AI Engineer (unos 20 minutos). Define la **fábrica de software** como un sistema agéntico en el que todo lo que se entrega al usuario lo producen agentes, mientras el equipo de ingeniería se dedica a construir la fábrica. Presenta el harness engineering (también llamado ya *loop engineering*) como la disciplina para llegar ahí, organizada en tres bucles (inner, outer y meta) y tres capas de trabajo (plano de control, "agent-izar" la empresa y bucles de mejora).

Es una charla avanzada: asume que ya se trabaja con varios agentes de código a la vez y que resuelven bien tareas fáciles y medianas. La parte final es una presentación del producto de Tessl, pero el autor insiste en que las técnicas sirven con cualquier stack.

## Resumen

- **Fábrica de software**: los agentes producen todo el producto; los ingenieros se convierten en constructores de herramientas internas que mejoran la fábrica.
- **Tres métricas, en orden**: autonomía (cuánto deben corregir los humanos), automatización (cuánto se puede dejar correr sin revisar) y calidad.
- **La recompensa real es la calidad, no solo la velocidad**: el backlog desaparece y hay capacidad para tests, refactors y exploración.
- **Tres bucles**: inner loop (antes del PR, barato, mejora la autonomía), outer loop (con el PR abierto, caro, reemplaza revisión humana) y meta loop (fuera del desarrollo, mejora la calidad).
- **El harness engineering es difícil por psicología humana**: disciplina que cambia cada semana, trabajo no planificable que compite con entregar, y datos ocultos en logs locales y cabezas.
- **Capa 1, plano de control**: hacer legibles todos los puntos de contacto con el agente (issue tracker → agente headless en sandbox → PR → comentarios).
- **Capa 2, agent-izar la empresa**: dar a los agentes acceso a CLIs, APIs, servicios internos, logs de producción y un entorno de ejecución; "es peor de lo que crees".
- **Capa 3, bucles de mejora**: mantenimiento del repositorio, playbooks, automatización de tareas repetidas y revisión periódica de calidad que retroalimenta skills.
- **Métricas de progreso**: menos tomas de control manuales, menos comentarios humanos en PRs, más PRs iniciados sin intervención humana.

## Contenido estructurado

### Qué es una fábrica de software

No hay una definición estricta, pero a grandes rasgos:

> "Una fábrica de software es cualquier sistema agéntico donde todo el producto final que construyes y entregas a los usuarios lo crean agentes, y tus equipos de ingeniería se centran en construir la fábrica."

Los ingenieros trabajan en hacer la fábrica más autónoma, más automatizada y en elevar la calidad de lo que produce: "todos en tu equipo se convierten, en la práctica, en constructores de herramientas internas".

### Las tres métricas

1. **Autonomía**: cuánta intervención humana hace falta para llegar a la respuesta correcta (cuántas veces hay que corregir el código o dar un empujón).
2. **Automatización**: cuánto se puede dejar correr sin revisar ni construir confianza antes de aceptar la solución.
3. **Calidad**: qué tan bueno es el producto para los usuarios (analítica, calidad y cobertura de tests).

Autonomía y automatización son distintas: puede haber alta autonomía (los agentes resuelven a la primera) y baja automatización (todavía se revisa todo a mano por falta de confianza). Primero se construye autonomía, luego automatización, manteniendo la calidad constante.

### Por qué construir una fábrica

La mayoría ve la fábrica como una forma de entregar más rápido aceptando algo de *slop*. El autor lo considera un fenómeno de corto plazo:

- Sí habrá más velocidad, pero lo importante es que **la idea de backlog desaparece**: hay capacidad para bugs pendientes, mejoras de tests, refactors arquitectónicos y exploraciones.
- En la transición la calidad se mantiene (o baja levemente), pero **la recompensa final es mejor calidad de código**.
- Mejora la colaboración: es más fácil que personas no técnicas aporten ideas, mientras ingeniería se centra en el sistema subyacente. "Una experiencia de desarrollo más dinámica e inclusiva."

### Los tres bucles del harness engineering

> "La fábrica de software construye tu producto; tú construyes los bucles que automatizan y mejoran la calidad de tu fábrica."

| Bucle | Cuándo | Características | Mejora |
|---|---|---|---|
| **Inner loop** | Mientras el agente trabaja en un PR, antes de subirlo | Rápido, barato, se ejecuta continuamente | Autonomía |
| **Outer loop** | Con el PR ya abierto | Comprobaciones caras y exhaustivas que reemplazan verificación humana (QA agéntico, mutation testing); el agente itera sobre los resultados | Automatización |
| **Meta loop** | Fuera del proceso de desarrollo | Observa logs de agentes, PRs, issue tracker y feedback de usuarios; detecta errores que llegaron al usuario o que un humano tuvo que corregir y retroalimenta inner y outer loop | Calidad |

Una vez existe la infraestructura de los tres bucles, invertir en el meta loop es lo que eleva el porcentaje de "qué tan AI-native soy".

### Por qué el harness engineering es difícil

El autor lo atribuye a la psicología humana:

1. **Disciplina nueva y cambiante**: los equipos acaban "convirtiéndose en investigadores de IA" para mantenerse al día; las buenas prácticas caducan en semanas e incluso se vuelven antipatrones. Hace falta un plan explícito para dedicar tiempo a ese conocimiento.
2. **Trabajo no planificado** (el más duradero): no se puede anticipar si un agente fallará, cómo ni cuánto costará arreglarlo, y ese trabajo compite con entregar features. O no se hace y el agente se estanca en un máximo local, o se hace y se pierde la fecha de entrega.
3. **Información inaccesible**: lo que se necesita para mejorar a los agentes está en logs locales, en la máquina o en la cabeza de alguien. Hay que mover los flujos a superficies donde todo quede guardado y disponible para bucles de optimización.

### Capa 1: el plano de control

Hacer legibles los datos. En Tessl todo trabajo empieza como un issue en el tracker, se envía a un agente headless en un sandbox, el agente abre un PR y los ingenieros interactúan con comentarios en el PR. Sigue habiendo corrección manual, pero todos los puntos de contacto con el agente quedan registrados y se pueden analizar.

Los tres elementos habituales:

- Un sistema de issues desde el que se lanza trabajo de agentes.
- Un mecanismo de revisión (lo más fácil: la revisión de PRs de GitHub).
- Una forma de estandarizar y distribuir workflows y playbooks: un registro de skills o un repositorio compartido.

### Capa 2: agent-izar la empresa

Un "cajón de sastre" comparable a mover un proyecto lleno de configuración local a algo que otra persona pueda montar y descubrir "con horror" todas las dependencias no aisladas:

> "Te prometo que es peor de lo que crees. Nadie que llegó pensando 'no va a ser tan difícil' salió diciendo eso al final."

Incluye:

- Escribir en el "cerebro de la empresa" cómo se trabaja y cuáles son los workflows.
- Dar acceso a CLIs, APIs y servicios internos (con preguntas de gobernanza).
- Una forma de que el agente navegue el producto para construirlo.
- Acceso a logs de producción (con su propia postura de cumplimiento).
- Un entorno donde el agente pueda ejecutar el código que escribe.

Es lo menos planificable: "dedica una o dos semanas y simplemente hazlo". Los problemas aparecen al intentar que los agentes suban código sin intervención.

### Capa 3: bucles de mejora

Donde se pasa la mayor parte del tiempo; son componentes típicos del meta loop:

- **Mantenimiento del repositorio**: barridos diarios, nocturnos o semanales en busca de problemas.
- **Playbooks** para prácticas comunes (p. ej. cómo añadir una feature a la CLI).
- **Identificar tareas repetidas y automatizarlas** de la forma más fácil posible, porque si no la gente no lo hace.
- **Revisión periódica de la calidad del output** que lleva aprendizajes al resto del código: "vi que el agente cometió este error; actualicemos la skill del playbook para añadir features a la CLI para que no vuelva a pasar".

### Cómo ayuda Tessl

Principios del producto: avanzar con muchos pasos pequeños en lugar de "la serpiente que se come al alce de un bocado"; "baterías incluidas" (Tessl se mantiene al día con las buenas prácticas por el cliente); modular y abierto (ninguna empresa será la mejor en todos los componentes); y fácil, con bucles automáticos que proponen cambios.

- **Plano de control**: registro de skills para publicar y versionar workflows con gobernanza (revisiones de seguridad y calidad, control de quién publica), conectores de issue tracker a GitHub (por ahora Linear → GitHub workflow) y herramientas de revisión de código agéntica y comprobaciones dirigidas. Muestra un workflow escaneado por seguridad, calidad y mejora del output del agente.
- **Tessl agent**: mina PRs e issues para encontrar tareas repetidas (p. ej. "cada semana buscas tests flaky"), las convierte en skill y las pone en automatización con una GitHub Action.
- **Tareas de mantenimiento listas para usar**: escaneos semanales de calidad arquitectónica, duplicación de código, calidad de los tests y vulnerabilidades.
- **`tessl launch`**: convierte cualquier skill en un workflow automatizado; se elige el agente (Tessl agent, Codex, Claude Code, Gemini) y se ejecuta en un sandbox con permisos adecuados, de larga duración y con token de GitHub para abrir PRs y responder comentarios.

El ciclo propuesto: encontrar una mejora, tomar un workflow, convertirlo en skill, distribuirlo a todos y poner en marcha los bucles de mejora, uno a uno, sin detener las entregas.

### Métricas de progreso

- Reducir las **tomas de control manuales**.
- Reducir los **comentarios humanos en PRs**.
- Aumentar los **PRs iniciados sin intervención humana** (señal de automatización).
- Mantener la calidad constante primero y luego elevarla.

## Conceptos clave

- **Fábrica de software**: sistema agéntico que produce todo el producto; los humanos construyen y mejoran la fábrica.
- **Autonomía**: capacidad de los agentes de llegar a la respuesta correcta sin corrección humana.
- **Automatización**: grado en que se puede dejar correr a los agentes sin revisión para construir confianza.
- **Harness / loop engineering**: disciplina de construir los bucles que automatizan y mejoran la fábrica.
- **Inner, outer y meta loop**: bucles antes del PR, con el PR abierto y fuera del desarrollo, respectivamente.
- **Plano de control**: la infraestructura que hace legibles todas las interacciones con los agentes.
- **Agent-izar**: preparar la empresa (accesos, servicios, logs, entornos) para que los agentes trabajen sin intervención.
- **Bucles de mejora**: mantenimiento, playbooks y automatizaciones que retroalimentan skills a partir de errores observados.

## Herramientas y referencias mencionadas

- Tessl: registro de skills, Tessl agent, `tessl launch`
- Linear, GitHub (PRs, GitHub Actions)
- Codex, Claude Code, Gemini
- Mutation testing, QA agéntico

## Referencias

- Transcripción: [[X6l4lpA0_NY - como-construir-una-fabrica-de-software|Transcripción completa]]
- Video: [Harness Engineering: How to Build a Software Factory — Dru Knox, Tessl](https://www.youtube.com/watch?v=X6l4lpA0_NY) — AI Engineer
