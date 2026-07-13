---
title: "8D - Resolución de Problemas"
tags:
  - lean/complementarias
  - type/concepto
  - difficulty/intermedio
created: 2026-07-12
updated: 2026-07-12
category: "Complementarias"
aliases:
  - 8D
  - Eight Disciplines
  - Resolución 8D
related:
  - "[[09-plantilla-reporte-8d]]"
  - "[[04-Herramientas/03-a3-resolucion-problemas]]"
  - "[[04-Herramientas/23-analisis-causa-raiz]]"
  - "[[04-Herramientas/12-los-cinco-porques]]"
  - "[[04-Herramientas/25-plantilla-8d]]"
  - "[[05-fmea-analisis-modos-falla]]"
---

# 8D — Resolución de Problemas

## ¿Qué es 8D?

8D (Eight Disciplines) es un enfoque estructurado y basado en equipo para **resolver problemas de calidad** de forma sistemática. Originalmente desarrollado por Ford Motor Company, es ampliamente usado en la industria automotriz y de manufactura.

> *"8D no es solo llenar un formulario. Es pensar estructuralmente sobre un problema."*

## Las 8 Disciplinas

```
D0: Preparación ──────────── Evaluar si se necesita 8D
D1: Formar el Equipo ─────── Equip multifuncional
D2: Definir el Problema ──── Descripción con 5W2H
D3: Contención Temporal ──── Proteger al cliente
D4: Causa Raíz ──────────── Análisis profundo
D5: Acciones Correctivas ─── Soluciones permanentes
D6: Implementación ───────── Verificación con datos
D7: Prevención ──────────── Evitar recurrencia
D8: Reconocimiento ──────── Celebrar el logro
```

### D0: Preparación
Evaluar la urgencia. Si el problema es crítico, activar protocolo de emergencia antes de iniciar el 8D formal.

### D1: Formar el Equipo
Crear un equipo multifuncional: líder, calidad, producción, ingeniería, proveedor y/o cliente según el caso.

### D2: Definir el Problema
Usar formato **5W2H** (What, Where, When, Who, Why, How, How much) para describir el problema con datos específicos.

### D3: Contención Temporal
Implementar medidas temporales para proteger al cliente mientras se investiga la causa raíz. **La contención NO es la solución final.**

### D4: Causa Raíz
Usar herramientas de [[04-Herramientas/23-analisis-causa-raiz|análisis de causa raíz]]:
- [[04-Herramientas/12-los-cinco-porques|5 Porqués]]
- Diagrama de Ishikawa
- Análisis de datos
- Verificación en [[04-Herramientas/06-gemba|Gemba]]

### D5: Acciones Correctivas
Diseñar soluciones que **eliminen** la causa raíz permanentemente, no temporalmente.

### D6: Implementación y Verificación
Implementar y verificar con datos que el problema se resolvió. Monitorear durante un periodo de prueba.

### D7: Prevención
Prevenir problemas similares en otros procesos o productos. Actualizar [[04-Herramientas/19-trabajo-estandarizado|estándares]] e implementar [[04-Herramientas/11-poka-yoke|Poka-Yoke]] si aplica.

### D8: Reconocimiento
Documentar el logro, reconocer contribuciones y cerrar formalmente el 8D.

## 8D vs A3 vs DMAIC

| Aspecto | 8D | A3 | DMAIC |
|---------|-----|-----|-------|
| **Origen** | Ford Motor | Toyota | Motorola/Six Sigma |
| **Enfoque** | Acción correctiva formal | Resolución general | Mejora con datos |
| **Pasos** | 8 fijos | 7 secciones flexibles | 5 fases |
| **Uso típico** | Calidad, reclamaciones | Mejora continua | Reducción variabilidad |
| **Contención** | Fase dedicada (D3) | No tiene | No tiene |
| **Documentación** | Muy formal | Moderada | Moderada a formal |

## Cuándo Usar 8D

- Reclamación de cliente o no conformidad grave
- Problema de calidad recurrente que requiere acción correctiva formal
- Se necesita documentación para auditorías (IATF 16949, ISO)
- El problema requiere contención inmediata + solución permanente

## Notas Relacionadas

- [[09-plantilla-reporte-8d]] — Plantilla completa para reportes 8D
- [[04-Herramientas/03-a3-resolucion-problemas]] — A3 como alternativa más ligera
- [[04-Herramientas/23-analisis-causa-raiz]] — Herramientas para D4
- [[04-Herramientas/12-los-cinco-porques]] — 5 Porqués para causa raíz
- [[04-Herramientas/25-plantilla-8d]] — Plantilla 8D original en herramientas
- [[05-fmea-analisis-modos-falla]] — FMEA como complemento preventivo al 8D reactivo
- [[04-Herramientas/10-pdca]] — PDCA como base del ciclo 8D
