// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SEO — Constantes y helpers de metadata por página
// Fuente única para títulos, descripciones, canonical, OG y JSON-LD.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { contenido } from './data/contenido';
import { guias } from './data/guias';

export const SITE_URL = 'https://grandeyasociados.com.ar';
export const OG_IMAGE = `${SITE_URL}/images/logo-hero.png`;
export const LOGO_IMAGE = `${SITE_URL}/images/logo.png`;

const NOMBRE = contenido.estudio.nombre;

// Metadata de la home ---------------------------------------------------------
export const homeSeo = {
  title:
    'Estudio Contable en CABA | Grande & Asociados — Contadores hace +30 años',
  description:
    'Estudio contable en Av. Corrientes 1257, CABA. Contabilidad, impuestos (ARCA), sueldos, auditoría y sociedades para PyMEs, comercios y monotributistas. +30 años. Pedí una consulta.',
  canonical: `${SITE_URL}/`,
  ogTitle: NOMBRE,
  ogDescription:
    'Soluciones a tu medida. Más de 30 años asesorando a empresas y particulares.',
};

// Metadata por servicio -------------------------------------------------------
// Título y descripción únicos y optimizados para búsqueda por servicio.
export function servicioSeo(servicio) {
  const canonical = `${SITE_URL}/servicio/${servicio.id}`;
  // Título/description con keyword local si el servicio los define; si no,
  // fallback al patrón genérico derivado de contenido.js.
  const title = servicio.seoTitle || `${servicio.nombre} | ${NOMBRE}`;
  const description =
    servicio.seoDescription ||
    (servicio.detalles?.descripcionLarga
      ? servicio.detalles.descripcionLarga.slice(0, 155).replace(/\s+\S*$/, '') + '…'
      : servicio.descripcion);
  return {
    title,
    description,
    canonical,
    ogTitle: `${servicio.nombre} — ${NOMBRE}`,
    ogDescription: servicio.descripcion,
  };
}

// Metadata del índice de guías ------------------------------------------------
export const guiasSeo = {
  title: 'Guías contables e impositivas en CABA | Grande & Asociados',
  description:
    'Guías prácticas y actualizadas sobre monotributo, impuestos (ARCA), honorarios de contador y sociedades (SAS, SRL, SA) en Argentina. Escritas por contadores en CABA.',
  canonical: `${SITE_URL}/guias`,
  ogTitle: 'Guías contables e impositivas — Grande & Asociados',
  ogDescription:
    'Guías prácticas sobre monotributo, impuestos, honorarios y sociedades para PyMEs, comercios y monotributistas en CABA.',
};

// Metadata por guía -----------------------------------------------------------
export function guiaSeo(guia) {
  const canonical = `${SITE_URL}/guias/${guia.slug}`;
  return {
    title: guia.seoTitle || `${guia.titulo} | ${NOMBRE}`,
    description: guia.seoDescription || guia.resumen,
    canonical,
    ogTitle: guia.titulo,
    ogDescription: guia.resumen,
    ogType: 'article',
  };
}

// JSON-LD por guía: Article + BreadcrumbList + FAQPage + HowTo (si aplica).
export function guiaJsonLd(guia) {
  const url = `${SITE_URL}/guias/${guia.slug}`;
  const bloques = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: guia.h1 || guia.titulo,
      description: guia.resumen,
      url,
      mainEntityOfPage: url,
      datePublished: guia.fechaPublicacion,
      dateModified: guia.fechaActualizacion || guia.fechaPublicacion,
      image: OG_IMAGE,
      inLanguage: 'es-AR',
      author: {
        '@type': 'Person',
        name: guia.autor?.nombre || NOMBRE,
      },
      publisher: {
        '@type': 'Organization',
        name: NOMBRE,
        logo: { '@type': 'ImageObject', url: LOGO_IMAGE },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Guías', item: `${SITE_URL}/guias` },
        { '@type': 'ListItem', position: 3, name: guia.titulo, item: url },
      ],
    },
  ];

  // FAQPage si la guía tiene FAQs.
  if (guia.faqs?.length) {
    bloques.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: guia.faqs.map((f) => ({
        '@type': 'Question',
        name: f.pregunta,
        acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
      })),
    });
  }

  // HowTo si la guía define un procedimiento (ej. recategorización).
  if (guia.howTo?.pasos?.length) {
    bloques.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: guia.howTo.nombre || guia.titulo,
      step: guia.howTo.pasos.map((texto, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        text: texto,
      })),
    });
  }

  return bloques;
}

// JSON-LD ---------------------------------------------------------------------
export const accountingServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AccountingService',
  name: NOMBRE,
  description:
    'Estudio contable con más de 30 años de experiencia. Servicios de contabilidad, liquidación de impuestos, sueldos y asesoría fiscal para empresas y particulares en Buenos Aires.',
  url: SITE_URL,
  telephone: '+54-11-4384-8924',
  email: contenido.estudio.email,
  image: OG_IMAGE,
  logo: LOGO_IMAGE,
  foundingDate: '1995',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Corrientes 1257, 3° F, Primer Cuerpo',
    addressLocality: 'Ciudad Autónoma de Buenos Aires',
    addressRegion: 'CABA',
    postalCode: 'C1043AAO',
    addressCountry: 'AR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -34.60403, longitude: -58.3856 },
  openingHours: 'Mo-Fr 09:00-17:00',
  priceRange: '$$',
  knowsLanguage: 'es-AR',
  areaServed: [
    { '@type': 'City', name: 'Ciudad Autónoma de Buenos Aires' },
    { '@type': 'AdministrativeArea', name: 'AMBA' },
  ],
  hasMap: contenido.estudio.googleMapsUrl,
  sameAs: [
    contenido.estudio.redesSociales.linkedin,
    ...contenido.equipo.miembros.map((m) => m.linkedin).filter(Boolean),
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios Contables',
    itemListElement: contenido.servicios.lista.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.nombre },
    })),
  },
};

// FAQPage a partir de las FAQs del servicio (habilita rich result de FAQ y
// hace las respuestas directamente extraíbles por los answer-engines).
function faqPageJsonLd(servicio) {
  const faqs = servicio.detalles?.faqs;
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.pregunta,
      acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
    })),
  };
}

// Service + BreadcrumbList + FAQPage para cada página de servicio
export function servicioJsonLd(servicio) {
  const url = `${SITE_URL}/servicio/${servicio.id}`;
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: servicio.nombre,
      description: servicio.detalles?.descripcionLarga || servicio.descripcion,
      url,
      serviceType: servicio.nombre,
      areaServed: { '@type': 'Country', name: 'Argentina' },
      provider: {
        '@type': 'AccountingService',
        name: NOMBRE,
        url: SITE_URL,
        telephone: '+54-11-4384-8924',
        email: contenido.estudio.email,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE_URL}/` },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Servicios',
          item: `${SITE_URL}/#servicios`,
        },
        { '@type': 'ListItem', position: 3, name: servicio.nombre, item: url },
      ],
    },
    faqPageJsonLd(servicio),
  ].filter(Boolean);
}
