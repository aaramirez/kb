---
title: "Anti-patrones en Software Factories"
tags:
  - sf/casos
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Casos y Aplicación"
aliases:
  - "Anti-patterns"
  - "Anti-patrones"
related:
  - "[[../12-Casos-Aplicacion/06-fallidos-comunes|Errores Comunes]]"
  - "[[../11-Cultura-Equipo/README|Cultura y Equipo]]"
  - "[[../01-Fundamentos/10-conway-ley|Ley de Conway]]"
  - "[[../01-Fundamentos/09-technical-debt|Technical Debt]]"
  - "[[../12-Casos-Aplicacion/07-buenas-practicas-compendium|Buenas Prácticas]]"
---

# Anti-patrones en Software Factories

## ¿Qué es un anti-patrón?

Un anti-patrón es una práctica que parece útil pero que en realidad contraproducente. Se repite frecuentemente porque es intuitiva o porque funciona a corto plazo.

## Anti-patrones organizacionales

### Hero Culture

**Descripción**: Un desarrollador estrella resuelve todo, el equipo depende de una persona.

**Señales:**
- Hay 1-2 personas que siempre hacen "hotfixes"
- Code review solo pasa por 1-2 senior
- Cuando falta "el experto", nada avanza
- Onboarding lento porque el conocimiento no se documenta

**Consecuencias:**
- Burnout del hero
- Bottleneck en decisiones técnicas
- Know-how concentrado (single point of failure)
- Baja moral del resto del equipo

**Solución**:
- Pair programming para distribuir conocimiento
- [[../04-Practicas/05-pair-programming|Pair Programming]] como práctica estándar
- Documentación de decisiones (ADRs)
- [[../04-Practicas/07-documentacion-tecnica|Documentación Técnica]]
- Rotación de responsabilidades (on-call, code review)

### Death March

**Descripción**: Proyecto con fecha fija, alcance inmutable, y recursos insuficientes.

**Señales:**
- "Necesitamos que esté listo para [fecha comercial]"
- Scope creep sin reducción de alcance
- Horas extra obligatorias ("temporalmente")
- Cancelación de testing para "cumplir plazos"

**Consecuencias:**
- Burnout masivo
- Calidad deplorable, bug fixes eternos
- Rotación de talento (el mejor se va primero)
- Deuda técnica masiva

**Solución**:
- Negociar alcance, no tiempo
- Usar velocity real para forecasting
- [[../10-Gestion-Proyectos/README|Gestión de Proyectos]] con datos
- Escalar temprano: si falta 30% de capacidad, hay que hablar

### Cargo Cult Agile

**Descripción**: Adoptar ceremonies y artefactos Agile sin el mindset subyacente.

**Señales:**
- Daily standup de status report (no de sincronización)
- Sprint review es demo para stakeholders, sin feedback real
- Retros sin acción items, siempre "todo bien"
- Story points como métrica de productividad individual
- Ver [[../03-Procesos/README|Procesos]] para frameworks ágiles

**Solución**:
- Entrenar en principios, no en ceremonias
- Retros con action items y seguimiento
- Medir outcomes, no output
- [[../12-Casos-Aplicacion/06-fallidos-comunes|Errores Comunes]] para más detalles

## Anti-patrones técnicos

### Microservices Premium ( antes de tiempo)

**Descripción**: Adoptar microservicios sin la madurez técnica necesaria.

**Señales:**
- Equipo de 5 personas con 15 microservicios
- Distributed monolith: todos los servicios acoplados
- Sin observabilidad distribuida
- Deploy de un servicio requiere deploy de 5 más

**Solución**:
- Comenzar con monolito modular
- [[../01-Fundamentos/12-monolito-microservicios|Monolito a Microservicios]] como guía
- Escalar a microservicios solo cuando hay claro bounded context
- Ver [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]

### Resume Driven Development

**Descripción**: Elegir tecnología por popularidad en CV, no por necesidad.

**Señales:**
- "Necesitamos Kafka" sin caso de uso de streaming
- Frameworks elegidos por trending en HackerNews
- Reescritura completa para "modernizar" (sin business case)

**Solución**:
- ADRs para decisiones de tecnología
- Evaluar según criteria: team expertise, ecosystem, operability
- Prefer soluciones boring cuando sea posible

## Anti-patrones de proceso

### Git Flow Obsoleto

**Descripción**: Usar Git Flow completo en proyectos que no lo necesitan.

**Problema**: Feature branches largos, merge conflicts, fear of deploying.

**Solución**: Trunk-based development con feature flags
- [[../04-Practicas/09-git-conventions|Convenciones Git]]
- [[../04-Practicas/13-feature-flags|Feature Flags]]

### Test coverage como target

**Descripción**: Obligar 100% coverage sin medir calidad de tests.

**Problema**: Tests triviales que no detectan bugs, sensación falsa de seguridad.

**Solución**: Medir mutation testing, code coverage como guía no como meta
- [[../08-Calidad-Seguridad/README|Calidad y Seguridad]]

### Premature Optimization

**Descripción**: Optimizar rendimiento antes de tener problemas medibles.

**Solución**: Measure first, optimize second
- [[../06-Metricas/README|Métricas]] para datos objetivos

## Cómo detectar anti-patrones en tu equipo

| Señal de alerta | Anti-patrón probable |
|----------------|---------------------|
| Un desarrollador resuelve >50% de bugs críticos | Hero Culture |
| Sprint constantemente over-committed | Death March |
| Retros siempre "todo bien" | Cargo Cult Agile |
| Más de 10 microservicios para 5 devs | Microservices Premium |
| Nueva tecnología cada trimestre | Resume Driven Development |
| Deploy de feature toma >1 semana | Git Flow Obsoleto |
| Test suite lenta y frágil | Test coverage como target |

## Referencias

- AntiPatterns: Refactoring Software, Architectures (Brown et al.)
- [[../12-Casos-Aplicacion/11-antologia-pensadores|Antología de Pensadores]]
- [[../12-Casos-Aplicacion/07-buenas-practicas-compendium|Buenas Prácticas]]
