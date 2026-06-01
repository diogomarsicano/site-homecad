import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getContent } from '@/lib/content'
import ImageGallery from '@/components/ImageGallery'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = getContent()
  const house = content.houses.find((h) => h.slug === params.id)
  if (!house) return { title: 'Casa nao encontrada' }
  return {
    title: `${house.name} - Hospedagem Praia do Rosa`,
    description: house.description,
    openGraph: {
      title: `${house.name} | Flor do Mar - Praia do Rosa`,
      description: house.shortDescription,
    },
  }
}

export async function generateStaticParams() {
  const content = getContent()
  return content.houses.map((house) => ({ id: house.slug }))
}

export default async function HousePage({ params }: Props) {
  const content = getContent()
  const house = content.houses.find((h) => h.slug === params.id)
  if (!house) notFound()

  const whatsappMessage = encodeURIComponent(
    `Ola! Tenho interesse em reservar a ${house!.name} na Flor do Mar. Poderia me informar disponibilidade e valores?`
  )
  const otherHouses = content.houses.filter((h) => h.id !== house!.id).slice(0, 3)

  return (
    <>
      <div className="bg-ocean-50 pt-28 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-ocean-600">Inicio</Link>
            <span>/</span>
            <Link href="/casas" className="hover:text-ocean-600">Casas</Link>
            <span>/</span>
            <span className="text-ocean-600 font-medium">{house!.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-12 bg-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <ImageGallery images={house!.images} houseName={house!.name} />
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-ocean-900 mb-4">{house!.name}</h1>
                <div className="flex gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                  <span>{house!.bedrooms} quartos</span>
                  <span>{house!.bathrooms} banheiros</span>
                  <span>Ate {house!.capacity} hospedes</span>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">{house!.description}</p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-ocean-900 mb-6">Caracteristicas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {house!.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 p-3 bg-ocean-50 rounded-lg">
                      <svg className="w-5 h-5 text-ocean-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-ocean-900 mb-6">Comodidades</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {house!.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full bg-ocean-400 flex-shrink-0" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-ocean-50 to-ocean-100 rounded-2xl p-8 border border-ocean-200">
                <h2 className="font-serif text-2xl font-bold text-ocean-900 mb-4">Servicos Inclusos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Camareira diaria', 'Wi-Fi de alta velocidade', 'Acesso por senha', 'Cameras CFTV', 'Terreno arborizado', 'A 100m da Praia do Rosa'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-ocean-800">
                      <svg className="w-4 h-4 text-ocean-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                      </svg>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                  <div className="text-center mb-6">
                    <h3 className="font-serif text-2xl font-bold text-ocean-900">{house!.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">Praia do Rosa, SC</p>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                      <span className="text-gray-600">Capacidade</span>
                      <span className="font-semibold">Ate {house!.capacity} hospedes</span>
                    </div>
                    <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                      <span className="text-gray-600">Quartos</span>
                      <span className="font-semibold">{house!.bedrooms}</span>
                    </div>
                    <div className="flex justify-between text-sm py-2">
                      <span className="text-gray-600">Distancia da praia</span>
                      <span className="font-semibold">100 metros</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/5548999990000?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg"
                    >
                      Solicitar Reserva via WhatsApp
                    </a>
                    <Link href="/contato" className="flex items-center justify-center w-full bg-ocean-50 hover:bg-ocean-100 text-ocean-700 font-semibold py-4 rounded-xl transition-all border border-ocean-200">
                      Enviar Mensagem
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-ocean-700 to-ocean-900 rounded-2xl p-6 text-white">
                  <h4 className="font-semibold mb-4 text-center">Por que a Flor do Mar?</h4>
                  <div className="space-y-2 text-sm text-ocean-100">
                    <p>&#10003; Camareira diaria inclusa</p>
                    <p>&#10003; Terreno fechado e seguro</p>
                    <p>&#10003; A 100m da Praia do Rosa</p>
                    <p>&#10003; Atendimento personalizado</p>
                    <p>&#10003; Ar-condicionado em todos os quartos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {otherHouses.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-ocean-900 mb-10 text-center">Outras Casas Disponiveis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherHouses.map((h) => (
                <Link key={h.id} href={`/casas/${h.slug}`} className="block bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="h-48 bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center">
                    <span className="text-ocean-400 font-medium">{h.name}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-ocean-900 mb-2">{h.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{h.shortDescription}</p>
                    <span className="text-ocean-600 font-semibold text-sm">Ver detalhes &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}