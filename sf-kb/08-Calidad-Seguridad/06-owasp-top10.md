---
title: "OWASP Top 10"
tags:
  - sf/calidad
  - type/concepto
  - difficulty/intermedio
created: 2026-07-13
updated: 2026-07-13
category: "Calidad y Seguridad"
aliases:
  - "Top 10 Vulnerabilidades"
  - "OWASP Top Ten"
related:
  - "[[05-security-testing|Security Testing]]"
  - "[[07-devsecops|DevSecOps]]"
  - "[[09-zero-trust|Zero Trust]]"
---

# OWASP Top 10

## Visión General

El OWASP Top 10 es el estándar de referencia para las vulnerabilidades de seguridad más críticas en aplicaciones web.

## Top 10 (2021)

| Rank | Vulnerabilidad | Impacto |
|------|----------------|---------|
| A01 | Broken Access Control | Alto |
| A02 | Cryptographic Failures | Alto |
| A03 | Injection | Alto |
| A04 | Insecure Design | Medio |
| A05 | Security Misconfiguration | Medio |
| A06 | Vulnerable Components | Alto |
| A07 | Authentication Failures | Alto |
| A08 | Data Integrity Failures | Medio |
| A09 | Logging Failures | Medio |
| A10 | SSRF | Alto |

## A01: Broken Access Control

**Descripción**: Los usuarios actúan fuera de sus permisos previstos.

```javascript
// Vulnerable: No verifica permisos
app.get('/api/users/:id', (req, res) => {
  const user = db.users.findById(req.params.id); // Cualquier usuario puede acceder
  res.json(user);
});

// Seguro: Verifica permisos
app.get('/api/users/:id', authenticate, (req, res) => {
  if (req.user.id !== req.params.id && !req.user.isAdmin) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  const user = db.users.findById(req.params.id);
  res.json(user);
});
```

**Prevención**:
- Deny by default
- Re-usable access control modules
- Disable web server directory listing
- Log access control failures

## A02: Cryptographic Failures

**Descripción**: Fallos en criptografía que exponen datos sensibles.

```python
# Vulnerable: MD5 para passwords
import hashlib
def hash_password(password):
    return hashlib.md5(password.encode()).hexdigest()

# Seguro: bcrypt
import bcrypt
def hash_password(password):
    return bcrypt.hashpw(password.encode(), bcrypt.gensalt())
```

**Prevención**:
- Clasificar datos procesados y almacenados
- No almacenar datos sensibles innecesariamente
- Usar algoritmos actualizados (AES-256, RSA)
- Usar Key Management properly

## A03: Injection

**Descripción**: SQL, NoSQL, OS, LDAP injection.

```python
# Vulnerable: SQL Injection
query = f"SELECT * FROM users WHERE id = {user_input}"

# Seguro: Parameterized query
query = "SELECT * FROM users WHERE id = %s"
cursor.execute(query, (user_input,))
```

```javascript
// Vulnerable: XSS
element.innerHTML = userInput;

// Seguro: Text content
element.textContent = userInput;
// Or use DOMPurify for HTML
element.innerHTML = DOMPurify.sanitize(userInput);
```

## A04: Insecure Design

**Descripción**: Fallos en el diseño de seguridad.

| Patrón | Descripción |
|--------|-------------|
| **Threat Modeling** | Identificar amenazas en diseño |
| **Secure Design Patterns** | Patrones probados |
| **Reference Architecture** | Arquitecturas seguras |

## A05: Security Misconfiguration

**Descripción**: Configuraciones de seguridad por defecto o incompletas.

```nginx
# Vulnerable
server_tokens on;  # Muestra versión de nginx

# Seguro
server_tokens off;
```

```yaml
# Docker: Seguro
services:
  app:
    read_only: true
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
```

## A06: Vulnerable and Outdated Components

**Descripción**: Usar componentes con vulnerabilidades conocidas.

```bash
# Detección
npm audit
snyk test
trivy fs .
```

**Prevención**:
- Mantener inventario de componentes (SBOM)
- Usar herramientas SCA
- Solo obtener componentes de fuentes oficiales
- Monitorear componentes sin mantenimiento

## A07: Identification and Authentication Failures

**Descripción**: Fallos en autenticación y gestión de sesiones.

```python
# Seguro: Rate limiting en login
from flask_limiter import Limiter

limiter = Limiter(app, default_limits=["5 per minute"])

@app.route('/login', methods=['POST'])
@limiter.limit("5 per minute")
def login():
    # Autenticación con MFA
    ...
```

## A08: Software and Data Integrity Failures

**Descripción**: Fallos en integridad de software y datos.

- CI/CD pipeline integrity
- Signed commits
- Code signing
- Deserialization vulnerabilities

## A09: Security Logging and Monitoring Failures

**Descripción**: Fallos en logging y monitoreo de seguridad.

```python
# Logging de seguridad
import logging

security_logger = logging.getLogger('security')

def log_failed_login(username, ip):
    security_logger.warning(
        f"Failed login attempt for {username} from {ip}"
    )

def log_privilege_escalation(user, action):
    security_logger.critical(
        f"Privilege escalation: {user} attempted {action}"
    )
```

## A10: Server-Side Request Forgery (SSRF)

**Descripción**: El servidor realiza requests no previstos.

```python
# Vulnerable
import requests
def fetch_url(url):
    return requests.get(url).text  # SSRF vulnerable

# Seguro
from urllib.parse import urlparse
import ipaddress

ALLOWED_HOSTS = ['api.example.com', 'cdn.example.com']

def fetch_url(url):
    parsed = urlparse(url)
    if parsed.hostname not in ALLOWED_HOSTS:
        raise ValueError("Host not allowed")
    return requests.get(url, timeout=5).text
```

## Ver también

- [[05-security-testing|Security Testing]]
- [[07-devsecops|DevSecOps]]
- [[08-compliance-regulaciones|Compliance]]
- [[09-zero-trust|Zero Trust]]
- [[10-supply-chain-security|Supply Chain Security]]
