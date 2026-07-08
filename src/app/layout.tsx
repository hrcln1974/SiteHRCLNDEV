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
  metadataBase: new URL('https://site-hrclndev.vercel.app'),
  title: {
    default: 'HRCLN DEV - Desenvolvimento Web Premium | Teresópolis RJ',
    template: '%s | HRCLN DEV',
  },
  description:
    'Desenvolvimento web premium em Teresópolis RJ. Sites Institucionais, Landing Pages, Lojas Virtuais, Sistemas Web, SEO e Performance. Código com propósito. Soluções que transformam.',
  keywords: [
    'desenvolvimento web teresópolis',
    'sites teresópolis rj',
    'desenvolvedor web teresópolis',
    'landing pages teresópolis',
    'lojas virtuais teresópolis',
    'sistemas web',
    'SEO teresópolis',
    'performance web',
    'Next.js',
    'React',
    'HRCLN DEV',
    'Marcos Herculano',
  ],
  authors: [{ name: 'Marcos Herculano - HRCLN DEV' }],
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
    url: 'https://site-hrclndev.vercel.app',
    siteName: 'HRCLN DEV',
    title: 'HRCLN DEV - Desenvolvimento Web Premium | Teresópolis RJ',
    description:
      'Código com propósito. Soluções que transformam. Desenvolvimento web de alto padrão em Teresópolis RJ.',
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
    canonical: 'https://site-hrclndev.vercel.app',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'HRCLN DEV',
  image: 'https://site-hrclndev.vercel.app/logo.png',
  '@id': 'https://site-hrclndev.vercel.app',
  url: 'https://site-hrclndev.vercel.app',
  telephone: '+55-21-99152-5359',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: 'Teresópolis',
    addressRegion: 'RJ',
    postalCode: '25950-000',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -22.4149,
    longitude: -42.9664,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '13:00',
    },
  ],
  sameAs: [
    'https://linkedin.com/company/hrclndev',
    'https://github.com/Hercullanohrcln',
    'https://instagram.com/hrclndev',
  ],
  description:
    'Desenvolvimento web premium especializado em Sites Institucionais, Landing Pages, Lojas Virtuais, Sistemas Web, SEO e Performance em Teresópolis RJ.',
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