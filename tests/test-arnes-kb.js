#!/usr/bin/env node
/**
 * test-arnes-kb.js — Validación de estructura del KB arnes-kb
 *
 * Verifica:
 *   1. Archivos raíz del KB (Index.md, como-usar-este-kb.md)
 *   2. Cada nota de 02-Notas tiene frontmatter (title, videoId, source, created)
 *      y secciones Resumen y Referencias
 *   3. Cada nota tiene su transcripción en 01-Transcripciones (y viceversa)
 *   4. Cada transcripción tiene timestamps y secciones temáticas
 *   5. Index.md enlaza todas las notas y todos los videos de YouTube
 *
 * Uso: node tests/test-arnes-kb.js
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert';

const KB_DIR = join(dirname(fileURLToPath(import.meta.url)), '../arnes-kb');
const NOTES = join(KB_DIR, '02-Notas');
const TRANS = join(KB_DIR, '01-Transcripciones');

function parseFrontmatter(md) {
  const m = md.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([a-zA-Z]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].replace(/^"(.*)"$/, '$1');
  }
  return fm;
}

function tests() {
  // 1. Archivos raíz
  assert.ok(existsSync(join(KB_DIR, 'Index.md')), 'Index.md raíz debe existir');
  assert.ok(existsSync(join(KB_DIR, 'como-usar-este-kb.md')), 'como-usar-este-kb.md debe existir');
  const index = readFileSync(join(KB_DIR, 'Index.md'), 'utf8');

  const notes = readdirSync(NOTES).filter((f) => f.endsWith('.md'));
  const transcripts = readdirSync(TRANS).filter((f) => f.endsWith('.md'));
  assert.ok(notes.length >= 1, 'Debe existir al menos una nota');
  assert.strictEqual(notes.length, transcripts.length, 'Debe haber una transcripción por nota');

  for (const file of notes) {
    const slug = file.slice(0, -3);
    const md = readFileSync(join(NOTES, file), 'utf8');
    const fm = parseFrontmatter(md);

    // 2. Frontmatter y secciones de la nota
    assert.ok(fm, `${file}: debe tener frontmatter`);
    for (const key of ['title', 'videoId', 'source', 'created']) {
      assert.ok(fm[key], `${file}: falta "${key}" en frontmatter`);
    }
    assert.ok(fm.source.includes(fm.videoId), `${file}: source debe contener el videoId`);
    assert.ok(/^## Resumen/m.test(md), `${file}: falta sección ## Resumen`);
    assert.ok(/^## Referencias/m.test(md), `${file}: falta sección ## Referencias`);

    // 3. Transcripción pareada
    const tName = `${fm.videoId} - ${slug}.md`;
    assert.ok(transcripts.includes(tName), `${file}: falta transcripción ${tName}`);
    assert.ok(md.includes(`[[${fm.videoId} - ${slug}`), `${file}: debe enlazar su transcripción`);

    // 4. Transcripción con timestamps y secciones
    const t = readFileSync(join(TRANS, tName), 'utf8');
    assert.strictEqual(parseFrontmatter(t)?.type, 'transcripcion', `${tName}: type debe ser transcripcion`);
    assert.ok(/^\[\d+:\d{2}(:\d{2})?\] /m.test(t), `${tName}: debe tener timestamps`);
    // Clips muy cortos (pocos párrafos) no se dividen en secciones
    if ((t.match(/^\[\d+:\d{2}(:\d{2})?\] /gm) || []).length > 3) {
      assert.ok((t.match(/^## /gm) || []).length >= 3, `${tName}: debe tener al menos 3 secciones ##`);
    }

    // 5. Índice
    assert.ok(index.includes(`[[02-Notas/${slug}`), `Index.md: falta enlace a ${slug}`);
    assert.ok(index.includes(fm.videoId), `Index.md: falta link de YouTube de ${fm.videoId}`);
  }

  console.log(`✓ arnes-kb: ${notes.length} notas y ${transcripts.length} transcripciones válidas`);
}

try {
  tests();
} catch (err) {
  console.error(`✗ ${err.message}`);
  process.exit(1);
}
