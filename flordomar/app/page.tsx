import Link from 'next/link'
import Image from 'next/image'
import { getContent } from '@/lib/content'
import HouseCard from '@/components/HouseCard'

const features = [
  {
    icon: '🏡',
    title: 'Casas Completas',
    description: 'Totalmente equipadas para sua família se sentir em casa, com tudo o que precisa.',
  },
  {
    icon: '🧹',
    title: 'Camareira Diária',
    description: 'Serviço de camareira todos os dias para manter sua estadia sempre confortável.',
  },
  {
    icon: '📶',
    title: 'Wi-Fi Gratuito',
    description: 'Internet de alta velocidade disponível em todas as casas e áreas comuns.',
  },
  {
    icon: '🚗',
    title: 'Estacionamento',
    description: 'Vaga privativa para seu veículo, com segurança e comodidade.',
  },
  {
    icon: '❄️',
    title: 'Ar-condicionado',
    description: 'Todas as casas possuem ar-condicionado para seu máximo conforto.',
  },
  {
    icon: '🔐',
    title: 'Terreno Fechado',
    description: 'Acesso controlado por senha para sua segurança e privacidade.',
  },
  {
    icon: '📹',
    title: 'Monitoramento CFTV',
    description: 'Sistema de câmeras 24h para total segurança da sua família.',
  },
  {
    icon: '🏖️',
    title: 'A 100m da Praia',
    description: 'Localização privilegiada, a poucos passos da famosa Praia do Rosa.',
  },
]

const testimonials = [
  {
    name: 'Família Silva',
    location: 'São Paulo, SP',
    text: 'Experiência incrível! A casa era espaçosa, muito limpa e o atendimento personalizado nos fez sentir em casa. A praia fica logo ali, maravilhosa!',
    stars: 5,
  },
  {
    name: 'Mariana e Carlos',
    location: 'Curitiba, PR',
    text: 'Voltaremos com certeza! A camareira diária, o Wi-Fi excelente e a segurança do terreno fechado fizeram toda a diferença. Lugar paradisíaco!',
    stars: 5,
  },
  {
    name: 'Família Rodrigues',
    location: 'Porto Alegre, RS',
    text: 'Melhor hospedagem que já tivemos na Praia do Rosa. A privacidade de uma casa com o serviço de pousada é o diferencial perfeito para quem viaja em família.',
    stars: 5,
  },
]

export default async function HomePage() {
  const content = getContent()

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-600">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,64 C360,120 1080,0 1440,80 L1440,120 L0,120 Z" fill="white"/>
          </svg>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-8">
            <span className="text-sand-300">🏖️</span>
            <span>Praia do Rosa, Santa Catarina</span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            {content.heroTitle}
          </h1>

          <p className="text-xl md:text-2xl text-ocean-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            {content.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/casas"
              className="w-full sm:w-auto bg-white text-ocean-700 hover:bg-ocean-50 font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
            >
              Ver Casas
            </Link>
            <Link
              href="/contato"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-ocean-700 font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg"
            >
              Reservar Agora
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            {[
              { value: '4', label: 'Casas' },
              { value: '100m', label: 'da Praia' },
              { value: '24h', label: 'Segurança' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-sand-300 font-serif">{stat.value}</div>
                <div className="text-sm text-ocean-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider mb-3 block">Por que nos escolher</span>
            <h2 className="section-title">Nossos Diferenciais</h2>
            <p className="section-subtitle">
              A privacidade de uma casa exclusiva com o atendimento e os serviços de uma pousada.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-ocean-200 hover:bg-ocean-50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-ocean-900 mb-2 text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Banner */}
      <section className="py-20 bg-gradient-to-r from-ocean-700 to-ocean-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            "A privacidade de uma casa exclusiva com o atendimento e os serviços de uma pousada."
          </h2>
          <p className="text-ocean-200 text-lg mb-10">
            A Praia do Rosa fica a apenas 100 metros. Sua família merece o melhor.
          </p>
          <Link
            href="/casas"
            className="inline-flex items-center gap-3 bg-sand-400 hover:bg-sand-500 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl text-lg"
          >
            Conhecer as Casas
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Houses Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider mb-3 block">Acomodações</span>
            <h2 className="section-title">Nossas Casas</h2>
            <p className="section-subtitle">
              Escolha a casa perfeita para sua família. Todas completamente equipadas e com serviços de pousada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {content.houses.map((house) => (
              <HouseCard key={house.id} house={house} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/casas"
              className="inline-flex items-center gap-2 btn-outline text-lg"
            >
              Ver Todas as Casas
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider mb-3 block">Localização</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-ocean-900 mb-6">
                No Coração da Praia do Rosa
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                A Flor do Mar está localizada a apenas 100 metros da Praia do Rosa, em Imbituba, Santa Catarina.
                Uma das praias mais bonitas e preservadas do Brasil, famosa pelo surfe, pelas baleias francas e pela
                natureza exuberante.
              </p>
              <div className="space-y-4">
                {[
                  { icon: '🏖️', text: 'A 100 metros da Praia do Rosa' },
                  { icon: '🍽️', text: 'Próximo aos melhores restaurantes' },
                  { icon: '🛒', text: 'Mercados e centrinho a 5 minutos' },
                  { icon: '🐋', text: 'Temporada de baleias de junho a novembro' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/localizacao"
                className="inline-flex items-center gap-2 btn-primary mt-8"
              >
                Ver no Mapa
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-ocean-100 to-ocean-200 rounded-3xl h-80 flex items-center justify-center">
                <div className="text-center text-ocean-500">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <p className="font-semibold text-lg">Praia do Rosa</p>
                  <p className="text-sm text-ocean-400">Imbituba, SC</p>
                </div>
              </div>
              {/* Floating cards */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <span className="text-2xl">🏖️</span>
                <div>
                  <p className="font-bold text-ocean-800 text-sm">Praia do Rosa</p>
                  <p className="text-xs text-gray-500">100m de distância</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <span className="text-2xl">⭐</span>
                <div>
                  <p className="font-bold text-ocean-800 text-sm">Localização Premium</p>
                  <p className="text-xs text-gray-500">Melhor ponto da praia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-ocean-500 font-semibold text-sm uppercase tracking-wider mb-3 block">Depoimentos</span>
            <h2 className="section-title">O que dizem nossos hóspedes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-sand-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center text-ocean-600 font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{testimonial.name}</p>
                    <p className="text-gray-500 text-xs">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ocean-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
            Pronto para sua próxima aventura?
          </h2>
          <p className="text-ocean-100 text-lg mb-10">
            Reserve agora sua estadia na Flor do Mar e viva a experiência única de estar na Praia do Rosa com todo o conforto e segurança que sua família merece.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contato"
              className="w-full sm:w-auto bg-white text-ocean-700 hover:bg-ocean-50 font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl text-lg"
            >
              Fazer Reserva
            </Link>
            <a
              href="https://wa.me/5548999990000?text=Olá! Gostaria de fazer uma reserva na Flor do Mar."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-xl text-lg flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
