import { ArrowRight, Code, Sparkles } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-slide-up mt-24 md:mt-32">
            Transformando Ideias
            <br />
            em <span className="text-blue-400">Soluções Digitais</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up delay-200">
            Desenvolvimento web moderno com tecnologias de ponta
          </p>

          {/* Features badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up delay-300">
            <span className="px-4 py-2 bg-blue-500/20 rounded-full text-sm border border-blue-500/30 backdrop-blur-sm">
              <Code className="inline w-4 h-4 mr-2" />
              Next.js & React
            </span>
            <span className="px-4 py-2 bg-purple-500/20 rounded-full text-sm border border-purple-500/30 backdrop-blur-sm">
              <Sparkles className="inline w-4 h-4 mr-2" />
              UI/UX Design
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-500">
            <a
              href="#portfolio"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center gap-2"
            >
              Ver Projetos
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg font-semibold backdrop-blur-sm border border-white/20 transition-all hover:scale-105"
            >
              Fale Conosco
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
              <div className="w-1.5 h-3 bg-white/50 rounded-full absolute left-1/2 top-2 -translate-x-1/2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}