import type { Metadata } from 'next'
import Link from 'next/link'
import { getContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description: 'Conheça a história da Flor do Mar na Praia do Rosa. Uma hospedagem familiar com a privacidade de uma casa e o atendimento de uma pousada em Santa Catarina.',
}

const values = [
  {
    icon: '🏡',
    title: 'Ambiente Familiar',
    description: 'Criamos um espaço acolhedor onde famílias se sentem verdadeiramente em casa, com segurança e privacidade.',
  },
  {
    icon: '🌊',
    title: 'Localização Privilegiada',
    description: 'A apenas 100 metros da Praia do Rosa, uma das praias mais bonitas e preservadas do Brasil.',
  },
  {
    icon: '❤️',
    title: 'Atendimento Personalizado',
    description: 'Cada hóspede recebe atenção especial, com camareira diária e suporte durante toda a estadia.',
  },
  {
    icon: '🔐',
    title: 'Segurança Total',
    description: 'Terreno fechado com acesso por senha, câmeras CFTV e monitoramento 24 horas.',
  },
  {
    icon: '✨',
    title: 'Conforto Excepcional',
    description: 'Casas completamente equipadas, ar-condicionado, Wi-Fi de alta velocidade e tudo que sua família precisa.',
  },
  {
    icon: '🌿',
    title: 'Contato com a Natureza',
    description: 'Imersos na exuberante natureza catarinense, com toda a tranquilidade que a Praia do Rosa oferece.',
  },
]

export default async function SobrePage() {
  const content = getContent()

  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-ocean-800 to-ocean-600 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-ocean-200 font-semibold text-sm uppercase tracking-wider mb-3 block">Nossa História</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Sobre a Flor do Mar</h1>
          <p className="text-ocean-100 text-xl max-w-2xl mx-auto">
            Nascemos do amor pela Praia do Rosa e do desejo de oferecer uma experiência única de hospedagem.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider mb-3 block">Nossa História</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ocean-900 mb-6">
                Um refúgio criado com amor e dedicação
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                {content.aboutText.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-ocean-100 via-sand-100 to-nature-100 rounded-3xl h-96 flex items-center justify-center shadow-xl">
                <div className="text-center text-ocean-400 p-8">
                  <div className="text-8xl mb-4">🌊</div>
                  <p className="font-serif text-2xl font-bold text-ocean-700">Flor do Mar</p>
                  <p className="text-ocean-500 mt-2">Praia do Rosa, SC</p>
                </div>
              </div>
              {/* Decorative cards */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4">
                <p className="text-3xl font-bold text-ocean-700 font-serif">4</p>
                <p className="text-sm text-gray-500">Casas Exclusivas</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4">
                <p className="text-3xl font-bold text-sand-500 font-serif">100m</p>
                <p className="text-sm text-gray-500">da Praia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider mb-3 block">Nossos Valores</span>
            <h2 className="section-title">O que nos move</h2>
            <p className="section-subtitle">
              Cada detalhe da Flor do Mar foi pensado para proporcionar a melhor experiência possível.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-serif text-xl font-bold text-ocean-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-20 bg-gradient-to-br from-ocean-700 to-ocean-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Nosso Diferencial</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="font-semibold text-lg mb-3">Privacidade de Casa</h3>
              <p className="text-ocean-200 text-sm">Seu espaço exclusivo, sem dividir com outros hóspedes.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-sand-400">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-semibold text-lg mb-3">Serviços de Pousada</h3>
              <p className="text-ocean-200 text-sm">Camareira diária, atendimento e segurança profissional.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="font-semibold text-lg mb-3">Localização Perfeita</h3>
              <p className="text-ocean-200 text-sm">A 100 metros da Praia do Rosa, no melhor ponto.</p>
            </div>
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif font-bold italic text-sand-300">
            "A privacidade de uma casa exclusiva com o atendimento e os serviços de uma pousada."
          </blockquote>
        </div>
      </section>

      {/* Praia do Rosa Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-ocean-50 to-sand-50 rounded-3xl p-10">
              <h3 className="font-serif text-2xl font-bold text-ocean-900 mb-6">A Praia do Rosa</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A Praia do Rosa é um dos mais preservados paraísos do litoral catarinense. Com águas limpas,
                dunas e lagoa, é famosa mundialmente pelo surf e pela observação de baleias francas entre junho
                e novembro.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                O centrinho do Rosa oferece restaurantes sofisticados, bares descontraídos e lojas de artesanato,
                criando um ambiente único que une natureza e gastronomia.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Bandeira Azul', value: 'Praia Limpa' },
                  { label: 'Baleias Francas', value: 'Jun - Nov' },
                  { label: 'Surf Mundial', value: 'Competições' },
                  { label: 'Natureza', value: 'Preservada' },
                ].map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <p className="font-bold text-ocean-700">{item.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider mb-3 block">Nossa Localização</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ocean-900 mb-6">
                Imbituba, Santa Catarina
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                A Flor do Mar está localizada em Imbituba, cidade do litoral sul catarinense a cerca de 80km
                de Florianópolis. A Praia do Rosa, pertencente ao município, é considerada uma das mais
                bonitas praias do Brasil.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  80km ao sul de Florianópolis
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <svg className="w-5 h-5 text-ocean-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                  </svg>
                  50min do Aeroporto de Florianópolis
                </div>
              </div>
              <Link href="/localizacao" className="inline-flex items-center gap-2 btn-primary mt-8">
                Ver no Mapa
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ocean-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold text-ocean-900 mb-4">
            Venha nos conhecer
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Reserve sua estadia e descubra por que a Flor do Mar é o lugar perfeito para sua família.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/casas" className="btn-primary">
              Ver as Casas
            </Link>
            <Link href="/contato" className="btn-outline">
              Entrar em Contato
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
