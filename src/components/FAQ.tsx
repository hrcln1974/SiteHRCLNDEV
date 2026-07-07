'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Quanto tempo leva para desenvolver um site?',
      answer:
        'O prazo varia de acordo com a complexidade do projeto. Um site institucional simples leva de 2 a 3 semanas, enquanto projetos mais complexos como e-commerce ou sistemas web podem levar de 6 a 12 semanas. Sempre fornecemos um cronograma detalhado no início do projeto.',
    },
    {
      question: 'Vocês oferecem suporte após o lançamento?',
      answer:
        'Sim! Oferecemos suporte técnico completo após o lançamento. Incluímos 30 dias de suporte gratuito e depois oferecemos planos de manutenção mensal que cobrem atualizações, backups, monitoramento e suporte prioritário.',
    },
    {
      question: 'O site será responsivo para mobile?',
      answer:
        'Absolutamente! Todos os nossos sites são desenvolvidos com abordagem mobile-first, garantindo experiência perfeita em smartphones, tablets e desktops. Testamos em múltiplos dispositivos e navegadores.',
    },
    {
      question: 'Vocês fazem otimização para SEO?',
      answer:
        'Sim, SEO é parte fundamental do nosso processo. Implementamos SEO técnico completo, incluindo meta tags, schema.org, sitemap, URLs amigáveis, otimização de imagens e performance. Também oferecemos consultoria para SEO de conteúdo.',
    },
    {
      question: 'Qual é o investimento necessário?',
      answer:
        'O investimento varia conforme o escopo do projeto. Sites institucionais começam a partir de R$ 5.000, landing pages a partir de R$ 2.500, e-commerce a partir de R$ 15.000. Entre em contato para um orçamento personalizado sem compromisso.',
    },
    {
      question: 'Vocês criam o conteúdo do site?',
      answer:
        'Podemos auxiliar! Oferecemos serviços de copywriting, produção de conteúdo e consultoria editorial. Se você já tem o conteúdo, ótimo! Se não, nossa equipe pode criar textos persuasivos e otimizados para SEO.',
    },
    {
      question: 'O site terá painel administrativo?',
      answer:
        'Sim, desenvolvemos sites com CMS (Sistema de Gerenciamento de Conteúdo) intuitivo, permitindo que você atualize textos, imagens e outros conteúdos facilmente, sem necessidade de conhecimentos técnicos.',
    },
    {
      question: 'Vocês trabalham com qual tecnologia?',
      answer:
        'Utilizamos as tecnologias mais modernas do mercado: Next.js, React, TypeScript, Tailwind CSS, Node.js, entre outras. Escolhemos as melhores ferramentas para cada projeto, garantindo performance, segurança e escalabilidade.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-effect -z-10" />

      <div className="container mx-auto px-4" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-primary font-inter font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mt-4 mb-6">
            Perguntas{' '}
            <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-gray text-lg md:text-xl max-w-3xl mx-auto font-inter">
            Tire suas dúvidas sobre nossos serviços e processos.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full glass p-6 rounded-xl text-left flex items-center justify-between card-hover group"
                whileHover={{ x: 5 }}
              >
                <span className="text-white font-space font-semibold text-lg pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <HiChevronDown className="text-primary text-2xl" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 glass-white mt-2 rounded-xl">
                      <p className="text-gray font-inter leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray font-inter mb-6">
            Não encontrou sua resposta?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-blue text-white rounded-full font-inter font-semibold text-lg btn-hover glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em Contato
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ