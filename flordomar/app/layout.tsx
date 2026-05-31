import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Flor do Mar | Hospedagem Premium na Praia do Rosa',
    template: '%s | Flor do Mar - Praia do Rosa',
  },
  description: 'Casas para temporada com serviços de pousada na Praia do Rosa, SC. A 100m da praia, com camareira diária, Wi-Fi, estacionamento e segurança 24h. Reserve agora!',
  keywords: [
    'Praia do Rosa',
    'hospedagem Praia do Rosa',
    'casas para alugar Praia do Rosa',
    'pousada Praia do Rosa',
    'casa de temporada Praia do Rosa',
    'hospedagem familiar Praia do Rosa',
    'aluguel temporada Imbituba SC',
    'Flor do Mar',
    'casas praia Santa Catarina',
  ],
  authors: [{ name: 'Flor do Mar' }],
  creator: 'Flor do Mar',
  publisher: 'Flor do Mar',
  metadataBase: new URL('https://flordomar.com'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://flordomar.com',
    siteName: 'Flor do Mar',
    title: 'Flor do Mar | Hospedagem Premium na Praia do Rosa',
    description: 'A privacidade de uma casa exclusiva com o atendimento e os serviços de uma pousada. A 100 metros da Praia do Rosa, SC.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flor do Mar - Praia do Rosa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flor do Mar | Hospedagem Premium na Praia do Rosa',
    description: 'A privacidade de uma casa exclusiva com o atendimento e os serviços de uma pousada. A 100 metros da Praia do Rosa, SC.',
    images: ['/images/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LodgingBusiness',
              name: 'Flor do Mar',
              description: 'Casas para temporada com serviços de pousada na Praia do Rosa, SC',
              url: 'https://flordomar.com',
              telephone: '+5548999990000',
              email: 'contato@flordomar.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Praia do Rosa',
                addressLocality: 'Imbituba',
                addressRegion: 'SC',
                addressCountry: 'BR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -28.13,
                longitude: -48.65,
              },
              amenityFeature: [
                { '@type': 'LocationFeatureSpecification', name: 'Wi-Fi Gratuito', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Estacionamento', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Ar-condicionado', value: true },
                { '@type': 'LocationFeatureSpecification', name: 'Camareira Diária', value: true },
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
