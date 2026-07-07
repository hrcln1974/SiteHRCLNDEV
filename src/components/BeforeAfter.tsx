'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiX, HiCheck } from 'react-icons/hi'

const BeforeAfter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const comparisons = [
    {
      before: 'Site desatualizado e lento',
      after: 'Site moderno com 95+ no PageSpeed',
    },
    {
      before: 'Baixa conversão de visitantes',
      after: 'Aumento de 150% nas conversões',
    },
    {
      before: 'Não aparece no Google',
      after: 'Primeiras posições nos resultados',
    },
    {
      before: 'Design ultrapassado',
      after: 'Interface premium e intuitiva',
    },
    {
      before: 'Não funciona em mobile',
      after: 'Responsivo em todos dispositivos',
    },
    {
      before: 'Difícil de atualizar',
      after: 'CMS intuitivo e fácil de usar',
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">
            Transformação
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6">
            Antes vs{' '}
            <span className="gradient-text">Depois</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Veja a transformação real que proporcionamos para nossos clientes.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Before Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="glass p-6 rounded-xl mb-6 border-2 border-red-500/30">
                <h3 className="text-2xl font-bold font-space text-red-400 mb-2 flex items-center gap-2">
                  <HiX className="text-3xl" />
                  Antes
                </h3>
                <p className="text-gray font-inter">
                  Problemas comuns que nossos clientes enfrentavam
                </p>
              </div>

              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={index}
                    className="glass p-4 rounded-lg flex items-start gap-3 border border-red-500/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <HiX className="text-red-400 text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-gray font-inter">{item.before}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* After Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="glass p-6 rounded-xl mb-6 border-2 border-primary">
                <h3 className="text-2xl font-bold font-space text-primary mb-2 flex items-center gap-2">
                  <HiCheck className="text-3xl" />
                  Depois
                </h3>
                <p className="text-gray font-inter">
                  Resultados alcançados com nossas soluções
                </p>
              </div>

              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={index}
                    className="glass p-4 rounded-lg flex items-start gap-3 border border-primary card-hover"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <HiCheck className="text-primary text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-white font-inter font-semibold">
                      {item.after}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <p className="text-gray font-inter mb-6 text-lg">
              Pronto para transformar seu negócio digital?
            </p>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-blue text-white rounded-full font-inter font-semibold text-lg btn-hover glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quero Minha Transformação
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter