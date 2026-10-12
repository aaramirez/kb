#!/usr/bin/env node
/**
 * test-sf-kb.js — Validación de la sección de videos del KB sf-kb
 * (13-Fabricas-con-IA: notas + transcripciones de la playlist Software Factories)
 *
 * Verifica:
 *   1. README.md de la sección y su registro en el Index.md del KB
 *   2. Cada nota de 02-Notas tiene frontmatter (title, videoId, source, created)
 *      y secciones Resumen, Relación con el SF KB y Referencias
 *   3. Cada nota tiene su transcripción en 01-Transcripciones (y viceversa)
 *   4. Cada transcripción tiene timestamps y secciones temáticas
 *   5. Los wikilinks relativos a notas conceptuales del KB apuntan a archivos existentes
 *   6. README.md enlaza todas las notas y todos los videos de YouTube
 *
 * Uso: node tests/test-sf-kb.js
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert';

const KB_DIR = join(dirname(fileURLToPath(import.meta.url)), '../sf-kb');
const SEC = join(KB_DIR, '13-Fabricas-con-IA');
const NOTES = join(SEC, '02-Notas');
const TRANS = join(SEC, '01-Transcripciones');

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
  // 1. README de la sección y registro en el índice del KB
  assert.ok(existsSync(join(SEC, 'README.md')), '13-Fabricas-con-IA/README.md debe existir');
  const readme = readFileSync(join(SEC, 'README.md'), 'utf8');
  const kbIndex = readFileSync(join(KB_DIR, 'Index.md'), 'utf8');
  assert.ok(kbIndex.includes('13-Fabricas-con-IA/README'), 'Index.md del KB debe enlazar la sección 13');

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
    for (const h of ['Resumen', 'Relación con el SF KB', 'Referencias']) {
      assert.ok(new RegExp(`^## ${h}`, 'm').test(md), `${file}: falta sección ## ${h}`);
    }

    // 3. Transcripción pareada
    const tName = `${fm.videoId} - ${slug}.md`;
    assert.ok(transcripts.includes(tName), `${file}: falta transcripción ${tName}`);
    assert.ok(md.includes(`[[${fm.videoId} - ${slug}`), `${file}: debe enlazar su transcripción`);

    // 4. Transcripción con timestamps y secciones
    const t = readFileSync(join(TRANS, tName), 'utf8');
    assert.strictEqual(parseFrontmatter(t)?.type, 'transcripcion', `${tName}: type debe ser transcripcion`);
    assert.ok(/^\[\d+:\d{2}(:\d{2})?\] /m.test(t), `${tName}: debe tener timestamps`);
    if ((t.match(/^\[\d+:\d{2}(:\d{2})?\] /gm) || []).length > 3) {
      assert.ok((t.match(/^## /gm) || []).length >= 3, `${tName}: debe tener al menos 3 secciones ##`);
    }

    // 5. Enlaces relativos a notas conceptuales del KB
    const rel = [...md.matchAll(/\[\[(\.\.\/[^\]|#]+)/g)].map((m) => m[1]);
    assert.ok(rel.length >= 2, `${file}: debe enlazar al menos 2 notas conceptuales del KB`);
    for (const target of rel) {
      const p = resolve(NOTES, target.endsWith('.md') ? target : `${target}.md`);
      assert.ok(existsSync(p), `${file}: enlace roto [[${target}]]`);
    }

    // 6. README de la sección
    assert.ok(readme.includes(`[[${slug}`), `README.md: falta enlace a ${slug}`);
    assert.ok(readme.includes(fm.videoId), `README.md: falta link de YouTube de ${fm.videoId}`);
  }

  console.log(`✓ sf-kb (13-Fabricas-con-IA): ${notes.length} notas y ${transcripts.length} transcripciones válidas`);
}

try {
  tests();
} catch (err) {
  console.error(`✗ ${err.message}`);
  process.exit(1);
}
