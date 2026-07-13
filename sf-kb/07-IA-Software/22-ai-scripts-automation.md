---
title: "Scripts y Automatización con IA"
tags:
  - sf/ia-software
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "AI Automation"
  - "AI Scripts"
  - "Function Calling"
related:
  - "[[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]"
  - "[[../07-IA-Software/21-ai-tools-ecosystem|Ecosistema de Herramientas]]"
  - "[[../09-DevOps-Infra/README|DevOps e Infraestructura]]"
---

# Scripts y Automatización con IA

La IA permite crear scripts inteligentes que pueden tomar decisiones, adaptarse a contexto y ejecutar tareas complejas.

## Function Calling

### ¿Qué es?

Function calling permite al LLM invocar funciones definidas por el developer.

```
┌─────────────────────────────────────────────┐
│         FUNCTION CALLING FLOW               │
├─────────────────────────────────────────────┤
│                                              │
│  User: "¿Cuántos usuarios hay?"            │
│       │                                     │
│       ▼                                     │
│  LLM: { function: "count_users",           │
│         arguments: {} }                     │
│       │                                     │
│       ▼                                     │
│  App: count_users() → 1542                  │
│       │                                     │
│       ▼                                     │
│  LLM: "Hay 1542 usuarios registrados"      │
│                                              │
└─────────────────────────────────────────────┘
```

### OpenAI Function Calling

```python
import openai

tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get weather for a city",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "City name"
                    }
                },
                "required": ["city"]
            }
        }
    }
]

response = openai.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Weather in Madrid?"}],
    tools=tools,
    tool_choice="auto"
)

# Handle function call
if response.choices[0].message.tool_calls:
    tool_call = response.choices[0].message.tool_calls[0]
    if tool_call.function.name == "get_weather":
        import json
        args = json.loads(tool_call.function.arguments)
        result = get_weather(args["city"])
        print(result)
```

## Automation Patterns

### 1. CI/CD Pipeline Enhancement

```
┌──────────┐    ┌──────────┐    ┌──────────┐
│  Code    │───▶│ AI       │───▶│ Pipeline │
│  Commit  │    │ Analysis │    │ Decision │
└──────────┘    └──────────┘    └──────────┘
                    │               │
                    ▼               ▼
              ┌──────────┐   ┌──────────┐
              │ Security │   │ Auto-fix │
              │ Scan     │   │ or Block │
              └──────────┘   └──────────┘
```

```yaml
# .github/workflows/ai-enhanced.yml
name: AI-Enhanced CI
on: [push, pull_request]

jobs:
  ai-analysis:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: AI Code Review
        uses: coderabbitai/ai-pr-reviewer@latest
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: AI Security Scan
        run: |
          # Custom AI security analysis
          python scripts/ai_security_scan.py

      - name: AI Test Suggestions
        if: github.event_name == 'pull_request'
        run: |
          # Suggest tests for changed files
          python scripts/ai_suggest_tests.py --diff HEAD~1
```

### 2. Automated Documentation

```python
# Script: auto_document.py
import openai
import os

def document_function(file_path: str, function_name: str):
    """Auto-generate documentation for a function."""
    with open(file_path) as f:
        code = f.read()

    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=[{
            "role": "user",
            "content": f"""Generate comprehensive JSDoc for:
{code}

Include: description, params, returns, examples, throws"""
        }]
    )

    return response.choices[0].message.content

# Batch documentation
for root, dirs, files in os.walk("src"):
    for file in files:
        if file.endswith(".ts"):
            path = os.path.join(root, file)
            docs = document_function(path, "all")
            # Write to docs/ directory
```

### 3. Intelligent Monitoring

```python
# Script: ai_monitor.py
def analyze_log(log_entry: dict) -> dict:
    """AI-powered log analysis."""
    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=[{
            "role": "system",
            "content": """Analyze log entries. Return JSON:
            {severity, category, suggested_action, is_known_issue}"""
        }, {
            "role": "user",
            "content": f"Analyze: {log_entry}"
        }],
        response_format={"type": "json_object"}
    )

    return json.loads(response.choices[0].message.content)
```

### 4. Migration Scripts

```python
# Script: ai_migrate.py
def generate_migration(source_code: str, target: str) -> str:
    """AI-powered code migration."""
    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=[{
            "role": "system",
            "content": f"Migrate code to {target}. Preserve all functionality."
        }, {
            "role": "user",
            "content": source_code
        }]
    )
    return response.choices[0].message.content

# Batch migrate
for file in glob("legacy/**/*.py"):
    source = read_file(file)
    migrated = generate_migration(source, "FastAPI")
    write_file(f"modern/{file.name}", migrated)
```

## MCP-Based Automation

```
┌─────────────────────────────────────────────┐
│      MCP AUTOMATION ARCHITECTURE            │
├─────────────────────────────────────────────┤
│                                              │
│  ┌──────────┐     ┌──────────────────┐     │
│  │  Agent   │────▶│  MCP Server      │     │
│  │  (LLM)  │◀────│  - GitHub API    │     │
│  └──────────┘     │  - Database      │     │
│                   │  - File System   │     │
│                   │  - Deploy Tools  │     │
│                   └──────────────────┘     │
│                                              │
│  Example workflow:                          │
│  "Deploy the latest changes to staging"     │
│  → Agent reads GitHub for latest commit     │
│  → Agent runs tests via MCP                 │
│  → Agent deploys via MCP deploy tool        │
│  → Agent notifies via Slack MCP             │
└─────────────────────────────────────────────┘
```

## CLI Automation

### Custom CLI tool with AI

```python
# cli.py - Custom AI-powered CLI
import click
import openai

@click.group()
def cli():
    pass

@cli.command()
@click.argument('issue')
def investigate(issue):
    """AI-powered issue investigation."""
    click.echo(f"Investigating: {issue}")

    # Search codebase
    results = search_code(issue)

    # AI analysis
    analysis = openai.chat.completions.create(
        model="gpt-4o",
        messages=[{
            "role": "user",
            "content": f"Investigate this issue: {issue}\n\nCode context:\n{results}"
        }]
    )

    click.echo(analysis.choices[0].message.content)

@cli.command()
@click.argument('file_path')
def explain(file_path):
    """Explain code in a file."""
    code = read_file(file_path)
    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=[{
            "role": "user",
            "content": f"Explain this code:\n\n{code}"
        }]
    )
    click.echo(response.choices[0].message.content)
```

## Best Practices

1. **Error handling**: AI calls can fail, always handle gracefully
2. **Cost control**: Monitor token usage in scripts
3. **Rate limiting**: Respect API rate limits
4. **Caching**: Cache AI responses when appropriate
5. **Logging**: Log all AI interactions for debugging
6. **Timeouts**: Set appropriate timeouts for AI calls
7. **Fallbacks**: Have fallback when AI is unavailable

## Relación con otros conceptos

- MCP: [[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]
- Herramientas: [[../07-IA-Software/21-ai-tools-ecosystem|Ecosistema de Herramientas]]
- DevOps: [[../07-IA-Software/23-ai-devops-integration|IA en DevOps]]
- Agentes: [[../07-IA-Software/14-agentes-ia-vision-general|Agentes de IA]]
