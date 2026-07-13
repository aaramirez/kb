---
title: "Presupuesto y Costos en Software"
tags:
  - sf/gestion
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Gestión de Proyectos"
aliases:
  - "Cost Estimation"
  - "TCO"
  - "Total Cost of Ownership"
  - "Cost of Delay"
related:
  - "[[../10-Gestion-Proyectos/02-estimacion-tecnicas|Técnicas de Estimación]]"
  - "[[../10-Gestion-Proyectos/08-contratacion-modelos|Modelos de Contratación]]"
  - "[[../10-Gestion-Proyectos/05-risk-management|Gestión de Riesgos]]"
  - "[[../09-DevOps-Infra/12-cost-optimization|Cost Optimization]]"
---

# Presupuesto y Costos en Software

Entender los costos de construir, operar y mantener software es esencial para la toma de decisiones de negocio.

## Componentes del costo de software

### Desglose de costos

| Categoría | % típico del TCO | Ejemplos |
|-----------|------------------|----------|
| **People** | 60-70% | Salarios, benefits, training |
| **Infrastructure** | 10-20% | Cloud, hosting, licenses |
| **Tools** | 5-10% | IDEs, CI/CD, monitoring |
| **Process** | 5-10% | Compliance, audits, training |
| **Maintenance** | 15-25% anual | Bug fixes, updates, support |

### Costo por fase del proyecto

| Fase | % del budget total | Duración típica |
|------|-------------------|-----------------|
| Discovery & Planning | 5-10% | 2-4 semanas |
| Design & Architecture | 10-15% | 2-6 semanas |
| Development | 40-50% | 3-12 meses |
| Testing & QA | 15-20% | Paralelo a dev |
| Deployment & Launch | 5-10% | 1-4 semanas |
| Post-launch support | 5-10% (anual) | Continuo |

## Total Cost of Ownership (TCO)

Incluye todos los costos durante la vida útil del software.

### Fórmula TCO

```
TCO = Development + Infrastructure + Operations + Maintenance + Opportunity Cost

TCO anual = (Salarios × FTE) + (Cloud × 12) + (Licencias × 12) + (Support cost)
```

### Ejemplo de cálculo TCO (3 años)

| Componente | Año 1 | Año 2 | Año 3 | Total |
|------------|-------|-------|-------|-------|
| Development (5 devs) | $400K | $200K | $150K | $750K |
| Cloud infrastructure | $60K | $72K | $85K | $217K |
| Tools & licenses | $25K | $25K | $25K | $75K |
| Operations (0.5 FTE) | $50K | $50K | $50K | $150K |
| Maintenance & support | $40K | $60K | $80K | $180K |
| **Total** | **$575K** | **$407K** | **$390K** | **$1.372M** |

## Cost of Delay (CoD)

El costo de NO entregar un feature. Es la métrica más importante para priorización.

### Fórmula

```
CoD = (Value per time unit) × (Duration of delay)
```

### Componentes del CoD

| Componente | Descripción | Ejemplo |
|-----------|-------------|---------|
| **Revenue impact** | Ingresos perdidos por no tener la feature | $50K/mes en ventas perdidas |
| **User impact** | Usuarios que no adoptan o churn | 200 usuarios/mes perdidos |
| **Strategic cost** | Ventaja competitiva perdida | Competidor lanza primero |
| **Technical cost** | Deuda técnica que crece | Costo de fix crece 30%/mes |
| **Risk cost** | Riesgo que aumenta sin acción | Compliance deadline approaching |

### Ejemplo práctico

```
Feature: Sistema de pagos con Stripe

Value per month: $120K (revenue directa)
Delay: 2 meses

CoD = $120K × 2 = $240K

Si el costo de construir = $80K
ROI = ($240K - $80K) / $80K = 200%
```

## Estimación de costos de proyecto

### By team composition

| Rol | Costo mensual (US) | % del equipo |
|-----|-------------------|-------------|
| Tech Lead | $15K-20K | 1 |
| Senior Dev | $12K-18K | 2-3 |
| Mid-level Dev | $8K-12K | 3-4 |
| Junior Dev | $5K-8K | 1-2 |
| QA Engineer | $8K-12K | 1-2 |
| DevOps | $10K-15K | 0.5-1 |
| Designer | $8K-12K | 0.5-1 |
| Scrum Master / EM | $12K-16K | 0.5 |

### Estimación por tipo de proyecto

| Tipo | Equipo | Duración | Costo total |
|------|--------|----------|-------------|
| MVP / Proof of Concept | 3-4 devs | 2-3 meses | $80K-150K |
| MVP completo | 5-7 devs | 4-6 meses | $300K-600K |
| Producto mediano | 8-12 devs | 6-12 meses | $800K-2M |
| Plataforma enterprise | 15-30 devs | 12-24 meses | $3M-10M |
| Migración legacy | 5-10 devs | 6-18 meses | $500K-2M |

## Budget Tracking

### Métricas financieras

| Métrica | Fórmula | Target |
|---------|---------|--------|
| **Cost Performance Index (CPI)** | EV / AC | > 1.0 |
| **Schedule Performance Index (SPI)** | EV / PV | > 1.0 |
| **Budget variance** | (actual - budget) / budget | < 10% |
| **Burn rate** | monthly spend / total budget | Según plan |
| **ROI** | (gain - cost) / cost | > 100% |

### Earned Value Management

```
PV (Planned Value): valor del trabajo planificado hasta hoy
EV (Earned Value): valor del trabajo completado hasta hoy
AC (Actual Cost): costo real incurrido hasta hoy

CPI = EV / AC → > 1 = under budget, < 1 = over budget
SPI = EV / PV → > 1 = ahead of schedule, < 1 = behind
```

## Cost Optimization Strategies

| Estrategia | Ahorro típico | Trade-off |
|-----------|--------------|-----------|
| **Cloud right-sizing** | 20-40% infra | Requiere monitoring |
| **Open source** | 30-50% tools | Soporte propio |
| **Outsourcing nearshore** | 30-50% people | Communication overhead |
| **Automation** | 20-30% operations | Initial investment |
| **Technical debt paydown** | 15-25% maintenance | Upfront cost |

## Anti-patterns

- **Budget theater**: tracking sin action sobre variance
- **Ignoring maintenance**: no incluir costos post-launch
- **Sunk cost fallacy**: continuar por haber invertido mucho
- **Hidden costs**: no contar training, onboarding, context switching
- **Optimistic bias**: asumir mejor caso siempre
