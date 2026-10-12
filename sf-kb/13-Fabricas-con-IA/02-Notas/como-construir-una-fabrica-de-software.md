---
title: "Cómo construir una fábrica de software con harness engineering"
tags:
  - sf/fabricas-ia
  - type/nota
  - sf/ia-software
  - sf/metricas
  - sf/estructura
channel: "AI Engineer"
speaker: "Dru Knox (Tessl)"
videoId: "X6l4lpA0_NY"
source: "https://www.youtube.com/watch?v=X6l4lpA0_NY"
language: "en"
playlistOrder: 8
created: 2026-10-11
updated: 2026-10-11
category: "Software Factories con IA"
aliases:
  - "Harness Engineering: How to Build a Software Factory — Dru Knox, Tessl"
related:
  - "[[X6l4lpA0_NY - como-construir-una-fabrica-de-software|Transcripción]]"
  - "[[../../01-Fundamentos/01-que-es-software-factory|¿Qué es una Software Factory?]]"
  - "[[../../07-IA-Software/15-agentes-autonomos|Agentes Autónomos vs Asistidos]]"
  - "[[../../06-Metricas/10-ai-productivity-metrics|Métricas de Productividad con IA]]"
  - "[[../../02-Estructura/14-plataforma-interna|Internal Developer Platform (IDP)]]"
  - "[[../../07-IA-Software/22-ai-scripts-automation|Scripts y Automatización con IA]]"
---

# Cómo construir una fábrica de software con harness engineering

Charla de Dru Knox, jefe de producto y diseño de Tessl (una plataforma de "agent enablement"), en la conferencia AI Engineer (unos 20 minutos). Define la **fábrica de software** como un sistema agéntico en el que todo lo que se entrega al usuario lo producen agentes, mientras el equipo de ingeniería se dedica a construir y mejorar la fábrica. Presenta el harness engineering (que ya empieza a llamarse *loop engineering*) como la disciplina para llegar ahí, organizada en tres bucles (inner, outer y meta), tres métricas (autonomía, automatización, calidad) y tres capas de trabajo (plano de control, "agent-izar" la empresa y bucles de mejora).

Es una charla avanzada: asume que el equipo ya trabaja con varias sesiones de agentes a la vez y que estos resuelven bien tareas fáciles y medianas. Para una software factory aporta un modelo de madurez práctico con métricas de progreso concretas y una visión organizacional: los ingenieros pasan a ser constructores de herramientas internas. La parte final es una presentación del producto Tessl, aunque el autor insiste en que las técnicas sirven con cualquier stack.

## Resumen

- **Fábrica de software**: los agentes producen todo el producto; los ingenieros se convierten en constructores de herramientas internas que mejoran la fábrica.
- **Tres métricas, en orden**: autonomía (cuánto deben corregir los humanos), automatización (cuánto se puede dejar correr sin revisar) y calidad (qué tan bueno es el producto).
- **La recompensa real es la calidad, no solo la velocidad**: el backlog desaparece y hay capacidad para tests, refactors arquitectónicos y exploración.
- **Tres bucles**: inner loop (antes del PR, barato, mejora la autonomía), outer loop (con el PR abierto, caro, reemplaza revisión humana) y meta loop (fuera del desarrollo, mejora la calidad).
- **El harness engineering es difícil por psicología humana**: disciplina que cambia cada semana, trabajo no planificable que compite con entregar, y datos ocultos en logs locales y en cabezas.
- **Capa 1, plano de control**: hacer legibles todos los puntos de contacto con el agente (issue tracker → agente headless en sandbox → PR → comentarios).
- **Capa 2, agent-izar la empresa**: dar a los agentes acceso a CLIs, APIs, servicios internos, logs de producción y un entorno de ejecución; "es peor de lo que crees".
- **Capa 3, bucles de mejora**: mantenimiento del repositorio, playbooks, automatización de tareas repetidas y revisión periódica de calidad que retroalimenta las skills.
- **Métricas de progreso**: menos tomas de control manuales, menos comentarios humanos en PRs, más PRs iniciados sin intervención humana, calidad constante y luego al alza.

## Contenido estructurado

### Prerrequisitos

La charla está pensada para equipos que ya usan agentes de código con soltura: varias sesiones simultáneas y agentes que con frecuencia aciertan en tareas fáciles y de complejidad media. Ese es el "punto óptimo" para empezar con harness engineering y pensar en una fábrica; si aún no se usan agentes, no es el lugar para empezar.

### Qué es una fábrica de software

No hay una definición estricta (el autor se queja de lo rápido que cambia la terminología), pero a grandes rasgos:

> "Una fábrica de software es cualquier sistema agéntico donde todo el producto final que construyes y entregas a los usuarios lo crean agentes, y tus equipos de ingeniería se centran en construir la fábrica."

Los ingenieros trabajan en hacer la fábrica más autónoma, más automatizada y en elevar la calidad de lo que produce: "todos en tu equipo se convierten, en la práctica, en constructores de herramientas internas", y construyen un sistema que produce el producto.

### Las tres métricas

1. **Autonomía**: cuánta intervención humana hace falta para llegar a la respuesta correcta (cuántas veces hay que corregir el código o dar un empujón al agente).
2. **Automatización**: cuánto se puede dejar correr a los agentes; cuánto hay que revisar o construir confianza antes de aceptar la solución.
3. **Calidad**: qué tan bueno es el producto para los usuarios (analítica de usuario, calidad y cobertura de tests, etc.).

Autonomía y automatización son distintas aunque relacionadas: puede haber alta autonomía (los agentes resuelven a la primera) y baja automatización (todavía se revisa y verifica todo a mano por falta de confianza). Primero hay que construir autonomía, luego automatización, manteniendo la calidad constante.

### Por qué construir una fábrica: calidad, no solo velocidad

La mayoría ve la fábrica como una forma de entregar más rápido aceptando algo de *slop* porque "el ROI lo compensa". El autor lo considera un fenómeno de corto plazo:

- Sí habrá más velocidad, pero lo importante es que **la idea de backlog desaparece**: hay capacidad para bugs pendientes, mejoras de tests, refactors arquitectónicos y exploraciones que nunca había tiempo de hacer.
- En la transición la calidad se mantiene (o baja levemente), pero **la recompensa final es mejor calidad de código**.
- Mejora la colaboración: es más fácil que personas en roles no técnicos aporten ideas, mientras ingeniería se centra en el sistema subyacente. "Una experiencia de desarrollo más dinámica e inclusiva."

### Los tres bucles del harness engineering

> "La fábrica de software construye tu producto; tú construyes los bucles que automatizan y mejoran la calidad de tu fábrica."

| Bucle | Cuándo | Características | Mejora |
|---|---|---|---|
| **Inner loop** | Mientras el agente trabaja en un PR, antes de subirlo | Rápido, barato, el agente lo ejecuta continuamente; corrige sin intervención humana | Autonomía |
| **Outer loop** | Con el PR ya abierto | Comprobaciones caras y exhaustivas que codifican lo que un humano verificaría (QA agéntico, mutation testing para medir la suite de tests); se ejecutan una vez y el agente itera sobre los resultados | Automatización |
| **Meta loop** | Fuera del proceso de desarrollo | Observa logs de agentes, PRs, issue tracker y feedback de usuarios; detecta errores que llegaron al usuario o que un humano tuvo que corregir, y retroalimenta inner y outer loop para que no se repitan | Calidad |

Una vez existe la infraestructura de los tres bucles, invertir en el meta loop es lo que eleva el porcentaje de "qué tan AI-native soy".

### Por qué el harness engineering es difícil

El autor lo atribuye a la psicología humana:

1. **Disciplina nueva y cambiante**: los equipos acaban "convirtiéndose en investigadores de IA" para mantenerse al día (papers, blogs); las buenas prácticas caducan en semanas e incluso se vuelven antipatrones. Hace falta un plan explícito para dedicar tiempo y espacio a ese conocimiento.
2. **Trabajo no planificado** (el más duradero): no se puede anticipar si un agente fallará, cómo ni cuánto costará arreglarlo, y ese trabajo compite con entregar features. O no se hace y el agente se estanca en un máximo local, o se hace y se pierde la fecha de entrega, "así que nadie lo hace".
3. **Información inaccesible**: lo que se necesita para mejorar a los agentes está en logs locales, en la máquina o en la cabeza de alguien. Hay que mover los flujos a superficies donde todo quede guardado y disponible para bucles de optimización posteriores.

### Capa 1: el plano de control

Hacer legibles los datos. En Tessl todo trabajo empieza como un issue en el tracker, se envía a un agente headless en un sandbox, el agente abre un PR y los ingenieros interactúan mediante comentarios en el PR. Sigue habiendo corrección manual, pero todos los puntos de contacto con el agente quedan registrados y se pueden analizar con herramientas.

Los tres elementos habituales:

- Un sistema de issues desde el que se lanza trabajo de agentes.
- Un mecanismo de revisión (lo más fácil: la revisión de PRs de GitHub).
- Una forma de estandarizar y distribuir workflows y playbooks: un registro de skills o un repositorio compartido de GitHub.

### Capa 2: agent-izar la empresa

Un "cajón de sastre" comparable a mover un proyecto lleno de configuración local a algo que otra persona pueda montar y descubrir "con horror" todas las dependencias que no estaban aisladas:

> "Te prometo que es peor de lo que crees. Nadie que llegó pensando 'no va a ser tan difícil' salió diciendo eso al final."

Incluye:

- Escribir en el "cerebro de la empresa" cómo se trabaja y cuáles son los workflows.
- Dar acceso a CLIs, APIs y servicios internos (con preguntas de gobernanza).
- Una forma de que el agente navegue el producto para construirlo.
- Acceso a logs de producción (con su propia postura de cumplimiento).
- Un entorno donde el agente pueda ejecutar el código que escribe.

Es lo menos planificable: "dedica una o dos semanas y simplemente hazlo". El resto es muy específico de cada empresa y aparece al intentar que los agentes suban código sin intervención.

### Capa 3: bucles de mejora

Donde se pasa la mayor parte del tiempo; son componentes típicos del meta loop:

- **Mantenimiento del repositorio**: barridos diarios, nocturnos o semanales en busca de problemas.
- **Playbooks** para prácticas comunes (p. ej. cómo añadir una feature a la CLI).
- **Identificar tareas repetidas y automatizarlas** de la forma más rápida y fácil posible, porque si no la gente no lo hace.
- **Revisión periódica de la calidad del output** que lleva aprendizajes al resto del código: "vi que el agente cometió este error; actualicemos el playbook para añadir features a la CLI para que no vuelva a pasar".

### Cómo ayuda Tessl

Principios del producto: avanzar con muchos pasos pequeños en lugar de "la serpiente que se come al alce de un bocado"; "baterías incluidas" (Tessl se mantiene al día con las buenas prácticas de harness engineering por el cliente); modular y abierto (ninguna empresa será la mejor en todos los componentes); y fácil, con bucles automáticos que proponen cambios a los que solo hay que reaccionar. La promesa: "seis meses después estás al 40 % de una fábrica sin haber detenido las entregas".

- **Plano de control**: registro de skills para publicar y versionar workflows y automatizaciones con gobernanza (revisiones de seguridad y calidad, control de quién publica y actualiza), conectores de issue tracker a GitHub (por ahora Linear → GitHub workflow) y herramientas de code review agéntico y comprobaciones dirigidas. Muestra un workflow del registro escaneado por seguridad, calidad y mejora del output del agente.
- **Tessl agent**: ayuda con la gestión del cambio; mina PRs e issues para encontrar tareas repetidas (p. ej. "cada semana buscas tests flaky"), las convierte en skill y las automatiza con una GitHub Action.
- **Tareas de mantenimiento listas para usar**: escaneos semanales de calidad arquitectónica, duplicación de código, calidad de las suites de tests y vulnerabilidades, instalables "con un clic".
- **`tessl launch`**: convierte cualquier skill en un workflow automatizado; se elige el agente (Tessl agent, Codex, Claude Code, Gemini) y se ejecuta en un sandbox con permisos adecuados, de larga duración y con token de GitHub para abrir PRs y responder comentarios.

El ciclo propuesto: encontrar una mejora, tomar un workflow, convertirlo en skill, distribuirlo a todos y poner en marcha los bucles de mejora, uno a uno.

### Métricas de progreso hacia la fábrica

- Reducir las **tomas de control manuales** (manual takeovers).
- Reducir los **comentarios humanos en PRs**.
- Aumentar los **PRs iniciados sin intervención humana** (señal de automatización).
- Mantener la calidad constante primero y luego elevarla.

## Conceptos clave

- **Fábrica de software**: sistema agéntico que produce todo el producto; los humanos construyen y mejoran la fábrica.
- **Autonomía**: capacidad de los agentes de llegar a la respuesta correcta sin corrección humana.
- **Automatización**: grado en que se puede dejar correr a los agentes sin revisión para construir confianza.
- **Harness / loop engineering**: disciplina de construir los bucles que automatizan y mejoran la fábrica.
- **Inner, outer y meta loop**: bucles antes del PR, con el PR abierto y fuera del desarrollo, respectivamente.
- **Plano de control**: infraestructura que hace legibles todas las interacciones con los agentes (issues, PRs, registro de skills).
- **Agent-izar**: preparar la empresa (accesos, servicios, logs, entornos) para que los agentes trabajen sin intervención.
- **Bucles de mejora**: mantenimiento, playbooks y automatizaciones que retroalimentan skills a partir de errores observados.

## Relación con el SF KB

- [[../../01-Fundamentos/01-que-es-software-factory|¿Qué es una Software Factory?]] — redefine la fábrica para la era agéntica: los agentes producen todo el producto y el equipo de personas construye la fábrica (personas → constructores de herramientas internas).
- [[../../07-IA-Software/15-agentes-autonomos|Agentes Autónomos vs Asistidos]] — aporta la distinción operativa entre autonomía (pocas correcciones) y automatización (poca revisión), y el orden en que deben construirse.
- [[../../06-Metricas/10-ai-productivity-metrics|Métricas de Productividad con IA]] — propone métricas concretas de madurez de una fábrica: tomas de control manuales, comentarios humanos en PRs y PRs iniciados sin humanos, con la calidad como restricción.
- [[../../02-Estructura/14-plataforma-interna|Internal Developer Platform (IDP)]] — el "plano de control" y "agent-izar la empresa" son el equivalente de una plataforma interna, pero cuyo usuario principal es el agente (accesos, sandboxes, logs, registro de skills).
- [[../../07-IA-Software/22-ai-scripts-automation|Scripts y Automatización con IA]] — los bucles de mejora convierten tareas repetidas en skills ejecutadas por agentes en GitHub Actions y barridos programados de mantenimiento.

## Herramientas y referencias mencionadas

- Tessl: registro de skills, Tessl agent, `tessl launch`
- Linear, GitHub (PRs, GitHub Actions)
- Codex, Claude Code, Gemini
- Mutation testing, QA agéntico

## Referencias

- Transcripción: [[X6l4lpA0_NY - como-construir-una-fabrica-de-software|Transcripción completa]]
- Video: [Harness Engineering: How to Build a Software Factory — Dru Knox, Tessl](https://www.youtube.com/watch?v=X6l4lpA0_NY) — AI Engineer
