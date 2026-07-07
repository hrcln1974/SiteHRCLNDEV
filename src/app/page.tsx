'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Portfolio from '@/components/Portfolio'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import Technologies from '@/components/Technologies'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import FloatingCTA from '@/components/FloatingCTA'
import ExitIntent from '@/components/ExitIntent'
import CookieConsent from '@/components/CookieConsent'
import LiveChat from '@/components/LiveChat'
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
    <>
      <ProgressBar />
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
        <Urgency />
        <CTA />
        <Contact />
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <FloatingCTA />
        <ExitIntent />
        <CookieConsent />
        <LiveChat />
      </main>
    </>
  )
}