'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCheckCircle } from 'react-icons/hi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      title: 'Excelência Técnica',
      description: 'Código limpo, escalável e seguindo as melhores práticas do mercado.',
    },
    {
      title: 'Design Premium',
      description: 'Interfaces modernas e intuitivas que encantam usuários.',
    },
    {
      title: 'Performance',
      description: 'Sites ultrarrápidos com score 95+ no Google PageSpeed.',
    },
    {
      title: 'SEO Avançado',
      description: 'Otimização completa para ranquear no topo do Google.',
    },
  ]

  const stats = [
    { number: '50+', label: 'Projetos Entregues' },
    { number: '98%', label: 'Satisfação' },
    { number: '24/7', label: 'Suporte' },
    { number: '95+', label: 'PageSpeed Score' },
  ]

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6">
              Transformando{' '}
              <span className="gradient-text">Visões</span> em Realidade
            </h2>
            <p className="text-gray text-lg font-inter mb-6 leading-relaxed">
              Somos uma software house especializada em desenvolvimento web de
              alto padrão. Combinamos tecnologia de ponta, design sofisticado e
              estratégia digital para criar soluções que realmente fazem a diferença.
            </p>
            <p className="text-gray text-lg font-inter mb-8 leading-relaxed">
              Nossa missão é transformar ideias em produtos digitais excepcionais,
              entregando não apenas código, mas soluções completas que impulsionam
              negócios e geram resultados reais.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <HiCheckCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-space font-semibold text-lg mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray font-inter">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass p-8 rounded-2xl text-center card-hover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-4xl md:text-5xl font-bold font-space gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray font-inter text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative element */}
            <motion.div
              className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-full h-full border-2 border-primary/10 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About