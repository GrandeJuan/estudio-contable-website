// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SEO — Constantes y helpers de metadata por página
// Fuente única para títulos, descripciones, canonical, OG y JSON-LD.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import { contenido } from './data/contenido';

export const SITE_URL = 'https://grandeyasociados.com.ar';
export const OG_IMAGE = `${SITE_URL}/images/logo-hero.png`;
export const LOGO_IMAGE = `${SITE_URL}/images/logo.png`;

const NOMBRE = contenido.estudio.nombre;

// Metadata de la home ---------------------------------------------------------
export const homeSeo = {
  title:
    'Estudio Contable Grande & Asociados | Servicios Contables e Impositivos en Buenos Aires',
  description:
    'Estudio contable con más de 30 años de experiencia. Servicios de contabilidad, liquidación de impuestos, sueldos y asesoría fiscal para empresas y particulares en Buenos Aires, Argentina.',
  canonical: `${SITE_URL}/`,
  ogTitle: NOMBRE,
  ogDescription:
    'Soluciones a tu medida. Más de 30 años asesorando a empresas y particulares.',
};

// Metadata por servicio -------------------------------------------------------
// Título y descripción únicos y optimizados para búsqueda por servicio.
export function servicioSeo(servicio) {
  const canonical = `${SITE_URL}/servicio/${servicio.id}`;
  const title = `${servicio.nombre} | ${NOMBRE}`;
  const description = servicio.detalles?.descripcionLarga
    ? servicio.detalles.descripcionLarga.slice(0, 155).replace(/\s+\S*$/, '') + '…'
    : servicio.descripcion;
  return {
    title,
    description,
    canonical,
    ogTitle: `${servicio.nombre} — ${NOMBRE}`,
    ogDescription: servicio.descripcion,
  };
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
  sameAs: [contenido.estudio.redesSociales.linkedin],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios Contables',
    itemListElement: contenido.servicios.lista.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.nombre },
    })),
  },
};

// Service + BreadcrumbList para cada página de servicio
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
  ];
}
