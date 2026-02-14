import { Link } from 'react-scroll';
import { contenido } from '../data/contenido';

const Hero = ({ onConsultar }) => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center text-white"
      style={{
        background: 'linear-gradient(135deg, #2C3E65 0%, #1A2847 100%)',
      }}
    >
      {/* Overlay decorativo */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Patrón de fondo sutil */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="hero-stagger hero-stagger-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Estudio Contable<br />Grande &amp; Asociados
        </h1>
        <p className="hero-stagger hero-stagger-2 text-xl sm:text-2xl md:text-3xl font-light mb-8 text-gray-200">
          {contenido.estudio.slogan}
        </p>
        <p className="hero-stagger hero-stagger-3 text-base sm:text-lg md:text-xl mb-10 text-gray-300 max-w-2xl mx-auto">
          {contenido.estudio.descripcionCorta}
        </p>

        {/* CTA Buttons */}
        <div className="hero-stagger hero-stagger-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onConsultar}
            className="cursor-pointer bg-cta hover:bg-cta-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Contactanos
          </button>
          <Link
            to="servicios"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer bg-cta hover:bg-cta-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Ver Servicios
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
