---
title: "29 consejos de harness engineering: construir el sistema que construye el software"
tags:
  - arnes/nota
  - type/nota
  - arnes/flujos-de-trabajo
  - arnes/contexto-y-memoria
  - arnes/construccion
channel: "FlyRank AI"
speaker: "FlyRank AI"
videoId: "rraHPF4ZgCw"
source: "https://www.youtube.com/watch?v=rraHPF4ZgCw"
language: "en"
playlistOrder: 53
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harness Engineering: 29 Tips to Build the Systems That Build Software"
related:
  - "[[rraHPF4ZgCw - 29-consejos-de-harness-engineering|Transcripción]]"
---

# 29 consejos de harness engineering: construir el sistema que construye el software

Tutorial de unos 40 minutos del canal **FlyRank AI**, presentado en primera persona por un ponente que no se identifica. Está dirigido también a no desarrolladores. Primero define qué es un agente y qué es un harness (archivos MD, MCPs y herramientas en el editor de código). Después sienta tres bases: separar planificación y ejecución, el Ralph Loop y tratar el harness como un producto. Por último, presenta **29 consejos** agrupados en partes: entorno y documentación, memoria del agente, historial, specs, el loop, verificación y múltiples agentes.

Es una guía práctica y muy completa del flujo *spec-driven* + Ralph Loop, con prácticas concretas: archivos `blocked.md`, `tech-debt-tracker`, `learnings.md`, códigos de salida del loop, logs por iteración y agentes revisores programados. Su tesis es que el trabajo del ingeniero pasa de escribir código a **crear el entorno que lo escribe**.

## Resumen

- **Harness = el entorno alrededor del agente**: vive en el editor y tiene tres piezas, que son archivos MD (skills, reglas, docs), MCPs y herramientas.
- **AGENTS.md / CLAUDE.md como enrutador**: menos de 100 líneas, actúa como índice que dice qué archivo abrir y cuándo.
- **Planificar y ejecutar siempre por separado**: el plan vive en un `SPECS.md` con casillas, no en el *plan mode* del chat.
- **Arreglar el harness, no el código**: nunca corregir a mano sin actualizar las instrucciones que permitieron el error; ante una iteración mala, `git reset --hard`, corregir el prompt o la spec y repetir.
- **Proteger la ventana de contexto**: un chat por tarea, nunca compactar, y usar subagentes solo para investigar, nunca para implementar.
- **El repositorio como memoria**: commits detallados, una rama por cambio y una carpeta `tasks/<rama>/` con las specs usadas.
- **"Terminado" debe ser observable**: un test que pasa, una respuesta que se puede invocar, un número medible; ningún test fallido es aceptable.
- **Ralph Loop**: prompt en un archivo y el agente en un bucle infinito, con un ítem, un chat nuevo y un commit por iteración, hasta que no queden casillas sin marcar.
- **Operar el loop como un sistema**: `blocked.md` como freno de mano, códigos de salida (done, blocked, budget, compacted…), un log por iteración y mejora del loop a partir de esos logs.
- **Subir un nivel a la vez**: código manual, luego chat con agente, loop manual, loop automatizado y, por último, multiagente.
- **Verificar por capas**: logs en vivo con Chrome DevTools MCP, validación visual en cuatro capas y agentes revisores programados.
- **Multiagente al final**: dos agentes que debaten el diseño, modo paralelo con un agente revisor y merger, y un tablero de trabajo sobre buenos harnesses.

## Contenido estructurado

### Definiciones de partida

- **Agente**: una IA como Claude o GPT que, además de responder, abre archivos, escribe código, ejecuta comandos y busca en la web. "Un chat habla; un agente hace cosas".
- **Harness engineering**: "el entorno que construyes alrededor de tu agente. Y eso es todo".
- Recomienda instalar un editor de código (Cursor o VS Code), aunque no seas desarrollador.

### Los tres componentes del harness

1. **Archivos MD**: texto plano que leen los agentes.
   - *Skills*: enseñan al agente a hacer algo.
   - *Reglas*: lo que el agente debe cumplir siempre.
   - *Docs*: la arquitectura del proyecto y cómo se conectan sus partes.
2. **MCP**: protocolo que traduce los endpoints y datos de una app a un lenguaje que el agente entiende; al conectarse, entrega la lista de herramientas y datos disponibles. Es "traductor e instructor" entre la app y el agente.
3. **Herramientas**: funciones propias en cualquier lenguaje, además de las integradas (Claude Code y Codex ya traen herramientas para leer, editar o buscar en la web).

**Cómo construirlo**:
- Un archivo coordinador `AGENTS.md` (estándar abierto que leen Codex, Cursor y otros) o `CLAUDE.md` (el equivalente en Claude Code) con las reglas base y cuándo usar cada skill, regla o doc.
- Los MCP se instalan pidiéndole al propio agente que investigue cómo instalarlos y configurarlos, y después recargando el editor. Destaca **Chrome DevTools MCP**: abre páginas, hace clic, inspecciona el HTML, observa las peticiones de red, toma capturas y prueba.
- Si una app no tiene MCP, el agente puede escribir sus propios scripts.
- No hacen falta herramientas propias para empezar.

> "La idea central es muy simple: habilita a tu agente para hacer cosas y explícale cómo hacerlas."

### Tres bases antes de los consejos

1. **Planificar y ejecutar por separado**: un `SPECS.md` con ítems y casillas que el agente marca (*Specs Driven Development*). El autor **nunca usa el plan mode** integrado: "el plan mode mantiene el plan dentro del chat, y cuando el chat desaparece, el plan desaparece con él".
2. **Ralph Loop**: ejecutar el agente en bucle, ítem por ítem (se explica más adelante).
3. **El harness es un producto**: falla, se depura, se versiona y se mejora como cualquier software.

### Parte 1: tú decides y el entorno trabaja (consejos 1 a 7)

1. **Tú tomas las decisiones; el agente escribe**. Tu trabajo tampoco es corregir línea a línea, sino crear, mantener y mejorar el entorno. "Todos son desarrolladores ahora, pero no todos son ingenieros". Regla: **nunca arreglar en silencio a mano** sin actualizar las instrucciones que permitieron el error.
2. **Documentación detallada que lo cubra todo**: arquitectura, tecnología, patrones, prácticas y lógica de negocio, en archivos separados y enlazados entre sí, con ejemplos de implementación correcta. Un error en la documentación puede causar cientos de ítems mal implementados.
3. **Apuntar al código vivo, no describirlo**: en lugar de tres párrafos sobre cómo se obtienen datos de BigQuery, una línea que diga en qué archivo de servicio está. "El código es siempre la verdad; el doc solo muestra dónde vive".
4. **Archivo principal de menos de 100 líneas**: "cuando todo es importante, nada es importante". Funciona como enrutador o tabla de contenidos; cualquier MD que crezca demasiado se divide.
5. **Conocimiento que vive fuera del código**: archivos como `annual-plan.md` o `pricing-plan.md`, con instrucciones como "cumple siempre con el plan de precios". Además, preprocesar mensajes de Slack, tareas y tickets de soporte, guardarlos en una base de datos y explicarle al agente cómo recuperarlos, lo que en la práctica es una herramienta propia.
6. **Archivo de deuda técnica** (`tech-debt-tracker`): hace visibles los compromisos intencionales, como usar otro banner en una página, para que no se confundan con errores. Suma puntos añadir comentarios en esos puntos del código y llevar un changelog de decisiones de negocio.
7. **El harness se vuelve más listo con cada repetición**: anotar y generalizar cada caso límite en un `learnings.md` durante la sesión y trasladarlo al entorno al terminar. Reservar tiempo para mantener el harness. Ningún cambio de código se entrega sin consultar la documentación y actualizarla.

### Parte 2: proteger la memoria del agente (consejos 8 y 9)

La ventana de contexto es la memoria a corto plazo del agente: es limitada y empieza vacía en cada chat. Hay que mantenerla limpia y pequeña, y poner la memoria real en archivos.

8. **Nunca compactar el chat**: el agente rinde más cuando empieza de cero. Después va perdiendo contexto, asume reglas sin leerlas y se desvía. "Nunca te enamores de tu chat". Tras la compactación "solo tienes la sensación de que todo está bien"; se pierden detalles y no sabes cuáles. **Una tarea, un chat**.
9. **Subagentes para investigar**: el agente principal delega en subagentes (función integrada en Claude Code y Codex) que investigan en paralelo y devuelven solo un resumen. **Nunca para implementar**, porque los subagentes no ven el harness completo (reglas, docs, specs) como el agente principal.

### Parte 3: historia del proyecto (consejos 10 y 11)

10. **Mensajes de commit detallados, siempre**: así el agente puede reconstruir la historia del proyecto revisando el historial de Git. Además, una rama por cambio significativo y una carpeta `tasks/` con una subcarpeta por rama, con el mismo nombre, que guarde las specs usadas. El historial queda en local y el agente lo lee en segundos.
11. **Arreglar un bug "más viejo que tú"**: pedir al agente que recupere el contexto del harness y recorra el repositorio y el historial de Git, dándole todo dato extra (usuario de GitHub del autor, fecha aproximada, cuándo se detectó). Lección: **escribir tests siempre**, porque son la valla contra las regresiones. Esto solo funciona con nombres de rama claros, commits detallados y código documentado: "ya no construimos la app solo para que la lean humanos; también para los agentes".

### Parte 4: specs (consejos 12 a 14)

12. **Construir la spec junto al agente**: que primero revise los docs y las reglas y luego **te entreviste** sobre cada decisión poco clara, cada hueco de conocimiento y lo que parezca mal en el plan. Que divida el plan en **unidades lógicas** con casillas (por ejemplo, un conjunto de componentes compartidos, o un endpoint con todo lo que lo rodea), y que al final de la spec planifique los **tests**, incluida la autoverificación con Chrome DevTools MCP.
13. **"Terminado" debe ser algo que se pueda ver**: una respuesta que se puede invocar, un test que pasa, un número medible. "Nunca aceptes 'terminado' como una sensación". Ningún test fallido es tolerable. Fija el **100 % de cobertura** como nuevo estándar, con tests desde dos ángulos: código (la lógica es correcta) y comportamiento (lo que espera el usuario). A esto lo llama *specs-driven testing*.
14. **Implementar por unidades lógicas, no por el orden de la lista**: la lista explica el plan en orden de lectura, pero el agente elige el orden de construcción por importancia. Por ejemplo, primero los componentes compartidos y luego cada página.

### Parte 5: el loop (consejos 15 a 23)

15. **Un ítem, un chat nuevo**: leer los docs y las reglas, abrir la spec, elegir el ítem más importante sin terminar, implementarlo, actualizar los docs, marcar la casilla, hacer commit y push. Después cerrar el chat y repetir el mismo prompt. "En cada sesión el agente es un extraño que solo tiene el repo". Conviene hacerlo a mano un tiempo para ganar confianza y detectar dónde se confunde el agente.
16. **Freno de mano: `blocked.md`**: ante un bloqueo real (por ejemplo, un MCP sin acceso a una base de datos externa), el agente no inventa nada: escribe el problema y se detiene. El humano corrige la causa (variables de entorno, servicios externos), vacía el archivo y relanza.
17. **Ralph Loop**: poner el prompt en un archivo y ejecutar el agente en un bucle infinito. El patrón lo popularizó y bautizó **Geoffrey Huntley**; el comando exacto depende de la herramienta y su versión, y se puede pedir al agente la forma no interactiva. Ejemplo de prompt:

   > "Lee el archivo de arquitectura y las reglas para obtener contexto del proyecto. Luego abre el archivo de specs. Antes de cambiar nada, busca en el código con subagentes en paralelo: nunca asumas que un ítem no está implementado. Implementa el ítem sin terminar más importante. Al terminar: marca la casilla, actualiza los docs, haz commit con un mensaje detallado y push."

   Condición de salida: no quedan casillas sin marcar. "Una línea de bash, y todo lo demás en este video es el harness alrededor de esa línea".
18. **Recuperarse con `git reset` y una corrección del prompt, nunca a mano**: descartar la ejecución mala, arreglar el prompt, la spec o las reglas y relanzar. "Cualquier problema creado por IA puede resolverse con una mejor serie de prompts".
19. **Un código de salida por cada final del loop**: *done* (solo se notifica), *blocked* (revisar `blocked.md`), *budget* (se superó el límite de tokens; se reprograma unas horas después), *compacted*. Se puede ampliar con *stuck* (varias iteraciones sin commits) u *outage* (un endpoint que falla repetidamente).
20. **Un log por iteración**: los códigos dicen cómo terminó la ejecución; los logs dicen qué pasó en medio y en qué momento se desvió. Con el log y el código relevante, un chat nuevo encuentra el fallo.
21. **Mejorar el loop desde el loop**: tras cada ciclo completo, dar los logs al agente y preguntar dónde se atascó, qué instrucciones no estaban claras, qué ítems tardaron más y qué cambiar. "El loop literalmente mejora el loop".
22. **Loop para todo lo repetitivo**: tests, refactors, documentación, limpiezas, auditorías y evaluaciones. Cualquier cosa con la forma "elegir un ítem, hacerlo, verificarlo, marcarlo" encaja; solo cambian el prompt y la lista de tareas.
23. **Subir un nivel a la vez**: código manual, luego agente chat por chat, loop manual, loop automatizado y, por último, multiagente con orquestación. Cada nivel enseña los fallos del siguiente; si te saltas niveles, te encuentras todos los fallos a la vez y sin supervisión.

### Parte 6: confiar pero verificar (consejos 24 a 26)

24. **Cerrar el ciclo de feedback con logs en vivo**: el agente añade logs al código, los sigue con Chrome DevTools MCP y los usa en la misma sesión, así que es constructor y QA a la vez. Hay que controlar el tamaño: primero medir el log y extraer solo lo necesario, o delegar el log enorme a un subagente que devuelva solo la parte relevante.
25. **Replicar webs con validación por capas**:
    1. Comparar el código (idéntico o equivalente).
    2. Comparar con Chrome DevTools MCP elemento por elemento, sección por sección y página completa, incluidos los estilos computados.
    3. Precisión de píxel con una herramienta de diff (por ejemplo, pixelmatch), que funciona como "detector de humo" y nunca como juez final.
    4. Probar como usuario real (clic, scroll, escribir) en todos los tamaños de pantalla.
26. **Agentes revisores programados**: uno revisa el código contra las reglas, otro la coherencia del trabajo con los docs y otro busca docs que se contradicen. Lo que pueden arreglar con seguridad lo commitean; lo demás va a un `reviewer-findings.md` que se revisa con un agente nuevo y luego se vacía.

### Parte 7: múltiples agentes (consejos 27 a 29)

27. **Dos agentes que debaten el diseño**: uno propone y otro ataca (puntos débiles, casos que faltan, alternativas más simples). El diseño que sobrevive se convierte en la spec. "Nunca implementes un diseño que solo un contexto miró una vez".
28. **Elegir el modo de entrega**:
    - *Secuencial* (recomendado para empezar): una rama, revisión humana y merge, sin pull requests.
    - *Paralelo*: cada agente trabaja en su rama y abre un PR. Un agente "desarrollador senior" vigila el repo, revisa, da feedback y hace merge. Los conflictos se convierten en puntos de decisión donde ese agente compara ambas soluciones y elige la mejor.
29. **Tablero de trabajo cuando los loops se multiplican**: convierte cada ítem en una ejecución aislada y autónoma que debe terminar con **prueba de trabajo** (diff, tests que pasan, evidencia), y muestra en una pantalla el estado, el coste y la prueba de cada ejecución. Según sus autores, un buen harness es requisito previo: el tablero va "encima de buenos harnesses, nunca en su lugar".

### Cierre: el nuevo trabajo del ingeniero

1. Entender el proyecto.
2. Entender cómo se construye y depura.
3. Crear un harness reutilizable alrededor del proyecto.
4. Automatizar los métodos probados y anticipar los futuros.
5. Seguir el comportamiento completo y mejorar el sistema continuamente.

> "El gran cambio es este: de escribir el código a crear el entorno que lo escribe por nosotros. Siempre seguimos al volante."

## Conceptos clave

- **Harness engineering**: construir el entorno (archivos MD, MCPs, herramientas) alrededor del agente.
- **Specs Driven Development**: planificar en un archivo de specs con casillas y ejecutar desde ese archivo.
- **Ralph Loop**: ejecutar el agente en un bucle infinito con un prompt fijo, un ítem y un commit por iteración, hasta completar la spec.
- **Ventana de contexto**: memoria a corto plazo del agente, limitada y vacía al inicio de cada chat.
- **Compactación**: resumen automático del chat al llenarse el contexto, que pierde detalles sin avisar cuáles.
- **`blocked.md`**: freno de mano donde el agente registra un bloqueo real y se detiene en vez de inventar.
- **Códigos de salida del loop**: finales predefinidos (done, blocked, budget, compacted, stuck, outage) que determinan qué hacer después.
- **Specs-driven testing**: tests escritos contra la spec y el comportamiento esperado por el usuario.
- **Prueba de trabajo (proof of work)**: diff, tests y evidencia con los que debe terminar cada ejecución autónoma.

## Herramientas y referencias mencionadas

- Cursor, VS Code, Claude Code, Codex.
- AGENTS.md (estándar abierto) y CLAUDE.md.
- Chrome DevTools MCP.
- Git y GitHub (ramas, commits, pull requests).
- BigQuery (ejemplo), Slack, tickets de soporte.
- pixelmatch (diff de píxeles).
- Geoffrey Huntley, creador del Ralph Loop.
- Repositorio starter de FlyRank (enlazado en la descripción del video).

## Referencias

- Transcripción: [[rraHPF4ZgCw - 29-consejos-de-harness-engineering|Transcripción completa]]
- Video: [Harness Engineering: 29 Tips to Build the Systems That Build Software](https://www.youtube.com/watch?v=rraHPF4ZgCw) — FlyRank AI
