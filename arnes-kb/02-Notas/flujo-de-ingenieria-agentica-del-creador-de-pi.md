---
title: "Armin Ronacher (Pi / Earendil): harnesses mínimos, ingeniería agéntica conservadora y el futuro de los agentes"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/flujos-de-trabajo
  - arnes/opinion
channel: "David Ondrej"
speaker: "Armin Ronacher, entrevistado por David Ondrej"
videoId: "SxuQs9GGYbk"
source: "https://www.youtube.com/watch?v=SxuQs9GGYbk"
language: "en"
playlistOrder: 10
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Pi Agent dev reveals his Agentic Engineering Workflow"
related:
  - "[[SxuQs9GGYbk - flujo-de-ingenieria-agentica-del-creador-de-pi|Transcripción]]"
---

# Armin Ronacher (Pi / Earendil): harnesses mínimos, ingeniería agéntica conservadora y el futuro de los agentes

Entrevista en formato podcast (1 h 05 min) de **David Ondrej** a **Armin Ronacher**, creador de Flask, ex-Sentry y fundador de **Earendil** (en la transcripción automática, "Arendelle"), la empresa que hoy está a cargo del agente de código **Pi** tras incorporar a su creador, Mario. Conversan sobre por qué un harness tan mínimo como Pi compite con Claude Code y Codex, qué piezas faltan para que los agentes aporten valor más allá de programar, cómo trabaja Ronacher en su día a día, local frente a la nube, el impacto económico real de la IA, open source, estar en los datos de entrenamiento, el coste de la inferencia y la situación de Europa.

Aunque el título promete un "flujo de ingeniería agéntica", Ronacher se describe como "muy conservador": no tiene una fábrica de software, trabaja con agentes en su máquina y usa la IA sobre todo para investigar cómo deben funcionar las cosas. Para el harness engineering, la entrevista aporta argumentos de fondo: bash como herramienta universal, la extensibilidad como ventaja, los problemas abiertos (portabilidad de sesiones, durabilidad, UI más allá del chat, datos) y la idea de que la mayoría de los retos son de **arquitectura de sistemas**, no de IA.

## Resumen

- **Bash es casi todo lo que hace falta**: los modelos son muy buenos usando computadoras; incluso Codex delega casi todo en bash, y encadenar comandos es más eficiente en contexto que traer datos al contexto.
- **La extensibilidad hizo despegar a Pi**: un agente mínimo "que puedes hacer tuyo", justo cuando otros acumulaban herramientas; hoy Claude tiene menos herramientas que en su pico y OpenCode 2 se basa en plugins.
- **Earendil no quiere ser "la empresa del harness"**, sino hacer que la IA funcione para todos, empezando por el harness.
- **Los agentes actuales son el "DOS" de la IA**: no son la interfaz que debería usar la gente; en cuatro años no usaremos agentes de código en su forma actual.
- **Problemas abiertos**: competencia real entre modelos, sesiones no portables por la compactación del lado del servidor, durabilidad (suspender y reanudar agentes), agentes web potentes, acceso a datos y UI personalizada.
- **No son problemas de IA, sino de sistemas**: gestión de estado, librerías de componentes, bases de datos que un agente no destruya.
- **Siempre habrá un humano**: la responsabilidad y la confianza exigen introspección; por eso ganan Markdown, JSON y los pipelines Unix, que entienden humanos y agentes.
- **Su flujo es local y conservador**: agentes en su Mac, una máquina Linux por SSH/Tailscale, algo de Pi en GitHub Actions; los entornos en la nube aún fallan (p. ej. Postgres nunca levantado y todo mockeado).
- **El impacto económico aún no se ve**: más código y más coste (incluida la seguridad), pero pocas cifras de negocio; los proyectos paralelos se benefician más que las empresas.
- **Un buen proyecto open source es el que sigue vivo en 10–15 años**; estar en los datos de entrenamiento es una ventaja real.
- **El coste por tarea no baja**: aunque bajen los tokens, sus sesiones no son más baratas; con precios de API no usaría tanto la IA.

## Contenido estructurado

### Por qué un harness mínimo rinde tan bien

Ondrej abre preguntando por qué Pi gana comparativas siendo uno de los harnesses más mínimos.

> "Los modelos se están volviendo muy buenos usando computadoras, y Pi básicamente te da bash."

- Los harnesses en general se han vuelto buenos en "hacer lo básico"; lo que Pi hizo pronto hoy es estándar.
- Codex, aunque muestra que "descubre archivos", ya no tiene muchas herramientas: para buscar archivos llama a `rg`.
- La ventaja de bash: en lugar de traer cosas al contexto, el modelo **encadena** programas en un mismo comando, añade marcadores de separación y se vuelve "bastante creativo" siendo eficiente en contexto.
- Su razonamiento predictivo: mirar qué datos de entrenamiento son fáciles de incorporar con aprendizaje por refuerzo.

### Cambios en los modelos

Ahora que los agentes de código pasaron de ser "un enfoque de la IA" a "el enfoque", el rumbo es algo menos claro: los laboratorios competirán con otros datos de entrenamiento, pero no divergen mucho en lo básico del tool calling. El cambio más notable que observa:

> "Ahora puedes tener mensajes de sistema intercalados en muchos modelos punteros, lo que permite, por ejemplo, la carga diferida de herramientas. No es un gran cambio en cómo escribirías un harness, pero sí lo bastante significativo para que ciertos patrones sean posibles."

### Por qué despegó Pi y qué es Earendil

- Ronacher no se preocupa por retener usuarios de Pi tal como es hoy, sino por hacia dónde ir.
- Lo que la gente adoptó alrededor de Navidad fue **la extensibilidad**: "un agente muy mínimo, pero uno que podías hacer tuyo", en un momento en que otros agentes se llenaban de herramientas y cada actualización de Claude Code alteraba el flujo de trabajo.
- Ahora Claude "se mueve en la otra dirección" (menos herramientas que en su pico) y OpenCode 2 está basado en plugins: la idea de **software autoextensible**, en la que Pi fue temprano.
- Posicionamiento: "pensamos que la IA es realmente genial y a la vez tenemos mucho escepticismo", un enfoque que considera "más europeo".
- La incorporación de Pi fue en realidad una cuestión de **fichar a Mario**, con quien hablaban desde el verano de 2025.

> "Ahora mismo Earendil parece la empresa de Pi, pero ese no es nuestro objetivo. Queremos ser una empresa que haga que la IA funcione para todos, y simplemente tenemos que empezar por el harness."

### Hacia dónde van los agentes

- No tienen una visión cerrada, pero no se darían por satisfechos si la experiencia de un agente no aporta valor también a un **no programador**.
- Ondrej objeta que los técnicos sacan cada vez más partido. Ronacher responde con la analogía del DOS:

> "Unix fue un gran sistema para usuarios avanzados; DOS era un ordenador de texto bastante malo. Hicieron falta muchas iteraciones hasta que el ordenador de escritorio se volvió algo que todos podían y querían usar. Creo que estamos un poco ahí con los agentes: no son la interfaz que debería usar nadie."

- Le cuesta imaginar que en cuatro años usemos agentes de código en su forma actual: quienes hacen *token maxing* los desplegarán en **fábricas de software** sin interactuar con cada agente, y quienes hagan trabajo de dominio tampoco querrán la interfaz actual.
- Objetivo de Earendil: una infraestructura con la que otros construyan buenos agentes, y soluciones propias para no ingenieros.

### Piezas pendientes

1. **Economía de modelos**: hace falta competencia real; preocupa que las funciones nuevas de los modelos cerrados de EE. UU. encierren en su ecosistema. Ejemplo: **la compactación del lado del servidor crea sesiones no portables**.
2. **Durabilidad**: poder suspender un agente y reanudarlo donde lo dejó, para sistemas que no necesiten un humano en el loop.
3. **Agentes en la web**: la mayoría parecen "una interfaz web para un agente de terminal".
4. **Datos, no memoria**: "no somos grandes creyentes en la memoria", pero sí en dar a los agentes formas de manipular datos y buen acceso a bases de datos que también vea el humano.
5. **UI personalizada**: los agentes (OpenClaw, Hermes…) demuestran valor, pero están confinados al transcript del chat; para gestionar Home Assistant, el agente debería poder visualizar la casa y los dispositivos de forma duradera.

### No son problemas de IA, sino de arquitectura de sistemas

> "Pasamos de que los humanos escriben código a que los agentes escriben código, y algunas cosas baratas para humanos son caras para agentes, y al revés."

- Linux tiene un resurgimiento (no solo por Omarchy) porque los agentes lo conocen muy bien por la abundancia de información en internet: pueden controlar y personalizar por completo una instalación de Ubuntu, Arch o NixOS. Su madre tendría más éxito personalizando Linux con un agente que un Mac; Windows está "completamente fuera de la distribución".
- Prevé más Rust, más NixOS, bases de datos complejas, streaming con Kafka: soluciones técnicamente mejores pero difíciles para humanos, no para agentes.

> "Cómo un agente levanta una UI no es una cuestión de creatividad. Es gestión de estado, librerías de componentes, cómo construir bases de datos con las que un agente pueda trabajar sin destruir datos. Nada de eso son problemas de IA; son problemas clásicos de arquitectura de sistemas."

### Humanos, confianza y responsabilidad

- Ronacher rechaza que los agentes vayan a ser el 99,9 % de los usuarios: el PIB lo mueven personas comprando cosas; un sistema que actúa solo "quema energía para nada". Quien combine las máquinas de todos con un humano tendrá ventaja.
- Habrá mucho software para agentes, como siempre lo hubo para otro software (observabilidad), pero seguirá habiendo acceso humano.
- Duda de que los agentes acaben escribiendo ensamblador: si se pierde la capacidad de entender, se pierde la confianza.

> "No creo que los bancos vayan a hacer vibe coding nunca, porque en cuanto algo salga mal sus clientes no estarán contentos."

- La responsabilidad recae en un humano, y ese humano exigirá **introspección**; querrá la misma interfaz que el agente "sin tener que preguntar a otro agente que podría mentir".
- Por eso Markdown, JSON y los pipelines Unix se vuelven la base de todo: "es lo que entienden los humanos".

### Su flujo de trabajo diario

> "No soy un caso de uso muy interesante, porque no dirijo una fábrica de software."

- Earendil "quizá sea la única empresa de harness" sin un bot que trabaje automáticamente en issues.
- Usan los agentes **en sus propias máquinas**; muy poco está en la nube. Tiene un Linux de escritorio al que accede por SSH para dejar cosas corriendo, y algo de automatización para ejecutar Pi en GitHub Actions.
- Gran parte de su trabajo no es generar código sino **investigar con la máquina** cómo deben funcionar las cosas: "es ingeniería muy tradicional todavía".

### Local frente a la nube

- No cree que importe mucho: habrá competencia suficiente para trabajar local o en la nube; la cuestión es qué aporta cada opción.
- Su Mac es mucho más rápido (una máquina Linux en la nube ejecuta los tests a la mitad de velocidad) y llevar datos a la nube aún tiene fricción.
- Anécdota: ayudando a alguien que usaba una versión en la nube de Codex o Claude Code, descubrieron que **los tests de base de datos nunca habían funcionado**: el entorno nunca levantó Postgres y todo estaba mockeado.
- El gran obstáculo histórico: **entornos de desarrollo efímeros**. En Sentry, montar el entorno costaba a un nuevo ingeniero dos o tres días, y llegó a haber un equipo de tres personas dedicado a mejorarlo. Con siete agentes harían falta siete bases de datos, siete clústeres de Kafka… y aun con cachés, arrancar un entorno puede costar unos siete minutos por cambio.
- Usa Tailscale para acceder a su Mac; reconoce que, en UX, su configuración "obviamente apesta" frente a soluciones de nube integradas, y que todo esto mejorará.

### El impacto económico real

> "¿Por qué hacemos todo esto? Con todo lo que las empresas gastan en programación con IA, ¿subieron realmente sus ingresos?"

- Hasta ahora la IA ha hecho las cosas **más caras**: por ejemplo, hay que pagar por revisar continuamente la seguridad del código porque otros lo harán con IA contra nosotros.
- Quienes más se benefician son los ingenieros con proyectos paralelos, no las empresas que la despliegan; es difícil mostrar algo más allá del número de commits.
- Se produce mucho más código (GitHub "lucha por mantenerse en pie"), pero en su vida cotidiana no ve aún un cambio social comparable al del móvil.

### Por qué triunfan los proyectos paralelos

- No es que empiecen como broma, sino por **curiosidad genuina**: "si te obligas a construir algo en lo que no crees, no va a tener éxito".
- El indicador real es la constancia: aparecer cada mañana y seguir trabajando. Flask quizá empezó como broma, pero luego fue trabajo; Pi funcionó también por la cantidad de commits de Mario.
- Ejemplos: Ghostty (Mitchell Hashimoto) tenía una historia clara —nativo y rápido a la vez— aunque al principio le faltaban cosas; Django, curl y Sentry triunfaron por longevidad y fiabilidad, no por ser los más punteros.

### Open source en la era de la IA

- Un movimiento clásico y molesto: empezar como open source y cerrarlo (menciona Daytona y Cal.com).
- Una razón poco comentada para abrir código: **infraestructura gratis** (GitHub Actions es mucho más barato para proyectos abiertos) y marketing.
- Le preocupa que muchos publiquen sin saber de licencias ni de cómo financiar un proyecto: para ellos es "solo un canal de marketing".

> "¿Seguirá ese proyecto ahí dentro de 10 o 15 años y seguirá siendo open source? Esa es la única pregunta que importa."

- Ejemplo de PHP: sus primeras versiones eran "objetivamente horribles", pero hoy es un buen lenguaje con un gran ecosistema (Laravel). Solo se puede juzgar a posteriori. "Pi será un gran proyecto open source si tiene sentido dentro de unos años."

### Estar en los datos de entrenamiento

- Con las arquitecturas actuales, estar en los pesos es una gran ventaja: hay equipos subrepresentados intentando entrar, y una empresa de observabilidad se anunció en un autobús de San Francisco con "pregúntale a tu IA qué usaría".
- En Microsoft se evaluó la calidad de los modelos para código de consolas Xbox, casi nunca publicado, y hubo resistencia a abrir ese código para entrenamiento.
- Si quieres que otros construyan sobre tu software con agentes, que sea al menos en parte open source.
- Matiz: los agentes siempre tendrán que resolver problemas en tu propio código, que no está en los pesos, así que el aprendizaje en contexto (documentación) seguirá siendo clave; y con búsqueda web se vuelve también una cuestión de SEO.

### Gasto en inferencia y coste de los tokens

- Ondrej plantea que la inferencia "se comerá" el mercado del software. Ronacher responde que dependerá del coste:

> "El coste de los tokens está bajando, pero el coste real de resolver tareas parece seguir subiendo. Mis sesiones no son más baratas."

- Si pagara precios de API en lugar de suscripción, "no usaría mucho la IA"; se sentiría raro quemando tanto capital de inversores.
- Un humano fiable que usa IA para aumentar sus capacidades puede ser mejor negocio que sustituir a todos por IA.
- Fuera de la programación, la IA es "una bolsa mixta": la gente la usa, pero desconfía de las empresas, del consumo energético y del precio de la electricidad. Ejemplo: hay clientes que pagan un **premium por anuncios sin IA** visible.
- Su preocupación: que una mayor proporción del PIB europeo vaya a empresas estadounidenses, y que la IA acabe como las redes sociales, "que todos usan y todos odian".

### Europa

- Europa se está quedando atrás y muchas personas motivadas se van.
- Está centrada en preservar el pasado más que en habilitar el futuro; la sociedad quiere derechos y equilibrio, lo que dificulta empezar cosas nuevas.
- Su mayor problema: **no es un único mercado** (27 ejércitos, 27 sistemas legales, 27 regulaciones laborales, IVA por país), y eso no lo arreglan los políticos sino la propia sociedad.

Cierra remitiendo a pi.dev y al sitio de Earendil.

## Conceptos clave

- **Harness mínimo**: agente con muy pocas herramientas (básicamente bash) que confía en la capacidad del modelo para usar la computadora.
- **Software autoextensible**: agente que el usuario o el propio agente puede ampliar con extensiones o plugins.
- **Mensajes de sistema intercalados / carga diferida de herramientas**: capacidad reciente de los modelos que permite introducir herramientas a mitad de sesión.
- **Sesión no portable**: sesión atada a un proveedor por funciones como la compactación del lado del servidor.
- **Durabilidad**: capacidad de suspender un agente y reanudarlo donde lo dejó.
- **Entorno de desarrollo efímero**: entorno completo que se crea por agente o por cambio; hoy caro y complejo de levantar.
- **Introspección**: capacidad humana de entender lo que hizo el agente con la misma interfaz que este usa; base de la confianza y la responsabilidad.
- **Estar en los pesos**: ventaja de las tecnologías presentes en los datos de entrenamiento de los modelos.

## Herramientas y referencias mencionadas

- Pi (pi.dev), Earendil, Mario (creador de Pi), Flask, Sentry
- Claude Code, Codex, OpenCode 2, OpenClaw, Hermes, ChatGPT, Claude Cowork
- bash, ripgrep (`rg`), Unix, DOS, Markdown, JSON
- Linux, Ubuntu, Arch, NixOS, Omarchy, Rust, Kafka, Postgres
- GitHub Actions, Tailscale, SSH, Home Assistant
- Ghostty (Mitchell Hashimoto), Kitty, Django, curl, PHP, Laravel
- Daytona, Cal.com (proyectos que cerraron su código), Microsoft / Xbox
- Patrocinador: PostHog

## Referencias

- Transcripción: [[SxuQs9GGYbk - flujo-de-ingenieria-agentica-del-creador-de-pi|Transcripción completa]]
- Video: [Pi Agent dev reveals his Agentic Engineering Workflow](https://www.youtube.com/watch?v=SxuQs9GGYbk) — David Ondrej
