import { FaLinkedin } from 'react-icons/fa';
import { contenido } from '../data/contenido';

const Equipo = () => {
  return (
    <section id="equipo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C3E65] mb-4">
            {contenido.equipo.titulo}
          </h2>
          <div className="w-24 h-1 bg-[#8B95A5] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {contenido.equipo.subtitulo}
          </p>
        </div>

        {/* Grid de Miembros */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contenido.equipo.miembros.map((miembro, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Foto */}
              <div className="relative h-64 bg-gradient-to-br from-[#2C3E65] to-[#2D3E5F] overflow-hidden">
                {/* Placeholder para foto - en producción usar imagen real */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                    <span className="text-6xl text-white/50 font-bold">
                      {miembro.nombre.charAt(miembro.nombre.indexOf(' ') + 1)}
                    </span>
                  </div>
                </div>
                {/* Si tuvieras fotos reales, usarías:
                <img
                  src={miembro.foto}
                  alt={miembro.nombre}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                */}
              </div>

              {/* Información */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C3E65] mb-2">
                  {miembro.nombre}
                </h3>
                <p className="text-[#8B95A5] font-semibold mb-3">
                  {miembro.cargo}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {miembro.descripcion}
                </p>

                {/* LinkedIn si está disponible */}
                {miembro.linkedin && (
                  <a
                    href={miembro.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#0077B5] hover:text-[#005885] transition-colors"
                  >
                    <FaLinkedin className="mr-2" />
                    <span className="text-sm font-medium">Ver perfil</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje adicional */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 text-lg">
            ¿Querés formar parte de nuestro equipo?{' '}
            <a
              href={`mailto:${contenido.estudio.email}?subject=Consulta%20Laboral`}
              className="text-[#8B95A5] hover:text-[#C09835] font-semibold underline"
            >
              Envianos tu CV
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Equipo;
