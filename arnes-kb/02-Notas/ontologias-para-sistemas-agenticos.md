---
title: "Por qué los sistemas agénticos necesitan ontologías: guardarraíles neuro-simbólicos para el loop del agente"
tags:
  - arnes/nota
  - type/nota
  - arnes/ontologias
  - arnes/evals-y-observabilidad
  - arnes/fundamentos
channel: "AI Engineer"
speaker: "Frank Coyle (UC Berkeley)"
videoId: "Sir59K8ZDPU"
source: "https://www.youtube.com/watch?v=Sir59K8ZDPU"
language: "en"
playlistOrder: 5
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Why Agentic Systems Need Ontologies — Frank Coyle, UC Berkeley"
related:
  - "[[Sir59K8ZDPU - ontologias-para-sistemas-agenticos|Transcripción]]"
---

# Por qué los sistemas agénticos necesitan ontologías: guardarraíles neuro-simbólicos para el loop del agente

Charla de unos 21 minutos de **Frank Coyle**, educador de la UC Berkeley con 30–35 años en computación y formación inicial en neurociencia, en la conferencia AI Engineer. Coyle traza dos linajes históricos —los agentes, desde los inicios de la IA, y las ontologías, desde Aristóteles— y argumenta que su convergencia, la **IA neuro-simbólica**, es la forma de mantener a los LLM, probabilísticos por naturaleza, dentro de sus guardarraíles.

Para el harness engineering la idea central es concreta: dentro del loop del agente, después de que una herramienta se ejecuta, se puede insertar un **validador basado en ontologías** (RDFS/OWL) que compruebe si el resultado es razonable antes de aceptarlo, devolverlo al LLM o escalarlo a un humano. Su fórmula: *"Pydantic en la puerta, ontología en el libro mayor"*, con agentes sin efectos secundarios.

## Resumen

- **Dos linajes que convergen**: los agentes (McCarthy, Selfridge, Minsky; cosas que perciben, deciden y actúan) y las ontologías (Aristóteles, Quine, Gruber) se unen hoy en la IA neuro-simbólica.
- **Ontología según Gruber (1993)**: "una especificación formal de una conceptualización compartida"; es lo que queremos dar a nuestros agentes sobre nuestros dominios.
- **La alucinación es una característica**, no un defecto: los LLM imaginan, igual que nosotros; por eso necesitan guardarraíles simbólicos.
- **Una ontología es, en la práctica, un grafo**: entidades con propiedades y relaciones; más flexible que las tablas relacionales.
- **Dos formas de construirla**: top-down (expertos analizan el dominio, como en los sistemas expertos de los 80) y bottom-up (a partir de datos, p. ej. interacciones de clientes). Conviene reutilizar taxonomías existentes (schema.org, FOAF, Dublin Core, DBpedia).
- **RDFS y OWL añaden inferencia y restricciones** "al lado" del grafo: dominio y rango, propiedades transitivas, funcionales y disjuntas.
- **Los loops completan la computación** (Böhm-Jacopini, 1966), pero pueden romperse (bucles infinitos), derivar y costar dinero en tokens.
- **Validación en el loop**: tras ejecutar una herramienta, un validador basado en la ontología decide si el resultado es razonable; si no, se vuelve al LLM o a un humano.
- **"Pydantic en la puerta, ontología en el libro mayor"**: tipos en la entrada, coherencia del dominio en el resultado, y agentes sin efectos secundarios hasta pasar la validación.
- **Volvemos, en parte, a los sistemas expertos**: la parte simbólica regresa como complemento del componente neuronal.

## Contenido estructurado

### Filosofía educativa: solo existe hacer

Coyle abre con una máxima de la hermana Corita Kent, popularizada por John Cage:

> "Nada es un error. No hay ganar, no hay fracasar. Solo hay hacer."

Recomienda aprender construyendo y escribir a mano en un cuaderno —no teclear— porque así "se involucran todos los sistemas sensoriales" y se aprende más rápido. Señala que es un momento crítico para los estudiantes de computación: el título ya no garantiza empleo por la IA, pero los agentes parecen ser el camino.

### Dos linajes: agentes y ontologías

- **Agentes**: el concepto viene de los primeros días de la IA (el término "inteligencia artificial" es de 1956), con figuras como John McCarthy, Oliver Selfridge y Marvin Minsky (*Society of Mind*). Un agente es algo que **percibe, decide y actúa**.
- **Ontologías**: Aristóteles propuso una filosofía del ser con **categorías de ser**, que hoy se relacionan con las bases de datos de grafos y la representación del conocimiento. La formalizaron, entre otros, el filósofo W. V. O. Quine y Tom Gruber en 1993:

> "Una ontología es una especificación formal de una conceptualización compartida. Y eso es lo que queremos darles a nuestros agentes: nuestra conceptualización del universo, de nuestros dominios."

### IA neuro-simbólica como guardarraíl

La convergencia entre lo probabilístico (agentes, LLM) y lo formal (ontologías) es la **IA neuro-simbólica**: redes neuronales unidas a la IA simbólica, que incluye sistemas basados en reglas y grafos de conocimiento.

> "Los LLM son por naturaleza probabilísticos. La gente se preocupa por las alucinaciones, pero esa es la característica. Es quienes somos: imaginamos cosas que quizá no existen y luego las convertimos en realidad."

Su tesis: lo neuro-simbólico es la manera de mantener al LLM en sus guardarraíles.

### Qué es una ontología

No es complicada: una representación de **entidades**, sus **propiedades** y sus **relaciones** con otras entidades. Las bases de datos de grafos surgieron porque las tablas relacionales resultaban restrictivas: añadir algo nuevo obliga a añadir columnas y rehacer la estructura, mientras que en un grafo basta con conectar una nueva propiedad o relación. Coyle pide pensar en la ontología, en la práctica, como **una estructura de datos de grafo**.

### Cómo construir una ontología

**Top-down**: los expertos se reúnen, analizan el dominio y definen entidades (órdenes de compra, clientes, representantes), propiedades y relaciones. Es lo que se hacía en los 80 con los **sistemas expertos**, cuando la IA simbólica parecía el camino: se gastaron millones, Japón lanzó su proyecto de "quinta generación"… pero **no escalaban** y llegó un invierno de la IA. Las redes neuronales existían desde los 60 pero tampoco escalaban hasta que las GPU de Nvidia, pensadas para videojuegos, se aplicaron a ellas.

**Bottom-up**: a partir de los datos —por ejemplo, las reacciones de los clientes— se descubren entidades y relaciones nuevas y se añaden al grafo.

**Reutilizar taxonomías existentes**, fruto de 15–20 años de trabajo:

- **schema.org**: conjunto amplio de términos y relaciones.
- **FOAF** (*Friend of a Friend*): para redes sociales.
- **Dublin Core**: términos para describir artículos de investigación, libros, etc.
- **DBpedia**: la ontología detrás de Wikipedia, cuya búsqueda consulta un gran grafo.

### Inferencia y restricciones con RDFS y OWL

Son tecnologías auxiliares que "se sientan a un lado" del grafo para aplicar control o inferencia:

- **Dominio y rango (RDFS)**: si `enseña` tiene dominio `Profesor` y rango `Estudiante`, de "Bob enseña a Scooter" se infiere que Bob es profesor y Scooter estudiante; si además "todo profesor es persona", Bob es persona.
- **Propiedad transitiva (OWL)**: si Sue es ancestro de Mary y Mary de Ann, Sue es ancestro de Ann. Se añade información que no estaba en el grafo.
- **Propiedad funcional (OWL)**: solo admite un valor (`tienePadre`). Si "Bob es padre de Jim" y "BB es padre de Jim", se infiere que Bob y BB son la misma persona; también sirve como restricción.

> "Estas derivaciones y restricciones no están en el grafo, están a un lado, y pueden ayudarnos cuando trabajamos con agentes."

### Loops: el último ingrediente y sus riesgos

Böhm y Jacopini mostraron en 1966 que, con **secuencia, condicionales e iteración**, un lenguaje es Turing completo. Los agentes, al tener loops, completan esa ecuación. Pero los loops tienen peligros:

- Pueden **romperse**: bucles infinitos.
- Pueden **derivar**: cuando los agentes hablan entre sí, las cosas se salen de los rieles.
- Pueden **costar dinero**: el número de tokens crece con cada iteración.

> "En cierto modo estamos revisitando la IA simbólica temprana. Diría que estamos volviendo al mundo de los sistemas expertos."

### El loop agéntico con Claude y el papel del validador

Coyle muestra un ejemplo en Python con un agente de Claude: un `while True` donde se envía al modelo un prompt y una herramienta.

> "Los LLM no pueden hacer nada. Lo único que hacen es darnos la siguiente palabra con alta probabilidad. Pero podemos darles una herramienta, y el LLM prepara los parámetros y dice: no puedo ejecutar esta herramienta, pero sé cuáles son los parámetros de entrada; aquí está la llamada que necesitas hacer."

Esquema del loop:

1. Llamar al modelo con mensajes y herramientas.
2. Revisar el `stop_reason`; si es `tool_use`, extraer la llamada y ejecutar la herramienta.
3. **Tras ejecutar la herramienta (el punto que marca en rojo)**: poner el resultado en un formato que un **validador** basado en la ontología del dominio pueda evaluar.
4. Si el resultado es razonable, continuar; si no, volver al LLM ("esto no funciona") o **meter a un humano en el loop**.

> "La idea es rodear la entrada de comprobaciones."

### Pydantic en la puerta, ontología en el libro mayor

- **Pydantic** añade tipado a Python (un lenguaje sin tipos estrictos) para validar los tipos de los parámetros.
- La **ontología** valida los resultados contra el modelo del dominio.
- Los agentes deberían **no tener efectos secundarios**: no modificar la base de datos hasta que el resultado haya pasado por la ontología.

> "Pydantic en la puerta, ontología en el libro mayor, y agentes puros."

### Errores que puede capturar OWL

Con propiedades funcionales, disjuntas y restricciones de valores, la ontología detecta errores difíciles de controlar en lenguaje natural:

| Error | Mecanismo OWL |
|---|---|
| Un segundo reembolso sobre la misma orden | Propiedad funcional |
| Un pago enviado al soporte en lugar del comprador | Propiedad disjunta (cliente y representante de soporte son entidades distintas) |
| Un valor inventado como "probablemente enviado" | Enumeración de valores permitidos: pagado, enviado o reembolsado |

> "Puedes tener un razonador construido sobre la ontología para mantener al LLM encarrilado: guardarraíles para mantenerlo honesto."

Cierra repitiendo su máxima ("no hay ganar ni fracasar, solo hacer") y menciona su web codesupreme.ai, en homenaje a *A Love Supreme* de John Coltrane.

## Conceptos clave

- **Ontología**: especificación formal de una conceptualización compartida (Gruber); en la práctica, un grafo de entidades, propiedades y relaciones.
- **IA neuro-simbólica**: combinación de redes neuronales (LLM) con IA simbólica (reglas, grafos de conocimiento) para acotar el comportamiento probabilístico.
- **Top-down / bottom-up**: construir la ontología desde el análisis de expertos o a partir de los datos.
- **RDFS (dominio y rango)**: permite inferir el tipo de las entidades a partir de las relaciones en que participan.
- **Propiedad transitiva, funcional y disjunta (OWL)**: reglas que generan inferencias o imponen restricciones sobre el grafo.
- **Validador en el loop**: comprobación del resultado de cada herramienta contra la ontología antes de aceptarlo.
- **Agentes puros**: agentes sin efectos secundarios hasta superar la validación.
- **Loop agéntico**: ciclo modelo → `stop_reason` → herramienta → resultado; Turing completo, pero propenso a romperse, derivar y encarecerse.

## Herramientas y referencias mencionadas

- Personas: Corita Kent, John Cage, John McCarthy, Oliver Selfridge, Marvin Minsky (*Society of Mind*), Aristóteles, W. V. O. Quine, Tom Gruber (1993), Böhm y Jacopini (1966), Alan Turing, John Coltrane
- Tecnologías: RDFS, OWL, bases de datos de grafos, Pydantic, Python, agente de Claude (API con herramientas)
- Taxonomías: schema.org, FOAF, Dublin Core, DBpedia / Wikipedia
- Historia: sistemas expertos de los 80, proyecto japonés de quinta generación, Nvidia y las GPU
- Web del ponente: codesupreme.ai

## Referencias

- Transcripción: [[Sir59K8ZDPU - ontologias-para-sistemas-agenticos|Transcripción completa]]
- Video: [Why Agentic Systems Need Ontologies — Frank Coyle, UC Berkeley](https://www.youtube.com/watch?v=Sir59K8ZDPU) — AI Engineer
