'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="hidden md:flex items-center justify-center gap-8">
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-300 hover:text-blue-400 transition-colors font-medium bg-transparent border-0 cursor-pointer"
          >
            Início
          </button>
          
          <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
            Serviços
          </a>
          <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
            Sobre
          </a>
          <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
            Portfólio
          </a>
          <a href="#process" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
            Processo
          </a>
          <a href="#technologies" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
            Tecnologias
          </a>
          <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors font-medium">
            Contato
          </a>
          
          <a
            href="#contact"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors font-medium"
          >
            Começar Projeto
          </a>
        </div>
      </div>
    </nav>
  );
}