---
title: "Debug Assist: el harness de agente de debugging de Uber"
tags:
  - sf/fabricas-ia
  - type/nota
  - sf/ia-software
  - sf/casos
  - sf/devops
channel: "Agentic AI Foundation"
speaker: "Kriti Dangi (Uber)"
videoId: "iVCDIOf7vXw"
source: "https://www.youtube.com/watch?v=iVCDIOf7vXw"
language: "en"
playlistOrder: 10
created: 2026-10-11
updated: 2026-10-11
category: "Software Factories con IA"
aliases:
  - "Building a Debugging Agent Harness at Uber - Kriti Dangi"
related:
  - "[[iVCDIOf7vXw - harness-de-agente-de-debugging-en-uber|Transcripción]]"
  - "[[../../07-IA-Software/16-arquitectura-agentes|Arquitecturas de Agentes]]"
  - "[[../../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]]"
  - "[[../../03-Procesos/10-incidient-management|Gestión de Incidentes]]"
  - "[[../../04-Practicas/13-feature-flags|Feature Flags]]"
  - "[[../../07-IA-Software/20-mcp-servers-tools|MCP Servers, Tools y Resources]]"
---

# Debug Assist: el harness de agente de debugging de Uber

Charla de conferencia (unos 29 minutos, con ronda de preguntas) de Kriti Dangi, senior software engineer de Uber en los equipos de calidad de apps y observabilidad de producción, publicada por la Agentic AI Foundation. Presenta **Debug Assist**, un agente que toma los bugs y crashes reportados de las apps móviles de Uber, hace un análisis de causa raíz (RCA) profundo, intenta mitigar, propone un fix, lo valida y abre el PR, todo sin que el desarrollador pulse un botón.

Para una software factory con IA es un caso de producción a gran escala de una "fábrica" especializada: un esqueleto determinista fijo (LangGraph) con nodos LLM, sub-agentes en paralelo, skills y plugins enchufables que aportan los equipos de dominio, límites de turnos como guardrail, validación automática del fix y métricas reales de impacto (precisión del RCA, tasa de merge de PRs). Ilustra el patrón "nosotros damos el harness, tú traes tus skills".

## Resumen

- **El problema**: entre Healthline y Wisdom se asignan unos 50.000 issues al año a ingenieros (90 % con impacto en clientes) y se envían 12.000 pagers; resolver un issue lleva de media 28 días.
- **Pipeline agéntico end-to-end**: descubrimiento → auto-triaje (prioridad, severidad, dueño) → RCA profundo en menos de 30 minutos → resolución accionable.
- **Plan fijo, no planificado por el LLM**: LangGraph permite saltarse la fase de planificación; el plan lo controla Uber, lo que reduce alucinaciones.
- **Determinista donde se pueda**: la recolección de contexto no usa LLM para evitar inflar el contexto, la latencia y el coste, y para podar gigabytes de logs.
- **Modelos y turnos por nodo**: el RCA corre en Sonnet con turnos limitados (más de 20 turnos suele indicar un "rabbit hole"); el fix y la mitigación en Opus con más turnos.
- **Mitigar antes de arreglar**: correlaciona el crash con alguno de las decenas de miles de feature flags y, si la correlación es fuerte, hace rollback del flag.
- **Auto-validación**: intenta reproducir el issue con el test más simple posible (unitario, integración o end-to-end en simuladores) antes de entregar el PR.
- **Esqueleto fijo, skills enchufables**: la lógica de negocio vive en skills y plugins que se cargan en runtime según el *agent type*.
- **Escala**: unos 8 agentes en 5 monorepos sobre un solo codebase Python empaquetado como PEX; marketplace interno de unas 3.000 plugins.
- **Impacto**: unos 9.000 RCAs al mes, 50 % de precisión respecto al fix real (y otro 40 % en la dirección correcta), resolución de Jira duplicada y tasa de merge de PRs del 5 % al 48 %.

## Contenido estructurado

### Las fuentes de issues: Wisdom y Healthline

- **Wisdom** es el reportero de bugs dentro de la app (empleados y beta testers). El usuario escribe algo tan escueto como "mi pantalla está en blanco" y el sistema captura todo lo demás: app, versión, sistema operativo, ciudad, logs de red, analítica, consola, GraphQL, estado de UI y capturas de pantalla (solo de pantallas de Uber).
- **Healthline** es una herramienta de analítica de calidad de apps que captura automáticamente crashes, hangs, jitter o degradación de rendimiento, con session ID, analytics ID, lo que hacía el usuario y, a diferencia de Wisdom, el stack trace o crash dump completo.

Entre ambos: ~50.000 issues/año asignados a ingenieros, 90 % con impacto en clientes, 12.000 pagers.

### Por qué depurar es difícil

- Errores poco claros ("algo salió mal") y código desconocido.
- Contexto disperso entre código, logs, configuraciones y datos, con muchas herramientas internas para acceder a ellos.
- Codebases enormes en varios monorepos donde contribuyen muchos equipos: averiguar quién causó el problema ya es un problema, y hay dependencias entre equipos.
- Resultado: unos 28 días de media para resolver un issue en Uber; cita un informe público de Stripe según el cual los desarrolladores dedican el 40 % del tiempo a depurar.

### El pipeline de resolución agéntica

1. **Descubrimiento**: vía Healthline y Wisdom.
2. **Auto-triaje**: prioridad, severidad, dueño y on-call al que etiquetar.
3. **Debug Assist**: RCA profundo en menos de 30 minutos.
4. **Resolución**: no un volcado de datos, sino algo accionable que resuelva el issue de extremo a extremo.

### Demo: dos casos reales

- **Batería**: un desarrollador, esperando su Uber, nota que el teléfono le quema en el bolsillo y reporta en Wisdom que la app consume casi el 30 % de la batería. En los 20 minutos del trayecto, Debug Assist ya había creado un fix sin que él pulsara un botón; solo tuvo que revisarlo y desplegarlo. El RCA identificó una ruta de código en *hot loop*: algo que debía ejecutarse en segundo plano se trataba como bucle en primer plano, con alto consumo de CPU. Añadió que la app llevaba 17 minutos en segundo plano, todo respaldado por una línea de tiempo de evidencias, "así sabemos que el agente no está alucinando".
- **Crash P1 por un mal rollout**: la app fallaba al pulsar muy rápido una notificación push. Debug Assist localizó el código, creó el fix y lo envió por Slack; se fusionó y desplegó el mismo día, atrapando el crash con el rollout al 5 %.

### Arquitectura: pipeline LangGraph con nodos deterministas y LLM

> "Controlamos el plan. No dependemos totalmente del LLM para que se le ocurra un buen plan para arreglar el issue."

| Nodo | Tipo | Función | Configuración |
|---|---|---|---|
| Context collector | Determinista | Recoge datos de Healthline, Wisdom y logs; parsea, preprocesa y poda | Sin LLM |
| Clasificación / RCA | LLM | Categoriza, puntúa confianza, consulta el ecosistema vía MCP y lanza sub-agentes | Sonnet, turnos limitados |
| Fix y mitigación | LLM | Localiza módulo y ruta, correlaciona feature flags, mitiga y arregla | Opus, más turnos máximos |
| Validación ("Bazel test") | LLM + tests | Reproduce el issue con tests y valida el fix | Reintentos fijos |
| Creación de PR | — | Diff/PR enlazado a Jira, Healthline y Wisdom; aviso por Slack | — |

Sobre el nodo determinista: "no todo tiene que hacerse con agentes"; recoger datos de APIs conocidas con un LLM solo añade latencia, coste y *context bloat*, y los logs (megabytes o gigabytes) hay que preprocesarlos antes de dárselos a un agente.

### Nodo de clasificación y RCA con sub-agentes

- Categoriza: ¿es un problema de Uber, de una librería de terceros, de infraestructura, de red? ¿Hace falta un PR?
- Asigna un **confidence score**.
- Si necesita más datos, consulta el ecosistema vía MCP: tracing distribuido con Jaeger, logging, datos de incidentes en curso.
- Hace el RCA con **sub-agentes en paralelo** (fan-out) y consolida los resultados. Ejemplos:
  - *Breadcrumb analysis*: reconstruye la línea de tiempo del usuario a partir de los datos de sesión, lo que ayuda al RCA y a reproducir el issue.
  - *Crash correlation*: ¿se puede atribuir el crash a una versión concreta?
  - Detección del *commit* culpable (en la ronda de preguntas).

Corre en Sonnet con turnos limitados porque, en el fondo, "mira datos, reúne información y la resume". Por ensayo y error vieron que si pasa de unos 20 turnos suele ir en la dirección equivocada: el límite de turnos es en sí un guardrail.

### Nodo de fix y mitigación con feature flags

Es el nodo "que necesita el gran cerebro": navega un codebase de miles de millones de líneas para identificar módulo y ruta afectados, con el estado de los nodos anteriores. Antes de arreglar intenta **mitigar**: la mayoría de cambios en Uber están tras un feature flag y hay decenas de miles activos en cada teléfono. El nodo usa un MCP de feature flags para correlacionar el crash con un flag; si la correlación es fuerte, hace rollback y el equipo puede arreglarlo con calma. Corre en Opus con más turnos.

### Validación y entrega

El nodo de validación (llamado "Bazel test" por razones históricas) intenta reproducir el issue con un test unitario o un end-to-end automatizado en simuladores/emuladores (hay automatizaciones para los flujos core, como pedir un viaje). Así no solo se entrega un PR, sino que se aumenta la confianza en el propio fix. Después se crea el diff/PR, se enlaza al ticket de Jira y a Healthline/Wisdom, se avisa por Slack y se actualizan los metadatos.

### Esqueleto fijo, skills y plugins enchufables

> "Este es el esqueleto básico del agente. Nunca cambia. Lo que cambia son las skills y los plugins."

Cada nodo LLM tiene su skill: cómo crear un buen PR en Uber, buenas prácticas de plan de pruebas, cómo arreglar un issue en Android, cuándo usar lazy loading o diferir trabajo a segundo plano. Esa lógica de negocio vive fuera del esqueleto y se obtiene en runtime: añadir un agente nuevo es "cuestión de crowdsourcing de las skills".

### Productivización a escala Uber

- **"Tú traes tu especialización, nosotros el harness"**: el equipo provee pasos, runtimes y dependencias; cada equipo aporta sus skills, lo que además reduce la carga de mantenimiento del equipo central.
- **Unos 8 agentes en 5 monorepos** comparten un único codebase en un monorepo Python, empaquetado como binario **PEX** y subido a un Artifactory común.
- **Agent type**: según el tipo, el agente obtiene el binario correcto, la imagen Docker con su runtime y dependencias, sus pipelines (repartidos por distintos monorepos) y sus skills y plugins.
- **Contexto acotado**: el marketplace interno tiene unas 3.000 plugins; no se pueden volcar todas en un agente ("se vuelve loco"), así que el agent type limita qué se carga.

### Refinamiento interactivo tras el PR

- **Diff fixer**: cambios pequeños e incrementales (más tests, refactor, renombrar una variable) con un clic y un prompt de una línea.
- **Ask AI chat**: el desarrollador conversa con Debug Assist sobre el RCA y el issue y le da correcciones, que alimentan un **feedback loop** para mejorar sus prompts y skills.
- **Open in your machine**: abrir el issue en la máquina propia o en una remota de un pool, con el entorno ya preparado en un solo clic.

### Cifras de impacto

| Métrica | Valor |
|---|---|
| RCAs profundos | ~9.000 al mes |
| Precisión del RCA vs. fix real del desarrollador | 50 % |
| Del 50 % restante, en la dirección correcta | ~40 % (módulo correcto, archivo o función no) |
| Resolución de issues en Jira | se ha duplicado, ayudando a reducir el backlog fuera de SLA |
| Tasa de merge de PRs | del 5 % hace un año a ~48 % |

Próximos pasos: más cobertura y casos de uso, precisión "idealmente al 100 %", más resolución en Jira y menor tiempo medio de resolución.

### Preguntas: cómo se reproduce y valida

Se usa el camino más corto y simple, como lo haría un desarrollador: test unitario si basta; si no, de integración o de componente; y solo si no se puede reproducir por código, tests de automatización. Ejemplo: un issue que solo ocurría cerca de un aeropuerto con poca señal. Como la red no se puede simular por código, se levanta un simulador/emulador en una infraestructura interna (similar a BrowserStack o Kobiton), se inyectan los datos capturados (intensidad de red, batería, feature flags del usuario), se compila el APK/IPA y se itera en un feedback loop hasta que pase, con un número fijo de reintentos como guardrail.

### Preguntas: observabilidad y control de sub-agentes

- **Tracing integrado** con Arize, enchufado a LangChain y a cada llamada al LLM: visibilidad de sub-agentes, llamadas a MCP y cada comando bash.
- **Control por turnos máximos**: 20–30 turnos es razonable; más indica que algo va mal.
- **Control de la entrada**: al sub-agente que busca el commit culpable no se le da todo el historial de git, sino la versión buena y la mala, y se filtra por módulo (rider, driver, Uber Eats): "vas podando y podando".
- **Número de sub-agentes**: hoy unos 30 únicos; están construyendo *domain extensions* para que los dueños de cada dominio enchufen sus propios sub-agentes y gestionen su base de conocimiento ("no somos los dueños del dominio, somos los proveedores del harness"). Proyectan llegar a unos 10.000.

## Conceptos clave

- **Debug Assist**: agente de Uber que hace RCA, mitigación, fix, validación y PR para bugs y crashes móviles.
- **Harness**: esqueleto fijo (pasos, runtimes, dependencias) sobre el que los equipos aportan skills y plugins.
- **Plan determinista**: en lugar de dejar que el LLM planifique, el grafo (LangGraph) fija los pasos, lo que reduce alucinaciones.
- **Nodo determinista vs. nodo LLM**: usar LLM solo donde aporta razonamiento; recoger y podar datos con código normal.
- **Límite de turnos (max turns)**: guardrail que corta los "rabbit holes" del agente; distinto por nodo y modelo.
- **Fan-out de sub-agentes**: varios análisis especializados en paralelo cuyos resultados se consolidan.
- **Agent type**: parámetro que decide qué binario, imagen, pipelines, skills y plugins carga cada agente.
- **Mitigación por feature flag**: rollback automático del flag correlacionado antes de arreglar el código.
- **Domain extensions**: mecanismo para que los dueños de dominio aporten sus propios sub-agentes y conocimiento.

## Relación con el SF KB

- [[../../07-IA-Software/16-arquitectura-agentes|Arquitecturas de Agentes]] — caso real de pipeline híbrido con nodos deterministas y LLM y plan fijo en lugar de planificación autónoma.
- [[../../07-IA-Software/17-sub-agentes-orquestacion|Sub-agentes y Orquestación]] — fan-out de sub-agentes especializados, control por turnos y poda de la entrada; trazabilidad con Arize.
- [[../../03-Procesos/10-incidient-management|Gestión de Incidentes]] — automatiza descubrimiento, triaje, RCA y resolución de incidencias, con reducción del backlog fuera de SLA.
- [[../../04-Practicas/13-feature-flags|Feature Flags]] — los flags como mecanismo de mitigación automática: correlación del crash con un flag y rollback antes del fix.
- [[../../07-IA-Software/20-mcp-servers-tools|MCP Servers, Tools y Resources]] — MCP como forma de conectar el agente con tracing, logs, incidentes y feature flags del ecosistema interno.

Ver también, en esta sección: [[como-construir-una-fabrica-de-software|Cómo construir una fábrica de software con harness engineering]] y [[arquitectura-multiagente-que-entrega|La arquitectura multiagente que sí entrega]].

## Herramientas y referencias mencionadas

- Uber: Wisdom (reportero de bugs), Healthline (analítica de calidad de apps), marketplace interno de skills/plugins.
- LangGraph / LangChain (orquestación del pipeline).
- Modelos Claude Sonnet y Claude Opus (Anthropic).
- MCP (Model Context Protocol), Jaeger (tracing distribuido).
- Bazel (nombre heredado del nodo de validación), PEX (binarios Python), Artifactory, Docker.
- Jira, Slack.
- Arize (tracing de agentes).
- BrowserStack y Kobiton (como referencia de la infraestructura de simuladores).
- Informe público de Stripe sobre el tiempo dedicado a depurar.

## Referencias

- Transcripción: [[iVCDIOf7vXw - harness-de-agente-de-debugging-en-uber|Transcripción completa]]
- Video: [Building a Debugging Agent Harness at Uber - Kriti Dangi](https://www.youtube.com/watch?v=iVCDIOf7vXw) — Agentic AI Foundation
