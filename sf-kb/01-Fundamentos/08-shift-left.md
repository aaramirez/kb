---
title: "Shift-Left: Mover Calidad Hacia Atrás"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "Shift Left"
  - "Quality Shift Left"
  - "Shift-Left Security"
related:
  - "[[../01-Fundamentos/07-devops-filosofia|DevOps]]"
  - "[[../01-Fundamentos/09-technical-debt|Technical Debt]]"
  - "[[../01-Fundamentos/04-principios-ingenieria-software|Principios]]"
---

# Shift-Left: Mover Calidad Hacia Atrás

**Shift-Left** es la práctica de mover actividades de testing, seguridad y validación hacia las fases tempranas del ciclo de desarrollo. Cuanto antes detectes un problema, menos cuesta corregirlo.

## El concepto

```
TRADICIONAL:
Requisitos → Diseño → Código → Testing → Producción
                                        ↑ (aquí se detectan bugs)

SHIFT-LEFT:
Requisitos → Diseño → Código → Testing → Producción
  ↑            ↑         ↑         ↑
  └────────────┴─────────┴─────────┘ (detección temprana)
```

## El costo del cambio

| Fase donde se detecta | Costo relativo |
|----------------------|----------------|
| Requisitos | 1x |
| Diseño | 5x |
| Código | 10x |
| Testing | 20x |
| Producción | 100x |

> Un bug encontrado en producción cuesta **100 veces más** que uno encontrado en requisitos.

## Tipos de Shift-Left

### 1. Testing Shift-Left

Mover el testing hacia las fases iniciales:

- **Unit Testing**: TDD (Test-Driven Development)
- **Integration Testing**: desde el primer commit
- **Code Review**: automatizado y manual
- **Static Analysis**: SonarQube, ESLint, etc.
- **Contract Testing**: validación de APIs

**Prácticas:**
- Escribir tests **antes** del código (TDD)
- Ejecutar tests en **cada commit** (CI)
- Usar **feature flags** para testing en producción
- Implementar **canary releases**

### 2. Security Shift-Left (DevSecOps)

Integrar seguridad desde el inicio:

| Herramienta | Fase | Tipo |
|-------------|------|------|
| SAST | Código estático | Análisis estático |
| DAST | Runtime | Análisis dinámico |
| SCA | Dependencias | Análisis de composición |
| IaC Scanning | Infraestructura | Seguridad de configuración |
| Secret Scanning | Repositorios | Detección de secrets |

**Prácticas:**
- Security champions en cada equipo
- Threat modeling en diseño
- Dependabot/Renovate para dependencias
- Pre-commit hooks para secrets

### 3. Infrastructure Shift-Left

Mover infraestructura al desarrollo:

- **Infrastructure as Code** (IaC): Terraform, Pulumi
- **Local environments**: Docker, Kind
- **Policy as Code**: OPA, Kyverno
- **Environment parity**: mismo stack en todos los ambientes

### 4. Observability Shift-Left

Monitoreo desde el diseño:

- **Structured logging** desde el primer día
- **Distributed tracing** en desarrollo
- **Synthetic monitoring** en CI
- **Chaos engineering** controlado

## Implementación de Shift-Left

### Paso 1: Evaluar el estado actual

```
¿Qué testing automatizado tienes?
¿Cuándo ejecutas security scans?
¿Los ambientes son consistentes?
¿El feedback loop es rápido?
```

### Paso 2: Establecer baseline

- Definir métricas actuales
- Identificar gaps críticos
- Priorizar por impacto

### Paso 3: Implementar incrementalmente

1. CI pipeline con tests básicos
2. SAST en el pipeline
3. Code review automatizado
4. Testing en desarrollo local
5. Chaos engineering controlado

### Paso 4: Medir y mejorar

- [[../06-Metricas/README|Métricas]] de lead time
- Reduction en escape rate
- Tiempo de feedback
- Satisfaction del equipo

## Beneficios

- **Reducción de costos**: bugs tempranos son más baratos
- **Mayor calidad**: prevención > detección
- **Feedback rápido**: ciclos más cortos
- **Menos estrés**: menos firefights en producción
- **Mejor seguridad**: vulnerabilities detectadas temprano

## Relación con DevOps

[[../01-Fundamentos/07-devops-filosofia|DevOps]] promueve Shift-Left como parte de su filosofía:

- **Automation**: automatizar la detección
- **Measurement**: medir la efectividad
- **Sharing**: compartir conocimiento de seguridad
- **Culture**: blameless, aprendizaje continuo

## Relación con Technical Debt

[[../01-Fundamentos/09-technical-debt|Technical Debt]] se reduce con Shift-Left porque:

- Los bugs se detectan antes de convertirse en deuda
- La deuda deliberada se gestiona con métricas
- La calidad se mantiene desde el inicio
- Los refactoring son más baratos

## Shift-Left en la era de la IA

La [[../01-Fundamentos/03-era-ia-contexto|IA]] potencia Shift-Left:

- **AI-powered code review**: detección automática de issues
- **Auto-generated tests**: tests generados por IA
- **Intelligent SAST**: análisis más preciso
- **Predictive analytics**: predicción de bugs

## Relación con otros conceptos

- Fundamenta [[../01-Fundamentos/01-que-es-software-factory|calidad en la Software Factory]]
- Se integra con [[../04-Practicas/README|prácticas de desarrollo]]
- Soporta [[../06-Metricas/README|métricas de calidad]]
- Complementa [[../01-Fundamentos/06-manifiesto-agile|Agile]] con rigor técnico
