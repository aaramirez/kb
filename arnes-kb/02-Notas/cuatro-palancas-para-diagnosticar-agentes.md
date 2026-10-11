---
title: "Cuatro palancas para diagnosticar cualquier agente: contexto, herramientas, bucle y gobernanza"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/evals-y-observabilidad
channel: "Damian Galarza"
speaker: "Damian Galarza"
videoId: "ow3Es1AF5-Y"
source: "https://www.youtube.com/watch?v=ow3Es1AF5-Y"
language: "en"
playlistOrder: 21
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Harness Engineering: 4 Levers to Diagnose Any AI Agent"
related:
  - "[[ow3Es1AF5-Y - cuatro-palancas-para-diagnosticar-agentes|Transcripción]]"
---

# Cuatro palancas para diagnosticar cualquier agente: contexto, herramientas, bucle y gobernanza

Video explicativo breve (unos 9 minutos) de Damian Galarza en su canal. Propone un marco simple de harness engineering para razonar sobre el sistema que rodea al modelo: cuatro palancas —**contexto, herramientas, bucle y gobernanza**— que permiten diagnosticar "en menos de un minuto" casi cualquier fallo de un agente.

Su valor para el harness engineering es práctico: cambia la pregunta "¿por qué el modelo es tonto?" por "¿qué palanca se rompió?", y sostiene que el modelo pone el techo, pero el harness determina cuánta de esa capacidad se aprovecha.

## Resumen

- **"Agente" es un término impreciso**: un chatbot, un workflow y un agente pueden usar el mismo modelo, pero resuelven problemas distintos.
- **Los fallos típicos son problemas del harness**: el modelo tiene la información pero no la usa, elige la herramienta equivocada, entra en bucle, se estanca o dice que terminó cuando no es así.
- **Evolución**: funciones LLM (la app controla el camino) → workflows (el código coordina varias llamadas) → agentes (el modelo controla parte del camino).
- **Modelo = motor; harness = el resto del coche**.
- **Contexto**: lo que el modelo ve en el momento de decidir; puede fallar por falta o por exceso de información.
- **Herramientas**: lo que el modelo puede hacer; funciones locales, MCP o CLI, cada una con sus compromisos.
- **Bucle**: cómo sigue avanzando el agente; necesita condiciones de parada claras.
- **Gobernanza**: qué se ejecuta automáticamente, qué requiere aprobación y qué está prohibido; separa la demo de la producción.
- **Un buen harness hace parecer más listo a un modelo pequeño**; un modelo frontera en un mal harness puede parecer sorprendentemente tonto.

## Contenido estructurado

### De funciones LLM a agentes

1. **Funciones LLM básicas**: la aplicación llama al modelo con un prompt y recibe un resumen, una clasificación, un correo reescrito o campos extraídos. La app controla el camino y el modelo transforma.
2. **Workflows**: el código coordina varias llamadas al LLM, herramientas, reintentos y salidas estructuradas. El modelo trabaja más, pero el camino sigue predeterminado por el código.
3. **Agentes**: el modelo controla parte del camino. Decide qué inspeccionar, qué herramienta llamar, si el resultado basta y qué hacer después.

> "Cuanto más control le das al modelo, más importa el sistema que lo rodea. Ese sistema que lo rodea es el harness."

Analogía: el modelo es el motor, el cerebro; el harness es el resto del coche construido a su alrededor.

### Palanca 1: contexto

Todo lo que el modelo puede ver en el momento de decidir: system prompt, historial, documentos recuperados, archivos de memoria, documentación del código, capturas, logs y el estado acumulado. Incluye también las **descripciones de las herramientas**, porque el modelo solo puede elegir herramientas que entiende.

Dos modos de fallo:
- **La información existe pero no aparece** donde el modelo toma la decisión.
- **Exceso de información**: la señal importante queda enterrada.

> "Más contexto no es automáticamente mejor contexto."

**Pregunta diagnóstica**: ¿tenía el modelo la información correcta, con la forma correcta y en el momento correcto?

### Palanca 2: herramientas

Un modelo solo genera texto; las herramientas le permiten afectar el mundo (buscar en la web, consultar una base de datos, leer archivos, crear tickets, enviar mensajes, correr tests, llamar APIs internas). Formas de exponerlas:

| Tipo | Descripción | Compromiso |
|------|-------------|------------|
| Funciones locales | Funciones propias pasadas al modelo; suelen ser de dominio (disponibilidad, facturas, CRM, rendimiento de campañas) | Controladas y específicas |
| MCP | Protocolo común para conectar con GitHub, Linear, Slack, bases de datos, navegadores o servicios internos | Portables y reutilizables |
| CLI / shell | El agente ejecuta comandos directamente | Muy flexibles, pero más difíciles de gobernar |

Para el modelo todas aparecen como acciones disponibles; para el ingeniero del harness, sus compromisos son distintos.

**Pregunta diagnóstica**: ¿tiene el agente la superficie de acción correcta, expuesta de forma que el modelo la entienda y use bien?

### Palanca 3: el bucle

Un bucle típico:
1. El modelo recibe el prompt y el contexto actual.
2. Mira las herramientas disponibles y decide si necesita actuar.
3. Si sí, pide una llamada a herramienta; el harness la ejecuta o la coordina y devuelve el resultado.
4. El modelo interpreta: ¿respondió la pregunta?, ¿falló?, ¿reveló un nuevo problema?, ¿necesita otra herramienta o ya puede responder?
5. Se repite hasta que la tarea termina, el agente se bloquea o el harness lo detiene.

Sin condiciones de parada claras, los agentes se desbocan: siguen llamando herramientas, buscando, reintentando o "comprobando una cosa más". Por eso los harnesses necesitan **máximo de pasos, límites de tiempo, detección de falta de progreso o criterios explícitos de finalización**.

**Pregunta diagnóstica**: ¿tiene el agente un proceso claro para decidir qué hacer después, cuándo continuar y cuándo parar?

### Palanca 4: gobernanza

Mantiene la autonomía bajo control y "separa una demo vistosa de algo en lo que se puede confiar en producción". Hay que decidir qué acciones son seguras de ejecutar solas, cuáles requieren aprobación y cuáles deben ser imposibles:

- Leer un archivo no es lo mismo que borrarlo.
- Redactar un correo no es lo mismo que enviarlo.
- Sugerir un cambio de presupuesto no es lo mismo que cambiar un presupuesto de anuncios en vivo.
- Consultar datos de clientes no es lo mismo que exportarlos.

Se materializa en permisos, puertas de aprobación, sandboxing, logs de auditoría, límites de tasa, fronteras de entorno y diseño del radio de impacto (*blast radius*). Un fallo de gobernanza ocurre cuando el agente puede hacer algo pero el harness no decidió si debe permitirlo. Puede ir en dos sentidos: agente **demasiado restringido** (no termina la tarea) o **demasiado libre** (hace algo no deseado).

**Pregunta diagnóstica**: ¿qué puede hacer el agente automáticamente, qué requiere aprobación y qué debe quedar fuera de los límites?

### Diagnóstico: ¿qué palanca se rompió?

Ante un fallo, la pregunta útil no es por qué el modelo es malo, sino cuál de las cuatro palancas falló:
- ¿Le faltó el contexto correcto?
- ¿Tenía el contexto pero una superficie de acción equivocada?
- ¿Tenía las herramientas pero el bucle no sabía cuándo reintentar o parar?
- ¿El harness le dio demasiada libertad o demasiado poca?

> "El modelo pone el techo, pero el harness determina cuánta de esa capacidad realmente llegas a usar."

Un modelo frontera en un mal harness puede ignorar instrucciones importantes, llamar herramientas equivocadas, entrar en bucle infinito o hacer algo que nunca debió permitírsele.

> "El futuro de los agentes no es solo elegir mejores modelos, es diseñar mejores harnesses."

## Conceptos clave

- **Harness**: sistema alrededor del modelo que define qué ve, qué puede hacer, cómo se ejecuta y qué límites tiene.
- **Agencia**: capacidad del modelo de controlar parte del camino de ejecución.
- **Contexto**: todo lo visible para el modelo al decidir, incluidas las descripciones de herramientas.
- **Superficie de acción**: conjunto de herramientas expuestas al agente y la forma en que se presentan.
- **Condiciones de parada**: máximo de pasos, límites de tiempo, detección de falta de progreso y criterios de finalización.
- **Gobernanza**: permisos, aprobaciones, sandbox, auditoría y diseño del radio de impacto.
- **Blast radius**: alcance del daño posible de una acción del agente.

## Herramientas y referencias mencionadas

- Claude Code (como ejemplo de experiencia con agentes).
- MCP (Model Context Protocol) y ejemplos de integraciones: GitHub, Linear, Slack.
- Hoja de trabajo de las cuatro palancas y el programa "Agent Foundations" del autor.

## Referencias

- Transcripción: [[ow3Es1AF5-Y - cuatro-palancas-para-diagnosticar-agentes|Transcripción completa]]
- Video: [Harness Engineering: 4 Levers to Diagnose Any AI Agent](https://www.youtube.com/watch?v=ow3Es1AF5-Y) — Damian Galarza
