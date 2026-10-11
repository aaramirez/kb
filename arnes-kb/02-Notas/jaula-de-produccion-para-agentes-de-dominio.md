---
title: "Harness engineering en producción: la jaula para agentes de dominio con AgentCore"
tags:
  - arnes/nota
  - type/nota
  - arnes/produccion
  - arnes/construccion
  - arnes/frameworks
channel: "AI Engineer"
speaker: "Mike Chambers (AWS)"
videoId: "gxVZ_1tuuq4"
source: "https://www.youtube.com/watch?v=gxVZ_1tuuq4"
language: "en"
playlistOrder: 52
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harness Engineering: Building the Production Cage for Powerful Domain Agents — Mike Chambers, AWS"
related:
  - "[[gxVZ_1tuuq4 - jaula-de-produccion-para-agentes-de-dominio|Transcripción]]"
---

# Harness engineering en producción: la jaula para agentes de dominio con AgentCore

Charla de unos 20 minutos de **Mike Chambers**, *senior AI specialist developer advocate* en AWS, en la conferencia AI Engineer. Combina una parte conceptual breve con *live coding* en el IDE Kiro: parte de un agente mínimo con Strands Agents SDK, le añade memoria de sesión y termina desplegándolo a escala con **Amazon Bedrock AgentCore**, incluida la opción de un harness gestionado y declarativo.

Su aporte central para el harness engineering es la distinción entre **agentes que usamos** (Claude Code, Cursor, Kiro…) y **agentes que construimos** para que los usen otros. En los segundos, el harness ya no es solo memoria, skills y herramientas: incluye el loop, el escalado, la identidad, los pagos, el runtime, la gestión de contexto y, sobre todo, la observabilidad y las evaluaciones, cada uno escalable por separado. Para Chambers, eso es "el lado serio" del harness engineering.

## Resumen

- **Dos tipos de agentes**: los que usamos (asistentes de código y productividad) y los que construimos para una audiencia; se pueden encadenar (yo construyo un agente que tú usas).
- **Libertad vs. cuidado**: con un agente que usas, el *token maxing* es aceptable si te sirve; con un agente que construyes hay que pensar cuidadosamente en su audiencia.
- **Definición de harness**: tomar un agente, quitarle el modelo; todo lo que queda es el harness (como las correas que controlan un animal, cambiando "animal" por "modelo").
- **Estándares de harness**: los equipos bien organizados pasaron de estándares de código a estándares de harness que despliegan en los asistentes de todos.
- **No más "slop ops"**: igual que se rechazaba el *click ops*, no se debe pedir al agente que cree recursos cloud directamente; debe generar infraestructura como código para que sigamos siendo dueños de los despliegues.
- **Harness a escala = componentes desacoplados**: loop, memoria, identidad, pagos, skills, runtime, contexto, observabilidad y evals no van en un solo contenedor; cada uno debe escalar individualmente.
- **Observabilidad y evaluaciones primero**: lo menciona al final de la lista, pero insiste en que debería ser lo primero.
- **AgentCore como camino a producción**: CLI que genera un agente, runtime con aislamiento multi-tenant, memoria a corto y largo plazo gestionada y asíncrona, despliegue con IaC y trazas.
- **El 80 % de los casos ya estaría resuelto**: si basta con system prompt + herramientas MCP, AgentCore ofrece un harness gestionado configurado con un simple JSON, sin código agéntico.
- **Componibilidad**: cada capacidad de AgentCore puede usarse sola o combinada, por ejemplo, añadir solo la memoria a largo plazo a un agente que ya está en producción.

## Contenido estructurado

### Presentación del ponente

Chambers se presenta como *developer advocate* de AWS. Menciona que en 2023 creó, con su colega Antje Barth y con Andrew Ng, el curso "Generative AI with LLMs", que se acerca al medio millón de inscritos; que en 2025 publicó un *MCP Lambda handler* que aún se descarga unas 35.000 veces al mes para servir MCP en serverless; y que en 2026 AWS es miembro fundador de la Agentic AI Foundation, dentro de la Linux Foundation, donde él colabora.

### Agentes que usamos vs. agentes que construimos

> "Hay dos tipos distintos de agentes [...] los agentes que usamos [...] y del otro lado, los agentes que construimos."

- **Agentes que usamos**: Claude Code, Cursor, Kiro y herramientas de productividad. Se usan de cierta manera, y el *token maxing* vale "si eso es lo que quieres".
- **Agentes que construimos**: el foco de la charla. Hay que montarlos de forma que funcionen para la audiencia que los va a usar.
- Ambos se encadenan: un agente que yo construyo puede ser uno que tú usas, y la distinción se mantiene.

### Qué es un harness

- Definición de diccionario: "un conjunto de correas y sujeciones para controlar un animal". Si se cambia *animal* por *modelo*, la definición encaja.
- Cita como referencias el artículo de LangChain y el de martinfowler.com sobre *harness engineering for coding agents* (escrito por Birgitta Böckeler, no por Fowler), ambos centrados en agentes que usamos.
- Síntesis: **un agente menos el modelo = harness**.

### El harness de los agentes que usamos

- Un asistente de código en mi máquina con acceso a mis archivos. Su harness, creado por mí o por mi empresa, define cómo usa la memoria, qué skills usa, y qué herramientas y servidores MCP tiene (por ejemplo, servidores de documentación).
- Los equipos tenían estándares de código desde hace décadas; ahora tienen **estándares de harness** que despliegan en los asistentes de todos.
- Recomienda el **AWS Agent Toolkit** (gratuito, en GitHub) para que el agente despliegue correctamente en AWS, con instrucciones de instalación para casi cualquier asistente.
- **Slop ops**:

> "Hacer clic en la consola está muy bien para entender qué pasa, pero no es como se despliega a producción. [...] Queremos que el agente construya nuestra infraestructura como código [...] para seguir siendo dueños de nuestros despliegues en la nube."

### El harness de los agentes que construimos

Al principio es igual: memoria, skills, herramientas y MCP, que por sí solos permiten extender un agente para casi cualquier cosa. Pero al desplegar a las masas (escala Amazon, escala cloud) hay que pensar además en:

- Gestión del **loop**
- **Escalado**
- **Pagos**
- **Memoria**
- **Identidad**
- **Skills**
- **Runtime**
- **Gestión de contexto**
- **Observabilidad y evaluaciones**, "súper, súper importante", y que "debería ser lo primero".

> "¿Escribo todo este código en un contenedor y lo despliego y escalo? En realidad no. Si quiero escalar a miles de usuarios, tengo que pensar en cada uno de estos componentes y en cómo escalarlos individualmente. Y eso, para mí, es harness engineering."

### Demo 1: agente mínimo con Strands

- En Kiro, un agente escrito a mano con **Strands Agents SDK**: importa `Agent` y el decorador `@tool`, pasa un system prompt y dos herramientas (`calculator`, de una librería, y `get_time`).
- ¿Es un harness? "Más o menos": tiene herramientas y el framework gestiona el loop, pero corre en el portátil, sin escala y sin los atributos que exige un agente desplegado.

### Demo 2: memoria con session manager

- Segundo agente Strands, generado por Kiro, que incluye un **session manager** para mantener el estado entre invocaciones y rehidratar el historial de la conversación. Lo describe como una memoria de corto a medio plazo.
- Incluye una herramienta `remember` que el agente decide usar para guardar datos del usuario en archivos locales, como memoria a largo plazo.
- Al preguntarle "¿quién ganará el Mundial?", responde que él quiere que gane Australia, porque lo recuerda de conversaciones anteriores, aunque reconoce que el LLM no lo sabe.
- Limitación: todo sigue en local; memoria y loop no escalan por separado.

### Hacia escala cloud con Amazon Bedrock AgentCore

Usa la **CLI de AgentCore** para crear un agente. El asistente pregunta:

1. Tipo: *agent* (deliberadamente no elige *harness*; lo retoma después).
2. Nombre (deja el valor por defecto).
3. Traer código propio o generarlo; elige generar un agente "hola mundo" personalizable.
4. Lenguaje: Python o TypeScript (elige Python).
5. Protocolo de acceso: **HTTP**, **MCP** o **AG-UI** (para chats interactivos); elige HTTP.
6. Framework: cualquiera (él usa Strands; también se puede escribir uno propio).
7. Modelo: cualquiera, no solo los de Amazon ni los de Bedrock; usa Claude Sonnet 4.5, el valor por defecto.
8. **Memoria**: corto y largo plazo, desplegadas como infraestructura cloud separada que funciona de forma asíncrona respecto al agente.

### Código del agente desplegable

- Es un agente Strands con la integración `BedrockAgentCoreApp`. Según Chambers, con eso basta para escalar en runtime con **aislamiento multi-tenant**:

> "Puedes escribir un agente que funcione para un usuario y escalarlo sin escribir todo el código multi-tenant. Ahorra muchísimo y, desde la perspectiva de seguridad e identidad, lo hace mucho más simple."

- Incluye herramientas de prueba, una conexión a MCP, y el session manager conectado a la memoria gestionada.

### Desarrollo local y despliegue

- `agentcore dev`: abre una interfaz web conectada al agente que corre en local, con recarga en vivo al cambiar el código. También permite cambiar a la versión desplegada.
- `agentcore deploy`: despliega con **infraestructura como código** el agente, el runtime, la memoria y otros componentes que se elijan.
- La misma interfaz permite inspeccionar **trazas** y **memoria almacenada** para depurar.

### Harness gestionado de AgentCore

> "Hay un argumento para decir que, si esto es posible, quizá el 80 % de los casos de uso agénticos [...] ya está resuelto. No necesitamos mucho más que un system prompt y conectar algunas herramientas MCP."

- La opción *harness* de AgentCore configura el agente con un **JSON simple**: modelo + system prompt (+ herramientas).
- Se despliega igual con `agentcore deploy`, **sin código agéntico**.

### Capacidades componibles

- Cada componente de su diagrama del harness tiene un equivalente en AgentCore.
- Las capacidades se pueden usar juntas o por separado: un agente que ya funciona en producción puede integrar solo la memoria a largo plazo serverless.
- Cierra recomendando Strands Agents, que describe como un framework open source *model-first*, "súper rápido y súper potente".

## Conceptos clave

- **Agentes que usamos vs. agentes que construimos**: asistentes para uso propio frente a agentes que se entregan a una audiencia y exigen ingeniería de producción.
- **Harness**: todo lo que queda de un agente al quitarle el modelo.
- **Estándares de harness**: configuración común (memoria, skills, herramientas, MCP) que una organización despliega en los asistentes de todos sus ingenieros.
- **Slop ops**: dejar que un agente cree infraestructura directamente, sin IaC; la versión agéntica del *click ops*.
- **Escalado por componente**: separar loop, memoria, identidad, runtime, etc. para escalar cada uno de forma independiente.
- **Session manager**: componente que persiste el estado de la sesión y rehidrata el historial entre invocaciones.
- **Aislamiento multi-tenant**: el runtime aísla a cada usuario sin que el desarrollador escriba ese código.
- **Harness gestionado (declarativo)**: agente definido solo con un JSON (modelo + prompt + herramientas) y desplegado sin código.

## Herramientas y referencias mencionadas

- Amazon Bedrock AgentCore: CLI, `agentcore dev`, `agentcore deploy`, runtime, memoria, harness gestionado.
- Strands Agents SDK (open source).
- Kiro (IDE de AWS), Claude Code, Cursor.
- AWS Agent Toolkit (GitHub).
- MCP Lambda handler (de Chambers).
- Protocolos HTTP, MCP y AG-UI.
- Claude Sonnet 4.5.
- Artículo de LangChain sobre harnesses; artículo de Birgitta Böckeler en martinfowler.com sobre harness engineering para agentes de código.
- Curso "Generative AI with LLMs" (Andrew Ng, Antje Barth, Mike Chambers).
- Agentic AI Foundation (Linux Foundation).

## Referencias

- Transcripción: [[gxVZ_1tuuq4 - jaula-de-produccion-para-agentes-de-dominio|Transcripción completa]]
- Video: [Harness Engineering: Building the Production Cage for Powerful Domain Agents — Mike Chambers, AWS](https://www.youtube.com/watch?v=gxVZ_1tuuq4) — AI Engineer
