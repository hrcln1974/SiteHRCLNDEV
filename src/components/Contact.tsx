'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiCheckCircle,
} from 'react-icons/hi'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

interface FormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log('Form data:', data)
    setIsSuccess(true)
    setIsSubmitting(false)
    reset()
    setTimeout(() => setIsSuccess(false), 5000)
  }

  const contactInfo = [
    {
      icon: <HiMail className="text-3xl" />,
      title: 'Email',
      info: 'contato@hrclndev.com.br',
      link: 'mailto:contato@hrclndev.com.br',
    },
    {
      icon: <HiPhone className="text-3xl" />,
      title: 'Telefone',
      info: '(21) 99152-5359',
      link: 'tel:+5521991525359',
    },
    {
      icon: <HiLocationMarker className="text-3xl" />,
      title: 'Localização',
      info: 'Teresópolis, RJ',
      link: 'https://www.google.com/maps/place/Teresópolis,+RJ',
    },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin className="text-2xl" />,
      link: 'https://linkedin.com/in/marcos-herculano',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="text-2xl" />,
      link: 'https://instagram.com/hrclndev',
    },
    {
      name: 'GitHub',
      icon: <FaGithub className="text-2xl" />,
      link: 'https://github.com/Hercullanohrcln',
    },
  ]

  const services = [
    'Site Institucional',
    'Landing Page',
    'Loja Virtual',
    'Sistema Web',
    'SEO & Performance',
    'Consultoria',
  ]

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6">
            Vamos Conversar sobre{' '}
            <span className="gradient-text">Seu Projeto</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Entre em contato e receba uma proposta personalizada para seu projeto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold font-space mb-8 text-white">
              Informações de Contato
            </h3>

            <div className="space-y-6 mb-12">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target={item.title === 'Localização' ? '_blank' : undefined}
                  rel={item.title === 'Localização' ? 'noopener noreferrer' : undefined}
                  className="glass p-6 rounded-xl flex items-center gap-4 card-hover group block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <div className="text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-space font-semibold mb-1">
                      {item.title}
                    </h4>
                    <p className="text-white font-inter text-lg">{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4 className="text-xl font-bold font-space mb-4 text-white">
                Redes Sociais
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 glass rounded-full flex items-center justify-center text-white hover:text-primary transition-colors card-hover"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-8 glass p-6 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4 className="text-lg font-bold font-space mb-4 text-white">
                Atendimento
              </h4>
              <div className="space-y-2 text-gray font-inter text-sm">
                <p>📍 Base: Teresópolis, RJ</p>
                <p>🌎 Atendimento: Todo Brasil</p>
                <p>💻 Modalidade: Remoto</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass p-8 rounded-2xl">
              <h3 className="text-3xl font-bold font-space mb-6 text-white">
                Envie uma Mensagem
              </h3>

              {isSuccess && (
                <motion.div
                  className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <HiCheckCircle className="text-green-500 text-2xl" />
                  <span className="text-green-500 font-inter">
                    Mensagem enviada com sucesso!
                  </span>
                </motion.div>
              )}

              <div className="mb-4">
                <label className="block text-gray font-inter mb-2">Nome Completo *</label>
                <input
                  type="text"
                  {...register('name', { required: 'Nome é obrigatório' })}
                  className="w-full px-4 py-3 bg-white/5 border border-gray/20 rounded-lg text-white font-inter focus:outline-none focus:border-primary transition-colors"
                  placeholder="Seu nome"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.name.message}</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray font-inter mb-2">Email *</label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email é obrigatório',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido',
                    },
                  })}
                  className="w-full px-4 py-3 bg-white/5 border border-gray/20 rounded-lg text-white font-inter focus:outline-none focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray font-inter mb-2">Telefone *</label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Telefone é obrigatório' })}
                  className="w-full px-4 py-3 bg-white/5 border border-gray/20 rounded-lg text-white font-inter focus:outline-none focus:border-primary transition-colors"
                  placeholder="(21) 99999-9999"
                />
                {errors.phone && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.phone.message}</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray font-inter mb-2">Serviço de Interesse *</label>
                <select
                  {...register('service', { required: 'Selecione um serviço' })}
                  className="w-full px-4 py-3 bg-white/5 border border-gray/20 rounded-lg text-white font-inter focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="" className="bg-dark">Selecione um serviço</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-dark">{service}</option>
                  ))}
                </select>
                {errors.service && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.service.message}</span>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-gray font-inter mb-2">Mensagem *</label>
                <textarea
                  {...register('message', { required: 'Mensagem é obrigatória' })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-gray/20 rounded-lg text-white font-inter focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto..."
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1 block">{errors.message.message}</span>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-blue text-white rounded-full font-inter font-semibold text-lg btn-hover glow disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact