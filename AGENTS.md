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

## When working

- Follow the existing code style (see `.opencode/rules/code-style.md`)
- Use conventional commits (`<type>(<scope>): <description>`)
- Keep skills in SKILL.md format with YAML frontmatter
- Add new skills as `.opencode/skills/<name>/SKILL.md`
