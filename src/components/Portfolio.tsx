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
      description: 'E-commerce moderno desenvolvido com foco em experiência do usuário, design responsivo e apresentação visual de produtos de moda.',
      image: '/projects/daily-fashion.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive'],
      link: 'https://hercullanohrcln.github.io/site-daily-fashion/',
      github: 'https://github.com/Hercullanohrcln/site-daily-fashion',
    },
    {
      id: 2,
      title: 'Atelier do Sabor',
      category: 'site',
      description: 'Site institucional elegante para apresentação de produtos artesanais, com design clean e navegação intuitiva.',
      image: '/projects/atelier-do-sabor.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'UI Design'],
      link: 'https://hercullanohrcln.github.io/atelier-do-sabor/',
      github: 'https://github.com/Hercullanohrcln/atelier-do-sabor',
    },
    {
      id: 3,
      title: 'Site Pastor Júlio',
      category: 'landing',
      description: 'Landing page institucional desenvolvida para apresentação ministerial, conteúdo religioso e comunicação digital.',
      image: '/projects/pastor-julio.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
      link: 'https://hercullanohrcln.github.io/site-pastor-julio/',
      github: 'https://github.com/Hercullanohrcln/site-pastor-julio',
    },
    {
      id: 4,
      title: 'Simulador de Empréstimo',
      category: 'sistema',
      description: 'Aplicação web interativa para simulação de empréstimos com cálculos em tempo real e interface simplificada.',
      image: '/projects/emprestimo.png',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Cálculos'],
      link: 'https://hercullanohrcln.github.io/emprestimo/',
      github: 'https://github.com/Hercullanohrcln/emprestimo',
    },
    {
      id: 5,
      title: 'Auto Elétrica Huebra',
      category: 'site',
      description: 'Site comercial profissional desenvolvido para empresa do segmento automotivo, com foco em conversão e SEO local.',
      image: '/projects/huebra.png',
      tags: ['HTML5', 'CSS3', 'SEO', 'Comercial'],
      link: 'https://autoeletricahuebra.com',
      github: null,
    },
    {
      id: 6,
      title: 'Catálogo HRCLN',
      category: 'sistema',
      description: 'Catálogo interativo desenvolvido com HTML, CSS e JavaScript puro.',
      image: '/projects/hrcln-dev.png',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      link: 'https://hercullanohrcln.github.io/catalogo-hrcln/',
      github: null,
    },
  ]

  const categories = [
    { id: 'all', label: 'Todos' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'site', label: 'Sites' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'sistema', label: 'Sistemas' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Portfólio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                filter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all"
            >
              <div className="relative h-48 bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <HiExternalLink /> Ver projeto
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio