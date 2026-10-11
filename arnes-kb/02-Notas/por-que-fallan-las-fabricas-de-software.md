---
title: "Por qué fallan las fábricas de software: el harness no basta"
tags:
  - arnes/nota
  - type/nota
  - arnes/fabricas-de-software
  - arnes/flujos-de-trabajo
  - arnes/opinion
channel: "AI Engineer"
speaker: "Dex Horthy (HumanLayer)"
videoId: "Ib5GBkD555M"
source: "https://www.youtube.com/watch?v=Ib5GBkD555M"
language: "en"
playlistOrder: 32
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Why Software Factories Fail"
related:
  - "[[Ib5GBkD555M - por-que-fallan-las-fabricas-de-software|Transcripción]]"
---

# Por qué fallan las fábricas de software: el harness no basta

Charla de conferencia de Dex Horthy (HumanLayer) en AI Engineer, titulada "Harness Engineering is not enough and why software factories fail". Con tono deliberadamente polémico ("va a sonar como una queja, pero hay esperanza"), Dex sostiene que la promesa de la fábrica de software *lights-out* —donde los agentes escriben todo el código y nadie lo lee— no funciona en codebases complejos, y que el problema no es de habilidad del usuario ni se resuelve con más harness engineering o más bucles: es una limitación de cómo se entrenan los modelos de código.

Para el harness engineering la charla es un contrapunto importante: marca el límite de lo que el arnés puede compensar (el modelo no aprende mantenibilidad durante el RL) y propone un flujo de trabajo con planificación asistida por IA (producto → arquitectura → diseño de programa → vertical slices) que permite seguir revisando cada línea de código sin perder velocidad.

## Resumen

- **No es un problema de habilidad**: ningún harness engineering ni "loop maxing" resuelve lo que es fundamentalmente un problema de entrenamiento del modelo.
- **Las grietas ya son visibles**: según un informe de Faros AI, desde la adopción masiva de herramientas de código con IA bajó la calidad de la revisión de PRs, aumentaron los PRs sin revisar, los incidentes y los bugs por desarrollador.
- **La fábrica lights-out falla**: HumanLayer la probó en julio de 2025; tarde o temprano aparece un problema que el agente no resuelve y hay que bucear en un código que nadie leyó en meses.
- **Los modelos no mantienen la calidad del código**: no son capaces de mantener y mejorar la mantenibilidad de un codebase en el tiempo sin bastante dirección humana.
- **Brownfield llega antes**: los agentes empiezan a tener problemas en codebases de apenas 3 a 6 meses, dado el ritmo actual de entrega.
- **Claude Code ganó por entrenar el modelo contra su harness**: fue la primera vez que un laboratorio entrenó un modelo en el mismo harness con que lo distribuyó.
- **El RL solo premia que pasen los tests**: benchmarks tipo SWE-bench dan recompensa binaria y no pueden penalizar el mal diseño; de ahí los try/catch innecesarios y los casts para "hacer pasar el test".
- **La mantenibilidad es difícil de verificar**: el costo de una mala arquitectura se mide en meses o años, y es muy difícil propagar esa señal de recompensa hacia atrás.
- **Por ahora hay que leer el código**: los agentes revisores y más tokens suben el piso, pero siguen limitados por lo que se puede enseñar en RL.
- **Planificar para revisar rápido**: 30 minutos de planificación y alineación ahorran horas de revisión; si te ahogas en PRs, en realidad tienes demasiados PRs malos.

## Contenido estructurado

### La narrativa dominante y sus grietas

Dex parte del discurso actual: "loop engineering", escribir más bucles, la fábrica lights-out de StrongDM donde nadie lee el código, y la idea de que basta con gastar más tokens:

> "Tú eres el cuello de botella. Los modelos ya son suficientemente buenos. El código es gratis. Solo envía más cosas."

Pero aparecen grietas:

- En AI Engineer Europe, Mario pidió al público ir más despacio porque empresas que no deberían tener caídas las están teniendo por errores de agentes de código.
- Los codebases se degradan más rápido que nunca.
- El informe de Faros AI (desde enero/febrero, cuando se adoptaron masivamente estas herramientas): calidad de code review a la baja, más comentarios y más largos, muchos PRs fusionados sin revisión, más incidentes y más bugs por desarrollador.

Frente a la respuesta habitual ("lo estás usando mal"; "deja de leer el código"; "con suficiente harness engineering y revisión adversarial en tus bots de PR tendrás lo mejor de ambos mundos"), su tesis es:

> "Vengo a convencerlos de que esto no es un problema de habilidad. Ningún harness engineering ni loop maxing puede resolver lo que es fundamentalmente un problema de entrenamiento del modelo. Por eso decimos que el harness no es suficiente."

### Breve historia de la fábrica de software

El término "software factory" se definió en una conferencia de la OTAN en 1968. Dex describe tres etapas:

1. **Fábrica de 2022**: ingenieros, PMs y liderazgo deciden qué hacer → un tracker (Linear, Jira, beads; una máquina de estados) → alguien construye → pruebas automáticas/manuales → pull request con checks, revisión humana y quizá prueba manual → producción → usuarios que piden cosas y reportan bugs, más monitoreo que despierta a ingenieros a las 3 a.m. Como construir y revisar tomaban horas o días, los equipos inventaron la planificación previa (propuestas de arquitectura, sprint planning) para reducir el retrabajo y el tiempo de revisión.
2. **Fábrica agéntica**: se reemplaza "alguien construye" por "un agente construye" (orquestación, harness, sandbox, modelo, computer use). Construir pasa a tomar minutos u horas, pero la parte humana (revisar y probar) sigue en horas o días. Se añade code review agéntico y regression testing agéntico, y más bucles: los incidentes van directo a la fábrica (te despiertas con un PR), el feedback de usuarios también. Tu trabajo pasa a ser cuánto puedes meter en la cola y qué tan rápido revisas.
3. **Fábrica lights-out**: ya no se lee el código; se invierte en testing, monitoreo y rollout. El único trabajo es cuánto puedes pedirle al agente.

> "Voy a postular que esto no funciona. Y por eso fallan las fábricas de software."

Aclara que no habla de vibe coding, citando a Addy (Osmani): un proyecto personal que usarán una docena de personas y un sistema empresarial de 10 años no comparten casi ninguna restricción, y gran parte de lo que se oye en internet es un grupo diciéndole al otro cómo vivir.

### La experiencia de HumanLayer con lights-out

HumanLayer se enfoca en resolver problemas difíciles en codebases complejos (brownfield). Para Dex, los agentes empiezan a sufrir con codebases de 3 a 6 meses. En julio de 2025 intentaron ir "full lights-out":

> "Si lo han intentado en serio durante varios meses, probablemente encontraron al menos un problema que el agente no pudo resolver. Aun con tu prompting más avanzado, investigación, reproducciones, tienes que meterte en ese codebase que dejaste de leer hace 3 meses... Mientras tanto tu sitio estaba caído, tus usuarios furiosos, y si eras como yo, estabas miserable leyendo todo ese código basura que dejaste entrar."

### La limitación: mantenibilidad

Los modelos no pueden mantener y mejorar la calidad de un codebase en el tiempo sin dirección humana considerable. Por mantenibilidad se refiere, por ejemplo, a que cambiar una parte rompa otras (el *shotgun surgery* de Martin Fowler). Remite a John Ousterhout (*A Philosophy of Software Design*).

Los modelos mejoraron mucho para problemas puntuales o para hacer un sitio de marketing, pero no para mejorar la calidad de un codebase. No se puede demostrar porque no existen buenos benchmarks de esa capacidad, aunque la sensación generalizada es que los agentes empeoran el código con el tiempo.

### Por qué Claude Code ganó

Claude Code pasó de cero a unos 4.000 millones (y ahora, según dice, unos 9.000 millones) de ingresos en menos de un año. Antes ya había buenos agentes CLI (Aider, Codebuff) con las mismas herramientas: read, write, edit, grep, bash. La diferencia:

> "Fue la primera vez que un laboratorio de modelos entrenó un modelo contra el harness en el que iba a distribuirlo a los usuarios."

El equipo de OpenAI dio una charla en noviembre con la misma idea: si construyes harnesses y no controlas los pesos (no puedes hacer RL del modelo en tu harness), siempre estarás en desventaja frente a quien posee ambos.

### RL de agentes de código en 60 segundos

Con diapositivas de Calvin French-Owen (ex miembro del equipo de Codex):

- Un LLM es un predictor del siguiente token: entra la ventana de contexto, sale el siguiente paso del bucle agéntico.
- Para entrenar: se da un problema, se generan muchas trazas intentando resolverlo, se puntúan (corrección, tests) y se refuerza: el mal comportamiento se vuelve menos probable y el bueno más probable.
- Ejemplo: **SWE-bench Multilingual**, tareas de ~15 minutos de repos open source (Redis, jq, Django…), con recompensa binaria: ¿arreglaste el problema sin romper nada más?

Caso concreto (Fastlane, proyecto Ruby, un nil sin verificar que provoca una excepción):

1. Se hace checkout del commit base, anterior a la solución humana.
2. Hay un *test patch* (comportamiento esperado) y un *golden patch*, ambos ocultos al modelo.
3. El agente intenta resolver; se guarda su patch.
4. Se deshacen sus cambios a archivos de test (porque los modelos comentan tests para que pasen).
5. Se aplica el test patch dorado y se ejecutan los tests viejos y nuevos; si ambos pasan, hay recompensa.

### Por qué el RL no premia la mantenibilidad

> "En este sistema no hay forma de penalizar el mal diseño del programa ni la erosión de la mantenibilidad."

Resultado: try/catch alrededor de cosas que no lo necesitan, casts de tipos solo para que pase el test. Verificar calidad y mantenibilidad es órdenes de magnitud más difícil que verificar que el código corre y los tests pasan, porque el costo de una mala arquitectura se mide en meses y años, y es muy difícil propagar la recompensa a través de ese intervalo.

### Benchmarks emergentes

Aclara que benchmarks y verificadores son conjuntos distintos, pero tienen la misma forma y son direccionalmente indicativos:

- **SWE-Marathon** (Abundant AI): tareas de ~400 horas, como clonar todas las funciones de Microsoft Excel, con canales de recompensa sofisticados.
- **DeepSWE** (Data Curve): tareas grandes sobre repos OSS que no están en el entrenamiento porque nunca se construyeron en el mundo real.
- **Frontier Code** (Cognition): tareas multi-PR; penaliza tests que no fallan sobre el código previo al patch y usa un modelo juez para reglas de calidad.

Límite del juez:

> "Si el modelo supiera cómo es el buen código, probablemente lo escribiría así desde el principio."

Los agentes revisores y más tokens suben el piso, pero seguimos limitados por lo que se puede enseñar en RL. Conclusión: por ahora toca leer el código. Quien quiera esperar a "GPT-7" puede hacerlo, pero "al diablo con la bitter lesson, tenemos problemas que resolver".

### Volver a encender las luces: el flujo propuesto

Se reincorpora la revisión de código y se planifica por adelantado para que la revisión sea corta, usando IA para ganar apalancamiento (las tareas pequeñas siguen yendo directo al agente):

1. **Revisión de producto**: qué problema se resuelve, comportamiento deseado, mock-ups.
2. **Arquitectura de sistema**: contratos entre componentes, modelos de datos, restricciones; cómo encajan los sistemas a alto nivel.
3. **Diseño de programa** (lo más subestimado en el coding agéntico): tipos, firmas de métodos, estructura del programa, call stacks. Mucha gente asume que con la arquitectura correcta "el modelo ya cocina", pero no es así. Menciona a alguien de Cloudflare que usa grafos de llamadas en su planificación.
4. **Vertical slices**: orden de implementación, coordinación multi-repo, cómo verificar en cada paso (frente a los planes "horizontales" que tienden a generar los modelos; remite a su charla de AI Engineer Miami).

> "La idea principal: 30 minutos aquí en pre-planificación y alineación pueden ahorrarte horas en revisión."

### Demasiados PRs malos

> "No tienes demasiados PRs. Si te ahogas en PRs, en realidad tienes demasiados PRs malos. Un buen PR es un placer de revisar."

Incluso un PR que necesita 20 % de retrabajo (generoso para mucho código generado sin cuidado) es una carga emocional e intelectual para revisor y autor. Con planificación asistida por modelos:

- la alineación es más corta (la IA reúne la información de una vez),
- la revisión es más rápida (se alineó antes),
- la codificación es más rápida (la hace la IA),
- y sigues leyendo todo y siendo dueño del código.

### Consejo final

> "Somos ingenieros, y estas son solo restricciones. Los modelos son buenos en ciertas cosas y no en otras. Vayan a resolver problemas dado un conjunto de restricciones. Usen bucles, son geniales. Resuelvan problemas difíciles. Busquen apalancamiento."

Cierra presentando HumanLayer: un IDE de IA y plataforma de colaboración, "bloques de construcción para tu fábrica de software" y, próximamente, mejores verificadores de calidad de software; un espacio colaborativo tipo "Figma para Claude Code y Codex" que guía estos flujos. Gratis para equipos pequeños.

## Conceptos clave

- **Fábrica de software**: el ciclo completo tracker → construcción → PR/revisión → producción → feedback/monitoreo; término de una conferencia de la OTAN de 1968.
- **Fábrica agéntica**: la fábrica donde un agente construye y se automatizan revisión, pruebas, incidentes y feedback con bucles.
- **Fábrica lights-out**: variante en la que nadie lee el código y se confía en testing, monitoreo y rollout.
- **Mantenibilidad**: capacidad de cambiar una parte del código sin romper otras; los modelos no la mejoran sin dirección humana.
- **Shotgun surgery**: code smell (Martin Fowler) en el que un cambio obliga a tocar muchas partes.
- **Recompensa binaria de RL**: puntuar una traza solo por "tests pasan / no pasan", sin señal sobre diseño.
- **Diseño de programa**: nivel entre arquitectura y código (tipos, firmas, call stacks) que se debe planificar explícitamente.
- **Vertical slices**: plan de implementación por rebanadas verticales verificables, en lugar de capas horizontales.
- **Harness co-entrenado**: ventaja de quien entrena el modelo en el mismo harness donde lo distribuye.

## Herramientas y referencias mencionadas

- HumanLayer (empresa del ponente), StrongDM (fábrica lights-out), Faros AI (informe sobre calidad y adopción de IA)
- Claude Code, Codex, Aider, Codebuff; trackers Linear, Jira, beads
- SWE-bench Multilingual, SWE-Marathon (Abundant AI), DeepSWE (Data Curve), Frontier Code (Cognition)
- Martin Fowler (shotgun surgery), John Ousterhout (*A Philosophy of Software Design*), Addy Osmani, Calvin French-Owen, Mario (AI Engineer Europe)
- Conferencia de la OTAN de 1968 (origen de "software factory"), la "bitter lesson"

## Referencias

- Transcripción: [[Ib5GBkD555M - por-que-fallan-las-fabricas-de-software|Transcripción completa]]
- Video: [Why Software Factories Fail](https://www.youtube.com/watch?v=Ib5GBkD555M) — AI Engineer
