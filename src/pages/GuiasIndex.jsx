import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegCalendarAlt } from 'react-icons/fa';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import { guias, guiasMeta } from '../data/guias';
import { guiasSeo } from '../seo';
import { formatearFecha } from '../utils/fecha';

// Índice de guías (/guias). Lista las guías en cards de alto uniforme.
const GuiasIndex = () => {
  return (
    <>
      <Seo {...guiasSeo} />
      <div className="min-h-screen bg-[#F5F5F0] pt-20">
        {/* Encabezado */}
        <header
          className="text-[#1B2A4A] py-16 sm:py-20"
          style={{
            background: 'linear-gradient(135deg, #F5F5F0 0%, #E8E6DF 50%, #D9D5CC 100%)',
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {guiasMeta.titulo}
            </h1>
            <div className="w-20 h-1 bg-[#D4A843] rounded mx-auto mb-6"></div>
            <p className="text-base sm:text-lg text-[#4A5568] max-w-3xl mx-auto text-left sm:text-center">
              {guiasMeta.subtitulo}
            </p>
          </div>
        </header>

        {/* Grilla de guías */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
            {guias.map((guia, i) => (
              <ScrollReveal key={guia.slug} delay={(i % 2) * 0.1}>
                <Link
                  to={`/guias/${guia.slug}`}
                  className="group flex h-full min-h-[280px] flex-col rounded-xl bg-white p-7 shadow-md border border-[#E8E6DF] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B2A4A]"
                >
                  {/* Meta: categoría + fecha */}
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="inline-block rounded-full bg-[#1B2A4A]/10 px-3 py-1 text-xs font-semibold text-[#1B2A4A]">
                      {guia.categoria}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                      <FaRegCalendarAlt className="flex-shrink-0" />
                      <time dateTime={guia.fechaActualizacion}>
                        {formatearFecha(guia.fechaActualizacion)}
                      </time>
                    </span>
                  </div>

                  {/* Título (alto acotado con line-clamp para cards parejas) */}
                  <h2 className="mb-3 text-xl font-bold leading-snug text-[#1B2A4A] line-clamp-2 group-hover:text-[#2C3E65]">
                    {guia.titulo}
                  </h2>

                  {/* Resumen */}
                  <p className="text-[#4A5568] leading-relaxed line-clamp-3 text-left">
                    {guia.resumen}
                  </p>

                  {/* CTA al pie (mt-auto → alinea abajo en todas las cards) */}
                  <span className="mt-auto pt-5 inline-flex items-center gap-2 font-semibold text-[#A8894F] group-hover:text-[#1B2A4A] transition-colors">
                    Leer guía
                    <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default GuiasIndex;
