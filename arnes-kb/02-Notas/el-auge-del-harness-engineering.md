---
title: "Repensar los agentes de IA: el auge del harness engineering"
tags:
  - arnes/nota
  - type/nota
  - arnes/fundamentos
  - arnes/construccion
  - arnes/evals-y-observabilidad
channel: "PY"
speaker: "PY"
videoId: "Xxuxg8PcBvc"
source: "https://www.youtube.com/watch?v=Xxuxg8PcBvc"
language: "en"
playlistOrder: 33
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Rethinking AI Agents: The Rise of Harness Engineering"
related:
  - "[[Xxuxg8PcBvc - el-auge-del-harness-engineering|Transcripción]]"
---

# Repensar los agentes de IA: el auge del harness engineering

Video explicativo narrado del canal PY (unos 12 minutos), en formato de síntesis de investigación. Parte de un dato llamativo (mismo modelo, mismo benchmark, seis veces de diferencia de rendimiento según el harness) y recorre dos papers de marzo de 2026 que formalizan el harness engineering desde direcciones complementarias: el *Natural Language Agent Harness* (NLAH) de Tsinghua, que hace explícita y ablacionable la lógica del harness, y *Meta Harness* de Stanford, que optimiza el harness automáticamente. Completa el panorama con AutoHarness de DeepMind y Agent Spec.

Es una buena introducción conceptual: define el harness como "todo lo que no son los pesos del modelo", muestra evidencia cuantitativa de que la representación y la estructura del arnés mueven más el rendimiento que el modelo, y advierte que más estructura no siempre es mejor: el harness maduro es un oficio tanto de sustracción como de adición.

## Resumen

- **El harness supera al modelo como fuente de variación**: investigadores de Stanford hallaron que el código de orquestación alrededor del modelo genera más variación de rendimiento que el propio modelo (hasta 6x).
- **Agente = modelo + harness**: definición de LangChain; "si no eres el modelo, eres el harness". LangChain pasó de fuera del top 30 al puesto 5 en Terminal Bench 2 cambiando solo el harness.
- **El harness es el sistema operativo**: el LLM es la CPU, el contexto la RAM, las bases externas el disco, las herramientas los drivers.
- **Los harnesses se construyen de forma desordenada**: lógica dispersa, no portable e imposible de ablacionar; AGENTS.md y las skills empaquetan piezas, no el harness completo.
- **NLAH hace el harness explícito y experimentable**: separa backend, runtime charter y la lógica específica en lenguaje natural, con contratos de ejecución y estado en archivos.
- **Más estructura no siempre es mejor**: la auto-evolución fue el único módulo que ayudó de forma consistente; verificadores y búsqueda multi-candidato empeoraron resultados.
- **La representación importa**: migrar OS Symphony a NLAH subió el rendimiento de 30,4 % a 47,2 % con 34 llamadas al LLM en vez de 1.200.
- **El harness se puede optimizar automáticamente**: Meta Harness reescribe el pipeline a partir de trazas crudas de fallos y logra 76,4 % en Terminal Bench 2; el harness optimizado se transfiere a otros modelos.
- **Las suposiciones del harness caducan**: cada componente codifica algo que el modelo no puede hacer solo; al mejorar los modelos, el harness se poda.
- **Problemas abiertos**: riesgos de seguridad en harnesses portables y la co-evolución de harness y pesos.

## Contenido estructurado

### El harness pesa más que el modelo

> "Mismo modelo. Mismo benchmark. Seis veces de diferencia de rendimiento."

- Stanford: el código de orquestación que envuelve al modelo ya genera más variación de rendimiento que el modelo.
- LangChain lo confirmó: modificando solo la infraestructura del harness, su agente de código pasó de fuera del top 30 al puesto 5 en Terminal Bench 2.
- Definición de LangChain: **agente = modelo + harness**. "Si no eres el modelo, eres el harness."

### La analogía del sistema operativo

| Componente | Equivalente |
|---|---|
| LLM crudo | CPU: potente pero inerte |
| Ventana de contexto | RAM: rápida pero limitada |
| Bases de datos externas | Disco |
| Integraciones de herramientas | Drivers de dispositivos |
| Harness | Sistema operativo: coordina qué ve la CPU y cuándo |

Concretamente, el harness es todo lo que no son pesos del modelo: system prompts, definiciones de herramientas, lógica de orquestación, gestión de memoria, bucles de verificación y guardrails de seguridad.

Anthropic identificó cinco patrones canónicos (cada uno, una estrategia distinta de cuándo y cómo llamar al modelo):

1. Prompt chaining
2. Routing
3. Paralelización
4. Orchestrator-workers
5. Bucles evaluator-optimizer

Todo agente en producción combina estos patrones, y esas decisiones de arquitectura, no el modelo, explican las brechas de 6x.

### Cómo se construyen hoy: de forma desordenada

La lógica queda dispersa entre código controlador, valores por defecto de frameworks y scripts verificadores. Dos sistemas que supuestamente diferían en una sola decisión de diseño en realidad diferían a la vez en prompts, herramientas, compuertas de verificación y semántica de estado.

**Evolución de Anthropic.** Los harnesses ingenuos tienen dos modos de falla:

- **One-shotting**: el agente intenta todo de una vez y agota su contexto.
- **Finalización prematura**: una sesión posterior ve progreso parcial y declara victoria.

Su solución evolucionó a una arquitectura de tres agentes inspirada en GAN: **planner, generator y evaluator**, donde el evaluador recorre la app en ejecución haciendo clic como un usuario real. Es 20 veces más cara (200 USD frente a 9), pero la funcionalidad central funcionaba en lugar de estar rota.

**OpenAI** llegó a lo mismo por su cuenta: cinco meses, un millón de líneas de lógica, tests, CI y tooling, cero escritas a mano. Su hallazgo: el trabajo principal del equipo pasó a ser habilitar a los agentes para hacer trabajo útil. Productivo, pero ad hoc, no portable e imposible de ablacionar.

**Estándares**: AGENTS.md llegó a 60.000 repositorios y las Agent Skills de Anthropic añadieron procedimientos reutilizables, pero ambos empaquetan componentes, convenciones y fragmentos, no el harness completo. El campo necesitaba lógica de harness explícita y ejecutable.

### Natural Language Agent Harness (Tsinghua)

¿Y si se pudiera escribir toda la lógica de control de un agente en lenguaje natural estructurado, no en Python ni en YAML? El equipo de Tsinghua lo hace con tres capas:

1. **Backend**: infraestructura y herramientas.
2. **Runtime charter**: la "física universal": cómo se vinculan los contratos, cómo persiste el estado, cómo se gestionan los agentes hijos.
3. **NLAH**: la lógica de control específica de la tarea: contratos, roles, estructura de estado, taxonomías de fallos.

La separación permite por fin **experimentos controlados**:

- Cambiar el NLAH fijando el charter → se prueba diseño de harness.
- Fijar el NLAH cambiando el charter → se prueba política de runtime.

Dos mecanismos lo sostienen:

- **Contratos de ejecución**: convierten completions difusas en llamadas acotadas con cinco elementos: entradas requeridas, presupuestos, permisos, condiciones de finalización y rutas de salida. "Piensen en firmas de función para agentes."
- **Estado respaldado en archivos**: externaliza la memoria a archivos direccionables por ruta, que sobreviven a truncamientos, reinicios y delegación.

### Costo y ablación por módulos

En SWE-bench Verified con GPT-5.4 a razonamiento máximo, la tasa de resolución quedó entre 74 % y 76 % sin importar la configuración. Pero:

| Configuración | Tokens de prompt/muestra | Llamadas a herramientas | Tiempo |
|---|---|---|---|
| Harness completo | 16,3 M | 642 | 32 min |
| Versión reducida | 1,2 M | 51 | < 7 min |

Misma tasa de acierto, unas 14 veces el cómputo. La ablación módulo a módulo:

- **Auto-evolución**: único módulo consistentemente útil (+4,8 en SWE-bench, +2,7 en OSWorld), mediante un bucle de intentos con compuerta de aceptación que se mantiene estrecho hasta que las señales de fallo justifican ampliarlo.
- **Verificadores**: perjudicaron (−0,8 y −8,4).
- **Búsqueda multi-candidato**: perjudicó (−2,4 y −5,6).

> "Más estructura no siempre es mejor."

### La representación como palanca: OS Symphony

El hallazgo principal vino de otro experimento: migrar OS Symphony, un harness en código nativo para automatización de escritorio, a representación NLAH. Misma estrategia, distinta representación:

- Rendimiento: 30,4 % → 47,2 %
- Tiempo: 361 → 141 minutos
- Llamadas al LLM: 1.200 → 34

La ganancia vino de reemplazar frágiles bucles de reparación de GUI por estado de runtime durable y finalización respaldada en artefactos.

Dos patrones cristalizaron:

- Aproximadamente el 90 % del cómputo fluye por agentes hijos delegados, no por el padre. El harness es un patrón de orquestación, no de razonamiento: descompone, delega y verifica.
- El único módulo que ayuda es el que estrecha el propio bucle de intentos del agente: "el estrechamiento disciplinado le gana a la ampliación costosa".

### Meta Harness: optimizar el harness automáticamente

Si la representación movió un benchmark 16,8 puntos, ¿se puede optimizar el harness de forma automática? **Meta Harness**, de Omar Khattab en Stanford (creador de DSPy), trata el harness como objetivo de optimización. DSPy ajusta prompts dentro de un pipeline fijo; Meta Harness reescribe el pipeline completo: estructura, recuperación, memoria y topología de orquestación.

El bucle:

1. Un proponente agéntico (Claude Code con Opus 4.6) lee trazas de ejecución fallidas.
2. Diagnostica qué falló y escribe un harness nuevo completo.
3. Puntuaciones y trazas crudas se acumulan en un sistema de archivos creciente.
4. Un evaluador prueba cada propuesta. Se repite.

Escala: 10 millones de tokens por iteración, 400 veces más feedback que métodos previos, 82 archivos leídos por ronda. Las trazas crudas son insustituibles: sin ellas la precisión cae de 50 % a 34,6 %; con resúmenes, 34,9 %. "La señal vive en los detalles crudos."

Resultados:

- Terminal Bench 2: 76,4 %, el único sistema optimizado automáticamente en un campo de entradas diseñadas a mano. Puesto 2 con Opus y puesto 1 con Haiku: un modelo más pequeño supera a otros más grandes solo por optimización del harness.
- Clasificación de texto con 215 clases: 48,6 % de precisión, 7,7 puntos sobre el estado del arte, con cuatro veces menos tokens.
- Un harness optimizado sobre un modelo se transfirió a otros cinco y los mejoró a todos.

> "El activo reutilizable no es el modelo, es el harness."

### Otros sistemas

- **AutoHarness (DeepMind)**: compila reglas de juegos en harnesses de código, eliminando el 100 % de los movimientos ilegales en 145 juegos. Una variante reemplaza al LLM por completo: la política de decisión corre como código puro.
- **Agent Spec**: restricciones de seguridad como lenguaje de dominio específico, que previene más del 90 % de las ejecuciones inseguras.

Cuatro sistemas, cuatro facetas: representación, optimización, restricciones y seguridad.

### Tres eras y el oficio de la sustracción

Prompt engineering → context engineering → harness engineering: tres eras en cuatro años, cada una absorbiendo a la anterior. El harness engineering añade lo que el modelo no puede hacer solo: orquestación, memoria, verificación y seguridad.

> "Cada componente del harness codifica una suposición sobre lo que el modelo no puede hacer solo, y esas suposiciones caducan." (dinámica nombrada por Anthropic)

Ejemplos:

- Cuando Opus 4.6 dejó de necesitar reinicios de contexto, Anthropic los eliminó.
- Manus reescribió su harness cinco veces en seis meses.
- Vercel eliminó el 80 % de las herramientas de un agente y obtuvo mejores resultados.

El espacio del harness no se encoge al mejorar los modelos: se desplaza. Por eso el trabajo maduro se parece más a podar estructura que a construirla. Conclusiones prácticas:

> "Invertir en tu harness da ganancias mayores, más rápidas y más fiables que esperar la próxima mejora del modelo. Si construyes agentes, eres harness engineer, te llames así o no. Ya no es cuestión de qué modelo elegir, sino de qué estructura quitar."

### Problemas abiertos

- La lógica de harness portable facilita la difusión de flujos riesgosos: inyección de prompts escondida en el texto del harness, herramientas maliciosas injertadas en artefactos compartidos. Una investigación encontró que una de cada cuatro agent skills aportadas por la comunidad contiene una vulnerabilidad.
- La pregunta más importante: ¿pueden co-evolucionar harness y pesos del modelo, de modo que la estrategia moldee lo que el modelo aprende y el modelo remodele la estrategia que lo envuelve?

> "El campo pasa de la construcción artesanal a la ciencia sistemática."

## Conceptos clave

- **Harness**: todo lo que no son pesos del modelo: prompts, herramientas, orquestación, memoria, verificación, guardrails.
- **Agente = modelo + harness**: definición de LangChain.
- **NLAH (Natural Language Agent Harness)**: lógica de control específica de la tarea escrita en lenguaje natural estructurado, separada del runtime charter y del backend.
- **Runtime charter**: capa de reglas universales (contratos, persistencia de estado, gestión de agentes hijos) compartida entre harnesses.
- **Contrato de ejecución**: llamada acotada a un agente con entradas, presupuesto, permisos, condición de finalización y ruta de salida.
- **Estado respaldado en archivos**: memoria externalizada en archivos direccionables por ruta.
- **Auto-evolución con compuerta de aceptación**: bucle de intentos que se mantiene estrecho y solo se amplía ante señales de fallo.
- **Meta Harness**: optimización automática del pipeline completo a partir de trazas crudas.
- **One-shotting / finalización prematura**: los dos modos de falla de los harnesses ingenuos según Anthropic.
- **Oficio de la sustracción**: podar componentes del harness cuando sus suposiciones sobre el modelo caducan.

## Herramientas y referencias mencionadas

- Papers de marzo de 2026: Natural Language Agent Harness (Tsinghua) y Meta Harness (Stanford, Omar Khattab)
- DSPy, LangChain, Terminal Bench 2, SWE-bench Verified, OSWorld
- Anthropic (patrones de agentes, arquitectura planner/generator/evaluator, Agent Skills), OpenAI (proyecto de un millón de líneas generadas)
- AGENTS.md, OS Symphony, AutoHarness (DeepMind), Agent Spec
- Claude Code, Opus 4.6, Haiku, GPT-5.4, Manus, Vercel

## Referencias

- Transcripción: [[Xxuxg8PcBvc - el-auge-del-harness-engineering|Transcripción completa]]
- Video: [Rethinking AI Agents: The Rise of Harness Engineering](https://www.youtube.com/watch?v=Xxuxg8PcBvc) — PY
