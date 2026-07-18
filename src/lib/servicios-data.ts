export interface ServicioInfo {
  slug: string;
  nombre: string;
  nombreCorto: string;
  resumen: string;
  precioDesde?: string;
  intro: string;
  incluye: string[];
  faq: { pregunta: string; respuesta: string }[];
}

export const serviciosInfo: ServicioInfo[] = [
  {
    slug: "reforma-integral",
    nombre: "Reforma Integral de Vivienda",
    nombreCorto: "Reforma integral",
    resumen:
      "Gestionamos el proyecto completo, de la demolición al acabado final: fontanería, electricidad, carpintería y distribución.",
    precioDesde: "Desde 35.000 € (piso de 80 m²)",
    intro:
      "Una reforma integral toca todas las instalaciones y acabados de la vivienda a la vez. Es la opción con más sentido cuando el piso lleva décadas sin renovarse o cuando quieres cambiar la distribución de raíz. Coordinamos todos los oficios bajo un único interlocutor, así que no tienes que gestionar tú los tiempos entre fontanero, electricista y alicatador.",
    incluye: [
      "Demolición y retirada de escombros",
      "Renovación de fontanería y electricidad",
      "Cambios de distribución y tabiquería",
      "Alicatados, solados y pintura",
      "Carpintería interior y puertas",
      "Cocina y baños llave en mano",
    ],
    faq: [
      {
        pregunta: "¿Cuánto tarda una reforma integral de un piso?",
        respuesta:
          "Depende de los metros y del alcance, pero como referencia general un piso de tamaño medio suele estar entre 6 y 12 semanas de obra una vez empezada. Te damos un calendario concreto en el presupuesto, antes de empezar.",
      },
      {
        pregunta: "¿Hace falta pedir licencia de obra?",
        respuesta:
          "Depende de si se tocan elementos estructurales o solo distribución e instalaciones. Te lo confirmamos durante la visita y, si hace falta, nos encargamos de la gestión con el ayuntamiento.",
      },
      {
        pregunta: "¿Puedo seguir viviendo en el piso durante la obra?",
        respuesta:
          "En una reforma integral completa no lo recomendamos, porque se cortan agua y luz en distintas fases. Si la reforma es parcial (una zona de la vivienda), sí es posible en la mayoría de los casos.",
      },
    ],
  },
  {
    slug: "reforma-cocina",
    nombre: "Reforma de Cocina",
    nombreCorto: "Cocinas",
    resumen:
      "Cambiamos distribución, mobiliario, encimera y electrodomésticos con un acabado que aguanta el uso diario.",
    precioDesde: "Desde 6.000 €",
    intro:
      "La cocina es la estancia que más se usa y la que más rápido se nota si está mal resuelta. Trabajamos la distribución antes que el mobiliario: primero decidimos dónde van fuegos, fregadero y almacenaje según cómo cocinas de verdad, y luego elegimos materiales con fabricantes de garantía.",
    incluye: [
      "Diseño de distribución y muebles a medida",
      "Cambio o adaptación de fontanería y electricidad",
      "Encimera, frente y suelo",
      "Electrodomésticos integrados",
      "Iluminación funcional y de ambiente",
    ],
    faq: [
      {
        pregunta: "¿Cuánto tarda una reforma de cocina?",
        respuesta:
          "Una reforma de cocina completa suele estar entre 2 y 4 semanas desde que empieza la obra, dependiendo de si hay que mover instalaciones o solo cambiar acabados y mobiliario.",
      },
      {
        pregunta: "¿Puedo mover el fregadero o los fuegos de sitio?",
        respuesta:
          "Sí, es habitual. Implica mover fontanería y, si es cocina de gas, también la instalación de gas. Lo valoramos en la visita y te decimos si hace falta boletín.",
      },
      {
        pregunta: "¿Vosotros suministráis los electrodomésticos?",
        respuesta:
          "Podemos incluirlos en el presupuesto con marcas de garantía, o instalar los que tú ya hayas comprado. Las dos opciones son igual de habituales.",
      },
    ],
  },
  {
    slug: "reforma-bano",
    nombre: "Reforma de Baño",
    nombreCorto: "Baños",
    resumen:
      "Del cambio de bañera por ducha a la reforma completa: fontanería, alicatado, sanitarios y mampara.",
    precioDesde: "Desde 3.000 €",
    intro:
      "La reforma de baño más habitual que hacemos es cambiar la bañera por un plato de ducha, algo que gana espacio y accesibilidad sin tocar toda la estancia. También hacemos reformas completas cuando hay que renovar fontanería antigua, cambiar la distribución o simplemente actualizar un baño que se ha quedado desfasado.",
    incluye: [
      "Cambio de bañera por ducha",
      "Renovación de fontanería y desagües",
      "Alicatado y solado",
      "Sanitarios, grifería y mampara",
      "Mueble de lavabo e iluminación",
    ],
    faq: [
      {
        pregunta: "¿Cuánto tarda un cambio de bañera por ducha?",
        respuesta:
          "Con obra mínima, entre 3 y 5 días. Si además cambiamos alicatado completo, sanitarios y mueble, la reforma se alarga hasta 1-2 semanas.",
      },
      {
        pregunta: "¿Se puede reformar el baño sin levantar todo el suelo?",
        respuesta:
          "Sí, si la instalación de desagüe está en buen estado se puede trabajar sobre el plato existente en muchos casos. Lo confirmamos revisando la instalación actual.",
      },
      {
        pregunta: "¿Hace falta boletín para la reforma de baño?",
        respuesta:
          "Solo si se modifica la instalación eléctrica o de fontanería de forma sustancial. Te lo indicamos en el presupuesto si aplica a tu caso.",
      },
    ],
  },
  {
    slug: "reforma-local-comercial",
    nombre: "Reforma de Local Comercial",
    nombreCorto: "Locales comerciales",
    resumen:
      "Locales, oficinas y hostelería, con fases de obra pensadas para minimizar el tiempo que el negocio está cerrado.",
    intro:
      "Cada semana que un local está cerrado tiene un coste directo para el negocio. Por eso en reformas comerciales planificamos por fases siempre que es posible, priorizamos los permisos que más tardan en tramitarse y coordinamos horarios de obra con la actividad del entorno cuando hace falta.",
    incluye: [
      "Adecuación de instalaciones a normativa",
      "Distribución de espacio comercial",
      "Suelos, revestimientos e iluminación técnica",
      "Fachada y rótulo, si aplica",
      "Coordinación con licencias de actividad",
    ],
    faq: [
      {
        pregunta: "¿Cuánto tarda la reforma de un local?",
        respuesta:
          "Depende mucho del uso y de si hay que tramitar licencia de actividad, que puede ser el factor que más alarga el proyecto. La parte de obra en sí suele ir de 4 a 10 semanas.",
      },
      {
        pregunta: "¿Gestionáis vosotros la licencia de actividad?",
        respuesta:
          "Podemos coordinar la documentación técnica necesaria (proyecto, certificados) con el gestor o arquitecto que tramite la licencia, aunque la tramitación administrativa depende del ayuntamiento.",
      },
      {
        pregunta: "¿Se puede trabajar fuera de horario comercial?",
        respuesta:
          "En locales dentro de comunidades o zonas con vecinos, sí solemos ajustar ciertas fases ruidosas a horarios que molesten menos. Lo hablamos en la planificación inicial.",
      },
    ],
  },
];

export function getServicio(slug: string): ServicioInfo | undefined {
  return serviciosInfo.find((s) => s.slug === slug);
}
