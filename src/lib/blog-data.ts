export interface BlogPost {
  slug: string;
  titulo: string;
  resumen: string;
  fecha: string;
  contenido: { heading?: string; parrafos: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "permisos-para-reformar-en-madrid",
    titulo: "Qué permisos necesitas para reformar tu vivienda en Madrid",
    resumen:
      "No todas las reformas necesitan licencia. Te explicamos cuándo basta con un comunicado de obra y cuándo hace falta tramitar algo más.",
    fecha: "2026-02-10",
    contenido: [
      {
        parrafos: [
          "Uno de los primeros mensajes que recibimos cuando alguien nos escribe es: ¿necesito permiso para esto? La respuesta corta es que depende de qué toques, no de los metros cuadrados de la obra.",
        ],
      },
      {
        heading: "Reformas que no suelen necesitar licencia",
        parrafos: [
          "Cambiar acabados (suelos, alicatados, pintura), sustituir sanitarios o mobiliario de cocina sin mover instalaciones, o renovar electricidad y fontanería sin modificar el trazado general, normalmente entran dentro de lo que los ayuntamientos consideran obra menor. En estos casos suele bastar con un comunicado previo, un trámite mucho más ágil que una licencia.",
        ],
      },
      {
        heading: "Reformas que sí requieren licencia",
        parrafos: [
          "Si tocas elementos estructurales, cambias la distribución de forma sustancial, abres o cierras huecos en fachada, o modificas el uso de un local, necesitas licencia de obra, y en algunos casos un proyecto técnico firmado por un arquitecto o arquitecto técnico.",
          "En comunidades de vecinos, además, ciertas actuaciones (como cambiar la fachada o afectar a elementos comunes) pueden necesitar autorización de la comunidad antes incluso de pedir la licencia municipal.",
        ],
      },
      {
        heading: "Cómo lo gestionamos en Decoreformas",
        parrafos: [
          "En la visita inicial revisamos qué tipo de intervención implica tu proyecto y te decimos, con claridad, si hace falta comunicado, licencia, o ninguno de los dos. Si hace falta tramitación, coordinamos la documentación técnica necesaria para que no tengas que perseguir papeles tú mismo.",
        ],
      },
    ],
  },
  {
    slug: "como-saber-si-hay-que-cambiar-las-tuberias",
    titulo: "Cómo saber si hay que cambiar las tuberías antes de reformar",
    resumen:
      "Señales que indican que la instalación de fontanería necesita renovarse, y por qué conviene revisarlo antes de alicatar de nuevo.",
    fecha: "2026-02-24",
    contenido: [
      {
        parrafos: [
          "Es una de las preguntas más habituales en reformas de cocina y baño en pisos con cierta antigüedad: ¿hace falta cambiar las tuberías o puedo dejarlas y ahorrarme esa parte del presupuesto?",
        ],
      },
      {
        heading: "Señales de que la instalación está al límite",
        parrafos: [
          "Presión de agua baja o irregular, agua con color o sabor metálico, humedades recurrentes en las mismas zonas, o tuberías de plomo o hierro galvanizado (habituales en edificios de antes de los años 80) son señales claras de que conviene renovar antes de cerrar paredes de nuevo.",
        ],
      },
      {
        heading: "Por qué conviene revisarlo antes de alicatar",
        parrafos: [
          "Cambiar una tubería después de haber alicatado significa romper el alicatado nuevo para acceder a ella. Por eso, en cualquier reforma de cocina o baño donde vamos a levantar suelo o pared, revisamos primero el estado real de la instalación, aunque el cliente no nos lo haya pedido explícitamente.",
          "No siempre hay que cambiar toda la instalación del edificio: en muchos casos basta con renovar el tramo que da servicio a la estancia que se reforma, siempre que el resto esté en condiciones aceptables.",
        ],
      },
    ],
  },
  {
    slug: "silestone-vs-dekton-que-encimera-elegir",
    titulo: "Silestone vs Dekton: qué encimera elegir para tu cocina",
    resumen:
      "Diferencias reales entre ambos materiales en resistencia, mantenimiento y precio, para decidir con criterio y no solo por estética.",
    fecha: "2026-03-05",
    contenido: [
      {
        parrafos: [
          "Cuando llega el momento de elegir encimera, casi todos los clientes nos preguntan por estas dos opciones. Ambas son materiales de calidad, pero tienen diferencias que conviene conocer antes de decidir.",
        ],
      },
      {
        heading: "Silestone",
        parrafos: [
          "Es una superficie de cuarzo, un material compuesto que combina cuarzo natural con resinas. Ofrece muy buena resistencia a manchas y arañazos, y una gama de colores y acabados amplia. Es sensible al calor directo prolongado, así que recomendamos salvamanteles para ollas recién retiradas del fuego.",
        ],
      },
      {
        heading: "Dekton",
        parrafos: [
          "Es una superficie sinterizada, fabricada a partir de una mezcla de materiales usados en vidrio, porcelánico y cuarzo, sometida a alta presión y temperatura. Resiste mejor el calor directo y los rayos UV (por eso también se usa en exteriores), y es prácticamente inerte frente a manchas.",
        ],
      },
      {
        heading: "Qué recomendamos según el uso",
        parrafos: [
          "Para una cocina de uso diario con buen equilibrio entre precio y prestaciones, Silestone suele ser la opción más habitual. Si buscas máxima resistencia (por ejemplo, en una isla de cocina muy expuesta o para continuar la encimera hacia una zona exterior), Dekton es la alternativa más robusta, con un coste algo mayor.",
        ],
      },
    ],
  },
  {
    slug: "cuanto-dura-una-reforma-integral",
    titulo: "Cuánto dura realmente una reforma integral (y qué la alarga)",
    resumen:
      "Los plazos que solemos manejar por tipo de reforma, y los factores que más habitualmente retrasan una obra.",
    fecha: "2026-03-18",
    contenido: [
      {
        parrafos: [
          "Es la pregunta que más veces nos hacen después del precio. Damos un calendario concreto en cada presupuesto, pero hay factores que conviene conocer de antemano porque afectan al plazo más que los metros cuadrados.",
        ],
      },
      {
        heading: "Lo que más alarga una obra",
        parrafos: [
          "Los tiempos de suministro de materiales (sobre todo en pedidos a medida, como muebles de cocina o carpintería) suelen ser el factor que más desvía un calendario, más que la ejecución de la obra en sí. Por eso, en el presupuesto cerrado incluimos también los plazos de entrega de materiales clave, no solo los días de trabajo en obra.",
          "El segundo factor habitual son los imprevistos al abrir paredes o suelos en vivienda antigua: instalaciones en mal estado que no eran visibles antes de empezar. Cuando aparecen, paramos esa partida, te lo explicamos con fotos y coste, y seguimos con el resto de la obra mientras decides.",
        ],
      },
      {
        heading: "Cómo lo gestionamos para que no se descontrole",
        parrafos: [
          "Planificamos la obra por fases y pedimos los materiales con antelación suficiente para que su llegada no sea el cuello de botella. Y con el seguimiento semanal, si algo se desvía del calendario inicial, lo sabes esa misma semana, no al final de la obra.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
