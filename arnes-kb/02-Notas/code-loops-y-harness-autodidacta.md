---
title: "Code loops y self-harness: un agente que optimiza su propio harness"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/evals-y-observabilidad
  - arnes/opinion
channel: "Discover AI"
speaker: "Discover AI"
videoId: "l7ffflCU824"
source: "https://www.youtube.com/watch?v=l7ffflCU824"
language: "en"
playlistOrder: 38
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Code Loops and A Self Learning AI Harness"
related:
  - "[[l7ffflCU824 - code-loops-y-harness-autodidacta|Transcripción]]"
---

# Code loops y self-harness: un agente que optimiza su propio harness

El presentador del canal Discover AI comenta en este video (unos 18 minutos) un paper del Shanghai Artificial Intelligence Laboratory sobre el **self-harness**: un agente basado en un LLM congelado que mejora su propio harness sin humanos en el bucle. Antes de llegar al paper hace dos cosas. Critica la tasa de rechazos de Fable 5 para tareas científicas y precisa la diferencia entre *scaffold* y *harness*. Con esa distinción explica la idea de Anthropic de "construir bucles que se prompteen solos".

Para el harness engineering, el video interesa porque reduce la auto-mejora del harness a un bucle simple: evaluar, agrupar fallos, proponer ediciones mínimas, validarlas y aceptarlas. También reporta resultados concretos en Terminal-Bench 2 y deja una postura escéptica: es "otro sistema de auto-optimización", y su techo lo pone la inteligencia del modelo congelado.

## Resumen

- **¿Modelo nuevo o mejor harness?**: el autor se pregunta si Fable 5 es de verdad un LLM nuevo o un harness mejor. Ve indicios de que Anthropic está sacando la inteligencia del LLM y pasándola al harness, y de que Fable 5 ya no usa la estructura de Claude Code.
- **Scaffold frente a harness**: el scaffold codifica el conocimiento procedimental (cómo debe resolverse un problema), y el harness lo vuelve operativo (herramientas, memoria, control del bucle, reintentos, presupuesto).
- **Claude Code como bucle gobernado**: es un LLM que corre dentro de un bucle iterativo, gobernado por un harness y moldeado por un scaffold de skills y flujos de trabajo.
- **Definición simplificada del paper**: todo lo que no es el LLM es harness. El término incluye el scaffolding y es "no paramétrico", porque no toca los pesos del modelo congelado.
- **Cuatro elementos optimizables**: prompts, herramientas, memoria y política, con el modelo M fijo.
- **Bucle de self-harness**: ejecutar tareas, recoger trazas, detectar patrones de fallo, proponer una modificación, validarla con el mismo evaluador y, si pasa, actualizar el harness.
- **Fallos agrupados, no aislados**: los fallos se agrupan por firmas de fallo ancladas en el verificador y se ordenan según qué tan accionables son.
- **Pasos pequeños**: las propuestas son modificaciones mínimas para no alejarse demasiado de la configuración actual.
- **Resultados**: en Terminal-Bench 2, MiniMax M2.5 pasa del 42 % al 53 % y Qwen 3.5 del 20 % al 36 %.
- **Escepticismo**: sin contacto con el entorno real y con un LLM como juez, el autor lo describe como "cocerse en su propia sopa". Todo depende de la inteligencia del modelo congelado.

## Contenido estructurado

### Contexto: Fable 5 y los rechazos

El autor abre con una queja sobre Fable 5. Cita al CTO de Hugging Face, para quien la altísima frecuencia de rechazos puede volverse en contra de Anthropic:

> "¿Por qué deberíamos pagar el doble si hay un 70 % de probabilidad de que rechace nuestro trabajo?"

Según el autor, en sus tareas científicas los rechazos superan el 70 %, y no se puede tocar nada relacionado con química médica, biología o ciberseguridad. Cuenta incluso que un prompt para explicar el corazón humano se marcó como riesgo de ciberseguridad. Concluye que para ciencia "no es usable" y que, por precio, cambiaría a competidores chinos.

Su pregunta de fondo es si Fable 5 es un objeto nuevo o tiene "simplemente un harness mejor". Señala que en las últimas semanas Anthropic ha ido sacando la inteligencia del LLM para llevarla al sistema de harness. Lo enlaza con un video anterior sobre *Open Skill*, un bucle de auto-evolución de skills: ahora se aplica la misma optimización matemática al scaffold completo de un agente.

### Scaffold frente a harness

El autor insiste en separar los dos conceptos:

- **Scaffold**: enseña al agente cómo se ve la experiencia, por ejemplo la científica. Representa la experiencia como un flujo de trabajo: qué pasos importan, en qué orden suelen ocurrir, qué evidencia es aceptable, qué ejemplos se dan y cómo descomponer la tarea en subtareas más simples. Responde a la pregunta *¿cómo debería resolverse este tipo de problema?*
- **Harness**: el sustrato de ejecución que permite al modelo instanciar el scaffold como acción. Incluye llamadas a herramientas, lectura de archivos, ejecución de código, observación, compactación de contexto y control del bucle iterativo. Responde a *¿con qué herramienta?, ¿cuántos reintentos?, ¿cuándo parar?, ¿cómo resumir?, ¿cuántas skills (50, 100, 10.000)?, ¿con qué presupuesto y qué límites externos?*

> "El harness en sí no es la fuente de la experiencia. Es solo la capa operativa que la hace utilizable."

> "El scaffold define el flujo de investigación y el harness ejecuta ese flujo mediante herramientas, memoria y control del bucle."

Visto desde la teoría de la información, el scaffold codifica conocimiento procedimental y el harness lo vuelve operativo. En versión comprimida, el scaffold son las skills y los flujos de trabajo, y el harness es el *wrapper*, una capa de runtime alrededor del bucle.

### "Deja de promptear a Claude y construye bucles que se prompteen solos"

Con esa distinción, el autor explica la frase de Boris Cherny (Anthropic) del 8 de junio: dejar de promptear a Claude y construir bucles que se prompteen solos. Según él, esa es la base del harness engineering que promueve Anthropic.

> "Claude Code es un LLM que corre dentro de un bucle iterativo, gobernado por un harness y moldeado por un scaffold de skills y flujos de trabajo."

Para el autor, esto define el nuevo paradigma de la programación con IA. El bucle es sencillo, del tipo ReAct: *pensar → actuar → observar → reflexionar → actualizar → repetir*, y alrededor va el wrapper.

### Self-harness: el agente mejora su propio harness

El paper define el self-harness como un paradigma en el que un agente basado en un LLM mejora su propio harness **sin humanos en el bucle**. El autor es irónico al respecto:

> "Eliminan a todos los humanos y tenemos una burbuja de IA donde la IA genera algo, se evalúa a sí misma y se optimiza a sí misma, sin contacto con el entorno. Solo tiene un LLM como juez. Esto es cocerse en su propia sopa."

Recuerda un video anterior suyo con críticas a los agentes auto-evolutivos y a sus peligros.

### Terminología del paper: todo lo que no es el LLM es harness

No hay una definición oficial de harness, y cada empresa explica de forma distinta qué es harness, qué es scaffold y cómo interactúan. El Shanghai AI Lab simplifica: **todo lo que no es el LLM es harness**, y el término absorbe el scaffolding.

> "Usamos el término harness para denotar el scaffolding no paramétrico que gobierna cómo se despliega como agente un modelo de lenguaje fijo."

*No paramétrico* quiere decir que no son pesos del modelo: el LLM está congelado y el agente se optimiza sin tocar su núcleo. El harness especifica los protocolos de ejecución con los que el modelo observa la tarea, actúa, reflexiona, invoca herramientas, revisa artefactos intermedios y produce la respuesta final.

El autor vuelve a Fable 5: quizá su núcleo siga siendo algo tradicional y lo optimizado sea el harness.

### El bucle de optimización

El autor lo llama "el proceso de auto-aprendizaje más simple que hayas visto":

1. **Configuración actual**: modelo congelado M más cuatro elementos optimizables: prompts, herramientas, memoria y política.
2. **Ejecución y trazas**: se corren múltiples tareas y se recogen las trazas de ejecución.
3. **Patrones de fallo**: por ejemplo, validación faltante, exploración sin límite o llamadas a herramientas corruptas.
4. **Propuesta de harness**: una corrección, que puede ser código simple o una sobrescritura de un archivo Markdown.
5. **Validación**: si la versión nueva pasa la validación, se acepta y actualiza el harness.

> "Todo depende de la inteligencia de nuestro LLM congelado, de si detecta lo que hay que hacer."

### Evaluación: agrupar fallos por firmas del verificador

Para que la evaluación sea estadísticamente significativa:

- Se toma un subconjunto de registros fallidos y se agrupa por **firmas de fallo ancladas en el verificador**.
- Para cada registro, el sistema analiza la traza como evidencia: la razón terminal del fallo que expuso el verificador y el comportamiento del agente asociado a ese fallo.
- El objetivo es encontrar patrones en clústeres, no casos sueltos.
- Cada clúster se convierte en un **patrón de fallo estructurado** con tamaño del clúster, tarea representativa, síntomas compartidos en las trazas, evidencia del verificador y mecanismos del agente.
- Los clústeres se ordenan por **accionabilidad estimada**: qué se puede corregir de inmediato y qué es más simple, para no gastar ejecuciones de 30 minutos o una hora buscando qué falla.

### Modificaciones candidatas mínimas

Como es un procedimiento de auto-aprendizaje, conviene dar pasos pequeños para no alejarse demasiado de la distribución actual. El autor lo compara con no cambiar demasiado entre versiones de una librería. Se invoca al **mismo modelo M** con el harness actual, pero en **rol de proponente**, con un contexto de propuesta acotado que incluye:

- las superficies editables del harness actual,
- los patrones de fallo anclados en el verificador,
- registros de comportamiento exitoso (qué funcionó y por qué),
- un resumen de las ediciones intentadas antes, con o sin éxito, para no repetirlas.

### Validación de la propuesta

La corrección no se adopta de inmediato:

> "No podemos confiar en ningún sistema de IA."

La propuesta se evalúa con **el mismo evaluador** que diagnosticó el harness actual. Si pasa, se convierte en el harness actualizado.

### Experimentos en Terminal-Bench 2

- Benchmark: Terminal-Bench 2, con 89 tareas de terminal en contenedores.
- Harness inicial, tal como aparece en el pseudocódigo del paper: system prompt ("estás corriendo dentro de un entorno de tareas Terminal-Bench 2 / Harbor…"), prompt base, fuentes de memoria, subagentes, skills, instrucciones de *bootstrap*, de ejecución, de verificación y de recuperación ante fallos, y una política de control de runtime y de enrutamiento. El resultado es un *fixed agent harness*. El autor lo resume como "simple, directo, nada en particular".
- La gráfica de pass rate por iteración arranca en 42 % y sube a medida que el sistema se corrige. Algunos problemas detectados: artefactos faltantes (hay que crear la salida pronto), contenido con esquema inválido y bucles de herramientas estancados.
- El modelo reescribe el código del harness, su "esfera exterior", y no la "esfera interior" con la que piensa, porque es un LLM congelado.

**Ejemplo de edición (MiniMax M2.5)**: una instrucción nueva que se activa si el agente se atasca tras 52 llamadas:

> "Parece que estás atascado en un bucle de herramientas. Deja de repetir el mismo camino fallido. Resume la evidencia ya recogida. Elige el paso de implementación restante más pequeño y luego ejecuta una verificación dirigida."

**Resultados**:

| Modelo | Pass rate inicial | Pass rate final |
|---|---|---|
| MiniMax M2.5 | 42 % | 53 % |
| Qwen 3.5 | 20 % | 36 % |

El autor matiza que, con tareas relativamente simples y un harness simple, estas son "victorias fáciles".

### Conclusión del autor

> "Un harness auto-corrector es solo otro sistema de auto-optimización de IA."

Para sistemas más complejos, dice, es "más de lo mismo". Recomienda probarlo, aunque todo depende de la inteligencia del modelo congelado en cada tarea.

## Conceptos clave

- **Scaffold**: la experiencia representada como flujo de trabajo, es decir, pasos, orden, evidencia aceptable, ejemplos y descomposición de tareas. Codifica conocimiento procedimental.
- **Harness**: la capa operativa o de runtime que ejecuta el scaffold mediante herramientas, memoria, compactación de contexto y control del bucle. No es la fuente de la experiencia.
- **Harness no paramétrico**: en la definición del paper, todo lo que gobierna el despliegue de un modelo fijo como agente sin tocar sus pesos.
- **Self-harness**: paradigma en el que un agente con un LLM congelado mejora su propio harness sin humanos en el bucle.
- **Firma de fallo anclada en el verificador**: la combinación de la razón terminal del fallo, expuesta por el verificador, y el comportamiento del agente asociado. Sirve para agrupar fallos.
- **Patrón de fallo estructurado**: un clúster descrito por su tamaño, tarea representativa, síntomas en trazas, evidencia del verificador y mecanismos del agente.
- **Accionabilidad**: el criterio para ordenar los clústeres según lo rápido y fácil que es corregirlos.
- **Modificación candidata mínima**: un cambio pequeño al harness, propuesto por el propio modelo en rol de proponente.
- **Bucle que se promptea solo**: la idea de Anthropic de sustituir el prompting manual por bucles gobernados por un harness.

## Herramientas y referencias mencionadas

- Paper sobre self-harness del Shanghai Artificial Intelligence Laboratory
- Fable 5 y Claude Code (Anthropic)
- CTO de Hugging Face (crítica a los rechazos de Fable 5)
- Boris Cherny (Anthropic): "deja de promptear a Claude y construye bucles que se prompteen solos"
- Open Skill (bucle de auto-evolución de skills, video anterior del canal)
- Terminal-Bench 2 y el entorno Harbor
- MiniMax M2.5 y Qwen 3.5
- Bucle ReAct

## Referencias

- Transcripción: [[l7ffflCU824 - code-loops-y-harness-autodidacta|Transcripción completa]]
- Video: [Code Loops and A Self Learning AI Harness](https://www.youtube.com/watch?v=l7ffflCU824) — Discover AI
