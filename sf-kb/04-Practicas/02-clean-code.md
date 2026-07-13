---
title: "Clean Code"
tags:
  - sf/practicas
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Prácticas y Estándares"
aliases:
  - "Clean Code"
  - "Robert C. Martin"
  - "Uncle Bob"
related:
  - "[[../01-Fundamentos/READ-CODE|Code conventions]]"
  - "[[./11-definition-of-done|Definition of Done]]"
  - "[[./10-refactoring-continuo|Refactoring contínuo]]"
  - "[[./01-coding-standards|Coding Standards]]"
  - "[[./03-test-driven-development|TDD]]"
  - "[[../08-Calidad/READ-LINT|LINT quality]]"
  - "[[../06-Metricas/duplication|Code Duplication]]"
  - "[[./07-documentacion-tecnca|Documentación técnica]]"
  - "[[./06-code-review-best-practices|Code Review]]"
  - "[[../02-Estructura/README|Estructura de código]]"
---

# Clean Code

## Introducción

Clean Code es un conjunto de principios enunciados por Robert C. Martin ("Uncle Bob") en su libro del mismo nombre, que definen cómo escribir código legible, mantenible y seguro.

## Principios clave

### 1. Nombres significativos

| Mal ejemplo | Buen ejemplo |
|-------------|-------------|
| `int d; // elapsed time` | `int elapsedTime;` |
| `getThem();` | `getApprovedVendors();` |
| `f = n % 2 == 0;` | `isEven = n % 2 == 0;` |

- Nombres deben revelar intención.
- Evitar desinformación: `hp` vs `hypotenuse`.

### 2. Funciones pequeñas

Una función debe hacer una sola cosa y debe hacerla bien.

```java
// Mal
public void process(List<Item> items) {
  items.forEach(item -> {
    if (item.isValid()) {
      save(item);
      send(item);
      log(item);
    }
  });
}
```

Refactor to:

```java
// Mejor
public void processValidItems(List<Item> items) {
  items.stream()
      .filter(this::isValid)
      .forEach(this::processItem);
}
```

Reglas de funciones:
- No tener más de ~20 líneas.
- Sin argumentos de control: `setUser(isAdmin)` => `setAdminUser()`.
- Los argumentos booleanos son mal olor.
- Prefer exceptions a retorno de errores.

### 3. Comentarios

El código debe ser auto-documentado. Preferir código explicativo en lugar de comentarios.

```javascript
// Bad
// check if user is authorized
if (user.role === 'admin') {}

// Good
if (hasElevatedPrivileges(user)) {}
```

La documentación vive en archivos README, ADRs, RFCs. Relacionado: [[07-documentacion-tecnca]].

### 4. Formato

Consistencia en todo el proyecto. Usar:

- EditorConfig (ver [[01-coding-standards]])
- Linter + formatter
- blank lines entre conceptos

### 5. Manejo de errores

```java
// Bad
public void saveUser(User u) {
  try {
    // do save
  } catch (Exception e) {
    e.log();
  }
}

// Good
public void saveUser(User u) throws UserSaveException {
  // do save
  // let call handle the exception
}
```

### 6. DRY (Don't repeat)

Duplicación lleva a inconsistencia:
- Si hay duplicación, extraer a método.
- Si hay duplicación en config, externalizar.

### 7. Objetos y estructuras de datos

| Principio | Explicación |
|-----------|-------------|
| Law of Demeter | Talk only to friends |
| Command-Query Segregation | Método o pregunta o com, no ambas |
| Tell, don't ask | Delega, no solicites info vacía |

## Code smells

Indicadores de que se necesita refactoring:

- **Long method**
- **Large class**
- **Duplicated code**
- **Primitive obsession**
- **Shotgun surgery**
- **Feature envy**

Los code smells no son bugs. Guían hacia refactoring oportunistas. Ver [[10-refactoring-continuo]].

## Relación con otras prácticas

| Práctica | Relación |
|----------|----------|
| [[./01-coding-standards]] | Base para higiene |
| [[./03-test-driven-development]] | Codigo limpio es más testeable |
| [[./11-definition-of-done]] | No DoD sin código limpio |
| [[./06-code-review-best-practices]] | Code reviews detectan smells |
| [[../08-Calidad/READ-LINT]] | Lint detecta olores |

## Conclusión

Clean Code es una disciplina, no un objetivo. Se logra con esfuerzo continuo y en equipo.
