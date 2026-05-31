import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contato e Reservas',
  description: 'Entre em contato com a Flor do Mar para reservar sua casa na Praia do Rosa. Atendimento via WhatsApp e e-mail. Resposta rápida e personalizada.',
}

export default function ContatoPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-gradient-to-br from-ocean-800 to-ocean-600 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-ocean-200 font-semibold text-sm uppercase tracking-wider mb-3 block">Fale Conosco</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contato e Reservas</h1>
          <p className="text-ocean-100 text-xl max-w-2xl mx-auto">
            Entre em contato para verificar disponibilidade, tirar dúvidas ou fazer sua reserva. Respondemos rapidamente!
          </p>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="font-serif text-xl font-bold text-ocean-900 mb-6">Informações de Contato</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ocean-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Endereço</p>
                      <p className="text-gray-600 text-sm mt-1">Praia do Rosa, Imbituba - SC</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">WhatsApp</p>
                      <a href="https://wa.me/5548999990000" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 text-sm mt-1 block font-medium">
                        (48) 99999-0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ocean-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Telefone</p>
                      <a href="tel:+5548999990000" className="text-ocean-600 hover:text-ocean-700 text-sm mt-1 block font-medium">
                        (48) 99999-0000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ocean-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-ocean-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">E-mail</p>
                      <a href="mailto:contato@flordomar.com" className="text-ocean-600 hover:text-ocean-700 text-sm mt-1 block font-medium">
                        contato@flordomar.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp */}
              <div className="bg-green-500 rounded-2xl p-6 text-white text-center">
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-bold text-lg mb-2">Atendimento Rápido</h3>
                <p className="text-green-100 text-sm mb-4">Resposta em minutos via WhatsApp</p>
                <a
                  href="https://wa.me/5548999990000?text=Olá! Gostaria de informações sobre hospedagem na Flor do Mar, Praia do Rosa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-white text-green-600 hover:bg-green-50 font-bold py-3 rounded-xl transition-all duration-300"
                >
                  Chamar no WhatsApp
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-semibold text-ocean-900 mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Segunda a Sexta</span>
                    <span className="font-medium text-gray-800">8h às 20h</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Sábado</span>
                    <span className="font-medium text-gray-800">8h às 18h</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Domingo</span>
                    <span className="font-medium text-gray-800">9h às 16h</span>
                  </div>
                </div>
                <p className="text-xs text-ocean-500 mt-4">
                  * WhatsApp disponível com resposta rápida em todos os horários
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 className="font-serif text-2xl font-bold text-ocean-900 mb-2">Solicitar Reserva</h2>
                <p className="text-gray-500 mb-8">Preencha o formulário e entraremos em contato em breve.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
