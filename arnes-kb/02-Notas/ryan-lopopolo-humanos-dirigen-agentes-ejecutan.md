---
title: "Harness engineering según Ryan Lopopolo: los humanos dirigen, los agentes ejecutan"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/evals-y-observabilidad
  - arnes/flujos-de-trabajo
channel: "AI Native Dev"
speaker: "Ryan Lopopolo (OpenAI)"
videoId: "c8bE0cj7vHY"
source: "https://www.youtube.com/watch?v=c8bE0cj7vHY"
language: "en"
playlistOrder: 37
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Ryan Lopopolo - Harness Engineering: How to Build Software When Humans Steer and Agents Execute"
related:
  - "[[c8bE0cj7vHY - ryan-lopopolo-humanos-dirigen-agentes-ejecutan|Transcripción]]"
---

# Harness engineering según Ryan Lopopolo: los humanos dirigen, los agentes ejecutan

Charla de Ryan Lopopolo (OpenAI) en la AI Native DevCon, seguida de una breve ronda de preguntas. Lopopolo se presenta como quien acuñó el término *harness engineering* y cuenta cómo, desde junio del año anterior (con o3 y las primeras versiones de Codex CLI), intentó que el agente hiciera su trabajo, ofreciéndose él mismo "como herramienta" del modelo y dándole cada vez más herramientas y contexto.

La charla es una de las definiciones de referencia del concepto: harness engineering es hacer legible el contexto sobre qué significa hacer un buen trabajo y entregarlo justo a tiempo al agente a lo largo de su trayectoria. Aporta un modelo de tres fases (antes, durante y después de la ejecución), una filosofía de guardrails estáticos ("nunca dar el mismo comentario de revisión dos veces") y prácticas concretas con linters, tests y agentes revisores.

## Resumen

- **Cambio de axiomas**: producir código ya no es lo caro; con GPT-5.2 y Opus 4.5 (diciembre) la producción de código llegó a niveles de "singularidad", una disrupción comparable a la llegada de la nube.
- **Reajustar con cada versión**: si no rehaces tu stack y tu forma de trabajar con cada versión del modelo, te pierdes lo que es posible.
- **Restricciones que quedan**: el tiempo humano, la atención (humana y del modelo) y la ventana de contexto.
- **Escribirlo todo**: los agentes no aprenden por ósmosis; los requisitos no funcionales deben ponerse por escrito y llegar al contexto en el momento adecuado.
- **Definición**: harness engineering es hacer legible el contexto de "buen trabajo" y entregarlo justo a tiempo durante la trayectoria del agente.
- **Errores imposibles por construcción**: cada comentario de revisión debe convertirse en un guardrail estático (lint, test, agente revisor).
- **Todo el código es prompt**: unificar patrones en el repositorio reduce la atención que el modelo necesita.
- **Tres fases**: grounding en documentación al inicio; corrección justo a tiempo vía tests y linters durante la "parte media"; LLM como juez y agentes revisores al final.
- **Guardrails burdos pero eficaces**: cobertura del 100 %, snapshot tests obligatorios, prohibir `any`/`unknown`, límites de líneas por archivo.
- **El agente debe convencer para que se haga merge**: pruebas, logs, capturas o videos de reproducción, como haría un compañero humano.
- **Capturar todo el feedback humano** y procesarlo cada noche con subagentes para detectar contexto o guardrails ausentes.

## Contenido estructurado

### Origen: presentarse como herramienta del modelo

Con modelos menos capaces, pedir al agente que leyera el canal de alertas de Slack y triara una alerta no funcionaba. Lopopolo adoptó el modo de "presentarse como herramienta del modelo" para que resolviera problemas y escribiera código por él, y eso desencadenó una bola de nieve: cada vez más herramientas potentes y más contexto sobre qué significa hacer el trabajo.

### Cómo ha cambiado la construcción de software

- Los modelos ya pueden hacer partes significativas del ciclo de vida: no solo escribir código, sino depurar, triar, responder a clientes, planificar y programar trabajo.
- Equipos, organizaciones y roadmaps se diseñaron asumiendo que producir código es caro y lento. Hoy, un prompt a un agente de código devuelve "un PR o seis".
- El objetivo de ingenieros, managers, PMs y diseñadores pasa a ser **desbloquear a su equipo de ejecución** (los agentes) para que materialicen sus ideas.

### Las restricciones que siguen vigentes

1. **Tiempo humano**: es el recurso más escaso. Lopopolo dice que su máximo son unas tres sesiones concurrentes en su portátil; para ganar paralelismo hay que retirar la atención síncrona propia del proceso.
2. **Atención humana y del modelo**: en la arquitectura de los LLM "la atención debe sumar uno"; saturar al agente con requisitos conflictivos degrada el rendimiento. Hay que trabajar más en paralelo, lanzar más tareas y aceptar muchos más PRs para dejar que los agentes exploren.
3. **Ventana de contexto**: crece, pero sigue siendo escasa. Con los modelos GPT la autocompactación funciona tan bien que puede dejar tareas de 6, 12 o 36 horas, pero el contexto se vacía y se reconstruye continuamente, así que hay que estructurarlo y volver a mostrarlo.

### Escribir qué significa hacer un buen trabajo

Los agentes no están en el stand-up ni tienen una memoria duradera que acumule "cicatrices de batalla". Por eso:

> "Lo que el LLM anhela, lo que lo impulsa, es texto."

Poner por escrito la definición de buen trabajo es una función nueva de los equipos de software en 2026, pero no basta: el texto debe llegar al agente en el momento adecuado, sin saturarlo y dejándole espacio para ser creativo y razonar.

Ejemplo: a un ingeniero nuevo le dices una vez que esos componentes de React usan *suspense* y lo incorpora a su modelo mental. Con un agente no funciona así: tras dar el feedback en un PR, hay que averiguar cómo hacer ese error **estáticamente imposible** (documentación, lints que fallen, tests, un agente revisor que mire cada diff bajo esa lente).

> "Nunca quiero dar el mismo comentario de revisión dos veces, y ese es realmente el núcleo de lo que es el harness engineering."

> "Harness engineering es hacer legible el contexto sobre lo que significa hacer un buen trabajo y entregarlo justo a tiempo al agente a lo largo de sus trayectorias, para dirigir y refinar su salida."

### Desplazar a la derecha (y luego a la izquierda)

A diferencia del "shift left" clásico de DevOps, Lopopolo coloca sus intervenciones **lo más a la derecha posible** para minimizar su propio tiempo síncrono. Si un PR sale mal, a veces basta con tirarlo, cambiar el prompt y repetir, pero eso no es duradero ni se comparte con el equipo. La escalera para desplazar a la izquierda:

1. Escribirlo (documentación).
2. Si no basta, un agente revisor que juzgue cada diff.
3. Más a la izquierda: lints, guardrails y tests verificables estáticamente.

### Podar el espacio latente

Los agentes saben escribir software de calidad, pero han visto todas las combinaciones posibles de decisiones. Nos toca "podar el espacio latente": decirles qué decisiones queremos. Un prototipo en un notebook de Jupyter y añadir un tipo de índice a una base de datos requieren decisiones muy distintas; hay que hacer legible cuándo algo es prototipo y cuándo es una funcionalidad de producción con despliegue escalonado, test A/B y feature flags, y dar herramientas para encontrar los runbooks adecuados.

**Todo el código es prompt**: como cualquier texto que recibe el agente influye en los tokens que predice, el propio código del repositorio actúa como prompt. Si hay un solo stack de observabilidad, el modelo traslada el patrón de una parte del código a otra sin pérdida; si hay seis, gasta atención decidiendo cuál usar, si está migrado y qué es lo canónico.

### Las tres fases de entrega de contexto

El elemento más importante del archivo de agente (AGENTS.md) es **una lista numerada de pasos** que el modelo debe seguir en cada sesión.

**1. Antes: grounding.** Anclarse en la base de documentación y en el ticket; recorrer el historial de decisiones y documentos de diseño para ver cómo afecta a otras funcionalidades; revisar los *critical user journeys* para saber qué pantallas se ven afectadas y tener en mente el plan de QA. Se acepta cierta lentitud para cargar el contexto global.

**2. Durante: la "parte media desordenada".** El agente escribe código, ejecuta tests y explora; se aprovechan esas llamadas a herramientas para hacer *prompt injection* justo a tiempo y devolverlo a la línea base. Los tests y lints para agentes son distintos a los de humanos: asumen que el agente trunca la salida de las herramientas y que responde bien a mensajes de error descriptivos que apuntan a runbooks de remediación.

Ejemplo de código de red: muchas caídas se deben a llamadas entre servicios sin timeout ni reintento, y no existe un plugin de ESLint que lo verifique. Como producir código es barato, se puede generar con vibe coding un guardrail con 100 % de cobertura y tests exhaustivos basados en tablas, migrar todo el código de una vez y mostrar el fallo al modelo cada vez que escriba otro `fetch`.

> "No tenemos que contaminar la ventana de contexto de antemano, y podemos aprovechar que la salida de una llamada a herramienta recibe menos peso durante una autocompactación."

**3. Después: juicio sobre un artefacto estático.** Determinar si el diff está alineado es más fácil porque es estático: se usan muchos LLM como juez operacionalizados con conjuntos de guardrails ("esto es escribir código fiable", "esto es React performante"). Como los LLM anhelan texto, los jueces colaboran con el agente implementador en el hilo del PR y lo realinean.

### AGENTS.md como mapa y personas de revisión

- AGENTS.md debe ser un **mapa** de dónde está el contexto, no un listado prescriptivo de reglas: meter demasiadas reglas "trocea" el espacio latente y dificulta que el modelo explore con creatividad.
- Apunta a un conjunto curado de **personas de revisión**: listas de guardrails en viñetas.
- Es barato mantenerlas: tras una conversación en Slack sobre cómo arreglar una regresión de rendimiento, se menciona al agente para que abra un PR que añada eso a los guardrails estáticos.
- El mismo patrón sirve para documentar las funcionalidades del producto, los critical user journeys y por qué existen las apps.

### Guardrails burdos pero eficaces

- Tests sobre el AST, sobre la estructura de archivos en disco, límites de líneas por archivo, existencia de snapshot tests.
- Exigir que cada componente React tenga un snapshot test con 100 % de cobertura de ramas lleva al modelo a descomponer, hacer componentes puros, evitar *prop drilling* y acercar los hooks a donde se usan los datos.
- Contra el "sondeo por tipos" (código lleno de `any`/`unknown`): prohibirlos con ESLint salvo al parsear entrada en un handler raíz o desde la base de datos; código 100 % tipado y 100 % de cobertura.
- Los checks que fallan explican por qué y qué hacer en su lugar, de modo que el agente puede **autocorregirse**.

### Revisión y merge: el agente debe convencer

> "Queremos tratar al modelo como otro miembro del equipo, y tiene que convencerme de hacer merge de su código."

- Igual que con un compañero: si dudas, pides logs del despliegue en staging o una captura ejercitando la funcionalidad.
- Hoy es más fácil con computer use y browser use (recomienda la app de Codex); incluso sin ellos, se puede montar con vibe coding un display headless Xvfb en Docker con ffmpeg grabando un video de reproducción.
- Sesgo hacia el merge: ¿qué problemas de prioridad P2 o superior impedirían aceptarlo? Los agentes revisores son "un job de CI en matriz que apunta a un montón de archivos Markdown"; las remediaciones se llevan a término con el agente implementador hasta que los revisores quedan satisfechos.
- Observar qué feedback aparece una y otra vez en esta fase es la señal para desplazar esos guardrails a la izquierda.

### Capturar el feedback humano y "soñar" sobre él

Cada comentario de revisión, interrupción al agente, build fallido o excepción en producción es una señal de que faltaba contexto. El objetivo es recoger todos esos datos y "soñar sobre ellos cada noche" con subagentes, para ver si los humanos pueden mejorar sus prompts o si faltan guardrails, y avanzar hacia un modo cada vez más headless y menos dependiente de interrupciones humanas.

El vibe coding es clave: muchos guardrails solo afectan al proceso de desarrollo local, así que ese código puede ser "feo". Eso permite operar como un tech lead de grupo u organización: lo que importa son las invariantes, las interfaces y que los componentes "hagan lo que dice la etiqueta" con alta fiabilidad.

### Preguntas del público

- **¿No es mejor que el agente vea una regla de lint que un comentario de revisión?** Una vez montadas las estructuras, los agentes descubren solos qué archivos de guardrails son relevantes por categoría de cambio (backend, sistema de diseño…) y los cargan en contexto, así que rara vez ve malos comportamientos. Solo desplaza más a la izquierda cuando, por ejemplo, un guardrail se necesita en tareas que abarcan unas 15 ventanas de contexto y la autocompactación lo ha eliminado. Reconoce que esto depende de que el autodescubrimiento sea fiable.
- **¿Hay una implementación práctica de extremo a extremo?** Está aplicando estas técnicas a su trabajo open source: crates derivados de Artichoke (un intérprete de Ruby en Rust), en especial `artichoke-rand-mt` (una implementación de Mersenne Twister), con automatizaciones de la app de Codex para el mantenimiento. Aún no ha incorporado los agentes revisores.

## Conceptos clave

- **Harness engineering**: hacer legible el contexto sobre qué es un buen trabajo y entregarlo justo a tiempo al agente para dirigir y refinar su salida.
- **Legibilidad para el agente**: poner por escrito los requisitos no funcionales que los humanos aprenden por ósmosis.
- **Contexto justo a tiempo**: inyectar correcciones vía salidas de tests y lints durante la ejecución en lugar de cargar reglas de antemano.
- **Podar el espacio latente**: restringir las decisiones posibles del modelo a las que el equipo considera correctas.
- **Todo el código es prompt**: el código del repositorio influye en la salida, de ahí el valor de unificar patrones.
- **Guardrail estático**: lint, test o agente revisor que hace imposible repetir un error ya detectado.
- **Personas de revisión**: listas curadas de guardrails que usan los agentes revisores (LLM como juez).
- **Desplazar a la derecha / a la izquierda**: intervenir tarde para ahorrar tiempo humano y mover a la izquierda solo los guardrails que fallan repetidamente.
- **Critical user journeys**: flujos de usuario documentados que anclan al agente en qué superficies afecta un cambio.

## Herramientas y referencias mencionadas

- OpenAI Codex CLI y la app de Codex; modelos o3, GPT-5.2 y la serie GPT.
- Claude Opus 4.5.
- AGENTS.md.
- ESLint, React (suspense, hooks, snapshot tests), Jupyter.
- Xvfb, Docker, ffmpeg (videos de reproducción); computer use / browser use.
- Slack (triaje de alertas, conversaciones convertidas en guardrails).
- Artichoke (intérprete de Ruby en Rust) y el crate `artichoke-rand-mt`.
- AI Native DevCon.

## Referencias

- Transcripción: [[c8bE0cj7vHY - ryan-lopopolo-humanos-dirigen-agentes-ejecutan|Transcripción completa]]
- Video: [Ryan Lopopolo - Harness Engineering: How to Build Software When Humans Steer and Agents Execute](https://www.youtube.com/watch?v=c8bE0cj7vHY) — AI Native Dev
