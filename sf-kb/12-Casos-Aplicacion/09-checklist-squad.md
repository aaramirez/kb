---
title: "Checklist para Nuevo Squad"
tags:
  - sf/casos
  - type/checklist
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Casos y Aplicación"
aliases:
  - "Squad Checklist"
  - "Checklist Squad"
  - "Team Setup"
related:
  - "[[../12-Casos-Aplicacion/08-checklist-proyecto|Checklist Proyecto]]"
  - "[[../11-Cultura-Equipo/README|Cultura y Equipo]]"
  - "[[../02-Estructura/README|Estructura]]"
  - "[[../03-Procesos/README|Procesos]]"
  - "[[../04-Practicas/README|Prácticas]]"
---

# Checklist para Nuevo Squad

## Instrucciones

Completar al formar un nuevo squad. Revisar en la primera retrospective (2 semanas) y mensualmente.

---

## 1. Composición del equipo

- [ ] Tamaño adecuado: 5-9 personas (2 pizza teams)
- [ ] Roles cubiertos: dev, QA/SDET, designer, product owner
- [ ] Mix de seniority equilibrado (no todos seniors ni todos juniors)
- [ ] Tech lead asignado con experiencia demostrada
- [ ] Scrum master o facilitador designado
- [ ] Area de dominio delimitada (bounded context)
- [[../01-Fundamentos/10-conway-ley|Ley de Conway]] para align con arquitectura
- [[../02-Estructura/README|Estructura]] para frameworks organizacionales

## 2. Herramientas de trabajo

- [ ] Código fuente: repositorio con acceso para todos
- [ ] CI/CD: pipeline configurado y funcionando
- [ ] Comunicación: slack/teams channel dedicado
- [ ] Project management: Jira/Linear/Linear board
- [ ] Documentación: wiki/confluence/notion con espacio propio
- [ ] Design: Figma/shared design system access
- [ ] Monitoring: acceso a dashboards de servicios propios
- [ ] Incident management: PagerDuty/Opsgenie configurado

## 3. Procesos

### Ceremony calendar

| Ceremony | Frecuencia | Duración | Participantes |
|----------|-----------|----------|---------------|
| Daily standup | Diaria | 15 min | Todo el squad |
| Sprint planning | Cada 2 semanas | 2-4 horas | Todo el squad |
| Backlog refinement | Semanal | 1-2 horas | PO + devs |
| Sprint review/Demo | Cada 2 semanas | 1 hora | Squad + stakeholders |
| Retrospective | Cada 2 semanas | 1-1.5 horas | Solo squad |
| 1:1s (manager) | Semanal | 30 min | Individual |

### Definition of Done

- [ ] DoD acordada por todo el squad
- [[../04-Practicas/11-definition-of-done|DoD]] como plantilla
- [ ] Incluye: code review, tests, documentation, security scan
- [ ] Revisable y actualizable en cada retro

### Code practices

- [ ] Coding standards acordados
- [[../04-Practicas/01-coding-standards|Estándares]]
- [ ] Branching strategy definida (trunk-based recomendado)
- [[../04-Practicas/09-git-conventions|Git Conventions]]
- [ ] Code review mandatory para todos los PRs
- [[../04-Practicas/06-code-review-best-practices|Code Review]]
- [ ] Pair programming sessions programadas
- [[../04-Practicas/05-pair-programming|Pair Programming]]

## 4. Acuerdos de trabajo

- [ ] Horarios core (overlap mínimo de 4 horas)
- [ ] Política de remote/hybrid definida
- [ ] Expectativas de respuesta (no async para urgencias)
- [ ] No-meeting blocks respetados
- [ ] Learning time semanal (ej: Friday afternoon)
- [ ] Onboarding plan para nuevos miembros
- [[../11-Cultura-Equipo/README|Cultura]] para acuerdos culturales

## 5. Métricas del squad

- [ ] Velocity baseline medida (3 sprints mínimos)
- [ ] DORA metrics visibles (deploy freq, lead time, MTTR, CFR)
- [[../06-Metricas/README|Métricas]]
- [ ] Sprint burndown/burnup visible
- [ ] Team health check mensual (anonymous survey)
- [ ] Quality metrics: test coverage, bug escape rate
- [ ] Satisfaction score (NPS interno)

## 6. Seguridad y compliance

- [ ] Accesos a producción solo para who-need
- [ ] Least privilege principle para tools
- [ ] Secret management process definido
- [ ] Incident response plan documentado
- [[../08-Calidad-Seguridad/README|Seguridad]]
- [[../09-DevOps-Infra/09-incident-response|Incident Response]]

## 7. Relación con otros squads

- [ ] Inter-squad dependencies mapeadas
- [ ] API contracts con otros squads definidos
- [ ] Shared libraries ownership claro
- [ ] Escalation path inter-squad definido
- [ ] Regular sync con squads dependientes (si aplica)

## 8. Primer sprint

- [ ] Sprint goal claro y comunicado
- [ ] Backlog refinado para al menos 2 sprints
- [ ] Environment de desarrollo funcionando
- [ ] Primer PR merged por cada miembro nuevo
- [ ] Primer deploy exitoso a staging
- [ ] Celebración del primer deploy (no trivializar)

## Checklist de madurez (mes 3)

- [ ] Velocity estable (varianza < 20%)
- [ ] CI/CD maduro (< 10 min pipeline)
- [ ] Test coverage > 80%
- [ ] Retros con action items seguidos
- [ ] Zero P1 incidents sin resolver > 24h
- [ ] Team satisfaction > 7/10
- [ ] Tech debt backlog visible y priorizado
