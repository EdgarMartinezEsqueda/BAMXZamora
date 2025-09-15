export const programas = [
  {
    id: "voluntariado",
    iconName: "FaHandsHelping",
    title: "Voluntariado",
    description: "Puedes ayudar en el armado de despensas, seleccionando frutas y verduras de calidad, o en nuestra área de producción de pan y tortilla. Cada par de manos cuenta para llevar alimento a quienes más lo necesitan.",
    keyPoints: [
      "Flexibilidad de horarios según tu disponibilidad",
      "Orientación y capacitación inicial",
      "Ambiente seguro y de trabajo en equipo",
      "Reconocimiento por tu contribución"
    ],
    media: {
      type: "image",
      src: "/assets/images/programas/voluntariado.webp",
      alt: "Personas voluntarias preparando despensas"
    },
    faqs: [
      { question: "¿Necesito experiencia previa?", answer: "No, solo las ganas de ayudar. Te capacitamos en el área que elijas." },
      { question: "¿Cuántas horas debo comprometerme?", answer: "Puedes participar según tu disponibilidad." }
    ]
  },
  {
    id: "voluntarios-al-volante",
    iconName: "FaDonate",
    title: "Voluntarios al Volante",
    description: "Existen tres formas de participar: como ciudadano voluntario con tu vehículo, como empresa solidaria a través del programa 'Empresas al Volante', o como institución mediante 'Gobierno al Volante'. Todos podemos llevar esperanza en el camino.",
    keyPoints: [
      "Cobertura de gastos de combustible para entregas",
      "Seguro de responsabilidad civil durante las entregas",
      "Programa flexible que se adapta a tu disponibilidad",
      "Certificado de participación para empresas"
    ],
    media: {
      type: "image",
      src: "/assets/images/programas/volante.webp",
      alt: "Voluntario entregando despensas en una comunidad"
    },
    faqs: [
      { question: "¿Qué tipo de vehículo necesito?", answer: "Cualquier vehículo en buenas condiciones." },
      { question: "¿Puedo elegir las rutas de entrega?", answer: "Sí, coordinamos las rutas según tu ubicación y disponibilidad." }
    ]
  },
  {
    id: "apadrinamiento",
    iconName: "FaGift",
    title: "Apadrina una Familia",
    description: "Con solo $200 al mes, apoyas a una familia en situación de vulnerabilidad en nuestra región. Puedes unirte con un propio caso o dejar que nosotros te asignemos uno. Juntos generamos vínculos de ayuda con impacto real. A continuación te mostramos el caso de una de nuestras madrinas.",
    keyPoints: [
      "Reportes mensuales del impacto de tu apoyo",
      "Posibilidad de conocer a la familia apadrinada",
      "Certificado deducible de impuestos si lo requieres",
      "Actualizaciones periódicas sobre su progreso"
    ],
    media: {
      type: "video",
      src: "https://www.youtube.com/embed/WSaNPe_lJEQ?si=RSvSs7gGaNzYp4JR", 
      alt: "Testimonio de una madrina"
    },
    faqs: [
      { question: "¿Cómo se selecciona a las familias?", answer: "Todas las familias pasan por un proceso de evaluación socioeconómica." },
      { question: "¿Puedo cambiar de familia apadrinada?", answer: "Sí, puedes solicitar un cambio en cualquier momento." }
    ]
  },
  {
    id: "beneficiarios",
    iconName: "FaFirstAid",
    title: "Padrón de Beneficiarios",
    description: "Si tú o alguien que conoces necesita apoyo alimentario, pueden acercarse al banco de alimentos para unirse al padrón. Sólo necesitamos que nos proporciones una identificación oficial, CURP y un comprobante de domicilio. Nuestro equipo te guiará en el proceso.",
    keyPoints: [
      "Proceso de registro sencillo y confidencial",
      "Entrega catorcenal de despensas nutritivas",
      "Talleres de nutrición y desarrollo personal",
      "Acceso a otros programas de apoyo"
    ],
    media: {
      type: "image",
      src: "/assets/images/beneficiarios/2.webp",
      alt: "Entrega de despensas a beneficiarios"
    },
    faqs: [
      { question: "¿Cuáles son los requisitos?", answer: "Identificación oficial, CURP y comprobante de domicilio actual." },
      { question: "¿Qué contiene la despensa?", answer: "El contenido exacto es variable, pero siempre encontrarás alimentos básicos, frutas y verduras." }
    ]
  },
  {
    id: "comer-en-familia",
    iconName: "FaUtensils",
    title: "Comer en Familia",
    description: "Ofrecemos talleres de cocina para enseñar a las familias a preparar comidas nutritivas, económicas y balanceadas, aprovechando al máximo los alimentos que reciben en sus despensas. Promovemos así mejores hábitos alimenticios y fomentamos la sana convivencia familiar.",
    keyPoints: [
      "Recetas prácticas y accesibles",
      "Enfoque en nutrición y aprovechamiento de ingredientes",
      "Espacios de convivencia y aprendizaje",
      "Impartidos por personal capacitado en nutrición"
    ],
    media: {
      type: "image",
      src: "/assets/images/programas/comerEnFamilia.webp",
      alt: "Taller de cocina con familias aprendiendo a preparar alimentos"
    },
    faqs: [
      { question: "¿Tiene costo participar?", answer: "No, los talleres son gratuitos para las familias beneficiarias del banco de alimentos." },
      { question: "¿Debo llevar algo?", answer: "Solo disposición para aprender; nosotros proporcionamos los ingredientes y utensilios necesarios." }
    ]
  },
  {
    id: "servicio-social",
    iconName: "FaHeartbeat",
    title: "Servicio Social",
    description: "Contamos con convenios con preparatorias y universidades. Dependiendo del perfil del alumno, sus necesidades, así como las del banco, se le puede asignar tareas en áreas como producción, logística, comunicación, trabajo social, administración y más. Seguimos expandiendo nuestras alianzas con instituciones educativas.",
    keyPoints: [
      "Horarios flexibles que se adaptan a tu escuela",
      "Experiencia práctica en proyectos sociales",
      "Cartas de recomendación al término del servicio",
      "Oportunidad de continuar como voluntario o colaborador"
    ],
    media: {
      type: "slider",
      folderName: "escuelas",
      totalImages: 5,
      altText: "Logo de institución"
    },
    faqs: [
      { question: "¿Cuántas horas necesito completar?", answer: "Depende de tu institución y el nivel de escolaridad, puede ser desde 50 horas para preparatoria hasta entre 240 y 480 horas para universitarios." },
      { question: "¿Puedo elegir el área donde trabajaré?", answer: "Sí, según tus habilidades e intereses." }
    ]
  }
];