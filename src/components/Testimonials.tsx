'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiStar } from 'react-icons/hi'
import { useState } from 'react'

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Silva',
      position: 'CEO - TechCorp',
      image: '👨‍💼',
      rating: 5,
      text: 'A HRCLN DEV superou todas as nossas expectativas. O site ficou incrível e nossa conversão aumentou 150%. Profissionalismo e qualidade incomparáveis!',
    },
    
 {
  id: 2,
  name: 'Ana Oliveira',
  position: 'Diretora de Marketing - Inovare',
  image: '👩‍💼',
  rating: 5,
  text: 'Trabalho impecável! A equipe entendeu perfeitamente nossa visão e entregou um projeto que transformou nosso negócio digital. Recomendo totalmente!',
},
{
  id: 3,
  name: 'Ricardo Santos',
      position: 'Fundador - StartupXYZ',
      image: '👨‍💻',
      rating: 5,
      text: 'Melhor investimento que fizemos! O sistema desenvolvido otimizou todos nossos processos. Equipe extremamente competente e atenciosa.',
    },
    {
      id: 4,
      name: 'Juliana Costa',
      position: 'Gerente - E-commerce Plus',
      image: '👩‍🦰',
      rating: 5,
      text: 'Nossa loja virtual ficou perfeita! Design moderno, rápida e com ótima experiência de compra. Vendas aumentaram significativamente.',
    },
    {
      id: 5,
      name: 'Pedro Almeida',
      position: 'CTO - DataFlow',
      image: '👨‍🔬',
      rating: 5,
      text: 'Código limpo, documentação perfeita e arquitetura escalável. Finalmente encontramos parceiros que realmente entendem de desenvolvimento.',
    },
    {
      id: 6,
      name: 'Mariana Ferreira',
      position: 'CEO - BeautyStore',
      image: '👩‍🦱',
      rating: 5,
      text: 'Atendimento excepcional do início ao fim. O site ficou lindo e nossos clientes adoraram a nova experiência de navegação!',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

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
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6">
            O que Dizem Nossos{' '}
            <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            A satisfação dos nossos clientes é nossa maior conquista.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="glass p-8 rounded-2xl card-hover"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="text-primary text-xl" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray font-inter leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="text-white font-space font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray text-sm font-inter">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold font-space gradient-text">
              98%
            </div>
            <div className="text-gray font-inter text-sm mt-1">
              Satisfação
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold font-space gradient-text">
              50+
            </div>
            <div className="text-gray font-inter text-sm mt-1">
              Clientes Felizes
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold font-space gradient-text">
              5.0
            </div>
            <div className="text-gray font-inter text-sm mt-1">
              Avaliação Média
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials