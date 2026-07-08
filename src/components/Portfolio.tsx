'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { useState } from 'react'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Daily Fashion',
      category: 'ecommerce',
      description:
        'E-commerce moderno desenvolvido com foco em experiência do usuário, design responsivo e apresentação visual de produtos de moda.',
      image: '/projects/daily-fashion.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      link: 'https://hercullanohrcln.github.io/site-daily-fashion/',
      github: 'https://github.com/Hercullanohrcln/site-daily-fashion',
    },
    {
      id: 2,
      title: 'Atelier do Sabor',
      category: 'site',
      description:
        'Site institucional elegante para apresentação de produtos artesanais, com design clean e navegação intuitiva.',
      image: '/projects/atelier-do-sabor.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'UI Design'],
      link: 'https://hercullanohrcln.github.io/atelier-do-sabor/',
      github: 'https://github.com/Hercullanohrcln/atelier-do-sabor',
    },
    {
      id: 3,
      title: 'Site Pastor Júlio',
      category: 'landing',
      description:
        'Landing page institucional desenvolvida para apresentação ministerial, conteúdo religioso e comunicação digital.',
      image: '/projects/pastor-julio.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
      link: 'https://hercullanohrcln.github.io/site-pastor-julio/',
      github: 'https://github.com/Hercullanohrcln/site-pastor-julio',
    },
    {
      id: 4,
      title: 'Simulador de Empréstimo',
      category: 'sistema',
      description:
        'Aplicação web interativa para simulação de empréstimos com cálculos em tempo real e interface simplificada.',
      image: '/projects/emprestimo.png',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Cálculos'],
      link: 'https://hercullanohrcln.github.io/emprestimo/',
      github: 'https://github.com/Hercullanohrcln/emprestimo',
    },
    {
      id: 5,
      title: 'Auto Elétrica Huebra',
      category: 'site',
      description:
        'Site comercial profissional desenvolvido para empresa do segmento automotivo, com foco em conversão e SEO local.',
      image: '/projects/huebra.png',
      tags: ['HTML5', 'CSS3', 'SEO', 'Comercial'],
      link: 'https://autoeletricahuebra.com',
      github: null, // Projeto cliente real - sem GitHub público
    },
    {
      id: 6,
      title: 'HRCLN DEV Portfolio',
      category: 'sistema',
      description:
        'Portfólio profissional premium desenvolvido com Next.js 14, TypeScript e Tailwind CSS para apresentação de soluções web.',
      image: '/projects/hrcln-dev.png',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
      link: 'https://hrclndev.vercel.app',
      github: 'https://github.com/Hercullanohrcln',
    },
  ]

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'site', name: 'Sites' },
    { id: 'landing', name: 'Landing Pages' },
    { id: 'sistema', name: 'Sistemas Web' },
  ]

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6">
            Projetos{' '}
            <span className="gradient-text">Desenvolvidos</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Conheça alguns projetos desenvolvidos pela HRCLN DEV, explorando
            tecnologias modernas, design responsivo e soluções digitais.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-inter font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-gradient-blue text-white glow'
                  : 'glass-white text-gray hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass rounded-2xl overflow-hidden card-hover group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-dark overflow-hidden">
                {/* Placeholder - será substituído por imagem real */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="text-6xl">
                    {project.category === 'ecommerce' && '🛍️'}
                    {project.category === 'site' && '🌐'}
                    {project.category === 'landing' && '📄'}
                    {project.category === 'sistema' && '⚙️'}
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    aria-label="Ver projeto"
                  >
                    <HiExternalLink className="text-white text-xl" />
                  </motion.a>
                  
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      aria-label="Ver código no GitHub"
                    >
                      <FaGithub className="text-white text-xl" />
                    </motion.a>
                  )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 backdrop-blur-sm rounded-full">
                  <span className="text-white text-xs font-inter font-semibold uppercase">
                    {categories.find(cat => cat.id === project.category)?.name}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-space mb-2 text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray font-inter text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-inter font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray font-inter mb-6">
            Gostou dos projetos? Vamos criar algo incrível juntos!
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-blue text-white rounded-full font-inter font-semibold text-lg btn-hover glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Meu Projeto
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio