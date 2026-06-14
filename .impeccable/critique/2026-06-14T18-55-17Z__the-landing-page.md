---
target: the landing page
total_score: 23
p0_count: 0
p1_count: 2
timestamp: 2026-06-14T18-55-17Z
slug: the-landing-page
---
# Critique: the landing page

## Design Health Score

| # | Heurística | Score | Problema clave |
|---|------------|-------|----------------|
| 1 | Visibilidad del estado del sistema | 2 | Formulario hero sin feedback de envío |
| 2 | Correspondencia con el mundo real | 4 | Copy directo y específico en español |
| 3 | Control y libertad del usuario | 3 | Nav clara, sin trampas modales |
| 4 | Consistencia y estándares | 2 | Dos grotesks similares; patrón 0X duplicado en Servicios y Proceso |
| 5 | Prevención de errores | 1 | Formulario sin validación visible, sin autocomplete en teléfono |
| 6 | Reconocimiento en lugar de recuerdo | 3 | Labels claros, flechas decorativas sin destino |
| 7 | Flexibilidad y eficiencia | 2 | Flechas de servicios no son links; WhatsApp asume instalación |
| 8 | Diseño estético y minimalista | 3 | Secciones bien depuradas, hero partido con tensión sin resolver |
| 9 | Recuperación de errores | 1 | onSubmit no hace nada; sin estados de error |
| 10 | Ayuda y documentación | 2 | Sin tooltips ni inline hints en formularios |
| **Total** | | **23/40** | **Aceptable** |

## Priority Issues

- [P1] Imagen del hero (personas con tablet) no demuestra el producto (espacios reformados)
- [P1] Formulario hero completamente no funcional — onSubmit solo hace preventDefault
- [P2] Patrón 0X usado en Servicios (decorativo) y Proceso (semántico) — mismo visual, dos significados
- [P2] Space Grotesk + Hanken Grotesk sin contraste de eje tipográfico
- [P3] Flechas de Servicios implican navegación pero no tienen destino

## Detector Findings

- layout-transition: max-height en nav.tsx:234 (real, fix needed)
- em-dash-overuse: 6 em-dashes en layout.tsx metadata (falso positivo, están en meta tags)
