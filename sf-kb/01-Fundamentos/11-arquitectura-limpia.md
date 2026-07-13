---
title: "Arquitectura Limpia y Principios SOLID"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "Clean Architecture"
  - "Hexagonal Architecture"
  - "Ports & Adapters"
related:
  - "[[../01-Fundamentos/04-principios-ingenieria-software|Principios SOLID]]"
  - "[[../01-Fundamentos/12-monolito-microservicios|Monolito a Microservicios]]"
  - "[[../01-Fundamentos/10-conway-ley|Ley de Conway]]"
---

# Arquitectura Limpia y Principios SOLID

La **Arquitectura Limpia** (Clean Architecture), formalizada por Robert C. Martin, es un patrón de arquitectura de software que separa concerns en capas concéntricas, donde las dependencias apuntan siempre hacia adentro.

## El modelo de capas

```
┌─────────────────────────────────────────────┐
│              Frameworks & Drivers           │
│  ┌─────────────────────────────────────┐    │
│  │         Interface Adapters          │    │
│  │  ┌─────────────────────────────┐    │    │
│  │  │      Use Cases              │    │    │
│  │  │  ┌─────────────────────┐    │    │    │
│  │  │  │   Entities          │    │    │    │
│  │  │  │   (Domain)          │    │    │    │
│  │  │  └─────────────────────┘    │    │    │
│  │  └─────────────────────────────┘    │    │
│  └─────────────────────────────────────┘    │
└─────────────────────────────────────────────┘
```

## Las 4 capas

### 1. Entities (Domain)

El núcleo del sistema. Contiene las **entidades de negocio** y **reglas de negocio**.

- **Independiente** de cualquier framework
- **No tiene** dependencias externas
- **Contiene** la lógica de negocio pura
- **Cambia** solo por cambios en el negocio

```python
# Ejemplo de entity
class Order:
    def __init__(self, items: list[Item]):
        self.items = items
        self.status = "pending"

    def calculate_total(self) -> float:
        return sum(item.price * item.quantity for item in self.items)

    def approve(self):
        if self.status != "pending":
            raise InvalidOrderStatus()
        self.status = "approved"
```

### 2. Use Cases

Orquesta las entidades para realizar **operaciones específicas** del sistema.

- **Define** las operaciones disponibles
- **Usa** entidades y reglas de negocio
- **No sabe** de UI ni de persistencia
- **Cambia** por cambios en requisitos

```python
class CreateOrderUseCase:
    def __init__(self, order_repository: OrderRepository):
        self.order_repository = order_repository

    def execute(self, items: list[Item]) -> Order:
        order = Order(items)
        order.approve()
        self.order_repository.save(order)
        return order
```

### 3. Interface Adapters

Convierte datos entre las capas. Incluye:

- **Controllers**: reciben input del mundo externo
- **Presenters**: preparan output para la UI
- **Gateways**: adaptan interfaces de persistencia
- **Mappers**: transforman datos entre formatos

```python
class OrderController:
    def __init__(self, create_order: CreateOrderUseCase):
        self.create_order = create_order

    def create(self, request: CreateOrderRequest) -> OrderResponse:
        order = self.create_order.execute(request.items)
        return OrderResponse(order.id, order.status)
```

### 4. Frameworks & Drivers

El shell más externo. Contiene:

- **UI**: web, mobile, CLI
- **Frameworks**: Django, Spring, Express
- **Drivers**: databases, external APIs
- **Config**: settings, environment variables

## La Dependency Rule

> Las dependencias de código deben apuntar solo hacia adentro. Nada en una capa más interna debe saber algo de las capas más externas.

```
Entidades ← Use Cases ← Interface Adapters ← Frameworks
    ↑           ↑              ↑                  ↑
  (nada depende de nada afuera)
```

**En la práctica:**
- Entidades no importan Use Cases
- Use Cases no importan Controllers
- Controllers no importan UI
- UI no importa databases directamente

## Ports & Adapters (Hexagonal Architecture)

Variante de la Clean Architecture donde se definen **puertos** (interfaces) y **adaptadores** (implementaciones):

```
        ┌─────────────────┐
        │    PUERTO       │ ← Interfaz
        │  (Interface)    │
        └────────┬────────┘
                 │
        ┌────────▼────────┐
        │   ADAPTADOR     │ ← Implementación
        │  (Impl)         │
        └─────────────────┘
```

**Ejemplo:**
- **Puerto**: `OrderRepository` (interface)
- **Adaptador PostgreSQL**: `PostgresOrderRepository`
- **Adaptador MongoDB**: `MongoOrderRepository`

Permite cambiar implementaciones sin cambiar la lógica de negocio.

## SOLID aplicado a arquitectura

Los [[../01-Fundamentos/04-principios-ingenieria-software|principios SOLID]] se aplican a nivel de arquitectura:

| Principio | Aplicación arquitectónica |
|-----------|--------------------------|
| **SRP** | Cada capa tiene una responsabilidad |
| **OCP** | Nuevas implementaciones sin modificar código existente |
| **LSP** | Adaptadores intercambiables |
| **ISP** | Interfaces de puertos pequeñas y específicas |
| **DIP** | Dependencias apuntan hacia adentro |

## Beneficios

- **Testabilidad**: cada capa es testeable independientemente
- **Flexibilidad**: cambiar UI, DB o framework sin afectar negocio
- **Maintainability**: cambios localizados en una capa
- **Scalability**: escalar capas independientemente
- **Team autonomy**: equipos pueden trabajar en diferentes capas

## Cuando NO usar Clean Architecture

- **Prototipos rápidos**: over-engineering
- **Scripts simples**: no justifica la complejidad
- **CRUD básico**: puede ser demasiado
- **Equipos pequeños**: puede ser overhead

## Relación con otros conceptos

- Se fundamenta en [[../01-Fundamentos/04-principios-ingenieria-software|principios SOLID]]
- Se aplica en [[../01-Fundamentos/12-monolito-microservicios|monolito y microservicios]]
- Se soporta en [[../01-Fundamentos/13-plataformas-ingenieria|plataformas]]
- Se beneficia de [[../01-Fundamentos/10-conway-ley|Ley de Conway]]
- Se integra con [[../01-Fundamentos/01-que-es-software-factory|Software Factory]]
