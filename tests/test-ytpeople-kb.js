#!/usr/bin/env node
/**
 * test-ytpeople-kb.js — Validación de estructura del KB ytpeople-kb
 *
 * Verifica:
 *   1. Archivos raíz del KB (Index.md, como-usar-este-kb.md)
 *   2. Por cada canal: Index.md con links a YouTube
 *   3. Para cada video del índice: nota estructurada y transcripción legible
 *   4. Frontmatter correcto (person, videoId, source, created)
 *   5. Título del frontmatter coincide con el tema (nombre del archivo)
 *   6. Nota contiene secciones Resumen y Referencias
 *   7. Transcripción contiene timestamps y secciones temáticas
 *
 * Uso: node tests/test-ytpeople-kb.js
 */

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import assert from 'node:assert';

const KB_DIR = resolve(new URL('.', import.meta.url).pathname, '../ytpeople-kb');

function readMd(rel) {
  const p = join(KB_DIR, rel);
  if (!existsSync(p)) return null;
  return readFileSync(p, 'utf8');
}

function parseFrontmatter(md) {
  const m = md.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"(.*)"$/, '$1');
  }
  return fm;
}

function slugify(s) {
  return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
}

function tests() {
  // 1. Archivos raíz
  assert.ok(existsSync(join(KB_DIR, 'Index.md')), 'Index.md raíz debe existir');
  assert.ok(existsSync(join(KB_DIR, 'como-usar-este-kb.md')), 'como-usar-este-kb.md debe existir');

  // 2. Canales
  const channels = readdirSync(KB_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith('.'))
    .map((e) => e.name);

  assert.ok(channels.length >= 1, 'Debe existir al menos un canal');

  for (const channel of channels) {
    const channelDir = join(KB_DIR, channel);
    const indexMd = readMd(`${channel}/Index.md`);
    assert.ok(indexMd, `Index.md del canal ${channel} debe existir`);

    const transcriptDir = join(channelDir, '01-Transcripciones');
    assert.ok(statSync(transcriptDir).isDirectory(), `01-Transcripciones de ${channel} debe existir`);

    // 3. Extraer videos del índice (filas con youtube.com/watch)
    const rows = indexMd.match(/.*youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11}).*/g) || [];
    assert.ok(rows.length >= 1, `Index.md de ${channel} debe listar al menos 1 video con link a YouTube`);

    for (const row of rows) {
      const videoId = row.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/)[1];
      const noteLink = row.match(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/);
      assert.ok(noteLink, `Fila de ${videoId} debe tener wikilink a la nota`);

      const noteName = noteLink[1].trim();
      const transMatch = row.match(/\[\[([^\]|]+)\|Transcripción\]\]/);
      assert.ok(transMatch, `Fila de ${videoId} debe tener wikilink a la transcripción`);
      const transcriptName = transMatch[1].trim().replace(/\\$/, '');

      // Nota estructurada
      const notePath = `${channel}/${noteName}.md`;
      const noteMd = readMd(notePath);
      assert.ok(noteMd, `Nota ${notePath} debe existir`);

      const fm = parseFrontmatter(noteMd);
      assert.ok(fm, `Frontmatter de ${notePath} debe existir`);
      assert.ok(fm.person, `Frontmatter de ${notePath} debe tener person`);
      assert.ok(fm.videoId, `Frontmatter de ${notePath} debe tener videoId`);
      assert.strictEqual(fm.videoId, videoId, `videoId de ${notePath} debe coincidir con el índice`);
      assert.ok(fm.source && fm.source.includes(videoId), `source de ${notePath} debe incluir la URL del video`);
      assert.ok(fm.created, `Frontmatter de ${notePath} debe tener created`);

      // Título = tema (coincide con nombre de archivo)
      assert.ok(fm.title, `Frontmatter de ${notePath} debe tener title`);
      assert.strictEqual(
        slugify(fm.title),
        noteName,
        `Title de ${notePath} debe coincidir con el tema (nombre de archivo)`
      );

      assert.ok(/^## Resumen/m.test(noteMd), `Nota ${notePath} debe tener sección Resumen`);
      assert.ok(/^## Referencias/m.test(noteMd), `Nota ${notePath} debe tener sección Referencias`);

      // Transcripción legible
      const transPath = `${channel}/01-Transcripciones/${transcriptName}.md`;
      const transMd = readMd(transPath);
      assert.ok(transMd, `Transcripción ${transPath} debe existir`);
      assert.ok(/\[[0-9]+:[0-9]{2}\]/.test(transMd), `Transcripción ${transPath} debe tener timestamps [MM:SS]`);
      assert.ok(/^## /m.test(transMd), `Transcripción ${transPath} debe tener secciones temáticas`);

      // Wikilinks de related resuelven
      if (fm.related) {
        const rel = fm.related.split(',').map((r) => r.trim());
        for (const r of rel) {
          const target = r.replace(/\[\[|\]\]/g, '').split('|')[0].split('/').pop();
          const exists = readdirSync(join(channelDir, '01-Transcripciones'), { recursive: true })
            .some((f) => f.includes(target));
          assert.ok(exists || existsSync(join(KB_DIR, target + '.md')), `Wikilink related "${r}" de ${notePath} debe resolver`);
        }
      }
    }
  }
}

try {
  tests();
  console.log('OK — ytpeople-kb válido');
} catch (err) {
  console.error('FAIL:', err.message);
  process.exit(1);
}
