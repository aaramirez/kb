---
title: "Estándares de diseño de APIs"
tags:
  - sf/practicas
  - type/guia
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Prácticas y estándares"
aliases:
  - "API design"
  - "OpenAPI"
  - "REST Standards"
  - "API versioning"
  - "gRPC design"
  - "GraphQL design"
related:
  -  "./07-documentacion-tecnca|Documentación técnica"
  -  "./01-coding-standards|Coding standards"
  -  "./02-clean-code|Clean Code"
  -  "./11-definition-of-done|DoD"
  -  "./06-code-review-best-practices|Code Review"
  -  "../06-Metricas/performance-metrics|Performance Metrics"
  -  "../05-Herramientas/api-tools|API tools"
  -  "../01-Fundamentos/networking-basics|Networking basics"
  -  "../03-Procesos/ci-cd-pipelines|CI/CD pipelines"
  -  "./07-documentacion-tecnca|Documentación técnica"
  -  "../08-Calidad/READ-LINT|Calidad"

---

# AP design standards

## Introduction

Proposed:**

Estándar para diseño de APIs REST, GraphQL, gRPC y pautas comunes.

## REST

### URI naming

| Element | Rule |
|---------|------|
| nouns | Use plurals: `/users` |
| verbs | Avoid: `/getUsers` instead use `/users` |
| nesting | `/users/{id}/orders` |
| cases | kebab-case: `/user-profiles` |

### HTTP methods and status

| Method | Action | Success code |
|--------|--------|-------------|
| GET | Read | 200 |
| POST | Create | 201 |
| PUT | Replace | 200 |
| PATCH | Partial update | 200 |
| DELETE | Delete | 204 |

### Error response body

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid email format",
    "details": [
      {
        "field": "email",
        "issue": "must be valid"
      }
    ]
  }
}
```
 
### Pagination

```
GET /users?page=2&per_page=20
```

### OpenAPI spec

Define APIs in a machine-readable format:

```yaml
paths:
  /users:
    get:
      summary: List users
      parameters: [...]
      responses:
        "200":
          description: successful
```

## GraphQL

### Principles

- Define a clear schema
- Use descriptive names for fields
- Protect against N+1 queries (dataloader)
- Return meaningful error messages
- Versionless (evolve schema)

### Mutations

```graphql
type Mutation {
  createUser(input: CreateUserInput!): User!
}
```

## gRPC

### Proto design

- Use semantic naming for messages
- Use enum for finite sets of values
- Use streaming for large data sets
- Use deprecation statuses

```protobuf
service UserService {
  rpc GetUser (GetUserRequest) returns (User);
}

message GetUserRequest {
  string user_id = 1;
}
```

## API versioning

| Approach | Pros | Cons |
|----------|------|------|
| URL: `/v1/users` | Easy to route | Polluting URLs |
| Header: `Accept: vnd.api.v1`| Clean URL | harder to route|
| Query: `?version=1` | Quick | clutters logs |

## Security

- Always TLS
- Use API keys or OAuth2
- Rate-limit all endpoints
- Document scopes and permissions
- Ratelimit: `X-RateLimit-Remaining`

## Documentation

- Use a spec language (OpenAPI, TypeSpec)
- Provide interactive playground (Swagger UI)
- Keep changelog up to date
- Link to ADRs for breaking decisions

## Ver también

- [[07-documentacion-tecnca|Documentación ADR]]
- [[01-coding-standards|Coding standards]]
