---
title: "Generación de Tests con IA"
tags:
  - sf/ia-software
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "AI Test Generation"
  - "AI Testing"
related:
  - "[[../07-IA-Software/03-generacion-codigo|Generación de Código]]"
  - "[[../05-Herramientas/10-ai-testing-tools|AI Testing Tools]]"
  - "[[../08-Calidad-Seguridad/README|Calidad y Seguridad]]"
---

# Generación de Tests con IA

La IA ha automatizado parte del proceso de testing, desde generar unit tests hasta detectar gaps en cobertura. Este artículo cubre técnicas, herramientas y limitaciones.

## Áreas de AI Testing

```
┌─────────────────────────────────────────────┐
│           AI EN TESTING                      │
├─────────────┬───────────────┬───────────────┤
│  GENERACIÓN │  ANÁLISIS     │  EJECUCIÓN    │
│             │               │               │
│ Unit tests  │ Coverage gaps │ Flaky detect  │
│ Integration │ Mutation score│ Auto-heal     │
│ E2E tests   │ Test quality  │ Visual regress│
│ Property    │ Risk analysis │ Performance   │
└─────────────┴───────────────┴───────────────┘
```

## Generación de Unit Tests

### Ejemplo: Test generado por AI

```python
# Código fuente
def calculate_discount(price: float, tier: str) -> float:
    """Calculate discount based on customer tier."""
    discounts = {"bronze": 0.05, "silver": 0.10, "gold": 0.20}
    if price < 0:
        raise ValueError("Price cannot be negative")
    if tier not in discounts:
        raise ValueError(f"Unknown tier: {tier}")
    return price * discounts[tier]

# AI-generated tests
import pytest

class TestCalculateDiscount:
    def test_bronze_discount(self):
        assert calculate_discount(100, "bronze") == 5.0

    def test_silver_discount(self):
        assert calculate_discount(100, "silver") == 10.0

    def test_gold_discount(self):
        assert calculate_discount(100, "gold") == 20.0

    def test_negative_price_raises_error(self):
        with pytest.raises(ValueError, match="negative"):
            calculate_discount(-10, "bronze")

    def test_unknown_tier_raises_error(self):
        with pytest.raises(ValueError, match="Unknown tier"):
            calculate_discount(100, "platinum")

    def test_zero_price(self):
        assert calculate_discount(0, "gold") == 0.0

    def test_large_price(self):
        assert calculate_discount(1_000_000, "silver") == 100_000.0

    def test_decimal_price(self):
        assert calculate_discount(99.99, "gold") == pytest.approx(19.998)
```

### Calidad de tests generados

| Aspecto | AI Generated | Human Written |
|---------|-------------|---------------|
| Happy path coverage | Excelente | Buena |
| Edge cases | Parcial | Depende de experiencia |
| Error cases | Buena | Variable |
| Performance tests | Rara vez | Cuando se requiere |
| Business logic tests | Débil | Fuerte |
| Test readability | Alta | Variable |
| Setup/teardown | Parcial | Completo |

## Tipos de Tests Generados por AI

### 1. Unit Tests

```
Input:  Function implementation
Output: Test file con happy path + edge cases

Herramientas:
- Copilot (inline test generation)
- CodiumAI (automatic test creation)
- Diffblue Cover (Java, auto unit tests)
```

### 2. Integration Tests

```
Input:  API endpoints, database schemas
Output: Integration tests con fixtures

Herramientas:
- Copilot Chat (custom prompts)
- Postbot (Postman AI assistant)
- Custom agents con MCP
```

### 3. E2E Tests

```
Input:  User stories, page descriptions
Output: Playwright/Cypress scripts

Herramientas:
- Testim (AI-powered E2E)
- Mabl (intelligent test automation)
- Applitools (visual AI)
```

### 4. Property-based Tests

```haskell
-- AI puede sugerir properties para property-based testing

-- Código fuente
-- reverse :: [a] -> [a]

-- AI-generated properties:
-- prop_reverse_idempotent: reverse(reverse(xs)) == xs
-- prop_reverse_length: length(reverse(xs)) == length(xs)
-- prop_reverse_head: head(reverse(xs)) == last(xs)
```

## Mutation Testing con AI

### ¿Qué es mutation testing?

```
┌──────────────────────────────────────────┐
│  Source Code: if (x > 0) return x;       │
│                                          │
│  Mutants:                               │
│  M1: if (x >= 0) return x;  (>=)       │
│  M2: if (x > 0) return 0;   (return 0) │
│  M3: if (x < 0) return x;   (<)        │
│                                          │
│  Tests:                                 │
│  T1: test_positive() → kills M1         │
│  T2: test_negative() → kills M3         │
│  T3: test_zero()     → kills M1, M2     │
│                                          │
│  Mutation score: 3/3 mutants killed = 100%│
└──────────────────────────────────────────┘
```

### AI en mutation testing

| Función | Descripción |
|---------|-------------|
| Suggest mutations | AI propone mutantes inteligentes |
| Kill analysis | Explica por qué tests no matan mutantes |
| Test improvement | Sugiere tests para matar mutantes vivos |
| Risk prioritization | Prioriza mutantes por impacto |

### Herramientas

| Tool | Lenguaje | AI Feature |
|------|----------|------------|
| Stryker | JS/TS/C# | Mutation score analysis |
| Pitest | Java | AI-assisted test generation |
| mutmut | Python | Mutation testing + analysis |
| Cosmic Ray | Python | Parallel mutation testing |

## Coverage Analysis con AI

### Gap detection

```
AI Analysis:
┌─────────────────────────────────────┐
│  Coverage: 78%                       │
│                                      │
│  Uncovered paths:                    │
│  ⚠ processPayment() → error branch  │
│  ⚠ validateUser() → timeout case    │
│  ⚠ calculateTax() → edge case       │
│                                      │
│  Suggested tests:                    │
│  → Test payment with declined card   │
│  → Test user validation timeout      │
│  → Test tax with zero amount         │
└─────────────────────────────────────┘
```

### Coverage tools con AI

| Tool | Feature |
|------|---------|
| Coverage.py + AI | Gap analysis + suggestions |
| Istanbul + Copilot | Inline coverage improvement |
| SonarQube AI | Quality gate + AI insights |
| Codecov AI | PR coverage analysis |

## Best Practices

### Para equipos

1. **AI como complemento**: No reemplaza testing humano
2. **Review siempre**: Tests AI pueden tener falsos positivos
3. **Métricas**: Medir mutation score, no solo line coverage
4. **Custom prompts**: Entrenar AI en patrones del proyecto
5. **CI integration**: Auto-generate tests en PRs

### Prompt template para test generation

```
Write comprehensive tests for this [language] function:
[paste code]

Requirements:
- Use [testing framework]
- Cover happy path, edge cases, and error scenarios
- Use descriptive test names
- Include setup/teardown if needed
- Follow AAA pattern (Arrange, Act, Assert)
- Add comments explaining complex assertions
- Target [coverage goal]% coverage
```

## Herramientas Comparison

| Tool | Auto-gen | Mutation | Coverage | AI quality |
|------|----------|----------|----------|------------|
| Copilot | ✅ | ❌ | ❌ | Media |
| CodiumAI | ✅ | ❌ | ✅ | Alta |
| Diffblue | ✅ | ❌ | ✅ | Alta (Java) |
| Mabl | ✅ | ❌ | ✅ | Media |
| Testim | ✅ | ❌ | ✅ | Media |
| Stryker | ❌ | ✅ | ✅ | N/A |

Referencia: [[../05-Herramientas/10-ai-testing-tools|AI Testing Tools — Comparison completa]]

## Relación con otros conceptos

- Código fuente: [[../07-IA-Software/03-generacion-codigo|Generación de Código]]
- Calidad: [[../08-Calidad-Seguridad/README|Calidad y Seguridad]]
- Herramientas: [[../05-Herramientas/04-herramientas-testing|Herramientas de Testing]]
- Métricas: [[../06-Metricas/README|Métricas de productividad]]
- Shift-left: [[../01-Fundamentos/08-shift-left|Shift-Left]]
