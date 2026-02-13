import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { contenido } from '../data/contenido';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Columna 1: Info del Estudio */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/images/logo.png"
                alt={contenido.estudio.nombre}
                className="h-16 w-auto mr-3"
              />
            </div>
            <p className="text-gray-400 mb-4">
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
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {contenido.servicios.lista.slice(0, 6).map((servicio) => (
                <li key={servicio.id}>
                  <a
                    href={`#/servicio/${servicio.id}`}
                    className="text-gray-400 hover:text-[#8B95A5] transition-colors"
                  >
                    {servicio.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li>{contenido.estudio.direccion}</li>
              <li>
                <a 
                  href={`tel:${contenido.estudio.telefono.replace(/\s/g, '')}`}
                  className="hover:text-[#8B95A5] transition-colors"
                >
                  {contenido.estudio.telefono}
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${contenido.estudio.email}`}
                  className="hover:text-[#8B95A5] transition-colors"
                >
                  {contenido.estudio.email}
                </a>
              </li>
              <li className="text-sm pt-2">{contenido.estudio.horario}</li>
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
              Desarrollado con ❤️ para profesionales contables
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
