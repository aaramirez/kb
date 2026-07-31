---
title: "Cómo usar este KB"
tags:
  - ytpeople/meta
  - type/guia
created: 2026-07-30
updated: 2026-07-30
category: "YT People"
related:
  - "[[Index|YT People KB]]"
---

# Cómo usar este KB

Este KB documenta videos de YouTube de empresarios de tecnología. Por cada video se crean dos archivos:

| Archivo | Propósito |
|---------|-----------|
| `01-Transcripciones/<videoId> - <tema>.md` | Fuente: contenido fiel del video, hecho legible |
| `<tema>.md` | Nota: resumen de puntos clave + contenido estructurado |

## Flujo de ingesta de un video

1. **Obtener la transcripción** (skill `youtube`):

   ```bash
   node .opencode/scripts/youtube-transcript.js <video-id> --lang es
   ```

2. **Crear la transcripción legible** en `01-Transcripciones/<videoId> - <tema>.md`:
   - Frontmatter con `type: transcripcion`, `person`, `videoId`, `source`
   - Timestamps `[MM:SS]` por bloque
   - Párrafos separados y secciones temáticas `##`
   - Contenido **fiel** al original: no se corrige ni se resume el mensaje, solo se hace legible

3. **Crear la nota estructurada** `<tema>.md`:
   - **Título = tema del contenido del video** (se deriva del contenido, no del videoId)
   - Frontmatter con `person`, `videoId`, `source`, `related`
   - `## Resumen` — los puntos más importantes en bullets
   - Contenido fiel reorganizado por temas (con citas textuales)
   - `## Referencias` — link a la transcripción y al video

4. **Registrar el video** en el `Index.md` del canal con su link a YouTube, su nota y su transcripción.

5. **Validar**:

   ```bash
   node tests/test-ytpeople-kb.js
   ```

## Convenciones

- Una carpeta por canal (persona), con su `Index.md`.
- Transcripciones en `01-Transcripciones/` dentro del canal.
- El título de la nota se toma del tema del video, no del videoId.
- Todo contenido es fiel al original; solo se estructura para hacerlo accesible.
- Las transcripciones automáticas de YouTube pueden contener errores de reconocimiento; se conservan como fuente sin corrección del mensaje.
