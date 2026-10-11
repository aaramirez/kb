---
title: "Agentes automejorables: evolucionar el harness, no el modelo"
tags:
  - arnes/nota
  - type/nota
  - arnes/evals-y-observabilidad
  - arnes/construccion
  - arnes/produccion
channel: "The Carbon Layer"
speaker: "The Carbon Layer"
videoId: "KoDohnhLpJM"
source: "https://www.youtube.com/watch?v=KoDohnhLpJM"
language: "en"
playlistOrder: 40
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Self-Improving AI Agents | Evolving the Harness, Not the Model"
related:
  - "[[KoDohnhLpJM - agentes-automejorables-evolucionar-el-harness|Transcripción]]"
---

# Agentes automejorables: evolucionar el harness, no el modelo

El autor del canal The Carbon Layer cierra su serie sobre un agente de programación construido a mano ("Gemma", un agente sobre un modelo Gemma local cuantizado) con un experimento contado en cinco actos: un loop de automejora en el que un segundo modelo más potente (Fable) observa los fallos del agente, diagnostica la causa y propone cambios **al harness**, nunca a los pesos del modelo. Cada cambio se valida con una suite de evals antes de confiar en él, y el resultado final es un pull request real en su repositorio público que pasó todos los tests y que, deliberadamente, sigue sin fusionarse hasta que una persona lo revise.

El video importa para el harness engineering porque aterriza ideas muy citadas (el "loop engineering" de Lilian Weng, el paper Self-Harness del Shanghai AI Lab y un paper de Ant Group sobre agentes autoevolutivos a escala empresarial) en un caso pequeño, medible y honesto: una superficie editable explícita, evaluación aislada del editor, conjuntos held-in/held-out, revisión tarea por tarea y despliegue con humano en el loop. Termina con un checklist para distinguir la "automejora" de ingeniería de la de marketing.

## Resumen

- **Mejorar el harness, no el modelo**: el modelo queda congelado (los pesos no cambian); lo que se edita es el software que lo rodea, como cualquier otro software, y se demuestra que la edición funciona antes de publicarla.
- **Ventajas**: el agente mejora al ritmo del equipo, no del proveedor del modelo; cada mejora se puede leer, probar y revertir; un fallo detectado se convierte en una corrección permanente y testeada.
- **Escalera de cinco niveles (Lilian Weng)**: prompt → contexto → workflow → código del harness → el propio mecanismo que mejora. Cada nivel es más arriesgado; el experimento está en el nivel 4.
- **Weakness mining y clusters**: se agrupan solo los fallos que comparten una causa real; los fallos aleatorios (flaky) se anotan y se descartan como ruido.
- **Elegir el tipo de corrección**: dato faltante → memoria; fallo en enrutado de herramientas, lectura de resultados o guardrails → harness; fallo persistente en todas las tareas y usuarios → modelo.
- **Held-in / held-out y tasas fraccionales**: el proponente ve una parte de las tareas y no la otra; cada tarea se ejecuta varias veces y se registra una fracción (2/3), no un pasa/falla.
- **Regla de aceptación**: el candidato debe ser al menos igual de bueno en ambos conjuntos y estrictamente mejor en al menos uno; sin crédito parcial.
- **Superficie editable**: un único archivo JSON versionado (35 líneas, 11 valores) es todo lo que el editor externo puede tocar; las evals viven en otra parte del proyecto que el editor nunca ve.
- **El caso real**: un límite de truncado (`clamp`) de 4.000 caracteres cortaba el final de los archivos de log; el ganador lo subió a 12.000 y arregló el fallo sin romper nada.
- **Mirar tarea por tarea**: un candidato rompió una tarea por completo pero el total apenas cambió porque otra tarea flaky subió por azar; solo la revisión por tarea lo detectó.
- **Humano en el loop**: el pipeline abre un PR en una rama, no en main, y no fusiona automáticamente ("despliegue seguro, auditado y por etapas").
- **Límite honesto**: la corrección es estrecha (más grande el "balde"); la mejor solución (conservar inicio y final) es código, y el código quedaba fuera de la superficie editable.

## Contenido estructurado

### La premisa: un PR que nadie ha fusionado

El video abre con un pull request abierto en el repositorio público del autor, escrito por un modelo de IA tras encontrar un bug en el agente de la serie. El cambio no toca el modelo, solo el harness. Pasó todos los tests, pero aún no se ha fusionado.

> "La etiqueta de IA autoevolutiva o automejorable se le pega a todo: modelos que se reentrenan, workflows que ajustan sus propios prompts, sistemas que reescriben su propio código... Este video trata de la versión que más importa si eres builder: un loop que mejora el harness y deja el modelo en paz."

Recordatorio de la serie: **un agente = modelo + harness + UI**. El modelo rara vez cambia; casi todo lo que hace bueno o malo a un agente vive en el harness. La pregunta del video: una vez construido el harness a mano, ¿puede otra cosa mejorarlo de forma segura sin que una persona reescriba el código?

La idea en términos llanos: ¿y si un segundo modelo, más potente, pudiera ver fallar al agente, entender por qué y proponer un arreglo al harness, y además se pudiera comprobar si el arreglo ayudó antes de confiar en él? Sin reentrenamiento y sin "escribir un prompt mejor y cruzar los dedos". El resultado concreto del experimento: **un número en un archivo de configuración pasó de 4.000 a 12.000**. Lo interesante es todo lo que rodea a ese número: cómo se encontró el bug, cómo se propuso el arreglo y cómo se demostró que era seguro.

### Loop engineering y la escalera de cinco niveles

El autor menciona que el "loop engineering" está en boca de todos (cita a Peter Steinberger y a Boris, de Anthropic), y toma como referencia a Lilian Weng, quien sostiene que la automejora vive en el harness más que en un modelo más grande. Su escalera, de lo más seguro a lo más arriesgado:

1. **Mejorar el prompt**: las instrucciones, el system prompt, el `AGENTS.md`.
2. **Mejorar el contexto**: el material que se entrega junto con las instrucciones.
3. **Mejorar el workflow**: los pasos que sigue el agente.
4. **Mejorar el código del harness**: de algún modo incluye a los anteriores.
5. **Mejorar lo que hace la mejora**: el nivel meta.

Cada nivel abarca en parte a los de abajo y es un cambio más grande y arriesgado. El experimento se sitúa en el nivel 4. Conviene saber en qué peldaño estás antes de empezar a subir.

### Qué significa "de forma segura"

> "Es fácil construir algo que edite su propio harness, pero es mucho más difícil construir algo que solo haga cambios que puedas inspeccionar, rechazar o deshacer, y que lo haga siempre."

La distancia entre "pasa los tests" y "se publica" es lo que aquí significa *seguro*. El fallo de referencia para todo el video: una pregunta cuya respuesta está cerca del final de un archivo de log muy largo, en la que el agente falla siempre.

### Las tres fuentes (y quién dijo qué)

- **Paper de Ant Group, HKUST y Tsinghua** sobre agentes autoevolutivos a escala empresarial (el nombre aparece mal reconocido en la transcripción): aporta el *porqué*. Agente como modelo envuelto en un harness con memoria, herramientas y guardrails; elegir el tipo de corrección adecuado; rollback como acción de primera clase; trazas completas.
- **Self-Harness (Shanghai AI Lab)**: aporta el *cómo*. Weakness mining, clusters, held-in/held-out, ejecución repetida con fracciones y regla de aceptación.
- **Post de Lilian Weng**: aporta el *dónde encaja*. Loop engineering y la escalera de cinco niveles.
- **Términos del autor**: "mineros" frente a "guardas de regresión" y "capability mismatch" (desajuste de capacidades) son etiquetas suyas para describir lo que construyó.

> "Seré honesto sobre qué idea viene de qué fuente, porque citar mal un paper aquí es peor que no citarlo."

### Acto 2: el mecanismo, un término a la vez

**Weakness mining.** Ejecutas el agente normalmente, lo dejas fallar y examinas si los fallos son el mismo problema repetido o errores sueltos sin relación. Solo se agrupan fallos con una causa real compartida; un desliz aislado no cuenta. En el caso del log, el agente describía lo que fallaba casi con la misma frase cada vez. Ese grupo es un **cluster**, la unidad sobre la que trabaja el resto del pipeline.

**El tipo de corrección adecuado** (del paper de Ant Group):
- Falta un dato → lo más barato: guardarlo en memoria.
- Falla el enrutado de una llamada a herramienta, la lectura de un resultado o el cumplimiento de un guardrail → problema de harness, se arregla editando el harness.
- El fallo aparece haga lo que haga con memoria o harness, en todas las tareas, usuarios y proyectos → señal de que hay que tocar el modelo.

El video trata solo del caso intermedio.

**Mineros y guardas de regresión** (términos del autor). Algunas tareas se escriben esperando que fallen, porque ya sabes que el harness tiene un hueco ahí (lo encontraste mirando los fallos reales): alimentan el mining. Otras se escriben esperando que pasen, y su trabajo es "quedarse calladas y quejarse fuerte" si un arreglo rompe otra cosa. Una suite hecha solo de fallos esperados no detecta un arreglo que mejora una cosa y rompe otra.

**Held-in y held-out.** Para saber si el arreglo entendió el problema o solo memorizó el test, las tareas se dividen en dos montones: el que el proponente ve (held-in) y el que se le oculta a propósito (held-out). En el proyecto, dos tareas tropiezan con el mismo problema del log: el proponente vio una (A2) y la otra quedó oculta (A4).

**Fracciones, no pasa/falla.** Los modelos pequeños cuantizados como Gemma no son consistentes: la misma pregunta puede dar respuestas distintas. Cada tarea se ejecuta varias veces y se registra una fracción (2/3), y al comparar se promedian fracciones en lugar de tomar la respuesta más frecuente (metodología del paper Self-Harness). Con 13 tareas y varios intentos cada una, cada candidato se mide con **49 ejecuciones** contra el modelo en vivo.

**Regla de aceptación.** El candidato debe ser al menos igual de bueno en ambos montones y estrictamente mejor en al menos uno. Si mejora en un sitio y empeora en otro, se rechaza.

Advertencia del paper de Ant Group:

> "Un sistema autoevolutivo que no puede explicar qué cambió no está evolucionando: está a la deriva."

Y revertir un cambio malo no debería ser un procedimiento manual de emergencia, sino algo normal y de primera clase.

**Superficie editable.** Antes de que algo externo pueda proponer cambios, el harness debe declarar exactamente qué puede cambiar: una lista corta, con nombre y versionada. Todo lo de fuera sigue siendo intocable.

### Variación respecto al paper: proponente externo

En Self-Harness el mismo modelo diagnostica sus errores y propone su arreglo. Aquí se separa: Gemma queda totalmente congelado y solo se evalúa; un modelo externo, Fable, diagnostica y propone. El motivo: pedirle a un modelo pequeño que arregle su propio punto ciego es pedirle que vea más allá de lo que no puede ver, y un modelo externo no comparte ese punto ciego. El autor lo presenta como una variación declarada, no como el experimento del paper.

El coste: **capability mismatch**. Un modelo más fuerte puede proponer algo ingenioso o con matices que un modelo pequeño cuantizado no sea capaz de seguir, un riesgo que el paper original no tenía.

### Recapitulación del mecanismo

1. Algo falla repetidamente por una razón compartida → **cluster**.
2. Se muestran algunas tareas afectadas al proponente y se ocultan otras → **held-in / held-out**.
3. El proponente sugiere un cambio solo dentro de la lista permitida → **superficie editable**.
4. El cambio se prueba contra todo, no solo contra lo que buscaba arreglar.
5. Cuenta solo si nada empeoró en ningún sitio y algo mejoró estrictamente → **regla de aceptación**.

### Acto 3: la construcción

**Centralizar la configuración sin cambiar el comportamiento.** Los parámetros que gobernaban el comportamiento del harness estaban repartidos en cinco archivos. El autor los reunió en un solo lugar: **35 líneas, 11 valores y un número de versión**. El código antiguo lee de ahí, así que el agente se comporta igual, pero ahora el harness puede responder con honestidad qué es editable de sí mismo. El docstring del archivo lo dice: un archivo JSON es toda la superficie editable del harness.

**Separar la evaluación del editor.** Si los tests que califican un arreglo están cerca de lo que se edita, el editor puede hacer trampa, "no por malicia, sino por eficiencia": es más fácil editar el test que arreglar el problema. Las tareas y todo lo que califica a un candidato viven en una parte separada del proyecto que el editor nunca ve.

**Trazas completas** (idea del paper de Ant Group): un número de pasa/falla no basta para aprender; se necesita la traza: qué vio el agente, qué hizo, qué le devolvieron, sellado con la versión exacta del harness. Cada ejecución se registra completa (cada llamada a herramienta y cada respuesta), ligada al commit del agente y a la versión de la configuración probada.

**Cómo se construyó.** Con varias sesiones de IA aisladas, cada una con un brief autocontenido:
- Una sesión leyó y sintetizó las tres fuentes.
- Otra, sin el contexto de la primera, revisó su trabajo y las tareas de forma adversarial.
- Otras construyeron el archivo de configuración y el runner que mide la tasa de acierto.

La revisión adversarial encontró **cinco problemas reales** antes de la primera ejecución. Dos ejemplos:
- Un test podía pasar aunque el agente no hiciera nada (un agente "que no hace nada" recibía crédito).
- Nada impedía que un candidato reescribiera la clave de respuestas (el archivo contra el que comprueba el test). Solución: guardar una huella (fingerprint) de cada archivo sembrado al escribirlo; si cambia, la tarea falla automáticamente.

> "Hasta que una suite se ha revisado con este rigor, no es una vara de medir; es una suposición."

**La suite.** 13 tareas pequeñas escritas a mano, en cuatro grupos, todas basadas en cosas que el agente hizo de verdad durante la serie:
1. Si el harness pierde información en una sesión larga.
2. Si el agente afirma un éxito que no puede demostrar.
3. Si filtra algo que no debería.
4. Si recurre a una herramienta en lugar de adivinar.

**Línea base.** 13 tareas, de 3 a 5 intentos cada una, contra el modelo local real: casi todo en verde. Solo dos tareas fallaron en todos los intentos, justo las del log: A2 (visible para el proponente) falló 3 de 3 y A4 (oculta) falló 5 de 5. Dos filas rojas, una causa compartida: ese es el cluster. Las otras diez pasaron siempre: "15 capítulos de harness engineering deliberado aguantaron una suite bastante adversarial".

### Acto 4: la función `clamp` y el fallo del log

Toda la historia gira en torno a una función de seis líneas, `clamp`: cuando algo que lee el agente es demasiado grande, el harness conserva el principio hasta un límite, descarta el resto y deja una pequeña marca con cuánto se cortó. Es simple a propósito y tiene la debilidad esperable: si lo importante está más allá del límite, desaparece antes de que el modelo vea un solo token.

La respuesta del agente en el fallo:

> "El log termina abruptamente con una secuencia truncada. No puedo determinar la contraseña con la información proporcionada."

El modelo notó el corte y se negó a adivinar. Un modelo que mintiera con confianza habría sido mucho más difícil de diagnosticar; este dice en lenguaje claro dónde está el bug: en la "fontanería" alrededor del modelo.

**El mining en acción**: otra tarea salió flaky (pasaba casi siempre, fallaba a veces, sin patrón). Esos fallos no se agruparon ni generaron propuestas: se anotaron como ruido. Y según la bifurcación memoria/harness/modelo, un resultado de herramienta cortado antes de llegar al agente apunta directamente al harness.

### Diagnóstico de Fable y cómo se prueba cada candidato

Fable propuso **tres arreglos, los tres del mismo tipo: subir un número**. En su razonamiento dijo, casi literalmente:

> "Ninguna edición de instrucciones puede recuperar datos que nunca entran en la ventana."

Era el diagnóstico correcto. Como la superficie editable no tenía un campo para cambiar la *estrategia* de recorte, solo su valor, cualquier propuesta posible iba a ser un número mayor. Cada propuesta incluía su propia evaluación de riesgo escrita, y la tercera señalaba de antemano la tarea que podía perjudicar.

Probar un candidato es poco dramático:
1. Se edita el archivo de configuración en la copia de trabajo, como si lo hubiera tecleado una persona.
2. Se ejecuta la suite completa de 13 tareas contra esa copia (todas, no solo A2).
3. Sea cual sea el resultado, la edición se revierte. El registro muestra el mismo commit que la línea base, un indicador `dirty: true` y una huella de qué era lo "sucio".

Un candidato rechazado nunca se convierte en commit ni toca el historial. Solo el que supera la regla de aceptación se vuelve permanente.

**El sistema detectó sus propios bugs.** El primer dry run falló: uno de los tests se comparaba contra el valor *vivo* del número que se estaba editando, así que cualquier arreglo que lo subiera lo suficiente haría fallar el test. El mejor arreglo previsto era estructuralmente imposible: "la vara de medir estaba acoplada a lo que medía". Se corrigió fijando el test al valor registrado el día en que se escribió y, como eso cambiaba la herramienta de medición, hubo que volver a grabar la línea base.

### Resultados de los tres candidatos

| Candidato | Límite de lectura | Resultado |
|---|---|---|
| 1 | 4.000 → 8.000 caracteres | Ayudó en algo pero no arregló el fallo: la línea de la contraseña empieza en el carácter 8.690. Casi. |
| 2 | 4.000 → 12.000 caracteres | Arregló el fallo por completo sin coste en el resto de la suite. **Ganador.** |
| 3 | (mayor) | Rompió una tarea que siempre pasaba, por un efecto secundario en la gestión de memoria de conversaciones largas. |

Con el candidato 2, mismo modelo y mismos pesos, la respuesta en los tres intentos fue directamente la contraseña buscada. Las ejecuciones fallidas tardaban unos 19 segundos en explicar lo que no podían ver; la corregida responde en menos de dos.

**El candidato 3 y el problema del agregado.** La tarea rota pasó de pasar siempre a fallar siempre, y no de forma ruidosa: cada intento corría más de un minuto y devolvía una respuesta vacía. Pero en esa misma ejecución otra tarea flaky subió más o menos lo mismo, así que el total apenas se movió. **Aplicada literalmente sobre el agregado, la regla lo habría aceptado.** Solo se detectó al revisar cada tarea por separado; el paper del que viene la regla reconoce esa limitación.

**Honestidad también con el ganador.** Su mejora total no fue solo el arreglo real: la tarea fallida se recuperó por completo, pero una parte pequeña fue ruido (otra tarea flaky que subió un poco por azar). Reportar solo el total habría exagerado la victoria.

**Capability mismatch, revisado.** No causó problemas esta vez, pero solo porque el arreglo ganador era un número y no una frase, una estrategia o código: "los números no se pierden en la traducción como la prosa o el código". Los otros dos candidatos muestran que Fable se equivocó sobre el tamaño necesario y sobre un efecto secundario que no anticipó del todo.

### Acto 5: el PR que espera a una persona

El pipeline abrió un pull request real contra el repositorio público, en su propia rama y no en main: "Evolving the harness, iteration 1: max item characters 4,000 → 12,000". Después, automáticamente, no pasa nada: el PR espera a que el autor lo lea y decida.

> "Habría sido fácil automatizar todo el loop (minar, proponer, validar y fusionar) sin ningún humano. No lo construí así a propósito."

El paper de Ant Group lo llama **despliegue seguro, auditado y por etapas**: cada cambio debe tener su propio camino de promoción, revisado antes de publicarse, no después. Poder deshacer un cambio y decidir no publicar uno automáticamente son el mismo instinto apuntando en dos direcciones.

**Cómo es revisar de verdad** (más que leer el resumen y pulsar merge):
- Comprobar que la razón declarada del arreglo coincide con los números por tarea.
- Comprobar que es el cambio más pequeño que explica la mejora, o si hace más de lo necesario.
- Preguntarse si uno habría propuesto el mismo arreglo y, si no, por qué.

Por eso el pipeline usa un PR por arreglo y una tabla completa en lugar de un solo número: para que la revisión lleve unos minutos de lectura.

### Costes ocultos y límites

**Fuga del held-out.** La tarea oculta al proponente acabó influyendo en qué candidato ganó, porque formaba parte de la puntuación usada para comparar los tres. Fable nunca la leyó, pero usarla para elegir filtra información sobre ella al arreglo superviviente. Una vez no importa; repetido durante muchas iteraciones, "el montón oculto deja de estar oculto, una edición aceptada a la vez". Solución: retirar y reemplazar periódicamente las tareas held-out.

**Lo que esta versión aún no puede hacer.** El arreglo es real pero estrecho: funciona porque ese contenido de prueba cabe en 12.000 caracteres. Solo agrandó el balde; el harness no es más listo sobre qué conservar. Existe un arreglo mejor: conservar el principio y el final de algo largo, el mismo truco que el harness ya usa en la compactación de conversaciones largas ("la respuesta ya estaba en el edificio"). Pero ese truco es código, no un número, y nada fuera del archivo de configuración podía tocarse.

### Próximos pasos

1. **Ampliar la superficie editable** más allá de los valores, para que el proponente pueda sugerir una estrategia real y no solo un número mayor.
2. **Revisar más a fondo la tarea flaky** descartada como ruido, con más intentos, para ver si esconde un segundo cluster real.
3. **Ampliar la suite** más allá de lo que el agente ya falló durante el uso, hacia todas las zonas del harness que el autor quiere mejorar, y abrir la superficie editable en consecuencia.

### Checklist para cualquier sistema que diga automejorarse

En el orden en que se ejecutó:
1. Un fallo real encontrado mirando los logs (la observabilidad lo hizo posible).
2. Agrupado con los que compartían su causa.
3. Separado de los que no la compartían.
4. Probado contra trabajo que el proponente nunca vio, no solo contra el que se le mostró.
5. Corregido dentro de una lista corta y con nombre de lo que podía cambiar (la superficie editable).
6. Verificado contra todas las tareas de la suite, no solo la rota.
7. Detectado una vez haciendo trampa con su propio test y corregido antes de que importara.
8. Entregado como un pull request real y abierto que espera a una persona en lugar de publicarse solo.

> "Haz esas preguntas a cualquier sistema que diga mejorarse a sí mismo y sabrás en minutos si es ingeniería o marketing."

Conclusión: sí se puede mejorar un agente sin tocar el modelo, "con cuidado, de forma acotada y con honestidad". El modelo siguió igual de capaz; el harness a su alrededor mejoró. Esa es la tesis común de los papers y del post de Lilian Weng: el harness puede seguir mejorando aunque el modelo ya no cambie.

## Conceptos clave

- **Harness**: el software escrito alrededor de un modelo congelado; según el video, ahí vive casi todo lo que hace bueno o malo a un agente.
- **Loop engineering**: práctica (término de Lilian Weng) de diseñar loops de mejora continua, situando la automejora en el harness y no en un modelo más grande.
- **Weakness mining**: ejecutar el agente, dejarlo fallar y agrupar solo los fallos con una causa real compartida.
- **Cluster**: grupo de fallos repetidos con una causa demostrable; es la unidad sobre la que trabaja el pipeline.
- **Mineros / guardas de regresión**: tareas que se espera que fallen (alimentan el mining) frente a tareas que se espera que pasen (detectan roturas colaterales).
- **Held-in / held-out**: tareas que el proponente ve frente a tareas ocultas; las ocultas comprueban si el arreglo generaliza o solo "juega" el test.
- **Regla de aceptación**: al menos igual de bueno en held-in y held-out y estrictamente mejor en al menos uno; sin crédito parcial.
- **Superficie editable**: lista corta, con nombre y versionada (aquí, un JSON de 11 valores) de lo único que un editor externo puede cambiar.
- **Capability mismatch**: riesgo de que un proponente más fuerte sugiera cambios que el modelo más pequeño no puede seguir.
- **Despliegue seguro, auditado y por etapas**: cada cambio tiene su camino de promoción, revisado por una persona antes de publicarse.

## Herramientas y referencias mencionadas

- **Lilian Weng**: post sobre loop engineering y la escalera de cinco niveles de automejora.
- **Self-Harness** (Shanghai AI Lab): paper sobre harnesses que se mejoran a sí mismos (weakness mining, held-in/held-out, regla de aceptación).
- **Paper de Ant Group, HKUST y Tsinghua** sobre agentes autoevolutivos a escala empresarial (memoria/harness/modelo, rollback de primera clase, trazas, despliegue por etapas).
- **Gemma**: modelo local cuantizado del agente de la serie (y nombre del agente/repositorio).
- **Fable**: modelo externo usado como diagnosticador y proponente.
- **Peter Steinberger** y **Boris (Anthropic)**: citados como voces que hablan de loop engineering.
- `AGENTS.md`, la función `clamp` y la compactación de conversaciones del harness.

## Referencias

- Transcripción: [[KoDohnhLpJM - agentes-automejorables-evolucionar-el-harness|Transcripción completa]]
- Video: [Self-Improving AI Agents | Evolving the Harness, Not the Model](https://www.youtube.com/watch?v=KoDohnhLpJM) — The Carbon Layer
