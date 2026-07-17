---
title: "Crowdfunding Interno"
tags:
  - mgmt3/cambio
  - type/herramienta
created: 2026-07-16
updated: 2026-07-16
category: "Gestión del Cambio"
aliases:
  - "Internal Crowdfunding"
  - "Presupuesto Participativo"
related:
  - "[[03-delegation-poker]]"
  - "[[08-contratos-psicologicos]]"
  - "[[10-equipos-auto-organizados]]"
  - "[[12-formula-salarial]]"
---

## Crowdfunding Interno

El Crowdfunding Interno es una herramienta de Management 3.0 donde los **empleados "invierten" créditos o puntos en proyectos y ideas que creen que tendrán más impacto**. En lugar de que la dirección decida qué proyectos se financian, el equipo distribuye un presupuesto limitado entre las propuestas que considera más valiosas.

> **"La gente apoya con su dinero lo que realmente cree que funcionará."**
> — Jurgen Appelo

## Cuándo usarlo

- **Ciclo de planificación anual o trimestral** — Para decidir qué proyectos financiar
- **Hackathons o Innovation Days** — Para priorizar ideas post-evento
- **Presupuesto de formación** — Para decidir en qué capacitarse el equipo
- **Mejora de procesos** — Para elegir qué mejoras implementar
- **分配 de recursos limitados** — Cuando hay más ideas que presupuesto

## Materiales necesarios

- **Créditos**: Puntos, monedas, tokens o cualquier unidad de valor (física o digital)
- **Propuestas**: Tarjetas o documentos con las ideas a financiar
- **Tablero de inversión**: Espacio donde se registran las inversiones
- **Temporizador**: Para las rondas de inversión
- **Calculadora**: Para registrar totales

## Setup paso a paso

### Paso 1: Define el presupuesto (5 min)

Asigna a cada participante una cantidad fija de créditos:

| Tamaño del equipo | Créditos por persona | Total |
|-------------------|---------------------|-------|
| 5-8 personas | 10 créditos | 50-80 |
| 9-15 personas | 15 créditos | 135-225 |
| 16-25 personas | 20 créditos | 320-500 |

**Regla**: Los créditos no son transferibles entre personas. Cada uno invierte lo suyo.

### Paso 2: Recopila propuestas (pre-sesión)

Antes de la sesión, recopila ideas de:
- **Lluvia de ideas** previas del equipo
- **Propuestas individuales** que la gente quiera presentar
- **Iniciativas de la dirección** que necesitan validación
- **Ideas del Feedback Wall** que hayan recibido votos altos

Cada propuesta debe incluir:
- **Nombre**: Corto y memorable
- **Descripción**: Qué es, en 1-2 oraciones
- **Beneficio esperado**: ¿Qué ganamos si esto funciona?
- **Costo estimado**: Tiempo, dinero, esfuerzo
- **Riesgo**: ¿Qué tan arriesgado es?

### Paso 3: Presenta las propuestas (15 min)

Cada proponente tiene **2 minutos** para presentar su idea:
- ¿Qué es?
- ¿Por qué debería financiarse?
- ¿Cuál es el beneficio esperado?

### Paso 4: Ronda de inversión (20 min)

```
┌──────────────────────────────────────────────────────────────┐
│                  CROWDFUNDING INTERNO                        │
│  Fecha: ____________  Presupuesto total: _____ créditos     │
│                                                              │
│  ┌──────────────────┬──────────┬──────────┬──────────┐      │
│  │ Propuesta        │ Inversión│ Inversión│ Total    │      │
│  │                  │ Equipo A │ Equipo B │          │      │
│  ├──────────────────┼──────────┼──────────┼──────────┤      │
│  │ Nuevo CI/CD      │ 15       │ 12       │ 27       │      │
│  │ Capacitación K8s │ 8        │ 15       │ 23       │      │
│  │ Tool de métricas │ 12       │ 8        │ 20       │      │
│  │ Hackathon Q4     │ 5        │ 10       │ 15       │      │
│  │ Mejoras UX       │ 10       │ 5        │ 15       │      │
│  └──────────────────┴──────────┴──────────┴──────────┘      │
│                                                              │
│  Créditos disponibles: 0  |  Invertidos: 90                 │
└──────────────────────────────────────────────────────────────┘
```

**Proceso de inversión**:
1. Cada persona recibe sus créditos (físicos o digitales)
2. Invierte sus créditos en las propuestas que más le convencen
3. Puede distribuir sus créditos como quiera (todo en una, o dividir)
4. No puede invertir en su propia propuesta

### Paso 5: Revela resultados (5 min)

Suma los créditos de cada propuesta y revela el ranking:
- **Financiadas**: Las que superaron el umbral de financiamiento
- **En espera**: Las que están cerca pero no alcanzaron
- **No financiadas**: Las que no recibieron suficiente apoyo

### Paso 6: Plan de acción (10 min)

Para las propuestas financiadas:
- **Responsable**: ¿Quién lidera?
- **Fecha de inicio**: ¿Cuándo empieza?
- **Checkpoints**: ¿Cuándo revisamos el progreso?
- **Métricas de éxito**: ¿Cómo sabemos si funcionó?

## Modelo de inversión

### Opción 1: Inversión libre

Cada persona invierte sus créditos como quiera. Simple, democrático.

### Opción 2: Inversión con límites

Establece un máximo de inversión por propuesta para evitar que una idea monopolice todo el presupuesto.

### Opción 3: Inversión con match

La organización "iguala" las inversiones del equipo. Si una propuesta recibe 20 créditos del equipo, la organización agrega 10 más.

### Opción 4: Inversión por fases

Se financieran propuestas por fases. Primero se asigna un presupuesto pequeño para un MVP, luego se evalúa y se decide si escalar.

## Ejemplo práctico

**Equipo de 8 personas, 10 créditos cada uno (80 totales):**

| Propuesta | Descripción | Créditos | % del total |
|-----------|-------------|----------|-------------|
| **CI/CD automatizado** | Reducir tiempo de deploy de 2h a 15min | 27 | 34% |
| **Capacitación K8s** | Curso de 3 días para todo el equipo | 23 | 29% |
| **Tool de métricas** | Dashboard de productividad del equipo | 20 | 25% |
| **Hackathon Q4** | 2 días de innovación | 15 | 19% |

**Resultado**:
- CI/CD y Capacitación financiados (mayoría de créditos)
- Tool de métricas en espera (cerca del umbral)
- Hackathon no financiado (pocos créditos)

**Acción**: El equipo implementa CI/CD y agenda la capacitación. El Tool de métricas se repasa en el próximo ciclo.

## Errores comunes

1. **No definir reglas claras** — Si la gente no entiende cómo funciona, no participará
2. **Presupuesto insuficiente** — Si hay muy pocos créditos, la gente se frustra
3. **Demasiadas propuestas** — Limita a 5-8 propuestas para evitar parálisis
4. **No hacer seguimiento** — Si las propuestas financiadas no se ejecutan, pierde credibilidad
5. **Influencia del management** — Si los managers favorecen ciertas propuestas, el proceso se corrompe
6. **No celebrar resultados** — Si una propuesta financiada tiene éxito, reconócelo públicamente

## Crowdfunding vs Presupuesto tradicional

| Aspecto | Crowdfunding Interno | Presupuesto tradicional |
|---------|---------------------|------------------------|
| Decisión | Democrática, bottom-up | Centralizada, top-down |
| Transparencia | Total — todos ven qué se financia | Variable — a menudo opaca |
| Compromiso | Alto — la gente apoyó con sus créditos | Bajo — la gente no eligió |
| Riesgo | Distribuido entre todos | Concentrado en el decisor |
| Innovación | Fomenta ideas nuevas | Tiende a financiar lo conocido |

Para un enfoque más profundo de la distribución de autoridad, consulta la [[03-delegation-poker|Delegation Poker]].
