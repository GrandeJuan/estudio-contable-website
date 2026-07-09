import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultaModal from './components/ConsultaModal';
import { ModalContext } from './context/modal';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Layout raíz: envuelve todas las rutas. Mantiene el estado del modal de
// consulta (compartido entre home y páginas de servicio) y redirige las
// viejas URLs con hash (#/servicio/{id}) a las nuevas rutas reales.
const Layout = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Compatibilidad con enlaces antiguos: #/servicio/{id} -> /servicio/{id}
  useEffect(() => {
    const hash = window.location.hash;
    const match = hash.match(/^#\/servicio\/([^/?#]+)/);
    if (match) {
      navigate(`/servicio/${match[1]}`, { replace: true });
    } else if (hash === '#/' || hash === '#') {
      // Home vieja con hash: limpiar el hash sin recargar.
      navigate('/', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ModalContext.Provider value={openModal}>
      <div className="font-sans">
        <Navbar />
        <Outlet />
        <Footer />
        <ConsultaModal isOpen={modalOpen} onClose={closeModal} />
        <Analytics />
        <SpeedInsights />
      </div>
    </ModalContext.Provider>
  );
};

export default Layout;
