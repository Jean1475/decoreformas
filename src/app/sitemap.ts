import type { MetadataRoute } from "next";
import { serviciosInfo } from "@/lib/servicios-data";
import { zonas } from "@/lib/zonas";
import { blogPosts } from "@/lib/blog-data";
import { catalogo } from "@/lib/catalogo";

const SITE_URL = "https://decoreformas.es";

const CATEGORIA_SLUG: Record<string, string> = {
  Reformas: "reformas",
  Baños: "banos",
  Cocina: "cocina",
  Parquet: "parquet",
  "Servicios del hogar": "servicios",
  Climatización: "climatizacion",
  Interiorismo: "interiorismo",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/conocenos/quienes-somos`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/conocenos/trabajos-realizados`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const servicios: MetadataRoute.Sitemap = serviciosInfo.map((s) => ({
    url: `${SITE_URL}/reformas/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const catalogoPages: MetadataRoute.Sitemap = catalogo.map((c) => ({
    url: `${SITE_URL}/${CATEGORIA_SLUG[c.categoria]}/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const zonasPages: MetadataRoute.Sitemap = zonas.map((z) => ({
    url: `${SITE_URL}/zonas/${z.slug}`,
    lastModified: now,
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
