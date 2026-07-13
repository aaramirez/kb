---
title: "Checklist para Nuevo Proyecto"
tags:
  - sf/casos
  - type/checklist
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Casos y Aplicación"
aliases:
  - "Project Checklist"
  - "Checklist Proyecto"
related:
  - "[[../12-Casos-Aplicacion/09-checklist-squad|Checklist Squad]]"
  - "[[../01-Fundamentos/README|Fundamentos]]"
  - "[[../09-DevOps-Infra/README|DevOps e Infra]]"
  - "[[../08-Calidad-Seguridad/README|Calidad y Seguridad]]"
  - "[[../10-Gestion-Proyectos/README|Gestión de Proyectos]]"
---

# Checklist para Nuevo Proyecto

## Instrucciones

Marcar cada item al inicio del proyecto. Revisar en la primera retrospective y cada trimestre.

---

## 1. Arquitectura y diseño

- [ ] Bounded contexts identificados (DDD)
- [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]] como guía
- [ ] Patrón arquitectónico definido (monolito modular, microservicios, event-driven)
- [ ] Decisiones documentadas en ADRs
- [[../04-Practicas/07-documentacion-tecnica|Documentación Técnica]]
- [ ] API contracts definidos (OpenAPI, gRPC, GraphQL)
- [[../04-Practicas/08-api-design-standards|API Standards]]
- [ ] Data model y estrategia de migración (si aplica)
- [ ] Non-functional requirements definidos (latencia, throughput, disponibilidad)
- [ ] Technology stack aprobado y documentado
- [ ] Dependency graph y versiones fijadas (lock files)
- Ver [[../01-Fundamentos/14-software-categoria-a|Software Categoría A vs B]]

## 2. Repositorio y código

- [ ] Repository creado con README completo
- [ ] .gitignore configurado (sin secrets)
- [ ] Branching strategy definida (trunk-based recomendado)
- [[../04-Practicas/09-git-conventions|Convenciones Git]]
- [ ] Coding standards documentados
- [[../04-Practicas/01-coding-standards|Estándares de Codificación]]
- [ ] Linter + formatter configurados (pre-commit hooks)
- [ ] EditorConfig para consistencia de edición
- [ ] .env.example con variables requeridas
- [ ] LICENSE definida
- [ ] CODEOWNERS configurado

## 3. CI/CD Pipeline

- [ ] CI pipeline: build + lint + test automatizado
- [[../09-DevOps-Infra/01-devops-ciclo|DevOps Ciclo]]
- [ ] CD pipeline: deploy automatizado a staging
- [[../09-DevOps-Infra/02-continuous-delivery|CD]]
- [ ] Pipeline duration < 10 minutos
- [ ] Build artifacts versionados y almacenados
- [ ] Deploy a producción automatizado (feature flags)
- [[../04-Practicas/13-feature-flags|Feature Flags]]
- [ ] Rollback automático configurado
- [ ] Environment secrets en vault (no en pipeline)

## 4. Testing

- [ ] Test strategy documentada (unit, integration, e2e)
- [[../04-Practicas/03-test-driven-development|TDD]]
- [ ] Unit tests escritos (coverage ≥ 80% en código nuevo)
- [ ] Integration tests para puntos de integración
- [ ] E2E tests para flujos críticos de negocio
- [ ] Performance tests (si aplica)
- [ ] Security tests (SAST/DAST en pipeline)
- [[../08-Calidad-Seguridad/README|Calidad y Seguridad]]
- [ ] Test data management strategy
- [ ] Mutation testing habilitado (opcional pero recomendado)

## 5. Observabilidad

- [ ] Application logs estructurados (JSON)
- [[../04-Practicas/12-observabilidad-practicas|Observabilidad]]
- [ ] Métricas de negocio y técnica definidas
- [ ] Distributed tracing configurado
- [ ] Dashboards iniciales creados
- [ ] Alertas configuradas para métricas críticas
- [ ] On-call rotation definida (si aplica)
- [[../09-DevOps-Infra/08-site-reliability|SRE]]

## 6. Seguridad

- [ ] Threat modeling realizado
- [[../01-Fundamentos/08-shift-left|Shift-Left Security]]
- [ ] SAST en pipeline de CI
- [ ] Secret scanning habilitado
- [ ] Dependency vulnerability scanning
- [ ] Secrets en vault (no hardcoded)
- [ ] RBAC / permisos definidos
- [ ] Data encryption en tránsito y en reposo
- [ ] Compliance requirements documentados (GDPR, SOC2, etc.)

## 7. Documentación

- [ ] README: setup instructions, architecture overview
- [ ] API documentation (auto-generada desde specs)
- [ ] ADRs para decisiones técnicas clave
- [[../04-Practicas/07-documentacion-tecnica|Documentación]]
- [ ] Runbook para operaciones críticas
- [ ] CONTRIBUTING.md para contributors externos
- [ ] Architecture diagram (C4 o similar)

## 8. Gestión de proyecto

- [ ] Backlog inicial priorizado
- [[../10-Gestion-Proyectos/README|Gestión de Proyectos]]
- [ ] Sprint cadence definido
- [ ] Definition of Done acordada
- [[../04-Practicas/11-definition-of-done|DoD]]
- [ ] Stakeholders identificados
- [ ] Communication plan (slack channels, meetings)
- [ ] Risk register inicial
- [ ] Success metrics definidos

## 9. Infraestructura

- [ ] IaC para todos los ambientes
- [[../09-DevOps-Infra/03-infrastructure-as-code|IaC]]
- [ ] Landing zone configurada
- [ ] Networking (VPC, subnets, security groups)
- [ ] DNS y certificates
- [ ] Backup strategy definida
- [ ] Disaster recovery plan documentado
- [ ] Cost estimation y budget aprobado
- [[../09-DevOps-Infra/12-cost-optimization|Cost Optimization]]

## 10. Equipo y proceso

- [ ] Squad configurado
- [[../12-Casos-Aplicacion/09-checklist-squad|Checklist Squad]]
- [ ] Roles y responsabilidades claros (DACI o RACI)
- [ ] Ceremony calendar definido
- [ ] Tools onboarding completado
- [ ] Incident response process documentado
- [[../09-DevOps-Infra/09-incident-response|Incident Response]]
- [ ] Escalation path definido
- [ ] Retrospective cadence establecido

## Resumen de priorización

| Prioridad | Secciones | Deadline |
|-----------|----------|----------|
| **P0 — Blocking** | Arquitectura, Repo, CI/CD, Security | Día 1 |
| **P1 — Required** | Testing, Observabilidad, Docs | Semana 1 |
| **P2 — Important** | Gestión, Infra, Equipo | Mes 1 |
| **P3 — Nice to have** | Chaos engineering, cost optimization | Trimestre 1 |
