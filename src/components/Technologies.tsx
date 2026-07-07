'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiDocker,
  SiAmazonaws,
  SiVercel,
  SiFigma,
} from 'react-icons/si'

const Technologies = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const technologies = [
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'React', icon: <SiReact />, color: '#61DAFB' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
    { name: 'AWS', icon: <SiAmazonaws />, color: '#FF9900' },
    { name: 'Vercel', icon: <SiVercel />, color: '#000000' },
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
  ]

  return (
    <section id="technologies" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">
            Tecnologias
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6">
            Stack{' '}
            <span className="gradient-text">Moderna</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Utilizamos as tecnologias mais avançadas do mercado para criar
            soluções robustas e escaláveis.
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 card-hover group cursor-pointer"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
            >
              {/* Icon */}
              <motion.div
                className="text-6xl text-white group-hover:text-primary transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {tech.icon}
              </motion.div>

              {/* Name */}
              <span className="text-gray group-hover:text-white font-inter font-medium text-sm text-center transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-16 glass p-8 rounded-2xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold font-space mb-4 text-white text-center">
            Por que essas tecnologias?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-2">⚡</div>
              <h4 className="font-space font-semibold text-white mb-2">
                Performance
              </h4>
              <p className="text-gray text-sm font-inter">
                Sites ultrarrápidos com carregamento instantâneo
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">🔒</div>
              <h4 className="font-space font-semibold text-white mb-2">
                Segurança
              </h4>
              <p className="text-gray text-sm font-inter">
                Proteção máxima de dados e informações
              </p>
            </div>
            <div>
              <div className="text-4xl mb-2">📈</div>
              <h4 className="font-space font-semibold text-white mb-2">
                Escalabilidade
              </h4>
              <p className="text-gray text-sm font-inter">
                Soluções que crescem junto com seu negócio
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies