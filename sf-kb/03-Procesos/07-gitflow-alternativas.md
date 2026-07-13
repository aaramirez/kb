---
title: "GitFlow y Alternativas"
tags:
  - sf/procesos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "GitFlow"
  - "GitHub Flow"
  - "GitLab Flow"
  - "Branching Strategies"
related:
  - "[[../03-Procesos/06-trunk-based-development|Trunk-Based Development]]"
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]"
  - "[[../03-Procesos/09-release-management|Release Management]]"
  - "[[../05-Herramientas/README|Herramientas Git]]"
  - "[[../03-Procesos/08-code-review-proceso|Code Review]]"
---

# GitFlow y Alternativas

Las **branching strategies** definen cómo los equipos organizan el código en ramas, cuándo crearlas, fusionarlas y eliminarlas. Elegir la estrategia correcta impacta directamente la velocidad y calidad de entrega.

## GitFlow

Creada por Vincent Driessen en 2010, es la estrategia más estructurada:

```
main ─────────────────────────────────────────→ (producción estable)
  │                         ↑                    ↑
  │                    release/1.0          release/1.1
  │                    ↓                         ↓
develop ───●───●───●───●───●───●───●───●───●───●───→
            │       ↑       │       ↑       │
            │  feature/login│  feature/pay  │
            ↓               ↓               ↓
         feature/        feature/        feature/
```

### Ramas en GitFlow

| Rama | Propósito | Vida |
|------|-----------|------|
| **main** | Código desplegado en producción | Permanente |
| **develop** | Última funcionalidad para release | Permanente |
| **feature/** | Nuevas funcionalidades | Semanas |
| **release/** | Preparación de release | Días-semanas |
| **hotfix/** | Fixes urgentes en producción | Horas |

### Flujo de GitFlow

```
1. Crear rama develop desde main
2. Crear feature/xxx desde develop
3. Merge feature → develop (PR + review)
4. Crear release/1.0 desde develop
5. Testing, bug fixes en release
6. Merge release → main + develop
7. Tag en main: v1.0
8. Hotfix: branch desde main, merge a main + develop
```

### Cuándo usar GitFlow

| Situación | ¿GitFlow? |
|-----------|-----------|
| Release con versión definida | Sí |
| Múltiples versiones en paralelo | Sí |
| Deploy continuo | No |
| CI/CD maduro | No |
| Equipo pequeño | No |

## GitHub Flow

Estrategia simple y popular en GitHub:

```
main ────●────●────●────●────●────→
          ↑    ↑    ↑    ↑    ↑
          │    │    │    │    │
       PR+  PR+  PR+  PR+  PR+
       rev  rev  rev  rev  rev
```

### Reglas de GitHub Flow

1. **main** siempre deployable
2. Crear branch descriptiva desde main
3. Commits frecuentes con push
4. Abrir PR para discusión y review
5. Merge después de approval
6. Deploy desde main

### Ventajas

- Simple, fácil de entender
- Ideal para deploy continuo
- Menos merge conflicts
- Perfecto para [[../03-Procesos/06-trunk-based-development|TBD]]

### Cuándo usar GitHub Flow

| Situación | ¿GitHub Flow? |
|-----------|---------------|
| Deploy continuo | Sí |
| SaaS, web apps | Sí |
| Equipo distribuido | Sí |
| Release con versiones | Limitado |
| Hotfixes frecuentes | Sí |

## GitLab Flow

Variante que agrega ramas de environment:

```
main ────●────●────●────●────→
          │    │    │    │
          ↓    ↓    ↓    ↓
pre-production ──●────●──→
                    │
                    ↓
production ────────●────→
```

### Ramas de environment

| Rama | Propósito |
|------|-----------|
| **main** | Código más reciente |
| **pre-production** | Staging/QA |
| **production** | Producción |

### Release branches en GitLab Flow

```
main ────●────●────●───→
              │
              ├── release/2.0 ──→ (backport fixes)
              │
              └── release/1.0 ──→ (maintained)
```

### Cuándo usar GitLab Flow

| Situación | ¿GitLab Flow? |
|-----------|---------------|
| Deploy continuo | Sí |
| Múltiples ambientes | Sí |
| Release branches | Sí |
| Infraestructura como código | Sí |

## Trunk-Based Development

Ver [[../03-Procesos/06-trunk-based-development|artículo completo]].

Resumen rápido:

- Solo trunk (main) + branches de < 1 día
- Feature flags para control
- Deploy continuo
- La estrategia más recomendada para CI/CD moderno

## Comparación de estrategias

| Aspecto | GitFlow | GitHub Flow | GitLab Flow | TBD |
|---------|---------|-------------|-------------|-----|
| **Complejidad** | Alta | Baja | Media | Baja |
| **Deploy** | Por release | Continuo | Continuo | Continuo |
| **Release branches** | Sí | No | Sí | No |
| **Feature flags** | No | No | Opcional | Sí |
| **Hotfix** | Rama especial | Branch normal | Branch normal | Directo a trunk |
| **Ideal para** | Versionado | SaaS | Multi-env | CI/CD maduro |

## Criterios de decisión

```
¿Deploy continuo?
├── Sí → ¿Feature flags disponibles?
│   ├── Sí → Trunk-Based Development
│   └── No → GitHub Flow
└── No → ¿Release con versiones?
    ├── Sí → ¿Múltiples versiones en paralelo?
    │   ├── Sí → GitFlow
    │   └── No → GitLab Flow
    └── No → GitHub Flow
```

## Anti-patterns comunes

| Anti-pattern | Problema | Solución |
|-------------|----------|----------|
| **Branches largas** | Merge hell, feedback lento | TBD o GitHub Flow |
| **Sin PR review** | Código sin calidad | Code review obligatorio |
| **Merge sin test** | Build roto | CI obligatorio |
| **Feature flags forever** | Deuda técnica | Cleanup post-release |
| **Desarrollar en main** | Build roto frecuentemente | Branches cortas |

## Relación con otros conceptos

- [[../03-Procesos/06-trunk-based-development|TBD]] es la tendencia moderna
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD]] habilita estrategias simples
- [[../03-Procesos/08-code-review-proceso|Code Review]] es independiente de la estrategia
- [[../03-Procesos/09-release-management|Release Management]] define la cadencia
- [[../05-Herramientas/README|Herramientas]] soportan estas estrategias
