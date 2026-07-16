# Creando Tools vía Plugins

## Idea central

Las tools personalizadas son la forma más directa de extender las capacidades de un agente. Existen tres formas de crearlas: standalone (sin plugin), vía plugin V1 (Zod schemas), y vía plugin V2 (JSON Schema).

## Tres formas de crear tools

| Forma | Ubicación | Schema | Cuándo usar |
|-------|-----------|--------|-------------|
| Standalone | `.opencode/tools/` | Zod | Tool simple, sin lógica de plugin |
| Plugin V1 | En el return del plugin | Zod | Tool que necesita contexto del plugin |
| Plugin V2 | `ctx.tool.transform()` | JSON Schema | V2 beta, máximo control |

## Tool Standalone

La forma más simple: un archivo en `.opencode/tools/` que exporta una tool.

```ts
// .opencode/tools/greeting.ts
import { tool } from "@opencode-ai/plugin"

export default tool({
  description: "Genera un saludo personalizado",
  args: {
    name: tool.schema.string().describe("Nombre de la persona"),
    language: tool.schema.enum(["es", "en", "fr"]).default("es")
  },
  async execute(args, context) {
    const greetings = {
      es: `¡Hola ${args.name}!`,
      en: `Hello ${args.name}!`,
      fr: `Bonjour ${args.name}!`
    }
    return greetings[args.language]
  }
})
```

El agente puede llamar esta tool automáticamente cuando detecta la necesidad.

### ToolContext — El segundo argumento

```ts
type ToolContext = {
  sessionID: string       // ID de la sesión actual
  messageID: string       // ID del mensaje que invocó la tool
  agent: string           // Nombre del agente que usa la tool
  directory: string       // Directorio de trabajo actual
  worktree: string        // Raíz del worktree git
  abort: AbortSignal      // Señal de aborto (Ctrl+C)
  
  metadata(input: {       // Enrichcer el resultado
    title?: string,
    metadata?: { [key: string]: any }
  }): void
  
  ask(input: {            // Pedir permiso al usuario
    permission: string,
    patterns: string[],
    always: string[],
    metadata: { [key: string]: any }
  }): Promise<void>
}
```

### Retorno de la tool

```ts
// Opción 1: string simple
return "Resultado aquí"

// Opción 2: objeto con metadata
return {
  title: "Resultado formateado",       // título visible en la UI
  output: "Contenido detallado...",     // contenido principal
  metadata: {                           // metadata adicional
    fileCount: 5,
    linesAdded: 120
  },
  attachments: [{                       // archivos adjuntos
    type: "file",
    mime: "text/plain",
    url: "file:///path/to/file.txt",
    filename: "reporte.txt"
  }]
}
```

## Tool via Plugin V1

Cuando la tool necesita acceso al contexto del plugin (SDK client, proyecto, etc.).

```js
// .opencode/plugins/db-query/index.js
import { tool } from "@opencode-ai/plugin"

export default {
  id: "db-query",
  server: async (ctx) => {
    // ctx.client disponible para hacer llamadas al SDK
    return {
      tool: {
        "db-query": tool({
          description: "Consulta la base de datos del proyecto",
          args: {
            query: tool.schema.string().describe("SQL query (solo SELECT)"),
            database: tool.schema.string().default("main")
          },
          async execute(args, context) {
            // Validar que sea SELECT
            if (!args.query.trim().toUpperCase().startsWith("SELECT")) {
              return { title: "Error", output: "Solo se permiten consultas SELECT" }
            }
            
            // Usar ctx.client para interactuar con opencode
            const result = await ctx.$`sqlite3 ${args.database} "${args.query}"`
            
            return {
              title: `Consulta en ${args.database}`,
              output: result.stdout
            }
          }
        })
      }
    }
  }
}
```

### Override de tools built-in

Si una tool tiene el mismo nombre que una tool built-in, **la del plugin gana**:

```js
return {
  tool: {
    // Sobrescribe la tool bash nativa
    "bash": tool({
      description: "Bash con validación adicional",
      args: { command: tool.schema.string() },
      async execute(args, context) {
        // Validación antes de ejecutar
        if (args.command.includes("rm -rf /")) {
          return { output: "Operación no permitida" }
        }
        return await originalBash(args)
      }
    })
  }
}
```

## Tool via Plugin V2 (beta)

V2 usa JSON Schema en lugar de Zod:

```ts
import { Plugin } from "@opencode-ai/plugin/v2"

export default Plugin.define({
  id: "db-query-v2",
  setup: async (ctx) => {
    await ctx.tool.transform((tools) => {
      tools.add({
        name: "db-query",
        description: "Consulta la base de datos del proyecto",
        jsonSchema: {
          type: "object",
          properties: {
            query: { type: "string", description: "SQL query" },
            database: { type: "string", description: "Nombre de la DB", default: "main" }
          },
          required: ["query"],
          additionalProperties: false
        },
        execute: async ({ query, database }) => {
          const text = `Resultado de: ${query}`
          return {
            structured: { result: text },
            content: [{ type: "text", text }]
          }
        }
      })
    })
  }
})
```

V2 soporta `group` (agrupar tools en la UI) y `codemode` (ejecutar en modo código).

## Ejemplo práctico: Tool de métricas

```ts
// .opencode/tools/project-metrics.ts
import { tool } from "@opencode-ai/plugin"
import { readFile } from "fs/promises"
import { resolve } from "path"

export default tool({
  description: "Calcula métricas del proyecto: líneas de código, archivos, complejidad",
  args: {
    path: tool.schema.string().default(".").describe("Directorio a analizar"),
    include: tool.schema.string().default("*.ts").describe("Patrón de archivos")
  },
  async execute(args, context) {
    const dir = resolve(context.directory, args.path)
    
    // Contar archivos y líneas
    const files = await Bun.glob(args.include, { cwd: dir })
    let totalLines = 0
    
    for (const file of files) {
      const content = await readFile(resolve(dir, file), "utf-8")
      totalLines += content.split("\n").length
    }
    
    return {
      title: `Métricas de ${args.path}`,
      output: [
        `Archivos: ${files.length}`,
        `Líneas totales: ${totalLines}`,
        `Promedio por archivo: ${Math.round(totalLines / files.length)}`
      ].join("\n"),
      metadata: {
        fileCount: files.length,
        totalLines,
        avgLinesPerFile: Math.round(totalLines / files.length)
      }
    }
  }
})
```

## Buenas prácticas

1. **Validación con schema**: siempre define `args` con tipos claros. El LLM los usa para generar los argumentos correctos.

2. **Manejo de errores**: retorna un objeto con `title` y `output` descriptivo en lugar de lanzar excepciones.

3. **Retorno rico**: usa `metadata` para datos estructurados que otros plugins o hooks puedan consumir.

4. **Adjuntos**: usa `attachments` para archivos generados (reportes, listados, etc.).

5. **Permisos**: usa `context.ask()` para acciones destructivas que requieran confirmación del usuario.

6. **Nombres claros**: usa kebab-case (`db-query`, no `dbQuery`). El LLM los ve como identifiers.

7. **Cuándo crear una tool vs usar bash**:
   - **Tool**: patrón que se repite, necesita validación, produce output estructurado, requiere permisos
   - **Bash**: tarea exploratoria, una sola vez, sin output especial

---

*Anterior: [[15-TUI-Customizacion-y-Dialogs|TUI — Customización y Dialogs]] | Siguiente: [[17-Caso-Practico-Plugin-Completo|Caso Práctico — Plugin Completo]]*
