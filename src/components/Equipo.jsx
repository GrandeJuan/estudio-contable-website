import { FaLinkedin } from 'react-icons/fa';
import { contenido } from '../data/contenido';
import ScrollReveal from './ScrollReveal';

const Equipo = () => {
  return (
    <section id="equipo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E65] mb-4">
              {contenido.equipo.titulo}
            </h2>
            <div className="w-24 h-1 bg-cta mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {contenido.equipo.subtitulo}
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de Miembros */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {contenido.equipo.miembros.map((miembro, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group h-full flex flex-col">
                {/* Foto */}
                <div className="relative h-64 bg-gradient-to-br from-[#2C3E65] to-[#2D3E5F] overflow-hidden">
                  {miembro.foto ? (
                    <img
                      src={miembro.foto}
                      alt={miembro.nombre}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                        <span className="text-6xl text-white/50 font-bold">
                          {miembro.nombre.charAt(miembro.nombre.indexOf(' ') + 1)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Información */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#2C3E65] mb-2 text-center">
                    {miembro.nombre}
                  </h3>
                  <p className="text-[#8B95A5] font-semibold mb-3 text-center">
                    {miembro.cargo}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                    {miembro.descripcion}
                  </p>

                  {miembro.linkedin && (
                    <div className="text-center mt-auto">
                    <a
                      href={miembro.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#0077B5] hover:text-[#005885] transition-colors"
                    >
                      <FaLinkedin className="mr-2" />
                      <span className="text-sm font-medium">Ver perfil</span>
                    </a>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mensaje adicional */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg">
              ¿Querés formar parte de nuestro equipo?
            </p>
            <a
              href={`mailto:${contenido.estudio.email}?subject=Consulta%20Laboral`}
              className="inline-block mt-2 text-[#1a3a5c] hover:text-[#C09835] font-bold text-lg underline underline-offset-4 transition-colors"
            >
              Envianos tu CV
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Equipo;
