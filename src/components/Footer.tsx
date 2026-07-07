'use client'

import { motion } from 'framer-motion'
import { HiHeart } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: {
      title: 'Empresa',
      links: [
        { name: 'Sobre Nós', href: '#about' },
        { name: 'Serviços', href: '#services' },
        { name: 'Portfólio', href: '#portfolio' },
        { name: 'Contato', href: '#contact' },
      ],
    },
    services: {
      title: 'Serviços',
      links: [
        { name: 'Sites Institucionais', href: '#services' },
        { name: 'Landing Pages', href: '#services' },
        { name: 'Lojas Virtuais', href: '#services' },
        { name: 'Sistemas Web', href: '#services' },
      ],
    },
    resources: {
      title: 'Recursos',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Cases', href: '#portfolio' },
        { name: 'FAQ', href: '#' },
        { name: 'Suporte', href: '#contact' },
      ],
    },
  }

  return (
    <footer className="relative bg-dark border-t border-gray/10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-effect -z-10 opacity-20" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="text-3xl font-bold font-space gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              HRCLN DEV
            </motion.div>
            <p className="text-gray font-inter mb-6 leading-relaxed">
              Código com propósito. Soluções que transformam.
            </p>
            <p className="text-gray font-inter text-sm mb-6">
              Desenvolvimento web premium com foco em qualidade, performance e
              resultados excepcionais.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {['in', 'ig', 'gh', 'tw'].map((social, index) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-white font-space font-bold text-lg mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray hover:text-primary transition-colors font-inter text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          className="glass p-8 rounded-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold font-space mb-4 text-white">
              Receba Novidades
            </h3>
            <p className="text-gray font-inter mb-6">
              Fique por dentro das últimas tendências em desenvolvimento web
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="flex-1 px-6 py-3 bg-white/5 border border-gray/20 rounded-full text-white font-inter focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                className="px-8 py-3 bg-gradient-blue text-white rounded-full font-inter font-semibold btn-hover glow"
                whileHover={{ scale: 1.05 }}
                               whileTap={{ scale: 0.95 }}
              >
                Inscrever
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray font-inter text-sm text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              © {currentYear} HRCLN DEV. Todos os direitos reservados.
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-gray font-inter text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Feito com <HiHeart className="text-primary animate-pulse" /> por
              HRCLN DEV
            </motion.div>

            <motion.div
              className="flex gap-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="#"
                className="text-gray hover:text-primary transition-colors font-inter"
              >
                Privacidade
              </a>
              <a
                href="#"
                className="text-gray hover:text-primary transition-colors font-inter"
              >
                Termos
              </a>
              <a
                href="#"
                className="text-gray hover:text-primary transition-colors font-inter"
              >
                Cookies
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer