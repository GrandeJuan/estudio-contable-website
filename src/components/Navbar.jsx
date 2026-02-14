import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaChevronDown, FaCalculator, FaFileInvoiceDollar, FaUsers, FaChartLine, FaBuilding, FaSearchDollar } from 'react-icons/fa';
import { contenido } from '../data/contenido';

const iconos = { FaCalculator, FaFileInvoiceDollar, FaUsers, FaChartLine, FaBuilding, FaSearchDollar };

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isServicePage, setIsServicePage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleHashChange = () => {
      setIsServicePage(window.location.hash.startsWith('#/servicio/'));
    };

    handleHashChange();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navLinks = [
    { to: 'inicio', label: 'Inicio' },
    { to: 'sobre-nosotros', label: 'Sobre el Estudio' },
    { to: 'servicios', label: 'Servicios' },
    { to: 'equipo', label: 'Equipo' },
    { to: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    if (isServicePage) {
      // Store target section, navigate to home, then scroll after render
      window.location.hash = '#';
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-cta/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-cta py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.location.hash = '#'; }}
              className="cursor-pointer flex items-center space-x-3"
            >
              <img
                src="/images/logo.png"
                alt={contenido.estudio.nombre}
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) =>
              link.to === 'servicios' ? (
                <div key={link.to} className="relative group">
                  {isServicePage ? (
                    <button
                      onClick={() => handleNavClick(link.to)}
                      className="nav-link-underline cursor-pointer font-medium transition-colors text-white hover:text-[#2C3E65] flex items-center gap-1"
                    >
                      {link.label}
                      <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
                    </button>
                  ) : (
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="nav-link-underline cursor-pointer font-medium transition-colors text-white hover:text-[#2C3E65] flex items-center gap-1"
                      activeClass="!text-[#2C3E65] font-bold"
                    >
                      {link.label}
                      <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
                    </Link>
                  )}
                  {/* Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[240px]">
                      {contenido.servicios.lista.map((servicio) => {
                        const Icono = iconos[servicio.icono] || FaCalculator;
                        return (
                          <a
                            key={servicio.id}
                            href={`#/servicio/${servicio.id}`}
                            className="flex items-center gap-3 px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-cta transition-colors"
                          >
                            <Icono className="text-cta/70 flex-shrink-0" />
                            {servicio.nombre}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : isServicePage ? (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="nav-link-underline cursor-pointer font-medium transition-colors text-white hover:text-[#2C3E65]"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="nav-link-underline cursor-pointer font-medium transition-colors text-white hover:text-[#2C3E65]"
                  activeClass="!text-[#2C3E65] font-bold"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-white"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) =>
              link.to === 'servicios' ? (
                <div key={link.to}>
                  {isServicePage ? (
                    <button
                      onClick={() => handleNavClick(link.to)}
                      className="block cursor-pointer font-medium transition-colors text-white hover:text-[#2C3E65]"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => setMenuOpen(false)}
                      className="block cursor-pointer font-medium transition-colors text-white hover:text-[#2C3E65]"
                      activeClass="!text-[#2C3E65] font-bold"
                    >
                      {link.label}
                    </Link>
                  )}
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-white/40 pl-3">
                    {contenido.servicios.lista.map((servicio) => {
                      const Icono = iconos[servicio.icono] || FaCalculator;
                      return (
                        <a
                          key={servicio.id}
                          href={`#/servicio/${servicio.id}`}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
                        >
                          <Icono className="text-white/70 flex-shrink-0 text-xs" />
                          {servicio.nombre}
                        </a>
                      );
                    })}
                  </div>
                </div>
              ) : isServicePage ? (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="block cursor-pointer font-medium transition-colors text-white hover:text-[#2C3E65]"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="block cursor-pointer font-medium transition-colors text-white hover:text-[#2C3E65]"
                  activeClass="!text-[#2C3E65] font-bold"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
