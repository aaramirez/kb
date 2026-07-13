---
title: "Plantilla 8D"
tags:
  - lean/herramientas
  - type/plantilla
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Plantilla 8D
  - 8D Report
  - Eight Disciplines
  - Ocho Disciplinas
related:
  - "[[03-a3-resolucion-problemas]]"
  - "[[23-analisis-causa-raiz]]"
  - "[[12-los-cinco-porques]]"
  - "[[10-pdca]]"
  - "[[11-poka-yoke]]"
---

# Plantilla 8D

La **Plantilla 8D** (Eight Disciplines) es un enfoque estructurado de [[Lean Manufacturing]] para resolver problemas, originalmente desarrollado por Ford Motor Company. Es especialmente útil para problemas de calidad recurrentes que requieren acción correctiva formal.

## ¿Cuándo Usar 8D?

- Problemas de calidad repetitivos
- Reclamaciones de clientes
- No conformidades graves
- Problemas que requieren acción correctiva documentada
- Cuando se necesita un análisis profundo de causa raíz

## Las 8 Disciplinas

```
D0: Preparación
    │
    ▼
D1: Formar el Equipo
    │
    ▼
D2: Definir el Problema
    │
    ▼
D3: Contención Temporal
    │
    ▼
D4: Causa Raíz
    │
    ▼
D5: Acciones Correctivas
    │
    ▼
D6: Implementación y Verificación
    │
    ▼
D7: Prevención
    │
    ▼
D8: Reconocimiento del Equipo
```

### D0: Preparación y Emergencia
Evaluar si el problema requiere acción inmediata de emergencia.

**Acciones:**
- Evaluar la urgencia del problema
- Si es crítico, activar protocolo de emergencia
- Recopilar información inicial
- Determinar si se necesita 8D

**Preguntas clave:**
- ¿Hay riesgo para seguridad del cliente?
- ¿Cuántas unidades están afectadas?
- ¿El problema está contenido?

### D1: Formar el Equipo
Crear un equipo multifuncional con la experiencia necesaria.

**Composición típica:**
- Líder del equipo (facilitador)
- Ingeniero de calidad
- Representante de producción
- Representante de diseño/ingeniería
- Representante de proveedor (si aplica)
- Representante del cliente (si aplica)

### D2: Definir el Problema
Describir el problema con datos específicos usando el formato **5W2H**:

| Elemento | Pregunta | Ejemplo |
|----------|----------|---------|
| **What** | ¿Qué problema? | Pieza fuera de tolerancia |
| **Where** | ¿Dónde? | Estación de soldadura #3 |
| **When** | ¿Cuándo? | Desde el 15 de marzo |
| **Who** | ¿Quién? | Turno B |
| **Why** | ¿Por qué es importante? | 15% de reclamaciones |
| **How** | ¿Cómo se detectó? | Inspección final |
| **How much** | ¿Cuánto? | 45 unidades afectadas |

### D3: Contención Temporal (Interim Containment)
Implementar una solución temporal para proteger al cliente mientras se busca la causa raíz.

**Acciones:**
- Separar material sospechoso
- Inspeccionar 100% del producto afectado
- Notificar a clientes/proveedores
- Implementar inspección temporal

**Importante:** La contención NO es la solución final. Es una medida temporal.

### D4: Causa Raíz (Root Cause)
Identificar la causa raíz usando herramientas de [[23-analisis-causa-raiz|RCA]]:

**Herramientas a usar:**
- [[12-los-cinco-porques|5 Porqués]]
- Diagrama de Ishikawa
- Análisis de datos
- Verificación en [[06-gemba|Gemba]]

**Estructura:**
```
Causa Raíz 1: [CAUSA] → ¿Por qué? → [EXPLICACIÓN]
Causa Raíz 2: [CAUSA] → ¿Por qué? → [EXPLICACIÓN]
Causa Raíz 3: [CAUSA] → ¿Por qué? → [EXPLICACIÓN]
```

### D5: Acciones Correctivas
Diseñar y seleccionar acciones permanentes que eliminen la causa raíz.

**Criterios:**
- ¿Elimina la causa raíz?
- ¿Es permanente (no temporal)?
- ¿Se puede estandarizar?
- ¿Previene recurrencia?

### D6: Implementación y Verificación
Implementar las acciones correctivas y verificar que son efectivas.

**Acciones:**
- Implementar cambios
- Verificar con datos que el problema se resolvió
- Monitorear durante periodo de prueba
- Documentar resultados

### D7: Prevención
Prevenir que problemas similares ocurran en otros procesos, productos o áreas.

**Acciones:**
- Actualizar [[19-trabajo-estandarizado|estándares]]
- Implementar [[11-poka-yoke|Poka-Yoke]] si aplica
- Actualizar procedimientos de diseño/producción
- Compartir lecciones aprendidas
- Actualizar FMEA

### D8: Reconocimiento del Equipo
Reconocer y celebrar el trabajo del equipo.

**Acciones:**
- Documentar el logro
- Reconocer contribuciones individuales
- Compartir resultados con la organización
- Cerrar formalmente el 8D

## 8D vs A3

| Aspecto | 8D | A3 |
|---------|-----|-----|
| Enfoque | Acción correctiva formal | Resolución de problemas general |
| Estructura | 8 pasos fijos | 7 secciones flexibles |
| Uso típico | Calidad, reclamaciones | Mejora continua |
| Auditoría | Frecuente en automotriz | Menos formal |
| Documentación | Más formal | Menos formal |
| Contención | Fase dedicada (D3) | No tiene fase dedicada |

## Plantilla en Blanco

```
REPORTE 8D — [NÚMERO]
Fecha: [FECHA]
Problema: [DESCRIPCIÓN]

D0 — Preparación: [ACCIÓN DE EMERGENCIA SI APLICA]
D1 — Equipo: [MIEMBROS DEL EQUIPO]
D2 — Problema: [DESCRIPCIÓN CON 5W2H]
D3 — Contención: [ACCIONES TEMPORALES]
D4 — Causa Raíz: [ANÁLISIS CON 5 PORQUÉS]
D5 — Correctivas: [ACCIONES PERMANENTES]
D6 — Verificación: [RESULTADOS DE VERIFICACIÓN]
D7 — Prevención: [ACCIONES PREVENTIVAS]
D8 — Reconocimiento: [CELEBRACIÓN Y CIERRE]
```

## Notas Relacionadas

- [[03-a3-resolucion-problemas]] — Formato alternativo para resolución de problemas
- [[23-analisis-causa-raiz]] — Herramientas de análisis (D4)
- [[12-los-cinco-porques]] — Herramienta clave en D4
- [[10-pdca]] — Ciclo que estructura el 8D
- [[11-poka-yoke]] — Contramedida preventiva (D7)
- [[19-trabajo-estandarizado]] — Estándares actualizados en D7
- [[06-gemba]] — Observación para entender el problema
