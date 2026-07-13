# Plan: Migrar `shared/` a `.opencode/`

## Objetivo

Consolidar todo el contenido de `shared/` dentro de `.opencode/`, eliminando el directorio `shared/` y actualizando todas las referencias en el códigobase.

## Estructura destino

```
.opencode/
├── agents/
├── commands/
├── plugins/
├── skills/
├── scripts/          ← era shared/scripts/
│   ├── docgen/
│   │   ├── build-deck.js
│   │   ├── build-image.js
│   │   ├── build-pptx.js
│   │   ├── build-report.js
│   │   ├── build-web.js
│   │   ├── charts.js
│   │   ├── components.js
│   │   ├── html-theme.js
│   │   ├── index.js
│   │   ├── report-theme.js
│   │   ├── theme-utils.js
│   │   └── validate.js
│   ├── ci-validate.js
│   ├── create-brand.js
│   ├── docgen-vault.js
│   ├── extract-pdf.js
│   ├── ingest-content.js
│   ├── kb-sync.js
│   ├── mcp-email.js
│   ├── repos-sync.js
│   ├── send-email.js
│   └── youtube-transcript.js
├── prompts/          ← era shared/prompts/
│   └── commit-message.md
├── rules/            ← era shared/rules/
│   └── code-style.md
├── brand.json        ← era shared/brand.json
├── package.json
├── package-lock.json
├── tui.json
└── .gitignore
```

## Pasos de ejecución

### Paso 1: Mover archivos

```bash
# Crear directorios destino
mkdir -p .opencode/scripts .opencode/prompts .opencode/rules

# Mover scripts (incluyendo docgen/)
cp -r shared/scripts/* .opencode/scripts/
cp -r shared/prompts/* .opencode/prompts/
cp -r shared/rules/* .opencode/rules/
cp shared/brand.json .opencode/brand.json

# Verificar que todo llegó
ls -R .opencode/scripts/ .opencode/prompts/ .opencode/rules/ .opencode/brand.json

# Eliminar shared/
rm -rf shared/
```

### Paso 2: Actualizar `opencode.json` (3 referencias)

Cambiar las rutas en el bloque `references`:

```json
"references": {
  "shared-scripts": {
    "path": ".opencode/scripts",
    "description": "Reusable automation scripts (deploy, test, etc.)"
  },
  "shared-rules": {
    "path": ".opencode/rules",
    "description": "Coding standards, architecture, and documentation rules"
  },
  "shared-prompts": {
    "path": ".opencode/prompts",
    "description": "Reusable prompt fragments for common patterns"
  }
}
```

### Paso 3: Actualizar `AGENTS.md` (12 referencias)

- Línea 12: `shared/  Centralized reusable assets` → `.opencode/  OpenCode configuration (includes scripts, prompts, rules)`
- Líneas 13-15: Actualizar árbol de directorios
- Líneas 69-79: Cambiar `shared/scripts/` → `.opencode/scripts/` en tabla de scripts
- Línea 101: `shared/rules/code-style.md` → `.opencode/rules/code-style.md`

### Paso 4: Actualizar `ci-validate.js` (CRITICAL — runtime logic)

Este script tiene paths hardcodeados que se verifican en runtime:

| Línea | Antes | Después |
|-------|-------|---------|
| 62 | `join(ROOT, 'shared')` | `join(ROOT, '.opencode')` |
| 63 | `join(ROOT, 'shared', 'skills')` | `join(ROOT, '.opencode', 'skills')` |
| 64 | `join(ROOT, 'shared', 'scripts')` | `join(ROOT, '.opencode', 'scripts')` |
| 67 | `join(ROOT, 'shared', 'skills')` | `join(ROOT, '.opencode', 'skills')` |
| 68 | `join(ROOT, 'shared', 'skills')` | `join(ROOT, '.opencode', 'skills')` |
| 69 | `join(ROOT, 'shared', 'skills', f)` | `join(ROOT, '.opencode', 'skills', f)` |
| 75 | `join(ROOT, 'shared', 'skills', skill, 'SKILL.md')` | `join(ROOT, '.opencode', 'skills', skill, 'SKILL.md')` |
| 93 | `join(ROOT, 'shared', 'scripts')` | `join(ROOT, '.opencode', 'scripts')` |
| 94 | `join(ROOT, 'shared', 'scripts')` | `join(ROOT, '.opencode', 'scripts')` |
| 95 | `join(ROOT, 'shared', 'scripts', f)` | `join(ROOT, '.opencode', 'scripts', f)` |
| 100 | `join(ROOT, 'shared', 'scripts', script)` | `join(ROOT, '.opencode', 'scripts', script)` |
| 113 | `join(ROOT, 'shared', 'brand.json')` | `join(ROOT, '.opencode', 'brand.json')` |
| 115 | `join(ROOT, 'shared', 'brand.json')` | `join(ROOT, '.opencode', 'brand.json')` |

También actualizar comentarios JSDoc (líneas 9-11).

### Paso 5: Actualizar SKILL.md files (28 referencias en 8 archivos)

| Archivo | Cambios |
|---------|---------|
| `skills/branding/SKILL.md` | 4 refs: `shared/brand.json` → `.opencode/brand.json` |
| `skills/document-generation/SKILL.md` | 5 refs: `shared/scripts/docgen/` → `.opencode/scripts/docgen/` |
| `skills/vault-pdf-export/SKILL.md` | 7 refs: `shared/scripts/docgen-vault.js` → `.opencode/scripts/docgen-vault.js` |
| `skills/ci-validate/SKILL.md` | 3 refs: `shared/scripts/ci-validate.js` → `.opencode/scripts/ci-validate.js` |
| `skills/repos-sync/SKILL.md` | 4 refs: `shared/scripts/repos-sync.js` → `.opencode/scripts/repos-sync.js` |
| `skills/youtube/SKILL.md` | 5 refs: `shared/scripts/youtube-transcript.js` → `.opencode/scripts/youtube-transcript.js` |
| `skills/email/SKILL.md` | 4 refs: `shared/scripts/send-email.js` → `.opencode/scripts/send-email.js`, `shared/scripts/mcp-email.js` → `.opencode/scripts/mcp-email.js` |

### Paso 6: Actualizar agent .md files (8 referencias en 3 archivos)

| Archivo | Cambios |
|---------|---------|
| `agents/branding.md` | 2 refs: `shared/brand.json` → `.opencode/brand.json` |
| `agents/vault-pdf-export.md` | 2 refs: `shared/scripts/docgen-vault.js` → `.opencode/scripts/docgen-vault.js` |
| `agents/youtube.md` | 2 refs: `shared/scripts/youtube-transcript.js` → `.opencode/scripts/youtube-transcript.js` |

### Paso 7: Actualizar comentarios JSDoc en scripts (~45 referencias)

Cada script contiene `shared/` en sus comentarios de uso. Actualizar todos:

| Script | Referencias |
|--------|-------------|
| `ci-validate.js` | Ya actualizado en Paso 4 |
| `kb-sync.js` | 4 refs en comentarios |
| `ingest-content.js` | 4 refs en comentarios |
| `extract-pdf.js` | 4 refs en comentarios |
| `docgen-vault.js` | 1 ref en comentario |
| `repos-sync.js` | 4 refs en comentarios + runtime |
| `send-email.js` | 2 refs en comentarios |
| `create-brand.js` | 4 refs en comentarios |
| `youtube-transcript.js` | 3 refs en comentarios + runtime |
| `docgen/build-pptx.js` | 3 refs en comentarios |
| `docgen/validate.js` | 2 refs en comentarios |
| `docgen/build-deck.js` | 3 refs en comentarios |
| `docgen/charts.js` | 1 ref en comentario |
| `docgen/build-web.js` | 2 refs en comentarios |
| `docgen/build-image.js` | 3 refs en comentarios |
| `docgen/build-report.js` | 2 refs en comentarios |

### Paso 8: Actualizar `plans/lean-kb.md` (9 referencias)

Cambiar todas las rutas `shared/scripts/` → `.opencode/scripts/` en el documento de plan.

### Paso 9: Actualizar `docgen-vault.js` ruta BRAND_PATH

Línea 8: `join(REPO_ROOT, 'shared', 'brand.json')` → `join(REPO_ROOT, '.opencode', 'brand.json')`

### Paso 10: Actualizar referencias del sistema

El系统 prompt tiene `available_references` que apuntan a `/Users/administrador/P/shared/`. Verificar si esto es un directorio separado (fuera del proyecto) o si necesita actualización. **Acción: verificar si `/Users/administrador/P/shared/` existe y es diferente de `lean-ai/shared/`.**

## Archivos críticos a modificar

| Archivo | Tipo de cambio | Prioridad |
|---------|---------------|-----------|
| `.opencode/scripts/ci-validate.js` | Runtime paths | CRITICAL |
| `.opencode/scripts/docgen-vault.js` | Runtime BRAND_PATH | CRITICAL |
| `.opencode/scripts/repos-sync.js` | Runtime paths | HIGH |
| `.opencode/scripts/youtube-transcript.js` | Runtime paths | HIGH |
| `opencode.json` | Config references | HIGH |
| `AGENTS.md` | Documentation | MEDIUM |
| 8 × SKILL.md | Skill instructions | MEDIUM |
| 3 × agent .md | Agent instructions | MEDIUM |
| 16 × script .js | JSDoc comments | LOW |
| `plans/lean-kb.md` | Planning doc | LOW |

## Verificación

1. **Ejecutar `ci-validate.js`** después de la migración — debe pasar sin errores
2. **Ejecutar `docgen-vault.js`** con un vault de prueba — debe generar PDF correctamente
3. **Verificar que `shared/` ya no existe** — `ls shared/` debe fallar
4. **Buscar referencias restantes** — `grep -r "shared/" .opencode/ plans/ AGENTS.md opencode.json` no debe encontrar hits (excepto comentarios históricos)
5. **Verificar brand.json** — `node -e "import('.opencode/scripts/docgen/index.js').then(m => { m.loadBrand('.opencode/brand.json'); console.log(m.brand()); })"` debe funcionar
