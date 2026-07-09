import Hero from '../components/Hero';
import SobreNosotros from '../components/SobreNosotros';
import Servicios from '../components/Servicios';
import Equipo from '../components/Equipo';
import Contacto from '../components/Contacto';
import Seo from '../components/Seo';
import { useModal } from '../context/modal';
import { homeSeo, accountingServiceJsonLd } from '../seo';

const Home = () => {
  const openModal = useModal();

  return (
    <>
      <Seo {...homeSeo} jsonLd={accountingServiceJsonLd} />
      <main>
        <Hero onConsultar={openModal} />
        <SobreNosotros />
        <Servicios />
        <Equipo />
        <Contacto onConsultar={openModal} />
      </main>
    </>
  );
};

export default Home;
