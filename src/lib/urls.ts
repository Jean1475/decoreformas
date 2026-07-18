export const SITE_URL = "https://decorreformas.com";

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
  return `/${CATEGORIA_SLUG[categoria] ?? categoria.toLowerCase()}/${slug}`;
}
