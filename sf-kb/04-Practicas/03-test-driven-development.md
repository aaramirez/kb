---
title: "Test-Driven Development"
tags:
  - sf/practicas
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Prácticas y Estándares"
aliases:
  - "TDD"
  - "Red-Green-Refactor"
  - "Test-Driven"
related:
  - "[[./04-behavior-driven-development|BDD]]"
  - "[[./10-refactoring-continuo|Refactoring]]"
  - "[[./02-clean-code|Clean Code]]"
  - "[[../03-Procesos/README|Procesos Ágiles]]"
  - "[[../05-Herramientas/continuous-integration|CI/CD]]"
  - "[[../06-Metricas/code-quality-metrics|Code Quality Metrics]]"
  - "[[../01-Fundamentos/testing-fundamentals|Testing Fundamentals]]"
  - "[[11-definition-of-done|Definition of Done]]"
  - "[[06-code-review-best-practices|Code Review]]"
  - "[[../08-Calidad/READ-LINT|Calidad de código]]"
---

# Test-Driven Development

## ¿Qué es TDD?

TDD (Test-Driven Development) te pide escribir la prueba antes del código de producción. Sigue el ciclo red-green-refactor:

```
RED -> GREEN -> REFACTOR
```

1. **RED**: Escribir un test fallido que describa el comportamiento deseado.
2. **GREEN**: Escribir el mínimo código necesario para pasar el test.
3. **REFACTOR**: Mejorar el código sin cambiar el comportamiento.

```python
# RED step
def test_should_return_twenty_celsius():
    f = FahrenheitWeather()
    assert f.to_celsius(68) == 20

# GREEN step - simplest possible
class FahrenheitWeather():
    def to_celsius(self, f):
        return 20
```

## Beneficios clave

| Beneficio | Descripción |
|-----------|-------------|
| Diseño incremental | Foco en interfaces, no en implementación |
| Baja tasa de bugs | Hasta 40-80% menos según la literatura |
| Refactorización segura | Se puede cambiar todo con confianza |
| Documentación viva | Test, doc, y espec all in one |

## Ciclo completo

### Paso detallado

1. Añadir test pequeño
2. Ver que falla (RED)
3. Escribir el código más simple que hace pasar la prueba
4. Validar que pasa (GREEN)
5. Refacorizar manteniendo verde
6. Repetir

### Ejemplo de refactor

```javascript
// REFACTOR from GREEN
function fahrenheitToCelsius(f) {
  return 20;  // cheating, but GREEN
}
function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}
```

## Patrones comunes

| Patrón | Descripción |
|--------|-------------|
| Fake It ('til you make it) | Retorna constante falsa, ve generalizando |
| Triangulate | Con dos ejemplos, infieres la lógica |
| One to Many | Implementación de una a colecciones |
| Child Test | Caso padre se resuelve resolviendo hijos |

## Anti-patrones

- **Gran test**: probar la aplicación completa no es TDD
- **TDD for green (only)**: saltar la refactorización
- **Objetos Mock excesivos**: Acoplamiento a implementaciones
- **Test sin evolucionar**: los que nunca fallan

## Herramientas

| Language | Framework |
|----------|-----------|
| Python | pytest, unittest |
| TypeScript | Jest, Vitest |
| Java | JUnit 5 |
| Go | testing |
| C# | xUnit, NUnit |

## Relación con BDD

BDD es una extensión de TDD que usa lenguaje natural (Given-When-Then) para describir el comportamiento esperado. Ver [[04-behavior-driven-development]].

## Métricas asociadas

- Cobertura de código. Relacionado: [[06-Metricas/code-quality-metrics]].
- Time to feedback: mide cuánto tarda una iteración TDD desde rojo a verde.
- Número de fallos en PR abiertos: menos de 5% es buena señal.

## TDD en CI/CD

Los TDD se ejecutan en cada push. La pipeline CCecha si los test fallan:

```yaml
- name: TDD
  run: pytest tests/ --t da
- name: coverage
  run: pytest --cov=src tests/
```

TDD hace que la confianza del CI sea mucho mayor. Fomenta el refactoring continuo ([[10-refactoring-continuo]]).
