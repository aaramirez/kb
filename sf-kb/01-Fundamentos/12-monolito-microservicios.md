---
title: "De Monolito a Microservicios"
tags:
  - sf/fundamentos
  - type/concepto
  - difficulty/avanzado
created: 2026-07-13
updated: 2026-07-13
category: "Fundamentos"
aliases:
  - "Monolito"
  - "Microservicios"
  - "Microservices"
related:
  - "[[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]"
  - "[[../01-Fundamentos/10-conway-ley|Ley de Conway]]"
  - "[[../01-Fundamentos/07-devops-filosofia|DevOps]]"
---

# De Monolito a Microservicios

La evolución de monolitos a microservicios es una de las decisiones arquitectónicas más importantes (y costosas) que puede tomar una organización.

## ¿Qué es un Monolito?

Un **monolito** es una aplicación donde toda la lógica de negocio, UI y persistencia están acopladas en un solo deployable.

```
┌─────────────────────────────────┐
│          MONOLITO               │
│  ┌────────┐  ┌────────┐       │
│  │  UI    │  │ API    │       │
│  └────┬───┘  └────┬───┘       │
│       │           │            │
│  ┌────▼───────────▼────┐      │
│  │   Business Logic    │      │
│  └────────┬────────────┘      │
│           │                    │
│  ┌────────▼────────────┐      │
│  │   Database          │      │
│  └─────────────────────┘      │
└─────────────────────────────────┘
```

### Pros del Monolito

| Ventaja | Descripción |
|---------|-------------|
| **Simplicidad** | Un solo deploy, una base de código |
| **Performance** | Comunicación en memoria, sin network |
| **Debugging** | Stack trace completo, una sola app |
| **Consistencia transaccional** | ACID straightforward |
| **Desarrollo rápido** | No hay overhead de distribución |

### Contras del Monolito

| Desventaja | Descripción |
|------------|-------------|
| **Escalabilidad** | Todo o nada, no por componente |
| **Acoplamiento** | Un cambio puede romper todo |
| **Deploy risk** | Desplegar todo junto, alto riesgo |
| **Technology lock-in** | Toda la app usa el mismo stack |
| **Team conflicts** | Múltiples equipos en misma codebase |

## ¿Cuándo dividir en microservicios?

### Señales de que estás listo

1. **Equipos estancados**: demasiados developes en una codebase
2. **Deployments dolorosos**: desplegar toma horas
3. **Escalabilidad asimétrica**: necesitas escalar solo un componente
4. **Resiliencia**: un componente falla y cae todo
5. **Bounded contexts claros**: los dominios de negocio están bien definidos

### Señales de que NO estás listo

1. **Equipo pequeño** (< 10 desarrolladores)
2. **Dominio no claro** (no sabes qué es cada bounded context)
3. **Sin DevOps maduro** (no tienes CI/CD)
4. **Sin monitoring** (no sabes qué está pasando)
5. **Presión por features** (no puedes invertir en arquitectura)

## Patrones de microservicios

### 1. API Gateway

```
Client → API Gateway → Service A
                      → Service B
                      → Service C
```

- Punto de entrada único
- Routing, authentication, rate limiting
- Ejemplos: Kong, AWS API Gateway, Envoy

### 2. Service Mesh

```
┌─────────┐    ┌─────────┐
│ Service │◄──►│ Service │
│    A    │    │    B    │
└────┬────┘    └────┬────┘
     │              │
     ▼              ▼
┌─────────────────────────┐
│     Service Mesh        │
│  (Istio, Linkerd, etc.) │
└─────────────────────────┘
```

Infraestructura de red para microservicios:
- **mTLS**: seguridad entre servicios
- **Load balancing**: distribución de tráfico
- **Observability**: tracing, metrics, logging
- **Circuit breaking**: resiliencia

### 3. Event-Driven Architecture

```
Service A ──event──► Event Bus ──event──► Service B
                                      ──event──► Service C
```

- **Kafka**, RabbitMQ, NATS
- **Loose coupling**: servicios no se conocen
- **Eventual consistency**: consistency saga pattern

### 4. Saga Pattern

Para transacciones distribuidas:

```
Create Order → Reserve Inventory → Process Payment → Confirm Order
     │                │                    │
     └── compensating transactions ───────┘
```

## Estrategia de migración: Strangler Fig Pattern

No se puede migrar de golpe. El **Strangler Fig** reemplaza gradualmente:

```
1. Identificar bounded context
2. Crear nuevo microservicio
3. Router redirige tráfico gradualmente
4. Migrar datos
5. Retirar módulo del monolito
```

### Pasos prácticos

1. **Identificar**: qué bounded context migrar primero
2. **Aislar**: crear interfaz clara (API)
3. **Extraer**: mover lógica a nuevo servicio
4. **Redirect**: router apunta al nuevo servicio
5. **Validate**: verificar comportamiento
6. **Retire**: eliminar del monolito

## Consideraciones operacionales

| Aspecto | Monolito | Microservicios |
|---------|----------|----------------|
| **Deployment** | Simple, un solo artefacto | Complejo, orquestación |
| **Monitoring** | Una app, un dashboard | Múltiples servicios |
| **Debugging** | Stack trace completo | Distributed tracing |
| **Testing** | Integration tests simples | Contract tests, e2e |
| **Data** | Una DB, transacciones ACID | DB por servicio, eventual consistency |

## Relación con otros conceptos

- Se beneficia de [[../01-Fundamentos/11-arquitectura-limpia|Arquitectura Limpia]]
- Se soporta en [[../01-Fundamentos/10-conway-ley|Ley de Conway]]
- Requiere [[../01-Fundamentos/07-devops-filosofia|DevOps]] maduro
- Se mide con [[../06-Metricas/README|métricas DORA]]
- Se gestiona con [[../01-Fundamentos/13-plataformas-ingenieria|plataformas]]
