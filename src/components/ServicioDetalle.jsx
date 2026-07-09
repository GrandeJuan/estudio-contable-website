import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaChevronDown, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { FaCalculator, FaFileInvoiceDollar, FaUsers, FaBuilding, FaSearchDollar } from 'react-icons/fa';
import { contenido } from '../data/contenido';
import ScrollReveal from './ScrollReveal';

// Navega a la home y hace scroll suave a la sección de servicios.
const irAServicios = (navigate) => {
  navigate('/');
  setTimeout(() => {
    document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
};

const FaqItem = ({ pregunta, respuesta, isOpen, onToggle }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-[#E8E6DF]">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex justify-between items-center hover:bg-[#F5F5F0] transition-colors"
      >
        <h3 className="text-lg font-semibold text-[#1B2A4A] text-left pr-4">
          {pregunta}
        </h3>
        <FaChevronDown
          className={`text-[#D4A843] flex-shrink-0 transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
        className="overflow-hidden transition-all duration-400 ease-in-out"
      >
        <div className={`px-6 pb-5 border-t border-[#E8E6DF] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-[#4A5568] leading-relaxed text-left md:text-justify pt-4">{respuesta}</p>
        </div>
      </div>
    </div>
  );
};

const ServicioDetalle = ({ servicioId, onConsultar }) => {
  const [faqAbierto, setFaqAbierto] = useState(null);
  const navigate = useNavigate();

  const servicio = contenido.servicios.lista.find(s => s.id === servicioId);

  // Al cambiar de servicio (navegación prev/next), volver al tope.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [servicioId]);

  if (!servicio) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F0]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#1B2A4A] mb-4">Servicio no encontrado</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-[#1B2A4A] text-white px-6 py-3 rounded-lg hover:bg-[#2C3E65] transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const iconos = {
    FaCalculator,
    FaFileInvoiceDollar,
    FaUsers,
    FaBuilding,
    FaSearchDollar,
  };

  const Icono = iconos[servicio.icono] || FaCalculator;

  const lista = contenido.servicios.lista;
  const currentIndex = lista.findIndex(s => s.id === servicioId);
  const prevServicio = lista[(currentIndex - 1 + lista.length) % lista.length];
  const nextServicio = lista[(currentIndex + 1) % lista.length];

  const toggleFaq = (index) => {
    setFaqAbierto(faqAbierto === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F0]">
      {/* Header del Servicio */}
      <div
        className="text-[#1B2A4A] py-20"
        style={{
          background: 'linear-gradient(135deg, #F5F5F0 0%, #E8E6DF 50%, #D9D5CC 100%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <Link
              to={`/servicio/${prevServicio.id}`}
              className="flex items-center text-[#4A5568] hover:text-[#D4A843] transition-colors group"
            >
              <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden sm:inline">{prevServicio.nombre}</span>
            </Link>
            <Link
              to={`/servicio/${nextServicio.id}`}
              className="flex items-center text-[#4A5568] hover:text-[#D4A843] transition-colors group"
            >
              <span className="hidden sm:inline">{nextServicio.nombre}</span>
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1B2A4A] rounded-lg flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 shadow-lg flex-shrink-0">
              <Icono className="text-3xl sm:text-4xl text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#1B2A4A]">{servicio.nombre}</h1>
              <div className="w-20 h-1 bg-[#D4A843] rounded mb-3"></div>
              <p className="text-base sm:text-xl text-[#4A5568]">{servicio.descripcion}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Columna Principal */}
          <div className="lg:col-span-2 space-y-12">
            {/* Descripción Detallada */}
            <ScrollReveal>
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4A] mb-6">Descripción del Servicio</h2>
                <div className="w-16 h-1 bg-[#D4A843] rounded mb-6"></div>
                <p className="text-[#4A5568] text-lg leading-relaxed text-left md:text-justify">
                  {servicio.detalles.descripcionLarga}
                </p>
              </section>
            </ScrollReveal>

            {/* Qué Incluye */}
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4A] mb-6">¿Qué Incluye Este Servicio?</h2>
                <div className="w-16 h-1 bg-[#D4A843] rounded mb-6"></div>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-[#E8E6DF]">
                  <ul className="space-y-4">
                    {servicio.detalles.incluye.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-[#D4A843] mt-1 mr-3 flex-shrink-0 text-lg" />
                        <span className="text-[#4A5568] text-left md:text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </ScrollReveal>

            {/* Preguntas Frecuentes */}
            <ScrollReveal delay={0.2}>
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2A4A] mb-6">Preguntas Frecuentes</h2>
                <div className="w-16 h-1 bg-[#D4A843] rounded mb-6"></div>
                <div className="space-y-4">
                  {servicio.detalles.faqs.map((faq, index) => (
                    <FaqItem
                      key={index}
                      pregunta={faq.pregunta}
                      respuesta={faq.respuesta}
                      isOpen={faqAbierto === index}
                      onToggle={() => toggleFaq(index)}
                    />
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar - Call to Action */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Card de Contacto */}
              <ScrollReveal animation="fade-left">
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border-t-4 border-[#D4A843]">
                  <h3 className="text-2xl font-bold text-[#1B2A4A] mb-4">
                    ¿Necesitás este servicio?
                  </h3>
                  <p className="text-[#4A5568] mb-6 text-left md:text-justify">
                    Contactanos para recibir una cotización personalizada y sin compromiso.
                  </p>

                  <button
                    onClick={onConsultar}
                    className="flex items-center justify-center space-x-3 bg-[#1B2A4A] hover:bg-[#2C3E65] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full"
                  >
                    <FaEnvelope className="text-xl" />
                    <span>Hacenos tu consulta</span>
                  </button>
                </div>
              </ScrollReveal>

              {/* Otros Servicios */}
              <ScrollReveal animation="fade-left" delay={0.1}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 border border-[#E8E6DF]">
                  <h3 className="text-xl font-bold text-[#1B2A4A] mb-4">
                    Otros Servicios
                  </h3>
                  <ul className="space-y-3">
                    {contenido.servicios.lista
                      .filter(s => s.id !== servicioId)
                      .slice(0, 4)
                      .map((otroServicio) => (
                        <li key={otroServicio.id}>
                          <Link
                            to={`/servicio/${otroServicio.id}`}
                            className="text-[#4A5568] hover:text-[#D4A843] transition-colors flex items-center"
                          >
                            <span className="w-2 h-2 bg-[#D4A843] rounded-full mr-3"></span>
                            {otroServicio.nombre}
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <button
                    onClick={() => irAServicios(navigate)}
                    className="inline-block mt-4 text-[#A8894F] hover:text-[#1B2A4A] font-semibold"
                  >
                    Ver todos los servicios →
                  </button>
                </div>
              </ScrollReveal>

              {/* Info de Contacto */}
              <ScrollReveal animation="fade-left" delay={0.2}>
                <div className="bg-white rounded-xl shadow-md p-8 border border-[#E8E6DF]">
                  <h3 className="text-xl font-bold text-[#1B2A4A] mb-4">Información de Contacto</h3>
                  <div className="w-12 h-1 bg-[#D4A843] rounded mb-4"></div>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-[#1B2A4A] mt-0.5 flex-shrink-0" />
                      <span className="text-[#4A5568]">{contenido.estudio.direccion}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaPhoneAlt className="text-[#1B2A4A] flex-shrink-0" />
                      <a href={contenido.estudio.redesSociales.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#4A5568] hover:text-[#1B2A4A] transition-colors">
                        {contenido.estudio.telefono}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-[#1B2A4A] flex-shrink-0" />
                      <a href={`mailto:${contenido.estudio.email}`} className="text-[#4A5568] hover:text-[#1B2A4A] transition-colors">
                        {contenido.estudio.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaClock className="text-[#1B2A4A] flex-shrink-0" />
                      <span className="text-[#4A5568]">{contenido.estudio.horario}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicioDetalle;
