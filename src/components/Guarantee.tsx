'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiShieldCheck, HiClock, HiTrendingUp, HiRefresh } from 'react-icons/hi'

const Guarantee = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const guarantees = [
    {
      icon: <HiShieldCheck className="text-5xl" />,
      title: '100% Garantido',
      description:
        'Se não ficar satisfeito, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.',
      color: '#0B63FF',
    },
    {
      icon: <HiClock className="text-5xl" />,
      title: 'Entrega no Prazo',
      description:
        'Cumprimos rigorosamente o cronograma. Atrasos? Você recebe compensação financeira.',
      color: '#3B82F6',
    },
    {
      icon: <HiTrendingUp className="text-5xl" />,
      title: 'Resultados Mensuráveis',
      description:
        'Garantimos métricas de performance: 95+ no PageSpeed, carregamento < 3s, SEO otimizado.',
      color: '#60A5FA',
    },
    {
      icon: <HiRefresh className="text-5xl" />,
      title: 'Revisões Ilimitadas',
      description:
        'Durante o projeto, você tem revisões ilimitadas até ficar 100% satisfeito com o resultado.',
      color: '#93C5FD',
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-blue -z-10" />
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white/80 font-inter font-semibold text-sm uppercase tracking-wider">
            Nossa Garantia
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6 text-white">
            Compromisso com a
            <br />
            <span className="text-white">Excelência</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Seu sucesso é nossa prioridade. Por isso, oferecemos garantias
            sólidas que demonstram nossa confiança no trabalho que entregamos.
          </p>
        </motion.div>

        {/* Guarantees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center card-hover border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <motion.div
                className="text-white mb-6 flex justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-bold font-space mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-white/80 font-inter leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20">
            <p className="text-white font-inter font-semibold flex items-center gap-2">
              <HiShieldCheck className="text-2xl" />
              Mais de 50 projetos entregues com 100% de satisfação
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Guarantee