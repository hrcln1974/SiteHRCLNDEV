'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Loader = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="mb-8 text-6xl font-bold font-space gradient-text"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          HRCLN DEV
        </motion.div>

        <div className="relative w-64 h-2 bg-gray/20 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gradient-blue glow"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <motion.p
          className="mt-4 text-gray font-inter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Carregando {progress}%
        </motion.p>
      </div>

      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 border-2 border-primary/20 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              marginLeft: '-12rem',
              marginTop: '-12rem',
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Loader