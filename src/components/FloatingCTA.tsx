'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiX, HiArrowRight } from 'react-icons/hi'

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000 && !isClosed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClosed])

  const handleClose = () => {
    setIsClosed(true)
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-24 right-6 z-40 max-w-sm"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <motion.div
            className="glass p-6 rounded-2xl shadow-2xl border border-primary/30 relative"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-gray hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <HiX />
            </button>

            {/* Badge */}
            <div className="inline-block mb-3">
              <div className="bg-primary/20 px-3 py-1 rounded-full">
                <span className="text-primary font-inter font-bold text-xs">
                  🔥 OFERTA ESPECIAL
                </span>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-white font-space font-bold text-xl mb-2">
              Consultoria Gratuita
            </h3>
            <p className="text-gray font-inter text-sm mb-4">
              Agende agora e ganhe análise completa do seu projeto sem custo!
            </p>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-blue text-white rounded-full font-inter font-semibold text-sm glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Quero Minha Consultoria
              <HiArrowRight />
            </motion.a>

            {/* Trust Element */}
            <div className="mt-3 text-center">
              <span className="text-gray font-inter text-xs">
                ✓ Sem compromisso • ✓ Resposta em 24h
              </span>
            </div>

            {/* Pulse Effect */}
            <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl -z-10 animate-pulse" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingCTA