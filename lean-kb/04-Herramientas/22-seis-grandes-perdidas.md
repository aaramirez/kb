---
title: "Seis Grandes Pérdidas (Six Big Losses)"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Seis Grandes Pérdidas
  - Six Big Losses
  - 6 Grandes Pérdidas
  - Seis Pérdidas
related:
  - "[[16-oee]]"
  - "[[15-tpm]]"
  - "[[10-pdca]]"
  - "[[06-gemba]]"
  - "[[14-takt-time]]"
---

# Seis Grandes Pérdidas (Six Big Losses)

Las **Seis Grandes Pérdidas** son las principales causas de ineficiencia en la producción, identificadas por [[01-Fundamentos/01-historia-lean|Taiichi Ohno]] en Toyota. Son la base del sistema [[16-oee|OEE]] y el punto de partida del [[15-tpm|TPM]].

## Definición

Las Seis Grandes Pérdidas categorizan todas las formas en que una máquina o proceso puede perder capacidad productiva. Cada pérdida se mapea a uno de los tres componentes del [[16-oee|OEE]].

## Las Seis Grandes Pérdidas

### Pérdidas de Disponibilidad (Availability Loss)

**1. Averías (Breakdowns)**
Fallas inesperadas que detienen la máquina completamente.

- Rotura de componentes
- Fallos eléctricos
- Daños mecánicos

**2. Setup y Ajuste (Setup & Adjustment)**
Tiempo perdido al cambiar de un producto a otro o al ajustar la máquina.

- Cambio de moldes o herramientas
- Calibración después del cambio
- Primeras piezas de ajuste

**Pérdida:** La máquina está parada, no produce nada.

---

### Pérdidas de Rendimiento (Performance Loss)

**3. Paradas Menores y Idle (Idling & Minor Stops)**
Pérdidas breves (generalmente <5 minutos) que no se registran como downtime.

- Sensor bloqueado temporalmente
- Material atascado
- Operador ajustando algo rápidamente

**4. Reducción de Velocidad (Reduced Speed)**
La máquina opera a menor velocidad que su capacidad nominal.

- Desgaste de herramientas
- Material de baja calidad
- Condiciones subóptimas de operación
- Operador nuevo o poco experimentado

**Pérdida:** La máquina produce, pero menos de lo que podría.

---

### Pérdidas de Calidad (Quality Loss)

**5. Defectos de Proceso (Process Defects)**
Productos que no cumplen especificaciones durante la producción.

- Material defectuoso
- Configuración incorrecta
- Error humano
- Condiciones ambientales

**6. Arranques Defectuosos (Startup Rejects)**
Productos defectuosos generados durante el arranque o después de un cambio.

- Primeras piezas fuera de tolerancia
- Calibración inicial
- Transiciones de producción

**Pérdida:** Se produce, pero los productos son rechazados.

## Mapa de las 6 Pérdidas

```
┌─────────────────────────────────────────────────┐
│                  OEE TOTAL                       │
├──────────────┬──────────────┬───────────────────┤
│ Disponibilidad│  Rendimiento │     Calidad       │
│              │              │                   │
│ 1. Averías   │ 3. Paradas   │ 5. Defectos       │
│              │    menores   │    de proceso     │
│ 2. Setup     │ 4. Reducción │ 6. Arranques      │
│    y Ajuste  │    velocidad │    defectuosos    │
│              │              │                   │
└──────────────┴──────────────┴───────────────────┘
```

## Estrategias para Cada Pérdida

| Pérdida | Herramienta Principal | Acción Clave |
|---------|----------------------|--------------|
| Averías | [[15-tpm\|TPM]] — Mant. Planificado | Mantención preventivo y predictivo |
| Setup/Ajuste | [[13-smed\|SMED]] | Reducir tiempo de cambio |
| Paradas menores | [[01-5s\|5S]] + Inspección | Identificar fuentes de contaminación |
| Reducción velocidad | [[15-tpm\|TPM]] — Mant. Autónomo | Operadores mantienen velocidad óptima |
| Defectos proceso | [[11-poka-yoke\|Poka-Yoke]] | Prevenir errores con dispositivos a prueba |
| Arranques defect. | [[19-trabajo-estandarizado\|Std Work]] | Estandarizar arranques y transiciones |

## Cómo Medir

Para cada pérdida, se necesita:
1. **Tiempo perdido** — Minutos reales de la pérdida
2. **Frecuencia** — Cuántas veces ocurre por turno/semana
3. **Impacto** — Unidades perdidas o capacidad reducida
4. **Tendencia** — Si aumenta, disminuye o se mantiene

## Conexión con OEE

```
Disponibilidad = (Tiempo Total - Averías - Setup) / Tiempo Total
Rendimiento    = (Tiempo Operación × Vel Real) / (Tiempo Operación × Vel Ideal)
Calidad        = Unidades Buenas / Unidades Totales

OEE = Disponibilidad × Rendimiento × Calidad
```

## Priorización de Pérdidas

No todas las pérdidas se atacan igual. Usar **Pareto**:
1. Medir cuál pérdida es la mayor
2. Atacar la mayor primero con [[10-pdca|PDCA]]
3. Medir效果果 después de la acción
4. Repetir con la siguiente mayor

## Aplicación en Software

Aplicado a infraestructura:

| Pérdida | Equivalente en Software |
|---------|------------------------|
| Averías | Downtime del servidor |
| Setup | Tiempo de deployment |
| Paradas menores | Timeouts temporales, retries |
| Reducción velocidad | Latencia elevada |
| Defectos proceso | Errores 5xx, bugs en producción |
| Arranques defect. | Issues post-deploy |

## Notas Relacionadas

- [[16-oee]] — OEE cuantifica estas pérdidas
- [[15-tpm]] — TPM las identifica y elimina
- [[10-pdca]] — Ciclo para atacar cada pérdida
- [[06-gemba]] — Observar para identificar pérdidas reales
- [[14-takt-time]] — Capacidad perdida vs demanda
- [[13-smed]] — Reduce Setup/Ajuste
- [[11-poka-yoke]] — Previene defectos de proceso
- [[01-5s]] — Base para detectar pérdidas menores
