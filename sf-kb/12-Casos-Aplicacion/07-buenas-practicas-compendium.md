---
title: "Compendio de Buenas Prácticas"
tags:
  - sf/casos
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Casos y Aplicación"
aliases:
  - "Best Practices"
  - "Buenas Prácticas"
  - "Resumen de Prácticas"
related:
  - "[[../04-Practicas/README|Prácticas]]"
  - "[[../01-Fundamentos/README|Fundamentos]]"
  - "[[../09-DevOps-Infra/README|DevOps e Infra]]"
  - "[[../08-Calidad-Seguridad/README|Calidad y Seguridad]]"
  - "[[../12-Casos-Aplicacion/06-fallidos-comunes|Errores Comunes]]"
---

# Compendio de Buenas Prácticas

## Propósito

Resumen ejecutivo de las prácticas más importantes organizadas por dimensión. Cada entrada enlaza con la sección detallada correspondiente.

## 1. Código y calidad

| Práctica | Resumen | Referencia |
|----------|---------|------------|
| Coding Standards | Convenciones consistentes en todo el equipo | [[../04-Practicas/01-coding-standards|Estándares]] |
| Clean Code | Nombres significativos, funciones pequeñas, DRY | [[../04-Practicas/02-clean-code|Clean Code]] |
| TDD | Escribir test antes que código | [[../04-Practicas/03-test-driven-development|TDD]] |
| BDD | Tests legibles por negocio | [[../04-Practicas/04-behavior-driven-development|BDD]] |
| Code Review | Revisión obligatoria antes de merge | [[../04-Practicas/06-code-review-best-practices|Code Review]] |
| Refactoring | Mejora continua sin cambiar comportamiento | [[../04-Practicas/10-refactoring-continuo|Refactoring]] |

### Checklist de código saludable

- [ ] Standards definidos y aplicados con linter
- [ ] Code review para cada PR
- [ ] Test coverage > 80% en código nuevo
- [ ] No code smells críticos (ver [[../04-Practicas/02-clean-code|Clean Code]])
- [ ] Documentation as code (README, ADRs)
- Ver [[../01-Fundamentos/04-principios-ingenieria-software|Principios de Ingeniería]]

## 2. Procesos y entrega

| Práctica | Resumen | Referencia |
|----------|---------|------------|
| CI Pipeline | Build + test automático en cada commit | [[../09-DevOps-Infra/01-devops-ciclo|DevOps]] |
| CD Pipeline | Deploy automatizado a producción | [[../09-DevOps-Infra/02-continuous-delivery|CD]] |
| Trunk-Based Development | Feature branches cortas (< 2 días) | [[../04-Practicas/09-git-conventions|Git]] |
| Feature Flags | Desacoplar deploy de release | [[../04-Practicas/13-feature-flags|Feature Flags]] |
| Definition of Done | Criterios claros de completitud | [[../04-Practicas/11-definition-of-done|DoD]] |

### Checklist de entrega

- [ ] CI corre en < 10 minutos
- [ ] CD puede deployar a producción en < 30 minutos
- [ ] Feature flags para cambios de riesgo alto
- [ ] Rollback automático en caso de error
- [ ] Monitoring post-deploy configurado

## 3. Infraestructura y operaciones

| Práctica | Resumen | Referencia |
|----------|---------|------------|
| Infrastructure as Code | Infra versionada y reproducible | [[../09-DevOps-Infra/03-infrastructure-as-code|IaC]] |
| Containers | Empaquetado consistente | [[../09-DevOps-Infra/04-containers-docker|Docker]] |
| Kubernetes | Orchestration para workloads complejos | [[../09-DevOps-Infra/05-kubernetes-orchestration|K8s]] |
| GitOps | Git como single source of truth para infra | [[../09-DevOps-Infra/07-gitops|GitOps]] |
| SRE | SLOs, error budgets, incident management | [[../09-DevOps-Infra/08-site-reliability|SRE]] |
| Cloud Native | Diseño para la nube | [[../09-DevOps-Infra/10-cloud-native|Cloud Native]] |
| Cost Optimization | FinOps y governanza de costos | [[../09-DevOps-Infra/12-cost-optimization|FinOps]] |

### Checklist de infra

- [ ] Infra declarativa (Terraform/Pulumi)
- [ ] Ambientes reproducibles desde cero
- [ ] Secrets en vault (no en código)
- [ ] Monitoring + alertas para servicios core
- [ ] Incident response process documentado

## 4. Observabilidad y calidad

| Práctica | Resumen | Referencia |
|----------|---------|------------|
| Observabilidad | Logs, métricas, traces | [[../04-Practicas/12-observabilidad-practicas|Observabilidad]] |
| Chaos Engineering | Probar resiliencia activamente | [[../04-Practicas/14-chaos-engineering|Chaos]] |
| Performance Testing | Tests de carga en CI | [[../08-Calidad-Seguridad/README|Calidad]] |

### Checklist de observabilidad

- [ ] Logs estructurados con correlation IDs
- [ ] Métricas RED/USE para servicios críticos
- [ ] Distributed tracing para requests cross-service
- [ ] Dashboards para cada servicio (RED)
- [ ] Alertas con runbooks y on-call rotation

## 5. Seguridad

| Práctica | Resumen | Referencia |
|----------|---------|------------|
| Shift-Left Security | Seguridad desde el diseño | [[../01-Fundamentos/08-shift-left|Shift-Left]] |
| SAST/DAST en CI | Análisis automático de vulnerabilidades | [[../08-Calidad-Seguridad/README|Seguridad]] |
| Secret Management | Vault, no hardcoded secrets | [[../09-DevOps-Infra/03-infrastructure-as-code|IaC]] |
| Dependency Scanning | Actualizar dependencias vulnerables | [[../08-Calidad-Seguridad/README|Seguridad]] |

## 6. Cultura y equipo

| Práctica | Resumen | Referencia |
|----------|---------|------------|
| Blameless Postmortems | Aprender de fallos sin señalar culpables | [[../09-DevOps-Infra/09-incident-response|Incident Response]] |
| Pair Programming | Conocimiento compartido | [[../04-Practicas/05-pair-programming|Pair Programming]] |
| Learning Time | Tiempo dedicado a crecimiento | [[../11-Cultura-Equipo/README|Cultura]] |
| Psychological Safety | Ambiente de seguridad para fallar | [[../11-Cultura-Equipo/README|Cultura]] |

## 7. Gestión de proyectos

| Práctica | Resumen | Referencia |
|----------|---------|------------|
| Agile/Scrum/Kanban | Framework de trabajo iterativo | [[../03-Procesos/README|Procesos]] |
| Estimación basada en datos | Velocidad histórica, no conjetura | [[../06-Metricas/README|Métricas]] |
| Backlog grooming | Refinamiento continuo de prioridades | [[../10-Gestion-Proyectos/README|Gestión]] |

## 8. IA en desarrollo

| Práctica | Resumen | Referencia |
|----------|---------|------------|
| AI Pair Programming | Copilot + developer como duo | [[../07-IA-Software/08-ai-pair-programming|AI Pair]] |
| AI Code Analysis | Detección de code smells con IA | [[../07-IA-Software/05-ai-code-analysis|AI Analysis]] |
| AI Test Generation | Generación asistida de tests | [[../07-IA-Software/04-ai-test-generation|AI Tests]] |
| AI Documentation | Documentación asistida | [[../07-IA-Software/06-ai-documentation|AI Docs]] |

## Priorización de adopción

| Fase | Prácticas | Impacto | Esfuerzo |
|------|----------|---------|----------|
| **Semana 1** | Coding standards, CI basics, version control | Alto | Bajo |
| **Mes 1** | Code review, TDD basics, CD pipeline | Alto | Medio |
| **Mes 3** | Observabilidad, feature flags, IaC | Alto | Medio |
| **Mes 6** | SRE practices, chaos engineering, FinOps | Medio | Alto |
| **Mes 9** | AI tools, advanced patterns | Medio | Medio |
