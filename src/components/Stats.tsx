'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Estatísticas REAIS da HRCLN DEV
  const stats = [
    { 
      end: 6, 
      suffix: '+', 
      label: 'Projetos Desenvolvidos', 
      duration: 2,
      description: 'Sites e sistemas criados'
    },
    { 
      end: 95, 
      suffix: '+', 
      label: 'Performance Score', 
      duration: 2.5,
      description: 'PageSpeed Insights'
    },
    { 
      end: 100, 
      suffix: '%', 
      label: 'Código Próprio', 
      duration: 2,
      description: 'Desenvolvimento autoral'
    },
    { 
      end: 2024, 
      suffix: '', 
      label: 'Fundação', 
      duration: 1.5,
      description: 'HRCLN DEV nasceu'
    },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Title (opcional) */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">
            Em Números
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-space mt-4 mb-4">
            Resultados{' '}
            <span className="gradient-text">Reais</span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCounter
              key={stat.label}
              stat={stat}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray font-inter leading-relaxed">
            Cada projeto é desenvolvido com dedicação, utilizando as melhores práticas 
            de desenvolvimento web, design responsivo e otimização de performance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Componente de Contador Animado
const StatCounter = ({
  stat,
  index,
  inView,
}: {
  stat: { 
    end: number
    suffix: string
    label: string
    duration: number
    description: string
  }
  index: number
  inView: boolean
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (stat.duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(stat.end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(stat.end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [inView, stat.end, stat.duration])

  return (
    <motion.div
      className="text-center glass p-6 rounded-2xl card-hover"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Número */}
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold font-space gradient-text mb-2">
        {count}
        {stat.suffix}
      </div>
      
      {/* Label Principal */}
      <div className="text-white font-inter text-sm md:text-base font-semibold mb-1">
        {stat.label}
      </div>

      {/* Descrição */}
      <div className="text-gray font-inter text-xs">
        {stat.description}
      </div>
    </motion.div>
  )
}

export default Stats