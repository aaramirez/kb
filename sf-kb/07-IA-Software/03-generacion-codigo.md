---
title: "Generación de Código con IA"
tags:
  - sf/ia-software
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "AI Code Generation"
  - "Code Generation"
related:
  - "[[../07-IA-Software/02-copilot-efecto|Copilot y Efecto Copilot]]"
  - "[[../07-IA-Software/04-ai-test-generation|Generación de Tests]]"
  - "[[../07-IA-Software/07-prompt-engineering-dev|Prompt Engineering]]"
---

# Generación de Código con IA

La generación de código con IA va más allá del autocomplete. Incluye técnicas, métricas de calidad y la necesidad imperativa de code review.

## Técnicas de Generación

### Autocomplete (inline completion)

```
┌───────────────────────────────────┐
│  function processData(items) {    │
│    const result = items.          │
│                        ▲          │
│              Ghost text: .map()   │
│              .filter().reduce()   │
└───────────────────────────────────┘
```

- **Trigger**: Continuación natural del código
- **Latencia**: < 300ms para ser útil
- **Contexto**: Archivo actual + archivos abiertos
- **Uso**: 60-70% de interacciones con AI

### Chat-based generation

```python
# Prompt: "Create a REST API endpoint for user registration
#          with email validation and password hashing"

# Output: Implementation completa con:
# - Route definition
# - Input validation (Zod/Joi)
# - Password hashing (bcrypt)
# - Error handling
# - Unit tests
```

- **Trigger**: Conversación con el LLM
- **Contexto**: Prompt + contexto de proyecto
- **Uso**: Funciones nuevas, refactoring, explicaciones

### Agentic multi-file generation

```
┌─────────────────────────────────────────────┐
│  "Add dark mode support to the application" │
│                                              │
│  Agent plan:                                │
│  1. Create ThemeContext.tsx                  │
│  2. Create ThemeProvider.tsx                 │
│  3. Update App.tsx                           │
│  4. Add theme toggle component               │
│  5. Update CSS variables                     │
│  6. Add unit tests                           │
│  7. Update documentation                     │
└─────────────────────────────────────────────┘
```

- **Trigger**: Tarea de múltiples archivos
- **Contexto**: Repo completo indexado
- **Uso**: Features completas, migrations

### Code transformation

```javascript
// Input: JavaScript callback-based code
fs.readFile('file.txt', function(err, data) {
  if (err) throw err;
  console.log(data);
});

// Prompt: "Convert to async/await with error handling"

// Output:
async function readFileAsync(path) {
  try {
    const data = await fs.promises.readFile(path, 'utf-8');
    console.log(data);
    return data;
  } catch (error) {
    console.error(`Error reading ${path}:`, error);
    throw error;
  }
}
```

## Calidad del Código Generado

### Métricas de calidad

| Métrica | AI-generated | Human-written | Nota |
|---------|-------------|---------------|------|
| Correctness | 70-85% | 90-95% | Requiere review |
| Readability | Alta | Variable | AI tiende a ser claro |
| Performance | Media | Variable | No optimiza edge cases |
| Security | Variable | Variable | Riesgo de patterns inseguros |
| Maintainability | Media | Variable | Puede ser over-engineered |
| Test coverage | Baja | Alta | AI no always testa |

### Code smells en código generado

| Problem | Ejemplo | Mitigación |
|---------|---------|------------|
| Over-engineering | Patrones innecesarios | Simplify prompt |
| Missing edge cases | No maneja null/empty | Explicit requirements |
| Outdated patterns | Callbacks en vez de async | Specify modern practices |
| Generic naming | `data`, `result`, `item` | Use descriptive comments |
| Missing error handling | No try/catch | Request error handling |
| Security holes | SQL injection, XSS | Security-focused prompts |

## El Flujo de Code Review para AI

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Generate │───▶│  Review  │───▶│  Test    │───▶│  Merge   │
│  (AI)     │    │  (Human) │    │  (Auto)  │    │  (CI/CD) │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
                      │
                      ▼
              ┌──────────────┐
              │  Checklist:  │
              │  □ Correct?  │
              │  □ Secure?   │
              │  □ Tested?   │
              │  □ Idiomatic?│
              │  □ Needed?   │
              └──────────────┘
```

### Code review checklist para código AI

1. **¿Es correcto?** — ¿Resuelve el problema planteado?
2. **¿Es seguro?** — ¿Maneja inputs maliciosos?
3. **¿Tiene tests?** — ¿Está cubierto por tests?
4. **¿Es idiomático?** — ¿Sigue convenciones del proyecto?
5. **¿Es necesario?** — ¿Agrega valor o es over-engineering?
6. **¿Es mantenible?** — ¿Fácil de entender y modificar?
7. **¿Es performant?** — ¿No introduce N+1 queries, etc.?

## Comparison: AI vs Human Code Generation

| Aspecto | AI | Humano |
|---------|-----|--------|
| **Velocidad** | Muy rápida | Variable |
| **Consistencia** | Alta (mismo prompt = mismo output) | Variable |
| **Creatividad** | Baja (repite patrones) | Alta |
| **Contexto de negocio** | Sin contexto | Entiende el domain |
| **Edge cases** | Frecuentemente omite | Depende de experiencia |
| **Innovación** | Copia soluciones existentes | Puede innovar |
| **Costo por línea** | Bajo | Alto |
| **Escalabilidad** | Lineal con prompts | Limitada por tiempo |

## Herramientas de Generación

| Herramienta | Tipo | Contexto | Multi-file |
|-------------|------|----------|------------|
| GitHub Copilot | IDE extension | Archivos abiertos | Workspace |
| Cursor Composer | AI-native IDE | Repo completo | ✅ |
| Cody + Commands | IDE extension | Code graph | ✅ |
| ChatGPT/Claude | Web/API | Prompt only | ❌ |
| Aider | CLI tool | Repo (git) | ✅ |
| Continue.dev | IDE extension | Configurable | Parcial |

Referencia: [[../05-Herramientas/09-ai-coding-assistants|AI Coding Assistants]]

## Prompt Templates para Code Generation

### Template: Nueva función

```
Create a [language] function called [name] that:
- Takes [parameters] as input
- Returns [output type]
- Should handle [edge cases]
- Use [library/framework] for [specific concern]
- Follow [pattern] pattern
- Include error handling for [scenarios]
- Add JSDoc/docstring comments
```

### Template: Refactoring

```
Refactor this [language] code:
[paste code]

Requirements:
- Apply [pattern] pattern
- Improve [specific concern]
- Maintain [constraint]
- Add [testing/documentation]
```

### Template: Bug fix

```
This code has a bug: [describe symptom]
[paste code]

Expected: [what should happen]
Actual: [what happens]
Debug and fix the issue. Explain root cause.
```

Referencia: [[../07-IA-Software/07-prompt-engineering-dev|Prompt Engineering para Devs]]

## Integración con el Pipeline

```
Developer → AI Generate → Human Review → Automated Tests → CI/CD → Deploy
    │            │              │               │             │
    │            │              │               │             │
    └────────────┴──────────────┴───────────────┴─────────────┘
                        Continuous feedback loop
```

## Relación con otros conceptos

- Testing: [[../07-IA-Software/04-ai-test-generation|Generación de Tests]]
- Review: [[../07-IA-Software/05-ai-code-analysis|Análisis de Código]]
- Prompting: [[../07-IA-Software/07-prompt-engineering-dev|Prompt Engineering]]
- Métricas: [[../07-IA-Software/13-ai-metrics-impact|Impacto en Métricas]]
- Limitaciones: [[../07-IA-Software/12-ai-limitaciones-riesgos|Limitaciones y Riesgos]]
- Herramientas: [[../05-Herramientas/09-ai-coding-assistants|AI Coding Assistants]]
