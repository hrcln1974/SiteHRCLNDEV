import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Poppins } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hrclndev.com.br'),
  title: {
    default: 'HRCLN DEV - Desenvolvimento Web Premium | Sites, Sistemas e Soluções Digitais',
    template: '%s | HRCLN DEV',
  },
  description:
    'Desenvolvimento web premium especializado em Sites Institucionais, Landing Pages, Lojas Virtuais, Sistemas Web, SEO e Performance. Código com propósito. Soluções que transformam.',
  keywords: [
    'desenvolvimento web',
    'sites institucionais',
    'landing pages',
    'lojas virtuais',
    'sistemas web',
    'SEO',
    'performance web',
    'Next.js',
    'React',
    'desenvolvimento premium',
    'HRCLN DEV',
  ],
  authors: [{ name: 'HRCLN DEV' }],
  creator: 'HRCLN DEV',
  publisher: 'HRCLN DEV',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://hrclndev.com.br',
    siteName: 'HRCLN DEV',
    title: 'HRCLN DEV - Desenvolvimento Web Premium',
    description:
      'Código com propósito. Soluções que transformam. Desenvolvimento web de alto padrão.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HRCLN DEV - Desenvolvimento Web Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HRCLN DEV - Desenvolvimento Web Premium',
    description: 'Código com propósito. Soluções que transformam.',
    images: ['/og-image.jpg'],
    creator: '@hrclndev',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://hrclndev.com.br',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'HRCLN DEV',
  url: 'https://hrclndev.com.br',
  logo: 'https://hrclndev.com.br/logo.png',
  description:
    'Desenvolvimento web premium especializado em Sites Institucionais, Landing Pages, Lojas Virtuais, Sistemas Web, SEO e Performance.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-11-99999-9999',
    contactType: 'Customer Service',
    availableLanguage: ['Portuguese'],
  },
  sameAs: [
    'https://linkedin.com/company/hrclndev',
    'https://github.com/hrclndev',
    'https://instagram.com/hrclndev',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  )
}