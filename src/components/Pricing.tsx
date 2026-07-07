'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCheck, HiX, HiStar } from 'react-icons/hi'

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const plans = [
    {
      name: 'Landing Page',
      price: '2.500',
      description: 'Ideal para captura de leads e campanhas',
      popular: false,
      features: [
        { text: 'Design Responsivo Premium', included: true },
        { text: 'Até 3 Seções', included: true },
        { text: 'Formulário de Contato', included: true },
        { text: 'SEO Básico', included: true },
        { text: 'Google Analytics', included: true },
        { text: 'Tempo de Entrega: 1 semana', included: true },
        { text: 'CMS Personalizado', included: false },
        { text: 'Integração E-commerce', included: false },
      ],
    },
    {
      name: 'Site Institucional',
      price: '5.000',
      description: 'Perfeito para empresas e negócios',
      popular: true,
      features: [
        { text: 'Design Responsivo Premium', included: true },
        { text: 'Até 8 Páginas', included: true },
        { text: 'CMS Personalizado', included: true },
        { text: 'Blog Integrado', included: true },
        { text: 'SEO Avançado', included: true },
        { text: 'Google Analytics', included: true },
        { text: 'Formulários Múltiplos', included: true },
        { text: 'Tempo de Entrega: 3 semanas', included: true },
        { text: 'Integração E-commerce', included: false },
      ],
    },
    {
      name: 'E-commerce',
      price: '15.000',
      description: 'Loja virtual completa e profissional',
      popular: false,
      features: [
        { text: 'Design Responsivo Premium', included: true },
        { text: 'Produtos Ilimitados', included: true },
        { text: 'Painel Administrativo', included: true },
        { text: 'Integração de Pagamentos', included: true },
        { text: 'Gestão de Estoque', included: true },
        { text: 'SEO E-commerce', included: true },
        { text: 'Sistema de Cupons', included: true },
        { text: 'Email Marketing', included: true },
        { text: 'Tempo de Entrega: 8 semanas', included: true },
      ],
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
            Investimento
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6">
            Planos e{' '}
            <span className="gradient-text">Preços</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Escolha o plano ideal para o seu negócio. Todos incluem suporte
            técnico e garantia de satisfação.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`glass p-8 rounded-2xl relative ${
                plan.popular ? 'border-2 border-primary' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-blue px-6 py-2 rounded-full flex items-center gap-2 glow">
                    <HiStar className="text-white" />
                    <span className="text-white font-inter font-semibold text-sm">
                      Mais Popular
                    </span>
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-2xl font-bold font-space text-white mb-2 mt-4">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-gray font-inter text-sm mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-gray font-inter text-lg mr-1">R$</span>
                  <span className="text-5xl font-bold font-space gradient-text">
                    {plan.price}
                  </span>
                </div>
                <span className="text-gray font-inter text-sm">
                  Pagamento único
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 font-inter text-sm"
                  >
                    {feature.included ? (
                      <HiCheck className="text-primary text-xl flex-shrink-0 mt-0.5" />
                    ) : (
                      <HiX className="text-gray/50 text-xl flex-shrink-0 mt-0.5" />
                    )}
                    <span
                      className={
                        feature.included ? 'text-gray' : 'text-gray/50'
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.a
                href="#contact"
                className={`block w-full py-4 rounded-full font-inter font-semibold text-center transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-blue text-white glow'
                    : 'glass-white text-white hover:bg-primary/10'
                }`}
                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
              >
                Começar Agora
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray font-inter mb-4">
            Precisa de algo personalizado? 
          </p>
          <motion.a
            href="#contact"
            className="text-primary font-inter font-semibold hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            Solicite um orçamento customizado →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing