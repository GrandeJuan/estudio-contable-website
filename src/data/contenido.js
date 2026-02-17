export const contenido = {

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // DATOS GENERALES DEL ESTUDIO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  estudio: {
    nombre: "Estudio Contable Grande & Asociados",
    slogan: "Soluciones a tu medida",
    descripcionCorta: "Más de 30 años asesorando a empresas y particulares. Servicios de auditoría, impuestos, sociedades y liquidación de sueldos.",
    telefono: "+54 11 4382-7139",
    email: "recepcion@grandeyasoc.com.ar",
    direccion: "Av. Corrientes 1257, 3° F, Primer Cuerpo, CABA",
    horario: "Lunes a Viernes de 9:00 a 17:00 hs",
    googleMapsUrl: "https://maps.google.com/?q=Av.+Corrientes+1257+CABA",
    redesSociales: {
      instagram: "https://instagram.com/estudiogrande",
      linkedin: "https://linkedin.com/company/estudio-grande",
      whatsapp: "https://wa.me/541143827139",
    }
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SECCIÓN: SOBRE NOSOTROS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  sobreNosotros: {
    titulo: "Sobre el Estudio",
    parrafos: [
      "Fundado en 1995, nuestro estudio se especializa en brindar soluciones contables e impositivas integrales para empresas, comercios y profesionales independientes. Con más de tres décadas de experiencia, hemos acompañado el crecimiento de cientos de clientes en diversos sectores de la economía argentina.",
      "Nos distingue el trato personalizado, la cercanía con nuestros clientes y un enfoque proactivo frente a los cambios normativos constantes del mercado argentino. Entendemos que cada negocio es único y requiere soluciones adaptadas a sus necesidades específicas.",
      "Creemos que un buen asesoramiento contable es la base para la toma de decisiones estratégicas y el crecimiento sostenido de cualquier negocio. Por eso, no solo cumplimos con las obligaciones fiscales, sino que nos convertimos en verdaderos socios de nuestros clientes."
    ],
    valores: [
      { 
        titulo: "Confianza", 
        descripcion: "Relaciones transparentes y de largo plazo con nuestros clientes. Construimos vínculos basados en la honestidad y el compromiso mutuo." 
      },
      { 
        titulo: "Profesionalismo", 
        descripcion: "Equipo actualizado en normativa contable, impositiva y laboral vigente. Nos capacitamos continuamente para brindar el mejor servicio."
      },
      { 
        titulo: "Compromiso", 
        descripcion: "Acompañamos cada etapa del crecimiento de tu negocio. Desde el inicio hasta la consolidación, estamos a tu lado." 
      },
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SECCIÓN: SERVICIOS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  servicios: {
    titulo: "Nuestros Servicios",
    subtitulo: "Ofrecemos un abanico completo de soluciones contables e impositivas adaptadas a las necesidades de tu negocio.",
    lista: [
      {
        id: "contabilidad-general",
        nombre: "Contabilidad General",
        descripcion: "Asesoramiento contable integral, registraciones contables, outsourcing y copiado de libros contables.",
        icono: "FaCalculator",
        detalles: {
          descripcionLarga: "Brindamos un servicio de asesoramiento contable integral pensado para acompañar a tu empresa en cada etapa de su gestión. Nos encargamos de las registraciones contables, la tercerización de procesos administrativos y contables (outsourcing), y el copiado de libros contables. Nuestro equipo garantiza información financiera confiable, ordenada y al día para la toma de decisiones.",
          incluye: [
            "Asesoramiento contable integral y personalizado",
            "Registraciones contables de todas las operaciones comerciales",
            "Outsourcing de procesos contables y administrativos",
            "Copiado de libros contables obligatorios",
            "Confección de balances mensuales, trimestrales y anuales",
            "Conciliaciones bancarias y de cuentas",
            "Informes gerenciales personalizados"
          ],
          faqs: [
            {
              pregunta: "¿Qué incluye el asesoramiento contable integral?",
              respuesta: "Incluye el acompañamiento permanente en todas las cuestiones contables de tu empresa: desde la organización de la información financiera hasta la interpretación de estados contables para la toma de decisiones estratégicas."
            },
            {
              pregunta: "¿Qué es el servicio de outsourcing contable?",
              respuesta: "Es la tercerización parcial o total de los procesos contables y administrativos de tu empresa. Nos encargamos de las registraciones, la gestión documental y la generación de reportes, permitiéndote enfocarte en el negocio."
            },
            {
              pregunta: "¿Qué normas contables utilizan para preparar los estados contables?",
              respuesta: "Preparamos los estados contables siguiendo las Normas Contables Profesionales Argentinas (RT). Para empresas que lo requieran, también podemos aplicar Normas Internacionales de Información Financiera (NIIF/IFRS)."
            }
          ]
        }
      },
      {
        id: "liquidacion-impuestos",
        nombre: "Liquidación de Impuestos",
        descripcion: "Asesoramiento tributario integral, planificación fiscal y determinación de impuestos nacionales, provinciales y municipales.",
        icono: "FaFileInvoiceDollar",
        detalles: {
          descripcionLarga: "Ofrecemos un servicio completo de asesoramiento tributario y liquidación de impuestos. Desde la planificación fiscal y la optimización de la carga tributaria hasta la determinación y presentación de impuestos en todos los niveles jurisdiccionales. Nos ocupamos de los regímenes de retención e información, la gestión del Monotributo, la atención de fiscalizaciones, el recupero de créditos fiscales vinculados a la exportación y el área contencioso tributario.",
          incluye: [
            "Asesoramiento tributario integral",
            "Planificación fiscal y optimización de la carga tributaria",
            "Determinación y presentación de impuestos nacionales, provinciales y municipales",
            "Gestión de regímenes de retención e información",
            "Informes para fines fiscales",
            "Empadronamiento y recategorización de Monotributo",
            "Atención de fiscalizaciones y requerimientos de los organismos de control",
            "Recupero de créditos fiscales vinculados a la exportación",
            "Área contencioso tributario"
          ],
          faqs: [
            {
              pregunta: "¿Qué impuestos están incluidos en el servicio?",
              respuesta: "Gestionamos todos los impuestos aplicables a tu actividad: IVA, Ganancias, Ingresos Brutos (IIBB), Monotributo, impuestos municipales, regímenes de información, y cualquier otro tributo específico de tu sector a nivel nacional, provincial y municipal."
            },
            {
              pregunta: "¿Qué es la planificación fiscal y cómo puede beneficiar a mi empresa?",
              respuesta: "La planificación fiscal consiste en organizar tus operaciones económicas de manera que puedas optimizar legalmente la carga tributaria. Te permite ahorrar en impuestos, prever obligaciones futuras y tomar mejores decisiones comerciales."
            },
            {
              pregunta: "¿Qué sucede si recibo una fiscalización o requerimiento de un organismo de control?",
              respuesta: "Te acompañamos durante todo el proceso. Preparamos la documentación requerida, representamos tus intereses ante el organismo y elaboramos estrategias de defensa. También contamos con un área contencioso tributario para casos que requieran instancia administrativa o judicial."
            }
          ]
        }
      },
      {
        id: "liquidacion-sueldos",
        nombre: "Liquidación de Sueldos",
        descripcion: "Liquidación mensual y quincenal de sueldos, emisión de recibos, cargas sociales y gestión de rúbrica.",
        icono: "FaUsers",
        detalles: {
          descripcionLarga: "Gestionamos de manera integral la liquidación de sueldos de tu empresa, aplicando los diversos convenios colectivos de trabajo vigentes. Nos encargamos de la emisión de recibos, la liquidación de cargas sociales, la gestión de rúbrica de libro de sueldos u hojas móviles, y la atención de fiscalizaciones y requerimientos de los organismos de control.",
          incluye: [
            "Liquidación de sueldos mensual y quincenal aplicando los diversos convenios colectivos de trabajo",
            "Emisión de recibos de sueldos",
            "Liquidación de cargas sociales (aportes y contribuciones)",
            "Gestión de rúbrica de libro de sueldos u hojas móviles",
            "Atención de fiscalizaciones y requerimientos de los organismos de control"
          ],
          faqs: [
            {
              pregunta: "¿Incluye el servicio la emisión de recibos de sueldo?",
              respuesta: "Sí, nos encargamos de la emisión de recibos de sueldos de acuerdo a la normativa vigente, asegurando que cumplan con todos los requisitos legales."
            },
            {
              pregunta: "¿Trabajan con todos los convenios colectivos de trabajo?",
              respuesta: "Sí, estamos capacitados para liquidar sueldos bajo los diversos convenios colectivos de trabajo. Conocemos las particularidades de cada sector y aplicamos correctamente los adicionales, escalas salariales y normativas específicas."
            },
            {
              pregunta: "¿Qué incluye la gestión de rúbrica?",
              respuesta: "Nos ocupamos de todo el trámite de rúbrica del libro de sueldos u hojas móviles ante el Ministerio de Trabajo, asegurando el cumplimiento de la normativa vigente en materia de registración laboral."
            }
          ]
        }
      },
      {
        id: "auditoria",
        nombre: "Auditoría",
        descripcion: "Auditoría y preparación de estados contables, informes y certificaciones especiales bajo normas profesionales.",
        icono: "FaSearchDollar",
        detalles: {
          descripcionLarga: "Realizamos auditorías y preparación de estados contables anuales e intermedios bajo normas contables profesionales vigentes. También emitimos informes y certificaciones especiales requeridos por bancos, organismos de control o terceros interesados. Nuestro equipo garantiza un examen independiente y riguroso de la información financiera de tu empresa.",
          incluye: [
            "Auditoría y preparación de estados contables anuales e intermedios",
            "Informes especiales bajo normas contables profesionales",
            "Certificaciones especiales bajo normas contables profesionales"
          ],
          faqs: [
            {
              pregunta: "¿Qué es una auditoría de estados contables?",
              respuesta: "Es un examen independiente y profesional de la información financiera de una empresa, realizado por un contador público. El auditor emite una opinión sobre si los estados contables reflejan razonablemente la situación patrimonial, económica y financiera del ente."
            },
            {
              pregunta: "¿Mi empresa está obligada a realizar auditoría?",
              respuesta: "Depende del tipo societario y tamaño. Las SA deben tener síndico o auditor obligatoriamente. Las SRL y SAS pueden requerirlo según su estatuto o por exigencia de terceros (bancos, inversores, etc.). Además, algunas actividades reguladas lo exigen."
            },
            {
              pregunta: "¿Qué tipos de certificaciones especiales emiten?",
              respuesta: "Emitimos certificaciones para entidades bancarias, organismos de control, origen y destino de fondos, certificaciones de ventas, y otros informes especiales requeridos por terceros, todos bajo las normas contables profesionales vigentes."
            }
          ]
        }
      },
      {
        id: "societario",
        nombre: "Societario",
        descripcion: "Constitución de sociedades ante IGJ, presentación de estados contables y modificaciones societarias.",
        icono: "FaBuilding",
        detalles: {
          descripcionLarga: "Te acompañamos en todo lo relacionado con la gestión societaria de tu empresa. Desde la constitución de sociedades ante la IGJ (SA, SRL, SAU, entre otras) hasta la presentación de estados contables y la tramitación de modificaciones societarias. Nos encargamos de todos los trámites administrativos y legales para que tu sociedad funcione en regla.",
          incluye: [
            "Constitución de sociedades ante IGJ (SA, SRL, SAU, etc.)",
            "Presentación de estados contables ante IGJ",
            "Modificaciones de sociedades (cambio de objeto, aumento de capital, cambio de domicilio, etc.)"
          ],
          faqs: [
            {
              pregunta: "¿Qué tipo de sociedad me conviene constituir?",
              respuesta: "Depende de varios factores: cantidad de socios, capital disponible, responsabilidad patrimonial deseada y costos de mantenimiento. Las SRL ofrecen flexibilidad, las SA son ideales para grandes empresas o si pensás incorporar inversores, y las SAU permiten un único socio con responsabilidad limitada."
            },
            {
              pregunta: "¿Cuánto tiempo lleva constituir una sociedad ante IGJ?",
              respuesta: "Los plazos varían según el tipo societario y la carga de trabajo de la IGJ. Generalmente puede demorar entre 30 y 60 días, dependiendo de la completitud de la documentación presentada."
            },
            {
              pregunta: "¿Qué modificaciones societarias pueden tramitar?",
              respuesta: "Tramitamos todo tipo de modificaciones: cambio de objeto social, aumento de capital, cambio de domicilio, cambio de autoridades, fusiones, escisiones, y cualquier otra modificación que requiera inscripción ante la IGJ."
            }
          ]
        }
      },
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SECCIÓN: EQUIPO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  equipo: {
    titulo: "Nuestro Equipo",
    subtitulo: "Profesionales comprometidos con la excelencia y la actualización permanente.",
    miembros: [
      {
        nombre: "Cr. Horacio Grande",
        cargo: "Director / Socio Fundador",
        descripcion: "Contador Público y Licenciado en Administración (UADE). Más de 30 años de experiencia en asesoramiento contable y tributario. Especialista en planificación fiscal y reorganización empresarial.",
        foto: "/images/equipo/horacio-grande.jpg",
        linkedin: "https://linkedin.com/in/horacio-grande"
      },
      {
        nombre: "Cr. Leonardo Wacs",
        cargo: "Director / Socio Fundador",
        descripcion: "Contador Público (UBA). Especialista en auditoría y estados contables. Más de 25 años acompañando el crecimiento de PyMEs y grandes empresas.",
        foto: "",
        linkedin: "https://linkedin.com/in/leonardo-wacs"
      },
    ]
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // SECCIÓN: CONTACTO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  contacto: {
    titulo: "Contactanos",
    subtitulo: "Estamos para ayudarte. Escribinos o acercate al estudio.",
    textoWhatsapp: "Envianos un WhatsApp",
    textoEmail: "Escribinos un email",
    mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878493973!2d-58.38375908477063!3d-34.60373098045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf7296f4d9%3A0x8b0e6f1b5e6a5e6a!2sAv.%20Corrientes%201257%2C%20CABA!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
  }
};
