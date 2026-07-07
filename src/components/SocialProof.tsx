'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiUsers,
  HiTrendingUp,
  HiStar,
  HiLightningBolt,
} from 'react-icons/hi'
import { useEffect, useState } from 'react'

const SocialProof = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeUsers, setActiveUsers] = useState(12)
  const [currentActivity, setCurrentActivity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(Math.floor(Math.random() * 8) + 10)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const socialStats = [
    {
      icon: <HiUsers className="text-4xl" />,
      value: '50+',
      label: 'Clientes Ativos',
    },
    {
      icon: <HiTrendingUp className="text-4xl" />,
      value: '150%',
      label: 'Crescimento Médio',
    },
    {
      icon: <HiStar className="text-4xl" />,
      value: '5.0',
      label: 'Avaliação Média',
    },
    {
      icon: <HiLightningBolt className="text-4xl" />,
      value: '95+',
      label: 'Score Performance',
    },
  ]

  const recentActivity = [
    '🎉 João S. acabou de contratar um Site Institucional',
    '✨ Maria O. recebeu proposta para E-commerce',
    '🚀 Pedro A. aprovou projeto de Landing Page',
    '💎 Ana C. solicitou orçamento de Sistema Web',
    '🔥 Ricardo M. fechou contrato para consultoria',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity(
        (prev) => (prev + 1) % recentActivity.length
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [recentActivity.length])


  return (
    <section className="py-20 relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark -z-10" />


      <div
        className="container mx-auto px-4"
        ref={ref}
      >

        {/* Usuários online */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >

          <motion.div
            className="glass px-6 py-3 rounded-full flex items-center gap-3"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >

            <div className="relative">

              <div
                className="
                w-3 h-3
                bg-green-500
                rounded-full
                animate-pulse
                "
              />

              <div
                className="
                absolute
                inset-0
                w-3 h-3
                bg-green-500
                rounded-full
                animate-ping
                "
              />

            </div>


            <span className="text-white font-inter font-semibold">
              {activeUsers} pessoas visualizando agora
            </span>

          </motion.div>

        </motion.div>



        {/* Estatísticas */}
        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          mb-12
          "
        >

          {socialStats.map((stat, index) => (

            <motion.div

              key={stat.label}

              className="
              glass
              p-6
              rounded-xl
              text-center
              card-hover
              "

              initial={{
                opacity:0,
                scale:0.5,
              }}

              animate={
                inView
                ?
                {
                  opacity:1,
                  scale:1,
                }
                :
                {}
              }

              transition={{
                duration:0.5,
                delay:index * 0.1,
              }}

              whileHover={{
                y:-5,
              }}

            >

              <motion.div

                className="
                text-primary
                mb-3
                flex
                justify-center
                "

                whileHover={{
                  scale:1.2,
                  rotate:360,
                }}

                transition={{
                  duration:0.5,
                }}

              >

                {stat.icon}

              </motion.div>



              <div
                className="
                text-3xl
                md:text-4xl
                font-bold
                font-space
                gradient-text
                mb-1
                "
              >

                {stat.value}

              </div>


              <div
                className="
                text-gray
                font-inter
                text-sm
                "
              >

                {stat.label}

              </div>


            </motion.div>

          ))}

        </div>



        {/* Atividade recente */}

        <motion.div

          className="
          glass
          p-6
          rounded-xl
          max-w-2xl
          mx-auto
          "

          initial={{
            opacity:0,
            y:20,
          }}

          animate={
            inView
            ?
            {
              opacity:1,
              y:0,
            }
            :
            {}
          }

          transition={{
            duration:0.5,
            delay:0.5,
          }}

        >

          <div
            className="
            flex
            items-center
            gap-3
            "
          >

            <div
              className="
              w-2
              h-2
              bg-primary
              rounded-full
              animate-pulse
              "
            />


            <span className="text-gray font-inter text-sm">
              Atividade Recente
            </span>


          </div>


          <motion.div

            key={currentActivity}

            className="
            mt-4
            text-white
            font-inter
            text-lg
            "

            initial={{
              opacity:0,
              x:-20,
            }}

            animate={{
              opacity:1,
              x:0,
            }}

            transition={{
              duration:0.5,
            }}

          >

            {recentActivity[currentActivity]}


          </motion.div>


        </motion.div>




        {/* Selos de confiança */}

        <motion.div

          className="
          mt-12
          flex
          flex-wrap
          justify-center
          items-center
          gap-8
          "

          initial={{
            opacity:0,
            y:20,
          }}

          animate={
            inView
            ?
            {
              opacity:1,
              y:0,
            }
            :
            {}
          }

          transition={{
            duration:0.5,
            delay:0.7,
          }}

        >

          {[
            '🏆 Aprovado por 50+ Empresas',
            '⚡ Entrega em até 3 Semanas',
            '🛡️ Garantia de Satisfação',
            '💯 98% de Taxa de Sucesso',
          ].map((badge,index)=>(

            <motion.div

              key={index}

              className="
              text-gray
              font-inter
              text-sm
              "

              whileHover={{
                scale:1.1,
              }}

            >

              {badge}

            </motion.div>

          ))}


        </motion.div>


      </div>


    </section>
  )
}


export default SocialProof