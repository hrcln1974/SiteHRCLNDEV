'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiArrowRight } from 'react-icons/hi'

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-blue -z-10" />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-inter font-medium text-white">
              ✨ Vamos começar seu projeto
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Pronto para Transformar
            <br />
            Sua Presença Digital?
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-white/80 text-lg md:text-xl font-inter mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Entre em contato agora e descubra como podemos levar seu negócio
            para o próximo nível com soluções web de alta performance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href="#contact"
              className="group px-8 py-4 bg-white text-primary rounded-full font-inter font-semibold text-lg btn-hover flex items-center gap-2 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Falar com Especialista
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#portfolio"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-inter font-semibold text-lg btn-hover w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Portfólio
            </motion.a>
          </motion.div>

          {/* Features */}
          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {[
              { icon: '⚡', text: 'Entrega Rápida' },
              { icon: '💎', text: 'Qualidade Premium' },
              { icon: '🎯', text: 'Foco em Resultados' },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <div className="text-4xl mb-2">{feature.icon}</div>
                <div className="text-white font-inter font-semibold">
                  {feature.text}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA