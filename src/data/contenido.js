export const contenido = {

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // DATOS GENERALES DEL ESTUDIO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  estudio: {
    nombre: "Estudio Contable Grande & Asociados",
    slogan: "Soluciones contables a tu medida",
    descripcionCorta: "Más de 30 años acompañando a empresas y particulares con servicios contables, impositivos y de asesoría integral.",
    telefono: "+54 11 4567-8900",
    email: "info@estudiogrande.com.ar",
    direccion: "Av. Corrientes 1234, Piso 5, CABA, Argentina",
    horario: "Lunes a Viernes de 9:00 a 18:00 hs",
    googleMapsUrl: "https://maps.google.com/?q=Av.+Corrientes+1234+CABA",
    redesSociales: {
      instagram: "https://instagram.com/estudiogrande",
      linkedin: "https://linkedin.com/company/estudio-grande",
      whatsapp: "https://wa.me/541145678900",
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
        descripcion: "Equipo actualizado en normativa contable e impositiva vigente. Capacitación continua para brindar el mejor servicio." 
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
        descripcion: "Registración contable, confección de balances y estados contables para sociedades y personas físicas.",
        icono: "FaCalculator",
        detalles: {
          descripcionLarga: "Brindamos servicios integrales de contabilidad general para todo tipo de organizaciones. Nos encargamos de la registración diaria de operaciones, conciliaciones bancarias, y la preparación de estados contables mensuales, trimestrales y anuales. Nuestro equipo garantiza el cumplimiento de las normas contables profesionales vigentes y proporciona información financiera confiable para la toma de decisiones.",
          incluye: [
            "Registración contable de todas las operaciones comerciales",
            "Confección de balances mensuales, trimestrales y anuales",
            "Estados contables bajo normas argentinas e internacionales (IFRS)",
            "Conciliaciones bancarias y de cuentas",
            "Control de cuentas por cobrar y por pagar",
            "Análisis de costos y márgenes de rentabilidad",
            "Informes gerenciales personalizados",
            "Asesoramiento en interpretación de estados contables"
          ],
          faqs: [
            {
              pregunta: "¿Con qué frecuencia se actualizan los registros contables?",
              respuesta: "Actualizamos los registros contables de forma mensual como mínimo. Para clientes con mayor volumen de operaciones, podemos ofrecer actualizaciones semanales o incluso diarias según la necesidad."
            },
            {
              pregunta: "¿Qué normas contables utilizan para preparar los estados contables?",
              respuesta: "Preparamos los estados contables siguiendo las Normas Contables Profesionales Argentinas (RT). Para empresas que lo requieran, también podemos aplicar Normas Internacionales de Información Financiera (NIIF/IFRS)."
            },
            {
              pregunta: "¿Entregan informes gerenciales además de los estados contables?",
              respuesta: "Sí, además de los estados contables obligatorios, preparamos informes gerenciales personalizados con análisis de rentabilidad, flujo de caja, evolución de ventas, costos y otros indicadores clave para la gestión del negocio."
            }
          ]
        }
      },
      {
        id: "liquidacion-impuestos",
        nombre: "Liquidación de Impuestos",
        descripcion: "Determinación y presentación de impuestos nacionales, provinciales y municipales (IVA, Ganancias, IIBB, Monotributo).",
        icono: "FaFileInvoiceDollar",
        detalles: {
          descripcionLarga: "Nos especializamos en la gestión integral de todas las obligaciones impositivas de nuestros clientes. Realizamos el cálculo preciso de impuestos, preparamos y presentamos declaraciones juradas en tiempo y forma, y brindamos asesoramiento continuo sobre el cumplimiento de las normativas tributarias vigentes. Nuestro objetivo es optimizar la carga fiscal dentro del marco legal.",
          incluye: [
            "Liquidación mensual de IVA (Impuesto al Valor Agregado)",
            "Determinación anual de Impuesto a las Ganancias",
            "Liquidación de Ingresos Brutos provinciales",
            "Gestión de regímenes de retención y percepción",
            "Presentación de declaraciones juradas mensuales y anuales",
            "Adhesión y gestión del Monotributo",
            "Liquidación de impuestos municipales (TISH, Patentes, ABL)",
            "Planificación fiscal y optimización de la carga tributaria",
            "Asesoramiento ante fiscalizaciones de AFIP, ARBA y Municipios"
          ],
          faqs: [
            {
              pregunta: "¿Qué impuestos están incluidos en el servicio?",
              respuesta: "Gestionamos todos los impuestos aplicables a tu actividad: IVA, Ganancias, Ingresos Brutos (IIBB), Monotributo, impuestos municipales, regímenes de información, y cualquier otro tributo específico de tu sector."
            },
            {
              pregunta: "¿Cómo aseguran el cumplimiento de los vencimientos?",
              respuesta: "Mantenemos un calendario tributario actualizado y contactamos a nuestros clientes con anticipación a cada vencimiento. Además, gestionamos las presentaciones electrónicas y archivamos comprobantes de pago para futuras auditorías."
            },
            {
              pregunta: "¿Qué sucede si tengo una fiscalización de AFIP?",
              respuesta: "Te acompañamos durante todo el proceso de fiscalización. Preparamos la documentación requerida, representamos tus intereses ante el organismo y elaboramos estrategias de defensa en caso de observaciones o ajustes propuestos."
            }
          ]
        }
      },
      {
        id: "liquidacion-sueldos",
        nombre: "Liquidación de Sueldos",
        descripcion: "Cálculo de haberes, cargas sociales, libro de sueldos digital y asesoramiento laboral completo.",
        icono: "FaUsers",
        detalles: {
          descripcionLarga: "Gestionamos de manera integral la liquidación de sueldos de tu empresa, asegurando el cumplimiento de todas las normativas laborales vigentes. Desde el cálculo preciso de haberes hasta la gestión de aportes y contribuciones, nos encargamos de todos los aspectos de la administración de recursos humanos desde el punto de vista contable y legal.",
          incluye: [
            "Liquidación mensual de sueldos y jornales",
            "Cálculo de horas extras, adicionales y bonificaciones",
            "Determinación de cargas sociales (aportes y contribuciones)",
            "Confección de recibos de sueldo digitales",
            "Libro de sueldos digital (según normativa vigente)",
            "Liquidaciones finales por despido, renuncia o jubilación",
            "Cálculo de aguinaldos (SAC) y vacaciones",
            "Declaraciones juradas AFIP (SICOSS, F.931)",
            "Gestión de ART y obras sociales",
            "Asesoramiento en convenios colectivos de trabajo"
          ],
          faqs: [
            {
              pregunta: "¿Incluye el servicio la emisión de recibos de sueldo digitales?",
              respuesta: "Sí, emitimos recibos de sueldo digitales con firma electrónica de acuerdo a la normativa vigente. Los empleados pueden acceder a ellos de forma segura y descargarlos cuando lo necesiten."
            },
            {
              pregunta: "¿Cómo se calculan las cargas sociales?",
              respuesta: "Calculamos todos los aportes (a cargo del empleado) y contribuciones (a cargo del empleador) según las alícuotas vigentes para cada caso: jubilación, obra social, ART, sindicato, etc. Luego generamos las declaraciones juradas correspondientes para AFIP."
            },
            {
              pregunta: "¿Qué pasa si tengo empleados bajo diferentes convenios colectivos?",
              respuesta: "Estamos capacitados para liquidar sueldos bajo diferentes convenios colectivos de trabajo. Conocemos las particularidades de cada sector y aplicamos correctamente los adicionales, escalas salariales y normativas específicas."
            }
          ]
        }
      },
      {
        id: "asesoria-impositiva",
        nombre: "Asesoría Impositiva",
        descripcion: "Planificación fiscal, optimización de carga tributaria y consultoría permanente en materia impositiva.",
        icono: "FaChartLine",
        detalles: {
          descripcionLarga: "Brindamos asesoramiento estratégico en materia impositiva para ayudarte a tomar decisiones informadas que optimicen tu carga tributaria dentro del marco legal. Analizamos tu situación particular, identificamos oportunidades de ahorro fiscal y diseñamos estrategias de planificación tributaria a corto y largo plazo.",
          incluye: [
            "Análisis de la situación fiscal actual de la empresa o persona",
            "Planificación tributaria anual y plurianual",
            "Optimización de la carga impositiva (tax planning)",
            "Asesoramiento en elección del tipo societario más conveniente",
            "Análisis de impacto fiscal de operaciones comerciales",
            "Consultoría en reorganización empresarial",
            "Asesoramiento en beneficios fiscales y regímenes de promoción",
            "Respuesta a consultas impositivas diarias",
            "Actualización permanente sobre cambios normativos",
            "Prevención de contingencias fiscales"
          ],
          faqs: [
            {
              pregunta: "¿Qué es la planificación fiscal y por qué es importante?",
              respuesta: "La planificación fiscal consiste en organizar tus operaciones económicas de manera que puedas minimizar legalmente la carga tributaria. Es importante porque te permite ahorrar dinero en impuestos, prever obligaciones futuras y evitar sorpresas desagradables."
            },
            {
              pregunta: "¿Pueden ayudarme a elegir entre ser monotributista o responsable inscripto?",
              respuesta: "Absolutamente. Analizamos tu facturación, tipo de actividad, costos y proyección de crecimiento para determinar qué régimen es más conveniente. También te asesoramos sobre el momento adecuado para cambiar de categoría."
            },
            {
              pregunta: "¿Ofrecen asesoramiento sobre regímenes de promoción industrial?",
              respuesta: "Sí, te orientamos sobre la existencia de regímenes de promoción económica aplicables a tu actividad (como promoción industrial, economías regionales, PyMEs, etc.) y te asistimos en la tramitación de los beneficios fiscales correspondientes."
            }
          ]
        }
      },
      {
        id: "constitucion-sociedades",
        nombre: "Constitución de Sociedades",
        descripcion: "Armado y gestión de trámites para SAS, SRL y SA ante IGJ y organismos pertinentes.",
        icono: "FaBuilding",
        detalles: {
          descripcionLarga: "Te acompañamos en todo el proceso de constitución de sociedades comerciales. Desde el asesoramiento inicial sobre el tipo societario más conveniente hasta la inscripción definitiva ante los organismos de control. Nos encargamos de todos los trámites administrativos, legales y contables necesarios para que tu empresa inicie sus actividades de forma ordenada y cumpliendo con todas las normativas vigentes.",
          incluye: [
            "Asesoramiento sobre el tipo societario más conveniente (SAS, SRL, SA)",
            "Redacción de estatutos sociales",
            "Obtención de CUIT societaria",
            "Inscripción ante IGJ (Inspección General de Justicia)",
            "Inscripción en AFIP, Ingresos Brutos y Municipalidad",
            "Apertura de libros societarios y contables",
            "Confección de actas constitutivas",
            "Trámites de habilitación comercial",
            "Asesoramiento en modificaciones de estatuto",
            "Gestión de aumento de capital social"
          ],
          faqs: [
            {
              pregunta: "¿Qué tipo de sociedad me conviene constituir?",
              respuesta: "Depende de varios factores: cantidad de socios, capital disponible, responsabilidad patrimonial deseada y costos de mantenimiento. Las SAS son más ágiles y económicas, las SRL ofrecen mayor flexibilidad, y las SA son ideales para grandes empresas o si pensás incorporar inversores."
            },
            {
              pregunta: "¿Cuánto tiempo lleva constituir una sociedad?",
              respuesta: "Una SAS puede estar operativa en aproximadamente 7-10 días hábiles. Las SRL y SA pueden demorar entre 30 y 60 días, dependiendo de la carga de trabajo de la IGJ y la completitud de la documentación presentada."
            },
            {
              pregunta: "¿Qué documentación necesito para iniciar el trámite?",
              respuesta: "Necesitarás DNI de todos los socios, CUIT/CUIL, comprobantes de domicilio, y definir: objeto social, capital inicial, porcentajes de participación y autoridades de la sociedad. Nosotros te guiamos paso a paso en todo el proceso."
            }
          ]
        }
      },
      {
        id: "auditoria",
        nombre: "Auditoría",
        descripcion: "Auditoría de estados contables, certificaciones e informes especiales bajo normas profesionales.",
        icono: "FaSearchDollar",
        detalles: {
          descripcionLarga: "Realizamos auditorías de estados contables bajo normas nacionales e internacionales. Nuestro equipo de auditores certificados examina la información financiera de tu empresa para emitir opiniones profesionales sobre su razonabilidad. También preparamos certificaciones especiales e informes requeridos por bancos, organismos de control o terceros interesados.",
          incluye: [
            "Auditoría de estados contables anuales",
            "Revisión limitada de estados contables intermedios",
            "Certificaciones para entidades bancarias",
            "Informes especiales sobre rubros específicos",
            "Auditoría de cumplimiento normativo",
            "Due diligence contable para compraventa de empresas",
            "Certificación de ventas para concesionarias",
            "Informes de auditoría interna",
            "Certificaciones de origen y destino de fondos",
            "Auditorías solicitadas por organismos de control"
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
              pregunta: "¿Qué diferencia hay entre auditoría externa e interna?",
              respuesta: "La auditoría externa es realizada por profesionales independientes para dar fe pública de los estados contables. La auditoría interna es un servicio para la gestión de la empresa, enfocado en evaluar controles internos, eficiencia operativa y cumplimiento de políticas."
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
        descripcion: "Contador Público (UBA). Más de 30 años de experiencia en asesoramiento contable e impositivo. Especialista en planificación fiscal y reorganización empresarial.",
        foto: "/images/equipo/persona-1.jpg",
        linkedin: "https://linkedin.com/in/horacio-grande"
      },
      {
        nombre: "Cr. Leonardo Wacs",
        cargo: "Director / Socio Fundador",
        descripcion: "Contador Público (UBA). Especialista en auditoría y estados contables. Más de 25 años acompañando el crecimiento de PyMEs y grandes empresas.",
        foto: "/images/equipo/persona-2.jpg",
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
    mapaEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878493973!2d-58.38375908477063!3d-34.60373098045943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacf7296f4d9%3A0x8b0e6f1b5e6a5e6a!2sAv.%20Corrientes%201234%2C%20C1043%20CABA!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
  }
};
