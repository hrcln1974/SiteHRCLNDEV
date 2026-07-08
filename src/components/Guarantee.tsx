'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiShieldCheck, HiClock, HiCode, HiSupport } from 'react-icons/hi'

const Guarantee = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const commitments = [
    {
      icon: <HiCode className="text-5xl" />,
      title: 'Qualidade Técnica',
      description:
        'Código limpo, organizado e seguindo as melhores práticas da indústria. Performance 95+ garantida em todos os projetos.',
      color: '#0B63FF',
    },
    {
      icon: <HiClock className="text-5xl" />,
      title: 'Prazos Transparentes',
      description:
        'Cronograma definido no início do projeto com atualizações constantes. Comunicação clara sobre cada etapa do desenvolvimento.',
      color: '#3B82F6',
    },
    {
      icon: <HiSupport className="text-5xl" />,
      title: 'Suporte Incluso',
      description:
        'Suporte técnico de 30 dias após entrega do projeto. Ajustes e correções inclusos no período de garantia.',
      color: '#60A5FA',
    },
    {
      icon: <HiShieldCheck className="text-5xl" />,
      title: 'Satisfação do Cliente',
      description:
        'Revisões durante o projeto até aprovação final. Trabalho colaborativo para garantir que o resultado atenda suas expectativas.',
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
            Nossos Compromissos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6 text-white">
            Trabalho com
            <br />
            <span className="text-white">Transparência</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Compromissos claros que garantem a qualidade e o sucesso do seu
            projeto digital.
          </p>
        </motion.div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center card-hover border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
              }}
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
              <p className="text-white/80 font-inter leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold font-space text-white mb-4">
              Seu Sucesso é Nossa Prioridade
            </h3>
            <p className="text-white/80 font-inter leading-relaxed mb-6">
              Trabalho baseado em confiança mútua, comunicação transparente e
              compromisso com resultados. Cada projeto recebe atenção dedicada
              do início ao fim.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80 font-inter">
              <span>✓ Reuniões de alinhamento</span>
              <span>✓ Atualizações constantes</span>
              <span>✓ Feedback contínuo</span>
              <span>✓ Documentação completa</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Guarantee