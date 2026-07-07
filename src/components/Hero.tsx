'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-6 py-2 glass-white rounded-full text-sm font-inter font-medium text-gray">
              🚀 Transformando ideias em realidade digital
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-space mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-white">Desenvolvimento</span>
            <br />
            <span className="gradient-text">Web Premium</span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl font-inter text-gray mb-8 h-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Sites Institucionais',
                2000,
                'Landing Pages',
                2000,
                'Lojas Virtuais',
                2000,
                'Sistemas Web',
                2000,
                'SEO & Performance',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* Slogan */}
          <motion.p
            className="text-lg md:text-xl font-poppins text-gray mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Código com propósito. Soluções que transformam.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-blue text-white rounded-full font-inter font-semibold text-lg btn-hover glow w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar Projeto
            </motion.a>
            <motion.a
              href="#portfolio"
              className="px-8 py-4 glass-white text-white rounded-full font-inter font-semibold text-lg btn-hover w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Portfólio
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <span className="text-gray text-sm font-inter mb-2">
              Role para explorar
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <HiArrowDown className="text-primary text-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating code snippets */}
      <motion.div
        className="absolute top-20 left-10 glass p-4 rounded-lg hidden lg:block"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <code className="text-primary font-mono text-sm">
          {'<NextJS />'}
        </code>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 glass p-4 rounded-lg hidden lg:block"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <code className="text-primary font-mono text-sm">
          {'React.useEffect()'}
        </code>
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-20 glass p-4 rounded-lg hidden lg:block"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <code className="text-primary font-mono text-sm">
          {'TypeScript'}
        </code>
      </motion.div>
    </section>
  )
}

export default Hero