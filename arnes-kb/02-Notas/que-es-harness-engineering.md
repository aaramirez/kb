---
title: "Qué es el harness engineering: contexto, herramientas, memoria y verificación"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/contexto-y-memoria
  - arnes/orquestacion-multiagente
channel: "BettaTech"
speaker: "Martí (BettaTech)"
videoId: "q9Vaoz0hd0U"
source: "https://www.youtube.com/watch?v=q9Vaoz0hd0U"
language: "es"
playlistOrder: 1
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "¿Qué es esto del Harness Engineering?"
related:
  - "[[q9Vaoz0hd0U - que-es-harness-engineering|Transcripción]]"
---

# Qué es el harness engineering: contexto, herramientas, memoria y verificación

Video divulgativo de BettaTech (canal en español de Martí) que abre una serie de tres sobre harness engineering. En formato de explicación con diagramas y una demo final en Claude Code, define qué es un arnés, por qué buena parte de las mejoras recientes en el desarrollo con IA vienen del entorno y no del modelo, y qué principios (simplicidad de herramientas, gestión del contexto, memoria externa, verificación y orquestación multiagente) hacen que un arnés funcione.

Es una buena puerta de entrada al tema: aterriza el concepto con artículos de Vercel y Anthropic y lo concreta en un repositorio de ejemplo con `AGENTS.md`, `init.sh`, una lista de features en JSON, agentes líder/implementador/revisor y una carpeta `progress` como memoria.

## Resumen

- **El arnés es el entorno del modelo**: contexto, herramientas, memoria y validación que rodean a un LLM; permite "cambiarle el cerebro" sin rehacer el sistema.
- **Metáfora del caballo**: la IA genera miles de líneas de código ("caballo desbocado") y el arnés son las riendas y la silla para controlarla.
- **Más complejidad empeora el arnés**: llenar al agente de herramientas hiperespecializadas, MCPs y contexto resulta contraproducente.
- **Caso Vercel (d0)**: eliminar el 80 % de las tools y dejar solo utilidades Unix (grep, cat, ls) dio más de 3x de velocidad y 37 % menos de tokens.
- **El contexto se degrada antes de llenarse**: la degradación empieza alrededor del 20 % de la ventana y se recomienda limpiar hacia el 40 %.
- **Memoria fuera de la ventana**: sacar información relevante a ficheros o bases de datos para que la ventana de contexto no esté siempre llena.
- **Subagentes con contexto limpio**: los hijos no deben heredar todo el contexto del padre, solo lo necesario para su tarea.
- **La IA debe demostrar, no afirmar**: tests automatizados, navegador (Puppeteer, Chrome DevTools) y agentes revisores como capa de verificación.
- **Tres pilares**: el repositorio como sistema, la orquestación multiagente y la verificación (con automejora del propio arnés).
- **Un buen arnés se apoya en un buen proyecto**: código consistente y repetible hace más predecible lo que la IA implementa.

## Contenido estructurado

### De chatbot a sistema
El autor parte de una observación: herramientas como ChatGPT, Claude o Copilot a veces hacen cosas increíbles y otras fallan en lo más simple. Su tesis es que muchas de las grandes mejoras del ecosistema no han sido mejores modelos, sino mejores entornos de ejecución: los arneses.

Además, escribir código es cada vez más rápido, de modo que se genera mucho más código y leerlo se vuelve más difícil. La responsabilidad del desarrollador pasa a ser "controlar este caballo desbocado".

> "Se le ha llamado harness engineering a la práctica de construir un entorno, un ecosistema para controlar a este caballo, a este modelo de inteligencia artificial."

### Componentes de un arnés
El entorno que rodea al modelo incluye:

- **Contexto** que se le envía.
- **Herramientas** para ejecutar acciones.
- **Memoria**: qué está haciendo, qué ya hizo y qué debe recordar.
- **Validación** del trabajo.

Una ventaja clave: al definir todo el envoltorio, se puede sustituir el modelo a medida que salen versiones nuevas o más baratas. "Un sistema al que simplemente le cambias el cerebro".

### Menos es más: el caso Vercel
La intuición de "darle al modelo muchas skills, MCPs, más contexto y más instrucciones" lleva a un arnés peor:

> "Ha quedado demostrado que cuanto más complejo haces el arnés, peor funciona."

Vercel publicó cómo eliminó el 80 % de las tools de d0, su agente de consultas y análisis de grandes volúmenes de datos (hermano de v0). Al principio le dieron herramientas especializadas para SQL y conexión a bases de datos, y un envoltorio que marcaba con precisión cómo razonar. Luego se preguntaron qué pasaría si le quitaban "los ruedines":

- Reemplazaron las tools especializadas por utilidades Unix básicas: `grep`, `cat`, `ls`.
- Resultado: más de 3 veces más rápido y 37 % menos tokens.
- La versión simple venció a la anterior en todas las peticiones.

### Degradación del contexto y memoria
Cuanto más tiempo se usa un agente en una sesión, "más tonto se vuelve". Pese a ventanas cada vez más grandes, la calidad cae mucho antes de llenarlas. El autor cita un issue de GitHub según el cual la degradación empieza hacia el 20 % y conviene limpiar la ventana (o abrir una nueva sesión de Claude Code) a partir del 40 %.

Por eso la gestión del contexto es central y se complementa con un sistema de memoria: sacar lo relevante de la ventana a ficheros o bases de datos. Pedir a un agente una aplicación completa o dejarlo horas trabajando sin un buen arnés produce malos resultados.

### Sesiones largas y subagentes (Anthropic)
Anthropic publicó guías sobre arneses efectivos para sesiones largas de codificación:

- Usar un fichero JSON estructurado con las tareas, que los agentes consultan según necesiten.
- Esto permite varios agentes en paralelo, que revisan el estado en ese fichero externo.
- Subagentes: desde un agente padre con mucho contexto acumulado se lanzan agentes hijos que **no heredan** todo ese contexto, solo lo necesario para su tarea, y por eso son más eficientes.

### Verificación: demostrar en lugar de afirmar
El problema más peligroso es que no se puede confiar en todo lo que dice la IA: el código generado puede parecer 100 % convincente sin cumplir su objetivo, porque la IA está entrenada para parecer verosímil.

> "¿Cómo haces que la IA no simplemente diga que algo está hecho, sino que realmente lo demuestre?"

Herramientas de verificación:

- Tests automatizados (pedidos a la IA o escritos por nosotros).
- Levantar un navegador y probar (Puppeteer, Chrome DevTools).
- Agentes de IA como revisores de código, con instrucciones sobre cómo validar el trabajo.

### El sistema multiagente de investigación de Anthropic
En el artículo "Cómo construimos nuestro sistema multiagente de investigación", Anthropic describe un agente orquestador que crea y delega de forma iterativa en subagentes que buscan información y la guardan en memoria; al terminar, devuelve el resultado al usuario.

### Los tres pilares
1. **El repositorio como sistema**: no usar la IA como chatbot, sino montar el arnés dentro del propio repo y "vitaminarlo" con el LLM.
2. **Orquestación multiagente**: un agente líder que lanza (spawnea) pequeños agentes que hacen el trabajo.
3. **Verificación y automejora**: el arnés verifica el trabajo y, como es parte del proyecto, se puede actualizar (prompts, reglas) cuando un agente no rinde.

### Ejemplo práctico de arnés
Recomendación: empezar "de menos a más", entendiendo cada paso. El repo de ejemplo (enlazado en la descripción) tiene:

- **Agentes en `.claude/`**: implementador, líder y revisor; definiciones sencillas con nombre y responsabilidades. Todos siguen el mismo protocolo: leer `AGENTS.md` y los documentos de arquitectura y convenciones.
- **`AGENTS.md` como punto de entrada**: es lo primero que entra en el contexto e incluye las reglas que cada agente debe seguir antes de empezar.
- **`init.sh`**: script de inicialización que verifica que Python está instalado, que existen `AGENTS.md`, la lista de features y el fichero de progreso con el formato correcto, y que los tests pasan. Si algo falla, el agente no debe empezar a trabajar.
- **Lista de features en JSON** (similar a la recomendada por Anthropic): cada feature con descripción, criterios de aceptación y estado (`done`, `pending`). Se podría sustituir por Linear o Jira con un MCP.
- **Mapa del repositorio** en `AGENTS.md` para que el agente sepa dónde mirar sin leer todo el proyecto.
- **Reglas**, por ejemplo: no marcar una tarea como `done` sin haber ejecutado los tests y que pasen.

### Orquestación y "teléfono descompuesto"
El líder toma la primera tarea pendiente y decide qué agentes lanzar: un implementer para una tarea de código, un explorer para investigación, y al terminar el implementer, un reviewer.

Para evitar el "teléfono descompuesto" (pérdida de información entre agentes), el líder ordena a los subagentes escribir sus resultados en la carpeta `progress`: ejecución actual, resultados de exploraciones (métricas, funciones añadidas, dependencias) y un histórico. Un agente nuevo solo necesita leer `progress`.

> "Tenemos un sistema de memoria, no es para nada magia, no es nada complicado, simplemente estamos guardando en un fichero lo que va ocurriendo."

Se podría evolucionar a SQLite, una base local o una base remota compartida entre agentes.

### El reviewer y la automejora
El reviewer aprueba o rechaza el trabajo del implementador: lee convenciones, arquitectura y memoria del repo, ejecuta `init.sh` y da feedback. Como todo son ficheros del repo, el reviewer puede incluso modificar su propia definición `.md` y automejorarse.

Además, se pueden usar hooks de Claude Code; el autor configuró uno para ejecutar `init.sh` al cerrar Claude Code y no dejar el proyecto en estado fallido.

### Demo en Claude Code
Prompt: "lee AGENTS.md y sigue el protocolo, ejecuta init, lee el progreso y elige una feature". El agente:

1. Lee `AGENTS.md`, ejecuta `init.sh` y comprueba que los tests están en verde.
2. Detecta una única feature pendiente (búsqueda por CLI).
3. Lee `architecture.md`, convenciones, verificación y código existente.
4. Marca la tarea como en progreso y actualiza el fichero de tarea actual (contexto fuera de la ventana).
5. El implementador escribe los tests necesarios y el código.
6. Al validar, marca la tarea como `done`, la registra en `history.md` (a modo de changelog) y limpia el fichero de tarea actual.

### Calidad del proyecto
Un buen arnés ayuda, pero también la calidad del proyecto: una estructura clara y repetible (todos los módulos construidos igual) facilita que la IA prediga cómo construir lo nuevo.

> "Si sumas buenas prácticas de código, experiencia en programación más un buen arnés en tu equipo de desarrollo, vas a ser capaz de sacarle el máximo partido a la inteligencia artificial."

## Conceptos clave

- **Arnés (harness)**: el entorno que rodea al modelo (contexto, herramientas, memoria, validación) y permite controlarlo y sustituirlo.
- **Harness engineering**: la práctica de construir ese entorno para controlar a un modelo de IA.
- **Degradación del contexto**: pérdida de calidad de las respuestas a medida que la ventana se llena, muy antes de su límite.
- **Memoria externa**: información relevante guardada fuera de la ventana (ficheros, bases de datos) para que otros agentes o sesiones la reutilicen.
- **Subagente**: agente hijo lanzado por un orquestador, con contexto reducido a su tarea.
- **Teléfono descompuesto**: pérdida de información entre agentes; se evita haciendo que escriban sus resultados en ficheros.
- **Verificación**: mecanismos (tests, navegador, reviewers) que obligan a la IA a demostrar que el trabajo está terminado.
- **`init.sh`**: script de arranque que decide si el proyecto está en condiciones para que el agente trabaje.

## Herramientas y referencias mencionadas

- Vercel: artículo sobre eliminar el 80 % de las tools del agente d0; v0.
- Anthropic: artículos sobre arneses efectivos para agentes de larga duración y sobre su sistema multiagente de investigación.
- Claude Code (agentes en `.claude/`, hooks), ChatGPT, GitHub Copilot.
- Utilidades Unix: grep, cat, ls.
- Puppeteer, Chrome DevTools.
- Linear, Jira, MCP, SQLite.
- Issue de GitHub sobre degradación del contexto en Claude Code.
- Video del mismo canal sobre Spec-Driven Development.

## Referencias

- Transcripción: [[q9Vaoz0hd0U - que-es-harness-engineering|Transcripción completa]]
- Video: [¿Qué es esto del Harness Engineering?](https://www.youtube.com/watch?v=q9Vaoz0hd0U) — BettaTech
