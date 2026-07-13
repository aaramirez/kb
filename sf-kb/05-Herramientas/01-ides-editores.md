---
title: "IDEs y Editores Modernos"
tags:
  - sf/herramientas
  - type/herramienta
  - difficulty/principiante
created: 2026-07-13
updated: 2026-07-13
category: "Herramientas y Tecnología"
aliases:
  - "IDEs"
  - "Editores de Código"
related:
  - "[[09-ai-coding-assistants]]"
  - "[[../07-IA-Software/README|IA en Software]]"
  - "[[12-developer-experience]]"
---

## Visión General

El IDE (Integrated Development Environment) es la herramienta primaria del developer. La elección correcta impacta directamente productividad, [[../04-Practicas/README|code quality]] y experiencia del equipo.

## Panorama Actual

### Categorías de Herramientas

| Categoría | Ejemplos | Características |
|-----------|----------|-----------------|
| IDE completo | JetBrains IntelliJ, Visual Studio | Compilación, debugging profundo, refactoring |
| Editor extensible | VS Code, Sublime Text | Lightweight, ecosistema de plugins, AI integrado |
| AI-native IDE | Cursor, Windsurf | IA como ciudadano de primera clase |
| Terminal-based | Vim/Neovim, Helix, Zed | Speed, minimal footprint, workflows teclado |

## Comparativa de Principales Herramientas

### VS Code

| Aspecto | Detalle |
|---------|---------|
| **Base** | Electron (Chromium + Node.js) |
| **Costo** | Gratuito, open-source |
| **Lenguajes** | Multi-lenguaje via extensions |
| **AI Integration** | GitHub Copilot, Continue, Codeium |
| **Remote Dev** | Dev Containers, SSH, WSL |
| **Marketplace** | +40,000 extensiones |
| **Rendimiento** | Medio en proyectos grandes |

**Fortalezas**: Ecosistema masivo, integración Git nativa, debugging avanzado, terminal integrada.

**Debilidades**: Consumo de memoria, rendimiento con proyectos monolíticos.

### JetBrains IntelliJ /全家桶

| Aspecto | Detalle |
|---------|---------|
| **Base** | JVM (IntelliJ Platform) |
| **Costo** | Community (gratis) / Ultimate (paid) |
| **Lenguajes** | IDEs específicos por lenguaje |
| **AI Integration** | JetBrains AI Assistant |
| **Refactoring** | Best-in-class |
| **Debugging** | Enterprise-grade |
| **Rendimiento** | Alto consumo, pero optimizado |

**Fortalezas**: Refactoring inteligente, análisis de código profundo, database tools, Spring support.

**Debilidades**: Costo licenciamiento, consumo de recursos.

### Cursor

| Aspecto | Detalle |
|---------|---------|
| **Base** | Fork de VS Code |
| **Costo** | Free tier + Pro ($20/mes) |
| **AI Features** | Chat, Composer, Tab completions, codebase indexing |
| **Modelos** | GPT-4, Claude, custom |
| **Codebase Awareness** | Indexa todo el proyecto |
| **Privacy** | Mode without code retention |

**Fortalezas**: AI contextualizada en el proyecto completo, Composer para cambios multi-archivo.

**Debilidades**: Newer, smaller ecosystem than VS Code, dependencia de connectividad AI.

### Windsurf (Codeium)

| Aspecto | Detalle |
|---------|---------|
| **Base** | Fork de VS Code |
| **Costo** | Free tier generoso |
| **AI Features** | Cascade (multi-step agentic), autocomplete |
| **Differentiator** | Flows — AI que navega entre archivos |

**Fortalezas**: Agentic workflow sin fricción, free tier competitivo.

### Vim / Neovim

| Aspecto | Detalle |
|---------|---------|
| **Base** | Terminal |
| **Costo** | Gratuito, open-source |
| **Modal Editing** | Normal, Insert, Visual, Command |
| **Plugins** | lazy.nvim, packer |
| **AI Integration** | Codeium.nvim, Copilot.vim, Avante |
| **Learning Curve** | Alto al inicio, productividad máxima después |
| **Rendimiento** | Excepcional |

**Fortalezas**: Velocidad, no depende de GUI, funciona en cualquier entorno, personalización total.

**Debilidades**: Curva de aprendizaje empinada, configuración inicial compleja.

## Feature Matrix

| Feature | VS Code | JetBrains | Cursor | Windsurf | Neovim |
|---------|---------|-----------|--------|----------|--------|
| IntelliSense | ✅ | ✅✅ | ✅ | ✅ | ⚙️ |
| AI Autocomplete | ✅ | ✅ | ✅✅ | ✅✅ | ⚙️ |
| AI Chat | ✅ | ✅ | ✅✅ | ✅✅ | ⚙️ |
| AI Agentic | ⚙️ | ⚙️ | ✅✅ | ✅✅ | ⚙️ |
| Refactoring | ✅ | ✅✅ | ✅ | ✅ | ⚙️ |
| Debugging | ✅ | ✅✅ | ✅ | ✅ | ⚙️ |
| Git Integration | ✅ | ✅✅ | ✅ | ✅ | ⚙️ |
| Remote Dev | ✅✅ | ✅ | ✅ | ✅ | ✅ |
| Performance | ⚙️ | ⚙️ | ⚙️ | ⚙️ | ✅✅ |
| Extensiones | ✅✅ | ✅ | ✅ | ✅ | ✅ |

*(✅✅ best-in-class, ✅ good, ⚙️ via plugins/config)*

## Configuración Recomendada por Stack

### Backend Java/Kotlin
- **IDE**: IntelliJ IDEA Ultimate
- **Plugins**: Key Promoter, String Manipulation, SonarLint

### Frontend/Full-Stack
- **IDE**: VS Code o Cursor
- **Extensions**: ESLint, Prettier, Tailwind CSS, GitLens

### Data Engineering
- **IDE**: VS Code + Jupyter, PyCharm Professional
- **Extensions**: Python, Jupyter, SQLTools

### DevOps/Infrastructure
- **IDE**: VS Code o Neovim
- **Extensions**: Terraform, Docker, Kubernetes, YAML

## Decision Framework

```
¿Necesitas AI nativo? → Cursor o Windsurf
¿Equipo enterprise con budget? → JetBrains
¿Ecosistema y comunidad? → VS Code
¿Maximum performance? → Neovim/Zed
¿Budget limitado? → VS Code + Codeium
```

## Impacto en Prácticas de Equipo

- **Estándarización**: Usar mismo IDE facilita pairing y [[../04-Practicas/README|code review]]
- **Settings sync**: VS Code y JetBrains ofrecen sync de configuración
- **Dev Containers**: Estandarizar entorno con Docker reduces "works on my machine"
- **Linting integrado**: Configurar [[04-herramientas-testing|herramientas de calidad]] en el IDE
- Referencia: [[../03-Procesos/README|Procesos de desarrollo]]

## Recursos

- VS Code Tips: https://code.visualstudio.com/docs
- JetBrains Academy: https://www.jetbrains.com/academy/
- Neovim: https://neovim.io/doc/
- Cursor Docs: https://docs.cursor.sh
