---
title: "Herramientas de Testing"
tags:
  - sf/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Herramientas y Tecnología"
aliases:
  - "Testing Tools"
  - "QA Tools"
  - "Automated Testing"
related:
  - "[[../04-Practicas/README|Prácticas de Testing]]"
  - "[[02-herramientas-ci-cd]]"
  - "[[../06-Metricas/README|Métricas]]"
---

## Visión General

Las herramientas de testing automatizado son pilares de la [[../04-Practicas/README|calidad de software]]. Cada tipo de test tiene herramientas optimizadas, y la elección correcta depende del stack tecnológico, layer de testing y contexto del equipo.

## Testing Pyramid

```
         /\
        /  \        E2E Tests (pocos, lentos, caros)
       /    \
      /------\      Integration Tests (medios)
     /        \
    /----------\    Unit Tests (muchos, rápidos, baratos)
   /____________\
```

## Unit Testing Frameworks

### JavaScript/TypeScript: Jest vs Vitest

| Feature | Jest | Vitest |
|---------|------|--------|
| Speed | Medio | ✅✅ Rápido (Vite) |
| Compatibility | ✅✅ Universal | ✅ Growing |
| Watch mode | ✅ | ✅✅ |
| ESM support | ⚙️ Config | ✅✅ Native |
| UI testing | ✅ Jest DOM | ✅ Happy DOM |
| Snapshot | ✅ | ✅ |
| Coverage | ✅ | ✅ |
| API Compatible | — | Jest-compatible |

**Recomendación**: Vitest para proyectos nuevos con Vite; Jest para existentes.

### Java: JUnit 5 + Mockito

| Feature | Detalle |
|---------|---------|
| Annotations | `@Test`, `@BeforeEach`, `@AfterEach` |
| Parameterized | `@ParameterizedTest` |
| Nested | `@Nested` for test grouping |
| Extensions | `@ExtendWith` |
| Mocking | Mockito integration |
| Assertions | AssertJ preferred over built-in |

### Python: pytest

| Feature | Detalle |
|---------|---------|
| Fixtures | `@pytest.fixture` — scoped, parametrized |
| Parametrize | `@pytest.mark.parametrize` |
| Plugins | 800+ (xdist, cov, mock, httpx) |
| Assertions | Plain `assert` with diff output |
| Coverage | `pytest-cov` |
| Markers | `@pytest.mark.slow`, custom |

**Ventaja clave**: Fixtures system es superior a unittest setUp/tearDown.

## Integration Testing

### API Testing

| Herramienta | Tipo | Lenguaje |
|-------------|------|----------|
| **REST Assured** | Library | Java |
| **httpx / requests** | Library | Python |
| **Supertest** | Library | Node.js |
| **Postman/Newman** | CLI/Collection | Any |
| **Karate** | DSL | Any (Gherkin) |

### Database Testing

| Herramienta | Uso |
|-------------|-----|
| **Testcontainers** | Spin up real DBs in Docker |
| **H2** | In-memory DB for Java |
| **Faker** | Data generation |
| **DBUnit** | Dataset management |

```java
// Testcontainers example
@Testcontainers
class UserRepositoryTest {
    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("15");

    @Test
    void shouldSaveUser() {
        // Test with real PostgreSQL instance
    }
}
```

## E2E / UI Testing

### Comparison Matrix

| Feature | Cypress | Playwright | Selenium | Puppeteer |
|---------|---------|------------|----------|-----------|
| Speed | ✅✅ | ✅✅ | ⚙️ | ✅ |
| Multi-browser | ⚙️ (WebKit beta) | ✅✅ | ✅✅ | ❌ (Chrome) |
| Multi-language | ❌ (JS only) | ✅✅ | ✅✅ | ❌ (JS) |
| Auto-wait | ✅✅ | ✅✅ | ❌ | ⚙️ |
| Network intercept | ✅ | ✅✅ | ⚙️ | ✅ |
| Parallel execution | ✅ (paid) | ✅✅ (free) | ⚙️ | ⚙️ |
| Component testing | ✅ | ✅ | ❌ | ❌ |
| Learning curve | Baja | Media | Alta | Media |
| Mobile testing | ❌ | ✅ (Appium) | ✅ (Appium) | ❌ |
| Visual regression | ⚙️ (plugins) | ✅ (toHaveScreenshot) | ⚙️ | ⚙️ |
| Debugging | ✅✅ Time-travel | ✅ Trace Viewer | ⚙️ | ⚙️ |

### Cypress

**Best for**: Frontend apps, component testing, developer experience.

```javascript
describe('Login', () => {
  it('should login successfully', () => {
    cy.visit('/login')
    cy.get('[data-cy=username]').type('user@test.com')
    cy.get('[data-cy=password]').type('password')
    cy.get('[data-cy=submit]').click()
    cy.url().should('include', '/dashboard')
  })
})
```

### Playwright

**Best for**: Multi-browser testing, API testing, complex scenarios.

```python
# Playwright Python example
def test_login(page):
    page.goto("/login")
    page.fill("[data-cy=username]", "user@test.com")
    page.fill("[data-cy=password]", "password")
    page.click("[data-cy=submit]")
    assert "/dashboard" in page.url
```

### Selenium

**Best for**: Legacy systems, wide browser support, established teams.

## Visual Regression Testing

| Herramienta | Tipo | Integración |
|-------------|------|-------------|
| **Chromatic** | Cloud | Storybook |
| **Percy** | Cloud | Any |
| **Playwright** | Built-in | Playwright |
| **BackstopJS** | Local | Any |
| **loki** | Local | Storybook |

## Performance Testing

| Herramienta | Tipo | Uso |
|-------------|------|-----|
| **k6** | Load testing | API, web, microservices |
| **JMeter** | Load testing | Enterprise, protocol-level |
| **Lighthouse** | Performance audit | Web vitals |
| **Artillery** | Load testing | Modern, config-driven |
| **Locust** | Load testing | Python-based, distributed |

## Test Management

| Herramienta | Tipo | Precio |
|-------------|------|--------|
| **TestRail** | Test management | Paid |
| **Zephyr** | Jira plugin | Paid |
| **qTest** | Enterprise | Paid |
| **Xray** | Jira native | Paid |
| **Manual markdown** | Low-tech | Free |

## Coverage Tools

| Herramienta | Lenguaje | Target |
|-------------|----------|--------|
| **Istanbul/nyc** | JS/TS | > 80% |
| **coverage.py** | Python | > 85% |
| **JaCoCo** | Java | > 80% |
| **Codecov** | Any | Dashboard |
| **Coveralls** | Any | Dashboard |

Referencia: [[../06-Metricas/README|Métricas de coverage]]

## Decision Framework

```
Frontend JS/TS + Vite?         → Vitest + Playwright
Frontend React legacy?         → Jest + Cypress
Java Spring Boot?              → JUnit 5 + Mockito + Testcontainers
Python/Django/FastAPI?         → pytest + httpx
Multi-language enterprise?     → Selenium Grid + k6
API-first microservices?       → Karate + k6
```

## Integración con CI/CD

- Ejecutar unit tests en cada commit
- Integration tests en PR
- E2E tests en staging deployment
- Performance tests weekly o pre-release
- Referencia: [[02-herramientas-ci-cd|Pipelines CI/CD]]

## Recursos

- Cypress Docs: https://docs.cypress.io
- Playwright: https://playwright.dev
- pytest: https://docs.pytest.org
- JUnit 5: https://junit.org/junit5/
- k6: https://k6.io/docs/
