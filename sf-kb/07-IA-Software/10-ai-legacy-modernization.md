---
title: "IA para Modernización de Legacy"
tags:
  - sf/ia-software
  - type/guia
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "AI Legacy Modernization"
  - "Legacy Migration with AI"
related:
  - "[[../05-Herramientas/13-legacy-modernizacion|Legacy Modernization Tools]]"
  - "[[../07-IA-Software/09-ai-software-design|IA en Diseño]]"
  - "[[../07-IA-Software/03-generacion-codigo|Generación de Código]]"
---

# IA para Modernización de Legacy

La modernización de código legacy es uno de los casos de uso más valiosos de la IA. Entender, migrar y refactorizar código antiguo se beneficia enormemente de LLMs.

## El Problema del Legacy

```
┌─────────────────────────────────────────────┐
│         CODEBASE LEGACY TÍPICO              │
├─────────────────────────────────────────────┤
│  • 500K+ líneas de código                   │
│  • Sin tests o tests obsoletos              │
│  • Documentación desactualizada             │
│  • Dependencias deprecadas                  │
│  • Knowledge en personas que ya no están    │
│  • Fear de cambiar cosas                    │
│  • Business logic embedded en UI            │
└─────────────────────────────────────────────┘
```

## Estrategias de Modernización con AI

### Estrategia 1: Code Understanding

```
AI Analysis: Legacy Codebase
─────────────────────────────
Entry point: main.py (1998)
├── Imports: 47 modules (12 deprecated)
├── Global variables: 23
├── Functions: 342
│   ├── Well-documented: 12%
│   ├── Partially documented: 35%
│   └── No documentation: 53%
├── Code smells: 89
│   ├── God functions (>100 lines): 23
│   ├── Duplicated code: 34 blocks
│   └── Deep nesting (>4 levels): 15
├── Dependencies:
│   ├── Python 2.7 → Need migration to 3.x
│   ├── Django 1.11 → Need upgrade to 4.x
│   └── 15 packages with known CVEs
└── Estimated effort: 3-4 sprints
```

### Estrategia 2: Documentation Generation

```
Input: Legacy code without docs
[paste undocumented function]

AI Output:
"""
Legacy function: calculate_billing()
Original developer: Unknown (est. 2005)
Purpose: Calculates monthly billing for customer accounts

Business rules (extracted from code):
1. Base price from plan tier
2. Add usage charges (API calls * rate)
3. Apply loyalty discount if tenure > 2 years
4. Apply volume discount if usage > 1000 units
5. Round to 2 decimal places
6. No negative amounts allowed

Dependencies:
- customer.plans table
- usage_logs table
- discounts table

Called by: billing_job.py, manual_billing.py
Calls: get_plan_rate(), get_usage_count(), get_discounts()

Known issues:
- Does not handle currency conversion
- Race condition possible with concurrent usage updates
- Hard-coded tax rate of 8.25%

Migration notes: Replace with BillingService class
"""
```

### Estrategia 3: Incremental Refactoring

```
Phase 1: Understanding (AI-assisted)
├── Map all dependencies
├── Identify dead code
├── Document business rules
└── Create dependency graph

Phase 2: Test coverage (AI-generated)
├── Generate tests for critical paths
├── Create integration test suite
├── Set up test infrastructure
└── Establish baseline metrics

Phase 3: Incremental extraction (AI + Human)
├── Extract pure functions first
├── Create interfaces for modules
├── Implement adapter patterns
└── Gradually replace implementations

Phase 4: Modernization (AI-scaffolded)
├── New architecture scaffolding
├── Data migration scripts
├── API compatibility layers
└── Documentation update
```

## Migration Patterns

### Strangler Fig Pattern with AI

```
Legacy System          New System
┌──────────────┐      ┌──────────────┐
│  Monolith    │      │  Microservice│
│              │      │              │
│  ┌────────┐  │      │  ┌────────┐  │
│  │ Auth   │──│──────│─▶│ Auth   │  │  ← First extracted
│  └────────┘  │      │  └────────┘  │
│  ┌────────┐  │      │              │
│  │Billing │──│──────│─▶│ Billing│  │  ← Second extracted
│  └────────┘  │      │  └────────┘  │
│  ┌────────┐  │      │              │
│  │ Users  │  │      │              │  ← Still in legacy
│  └────────┘  │      │              │
└──────────────┘      └──────────────┘

AI assists with:
- Identifying extraction boundaries
- Generating adapter code
- Creating API compatibility layers
- Writing migration tests
```

### Data Migration with AI

```python
# AI-generated migration script
def migrate_users_table():
    """Migrate users from legacy PostgreSQL to new schema."""

    # Read from legacy
    legacy_users = db.execute("""
        SELECT id, username, email, pwd_hash,
               created_date, last_login, status
        FROM legacy.users
        WHERE status != 'DELETED'
    """)

    for user in legacy_users:
        # Transform
        new_user = {
            'id': str(user.id),  # UUID
            'email': user.email.lower().strip(),
            'password_hash': user.pwd_hash,  # Same hash algo
            'display_name': user.username,
            'created_at': parse_date(user.created_date),
            'last_seen_at': parse_date(user.last_login),
            'is_active': user.status == 'ACTIVE',
            'migration_source': 'legacy_v1',
            'migrated_at': datetime.utcnow()
        }

        # Validate
        validate_user(new_user)

        # Insert with conflict handling
        try:
            db.insert('users', new_user)
        except DuplicateKeyError:
            handle_duplicate(user, new_user)

    log_migration_stats()
```

## Herramientas para Legacy Modernization

| Tool | Feature | Best for |
|------|---------|----------|
| Copilot | Code understanding + generation | Day-to-day refactoring |
| Cursor | Full codebase context | Large-scale analysis |
| CodeRabbit | Code review for changes | PR reviews during migration |
| SonarQube | Technical debt analysis | Prioritization |
| Custom agents | Tailored migration scripts | Complex migrations |

## Métricas de Modernization

| Métrica | Before | Target | AI Impact |
|---------|--------|--------|-----------|
| Test coverage | 5% | 80% | AI generates initial tests |
| Documentation | 10% | 70% | AI auto-generates docs |
| Tech debt (days) | 120 | 20 | AI suggests fixes |
| Build time | 15 min | 3 min | AI optimizes |
| Deploy frequency | Monthly | Daily | Enables CI/CD |

## Best Practices

1. **Don't rewrite from scratch**: Incremental migration with AI
2. **Test before changing**: AI-generated tests as safety net
3. **Document as you go**: AI-generated documentation
4. **Measure progress**: Track modernization metrics
5. **Preserve business logic**: AI helps extract and document rules

## Relación con otros conceptos

- Herramientas: [[../05-Herramientas/13-legacy-modernizacion|Legacy Modernization Tools]]
- Diseño: [[../07-IA-Software/09-ai-software-design|IA en Diseño]]
- Código: [[../07-IA-Software/03-generacion-codigo|Generación de Código]]
- Análisis: [[../07-IA-Software/05-ai-code-analysis|Análisis de Código]]
- Métricas: [[../06-Metricas/README|Métricas de productividad]]
