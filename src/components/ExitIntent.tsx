'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiX, HiGift } from 'react-icons/hi'

const ExitIntent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark/95 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-2xl w-full glass p-8 md:p-12 rounded-3xl border-2 border-primary"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: 'spring', damping: 20 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Fechar"
            >
              <HiX className="text-xl" />
            </button>

            {/* Icon */}
            <motion.div
              className="text-6xl mb-6 flex justify-center"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <HiGift className="text-primary" />
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold font-space text-center mb-4">
              <span className="text-white">Espere! </span>
              <span className="gradient-text">Oferta Exclusiva</span>
            </h2>

            {/* Subheadline */}
            <p className="text-gray font-inter text-lg text-center mb-8">
              Antes de sair, que tal ganhar uma <strong className="text-white">consultoria gratuita</strong> de 30 minutos para avaliar seu projeto?
            </p>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {[
                'Análise completa do seu projeto atual',
                'Plano de ação personalizado',
                'Orçamento sem compromisso',
                'Dicas de SEO e Performance',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    ✓
                  </div>
                  <span className="text-white font-inter">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                onClick={handleClose}
                className="flex-1 px-8 py-4 bg-gradient-blue text-white rounded-full font-inter font-bold text-center glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sim, Quero Minha Consultoria!
              </motion.a>
              <motion.button
                onClick={handleClose}
                className="px-8 py-4 glass-white text-gray hover:text-white rounded-full font-inter font-semibold text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Não, obrigado
              </motion.button>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 text-center text-sm text-gray font-inter">
              <span>✓ Sem custo • ✓ Sem compromisso • ✓ 100% Gratuito</span>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-primary/20 rounded-3xl blur-2xl -z-10 animate-pulse" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ExitIntent