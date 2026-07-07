'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Processo', href: '#process' },
    { name: 'Tecnologias', href: '#technologies' },
    { name: 'Contato', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl md:text-3xl font-bold font-space gradient-text"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#home')
          }}
        >
          HRCLN DEV
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                className="text-gray hover:text-white transition-colors duration-300 font-inter font-medium relative group"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button Desktop */}
        <motion.a
          href="#contact"
          className="hidden lg:block px-6 py-3 bg-gradient-blue text-white rounded-full font-inter font-semibold btn-hover glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={(e) => {
            e.preventDefault()
            handleNavClick('#contact')
          }}
        >
          Começar Projeto
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden text-white text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden glass mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
                        <ul className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className="block text-gray hover:text-white transition-colors duration-300 font-inter font-medium text-lg"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <a
                  href="#contact"
                  className="block w-full px-6 py-3 bg-gradient-blue text-white rounded-full font-inter font-semibold text-center"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                >
                  Começar Projeto
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header