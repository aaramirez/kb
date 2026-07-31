# lean-ai — AI Agent Instructions

lean-ai — AI-enhanced project

This repository uses **arai** (open-code AI configuration manager) for multi-agent configuration.
Skills, scripts, and prompts are installed from the [aramirez-ai](https://github.com/aaramirez/aramirez-ai) repository.

## Repository structure

```
lean-ai/
  ├── .opencode/  OpenCode configuration
  │   ├── skills/
  │   ├── agents/
  │   ├── commands/
  │   ├── scripts/
  │   ├── prompts/
  │   ├── rules/
  │   └── brand.json
  ├── assets/  Brand logos, CSS templates, decks, images
  │   ├── images/
  │   └── templates/
  ├── opencode.json
  ├── package.json
  └── repos.json
```

## Key principles

- **OpenCode only**: All agent configuration is managed through opencode (opencode.json).
- **Skills live in `.opencode/skills/<name>/SKILL.md`** with YAML frontmatter.
- **Cross-Platform Compatibility**: All code, scripts, and tools must run on both macOS and Windows.
- **Per-project installs**: `arai install` copies files locally — projects are self-contained.

## Available agents

| Agent | Mode | Permissions |
|-------|------|-------------|
| **build** (default) | primary | — |
| **plan** | primary | edit: deny |
| **plan-arai** | primary | — |
| **reviewer** | subagent | edit: deny |
| **tester** | subagent | bash: allow |
| **docs** | subagent | edit: allow, bash: deny |

## Available skills

| Skill | Description |
|-------|-------------|
| architecture-creator | Create multi-agent architecture patterns — orchestrator, tiered, peer, or chain delegation models. |
| branding | Define and apply brand identity — colors, logos, and typography for all generated documents. Use when creating or customizing visual assets. |
| ci-validate | Validate project integrity — required files, placeholders, frontmatter, and structural consistency. |
| code-review | Use for reviewing pull requests, performing code audits, and enforcing quality standards. |
| content-ingestion | Take content from any source (PDF, DOCX, web, text, markdown) and structure it into a knowledge base with proper frontmatter, wikilinks, and formatting. |
| document-generation | Generate branded PDF presentations, HTML decks, reports, and images using Node.js content builders. |
| email | Send emails via SMTP (Gmail, Outlook/Office365) with CLI, MCP, and command support. |
| git | Use for git operations, branching strategies, commit conventions, and repository management. |
| google-workspace | Read and search files in Google Drive, Docs, and Sheets via Google's official MCP server. |
| kb-management | Maintain a knowledge base vault — update existing notes, fix wikilinks, reorganize structure, keep workspace and graph in sync. |
| m365 | Read and search files in OneDrive and SharePoint via Microsoft Graph API. |
| pdf-extraction | Extract literal text from PDF files — handle column breaks, paragraph reconstruction, table detection, and encoding issues. |
| repos-sync | Synchronize reference repositories for knowledge sharing and dependency management. |
| vault-pdf-export | Exporta contenido del vault Obsidian curso-ia a PDF profesional usando el pipeline document-generation. |
| youtube | Use for fetching and processing YouTube video transcriptions to feed into AI models, generate summaries, create course notes, or analyze video content. |

## Available scripts

| Script | Type |
|--------|------|
| .opencode/scripts/create-base.js | file |
| .opencode/scripts/ci-validate.js | file |
| .opencode/scripts/create-brand.js | file |
| .opencode/scripts/docgen | dir |
| .opencode/scripts/docgen-vault.js | file |
| .opencode/scripts/extract-pdf.js | file |
| .opencode/scripts/ingest-content.js | file |
| .opencode/scripts/kb-sync.js | file |
| .opencode/scripts/mcp-email.js | file |
| .opencode/scripts/repos-sync.js | file |
| .opencode/scripts/send-email.js | file |
| .opencode/scripts/youtube-transcript.js | file |

## CLI quick reference

| Command | Description |
|---------|-------------|
| `arai init <dir>` | Scaffold new project (`--template minimal\|full`, `--description`) |
| `arai install` | Install opencode platform in project |
| `arai install <type> <name>` | Install component: skill, agent, script, prompt, rule |
| `arai uninstall` | Uninstall opencode platform from project |
| `arai uninstall <type> <name>` | Uninstall a specific component |
| `arai status` | Show installation status in current directory |
| `arai list skills\|agents\|scripts\|templates\|commands\|mcp` | List resources |
| `arai generate skill <name>` | Create skill in `.opencode/skills/` |
| `arai generate agent <name>` | Create agent + register in opencode.json |
| `arai generate script <name>` | Create reusable script |
| `arai generate command <name>` | Create opencode command |
| `arai generate brand` | Set brand identity (colors, logos) |
| `arai generate kb [dir]` | Create Obsidian vault (`--force` to overwrite) |
| `/getrepo <name\|all>` | Clone reference repos from repos.json into references/ |
| `/updaterepo <name\|all>` | Update reference repos already cloned in references/ |

## ytpeople-kb — Knowledge base de empresarios de tecnología

KB con conocimiento de emprendedores y referentes de tecnología basado en transcripciones fieles de YouTube, en `ytpeople-kb/`.

### Estructura

```
ytpeople-kb/
  ├── Index.md                        Índice general con lista de canales/personas
  ├── como-usar-este-kb.md            Guía de uso del KB
  └── <Persona>/                      Una carpeta por persona/canal
      ├── Index.md                    Índice del canal con videos y links a YouTube
      ├── <slug-tema>.md              Nota estructurada (título = tema del contenido)
      └── 01-Transcripciones/
          └── <videoId> - <slug>.md   Transcripción legible del video
```

### Flujo para agregar un video

1. Obtener la transcripción: `node .opencode/scripts/youtube-transcript.js <videoId> --lang es`
2. Guardar los segmentos con timestamps y crear la transcripción legible en `01-Transcripciones/`: markdown con timestamps, párrafos reconstruidos y secciones `##`, fiel al contenido original.
3. Crear la nota estructurada con el **título basado en el tema del video** (no el videoId). Formato: frontmatter (title, person, channel, videoId, source, created, aliases, related) + `## Resumen` + contenido reorganizado por temas + `## Referencias` con wikilink a la transcripción.
4. Agregar la fila al `Index.md` de la persona con los wikilinks `[[slug-tema]]` y `[[videoId - slug|Transcripción]]` (escapar el pipe como `\|` dentro de la tabla).
5. Ejecutar la validación: `node tests/test-ytpeople-kb.js`

### Reglas de naming

- Nombre de la nota: slug del tema del video, kebab-case, sin acentos.
- Wikilinks dentro de tablas: escapar el pipe como `\|`.
- Transcripciones siempre verbatim/legibles: nunca resumidas.

## When working

- Follow the existing code style (see `.opencode/rules/code-style.md`)
- Use conventional commits (`<type>(<scope>): <description>`)
- Keep skills in SKILL.md format with YAML frontmatter
- Add new skills as `.opencode/skills/<name>/SKILL.md`
