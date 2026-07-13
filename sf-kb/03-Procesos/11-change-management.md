---
title: "Change Management"
tags:
  - sf/procesos
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Procesos"
aliases:
  - "Gestión de Cambios"
  - "CAB"
  - "Change Advisory Board"
related:
  - "[[../03-Procesos/10-incidient-management|Gestión de Incidentes]]"
  - "[[../03-Procesos/09-release-management|Release Management]]"
  - "[[../01-Fundamentos/07-devops-filosofia|DevOps]]"
  - "[[../03-Procesos/05-ci-cd-pipeline|CI/CD]]"
  - "[[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]]"
---

# Change Management

**Change Management** es el proceso formal de evaluar, aprobar e implementar cambios en sistemas de producción, asegurando que se realicen de manera segura y controlada.

## Definición

> Change Management es el proceso que controla los cambios en la infraestructura y servicios de TI, minimizando el riesgo de interrupciones y maximizando la estabilidad del servicio.

## Tipos de cambios

| Tipo | Riesgo | Proceso | Ejemplo |
|------|--------|---------|---------|
| **Standard** | Bajo | Pre-aprobado | Patch de seguridad conocido |
| **Normal** | Medio | CAB review | Nueva feature, upgrade de librería |
| **Emergency** | Alto | Expedited CAB | Hotfix de seguridad, fix de producción |

## Proceso de Change Management

```
Request → Risk Assessment → CAB Review → Approval → Implement → Verify → Close
   │          │                │            │          │           │         │
 Ticket    Impact +         Evaluate    Yes/No    Deploy     Monitor   Document
           Mitigation       Schedule              Change     Health    Result
```

### Paso 1: Change Request

```markdown
# Change Request: CR-2024-0123

## Resumen
- Upgrade de PostgreSQL de 14 a 15

## Justificación
- CVE de seguridad en v14
- Soporte fino en EOL

## Alcance
- Base de datos principal (producción)
- 3 replicas de read

## Riesgos identificados
- Breaking changes en queries
- Downtime de 5-10 minutos

## Mitigaciones
- Testing en staging completo
- Backup antes del cambio
- Rollback plan documentado

## Ventana de cambio
- Fecha: 2024-03-15 02:00-04:00 UTC
- Impacto esperado: < 10 minutos downtime
```

### Paso 2: Risk Assessment

| Factor de riesgo | Puntuación | Descripción |
|-----------------|------------|-------------|
| **Impacto al negocio** | 1-5 | 1=bajo, 5=crítico |
| **Probabilidad de fallo** | 1-5 | 1=improbable, 5=seguro |
| **Complejidad** | 1-5 | 1=simple, 5=complejo |
| **Reversibilidad** | 1-5 | 1=fácil revertir, 5=irreversible |
| **Ventana de cambio** | 1-5 | 1=flexible, 5=urgente |

**Score total:**
- **1-8**: Standard change (pre-aprobado)
- **9-16**: Normal change (CAB review)
- **17-25**: High risk (CAB + management approval)

### Paso 3: CAB (Change Advisory Board)

| Rol | Responsabilidad |
|-----|----------------|
| **CAB Chair** | Facilita la reunión, toma decisión |
| **Change Manager** | Evalúa completitud de la solicitud |
| **Technical Lead** | Evalúa viabilidad técnica |
| **Operations** | Evalúa impacto en infraestructura |
| **Security** | Evalúa riesgos de seguridad |
| **Business** | Evalúa impacto en negocio |

### Reunión del CAB

**Agenda típica (30 min):**
1. Revisar cambios propuestos (5 min cada uno)
2. Preguntas y discusión
3. Decisión: Aprobar / Rechazar / Diferir
4. Asignar ventana de cambio

### Paso 4: Implementación

```markdown
## Pre-deploy
- [ ] Notificar a stakeholders
- [ ] Backup completo
- [ ] Verificar staging
- [ ] Confirmar rollback plan

## Deploy
- [ ] Ejecutar change según procedimiento
- [ ] Monitorear métricas en tiempo real
- [ ] Verificar health checks

## Post-deploy
- [ ] Confirmar servicios operacionales
- [ ] Monitorear por 30 minutos
- [ ] Documentar resultado
- [ ] Cerrar change request
```

### Paso 5: Rollback Strategy

| Estrategia | Cuándo usarla |
|------------|---------------|
| **Revert inmediato** | Cambio simple, datos no modificados |
| **Restore from backup** | Cambio con datos, backup disponible |
| **Feature flag off** | Cambio detrás de feature flag |
| **Blue-green swap** | Ambiente dual disponible |
| **Manual rollback** | Procedimiento complejo documentado |

```markdown
## Rollback Plan: CR-2024-0123

### Trigger para rollback
- Error rate > 1% después de 5 minutos
- Latencia p99 > 2 segundos
- Health check falla

### Pasos de rollback
1. Detener migración
2. Restaurar backup de PostgreSQL 14
3. Reiniciar servicios
4. Verificar conectividad
5. Notificar a stakeholders

### Tiempo estimado de rollback: 10 minutos
### Data loss risk: Ninguno (backup pre-migración)
```

## Change Management en DevOps

La [[../01-Fundamentos/07-devops-filosofia|filosofía DevOps]] transforma el Change Management:

| Tradicional | DevOps |
|-------------|--------|
| CAB manual para cada cambio | Auto-aprobación para cambios de bajo riesgo |
| Ventanas de cambio fijas | Deploy continuo |
| Documentación pesada | Pipeline como evidencia |
| Fear of change | Cambios pequeños y frecuentes |

### Automatización del Change Management

```
Pipeline automático:
1. Code review → Aprobación técnica
2. CI tests → Evidencia de calidad
3. Security scan → Aprobación de seguridad
4. Deploy approval → Aprobación de release
5. Monitoring → Evidencia de estabilidad
```

## Métricas de Change Management

| Métrica | Objetivo |
|---------|----------|
| **Change Success Rate** | > 95% |
| **Change Failure Rate** | < 5% |
| **Lead Time** | < 1 semana |
| **CAB Approval Time** | < 24 horas |
| **Rollback Rate** | < 3% |

## Compliance y auditoría

| Requisito | Cómo cumplir |
|-----------|-------------|
| **Trazabilidad** | IDs de change en commits y deploys |
| **Aprobación** | Logs de CAB y approvals |
| **Testing** | Reportes de CI/CD como evidencia |
| **Rollback** | Plan documentado y probado |
| **Post-change review** | Post-mortems para cambios fallidos |

## Relación con otros conceptos

- [[../03-Procesos/10-incidient-management|Incidentes]] pueden requerir cambios emergency
- [[../03-Procesos/09-release-management|Release Management]] coordina los cambios
- [[../02-Estructura/08-gobernanza-tecnica|Gobernanza Técnica]] define políticas
- [[../01-Fundamentos/07-devops-filosofia|DevOps]] automatiza el proceso
- [[../03-Procesos/05-ci-cd-pipeline|CI/CD]] ejecuta los cambios
