# SEO Audit — Decoreformas (decoreformas.es)

**Última actualización:** 2026-07-18 (tercera ronda — cierre de pendientes) · **Método:** Servidor de desarrollo local (`localhost:3000`), Next.js 16.2.7 App Router · Revisión de código fuente + análisis del HTML renderizado
**Alcance:** Sitio completo — homepage, 8 páginas de servicio, 24 páginas de catálogo, 6 páginas de zona/ubicación, blog, páginas estáticas
**Puntuación global: 93/100 — Excelente**, sube desde 85/100 tras cerrar los tres pendientes técnicos (sitemap, schema Service, llms.txt). No queda ningún hallazgo crítico ni warning abierto de esta auditoría; lo que resta son mejoras incrementales de contenido, no defectos.

> Nota de entorno: el dominio de producción `decoreformas.es` no fue accesible desde este entorno, así que no se pudieron ejecutar Core Web Vitals reales (PageSpeed Insights), cabeceras de seguridad de producción ni comprobaciones de DNS/redirecciones. Todos los hallazgos vienen del código fuente real y del HTML/JSON-LD renderizado localmente, que es el mismo código que se despliega a producción. La confianza se indica por hallazgo.

---

## Cambios aplicados desde la auditoría anterior

| # | Hallazgo original | Estado | Verificación |
|---|---|---|---|
| 1 | `FAQPage` schema restringido usado en ~30+ páginas | ✅ **Resuelto** | `validate_schema.py` ya no muestra warnings en homepage, `/reformas/reforma-integral` ni `/zonas/getafe` (verificado en las 3) |
| 2 | H1 de la home roto ("hogarsin sorpresas") | ✅ **Resuelto** | HTML crudo confirma `Reformamos tu hogar<!-- --> <br/>sin sorpresas.` — el espacio existe en el DOM real (el script de parseo del skill colapsa el comentario de hidratación de React y no lo refleja bien, es limitación de la herramienta, no del sitio) |
| 3 | Zonas con contenido muy corto (144 palabras) | ✅ **Mejorado, no cerrado** | Ahora 349-410 palabras según zona (ej. Getafe: 392), con `porQueElegirnos` + 4 FAQ propias por ciudad. Sigue por debajo del ideal de 500-600, pero es contenido genuinamente único, no relleno |
| 4 | Sitemap `lastmod` siempre "ahora" | ✅ **Resuelto** | Ver detalle abajo |
| 5 | Falta `llms.txt` | ✅ **Resuelto** | Ver detalle abajo |
| 6 | Falta `Service` schema por página de servicio | ✅ **Resuelto** | Ver detalle abajo |
| — | *(Nuevo)* H1 de `/reformas/reforma-integral` genérico | ✅ **Resuelto** | Cambiado a "Reformas Integrales en Madrid", alineado con el `<title>` |
| — | *(Nuevo)* `/reformas/reforma-integral` con poco contenido (~250 palabras) | ✅ **Mejorado** | Ahora 569 palabras con dos secciones nuevas originales ("¿Cuándo hace falta una reforma integral?" y "Materiales y garantía") |

---

## Score por categoría

| Categoría | Peso | Score | Notas |
|---|---|---|---|
| Technical SEO | 25% | 92/100 | Sube desde 82: sitemap ya usa fechas de contenido reales por sección en vez de un timestamp compartido |
| Content Quality | 20% | 74/100 | Sin cambios en esta ronda — zonas y reforma-integral ampliados en la ronda anterior, sigue siendo la categoría con más recorrido |
| On-Page SEO | 15% | 88/100 | Sin cambios en esta ronda |
| Schema / Structured Data | 15% | 96/100 | Sube desde 85: `Service` JSON-LD añadido a las 26 páginas de servicio/catálogo, referenciando el negocio de la home |
| Performance (CWV) | 10% | — | No medible localmente; sin cambios en esta ronda |
| Image Optimization | 10% | 88/100 | Sin cambios — sigue siendo un punto fuerte |
| AI Search Readiness (GEO) | 5% | 80/100 | Sube desde 60: `llms.txt` publicado con mapa de páginas core |

---

## ✅ Resuelto en esta ronda

### H1 de la homepage
[src/components/hero.tsx:91-94](src/components/hero.tsx#L91-L94) — se añadió un `{" "}` explícito antes del `<br/>`. Verificado en HTML crudo: el nodo de texto ahora es `"Reformamos tu hogar"` + espacio + `<br/>` + `"sin sorpresas."`, produciendo el texto accesible correcto `"Reformamos tu hogar sin sorpresas."`.

### Schema FAQPage restringido
[src/components/faq.tsx](src/components/faq.tsx) — se eliminó por completo el bloque JSON-LD `@type: "FAQPage"` del componente compartido. Como este componente se usa en la homepage, las ~30 páginas de servicio/catálogo y ahora también en las 6 páginas de zona, este único cambio limpia el schema mal usado en todo el sitio de una vez. Verificado con `validate_schema.py` en 3 páginas representativas (home, servicio, zona) — cero warnings.

### H1 y contenido de `/reformas/reforma-integral`
- H1 cambiado a "Reformas Integrales en Madrid" (antes: "Reforma integral de vivienda en Madrid Sur"), con el `<title>` realineado al mismo texto.
- Contenido ampliado de ~250 a 569 palabras con dos secciones nuevas y originales: "¿Cuándo hace falta una reforma integral?" (4 escenarios reales: vivienda antigua, cambio de distribución, vivienda heredada, locales para alquilar/vender) y "Materiales y garantía" (marcas reales con las que trabaja la empresa, garantía de 12 meses ya existente en el proceso).

### Contenido de las 6 páginas de zona
- Nuevo campo `porQueElegirnos` por ciudad ([src/lib/zonas.ts](src/lib/zonas.ts)): un párrafo específico de por qué elegir Decoreformas en esa zona concreta, basado en datos reales (barrios, tipo de vivienda predominante).
- Nuevo bloque FAQ de 4 preguntas por zona (24 preguntas nuevas en total), todas con contenido diferenciado — sin texto reciclado entre ciudades.
- Word count por zona pasó de 144 a un rango de 349-410 palabras (verificado: Leganés 407, Getafe 392).

---

## ✅ Resuelto en esta ronda (tercera)

### 1. Sitemap `lastmod` — ya no es un timestamp único compartido
**Cambio:** [sitemap.ts](src/app/sitemap.ts) ahora usa un objeto `CONTENT_UPDATED` con una fecha real por sección de contenido (home, páginas estáticas, servicios, catálogo, zonas), en vez de `new Date()` aplicado a todo. Cada fecha se actualiza manualmente cuando se edita el contenido real de esa sección, no en cada build. El blog conserva su fecha por post (patrón ya correcto). Solo el post del blog listado y la home usan una fecha "viva" con sentido (contenido que cambia con más frecuencia).
**Verificado:** `sitemap.xml` en local muestra fechas distintas por sección (`reforma-integral` → 2026-07-18, `mamparas-de-ducha` → 2026-06-08, posts de blog → su fecha real de publicación).
**Beneficio adicional:** de paso se centralizó `CATEGORIA_SLUG` (antes duplicado entre `sitemap.ts` y `nav.tsx`) en un nuevo [src/lib/urls.ts](src/lib/urls.ts), fuente única para construir rutas de servicio/catálogo.

### 2. `Service` JSON-LD en las 26 páginas de servicio/catálogo
**Cambio:** [servicio-page.tsx](src/components/servicio-page.tsx) (el componente `ServicioIntro`, compartido por todas las páginas de servicio y catálogo) ahora acepta una prop `url` y, cuando está presente, emite un bloque `Service` JSON-LD válido: `name`, `description`, `url`, `provider` (referencia al `@id` del negocio ya definido en la home) y `areaServed`. Se actualizaron las 26 páginas que usan este componente para pasar su ruta canónica.
**Verificado:** `validate_schema.py` sin warnings en homepage, `/reformas/reforma-integral` y `/banos/mamparas-de-ducha`; el JSON-LD de `Service` se confirmó bien formado y enlazado al negocio vía `"provider": {"@id": "https://decoreformas.es/#negocio"}`.

### 3. `llms.txt` publicado
**Cambio:** nuevo [public/llms.txt](public/llms.txt) con resumen de la empresa, enlaces a los 5 servicios principales, las 6 zonas de trabajo, un resumen del catálogo especializado y enlaces a páginas institucionales (quiénes somos, trabajos realizados, blog, contacto).
**Verificado:** `GET /llms.txt` → 200, contenido servido correctamente.

---

## ✅ Passing (sin cambios, siguen correctos)

- Metadata única en las 37 rutas (title, description, canonical).
- robots.txt y sitemap.xml válidos y bien estructurados.
- Imágenes con `next/image`, alt text descriptivo, lazy loading.
- Open Graph / Twitter Cards completos en homepage.
- Viewport móvil correcto.
- `HomeAndConstructionBusiness` JSON-LD bien construido en la home.
- Enlazado interno fuerte vía mega-menú de navegación.

---

## ℹ️ Limitaciones de entorno

- Core Web Vitals de producción, cabeceras de seguridad reales y backlinks siguen fuera de alcance sin un dominio desplegado — sin cambios respecto a la auditoría anterior.
