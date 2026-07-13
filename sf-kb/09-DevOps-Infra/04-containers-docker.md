---
title: "Containers y Docker"
tags:
  - sf/devops
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "Docker"
  - "Containers"
  - "Containerization"
related:
  - "[[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes]]"
  - "[[../09-DevOps-Infra/03-infrastructure-as-code|Infrastructure as Code]]"
  - "[[../05-Herramientas/06-container-kubernetes|Containers en Herramientas]]"
  - "[[../01-Fundamentos/12-monolito-microservicios|Microservicios]]"
---

# Containers y Docker

Los containers empaquetan una aplicación con todas sus dependencias en una unidad estandarizada que se ejecuta de forma consistente en cualquier entorno.

## ¿Qué es un Container?

```
┌─────────────────────────────────────┐
│           VM的传统方式                  │
│  ┌─────────┐ ┌─────────┐           │
│  │  App A  │ │  App B  │           │
│  ├─────────┤ ├─────────┤           │
│  │ Bins/   │ │ Bins/   │           │
│  │ Libs    │ │ Libs    │           │
│  ├─────────┤ ├─────────┤           │
│  │ Guest   │ │ Guest   │           │
│  │  OS     │ │  OS     │           │
│  └─────────┘ └─────────┘           │
│       Hypervisor                    │
│           Host OS                   │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│         Containers                  │
│  ┌─────────┐ ┌─────────┐           │
│  │  App A  │ │  App B  │           │
│  ├─────────┤ ├─────────┤           │
│  │ Bins/   │ │ Bins/   │           │
│  │ Libs    │ │ Libs    │           │
│  └─────────┘ └─────────┘           │
│        Container Runtime            │
│           Host OS                   │
└─────────────────────────────────────┘
```

| Característica | VM | Container |
|---------------|-----|-----------|
| **Isolation** | Full OS | Process-level |
| **Size** | GBs | MBs |
| **Boot time** | Minutes | Seconds |
| **Overhead** | High | Low |
| **Density** | Few per host | Many per host |
| **Portability** | Limited | High |

## Dockerfile

### Estructura básica

```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine AS production

# Security: non-root user
RUN addgroup -g 1001 -S appgroup && \
    adduser -S appuser -u 1001 -G appgroup

WORKDIR /app

# Copy only production artifacts
COPY --from=builder --chown=appuser:appgroup /app/dist ./dist
COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules

USER appuser

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

CMD ["node", "dist/main.js"]
```

### Multi-stage builds

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Builder   │──► │   Runtime   │──► │  Production │
│   Stage     │    │   Stage     │    │  Image      │
│             │    │             │    │             │
│  Full Node  │    │  Alpine     │    │  Minimal    │
│  + devDeps  │    │  + prodDeps │    │  ~150MB     │
│  + build    │    │  + dist     │    │             │
│  ~1.2GB     │    │  ~200MB     │    │             │
└─────────────┘    └─────────────┘    └─────────────┘
```

### Best practices

| Práctica | Ejemplo |
|----------|---------|
| **Multi-stage** | Reducir tamaño de imagen |
| **Alpine base** | `FROM node:18-alpine` |
| **Non-root user** | `USER appuser` |
| **COPY over ADD** | `COPY` para archivos simples |
| **Order layers** | Dependencias primero, código después |
| **.dockerignore** | Excluir node_modules, .git |
| **HEALTHCHECK** | Verificar salud del contenedor |
| **Pin versions** | `node:18.17.1-alpine` no `latest` |

### .dockerignore

```
node_modules
npm-debug.log
.git
.env
.env.local
dist
coverage
.github
*.md
```

## Docker Compose

```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:password@db:5432/myapp
      - REDIS_URL=redis://cache:6379
    depends_on:
      db:
        condition: service_healthy
      cache:
        condition: service_healthy
    volumes:
      - ./uploads:/app/uploads
    networks:
      - app-network
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - app-network

  cache:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - app-network

volumes:
  postgres_data:

networks:
  app-network:
    driver: bridge
```

## Docker Networking

```
┌──────────────────────────────────────────────┐
│                Docker Host                   │
│                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ Container│  │ Container│  │ Container│  │
│  │    A     │  │    B     │  │    C     │  │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  │
│       │              │              │        │
│  ┌────▼──────────────▼──────────────▼────┐  │
│  │         bridge network                │  │
│  └───────────────┬───────────────────────┘  │
│                  │                          │
│  ┌───────────────▼───────────────────────┐  │
│  │         host network                  │  │
│  └───────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
```

| Network | Descripción |
|---------|-------------|
| **bridge** | Default. Containers se comunican por IP |
| **host** | Container usa red del host |
| **overlay** | Multi-host networking (Swarm) |
| **none** | Sin red |
| **macvlan** | Asigna MAC address al container |

## Docker Volumes

```bash
# Named volume
docker volume create mydata
docker run -v mydata:/app/data myimage

# Bind mount
docker run -v /host/path:/container/path myimage

# TMPFS (memory only)
docker run --tmpfs /app/temp myimage
```

| Tipo | Persistencia | Uso |
|------|-------------|-----|
| **Named volume** | Sí | Databases, data persistente |
| **Bind mount** | Sí | Desarrollo, config files |
| **tmpfs** | No | Secrets, temp files |

## Comandos esenciales

```bash
# Build
docker build -t myapp:1.0 .
docker build --no-cache -t myapp:1.0 .

# Run
docker run -d -p 3000:3000 --name myapp myapp:1.0
docker run -it --rm alpine sh

# Manage
docker ps -a
docker logs -f myapp
docker exec -it myapp sh
docker stats

# Cleanup
docker system prune -a
docker volume prune
docker image prune -a
```

## Seguridad en containers

| Práctica | Descripción |
|----------|-------------|
| **Non-root user** | `USER appuser` en Dockerfile |
| **Read-only FS** | `--read-only` flag |
| **No new privileges** | `--security-opt=no-new-privileges` |
| **Scan images** | Trivy, Snyk, Clair |
| **Minimal base** | Alpine, distroless, scratch |
| **Pin versions** | No usar `latest` |
| **Secrets** | Docker secrets, not ENV |

```bash
# Scan image for vulnerabilities
trivy image myapp:1.0

# Run with security options
docker run --read-only \
  --security-opt=no-new-privileges \
  --cap-drop=ALL \
  --cap-add=NET_BIND_SERVICE \
  myapp:1.0
```

## Containers y Cloud Native

Relacionado con [[../09-DevOps-Infra/10-cloud-native|Cloud Native Architecture]]:
- Containers son el building block de cloud native
- Kubernetes orquesta containers a escala
- [[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes]] manage containers en clusters

## Relación con otros conceptos

- [[../09-DevOps-Infra/05-kubernetes-orchestration|Kubernetes]] — Orquestación de containers
- [[../09-DevOps-Infra/03-infrastructure-as-code|IaC]] — Infraestructura para containers
- [[../05-Herramientas/06-container-kubernetes|Containers en Herramientas]] — Evaluación de herramientas
- [[../01-Fundamentos/12-monolito-microservicios|Microservicios]] — Containers habilitan microservicios
- [[../09-DevOps-Infra/10-cloud-native|Cloud Native]] — Arquitectura cloud native
- [[../08-Calidad-Seguridad/07-devsecops|DevSecOps]] — Seguridad en containers
