---
title: "Prompt Engineering para Desarrolladores"
tags:
  - sf/ia-software
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "Prompt Engineering"
  - "AI Prompting for Devs"
related:
  - "[[../07-IA-Software/03-generacion-codigo|Generación de Código]]"
  - "[[../07-IA-Software/08-ai-pair-programming|AI Pair Programming]]"
  - "[[../07-IA-Software/14-agentes-ia-vision-general|Agentes de IA]]"
---

# Prompt Engineering para Desarrolladores

Prompt engineering es la habilidad de comunicarse efectivamente con LLMs para obtener resultados de calidad. Para developers, es una skill esencial en la era de AI.

## Fundamentos

### Anatomía de un buen prompt

```
┌─────────────────────────────────────────────┐
│           STRUCTURE DE UN PROMPT             │
├─────────────────────────────────────────────┤
│                                              │
│  1. CONTEXTO     → What are we building?    │
│  2. TAREA        → What should the AI do?   │
│  3. RESTRICCIONES → Constraints & rules     │
│  4. FORMATO      → Expected output format   │
│  5. EJEMPLOS     → Few-shot if needed       │
│                                              │
└─────────────────────────────────────────────┘
```

### Prompt hierarchy (de peor a mejor)

```
❌ Bad:  "Write a function"
⚠️ OK:   "Write a Python function to validate emails"
✅ Good: "Write a Python function using regex to validate
         emails per RFC 5322. Include type hints,
         docstring, and handle edge cases. Use pytest
         for tests."
✅ Great: "Context: We're building a user registration API.
          Task: Write a validate_email() function in Python.
          Constraints:
          - Must support RFC 5322 format
          - Max 254 characters
          - Use email-validator library (already in deps)
          - Type hints required
          - Follow project style (see .flake8)
          Output: Function + 5 test cases
          Example: validate_email('user@domain.com') → True"
```

## Técnicas Avanzadas

### 1. Chain of Thought (CoT)

```
❌ "What's wrong with this code?"
✅ "Analyze this code step by step:
    1. First, identify the input validation
    2. Check error handling paths
    3. Look for race conditions
    4. Verify database transaction safety
    Then suggest fixes for each issue found."
```

### 2. Few-shot Learning

```
❌ "Create a React component for a user card"

✅ "Create a React component for a user card.
    Follow this pattern from our codebase:

    // Existing component (Button.tsx):
    interface ButtonProps {
      variant: 'primary' | 'secondary';
      size: 'sm' | 'md' | 'lg';
      onClick: () => void;
      children: React.ReactNode;
    }

    export const Button: React.FC<ButtonProps> = ({ variant, size, onClick, children }) => {
      return <button className={`btn btn-${variant} btn-${size}`}>{children}</button>;
    };

    // Now create UserCard following the same patterns."
```

### 3. Role-based prompting

```
"You are a senior security engineer reviewing this code.
Focus on OWASP Top 10 vulnerabilities.
Be critical and thorough. Don't sugarcoat issues.
Rate each finding: Critical, High, Medium, Low."
```

### 4. Constraint-based prompting

```
"When implementing this API:
- Use TypeScript strict mode
- No `any` types allowed
- Maximum function length: 20 lines
- Must handle all error cases
- Use Zod for validation
- Follow our naming conventions: camelCase for functions, PascalCase for types
- All public functions need JSDoc"
```

### 5. Iterative refinement

```
Round 1: "Create a REST API for todos"
Round 2: "Add authentication with JWT"
Round 3: "Add input validation with Zod"
Round 4: "Add error handling middleware"
Round 5: "Write integration tests"
Round 6: "Optimize the database queries"
```

## Templates por Tarea

### Bug investigation

```
## Bug Report
**Symptom:** [What's happening]
**Expected:** [What should happen]
**Reproduce:** [Steps to reproduce]
**Context:**
- Language/Framework: [X]
- Environment: [dev/staging/prod]
- Recent changes: [if any]
- Error logs: [paste relevant logs]

## Code in question
[paste code]

Please:
1. Identify the root cause
2. Explain why it happens
3. Suggest a fix with code
4. Suggest how to prevent similar bugs
```

### Architecture decision

```
## Context
We need to [requirement].
Current stack: [technologies]
Scale: [users/requests]
Constraints: [budget, timeline, team skills]

## Options to evaluate
1. [Option A]
2. [Option B]
3. [Option C]

## Please analyze
- Pros/cons of each
- Scalability implications
- Team adoption complexity
- Cost estimate
- Your recommendation with reasoning
```

### Refactoring request

```
## Current code
[paste code]

## Problems identified
- [ ] Too complex (cyclomatic complexity: X)
- [ ] Duplicated logic
- [ ] Missing error handling
- [ ] Poor testability

## Refactoring goals
- Reduce complexity to < 10
- Follow SRP
- Add comprehensive error handling
- Maintain 100% backward compatibility
- Add tests

## Output format
1. Refactored code with comments
2. Explanation of changes
3. Test cases
4. Migration notes (if API changes)
```

## Custom Instructions

### Project-level instructions

```markdown
# .github/copilot-instructions.md
# or .cursorrules

## Stack
- TypeScript, React, Node.js
- PostgreSQL with Prisma
- Zod for validation
- Vitest for testing

## Conventions
- Functional components only
- Early returns over nesting
- Named exports preferred
- Descriptive variable names
- No barrel files

## Architecture
- Feature-based structure
- Shared kernel pattern
- CQRS for complex domains

## Code style
- 2-space indent
- Single quotes
- No semicolons
- Trailing commas
```

### Per-task instructions

```
When writing tests:
- Use AAA pattern (Arrange, Act, Assert)
- One assertion per test (when possible)
- Descriptive test names: should_X_when_Y
- Mock external dependencies
- Test both success and failure paths
- Include edge cases: empty, null, boundary values
```

## Errores Comunes

| Error | Ejemplo | Mejor approach |
|-------|---------|----------------|
| Vague prompt | "Fix this" | "Fix the null pointer in line 23" |
| Too much context | Paste entire repo | Relevant files only |
| No examples | "Follow our style" | Show existing code |
| No constraints | "Write a function" | Add constraints |
| Single shot | One prompt only | Iterate and refine |
| No testing | "Write code" | "Write code + tests" |

## Prompts para Agentes

```
# Para un agente de code review
"You are reviewing PR #142.
Analyze for:
1. Security vulnerabilities (OWASP Top 10)
2. Performance issues
3. Code quality (SOLID, DRY)
4. Test coverage gaps
5. Documentation needs

For each issue:
- Severity: Critical/High/Medium/Low
- File and line reference
- Suggested fix
- Confidence level (1-5)"
```

Referencia: [[../07-IA-Software/14-agentes-ia-vision-general|Agentes de IA]]

## Relación con otros conceptos

- Código: [[../07-IA-Software/03-generacion-codigo|Generación de Código]]
- Pair programming: [[../07-IA-Software/08-ai-pair-programming|AI Pair Programming]]
- Agentes: [[../07-IA-Software/14-agentes-ia-vision-general|Agentes de IA]]
- MCP: [[../07-IA-Software/19-mcp-protocol|Model Context Protocol]]
