---
title: "Release Management"
tags:
  - sf/procesos
  - type/guia
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "Gestión de Releases"
  - "Gestión de Versiones"
  - "Release Planning"
related:
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD Pipeline]]"
  - "[[../03-Procesos/06-trunk-based-development|Trunk-Based Dev]]"
  - "[[../03-Procesos/10-incidient-management|Gestión de Incidentes]]"
  - "[[../06-Metricas/README|Métricas]]"
  - "[[../03-Procesos/11-change-management|Change Management]]"
---

# Release Management

**Release Management** es el proceso de planificar, coordinar y ejecutar la entrega de software a producción de forma controlada y predecible.

## Definición

> Release Management abarca las actividades necesarias para planificar, programar, construir, probar y desplegar releases de software de manera que se maximice el valor y se minimice el riesgo.

## Cadencia de releases

| Cadencia | Descripción | Ejemplo |
|----------|-------------|---------|
| **On-demand** | Cuando hay valor para entregar | Continuous deployment |
| **Time-based** | Frecuencia fija predecible | Semanal, quincenal, mensual |
| **Milestone-based** | Al completar features clave | Por epic o feature set |
| **Event-based** | Alineado con eventos externos | Conferencia, Black Friday |

### Calendario de releases

```
Ene          Feb          Mar          Abr
├── R24.1 ──┤── R24.2 ──┤── R24.3 ──┤── R24.4 ──┤
│ Sprint 1-2│ Sprint 3-4│ Sprint 5-6│ Sprint 7-8│
│           │           │           │           │
│ Feature A │ Feature B │ Feature C │ Feature D │
```

## Estrategias de release

### Big Bang Release

```
──────────────────────────────→ deploy
           │                   │
        Desarrollo          Release
        (largo)             (masivo)
```

- Todo se despliega de una vez
- Alto riesgo, alta coordinación
- Ideal para: v1.0, cambios radicales
- **Riesgo**: si falla, todo falla

### Rolling Release

```
Users:  ──→ gradualmente todos migrados
Region 1:  v2.0 ✓
Region 2:  v2.0 ✓
Region 3:  v1.9 → v2.0
Region 4:  v1.9
```

- Despliegue gradual por regiones/grupos
- Reduce impacto de fallos
- Ideal para: servicios globales
- **Requiere**: feature flags, monitoring

### Blue-Green Deployment

```
┌──────────┐     ┌──────────┐
│  Blue    │     │  Green   │
│ (v1.9)  │ ←→  │ (v2.0)  │
└──────────┘     └──────────┘
      ↑                ↑
  Producción      Staging
  (actual)        (nuevo)
```

- Swap instantáneo entre versiones
- Rollback en segundos
- **Requiere**: 2 ambientes idénticos

### Canary Release

```
100% ────→ gradualmente a 100%
  │
  5% ────→ usuarios seleccionados prueban v2.0
  │        │
  │    Métricas OK → escalar
  │    Métricas NO → revert
```

- Liberar a % pequeño de usuarios
- Monitorear métricas clave
- Ideal para: validación en producción
- **Requiere**: feature flags, observabilidad

### Feature Flags (Sin release tradicional)

```
Deploy = código en producción
Release = activar feature flag
```

- Código siempre desplegado
- Activación/desactivación remota
- A/B testing integrado
- Rollback instantáneo

## Versionado semantic (SemVer)

```
MAJOR.MINOR.PATCH
  │      │      │
  │      │      └── Bug fixes (backward compatible)
  │      └── Nuevas features (backward compatible)
  └── Breaking changes
```

### Ejemplos

| Versión | Cambio |
|---------|--------|
| `1.0.0` → `1.0.1` | Bug fix |
| `1.0.1` → `1.1.0` | Nueva feature |
| `1.1.0` → `2.0.0` | Breaking change |

### Changelog automático

```markdown
# Changelog

## [2.1.0] - 2024-03-15
### Added
- Feature X con Y capacidades
- Soporte para Z

### Fixed
- Bug en módulo A
- Performance issue en B

### Changed
- API de C actualizada (breaking)
```

## Proceso de release

```
1. Planificación    → ¿Qué va en esta release?
2. Feature Freeze   → No más features nuevas
3. Code Freeze      → Solo bug fixes
4. QA / UAT         → Validación final
5. Release Notes    → Documentar cambios
6. Deploy           → Despliegue a producción
7. Monitoring       → Observar métricas
8. Rollback Plan    → Si algo falla
9. Post-Release     → Retrospectiva
```

## Release Notes template

```markdown
## Release X.Y.Z — [Fecha]

### 🚀 Nuevas Features
- Feature A: descripción (link a docs)

### 🐛 Bug Fixes
- Fix B: descripción (link a issue)

### ⚠️ Breaking Changes
- API C: [descripción + migración]

### 📦 Deprecations
- Feature D: será eliminada en v3.0

### 🔗 Links
- Documentación: [link]
- Migración: [link]
```

## Métricas de releases

| Métrica | Objetivo |
|---------|----------|
| **Release Frequency** | Al menos quincenal |
| **Release Size** | < 500 LOC por release |
| **Rollback Rate** | < 5% |
| **Release Lead Time** | < 1 semana (plan → deploy) |
| **Post-release Defects** | < 2 por release |

## Relación con otros conceptos

- [[../03-Procesos/05-ci-cd-pipeline|CI/CD]] automatiza el pipeline de release
- [[../03-Procesos/06-trunk-based-development|TBD]] habilita releases continuos
- [[../03-Procesos/10-incidient-management|Incidentes]] pueden ocurrir post-release
- [[../03-Procesos/11-change-management|Change Management]] controla el proceso
- [[../06-Metricas/README|Métricas]] miden la efectividad
