---
title: "Mapa de Resistencia"
tags:
  - leanchange/herramientas
  - type/herramienta
created: 2026-07-21
updated: 2026-07-21
category: "Herramientas"
difficulty: "Intermedio"
---

# Mapa de Resistencia

## ¿Qué es un Mapa de Resistencia?

Un **Mapa de Resistencia** es una herramienta visual para identificar, comprender y mapear las fuentes de resistencia al cambio dentro de una organización. En lugar de tratar la resistencia como un problema a "superar", el mapa la trata como una **señal valiosa** que indica qué está funcionando en contra del cambio y qué está funcionando a su favor.

La resistencia al cambio se cita a menudo como la razón principal por la que fracasan las iniciativas de cambio. Sin embargo, como señala Change Agility, la resistencia raramente es un problema individual — generalmente tiene raíces sistémicas.

> "Nunca saltes a la resistencia en nivel individual; busca primero los efectos sistémicos y la dinámica."

Ver también: [[04-entrevistas-estakeholders]], [[01-experimentos-cambio]]

---

## La Resistencia como Síntoma, no como Problema

En Lean Change Management, la resistencia no es algo que deba eliminarse. Es información crucial:

| Perspectiva tradicional | Perspectiva Lean Change |
|------------------------|------------------------|
| "La gente se resiste al cambio" | "La gente tiene razones válidas para cuestionar el cambio" |
| "Debemos superar la resistencia" | "Debemos entender qué nos está diciendo la resistencia" |
| "Los resistentes son el problema" | "La resistencia revela problemas sistémicos reales" |
| "Implementar y convencer después" | "Involucrar antes y co-crear el cambio" |

### Las Personas no se Resisten al Cambio como Tal

Como explica Lean Change 2.0:

> "Es parte de la naturaleza humana etiquetar a alguien como resistente al cambio cuando no hace lo que nosotros queremos que haga. [...] El tema no tiene que ver contigo o conmigo — sino con entender la perspectiva de las personas afectadas por el cambio."

Las personas pueden:
- **Temer perder algo**: Seguridad, estatus, comodidad, relaciones.
- **No entender la razón**: No ven la urgencia ni los beneficios.
- **No estar convencidas**: No han participado en el diseño del cambio.
- **Tener experiencias previas negativas**: Cambios anteriores que fracasaron.

Ver también: [[08-historias-cambio]]

---

## Análisis del Campo de Fuerzas de Kurt Lewin

Una de las herramientas fundamentales para el mapa de resistencia es el **Análisis del Campo de Fuerzas**, creado por Kurt Lewin, pionero de la psicología organizacional.

### Cómo Funciona

1. Dibuja una línea horizontal en el centro del tablero.
2. La línea representa el cambio que quieres introducir.
3. A un lado escribe las **Fuerzas Impulsoras** (a favor del cambio).
4. Al otro lado escribe las **Fuerzas Restrictivas** (en contra del cambio).
5. Asigna un valor de 1 a 5 a cada fuerza.
6. Suma ambos lados para ver la fuerza neta.

```
┌──────────────────────────────────────────────────────────┐
│            ANÁLISIS DEL CAMPO DE FUERZAS                 │
├──────────────────────┬───────────────────────────────────┤
│  FUERZAS IMPULSORAS  │  FUERZAS RESTRICTIVAS            │
│  (a favor del cambio)│  (en contra del cambio)           │
│                      │                                   │
│  ✦ Urgencia del CIO  │  ✧ Miedo a perder empleo (4)    │
│    (5)               │  ✧ Procesos existentes (5)       │
│  ✦ Deseo de los      │  ✧ Falta de formación (3)       │
│    colaboradores (4) │  ✧ Silos funcionales (5)         │
│  ✦ Seguidores        │  ✧ Cambios simultáneos (4)      │
│    tempranos (3)     │  ✧ Burocracia regulatoria (4)   │
│  ✦ Apoyo del CIO (5)│  ✧ Falta de tiempo (3)          │
│                      │                                   │
│  TOTAL: 17           │  TOTAL: 24                       │
│                      │                                   │
│  Fuerza Neta: -7 (Las Restrictivas predominan)           │
└──────────────────────┴───────────────────────────────────┘
```

### Interpretación

- Si las **Impulsoras** superan a las Restrictivas → El cambio tiene más posibilidades de éxito.
- Si las **Restrictivas** superan a las Impulsoras → Necesitas trabajar para equilibrar las fuerzas antes de impulsar el cambio.
- El análisis no es estático — se actualiza conforme se ejecutan experimentos.

Ver también: [[06-gemba-cambio]]

---

## Identificación de Fuentes de Resistencia

### Fuentes Individuales

| Fuente | Señales | Respuesta |
|--------|---------|-----------|
| **Pérdida percibida** | "¿Y mi trabajo actual?", "¿Para qué sirvo ahora?" | Comunicar claramente qué cambia y qué no |
| **Falta de confianza** | Desconfianza en los líderes, escepticismo | Construir confianza gradualmente a través de transparencia |
| **Experiencias previas negativas** | "Ya intentamos algo similar y falló" | Reconocer el historial y explicar qué será diferente |
| **Sobrecarga** | "No tengo tiempo para más cambios" | Verificar cuántos cambios simultáneos existen |
| **Falta de competencia** | Miedo a no poder cumplir con lo nuevo | Ofrecer formación y coaching, no solo instrucciones |

### Fuentes Sistémicas

| Fuente | Señales | Respuesta |
|--------|---------|-----------|
| **Estructura organizacional** | Silos que impiden la colaboración | Diseñar equipos multifuncionales |
| **Procesos contradictorios** | Incentivos que van en contra del cambio | Alinear procesos e incentivos |
| **Cultura organizacional** | Normas informales que refuerzan el status quo | Usar Hackeo de Cultura para hacerlas visibles |
| **Carga de cambios simultáneos** | Múltiples iniciativas compitiendo por atención | Coordinar y priorizar entre equipos de cambio |
| **Sistema de recompensas** | Bonos por métricas que el cambio amenaza | Revisar y alinear las métricas de desempeño |

### El Modelo de Satir: Cómo Procesan el Cambio las Personas

Virginia Satir describe cinco etapas que las personas atraviesan ante el cambio. Entender estas etapas ayuda a mapear dónde está la resistencia:

1. **Estatus Quo Tardío**: Todo es familiar y cómodo. El desempeño es estable.
2. **Elemento Externo**: El cambio se presenta. Genera resistencia o entusiasmo.
3. **Caos**: Las personas sienten que pierden su identidad. Confusión e indignación.
4. **La Idea, la Práctica y la Integración**: Las personas captan el beneficio del cambio.
5. **Nuevo Estatus Quo**: El desempeño se estabiliza a un nivel superior.

> **Aplicación práctica**: Las personas en una organización pueden estar en diferentes etapas al mismo tiempo. No asumas que todos están en la misma fase.

Ver también: [[01-experimentos-cambio]]

---

## Creación del Mapa de Resistencia

### Paso 1: Identificar el Cambio
Escribe claramente qué cambio estás intentando implementar.

### Paso 2: Mapear Fuerzas
Usa el Análisis del Campo de Fuerzas para identificar fuerzas impulsoras y restrictivas.

### Paso 3: Categorizar por Fuente
Clasifica cada fuerza como individual o sistémica.

### Paso 4: Evaluar la Esfera de Influencia
Para cada fuerza restrictiva, determina:
- ¿Tienes influencia directa sobre ella?
- ¿Tienes influencia indirecta a través de un tercero?
- ¿Está fuera de tu esfera de influencia?

### Paso 5: Diseñar Respuestas
Para cada fuerza restrictiva significativa, diseña una respuesta:

| Fuerza Restrictiva | Tipo | Influencia | Respuesta |
|-------------------|------|------------|-----------|
| Silos funcionales | Sistémica | Indirecta | Formar equipos multifuncionales piloto |
| Miedo a perder estatus | Individual | Directa | Conversaciones 1:1, redefinir roles |
| Burocracia regulatoria | Sistémica | Indirecta | Trabajar con PMO para adaptar procesos |
| Sobrecarga de cambios | Sistémica | Nula | Coordinar con otros equipos de cambio |

### Paso 6: Priorizar
No puedes abordar todas las fuerzas restrictivas a la vez. Prioriza:
1. Fuerzas de **alto impacto** y **alta influencia** → Actuar primero.
2. Fuerzas de **alto impacto** y **baja influencia** → Buscar aliados.
3. Fuerzas de **bajo impacto** y **alta influencia** → Monitorear.
4. Fuerzas de **bajo impacto** y **baja influencia** → Ignorar por ahora.

---

## La Esfera de Influencia

Una vez que conoces el alcance de las fuerzas, usa un **Diagrama de Esfera de Influencia** para mapear cómo llegar a las personas clave:

```
┌─────────────────────────────────────────┐
│         ESFERA DE INFLUENCIA            │
│                                         │
│    ┌─────────────────────────────┐      │
│    │                             │      │
│    │   Director de PM ────────── │────┐ │
│    │                             │    │ │
│    │   ┌───────────────────┐     │    │ │
│    │   │                   │     │    │ │
│    │   │  QMO (Yo) ────── │─────│────│─│──► Director QMO
│    │   │                   │     │    │ │
│    │   └───────────────────┘     │    │ │
│    │                             │    │ │
│    │   Manager de A&D ────────── │────│─│──► Director A&D
│    │                             │    │ │
│    └─────────────────────────────┘    │ │
│                                       │ │
│    Managers de PM (Neutrales) ◄───────┘ │
│                                         │
└─────────────────────────────────────────┘
```

**Pasos para crearlo**:
1. Dibuja un círculo en el centro para representar el cambio.
2. Escribe los nombres de las personas de influencia en los bordes.
3. Conecta con líneas a las personas que tienen relación de influencia entre sí.
4. Identifica las personas que pueden **apoyar** y las que pueden **bloquear**.

Ver también: [[04-entrevistas-estakeholders]]

---

## Herramientas Complementarias para el Mapa

### Retroalimentación Anónima
Permite que las personas expresen su resistencia sin miedo a represalias:
- **Puerta de los Hallazgos** (La Comisión): Un tablero donde las personas ponían notas adhesivas con comentarios anónimos.
- **Tablero de feedback visible**: Colocado en un área de alto tráfico.

### Hackeo de Cultura
Para exponer disfunciones organizacionales que alimentan la resistencia:
- **Crack**: La disfunción que genera tensión.
- **Hack**: La acción mínima para exponer la disfunción.
- **Zonas**: Verde (segura), Azul (arriesgada), Roja (peligrosa).

### Retrospectivas Comparativas
Realizar la misma retrospectiva con colaboradores y con managers por separado, y luego comparar los resultados. Esto revela brechas de percepción.

---

## Errores Comunes

1. **Etiquetar personas como "resistentes"**: Las personas no son el problema; las condiciones sistémicas generalmente lo son.
2. **Ignorar la resistencia**: La resistencia que se ignora se amplifica.
3. **Enfocarse solo en individuos**: La resistencia sistémica es más poderosa que la individual.
4. **No actualizar el mapa**: La resistencia evoluciona; el mapa también debe hacerlo.
5. **Tratar la resistencia como un obstáculo**: Es información valiosa para mejorar el diseño del cambio.

---

## Preguntas Guía

1. ¿Qué personas o grupos están mostrando resistencia? ¿Por qué?
2. ¿La resistencia es individual o sistémica?
3. ¿Qué están perdiendo o creyendo perder las personas?
4. ¿Qué otros cambios simultáneos están compitiendo por la atención?
5. ¿Qué fuerzas impulsoras podemos fortalecer?
6. ¿Qué fuerzas restrictivas podemos reducir?
7. ¿Quiénes son las personas influyentes que podrían ayudarnos?
8. ¿Qué hallazgos de retrospectivas o Lean Coffee revelan sobre la resistencia?

---

## Referencias

- Little, J. (2014). *Lean Change Management 2.0*. Capítulos 4, 6.
- Little, J. (2020). *Change Agility*. Capítulos sobre cuidar a la gente y bienvenida al cambio.
- Lewin, K. — Análisis del Campo de Fuerzas.
- Satir, V. — Modelo de Cambio de Virginia Satir.
- Haas, S. — Hackeo de Cultura (LESS 2012).
