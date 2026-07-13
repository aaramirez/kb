---
title: "Errores Comunes y Cómo Evitarlos"
tags:
  - sf/casos
  - type/checklist
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Casos y Aplicación"
aliases:
  - "Common Mistakes"
  - "Errores Comunes"
  - "Top 10 Mistakes"
related:
  - "[[../12-Casos-Aplicacion/05-anti-patrones|Anti-patrones]]"
  - "[[../12-Casos-Aplicacion/07-buenas-practicas-compendium|Buenas Prácticas]]"
  - "[[../04-Practicas/README|Prácticas]]"
  - "[[../11-Cultura-Equipo/README|Cultura y Equipo]]"
---

# Errores Comunes y Cómo Evitarlos

## Top 10 errores en equipos de software

### 1. No invertir en onboarding

**El error**: Asumir que un nuevo dev "se adapta solo" o que 1 semana es suficiente.

**Impacto**: Meses de bajo rendimiento, código que no sigue convenciones, alta frustración.

**Solución**:
- [ ] Documentar ambiente de desarrollo (setup guide)
- [ ] Crear "first week" checklist para nuevos
- [ ] Asignar buddy/mentor para primer mes
- [ ] Primer PR simple en el primer día
- [[../10-Gestion-Proyectos/README|Gestión de Proyectos]] para planificación

### 2. Skipping testing

**El-error**: "No tenemos tiempo para tests, luego los escribimos" (nunca se escribe).

**Impacto**: Regresiones constantes, fear of deploying, velocity cae a largo plazo.

**Solución**:
- [ ] Test automation como Definition of Done
- [ ] TDD como práctica (no obligatoria pero recomendada)
- [ ] Minimum 80% coverage en código nuevo
- [ ] Mutation testing para validar calidad de tests
- [[../04-Practicas/03-test-driven-development|TDD]]
- [[../08-Calidad-Seguridad/README|Calidad]]

### 3. Ignorar la deuda técnica

**El error**: "Después lo refactorizamos" (nunca se hace).

**Impacto**: Velocidad decreciente, más bugs, frustración del equipo.

**Solución**:
- [ ] 20% del capacity para tech debt cada sprint
- [ ] Tech debt backlog visible para product
- [ ] Refactoring oportunistas en feature work
- [[../01-Fundamentos/09-technical-debt|Technical Debt]]
- [[../04-Practicas/10-refactoring-continuo|Refactoring]]

### 4. Comunicación deficiente entre roles

**El error**: Devs y product owners no se hablan. Specs ambiguos, expectativas no alineadas.

**Impacto**: Features mal entendidas, rework, wasted effort.

**Solución**:
- [ ] Three Amigos sessions antes de cada sprint
- [ ] Acceptance criteria claros en cada story
- [ ] Product y devs en las mismas canales de comunicación
- [ ] Demo frecuente para validar dirección
- Ver [[../03-Procesos/README|Procesos]]

### 5. Sin observabilidad en producción

**El error**: Deploy a producción sin monitoring, logs estructurados, ni alertas.

**Impacto**: Incidentes no detectados, MTTR alto, debugging por "adivinanza".

**Solución**:
- [ ] Monitoring desde el día 1 del servicio
- [ ] Logs estructurados (JSON) con correlation IDs
- [ ] Métricas RED (Rate, Errors, Duration)
- [ ] Alertas con runbooks asociados
- [[../04-Practicas/12-observabilidad-practicas|Observabilidad]]
- [[../09-DevOps-Infra/08-site-reliability|SRE]]

### 6. No automatizar deploys

**El-error**: Deploy manual que requiere 3 personas y 2 horas.

**Impacto**: Deploy doloroso = deploy infrecuente = releases grandes = más riesgo.

**Solución**:
- [ ] CI/CD pipeline completo
- [ ] Deploy automatizado a todos los ambientes
- [ ] Feature flags para desacoplar deploy de release
- [[../09-DevOps-Infra/02-continuous-delivery|CD]]
- [[../04-Practicas/13-feature-flags|Feature Flags]]

### 7. Copy-paste architecture

**El error**: Copiar soluciones entre proyectos sin considerar contexto.

**Impacto**: Duplicación, inconsistencias,难以 mantenimiento.

**Solución**:
- [ ] Shared libraries con ownership claro
- [ ] Module Federation o packages internos
- [ ] Documentar decisiones de arquitectura (ADR)
- [[../04-Practicas/07-documentacion-tecnica|Documentación]]

### 8. No medir nada

**El error**: "Confiamos en que va bien" sin datos.

**Impacto**: Decisiones basadas en opinión, no en evidencia.

**Solución**:
- [ ] Dashboard de DORA metrics visible para todos
- [ ] SLOs por servicio
- [ ] Regular review de métricas (mensual)
- [[../06-Metricas/README|Métricas]]

### 9. Security como afterthought

**El error**: "Añadimos seguridad al final" (cuando ya hay vulnerabilidades en producción).

**Impacto**: Brechas, pérdida de datos, multas, daño reputacional.

**Solución**:
- [ ] SAST/DAST en CI pipeline
- [ ] Secret scanning automatizado
- [ ] Dependency vulnerability scanning
- [ ] Security champions en cada squad
- [[../08-Calidad-Seguridad/README|Seguridad]]

### 10. No invertir en la cultura del equipo

**El error**: Solo enfocarse en velocity, ignorando wellbeing y crecimiento.

**Impacto**: Burnout, rotación, knowledge loss, baja moral.

**Solución**:
- [ ] Retros efectivas con action items
- [ ] 1:1s regulares con managers
- [ ] Learning time dedicado
- [ ] Celebration de wins
- [[../11-Casos-Aplicacion/05-anti-patrones|Anti-patrones]] para señales tempranas
- [[../11-Cultura-Equipo/README|Cultura]]

## Resumen visual

| # | Error | Frecuencia | Impacto |
|---|-------|-----------|---------|
| 1 | Onboarding débil | Muy alta | Alto |
| 2 | Skipping tests | Muy alta | Crítico |
| 3 | Deuda técnica ignorada | Alta | Crítico |
| 4 | Comunicación mala | Alta | Alto |
| 5 | Sin observabilidad | Alta | Crítico |
| 6 | Deploy manual | Media | Alto |
| 7 | Copy-paste arch | Media | Medio |
| 8 | No medir | Media | Alto |
| 9 | Security afterthought | Baja | Crítico |
| 10 | Ignorar cultura | Baja | Crítico |
