---
title: "Cómo usar este KB"
tags:
  - arnes/meta
  - type/guia
created: 2026-10-10
updated: 2026-10-10
category: "Arnés"
related:
  - "[[Index|Arnés]]"
---

# Cómo usar este KB

Sección **Arnés** (harness engineering): conocimiento sobre cómo construir el entorno que rodea a un modelo de IA —contexto, herramientas, memoria, bucles, evals, sandbox y orquestación— para convertirlo en un agente confiable. Se construye a partir de los videos de la playlist [Harness](https://www.youtube.com/playlist?list=PLQ-6al9D-7mk) del canal IA en la Empresa.

Por cada video hay dos archivos:

| Archivo | Propósito |
|---------|-----------|
| `01-Transcripciones/<videoId> - <slug>.md` | Fuente: transcripción fiel en el idioma original, con timestamps y secciones temáticas |
| `02-Notas/<slug>.md` | Nota en español: resumen, contenido estructurado por temas, conceptos clave y referencias |

## Cómo navegarlo

- [[Index]] — todos los videos en el orden de la playlist y agrupados por tema.
- [[matriz-problema-conocimiento]] — problemas concretos (diagnosticar fallos, memoria, evals, producción…) mapeados a las notas que aplican.
- Filtra por tags de tema en Obsidian: `arnes/fundamentos`, `arnes/construccion`, `arnes/contexto-y-memoria`, `arnes/herramientas-y-sandbox`, `arnes/evals-y-observabilidad`, `arnes/orquestacion-multiagente`, `arnes/fabricas-de-software`, `arnes/flujos-de-trabajo`, `arnes/ontologias`, `arnes/frameworks`, `arnes/produccion`, `arnes/opinion`.
- Para citar o verificar un dato, salta de la nota a la transcripción y busca el timestamp.

## Flujo de ingesta de un video

1. **Obtener la transcripción** en el idioma original del video. La API del script `youtube-transcript.js` exige ahora una API key (10 peticiones/día); para lotes grandes usa `youtube-transcript-api` (Python) y elige la pista del idioma original del audio: los videos con doblaje automático exponen pistas auto-generadas en otros idiomas (árabe, bengalí…) que no son el original.
2. **Generar la transcripción legible** en `01-Transcripciones/`: frontmatter (`type: transcripcion`, `channel`, `videoId`, `source`, `language`), párrafos con timestamp `[M:SS]` y secciones `##`. Contenido **fiel**: no se corrige ni se resume.
3. **Crear la nota** en `02-Notas/<slug>.md` en español: `## Resumen`, `## Contenido estructurado`, `## Conceptos clave`, `## Herramientas y referencias mencionadas`, `## Referencias` (wikilink a la transcripción y link al video).
4. **Registrar el video** en [[Index]] (tabla de la playlist y grupo temático).
5. **Validar**:

   ```bash
   node tests/test-arnes-kb.js
   ```

## Convenciones

- Slug en kebab-case, sin acentos, en español.
- Las notas siempre en español; las transcripciones en el idioma original del video.
- Los subtítulos auto-generados tienen errores de reconocimiento ("Cloud" por Claude, etc.): se corrigen en la nota, no en la transcripción.
- Wikilinks dentro de tablas: escapar el pipe como `\|`.
