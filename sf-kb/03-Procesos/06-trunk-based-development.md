---
title: "Trunk-Based Development"
tags:
  - sf/procesos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "TBD"
  - "Desarrollo Basado en Tronco"
  - "Mainline Development"
related:
  - "[[../03-Procesos/07-gitflow-alternativas|GitFlow y Alternativas]]"
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]"
  - "[[../03-Procesos/08-code-review-proceso|Code Review]]"
  - "[[../01-Fundamentos/07-devops-filosofia|DevOps]]"
  - "[[../03-Procesos/09-release-management|Release Management]]"
---

# Trunk-Based Development

**Trunk-Based Development (TBD)** es una estrategia de branching donde todos los desarrolladores trabajan en una rama principal (trunk/main) con branches de vida muy corta (horas, no días).

## Definición

> Trunk-Based Development es una práctica donde todo el código se integra en la rama principal al menos una vez al día, usando feature flags para controlar funcionalidad incompleta.

## Reglas fundamentales

| Regla | Descripción |
|-------|-------------|
| **Solo trunk** | Todos trabajan en main o branches < 1 día |
| **Integración diaria** | Merge al trunk al menos 1 vez por día |
| **Feature flags** | Controlar features incompletas en producción |
| **CI obligatorio** | Build y tests deben pasar antes de merge |
| **Code review rápido** | PRs revieweados en < 1 hora |

## Flujo de trabajo

```
Developer A:  feature-x ──→ merge to trunk ──→ delete branch
                     │ (2 horas)
                     │
Developer B:  feature-y ──→ merge to trunk ──→ delete branch
                     │ (4 horas)
                     │
Developer C:  bugfix-z ──→ merge to trunk ──→ delete branch
                     │ (1 hora)

Trunk:  ────[A]────[B]────[C]────[A]────[B]────
              │
              └── Feature flags control visibility
```

## Branches de vida corta

| Estrategia | Vida de branch | Ejemplo |
|------------|---------------|---------|
| **Feature branch** | 1-5 días | `feature/login-oauth` |
| **Short-lived** | < 1 día | `fix/null-pointer` |
| **Trunk-only** | 0 (direct push) | Solo con alta confianza |

**La regla de oro**: si tu branch vive más de 1 día, necesitas split en tareas más pequeñas o usar feature flags.

## Feature Flags

```python
# Feature flag para nueva funcionalidad
if feature_flags.is_enabled('new-search', user=user):
    return new_search_algorithm(query)
else:
    return legacy_search(query)
```

### Tipos de feature flags

| Tipo | Duración | Ejemplo |
|------|----------|---------|
| **Release flags** | Días-semanas | Ocultar feature hasta release |
| **Experiment flags** | Semanas-meses | A/B testing |
| **Ops flags** | Permanente | Kill switch, rate limiting |
| **Permission flags** | Permanente | Feature tiers, beta access |

### Gestión de feature flags

- **Registry centralizado**: LaunchDarkly, Unleash, Flagsmith
- **Naming consistente**: `team-feature-description`
- **Cleanup post-release**: eliminar flags tras validación
- **Documentación**: cada flag tiene owner y fecha de expiración

## TBD vs GitFlow

| Aspecto | TBD | [[../03-Procesos/07-gitflow-alternativas|GitFlow]] |
|---------|-----|-------|
| **Branches** | 1 principal + cortas | Múltiples largas |
| **Integración** | Diaria | Al final de feature |
| **Merge conflicts** | Frecuentes pero pequeños | Pocos pero grandes |
| **Release** | Continuo con flags | Por branch de release |
| **Rollback** | Feature flag off | Revertir merge |
| **Velocidad** | Más rápida | Más lenta |
| **Complejidad** | Baja (branches) | Alta (múltiples branches) |

## Beneficios

1. **Integración continua real** — no hay "merge hell"
2. **Feedback rápido** — código compartido al mismo día
3. **Menos conflictos** — cambios pequeños y frecuentes
4. **Deploy continuo** — siempre listo para producción
5. **Simplificación** — no hay branches de release, develop, etc.

## Desafíos y mitigaciones

| Desafío | Mitigación |
|---------|------------|
| **Build trunk roto** | CI obligatorio, tests rápidos |
| **Features incompletas** | Feature flags |
| **Code review rápido** | SLA de < 1 hora para reviews |
| **Tests lentos** | Parallelización, test splitting |
| **Testing en trunk** | Flaky test elimination |

## Requisitos para TBD exitoso

```
Trunk-Based Development
├── CI pipeline rápido (< 10 min)
├── Tests estables y rápidos
├── Feature flags management
├── Code review culture (< 1 hr)
├── Monitoring y alertas
└── Rollback capability
```

## Métricas de éxito

| Métrica | Objetivo |
|---------|----------|
| **Commit frequency** | > 1 por persona/día |
| **Branch lifetime** | < 1 día |
| **Integration frequency** | > 1 por persona/día |
| **Build break rate** | < 2% |
| **PR review time** | < 1 hora |

## Adopción gradual

1. **Empezar con bugfixes** — fixes van directo a trunk
2. **Features cortas** — branches de < 1 día
3. **Feature flags** — para features más largas
4. **Eliminar branches largas** — split en tareas más pequeñas
5. **Deploy continuo** — trunk siempre deployable

## Relación con otros conceptos

- [[../03-Procesos/07-gitflow-alternativas|GitFlow]] es la alternativa tradicional
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD]] es el habilitador técnico de TBD
- [[../03-Procesos/08-code-review-proceso|Code Review]] debe ser rápido para TBD
- [[../03-Procesos/09-release-management|Release Management]] usa feature flags
- [[../01-Fundamentos/07-devops-filosofia|DevOps]] promueve integración continua
