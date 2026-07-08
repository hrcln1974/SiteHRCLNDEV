'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCheck, HiArrowRight } from 'react-icons/hi'

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      name: 'Landing Page',
      description: 'Página única otimizada para conversão',
      icon: '📄',
      features: [
        'Design Responsivo Premium',
        'Formulário de Contato',
        'SEO Básico Implementado',
        'Google Analytics',
        'Performance 95+',
        'Entrega em 1-2 semanas',
      ],
      highlight: false,
    },
    {
      name: 'Site Institucional',
      description: 'Site completo para sua empresa',
      icon: '🌐',
      features: [
        'Design Responsivo Premium',
        'Até 8 Páginas',
        'CMS Personalizado',
        'Blog Integrado (opcional)',
        'SEO Avançado',
        'Google Analytics',
        'Formulários Múltiplos',
        'Performance 95+',
        'Entrega em 3-4 semanas',
      ],
      highlight: true,
    },
    {
      name: 'E-commerce',
      description: 'Loja virtual profissional',
      icon: '🛍️',
      features: [
        'Design Responsivo Premium',
        'Catálogo de Produtos',
        'Painel Administrativo',
        'Integração de Pagamentos',
        'Gestão de Estoque',
        'SEO E-commerce',
        'Cupons de Desconto',
        'Performance 95+',
        'Entrega em 6-8 semanas',
      ],
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6">
            Soluções{' '}
            <span className="gradient-text">Sob Medida</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Cada projeto é único. Solicite um orçamento personalizado de acordo
            com suas necessidades e objetivos.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              className={`glass p-8 rounded-2xl relative card-hover ${
                service.highlight ? 'border-2 border-primary' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Popular Badge */}
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-blue px-6 py-2 rounded-full glow">
                    <span className="text-white font-inter font-semibold text-sm">
                      ⭐ Mais Solicitado
                    </span>
                  </div>
                </div>
              )}

              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>

              {/* Service Name */}
              <h3 className="text-2xl font-bold font-space text-white mb-2 mt-4">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-gray font-inter text-sm mb-6">
                {service.description}
              </p>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-gray/20">
                <div className="text-4xl font-bold font-space gradient-text mb-2">
                  Sob Consulta
                </div>
                <span className="text-gray font-inter text-sm">
                  Orçamento personalizado
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-inter text-sm"
                  >
                    <HiCheck className="text-primary text-xl flex-shrink-0 mt-0.5" />
                    <span className="text-gray">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-full font-inter font-semibold text-center transition-all duration-300 ${
                  service.highlight
                    ? 'bg-gradient-blue text-white glow'
                    : 'glass-white text-white hover:bg-primary/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
                <HiArrowRight />
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center glass p-8 rounded-2xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold font-space text-white mb-4">
            Precisa de algo diferente?
          </h3>
          <p className="text-gray font-inter mb-6 leading-relaxed">
            Cada projeto é único e merece atenção especial. Entre em contato e
            vamos criar uma solução personalizada que atenda perfeitamente suas
            necessidades e orçamento.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray font-inter">
            <span>✓ Orçamento sem compromisso</span>
            <span>✓ Primeira consulta gratuita</span>
            <span>✓ Resposta em até 24h</span>
            <span>✓ Parcelamento disponível</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing