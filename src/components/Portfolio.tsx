'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiExternalLink } from 'react-icons/hi'
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
      title: 'E-commerce Premium',
      category: 'ecommerce',
      description: 'Loja virtual completa com mais de 10.000 produtos e integração total.',
      image: '/projects/project1.jpg',
      tags: ['Next.js', 'React', 'Tailwind', 'Stripe'],
      link: '#',
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      category: 'sistema',
      description: 'Plataforma SaaS com dashboard completo e analytics avançado.',
      image: '/projects/project2.jpg',
      tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 3,
      title: 'Landing Page Conversão',
      category: 'landing',
      description: 'Landing page com taxa de conversão de 35% acima da média.',
      image: '/projects/project3.jpg',
      tags: ['Next.js', 'Framer Motion', 'SEO'],
      link: '#',
    },
    {
      id: 4,
      title: 'Site Institucional',
      category: 'site',
      description: 'Site corporativo moderno para multinacional do setor tech.',
      image: '/projects/project4.jpg',
      tags: ['Next.js', 'GSAP', 'Three.js'],
      link: '#',
    },
    {
      id: 5,
      title: 'App Delivery',
      category: 'sistema',
      description: 'Sistema completo de delivery com app e painel administrativo.',
      image: '/projects/project5.jpg',
      tags: ['React Native', 'Node.js', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 6,
      title: 'Portal de Notícias',
      category: 'site',
      description: 'Portal de notícias com mais de 100k visitas mensais.',
      image: '/projects/project6.jpg',
      tags: ['Next.js', 'CMS', 'SEO'],
      link: '#',
    },
  ]

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'site', name: 'Sites' },
    { id: 'landing', name: 'Landing Pages' },
    { id: 'sistema', name: 'Sistemas' },
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
            <span className="gradient-text">Realizados</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Conheça alguns dos projetos que desenvolvemos com excelência e
            dedicação para nossos clientes.
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
              className="glass rounded-2xl overflow-hidden card-hover group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-dark overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-primary/20">🖼️</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1, rotate: 45 }}
                >
                  <HiExternalLink className="text-white text-xl" />
                </motion.div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-space mb-2 text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray font-inter text-sm mb-4">
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
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-blue text-white rounded-full font-inter font-semibold text-lg btn-hover glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Mais Projetos
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio