'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiLightBulb,
  HiPencil,
  HiCode,
  HiCheckCircle,
  HiRocketLaunch,
} from 'react-icons/hi2'

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const steps = [
    {
      icon: <HiLightBulb className="text-5xl" />,
      title: 'Descoberta',
      description:
        'Entendemos profundamente seu negócio, objetivos e desafios para criar a solução perfeita.',
      color: '#0B63FF',
    },
    {
      icon: <HiPencil className="text-5xl" />,
      title: 'Planejamento',
      description:
        'Criamos a arquitetura, wireframes e design system do seu projeto com foco em UX/UI.',
      color: '#3B82F6',
    },
    {
      icon: <HiCode className="text-5xl" />,
      title: 'Desenvolvimento',
      description:
        'Codificamos com as melhores tecnologias e práticas, garantindo qualidade e performance.',
      color: '#60A5FA',
    },
    {
      icon: <HiCheckCircle className="text-5xl" />,
      title: 'Testes',
      description:
        'Realizamos testes rigorosos em múltiplos dispositivos e navegadores para garantir perfeição.',
      color: '#93C5FD',
    },
    {
      icon: <HiRocketLaunch className="text-5xl" />,
      title: 'Lançamento',
      description:
        'Deploy otimizado e acompanhamento pós-lançamento para garantir o sucesso do projeto.',
      color: '#BFDBFE',
    },
  ]

  return (
    <section id="process" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">
            Nosso Processo
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6">
            Do Conceito ao{' '}
            <span className="gradient-text">Sucesso</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Nossa metodologia comprovada garante resultados excepcionais em
            cada etapa do desenvolvimento.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Card */}
                <div className="glass p-6 rounded-2xl text-center card-hover h-full flex flex-col items-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-blue rounded-full flex items-center justify-center text-white font-bold text-sm glow">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="text-primary mb-4 mt-2"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-space mb-3 text-white">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray font-inter text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                <motion.div
                  className="lg:hidden flex justify-center my-4"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {index < steps.length - 1 && (
                    <div className="text-primary text-2xl">↓</div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-blue text-white rounded-full font-inter font-semibold text-lg btn-hover glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Seu Projeto
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Process