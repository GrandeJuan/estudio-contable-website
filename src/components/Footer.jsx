import { FaLinkedin, FaWhatsapp, FaCalculator, FaFileInvoiceDollar, FaUsers, FaBuilding, FaSearchDollar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { contenido } from '../data/contenido';

const iconos = { FaCalculator, FaFileInvoiceDollar, FaUsers, FaBuilding, FaSearchDollar };

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#E8E6DF] text-[#4A5568] py-12 border-t border-[#D9D5CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8 items-start">
          {/* Columna 1: Info del Estudio */}
          <div>
            <h3 className="text-[#1B2A4A] text-lg font-semibold mb-4">
              {contenido.estudio.nombre}
            </h3>
            <p className="text-[#4A5568] mb-4 text-justify">
              {contenido.estudio.descripcionCorta}
            </p>
            <div className="flex justify-center space-x-4">
              {contenido.estudio.redesSociales.linkedin && (
                <a
                  href={contenido.estudio.redesSociales.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1B2A4A]/10 hover:bg-[#0077B5] text-[#1B2A4A] hover:text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              )}
              {contenido.estudio.redesSociales.whatsapp && (
                <a
                  href={contenido.estudio.redesSociales.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#1B2A4A]/10 hover:bg-[#25D366] text-[#1B2A4A] hover:text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              )}
            </div>
          </div>

          {/* Columna 2: Servicios Rápidos */}
          <div className="md:justify-self-center">
            <h3 className="text-[#1B2A4A] text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {contenido.servicios.lista.slice(0, 6).map((servicio) => {
                const Icono = iconos[servicio.icono] || FaCalculator;
                return (
                  <li key={servicio.id}>
                    <a
                      href={`#/servicio/${servicio.id}`}
                      className="flex items-center gap-2 text-[#4A5568] hover:text-[#1B2A4A] transition-colors"
                    >
                      <Icono className="text-[#1B2A4A]/50 flex-shrink-0 w-3.5 h-3.5" />
                      {servicio.nombre}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="md:justify-self-end">
            <h3 className="text-[#1B2A4A] text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-[#4A5568]">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#1B2A4A]/50 flex-shrink-0 w-3.5 h-3.5" />
                {contenido.estudio.direccion}
              </li>
              <li>
                <a
                  href={contenido.estudio.redesSociales.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#1B2A4A] transition-colors"
                >
                  <FaPhone className="text-[#1B2A4A]/50 flex-shrink-0 w-3.5 h-3.5" />
                  {contenido.estudio.telefono}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contenido.estudio.email}`}
                  className="flex items-center gap-2 hover:text-[#1B2A4A] transition-colors"
                >
                  <FaEnvelope className="text-[#1B2A4A]/50 flex-shrink-0 w-3.5 h-3.5" />
                  {contenido.estudio.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="text-[#1B2A4A]/50 flex-shrink-0 w-3.5 h-3.5" />
                {contenido.estudio.horario}
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-[#D4A843] pt-8">
          <div className="flex justify-center mb-4">
            <img
              src="/images/logo.png"
              alt={contenido.estudio.nombre}
              className="h-16 w-auto opacity-70"
            />
          </div>
          <div className="text-center text-[#6B7280] text-sm">
            <p>
              © {currentYear} {contenido.estudio.nombre}. Todos los derechos reservados.
            </p>
            <p className="mt-2">
              Desarrollado con ❤️ por <a href="https://www.linkedin.com/in/juan-francisco-grande/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1B2A4A] transition-colors underline">Juan Grande</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
