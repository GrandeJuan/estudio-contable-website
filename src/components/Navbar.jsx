import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { contenido } from '../data/contenido';

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
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
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) =>
              isServicePage ? (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="nav-link-underline cursor-pointer font-medium transition-colors text-[#2C3E65] hover:text-cta"
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
                  className="nav-link-underline cursor-pointer font-medium transition-colors text-[#2C3E65] hover:text-cta"
                  activeClass="!text-cta font-bold"
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
              className="text-2xl text-[#2C3E65]"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) =>
              isServicePage ? (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link.to)}
                  className="block cursor-pointer font-medium transition-colors text-[#2C3E65] hover:text-cta"
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
                  className="block cursor-pointer font-medium transition-colors text-[#2C3E65] hover:text-cta"
                  activeClass="!text-cta font-bold"
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
