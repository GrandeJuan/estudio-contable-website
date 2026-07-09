// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// GUÍAS / BLOG — Contenido centralizado
// Igual que contenido.js: TODO el contenido de las guías vive acá.
//
// ⚠️ IMPORTANTE (estudio contable — precisión fiscal):
//   Estos artículos son BORRADORES pendientes de validación de los contadores.
//   Las cifras y fechas fiscales fueron investigadas con fuente citada inline
//   (campo `fuentes` de cada guía). Donde un dato no se pudo verificar con
//   confianza, quedó un marcador visible:  [⚠️ VERIFICAR CON CONTADOR: ...]
//   Antes de publicar, un socio matriculado debe revisar y confirmar los números.
//
// Modelo del cuerpo (`cuerpo`): array de bloques tipados que GuiaPage.jsx sabe
// renderizar. Tipos soportados:
//   { tipo: 'parrafo',   texto }
//   { tipo: 'subtitulo', texto }                      → <h2>
//   { tipo: 'lista',     items: [] }                  → <ul>
//   { tipo: 'pasos',     items: [] }                  → <ol> numerada
//   { tipo: 'tabla',     encabezados: [], filas: [[]] }
//   { tipo: 'nota',      texto, variante?: 'info'|'alerta' }  → callout
//   { tipo: 'cta',       texto, servicioId }          → enlace interno al servicio
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Datos de autores (reusan los nombres reales del equipo en contenido.js).
// matricula: se deja null hasta que el socio aporte el N° de matrícula CPCECABA
// (suma E-E-A-T). NUNCA inventar una matrícula.
const AUTORES = {
  horacio: { nombre: 'Cr. Horacio Grande', cargo: 'Contador Público', matricula: null },
  leonardo: { nombre: 'Cr. Leonardo Wacs', cargo: 'Contador Público', matricula: null },
};

export const guiasMeta = {
  titulo: 'Guías contables e impositivas',
  subtitulo:
    'Guías prácticas y actualizadas sobre monotributo, impuestos, honorarios y sociedades en Argentina. Escritas por el equipo de Grande & Asociados para PyMEs, comercios y monotributistas de CABA.',
};

// Disclaimer común a todas las guías (se muestra al pie de cada artículo).
export const disclaimerGuias =
  'Esta guía tiene fines informativos y orientativos. No reemplaza el asesoramiento profesional personalizado. La normativa fiscal argentina cambia con frecuencia: verificá los datos vigentes en los canales oficiales (ARCA, IGJ, CPCECABA) o consultanos antes de tomar decisiones.';

export const guias = [
  // ══════════════════════════════════════════════════════════════════════════
  // GUÍA 1 — Recategorización de Monotributo julio 2026 (estacional, prioritaria)
  // ══════════════════════════════════════════════════════════════════════════
  {
    slug: 'recategorizacion-monotributo-julio-2026',
    titulo: 'Recategorización de Monotributo julio 2026: guía paso a paso',
    h1: 'Recategorización de Monotributo julio 2026: guía paso a paso',
    seoTitle:
      'Recategorización Monotributo Julio 2026: guía paso a paso (ARCA) | Grande & Asociados',
    seoDescription:
      'Cómo recategorizar el monotributo en julio 2026 ante ARCA: fechas (15/7 al 5/8), qué datos reunir, el paso a paso en el portal y qué pasa si no lo hacés. Guía de contadores.',
    resumen:
      'La recategorización de monotributo de julio 2026 va del 15 de julio al 5 de agosto. Te explicamos qué revisar, cómo hacer el trámite en el portal de ARCA paso a paso y qué pasa si no recategorizás.',
    categoria: 'Monotributo',
    autor: AUTORES.horacio,
    fechaPublicacion: '2026-07-09',
    fechaActualizacion: '2026-07-09',
    servicioRelacionadoId: 'liquidacion-impuestos',
    // HowTo opcional: pasos del trámite (para schema.org HowTo).
    howTo: {
      nombre: 'Cómo recategorizar el monotributo en el portal de ARCA',
      pasos: [
        'Ingresá al portal Monotributo de ARCA con tu CUIT y Clave Fiscal.',
        'Hacé clic en la opción "Recategorizarme".',
        'Revisá los datos que el sistema muestra y cargá tu facturación real de los últimos 12 meses, junto con energía eléctrica y alquileres devengados.',
        'Confirmá la nueva categoría que sugiere el sistema si tus datos son correctos.',
        'Descargá la credencial de pago actualizada con el nuevo importe.',
      ],
    },
    fuentes: [
      'Fechas de recategorización (15/7 al 5/8/2026) y parámetros: ARCA / medios especializados (ámbito, Diario de Cuyo, Río Negro), consultados 2026-07-09.',
      'Tabla de categorías (vigente desde 1/02/2026): sitio oficial ARCA — afip.gob.ar/monotributo/categorias.asp, consultado 2026-07-09.',
    ],
    cuerpo: [
      {
        tipo: 'parrafo',
        texto:
          'La recategorización de monotributo de julio 2026 se realiza entre el 15 de julio y el 5 de agosto de 2026 inclusive, a través del portal de ARCA (ex-AFIP). Es un trámite semestral (enero y julio) en el que revisás si tu situación cambió y, de ser necesario, actualizás tu categoría. En esta guía te contamos qué mirar, cómo hacerlo paso a paso y qué pasa si te olvidás.',
      },
      { tipo: 'subtitulo', texto: '¿Qué es la recategorización y por qué importa?' },
      {
        tipo: 'parrafo',
        texto:
          'El monotributo es un régimen simplificado en el que pagás una cuota fija mensual según la categoría en la que estés. Dos veces al año, ARCA te pide revisar si seguís encuadrado correctamente. Si tu actividad creció (o se redujo), tenés que moverte de categoría. Recategorizarse a tiempo evita deudas, intereses y una eventual recategorización de oficio.',
      },
      {
        tipo: 'nota',
        variante: 'info',
        texto:
          'La recategorización NO es lo mismo que la baja ni que el pago mensual. Es solo la revisión semestral de tu categoría. Si ninguno de tus parámetros cambió respecto de tu última categoría, no necesitás hacer nada (pero conviene verificarlo).',
      },
      { tipo: 'subtitulo', texto: 'Fechas clave de julio 2026' },
      {
        tipo: 'lista',
        items: [
          'Inicio del período de recategorización: 15 de julio de 2026.',
          'Fecha límite: 5 de agosto de 2026 inclusive.',
          'Período que se evalúa: los 12 meses anteriores, es decir de julio de 2025 a junio de 2026.',
        ],
      },
      { tipo: 'subtitulo', texto: 'Qué datos tenés que reunir antes de empezar' },
      {
        tipo: 'parrafo',
        texto:
          'ARCA analiza cuatro parámetros de los últimos 12 meses. Tené a mano esta información para hacer el trámite sin errores:',
      },
      {
        tipo: 'lista',
        items: [
          'Ingresos brutos facturados en los últimos 12 meses (el parámetro principal).',
          'Superficie afectada a la actividad (metros cuadrados del local).',
          'Energía eléctrica consumida en los últimos 12 meses (kW, según tus facturas).',
          'Alquileres devengados en los últimos 12 meses (si alquilás el local).',
        ],
      },
      { tipo: 'subtitulo', texto: 'Paso a paso en el portal de ARCA' },
      {
        tipo: 'pasos',
        items: [
          'Ingresá al portal Monotributo de ARCA con tu CUIT y Clave Fiscal.',
          'Hacé clic en la opción "Recategorizarme".',
          'Revisá los datos que el sistema muestra automáticamente.',
          'Cargá tu facturación real de los últimos 12 meses, junto con energía eléctrica y alquileres.',
          'El sistema te sugerirá la categoría que corresponde: si tus datos son correctos, confirmá la declaración.',
          'Descargá la nueva credencial de pago con el importe actualizado.',
        ],
      },
      { tipo: 'subtitulo', texto: 'Categorías del monotributo vigentes' },
      {
        tipo: 'parrafo',
        texto:
          'Esta es la escala de categorías vigente desde el 1 de febrero de 2026, según ARCA. Compará tu facturación de los últimos 12 meses con el tope de ingresos brutos anuales para saber qué categoría te corresponde. La cuota total incluye el impuesto integrado más los aportes jubilatorios y de obra social.',
      },
      {
        tipo: 'tabla',
        encabezados: ['Categoría', 'Tope de ingresos brutos (anual)', 'Cuota mensual total'],
        filas: [
          ['A', '$10.277.988,13', '$42.386,74'],
          ['B', '$15.058.447,71', '$48.250,78'],
          ['C', '$21.113.696,52', '$55.227,06'],
          ['D', '$26.212.853,42', '$70.661,26'],
          ['E', '$30.833.964,37', '$92.658,35'],
          ['F', '$38.642.048,36', '$111.198,27'],
          ['G', '$46.211.109,37', '$135.918,34'],
          ['H', '$70.113.407,33', '$272.063,40'],
          ['I', '$78.479.211,62', '$406.512,05'],
          ['J', '$89.872.640,30', '$497.059,41'],
          ['K', '$108.357.084,05', '$600.879,51'],
        ],
      },
      {
        tipo: 'nota',
        variante: 'alerta',
        texto:
          'Valores de la escala vigente desde el 1/02/2026 (fuente: sitio oficial ARCA, consultado el 9/7/2026). ARCA suele actualizar los topes y las cuotas a mitad de año: [⚠️ VERIFICAR CON CONTADOR: confirmar si al momento de la recategorización de julio 2026 rige una escala actualizada y, en ese caso, reemplazar los importes de la tabla]. Los importes de las categorías C a K difieren para servicios y venta de bienes; la tabla muestra un valor de referencia. Además, la categoría A y ciertos casos pueden tener condiciones especiales de aportes.',
      },
      { tipo: 'subtitulo', texto: '¿Qué pasa si no recategorizo?' },
      {
        tipo: 'parrafo',
        texto:
          'Si estabas obligado a cambiar de categoría y no lo hacés dentro del plazo, ARCA puede recategorizarte de oficio, ubicándote en la categoría que considere según la información que tiene. Esto puede derivar en diferencias de cuota, deuda acumulada e intereses. Por eso conviene revisar tus números aunque creas que no cambió nada.',
      },
      {
        tipo: 'cta',
        texto:
          '¿No querés ocuparte del trámite o tenés dudas sobre qué categoría te corresponde? Nosotros gestionamos tu recategorización y el seguimiento de tus vencimientos.',
        servicioId: 'liquidacion-impuestos',
      },
    ],
    faqs: [
      {
        pregunta: '¿Hasta cuándo tengo tiempo para recategorizarme en julio 2026?',
        respuesta:
          'El plazo va del 15 de julio al 5 de agosto de 2026 inclusive. Conviene no dejarlo para el último día para evitar demoras del sistema.',
      },
      {
        pregunta: '¿Tengo que recategorizarme siempre?',
        respuesta:
          'No. Solo estás obligado a recategorizarte si cambió alguno de los parámetros (ingresos, superficie, energía o alquileres) respecto de tu categoría actual. Si nada cambió, mantenés tu categoría. De todos modos, se recomienda revisar los números cada semestre.',
      },
      {
        pregunta: '¿Qué período de facturación se toma en cuenta?',
        respuesta:
          'Se evalúan los últimos 12 meses anteriores al trámite: para la recategorización de julio 2026, el período de julio de 2025 a junio de 2026.',
      },
      {
        pregunta: '¿Qué pasa si me pasé del tope de la categoría más alta?',
        respuesta:
          'Si superaste el tope de ingresos de la categoría K (la más alta), podrías quedar excluido del monotributo y tener que pasar al Régimen General (Responsable Inscripto). Es un caso que conviene analizar con un contador para evaluar el mejor encuadre.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GUÍA 2 — Cuánto cobra un contador en 2026 / honorarios
  // ══════════════════════════════════════════════════════════════════════════
  {
    slug: 'cuanto-cobra-un-contador-2026-honorarios',
    titulo: '¿Cuánto cobra un contador en 2026? Guía de honorarios en CABA',
    h1: '¿Cuánto cobra un contador en 2026? Guía de honorarios en CABA',
    seoTitle:
      '¿Cuánto cobra un contador en 2026? Honorarios en CABA | Grande & Asociados',
    seoDescription:
      'De qué depende el honorario de un contador en 2026, honorarios de referencia del CPCECABA por tarea (monotributo, sueldos, balances, sociedades) y qué incluye un abono mensual.',
    resumen:
      'El honorario de un contador depende de la complejidad de tu situación fiscal y del tipo de tarea. Te mostramos los valores de referencia del CPCECABA en 2026 y qué incluye un abono mensual.',
    categoria: 'Honorarios',
    autor: AUTORES.horacio,
    fechaPublicacion: '2026-07-09',
    fechaActualizacion: '2026-07-09',
    servicioRelacionadoId: 'contabilidad-general',
    fuentes: [
      'Honorarios de referencia y valor del módulo: Consejo Profesional de Ciencias Económicas de CABA (CPCECABA) y medios especializados (iProfesional, contadoresenred), consultados 2026-07-09.',
    ],
    cuerpo: [
      {
        tipo: 'parrafo',
        texto:
          'El honorario de un contador en 2026 depende de la complejidad de tu situación fiscal, el tipo de tarea (una recategorización puntual no es lo mismo que llevar la contabilidad completa de una empresa) y la periodicidad del servicio. Como referencia, los Consejos Profesionales publican honorarios mínimos sugeridos, que sirven de orientación pero no son obligatorios: cada profesional fija su precio.',
      },
      {
        tipo: 'nota',
        variante: 'info',
        texto:
          'Los honorarios sugeridos por el CPCECABA (Consejo Profesional de Ciencias Económicas de CABA) son valores indicativos, no obligatorios. El precio final varía según la complejidad del caso, el volumen de operaciones y si hay personal en relación de dependencia.',
      },
      { tipo: 'subtitulo', texto: '¿De qué depende el honorario?' },
      {
        tipo: 'lista',
        items: [
          'El tipo de contribuyente: monotributista, Responsable Inscripto o sociedad.',
          'El volumen de operaciones y la cantidad de comprobantes a registrar.',
          'Si tenés empleados (la liquidación de sueldos suma honorarios por cada empleado).',
          'La periodicidad: una tarea puntual vs. un abono mensual continuo.',
          'La complejidad: cantidad de impuestos, jurisdicciones (nacional, provincial, municipal) y regímenes de información.',
        ],
      },
      { tipo: 'subtitulo', texto: 'Honorarios de referencia 2026 (CPCECABA)' },
      {
        tipo: 'parrafo',
        texto:
          'A modo de orientación, estos son valores de referencia informados para CABA en 2026. Tomalos como una guía aproximada: el valor real depende de tu caso concreto.',
      },
      {
        tipo: 'tabla',
        encabezados: ['Tarea', 'Honorario de referencia (orientativo)'],
        filas: [
          ['Recategorización de monotributo — complejidad baja', '$75.420'],
          ['Recategorización de monotributo — complejidad media', '$100.560'],
          ['Recategorización de monotributo — complejidad alta', '$125.700'],
          ['Liquidación de sueldos por empleado', '[⚠️ VERIFICAR CON CONTADOR: valor por empleado]'],
          ['Confección de balance / estados contables', '[⚠️ VERIFICAR CON CONTADOR: según envergadura del ente]'],
          ['Constitución de sociedad', '[⚠️ VERIFICAR CON CONTADOR: según tipo societario]'],
        ],
      },
      {
        tipo: 'nota',
        variante: 'alerta',
        texto:
          'Los valores de recategorización de monotributo corresponden a referencias informadas para CABA a comienzos de 2026 (fuente: iProfesional / contadoresenred). El valor del módulo de honorarios mínimos del CPCECABA se actualiza periódicamente. [⚠️ VERIFICAR CON CONTADOR: confirmar el valor del módulo vigente y los honorarios por sueldos, balances y sociedades antes de publicar]. No publicar estos números como tarifa del estudio sin la validación de un socio.',
      },
      { tipo: 'subtitulo', texto: '¿Qué incluye un abono mensual?' },
      {
        tipo: 'parrafo',
        texto:
          'Muchos contribuyentes prefieren un abono mensual en lugar de pagar tarea por tarea. Un abono típico para un monotributista o una PyME chica suele cubrir:',
      },
      {
        tipo: 'lista',
        items: [
          'Control y presentación mensual de impuestos y del monotributo.',
          'Las recategorizaciones de enero y julio.',
          'Seguimiento de vencimientos y avisos para no pagar multas.',
          'Consultas contables e impositivas del día a día.',
          'Si hay personal, la liquidación de sueldos y cargas sociales (suele cotizarse aparte según cantidad de empleados).',
        ],
      },
      {
        tipo: 'parrafo',
        texto:
          'La ventaja del abono es la previsibilidad: sabés cuánto pagás por mes y tenés acompañamiento continuo en lugar de resolver todo a las apuradas antes de cada vencimiento.',
      },
      {
        tipo: 'cta',
        texto:
          '¿Querés un presupuesto para tu caso concreto? Contanos tu situación (monotributo, RI o sociedad, si tenés empleados) y armamos una propuesta a tu medida, sin compromiso.',
        servicioId: 'contabilidad-general',
      },
    ],
    faqs: [
      {
        pregunta: '¿Los honorarios del contador son fijos o negociables?',
        respuesta:
          'Los honorarios sugeridos por el Consejo Profesional son una referencia, no una tarifa obligatoria. Cada estudio fija su precio según la complejidad y el volumen de trabajo. Siempre conviene pedir un presupuesto detallado.',
      },
      {
        pregunta: '¿Conviene un abono mensual o pagar por tarea?',
        respuesta:
          'Depende de tu actividad. Si tenés obligaciones mensuales (impuestos, sueldos, seguimiento de vencimientos), el abono suele ser más conveniente y previsible. Para una gestión puntual y aislada, puede convenir pagar por esa tarea específica.',
      },
      {
        pregunta: '¿El honorario incluye lo que hay que pagar de impuestos?',
        respuesta:
          'No. El honorario es lo que cobra el contador por su trabajo profesional. Es distinto de los impuestos, la cuota del monotributo o las cargas sociales, que se pagan a los organismos (ARCA, rentas provinciales, etc.).',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GUÍA 3 — SAS, SRL o SA: cuál conviene en 2026
  // ══════════════════════════════════════════════════════════════════════════
  {
    slug: 'sas-srl-sa-cual-conviene-2026',
    titulo: 'SAS, SRL o SA: qué sociedad te conviene en 2026',
    h1: 'SAS, SRL o SA: qué sociedad te conviene en 2026',
    seoTitle:
      'SAS, SRL o SA: cuál conviene en 2026 (comparación y costos) | Grande & Asociados',
    seoDescription:
      'Comparación de SAS, SRL y SA en 2026: socios, capital mínimo, costos, responsabilidad y obligaciones. Cuál conviene según tu proyecto, explicado por contadores en CABA.',
    resumen:
      'SAS, SRL o SA: cada tipo societario tiene ventajas según tu proyecto. Comparamos socios, capital, costos y responsabilidad para ayudarte a elegir la sociedad que más te conviene en 2026.',
    categoria: 'Sociedades',
    autor: AUTORES.leonardo,
    fechaPublicacion: '2026-07-09',
    fechaActualizacion: '2026-07-09',
    servicioRelacionadoId: 'societario',
    fuentes: [
      'Capital mínimo de SA ($30.000.000, Decreto 209/2024): argentina.gob.ar / CPCECABA, consultado 2026-07-09.',
      'Diferencias estructurales SAS/SRL/SA: Ley General de Sociedades 19.550, régimen SAS (Ley 27.349) e IGJ.',
    ],
    cuerpo: [
      {
        tipo: 'parrafo',
        texto:
          'No hay una sociedad "mejor" en abstracto: la que te conviene depende de cuántos socios sean, cuánto capital tengas, qué nivel de formalidad necesites y si pensás incorporar inversores. En Argentina, los tres tipos más usados por PyMEs y emprendedores son la SAS, la SRL y la SA. Abajo los comparamos y te decimos cuándo elegir cada uno.',
      },
      { tipo: 'subtitulo', texto: 'Comparación rápida: SAS vs SRL vs SA' },
      {
        tipo: 'tabla',
        encabezados: ['Aspecto', 'SAS', 'SRL', 'SA'],
        filas: [
          ['Socios mínimos', '1 (unipersonal)', '2', '1 (SAU) o 2+'],
          ['Responsabilidad de los socios', 'Limitada al capital aportado', 'Limitada al capital aportado', 'Limitada al capital aportado'],
          [
            'Capital mínimo',
            'Bajo (equivalente a 2 salarios mínimos aprox.)',
            'No hay mínimo legal fijo; debe ser razonable para el objeto',
            '$30.000.000 (Decreto 209/2024)',
          ],
          ['Constitución', '100% digital (TAD), más ágil', 'Ante IGJ, suele requerir escritura', 'Ante IGJ, más formal'],
          ['Velocidad de constitución', 'La más rápida', 'Intermedia', 'La más lenta'],
          ['Perfil típico', 'Emprendedores, startups, unipersonales', 'PyMEs y negocios familiares', 'Empresas grandes o con inversores'],
        ],
      },
      {
        tipo: 'nota',
        variante: 'alerta',
        texto:
          'El capital mínimo de la SA ($30.000.000) corresponde al Decreto 209/2024, vigente para constituciones desde el 1/03/2024 (fuente: argentina.gob.ar). El capital mínimo de la SAS se fija por referencia a salarios mínimos y se actualiza, por lo que conviene confirmar el monto vigente. [⚠️ VERIFICAR CON CONTADOR: confirmar capital mínimo de SAS vigente en 2026 y si hubo actualización del mínimo de SA]. Verificar también requisitos y plazos actuales de la IGJ, que cambian por resoluciones.',
      },
      { tipo: 'subtitulo', texto: '¿Cuándo conviene cada una?' },
      {
        tipo: 'lista',
        items: [
          'SAS: ideal para emprendedores individuales o startups que quieren limitar su responsabilidad y constituir rápido y con bajo costo. Se puede armar con un solo socio y trámite 100% digital.',
          'SRL: la opción más elegida por PyMEs, comercios y negocios familiares. Es simple de operar, muy aceptada por bancos y proveedores, y con costos de mantenimiento razonables. Requiere un mínimo de 2 socios.',
          'SA: pensada para empresas de mayor envergadura o que buscan incorporar inversores. Su estructura de acciones permite definir clases con distintos derechos, pero exige un capital mínimo alto y mayor formalidad.',
        ],
      },
      { tipo: 'subtitulo', texto: 'Costos de constitución' },
      {
        tipo: 'parrafo',
        texto:
          'El costo de constituir una sociedad varía mucho según el tipo societario, si interviene un escribano, los honorarios profesionales y las tasas de la IGJ. En general, la SAS es la más económica (por ser digital y no requerir escritura obligatoria), la SRL queda en un rango intermedio y la SA es la más cara. Como los montos cambian seguido, preferimos cotizarlos caso por caso en lugar de publicar cifras que queden desactualizadas.',
      },
      {
        tipo: 'nota',
        variante: 'alerta',
        texto:
          '[⚠️ VERIFICAR CON CONTADOR: los costos de constitución (tasas IGJ, honorarios, gastos de escribanía) varían por fuente y quedan desactualizados rápido. No publicar cifras específicas sin confirmar valores vigentes con el estudio.]',
      },
      {
        tipo: 'cta',
        texto:
          '¿No sabés qué sociedad elegir? Analizamos tu proyecto (cantidad de socios, actividad, planes de crecimiento) y te asesoramos sobre el tipo societario que más te conviene, y nos encargamos de la constitución ante la IGJ.',
        servicioId: 'societario',
      },
    ],
    faqs: [
      {
        pregunta: '¿Puedo constituir una sociedad con un solo socio?',
        respuesta:
          'Sí. La SAS permite un único socio (unipersonal). También existe la SAU (Sociedad Anónima Unipersonal), pero tiene los requisitos y el capital mínimo de una SA. La SRL, en cambio, exige un mínimo de dos socios.',
      },
      {
        pregunta: '¿Cuál es la sociedad más barata y rápida de constituir?',
        respuesta:
          'En general, la SAS: se constituye de forma 100% digital, no requiere escritura pública obligatoria y tiene un capital mínimo bajo, por lo que suele ser la opción más económica y ágil para emprendedores.',
      },
      {
        pregunta: '¿En todas limito mi responsabilidad al capital aportado?',
        respuesta:
          'En SAS, SRL y SA la responsabilidad de los socios está, en principio, limitada al capital que aportaron. Existen excepciones (por ejemplo, ciertas responsabilidades fiscales o laborales de administradores), por lo que conviene asesorarse sobre cada caso.',
      },
      {
        pregunta: '¿Puedo transformar mi sociedad más adelante?',
        respuesta:
          'Sí. Es posible transformar una sociedad de un tipo a otro (por ejemplo, de SAS a SRL o SA) cumpliendo el procedimiento ante la IGJ. También se pueden hacer modificaciones como aumento de capital o cambio de objeto.',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // GUÍA 4 — Calendario de vencimientos ARCA 2026
  // ══════════════════════════════════════════════════════════════════════════
  {
    slug: 'calendario-vencimientos-arca-2026',
    titulo: 'Calendario de vencimientos impositivos 2026 (ARCA)',
    h1: 'Calendario de vencimientos impositivos 2026 (ARCA)',
    seoTitle:
      'Calendario de vencimientos ARCA 2026: monotributo, IVA y más | Grande & Asociados',
    seoDescription:
      'Cómo funcionan los vencimientos impositivos 2026 de ARCA: monotributo, IVA, Ganancias y cargas sociales, según la terminación de tu CUIT. Guía práctica de contadores en CABA.',
    resumen:
      'Los vencimientos de ARCA se organizan por impuesto y por terminación de CUIT. Te explicamos cómo leer el calendario 2026 (monotributo, IVA, Ganancias, cargas sociales) y cómo no perderte una fecha.',
    categoria: 'Impuestos',
    autor: AUTORES.horacio,
    fechaPublicacion: '2026-07-09',
    fechaActualizacion: '2026-07-09',
    servicioRelacionadoId: 'liquidacion-impuestos',
    fuentes: [
      'Estructura de vencimientos (monotributo día 20, IVA por terminación de CUIT, Ganancias personas humanas en junio): ARCA / medios especializados (BBVA, calcularsueldo), consultado 2026-07-09.',
      'Calendario oficial y fechas exactas: argentina.gob.ar/arca/vencimientos.',
    ],
    cuerpo: [
      {
        tipo: 'parrafo',
        texto:
          'En 2026, los vencimientos impositivos de ARCA (ex-AFIP) se organizan por tipo de impuesto y, en muchos casos, por la terminación de tu CUIT. En esta guía te explicamos la lógica del calendario y las fechas típicas de los principales impuestos, para que sepas cuándo te toca y no acumules multas por olvidos.',
      },
      {
        tipo: 'nota',
        variante: 'alerta',
        texto:
          'Las fechas exactas de cada mes pueden variar y se trasladan al primer día hábil siguiente cuando caen sábado, domingo o feriado. [⚠️ VERIFICAR CON CONTADOR: no publicar una tabla mes por mes con fechas específicas sin cotejarla contra el calendario oficial de ARCA vigente. Esta guía describe la estructura general; las fechas puntuales deben confirmarse en argentina.gob.ar/arca/vencimientos].',
      },
      { tipo: 'subtitulo', texto: 'Monotributo' },
      {
        tipo: 'parrafo',
        texto:
          'La cuota del monotributo vence, en general, el día 20 de cada mes, para todas las terminaciones de CUIT. Si ese día cae fin de semana o feriado, se traslada al primer día hábil siguiente. Además, recordá las dos recategorizaciones semestrales: enero y julio.',
      },
      { tipo: 'subtitulo', texto: 'IVA (Responsables Inscriptos)' },
      {
        tipo: 'parrafo',
        texto:
          'La declaración jurada y el pago del IVA son mensuales y vencen en la segunda quincena del mes siguiente, según la terminación de tu CUIT. A modo orientativo, el esquema habitual es:',
      },
      {
        tipo: 'tabla',
        encabezados: ['Terminación de CUIT', 'Día de vencimiento (orientativo)'],
        filas: [
          ['0 y 1', 'Día 18'],
          ['2 y 3', 'Día 19'],
          ['4 y 5', 'Día 20'],
          ['6 y 7', 'Día 21'],
          ['8 y 9', 'Día 22'],
        ],
      },
      {
        tipo: 'nota',
        variante: 'info',
        texto:
          'Los días de la tabla son el esquema habitual de IVA por terminación de CUIT y pueden ajustarse por feriados o disposiciones de ARCA. Confirmá siempre la fecha del mes en el calendario oficial.',
      },
      { tipo: 'subtitulo', texto: 'Ganancias (personas humanas)' },
      {
        tipo: 'parrafo',
        texto:
          'La declaración jurada anual del Impuesto a las Ganancias de personas humanas se presenta a mitad de año (habitualmente en junio), también escalonada por terminación de CUIT. Las sociedades tienen sus propios vencimientos según la fecha de cierre de ejercicio.',
      },
      { tipo: 'subtitulo', texto: 'Cargas sociales (empleadores)' },
      {
        tipo: 'parrafo',
        texto:
          'Si tenés empleados, las cargas sociales (aportes y contribuciones, F.931) tienen un vencimiento mensual propio, también escalonado por terminación de CUIT. Es una de las obligaciones más sensibles: llegar tarde genera intereses y complica la registración laboral.',
      },
      { tipo: 'subtitulo', texto: 'Cómo no perderte un vencimiento' },
      {
        tipo: 'lista',
        items: [
          'Anotá en un calendario las fechas de tus impuestos según la terminación de tu CUIT.',
          'Configurá recordatorios unos días antes de cada vencimiento.',
          'Revisá el calendario oficial de ARCA cada mes, porque las fechas se trasladan por feriados.',
          'Si te resulta difícil seguir todo, delegá el seguimiento en un contador: es lo que evita las multas.',
        ],
      },
      {
        tipo: 'cta',
        texto:
          'Nosotros controlamos tus vencimientos y presentamos tus impuestos en fecha, para que no tengas que estar pendiente del calendario. Delegá tus vencimientos en el estudio.',
        servicioId: 'liquidacion-impuestos',
      },
    ],
    faqs: [
      {
        pregunta: '¿Qué día vence el monotributo?',
        respuesta:
          'En general, el día 20 de cada mes para todas las terminaciones de CUIT. Si cae sábado, domingo o feriado, se traslada al primer día hábil siguiente.',
      },
      {
        pregunta: '¿Por qué mi vencimiento es distinto al de otra persona?',
        respuesta:
          'Varios impuestos (como el IVA o las cargas sociales) escalonan sus vencimientos según la terminación del CUIT del contribuyente. Por eso dos personas con el mismo impuesto pueden tener días de vencimiento diferentes.',
      },
      {
        pregunta: '¿Qué pasa si pago un impuesto fuera de término?',
        respuesta:
          'El pago fuera de término genera intereses resarcitorios y, según el caso, multas. Cuanto antes regularices, menor es el costo. Un contador puede ayudarte a calcular la deuda y regularizarla.',
      },
      {
        pregunta: '¿Dónde consulto la fecha exacta de un vencimiento?',
        respuesta:
          'En el calendario oficial de ARCA (argentina.gob.ar/arca/vencimientos), que se actualiza con las fechas de cada mes y los traslados por feriados.',
      },
    ],
  },
];

// Helper: buscar una guía por slug.
export const getGuia = (slug) => guias.find((g) => g.slug === slug);
