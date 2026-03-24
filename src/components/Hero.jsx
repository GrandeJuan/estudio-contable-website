import { Link } from 'react-scroll';
import { contenido } from '../data/contenido';

const Hero = ({ onConsultar }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center py-24"
      style={{
        background: 'linear-gradient(135deg, #F5F5F0 0%, #E8E6DF 50%, #D9D5CC 100%)',
      }}
    >
      {/* Patrón de fondo sutil */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B2A4A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Línea decorativa dorada */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4A843] to-transparent"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="hero-stagger hero-stagger-1 mb-6">
          <img
            src="/images/logo-hero.png"
            alt="Estudio Contable Grande & Asociados - Contadores Consultores"
            className="mx-auto w-64 sm:w-80 md:w-96 lg:w-[28rem]"
          />
        </div>
        <p className="hero-stagger hero-stagger-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-6 md:mb-8 text-[#1B2A4A]">
          {contenido.estudio.slogan}
        </p>
        <p className="hero-stagger hero-stagger-3 text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-10 text-[#4A5568] max-w-2xl mx-auto">
          Más de 30 años asesorando a empresas y particulares.
          <br />
          Servicios de auditoría, impuestos, sociedades y liquidación de sueldos.
        </p>

        {/* CTA Buttons */}
        <div className="hero-stagger hero-stagger-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onConsultar}
            className="cursor-pointer bg-[#1B2A4A] hover:bg-[#2C3E65] text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
          >
            Contactanos
          </button>
          <Link
            to="servicios"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer border-2 border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white font-semibold px-6 py-3 md:px-8 md:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
          >
            Ver Servicios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
