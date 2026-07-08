'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const phoneNumber = '5511991525359' // Substitua pelo número real
  const message = 'Olá! Gostaria de saber mais sobre os serviços da HRCLN DEV.'

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      
      {/* Pulse animation */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
      
      {/* Tooltip */}
      <motion.span
        className="absolute right-full mr-3 px-3 py-2 bg-dark text-white text-sm font-inter rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        initial={{ x: 10, opacity: 0 }}
        whileHover={{ x: 0, opacity: 1 }}
      >
        Fale conosco no WhatsApp
      </motion.span>
    </motion.button>
  )
}

export default WhatsAppButton