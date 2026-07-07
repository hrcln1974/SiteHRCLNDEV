'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { end: 50, suffix: '+', label: 'Projetos Concluídos', duration: 2 },
    { end: 98, suffix: '%', label: 'Satisfação dos Clientes', duration: 2.5 },
    { end: 95, suffix: '+', label: 'Score Performance', duration: 2 },
    { end: 24, suffix: '/7', label: 'Suporte Disponível', duration: 1.5 },
  ]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
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
      </div>
    </section>
  )
}

const StatCounter = ({
  stat,
  index,
  inView,
}: {
  stat: { end: number; suffix: string; label: string; duration: number }
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
      className="text-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="text-5xl md:text-6xl font-bold font-space gradient-text mb-2">
        {count}
        {stat.suffix}
      </div>
      <div className="text-gray font-inter text-sm md:text-base">
        {stat.label}
      </div>
    </motion.div>
  )
}

export default Stats