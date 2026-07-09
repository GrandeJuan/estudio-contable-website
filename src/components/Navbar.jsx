import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaCalculator, FaFileInvoiceDollar, FaUsers, FaBuilding, FaSearchDollar } from 'react-icons/fa';
import { contenido } from '../data/contenido';

const iconos = { FaCalculator, FaFileInvoiceDollar, FaUsers, FaBuilding, FaSearchDollar };

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isServicePage = location.pathname.startsWith('/servicio/');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'inicio', label: 'Inicio' },
    { to: 'sobre-nosotros', label: 'Sobre el Estudio' },
    { to: 'servicios', label: 'Servicios' },
    { to: 'equipo', label: 'Equipo' },
    { to: 'contacto', label: 'Contacto' },
  ];

  // Desde una página de servicio: volver a la home y hacer scroll a la sección.
  const handleNavClick = (sectionId) => {
    setMenuOpen(false);
    navigate('/');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        menuOpen
          ? `bg-[#F5F5F0] ${scrolled ? 'shadow-lg py-3' : 'py-4'}`
          : scrolled
            ? 'bg-[#F5F5F0]/80 backdrop-blur-md shadow-lg py-3'
            : 'bg-[#F5F5F0] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <RouterLink
              to="/"
              className="cursor-pointer flex items-center space-x-3"
            >
              <img
                src="/images/logo.webp"
                alt={contenido.estudio.nombre}
                width={220}
                height={162}
                className="h-12 w-auto"
              />
            </RouterLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) =>
              link.to === 'servicios' ? (
                <div key={link.to} className="relative group">
                  {isServicePage ? (
                    <button
                      onClick={() => handleNavClick(link.to)}
                      className="nav-link-underline cursor-pointer font-medium transition-colors text-[#1B2A4A] hover:text-[#D4A843] flex items-center gap-1"
                    >
                      {link.label}
                      <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
                    </button>
                  ) : (
                    <ScrollLink
                      to={link.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="nav-link-underline cursor-pointer font-medium transition-colors text-[#1B2A4A] hover:text-[#D4A843] flex items-center gap-1"
                      activeClass="!text-[#1B2A4A] font-bold"
                    >
                      {link.label}
                      <FaChevronDown className="text-xs transition-transform group-hover:rotate-180" />
                    </ScrollLink>
                  )}
                  {/* Dropdown */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-[#E8E6DF] py-2 min-w-[240px]">
                      {contenido.servicios.lista.map((servicio) => {
                        const Icono = iconos[servicio.icono] || FaCalculator;
                        return (
                          <RouterLink
                            key={servicio.id}
                            to={`/servicio/${servicio.id}`}
                            className="flex items-center gap-3 px-5 py-2.5 text-sm text-[#4A5568] hover:bg-[#F5F5F0] hover:text-[#D4A843] transition-colors"
                          >
                            <Icono className="text-[#1B2A4A]/70 flex-shrink-0" />
                            {servicio.nombre}
                          </RouterLink>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : isServicePage ? (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="nav-link-underline cursor-pointer font-medium transition-colors text-[#1B2A4A] hover:text-[#D4A843]"
                >
                  {link.label}
                </button>
              ) : (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="nav-link-underline cursor-pointer font-medium transition-colors text-[#1B2A4A] hover:text-[#D4A843]"
                  activeClass="!text-[#1B2A4A] font-bold"
                >
                  {link.label}
                </ScrollLink>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-[#1B2A4A]"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div id="mobile-menu" className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) =>
              link.to === 'servicios' ? (
                <div key={link.to}>
                  {isServicePage ? (
                    <button
                      onClick={() => handleNavClick(link.to)}
                      className="block cursor-pointer font-medium transition-colors text-[#1B2A4A] hover:text-[#D4A843]"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <ScrollLink
                      to={link.to}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => setMenuOpen(false)}
                      className="block cursor-pointer font-medium transition-colors text-[#1B2A4A] hover:text-[#D4A843]"
                      activeClass="!text-[#1B2A4A] font-bold"
                    >
                      {link.label}
                    </ScrollLink>
                  )}
                  <div className="ml-4 mt-2 space-y-2 border-l-2 border-[#D4A843]/30 pl-3">
                    {contenido.servicios.lista.map((servicio) => {
                      const Icono = iconos[servicio.icono] || FaCalculator;
                      return (
                        <RouterLink
                          key={servicio.id}
                          to={`/servicio/${servicio.id}`}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2 text-sm text-[#4A5568] hover:text-[#D4A843] transition-colors"
                        >
                          <Icono className="text-[#1B2A4A]/70 flex-shrink-0 text-xs" />
                          {servicio.nombre}
                        </RouterLink>
                      );
                    })}
                  </div>
                </div>
              ) : isServicePage ? (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="block cursor-pointer font-medium transition-colors text-[#1B2A4A] hover:text-[#D4A843]"
                >
                  {link.label}
                </button>
              ) : (
                <ScrollLink
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="block cursor-pointer font-medium transition-colors text-[#1B2A4A] hover:text-[#D4A843]"
                  activeClass="!text-[#1B2A4A] font-bold"
                >
                  {link.label}
                </ScrollLink>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
