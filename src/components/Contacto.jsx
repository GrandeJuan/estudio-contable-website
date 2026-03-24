import { FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin } from 'react-icons/fa';
import { contenido } from '../data/contenido';
import ScrollReveal from './ScrollReveal';

const Contacto = ({ onConsultar }) => {
  return (
    <section id="contacto" className="py-20 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B2A4A] mb-4">
              {contenido.contacto.titulo}
            </h2>
            <div className="w-24 h-1 bg-[#D4A843] mx-auto mb-6"></div>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
              {contenido.contacto.subtitulo}
            </p>
          </div>
        </ScrollReveal>

        {/* Info + Mapa */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Información de Contacto + Botones */}
          <ScrollReveal animation="fade-right">
            <div className="flex flex-col justify-between h-full space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-md border border-[#E8E6DF] space-y-6">
                <h3 className="text-2xl font-bold text-[#1B2A4A]">Información de Contacto</h3>

                {/* Dirección */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B2A4A] rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B2A4A] text-lg mb-1">Dirección</h4>
                    <p className="text-[#4A5568]">{contenido.estudio.direccion}</p>
                  </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B2A4A] rounded-lg flex items-center justify-center">
                    <FaPhone className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B2A4A] text-lg mb-1">Teléfono</h4>
                    <a
                      href={`tel:${contenido.estudio.telefono.replace(/\s/g, '')}`}
                      className="text-[#4A5568] hover:text-[#1B2A4A] transition-colors"
                    >
                      {contenido.estudio.telefono}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B2A4A] rounded-lg flex items-center justify-center">
                    <FaEnvelope className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B2A4A] text-lg mb-1">Email</h4>
                    <a
                      href={`mailto:${contenido.estudio.email}`}
                      className="text-[#4A5568] hover:text-[#1B2A4A] transition-colors"
                    >
                      {contenido.estudio.email}
                    </a>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B2A4A] rounded-lg flex items-center justify-center">
                    <FaClock className="text-xl text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1B2A4A] text-lg mb-1">Horario de Atención</h4>
                    <p className="text-[#4A5568]">{contenido.estudio.horario}</p>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="space-y-4">
                <a
                  href={contenido.estudio.redesSociales.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 w-full shadow-md"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>{contenido.contacto.textoWhatsapp}</span>
                </a>

                <button
                  onClick={onConsultar}
                  className="flex items-center justify-center space-x-3 bg-[#1B2A4A] hover:bg-[#2C3E65] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 w-full shadow-md"
                >
                  <FaEnvelope className="text-xl" />
                  <span>Dejanos tu consulta</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Mapa */}
          <ScrollReveal animation="fade-left" delay={0.2}>
            <div className="h-[300px] md:h-full md:min-h-[500px] rounded-xl overflow-hidden shadow-md border border-[#E8E6DF]">
              <iframe
                src={contenido.contacto.mapaEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Estudio Contable"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>

        {/* Seguinos en Redes - centrado abajo */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <h4 className="font-semibold text-[#1B2A4A] text-lg mb-4">Seguinos en Redes</h4>
            <div className="flex space-x-4 justify-center">
              {contenido.estudio.redesSociales.linkedin && (
                <a
                  href={contenido.estudio.redesSociales.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1B2A4A] hover:bg-[#0077B5] text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contacto;
