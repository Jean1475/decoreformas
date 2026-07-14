export interface Zona {
  slug: string;
  nombre: string;
  intro: string;
  detalle: string;
}

export const zonas: Zona[] = [
  {
    slug: "leganes",
    nombre: "Leganés",
    intro:
      "Reformamos viviendas y locales en Leganés desde el centro histórico hasta los barrios de nueva construcción como Zarzaquemada o El Carrascal.",
    detalle:
      "Trabajamos a menudo en pisos de los años 70 y 80 del casco antiguo, donde suele hacer falta renovar instalaciones antes de tocar acabados, y en promociones más recientes donde el reto es optimizar distribuciones ya cerradas.",
  },
  {
    slug: "getafe",
    nombre: "Getafe",
    intro:
      "En Getafe hacemos reformas integrales, de cocina y de baño tanto en el centro como en los barrios de Las Margaritas, Perales del Río y Getafe Norte.",
    detalle:
      "La mezcla de vivienda antigua en el centro y bloques de los 90-2000 en las zonas de expansión nos obliga a adaptar cada presupuesto al edificio real, no a una plantilla genérica.",
  },
  {
    slug: "alcorcon",
    nombre: "Alcorcón",
    intro:
      "Reformamos pisos, casas y locales comerciales en Alcorcón, con presencia habitual en San José de Valderas, Parque Oeste y el centro urbano.",
    detalle:
      "Alcorcón combina bloques de los 70 que necesitan renovación de fontanería y electricidad con urbanizaciones más nuevas donde el trabajo se centra en cocinas, baños y distribución interior.",
  },
  {
    slug: "mostoles",
    nombre: "Móstoles",
    intro:
      "En Móstoles trabajamos reformas integrales y por estancias en el centro, Móstoles Sur y el entorno de Universidad Rey Juan Carlos.",
    detalle:
      "Es una de las zonas donde más reformas de cocina y baño gestionamos, junto con actuaciones integrales en pisos heredados que llegan sin reformar desde su construcción.",
  },
];

export function getZona(slug: string): Zona | undefined {
  return zonas.find((z) => z.slug === slug);
}
