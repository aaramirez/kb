---
title: "Code Coverage y Métricas de Testing"
tags:
  - sf/metricas
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Métricas y Desempeño"
aliases:
  - "Code Coverage"
  - "Test Coverage"
  - "Mutation Testing"
  - "Testing Pyramid Metrics"
related:
  - "[[04-defect-rate|Tasa de Defectos]]"
  - "[[06-technical-debt-metrics|Deuda Técnica]]"
  - "[[../04-Practicas/03-test-driven-development|TDD]]"
  - "[[../05-Herramientas/04-herramientas-testing|Herramientas Testing]]"
  - "[[../05-Herramientas/10-ai-testing-tools|AI Testing Tools]]"
  - "[[../01-Fundamentos/08-shift-left|Shift Left]]"
  - "[[../04-Practicas/11-definition-of-done|DoD]]"
---

## Visión General

Code coverage mide qué porcentaje del código fuente es ejecutado por los tests. Es una métrica útil pero frecuentemente malinterpretada — coverage alto no garantiza calidad, y coverage bajo es una señal de alerta.

## Tipos de Coverage

### Statement Coverage (Cobertura de Sentencias)

```
Statement Coverage = (Sentencias ejecutadas / Total sentencias) × 100

Ejemplo: 850 sentencias ejecutadas / 1000 totales = 85%
```

La métrica más básica. Indica qué % del código fue "pisado" por tests.

### Branch Coverage (Cobertura de Ramas)

```
Branch Coverage = (Ramas ejecutadas / Total ramas) × 100

Ejemplo: if/else tiene 2 ramas. Si solo se testea true → 50%
```

Más exhaustiva que statement coverage — asegura que tanto true como false se testeen.

### Function Coverage (Cobertura de Funciones)

```
Function Coverage = (Funciones llamadas / Total funciones) × 100
```

Verifica que cada función sea invocada al menos una vez.

### Mutation Coverage

```
Mutation Score = (Mutantes killed / Total mutantes) × 100

Ejemplo: 200 mutantes creados, 160 killed → 80% mutation score
```

**Mutation testing** introduce cambios artificiales (mutantes) en el código y verifica que los tests fallen. Es la métrica más rigurosa de calidad de tests.

## Resumen Comparativo

| Tipo | Qué mide | Dificultad | Valor |
|------|----------|------------|-------|
| Statement | Líneas ejecutadas | Bajo | Básico |
| Branch | Decisiones ejecutadas | Medio | Bueno |
| Function | Funciones invocadas | Bajo | Básico |
| Mutation | Efectividad de tests | Alto | Excelente |

## Testing Pyramid Metrics

```
          /  E2E Tests  \        → 10% del total, lentos
         /  Integration   \      → 20-30%, moderate
        /  Unit Tests      \     → 60-70%, rápidos
```

| Capa | Coverage meta | Velocidad | Costo |
|------|--------------|-----------|-------|
| Unit | > 80% | < 1ms/test | Bajo |
| Integration | > 60% | < 100ms/test | Medio |
| E2E | > 40% critical paths | > 1s/test | Alto |

### Coverage por Capa

```
Overall Coverage = (Unit lines + Integration lines + E2E lines) / Total lines

Pero cuidado: la superposición importa.
Un path testeado en E2E Y en unit → contar una vez.
```

## Cobertura por Herramienta

| Herramienta | Lenguaje | Tipo | Mutation |
|-------------|----------|------|----------|
| **Istanbul/nyc** | JavaScript | Statement/Branch | No |
| **JaCoCo** | Java | Statement/Branch | No |
| **Coverage.py** | Python | Statement/Branch | No |
| **Pitest** | Java | — | Sí |
| **Stryker** | JS/TS/C# | — | Sí |
| **mutmut** | Python | — | Sí |

## Targets de Coverage

| Nivel | Statement | Branch | Mutation | Cuándo usar |
|-------|-----------|--------|----------|-------------|
| Mínimo | 60% | 50% | — | Proyectos legacy |
| Estándar | 80% | 70% | — | Proyectos activos |
| Alto | 90% | 85% | 70% | Critical systems |
| Máximo | 95%+ | 90%+ | 80%+ | Safety-critical |

## Anti-Patrones

| Anti-Patrón | Problema | Solución |
|-------------|----------|----------|
| 100% coverage obsession | Tests triviales que no verifican nada | Enfocarse en mutation score |
| Coverage como KPI de equipo | Gaming: tests vacíos | Usar como signal, no target |
| Ignorar coverage gaps | Code sin testear accumulate bugs | CI gate en coverage mínimo |
| Solo unit tests | Alto coverage, bajo valor real | Testing pyramid balanceada |

## Dashboard de Ejemplo

```
┌──────────────────────────────────────────────────┐
│         TESTING METRICS DASHBOARD                │
├──────────────────────────────────────────────────┤
│ Statement Coverage:  87%  █████████████████░░░   │
│ Branch Coverage:     78%  ████████████████░░░░   │
│ Mutation Score:      72%  ███████████████░░░░░   │
│                                                  │
│ Tests: 1,247 total (892 unit, 280 int, 75 E2E)  │
│ Avg test duration:   42ms                        │
│ Flaky tests:         3 (0.2%)                    │
│                                                  │
│ Coverage por módulo:                             │
│   auth:      92%  ████████████████████           │
│   payments:  85%  ██████████████████             │
│   reporting: 68%  █████████████░░░░░░  ⚠        │
│   legacy:    45%  █████████░░░░░░░░░  ⚠⚠       │
└──────────────────────────────────────────────────┘
```

## Estrategias de Mejora

1. **Coverage gates en CI** — Bloquear merge si coverage baja
2. **Delta coverage** — Solo cubrir código nuevo/changed
3. **Mutation testing mensual** — Ejecutar Stryker/Pitest periódicamente
4. **Uncovered code review** — Revisar código sin coverage regularmente
5. **Property-based testing** — Para algoritmos y edge cases

## Conexiones

- [[04-defect-rate|Tasa de Defectos]] — Coverage previene defectos
- [[06-technical-debt-metrics|Deuda Técnica]] — Coverage bajo = tech debt
- [[../04-Practicas/03-test-driven-development|TDD]] — TDD mejora coverage naturalmente
- [[../04-Practicas/04-behavior-driven-development|BDD]] — BDD para integration tests
- [[../05-Herramientas/04-herramientas-testing|Herramientas de Testing]]
- [[../05-Herramientas/10-ai-testing-tools|AI Testing Tools]]
- [[../01-Fundamentos/08-shift-left|Shift Left]]
