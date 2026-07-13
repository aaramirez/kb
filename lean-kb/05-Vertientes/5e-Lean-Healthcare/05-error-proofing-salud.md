---
title: "Error-Proofing en Salud"
tags:
  - lean/vertientes
  - type/concepto
  - difficulty/intermedio
  - branch/healthcare
created: 2026-07-12
updated: 2026-07-12
category: "Lean Healthcare"
aliases:
  - Poka-Yoke Healthcare
  - Patient Safety
related:
  - "[[05-Vertientes/5e-Lean-Healthcare/01-lean-healthcare-vista-general]]"
  - "[[05-Vertientes/5e-Lean-Healthcare/04-trabajo-estandarizado-salud]]"
  - "[[03-Pilares/01-cero-defectos]]"
---

# Error-Proofing en Salud

## ¿Qué es Error-Proofing en salud?

El [[03-Pilares/01-cero-defectos|Error-Proofing]] (o Poka-Yoke) en el contexto sanitario consiste en diseñar procesos y sistemas que **previenen errores antes de que ocurran**. En un entorno donde los errores pueden tener consecuencias fatales, esta herramienta es especialmente crítica.

> *"Es mejor prevenir el error que detectarlo después. En salud, prevención significa vidas salvadas."*

## Poka-Yoke en entornos de salud

El concepto original de Poka-Yoke de [[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general|Lean Manufacturing]] se adapta al ámbito sanitario con dos tipos principales:

### Poka-Yoke de prevención
Impiden que el error ocurra:
- Conectores que solo encajan en la posición correcta
- Software que bloquea dosis fuera de rango
- Alarmas automáticas por valores críticos

### Poka-Yoke de detección
Detectan el error antes de que llegue al paciente:
- Doble verificación de medicamentos
- Escaneo de códigos de barras
- Alertas automáticas en sistemas de información

## Prevención de errores de medicación

Los errores de medicación son uno de los problemas más prevenibles en salud:

| Estrategia | Tipo Poka-Yoke | Efectividad |
|------------|----------------|-------------|
| Códigos de barras en medicamentos | Detección | Alta |
| Farmacia automatizada | Prevención | Muy alta |
| Doble verificación de medicamentos | Detección | Media-Alta |
| Software de prescripción electrónica | Prevención | Alta |
| Unidades de dosis unitaria | Prevención | Muy alta |

## Sistemas de identificación de pacientes

La correcta identificación del paciente es fundamental para prevenir errores:

- **Brazalete identificatorio** — con código de barras o RFID
- **Múltiples factores de identificación** — nombre + fecha de nacimiento + número de expediente
- **Protocolo de verificación** — preguntar al paciente su identidad antes de cada procedimiento
- **Tecnología de identificación** — escaneo obligatorio antes de administrar medicación

## Protocolos de seguridad

Los protocolos de seguridad se diseñan como mecanismos de error-proofing:

### Verificación en quirófano
- Identificación del paciente antes de la anestesia
- Marcar el sitio quirúrgico
- Time Out antes de la incisión
- Conteo de instrumental al cierre

### Seguridad en laboratorio
- Codificación de muestras
- Doble etiquetado
- Verificación de resultados críticos
- Cadena de custodia documentada

## Diseño de sistemas seguros

| Principio | Aplicación | Ejemplo |
|-----------|-----------|---------|
| **Simplificar** | Reducir pasos innecesarios | Menos formularios |
| **Visualizar** | Hacer visible el estado | Semáforos de prioridad |
| **Automatizar** | Eliminar intervención humana | Alarmas automáticas |
| **Verificar** | Doble chequeo obligatorio | Escaneo de código |
| **Comunicar** | Información clara y directa | Handoff estructurado |

## Métricas de seguridad

| Métrica | Descripción | Objetivo |
|---------|-------------|----------|
| Tasa de errores de medicación | Errores por 1000 dosis | Cero |
| Eventos centinelas | Incidentes graves | Cero |
| Near misses reportados | Casi-errores detectados | Maximizar reportes |
| Cumplimiento de protocolos | % de adherencia | >95% |

## Conexiones

- [[03-Pilares/01-cero-defectos]] — filosofía base de error-proofing
- [[05-Vertientes/5e-Lean-Healthcare/04-trabajo-estandarizado-salud]] — protocolos como base
- [[05-Vertientes/5a-Manufactura/01-lean-manufactura-vista-general]] — origen del Poka-Yoke
- [[05-Vertientes/5e-Lean-Healthcare/01-lean-healthcare-vista-general]] — contexto Lean Healthcare
