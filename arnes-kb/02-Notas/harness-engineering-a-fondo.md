---
title: "Harness engineering a fondo: recuperación, memoria, bucles y orquestación en coding agents"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/contexto-y-memoria
  - arnes/orquestacion-multiagente
channel: "Rajistics - data science, AI, and machine learning"
speaker: "Raj (Rajistics)"
videoId: "KijChx7q2nY"
source: "https://www.youtube.com/watch?v=KijChx7q2nY"
language: "en"
playlistOrder: 20
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harness Engineering Deep Dive"
related:
  - "[[KijChx7q2nY - harness-engineering-a-fondo|Transcripción]]"
---

# Harness engineering a fondo: recuperación, memoria, bucles y orquestación en coding agents

Charla técnica de Raj, del canal Rajistics (que menciona trabajar en OpenHands), en formato de presentación con diapositivas de unos 34 minutos. Recorre de forma sistemática las piezas que rodean al modelo en un *coding harness* —recuperación de información, contexto y memoria, bucles y herramientas, y orquestación— apoyándose en benchmarks, estudios y experimentos propios publicados en su repositorio "Harness Engineering".

Su tesis: con el mismo modelo, el harness produce diferencias enormes de rendimiento; hay muchas "perillas" ajustables y además el entorno donde corre el harness (abierto o cerrado) determina el control sobre tus datos, memorias y skills. Tras el fine-tuning (hace dos años) y la ingeniería de contexto/RAG (el año pasado), "este año va de harnesses".

## Resumen

- **El harness marca la diferencia**: con Opus 4.5, un benchmark da 95% con Claude Code y 42% con el small agent de Hugging Face; en Terminal Bench, con el mismo modelo, los resultados van de casi 80% a ~58%.
- **Las tareas cambiaron**: de una consulta sin estado (análisis de sentimiento) a arreglar un bug en un repo completo, con ~13 millones de tokens de entrada para 50.000 de salida y 20 minutos de bucle.
- **Los harnesses acumulan deuda técnica**: evolucionan con los modelos; Manus reconstruyó su harness cinco veces en seis meses. Los system prompts de Opus, curiosamente, crecen en cada versión.
- **Recuperación**: grep y BM25 siguen siendo clave; la búsqueda agéntica (reformular consultas en bucle) con un buen modelo puede superar a un RAG con embeddings, incluso sin chunking.
- **La ventana de contexto se degrada**: aunque sea de 1M de tokens, los modelos pierden información; la regla práctica es no pasar de la mitad.
- **Tres capas de memoria**: gestión de la ventana activa (ventana deslizante, compactación, *rewind*), estado de trabajo en archivos (planes, to-dos, RLM) y memoria durable (AGENTS.md, skills).
- **Skills, el "patrón oro" de la memoria**, pero pueden empeorar el rendimiento: hay que evaluarlas con y sin la skill.
- **Harnesses cerrados vs. abiertos**: en los cerrados, compactación, memorias y skills viven en el entorno de otro; hay incentivos al lock-in.
- **Bucles**: del bucle Ralph Wiggum (fuerza bruta) a bucles con plan, hipótesis y verificación (autoresearch de Karpathy), TDD y restricciones del sistema.
- **Multiagente con cautela**: en promedio, un solo agente supera a los sistemas multiagente por el "impuesto de coordinación"; la reflexión con un agente crítico sí funciona muy bien.

## Contenido estructurado

### Qué es un harness y por qué importa

El modelo está en el centro; alrededor hay muchas piezas que forman el harness, y **modelo + harness = agente**. El harness soporta el bucle: un prompt se pasa al modelo, este ejecuta una acción, recibe retroalimentación, ajusta y vuelve a iterar. Para que funcione hacen falta:

- Estado del sistema (el repo, la memoria).
- Control del proceso y capacidad de trabajar con retroalimentación.
- Un lugar de ejecución.

Encima del harness está el **SDK**, que lo abstrae para construir tus propias acciones agénticas (OpenHands SDK, los SDK de OpenAI y Anthropic, y Cursor anunció uno recientemente). Optimizadores como Auto Harness o Meta Harness muestran que un modelo pequeño con un harness muy bueno puede superar a uno grande.

En Claude Code, alrededor del bucle del agente hay piezas de UI/CLI, seguridad y gestión de memoria y estado. Raj recuerda que Anthropic reconoció bugs en su harness (cambios de valores por defecto, memoria que se descartaba, cambios en system prompts) que degradaban el rendimiento, y que al ser cerrado nadie podía investigarlos por su cuenta.

Raj organiza la charla en cinco palancas: modelo, recuperación, contexto/memoria, bucles/herramientas y orquestación.

### Recuperación de información

- **grep**: rápido y probado, pero recorre todo el texto de forma lineal; con más documentos tarda más.
- **BM25**: usa índices invertidos, por lo que la búsqueda es muy rápida; existen coding agents que lo usan aunque el harness por defecto no lo traiga.
- **Límites léxicos**: "médico" y "doctor" no se escriben igual. Cursor añadió búsqueda semántica y reportó mejoras de precisión.
- **Agentic search**: en lugar de una consulta única, el modelo reformula según los resultados y aprovecha sinónimos. En sus pruebas, solo con BM25 en modo agéntico obtuvo precisión muy alta, a costa de más tiempo. Se puede trabajar a nivel de archivo, sin chunking.
- **¿Cuándo pasar a una base de datos?** Cuando crece el número de archivos y aparecen metadatos o *joins*.

> "Piensen en lo léxico: deberían usarlo todo el tiempo, sobre todo combinado con búsqueda agéntica. Los embeddings siguen siendo útiles en algunos contextos, pero no hace falta depender tanto de ellos."

### Contexto y memoria

Las ventanas de 1M son grandes, pero los datos son insaciables (PDFs, repos enormes) y, sobre todo, **se degradan**: los modelos pierden información en contextos largos (hay experimentos en su repo). Una herramienta que vuelca muchos mensajes de error puede devorar la ventana.

**1. Ventana de contexto activa**
- Ventana deslizante (recordar solo los últimos mensajes).
- Resumir o compactar información antigua: reduce tokens y costo. En OpenHands comprobaron que una compactación bien hecha mantiene o incluso mejora ligeramente el rendimiento en tareas de ingeniería de software.
- Crítica: Codex usa un prompt de compactación no revelado y cifra todo en sus servidores; si se equivoca, puede descartar información importante.
- *Rewind* en Claude Code (Esc dos veces): volver unos pasos atrás para no llenar la ventana con una rama equivocada.

**2. Estado de trabajo en archivos**
- Escribir un plan en markdown y consultarlo (los *deep agents* de LangChain marcaban sus to-dos al avanzar).
- En el extremo, los **recursive language models (RLM)**: guardar todo y usar un REPL de Python para buscarlo, lo que equivale a una ventana enorme; mejoraron en tareas de contexto largo.

**3. Memoria durable**
- La memoria de ChatGPT puede ser contraproducente (como Amazon creyendo que te encantan las tapas de inodoro tras comprar una).
- **AGENTS.md**: por repo, se añade al system prompt; casi todos los harnesses lo soportan. Un estudio encontró que los AGENTS.md **autogenerados empeoran el rendimiento** y suben el costo de inferencia.
- Boris (Claude Code) los tira y reconstruye con cada release; a Raj le parece excesivo, pero valida la idea de revisarlos periódicamente.

### Skills: memoria progresiva que hay que evaluar

Las skills no son solo prompts: incluyen instrucciones, código y material de referencia; "externalizan experiencia". Cursor contó en una conferencia que reemplazó **15.000 líneas de código de orquestación por una skill de 200 líneas**. El agente Hermes mejora sus propias skills a medida que aprende: un bucle interno resuelve la tarea y un bucle externo la hace cada vez más inteligente.

Pero las skills pueden **reducir el rendimiento** si contienen lo que el modelo ya sabe o le imponen pasos contrarios a sus capacidades nativas (p. ej., procesar un archivo multimodal que el modelo ya maneja de forma nativa). Solución:

> "Evalúen las skills: miren el rendimiento con la skill y sin ella, de forma rutinaria, para asegurarse de que realmente aportan mejora."

Estas innovaciones acabarán llegando a todos los harnesses; memoria y skills las introdujo Anthropic y en Codex hubo que esperar meses.

### Harnesses cerrados vs. abiertos

Nadie sabía exactamente cómo Claude Code hacía la compactación, el manejo de AGENTS.md o la búsqueda de herramientas hasta que su código se filtró. Citando a Harrison Chase (LangChain): con un harness cerrado, tus datos, memorias, resúmenes y skills viven en el entorno de otro y se procesan con métodos propietarios; con un harness abierto sabes cuál es la estrategia de compactación y todo es tuyo. Raj prevé que el lock-in será un tema creciente.

### Bucles y uso de herramientas

- Desde o1 (hace año y medio) arrancó el *test-time inference*; hoy Opus viene preparado para trabajar en bucle con herramientas.
- **Bucle Ralph Wiggum**: intentar, fallar, borrar todo y reintentar sin aprender. Fuerza bruta con muchos tokens; aun así, alguien de su equipo construyó un compilador de C así.
- **Planificar antes de ejecutar** y ceñirse al plan.
- **Autoresearch de Karpathy**: un agente que corre experimentos para mejorar el entrenamiento de un transformer, con un bucle de **hipótesis y verificación** que retroalimenta el siguiente intento.

Buenas prácticas del harness:
- **Truncar salidas**: guardar las últimas 2.000 líneas en vez de 20.000.
- **TDD**: los tests permiten al agente verificar si resolvió el problema. Factory recuerda escribir los tests **antes** del código, para no "sellar" las suposiciones del código en los tests.
- **Restricciones del sistema** (OpenAI): el desarrollador pasa a gestor; añadir instrucciones como "ningún archivo de más de 200 líneas" para forzar la descomposición.
- **Seguridad y fricción**: trabajar en el portátil con claves de API es mala idea; mejor un sandbox aislado. Además, "fricción de aprobación" graduada: acciones sin problema, acciones que merecen atención y acciones destructivas que exigen confirmación.

Principios del paper de SWE-bench (SWE-agent) que siguen vigentes:
- Acciones simples, fáciles de entender, compactas y eficientes.
- Retroalimentación del entorno informativa y concisa.
- Guardrails para mitigar la propagación de errores y facilitar la recuperación.

### Orquestación: un agente vs. multiagente

Dividir el contexto entre varios agentes parece lógico, pero los sistemas multiagente (sobre todo los orientados a eventos) son muy complejos. Los harnesses soportan formas más acotadas: paralelización de subtareas o un agente orquestador que delega.

- Los "enjambres" de cien agentes en paralelo chocan con la coordinación. Factory encontró más útil un enfoque **serial** con orquestador, trabajadores y validación.
- Un estudio sobre benchmarks populares encontró que, **en promedio, un solo agente supera al multiagente** por el "impuesto de coordinación".
- Donde sí brillan: la **reflexión**. Usar Opus como conductor principal y un modelo GPT como crítico que revisa y da feedback; viene integrado en OpenHands.

### Qué perdurará

Se comoditizarán los detalles finos (cómo compactar, herramientas por defecto, ajustes de prompt por modelo). Perdurarán:
- Las skills: reunir la experiencia de toda la organización.
- La memoria: aún no está resuelto qué retener y qué descartar.
- Bibliotecas de herramientas específicas de dominio.
- La postura de seguridad.

Recomendaciones finales: recuperación con grep/BM25/semántica; memoria con archivos y skills; herramientas cuidando calidad, cantidad y manejo de errores; bucles con hipótesis, planificación y tests; orquestación centrada en un solo agente, con multiagente muy limitado. Y que el harness funcione en entornos que controles, vigilando el lock-in.

## Conceptos clave

- **Coding harness**: sistema alrededor del modelo que gestiona estado, bucle, retroalimentación y ejecución; con el modelo forma el agente.
- **Agentic search**: búsqueda iterativa donde el modelo reformula consultas según resultados, aprovechando sinónimos sin depender de embeddings.
- **Compactación**: resumir o condensar el historial para reducir tokens sin perder lo importante.
- **Capas de memoria**: ventana activa, estado de trabajo en archivos y memoria durable entre sesiones.
- **Recursive language model (RLM)**: guarda todo el historial y lo consulta con un REPL de Python, ampliando la ventana efectiva.
- **Skill**: paquete de instrucciones, código y referencias que externaliza experiencia; se carga progresivamente y debe evaluarse.
- **Bucle Ralph Wiggum**: reintentar por fuerza bruta sin aprender de los fallos.
- **Fricción de aprobación**: niveles de confirmación según lo destructiva que sea una acción.
- **Impuesto de coordinación**: costo de que varios agentes se coordinen, que suele anular las ventajas del multiagente.

## Herramientas y referencias mencionadas

- Harnesses y agentes: Claude Code, Codex, Cursor, OpenHands (y su SDK), Hugging Face smolagents, LangChain deep agents, Hermes agent, Manus.
- Frameworks antiguos: AutoGen, CrewAI.
- Optimización de harnesses: Auto Harness, Meta Harness.
- Benchmarks: Terminal Bench, SWE-bench (paper SWE-agent).
- Técnicas: grep, BM25, búsqueda semántica de Cursor, recursive language models, autoresearch de Karpathy, bucle Ralph Wiggum.
- Personas y empresas: Boris (Claude Code), Harrison Chase (LangChain), Andrej Karpathy, Factory, OpenAI, Anthropic.
- Repositorio "Harness Engineering" de Raj con experimentos y diapositivas.

## Referencias

- Transcripción: [[KijChx7q2nY - harness-engineering-a-fondo|Transcripción completa]]
- Video: [Harness Engineering Deep Dive](https://www.youtube.com/watch?v=KijChx7q2nY) — Rajistics - data science, AI, and machine learning
