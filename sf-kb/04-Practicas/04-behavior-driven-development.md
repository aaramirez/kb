---
title: "Behavior-Driven Development"
tags:
  - sf/practicas
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
aliases:
  - "BDD"
  - "Gherkin"
  - "Given-When-Then"
  - "Cucumber"
  - "SpecFlow"
related:
  - "[[./03-test-driven-development|TDD]]"
  - "[[./02-clean-code|Clean Code]]"
  - "[[./11-definition-of-done|Definition of Done]]"
  - "[[./06-code-review-best-practices|Code Review]]"
  - "[[../03-Procesos/README|Procesos Ágiles]]"
  - "[[../05-Herramientas/ci-cd-pipelines|CI/CD Pipelines]]"
  - "[[../01-Fundamentos/testing-fundamentals|Testing Fundamentals]]"
  - "[[./07-documentacion-tecnca|Documentación técnica]]"
  - "[[06-code-review-best-practices|Code Review]]"
  - "[[../02-Estructura/README|Estructura de código]]"
category: "Prácticas y Estándares"
---


# Behavior-Driven Development

## Introducción

BDD es una metodología ágil que extiende TDD fomentando la colaboración entre desarrolladores, QA y stakeholders mediante la redacción de casos de prueba en un lenguaje legible en común.

## Gherkin Syntax

Gherkin es el lenguaje que permite describir el comportamiento del software en estructuras Given-When-Then.

```gherkin
Feature: User login
  Scenario: valid credentials login
    Given a registered user exists with email "user@example.com"
    And the user's password is "secret123"
    When the user logs in with email "user@example.com" and password "secret123"
    Then the system redirects to the dashboard
```

### Keywords

| Keyword | Descripción |
|---------|-------------|
| Feature | Título de la funcionalidad |
| Scenario | Caso específico |
| Given | Prerequisitos (context) |
| When | Acción llevada a cabo |
| Then | Resultado esperado |
| And / But | Conectores lógicos |

### Background and Scenario Outline

```gherkin
Background:
  Given there is a test database

Scenario Outline: calculator with <a> and <b>
  Given the input is <a> and <b>
  When they are added
  Then the result is <result>
  Examples:
    | a | b | result |
    | 1 | 2 | 3      |
    | 10| 1 | 11     |
```

## Herramientas principales

| Language | Tool |
|----------|------|
| Java / Kotlin | Cucumber, JGiven |
| C# / .NET | SpecFlow |
| JavaScript | cucumber-js |
| Python | Behave |
| Kotlin | JGiven |

## Idoneidad

BDD es especialmente útil para:

- Reglas de dominio complejo
- Integraciones con sistemas de terceros
- Validación de historias de usuario
- Escenarios largos de flujo completo

BDD no es necesario ni útil para:
- Pruebas unitarias simples
- Lógica puramente algorítmica

## Integración con CI

Ejecuta test BDD en integración continua:
```yaml
steps:
  - run: behave features/
```

## Ciclo de vida

1. Definir Feature file con el Product Owner
2. Redactar escenarios (Given-When-Then)
3. Automatizar steps con código
4. Ejecutar tests localmente
5. Agregar a CI suite

## Caso de ejemplo completo

```gherkin
Feature: Checkout
  As a customer
  I want to complete a purchase
  So that I can receive my items

  Scenario: successful purchase with credit card
    Given the user has items in their cart
    And the user's credit card is valid
    When the user proceeds to checkout
    Then the purchase is confirmed
    And the user receives an email
```

## BDD vs TDD

| Aspecto | TDD | BDD |
|---------|-----|-----|
| Audiencia | Desarrolladores | Todos (negocio, QA, Dev) |
| Lenguaje | Código | Gherkin (legible) |
| Foco | Componentes | Comportamiento de la aplicación |
| Herramientas | JUnit, Py Test | Cucumber, Behave |

## Beneficios

- Acoplar menos la prueba a la implementación
- Documentación siempre viva
- Cobertura de historias de usuario
- Mejor comunicación entre equipo y stakeholders

## Ver también

- [[03-test-driven-development]]: Fundamentos de TDD
- [[07-documentacion-tecnca]]: Documentación técnica ADR y RFC
- [[../06-Metricas/coverage-metrics|Coverage Metrics]]
