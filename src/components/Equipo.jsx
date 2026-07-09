import { FaLinkedin } from 'react-icons/fa';
import { contenido } from '../data/contenido';
import ScrollReveal from './ScrollReveal';

const Equipo = () => {
  return (
    <section id="equipo" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B2A4A] mb-4">
              {contenido.equipo.titulo}
            </h2>
            <div className="w-24 h-1 bg-[#D4A843] mx-auto mb-6"></div>
            <p className="text-xl text-[#4A5568] max-w-3xl mx-auto">
              {contenido.equipo.subtitulo}
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de Miembros */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {contenido.equipo.miembros.map((miembro, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="bg-[#F5F5F0] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group h-full flex flex-col border border-[#E8E6DF]">
                {/* Foto */}
                <div className="relative h-64 bg-gradient-to-br from-[#1B2A4A] to-[#2C3E65] overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                      <span className="text-6xl text-white/50 font-bold">
                        {miembro.nombre.charAt(miembro.nombre.indexOf(' ') + 1)}
                      </span>
                    </div>
                  </div>
                  {miembro.foto && (
                    <img
                      src={miembro.foto}
                      alt={`Foto de ${miembro.nombre}, ${miembro.cargo}`}
                      width={520}
                      height={362}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-top z-10"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  )}
                </div>

                {/* Información */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#1B2A4A] mb-2 text-center">
                    {miembro.nombre}
                  </h3>
                  <p className="text-[#1B2A4A]/70 font-semibold mb-3 text-center">
                    {miembro.cargo}
                  </p>
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-4 text-center">
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
            <p className="text-[#4A5568] text-lg">
              ¿Querés formar parte de nuestro equipo?
            </p>
            <a
              href={`mailto:${contenido.estudio.email}?subject=Consulta%20Laboral`}
              className="inline-block mt-2 text-[#1B2A4A] hover:text-[#D4A843] font-bold text-lg underline underline-offset-4 transition-colors"
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
