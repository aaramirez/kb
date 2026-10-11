---
title: "Harness engineering explicado: contexto, herramientas y patrones detrás de Antigravity, Claude Code y Cursor"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/construccion
  - arnes/contexto-y-memoria
channel: "Google Cloud Tech"
speaker: "Ryan Lopopolo, Tilde, Billy y Smitha (con Luke) — The Agent Factory"
videoId: "F8EZJAm9iO8"
source: "https://www.youtube.com/watch?v=F8EZJAm9iO8"
language: "en"
playlistOrder: 11
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harness Engineering Explained: Inside the Stack Behind Antigravity, Claude Code & Cursor"
related:
  - "[[F8EZJAm9iO8 - harness-engineering-antigravity-claude-code-cursor|Transcripción]]"
---

# Harness engineering explicado: contexto, herramientas y patrones detrás de Antigravity, Claude Code y Cursor

Episodio de unos 31 minutos de *The Agent Factory* (Google Cloud Tech) en tres bloques: una introducción conceptual de los presentadores (Smitha y Luke), una entrevista de Tilde con **Ryan Lopopolo**, el googler que acuñó el término *agent harness* y autor del ensayo sobre usar Codex en un mundo "agent first" (febrero de 2026), una demostración de código de Billy con tres patrones de harness, y un segmento final de Smitha sobre las tres capas del stack de un agente de código (modelo, harness y conocimiento).

Es una nota central para el harness engineering: Lopopolo define la disciplina como la curación del contexto y del entorno alrededor del modelo, propone "desplazar a la izquierda" las intervenciones, defiende invertir en herramientas y contexto en lugar de construir harnesses propios, y advierte contra el exceso de andamiaje. La demostración aterriza las decisiones de diseño (bucle, herramientas, memoria) en código.

## Resumen

- **Agente = LLM + harness**: el harness es todo lo que no es el modelo; Gemini Flash es el modelo y Antigravity el harness.
- **Harness engineering es curar contexto y entorno**: los modelos mejoran, pero no adivinan mejor lo que quieres; hay que anclarlos en "cómo se ve lo bueno".
- **Ser un prompter perezoso**: si el modelo tiene las herramientas y el contexto para anclarse solo, no hace falta cargarlo todo en el prompt.
- **Shift left**: pasar de reintentar el prompt a docs, agentes que apuntan a esas docs, verificadores estáticos, tests y, finalmente, evals.
- **Herramientas estándar bien representadas en el entrenamiento**: observabilidad estilo PromQL más una CLI densa en contexto componen muy bien con los agentes.
- **Coherencia en horizontes largos**: PRs pequeños y revisables permiten automatizar la revisión y ampliar el tamaño del loop con menos intervención humana.
- **No construyas un harness**: toma el mejor modelo, observa fallos y mejora herramientas y contexto, la parte que nunca queda obsoleta.
- **Cuidado con el sobre-andamiaje**: constriñe al modelo cuando mejora y crea falacia del costo hundido.
- **Tres decisiones de diseño**: cuántas veces itera, qué herramientas usa y cuándo, y cuánta memoria necesita; patrones lineal, de bucle cerrado y con ADK y guardrails.
- **Stack en tres capas**: modelo rápido (Gemini 3.8 Flash), harness que coordina (Antigravity boost) y conocimiento bajo demanda (Google Skills).

## Contenido estructurado

### ¿Qué es un agent harness?

> "Un agente de IA es un modelo de lenguaje grande más un agent harness. El harness es todo lo que hay en ese agente que no es el LLM."

Ejemplo de los presentadores: a "¿por qué el cielo es azul?" el modelo responde solo. A "¿debería llevar impermeable?" el LLM no tiene la respuesta y emite algo equivalente a "averigua el tiempo". El harness obtiene el dato (soleado, 98 °F), lo junta con la pregunta original y se lo devuelve al modelo, que responde que no hace falta. El harness es lo que da al agente poderes más allá de "texto entra, texto sale".

### Entrevista con Ryan Lopopolo: origen y definición

- El término surgió del trabajo para lograr agentes de código totalmente autónomos; lo publicaron en febrero de 2026 y "tomó la industria por asalto".
- Defiende no escribir código a mano: dice no haber abierto un editor desde mayo del año anterior. Los ingenieros escribirán especificaciones en lenguaje natural.
- Lo más sorprendente que aprendió:

> "Aunque los modelos mejoren cada vez más, no necesariamente van a ser mejores en saber lo que yo quiero por defecto. Toda la idea del harness engineering es hacer esa curación de contexto y entorno alrededor del modelo para que, cada vez que arranca, entienda de forma más natural qué es exactamente lo que quiero."

> "Aspiro a ser un prompter increíblemente perezoso, porque si hice el trabajo de darle al modelo las herramientas y el contexto que necesita para anclarse, no tengo que cargar todo eso de antemano en el prompt."

### Prácticas de ingeniería y "shift left"

Sobre qué buenas prácticas de escalado (linters, convenciones de código bien definidas) funcionan en un flujo agent-first: "todas". Describe un **espectro de intervenciones**:

1. La más simple ("la más tonta"): reintentar el mismo prompt sin cambiar nada. No escala ni a los compañeros ni en el tiempo.
2. Añadir documentación.
3. Añadir agentes que apuntan a esa documentación.
4. Añadir verificadores estáticos y tests, que a su vez pueden inyectar prompts al agente.
5. Con suerte, convertirlo en evals que se suben a DeepMind para mejorar Gemini.

**Desplazar a la izquierda** significa que las intervenciones sean lo más baratas posible de implementar. Como los agentes "ansían texto", se les da más texto de formas cada vez más sofisticadas y automatizadas: añadir texto al prompt es el extremo derecho; dar herramientas y la capacidad de razonar sobre su propio corpus de documentación, para que descubran el contexto por sí mismos, está más a la izquierda.

### Herramientas estándar, observabilidad y documentación

- Las herramientas de buenas prácticas están **bien representadas en los datos de entrenamiento**. Si un problema de observabilidad se reduce a algo con forma de PromQL, el modelo sabrá manejarlo.
- Patrón: llevar la recolección y agregación de datos a una herramienta de primera clase y exponer una **CLI** que "mueve el razonamiento hacia el determinismo" y da acceso fácil a contexto denso.
- Como el código es muy barato de producir, se pueden aplicar los ideales de ingeniería a gran escala.
- Ejemplo propio: estructura el markdown con los enlaces no en línea dentro de la prosa, sino como **anclas con nombre al final del párrafo o lista**, con un test que lo verifica. Así el agente lee la prosa de forma eficiente, el texto sigue siendo legible para humanos y se mitiga el problema de *lost in the middle*.
- Exige código legible aunque no lo escriba, para poder "mirar bajo el capó" de la ejecución del agente cuando el artefacto final (código, Google Docs, Sheets) no es razonable, y corregir al agente para que no repita el error.

### Coherencia en horizontes largos y tamaño del loop

> "Todo el harness engineering es un conjunto cada vez más sofisticado de trucos para devolver al agente a la línea base."

- El trabajo en organizaciones humanas es iterativo; para que los agentes participen hay que realinear continuamente lo que producen con el "hilo dorado" de lo que la organización considera bueno.
- PRs pequeños → fáciles de revisar → se puede operacionalizar que agentes revisen → se reduce el espacio de estados → horizontes más largos con menos intervención humana.
- **Ampliar el loop**: ¿confías en que un cambio pequeño salga razonable? ¿Puedes encadenar cambios pequeños y obtener algo razonable en un arco más largo? Entonces prueba algo más ambicioso. Con suficientes guardrails, incluso migraciones completas de lenguaje se vuelven abordables.

### Equipos, habilidades y autonomía creciente

- Ver a distintas personas contribuir a los agentes era como subir las estadísticas de un personaje de RPG: un arquitecto de React mejora el rendimiento en frontend del agente.
- Si solo trabajan agentes, deben **clasificar qué trabajo van a hacer** y descubrir dinámicamente qué contexto cargar; eso es parte de la alta autonomía.
- Analogía de carrera: igual que se da más ambigüedad a un ingeniero junior → senior → staff, la pregunta es "¿hasta qué punto del futuro puedes despejar la ambigüedad para dar autonomía a tus agentes?".

### Consejos para el ingeniero promedio

> "Nunca he construido un harness. Creo que es un gran malentendido sobre lo que llamo harness engineering."

- Mantener fijo el harness (tipo Antigravity), tomar el mejor modelo apenas sale y tener alta ambición, descartando activamente los prejuicios sobre lo posible.
- Observar cuándo falla el agente, interrogarlo a él y a uno mismo, y usar que el código y la prosa son baratos para refinar el entorno y prohibir desviaciones del buen comportamiento.
- Todos los harnesses exponen básicamente leer archivos, grep y ejecución arbitraria de comandos. Si concentras el esfuerzo en **herramientas y contexto**, puedes adoptar libremente los nuevos modelos y acumulas apalancamiento "en una parte del sistema que nunca quedará obsoleta".
- Advertencia: se puede **sobre-andamiar** a los agentes, lo que los constriñe innecesariamente a medida que mejoran y lleva a la falacia del costo hundido.

### Capability overhang y Google Cloud

- Lopopolo trabaja en Google Cloud construyendo agentes para operar la nube.
- Cree que hay un **capability overhang**: los modelos son mucho mejores de lo que logramos extraer hoy en trabajo útil; su objetivo es "engullir" esa capacidad desplegando en más espacios.
- Para que un agente tenga éxito hay que darle una computadora; quiere que Google Cloud sea "la mejor computadora para agentes".
- Consejo final: actualizar continuamente lo que crees posible y centrarse en las dos **interfaces extensibles: herramientas y contexto**. Las herramientas actúan como memoria y como mecanismo para imponer lo que consideras bueno.

### Demostración de Billy: tres patrones de harness

Motivación: "Puedes usar el framework, pero un gran ingeniero entiende el framework". Construir un harness ayuda a entender qué pasa cuando algo se rompe.

- Un modelo sin harness puede "saber" de herramientas, pero no ejecuta nada: solo produce el texto "debería inspeccionar el archivo". El harness conecta la intención con la acción.
- No hay un harness mejor para todo; decisiones de diseño:
  - **Bucle**: cuántas veces itera.
  - **Herramientas**: cuáles, cuándo y cómo usarlas.
  - **Memoria**: qué tan importante es y cuándo recuperarla.

Los tres patrones mostrados:

1. **Harness lineal sin bucle**: inspecciona un archivo (o no, si no lo necesita), emite una recomendación y termina. Siempre el mismo flujo; útil cuando se necesita determinismo.
2. **Harness de bucle cerrado**: itera hasta un estado de salida. Para editar código: aplica un cambio, ejecuta los tests, captura la salida del fallo (no solo si pasó), la mete en memoria y repite hasta que pasen, con un límite de unas cinco iteraciones.
3. **Harness con guardrails usando ADK** (Agent Development Kit de Google): más avanzado, con compactación de memoria incluida, sin programar todo a mano pero con más personalización que una herramienta lista para usar. Incluye una función `block_destructive_commands` que impide borrar archivos, eliminar la base de datos o hacer push a GitHub antes de ejecutar código.

> "Lo que hace que estas herramientas funcionen tan bien no son los modelos en sí. Esos modelos son muy inteligentes. Es el harness engineering alrededor de los modelos."

### El stack del agente de código: modelo, harness y conocimiento (Smitha)

> "Tu agente de código no necesita un modelo más inteligente. Necesita un mejor stack."

1. **Capa de modelo — Gemini 3.8 Flash**: los agentes funcionan en bucles continuos (inspeccionar, editar, ejecutar tests) que pueden repetirse 20, 40 o 60 veces por tarea; velocidad y costo se acumulan, así que un modelo rápido y barato no es una rebaja, es lo que hace prácticos los bucles agénticos en tiempo real.
2. **Capa de harness — comando boost de Antigravity**: transforma un modelo en un equipo coordinado: lanza un orquestador, delega en subagentes especializados en paralelo y termina con una verificación independiente antes de tocar el código. Para tareas cotidianas basta el agente por defecto; boost se reserva para retos de ingeniería complejos (mostraron una tabla comparando tres modos de ejecución).
3. **Capa de conocimiento — Google Skills**: repositorio con más de 19.000 estrellas y más de 100 skills (Google Cloud, Firebase, Flutter, Maps…). Una skill es "conocimiento de dominio curado que el agente carga bajo demanda": no es un servidor MCP ni un plugin pesado. Se instala con un comando y es agnóstico del harness (Claude Code, Codex, Antigravity).

## Conceptos clave

- **Agent harness**: todo lo que rodea al LLM en un agente y le da capacidades más allá de texto de entrada y salida.
- **Harness engineering**: curación del contexto y del entorno alrededor del modelo para que entienda qué se quiere; "un conjunto de trucos para devolver al agente a la línea base".
- **Shift left**: llevar las intervenciones hacia mecanismos más baratos y automatizados (docs, verificadores, tests, evals) en lugar de añadir texto al prompt.
- **Tamaño del loop**: cuánto trabajo encadenado puede hacer un agente con confianza antes de requerir supervisión humana.
- **Hilo dorado**: lo que la organización considera bueno, contra lo que se realinea continuamente el trabajo del agente.
- **Sobre-andamiaje**: exceso de scaffolding que constriñe al modelo a medida que mejora.
- **Capability overhang**: brecha entre lo que los modelos pueden hacer y lo que hoy extraemos de ellos.
- **Harness lineal vs. de bucle cerrado**: flujo fijo y determinista frente a iteración hasta un estado de salida (por ejemplo, tests en verde).
- **Skill**: conocimiento de dominio curado que el agente carga bajo demanda.

## Herramientas y referencias mencionadas

- Harnesses: Google Antigravity (comando boost), Claude Code, Cursor, Codex.
- Modelos: Gemini Flash, Gemini 3.8 Flash.
- ADK (Agent Development Kit de Google); Google Skills (repositorio de skills).
- PromQL y herramientas de observabilidad; Google Docs y Sheets como artefactos.
- Ensayo de Ryan Lopopolo sobre usar Codex en un mundo agent-first (febrero de 2026); DeepMind.

## Referencias

- Transcripción: [[F8EZJAm9iO8 - harness-engineering-antigravity-claude-code-cursor|Transcripción completa]]
- Video: [Harness Engineering Explained: Inside the Stack Behind Antigravity, Claude Code & Cursor](https://www.youtube.com/watch?v=F8EZJAm9iO8) — Google Cloud Tech
