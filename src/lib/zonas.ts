export interface ZonaFaqItem {
  pregunta: string;
  respuesta: string;
}

export interface Zona {
  slug: string;
  nombre: string;
  intro: string;
  detalle: string;
  porQueElegirnos: string;
  faq: ZonaFaqItem[];
}

export const zonas: Zona[] = [
  {
    slug: "leganes",
    nombre: "Leganés",
    intro:
      "Reformamos viviendas y locales en Leganés desde el centro histórico hasta los barrios de nueva construcción como Zarzaquemada o El Carrascal.",
    detalle:
      "Trabajamos a menudo en pisos de los años 70 y 80 del casco antiguo, donde suele hacer falta renovar instalaciones antes de tocar acabados, y en promociones más recientes donde el reto es optimizar distribuciones ya cerradas.",
    porQueElegirnos:
      "Conocemos bien el parque de vivienda de Leganés porque es una de las zonas donde más trabajamos: sabemos qué nos vamos a encontrar en un séptimo piso del casco antiguo frente a un bajo de Zarzaquemada, y presupuestamos con esa experiencia, no a ciegas. Si vives en la zona y quieres ver el trabajo terminado antes de decidir, podemos coordinar una visita a una obra reciente cercana.",
    faq: [
      {
        pregunta: "¿Trabajáis en todos los barrios de Leganés?",
        respuesta:
          "Sí, tanto en el casco histórico como en Zarzaquemada, El Carrascal, Fortuna o la zona de Parque de la Solidaridad. La logística de materiales y equipo está pensada para moverse por todo el municipio sin coste extra.",
      },
      {
        pregunta: "¿Los pisos antiguos del centro de Leganés necesitan cambiar toda la instalación eléctrica?",
        respuesta:
          "En la mayoría de los edificios de los años 70-80 sí, porque la instalación original no soporta la potencia que usamos hoy (inducción, aire acondicionado, varios electrodomésticos a la vez). Te lo confirmamos revisando el cuadro eléctrico en la visita.",
      },
      {
        pregunta: "¿Cuánto se tarda en conseguir cita para una visita en Leganés?",
        respuesta:
          "Normalmente en 2-3 días laborables, al ser una de nuestras zonas de trabajo habituales con equipo desplazado con frecuencia por la ciudad.",
      },
      {
        pregunta: "¿El presupuesto varía mucho entre un piso de Zarzaquemada y uno del casco antiguo?",
        respuesta:
          "Sí, principalmente por el estado de las instalaciones: en el casco antiguo casi siempre entra renovar fontanería y electricidad en el presupuesto, mientras que en Zarzaquemada el foco suele estar en distribución y acabados. Te damos la cifra cerrada tras ver tu vivienda concreta.",
      },
    ],
  },
  {
    slug: "getafe",
    nombre: "Getafe",
    intro:
      "En Getafe hacemos reformas integrales, de cocina y de baño tanto en el centro como en los barrios de Las Margaritas, Perales del Río y Getafe Norte.",
    detalle:
      "La mezcla de vivienda antigua en el centro y bloques de los 90-2000 en las zonas de expansión nos obliga a adaptar cada presupuesto al edificio real, no a una plantilla genérica.",
    porQueElegirnos:
      "En Getafe nos encontramos con dos realidades muy distintas según el barrio, y eso cambia el presupuesto: no es lo mismo renovar instalaciones en un piso del centro que optimizar distribución en un bloque de Getafe Norte que ya está bien de instalaciones pero mal repartido. Visitamos antes de presupuestar precisamente para no tratar todos los pisos igual.",
    faq: [
      {
        pregunta: "¿Reformáis viviendas en Las Margaritas y Perales del Río?",
        respuesta:
          "Sí, son dos de los barrios donde tenemos más proyectos activos en Getafe, junto con el centro histórico y Getafe Norte.",
      },
      {
        pregunta: "¿Qué diferencia hay entre reformar un piso del centro de Getafe y uno de las zonas de expansión?",
        respuesta:
          "En el centro suele hacer falta renovar fontanería y electricidad además de acabados. En bloques de los 90-2000 de las zonas de expansión las instalaciones suelen estar bien, así que el presupuesto se centra más en distribución, cocina y baño.",
      },
      {
        pregunta: "¿Podéis dar presupuesto sin desplazaros si tengo prisa?",
        respuesta:
          "Para una reforma integral necesitamos ver el estado real de la vivienda, así que la visita es imprescindible para que el presupuesto sea cerrado de verdad. Sí podemos dar una orquilla orientativa por teléfono o WhatsApp antes de la visita.",
      },
      {
        pregunta: "¿Cuánto tiempo lleváis trabajando en Getafe?",
        respuesta:
          "Es una de nuestras zonas de trabajo habituales desde hace años, con proyectos repartidos entre el centro histórico, Las Margaritas, Perales del Río y Getafe Norte, lo que nos da referencia directa del tipo de edificio de cada barrio.",
      },
    ],
  },
  {
    slug: "alcorcon",
    nombre: "Alcorcón",
    intro:
      "Reformamos pisos, casas y locales comerciales en Alcorcón, con presencia habitual en San José de Valderas, Parque Oeste y el centro urbano.",
    detalle:
      "Alcorcón combina bloques de los 70 que necesitan renovación de fontanería y electricidad con urbanizaciones más nuevas donde el trabajo se centra en cocinas, baños y distribución interior.",
    porQueElegirnos:
      "San José de Valderas y Parque Oeste tienen tipologías de vivienda distintas al centro urbano de Alcorcón, y lo tenemos en cuenta al presupuestar: en las urbanizaciones el trabajo suele ser más de cocina, baño y acabados, mientras que en los bloques más antiguos del centro casi siempre hace falta tocar instalaciones primero.",
    faq: [
      {
        pregunta: "¿Hacéis reformas de locales comerciales en Alcorcón, no solo viviendas?",
        respuesta:
          "Sí, tenemos experiencia en locales y espacios comerciales en el municipio, con fases de obra pensadas para minimizar el tiempo que el negocio está cerrado.",
      },
      {
        pregunta: "¿En qué zonas de Alcorcón trabajáis más?",
        respuesta:
          "San José de Valderas, Parque Oeste y el centro urbano son las zonas con más proyectos activos, aunque cubrimos todo el municipio.",
      },
      {
        pregunta: "¿Los bloques de los años 70 en Alcorcón necesitan licencia para renovar fontanería y electricidad?",
        respuesta:
          "Depende del alcance de la intervención. Si es solo sustitución sin cambiar trazado, normalmente no hace falta licencia, solo boletín del instalador. Te lo confirmamos en la visita según tu caso concreto.",
      },
      {
        pregunta: "¿Qué diferencia el trabajo en Parque Oeste del resto de Alcorcón?",
        respuesta:
          "Parque Oeste tiene construcción más reciente que el centro urbano, así que las reformas suelen centrarse en cocina, baño y distribución interior en lugar de renovación completa de instalaciones.",
      },
    ],
  },
  {
    slug: "mostoles",
    nombre: "Móstoles",
    intro:
      "En Móstoles trabajamos reformas integrales y por estancias en el centro, Móstoles Sur y el entorno de Universidad Rey Juan Carlos.",
    detalle:
      "Es una de las zonas donde más reformas de cocina y baño gestionamos, junto con actuaciones integrales en pisos heredados que llegan sin reformar desde su construcción.",
    porQueElegirnos:
      "Móstoles es, junto con Leganés, una de nuestras zonas con más volumen de obra, lo que nos permite tener equipo y proveedores locales bien coordinados y reducir tiempos muertos entre fases. Es habitual que nos encarguemos de pisos heredados que nunca se han reformado, donde empezamos con una revisión completa de instalaciones antes de tocar nada de acabados.",
    faq: [
      {
        pregunta: "¿Reformáis pisos heredados sin reformar desde que se construyeron?",
        respuesta:
          "Sí, es uno de los casos más habituales que gestionamos en Móstoles. Empezamos revisando el estado real de fontanería, electricidad y estructura antes de decidir el alcance de la reforma.",
      },
      {
        pregunta: "¿Trabajáis cerca de la Universidad Rey Juan Carlos?",
        respuesta:
          "Sí, tenemos proyectos activos en esa zona, tanto en pisos para vivir como en viviendas destinadas a alquiler.",
      },
      {
        pregunta: "¿Cuál es la reforma más habitual que hacéis en Móstoles?",
        respuesta:
          "Reformas de cocina y baño son las más frecuentes, seguidas de reformas integrales completas en pisos heredados o comprados de segunda mano sin reformar.",
      },
      {
        pregunta: "¿Trabajáis en Móstoles Sur igual que en el centro?",
        respuesta:
          "Sí, cubrimos todo el municipio con la misma disponibilidad de equipo. La diferencia suele estar en la antigüedad del edificio, no en la zona en sí.",
      },
    ],
  },
  {
    slug: "pozuelo-de-alarcon",
    nombre: "Pozuelo de Alarcón",
    intro:
      "En Pozuelo de Alarcón hacemos reformas integrales, de cocina y de baño tanto en pisos del centro y Somosaguas como en chalets y viviendas unifamiliares de las urbanizaciones del municipio.",
    detalle:
      "El trabajo en Pozuelo combina dos realidades distintas: chalets y adosados en urbanizaciones cerradas, donde solemos intervenir en reformas integrales o de ampliación, y pisos de bloque residencial donde el foco está más en cocina, baño y actualización de acabados. En ambos casos trabajamos con materiales de calidad media-alta, acordes al nivel de acabado que se espera en la zona.",
    porQueElegirnos:
      "En chalets y viviendas unifamiliares de Pozuelo trabajamos a menudo con proyectos de ampliación que implican coordinación con arquitecto técnico, algo que no todas las empresas de reformas gestionan de forma habitual. En Somosaguas y el resto de urbanizaciones cerradas también nos adaptamos a los requisitos específicos que puedan tener las comunidades de propietarios.",
    faq: [
      {
        pregunta: "¿Hacéis reformas de ampliación en chalets, no solo reformas interiores?",
        respuesta:
          "Sí, en Pozuelo es habitual que coordinemos proyectos de ampliación con arquitecto técnico, además de reformas integrales dentro del volumen existente de la vivienda.",
      },
      {
        pregunta: "¿Qué materiales usáis en las reformas de Pozuelo?",
        respuesta:
          "Trabajamos con materiales de calidad media-alta como estándar en la zona, y ajustamos la selección final contigo según el presupuesto y el uso de cada espacio.",
      },
      {
        pregunta: "¿Tenéis en cuenta las normas de las urbanizaciones cerradas de Somosaguas?",
        respuesta:
          "Sí, revisamos si la comunidad tiene requisitos específicos de horarios de obra o acceso antes de planificar el calendario, para evitar sorpresas una vez empezada la obra.",
      },
      {
        pregunta: "¿Cuánto suele durar una reforma integral en un chalet de Pozuelo?",
        respuesta:
          "Al ser viviendas más grandes que un piso medio, suele ir de 10 a 16 semanas según metros y si hay proyecto de ampliación. Te damos un calendario concreto en la propuesta, no una cifra genérica.",
      },
    ],
  },
  {
    slug: "alcobendas",
    nombre: "Alcobendas y La Moraleja",
    intro:
      "Reformamos viviendas en Alcobendas y en La Moraleja, desde pisos en el centro urbano hasta chalets y villas en las zonas residenciales de la urbanización.",
    detalle:
      "En La Moraleja predominan chalets y villas de gama alta, donde las reformas suelen ser integrales o de ampliación con materiales de gama media-alta. En el resto de Alcobendas trabajamos más con pisos de bloque, con reformas de cocina, baño e integrales similares a las del resto del área metropolitana.",
    porQueElegirnos:
      "La Moraleja exige un nivel de acabado y de trato distinto al de un piso de bloque estándar, y lo tenemos integrado en cómo trabajamos: desde la selección de materiales hasta la coordinación de accesos y horarios en urbanizaciones privadas. En el resto de Alcobendas aplicamos el mismo estándar de presupuesto cerrado y seguimiento semanal que en el resto de nuestras zonas de trabajo.",
    faq: [
      {
        pregunta: "¿Hacéis reformas de chalets y villas en La Moraleja?",
        respuesta:
          "Sí, es una parte importante de nuestro trabajo en la zona, normalmente reformas integrales o de ampliación con materiales de gama media-alta acordes al tipo de vivienda.",
      },
      {
        pregunta: "¿El presupuesto es distinto entre Alcobendas centro y La Moraleja?",
        respuesta:
          "Sí, porque el tipo de vivienda y de materiales suele ser distinto: pisos de bloque en Alcobendas centro frente a chalets de gama alta en La Moraleja. En ambos casos el presupuesto se cierra tras la visita, adaptado a tu vivienda concreta.",
      },
      {
        pregunta: "¿Coordináis el acceso de obra con la seguridad de la urbanización?",
        respuesta:
          "Sí, es habitual en La Moraleja y lo planificamos desde el principio junto con el calendario de obra, para que no genere fricciones con la comunidad.",
      },
      {
        pregunta: "¿Reformáis pisos de bloque en Alcobendas centro con el mismo cuidado que los chalets de La Moraleja?",
        respuesta:
          "Sí, aplicamos el mismo estándar de presupuesto cerrado, seguimiento semanal y garantía en toda la zona, independientemente del tipo de vivienda.",
      },
    ],
  },
  {
    slug: "valdemoro",
    nombre: "Valdemoro",
    intro:
      "Reformamos viviendas y locales en Valdemoro, tanto en el casco antiguo como en los desarrollos de El Restón y La Estación.",
    detalle:
      "Valdemoro ha crecido muy rápido en las dos últimas décadas, así que conviven dos parques de vivienda muy distintos: casas bajas y pisos antiguos en el casco, y promociones de obra nueva de los 2000 en El Restón, El Espartal o La Estación. En el casco solemos entrar a renovar instalaciones completas; en la obra nueva el trabajo es casi siempre de actualización de cocina y baño, o de abrir distribuciones que se quedaron muy compartimentadas.",
    porQueElegirnos:
      "En Valdemoro nos piden mucho reforma de local comercial, sobre todo en las calles del centro y en los bajos de las promociones nuevas. Sabemos gestionar la obra por fases para que el negocio cierre lo menos posible, y conocemos los plazos reales de licencia en el municipio, que es lo que suele desmontar los calendarios optimistas.",
    faq: [
      {
        pregunta: "¿Reformáis locales comerciales en Valdemoro?",
        respuesta:
          "Sí, es uno de los trabajos que más hacemos en la zona. Planificamos la obra por fases y con calendario cerrado para que el cierre del negocio sea el mínimo imprescindible, y te avisamos desde el principio de los plazos de licencia del ayuntamiento.",
      },
      {
        pregunta: "¿Qué diferencia hay entre reformar en el casco de Valdemoro y en El Restón?",
        respuesta:
          "En el casco antiguo casi siempre hay que renovar fontanería y electricidad además de acabados, porque la instalación original se queda corta. En El Restón y las promociones de los 2000 las instalaciones suelen estar bien, así que el presupuesto se centra en cocina, baño y distribución.",
      },
      {
        pregunta: "¿Os desplazáis a Valdemoro sin coste adicional?",
        respuesta:
          "Sí. Valdemoro entra dentro de nuestra área de trabajo habitual en el corredor sur y el desplazamiento no se repercute en el presupuesto.",
      },
      {
        pregunta: "¿Cuánto tarda una reforma integral de piso en Valdemoro?",
        respuesta:
          "Para un piso estándar de 80-90 m² solemos movernos entre 8 y 12 semanas, según si hay que renovar instalaciones completas o solo acabados y distribución. La cifra exacta te la cerramos tras la visita.",
      },
    ],
  },
  {
    slug: "arganda-del-rey",
    nombre: "Arganda del Rey",
    intro:
      "Reformas integrales, de cocina, de baño y de local comercial en Arganda del Rey y el resto del corredor del Henares sur.",
    detalle:
      "En Arganda trabajamos sobre todo en vivienda de bloque de los años 70 y 80 del centro y en unifamiliares y adosados de las urbanizaciones que rodean el municipio. Son dos encargos muy distintos: en el bloque antiguo el grueso del presupuesto se va en instalaciones y en el adosado suele ir en cocina, baños y climatización, porque la envolvente ya está resuelta.",
    porQueElegirnos:
      "Arganda tiene bastante local comercial y nave pequeña, y ahí la diferencia la marca entender el uso al que se destina antes de proyectar: no se acondiciona igual un local de hostelería que uno de retail o un espacio de oficinas. Presupuestamos después de ver el local y de saber qué actividad va dentro, no antes.",
    faq: [
      {
        pregunta: "¿Trabajáis en las urbanizaciones de las afueras de Arganda?",
        respuesta:
          "Sí, en adosados y unifamiliares de las urbanizaciones del municipio además de en los pisos del centro. En vivienda unifamiliar los encargos más frecuentes son cocina, baños y climatización.",
      },
      {
        pregunta: "¿Hacéis acondicionamiento de locales y naves pequeñas?",
        respuesta:
          "Sí. Es habitual en Arganda por el tejido comercial e industrial de la zona. Necesitamos saber qué actividad va a albergar el espacio para dimensionar bien instalaciones, ventilación y salidas.",
      },
      {
        pregunta: "¿Los pisos del centro de Arganda necesitan cambiar las tuberías?",
        respuesta:
          "En los bloques de los 70 y 80 es muy frecuente, sobre todo si conservan bajantes originales. Lo comprobamos en la visita antes de presupuestar para que no aparezca como sobrecoste a mitad de obra.",
      },
      {
        pregunta: "¿Dais presupuesto cerrado también fuera de Madrid Sur?",
        respuesta:
          "Sí, el presupuesto cerrado tras la visita es nuestra forma de trabajar en toda la Comunidad de Madrid, Arganda incluida.",
      },
    ],
  },
  {
    slug: "majadahonda",
    nombre: "Majadahonda",
    intro:
      "Reformas integrales de vivienda, cocina y baño en Majadahonda, en chalets, adosados y pisos del centro del municipio.",
    detalle:
      "Majadahonda es mayoritariamente vivienda unifamiliar y adosado de urbanización, con una parte de piso de bloque concentrada en el centro. En unifamiliar los proyectos suelen ser más largos y con más oficios en juego: además de albañilería y acabados entran carpintería a medida, climatización y, muchas veces, intervención en zonas exteriores o porches.",
    porQueElegirnos:
      "En vivienda unifamiliar de Majadahonda el nivel de acabado que se espera es alto y el margen de error en la planificación es más pequeño, porque hay más oficios coordinándose a la vez. Trabajamos con un único interlocutor precisamente para eso: para que no tengas que ir persiguiendo a cinco gremios distintos cuando algo se solapa.",
    faq: [
      {
        pregunta: "¿Hacéis reformas integrales de chalets en Majadahonda?",
        respuesta:
          "Sí, es el tipo de encargo más habitual en la zona. Incluye normalmente cocina, baños, carpintería a medida y climatización, con calendario por fases y un único responsable de obra.",
      },
      {
        pregunta: "¿Reformáis también los pisos del centro de Majadahonda?",
        respuesta:
          "Sí, con el mismo estándar de presupuesto cerrado y seguimiento semanal. En piso de bloque el proyecto suele ser más corto que en unifamiliar, entre 8 y 12 semanas según alcance.",
      },
      {
        pregunta: "¿Coordináis permisos y accesos en urbanizaciones privadas?",
        respuesta:
          "Sí, lo planificamos desde el inicio junto con el calendario de obra: horarios de entrada de material, uso de zonas comunes y avisos a la comunidad, para evitar fricciones durante la obra.",
      },
      {
        pregunta: "¿Trabajáis en Majadahonda estando vuestra base en el sur de Madrid?",
        respuesta:
          "Sí. Nos desplazamos por toda la Comunidad de Madrid y Majadahonda es una zona donde trabajamos con regularidad; el desplazamiento no se repercute en el presupuesto.",
      },
    ],
  },
  {
    slug: "algete",
    nombre: "Algete",
    intro:
      "Reformas de viviendas, baños y locales en Algete, Santo Domingo y el resto del corredor norte de Madrid.",
    detalle:
      "En Algete conviven el casco urbano, con vivienda más tradicional y bastante casa baja, y las urbanizaciones tipo Santo Domingo o Prado Norte, donde predomina el chalet exento con parcela. En el casco los encargos son de reforma de baño y cocina y renovación de instalaciones; en urbanización, reformas integrales de más recorrido y con más peso de climatización y carpintería exterior.",
    porQueElegirnos:
      "En zonas como Santo Domingo el chalet suele tener ya sus años y la reforma no es solo estética: aparecen aislamiento, ventanas y climatización, que es donde de verdad se nota la factura después. Lo planteamos desde el principio para que decidas con la cifra completa delante y no por partes.",
    faq: [
      {
        pregunta: "¿Trabajáis en la urbanización Santo Domingo?",
        respuesta:
          "Sí, es una de las zonas donde más nos llaman en Algete, normalmente para reformas integrales de chalet que incluyen ventanas, aislamiento y climatización además de cocina y baños.",
      },
      {
        pregunta: "¿Reformáis baños sueltos o solo reformas integrales?",
        respuesta:
          "Hacemos ambas cosas. La reforma de baño y el cambio de bañera por ducha son de los encargos más frecuentes en el casco urbano de Algete y se resuelven en pocas semanas.",
      },
      {
        pregunta: "¿Merece la pena cambiar las ventanas en un chalet de Algete?",
        respuesta:
          "En la mayoría de chalets con carpintería original sí, porque es donde se pierde la mayor parte del confort térmico. Lo valoramos en la visita y te decimos si compensa antes de meterlo en el presupuesto.",
      },
      {
        pregunta: "¿Cubrís Algete estando en el sur de Madrid?",
        respuesta:
          "Sí, nos desplazamos por toda la Comunidad de Madrid. Algete y el corredor norte entran en nuestra área de trabajo, igual que Alcobendas.",
      },
    ],
  },
  {
    slug: "madrid-capital",
    nombre: "Madrid capital",
    intro:
      "Reformas integrales, de cocina, de baño y de local comercial en Madrid capital: Villaverde, Carabanchel, Usera, Hortaleza, Valdebebas y centro.",
    detalle:
      "Madrid capital no es un solo tipo de obra: un piso de Villaverde o Carabanchel de los años 60-70 pide renovación completa de instalaciones, mientras que en Valdebebas o los desarrollos del noreste la vivienda es prácticamente nueva y el encargo es de personalización y acabados. En los barrios del centro se suma la dificultad logística: portales estrechos, sin ascensor, horarios de carga y descarga restringidos.",
    porQueElegirnos:
      "Trabajar en Madrid capital tiene una parte que no se ve en el presupuesto de nadie y luego pesa: permisos de ocupación de vía pública, horarios de obra, retirada de escombro y accesos. Lo tenemos contemplado desde el principio, y por eso el presupuesto cerrado que te damos aguanta hasta el final en lugar de crecer por el camino.",
    faq: [
      {
        pregunta: "¿En qué barrios de Madrid capital trabajáis?",
        respuesta:
          "En toda la ciudad. Con más frecuencia en el sur (Villaverde, Carabanchel, Usera) por cercanía a nuestra base, y también en Hortaleza, Valdebebas y los distritos del centro.",
      },
      {
        pregunta: "¿Os encargáis de los permisos de obra en Madrid?",
        respuesta:
          "Sí, gestionamos la documentación necesaria y te decimos desde la visita qué tipo de licencia o declaración responsable requiere tu obra y cuánto suele tardar, porque condiciona la fecha de inicio real.",
      },
      {
        pregunta: "¿Cómo gestionáis la obra en un piso del centro sin ascensor?",
        respuesta:
          "Se planifica la logística antes de empezar: acopio de material, permisos de ocupación de vía pública si hacen falta y retirada de escombro en los horarios permitidos. Se refleja en el presupuesto desde el principio, no aparece después.",
      },
      {
        pregunta: "¿Reformáis locales comerciales en Madrid capital?",
        respuesta:
          "Sí, es una de nuestras especialidades: locales, oficinas y hostelería, con la obra organizada por fases para reducir al mínimo el tiempo de cierre del negocio.",
      },
    ],
  },
  {
    slug: "galapagar",
    nombre: "Galapagar",
    intro:
      "Reformas de viviendas y locales en Galapagar, Torrelodones, Colmenarejo, Valdemorillo y la sierra noroeste de Madrid.",
    detalle:
      "En la sierra noroeste predomina la vivienda unifamiliar con parcela, muchas veces construida entre los 80 y los 2000, y con un problema recurrente: aislamiento y carpintería que se quedaron cortos para el clima de la zona, que es bastante más duro que el de la capital en invierno. Por eso aquí las reformas integrales incluyen casi siempre ventanas, aislamiento y un sistema de calefacción replanteado.",
    porQueElegirnos:
      "En la sierra la reforma puramente estética suele ser dinero mal gastado si antes no se resuelve el comportamiento térmico de la casa. Te lo decimos en la visita aunque implique un presupuesto mayor, porque es la diferencia entre una casa bonita y una casa que además se pueda calentar sin arruinarse.",
    faq: [
      {
        pregunta: "¿Además de Galapagar trabajáis en los municipios de alrededor?",
        respuesta:
          "Sí: Torrelodones, Colmenarejo, Valdemorillo, Brunete, El Escorial y el resto de la sierra noroeste entran en nuestra área de trabajo.",
      },
      {
        pregunta: "¿Por qué recomendáis empezar por aislamiento y ventanas en la sierra?",
        respuesta:
          "Porque el invierno en la sierra es notablemente más frío que en la capital y la mayoría de las viviendas de los 80 y 90 tienen carpintería y aislamiento insuficientes. Reformar acabados sin tocar eso deja el problema de fondo intacto y la factura de calefacción igual.",
      },
      {
        pregunta: "¿Hacéis reformas de locales comerciales en la sierra noroeste?",
        respuesta:
          "Sí, acondicionamiento completo de locales y oficinas en Galapagar y municipios cercanos, organizado por fases para minimizar el cierre del negocio.",
      },
      {
        pregunta: "¿Cuánto cuesta desplazarse hasta la sierra?",
        respuesta:
          "Nada adicional. Nos desplazamos por toda la Comunidad de Madrid y el desplazamiento no se repercute como partida en el presupuesto.",
      },
    ],
  },
];

export function getZona(slug: string): Zona | undefined {
  return zonas.find((z) => z.slug === slug);
}
