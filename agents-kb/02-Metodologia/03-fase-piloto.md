---
title: "Fase 2: Piloto"
tags:
  - agents/metodologia
  - type/guia
  - difficulty/intermedio
created: 2026-07-27
updated: 2026-07-27
category: "Metodología"
aliases:
  - "Pilot Phase"
  - "Piloto"
related:
  - "[[02-fase-descubrimiento]]"
  - "[[04-fase-escala]]"
---

# Fase 2: Piloto

## Objetivo

Implementar el primer agente de forma exitosa y demostrar ROI.

## Duración: 4-8 semanas

## Actividades

### Semana 1-2: Configuración

1. **Diseñar el harness** del agente
   - Seleccionar modelo (ver [[03-Harness-Por-Rol/01-diseno-de-harnesses|Diseño de Harnesses]])
   - Definir permisos y herramientas
   - Crear prompt del agente

2. **Preparar knowledge base**
   - Documentos necesarios
   - Reglas de negocio
   - FAQs y procedimientos

3. **Configurar integraciones**
   - APIs necesarias
   - Conexiones a sistemas
   - Permisos de acceso

### Semana 3-4: Desarrollo

1. **Iteración 1**: Agente básico
   - Responde preguntas simples
   - Accede a información
   - Escala cuando no sabe

2. **Iteración 2**: Agente con herramientas
   - Ejecuta acciones simples
   - Consulta sistemas externos
   - Registra actividad

3. **Iteración 3**: Agente completo
   - Maneja excepciones
   - Aprende de feedback
   - Reporta métricas

### Semana 5-6: Pruebas

1. **Pruebas internas** (equipo)
   - Casos de uso típicos
   - Casos extremos
   - Escalamiento

2. **Pruebas piloto** (usuarios selectos)
   - 5-10 usuarios reales
   - Recoger feedback diario
   - Ajustar comportamiento

3. **Pruebas de seguridad**
   - Auditoría de permisos
   - Verificación de datos sensibles
   - Prueba de escalamiento a humano

### Semana 7-8: Lanzamiento

1. **Lanzamiento suave** (soft launch)
   - 20-30% de usuarios
   - Monitoreo intensivo
   - Ajustes en caliente

2. **Lanzamiento completo**
   - 100% de usuarios
   - Comunicación formal
   - Documentación final

## Métricas del Piloto

| Métrica | Target | Cómo medir |
|---------|--------|------------|
| **Tiempo de respuesta** | < 30s | Log del agente |
| **Tasa de resolución** | > 60% | Sin escalamiento a humano |
| **Satisfacción del usuario** | > 4/5 | Encuesta post-uso |
| **Errores** | < 5% | Log de errores |
| **Ahorro de tiempo** | > 30% | Comparación antes/después |

## Criterios de Éxito

✅ El agente resuelve al menos 60% de los casos sin escalar
✅ Los usuarios reportan satisfacción > 4/5
✅ No hay incidentes de seguridad
✅ El ROI es positivo o proyectado positivo

## Criterios de Fracaso

❌ El agente resuelve < 30% de los casos
❌ Los usuarios rechazan el agente
❌ Hay incidentes de seguridad
❌ El costo supera el beneficio

## Ver también

- [[02-fase-descubrimiento|Fase anterior: Descubrimiento]]
- [[04-fase-escala|Siguiente: Escala]]
- [[03-Harness-Por-Rol/01-diseno-de-harnesses|Diseño de Harnesses]]
