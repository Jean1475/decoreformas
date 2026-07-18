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
];

export function getZona(slug: string): Zona | undefined {
  return zonas.find((z) => z.slug === slug);
}
