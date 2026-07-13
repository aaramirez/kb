---
title: "Serverless y Edge Computing"
tags:
  - sf/devops
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "DevOps e Infraestructura"
aliases:
  - "Serverless"
  - "Lambda"
  - "Edge Computing"
  - "Cloudflare Workers"
  - "FaaS"
related:
  - "[[../09-DevOps-Infra/10-cloud-native|Cloud Native]]"
  - "[[../09-DevOps-Infra/04-containers-docker|Containers y Docker]]"
  - "[[../09-DevOps-Infra/12-cost-optimization|Optimización de Costos]]"
  - "[[../05-Herramientas/08-plataformas-cloud|Plataformas Cloud]]"
---

# Serverless y Edge Computing

Serverless elimina la gestión de infraestructura, permitiendo enfocarse exclusivamente en el código. Edge Computing ejecuta lógica cerca del usuario final para reducir latencia.

## ¿Qué es Serverless?

```
Traditional:                   Serverless:
┌──────────────┐              ┌──────────────┐
│  Provision   │              │              │
│  servers     │              │  Write code  │
│  (always on) │              │  (on-demand) │
│              │              │              │
│  You manage: │              │  Provider    │
│  - OS        │              │  manages:    │
│  - Runtime   │              │  - Servers   │
│  - Scaling   │              │  - Scaling   │
│  - Patching  │              │  - Patches   │
└──────────────┘              └──────────────┘
```

### Modelos serverless

| Modelo | Descripción | Ejemplo |
|--------|-------------|---------|
| **FaaS** | Functions as a Service | AWS Lambda, Azure Functions |
| **BaaS** | Backend as a Service | Firebase, Supabase |
| **Serverless containers** | Containers on-demand | AWS Fargate, Cloud Run |
| **Serverless databases** | Auto-scaling DBs | DynamoDB, PlanetScale |

## AWS Lambda

### Function example

```javascript
// Simple Lambda function
exports.handler = async (event) => {
    const body = JSON.parse(event.body);

    // Business logic
    const result = await processOrder(body);

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            message: 'Order processed',
            orderId: result.id
        })
    };
};

async function processOrder(order) {
    // Validate, save to DB, send email, etc.
    const orderId = generateId();

    await saveToDynamoDB({
        orderId,
        items: order.items,
        total: calculateTotal(order.items),
        status: 'confirmed',
        createdAt: new Date().toISOString()
    });

    await sendEmail(order.email, `Order ${orderId} confirmed`);

    return { id: orderId };
}
```

### Lambda + API Gateway

```
Client → API Gateway → Lambda → DynamoDB
                │
                ├── Lambda (auth)
                ├── Lambda (business logic)
                └── Lambda (notifications)
```

```yaml
# SAM Template
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31

Globals:
  Function:
    Timeout: 30
    Runtime: nodejs18.x
    MemorySize: 128
    Environment:
      Variables:
        TABLE_NAME: !Ref OrdersTable

Resources:
  ApiFunction:
    Type: AWS::Serverless::Function
    Properties:
      Handler: src/handlers/api.handler
      Events:
        Api:
          Type: Api
          Properties:
            Path: /{proxy+}
            Method: ANY
            RestApiId: !Ref Api

  OrdersTable:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: orders
      BillingMode: PAY_PER_REQUEST
      AttributeDefinitions:
        - AttributeName: orderId
          AttributeType: S
      KeySchema:
        - AttributeName: orderId
          KeyType: HASH
```

## Cloudflare Workers

### Edge Computing

```javascript
// Cloudflare Worker at the edge
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // Runs at the edge, close to the user
  const url = new URL(request.url);

  if (url.pathname === '/api/time') {
    return new Response(JSON.stringify({
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      time: new Date().toISOString(),
      region: request.cf?.colo // Cloudflare data center
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Proxy with caching
  const response = await fetch(request);
  const newResponse = new Response(response.body, response);
  newResponse.headers.set('Cache-Control', 'public, max-age=300');

  return newResponse;
}
```

### Workers vs Lambda@Edge

| Aspecto | Cloudflare Workers | Lambda@Edge |
|---------|-------------------|-------------|
| **Cold start** | < 5ms | 50-500ms |
| **Runtime** | V8 isolates | Node.js |
| **Limits** | 30s CPU, 128MB | 30s, 128MB |
| **Pricing** | Per request + CPU time | Per request + duration |
| **Global** | 300+ locations | 200+ locations |
| **K/V Store** | Built-in (Workers KV) | Not built-in |

## Casos de uso

### Serverless scenarios

| Scenario | Solution |
|----------|----------|
| **API endpoints** | Lambda + API Gateway |
| **Data processing** | Lambda + S3 events |
| **Scheduled tasks** | EventBridge + Lambda |
| **Real-time streaming** | Kinesis + Lambda |
| **Chatbots** | Lex + Lambda |
| **IoT processing** | IoT Core + Lambda |

### Edge scenarios

| Scenario | Solution |
|----------|----------|
| **Personalization** | Workers modify response based on user |
| **A/B testing** | Route to different origins at edge |
| **Bot detection** | Block malicious traffic at edge |
| **Image optimization** | Resize/transform images at edge |
| **Geolocation** | Serve content based on location |
| **Rate limiting** | Protect APIs at edge |

## Tradeoffs de Serverless

### Ventajas

| Ventaja | Descripción |
|---------|-------------|
| **No ops** | Sin servers que gestionar |
| **Auto-scaling** | Escala a 0 y a millones |
| **Pay per use** | Solo pagas por ejecución |
| **Fast startup** | Deploy en segundos |
| **Focus on code** | Sin infra, solo lógica |

### Desventajas

| Desventaja | Descripción |
|------------|-------------|
| **Cold starts** | Latencia en primera invocación |
| **Vendor lock-in** | Tightly coupled al provider |
| **Limits** | Memory, time, concurrency limits |
| **Debugging** | Más difícil que applications tradicionales |
| **Cost at scale** | A gran escala puede ser más caro |

```
Cost comparison:

Low traffic (< 1M req/month):
  Serverless: ~$5/month ✓
  Containers: ~$50/month (minimum)

Medium traffic (10M req/month):
  Serverless: ~$50/month
  Containers: ~$100/month

High traffic (100M+ req/month):
  Serverless: ~$500/month
  Containers: ~$200/month ✓ (optimize with reserved)
```

## Comparación de plataformas

| Platform | Cold Start | Free Tier | Pricing Model |
|----------|-----------|-----------|---------------|
| **AWS Lambda** | 100-500ms | 1M req/month | Per request + duration |
| **Azure Functions** | 100-500ms | 1M req/month | Per request + duration |
| **Google Cloud Functions** | 100-500ms | 2M req/month | Per request + duration |
| **Cloudflare Workers** | < 5ms | 100K req/day | Per request + CPU time |
| **Deno Deploy** | < 10ms | 100K req/day | Per request |

## Serverless + Containers

```
┌─────────────────────────────────────────────┐
│           Hybrid Approach                   │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │  Serverless (event-driven)            │  │
│  │  - API endpoints                      │  │
│  │  - Background jobs                    │  │
│  │  - Scheduled tasks                    │  │
│  └───────────────────────────────────────┘  │
│                                             │
│  ┌───────────────────────────────────────┐  │
│  │  Containers (long-running)            │  │
│  │  - WebSocket servers                  │  │
│  │  - ML inference                       │  │
│  │  - Stateful services                  │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

## Relación con otros conceptos

- [[../09-DevOps-Infra/10-cloud-native|Cloud Native]] — Serverless es cloud native
- [[../09-DevOps-Infra/04-containers-docker|Containers]] — Alternativa/complemento a serverless
- [[../09-DevOps-Infra/12-cost-optimization|Optimización de Costos]] — Pricing models
- [[../05-Herramientas/08-plataformas-cloud|Plataformas Cloud]] — Providers
- [[../01-Fundamentos/14-software-categoria-a|Software Categoría A]] — When serverless is appropriate
- [[../09-DevOps-Infra/03-infrastructure-as-code|IaC]] — Infrastructure for serverless
