'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  HiCode,
  HiDesktopComputer,
  HiLightningBolt,
  HiAcademicCap,
} from 'react-icons/hi'

const About = () => {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })


  const technologies = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Git & GitHub',
  ]


  const highlights = [
    {
      icon: <HiCode />,
      title: 'Desenvolvimento Front-end',
      description:
        'Criação de interfaces modernas, responsivas e focadas na experiência do usuário.',
    },

    {
      icon: <HiDesktopComputer />,
      title: 'Projetos Web',
      description:
        'Desenvolvimento de sites institucionais, landing pages e soluções digitais.',
    },

    {
      icon: <HiLightningBolt />,
      title: 'Performance',
      description:
        'Aplicações otimizadas, rápidas e preparadas para diferentes dispositivos.',
    },

    {
      icon: <HiAcademicCap />,
      title: 'Evolução Constante',
      description:
        'Estudo contínuo das tecnologias atuais para entregar melhores soluções.',
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

          className="text-center mb-14"

          initial={{
            opacity:0,
            y:30
          }}

          animate={
            inView
            ?
            {
              opacity:1,
              y:0
            }
            :
            {}
          }

          transition={{
            duration:0.6
          }}

        >

          <h2 className="
          text-3xl 
          md:text-5xl 
          font-bold 
          text-white 
          mb-6
          ">
            Sobre a <span className="gradient-text">HRCLN DEV</span>
          </h2>


          <p className="
          text-gray
          max-w-3xl
          mx-auto
          text-lg
          leading-relaxed
          ">

            Sou <strong className="text-white">
            Marcos Herculano
            </strong>,
            Desenvolvedor Front-end em Formação e criador da HRCLN DEV.

            Minha jornada une experiência profissional, criatividade e tecnologia
            para desenvolver soluções digitais modernas.

          </p>


        </motion.div>



        <div className="
        grid
        md:grid-cols-2
        gap-10
        items-center
        ">


          <motion.div

          className="
          glass
          rounded-2xl
          p-8
          "

          initial={{
            opacity:0,
            x:-40
          }}

          animate={
            inView
            ?
            {
              opacity:1,
              x:0
            }
            :
            {}
          }

          transition={{
            duration:0.6
          }}

          >

            <h3 className="
            text-2xl
            font-bold
            text-white
            mb-5
            ">
              Minha Missão
            </h3>


            <p className="
            text-gray
            leading-relaxed
            mb-6
            ">

              Criar experiências digitais profissionais para empresas,
              empreendedores e projetos que desejam fortalecer sua presença
              na internet.

            </p>


            <p className="
            text-gray
            leading-relaxed
            ">

              Atualmente desenvolvo projetos utilizando tecnologias modernas
              como React, Next.js e Tailwind CSS, sempre buscando unir
              design, performance e funcionalidade.

            </p>


          </motion.div>




          <motion.div

          className="
          glass
          rounded-2xl
          p-8
          "

          initial={{
            opacity:0,
            x:40
          }}

          animate={
            inView
            ?
            {
              opacity:1,
              x:0
            }
            :
            {}
          }

          transition={{
            duration:0.6
          }}

          >

            <h3 className="
            text-2xl
            font-bold
            text-white
            mb-6
            ">
              Tecnologias
            </h3>


            <div className="
            flex
            flex-wrap
            gap-3
            ">

              {
                technologies.map((tech)=>(
                  <span
                    key={tech}
                    className="
                    px-4
                    py-2
                    rounded-full
                    glass
                    text-white
                    text-sm
                    "
                  >
                    {tech}
                  </span>
                ))
              }

            </div>


          </motion.div>


        </div>



        <div className="
        grid
        md:grid-cols-4
        gap-6
        mt-12
        ">


        {
          highlights.map((item,index)=>(

            <motion.div

            key={item.title}

            className="
            glass
            rounded-xl
            p-6
            "

            initial={{
              opacity:0,
              y:30
            }}

            animate={
              inView
              ?
              {
                opacity:1,
                y:0
              }
              :
              {}
            }

            transition={{
              delay:index*0.1
            }}

            >

              <div className="
              text-primary
              text-3xl
              mb-4
              ">
                {item.icon}
              </div>


              <h4 className="
              text-white
              font-bold
              mb-2
              ">
                {item.title}
              </h4>


              <p className="
              text-gray
              text-sm
              ">
                {item.description}
              </p>


            </motion.div>

          ))
        }


        </div>


      </div>

    </section>

  )
}


export default About