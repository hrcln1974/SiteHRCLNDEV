'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import HeroBanner from '@/components/HeroBanner'
import SocialProof from '@/components/SocialProof'
import Services from '@/components/Services'
import BeforeAfter from '@/components/BeforeAfter'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import Technologies from '@/components/Technologies'
import Timeline from '@/components/Timeline'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Guarantee from '@/components/Guarantee'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import BackToTop from '@/components/BackToTop'
import Loader from '@/components/Loader'
import Particles from '@/components/Particles'

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <main className="relative">
      <Particles />
      <Header />
      <HeroBanner />
      <SocialProof />
      <Services />
      <BeforeAfter />
      <About />
      <Portfolio />
      <Stats />
      <Process />
      <Technologies />
      <Timeline />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Guarantee />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </main>
  )
}