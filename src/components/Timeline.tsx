'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const milestones = [
    {
      year: '2025',
      title: 'Início da Jornada',
      description:
        'Fundação da HRCLN DEV com foco em desenvolvimento web moderno e soluções digitais de qualidade.',
    },
    {
      year: '2025',
      title: 'Primeiros Projetos',
      description:
        'Desenvolvimento dos primeiros sites e landing pages com tecnologias modernas como Next.js e React.',
    },
    {
      year: '2025-2026',
      title: 'Crescimento',
      description:
        'Expansão do portfólio com projetos de e-commerce, sistemas web e otimização de performance.',
    },
    {
          year: '2026',
      title: 'Consolidação',
      description:
        'Consolidação da marca HRCLN DEV no mercado de desenvolvimento web com foco em qualidade e resultados.',
    },
    {
      year: 'Futuro',
      title: 'Próximos Passos',
      description:
        'Expandir serviços, atender mais clientes e continuar entregando soluções web de alto padrão.',
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">
            Nossa Jornada
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6">
            Construindo o{' '}
            <span className="gradient-text">Futuro</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Uma história em construção, focada em qualidade, inovação e resultados reais.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary to-transparent hidden md:block" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    className="glass p-6 rounded-xl inline-block card-hover"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-primary font-space font-bold text-2xl mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-white font-space font-bold text-xl mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray font-inter text-sm">
                      {milestone.description}
                    </p>
                  </motion.div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block relative z-10">
                  <motion.div
                    className="w-6 h-6 bg-primary rounded-full glow"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    whileHover={{ scale: 1.5 }}
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <p className="text-gray font-inter mb-6 text-lg">
            Quer fazer parte desta história?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-blue text-white rounded-full font-inter font-semibold text-lg btn-hover glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Projeto Comigo
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline