# Hooks — Referencia Completa

## Idea central

Los hooks son callbacks event-driven que un plugin retorna para suscribirse a puntos específicos del ciclo de vida de opencode. Cada hook recibe un `input` (contexto del evento) y un `output` (objeto mutable) que el plugin puede modificar.

## Cómo funcionan

Un plugin server retorna un objeto donde las claves son nombres de hook y los valores son funciones async:

```js
export default {
  id: "mi-plugin",
  server: async (ctx) => {
    return {
      "tool.execute.before": async (input, output) => {
        // input: contexto del evento (read-only)
        // output: objeto que se puede mutar
      }
    }
  }
}
```

**Patrón input/output**: el primer argumento es información del evento (no se muta), el segundo es el objeto que el plugin puede modificar para alterar el comportamiento.

**Cadena de ejecución**: si múltiples plugins suscriben el mismo hook, se ejecutan en orden de registro. Cada uno recibe el output del anterior.

## Hooks de Interceptación de Tools

### `tool.execute.before`

Se ejecuta **antes** de que opencode ejecute una tool. Puede modificar los argumentos.

```js
"tool.execute.before": async (input, output) => {
  // input: { tool: string, sessionID: string, callID: string }
  // output: { args: any }
  
  // Ejemplo: escapar comandos bash
  if (input.tool === "bash") {
    output.args.command = escape(output.args.command)
  }
}
```

### `tool.execute.after`

Se ejecuta **después** de que la tool termina. Puede modificar el resultado.

```js
"tool.execute.after": async (input, output) => {
  // input: { tool: string, sessionID: string, callID: string, args: any }
  // output: { title: string, output: string, metadata: any }
  
  // Ejemplo: log de todas las escrituras
  if (input.tool === "write" || input.tool === "edit") {
    console.log(`Escritura en: ${input.args.filePath}`)
  }
}
```

### `tool.definition`

Modifica las definiciones de tools que se envían al LLM. Útil para renombrar, describir mejor o limitar tools.

```js
"tool.definition": async (input, output) => {
  // input: { toolID: string }
  // output: { description: string, parameters: any }
  
  if (input.toolID === "bash") {
    output.description = "Ejecuta comandos shell (solo lectura)"
  }
}
```

## Hooks de Permisos

### `permission.ask`

Se ejecuta cuando opencode necesita permiso para una acción. Puede auto-aprobar o denegar.

```js
"permission.ask": async (input, output) => {
  // input: Permission (patrón, agent, etc.)
  // output: { status: "ask" | "deny" | "allow" }
  
  // Auto-aprobar git status
  if (input.pattern === "bash(git status)") {
    output.status = "allow"
  }
  
  // Denegar rm -rf
  if (input.pattern?.includes("rm -rf")) {
    output.status = "deny"
  }
}
```

Valores de `output.status`:
- `"ask"` — pedir al usuario (default)
- `"allow"` — aprobar silenciosamente
- `"deny"` — denegar silenciosamente

## Hooks de Shell

### `shell.env`

Inyecta variables de entorno al shell antes de ejecutar comandos.

```js
"shell.env": async (input, output) => {
  // input: { cwd: string, sessionID?: string, callID?: string }
  // output: { env: Record<string, string> }
  
  output.env.MY_API_KEY = process.env.MY_API_KEY
  output.env.PROJECT_ROOT = input.cwd
  output.env.NODE_ENV = "development"
}
```

## Hooks de Chat (LLM)

### `chat.message`

Se ejecuta cuando se recibe un mensaje nuevo. Puede modificar el mensaje y sus partes.

```js
"chat.message": async (input, output) => {
  // input: { sessionID, agent?, model?, messageID?, variant? }
  // output: { message: UserMessage, parts: Part[] }
  
  // Agregar contexto al mensaje
  output.parts.push({
    type: "text",
    text: "Contexto adicional: el usuario prefiere TypeScript"
  })
}
```

### `chat.params`

Modifica los parámetros enviados al LLM. Ideal para forzar temperature por agente.

```js
"chat.params": async (input, output) => {
  // input: { sessionID, agent, model, provider, message }
  // output: { temperature, topP, topK, maxOutputTokens, options }
  
  // Temperature baja para reviewer
  if (input.agent === "reviewer") {
    output.temperature = 0.1
  }
  
  // Temperature alta para brainstorming
  if (input.agent === "brainstorm") {
    output.temperature = 0.9
  }
}
```

### `chat.headers`

Inyecta headers HTTP en las peticiones al provider de LLM.

```js
"chat.headers": async (input, output) => {
  // input: { sessionID, agent, model, provider, message }
  // output: { headers: Record<string, string> }
  
  output.headers["X-Custom-Trace"] = "my-trace-id"
  output.headers["Helicone-Session-Id"] = input.sessionID
}
```

## Hooks de Comandos

### `command.execute.before`

Se ejecuta antes de que opencode procese un comando slash.

```js
"command.execute.before": async (input, output) => {
  // input: { command: string, sessionID: string, arguments: string }
  // output: { parts: Part[] }
  
  if (input.command === "commit") {
    // Inyectar contexto antes del commit
    output.parts.push({
      type: "text",
      text: "Usar formato: feat(scope): description"
    })
  }
}
```

## Hooks Experimentales

> Estos hooks están marcados como experimentales y pueden cambiar sin previo aviso.

### `experimental.chat.system.transform`

Inyecta contenido al system prompt. La forma más poderosa de modificar el comportamiento del agente.

```js
"experimental.chat.system.transform": async (input, output) => {
  // input: { sessionID?, model }
  // output: { system: string[] }
  
  output.system.push(
    "## Reglas adicionales\n" +
    "- Siempre usar TypeScript\n" +
    "- Nunca usar `any`\n" +
    "- Seguir convención de commits convencionales"
  )
}
```

### `experimental.chat.messages.transform`

Transforma el historial completo de mensajes antes de enviar al LLM.

```js
"experimental.chat.messages.transform": async (input, output) => {
  // input: {}
  // output: { messages: { info: Message, parts: Part[] }[] }
  
  // Filtrar mensajes de un agente específico
  output.messages = output.messages.filter(m => 
    m.info.agent !== "debug"
  )
}
```

### `experimental.session.compacting`

Customiza el prompt y contexto de compactación de sesiones.

```js
"experimental.session.compacting": async (input, output) => {
  // input: { sessionID }
  // output: { context: string[], prompt?: string }
  
  // Agregar contexto que debe sobrevivir la compactación
  output.context.push(
    "## Estado actual\n" +
    "- Trabajando en módulo de autenticación\n" +
    "- Archivos activos: auth.ts, middleware.ts\n" +
    "- Decisión: usar JWT con refresh tokens"
  )
  
  // O reemplazar el prompt completo
  // output.prompt = "Compacta esta sesión conservando: ..."
}
```

### `experimental.compaction.autocontinue`

Controla si opencode envía un mensaje automático después de compactar.

```js
"experimental.compaction.autocontinue": async (input, output) => {
  // input: { sessionID, agent, model, provider, message, overflow }
  // output: { enabled: boolean }
  
  // Deshabilitar auto-continue para agentes de review
  if (input.agent === "reviewer") {
    output.enabled = false
  }
}
```

### `experimental.text.complete`

Modifica el texto completado antes de mostrarlo.

```js
"experimental.text.complete": async (input, output) => {
  // input: { sessionID, messageID, partID }
  // output: { text: string }
  
  // Reemplazar menciones sensibles
  output.text = output.text.replace(/SECRET-\d+/g, "[REDACTED]")
}
```

### `experimental.provider.small_model`

Override del modelo pequeño que usa opencode para tareas internas (resúmenes, etc.).

```js
"experimental.provider.small_model": async (input, output) => {
  // input: { provider }
  // output: { model?: ModelV2 }
  
  output.model = {
    id: "claude-haiku-4-5",
    name: "Claude Haiku"
  }
}
```

## Hooks de Configuración y Auth

### `config`

Se ejecuta al cargar la configuración. Permite modificar la config antes de que opencode la use.

```js
config: async (input) => {
  // input: Config completa de opencode
  // Modificar directamente
  input.permission = input.permission || {}
  input.permission["bash(*)"] = "ask"
}
```

### `event`

Catch-all que recibe **cualquier** evento del sistema de opencode.

```js
event: async (input) => {
  // input: { event: Event }
  // event.type puede ser: session.created, message.updated, tool.execute.after, etc.
  
  if (input.event.type === "session.error") {
    console.error("Error en sesión:", input.event.properties)
  }
}
```

### `dispose`

Se ejecuta cuando el plugin se descarga (hot reload o cierre de opencode).

```js
dispose: async () => {
  // Limpiar recursos: cerrar conexiones, cancelar timers, etc.
  await myDatabase.close()
}
```

### `auth`

Registra flujos de autenticación OAuth/API para providers custom.

```js
auth: {
  provider: "mi-provider",
  methods: [{
    type: "api",
    label: "API Key",
    prompts: [{
      type: "text",
      key: "apiKey",
      message: "Ingresa tu API key:"
    }],
    async authorize(inputs) {
      // Validar la key
      return { type: "success", key: inputs.apiKey }
    }
  }]
}
```

### `provider`

Registra un provider custom con sus modelos.

```js
provider: {
  id: "mi-provider",
  async models(provider, ctx) {
    return {
      "mi-model-1": { id: "mi-model-1", name: "Mi Modelo 1" },
      "mi-model-2": { id: "mi-model-2", name: "Mi Modelo 2" }
    }
  }
}
```

## Resumen visual

```
Plugin server retorna:
│
├── tool.execute.before    → Modificar args antes de ejecutar
├── tool.execute.after     → Modificar resultado después
├── tool.definition        → Modificar descripción/params enviados al LLM
│
├── permission.ask         → Auto-allow/deny permisos
│
├── shell.env              → Inyectar env vars
│
├── chat.message           → Modificar mensaje nuevo
├── chat.params            → Modificar temperature, topP, etc.
├── chat.headers           → Inyectar headers HTTP
│
├── command.execute.before → Modificar comando slash
│
├── experimental.chat.system.transform    → Inyectar al system prompt
├── experimental.chat.messages.transform  → Transformar historial
├── experimental.session.compacting       → Customizar compaction
├── experimental.compaction.autocontinue  → Controlar auto-continue
├── experimental.text.complete            → Modificar texto final
├── experimental.provider.small_model     → Override modelo pequeño
│
├── config                 → Modificar config al cargar
├── event                  → Catch-all de eventos
├── dispose                → Cleanup al descargar
├── auth                   → Registrar auth de providers
└── provider               → Registrar provider custom
```

## V2 Preview (beta)

V2 introduce un API alternativa con transforms estructurados:

```js
import { Plugin } from "@opencode-ai/plugin/v2"

export default Plugin.define({
  id: "mi-plugin-v2",
  setup: async (ctx) => {
    // Transform de agentes
    await ctx.agent.transform((agents) => {
      agents.update("reviewer", (a) => { a.mode = "subagent" })
    })
    
    // Transform de tools
    await ctx.tool.transform((tools) => {
      tools.add({ name: "greeting", ... })
    })
    
    // Hook de sesión
    await ctx.session.hook("request", (event) => {
      delete event.tools.write  // Quitar tool write
    })
    
    // Hook de SDK
    await ctx.aisdk.hook("sdk", (event) => {
      // Modificar configuración del SDK
    })
  }
})
```

V2 usa `Plugin.define()` con `setup(ctx)` o `effect: (ctx) => Effect.gen(...)`. Las registraciones se liberan automáticamente con el scope del plugin.

---

*Anterior: [[13-Sistema-de-Plugins|Sistema de Plugins]] | Siguiente: [[15-TUI-Customizacion-y-Dialogs|TUI — Customización y Dialogs]]*
