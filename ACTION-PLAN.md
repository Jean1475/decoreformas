# SEO Action Plan — Decoreformas

Actualizado tras la tercera ronda de cambios. Ver [FULL-AUDIT-REPORT.md](FULL-AUDIT-REPORT.md) para evidencia completa. **Todos los hallazgos de la auditoría original están resueltos.**

## ✅ Completado

1. ~~Fix H1 roto en la homepage~~ — [hero.tsx](src/components/hero.tsx) corregido y verificado en HTML crudo.
2. ~~Quitar `FAQPage` schema restringido~~ — eliminado de [faq.tsx](src/components/faq.tsx), limpia el sitio entero.
3. ~~H1 y contenido de reforma-integral~~ — H1 "Reformas Integrales en Madrid", contenido ampliado a 569 palabras.
4. ~~Ampliar páginas de zona~~ — de 144 a ~350-410 palabras por ciudad, con `porQueElegirnos` + 4 FAQ propias por zona.
5. ~~Fix sitemap `lastmod`~~ — [sitemap.ts](src/app/sitemap.ts) usa fechas reales por sección de contenido en vez de un timestamp compartido.
6. ~~Añadir `Service` JSON-LD~~ — presente en las 26 páginas de servicio/catálogo vía [servicio-page.tsx](src/components/servicio-page.tsx), referenciando el negocio de la home.
7. ~~Añadir `public/llms.txt`~~ — publicado con mapa de servicios, zonas y páginas institucionales.

## Nice to have (opcional, no bloqueante)

8. **Seguir ampliando zonas hacia 500-600 palabras** — el contenido actual (350-410 palabras) es sólido y sin relleno, pero está algo por debajo del ideal de la categoría. Opciones sin caer en relleno: testimonios reales etiquetados por ciudad, o fotos de obra por zona con contexto.

9. **Revisar cabeceras de seguridad en producción** (CSP, HSTS) una vez desplegado — no configurado en `next.config.ts` actualmente. No es un hallazgo de SEO, pero es relevante por ser un sitio que recoge datos de contacto.

10. **Actualizar manualmente las fechas de `CONTENT_UPDATED` en `sitemap.ts`** cada vez que se edite contenido real de servicios/catálogo/zonas, para que el sitemap siga siendo una señal de frescura fiable a futuro.

## Ya está bien — no tocar

- Metadata, canonicals, robots.txt, estructura del sitemap, optimización de imágenes, Open Graph/Twitter cards, viewport móvil, enlazado interno, el JSON-LD `HomeAndConstructionBusiness` de la home y ahora también el `Service` schema de cada página de servicio.
