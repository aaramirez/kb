---
title: "Análisis de Código con IA"
tags:
  - sf/ia-software
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "AI Code Review"
  - "AI Code Analysis"
related:
  - "[[../05-Herramientas/11-ai-code-review|AI Code Review Tools]]"
  - "[[../07-IA-Software/11-ai-security-scanning|IA en Seguridad]]"
  - "[[../08-Calidad-Seguridad/README|Calidad y Seguridad]]"
---

# Análisis de Código con IA

El análisis de código con IA va desde code review automatizado hasta detección de vulnerabilidades y sugerencias de refactoring.

## Tipos de Análisis

```
┌──────────────────────────────────────────────┐
│         ANÁLISIS DE CÓDIGO CON IA            │
├──────────────┬───────────────┬───────────────┤
│  CODE REVIEW │  SEGURIDAD    │  REFACTORING  │
│              │               │               │
│ Style check  │ SAST          │ Code smells   │
│ Logic review │ Vulnerability │ Duplication   │
│ Best prac.   │ Compliance    │ Complexity    │
│ Architecture │ Secrets scan  │ Dead code     │
└──────────────┴───────────────┴───────────────┘
```

## AI Code Review

### ¿Qué analiza?

| Categoría | Qué busca | Ejemplo |
|-----------|-----------|---------|
| **Correctness** | Bugs lógicos, edge cases | Null pointer, off-by-one |
| **Security** | Vulnerabilidades OWASP | SQL injection, XSS |
| **Performance** | Ineficiencias | N+1 queries, O(n²) |
| **Maintainability** | Code smells | Duplicated code, god class |
| **Style** | Convenciones del equipo | Naming, formatting |
| **Architecture** | Design patterns | SOLID violations |

### Ejemplo de review

```
PR #142: Add user search endpoint

AI Review (CodeRabbit):
─────────────────────────────────────
✅ LGTM: Clean implementation

⚠️ Suggestion (security):
  Line 23: Direct string interpolation in query
  → Use parameterized query instead

⚠️ Suggestion (performance):
  Line 31: Missing database index hint
  → Add .index('email') for search field

💡 Info (maintainability):
  Line 45: Function too long (45 lines)
  → Extract validation logic to separate fn

✅ Tests: Good coverage (87%)
─────────────────────────────────────
```

### Herramientas de AI Code Review

| Tool | Type | Context | Pricing |
|------|------|---------|---------|
| CodeRabbit | PR review | Repo | $12/mes |
| PR-Agent (Codium) | PR review | Repo | OSS/Free |
| GitHub Copilot Review | PR review | Repo | $19-39/mes |
| SonarQube AI | Continuous | Codebase | Enterprise |
| Qodana AI | CI/CD | Codebase | Enterprise |

Referencia: [[../05-Herramientas/11-ai-code-review|AI Code Review Tools]]

## Detección de Vulnerabilidades

### OWASP Top 10 + AI

| Vulnerabilidad | Detección AI | Precisión |
|----------------|-------------|-----------|
| SQL Injection | Alta | 95%+ |
| XSS | Alta | 90%+ |
| Path Traversal | Media-Alta | 85%+ |
| SSRF | Media | 80%+ |
| Authentication bypass | Media | 75%+ |
| Business logic | Baja | 50%+ |
| Race conditions | Baja | 40%+ |

### Ejemplo: SQL Injection detection

```python
# ❌ Vulnerable code detected by AI
def get_user(name):
    query = f"SELECT * FROM users WHERE name = '{name}'"  # ⚠️ SQL Injection
    return db.execute(query)

# ✅ AI-suggested fix
def get_user(name):
    query = "SELECT * FROM users WHERE name = %s"
    return db.execute(query, (name,))
```

### AI SAST vs Traditional SAST

| Aspecto | Traditional SAST | AI-enhanced SAST |
|---------|-----------------|-------------------|
| False positives | Altos (30-50%) | Reducidos (10-20%) |
| Context awareness | Baja | Alta |
| Logic flaws | Débil | Mejorado |
| Custom patterns | Configuración manual | Aprendizaje |
| Speed | Muy rápido | Rápido |
| Coverage | Reglas estáticas | Adaptive |

Referencia: [[../07-IA-Software/11-ai-security-scanning|IA en Seguridad de Código]]

## Refactoring Suggestions

### Code smell detection

| Code Smell | AI Detection | Sugerencia |
|------------|-------------|------------|
| Long Method | Line count + complexity | Extract function |
| God Class | Responsibilities count | Split into SRP classes |
| Duplicated Code | AST similarity | Extract + DRY |
| Deep Nesting | Cyclomatic complexity | Early returns |
| Dead Code | Usage analysis | Remove |
| Magic Numbers | Constant detection | Named constants |
| Feature Envy | Method calls ratio | Move method |

### Ejemplo de refactoring suggestion

```
AI Analysis: src/services/UserService.ts

Code Smells Detected:
┌─────────────────────────────────────────────┐
│ 1. Long Method: processOrder() (120 lines)  │
│    → Extract: validateOrder()               │
│    → Extract: calculateTotal()              │
│    → Extract: applyDiscounts()              │
│    → Extract: processPayment()              │
│                                              │
│ 2. God Class: UserManager (15 methods)      │
│    → Split: UserCRUD, UserAuth, UserProfile │
│                                              │
│ 3. Duplicated: 3x email validation logic    │
│    → Extract: validateEmail() utility       │
└─────────────────────────────────────────────┘
```

### Architectural analysis

```
AI Architecture Review:
─────────────────────────────
Current Architecture: Layered (Controller → Service → Repository)

Issues:
⚠ Circular dependency: Service ↔ Repository
⚠ Missing abstraction: Direct DB in controllers
⚠ No error boundary: Exceptions leak to API

Suggestions:
→ Introduce Use Cases layer
→ Add Result/Either pattern
→ Create error handling middleware
→ Apply dependency inversion
```

Referencia: [[../07-IA-Software/09-ai-software-design|IA en Diseño y Arquitectura]]

## Métricas de Calidad con AI

### Dashboard example

```
┌─────────────────────────────────────────────┐
│  CODE QUALITY DASHBOARD (AI-Enhanced)        │
├─────────────────────────────────────────────┤
│                                              │
│  Maintainability:  ████████░░  78/100       │
│  Reliability:      █████████░  85/100       │
│  Security:         ███████░░░  72/100       │
│  Duplications:     ██░░░░░░░░  18%          │
│  Tech Debt:        3.2 days                  │
│                                              │
│  AI Suggestions: 14 (3 critical)            │
│  Auto-fixable:   8                          │
└─────────────────────────────────────────────┘
```

### Workflow de análisis

```
┌──────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│ Commit│───▶│ Pre-commit│───▶│ CI/CD    │───▶│ PR Review│
│       │    │ (local)  │    │ (auto)   │    │ (AI+human│
└──────┘    └──────────┘    └──────────┘    └──────────┘
               │               │               │
               ▼               ▼               ▼
          Lint + AI       Security scan    CodeRabbit
          suggestions     + quality gate   + approval
```

## Best Practices

1. **Multi-layered approach**: Combinar AI con herramientas tradicionales
2. **Custom rules**: Entrenar AI en estándares del equipo
3. **Incremental adoption**: Empezar con projects críticos
4. **Human in the loop**: AI sugiere, humano decide
5. **Feedback loop**: Enseñar al AI de decisiones pasadas
6. **Baseline metrics**: Medir antes/después de adoptar AI

## Relación con otros conceptos

- Seguridad: [[../07-IA-Software/11-ai-security-scanning|IA en Seguridad de Código]]
- Herramientas: [[../05-Herramientas/11-ai-code-review|AI Code Review Tools]]
- Calidad: [[../08-Calidad-Seguridad/README|Calidad y Seguridad]]
- Métricas: [[../06-Metricas/README|Métricas de productividad]]
- Code review: [[../03-Procesos/README|Procesos de revisión]]
