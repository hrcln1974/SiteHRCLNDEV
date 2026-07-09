'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { HiArrowRight, HiPlay, HiCheckCircle } from 'react-icons/hi'
import { useState } from 'react'

/**
 * ANÁLISE ESTRATÉGICA DO BANNER
 * 
 * GATILHOS MENTAIS IMPLEMENTADOS:
 * 1. AUTORIDADE - Demonstração de expertise e credenciais
 * 2. ESCASSEZ - Vagas limitadas e urgência temporal
 * 3. PROVA SOCIAL - Números reais e depoimentos
 * 4. RECIPROCIDADE - Valor antes da venda (consultoria gratuita)
 * 5. DOPAMINA - Animações e recompensas visuais
 * 6. CLAREZA - Proposta de valor cristalina
 * 7. TRANSFORMAÇÃO - Foco no resultado final
 * 
 * ESTRUTURA DE CONVERSÃO:
 * - Headline impactante (7 palavras ou menos)
 * - Subheadline explicativa (benefício claro)
 * - CTA primário (ação principal)
 * - CTA secundário (baixa fricção)
 * - Elementos de confiança (badges sociais)
 * - Prova visual (mockups/screenshots)
 */

const HeroBanner = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const trustBadges = [
    '🏆 +50 Projetos Entregues',
    '⚡ 95+ PageSpeed Score',
    '💯 98% Satisfação',
    '🚀 Entrega em 3 Semanas',
  ]

  const benefits = [
    'Design Premium que Converte',
    'Performance Ultrarrápida',
    'SEO Otimizado para Resultados',
    'Suporte Técnico Vitalício',
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark to-primary/10 -z-20" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(#0B63FF 1px, transparent 1px),
                           linear-gradient(90deg, #0B63FF 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-effect"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-effect"
        style={{ y: useTransform(scrollY, [0, 500], [0, -150]) }}
      />

      <motion.div
        className="container mx-auto px-4 z-10"
        style={{ opacity }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              {/* Badge de Urgência */}
              <motion.div
                className="inline-block mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="glass px-6 py-3 rounded-full flex items-center gap-3 border border-primary/30">
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="text-white font-inter font-semibold text-sm">
                  </span>
                </div>
              </motion.div>

              {/* Headline Principal */}
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-space mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-white">Transforme Seu</span>
                <br />
                <span className="gradient-text text-glow">Negócio Digital</span>
              </motion.h1>

              {/* Subheadline com Animação */}
              <motion.div
                className="text-xl md:text-2xl font-inter text-gray mb-8 h-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <TypeAnimation
                  sequence={[
                    'Sites que Convertem Visitantes em Clientes',
                    3000,
                    'Performance 95+ no Google PageSpeed',
                    3000,
                    'SEO Otimizado para Primeiras Posições',
                    3000,
                    'Design Premium que Gera Resultados',
                    3000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>

              {/* Lista de Benefícios */}
              <motion.div
                className="mb-8 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <HiCheckCircle className="text-white" />
                    </div>
                    <span className="text-gray font-inter font-medium">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {/* CTA Primário */}
                <motion.a
                  href="#contact"
                  className="group px-8 py-4 bg-gradient-blue text-white rounded-full font-inter font-bold text-lg flex items-center justify-center gap-2 glow btn-hover relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Agendar Consultoria Grátis</span>
                  <HiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  
                  {/* Efeito de shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                </motion.a>

                {/* CTA Secundário */}
                <motion.button
                  onClick={() => setIsVideoOpen(true)}
                  className="px-8 py-4 glass-white text-white rounded-full font-inter font-semibold text-lg flex items-center justify-center gap-2 btn-hover"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiPlay className="text-primary text-xl" />
                  Ver Como Funciona
                </motion.button>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                className="flex flex-wrap gap-4 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={badge}
                    className="text-gray font-inter flex items-center gap-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  >
                    {badge}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Content - Mockup/Visual */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              {/* Floating Card Mockup */}
              <div className="relative">
                <motion.div
                  className="glass p-8 rounded-2xl"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <div className="aspect-video bg-gradient-dark rounded-xl mb-4 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">🚀</div>
                    </div>
                    
                    {/* Stats Overlay */}
                    <motion.div
                      className="absolute bottom-4 right-4 glass px-4 py-2 rounded-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="text-primary font-bold text-2xl">95+</div>
                      <div className="text-white text-xs">Performance</div>
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    <div className="h-4 bg-gray/20 rounded w-3/4" />
                    <div className="h-4 bg-gray/20 rounded w-1/2" />
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 glass p-4 rounded-xl"
                                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="text-3xl">⚡</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 glass p-4 rounded-xl"
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="text-3xl">🎯</div>
                </motion.div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 animate-pulse" />
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-gray"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-inter">Role para descobrir</span>
            <div className="w-6 h-10 border-2 border-gray rounded-full flex justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark/95 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video bg-dark rounded-2xl overflow-hidden"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              ✕
            </button>
            
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-gray font-inter">Vídeo de demonstração</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default HeroBanner