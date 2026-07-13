---
title: "TPM (Total Productive Maintenance)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - TPM
  - Mantenimiento Productivo Total
  - Total Productive Maintenance
related:
  - "[[16-oee]]"
  - "[[22-seis-grandes-perdidas]]"
  - "[[01-5s]]"
  - "[[02-andon]]"
  - "[[13-smed]]"
  - "[[10-pdca]]"
---

# TPM (Total Productive Maintenance)

**TPM** (Total Productive Maintenance) es un enfoque de [[Lean Manufacturing]] para mantener y mejorar la integridad de la producción y calidad a través de la **mantención de las máquinas, equipos y procesos**. Busca cero fallos, cero defectos y cero accidentes.

## Origen

TPM fue desarrollado en Japón en los años 1960 por Seiichi Nakajima en Nippondenso (actual Denso), basándose en los conceptos de [[01-Fundamentos/01-historia-lean|Taiichi Ohno]] en Toyota. Se convirtió en uno de los 8 pilares del [[02-Pilares/01-just-in-time|Sistema de Producción Toyota]].

## Definición

TPM es un sistema de mantenimiento que involucra a **todos los empleados** — desde operadores hasta alta dirección — para maximizar la efectividad de los equipos a través del mantenimiento autónomo y planificado.

## Los 8 Pilares de TPM

```
                    TPM
                    │
    ┌───────┬───────┼───────┬───────┐
    │       │       │       │       │
  Mant.   Mant.   Mant.   Mant.   Foco
 Autónomo Planificado Mejora  de la  en Equipo
    │       │       │   Calidad  Joven
    ├───────┼───────┼───────┤
    │       │       │       │
  Seguridad Entorno Habilid. TPM
             Limpio  Operad. Inicial
```

### 1. Mantenimiento Autónomo
Los **operadores** realizan la limpieza, inspección y lubricación básica de sus máquinas. No dependen exclusivamente del equipo de mantenimiento.

**Pasos:**
- Limpiar e inspeccionar la máquina
- Identificar y eliminar fuentes de contaminación
- Establecer estándares de limpieza e inspección

### 2. Mantenimiento Planificado
Mantenimiento preventivo y predictivo programado para evitar fallos no planificados.

**Tipos:**
- **Preventivo:** Basado en intervalos de tiempo o uso
- **Predictivo:** Basado en condición del equipo (vibración, temperatura)
- **Correctivo:** Reparación después del fallo (lo que TPM busca minimizar)

### 3. Mejora de Calidad
Integrar la prevención de defectos en el mantenimiento. Los equipos bien mantenidos producen mejor calidad.

### 4. Foco en Equipo Joven
Diseñar equipos nuevos con facilidad de mantenimiento en mente (maintainability by design).

### 5. Mantenimiento Temprano
Involucrar a mantenimiento desde la fase de diseño de nuevos equipos.

### 6. Entorno de Trabajo Limpio y Seguro
Extender las [[01-5s|5S]] al mantenimiento. Un entorno limpio facilita la detección de problemas.

### 7. Habilidades de los Operadores
Capacitar a los operadores en habilidades básicas de mantenimiento.

### 8. Seguridad
Cero accidentes. La seguridad es un prerrequisito para todo el sistema.

## OEE y TPM

La métrica clave de TPM es el **[[16-oee|OEE]]** (Overall Equipment Effectiveness):

```
OEE = Disponibilidad × Rendimiento × Calidad
```

| Componente | Mide | Pérdida asociada |
|-----------|------|-------------------|
| Disponibilidad | % tiempo que la máquina produce | Paradas no planificadas |
| Rendimiento | Velocidad real vs teórica | Reducción de velocidad |
| Calidad | % unidades buenas | Defectos de proceso |

TPM ataca las **[[22-seis-grandes-perdidas|Seis Grandes Pérdidas]]** que reducen el OEE.

## OEE y Targets

| Nivel OEE | Clasificación |
|-----------|---------------|
| 85%+ | Mundial (World Class) |
| 70-85% | Bueno |
| 55-70% | Promedio |
| <55% | Necesita mejoras significativas |

## Beneficios de TPM

| Beneficio | Impacto |
|-----------|---------|
| Menos breakdowns | Mayor disponibilidad de equipos |
| Mayor calidad | Menos defectos por equipos mal mantenidos |
| Mayor seguridad | Cero accidentes con mantenimiento preventivo |
| Reducción de costos | Menos reparaciones de emergencia |
| Mayor moral | Operadores empoderados y capacitados |
| Vida extendida de equipos | Mantención adecuada prolonga la vida útil |

## TPM y Otras Herramientas

- **[[01-5s|5S]]** — Base visual para la limpieza e inspección del equipo
- **[[02-andon|Andon]]** — Señalización cuando el equipo falla
- **[[13-smed|SMED]]** — Tiempos de cambio rápidos complementan TPM
- **[[10-pdca|PDCA]]** — Ciclo para mejorar el mantenimiento continuamente
- **[[22-seis-grandes-perdidas|Seis Grandes Pérdidas]]** — TPM las identifica y elimina

## Aplicación en Software

En desarrollo de software, TPM se traduce como:
- **Monitoreo de infraestructura:** Alertas proactivas de servidores
- **Mantenimiento de código:** Refactoring programado, actualización de dependencias
- **Cuidado de pipelines:** Mantener CI/CD funcionando óptimamente
- **Documentación viva:** Mantener docs actualizados como "mantenimiento del conocimiento"

## Errores Comunes

- Dejar todo el mantenimiento al equipo técnico exclusivamente
- No medir OEE como línea base antes de implementar
- Implementar solo mantenimiento preventivo sin autónomo
- No involucrar a la dirección en el programa TPM
- Ignorar la limpieza como forma de inspección

## Notas Relacionadas

- [[16-oee]] — Métrica clave que TPM mejora
- [[22-seis-grandes-perdidas]] — Pérdidas que TPM ataca directamente
- [[01-5s]] — Base para el mantenimiento autónomo
- [[02-andon]] — Señalización de fallos del equipo
- [[13-smed]] — Complemento para tiempos de cambio
- [[10-pdca]] — Mejora continua del programa TPM
- [[02-Pilares/01-just-in-time|JIT]] — TPM es prerrequisito para JIT confiable
