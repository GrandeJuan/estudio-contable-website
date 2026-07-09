import { useParams } from 'react-router-dom';
import ServicioDetalle from '../components/ServicioDetalle';
import Seo from '../components/Seo';
import { useModal } from '../context/modal';
import { contenido } from '../data/contenido';
import { servicioSeo, servicioJsonLd } from '../seo';

// Página de un servicio individual (/servicio/:id).
// Exporta `Component` (convención de react-router lazy) y `getStaticPaths`
// para que vite-react-ssg prerenderice un HTML por cada servicio.
export function Component() {
  const { id } = useParams();
  const openModal = useModal();
  const servicio = contenido.servicios.lista.find((s) => s.id === id);

  return (
    <>
      {servicio && (
        <Seo {...servicioSeo(servicio)} jsonLd={servicioJsonLd(servicio)} />
      )}
      <div className="pt-20">
        <ServicioDetalle servicioId={id} onConsultar={openModal} />
      </div>
    </>
  );
}

export function getStaticPaths() {
  return contenido.servicios.lista.map((s) => `/servicio/${s.id}`);
}
