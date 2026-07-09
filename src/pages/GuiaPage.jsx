import { useState, useRef, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  FaArrowLeft, FaRegCalendarAlt, FaRegClock, FaCheckCircle,
  FaChevronDown, FaInfoCircle, FaExclamationTriangle, FaArrowRight,
} from 'react-icons/fa';
import Seo from '../components/Seo';
import ScrollReveal from '../components/ScrollReveal';
import { contenido } from '../data/contenido';
import { guias, getGuia, disclaimerGuias } from '../data/guias';
import { guiaSeo, guiaJsonLd } from '../seo';
import { formatearFecha } from '../utils/fecha';

// Página de una guía individual (/guias/:slug).
// Exporta `Component` (react-router lazy) y `getStaticPaths` para que
// vite-react-ssg prerenderice un HTML por cada guía (mismo patrón que servicios).

// Resalta visiblemente los marcadores [⚠️ VERIFICAR CON CONTADOR: ...] / [VERIFICAR ...]
// dentro de un texto, para que los contadores los detecten en el review.
function resaltarMarcadores(texto) {
  const partes = texto.split(/(\[⚠️?\s*VERIFICAR[^\]]*\])/g);
  return partes.map((parte, i) =>
    /^\[⚠️?\s*VERIFICAR/.test(parte) ? (
      <mark
        key={i}
        className="rounded bg-[#FDECC8] px-1.5 py-0.5 font-semibold text-[#8A5A00]"
      >
        {parte}
      </mark>
    ) : (
      parte
    )
  );
}

// ── Renderer de un bloque del cuerpo ────────────────────────────────────────
function Bloque({ bloque }) {
  switch (bloque.tipo) {
    case 'subtitulo':
      return (
        <h2 className="mt-10 mb-4 text-2xl sm:text-3xl font-bold text-[#1B2A4A]">
          {bloque.texto}
          <span className="block w-14 h-1 bg-[#D4A843] rounded mt-3"></span>
        </h2>
      );
    case 'parrafo':
      return (
        <p className="mb-5 text-[#4A5568] text-base sm:text-lg leading-relaxed text-left md:text-justify">
          {resaltarMarcadores(bloque.texto)}
        </p>
      );
    case 'lista':
      return (
        <ul className="mb-6 space-y-3">
          {bloque.items.map((item, i) => (
            <li key={i} className="flex items-start">
              <FaCheckCircle className="text-[#D4A843] mt-1.5 mr-3 flex-shrink-0" />
              <span className="text-[#4A5568] text-left md:text-justify">
                {resaltarMarcadores(item)}
              </span>
            </li>
          ))}
        </ul>
      );
    case 'pasos':
      return (
        <ol className="mb-6 space-y-4">
          {bloque.items.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#1B2A4A] text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="pt-1 text-[#4A5568] text-left md:text-justify">
                {resaltarMarcadores(item)}
              </span>
            </li>
          ))}
        </ol>
      );
    case 'tabla':
      return (
        <div className="mb-6 overflow-x-auto rounded-xl border border-[#E8E6DF] shadow-sm">
          <table className="w-full min-w-[480px] border-collapse text-left text-sm sm:text-base">
            <thead>
              <tr className="bg-[#1B2A4A] text-white">
                {bloque.encabezados.map((th, i) => (
                  <th key={i} className="px-4 py-3 font-semibold">
                    {th}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bloque.filas.map((fila, r) => (
                <tr key={r} className={r % 2 ? 'bg-[#F5F5F0]' : 'bg-white'}>
                  {fila.map((celda, c) => (
                    <td key={c} className="px-4 py-3 text-[#4A5568] align-top">
                      {resaltarMarcadores(String(celda))}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'nota': {
      const esAlerta = bloque.variante === 'alerta';
      const Icono = esAlerta ? FaExclamationTriangle : FaInfoCircle;
      return (
        <div
          className={`mb-6 flex gap-3 rounded-xl border-l-4 p-5 ${
            esAlerta
              ? 'border-[#D4A843] bg-[#FDF6E7]'
              : 'border-[#1B2A4A] bg-[#EEF1F6]'
          }`}
        >
          <Icono
            className={`mt-1 flex-shrink-0 ${esAlerta ? 'text-[#B8860B]' : 'text-[#1B2A4A]'}`}
          />
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed text-left">
            {resaltarMarcadores(bloque.texto)}
          </p>
        </div>
      );
    }
    case 'cta': {
      const servicio = contenido.servicios.lista.find((s) => s.id === bloque.servicioId);
      return (
        <div className="my-8 rounded-xl border-t-4 border-[#D4A843] bg-white p-7 shadow-md">
          <p className="mb-5 text-[#4A5568] text-left md:text-justify">
            {resaltarMarcadores(bloque.texto)}
          </p>
          {servicio && (
            <Link
              to={`/servicio/${servicio.id}`}
              className="inline-flex items-center gap-2 rounded-lg bg-[#1B2A4A] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#2C3E65] hover:scale-105"
            >
              Ver {servicio.nombre}
              <FaArrowRight className="text-sm" />
            </Link>
          )}
        </div>
      );
    }
    default:
      return null;
  }
}

// ── FAQ acordeón (mismo comportamiento que ServicioDetalle) ─────────────────
function FaqItem({ pregunta, respuesta, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(isOpen && contentRef.current ? contentRef.current.scrollHeight : 0);
  }, [isOpen]);
  return (
    <div className="overflow-hidden rounded-xl border border-[#E8E6DF] bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-5 transition-colors hover:bg-[#F5F5F0]"
        aria-expanded={isOpen}
      >
        <h3 className="pr-4 text-left text-lg font-semibold text-[#1B2A4A]">{pregunta}</h3>
        <FaChevronDown
          className={`flex-shrink-0 text-[#D4A843] transition-transform duration-400 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}px` }}
        className="overflow-hidden transition-all duration-400 ease-in-out"
      >
        <div className={`border-t border-[#E8E6DF] px-6 pb-5 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <p className="pt-4 text-[#4A5568] leading-relaxed text-left md:text-justify">{respuesta}</p>
        </div>
      </div>
    </div>
  );
}

export function Component() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const guia = getGuia(slug);
  const [faqAbierto, setFaqAbierto] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!guia) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F5F5F0] px-4">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-[#1B2A4A]">Guía no encontrada</h1>
          <button
            onClick={() => navigate('/guias')}
            className="rounded-lg bg-[#1B2A4A] px-6 py-3 text-white transition-colors hover:bg-[#2C3E65]"
          >
            Ver todas las guías
          </button>
        </div>
      </div>
    );
  }

  const servicioRel = contenido.servicios.lista.find((s) => s.id === guia.servicioRelacionadoId);

  return (
    <>
      <Seo {...guiaSeo(guia)} jsonLd={guiaJsonLd(guia)} />
      <div className="min-h-screen bg-[#F5F5F0]">
        {/* Encabezado */}
        <header
          className="text-[#1B2A4A] py-16 pt-28 sm:py-20 sm:pt-32"
          style={{
            background: 'linear-gradient(135deg, #F5F5F0 0%, #E8E6DF 50%, #D9D5CC 100%)',
          }}
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/guias"
              className="mb-6 inline-flex items-center gap-2 text-[#4A5568] transition-colors hover:text-[#D4A843] group"
            >
              <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
              Volver a las guías
            </Link>
            <span className="mb-4 inline-block rounded-full bg-[#1B2A4A]/10 px-3 py-1 text-xs font-semibold text-[#1B2A4A]">
              {guia.categoria}
            </span>
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#1B2A4A]">
              {guia.h1}
            </h1>
            <div className="w-20 h-1 bg-[#D4A843] rounded mb-5"></div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#4A5568]">
              {guia.autor?.nombre && (
                <span>Por <strong className="text-[#1B2A4A]">{guia.autor.nombre}</strong></span>
              )}
              <span className="flex items-center gap-1.5">
                <FaRegClock className="flex-shrink-0" />
                Última actualización:{' '}
                <time dateTime={guia.fechaActualizacion}>{formatearFecha(guia.fechaActualizacion)}</time>
              </span>
            </div>
          </div>
        </header>

        {/* Cuerpo */}
        <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {guia.cuerpo.map((bloque, i) => (
            <Bloque key={i} bloque={bloque} />
          ))}

          {/* FAQs */}
          {guia.faqs?.length > 0 && (
            <section className="mt-14">
              <h2 className="mb-6 text-2xl sm:text-3xl font-bold text-[#1B2A4A]">
                Preguntas frecuentes
                <span className="block w-14 h-1 bg-[#D4A843] rounded mt-3"></span>
              </h2>
              <div className="space-y-4">
                {guia.faqs.map((faq, i) => (
                  <FaqItem
                    key={i}
                    pregunta={faq.pregunta}
                    respuesta={faq.respuesta}
                    isOpen={faqAbierto === i}
                    onToggle={() => setFaqAbierto(faqAbierto === i ? null : i)}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Enlace interno al servicio que convierte */}
          {servicioRel && (
            <ScrollReveal>
              <div className="mt-14 rounded-xl bg-[#1B2A4A] p-8 text-center text-white shadow-lg">
                <h2 className="mb-3 text-2xl font-bold">¿Necesitás ayuda con esto?</h2>
                <p className="mx-auto mb-6 max-w-xl text-white/85">
                  En Grande & Asociados te acompañamos con {servicioRel.nombre.toLowerCase()} y todos
                  tus temas contables e impositivos. Contadores con más de 30 años de experiencia en CABA.
                </p>
                <Link
                  to={`/servicio/${servicioRel.id}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D4A843] px-7 py-3 font-semibold text-[#1B2A4A] transition-all duration-300 hover:bg-white hover:scale-105"
                >
                  Ver {servicioRel.nombre}
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </ScrollReveal>
          )}

          {/* Fuentes */}
          {guia.fuentes?.length > 0 && (
            <section className="mt-12 border-t border-[#D9D5CC] pt-6">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[#1B2A4A]">
                Fuentes
              </h2>
              <ul className="space-y-2">
                {guia.fuentes.map((f, i) => (
                  <li key={i} className="text-sm text-[#6B7280] text-left">{f}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Disclaimer */}
          <aside className="mt-8 flex gap-3 rounded-xl border border-[#D9D5CC] bg-[#E8E6DF]/50 p-5">
            <FaInfoCircle className="mt-0.5 flex-shrink-0 text-[#1B2A4A]" />
            <p className="text-sm text-[#4A5568] leading-relaxed text-left">{disclaimerGuias}</p>
          </aside>
        </article>
      </div>
    </>
  );
}

export function getStaticPaths() {
  return guias.map((g) => `/guias/${g.slug}`);
}
