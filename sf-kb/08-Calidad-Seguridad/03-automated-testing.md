---
title: "Testing Automatizado"
tags:
  - sf/calidad
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Calidad y Seguridad"
aliases:
  - "Automated Testing"
  - "Test Automation"
related:
  - "[[02-testing-piramide|Pirámide de Testing]]"
  - "[[11-quality-gates|Quality Gates]]"
  - "[[../09-DevOps/01-pipelines|Pipelines]]"
---

# Testing Automatizado

## Frameworks por Lenguaje

### JavaScript/TypeScript

| Framework | Tipo | Ventajas | Uso |
|-----------|------|----------|-----|
| **Jest** | Unit/Integration | Zero config, snapshots | React, Node.js |
| **Vitest** | Unit/Integration | ESM, rápido | Vite projects |
| **Cypress** | E2E | Debugging, DX | Frontend |
| **Playwright** | E2E | Multi-browser, parallel | Full-stack |

```javascript
// Jest: Unit test
describe('Calculator', () => {
  it('adds numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
  });
});

// Playwright: E2E test
test('user can login', async ({ page }) => {
  await page.goto('/login');
  await page.fill('[data-testid="email"]', 'user@test.com');
  await page.fill('[data-testid="password"]', 'pass123');
  await page.click('[data-testid="submit"]');
  await expect(page).toHaveURL('/dashboard');
});
```

### Python

| Framework | Tipo | Ventajas | Uso |
|-----------|------|----------|-----|
| **pytest** | Unit/Integration | Fixtures, plugins | General |
| **Selenium** | E2E | Multi-language | Web apps |
| **Playwright** | E2E | Async, modern | Web apps |

```python
# pytest: Unit test
def test_user_creation():
    user = User(name="Test", email="test@test.com")
    assert user.is_valid() == True

# pytest: Integration test with fixtures
@pytest.fixture
def database():
    db = create_test_database()
    yield db
    db.cleanup()

def test_insert_user(database):
    user = User(name="Test")
    database.insert(user)
    assert database.get(user.id) is not None
```

### Java

| Framework | Tipo | Ventajas | Uso |
|-----------|------|----------|-----|
| **JUnit 5** | Unit/Integration | Standard, extensions | Enterprise |
| **Mockito** | Unit (mocks) | Mocking framework | Any Java |
| **Selenium** | E2E | Multi-browser | Web apps |
| **RestAssured** | Integration | API testing | REST APIs |

```java
// JUnit 5: Unit test
@Test
void shouldCalculateTotal() {
    Order order = new Order();
    order.addItem(new Item("Widget", 10.0));
    assertEquals(10.0, order.getTotal(), 0.001);
}

// RestAssured: Integration test
@Test
void shouldReturnUser() {
    given()
        .contentType(ContentType.JSON)
    .when()
        .get("/api/users/1")
    .then()
        .statusCode(200)
        .body("name", equalTo("John"));
}
```

## Estrategias de Testing

### Test Data Management
```yaml
# factory_bot.yml
user:
  name: "Test User"
  email: "test@example.com"
  role: "admin"

product:
  name: "Test Product"
  price: 29.99
  sku: "TEST-001"
```

### Mocking y Stubbing
```javascript
// Jest: Mocking
jest.mock('./emailService');
emailService.send.mockResolvedValue({ success: true });

// Spy
const spy = jest.spyOn(logger, 'error');
await service.process();
expect(spy).toHaveBeenCalledWith('Error occurred');
```

### Parallel Execution
```yaml
# playwright.config.ts
export default {
  workers: 4,  // Parallel tests
  retries: 2,  // Retry flaky tests
  use: {
    baseURL: 'http://localhost:3000'
  }
};
```

## CI/CD Integration

```yaml
# GitHub Actions example
test:
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
    - run: npm ci
    - run: npm run test:unit
    - run: npm run test:integration
    - run: npm run test:e2e
    - uses: actions/upload-artifact@v4
      with:
        name: test-results
        path: test-results/
```

## Métricas de Automatización

| Métrica | Target | Descripción |
|---------|--------|-------------|
| Code Coverage | > 80% | Líneas ejecutadas |
| Test Pass Rate | > 95% | Tests que pasan |
| Mean Test Time | < 5min | Tiempo promedio |
| Flakiness Rate | < 2% | Tests inestables |

## Ver también

- [[02-testing-piramide|Pirámide de Testing]]
- [[04-performance-testing|Performance Testing]]
- [[05-security-testing|Security Testing]]
- [[11-quality-gates|Quality Gates]]
- [[../09-DevOps/01-pipelines|Pipelines CI/CD]]
