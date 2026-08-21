export const SITE_URL = "https://www.decorreformas.com";

export const CATEGORIA_SLUG: Record<string, string> = {
  Reformas: "reformas",
  Baños: "banos",
  Cocina: "cocina",
  Parquet: "parquet",
  "Servicios del hogar": "servicios",
  Climatización: "climatizacion",
  Interiorismo: "interiorismo",
};

export function rutaServicio(slug: string): string {
  return `/reformas/${slug}`;
}

export function rutaCatalogo(categoria: string, slug: string): string {
  const base = CATEGORIA_SLUG[categoria] ?? categoria.toLowerCase();
  // Interiorismo es una página única, no una categoría con hijos: su ruta real
  // es /interiorismo, no /interiorismo/interiorismo (que devolvía 404 y ensuciaba
  // el sitemap y el menú de navegación).
  if (base === slug) return `/${base}`;
  return `/${base}/${slug}`;
}
