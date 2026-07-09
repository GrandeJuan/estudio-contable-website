import { FaCalculator, FaFileInvoiceDollar, FaUsers, FaBuilding, FaSearchDollar, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { contenido } from '../data/contenido';
import ScrollReveal from './ScrollReveal';

const Servicios = () => {
  const navigate = useNavigate();
  const iconos = {
    FaCalculator,
    FaFileInvoiceDollar,
    FaUsers,
    FaBuilding,
    FaSearchDollar,
  };

  const handleServiceClick = (servicioId) => {
    navigate(`/servicio/${servicioId}`);
  };

  return (
    <section id="servicios" className="py-12 md:py-20 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A4A] mb-4">
              {contenido.servicios.titulo}
            </h2>
            <div className="w-24 h-1 bg-[#D4A843] mx-auto mb-6"></div>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
              {contenido.servicios.subtitulo}
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de Servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {contenido.servicios.lista.map((servicio, index) => {
            const Icono = iconos[servicio.icono] || FaCalculator;
            const totalServicios = contenido.servicios.lista.length;
            const lastRowCount = totalServicios % 3;
            const isFirstOfLastRow = lastRowCount === 2 && index === totalServicios - lastRowCount;
            const isLastItemAloneOnMd = totalServicios % 2 !== 0 && index === totalServicios - 1;
            return (
              <ScrollReveal key={servicio.id} animation="scale-in" delay={index * 0.1} className={`h-full lg:col-span-2${isFirstOfLastRow ? ' lg:col-start-2' : ''}${isLastItemAloneOnMd ? ' md:col-span-2 md:max-w-[calc(50%_-_1rem)] md:justify-self-center lg:max-w-none lg:justify-self-auto' : ''}`}>
                <div
                  onClick={() => handleServiceClick(servicio.id)}
                  className="group bg-white border border-[#E8E6DF] rounded-lg p-6 sm:p-8 hover:border-[#D4A843] hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                >
                  {/* Icono */}
                  <div className="flex items-center justify-center w-16 h-16 bg-[#1B2A4A] group-hover:bg-[#2C3E65] rounded-lg mb-6 mx-auto transition-colors duration-300">
                    <Icono className="text-3xl text-white" />
                  </div>

                  {/* Nombre del Servicio */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1B2A4A] mb-4 text-center group-hover:text-[#2C3E65] transition-colors duration-300">
                    {servicio.nombre}
                  </h3>

                  {/* Descripción */}
                  <p className="text-[#4A5568] mb-6 leading-relaxed text-center flex-grow">
                    {servicio.descripcion}
                  </p>

                  {/* Link "Ver más" */}
                  <div className="flex items-center justify-center text-[#1B2A4A] font-semibold group-hover:translate-x-2 transition-transform duration-300 mt-auto">
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
          <div className="mt-16 text-center bg-white rounded-lg p-8 border border-[#E8E6DF]">
            <h3 className="text-2xl font-bold text-[#1B2A4A] mb-4">
              ¿No encontrás lo que buscás?
            </h3>
            <p className="text-[#4A5568] mb-6">
              Ofrecemos soluciones personalizadas para cada necesidad. Contactanos y charlamos sobre tu caso particular.
            </p>
            <a
              href={`mailto:${contenido.estudio.email}`}
              className="inline-block bg-[#1B2A4A] hover:bg-[#2C3E65] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
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
