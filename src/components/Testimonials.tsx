'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiCode,
  HiLightningBolt,
  HiShieldCheck,
  HiTemplate,
  HiTrendingUp,
  HiClock,
  HiAcademicCap,
  HiHeart,
  HiCheckCircle,
} from 'react-icons/hi'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const differentials = [
    {
      id: 1,
      icon: <HiCode className="text-5xl" />,
      title: 'Código Limpo e Profissional',
      description:
        'Desenvolvimento com as melhores práticas, código organizado, comentado e seguindo padrões modernos da indústria.',
      benefits: [
        'Código semântico e legível',
        'Versionamento com Git',
        'Documentação completa',
      ],
    },
    {
      id: 2,
      icon: <HiLightningBolt className="text-5xl" />,
      title: 'Performance 95+ Garantida',
      description:
        'Sites ultrarrápidos otimizados para carregar em menos de 3 segundos, com score alto no Google PageSpeed Insights.',
      benefits: [
        'Lazy loading implementado',
        'Imagens otimizadas',
        'Cache inteligente',
      ],
    },
    {
      id: 3,
      icon: <HiTemplate className="text-5xl" />,
      title: 'Design Responsivo Total',
      description:
        'Interfaces que funcionam perfeitamente em todos os dispositivos: smartphones, tablets e desktops.',
      benefits: [
        'Mobile-first approach',
        'Testado em múltiplos devices',
        'Compatibilidade cross-browser',
      ],
    },
    {
      id: 4,
      icon: <HiTrendingUp className="text-5xl" />,
      title: 'SEO Otimizado',
      description:
        'Estrutura preparada para ranquear bem no Google com meta tags, schema.org, sitemap e boas práticas de SEO.',
      benefits: [
        'Meta tags configuradas',
        'URLs amigáveis',
        'Estrutura semântica HTML5',
      ],
    },
    {
      id: 5,
      icon: <HiShieldCheck className="text-5xl" />,
      title: 'Segurança e Qualidade',
      description:
        'Código testado, validado e com proteções contra vulnerabilidades comuns, garantindo segurança para seus usuários.',
      benefits: [
        'Validação de formulários',
        'Proteção HTTPS',
        'Boas práticas de segurança',
      ],
    },
    {
      id: 6,
      icon: <HiClock className="text-5xl" />,
      title: 'Entrega no Prazo',
      description:
        'Compromisso com prazos estabelecidos. Cronograma claro desde o início do projeto com atualizações constantes.',
      benefits: [
        'Planejamento detalhado',
        'Comunicação transparente',
        'Atualizações frequentes',
      ],
    },
    {
      id: 7,
      icon: <HiAcademicCap className="text-5xl" />,
      title: 'Tecnologias Modernas',
      description:
        'Uso das melhores tecnologias do mercado: Next.js, React, TypeScript, Tailwind CSS e ferramentas profissionais.',
      benefits: [
        'Stack atualizado',
        'Frameworks modernos',
        'Melhores práticas 2024',
      ],
    },
    {
      id: 8,
      icon: <HiHeart className="text-5xl" />,
      title: 'Suporte Dedicado',
      description:
        'Suporte completo durante e após o desenvolvimento. Seu projeto não termina no deploy, continuamos junto com você.',
      benefits: [
        'Suporte pós-entrega',
        'Manutenção disponível',
        'Ajustes e melhorias',
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark -z-10" />
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
            Diferenciais
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6">
            Por que escolher a{' '}
            <span className="gradient-text">HRCLN DEV</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Desenvolvimento web profissional com foco em qualidade, performance
            e resultados reais para o seu negócio digital.
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {differentials.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass p-6 rounded-2xl card-hover group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <motion.div
                className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold font-space mb-3 text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray font-inter text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {item.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm font-inter text-gray"
                  >
                    <HiCheckCircle className="text-primary text-base flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          className="glass p-8 md:p-12 rounded-2xl max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold font-space mb-4 text-white">
            Compromisso com a Excelência
          </h3>
          <p className="text-gray font-inter text-lg leading-relaxed mb-8">
            Cada linha de código é escrita pensando em performance, segurança e
            experiência do usuário. Seu projeto merece o melhor, e é isso que
            entregamos.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-4xl font-bold font-space gradient-text mb-1">
                100%
              </div>
              <div className="text-gray font-inter text-sm">Código Próprio</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-space gradient-text mb-1">
                95+
              </div>
              <div className="text-gray font-inter text-sm">
                Performance Score
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold font-space gradient-text mb-1">
                6+
              </div>
              <div className="text-gray font-inter text-sm">
                Projetos Criados
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold font-space gradient-text mb-1">
                2024
              </div>
              <div className="text-gray font-inter text-sm">Fundação</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray font-inter mb-6 text-lg">
            Pronto para ter um site profissional?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-blue text-white rounded-full font-inter font-semibold text-lg btn-hover glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Meu Projeto
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials