---
title: "IA en Documentación Técnica"
tags:
  - sf/ia-software
  - type/concepto
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "IA en Software"
aliases:
  - "AI Documentation"
  - "Auto-doc"
related:
  - "[[../07-IA-Software/03-generacion-codigo|Generación de Código]]"
  - "[[../03-Procesos/README|Procesos]]"
  - "[[../08-Calidad-Seguridad/README|Calidad y Seguridad]]"
---

# IA en Documentación Técnica

La documentación es una de las áreas donde la IA más impacta positivamente. Generar docs de código existente, READMEs y documentación de API se ha vuelto significativamente más fácil.

## Tipos de Documentación con AI

```
┌──────────────────────────────────────────────┐
│       DOCUMENTACIÓN GENERADA POR IA          │
├──────────────┬───────────────┬───────────────┤
│   CODE DOCS  │  PROJECT DOCS │  API DOCS     │
│              │               │               │
│ JSDoc/docstr │ README        │ OpenAPI/Swagger│
│ Inline comm. │ CHANGELOG     │ GraphQL schema│
│ Type annot.  │ CONTRIBUTING  │ API reference │
│ Examples     │ Architecture  │ Postman docs  │
└──────────────┴───────────────┴───────────────┘
```

## 1. Code Documentation

### Auto-generate docstrings

```python
# AI puede generar docstrings completos

# Input: Function without docs
def process_payment(amount, currency, user_id):
    # ... implementation

# AI output:
def process_payment(amount: float, currency: str, user_id: str) -> dict:
    """Process a payment transaction for a user.

    Validates the amount and currency, creates a payment record,
    and processes the transaction through the payment gateway.

    Args:
        amount: Payment amount in the specified currency. Must be > 0.
        currency: ISO 4217 currency code (e.g., 'USD', 'EUR').
        user_id: Unique identifier of the user making the payment.

    Returns:
        dict: Payment result containing:
            - transaction_id (str): Unique transaction identifier
            - status (str): 'completed', 'pending', or 'failed'
            - timestamp (str): ISO 8601 timestamp

    Raises:
        ValueError: If amount <= 0 or currency is invalid.
        PaymentError: If payment processing fails after retries.

    Example:
        >>> result = process_payment(29.99, "USD", "user_123")
        >>> print(result['status'])
        'completed'
    """
```

### Architecture documentation

```
AI Analysis: Project Structure
───────────────────────────────
src/
├── controllers/     → HTTP request handlers
├── services/        → Business logic layer
├── repositories/    → Data access layer
├── models/          → Domain entities
├── middleware/       → Express middleware
├── utils/           → Shared utilities
└── config/          → Configuration management

Architecture Pattern: Layered Architecture (MVC variant)
Flow: Request → Controller → Service → Repository → DB

Key Design Decisions:
- Dependency Injection for services
- Repository pattern for data access
- Middleware chain for auth + validation
```

## 2. README Generation

### Template generado por AI

```markdown
# Project Name

> One-line description generated from package.json/pom.xml

## Quick Start

### Prerequisites
- Node.js >= 18
- PostgreSQL >= 14

### Installation
\```bash
git clone <repo>
cd project
npm install
cp .env.example .env
\```

### Running
\```bash
npm run dev    # Development
npm run build  # Production build
npm test       # Run tests
\```

## Architecture
[Brief architecture description from code analysis]

## API Reference
[Endpoints extracted from route definitions]

## Configuration
[Environment variables from .env.example]

## Contributing
See [CONTRIBUTING.md](./CONTRIBUTING.md)
```

## 3. API Documentation

### OpenAPI from code

```yaml
# AI-generated from code analysis
openapi: 3.0.0
info:
  title: User API
  description: Generated from source code analysis
paths:
  /api/users:
    get:
      summary: List all users
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: Paginated list of users
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/UserList'
    post:
      summary: Create a new user
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUser'
```

### GraphQL schema generation

```graphql
# AI-generated from resolver analysis
type User {
  id: ID!
  name: String!
  email: String!
  role: UserRole!
  createdAt: DateTime!
  posts: [Post!]!
}

enum UserRole {
  ADMIN
  MEMBER
  VIEWER
}

type Query {
  users(pagination: PaginationInput): UserConnection!
  user(id: ID!): User
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
}
```

## Herramientas

| Tool | Type | Features | Pricing |
|------|------|----------|---------|
| Mintlify | Docs platform | AI-generated + hosted | Free tier + paid |
| Readme.com | API docs | AI suggestions | Enterprise |
| Swaggo | Go | Auto OpenAPI from annotations | Free/OSS |
| TypeDoc | TypeScript | Auto API reference | Free/OSS |
| Swagger UI | Multi | API visualization | Free/OSS |
| Copilot | IDE | Inline doc generation | $10-39/mes |

## Workflow de Documentación

```
Code Change → AI Detects → Generates Docs → Review → Merge
     │              │              │            │
     ▼              ▼              ▼            ▼
  New function   Missing docs   Draft doc   Human edits
  Modified API   Outdated docs  Updated     Approved
  Changed schema New endpoints  Draft API   Published
```

## Best Practices

1. **Review generated docs**: AI puede generar docs incorrectas
2. **Maintain consistency**: Usar templates estándar
3. **Automate en CI**: Auto-generate en cada PR
4. **Link docs to code**: Wikilinks, cross-references
5. **Version docs**: Docs deben versionarse con el código

### Prompt template

```
Generate comprehensive documentation for this code:
[paste code]

Include:
- Function/class purpose
- Parameters and return values
- Usage examples
- Edge cases and error handling
- Related functions/classes
Format: [JSDoc/Docstring/Markdown]
```

## Relación con otros conceptos

- Código: [[../07-IA-Software/03-generacion-codigo|Generación de Código]]
- Procesos: [[../03-Procesos/README|Procesos]]
- Calidad: [[../08-Calidad-Seguridad/README|Calidad y Seguridad]]
- Herramientas: [[../05-Herramientas/README|Herramientas]]
