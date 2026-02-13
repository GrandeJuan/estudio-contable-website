import { useState } from 'react';
import { FaArrowLeft, FaCheckCircle, FaChevronDown, FaChevronUp, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FaCalculator, FaFileInvoiceDollar, FaUsers, FaChartLine, FaBuilding, FaSearchDollar } from 'react-icons/fa';
import { contenido } from '../data/contenido';
import ScrollReveal from './ScrollReveal';

const ServicioDetalle = ({ servicioId }) => {
  const [faqAbierto, setFaqAbierto] = useState(null);

  const servicio = contenido.servicios.lista.find(s => s.id === servicioId);

  if (!servicio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Servicio no encontrado</h2>
          <button
            onClick={() => window.location.hash = '#'}
            className="bg-cta text-white px-6 py-3 rounded-lg hover:bg-cta-dark transition-colors"
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
    FaChartLine,
    FaBuilding,
    FaSearchDollar,
  };

  const Icono = iconos[servicio.icono] || FaCalculator;

  const toggleFaq = (index) => {
    setFaqAbierto(faqAbierto === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header del Servicio */}
      <div className="bg-gradient-to-r from-[#2C3E65] to-[#1a2a4a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => window.location.hash = '#'}
            className="flex items-center text-white/80 hover:text-cta mb-8 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Volver al inicio
          </button>

          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-cta rounded-lg flex items-center justify-center mr-6 shadow-lg shadow-cta/30">
              <Icono className="text-4xl text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{servicio.nombre}</h1>
              <div className="w-20 h-1 bg-cta rounded mb-3"></div>
              <p className="text-xl text-gray-300">{servicio.descripcion}</p>
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
                <h2 className="text-3xl font-bold text-[#2C3E65] mb-6">Descripción del Servicio</h2>
                <div className="w-16 h-1 bg-cta rounded mb-6"></div>
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                  {servicio.detalles.descripcionLarga}
                </p>
              </section>
            </ScrollReveal>

            {/* Qué Incluye */}
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className="text-3xl font-bold text-[#2C3E65] mb-6">¿Qué Incluye Este Servicio?</h2>
                <div className="w-16 h-1 bg-cta rounded mb-6"></div>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                  <ul className="space-y-4">
                    {servicio.detalles.incluye.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-cta mt-1 mr-3 flex-shrink-0 text-lg" />
                        <span className="text-gray-700 text-justify">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </ScrollReveal>

            {/* Preguntas Frecuentes */}
            <ScrollReveal delay={0.2}>
              <section>
                <h2 className="text-3xl font-bold text-[#2C3E65] mb-6">Preguntas Frecuentes</h2>
                <div className="w-16 h-1 bg-cta rounded mb-6"></div>
                <div className="space-y-4">
                  {servicio.detalles.faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-[#2C3E65] text-left pr-4">
                          {faq.pregunta}
                        </h3>
                        {faqAbierto === index ? (
                          <FaChevronUp className="text-cta flex-shrink-0" />
                        ) : (
                          <FaChevronDown className="text-cta flex-shrink-0" />
                        )}
                      </button>
                      {faqAbierto === index && (
                        <div className="px-6 pb-5 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed text-justify pt-4">{faq.respuesta}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>
          </div>

          {/* Sidebar - Call to Action */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Card de Contacto */}
              <ScrollReveal animation="fade-left">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-t-4 border-cta">
                  <h3 className="text-2xl font-bold text-[#2C3E65] mb-4">
                    ¿Necesitás este servicio?
                  </h3>
                  <p className="text-gray-600 mb-6 text-justify">
                    Contactanos para recibir una cotización personalizada y sin compromiso.
                  </p>

                  <div className="space-y-4">
                    <a
                      href={contenido.estudio.redesSociales.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 w-full"
                    >
                      <FaWhatsapp className="text-xl" />
                      <span>Consultar por WhatsApp</span>
                    </a>

                    <a
                      href={`mailto:${contenido.estudio.email}?subject=Consulta sobre ${servicio.nombre}`}
                      className="flex items-center justify-center space-x-3 bg-cta hover:bg-cta-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 w-full"
                    >
                      <FaEnvelope className="text-xl" />
                      <span>Enviar Email</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              {/* Otros Servicios */}
              <ScrollReveal animation="fade-left" delay={0.1}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                  <h3 className="text-xl font-bold text-[#2C3E65] mb-4">
                    Otros Servicios
                  </h3>
                  <ul className="space-y-3">
                    {contenido.servicios.lista
                      .filter(s => s.id !== servicioId)
                      .slice(0, 4)
                      .map((otroServicio) => (
                        <li key={otroServicio.id}>
                          <a
                            href={`#/servicio/${otroServicio.id}`}
                            className="text-gray-600 hover:text-cta transition-colors flex items-center"
                          >
                            <span className="w-2 h-2 bg-cta rounded-full mr-3"></span>
                            {otroServicio.nombre}
                          </a>
                        </li>
                      ))}
                  </ul>
                  <a
                    href="#servicios"
                    onClick={() => window.location.hash = '#'}
                    className="inline-block mt-4 text-cta hover:text-cta-dark font-semibold"
                  >
                    Ver todos los servicios →
                  </a>
                </div>
              </ScrollReveal>

              {/* Info de Contacto */}
              <ScrollReveal animation="fade-left" delay={0.2}>
                <div className="bg-gradient-to-br from-[#2C3E65] to-[#1a2a4a] text-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
                  <div className="w-12 h-1 bg-cta rounded mb-4"></div>
                  <div className="space-y-3 text-sm">
                    <p>{contenido.estudio.direccion}</p>
                    <p>
                      <a href={`tel:${contenido.estudio.telefono.replace(/\s/g, '')}`} className="hover:text-cta transition-colors">
                        {contenido.estudio.telefono}
                      </a>
                    </p>
                    <p>
                      <a href={`mailto:${contenido.estudio.email}`} className="hover:text-cta transition-colors">
                        {contenido.estudio.email}
                      </a>
                    </p>
                    <p className="text-gray-300 pt-2">{contenido.estudio.horario}</p>
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
