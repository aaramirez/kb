---
title: "Principios de Ingeniería de Software"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "Principios SOLID"
  - "DRY KISS YAGNI"
  - "Ingeniería de Software"
related:
  - "[[../01-Fundamentos/01-que-es-software-factory|Software Factory]]"
  - "[[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]"
  - "[[../01-Fundamentos/04-principios-ingenieria-software|Principios]]"
---

# Principios de Ingeniería de Software

Los principios de ingeniería son guías fundamentales que ayudan a construir software mantenible, escalable y robusto. Son la base sobre la que se sostiene cualquier [[../01-Fundamentos/01-que-es-software-factory|Software Factory]].

## Principios SOLID

Los principios SOLID fueron introducidos por Robert C. Martin y son la piedra angular de la [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]].

| Principio | Significado | Ejemplo |
|-----------|-------------|---------|
| **S** - Single Responsibility | Una clase, un motivo para cambiar | UserAuth y UserLogger separados |
| **O** - Open/Closed | Abierto a extensión, cerrado a modificación | Strategy pattern para pagos |
| **L** - Liskov Substitution | Subtipos deben ser sustituibles | PayPalProcessor reemplaza CardProcessor |
| **I** - Interface Segregation | Interfaces pequeñas y específicas | No forzar métodos no usados |
| **D** - Dependency Inversion | Depender de abstractions, no concreciones | Inyectar IEmailService |

### Ejemplo práctico de SOLID

```python
# ❌ Viola SRP - una clase hace todo
class UserService:
    def create_user(self, data): ...
    def send_welcome_email(self, user): ...
    def log_activity(self, action): ...

# ✅ Cumple SRP - responsabilidades separadas
class UserCreator:
    def create(self, data): ...

class WelcomeEmailSender:
    def send(self, user): ...

class ActivityLogger:
    def log(self, action): ...
```

## DRY — Don't Repeat Yourself

> "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system." — Andy Hunt & Dave Thomas

**Aplicación:**
- Funciones reutilizables en lugar de código duplicado
- Configuración centralizada
- Templates y componentes compartidos
- Libraries internas en la [[../01-Fundamentos/01-que-es-software-factory|Software Factory]]

**Cuidado:** DRY no significa copiar dos veces = refactorizar. A veces la duplicación intencional es mejor que una abstracción prematura.

## KISS — Keep It Simple, Stupid

> "Make everything as simple as possible, but not simpler." — Einstein

**Aplicación:**
- Preferir soluciones simples sobre ingeniosas
- Evitar over-engineering
- Código legible > código clever
- Documentación clara y concisa

## YAGNI — You Aren't Gonna Need It

> "Always implement things when you actually need them, never when you just foresee that you need it."

**Aplicación:**
- No construir features "por si acaso"
- Refactorizar cuando la necesidad es real
- MVP primero, optimizar después
- Complementa el mindset de [[../01-Fundamentos/16-lean-software|Lean Software]]

## Separation of Concerns (SoC)

> "Separate things that serve different purposes."

**En la práctica:**

```
┌─────────────┐
│  Frontend   │ ← UI/UX
├─────────────┤
│  Backend    │ ← Business Logic
├─────────────┤
│  Data Layer │ ← Persistence
├─────────────┤
│  Infra      │ ← Deployment
└─────────────┘
```

Cada capa se modifica independientemente. Fundamento de la [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]].

## Law of Demeter (LoD)

> "Only talk to your immediate friends."

**Regla:** Un módulo no debe conocer los detalles internos de los objetos con los que interactúa.

```python
# ❌ Viola LoD
order.customer.address.city

# ✅ Cumple LoD
order.get_shipping_city()
```

## Resumen de principios

| Principio | Enfoque | Pregunta clave |
|-----------|---------|----------------|
| **SOLID** | Diseño de clases | ¿Es esta clase cohesiva? |
| **DRY** | Reutilización | ¿Estoy repitiendo conocimiento? |
| **KISS** | Simplicidad | ¿Hay una forma más simple? |
| **YAGNI** | Necesidad | ¿Realmente necesito esto ahora? |
| **SoC** | Separación | ¿Estas cosas cambian juntas? |
| **LoD** | Acoplamiento | ¿Estoy hablando con amigos de amigos? |

## Aplicación en la práctica

Estos principios no son reglas absolutas sino guías. Su aplicación depende del contexto:

- En prototipos rápidos, KISS y YAGNI prevalecen
- En sistemas críticos, SOLID y SoC son innegociables
- En equipos grandes, DRY y LoD reducen fricción
- En [[../01-Fundamentos/09-technical-debt|deuda técnica]], estos principios son la brújula

## Relación con otros conceptos

- Base de la [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]
- Guía para [[../04-Practicas/README|prácticas de desarrollo]]
- Fundamento de [[../01-Fundamentos/06-manifiesto-agile|Agile]]
- Aplicables en [[../07-IA-Software/README|desarrollo asistido por IA]]
