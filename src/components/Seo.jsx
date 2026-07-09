import { Head } from 'vite-react-ssg';
import { OG_IMAGE } from '../seo';

// Inyecta en el <head> del HTML prerenderizado (y en runtime) el título,
// description, canonical, Open Graph, Twitter Card y JSON-LD de cada página.
// `jsonLd` puede ser un objeto o un array de objetos schema.org.
const Seo = ({ title, description, canonical, ogTitle, ogDescription, jsonLd }) => {
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:site_name" content="Estudio Contable Grande & Asociados" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* JSON-LD */}
      {blocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Head>
  );
};

export default Seo;
