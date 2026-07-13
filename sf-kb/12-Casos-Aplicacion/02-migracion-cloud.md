---
title: "Migración a Cloud: Casos Reales"
tags:
  - sf/casos
  - type/guia
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Casos y Aplicación"
aliases:
  - "Cloud Migration"
  - "Migración Cloud"
related:
  - "[[../12-Casos-Aplicacion/01-transformacion-digital|Transformación Digital]]"
  - "[[../09-DevOps-Infra/10-cloud-native|Cloud Native]]"
  - "[[../09-DevOps-Infra/03-infrastructure-as-code|Infrastructure as Code]]"
  - "[[../01-Fundamentos/12-monolito-microservicios|Monolito a Microservicios]]"
  - "[[../09-DevOps-Infra/12-cost-optimization|Cost Optimization]]"
---

# Migración a Cloud: Casos Reales

## La estrategia 6 Rs

La estrategia de migración de AWS se resume en 6 opciones para cada workload:

| RS | Estrategia | Descripción | Cuándo usar |
|----|-----------|-------------|-------------|
| 1 | **Rehost** (Lift & Shift) | Mover sin cambios | Migración urgente, bajo riesgo |
| 2 | **Replatform** (Lift & Reshape) | Optimizaciones menores | Migrar DB a managed services |
| 3 | **Refactor/Re-architect** | Rediseñar para cloud-native | Valor máximo, escala elastic |
| 4 | **Repurchase** | Cambiar de producto | SaaS > self-hosted |
| 5 | **Retire** | Eliminar | Sin uso o redundante |
| 6 | **Retain** | Mantener on-prem | Compliance, dependencias |

## Patrones de migración

### Patrón — Strangler Fig (Migración evolutiva)

```
Monolito → [Proxy/Facade] → Módulo A (nube) + Módulo B (on-prem)
                                    ↓ (fase 2)
                              Módulo B (nuevamente en nube)
```

- Ventaja: Migración incremental sin big-bang risk
- Complejidad: Requiere facade estable y trazabilidad
- Ver [[../01-Fundamentos/12-monolito-microservicios|Monolito a Microservicios]]

### Patrón — Branch by Abstraction

```
Código → Interface abstractions → Implementación legacy
                                → Implementación cloud
```

- Permite migración sin cambio de comportamiento visible
- Requiere feature flags para control de tráfico
- Ver [[../04-Practicas/13-feature-flags|Feature Flags]]

### Patrón — Database Migration (CDC)

```
Legacy DB → Debezium/CDC → Kafka → Cloud DB (DynamoDB, CosmosDB)
```

- Sincronización dual-write durante periodo de transición
- Validación de consistencia antes de corte

## Caso real 1 — Fintech: Monolito Java a EKS

| Aspecto | Detalle |
|---------|---------|
| **Stack legacy** | Java 8, Oracle DB, WebLogic |
| **Stack target** | Java 17, PostgreSQL RDS, EKS |
| **Estrategia** | Replatform + Refactor parcial |
| **Duración** | 12 meses, 4 fases |
| **Resultado** | -70% costos infra, deploy continuo |

**Lecciones aprendidas:**
1. El schema de Oracle tenía 800+ stored procedures — automatizar la migración fue esencial
2. La latencia de red al DB requirió connection pooling y cache Redis
3. Los equipos necesitaron 3 meses de capacitación en Kubernetes

## Caso real 2 — Gobierno: Reforma legal + Cloud

| Aspecto | Detalle |
|---------|---------|
| **Stack legacy** | COBOL mainframe, VSAM files |
| **Stack target** | .NET 8, Azure SQL, App Service |
| **Estrategia** | Rehost → Refactor incremental |
| **Duración** | 24 meses (incluyendo capacitación) |
| **Resultado** | Cumplimiento normativo, disponibilidad 99.9% |

**Lecciones aprendidas:**
1. La documentación del mainframe era incompleta — interviews con operadores veteranos
2. El testing de regresión automatizado fue el mayor ahorro de tiempo
3. La resistencia del equipo de operaciones requirió programa de upskilling

## Checklist pre-migración

- [ ] Inventario completo de workloads y dependencias
- [ ] Evaluación de cada workload para las 6 Rs
- [ ] Análisis de costos (TCO on-prem vs cloud)
- [ ] Definición de orden de migración (low risk first)
- [ ] Plan de rollback para cada fase
- [ ] Capacitación del equipo en servicios target
- [ ] Configuración de landing zone y networking
- [ ] Compliance y requisitos de datos (residencia, encriptación)
- [ ] Monitoring y alertas configurados antes del cutover
- [ ] Documentación de runbooks operacionales

## Métricas de éxito

| Métrica | Línea base | Target post-migración |
|---------|-----------|----------------------|
| Costo mensual infra | $X | X - 30% |
| Tiempo de deploy | 4 horas | < 30 minutos |
| Disponibilidad | 99.5% | 99.95% |
| MTTR | 4 horas | < 30 minutos |
| Velocidad de onboarding | 2 semanas | 2 días |

## Herramientas clave

- AWS Migration Hub, Azure Migrate, Google Migrate
- Debezium (CDC), DMS (Database Migration Service)
- Terraform / Pulumi para IaC [[../09-DevOps-Infra/03-infrastructure-as-code|IaC]]
- EKS / AKS / GKE para Kubernetes [[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes]]
- CloudWatch / Azure Monitor / Cloud Monitoring
