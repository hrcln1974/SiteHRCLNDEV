'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiClock, HiFire, HiLightningBolt } from 'react-icons/hi'
import { useEffect, useState } from 'react'

const Urgency = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Countdown Timer (gatilho de urgência)
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const [spotsLeft, setSpotsLeft] = useState(3)

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-primary/20 -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="glass p-8 md:p-12 rounded-2xl border-2 border-primary relative overflow-hidden">
            {/* Animated Background */}
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Badge */}
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-red-500 px-6 py-2 rounded-full flex items-center gap-2">
                <HiFire className="text-white text-xl" />
                <span className="text-white font-inter font-bold text-sm uppercase">
                  Oferta Limitada
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-4 text-white">
              Últimas Vagas para
              <span className="gradient-text"> Janeiro 2024</span>
            </h2>

            <p className="text-gray text-lg font-inter mb-8">
              Estamos com agenda limitada e aceitamos apenas {spotsLeft} novos
              projetos este mês. Garanta sua vaga antes que esgote!
            </p>

            {/* Countdown */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: timeLeft.hours, label: 'Horas' },
                { value: timeLeft.minutes, label: 'Minutos' },
                { value: timeLeft.seconds, label: 'Segundos' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  className="glass-white p-6 rounded-xl text-center"
                                   initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold font-space gradient-text"
                    key={item.value}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(item.value).padStart(2, '0')}
                  </motion.div>
                  <div className="text-gray font-inter text-sm mt-2">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Spots Left */}
            <motion.div
              className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center justify-between">
                <span className="text-white font-inter font-semibold flex items-center gap-2">
                  <HiLightningBolt className="text-red-500 text-xl" />
                  Apenas {spotsLeft} vagas restantes
                </span>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full ${
                        i < spotsLeft ? 'bg-red-500' : 'bg-gray/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="flex-1 px-8 py-4 bg-gradient-blue text-white rounded-full font-inter font-semibold text-lg text-center btn-hover glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Garantir Minha Vaga Agora
              </motion.a>
              <motion.a
                href="#portfolio"
                className="px-8 py-4 glass-white text-white rounded-full font-inter font-semibold text-lg text-center btn-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Projetos
              </motion.a>
            </div>

            {/* Trust Elements */}
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray font-inter">
              <span>✓ Sem taxa de setup</span>
              <span>✓ Garantia de 30 dias</span>
              <span>✓ Suporte incluído</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Urgency