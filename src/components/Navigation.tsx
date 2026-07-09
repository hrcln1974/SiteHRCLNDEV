'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#inicio', label: 'Início', id: 'inicio' },
    { href: '#services', label: 'Serviços', id: 'services' },
    { href: '#about', label: 'Sobre', id: 'about' },
    { href: '#portfolio', label: 'Portfólio', id: 'portfolio' },
    { href: '#process', label: 'Processo', id: 'process' },
    { href: '#technologies', label: 'Tecnologias', id: 'technologies' },
    { href: '#contact', label: 'Contato', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        {/* Desktop Menu - CENTRALIZADO */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.id)}
              className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors cursor-pointer font-medium"
          >
            Começar Projeto
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-gray-900/95 backdrop-blur-md rounded-lg p-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className="block py-3 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer font-medium border-b border-gray-800 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-center cursor-pointer font-medium"
            >
              Começar Projeto
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}