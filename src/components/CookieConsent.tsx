'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiShieldCheck } from 'react-icons/hi'

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'false')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <div className="glass p-6 rounded-2xl border border-primary/30">
            <div className="flex items-start gap-4 mb-4">
              <HiShieldCheck className="text-primary text-3xl flex-shrink-0" />
              <div>
                <h3 className="text-white font-space font-bold text-lg mb-2">
                  Cookies e Privacidade
                </h3>
                <p className="text-gray font-inter text-sm leading-relaxed">
                  Usamos cookies para melhorar sua experiência, analisar o tráfego
                  e personalizar conteúdo. Ao continuar, você concorda com nossa
                  política de privacidade.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <motion.button
                onClick={handleAccept}
                className="flex-1 px-4 py-2 bg-gradient-blue text-white rounded-full font-inter font-semibold text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Aceitar
              </motion.button>
              <motion.button
                onClick={handleReject}
                className="px-4 py-2 glass-white text-gray hover:text-white rounded-full font-inter font-semibold text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Recusar
              </motion.button>
            </div>

            <a
              href="/privacy"
              className="block mt-3 text-primary font-inter text-xs text-center hover:underline"
            >
              Política de Privacidade
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent