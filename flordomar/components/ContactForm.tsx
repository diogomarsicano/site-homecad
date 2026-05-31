'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ContactFormData } from '@/types'

export default function ContactForm({ selectedHouse }: { selectedHouse?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: { house: selectedHouse || '' },
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const body = await res.json()
        throw new Error(body.error || 'Erro ao enviar mensagem')
      }

      setStatus('success')
      reset()
    } catch (err: unknown) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Erro ao enviar mensagem. Tente via WhatsApp.')
    }
  }

  const inputClass = 'w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent transition-all bg-gray-50 focus:bg-white'
  const labelClass = 'block text-sm font-semibold text-gray-700 mb-1.5'
  const errorClass = 'text-red-500 text-xs mt-1'

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-ocean-900 mb-3">Mensagem Enviada!</h3>
        <p className="text-gray-600 mb-6">
          Recebemos sua solicitação e entraremos em contato em breve. Você também pode nos chamar pelo WhatsApp para uma resposta mais rápida.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/5548999990000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chamar no WhatsApp
          </a>
          <button
            onClick={() => setStatus('idle')}
            className="inline-flex items-center justify-center gap-2 bg-ocean-50 hover:bg-ocean-100 text-ocean-700 font-semibold py-3 px-6 rounded-xl transition-all border border-ocean-200"
          >
            Nova Mensagem
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nome */}
        <div>
          <label className={labelClass}>Nome Completo *</label>
          <input
            {...register('name', { required: 'Nome é obrigatório' })}
            className={inputClass}
            placeholder="Seu nome completo"
          />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>

        {/* Telefone */}
        <div>
          <label className={labelClass}>Telefone / WhatsApp *</label>
          <input
            {...register('phone', { required: 'Telefone é obrigatório' })}
            className={inputClass}
            placeholder="(48) 99999-9999"
            type="tel"
          />
          {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label className={labelClass}>E-mail *</label>
        <input
          {...register('email', {
            required: 'E-mail é obrigatório',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' },
          })}
          className={inputClass}
          placeholder="seu@email.com"
          type="email"
        />
        {errors.email && <p className={errorClass}>{errors.email.message}</p>}
      </div>

      {/* Casa */}
      <div>
        <label className={labelClass}>Casa de Interesse</label>
        <select {...register('house')} className={inputClass}>
          <option value="">Selecione uma casa (opcional)</option>
          <option value="casa-01">Casa 01 — 2 quartos + suíte, até 6 hóspedes</option>
          <option value="casa-02">Casa 02 — 1 quarto + bicama, até 4 hóspedes</option>
          <option value="casa-03">Casa 03 — 2 quartos, até 5 hóspedes</option>
          <option value="casa-04">Casa 04 — 2 quartos + suíte + pátio, até 7 hóspedes</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {/* Check-in */}
        <div>
          <label className={labelClass}>Check-in *</label>
          <input
            {...register('checkin', { required: 'Data de check-in obrigatória' })}
            className={inputClass}
            type="date"
          />
          {errors.checkin && <p className={errorClass}>{errors.checkin.message}</p>}
        </div>

        {/* Check-out */}
        <div>
          <label className={labelClass}>Check-out *</label>
          <input
            {...register('checkout', { required: 'Data de check-out obrigatória' })}
            className={inputClass}
            type="date"
          />
          {errors.checkout && <p className={errorClass}>{errors.checkout.message}</p>}
        </div>

        {/* Hóspedes */}
        <div>
          <label className={labelClass}>Hóspedes *</label>
          <select
            {...register('guests', { required: true, valueAsNumber: true })}
            className={inputClass}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? 'hóspede' : 'hóspedes'}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Mensagem */}
      <div>
        <label className={labelClass}>Mensagem</label>
        <textarea
          {...register('message')}
          className={`${inputClass} resize-none`}
          rows={4}
          placeholder="Alguma dúvida, pedido especial ou informação adicional..."
        />
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm">
          {errorMessage || 'Erro ao enviar. Por favor, tente pelo WhatsApp.'}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="flex-1 bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
              </svg>
              Enviando...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
              Enviar Solicitação
            </>
          )}
        </button>
        <a
          href="https://wa.me/5548999990000?text=Olá! Gostaria de informações sobre hospedagem na Flor do Mar."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          WhatsApp
        </a>
      </div>
      <p className="text-xs text-gray-400 text-center">
        Seus dados são protegidos e não serão compartilhados com terceiros.
      </p>
    </form>
  )
}
