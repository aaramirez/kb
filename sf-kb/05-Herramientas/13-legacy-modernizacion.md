---
title: "Herramientas de Modernización Legacy"
tags:
  - sf/herramientas
  - type/guia
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Herramientas y Tecnología"
aliases:
  - "Legacy Modernization"
  - "Migration Tools"
  - "Strangler Fig"
related:
  - "[[../01-Fundamentos/README|Fundamentos]]"
  - "[[07-iac-terraform]]"
  - "[[08-plataformas-cloud]]"
---

## Visión General

La modernización de sistemas legacy es uno de los challenges más comunes en software engineering. Estas herramientas y patrones ayudan a migrar sistemas monolíticos a arquitecturas modernas sin riesgos catastróficos.

## Assessment de Legacy Systems

### Herramientas de Assessment

| Herramienta | Tipo | Use Case |
|-------------|------|----------|
| **SonarQube** | Static analysis | Code quality, technical debt |
| **CAST Highlight** | Portfolio analysis | Cloud readiness, risks |
| **vFunction** | AI-driven | Monolith decomposition |
| **NServiceBus** | Platform | Migration planning |
| **OpenRewrite** | Automated refactoring | Code modernization (Java) |

### Assessment Framework

| Dimension | Questions | Tools |
|-----------|-----------|-------|
| **Code quality** | Debt, complexity, duplication | SonarQube, CodeClimate |
| **Architecture** | Coupling, dependencies | Structure101, Lattix |
| **Security** | Vulnerabilities, compliance | Snyk, OWASP |
| **Performance** | Bottlenecks, scaling limits | Profiling, load testing |
| **Dependencies** | Outdated libs, licenses | Snyk, Dependabot |
| **Team knowledge** | Bus factor, documentation | CODEOWNERS analysis |

## Migration Strategies

### Strangler Fig Pattern

```
┌─────────────────────┐
│    Legacy System    │
│  ┌──────┐ ┌──────┐ │
│  │Func A│ │Func B│ │   ← Original monolith
│  └──────┘ └──────┘ │
└─────────────────────┘
         ↓
┌─────────────────────┐
│    API Gateway      │  ← Routing layer
└──────┬──────────────┘
       │
┌──────┴──────┐
│  │         │
▼  ▼         ▼
┌────────┐ ┌────────┐ ┌────────────┐
│Func A  │ │Func B  │ │   Legacy   │   ← Incremental extraction
│(new)   │ │(new)   │ │(remaining) │
└────────┘ └────────┘ └────────────┘
```

**Pasos**:
1. Identify bounded context to extract
2. Create API gateway/router
3. Build new service alongside legacy
4. Route traffic incrementally
5. Monitor and validate
6. Remove legacy component
7. Repeat for next component

### The 6 Rs de Modernización

| Strategy | Description | Effort | Risk |
|----------|-------------|--------|------|
| **Rehost** | Move to cloud as-is (lift & shift) | Bajo | Bajo |
| **Replatform** | Minor optimizations during move | Medio | Medio |
| **Repurchase** | Replace with SaaS | Bajo-Medio | Medio |
| **Refactor/Re-architect** | Cloud-native redesign | Alto | Alto |
| **Retain** | Keep as-is | N/A | N/A |
| **Retire** | Decommission | Bajo | Bajo |

Referencia: [[08-plataformas-cloud|Cloud migration]]

## Automated Refactoring Tools

### OpenRewrite

| Aspecto | Detalle |
|---------|---------|
| **Language** | Java, Kotlin, JavaScript, Python |
| **Type** | Automated refactoring |
| **Recipes** | 100+ recipes |
| **Integration** | Maven, Gradle, CLI |
| **Use cases** | Migration, modernization, dependency upgrades |

```yaml
# OpenRewrite recipe example
---
type: specs.openrewrite.org/v1beta/recipe
name: com.example.MigrateToJava17
recipeList:
  - org.openrewrite.java.migrate.UpgradeToJava17
  - org.openrewrite.java.spring.boot3.UpgradeToSpringBoot3_2
```

**Recipes populares**:
- Java 8 → 17 migration
- Spring Boot 2 → 3 migration
- JUnit 4 → 5 migration
- javax → jakarta migration

### JetBrains AI Assisted Migration

- IntelliJ refactoring + AI assistance
- Automated code transformations
- Type-safe migrations

## Containerization de Legacy

### Lift & Shift con Containers

```
Legacy Monolith → Docker Container → Managed K8s
```

| Step | Tool | Purpose |
|------|------|---------|
| Containerize | Docker | Package legacy app |
| Orchestrate | Kubernetes/EKS | Run at scale |
| Monitor | Prometheus/Grafana | Observability |
| Migrate data | AWS DMS, pg_dump | Database migration |

Referencia: [[06-container-kubernetes|Containers]]

## Database Migration

### Tools

| Tool | Use Case |
|------|----------|
| **Flyway** | Schema versioning, migrations |
| **Liquibase** | Database change management |
| **AWS DMS** | Cloud database migration |
| **pgloader** | PostgreSQL migration |
| **Alembic** | Python database migrations |

### Migration Patterns

| Pattern | Descripción |
|---------|-------------|
| **Parallel Run** | Both systems run simultaneously |
| **Truncate Switch** | Copy data, switch connections |
| **Change Data Capture** | Real-time sync via CDC |
| **Event Sourcing** | Rebuild from events |

## Legacy Code Testing

### Characterization Tests

```java
// Capture legacy behavior before refactoring
@Test
void legacySystemProducesExpectedOutput() {
    LegacySystem system = new LegacySystem();
    // Capture current behavior as baseline
    Result result = system.process(input);
    assertEquals("expected output", result.toString());
}
```

### Strangler Fig Testing

- **Contract tests**: Verify new service matches legacy behavior
- **Shadow traffic**: Mirror traffic to both systems
- **Canary deployment**: Gradual traffic shift
- Referencia: [[04-herramientas-testing|Testing tools]]

## Technical Debt Management

### Quantifying Debt

| Metric | Description | Tool |
|--------|-------------|------|
| **Debt ratio** | Debt / Total code | SonarQube |
| **Remediation time** | Hours to fix | SonarQube |
| **Hot spots** | Files with most changes + complexity | CodeScene |
| **Dependency age** | Outdated dependencies | Snyk, Dependabot |

### Prioritization Framework

```
High business value + Low effort → Do first
High business value + High effort → Plan carefully
Low business value + Low effort → Do when convenient
Low business value + High effort → Deprecate/avoid
```

Referencia: [[14-evaluacion-herramientas|Evaluation framework]]

## Common Patterns

### Anti-Corruption Layer

```java
// ACL between legacy and modern
public class OrderAdapter {
    private final LegacyOrderSystem legacySystem;
    
    public OrderDTO getOrder(String id) {
        LegacyOrder legacy = legacySystem.fetch(id);
        return mapToModern(legacy);
    }
}
```

### Branch by Abstraction

1. Create abstraction over legacy implementation
2. Implement new version behind abstraction
3. Switch via feature flag
4. Remove old implementation

## Modernization Roadmap

### Phase 1: Assessment (1-2 months)
1. Code quality analysis (SonarQube)
2. Architecture review
3. Business value mapping
4. Risk assessment
5. Create modernization backlog

### Phase 2: Foundation (2-4 months)
1. Set up CI/CD for legacy
2. Add characterization tests
3. Containerize monolith
4. Set up monitoring
5. Create anti-corruption layers

### Phase 3: Incremental Extraction (6-18 months)
1. Identify first bounded context
2. Build new service (Strangler Fig)
3. Route traffic incrementally
4. Validate and monitor
5. Repeat for next context

### Phase 4: Optimization (Ongoing)
1. Decommission legacy components
2. Optimize new architecture
3. Remove ACLs
4. Continuous improvement

## Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Legacy code coverage | Decreasing | SonarQube |
| Deployment frequency | Increasing | DORA metrics |
| Mean time to recovery | Decreasing | Monitoring |
| Team velocity | Increasing | Sprint metrics |
| System reliability | Maintained or improved | SLOs |

Referencia: [[../06-Metricas/README|Migration metrics]]

## Integración

- **IaC**: [[07-iac-terraform]] — Cloud provisioning
- **Cloud**: [[08-plataformas-cloud]] — Target platforms
- **Containers**: [[06-container-kubernetes]] — Containerization
- **Testing**: [[04-herramientas-testing]] — Validation
- **CI/CD**: [[02-herramientas-ci-cd]] — Pipeline for legacy
- **Monitoring**: [[05-herramientas-monitoring]] — Observability
