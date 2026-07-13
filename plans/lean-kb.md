# Lean Knowledge Base — Obsidian Vault

## Objective

Crear un vault Obsidian integral sobre Lean y todas sus vertientes que funcione como recurso de entrenamiento progresivo y base de conocimiento práctica para implementar metodologías Lean en cualquier industria.

## Decisiones Confirmadas

| Decisión | Elección |
|----------|----------|
| **Idioma** | Español con términos originales en inglés/japonés |
| **Profundidad vertientes** | Todas iguales |
| **Contenido inicial** | Marcos conceptuales, modelos, simples para aprender principios |
| **Templates** | Sí (plantillas + documentación descriptiva) |
| **Fase inicial** | Fase 1 → Fase 2 → Fase 3 |
| **Ramas faltantes agregadas** | Lean Change, Lean Coffee |

---

## 1. Alcance del Assessment

### 1.1 Lo que cubre este plan

| Área | Sub-áreas | Notas estimadas |
|------|-----------|-----------------|
| **Fundamentos Lean** | Historia, TPS, Toyota Way, 5 Principios Lean, Pensamiento Lean | 15 |
| **Pilares Lean** | JIT, Jidoka, Kaizen, Respeto por las Personas, Casa Lean, Cultura Lean | 9 |
| **Desperdicios (3M)** | Muda (8 desperdicios), Mura, Muri, identificación y eliminación | 15 |
| **Herramientas Lean** | 25+ herramientas con guías de implementación | 35 |
| **Vertientes/ ramas** | Manufactura, Six Sigma, Startup, Software, Healthcare, Construction, IT, Government, Education, Agile-Lean, Lean 4.0, Lean Change, Lean Coffee | 90 |
| **Metodologías complementarias** | Six Sigma, TOC, TQM, 8D, FMEA, SPC, DOE | 12 |
| **Implementación** | Transformación Lean, Shingo, Managed Daily, Liderazgo, Métricas, KPIs, Roadmap | 19 |
| **Ruta de aprendizaje** | Principiante → Intermedio → Avanzado + Guía de certificación | 7 |
| **Archivos raíz** | Índice maestro, Glosario, Línea temporal, Cómo usar este KB | 4 |
| **TOTAL** | | **~206 notas** |

### 1.2 Lo que NO cubre este plan (pero puede expandirse después)

- Contenido específico de certificación Six Sigma (belts Yellow/Green/Black) con ejercicios de examen
- Contenido regional (Lean en específicos países o regulaciones locales)
- Catálogo completo de software Lean (Jira, Trello, etc.)
- Certificación formal de instructores
- Contenido de casos de estudio reales (Fase 1 es solo marcos conceptuales; casos se agregan en fases posteriores)

---

## 2. Estructura del Vault

**Ruta del vault:** `lean-kb/` (nivel raíz del proyecto)
**Tipo de detección para docgen-vault.js:** `topics` (patrón `NN-Nombre/`)

```
lean-kb/
├── Index.md                              # Punto de entrada maestro
├── como-usar-este-kb.md                  # Guía de orientación
├── lean-glossary.md                      # Glosario maestro
├── lean-timeline.md                      # Línea temporal histórica
│
├── 01-Fundamentos/                       # ~15 notas
│   ├── README.md                         # Resumen de sección + objetivos
│   ├── 01-historia-lean.md
│   ├── 02-toyota-production-system.md
│   ├── 03-toyota-way-14-principios.md
│   ├── 04-pensamiento-lean-womack-jones.md
│   ├── 05-cinco-principios-lean.md
│   ├── 06-valor.md
│   ├── 07-cadena-de-valor.md
│   ├── 08-flujo.md
│   ├── 09-sistema-de-tirón.md
│   ├── 10-perfección.md
│   ├── 11-evolución-lean.md
│   ├── 12-lean-vs-produccion-tradicional.md
│   ├── 13-pensadores-lean-clave.md
│   └── 14-casa-del-lean-detallada.md
│
├── 02-Pilares/                           # ~9 notas
│   ├── README.md
│   ├── 01-just-in-time.md
│   ├── 02-jidoka.md
│   ├── 03-kaizen.md
│   ├── 04-respeto-por-las-personas.md
│   ├── 05-casa-del-lean.md
│   ├── 06-modelo-tres-pilares.md
│   ├── 07-cultura-lean.md
│   └── 08-jit-vs-jidoka-comparativa.md
│
├── 03-Desperdicios/                      # ~15 notas
│   ├── README.md
│   ├── 01-marco-3m.md
│   ├── 02-muda-desperdicio.md
│   ├── 03-mura-desigualdad.md
│   ├── 04-muri-sobrecarga.md
│   ├── 05-desperdicio-sobreproduccion.md
│   ├── 06-desperdicio-espera.md
│   ├── 07-desperdicio-transporte.md
│   ├── 08-desperdicio-sobreprocesamiento.md
│   ├── 09-desperdicio-inventario.md
│   ├── 10-desperdicio-movimiento.md
│   ├── 11-desperdicio-defectos.md
│   ├── 12-desperdicio-talento-no-utilizado.md
│   ├── 13-identificacion-de-desperdicios.md
│   └── 14-estrategias-eliminacion-desperdicios.md
│
├── 04-Herramientas/                      # ~35 notas
│   ├── README.md                          # Catálogo maestro de herramientas
│   ├── 01-5s.md
│   ├── 02-andon.md
│   ├── 03-a3-resolucion-problemas.md
│   ├── 04-analisis-de-cuellos-de-botella.md
│   ├── 05-flujo-continuo.md
│   ├── 06-gemba.md
│   ├── 07-heijunka.md
│   ├── 08-hoshin-kanri.md
│   ├── 09-kanban.md
│   ├── 10-pdca.md
│   ├── 11-poka-yoke.md
│   ├── 12-los-cinco-porques.md
│   ├── 13-smed.md
│   ├── 14-takt-time.md
│   ├── 15-tpm.md
│   ├── 16-oee.md
│   ├── 17-mapeo-cadena-de-valor-vsm.md
│   ├── 18-gestion-visual.md
│   ├── 19-trabajo-estandarizado.md
│   ├── 20-manufactura-celular.md
│   ├── 21-kaizen-blitz.md
│   ├── 22-seis-grandes-perdidas.md
│   ├── 23-analisis-de-causa-raiz.md
│   ├── 24-plantilla-a3.md
│   ├── 25-plantilla-8d.md
│   ├── guia-implementacion-5s.md
│   ├── guia-implementacion-kanban.md
│   ├── guia-ciclo-pdca.md
│   ├── guia-implementacion-vsm.md
│   ├── guia-walk-gemba.md
│   ├── guia-evento-kaizen.md
│   ├── guia-standard-work.md
│   ├── guia-heijunka-box.md
│   ├── matriz-comparativa-herramientas.md
│   └── flujo-seleccion-herramientas.md
│
├── 05-Vertientes/                        # ~80 notas
│   ├── README.md                          # Comparación general de vertientes
│   │
│   ├── 5a-Manufactura/                   # 8 notas
│   │   ├── README.md
│   │   ├── 01-lean-manufactura-vista-general.md
│   │   ├── 02-toyota-way-en-la-practica.md
│   │   ├── 03-diseno-flujo-produccion.md
│   │   ├── 04-sistema-produccion-pull.md
│   │   ├── 05-flujo-pieza-por-pieza.md
│   │   ├── 06-sistema-supermercado.md
│   │   └── 07-cambio-rapido-smed-practico.md
│   │
│   ├── 5b-Lean-Six-Sigma/               # 10 notas
│   │   ├── README.md
│   │   ├── 01-lean-six-sigma-vista-general.md
│   │   ├── 02-metodologia-dmaic.md
│   │   ├── 03-dmaic-definir.md
│   │   ├── 04-dmaic-medir.md
│   │   ├── 05-dmaic-analizar.md
│   │   ├── 06-dmaic-mejorar.md
│   │   ├── 07-dmaic-controlar.md
│   │   ├── 08-belts-six-sigma.md
│   │   ├── 09-integracion-lean-six-sigma.md
│   │   └── 10-dmaic-vs-8d-comparativa.md
│   │
│   ├── 5c-Lean-Startup/                 # 8 notas
│   │   ├── README.md
│   │   ├── 01-lean-startup-vista-general.md
│   │   ├── 02-construir-medir-aprender.md
│   │   ├── 03-mvp-minimo-viable.md
│   │   ├── 04-aprendizaje-validado.md
│   │   ├── 05-pivotar-o-perseverar.md
│   │   ├── 06-contabilidad-de-innovacion.md
│   │   └── 07-desarrollo-de-clientes.md
│   │
│   ├── 5d-Lean-Software/                # 8 notas
│   │   ├── README.md
│   │   ├── 01-lean-software-vista-general.md
│   │   ├── 02-siete-principios-lean-software.md
│   │   ├── 03-cadena-de-valor-en-software.md
│   │   ├── 04-eliminacion-desperdicios-en-codigo.md
│   │   ├── 05-amplificacion-aprendizaje.md
│   │   ├── 06-decision-empoderada.md
│   │   ├── 07-optimizacion-del-todo.md
│   │   └── 08-devops-lean-perspectiva.md
│   │
│   ├── 5e-Lean-Healthcare/              # 6 notas
│   │   ├── README.md
│   │   ├── 01-lean-healthcare-vista-general.md
│   │   ├── 02-flujo-de-paciente.md
│   │   ├── 03-cadena-de-valor-en-salud.md
│   │   ├── 04-trabajo-estandarizado-en-salud.md
│   │   ├── 05-error-proofing-en-salud.md
│   │   └── 06-kaizen-en-hospitales.md
│   │
│   ├── 5f-Lean-Construction/            # 5 notas
│   │   ├── README.md
│   │   ├── 01-lean-construction-vista-general.md
│   │   ├── 02-last-planner-system.md
│   │   ├── 03-target-value-design.md
│   │   ├── 04-pull-planning.md
│   │   └── 05-5s-en-construccion.md
│   │
│   ├── 5g-Lean-IT/                      # 5 notas
│   │   ├── README.md
│   │   ├── 01-lean-it-vista-general.md
│   │   ├── 02-lean-it-service-management.md
│   │   ├── 03-lean-devops.md
│   │   ├── 04-lean-agile-it.md
│   │   └── 05-kaizen-en-ti.md
│   │
│   ├── 5h-Lean-Gobierno/                # 4 notas
│   │   ├── README.md
│   │   ├── 01-lean-gobierno-vista-general.md
│   │   ├── 02-valor-ciudadano.md
│   │   ├── 03-simplificacion-procesos.md
│   │   └── 04-lean-en-administracion-publica.md
│   │
│   ├── 5i-Lean-Educacion/               # 4 notas
│   │   ├── README.md
│   │   ├── 01-lean-educacion-vista-general.md
│   │   ├── 02-cadena-de-valor-educativa.md
│   │   ├── 03-flujo-estudiantil.md
│   │   └── 04-kaizen-en-aula.md
│   │
│   ├── 5j-Agile-Lean/                   # 6 notas
│   │   ├── README.md
│   │   ├── 01-agile-lean-vista-general.md
│   │   ├── 02-safe-framework.md
│   │   ├── 03-metodo-kanban-agil.md
│   │   ├── 04-scrum-y-lean.md
│   │   ├── 05-scaling-lean-agile.md
│   │   └── 06-lean-y-agile-diferencias.md
│   │
│   ├── 5k-Lean-4-Industry/              # 5 notas
│   │   ├── README.md
│   │   ├── 01-lean-4-vista-general.md
│   │   ├── 02-gemelos-digitales-lean.md
│   │   ├── 03-iot-en-manufactura-lean.md
│   │   ├── 04-ia-mejora-continua.md
│   │   └── 05-lean-digital-transformacion.md
│   │
│   ├── 5l-Lean-Change/                  # 5 notas
│   │   ├── README.md
│   │   ├── 01-lean-change-vista-general.md
│   │   ├── 02-gestion-del-cambio-organizacional.md
│   │   ├── 03-adopcion-cambio-lean.md
│   │   ├── 04-resistencia-al-cambio.md
│   │   └── 05-cultura-cambio-continuo.md
│   │
│   └── 5m-Lean-Coffee/                  # 4 notas
│       ├── README.md
│       ├── 01-lean-coffee-vista-general.md
│       ├── 02-formato-lean-coffee.md
│       ├── 03-moderacion-y-dinamica.md
│       └── 04-lean-coffee-en-organizaciones.md
│
├── 06-Complementarias/                   # ~12 notas
│   ├── README.md
│   ├── 01-six-sigma-vista-general.md
│   ├── 02-teoria-de-restricciones.md
│   ├── 03-tqm-gestion-calidad-total.md
│   ├── 04-problema-resolucion-8d.md
│   ├── 05-fmea-analisis-modos-falla.md
│   ├── 06-spc-control-estadistico.md
│   ├── 07-doe-diseno-experimentos.md
│   ├── 08-toc-cinco-pasos-enfoque.md
│   ├── 09-plantilla-reporte-8d.md
│   ├── 10-plantilla-fmea.md
│   ├── 11-mapa-metodologias-comparativo.md
│   └── 12-seleccion-metodologia-guia.md
│
├── 07-Implementacion/                    # ~19 notas
│   ├── README.md
│   ├── 01-marco-transformacion-lean.md
│   ├── 02-modelo-shingo.md
│   ├── 03-excelencia-operacional.md
│   ├── 04-sistema-gestion-diaria.md
│   ├── 05-liderazgo-lean.md
│   ├── 06-gestion-del-cambio-lean.md
│   ├── 07-evaluacion-lean.md
│   ├── 08-modelo-madurez.md
│   ├── 09-plan-despliegue-lean.md
│   ├── 10-cultura-kaizen.md
│   ├── 11-trabajo-estandar-lider.md
│   ├── 12-liderazgo-gemba.md
│   ├── 13-despliegue-hoshin-kanri.md
│   ├── 14-proceso-catchball.md
│   ├── 15-contabilidad-lean.md
│   ├── 16-metricas-lean.md
│   ├── 17-dashboard-kpi-lean.md
│   ├── 18-roadmap-implementacion-lean.md
│   └── 19-sostenibilidad-lean.md
│
└── 08-Ruta-Aprendizaje/                 # ~7 notas
    ├── README.md
    ├── 01-ruta-principiante.md
    ├── 02-ruta-intermedio.md
    ├── 03-ruta-avanzado.md
    ├── 04-guia-certificacion.md
    ├── 05-lecturas-recomendadas.md
    ├── 06-casos-de-estudio.md
    └── 07-autoevaluacion.md
```

---

## 3. Taxonomía de Notas

### 3.1 Frontmatter Estándar

```yaml
---
title: "Just-in-Time (JIT)"
tags:
  - lean/pilares
  - lean/herramientas/kanban
  - type/concept
  - difficulty/intermedio
  - status/completo
created: 2026-07-12
updated: 2026-07-12
category: pilar
aliases:
  - JIT
  - Producción Justo a Tiempo
related:
  - kanban
  - takt-time
  - flujo-continuo
  - sistema-de-tirón
---
```

### 3.2 Sistema de Tags

| Nivel 1 | Nivel 2 | Propósito |
|---------|---------|-----------|
| `lean/` | `fundamentos`, `pilares`, `desperdicios`, `herramientas`, `vertientes`, `complementarias`, `implementacion` | Área de dominio |
| `type/` | `concepto`, `herramienta`, `guia`, `caso-de-estudio`, `plantilla`, `checklist`, `comparativa`, `indice` | Tipo de nota |
| `difficulty/` | `principiante`, `intermedio`, `avanzado` | Nivel de aprendizaje |
| `branch/` | `manufactura`, `six-sigma`, `startup`, `software`, `healthcare`, `construction`, `it`, `gobierno`, `educacion`, `agile`, `lean-4`, `lean-change`, `lean-coffee` | Vertiente específica |
| `status/` | `borrador`, `revision`, `completo` | Estado del contenido |

### 3.3 Tipos de Nota y Plantillas

| Tipo de nota | Cantidad estimada | Descripción |
|---|---|---|
| **Concepto** | ~70 | Explicación atómica de un concepto Lean |
| **Herramienta** | ~35 | Descripción detallada de herramienta con cuándo/cómo/por qué |
| **Guía** | ~25 | Instrucciones paso a paso para implementar herramientas y marcos |
| **Vista de vertiente** | 13 | Una README por directorio + una overview por vertiente |
| **Plantilla** | ~8 | Formatos reutilizables (8D, FMEA, A3, Kaizen event) |
| **Checklist** | ~8 | Listas verificables (5S audit, Gemba walk, Lean assessment) |
| **Comparativa** | ~6 | Notas cruzadas (Lean vs Six Sigma, matriz de herramientas) |
| **Ruta de aprendizaje** | 4 | Secuencias estructuradas de principiante a avanzado |
| **Índice** | ~5 | READMEs de sección e índice maestro |
| **Caso de estudio** | ~5 | Ejemplos de implementación reales |

---

## 4. Estrategia de Wikilinks y Grafo de Conocimiento

### 4.1 Patrones de enlace

**Enlaces verticales (jerárquicos):** Padre → Hijo → Padre
```
[[casa-del-lean]] ↔ [[just-in-time]] ↔ [[kanban]]
[[marco-3m]] ↔ [[muda-desperdicio]] ↔ [[desperdicio-sobreproduccion]]
```

**Enlaces horizontales (pares):** Misma jerarquía se referencian mutuamente
```
[[just-in-time]] ↔ [[jidoka]] (comparativa de pilares)
[[heijunka]] ↔ [[takt-time]] ↔ [[flujo-continuo]] (herramientas que trabajan juntas)
```

**Enlaces de vertiente (dominio cruzado):** Notas de vertientes enlazan a conceptos core
```
[[lean-healthcare-vista-general]] → [[mapeo-cadena-de-valor-vsm]], [[kaizen]], [[5s]]
[[lean-startup-vista-general]] → [[muda-desperdicio]], [[sistema-de-tirón]], [[kaizen]]
```

### 4.2 Densidad objetivo de enlaces

| Categoría de nota | Mínimo enlaces | Máximo enlaces |
|---|---|---|
| Índice/README | 8 | 20 |
| Concepto | 3 | 8 |
| Herramienta | 4 | 10 |
| Guía | 3 | 6 |
| Vista de vertiente | 5 | 12 |
| Plantilla | 2 | 4 |

### 4.3 Notas Ancla (Hubs de alta conectividad)

Estas notas deben ser los nodos más conectados del grafo:
- `lean-glossary.md` — enlaza a todo
- `casa-del-lean.md` — hub estructural
- `cinco-principios-lean.md` — hub conceptual
- `marco-3m.md` — hub de desperdicios
- `matriz-comparativa-herramientas.md` — hub de herramientas
- Cada `README.md` de vertiente — hubs de dominio

---

## 5. Plan de Implementación por Fases

### Fase 1 — Fundamentos Core (~55 notas)
**Objetivo:** Establecer la columna vertebral esencial de conocimiento Lean. Usable como referencia independiente.

| Directorio | Notas | Detalle |
|---|---|---|
| Archivos raíz | 4 | Index, glossario, timeline, cómo usar |
| `01-Fundamentos/` | 15 | Historia, TPS, Toyota Way, 5 Principios, conceptos core |
| `02-Pilares/` | 9 | JIT, Jidoka, Kaizen, Respeto, Casa Lean, cultura |
| `03-Desperdicios/` | 15 | Marco 3M, los 8 desperdicios, identificación y eliminación |
| `04-Herramientas/` (esenciales) | 12 | 5S, PDCA, Kanban, VSM, Gemba, Kaizen, 5 Porques, A3, Takt, Visual, Standard Work, Poka-Yoke |
| **Subtotal Fase 1** | **55** | |

**Entregable:** Referencia fundacional completa. Exportable como módulo "Fundamentos Lean" en PDF.

### Fase 2 — Herramientas Completas + Vertientes (~90 notas)
**Objetivo:** Catálogo completo de herramientas + todas las 13 vertientes Lean.

| Directorio | Notas |
|---|---|
| `04-Herramientas/` (restantes) | 23 |
| `05-Vertientes/5a-Manufactura/` | 8 |
| `05-Vertientes/5b-Lean-Six-Sigma/` | 10 |
| `05-Vertientes/5c-Lean-Startup/` | 8 |
| `05-Vertientes/5d-Lean-Software/` | 8 |
| `05-Vertientes/5e-Lean-Healthcare/` | 6 |
| `05-Vertientes/5f-Lean-Construction/` | 5 |
| `05-Vertientes/5g-Lean-IT/` | 5 |
| `05-Vertientes/5h-Lean-Gobierno/` | 4 |
| `05-Vertientes/5i-Lean-Educacion/` | 4 |
| `05-Vertientes/5j-Agile-Lean/` | 6 |
| `05-Vertientes/5k-Lean-4-Industry/` | 5 |
| `05-Vertientes/5l-Lean-Change/` | 5 |
| `05-Vertientes/5m-Lean-Coffee/` | 4 |
| `05-Vertientes/README.md` | 1 |
| **Subtotal Fase 2** | **~100** | |

**Entregable:** Referencia Lean trans-industrial completa. Cada vertiente exportable como módulo PDF separado.

### Fase 3 — Complementarias + Implementación + Ruta (~38 notas)
**Objetivo:** Integración con metodologías complementarias + guía de implementación práctica.

| Directorio | Notas |
|---|---|
| `06-Complementarias/` | 12 |
| `07-Implementacion/` | 19 |
| `08-Ruta-Aprendizaje/` | 7 |
| **Subtotal Fase 3** | **38** | |

**Entregable:** Playbook de implementación completo. Rutas de aprendizaje de principiante a avanzado.

### Resumen de Fases

| Fase | Notas | Enfoque |
|------|-------|---------|
| Fase 1 | 55 | Fundamentos — usable inmediatamente |
| Fase 2 | 100 | Alcance completo — todas las vertientes y herramientas |
| Fase 3 | 38 | Implementación — orientado a acción |
| **Total** | **~193** | |

---

## 6. Rutas de Aprendizaje

### Principiante (~8-10 horas auto-estudio)
1. `como-usar-este-kb.md` — Orientación
2. `lean-timeline.md` — Contexto histórico
3. `01-Fundamentos/02-toyota-production-system.md` — Origen
4. `01-Fundamentos/05-cinco-principios-lean.md` — Modelo mental
5. `03-Desperdicios/01-marco-3m.md` — Comprensión del desperdicio
6. `03-Desperdicios/02-muda-desperdicio.md` + cada desperdicio individual
7. `02-Pilares/01-just-in-time.md` — Primer pilar
8. `02-Pilares/02-jidoka.md` — Segundo pilar
9. `02-Pilares/03-kaizen.md` — Tercer pilar
10. `04-Herramientas/01-5s.md` — Primera herramienta
11. `04-Herramientas/10-pdca.md` — Ciclo de mejora
12. `04-Herramientas/09-kanban.md` — Gestión visual
13. `04-Herramientas/06-gemba.md` — Ir a ver

### Intermedio (~12-15 horas)
1. VSM, Heijunka, Takt Time, Poka-Yoke, SMED
2. TPM, Standardized Work, A3, 5 Whys
3. Hoshin Kanri, Kaizen Blitz
4. Deep-dive en una vertiente de elección
5. Lean Six Sigma (DMAIC) o Lean Startup (BML)

### Avanzado (~15-20 horas)
1. Marco de Transformación Lean, Modelo Shingo
2. Hoshin Kanri Deployment, Catchball
3. Modelo de Madurez, Lean Leadership
4. Lean Accounting, Métricas, KPIs
5. Theory of Constraints, Lean 4.0
6. Cambio Organizacional, Sostenibilidad

---

## 7. Decisiones de Arquitectura

| Decisión | Elección | Justificación |
|----------|----------|---------------|
| **Ubicación del vault** | `lean-kb/` en raíz del proyecto | Separado de código, detectado por docgen-vault.js como tipo `topics` |
| **Idioma** | Español (con términos originales en japonés/inglés) | Usuario habla español; términos técnicos se mantienen bilingües |
| **Nomenclatura de archivos** | `kebab-case` en español | Convención del kb-management skill |
| **Numeración** | Prefijo numérico `01-`, `02-` | Controla orden en Obsidian y docgen-vault.js |
| **Frontmatter** | Extendido (title, tags, created, updated, category, aliases, related) | Soporta filtrado por tags, búsqueda, y exportación PDF |
| **Profundidad por vertiente** | Manufacturing y Six Sigma más profundas; Government y Education más ligeras | Equilibrio entre exhaustividad y material canónico disponible |
| **docgen-vault.js** | Sin cambios necesarios | Ya soporta tipo `topics` con patrón `NN-Nombre/` |
| **kb-management skill** | Sin cambios necesarios | La estructura cumple con sus convenciones |
| **content-ingestion skill** | Sin cambios necesarios | Permite ingestar material externo al vault |

---

## 8. Integración con Herramientas Existentes

### docgen-vault.js
```bash
# Vault completo
node .opencode/scripts/docgen-vault.js --vault lean-kb --scope all --mode separate

# Sección específica (ej: Fundamentos como un PDF unificado)
node .opencode/scripts/docgen-vault.js --vault lean-kb --scope module --module "01-Fundamentos" --mode merged

# Vertiente específica (ej: Lean Healthcare)
node .opencode/scripts/docgen-vault.js --vault lean-kb --scope module --module "5e-Lean-Healthcare" --mode merged

# Ruta de aprendizaje completa
node .opencode/scripts/docgen-vault.js --vault lean-kb --scope module --module "08-Ruta-Aprendizaje" --mode merged
```

### kb-management
```bash
# Validar integridad de wikilinks después de cada fase
node .opencode/scripts/kb-sync.js --validate lean-kb

# Auto-corregir enlaces rotos
node .opencode/scripts/kb-sync.js --fix-links lean-kb

# Reindexar grafo de conocimiento
node .opencode/scripts/kb-sync.js --reindex lean-kb
```

### content-ingestion
```bash
# Ingestar contenido extraído de PDFs de libros Lean
node .opencode/scripts/ingest-content.js --source extracted-content.md --output lean-kb/04-Herramientas/

# Batch ingest desde material bruto
node .opencode/scripts/ingest-content.js --batch raw-lean-notes/ --output lean-kb/05-Vertientes/
```

---

## 9. Flujo de Verificación

- [ ] Cada nota tiene frontmatter completo (title, tags, created, updated)
- [ ] Todos los `[[wikilinks]]` apuntan a notas existentes (sin enlaces rotos)
- [ ] Cada nota tiene entre 3-8 wikilinks (densidad mínima)
- [ ] Tags son consistentes con la taxonomía definida
- [ ] READMEs de cada directorio enlazan a todas las notas de esa sección
- [ ] `kb-sync.js --validate lean-kb` pasa sin errores
- [ ] `docgen-vault.js --vault lean-kb --scope all --mode merged` genera PDF correctamente
- [ ] Rutas de aprendizaje tienen secuencia lógica verificada
- [ ] Glosario cubre todos los términos técnicos usados en el vault

---

## 10. Decisiones del Usuario

| Pregunta | Respuesta |
|----------|-----------|
| Idioma | Español con términos en inglés/japonés |
| Profundidad vertientes | Todas iguales |
| Contenido inicial | Marcos conceptuales, modelos, simples para aprender principios |
| Templates | Sí, templates + documentación descriptiva |
| Fase prioritaria | Empezar Fase 1, continuar con Fase 2 y 3 |
| Ramas faltantes | Agregadas: Lean Change (5l) y Lean Coffee (5m) |
