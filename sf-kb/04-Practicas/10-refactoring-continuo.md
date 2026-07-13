---
title: "Refactoring continuo"
tags:
  - sf/practicas
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Prácticas y Estándares"
aliases:
  - "Refactoring"
  - "code smells"
  - "continuous refactoring"
  - "tech debt budget"
related:
  -  "./02-clean-code|Clean Code"
  -  "./01-coding-standards|Coding standards"
  -  "./03-test-driven-development|TDD"
  -  "./11-definition-of-done|DoD"
  -  "./05-pair-programming|Pair programming"
  -  "../03-Procesos/agile-methodology|Agile"
  -  "../05-Herramientas/code-quality|Code quality tools"
  -  "../06-Metricas/td-metrics|TD metrics"
  -  "../01-Fundamentos/computer-science-basics|CS basics"
  -  "./06-code-review-best-practices|Code Review"

---

# Refactoring continuo

## Introducción

Refactoring es el proceso de modificar el código interno sin cambiar su comportamiento externo, con el objetivo de mejorar su estructura, legibilidad y mantenibilidad.

## Code smells

| Smell | Descripción | Solución |
|-------|-------------|----------|
| Long method | Método con más de 20-30 líneas | Extract method |
| large class | Clase con múltiples responsabilidades | Extract class |
| duplicated code | Fragmentos idénticos | Extract method / Use generics |
| Primitive obsession | usar tipos primitivos en vez de objetos | Replace primitives with value objects |
| long parameter list | más de 3-4 argumentos | Introduce parameter object |
| feature envy | un método accede más a datos de otra clase que de la suya | Move method |
| lazy class | clase que no aporta suficiente | Remove/Inline class |
| speculative generality | abstracciones innecesarias | Remove hierarchy |
| message chain | múltiples get() encadenados | Hide delegate |
| middle man | una clase que solo delega | Remove middle man |

## Refactoring patterns

| pattern | description | applies to |
|---------|-------------|----------|
| Extract method | Small steps in a method | Almost any code |
| Rename variable | improve clarity | Many |
| Move field | from one class to another | Authority fit |
| Replace conditional with polymorphism | long if/switch chains | OOP |
| Decompose conditional | split complex condition | Functional|
| introduce parameter object | replace long param list | OOP |

### Example

```java
// smelly
double getTotal() {
  double result = price * quantity;
  if (discount > 0) result *= (1 - discount);
  if (tax > 0) result *= (1 + tax);
  if (shipping > 0) result += shipping;
  return result;
}

// refactored
double getSubtotal() { return price * quantity; }
double applyDiscount(double subtotal) { return discount > 0 ? subtotal * (1 - discount) : subtotal; }
double applyTax(double amount) { return tax > 0 ? amount * (1 + tax) : amount; }
double addShipping(double amount) { return amount + shipping; }

double getTotal() {
  return addShipping(applyTax(applyDiscount(getSubtotal())));
}
```

## Refactoring cadence

| frequency | scale | method |
|-----------|-------|--------|
| every day | functions/variables | refactory as part of daily TDD cycle |
| per feature | files/classes | code cleanup in feature branches |
| per quarter | entire module/component | dedicated refactoring sprint |
| per milestone | architecture/domain significant | ad-hoc RFC/ADR needed |

## Tech debt budget

| % of sprint | activity |
|-------------|----------|
| ≤ 20% | refactoring debt |
| ≤ 10% | improvement of tooling |
| ≤ 5% | eliminating speculation concers |

## The Boy/Girl scout rule

> Leave the code better than you found it.

Each change you make, you must improve the code a little.

## Important points

| Do | Don't |
|----|-------|
| refact only when there is a test | refactor code without tests |
| commit separately from features | mix refactor with feature commits |
| prefer small and frequent refactors | plan refactor 2 months ahead |

## Related

- [Clean Code](./02-clean-code) — Principles supporting refactoring
- [TDD](./03-test-driven-development) — Safe refactoring foundation
- [Code review](./06-code-review.md) — Catches smells (smells)
- [Definition of Done](./11-definition-of-done) — DoD
- [Code Quality] (../06-Metricas/code-quality-metrics)
