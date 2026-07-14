export interface CategoriaInfo {
  slug: string;
  categoria: string;
  nombre: string;
  nombreCorto: string;
  resumen: string;
  intro: string;
  incluye: string[];
  faq: { pregunta: string; respuesta: string }[];
}

export const catalogo: CategoriaInfo[] = [
  // ---------- Reformas ----------
  {
    slug: "cambiar-banera-por-ducha",
    categoria: "Reformas",
    nombre: "Cambiar Bañera por Ducha",
    nombreCorto: "Bañera por ducha",
    resumen:
      "Sustituimos la bañera por un plato de ducha a ras de suelo, con obra mínima y en pocos días.",
    intro:
      "Es una de las reformas más solicitadas: ganar espacio y accesibilidad en el baño sin acometer una reforma completa. Retiramos la bañera, adaptamos el desagüe si hace falta, instalamos un plato de ducha extraplano y cerramos con mampara. En la mayoría de los casos, sin necesidad de romper todo el alicatado.",
    incluye: [
      "Retirada de bañera y desescombro",
      "Adaptación de desagüe y fontanería",
      "Plato de ducha extraplano o a ras de suelo",
      "Mampara de ducha",
      "Repaso de alicatado en la zona afectada",
    ],
    faq: [
      {
        pregunta: "¿Cuánto dura la obra?",
        respuesta:
          "Con obra mínima, entre 3 y 5 días. Si además cambiamos alicatado completo, sanitarios y mueble, la reforma se alarga hasta 1-2 semanas.",
      },
      {
        pregunta: "¿Puedo elegir el tipo de plato de ducha?",
        respuesta:
          "Sí, trabajamos con platos de resina, extraplanos y a ras de suelo (con obra específica de desagüe). Te enseñamos opciones según tu presupuesto en la visita.",
      },
      {
        pregunta: "¿Hace falta levantar todo el suelo del baño?",
        respuesta:
          "Depende del tipo de plato elegido. Uno extraplano suele apoyarse sobre el suelo existente; uno a ras de suelo necesita rebajar la superficie para enrasar con el desagüe.",
      },
    ],
  },

  // ---------- Baños ----------
  {
    slug: "mamparas-de-ducha",
    categoria: "Baños",
    nombre: "Mamparas de Ducha",
    nombreCorto: "Mamparas de ducha",
    resumen:
      "Instalación de mamparas de ducha a medida, en cristal templado, con distintos sistemas de apertura.",
    intro:
      "La mampara es lo que termina de definir el baño: cierra el espacio de ducha sin recargarlo visualmente. Tomamos medidas exactas del hueco, te enseñamos opciones de cristal (transparente, translúcido, serigrafiado) y sistema de apertura (corredera, abatible, fija), e instalamos ajustando a la perfección al plato y a la pared.",
    incluye: [
      "Toma de medidas a medida",
      "Cristal templado de seguridad",
      "Sistemas de apertura corredera, abatible o fija",
      "Perfilería en distintos acabados",
      "Instalación y sellado",
    ],
    faq: [
      {
        pregunta: "¿Cuánto tarda la instalación de una mampara?",
        respuesta:
          "La instalación en sí suele ser de medio día. Si es a medida, hay que sumar el plazo de fabricación, que ronda entre 1 y 3 semanas según el proveedor.",
      },
      {
        pregunta: "¿Qué tipo de cristal es más fácil de limpiar?",
        respuesta:
          "Los tratamientos antical en el cristal reducen mucho el mantenimiento. Te lo recomendamos siempre que el presupuesto lo permita, sobre todo en zonas de agua muy dura.",
      },
      {
        pregunta: "¿Se puede instalar sobre un plato de ducha ya existente?",
        respuesta:
          "Sí, siempre que el plato esté en buen estado y bien nivelado. Lo comprobamos antes de tomar medidas.",
      },
    ],
  },
  {
    slug: "platos-de-ducha",
    categoria: "Baños",
    nombre: "Platos de Ducha",
    nombreCorto: "Platos de ducha",
    resumen:
      "Instalación de platos de ducha de resina, extraplanos o a ras de suelo, adaptados al desagüe existente.",
    intro:
      "El plato de ducha es la pieza que más condiciona el resultado final de un baño reformado. Valoramos el estado del desagüe y el suelo actual para recomendarte el tipo que mejor encaja: extraplano si quieres obra mínima, o a ras de suelo si buscas un acabado más actual y accesible.",
    incluye: [
      "Valoración del desagüe existente",
      "Plato de resina, extraplano o a ras de suelo",
      "Adaptación de fontanería si hace falta",
      "Sellado e impermeabilización",
      "Repaso de alicatado perimetral",
    ],
    faq: [
      {
        pregunta: "¿Qué diferencia hay entre un plato extraplano y uno a ras de suelo?",
        respuesta:
          "El extraplano se apoya sobre el suelo existente con un escalón mínimo. El plato a ras de suelo queda a la misma altura que el resto del baño, pero requiere rebajar el forjado o el suelo para encajar el desagüe.",
      },
      {
        pregunta: "¿Cuánto dura la instalación?",
        respuesta:
          "Un cambio de plato con obra mínima suele resolverse en 2-3 días. Si hay que rebajar suelo para un modelo a ras de suelo, puede alargarse a 4-5 días.",
      },
      {
        pregunta: "¿Puedo instalar un plato más grande que el actual?",
        respuesta:
          "Depende del espacio disponible en el baño. Lo valoramos en la visita midiendo el hueco real y la posición del desagüe.",
      },
    ],
  },
  {
    slug: "muebles-de-bano",
    categoria: "Baños",
    nombre: "Muebles de Baño",
    nombreCorto: "Muebles de baño",
    resumen:
      "Suministro e instalación de muebles de lavabo a medida o de catálogo, adaptados al espacio disponible.",
    intro:
      "El mueble de baño combina almacenaje y estética en un espacio casi siempre reducido. Te ayudamos a elegir entre mueble suspendido o a suelo, con lavabo integrado o sobre encimera, y coordinamos la instalación con la fontanería para que quede alineado con el resto de la reforma.",
    incluye: [
      "Medición del espacio disponible",
      "Mueble suspendido o a suelo",
      "Lavabo integrado o sobre encimera",
      "Adaptación de fontanería y desagüe",
      "Grifería e iluminación asociada",
    ],
    faq: [
      {
        pregunta: "¿Mueble suspendido o a suelo?",
        respuesta:
          "El suspendido facilita la limpieza del suelo y aporta sensación de amplitud, sobre todo en baños pequeños. El de suelo suele ofrecer algo más de capacidad de almacenaje al mismo precio.",
      },
      {
        pregunta: "¿Puedo aprovechar la fontanería actual?",
        respuesta:
          "En la mayoría de los casos sí, sobre todo si el mueble nuevo va en la misma posición que el actual. Si cambia de sitio, hay que mover la toma de agua y el desagüe.",
      },
      {
        pregunta: "¿Cuánto tarda el suministro de un mueble a medida?",
        respuesta:
          "Entre 2 y 4 semanas según el fabricante. Si eliges un mueble de catálogo estándar, el plazo suele ser más corto.",
      },
    ],
  },

  // ---------- Cocina ----------
  {
    slug: "encimera-de-cocina",
    categoria: "Cocina",
    nombre: "Encimeras de Cocina",
    nombreCorto: "Encimeras",
    resumen:
      "Suministro e instalación de encimeras de cocina en distintos materiales: cuarzo, porcelánico, granito, laminado y más.",
    intro:
      "La encimera es la superficie que más uso recibe de toda la cocina, y elegir bien el material marca la diferencia en mantenimiento y durabilidad a largo plazo. Te acompañamos en la elección según tu presupuesto y forma de cocinar, y coordinamos la fabricación a medida con la instalación de fregadero y placa.",
    incluye: [
      "Toma de medidas y plantilla",
      "Fabricación a medida en el material elegido",
      "Corte de hueco para fregadero y placa",
      "Instalación y sellado",
      "Retirada de encimera antigua",
    ],
    faq: [
      {
        pregunta: "¿Qué material de encimera recomendáis para uso diario?",
        respuesta:
          "Para una cocina de uso diario con buen equilibrio entre precio y resistencia, el cuarzo (tipo Silestone) suele ser la opción más habitual. Si buscas máxima resistencia al calor y a los rayos UV, el porcelánico sinterizado (tipo Dekton) es una alternativa más robusta.",
      },
      {
        pregunta: "¿Cuánto tarda la fabricación de una encimera a medida?",
        respuesta:
          "Entre 1 y 3 semanas desde que se toma la plantilla, dependiendo del material y del proveedor.",
      },
      {
        pregunta: "¿Puedo mantener el fregadero actual con la encimera nueva?",
        respuesta:
          "Depende de si el modelo se sigue fabricando y de si encaja con el nuevo hueco. En muchos casos aprovechamos la grifería, aunque cambiemos el fregadero.",
      },
    ],
  },
  {
    slug: "muebles-de-cocina",
    categoria: "Cocina",
    nombre: "Muebles de Cocina",
    nombreCorto: "Muebles de cocina",
    resumen:
      "Diseño e instalación de muebles de cocina a medida, adaptados a la distribución y al espacio real.",
    intro:
      "Diseñamos la distribución de muebles según cómo cocinas de verdad, no según un catálogo estándar. Medimos el espacio, definimos zonas de almacenaje, cocción y limpieza, y coordinamos fabricación e instalación con el resto de la reforma de cocina.",
    incluye: [
      "Diseño de distribución a medida",
      "Frentes y interiores en distintos acabados",
      "Herrajes y sistemas de apertura",
      "Instalación coordinada con encimera y electrodomésticos",
      "Remates y molduras",
    ],
    faq: [
      {
        pregunta: "¿Los muebles son a medida o de catálogo?",
        respuesta:
          "Trabajamos ambas opciones. A medida se ajustan al milímetro al espacio disponible; de catálogo suelen tener un plazo de entrega más corto y un coste menor.",
      },
      {
        pregunta: "¿Cuánto tarda la fabricación de muebles a medida?",
        respuesta:
          "Entre 3 y 5 semanas desde que se cierra el diseño, según el fabricante y el volumen de trabajo del momento.",
      },
      {
        pregunta: "¿Incluís los electrodomésticos integrados?",
        respuesta:
          "Podemos incluirlos en el presupuesto con marcas de garantía, o instalar los que tú ya hayas comprado.",
      },
    ],
  },
  {
    slug: "muebles-de-cocina-para-montar",
    categoria: "Cocina",
    nombre: "Muebles de Cocina para Montar",
    nombreCorto: "Muebles para montar",
    resumen:
      "Suministro de muebles de cocina en kit, con montaje e instalación incluidos si lo necesitas.",
    intro:
      "Si ya tienes claro el modelo de cocina que quieres o buscas ajustar el presupuesto, suministramos muebles de cocina en kit y nos encargamos del montaje e instalación completa: nivelado, fijación a pared, ajuste de puertas y cajones, y conexión con encimera y electrodomésticos.",
    incluye: [
      "Suministro de muebles en kit",
      "Montaje y nivelado",
      "Fijación a pared y suelo",
      "Ajuste de puertas y cajones",
      "Conexión con encimera y electrodomésticos",
    ],
    faq: [
      {
        pregunta: "¿Puedo comprar yo los muebles y que vosotros los montéis?",
        respuesta:
          "Sí, es una opción habitual. Valoramos el montaje según el número de módulos y el estado del espacio donde van a instalarse.",
      },
      {
        pregunta: "¿Cuánto tarda el montaje de una cocina en kit?",
        respuesta:
          "Entre 2 y 4 días para una cocina completa, dependiendo del número de módulos y de si hay que ajustar la instalación eléctrica o de fontanería.",
      },
      {
        pregunta: "¿Garantizáis el montaje aunque los muebles no sean vuestros?",
        respuesta:
          "Sí, garantizamos la mano de obra del montaje. La garantía del propio mueble depende del fabricante o distribuidor donde lo hayas comprado.",
      },
    ],
  },

  // ---------- Parquet ----------
  {
    slug: "acuchillar-parquet",
    categoria: "Parquet",
    nombre: "Acuchillado de Parquet",
    nombreCorto: "Acuchillado de parquet",
    resumen:
      "Lijado y acuchillado de suelos de madera para recuperar su aspecto original, con barnizado final.",
    intro:
      "Un parquet con arañazos, manchas o desgaste no siempre necesita cambiarse: en muchos casos basta con acuchillarlo. Lijamos la superficie en varias pasadas hasta eliminar el desgaste, y aplicamos barniz o aceite según el acabado que busques.",
    incluye: [
      "Lijado en varias pasadas",
      "Reparación de tablas sueltas o dañadas",
      "Sellado de juntas",
      "Barnizado o aceitado final",
      "Retirada de polvo y restos de obra",
    ],
    faq: [
      {
        pregunta: "¿Cuántas veces se puede acuchillar un parquet?",
        respuesta:
          "Depende del grosor de la capa de madera noble. Un parquet macizo puede acuchillarse varias veces a lo largo de su vida; uno flotante o con capa fina, solo una o ninguna vez sin dañarlo.",
      },
      {
        pregunta: "¿Cuánto tarda el proceso completo?",
        respuesta:
          "Entre 3 y 5 días para una vivienda de tamaño medio, incluyendo lijado, secado y aplicación de varias capas de barniz o aceite.",
      },
      {
        pregunta: "¿Se puede vivir en casa mientras se acuchilla?",
        respuesta:
          "No lo recomendamos durante el proceso por el polvo y el olor del barniz, aunque las estancias no tratadas siguen siendo utilizables si el acceso lo permite.",
      },
    ],
  },
  {
    slug: "reparar-parquet",
    categoria: "Parquet",
    nombre: "Reparación de Parquet",
    nombreCorto: "Reparación de parquet",
    resumen:
      "Reparación de tablas sueltas, dañadas o hundidas, sin necesidad de acuchillar todo el suelo.",
    intro:
      "No todo daño en el parquet requiere un acuchillado completo. Tablas sueltas, hinchadas por humedad o con golpes localizados a veces se resuelven sustituyendo solo la zona afectada, siempre que encontremos tablas compatibles con el resto del suelo.",
    incluye: [
      "Diagnóstico del daño y su causa",
      "Sustitución de tablas puntuales",
      "Reparación de hinchazones por humedad",
      "Sellado de juntas abiertas",
      "Igualado de tono con el resto del suelo",
    ],
    faq: [
      {
        pregunta: "¿Se nota la diferencia entre la tabla reparada y el resto?",
        respuesta:
          "Con parquet de fabricación reciente solemos encontrar tablas iguales o muy similares. En suelos antiguos o descatalogados, puede quedar una ligera diferencia de tono que se atenúa con el barnizado.",
      },
      {
        pregunta: "¿Qué causa que las tablas se hinchen o se levanten?",
        respuesta:
          "Casi siempre humedad: filtraciones, fugas bajo el suelo o exceso de humedad ambiental. Revisamos el origen antes de reparar, para no repetir el problema.",
      },
      {
        pregunta: "¿Cuánto cuesta reparar unas pocas tablas frente a acuchillar todo?",
        respuesta:
          "Una reparación puntual es bastante más económica que un acuchillado completo. Te damos las dos opciones si el estado general del suelo lo justifica.",
      },
    ],
  },
  {
    slug: "instalacion-de-parquet",
    categoria: "Parquet",
    nombre: "Instalación de Parquet",
    nombreCorto: "Instalación de parquet",
    resumen:
      "Instalación de suelos de parquet macizo o multicapa, con preparación de la base incluida.",
    intro:
      "Instalamos parquet macizo o multicapa según el uso de la estancia y el presupuesto disponible. Antes de colocar el suelo, revisamos y preparamos la base (nivelación, humedad, aislamiento acústico si aplica) para que el resultado final sea estable a largo plazo.",
    incluye: [
      "Revisión y preparación de la base",
      "Suministro de parquet macizo o multicapa",
      "Instalación clavada, encolada o flotante según el tipo",
      "Rodapiés y remates",
      "Primer lijado y sellado si es macizo sin acabado",
    ],
    faq: [
      {
        pregunta: "¿Parquet macizo o multicapa?",
        respuesta:
          "El macizo es más duradero y se puede acuchillar varias veces, pero es más sensible a la humedad y más caro. El multicapa es más estable dimensionalmente y suele instalarse más rápido.",
      },
      {
        pregunta: "¿Cuánto tarda la instalación?",
        respuesta:
          "Entre 3 y 7 días para una vivienda de tamaño medio, según el sistema de instalación y si hace falta preparar mucho la base.",
      },
      {
        pregunta: "¿Se puede instalar parquet sobre calefacción radiante?",
        respuesta:
          "Sí, pero hay que elegir un tipo de madera y un grosor compatibles, y ajustar el sistema de instalación. Lo valoramos en la visita si tienes suelo radiante.",
      },
    ],
  },
  {
    slug: "tarima-flotante",
    categoria: "Parquet",
    nombre: "Tarima Flotante",
    nombreCorto: "Tarima flotante",
    resumen:
      "Instalación de tarima flotante laminada o de madera, una opción rápida y económica frente al parquet tradicional.",
    intro:
      "La tarima flotante se instala sobre una base de espuma o corcho sin necesidad de clavar ni encolar al suelo existente, lo que agiliza mucho la obra. Es una alternativa habitual cuando se busca renovar el suelo con un presupuesto ajustado o un plazo corto.",
    incluye: [
      "Revisión de la base existente",
      "Lámina aislante acústica",
      "Instalación flotante de las lamas",
      "Rodapiés y perfiles de transición",
      "Retirada de suelo antiguo si hace falta",
    ],
    faq: [
      {
        pregunta: "¿Cuánto dura la instalación de tarima flotante?",
        respuesta:
          "Entre 1 y 3 días para una vivienda de tamaño medio, ya que no requiere tiempos de secado como el parquet encolado.",
      },
      {
        pregunta: "¿Se puede instalar sobre baldosa existente?",
        respuesta:
          "Sí, siempre que la baldosa esté bien nivelada y en buen estado. Es una de las ventajas de la tarima flotante frente a otros suelos.",
      },
      {
        pregunta: "¿Qué diferencia hay entre tarima laminada y de madera?",
        respuesta:
          "La laminada tiene una capa impresa que imita la madera, es más económica y resistente al desgaste diario. La de madera lleva una capa real de madera noble, con un tacto y aspecto más naturales, a un coste mayor.",
      },
    ],
  },

  // ---------- Servicios del hogar ----------
  {
    slug: "fontaneros",
    categoria: "Servicios del hogar",
    nombre: "Fontanería",
    nombreCorto: "Fontanería",
    resumen:
      "Instalación y reparación de fontanería: averías, renovación de tuberías y adaptación de instalaciones.",
    intro:
      "Cubrimos desde averías puntuales hasta la renovación completa de la instalación de fontanería de una vivienda. Si estás reformando cocina o baño, revisamos el estado real de las tuberías antes de cerrar paredes de nuevo, para no tener que romper acabados recién hechos más adelante.",
    incluye: [
      "Reparación de averías y fugas",
      "Renovación de tuberías",
      "Instalación de sanitarios y grifería",
      "Adaptación de instalación para reformas",
      "Revisión de presión y estado general",
    ],
    faq: [
      {
        pregunta: "¿Cómo sé si hay que cambiar las tuberías antes de reformar?",
        respuesta:
          "Presión baja o irregular, agua con color o sabor metálico, humedades recurrentes o tuberías de plomo o hierro galvanizado (habituales antes de los años 80) son señales de que conviene renovar antes de alicatar de nuevo.",
      },
      {
        pregunta: "¿Atendéis averías urgentes?",
        respuesta:
          "Sí, si tienes una fuga activa o una avería que no puede esperar, cuéntanoslo por teléfono o WhatsApp y vemos disponibilidad lo antes posible.",
      },
      {
        pregunta: "¿Hace falta boletín para trabajos de fontanería?",
        respuesta:
          "Solo si se modifica la instalación de forma sustancial. Te lo indicamos si aplica a tu caso concreto.",
      },
    ],
  },
  {
    slug: "electricistas",
    categoria: "Servicios del hogar",
    nombre: "Electricidad",
    nombreCorto: "Electricidad",
    resumen:
      "Instalación y renovación de electricidad: cuadros, puntos de luz, enchufes y boletines.",
    intro:
      "Trabajamos tanto en instalaciones nuevas como en renovación de electricidad antigua en pisos que aún conservan cableado o cuadros eléctricos originales de construcción. Adaptamos la instalación a la normativa vigente y emitimos el boletín eléctrico cuando corresponde.",
    incluye: [
      "Renovación de cuadro eléctrico",
      "Instalación de puntos de luz y enchufes",
      "Cableado nuevo o adaptación del existente",
      "Boletín eléctrico cuando aplica",
      "Iluminación funcional y de ambiente",
    ],
    faq: [
      {
        pregunta: "¿Cómo sé si mi instalación eléctrica está desfasada?",
        respuesta:
          "Cuadros con fusibles en vez de diferenciales, cableado antiguo sin toma de tierra, o pocos enchufes por estancia son señales habituales en instalaciones de antes de los años 90 que conviene revisar.",
      },
      {
        pregunta: "¿Cuánto tarda renovar la electricidad de un piso?",
        respuesta:
          "Entre 1 y 2 semanas para una vivienda de tamaño medio, si se hace de forma aislada y sin coordinarlo con otras obras.",
      },
      {
        pregunta: "¿Emitís el boletín eléctrico?",
        respuesta:
          "Sí, cuando la instalación lo requiere emitimos el boletín correspondiente al finalizar el trabajo.",
      },
    ],
  },
  {
    slug: "pintores",
    categoria: "Servicios del hogar",
    nombre: "Pintura para el Hogar",
    nombreCorto: "Pintura",
    resumen:
      "Pintura de interiores y exteriores, con preparación de superficie incluida para un acabado duradero.",
    intro:
      "La pintura es el acabado que más rápido transforma un espacio, pero el resultado depende sobre todo de la preparación previa: lijado, plastecido de grietas y imprimación antes de aplicar el color. Trabajamos con pinturas de distintas calidades según el uso de cada estancia.",
    incluye: [
      "Preparación de superficie (lijado, plastecido)",
      "Protección de suelos y mobiliario",
      "Imprimación cuando hace falta",
      "Aplicación de pintura en varias manos",
      "Retirada de restos y limpieza final",
    ],
    faq: [
      {
        pregunta: "¿Cuánto tarda pintar una vivienda completa?",
        respuesta:
          "Entre 3 y 6 días para un piso de tamaño medio, dependiendo del estado previo de las paredes y del número de manos necesarias.",
      },
      {
        pregunta: "¿Puedo elegir cualquier color?",
        respuesta:
          "Sí, trabajamos con las cartas de color de los principales fabricantes y te ayudamos a decidir según la luz natural de cada estancia.",
      },
      {
        pregunta: "¿Hace falta vaciar la habitación para pintarla?",
        respuesta:
          "No siempre. Si hay mobiliario que no se puede mover, lo protegemos y trabajamos alrededor, aunque vaciar la estancia agiliza el proceso.",
      },
    ],
  },
  {
    slug: "carpinteros",
    categoria: "Servicios del hogar",
    nombre: "Carpintería de Madera",
    nombreCorto: "Carpintería",
    resumen:
      "Fabricación e instalación de puertas, armarios y carpintería interior a medida.",
    intro:
      "Hacemos carpintería interior a medida: puertas, armarios empotrados, frentes de armario y elementos de madera que se ajustan al espacio real de tu vivienda, no a medidas estándar de catálogo. Coordinamos la instalación con el resto de la reforma para que los plazos encajen.",
    incluye: [
      "Puertas interiores a medida",
      "Armarios empotrados",
      "Frentes de armario y remates",
      "Rodapiés y molduras",
      "Ajuste e instalación de herrajes",
    ],
    faq: [
      {
        pregunta: "¿Cuánto tarda la fabricación de carpintería a medida?",
        respuesta:
          "Entre 3 y 5 semanas desde que se cierra el diseño, según el fabricante y el volumen de pedidos del momento.",
      },
      {
        pregunta: "¿Puedo elegir el tipo de madera o acabado?",
        respuesta:
          "Sí, te enseñamos opciones de madera maciza, chapada y lacada en distintos acabados según tu presupuesto.",
      },
      {
        pregunta: "¿Hacéis también reparaciones puntuales de carpintería?",
        respuesta:
          "Sí, ajustes de puertas que rozan, cambios de bisagras o reparaciones de armarios existentes también entran dentro de lo que hacemos.",
      },
    ],
  },
  {
    slug: "ventanas-de-aluminio",
    categoria: "Servicios del hogar",
    nombre: "Ventanas de Aluminio",
    nombreCorto: "Ventanas de aluminio",
    resumen:
      "Suministro e instalación de ventanas de aluminio con rotura de puente térmico, en distintos sistemas de apertura.",
    intro:
      "El aluminio con rotura de puente térmico combina la resistencia y el perfil estrecho del aluminio con un buen aislamiento térmico y acústico. Es una opción habitual en reformas donde se busca maximizar la superficie acristalada sin perder eficiencia energética.",
    incluye: [
      "Toma de medidas del hueco",
      "Perfilería de aluminio con rotura de puente térmico",
      "Vidrio doble o triple según necesidad",
      "Sistemas de apertura corredera, oscilobatiente o abatible",
      "Instalación y sellado",
    ],
    faq: [
      {
        pregunta: "¿Aluminio o PVC, cuál recomendáis?",
        respuesta:
          "El aluminio con rotura de puente térmico ofrece perfiles más estrechos y mayor superficie acristalada; el PVC suele tener mejor aislamiento térmico a igualdad de vidrio. Depende de tu prioridad entre estética y eficiencia.",
      },
      {
        pregunta: "¿Cuánto tarda la fabricación e instalación?",
        respuesta:
          "Entre 3 y 6 semanas desde la toma de medidas hasta la instalación, según el fabricante y el número de ventanas.",
      },
      {
        pregunta: "¿Puedo cambiar solo algunas ventanas de la vivienda?",
        respuesta:
          "Sí, no hace falta cambiar todas a la vez. Es habitual priorizar las orientadas a calle o las que peor aíslan.",
      },
    ],
  },
  {
    slug: "ventanas-de-pvc",
    categoria: "Servicios del hogar",
    nombre: "Ventanas de PVC",
    nombreCorto: "Ventanas de PVC",
    resumen:
      "Suministro e instalación de ventanas de PVC, con buen aislamiento térmico y acústico.",
    intro:
      "El PVC es uno de los materiales con mejor relación entre aislamiento y precio para ventanas. No necesita mantenimiento como la pintura de la madera ni sufre corrosión, y ofrece un buen comportamiento térmico y acústico frente al aluminio estándar.",
    incluye: [
      "Toma de medidas del hueco",
      "Perfilería de PVC multicámara",
      "Vidrio doble o triple según necesidad",
      "Sistemas de apertura corredera, oscilobatiente o abatible",
      "Instalación y sellado",
    ],
    faq: [
      {
        pregunta: "¿El PVC amarillea con el tiempo?",
        respuesta:
          "Los perfiles de calidad actuales llevan tratamientos UV que minimizan ese efecto. Es un factor a valorar según el fabricante y la exposición solar de la fachada.",
      },
      {
        pregunta: "¿Cuánto tarda la instalación?",
        respuesta:
          "Entre 3 y 6 semanas desde la toma de medidas hasta la instalación, según el fabricante y el número de ventanas.",
      },
      {
        pregunta: "¿El PVC aísla mejor que el aluminio?",
        respuesta:
          "A igualdad de vidrio, el PVC suele ofrecer mejor aislamiento térmico que el aluminio, incluso con rotura de puente térmico, gracias a la estructura multicámara del perfil.",
      },
    ],
  },
  {
    slug: "montador-de-pladur",
    categoria: "Servicios del hogar",
    nombre: "Pladur",
    nombreCorto: "Pladur",
    resumen:
      "Tabiquería, trasdosados y techos de pladur para cambios de distribución o mejora de aislamiento.",
    intro:
      "El pladur permite cambiar la distribución de una vivienda con obra más limpia y rápida que la fábrica tradicional, y también sirve para trasdosar paredes exteriores mejorando el aislamiento térmico y acústico. Lo usamos en reformas integrales y también como servicio independiente.",
    incluye: [
      "Tabiquería de pladur para nueva distribución",
      "Trasdosados con aislamiento",
      "Techos de pladur y falsos techos",
      "Paso de instalaciones dentro del tabique",
      "Acabado listo para pintar",
    ],
    faq: [
      {
        pregunta: "¿Un tabique de pladur aísla igual que uno de ladrillo?",
        respuesta:
          "Con el aislamiento adecuado dentro de la cámara (lana de roca o similar), un tabique de pladur puede igualar o incluso mejorar el aislamiento acústico de un tabique de ladrillo hueco simple.",
      },
      {
        pregunta: "¿Se pueden colgar cosas pesadas en una pared de pladur?",
        respuesta:
          "Sí, usando anclajes específicos o reforzando la estructura interior con perfilería adicional en el punto donde se necesite, algo que planificamos si sabemos de antemano qué vas a colgar.",
      },
      {
        pregunta: "¿Cuánto tarda levantar un tabique de pladur?",
        respuesta:
          "Un tabique estándar de una habitación se resuelve en 1-2 días, sin contar el tiempo de secado de las juntas antes de pintar.",
      },
    ],
  },
  {
    slug: "techos-desmontables",
    categoria: "Servicios del hogar",
    nombre: "Techos Desmontables",
    nombreCorto: "Techos desmontables",
    resumen:
      "Instalación de techos técnicos desmontables, útiles para ocultar instalaciones con acceso de mantenimiento.",
    intro:
      "A diferencia del pladur fijo, un techo desmontable permite acceder a las instalaciones (climatización, electricidad, fontanería) sin romper nada, levantando simplemente las placas. Es habitual en cocinas, baños y locales comerciales donde el mantenimiento futuro importa.",
    incluye: [
      "Estructura de perfilería vista u oculta",
      "Placas desmontables en distintos acabados",
      "Registro de acceso a instalaciones",
      "Integración de iluminación empotrada",
      "Nivelado y acabado final",
    ],
    faq: [
      {
        pregunta: "¿Cuándo conviene un techo desmontable frente a uno de pladur fijo?",
        respuesta:
          "Cuando por encima del techo hay instalaciones que pueden necesitar revisión o mantenimiento futuro: climatización, válvulas, cuadros eléctricos. El pladur fijo es más económico si no hay ese factor.",
      },
      {
        pregunta: "¿Se nota la diferencia estética con un techo de pladur normal?",
        respuesta:
          "Con perfilería oculta, muy poco. Con perfilería vista (más habitual en locales comerciales), sí se aprecia la retícula, aunque hay acabados que lo integran como parte del diseño.",
      },
      {
        pregunta: "¿Cuánto tarda la instalación?",
        respuesta:
          "Entre 2 y 4 días para una estancia de tamaño medio, según la superficie y si hay que integrar iluminación.",
      },
    ],
  },

  // ---------- Climatización ----------
  {
    slug: "aire-acondicionado",
    categoria: "Climatización",
    nombre: "Aire Acondicionado",
    nombreCorto: "Aire acondicionado",
    resumen:
      "Instalación de equipos de aire acondicionado split y multisplit, con canalización integrada si hace falta.",
    intro:
      "Instalamos equipos de aire acondicionado adaptados al tamaño real de cada estancia y a la distribución de la vivienda, valorando si conviene un sistema split por habitación o un multisplit con una sola unidad exterior. Coordinamos la instalación con obra si hay que ocultar conductos o líneas frigoríficas.",
    incluye: [
      "Estudio de necesidades por estancia",
      "Equipos split o multisplit",
      "Instalación de unidad exterior e interior",
      "Canalización oculta si hace falta",
      "Puesta en marcha y prueba de funcionamiento",
    ],
    faq: [
      {
        pregunta: "¿Split o multisplit, cuál me conviene?",
        respuesta:
          "El split independiente por estancia da más flexibilidad de uso, pero implica una unidad exterior por equipo. El multisplit centraliza varias unidades interiores en una sola exterior, algo útil cuando hay pocas fachadas disponibles.",
      },
      {
        pregunta: "¿Cuánto tarda la instalación?",
        respuesta:
          "Un equipo split individual se instala en un día. Un sistema multisplit con varias unidades puede llevar de 2 a 4 días según la complejidad de la canalización.",
      },
      {
        pregunta: "¿Se puede instalar aire acondicionado sin obra visible?",
        respuesta:
          "Sí, ocultando las líneas frigoríficas dentro de conductos de pladur o falsos techos cuando la reforma lo permite. Lo valoramos según el estado de la vivienda.",
      },
    ],
  },
  {
    slug: "calefaccion",
    categoria: "Climatización",
    nombre: "Calefacción",
    nombreCorto: "Calefacción",
    resumen:
      "Instalación y renovación de sistemas de calefacción: radiadores, suelo radiante y calderas.",
    intro:
      "Trabajamos tanto en renovación de instalaciones de calefacción existentes (cambio de radiadores, caldera o termostatos) como en instalaciones nuevas dentro de una reforma integral, incluyendo suelo radiante cuando el tipo de obra lo permite.",
    incluye: [
      "Instalación o cambio de radiadores",
      "Suelo radiante en reformas integrales",
      "Sustitución de caldera",
      "Termostatos programables",
      "Purgado y puesta a punto del sistema",
    ],
    faq: [
      {
        pregunta: "¿Se puede instalar suelo radiante en cualquier reforma?",
        respuesta:
          "Requiere levantar el suelo existente y suficiente altura libre para la instalación, así que encaja mejor en reformas integrales que en actuaciones puntuales.",
      },
      {
        pregunta: "¿Cuánto dura el cambio de una caldera?",
        respuesta:
          "La sustitución en sí suele resolverse en un día, aunque puede variar si hay que adaptar la salida de humos o la instalación de gas.",
      },
      {
        pregunta: "¿Los radiadores nuevos son compatibles con la instalación actual?",
        respuesta:
          "En la mayoría de los casos sí, siempre que se mantenga el mismo sistema (agua caliente central). Lo comprobamos en la visita antes de presupuestar.",
      },
    ],
  },

  // ---------- Interiorismo ----------
  {
    slug: "interiorismo",
    categoria: "Interiorismo",
    nombre: "Interiorismo en Madrid",
    nombreCorto: "Interiorismo",
    resumen:
      "Diseño de espacios desde la distribución de planta hasta la selección de materiales, mobiliario y textiles.",
    intro:
      "El interiorismo va más allá de elegir colores: empieza con la distribución de planta y termina en el detalle de mobiliario, textiles e iluminación. Trabajamos contigo desde el primer boceto hasta la ejecución, para que el resultado final sea el que imaginaste, no una aproximación.",
    incluye: [
      "Distribución de planta y estudio de necesidades",
      "Selección de materiales y acabados",
      "Elección de mobiliario y textiles",
      "Proyecto de iluminación",
      "Seguimiento de la ejecución hasta la entrega",
    ],
    faq: [
      {
        pregunta: "¿El interiorismo va siempre unido a una reforma de obra?",
        respuesta:
          "No necesariamente. Podemos trabajar solo la parte de diseño e interiorismo sin tocar instalaciones, o combinarlo con una reforma integral si también hace falta obra.",
      },
      {
        pregunta: "¿Cuánto tarda un proyecto de interiorismo?",
        respuesta:
          "La fase de diseño suele llevar entre 2 y 4 semanas. El plazo de ejecución depende de si hay obra asociada o solo mobiliario y decoración.",
      },
      {
        pregunta: "¿Puedo aportar mobiliario que ya tengo?",
        respuesta:
          "Sí, integramos piezas que quieras conservar dentro del diseño nuevo, en vez de partir de cero en todo el mobiliario.",
      },
    ],
  },
];

export function getCatalogoItem(slug: string): CategoriaInfo | undefined {
  return catalogo.find((c) => c.slug === slug);
}

export function getCategoria(categoria: string): CategoriaInfo[] {
  return catalogo.filter((c) => c.categoria === categoria);
}

export const categoriasOrden = [
  "Baños",
  "Cocina",
  "Parquet",
  "Servicios del hogar",
  "Climatización",
];
