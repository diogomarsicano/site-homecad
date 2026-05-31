import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Localização',
  description: 'Onde fica a Flor do Mar? A 100 metros da Praia do Rosa, Imbituba, SC. Veja como chegar, restaurantes próximos, mercados e pontos turísticos.',
}

const nearbyPlaces = [
  {
    category: 'Praia',
    icon: '🏖️',
    places: [
      { name: 'Praia do Rosa', distance: '100 metros', note: 'Principal' },
      { name: 'Praia do Rosa Sul', distance: '800 metros' },
      { name: 'Praia do Ouvidor', distance: '3 km' },
    ],
  },
  {
    category: 'Restaurantes',
    icon: '🍽️',
    places: [
      { name: 'Centrinho do Rosa', distance: '500 metros', note: 'Vários opções' },
      { name: 'Restaurante Bambu', distance: '600 metros' },
      { name: 'La Birra', distance: '700 metros' },
    ],
  },
  {
    category: 'Mercados',
    icon: '🛒',
    places: [
      { name: 'Mercadinho do Rosa', distance: '400 metros' },
      { name: 'Supermercado Imbituba', distance: '8 km' },
    ],
  },
  {
    category: 'Atrações',
    icon: '⭐',
    places: [
      { name: 'Mirante do Rosa', distance: '1.5 km' },
      { name: 'Lagoa do Rosa', distance: '2 km' },
      { name: 'Ponto de observação de baleias', distance: '1 km' },
    ],
  },
]

export default function LocalizacaoPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-ocean-800 to-ocean-600 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-ocean-200 font-semibold text-sm uppercase tracking-wider mb-3 block">Como Chegar</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Localização</h1>
          <p className="text-ocean-100 text-xl max-w-2xl mx-auto">
            Praia do Rosa, Imbituba — Santa Catarina, Brasil.
            A 100 metros da praia e 80km de Florianópolis.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Map */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-xl h-96 lg:h-full min-h-96 bg-gradient-to-br from-ocean-100 to-ocean-200 flex items-center justify-center">
                <div className="text-center text-ocean-500 p-8">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                  <p className="text-lg font-semibold text-ocean-700 mb-2">Mapa Interativo</p>
                  <p className="text-sm text-ocean-500 mb-6">Praia do Rosa, Imbituba - SC</p>
                  <a
                    href="https://maps.google.com/?q=Praia+do+Rosa+Imbituba+SC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                * Ative o JavaScript ou use o botão acima para abrir o mapa interativo
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="bg-ocean-600 text-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <h3 className="font-semibold text-lg">Endereço</h3>
                </div>
                <p className="text-ocean-100 leading-relaxed">
                  Praia do Rosa<br />
                  Imbituba - SC<br />
                  Brasil
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-ocean-900 mb-4 flex items-center gap-2">
                  <span>🏖️</span> Distância da Praia
                </h3>
                <div className="text-4xl font-bold text-ocean-600 font-serif mb-1">100m</div>
                <p className="text-gray-500 text-sm">A pé em menos de 2 minutos</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-ocean-900 mb-4">Como Chegar</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="text-lg">✈️</span>
                    <div>
                      <p className="font-medium text-gray-800">Voo</p>
                      <p>Aeroporto de Florianópolis (FLN) — 80km, ~1h de carro</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-lg">🚗</span>
                    <div>
                      <p className="font-medium text-gray-800">Carro</p>
                      <p>BR-101 Sul até Imbituba, depois Estrada Geral do Rosa</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-lg">🚌</span>
                    <div>
                      <p className="font-medium text-gray-800">Ônibus</p>
                      <p>Terminal de Imbituba + táxi/Uber até o Rosa</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/5548999990000?text=Olá! Gostaria de informações sobre como chegar na Flor do Mar."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pedir Instruções via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Places */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider mb-3 block">Ao Redor</span>
            <h2 className="section-title">O que há por perto</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyPlaces.map((category) => (
              <div key={category.category} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="font-serif text-lg font-bold text-ocean-900">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.places.map((place) => (
                    <li key={place.name} className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{place.name}</p>
                        {place.note && (
                          <span className="text-xs text-ocean-500 font-medium">{place.note}</span>
                        )}
                      </div>
                      <span className="text-xs text-gray-400 whitespace-nowrap bg-gray-50 px-2 py-0.5 rounded-full">
                        {place.distance}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rosa Info */}
      <section className="py-20 bg-gradient-to-br from-ocean-600 to-ocean-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">A Praia do Rosa</h2>
          <p className="text-ocean-100 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
            Eleita uma das mais belas praias do Brasil, a Praia do Rosa encanta pela combinação de mar aberto,
            lagoa, dunas e mata atlântica. É destino de surfe de classe mundial, observação de baleias francas
            (de junho a novembro) e gastronomia de alto nível.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: '🌊', label: 'Mar Aberto' },
              { icon: '🐋', label: 'Baleias Francas' },
              { icon: '🏄', label: 'Surf Mundial' },
              { icon: '🌿', label: 'Mata Atlântica' },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
          <Link href="/contato" className="inline-block bg-white text-ocean-700 hover:bg-ocean-50 font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl text-lg">
            Reservar Agora
          </Link>
        </div>
      </section>
    </>
  )
}
