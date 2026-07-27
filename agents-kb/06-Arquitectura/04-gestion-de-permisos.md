---
title: "Gestión de Permisos"
tags:
  - agents/arquitectura
  - type/guia
  - difficulty/avanzado
created: 2026-07-27
updated: 2026-07-27
category: "Arquitectura"
aliases:
  - "Permissions"
  - "Access Control"
related:
  - "[[05-seguridad-y-gobierno]]"
  - "[[03-Harness-Por-Rol/01-diseno-de-harnesses|Diseño de Harnesses]]"
---

# Gestión de Permisos

## Principio de Mínimo Privilegio

Cada agente debe tener solo los permisos necesarios para su función.

## Modelo de Permisos

```yaml
permission:
  read:
    - kb-publica/        # Acceso a KB pública
    - kb-area/           # KB de su área
    # NO: kb-sensible/   # Datos sensibles
  edit:
    - docs-area/         # Puede editar docs de su área
    # NO: config/        # No puede modificar configuración
  bash:
    - scripts-seguros/   # Puede ejecutar scripts aprobados
    # NO: produccion/    # No puede tocar producción
```

## Matriz de Permisos por Rol

| Rol | read | edit | bash | Sistemas |
|-----|------|------|------|----------|
| Gerente | KB general | Denied | Denied | Dashboard |
| Arquitecto | KB + Docs | Docs | Denied | Repos |
| Desarrollador | KB + Code | Code | Tests | CI/CD |
| DevOps | KB + Infra | Config | Scripts | Infra |
| Soporte | KB soporte | Denied | Denied | Tickets |

## Auditoría

Cada acción de un agente debe ser registrada:

```json
{
  "timestamp": "2026-07-27T10:30:00Z",
  "agent": "soporte-n1",
  "action": "file_read",
  "target": "kb-soporte/faq-internet.md",
  "user": "cliente-12345",
  "result": "success"
}
```

## Ver también

- [[05-seguridad-y-gobierno|Seguridad]]
- [[03-Harness-Por-Rol/01-diseno-de-harnesses|Diseño de Harnesses]]
