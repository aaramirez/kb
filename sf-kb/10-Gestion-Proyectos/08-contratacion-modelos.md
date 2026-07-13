---
title: "Modelos de Contratación"
tags:
  - sf/gestion
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Gestión de Proyectos"
aliases:
  - "Contract Models"
  - "Time & Materials"
  - "Fixed Price"
  - "Dedicated Team"
related:
  - "[[../10-Gestion-Proyectos/07-budget-cost|Presupuesto y Costos]]"
  - "[[../10-Gestion-Proyectos/01-planificacion-agil|Planificación Ágil]]"
  - "[[../02-Estructura/07-squad-tribe-chapter|Squad Tribe Chapter]]"
  - "[[../10-Gestion-Proyectos/05-risk-management|Gestión de Riesgos]]"
---

# Modelos de Contratación

Elegir el modelo correcto de contratación impacta directamente en costo, riesgo, flexibilidad y velocidad de entrega.

## Comparación general

| Modelo | Riesgo (cliente) | Flexibilidad | Predictibilidad | Overhead admin |
|--------|-----------------|-------------|-----------------|----------------|
| **Fixed Price** | Alto | Baja | Alta | Baja |
| **Time & Materials** | Medio | Alta | Baja | Media |
| **Dedicated Team** | Medio | Muy alta | Media | Media |
| **Staff Augmentation** | Medio-bajo | Media | Baja | Baja |
| **Managed Service** | Bajo | Baja | Alta | Baja |
| **Outsourcing** | Variable | Variable | Media | Alta |

## Fixed Price

El vendor se compromete a entregar un alcance definido por un precio fijo.

### Cuándo usar

| Situación | Recomendación |
|-----------|---------------|
| Alcance 100% definido | ✅ |
| Proyecto corto (< 3 meses) | ✅ |
| Requisitos estables y documentados | ✅ |
| Alcance不确定 | ❌ |
| Proyecto ágil iterativo | ❌ |
| Tecnología nueva/experimental | ❌ |

### Estructura típica

```
Fixed Price Contract
├── Scope document (SOW)
├── Milestones & deliverables
├── Payment schedule (por milestone)
├── Change request process
├── Penalty clauses (delayed delivery)
└── Acceptance criteria
```

### Pros y contras

| Pros | Contras |
|------|---------|
| Predictibilidad de budget | Cambios son caros (change requests) |
| Vendor asume riesgo de overruns | Vendor puede recortar calidad |
| Simple de administrar | Incentivo a entregar mínimo viable |
| Claro para stakeholders | Requiere documentación extensa |

## Time & Materials (T&M)

El cliente paga por tiempo (horas/días) y materiales consumidos.

### Cuándo usar

| Situación | Recomendación |
|-----------|---------------|
| Alcance evoluciona (ágil) | ✅ |
| Proyecto largo (> 3 meses) | ✅ |
| Necesidad de flexibilidad | ✅ |
| Budget fijo estricto | ❌ |
| Sin capacidad de supervisión | ❌ |

### Estructura típica

```
T&M Contract
├── Rate card (por rol/nivel)
├── Monthly invoices (horas reales)
├── Weekly timesheet reporting
├── Right to audit
├── Cap mensual (optional)
└── Notice period (30-60 días)
```

### Rates típicos (referencia US/Europa)

| Rol | Nearshore | Offshore | Onsite |
|-----|-----------|----------|--------|
| Senior Dev | $60-100/hr | $35-60/hr | $120-180/hr |
| Mid Dev | $40-70/hr | $20-40/hr | $80-120/hr |
| QA | $35-60/hr | $15-30/hr | $70-100/hr |
| DevOps | $50-90/hr | $30-50/hr | $100-150/hr |

## Dedicated Team

Un equipo completo asignado exclusivamente al cliente, bajo gestión del vendor.

### Cuándo usar

| Situación | Recomendación |
|-----------|---------------|
| Proyecto largo (> 6 meses) | ✅ |
| Necesidad de equipo estable | ✅ |
| Producto en crecimiento continuo | ✅ |
| Proyecto puntual corto | ❌ |
| Sin capacidad de management | ❌ |

### Estructura típica

```
Dedicated Team
├── Team composition acordada
├── Monthly fee (fijo por seat)
├── Client manages priorities & backlog
├── Vendor manages hiring & retention
├── Ramp-up period (1-2 meses)
└── Minimum commitment (6-12 meses)
```

## Staff Augmentation

Contratar individuos del vendor para integrarlos al equipo existente del cliente.

### Cuándo usar

| Situación | Recomendación |
|-----------|---------------|
| Fill skill gaps específicos | ✅ |
| Escalar equipo temporalmente | ✅ |
| Cobertura vacaciones/permuta | ✅ |
| Equipo completo nuevo | ❌ (mejor Dedicated Team) |
| Sin gestión interna fuerte | ❌ |

### Comparación con otros modelos

| Aspecto | Staff Aug | Dedicated Team | Outsourcing |
|---------|-----------|---------------|-------------|
| **Control del cliente** | Alto | Alto | Bajo |
| **Management** | Cliente | Compartido | Vendor |
| **Onboarding** | Cliente | Vendor | Vendor |
| **Retention risk** | Cliente | Vendor | Vendor |
| **Costo** | Medio | Medio-alto | Bajo-medio |

## Outsourcing completo

El vendor asume todo: equipo, proceso, entrega.

### Cuándo usar

| Situación | Recomendación |
|-----------|---------------|
| Producto no core | ✅ |
| Startup sin equipo técnico | ✅ |
| Proyecto con alcance claro | ✅ |
| Producto core estratégico | ❌ |
| Necesidad de innovación rápida | ❌ |

## Framework de decisión

```
¿El alcance está 100% definido?
├── Sí → ¿Budget fijo?
│   ├── Sí → Fixed Price
│   └── No → T&M
└── No → ¿Necesitas equipo dedicado?
    ├── Sí → ¿Más de 6 meses?
    │   ├── Sí → Dedicated Team
    │   └── No → Staff Augmentation
    └── No → T&M con cap mensual
```

## Risk Allocation Matrix

| Riesgo | Fixed Price | T&M | Dedicated Team | Outsourcing |
|--------|------------|-----|---------------|-------------|
| Scope creep | Vendor | Cliente | Cliente | Compartido |
| Delay | Vendor | Cliente | Cliente | Vendor |
| Quality issues | Vendor | Compartido | Compartido | Vendor |
| Cost overrun | Vendor | Cliente | Cliente | Vendor |
| Key person dependency | Compartido | Cliente | Vendor | Vendor |
| Technology risk | Compartido | Cliente | Cliente | Vendor |

## Best Practices

- Incluir **cláusula de salida** en todos los contratos
- Definir **SLAs claros** para calidad y timeliness
- Usar **proof of concept** antes de comprometer modelo completo
- Establecer **checkpoints** mensuales independientemente del modelo
- Documentar **acceptance criteria** antes de cada pago
- Revisar el modelo cada 6 meses: ¿sigue siendo el adecuado?
