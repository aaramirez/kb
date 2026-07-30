---
title: Herramientas de System Dynamics
tags:
  - sistemico/system-dynamics
  - type/herramienta
created: 2026-07-29
updated: 2026-07-29
aliases:
  - STELLA
  - Vensim
  - AnyLogic
  - pysd
---

# Herramientas de System Dynamics

## Herramientas Especializadas

| Herramienta | Tipo | Uso Principal |
|-------------|------|---------------|
| **STELLA** | Visual + Simulación | Educación, modelado rápido |
| **Vensim** | Visual + Simulación | Investigación, modelos complejos |
| **AnyLogic** | Multi-método | Modelos híbridos (SD + Agent-Based + Discrete Event) |
| **Powersim** | Visual + Simulación | Business analytics |

## Programación

### Python
```python
import pysd
import matplotlib.pyplot as plt

model = pysd.read_vensim('modelo.mdl')
resultados = model.run(params={'tasa_crecimiento': 0.05})
resultados.plot()
plt.show()
```

### R (deSolve)
```r
library(deSolve)

modelo <- function(t, state, params) {
  with(as.list(c(state, params)), {
    dPoblacion <- tasa_natal * Poblacion - tasa_mortal * Poblacion
    list(c(dPoblacion))
  })
}

resultado <- ode(y = c(Poblacion = 1000),
                 times = seq(0, 50, by = 0.5),
                 func = modelo,
                 parms = c(tasa_natal = 0.02, tasa_mortal = 0.01))
```

## Criterios de Selección

| Si necesitas... | Usa... |
|----------------|--------|
| Aprender SD | STELLA (más intuitivo) |
| Investigación académica | Vensim (más potente) |
| Modelos híbridos | AnyLogic |
| Integración con código | pysd (Python) |
| Colaboración en equipo | Vensim DSS (server) |

## Conexión con IA

| Herramienta SD | Análogo en IA |
|----------------|---------------|
| STELLA/Vensim | LangGraph, CrewAI (diagramas visuales de agentes) |
| pysd | LangChain, LlamaIndex (orquestación programática) |
| Simulación | Evaluación offline, testing de agentes |
| Análisis de sensibilidad | Ablation studies, hyperparameter search |

## Referencias

- Sterman, J. (2000). *Business Dynamics.*
- isee systems. *STELLA Architect Documentation.*
- Ventana Systems. *Vensim Documentation.*
- AnyLogic. *AnyLogic Help.*
- pysd. *Python System Dynamics.* https://pysd.readthedocs.io/
