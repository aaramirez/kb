---
title: "Software de Categoría A vs B"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "Category A Software"
  - "Category B Software"
  - "Differentiated vs Commodity"
related:
  - "[[../01-Fundamentos/01-que-es-software-factory|Software Factory]]"
  - "[[../01-Fundamentos/15-producto-vs-proyecto|Producto vs Proyecto]]"
  - "[[../01-Fundamentos/14-software-categoria-a|Categorías]]"
---

# Software de Categoría A vs B

No todo software tiene el mismo valor estratégico. Distinguir entre software **diferenciador** (Categoría A) y software **commodity** (Categoría B) es clave para tomar decisiones arquitectónicas y organizacionales correctas.

## Definiciones

| Categoría | Descripción | Ejemplo |
|-----------|-------------|---------|
| **Categoría A** | Diferenciador de negocio, genera ventaja competitiva | Motor de recomendación, algoritmo de pricing |
| **Categoría B** | Commodity, necesario pero no diferenciador | Auth, logging, email sending, CMS |

## El framework de Martin Fowler

```
                    DIFERENCIADOR
                         │
                    ┌────▼────┐
                    │   A     │  Custom build, innovation focus
                    │         │  Full ownership
                    └─────────┘
                         │
    INNOVACIÓN ──────────┼────────── COMMODITY
                         │
                    ┌────▼────┐
                    │   B     │  Buy or use existing, standardize
                    │         │  Minimize custom code
                    └─────────┘
                         │
                    COMMODITY
```

## Características de cada categoría

### Software de Categoría A (Diferenciador)

| Aspecto | Enfoque |
|---------|---------|
| **Estrategia** | Build custom, innovar |
| **Equipo** | Senior engineers, domain experts |
| **Arquitectura** | Diseñada para cambios frecuentes |
| **Testing** | Exhaustivo, e2e, performance |
| **Deployment** | Continuous, feature flags |
| **Métricas** | Business impact, revenue |
| **I+D** | Invertir en innovación |

### Software de Categoría B (Commodity)

| Aspecto | Enfoque |
|---------|---------|
| **Estrategia** | Buy, SaaS, open-source |
| **Equipo** | Standard skills, ops focus |
| **Arquitectura** | Simple, estable, estándar |
| **Testing** | Básico, smoke tests |
| **Deployment** | Manual o semi-automático |
| **Métricas** | Uptime, cost |
| **I+D** | Mínimo, mantener |

## Ejemplos prácticos

### Categoría A (Diferenciador)

- **Algoritmo de recomendación**: core del negocio
- **Motor de pricing dinámico**: ventaja competitiva
- **ML model**: predicciones específicas del dominio
- **UX diferenciador**: experiencia única
- **Integraciones estratégicas**: partnerships clave

### Categoría B (Commodity)

- **Authentication**: Auth0, Firebase Auth, Keycloak
- **Email**: SendGrid, SES, Mailgun
- **Logging**: ELK, Datadog, Grafana
- **CMS**: WordPress, Contentful, Strapi
- **Payment processing**: Stripe, PayPal (el procesamiento, no la integración)
- **CI/CD**: GitHub Actions, GitLab CI

## Implicaciones para la organización

### Estructura de equipos

| Categoría A | Categoría B |
|-------------|-------------|
| Equipo dedicado, cross-functional | Equipo compartido, rotations |
| Senior engineers | Mid-level + automation |
| Autonomous | Centralized |
| Close to business | Close to ops |

### Arquitectura

| Categoría A | Categoría B |
|-------------|-------------|
| Microservicios si aporta | Monolito o servicios estándar |
| Custom build | SaaS o open-source |
| Event-driven | Request-response |
| Polyglot | Estándar |

### Presupuesto

```
Categoría A:  70% del presupuesto de desarrollo
Categoría B:  30% del presupuesto (o menos)
```

## La trampa de tratar B como A

Muchas organizaciones construyen **custom** software de Categoría B:

- Custom auth system (cuando existe Auth0)
- Custom CMS (cuando existe Contentful)
- Custom CI/CD (cuando existen GitHub Actions)

**Resultado:**
- Alto costo de mantenimiento
- Features retrasadas
- Equipo sobrecargado
- Competencia desventajosa

## La trampa de tratar A como B

Organizaciones que **compran** o **externalizan** software diferenciador:

- Usar un CMS para el core del negocio
- Contratar consultora para el algoritmo principal
- Usar SaaS para la ventaja competitiva

**Resultado:**
- Pérdida de diferenciación
- Dependencia del vendor
- Imposibilidad de innovar

## Relación con la Software Factory

La [[../01-Fundamentos/01-que-es-software-factory|Software Factory]] aplica esta clasificación:

1. **Portfolio management**: categorizar cada sistema
2. **Resource allocation**: invertir más en A
3. **Architecture decisions**: basadas en categoría
4. **Build vs Buy framework**: decisión informada
5. **Team structure**: equipos apropiados para cada categoría

## Decisiones de Build vs Buy

| Pregunta | Si es Categoría A | Si es Categoría B |
|----------|-------------------|-------------------|
| ¿Diferencia el negocio? | Build | Buy |
| ¿Es core del producto? | Build | Buy |
| ¿Hay alternativas maduras? | Evaluar | Buy |
| ¿Necesitamos customización extrema? | Build | Reconsiderar |
| ¿Tenemos expertise interno? | Build | Evaluar |

## Relación con otros conceptos

- Informa [[../01-Fundamentos/15-producto-vs-proyecto|producto vs proyecto]]
- Se aplica en [[../01-Fundamentos/12-monolito-microservicios|decisiones arquitectónicas]]
- Se soporta en [[../01-Fundamentos/13-plataformas-ingenieria|plataformas]]
- Se mide con [[../06-Metricas/README|métricas de negocio]]
- Se integra con [[../01-Fundamentos/10-conway-ley|estructura de equipos]]
