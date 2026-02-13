import { FaCalculator, FaFileInvoiceDollar, FaUsers, FaChartLine, FaBuilding, FaSearchDollar, FaArrowRight } from 'react-icons/fa';
import { contenido } from '../data/contenido';
import ScrollReveal from './ScrollReveal';

const Servicios = () => {
  const iconos = {
    FaCalculator,
    FaFileInvoiceDollar,
    FaUsers,
    FaChartLine,
    FaBuilding,
    FaSearchDollar,
  };

  const handleServiceClick = (servicioId) => {
    window.location.hash = `#/servicio/${servicioId}`;
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E65] mb-4">
              {contenido.servicios.titulo}
            </h2>
            <div className="w-24 h-1 bg-cta mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {contenido.servicios.subtitulo}
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de Servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contenido.servicios.lista.map((servicio, index) => {
            const Icono = iconos[servicio.icono] || FaCalculator;
            return (
              <ScrollReveal key={servicio.id} animation="scale-in" delay={index * 0.1}>
                <div
                  onClick={() => handleServiceClick(servicio.id)}
                  className="group bg-white border-2 border-gray-100 rounded-lg p-8 hover:border-[#8B95A5] hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Icono */}
                  <div className="flex items-center justify-center w-16 h-16 bg-[#2C3E65] group-hover:bg-[#8B95A5] rounded-lg mb-6 transition-colors duration-300">
                    <Icono className="text-3xl text-white" />
                  </div>

                  {/* Nombre del Servicio */}
                  <h3 className="text-2xl font-bold text-[#2C3E65] mb-4 group-hover:text-[#8B95A5] transition-colors duration-300">
                    {servicio.nombre}
                  </h3>

                  {/* Descripción */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {servicio.descripcion}
                  </p>

                  {/* Link "Ver más" */}
                  <div className="flex items-center text-[#8B95A5] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>Ver más detalles</span>
                    <FaArrowRight className="ml-2" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA adicional */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-[#2C3E65] mb-4">
              ¿No encontrás lo que buscás?
            </h3>
            <p className="text-gray-600 mb-6">
              Ofrecemos soluciones personalizadas para cada necesidad. Contactanos y charlamos sobre tu caso particular.
            </p>
            <a
              href={`mailto:${contenido.estudio.email}`}
              className="inline-block bg-cta hover:bg-cta-dark text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Consultanos
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Servicios;
