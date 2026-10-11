---
title: "Más allá de la base de datos vectorial: búsqueda agéntica, BM25, conectores en vivo y conocimiento compilado"
tags:
  - arnes/nota
  - type/nota
  - arnes/contexto-y-memoria
  - arnes/herramientas-y-sandbox
channel: "Devsplainers"
speaker: "Devsplainers"
videoId: "YLkSfz3EFGw"
source: "https://www.youtube.com/watch?v=YLkSfz3EFGw"
language: "en"
playlistOrder: 56
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
aliases:
  - "Vector Databases Are Dead. Use This Instead"
related:
  - "[[YLkSfz3EFGw - alternativa-a-bases-de-datos-vectoriales|Transcripción]]"
---

# Más allá de la base de datos vectorial: búsqueda agéntica, BM25, conectores en vivo y conocimiento compilado

Video explicativo corto (8:29) del canal Devsplainers. Parte de un anuncio de Turbopuffer, empresa que vende búsqueda vectorial y da servicio a Cursor, Notion y Anthropic: en su versión 3 el índice vectorial deja de ser el centro del motor. A partir de ahí compara con datos de benchmarks tres alternativas al pipeline RAG clásico para que la IA encuentre datos: búsqueda agéntica (con BM25 como herramienta clave), conectores MCP en vivo y conocimiento compilado en archivos markdown.

Para el harness engineering importa porque cambia la recomendación por defecto sobre cómo darle contexto a un agente. El video concluye que lo habitual será un agente con herramientas de búsqueda baratas (keyword primero, vectores para significado difuso y conectores en vivo para apps ajenas), y que los vectores quedan como una herramienta más. El autor advierte varias veces que muchas cifras vienen de vendedores con intereses en el resultado.

## Resumen

- **El vector deja el centro del stack**: en Turbopuffer v3 cada documento tiene un ID simple y el índice vectorial es un índice más, junto a la búsqueda por palabra clave y los filtros. Todavía no está en producción.
- **RAG clásico = un solo intento**: trae los chunks más cercanos y los pega en el prompt. Ni siquiera un reranker decide que ninguno sirve para volver a buscar. Un agente sí.
- **La búsqueda agéntica gana en preguntas difíciles**: 92,7 % frente a 78,9 % del mejor pipeline fijo en FRAMES, y 90 % frente a 62 % en preguntas que piden cinco o más artículos. Cuesta unas 3 veces más y es más lenta.
- **BM25 suele ganarle a los vectores con datos empresariales**: 68,8 % frente a 51,4 % en EnterpriseRAG-Bench, porque los embeddings no conocen nombres en clave, siglas ni números de ticket.
- **Los vectores siguen sumando** para significado difuso. Cursor reporta un 12,5 % más de precisión al añadir búsqueda semántica sobre grep. Los embeddings cuestan casi nada; lo caro es el bucle.
- **Los conectores MCP en vivo evitan indexar**, con los permisos del usuario. Las apps dueñas de los datos limitan cada vez más la copia masiva. A cambio, son lentos y cada app ordena sus propios resultados.
- **El conocimiento compilado (wiki en markdown) no compensa en tokens**: según un estudio, cuesta unas 100 veces más construirlo y unas 21 veces más por consulta que un RAG, aunque cita mucho mejor.
- **Pregunta decisiva**: cuántos saltos necesita la pregunta típica y si los usuarios pueden esperar 2 minutos por las lentas.

## Contenido estructurado

### Turbopuffer y la degradación del índice vectorial

Una base de datos vectorial guarda el texto como embeddings y devuelve los chunks más cercanos a la pregunta. Turbopuffer construyó su motor alrededor de eso: cada documento vivía en la dirección de su vector, como una biblioteca que ordena por tema. La búsqueda vectorial era rápida y todo lo demás era incómodo. En la v3 cada documento recibe un ID simple y el índice vectorial pasa a ser uno más, junto a keyword y filtros.

> "V3 todavía no está en producción, así que por ahora es marketing de titulares, pero es la empresa que gestiona la búsqueda sobre 10.000 millones de documentos de Notion y te está diciendo que el índice vectorial ya no está en el centro."

### Primer retador: búsqueda agéntica

En lugar de un intento único, el modelo tiene herramientas de búsqueda y trabaja en bucle: buscar, leer, detectar qué falta y volver a buscar.

**Pipeshub en el benchmark FRAMES de Google** (824 preguntas sobre 12.000 artículos de Wikipedia):
- Agente: 92,7 %. Mejor de 18 pipelines fijos: 78,9 %.
- Con los artículos exactos ya entregados (recuperación perfecta): 93 %. El agente quedó a un tercio de punto.
- Preguntas que requieren cinco o más artículos: pipeline 62 %, agente 90 %.
- Costos (Pipeshub vende este tipo de sistema, pero publicó código y costos): unas 3 veces más por pregunta. La respuesta más lenta de cada 20 tardó 134 s frente a 54 s del pipeline, y el 7 % de las preguntas consumió el 37 % del presupuesto.

**Estudio independiente (LREC de este año)**: más de 3 veces los tokens de entrada, 50 % más de tiempo, y un reranker simple le ganó al agente ordenando resultados.

> "El bucle gana las preguntas difíciles, pero pagas cada vuelta."

**BM25 dentro del bucle**: la fórmula de ranking que usaban los buscadores mucho antes de la IA puntúa por palabras exactas compartidas con la consulta. En EnterpriseRAG-Bench (medio millón de documentos de Slack, Gmail, Jira, Confluence y GitHub; benchmark de Onyx, que vende búsqueda empresarial):
- BM25: 68,8 %. Búsqueda vectorial: 51,4 %.
- Los vectores perdieron incluso en preguntas escritas para favorecerlos, porque los modelos de embeddings entrenados con texto público no conocen los nombres en clave, siglas y números de ticket de una empresa.

> "Los IDs de cliente necesitan igualdad, no un alma gemela." (comentario de un desarrollador en Reddit)

**Dónde siguen sirviendo los vectores**:
- BrowseComp-Plus: GPT-5 como agente de búsqueda sacó 70,1 % con un retriever de embeddings frente a 55,9 % con BM25, y necesitó menos búsquedas. Un vendedor de BM25 dice que esa configuración estaba mal ajustada.
- Cursor reporta que su agente mejoró un 12,5 % en precisión al añadir búsqueda semántica sobre grep.
- El modelo pequeño de embeddings de OpenAI cuesta 2 centavos por millón de tokens. Lo caro es el bucle que los llama.

### Segundo retador: conectores MCP en vivo

No hay índice. Un conector MCP es un enchufe estándar que permite a la IA consultar directamente apps como Notion o Salesforce.
- Los conectores federados de Copilot de Microsoft traen datos en vivo por MCP con el login y los permisos del usuario. Microsoft no indexa nada.
- El marketplace de Claude de Anthropic abrió el 23 de septiembre con más de 2.000 conectores y plugins.
- OpenAI fue más lejos: los usuarios individuales ya no pueden sincronizar sus apps en el índice de ChatGPT; solo pueden hacerlo los administradores.
- Los términos de la API de Slack prohíben exportaciones masivas desde 2025.

> "Las apps que guardan tus datos deciden cuánto puedes copiar, y no espero que se vuelvan más generosas."

**Costo**: una consulta federada va tan rápido como la app más lenta, y cada app ordena sus propios resultados. Glean, que vende un índice, midió Claude Cowork con conectores en vivo en 2,98 USD por tarea frente a 0,58 USD de Glean (la transcripción dice "58"), con más de 3 veces los tokens. Aun así, el 22 de septiembre Glean añadió 182 plantillas de servidores MCP en vivo a su producto.

### Tercer retador: conocimiento compilado

El autor reconoce que es una idea que él mismo promovió. En junio hizo un video sobre el *open knowledge format* de Google, donde una IA compila el conocimiento en una carpeta de archivos markdown, y dijo que la carpeta "piensa una vez al principio y luego solo lees la respuesta". El comentario más votado proponía chunkear esos MD y embeberlos en una base vectorial.

> "Cuatro meses después, la evidencia está más del lado de ese comentario que del mío."

Estudio de agosto:
- La wiki compilada costó unas 100 veces más tokens de construir que un índice RAG, como se esperaba.
- La apuesta era recuperar ese costo en cada pregunta, pero la wiki gastó unas 21 veces más tokens por consulta, así que **no existe punto de equilibrio**.
- La wiki cita mucho mejor: el 40 % de sus afirmaciones citadas se sostuvo, frente al 19 % del RAG.
- Es un solo autor y 13 preguntas: "tómalo como una luz de advertencia".

Estado del formato: el último commit al repositorio OKF fue el 21 de agosto, de su único contribuidor, y 88 comentarios en issues no han tenido respuesta de ningún mantenedor. La idea sigue viva en productos como Open Wiki de LangChain y Nexus de Pinecone, que compila datos de la empresa por adelantado.

### Veredicto: qué elegir y cuándo

> "¿Está muerta la base de datos vectorial? La degradaron del centro del stack a una herramienta entre varias."

Recomendaciones:
- **Construcciones nuevas en general**: un agente con herramientas de búsqueda baratas. Primero búsqueda por palabra clave, vectores para significado difuso y conectores en vivo para las apps que no son tuyas.
- **Consultas simples a gran volumen**: el pipeline de un solo intento sigue ganando en precio y velocidad.
- **Agente de código o pocos documentos**: alcanza con grep y un archivo de notas.
- **Menos de 10 millones de vectores**: según el CTO de Turbopuffer, Postgres con pgvector es más barato. Hay que actualizar a la versión 0.8.7, que corrige un agujero de seguridad.
- **Datos de empresa repartidos en varias apps**: empezar con conectores en vivo y añadir un índice solo donde duelan la latencia o el ranking.
- **Compilar conocimiento**: solo cuando es estable y valioso.

> "Antes de pagar por otro índice vectorial, dale a tu agente una herramienta de búsqueda por palabra clave."

## Conceptos clave

- **Base de datos vectorial**: almacén de embeddings (listas de números que capturan significado) que devuelve los chunks más cercanos a una consulta.
- **Pipeline RAG clásico**: chunkear, embeber y, al preguntar, pegar los chunks más cercanos en el prompt. Es un solo intento y no puede decidir buscar de nuevo.
- **Reranker**: componente que reordena los chunks recuperados. No decide que ninguno sirve.
- **Búsqueda agéntica**: el modelo usa herramientas de búsqueda en bucle (buscar, leer, detectar lo que falta, volver a buscar). Es más precisa en preguntas de varios saltos y más cara y lenta.
- **BM25**: fórmula clásica de ranking por coincidencia exacta de términos. Muy fuerte con vocabulario interno de empresa.
- **Conector MCP federado**: consulta en vivo a la app de origen con los permisos del usuario y sin indexar.
- **Conocimiento compilado**: el conocimiento se procesa por adelantado en archivos markdown (wiki). Cita mejor, pero cuesta más tokens al construirlo y al consultarlo.
- **Saltos (hops)**: número de documentos o pasos que necesita una pregunta. Es el criterio central para elegir arquitectura.

## Herramientas y referencias mencionadas

- Turbopuffer (v3), con clientes Cursor, Notion y Anthropic
- Pipeshub y el benchmark FRAMES de Google
- Estudio de la conferencia LREC sobre búsqueda agéntica
- BM25; EnterpriseRAG-Bench (Onyx)
- BrowseComp-Plus, GPT-5
- Cursor (búsqueda semántica sobre grep)
- Modelo pequeño de embeddings de OpenAI
- MCP; conectores federados de Microsoft Copilot; marketplace de Claude de Anthropic; ChatGPT (restricción de sincronización de apps); API de Slack
- Glean y Claude Cowork
- Open Knowledge Format (OKF) de Google; Open Wiki de LangChain; Nexus de Pinecone
- Postgres con pgvector 0.8.7

## Referencias

- Transcripción: [[YLkSfz3EFGw - alternativa-a-bases-de-datos-vectoriales|Transcripción completa]]
- Video: [Vector Databases Are Dead. Use This Instead](https://www.youtube.com/watch?v=YLkSfz3EFGw) — Devsplainers
