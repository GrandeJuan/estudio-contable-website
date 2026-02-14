import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreNosotros from './components/SobreNosotros';
import Servicios from './components/Servicios';
import Equipo from './components/Equipo';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import ServicioDetalle from './components/ServicioDetalle';
import ConsultaModal from './components/ConsultaModal';

function App() {
  const [currentView, setCurrentView] = useState({ type: 'home' });
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Función para manejar cambios en el hash
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash.startsWith('#/servicio/')) {
        const servicioId = hash.replace('#/servicio/', '');
        setCurrentView({ type: 'servicio', servicioId });
        window.scrollTo(0, 0);
      } else {
        setCurrentView({ type: 'home' });
      }
    };

    // Ejecutar al cargar
    handleHashChange();

    // Escuchar cambios de hash
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Vista de página de servicio individual
  if (currentView.type === 'servicio') {
    return (
      <div className="font-sans">
        <Navbar />
        <div className="pt-20">
          <ServicioDetalle servicioId={currentView.servicioId} onConsultar={openModal} />
        </div>
        <Footer />
        <ConsultaModal isOpen={modalOpen} onClose={closeModal} />
      </div>
    );
  }

  // Vista principal (home)
  return (
    <div className="font-sans">
      <Navbar />
      <Hero onConsultar={openModal} />
      <SobreNosotros />
      <Servicios />
      <Equipo />
      <Contacto onConsultar={openModal} />
      <Footer />
      <ConsultaModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
