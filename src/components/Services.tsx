'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiCode,
  HiShoppingCart,
  HiLightningBolt,
  HiTemplate,
  HiChartBar,
  HiCube,
} from 'react-icons/hi'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <HiTemplate className="text-5xl" />,
      title: 'Sites Institucionais',
      description:
        'Sites corporativos modernos e responsivos que transmitem profissionalismo e credibilidade para sua marca.',
      features: ['Design Premium', 'SEO Otimizado', 'Alta Performance'],
    },
    {
      icon: <HiLightningBolt className="text-5xl" />,
      title: 'Landing Pages',
      description:
        'Páginas de conversão altamente otimizadas para capturar leads e maximizar seus resultados.',
      features: ['Alta Conversão', 'A/B Testing', 'Analytics'],
    },
    {
      icon: <HiShoppingCart className="text-5xl" />,
      title: 'Lojas Virtuais',
      description:
        'E-commerce completo com integração de pagamentos, gestão de estoque e experiência de compra excepcional.',
      features: ['Pagamentos', 'Gestão', 'Mobile First'],
    },
    {
      icon: <HiCube className="text-5xl" />,
      title: 'Sistemas Web',
      description:
        'Sistemas personalizados para automatizar processos e otimizar a gestão do seu negócio.',
      features: ['Escalável', 'Seguro', 'Customizável'],
    },
    {
      icon: <HiChartBar className="text-5xl" />,
      title: 'SEO & Performance',
      description:
        'Otimização completa para mecanismos de busca e performance web de alto nível.',
      features: ['Top Rankings', 'Speed 95+', 'Core Web Vitals'],
    },
   
  ]

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

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
            <span className="gradient-text">Completas</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Do conceito ao deploy, oferecemos serviços premium de desenvolvimento
            web com foco em qualidade, performance e resultados.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="glass p-8 rounded-2xl card-hover group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Icon */}
              <motion.div
                className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-2xl font-bold font-space mb-4 text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray font-inter mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-sm font-inter text-gray"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover effect line */}
              <div className="mt-6 pt-6 border-t border-gray/20">
                <span className="text-primary font-inter font-semibold text-sm group-hover:text-white transition-colors duration-300">
                  Saiba mais →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services