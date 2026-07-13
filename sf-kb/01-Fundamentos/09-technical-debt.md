---
title: "Technical Debt: Deuda Técnica"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "Technical Debt"
  - "Deuda Técnica"
  - "Tech Debt"
related:
  - "[[../01-Fundamentos/08-shift-left|Shift-Left]]"
  - "[[../01-Fundamentos/04-principios-ingenieria-software|Principios]]"
  - "[[../01-Fundamentos/16-lean-software|Lean Software]]"
---

# Technical Debt: Deuda Técnica

La **deuda técnica** es el costo implícito de retrasar mejoras técnicas. Al igual que la deuda financiera, la deuda técnica acumula "intereses" que ralentizan el desarrollo futuro.

## Definición

> La deuda técnica es la diferencia entre la implementación actual y la implementación óptima, considerando todos los factores de calidad.

**En palabras simples:** es el "atajo" que tomas hoy y que mañana te costará más tiempo resolver.

## Cuadrante de Martin Fowler

Martin Fowler clasificó la deuda técnica en un modelo de 2x2:

```
                Deliberate          Inadvertious
            ┌──────────────────┬──────────────────┐
Reckless    │ "No hay tiempo    │ "¿Qué es un      │
            │  para diseñar"   │  patrón de diseño?"│
            ├──────────────────┼──────────────────┤
Prudent     │ "Debemos lanzar   │ "Ahora sé cómo    │
            │  ahora y refactorizar│ debería ser"   │
            │  después"        │                   │
            └──────────────────┴──────────────────┘
```

### Tipos de deuda

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Deliberate / Reckless** | Decisión consciente pero mala | "No escribimos tests para entregar rápido" |
| **Deliberate / Prudent** | Decisión consciente y razonable | "Lanzamos MVP, refactorizamos después" |
| **Inadvertent / Reckless** | No sabías que estabas creando deuda | Copiar código sin entender patrón |
| **Inadvertent / Prudent** | Aprendizaje natural | "Ahora sé que debería haber sido diferente" |

## Fuentes de deuda técnica

### Deuda deliberada

- **Time pressure**: "Necesitamos entregar para la fecha"
- **Resource constraints**: "No tenemos suficientes desarrolladores"
- **Business decisions**: "El mercado no espera"
- **Technical shortcuts**: "Usamos un hack para funcionar"

### Deuda inadvertida

- **Lack of knowledge**: "No sabíamos el patrón correcto"
- **Evolving requirements**: "El negocio cambió de dirección"
- **Technology evolution**: "La tecnología quedó obsoleta"
- **Team turnover**: "El conocimiento se perdió"

## Métricas de deuda técnica

| Métrica | Descripción |
|---------|-------------|
| **Debt Ratio** | Deuda total / esfuerzo total |
| **Code Smells** | Número de code smells detectados |
| **Technical Debt Items** | Tickets de deuda backlog |
| **Time Spent on Debt** | Tiempo dedicado a pagar deuda |
| **Interest Rate** | Costo acumulado por no resolver |

## Estrategias de gestión

### 1. Medir y priorizar

```
Deuda técnica:
├── Crítica (bloquea features): Resolver AHORA
├── Alta (reduce velocity significativamente): Planificar este sprint
├── Media (causa fricción): Backlog priorizado
└── Baja (cosmética): Cuando haya tiempo
```

### 2. Presupuesto de deuda

- Asignar **20% del tiempo** a reducción de deuda
- Incluir deuda en **sprint planning**
- Crear **tech debt backlog** visible
- Medir **velocity impact** de la deuda

### 3. Prevención

- [[../01-Fundamentos/08-shift-left|Shift-Left]]: detectar temprano
- [[../01-Fundamentos/04-principios-ingenieria-software|Principios SOLID]]: diseño correcto
- **Code review**: detectar atajos antes de merge
- **Definition of Done**: incluir calidad
- **Automated testing**: prevenir regressions

### 4. Pago incremental

- **Refactorización continua**: no grandes migraciones
- **Boy Scout Rule**: dejar el código mejor de como lo encontraste
- **Tech debt sprints**: sprints dedicados a deuda
- **Strangler Fig Pattern**: reemplazar gradualmente

## Deuda técnica y productividad

```
Velocity sin deuda:     ████████████████ 100%
Velocity con 20% deuda: ████████████░░░░  75%
Velocity con 50% deuda: ████████░░░░░░░░  50%
Velocity con 80% deuda: ████░░░░░░░░░░░░  25%
```

La deuda técnica es **exponencial**: no afecta linealmente, sino que se compone.

## Deuda técnica y [[../01-Fundamentos/03-era-ia-contexto|IA]]

La IA puede ayudar a gestionar deuda:

- **Detección automática**: AI para encontrar code smells
- **Refactoring asistido**: sugerencias de mejora
- **Code review inteligente**: detección de patrones problemáticos
- **Pero**: la IA también puede **crear deuda** si se usa sin criterio

## Anti-patrones comunes

1. **"Refactorizaremos después"**: nunca llega el "después"
2. **"Es solo un hack"**: se convierte en sistema
3. **"No tenemos tiempo para tests"**: el tiempo se multiplica
4. **"Funciona, no lo toques"**: funciona hasta que no funciona
5. **"La deuda es inevitable"**: sí, pero se puede gestionar

## Relación con otros conceptos

- [[../01-Fundamentos/08-shift-left|Shift-Left]] previene deuda
- [[../01-Fundamentos/04-principios-ingenieria-software|Principios SOLID]] reducen deuda
- [[../01-Fundamentos/16-lean-software|Lean]] elimina desperdicio (incluyendo deuda)
- [[../06-Metricas/README|Métricas]] miden deuda
- [[../01-Fundamentos/01-que-es-software-factory|Software Factory]] gestiona deuda como portfolio
