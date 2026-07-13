---
title: "La Pirámide de Testing"
tags:
  - sf/calidad
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Calidad y Seguridad"
aliases:
  - "Testing Pyramid"
  - "Pirámide de Testing"
related:
  - "[[01-qa-moderno|QA Moderno]]"
  - "[[03-automated-testing|Testing Automatizado]]"
  - "[[11-quality-gates|Quality Gates]]"
---

# La Pirámide de Testing

## Definición

La pirámide de testing es un modelo que define la proporción ideal de diferentes tipos de tests en un proyecto de software.

## Estructura de la Pirámide

```
        /\
       /  \        E2E Tests (pocos, lentos, caros)
      /    \
     /------\      Integration Tests (moderados)
    /        \
   /----------\    Unit Tests (muchos, rápidos, baratos)
  /____________\
```

## Tipos de Tests

### Unit Tests (Base)
- **Proporción**: 70% del total
- **Velocidad**: Milisegundos
- **Costo**: Bajo
- **Alcance**: Funciones, métodos aislados

```python
# Ejemplo: Unit test con pytest
def test_calculate_discount():
    product = Product(price=100)
    assert product.apply_discount(10) == 90

def test_calculate_discount_invalid():
    product = Product(price=100)
    with pytest.raises(ValueError):
        product.apply_discount(150)
```

### Integration Tests (Medio)
- **Proporción**: 20% del total
- **Velocidad**: Segundos
- **Costo**: Medio
- **Alcance**: Interacción entre componentes

```javascript
// Ejemplo: Integration test con Jest
describe('UserService', () => {
  it('should create user and send welcome email', async () => {
    const user = await userService.create({
      name: 'Test',
      email: 'test@example.com'
    });
    expect(user.id).toBeDefined();
    expect(emailService.sendWelcome).toHaveBeenCalledWith(user);
  });
});
```

### E2E Tests (Punta)
- **Proporción**: 10% del total
- **Velocidad**: Minutos
- **Costo**: Alto
- **Alcance**: Flujos completos de usuario

## Ice Cream Cone Anti-Pattern

```
        /\
       /  \        Unit Tests (pocos)
      /    \
     /------\      Manual Testing (muchos)
    /        \
   /----------\    E2E Tests (muchos)
  /            \   Unit Tests (pocos)
 /______________\
```

**Señales de alerta**:
- Más tests manuales que automatizados
- Tests E2E lentos y frágiles
- Poca cobertura de unit tests
- Builds que tardan horas

## Proporciones Recomendadas

| Tipo | Proporción | Velocidad | ROI |
|------|------------|-----------|-----|
| Unit | 70% | < 100ms | Alto |
| Integration | 20% | < 5s | Medio |
| E2E | 10% | < 60s | Bajo |

## Adaptaciones Modernas

### Testing Trophy (Kent C. Dodds)
```
        /\
       /  \        E2E
      /    \
     /------\      Integration (mayor proporción)
    /        \
   /----------\    Unit
  /            \
 /______________\
```

### Testing Diamond
Prioriza integration testing sobre unit testing.

## Ver también

- [[01-qa-moderno|QA Moderno]]
- [[03-automated-testing|Testing Automatizado]]
- [[04-performance-testing|Performance Testing]]
- [[11-quality-gates|Quality Gates]]
- [[12-defect-prevention|Prevención de Defectos]]
