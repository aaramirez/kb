---
title: "Takt Time - Tiempo de Ritmo"
tags:
  - lean/herramientas
  - type/herramienta
  - difficulty/principiante
created: 2026-07-12
updated: 2026-07-12
category: Herramientas Lean
aliases:
  - Takt Time
  - Tiempo de Ritmo
  - Ritmo de Producción
  - Takt
related:
  - "[[05-flujo-continuo]]"
  - "[[07-heijunka]]"
  - "[[09-kanban]]"
  - "[[19-trabajo-estandarizado]]"
  - "[[10-pdca]]"
  - "[[16-oee]]"
---

# Takt Time - Tiempo de Ritmo

El **Takt Time** es el **ritmo de producción** que debe mantener un sistema para satisfacer exactamente la demanda del cliente. Es el "latido del corazón" del sistema Lean.

## Definición

**Takt Time** (del alemán *Taktzeit*, "ritmo de tiempo") es el tiempo disponible dividido por la demanda del cliente. Define con qué frecuencia debe completarse una unidad de producto.

> "Takt Time no es cuánto tarda en hacerse algo, sino cuánto tiempo **tenemos** para hacerlo."

## Fórmula

```
Takt Time = Tiempo Disponible Neto / Demanda del Cliente
```

**Ejemplo:**
- Turno de 8 horas = 480 minutos
- Pausas: 30 minutos de almuerzo + 15 minutos de descansos = 45 minutos
- Tiempo neto: 480 - 45 = 435 minutos = 26,100 segundos
- Demanda del cliente: 435 unidades por turno

```
Takt Time = 26,100 segundos / 435 unidades = 60 segundos por unidad
```

Esto significa que cada minuto debe completarse exactamente una unidad.

## ¿Por Qué Importa?

| Sin Takt Time | Con Takt Time |
|---------------|---------------|
| Se produce lo que se puede | Se produce lo que se necesita |
| Sobreproducción o subproducción | Producción exacta a demanda |
| No hay ritmo conocido | Todo el sistema se sincroniza |
| Inventario excesivo o faltantes | Balance entre demanda y oferta |

## Takt Time vs Otras Métricas

| Métrica | Significado | Relación |
|---------|-------------|----------|
| **Takt Time** | Ritmo demandado por cliente | Lo que **debemos** producir |
| **Cycle Time** | Tiempo real en completar una unidad | Lo que **podemos** producir |
| **Lead Time** | Tiempo total de entrega | Incluye espera + proceso |

**Clave:** Si Cycle Time < Takt Time → se puede cumplir la demanda. Si Cycle Time > Takt Time → hay un [[04-analisis-de-cuellos-de-botella|cuello de botella]].

## Takt Time y JIT

El Takt Time es la herramienta que sincroniza todo el sistema [[01-Fundamentos/01-que-es-lean|Lean]]:
- **[[05-flujo-continuo|Flujo Continuo]]** se diseña alrededor del Takt Time
- **[[07-heijunka|Heijunka]]** usa Takt Time para nivelar la producción
- **[[09-kanban|Kanban]]** regula la señal según el ritmo establecido
- **[[19-trabajo-estandarizado|Trabajo Estandarizado]]** define tareas dentro del Takt Time

## Pasos para Aplicar Takt Time

1. **Determinar el tiempo disponible** — Minutos netos por turno (descontar pausas, reuniones)
2. **Conocer la demanda** — ¿Cuántas unidades necesita el cliente por turno?
3. **Calcular** — Dividir tiempo disponible entre demanda
4. **Comparar con Cycle Time** — ¿El proceso actual es más rápido o más lento?
5. **Ajustar** — Si es más rápido, hay espera. Si es más lento, hay [[04-analisis-de-cuellos-de-botella|cuello de botella]]
6. **Diseñar el flujo** — Organizar estaciones de trabajo para cumplir el Takt Time

## Ejemplo Visual

```
Demanda: 480 unidades / turno
Tiempo disponible: 28,800 segundos

Takt Time = 28,800 / 480 = 60 segundos

───|───|───|───|───|───|───|───|───|───|───|───|───
   60  120 180 240 300 360 420 480 540 600 660 720

Cada segmento = 60 segundos = 1 unidad debe completarse
```

## Takt Time y Variabilidad

La demanda rara vez es constante. Para manejar variabilidad:
- **Takt Time diario** — Recalcular según demanda del día
- **Takt Time con buffer** — Usar capacidad del 85-90% para absorber variación
- **[[07-heijunka|Heijunka]]** — Nivelar la variación en promedio semanal

## Takt Time en Software

Aplicado a desarrollo de software:
- **Sprint velocity:** Cuántas historias de usuario se completan por sprint
- **Deployment frequency:** Frecuencia de releases
- **Lead time:** Tiempo de commit a producción
- **WIP Limits:** Limitan cuánto puede estar en progreso a la vez

## Errores Comunes

- Usar tiempo bruto en vez de neto (olvidar pausas)
- Calcular una sola vez y no recalcular cuando cambia la demanda
- Confundir Takt Time con Cycle Time
- Ignorar la variabilidad de la demanda
- No ajustar la capacidad del sistema al Takt Time

## Notas Relacionadas

- [[05-flujo-continuo]] — Flujo diseñado alrededor del Takt Time
- [[07-heijunka]] — Nivelación usando Takt Time como base
- [[09-kanban]] — Señalización sincronizada con el ritmo
- [[19-trabajo-estandarizado]] — Tareas diseñadas dentro del Takt Time
- [[10-pdca]] — Ajuste continuo del ritmo
- [[16-oee]] — Capacidad real vs Takt Time
- [[04-analisis-de-cuellos-de-botella]] — Identificar cuándo Cycle Time > Takt Time
