import { FaInstagram, FaLinkedin, FaWhatsapp, FaCalculator, FaFileInvoiceDollar, FaUsers, FaChartLine, FaBuilding, FaSearchDollar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { contenido } from '../data/contenido';

const iconos = { FaCalculator, FaFileInvoiceDollar, FaUsers, FaChartLine, FaBuilding, FaSearchDollar };

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Columna 1: Info del Estudio */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              {contenido.estudio.nombre}
            </h3>
            <p className="text-gray-400 mb-4 text-justify">
              {contenido.estudio.descripcionCorta}
            </p>
            <div className="flex space-x-4">
              {contenido.estudio.redesSociales.instagram && (
                <a
                  href={contenido.estudio.redesSociales.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaInstagram className="text-2xl" />
                </a>
              )}
              {contenido.estudio.redesSociales.linkedin && (
                <a
                  href={contenido.estudio.redesSociales.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              )}
              {contenido.estudio.redesSociales.whatsapp && (
                <a
                  href={contenido.estudio.redesSociales.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FaWhatsapp className="text-2xl" />
                </a>
              )}
            </div>
          </div>

          {/* Columna 2: Servicios Rápidos */}
          <div className="md:justify-self-center">
            <h3 className="text-white text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {contenido.servicios.lista.slice(0, 6).map((servicio) => {
                const Icono = iconos[servicio.icono] || FaCalculator;
                return (
                  <li key={servicio.id}>
                    <a
                      href={`#/servicio/${servicio.id}`}
                      className="flex items-center gap-2 text-gray-400 hover:text-cta transition-colors"
                    >
                      <Icono className="text-cta/50 flex-shrink-0 text-xs" />
                      {servicio.nombre}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="md:justify-self-end">
            <h3 className="text-white text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-cta/50 flex-shrink-0" />
                {contenido.estudio.direccion}
              </li>
              <li>
                <a
                  href={`tel:${contenido.estudio.telefono.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 hover:text-cta transition-colors"
                >
                  <FaPhone className="text-cta/50 flex-shrink-0" />
                  {contenido.estudio.telefono}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contenido.estudio.email}`}
                  className="flex items-center gap-2 hover:text-cta transition-colors"
                >
                  <FaEnvelope className="text-cta/50 flex-shrink-0" />
                  {contenido.estudio.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-cta/50 flex-shrink-0" />
                {contenido.estudio.horario}
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-gray-500 text-sm">
            <p>
              © {currentYear} {contenido.estudio.nombre}. Todos los derechos reservados.
            </p>
            <p className="mt-2">
              Desarrollado con ❤️ por <a href="https://www.linkedin.com/in/juan-francisco-grande/" target="_blank" rel="noopener noreferrer" className="hover:text-cta transition-colors underline">Juan Grande</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
