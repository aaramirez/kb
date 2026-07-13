---
title: "Prevención de Defectos vs Detección"
tags:
  - sf/calidad
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Calidad y Seguridad"
aliases:
  - "Defect Prevention"
  - "Poka-Yoke FMEA"
related:
  - "[[01-qa-moderno|QA Moderno]]"
  - "[[02-testing-piramide|Pirámide de Testing]]"
  - "[[11-quality-gates|Quality Gates]]"
---

# Prevención de Defectos vs Detección

## Filosofía

| Enfoque | Costo | Eficiencia | Momento |
|---------|-------|------------|---------|
| **Prevención** | Bajo | Alta | Antes de编码 |
| **Detección** | Medio | Media | Durante testing |
| **Corrección** | Alto | Baja | En producción |

> "Es 100x más barato prevenir un defecto que corregirlo en producción."

## Métodos de Prevención

### Poka-Yoke (Error-Proofing)

Mecanismos que previenen errores humanos antes de que ocurran.

#### Tipos

| Tipo | Función | Ejemplo |
|------|---------|---------|
| **Preventivo** | Impide el error | Conector USB asimétrico |
| **Detectivo** | Detecta el error | Alarma de puerta abierta |
| **Correctivo** | Corrige el error | Auto-correct en typing |

#### Ejemplos en Software

```typescript
// Type safety - Preventivo
type UserRole = 'admin' | 'user' | 'viewer';

function assignRole(role: UserRole): void {
  // TypeScript previene roles inválidos en compile time
  user.role = role;
}

// assignRole('superadmin'); // Error de compilación

// Input validation - Preventivo
function processAge(age: unknown): number {
  if (typeof age !== 'number') {
    throw new TypeError('Age must be a number');
  }
  if (age < 0 || age > 150) {
    throw new RangeError('Age must be between 0 and 150');
  }
  return age;
}

// Null safety - Detectivo
function getUserName(user: User | null): string {
  return user?.name ?? 'Unknown';  // Null check with fallback
}
```

#### Poka-Yoke en Frontend

```typescript
// React: Form validation
const LoginForm = () => {
  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        required
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        title="Please enter a valid email"
      />
      <Input
        type="password"
        required
        minLength={8}
        title="Password must be at least 8 characters"
      />
    </Form>
  );
};
```

### FMEA (Failure Mode and Effects Analysis)

| Step | Descripción |
|------|-------------|
| **1. Identify** | Identificar posibles fallos |
| **2. Analyze** | Evaluar severidad, probabilidad, detectabilidad |
| **3. Prioritize** | Calcular RPN (Risk Priority Number) |
| **4. Action** | Implementar acciones preventivas |
| **5. Verify** | Verificar efectividad |

#### FMEA Template

| Component | Failure Mode | Effect | Severity | Cause | Occurrence | Detection | RPN | Action |
|-----------|--------------|--------|----------|-------|------------|-----------|-----|--------|
| Auth module | Token expired | User locked out | 8 | No refresh | 5 | 3 | 120 | Auto-refresh |
| Database | Connection timeout | App crash | 9 | High load | 3 | 4 | 108 | Connection pooling |
| API Gateway | Rate limit hit | 429 errors | 5 | Traffic spike | 6 | 2 | 60 | Backoff retry |

#### FMEA Calculation

```
RPN = Severity × Occurrence × Detection

Range: 1-1000

High Risk:  RPN > 200 → Immediate action
Medium Risk: RPN 100-200 → Plan action
Low Risk:   RPN < 100 → Monitor
```

### Design Reviews

```yaml
# Code Review Checklist
design_review:
  architecture:
    - separation_of_concerns
    - single_responsibility
    - dependency_inversion
  error_handling:
    - graceful_degradation
    - retry_logic
    - circuit_breaker
  security:
    - input_validation
    - authentication
    - authorization
  performance:
    - caching_strategy
    - lazy_loading
    - pagination
```

### Static Analysis

```yaml
# ESLint Rules for Prevention
rules:
  # Prevent null/undefined errors
  - "@typescript-eslint/no-unnecessary-condition"
  - "no-optional-chaining"

  # Prevent type errors
  - "@typescript-eslint/strict-boolean-expressions"
  - "@typescript-eslint/no-unsafe-assignment"

  # Prevent logic errors
  - "no-duplicate-case"
  - "no-unreachable"
  - "eqeqeq"

  # Prevent security issues
  - "no-eval"
  - "no-implied-eval"
  - "@typescript-eslint/no-non-null-assertion"
```

## Defect Prevention Pipeline

```yaml
# Prevention-focused pipeline
stages:
  - name: design
    checks:
      - architecture_review
      - threat_modeling
      - fMEA_analysis

  - name: development
    checks:
      - type_safety
      - input_validation
      - error_handling

  - name: code_review
    checks:
      - peer_review
      - security_review
      - performance_review

  - name: quality_gate
    checks:
      - unit_test_coverage
      - integration_test_coverage
      - security_scan
```

## Cost-Benefit Analysis

| Defect Stage | Cost to Fix | Relative Cost |
|--------------|-------------|---------------|
| Requirements | $1 | 1x |
| Design | $5 | 5x |
| Code | $10 | 10x |
| Unit Test | $20 | 20x |
| Integration Test | $50 | 50x |
| System Test | $100 | 100x |
| Production | $1,000+ | 1,000x |

## Root Cause Analysis

### 5 Whys

```
Problem: Production outage
1. Why? Server crashed → Out of memory
2. Why? Memory leak → Event listener not cleaned
3. Why? Component re-renders → State update triggers
4. Why? No cleanup in useEffect → Missing dependency
5. Why? No code review caught it → No checklist for React cleanup
Action: Add cleanup checklist to code review
```

### Fishbone Diagram Categories

| Category | Examples |
|----------|----------|
| **People** | Training, fatigue, knowledge gaps |
| **Process** | Missing reviews, unclear requirements |
| **Tools** | Outdated IDE, missing linters |
| **Environment** | Network issues, load |

## Ver también

- [[01-qa-moderno|QA Moderno]]
- [[02-testing-piramide|Pirámide de Testing]]
- [[11-quality-gates|Quality Gates]]
- [[05-security-testing|Security Testing]]
- [[06-owasp-top10|OWASP Top 10]]
