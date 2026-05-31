import type { Metadata } from 'next'
import { getContent } from '@/lib/content'
import HouseCard from '@/components/HouseCard'

export const metadata: Metadata = {
  title: 'Nossas Casas',
  description: 'Conheça as 4 casas da Flor do Mar na Praia do Rosa. Todas equipadas, com camareira diária, Wi-Fi, estacionamento e serviços de pousada. Reserve já!',
}

export default async function CasasPage() {
  const content = getContent()

  return (
    <>
      {/* Page Header */}
      <div className="bg-gradient-to-br from-ocean-800 to-ocean-600 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-ocean-200 font-semibold text-sm uppercase tracking-wider mb-3 block">Acomodações</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Nossas Casas</h1>
          <p className="text-ocean-100 text-xl max-w-2xl mx-auto">
            Quatro casas exclusivas, cada uma com personalidade própria, todas com o padrão de conforto e serviço da Flor do Mar.
          </p>
        </div>
      </div>

      {/* Houses Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.houses.map((house) => (
              <div key={house.id} className="card group">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center">
                    <div className="text-center text-ocean-400">
                      <svg className="w-20 h-20 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        <polyline strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} points="9 22 9 12 15 12 15 22"/>
                      </svg>
                      <span className="text-lg font-semibold">{house.name}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-ocean-600 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                      {house.name}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-ocean-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                      Até {house.capacity} hóspedes
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="font-serif text-2xl font-bold text-ocean-900 mb-3">{house.name}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{house.description}</p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {house.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-ocean-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-100">
                    {house.amenities.map((amenity) => (
                      <span key={amenity} className="bg-ocean-50 text-ocean-700 text-xs px-3 py-1.5 rounded-full font-medium">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={`/casas/${house.slug}`}
                      className="flex-1 text-center bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      Ver Detalhes e Fotos
                    </a>
                    <a
                      href={`https://wa.me/5548999990000?text=${encodeURIComponent(`Olá! Tenho interesse em reservar a ${house.name}. Pode me informar disponibilidade e valores?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Reservar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services included */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-ocean-900 mb-8">
            Todos os serviços inclusos em todas as casas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '🧹', label: 'Camareira Diária' },
              { icon: '📶', label: 'Wi-Fi Gratuito' },
              { icon: '🔐', label: 'Terreno Fechado' },
              { icon: '📹', label: 'Câmeras de Segurança' },
              { icon: '❄️', label: 'Ar-condicionado' },
              { icon: '🏖️', label: '100m da Praia' },
              { icon: '🚗', label: 'Estacionamento' },
              { icon: '📞', label: 'Atendimento 24h' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 p-4 bg-ocean-50 rounded-xl">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-sm font-medium text-ocean-800">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
