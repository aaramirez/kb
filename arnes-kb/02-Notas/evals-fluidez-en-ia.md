---
title: "Evals de agentes de modo fácil a modo dios: tareas, verificadores, entornos y mejora continua"
tags:
  - arnes/nota
  - type/nota
  - arnes/evals-y-observabilidad
  - arnes/produccion
channel: "Alex Lieberman"
speaker: "Alex Lieberman con Viv (investigador de LangChain)"
videoId: "zLeG-XJtbIE"
source: "https://www.youtube.com/watch?v=zLeG-XJtbIE"
language: "en"
playlistOrder: 13
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "You're Not AI-Fluent Until You Understand Evals"
related:
  - "[[zLeG-XJtbIE - evals-fluidez-en-ia|Transcripción]]"
---

# Evals de agentes de modo fácil a modo dios: tareas, verificadores, entornos y mejora continua

Alex Lieberman conversa durante unos 39 minutos con Viv, investigador de IA en LangChain, en formato de clase en pizarra con tres niveles: **modo fácil** (qué es un eval, tareas y verificadores), **modo difícil** (entornos, la eval suite y la elección de modelo por tarea) y **modo dios** (convertir datos de producción en evals para que el agente mejore de forma continua). El hilo conductor es un agente de go-to-market (GTM) que lee y edita Salesforce.

Para el harness engineering la nota es clave porque sitúa los evals como el mecanismo que dice *dónde* falla el agente y *qué* cambiar: Viv nombra explícitamente el harness engineering (prompt, definiciones de herramientas, elección de modelo) como la primera palanca de mejora, frente al fine-tuning de modelos pequeños, y describe el bucle trazas → agente analista → propuestas de mejora.

## Resumen

- **Un eval comprueba si lo que hizo el agente está bien**: el valor está en codificar en software lo que tú o tu organización consideran correcto.
- **Empezar con tareas reales**: pequeñas acciones de lo que hacen tus colegas (escribir un email, actualizar un registro, buscar a una persona en varias tablas) cuyo resultado se puede comprobar.
- **El verificador decide si la tarea salió bien o mal**: puede ser una función de Python sobre el estado de la base de datos o una comprobación de estilo.
- **Checklists binarios mejor que escalas 1–10**: los LLM tienden a responder siempre 7 u 8; con sí/no no pueden "cubrirse".
- **Entornos**: réplicas aisladas de los sistemas de producción (Salesforce, Gong, Notion, S3) donde el agente actúa sin tocar datos reales.
- **Harbor como estándar abierto**: abstracciones para tareas, entornos, verificadores e infraestructura; permite reutilizar evals publicados por otros.
- **Validar el entorno con varios agentes**: patrones raros entre modelos o "trampas" revelan fugas de información.
- **Eval suite + catálogo de modelos**: correr cada modelo sobre tareas etiquetadas y decidir el equilibrio entre costo, velocidad e inteligencia.
- **Modo dios**: producción → evals → mejoras del agente, en un ciclo continuo; el cuello de botella es el humano.
- **Activar el tracing**: las trazas son el registro de cada acción del agente; otro agente puede analizarlas y proponer mejoras.
- **Los humanos siguen definiendo "lo bueno"**: escribir qué importa y revisar los evals derivados de producción es de lo más apalancado que puede hacer una organización.

## Contenido estructurado

### Modo fácil: qué es un eval

> "Tus agentes ya están haciendo trabajo por ti. Lo único que quieres con un eval es comprobar si eso que hizo el agente está bien."

- Lo difícil de "bien" es tomar lo que tú o tu organización consideran correcto y codificar esos principios en software.
- Hay evals simples (¿se usó esta herramienta?) y otros con matices, sin respuesta blanco o negro.
- Ejemplo estrecho: añadir una nota en un CRM; se compara el estado antes y después en la base de datos (¿el campo vacío ahora tiene valor? ¿tiene el valor correcto?).
- Las ambiciones crecieron: hace dos años era "resume este email"; ahora es "investiga toda esta empresa, redacta el informe, personalízalo para cada lead y déjalo listo para enviar". Mucho más difícil de evaluar.

### Agentes, sistemas y tareas

Punto de partida típico: no tienes evals y usas Claude Code, Codex, Deep Agents u otro harness, con un agente en producción o "semi-producción" (uso interno) que interactúa con un sistema externo.

- **Sistema**: Salesforce como CRM; el agente lee y edita.
- **Tareas**: cosas pequeñas que el agente debe hacer y cuya corrección se puede comprobar después. Ejemplos GTM:
  - Escribir un email y actualizar un registro.
  - Encontrar información de una persona en varias tablas (el prospecto trabaja en Acme Co, pero no está en la tabla de comerciales sino en otra).
- Las tareas deben reflejar lo que hacen tus colegas en el mundo real.

### Verificadores

> "Lo único que se supone que hace un verificador es decir: esa tarea ocurrió, ¿estuvo bien o mal?"

- Ejemplo programático: comprobar que las etiquetas de la persona incluyen "email enviado".
- Ejemplo de estilo: ¿el email tiene tres párrafos? ¿Sigue las guías de marca sobre la prosa y la longitud?

### Checklists binarios para lo no verificable

- No todo es verificable de inmediato. Hay mucho trabajo en convertir preferencias humanas en **checklists**, y la forma más fácil es sí/no.
- Según la investigación que cita, si pides a un LLM una puntuación de 1 a 10 sufre el "problema del medio": siempre dice 7 u 8 porque los datos de internet se parecen a eso; "le encanta cubrirse". Con un puntaje binario no puede.
- Flujo: un humano escribe lo que importa en esas comunicaciones, se comprueba si un agente que sigue el checklist hace un buen trabajo y luego se revisa a mano. Si no suena bien, quizá falta algo en el checklist o el prompt no es suficientemente bueno.
- Para tareas no verificables, el mejor verificador sale de pedir a la persona que mejor hace ese trabajo en la empresa que lo escriba.

### Modo difícil: entornos

- Viv usa *evals* y *entornos* casi como sinónimos. Hace tres o cuatro años, con ChatGPT, se medía prompt de entrada y respuesta de salida; hoy esperamos que el agente haga mucho trabajo en el mundo real, así que medir esa unidad ya no basta.
- **Entorno**: dónde trabaja el agente. Con Claude Code o Codex en tu terminal es tu computadora: archivos, navegador, email, apps y los permisos que le das.
- En empresas es su agente, sobre sus datos, con sus permisos específicos.
- No se puede dejar que el agente edite datos reales de producción mientras se prueba. Por eso los entornos actuales son **recreaciones de software existente** que imitan el trabajo real: simulan Salesforce, Gong, Notion o S3 para que el agente crea que opera en un CRM real, sin copiar los datos reales ni sobrescribirlos.

> "Es como un clon digital, o ese campo de entrenamiento donde puedo ajustar cualquier cosa del entorno para probar distintas cosas de mi agente."

### Construir o comprar: Harbor

Para un no ingeniero es una decisión de *build vs. buy*, y mucha herramienta es open source. En su equipo usan **Harbor**, que resuelve:

- Gestión de tareas separadas por equipo (las de GTM difieren de las de ingeniería de software).
- Entornos específicos por equipo.
- Infraestructura para correr todo a escala.
- Especificación para construir entornos poblados con tus datos simulados, y abstracciones para verificadores.

Ventajas: buenas abstracciones con posibilidad de bajar de nivel; es un estándar que usan los laboratorios frontier, los "neolabs" y las empresas de ingeniería de agentes; y permite **tomar prestados evals** publicados por otros en formato Harbor (hay muchos de GTM).

Consejo para empezar: descargar un eval en formato Harbor de un dataset existente y pedirle a Claude Code o Codex que te explique cómo funciona y si sirve para tu agente o hay que adaptarlo.

### Capas de abstracción y herramientas sin código

- Igual que hay capas en el mundo de los agentes (pesos del modelo → agente), las hay en evals: Harbor en la base y, encima, productos para quien no quiere saber qué es Harbor.
- LangChain tiene un producto con interfaz para crear evals a escala a partir de tus juicios sobre si una salida es buena o mala (muestra sugerencias, los emails generados y estadísticas), además de una CLI.
- Prevé que los equipos combinen: los desarrolladores con GitHub y Harbor, y productos construidos sobre esas primitivas y tus datos reales.

### Validar el entorno

> "Mi primer entorno nunca está bien; está mal de alguna forma."

- La forma de saber si un entorno es bueno es **correr un agente real** en él, igual que no sabes si un prompt mejoró hasta probarlo.
- Corren varios agentes (GPT-5.6 Sol, GLM 5.3, GLM 5.3 Flash, un Qwen pequeño) y buscan patrones raros: si Sol falla siempre y Qwen a veces pasa, hay que investigar.
- **Fugas de información**: los agentes hacen trampa si pueden; si una entrada de la base dice "respuesta placeholder", el agente la encontrará. El mundo real no se ve así. Se revisa con humanos.
- La ingeniería de entornos es tan iterativa como la de agentes.

### El modelo óptimo para cada tarea

Pregunta frecuente de clientes de Alex: ¿cuál es el modelo más barato que rinde aceptablemente en cada tarea, y cómo saberlo de forma programática cada vez que sale uno nuevo? El ritmo de lanzamientos se aceleró, y los modelos abiertos (directos o vía proveedores como Fireworks, Baseten o Prime Intellect) ya merecen probarse.

### Anatomía de una tarea y de la eval suite

Una **tarea** contiene:

1. **Verificador**: cómo comprobar que algo está bien.
2. **Instrucción**: el prompt de entrada ("investiga la empresa X").
3. **Archivo de entorno**: normalmente en Docker; un contenedor "congelado en el tiempo" con los datos (tablas) y las herramientas instaladas.

La **eval suite** es una colección de tareas **etiquetadas por familia** (ingeniería de software, GTM, code review). Así, si un modelo nuevo destaca en prosa, solo se prueba en GTM.

Proceso ante un modelo nuevo:

1. **Catálogo de modelos**: lista de candidatos (Opus, GLM 5.3, GPT-5.6 Sol…).
2. Correr cada modelo sobre la suite (o solo sobre una familia).
3. Comparar puntajes: por ejemplo, Opus 60 % y GLM 5.3 55 %, pero GLM es 3 veces más barato.
4. Decisión humana: ¿vale más ese 5 % o el costo y la velocidad? Tareas internas pueden ir al modelo barato; lo que ve el usuario, a la máxima inteligencia o velocidad.

### Modo dios: de producción a evals

> "Si tu equipo es muy, muy bueno convirtiendo datos de producción en evals, puedes mejorar continuamente tus agentes."

- El ciclo: correr el agente, generar datos de producción, convertirlos en evals y ajustar el agente para que pase; "el sueño y la promesa" de agentes que se automejoran.
- Ajustar el agente a un eval es modificarlo para que el eval pase. Dos grandes palancas:
  - **Harness engineering**: ajustar el prompt, las definiciones y descripciones de herramientas, la elección de modelo o combinaciones de modelos (Sol con Opus, GLM 5 con Opus). Barato; buen punto de partida.
  - **Fine-tuning**: como los modelos abiertos son ya muy capaces y existe la infraestructura, se entrena un modelo pequeño con datos de producción para una tarea estrecha que antes hacía Opus: unas 10 veces más barato y con rendimiento similar. Prevé una explosión de equipos que quieran "ser dueños de su inteligencia".
- Alex señala que el cuello de botella es el humano que actualiza verificadores o rúbricas. Dos preguntas: cómo hacer girar el ciclo lo más rápido posible y si puede hacerse sin humano en el bucle. Viv: hay que minimizar los puntos de contacto humano.

### Trazas y agentes que analizan trazas

> "Es prácticamente imposible que los humanos razonen sobre lo que hará un agente. Pero cuando lo pones en el mundo real y ves lo que hace, es muy fácil ver qué estuvo bien y qué estuvo mal."

- Consejo: **activa el tracing**.
- **Trazas**: registros de cada acción del agente (tool calls como consultar Salesforce o hacer una búsqueda web, y sus mensajes) y de cómo interactuó con cada sistema.
- Dónde guardarlas: decirle a Claude Code que lea los datos que ya genera, o, a escala y con gestión de permisos, usar un proveedor como LangSmith.
- Para extraer valor hacen falta **agentes que lean datos producidos por otros agentes**: el agente GTM trabaja y otro agente minero de trazas detecta, por ejemplo, que busca en las tablas equivocadas porque el prompt no deja claro dónde están los datos, o que ante pedidos multiempresa solo investiga una.
- Los evals son un proxy del comportamiento real; la pieza dorada es ejecutar el agente sobre datos reales y ver qué hace.

### Mejora autónoma y papel humano

Flujo actual (que se reduce con cada modelo):

1. Un humano escribe para el agente analista qué buscar: qué es buen y mal comportamiento (sobre todo al principio, con ediciones).
2. El agente analista detecta tool calls fallidas o instrucciones no seguidas del todo.
3. Propone mejoras: nuevo prompt, nueva herramienta, herramienta distinta. Con una buena eval suite y una forma de medir el mal comportamiento en producción, "dejarlo correr toda la noche" funciona muy bien.

Donde el humano sigue siendo valioso:

- Codificar qué es "bueno" para cada flujo, que es único (tarea inicial).
- Revisar la conversión de datos de producción en evals y entornos: los agentes pueden generarlos (por ejemplo, un test para que tres informes pedidos sean tres informes), pero no saben qué le importa realmente a la empresa entre el millón de cosas que el agente podría hacer.

> "Que los humanos escriban cómo se ve lo bueno sigue siendo una de las cosas de mayor apalancamiento que puede hacer una organización."

## Conceptos clave

- **Eval**: comprobación de si el trabajo de un agente es correcto según criterios codificados de la organización.
- **Tarea**: unidad de trabajo pequeña y comprobable; incluye instrucción, verificador y archivo de entorno.
- **Verificador**: lógica (código o checklist) que dictamina si la tarea salió bien o mal.
- **Checklist binario**: descomposición de preferencias humanas en preguntas sí/no para evitar el sesgo hacia puntuaciones intermedias.
- **Entorno (environment)**: réplica aislada, normalmente en un contenedor Docker, de los sistemas y datos donde trabaja el agente.
- **Eval suite**: colección de tareas etiquetadas por familia que se corre contra un catálogo de modelos.
- **Fuga de información**: pista o respuesta oculta en el entorno que permite al agente hacer trampa.
- **Traza**: registro de cada acción del agente y su interacción con los sistemas.
- **Modo dios**: ciclo continuo producción → trazas → evals → mejora del agente.

## Herramientas y referencias mencionadas

- Harnesses: Claude Code, Codex, Deep Agents.
- Sistemas del ejemplo: Salesforce, Gong, Notion, S3.
- Harbor (framework open source de entornos y evals); Docker.
- LangChain, LangSmith (trazas) y el producto de LangChain para crear evals con interfaz y CLI.
- Modelos: Claude Opus, GPT-5.6 Sol, GLM 5 / GLM 5.3 / GLM 5.3 Flash, Qwen.
- Proveedores de inferencia: Fireworks, Baseten, Prime Intellect.

## Referencias

- Transcripción: [[zLeG-XJtbIE - evals-fluidez-en-ia|Transcripción completa]]
- Video: [You're Not AI-Fluent Until You Understand Evals](https://www.youtube.com/watch?v=zLeG-XJtbIE) — Alex Lieberman
