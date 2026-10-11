---
title: "Un harness experimental para un agente legal: el bucle de 5 experimentos"
tags:
  - arnes/nota
  - type/nota
  - arnes/evals-y-observabilidad
  - arnes/construccion
channel: "Dr. Maryam Miradi"
speaker: "Dr. Maryam Miradi"
videoId: "p5-hHg2YRTA"
source: "https://www.youtube.com/watch?v=p5-hHg2YRTA"
language: "en"
playlistOrder: 45
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "You Can Build an AI Agent Harness in 20min: My 5-Step Harness Engineering Loop | Legal Agent Project"
related:
  - "[[p5-hHg2YRTA - loop-de-5-pasos-agente-legal|Transcripción]]"
---

# Un harness experimental para un agente legal: el bucle de 5 experimentos

Dr. Maryam Miradi presenta un tutorial práctico (unos 20 minutos) en el que construye un *harness* alrededor de un sistema agéntico de análisis de contratos legales. Ella dice basarse en su experiencia construyendo más de 400 agentes de IA en producción. El punto de partida es un problema concreto: cuando mejoras un agente (cambias el parser, el retrieval, el chunking o el modelo) y el rendimiento sube, no sabes **qué cambio ayudó ni cuánto**.

Aquí "harness" significa un **entorno de control y experimentación** (un "harness lab") en torno al agente. Permite fijar una línea base, cambiar una variable cada vez, trazar el pipeline completo y comparar ejecuciones con métricas de calidad, latencia y coste. Es la visión del harness engineering como disciplina de evaluación y mejora sistemática: se trata de demostrar con datos por qué un cambio es mejor, no de suponerlo.

## Resumen

- **El problema oculto**: mejorar un agente cambiando varias piezas a la vez impide saber qué cambio causó la mejora y en qué medida.
- **Harness = entorno controlado**: rodea al agente para reproducir ejecuciones, trazar cada etapa, medir y comparar cambios.
- **Un caso no prueba nada**: un contrato con un resultado correcto no demuestra calidad. Hace falta un conjunto de casos (aquí 8 de demostración; en producción, cientos o miles) y observar todo el pipeline, no solo la respuesta final.
- **Experimento 1 (parsers)**: Docling no mejoró a pdfplumber en general, solo en un caso. La conclusión es usar el parser ligero y enrutar a Docling para ciertos tipos de documento.
- **Experimento 2 (retrievers)**: híbrido + re-ranker sube la tasa de casos aprobados (de 50 % a 88 %) y el recall, pero empeora la tasa de decisiones fundamentadas, la latencia p95 y el coste. Conviene enrutar según la complejidad del documento.
- **Experimento 3 (arquitectura de decisión)**: una arquitectura por etapas mejora señales internas (calidad por cláusula, fundamentación), pero no mejora el resultado de punta a punta y es más lenta y cara.
- **Experimento 4 (modelos)**: un modelo pequeño (GLM vía OpenRouter) dio mejor calidad con menor latencia y coste. No existe un "mejor" universal: depende de la carga de trabajo.
- **Regresiones en casos críticos**: el promedio puede subir mientras empeoran los casos más importantes para el negocio. Hay que mirar el promedio y también los casos críticos.
- **Experimento 5 (contexto)**: combinar otro chunker con otro retriever empeoró casi todo; la tasa de decisiones fundamentadas cayó de 25 % a 0 %. Más contexto no mejora las cosas automáticamente.
- **Estructura del código**: módulos de harness (compare, config, metrics, regressions, runner, store, trace) separados de los evals (agente, dataset, parser, policy, retrieval, sistema).
- **La pregunta correcta**: no "¿funciona mi agente?", sino "¿puedo demostrar qué lo hace mejor?".

## Contenido estructurado

### El problema: ¿qué cambio ayudó realmente?

Miradi abre con un escenario: tienes un agente legal en producción, actualizas el parser, mejoras el retrieval, cambias el chunking de los documentos legales, y el rendimiento mejora.

> "Pero ¿qué cambios ayudaron realmente, y cuánto? La ingeniería de harness resuelve exactamente este problema. Crea un entorno de control alrededor de tu agente para probar y trazar cada cambio."

### El sistema agéntico legal de base

- Construido con **Claude Code**. Los agentes usan **LangGraph** y **Pydantic AI** se encarga de extraer datos legales con estructura. Ella elige Pydantic AI por ser "bastante estructurado".
- Estructura del proyecto: `agents`, `documents`, `harness`, `evals`, `models`.
- Parseo de documentos con un esquema de lo que se debe recuperar (hallazgos por cláusula, tipos de contrato, decisiones, trazas por etapa).
- Problemas típicos de los PDF legales: tablas de contenido, logotipos y tablas poco lógicas. Hay distintos tipos de documento.
- Datos: **CUAD** (*Contract Understanding Atticus Dataset*) en Hugging Face, con nombre de archivo, PDF en bytes y texto.

Flujo del grafo (de documentos a cláusulas, de evidencia a decisión):

1. **Ingesta y preparación**: cargar caso → parsear documento → normalizar y trocear (chunking) → construir índice.
2. **Bucle de análisis de cláusulas**: seleccionar cláusula con el retriever → analizar → verificar evidencia. Si la verificación falla, se vuelve a recuperar. Luego se pasa a la siguiente cláusula.
3. **Decisión final**: agregar una decisión sobre el contrato.

Cada nodo registra metadatos. Por ejemplo, el parser emite su nombre, el número de elementos, el número de páginas y el documento en JSON. Miradi explica por qué el dominio legal es complejo: los contratos están conectados entre sí (Cámara de Comercio → empresa → finanzas → acuerdos → subacuerdos con los dueños).

Hay una interfaz **Gradio**. En la demo, un contrato de 111 páginas se procesa con pdfplumber, retrieval denso y un modelo "five mini". El proceso es caro y lento. Devuelve riesgo global "crítico", la indicación de que requiere revisión humana, las razones, y para cada hallazgo el valor extraído, el riesgo, la confianza y las páginas, algo que ella considera esencial para los abogados.

### Por qué un solo caso no basta

> "Un contrato, un resultado y un éxito. Pero ¿qué demuestra eso realmente?"

- **Sistema A**: se prueba un contrato y pasa. Si la respuesta es incorrecta, solo ves la salida final y no sabes qué se rompió entre el PDF y la decisión.
- **Sistema B**: muchos casos (por ejemplo 30), una línea base y observación de todo el pipeline. Con ejecuciones reproducibles se puede observar dónde falla.

Eso es el **harness lab**: se crean casos, se ejecuta la línea base y se obtienen métricas por ejecución. Las métricas son F1, precisión, recall, accuracy, tokens de entrada y salida, casos aprobados, tasa de decisiones fundamentadas (*grounded decision rate*), latencia p95 y coste por caso.

### Experimento 1: parsers

- Hipótesis: si la evidencia existe pero la decisión es incorrecta, puede que el parser esté perdiendo información.
- Diseño: mismo contrato, mismo agente, mismo modelo. Parser A = **pdfplumber**, parser B = **Docling** (más robusto).
- Resultado: Docling **no** mejoró la línea base en general, solo en un caso.
- Lección: no elegir Docling por su reputación. Usar un parser ligero por defecto y enrutar ciertos tipos de documento al parser específico.

> "Nos da una visión de ingeniería al probar todos estos casos, en lugar de decidir pensando que Docling siempre es mejor porque tiene mejor reputación."

### Experimento 2: retrievers

- Hipótesis: la evidencia existe (por ejemplo, la cláusula de terminación se parsea bien), pero el retrieval nunca se la entrega al agente.
- Diseño: mismo contrato parseado, misma consulta, mismo modelo. Retriever A = denso; retriever B = híbrido + re-ranker.
- Resultado: victoria clara en calidad (tasa de casos aprobados del 50 % al 88 %, mejor recall), pero con la tasa de decisiones fundamentadas más baja y la latencia p95 y el coste en rojo.
- Lección: **enrutar**. Los contratos limpios y simples van al retriever denso. Los documentos largos y complejos, con mucho texto repetitivo, secciones, anexos y apéndices, van al híbrido con re-ranker.

> "No queremos usar siempre lo mismo, complejo y de alta latencia, para PDF muy simples."

### Experimento 3: arquitectura de decisión

Es "el fallo más aterrador": el agente tiene la evidencia correcta y aun así se equivoca (por ejemplo, dice "riesgo bajo" cuando no lo es).

- Agente A: decisión directa (evaluar el riesgo y decidir).
- Agente B: decisión por etapas (evidencia → cláusula → coincidencia con la política → riesgo → decisión). Es un cambio de orquestación.
- Resultado: tasa de casos aprobados sin cambio, F1 ligeramente mejor, recall@5 igual, decisiones mejor fundamentadas, pero latencia y coste por caso peores.

> "La calidad del razonamiento es mejor, pero en realidad no da un mejor resultado de negocio. Es una lección clásica de la ingeniería de harness."

Miradi advierte que es una muestra pequeña de demostración. En producción se usan unos cientos de casos y, en otras industrias, miles.

### Experimento 4: modelos

- Motivación: no pagar precios de modelo frontera (GPT 5.4, 5.6…) en cada agente sin saber si hace falta. Con cien mil contratos el coste se dispara.
- Diseño: modelo A (frontera) vs. modelo B (**GLM**, modelo pequeño vía **OpenRouter**) en todo el pipeline de decisión.
- El harness emite una advertencia porque también cambia el proveedor. Es importante que el harness detecte cuándo cambian dos variables a la vez; en este caso es aceptable porque GLM solo está disponible por ese proveedor.
- Resultado: mejor tasa de casos aprobados, F1 y recall, con menor latencia y menor coste.
- Lección: es una decisión de calidad, coste y latencia. "No hay un mejor universal": hay que mirar la carga de trabajo y elegir por la puntuación global de esa parte del flujo.

### Regresiones en casos críticos

> "Tu puntuación global puede subir. Tus casos más importantes pueden empeorar."

Ejemplo: mejoran muchos casos de empresas pequeñas, pero empeoran cinco de los clientes "gigantes" que aportan la mayor parte de los ingresos. El promedio mejoró, pero el riesgo de negocio empeoró. La respuesta es comparar la línea base (sistema A) con el candidato (sistema B) mirando **el promedio y los casos críticos**: la forma del fallo importa.

### Experimento 5: ingeniería de contexto

- El contexto es una combinación de factores. Se cambian **a propósito** dos variables juntas: chunker y retriever. El harness avisa del cambio doble.
- Resultado: experimento negativo, casi todo en rojo salvo la latencia. La tasa de decisiones fundamentadas pasó de 25 % a 0 %.
- Lección: dar más contexto no mejora todo automáticamente y puede degradar mucho el rendimiento.

> "Pasamos de 'parece mejor' a 'podemos demostrar por qué es mejor': de adivinar a la ingeniería controlada."

### Estructura del código: harness y evals

Módulos del **harness**:

| Módulo | Función |
|---|---|
| `runner` | Ejecutar y reproducir corridas |
| `trace` | Observar cada etapa (trazas ordenadas) |
| `metrics` | Medición (percentiles, medias, agregados, latencias, costes, tokens) |
| `compare` | Comparar corridas (`compare_runs`: IDs de corrida, métricas agregadas y deltas) |
| `regressions` | Proteger contra regresiones usando casos clasificados |
| `store` | Persistir `RunResult` / `RunRecord` como esquema en una tabla SQL |
| `config` | Configuración de cada experimento |

Módulos de **evals** ("los evals son las mediciones"): evals de agente, dataset, parser, policy, retrieval, sistema y tipos. Ejemplos:

- Evals de parser: supervivencia y completitud. Cuentan páginas, caracteres extraídos y cobertura de tokens normalizados.
- Evals de retrieval y chunking por cláusula: recall por cláusula, que alimenta el dashboard.

### Cierre

> "No preguntes '¿funciona mi agente?'. Pregunta: '¿puedo demostrar qué lo hace mejor?'. Eso es, básicamente, la ingeniería de harness."

Miradi añade que la ingeniería de harness es solo una de las capas críticas de los agentes de IA en producción.

## Conceptos clave

- **Harness (en este video)**: entorno controlado alrededor del agente que permite ejecutar experimentos, trazar lo que ocurre, comparar resultados y mejorar el sistema de forma sistemática.
- **Harness lab**: interfaz y entorno donde se definen casos, se ejecuta una línea base y se comparan corridas A/B.
- **Línea base (baseline)**: corrida de referencia sobre un conjunto fijo de casos contra la que se mide cada cambio.
- **Una variable a la vez**: cada experimento cambia un solo componente (parser, retriever, arquitectura, modelo). El harness advierte cuando cambian dos.
- **Grounded decision rate**: proporción de decisiones respaldadas por la evidencia recuperada.
- **Enrutamiento (routing)**: usar componentes distintos (parser, retriever) según el tipo o la complejidad del documento, en lugar de un único componente "mejor".
- **Regresión en casos críticos**: mejora del promedio que oculta el empeoramiento de los casos de mayor valor o riesgo.
- **Compromiso calidad/latencia/coste**: cada mejora de calidad se evalúa junto con su impacto en latencia p95 y coste por caso.

## Herramientas y referencias mencionadas

- Claude Code (para construir el sistema)
- LangGraph, Pydantic AI
- CUAD (Contract Understanding Atticus Dataset), Hugging Face
- pdfplumber, Docling
- Retrieval denso, híbrido y con re-ranker
- Gradio
- OpenRouter, GLM; GPT 5.4 / 5.6 como referencia de modelos frontera
- Curso "Agents Mastery" de la autora

## Referencias

- Transcripción: [[p5-hHg2YRTA - loop-de-5-pasos-agente-legal|Transcripción completa]]
- Video: [You Can Build an AI Agent Harness in 20min: My 5-Step Harness Engineering Loop | Legal Agent Project](https://www.youtube.com/watch?v=p5-hHg2YRTA) — Dr. Maryam Miradi
