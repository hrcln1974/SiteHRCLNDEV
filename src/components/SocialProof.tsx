'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiCode,
  HiDesktopComputer,
  HiLightningBolt,
  HiStar,
} from 'react-icons/hi'

const SocialProof = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    {
      icon: <HiDesktopComputer className="text-4xl" />,
      value: '05+',
      label: 'Projetos Publicados',
    },
    {
      icon: <HiCode className="text-4xl" />,
      value: '08+',
      label: 'Tecnologias Estudadas',
    },
    {
      icon: <HiLightningBolt className="text-4xl" />,
      value: '10+',
      label: 'Projetos em Desenvolvimento',
    },
    {
      icon: <HiStar className="text-4xl" />,
      value: '100%',
      label: 'Compromisso e Dedicação',
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-dark -z-10" />

      <div
        ref={ref}
        className="container mx-auto px-4"
      >

        <motion.div
          className="text-center mb-12"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.6,
          }}
        >

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Minha Jornada na Tecnologia
          </h2>

          <p className="text-gray max-w-2xl mx-auto">
            Desenvolvedor Front-end em formação, criando experiências digitais
            modernas, responsivas e focadas em resultados.
          </p>

        </motion.div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item,index)=>(

            <motion.div

              key={item.label}

              className="
              glass 
              rounded-xl 
              p-6 
              text-center 
              card-hover
              "

              initial={{
                opacity:0,
                scale:0.8,
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

            >

              <div className="
              flex 
              justify-center 
              mb-4 
              text-primary
              ">
                {item.icon}
              </div>


              <h3 className="
              text-3xl
              font-bold
              gradient-text
              ">
                {item.value}
              </h3>


              <p className="
              text-gray
              text-sm
              mt-2
              ">
                {item.label}
              </p>


            </motion.div>

          ))}

        </div>



        <motion.div

          className="
          mt-12
          glass
          rounded-xl
          p-6
          max-w-3xl
          mx-auto
          text-center
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
            delay:0.5,
          }}

        >

          <p className="
          text-white
          text-lg
          leading-relaxed
          ">
            "Transformando ideias em soluções digitais através do código,
            design e tecnologia."
          </p>


          <span className="
          block
          mt-4
          text-primary
          font-semibold
          ">
            — HRCLN DEV
          </span>

        </motion.div>


      </div>

    </section>
  )
}


export default SocialProof