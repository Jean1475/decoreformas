import type { MetadataRoute } from "next";
import { serviciosInfo } from "@/lib/servicios-data";
import { zonas } from "@/lib/zonas";
import { blogPosts } from "@/lib/blog-data";
import { catalogo } from "@/lib/catalogo";
import { SITE_URL, rutaServicio, rutaCatalogo } from "@/lib/urls";

// Fecha de la última revisión de contenido de cada sección estática/estructural.
// Actualizar manualmente cuando se edite el contenido real de esa sección
// (no en cada build): es la señal que usa Google para priorizar recrawl.
const CONTENT_UPDATED = {
  home: new Date("2026-07-18"),
  paginasEstaticas: new Date("2026-06-08"),
  servicios: new Date("2026-07-18"),
  catalogo: new Date("2026-06-08"),
  zonas: new Date("2026-07-18"),
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: CONTENT_UPDATED.home,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: CONTENT_UPDATED.paginasEstaticas,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/conocenos/quienes-somos`,
      lastModified: CONTENT_UPDATED.paginasEstaticas,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/conocenos/trabajos-realizados`,
      lastModified: CONTENT_UPDATED.paginasEstaticas,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const servicios: MetadataRoute.Sitemap = serviciosInfo.map((s) => ({
    url: `${SITE_URL}${rutaServicio(s.slug)}`,
    lastModified: CONTENT_UPDATED.servicios,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const catalogoPages: MetadataRoute.Sitemap = catalogo.map((c) => ({
    url: `${SITE_URL}${rutaCatalogo(c.categoria, c.slug)}`,
    lastModified: CONTENT_UPDATED.catalogo,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const zonasPages: MetadataRoute.Sitemap = zonas.map((z) => ({
    url: `${SITE_URL}/zonas/${z.slug}`,
    lastModified: CONTENT_UPDATED.zonas,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blog: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.fecha),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...home, ...servicios, ...catalogoPages, ...zonasPages, ...blog];
}
