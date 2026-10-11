---
title: "Del prompt engineering al harness engineering: el modelo es el motor, el harness es el coche"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/construccion
channel: "Ester Serra - AI & Agentic Analytics"
speaker: "Ester Serra"
videoId: "XbWoMI5MPC4"
source: "https://www.youtube.com/watch?v=XbWoMI5MPC4"
language: "es"
playlistOrder: 57
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "De Prompt Engineering a Harness Engineering: La nueva arquitectura de los Agentes de IA"
related:
  - "[[XbWoMI5MPC4 - de-prompt-engineering-a-harness-engineering|Transcripción]]"
---

# Del prompt engineering al harness engineering: el modelo es el motor, el harness es el coche

Ester Serra presenta, en un video divulgativo de unos 11 minutos, por qué el resultado de un agente de IA depende mucho más de lo que rodea al modelo que del modelo en sí. Parte de un caso concreto (dos asistentes de atención al cliente con el mismo modelo que dan respuestas opuestas) y usa durante todo el video la metáfora del motor de un Ferrari fuera del coche: el modelo es fuerza en bruto, y el harness es todo lo que convierte esa fuerza en movimiento.

Para el harness engineering, el video ofrece un marco de diagnóstico sencillo: cinco piezas (contexto, capacidades, reglas, memoria y validación), cada una asociada a un síntoma de fallo engañoso, y un "harness mínimo" hecho de cinco ficheros de texto. Termina anunciando que la primera pieza a construir es el contexto (context engineering), tema del siguiente video de la serie.

## Resumen

- **Mismo modelo, resultados opuestos**: dos asistentes con el mismo modelo, API y versión responden a la misma pregunta; uno acierta y el otro promete una devolución basada en una política antigua.
- **El prompt es solo lo visible**: culpamos al prompt porque es lo único que vemos, junto con el modelo; todo lo demás queda oculto.
- **El modelo nunca trabaja solo**: siempre trabaja "dentro de algo"; lo que cambia entre un buen y un mal resultado es lo que le llega al modelo y lo que hay a su alrededor.
- **Metáfora del motor**: el modelo es el motor; sin transmisión, dirección, frenos ni sensores no lleva a ninguna parte. El coche no hace más potente al motor, convierte su potencia en movimiento.
- **El harness es el intermediario**: entre el usuario y el modelo hay una estructura que recoge la petición, prepara lo que el modelo necesita y revisa lo que produce antes de devolverlo.
- **Qué no es un harness**: no es un prompt largo, ni un agente, ni un framework, ni RAG, ni MCP; todo eso puede vivir dentro del harness, pero el harness es la estructura que lo coloca y lo hace trabajar.
- **Caso Vercel**: un agente con 16 herramientas a medida fallaba; al quitarlas y dejar solo herramientas básicas, fue más rápido y más preciso.
- **Cinco piezas, cinco síntomas engañosos**: contexto, capacidades, reglas, memoria y validación; cada fallo aparenta una cosa y esconde otra.
- **Harness mínimo en ficheros**: `AGENTS.md` (reglas), `docs` (saber), `tasks` (tarea actual), `progress` (lo ya decidido) y `check` (comprobaciones). Es completo cuando responde a las cinco preguntas.
- **Cambio de rol**: dejar de ser alguien que usa modelos para ser alguien que diseña el lugar donde esos modelos trabajan.

## Contenido estructurado

### El caso de los dos asistentes

Un cliente de una tienda pregunta si puede devolver un producto que ya ha abierto:

- **Asistente 1**: consulta la política correcta, detecta la excepción y le dice al cliente exactamente qué puede hacer.
- **Asistente 2**: responde igual de rápido, seguro y convincente, pero usa una política antigua y promete una devolución que ya no existe.

> "Ambos agentes usan el mismo modelo, la misma API, la misma versión, exactamente lo mismo, pero dando dos resultados opuestos."

La explicación: uno seguramente recibió la política correcta, sabía dónde consultarla y tenía a alguien revisando su respuesta; el otro respondía a ciegas.

### Por qué culpamos al prompt

Llevamos años oyendo que la clave es "saber hablarle al modelo": la instrucción perfecta, las palabras exactas. Según Ester, esa explicación resulta cómoda porque el prompt y el modelo se ven, pero todo lo demás no; cuando algo falla, culpamos a lo único que podemos señalar.

> "Si todo de verdad dependiera del prompt, ¿por qué falla tanta gente que tiene el mejor modelo y el mejor prompt?"

> "El modelo no cambia, lo que cambia es lo que llega a ese modelo, y el fallo no está tanto dentro del modelo, sino en todo lo que hay a su alrededor."

### La metáfora del motor y el coche

- El motor de un Ferrari apoyado en el suelo de un taller no te lleva a ningún sitio: le falta la transmisión, la dirección, los frenos, los sensores.
- El modelo es ese motor: fuerza y capacidad. Lo que decide si esa fuerza te lleva a algún sitio o te deja tirado es todo lo que le pones alrededor.
- El coche no hace más potente al motor; convierte la potencia en algo que se mueve.
- La pregunta clave no es solo qué necesita para ser un coche, sino qué necesita para ser "un coche que no te deje tirado en la cuneta".

El entorno no solo decide la información que recibe el modelo; también decide **qué puede hacer, cómo actúa y quién lo corrige**. El asistente equivocado pudo fallar porque:

1. Nadie le pasó la política actualizada.
2. No tenía forma de consultarla.
3. No tenía instrucción de pasar la duda a una persona cuando dudara.
4. No había forma de saber que la política había cambiado la semana anterior.
5. No había un human in the loop: nadie miró su respuesta antes de que le llegara al cliente.

> "Cualquiera de esas cosas hace que falle y ninguna es culpa del modelo."

> "El entorno decide qué sabe el modelo, qué puede tocar, en qué orden ejecuta y qué no debe ejecutar."

Conclusión: casi siempre falla todo lo que se monta alrededor del motor, y "arreglar el coche acostumbra a funcionar mejor que cambiar el motor".

### El harness como intermediario

Solemos imaginar una interacción directa (tú preguntas, el modelo responde), pero entre tú y el modelo hay un intermediario que recoge la petición, le prepara lo que necesita y revisa lo que produce antes de devolvértelo. Analogía: si pisas el freno pero el pedal no está bien conectado, el coche no para, porque no hablas con el motor directamente.

Ese intermediario (el coche entero que rodea al modelo) es el **harness** ("arnés"). Ester aclara el origen del término:

- No viene del arnés del caballo, como se ha explicado en otros videos, sino de la ingeniería.
- Un harness es un banco de pruebas donde se prueba una pieza, el cableado que sostiene un sistema, "la estructura que rodea algo para que funcione".

Lo que **no** es un harness: ni un prompt largo, ni un agente, ni un framework, ni RAG, ni MCP. Todo eso puede estar dentro del harness, pero el harness es la estructura entera que lo coloca en su sitio y lo hace trabajar.

### Caso Vercel: menos herramientas, mejor agente

- Vercel tenía un agente de programación que no terminaba de funcionar.
- Siguiendo el sentido común, le habían construido **16 herramientas a medida**, una para cada cosa que tenía que hacer.
- El agente seguía fallando. Probaron lo contrario: quitar las 16 herramientas y dejarle solo las herramientas básicas de cualquier sistema.
- Resultado: el mismo sistema fue más rápido y más preciso.

La razón: las herramientas a medida eran nuevas para el modelo, cada una con su formato particular, y tenía que aprender a usarlas. Las básicas las había visto "un millón de veces" y las maneja sin pensar. Las 16 herramientas que en teoría ayudaban eran en realidad un estorbo.

### Las cinco piezas y sus síntomas engañosos

| # | Lo que parece | Lo que realmente pasa | Pieza | Pregunta |
|---|---------------|------------------------|-------|----------|
| 1 | El modelo se inventa cosas | No las sabe porque nadie se las dio | **Contexto** | ¿Qué sabe? |
| 2 | Le faltan herramientas | Le sobran (caso Vercel) | **Capacidades** | ¿Qué puede hacer? |
| 3 | Decide mal, hace las cosas en mal orden | Nadie le dijo en qué orden hacerlas | **Reglas** | ¿Cómo actúa? |
| 4 | Se contradice, olvida lo hablado hace 5 minutos | No tiene dónde apuntarlo | **Memoria** | ¿Qué recuerda? |
| 5 | Entrega algo mal con total seguridad | Nadie comprueba su trabajo antes de darlo por bueno | **Validación** | ¿Cómo se revisa? |

Ante una respuesta que no cuadra hay dos caminos:

1. Culpar al modelo y esperar uno mejor. Aunque cambies el modelo, el fallo seguirá, "porque nunca fue un problema de modelo".
2. Preguntarse cuál de las cinco piezas falló: ¿le faltaba información (contexto)? ¿sabía la respuesta pero no podía actuar (capacidades)? ¿hizo las cosas en un orden incorrecto (reglas)? ¿olvidó algo que ya se le había dicho (memoria)? ¿entregó algo mal con total seguridad (validación)?

### El harness mínimo: cinco ficheros de texto

En la práctica, el harness "se resume en unos pequeños ficheritos de texto":

| Fichero | Contenido | Pieza / pregunta |
|---------|-----------|-------------------|
| `AGENTS.md` | Quién es el agente, qué puede hacer y en qué orden | Reglas: cómo decide |
| `docs` | Lo que tiene que saber: políticas, lo que no puede inventarse | Contexto: qué sabe |
| `tasks` | La tarea actual y por dónde va | Qué está haciendo |
| `progress` | Lo que ya pasó y lo que se decidió, para que no se olvide | Memoria: qué recuerda |
| `check` | Las comprobaciones que debe pasar antes de dar algo por terminado | Validación: cómo se valida |

> "No son carpetas, son cinco respuestas a las cinco preguntas de antes. Un harness mínimo no es grande, es completo cuando responde a estas cinco preguntas."

Flujo resultante: la petición ya no va directa al modelo "esperando que acierte de milagro", sino que pasa por las reglas, recoge lo que necesita saber, deja trabajar al modelo, guarda lo hecho, comprueba si está bien y "entonces y solo entonces" responde.

### Cambio de mentalidad

- Un motor más potente no arregla una transmisión que patina, una dirección suelta ni unos frenos que no responden: "solo vas a tener un coche roto con un motor caro". Con los modelos hacemos lo mismo: el coche no anda y compramos un motor más grande.
- Ante un mismo fallo, unos piden "más motor" (el modelo más nuevo, más potencia) y otros preguntan qué parte del coche no está llevando la fuerza a las ruedas. Lo que los separa no es cuánto saben de IA, sino dónde miran cuando algo se rompe.
- Ejercicio propuesto: la próxima vez que una herramienta de IA falle, aguantar las ganas de cambiar de modelo y pasarle las cinco preguntas.
- Lo que realmente se entrena es dejar de mirar la pieza para mirar el sistema, y pasar de usar modelos a diseñar el sitio donde trabajan.

> "La inteligencia casi nunca es la que falla. Lo que falla es el sistema que la rodea. La capacidad es solo fuerza y el harness es lo que la convierte en un sitio al que llegar."

### Siguiente paso: context engineering

La primera pieza a construir es la más básica: decidir qué sabe el modelo, qué información entra, cuál se queda fuera y cómo evitar que responda a ciegas. Ese paso tiene nombre propio, **context engineering**, y es el tema del siguiente video.

## Conceptos clave

- **Harness (arnés)**: el intermediario y la estructura completa que rodea al modelo (recoge la petición, prepara lo que necesita y revisa lo que produce). El término viene de la ingeniería (banco de pruebas, cableado), no del arnés del caballo.
- **Modelo como motor**: el modelo aporta fuerza y capacidad brutas; el harness no lo hace más potente, convierte esa potencia en resultados.
- **Contexto**: lo que el modelo sabe; su ausencia se ve como alucinación.
- **Capacidades**: lo que el modelo puede hacer (herramientas); el exceso de herramientas a medida puede empeorar el resultado.
- **Reglas**: cómo actúa y en qué orden; su ausencia se ve como malas decisiones.
- **Memoria**: lo que recuerda; su ausencia se ve como contradicciones u olvidos.
- **Validación**: cómo se revisa el trabajo antes de darlo por bueno, incluido el human in the loop; su ausencia se ve como errores entregados con total seguridad.
- **Harness mínimo**: cinco ficheros (`AGENTS.md`, `docs`, `tasks`, `progress`, `check`) que responden a las cinco preguntas; es completo, no grande.

## Herramientas y referencias mencionadas

- Vercel (caso del agente con 16 herramientas a medida)
- `AGENTS.md`
- MCP, RAG, frameworks de agentes (mencionados como componentes que pueden vivir dentro del harness)
- Human in the loop
- Context engineering (tema anunciado para el siguiente video)

## Referencias

- Transcripción: [[XbWoMI5MPC4 - de-prompt-engineering-a-harness-engineering|Transcripción completa]]
- Video: [De Prompt Engineering a Harness Engineering: La nueva arquitectura de los Agentes de IA](https://www.youtube.com/watch?v=XbWoMI5MPC4) — Ester Serra - AI & Agentic Analytics
