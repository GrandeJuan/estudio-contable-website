import { FaHandshake, FaBriefcase, FaHeart } from 'react-icons/fa';
import { contenido } from '../data/contenido';

const SobreNosotros = () => {
  const iconos = {
    Confianza: FaHandshake,
    Profesionalismo: FaBriefcase,
    Compromiso: FaHeart,
  };

  return (
    <section id="sobre-nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E65] mb-4">
            {contenido.sobreNosotros.titulo}
          </h2>
          <div className="w-24 h-1 bg-[#8B95A5] mx-auto"></div>
        </div>

        {/* Contenido */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Texto */}
          <div className="space-y-6">
            {contenido.sobreNosotros.parrafos.map((parrafo, index) => (
              <p key={index} className="text-gray-700 leading-relaxed text-lg">
                {parrafo}
              </p>
            ))}
          </div>

          {/* Imagen placeholder o decoración */}
          <div className="relative">
            <div className="bg-[#2C3E65] rounded-lg p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6 text-center text-white">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-4xl font-bold text-[#8B95A5] mb-2">30+</div>
                  <div className="text-sm">Años de Experiencia</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-4xl font-bold text-[#8B95A5] mb-2">500+</div>
                  <div className="text-sm">Clientes Satisfechos</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-4xl font-bold text-[#8B95A5] mb-2">100%</div>
                  <div className="text-sm">Compromiso</div>
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur">
                  <div className="text-4xl font-bold text-[#8B95A5] mb-2">24/7</div>
                  <div className="text-sm">Disponibilidad</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="grid md:grid-cols-3 gap-8">
          {contenido.sobreNosotros.valores.map((valor, index) => {
            const IconoValor = iconos[valor.titulo] || FaHandshake;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#8B95A5]/10 rounded-full mb-6 mx-auto">
                  <IconoValor className="text-3xl text-[#2C3E65]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C3E65] mb-4 text-center">
                  {valor.titulo}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {valor.descripcion}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
