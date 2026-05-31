'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { ContentData, House } from '@/types'

type Tab = 'fotos' | 'conteudo' | 'casas'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('fotos')
  const [activeHouseId, setActiveHouseId] = useState('1')
  const [content, setContent] = useState<ContentData | null>(null)
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState('')
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/admin/content')
      .then((r) => r.json())
      .then(setContent)
      .catch(console.error)
  }, [])

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin/login')
  }

  const saveContent = async () => {
    if (!content) return
    setSaving(true)
    setSaveMsg('')
    try {
      const res = await fetch('/api/admin/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
      })
      if (!res.ok) throw new Error()
      setSaveMsg('Salvo com sucesso!')
    } catch {
      setSaveMsg('Erro ao salvar.')
    } finally {
      setSaving(false)
      setTimeout(() => setSaveMsg(''), 3000)
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return
    setUploading(true)

    for (const file of Array.from(files)) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('houseId', activeHouseId)

      try {
        const res = await fetch('/api/admin/upload', { method: 'POST', body: formData })
        if (res.ok) {
          const { url } = await res.json()
          setContent((prev) => {
            if (!prev) return prev
            return {
              ...prev,
              houses: prev.houses.map((h) =>
                h.id === activeHouseId
                  ? {
                      ...h,
                      images: [...(h.images || []), url],
                      mainImage: h.mainImage && !h.mainImage.includes('placeholder') ? h.mainImage : url,
                    }
                  : h
              ),
            }
          })
        }
      } catch { /* continue */ }
    }

    setUploading(false)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleDeleteImage = async (imageUrl: string) => {
    if (!confirm('Remover esta imagem?')) return
    await fetch('/api/admin/upload', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageUrl, houseId: activeHouseId }),
    })
    setContent((prev) => {
      if (!prev) return prev
      return {
        ...prev,
        houses: prev.houses.map((h) =>
          h.id === activeHouseId
            ? {
                ...h,
                images: (h.images || []).filter((img) => img !== imageUrl),
                mainImage: h.mainImage === imageUrl ? ((h.images || []).filter((i) => i !== imageUrl)[0] || '') : h.mainImage,
              }
            : h
        ),
      }
    })
  }

  const setMainImage = (imageUrl: string) => {
    setContent((prev) => {
      if (!prev) return prev
      return {
        ...prev,
        houses: prev.houses.map((h) =>
          h.id === activeHouseId ? { ...h, mainImage: imageUrl } : h
        ),
      }
    })
  }

  const updateHouseField = (houseId: string, field: keyof House, value: unknown) => {
    setContent((prev) => {
      if (!prev) return prev
      return {
        ...prev,
        houses: prev.houses.map((h) => (h.id === houseId ? { ...h, [field]: value } : h)),
      }
    })
  }

  const updateContactField = (field: keyof ContentData, value: string) => {
    setContent((prev) => prev ? { ...prev, [field]: value } : prev)
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <svg className="animate-spin w-10 h-10 text-ocean-500 mx-auto mb-3" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          <p className="text-gray-500">Carregando...</p>
        </div>
      </div>
    )
  }

  const activeHouse = content.houses.find((h) => h.id === activeHouseId)

  const inputClass = 'w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 bg-gray-50 focus:bg-white transition-all'
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-ocean-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
              </svg>
            </div>
            <span className="font-bold text-ocean-900">Flor do Mar — Admin</span>
          </div>
          <div className="flex items-center gap-3">
            {saveMsg && (
              <span className={`text-sm font-medium ${saveMsg.includes('Erro') ? 'text-red-500' : 'text-green-600'}`}>
                {saveMsg}
              </span>
            )}
            <button
              onClick={saveContent}
              disabled={saving}
              className="bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all flex items-center gap-2"
            >
              {saving ? (
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
                </svg>
              )}
              Salvar Tudo
            </button>
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ocean-600 text-sm transition-colors">
              Ver Site
            </a>
            <button onClick={handleLogout} className="text-gray-500 hover:text-red-500 text-sm transition-colors">
              Sair
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-1 bg-white rounded-xl p-1 shadow-sm border border-gray-200 mb-8 w-fit">
          {([
            { id: 'fotos', label: 'Fotos das Casas' },
            { id: 'casas', label: 'Descrições das Casas' },
            { id: 'conteudo', label: 'Contato e Textos' },
          ] as { id: Tab; label: string }[]).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-ocean-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-ocean-600 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FOTOS TAB */}
        {activeTab === 'fotos' && (
          <div>
            {/* House selector */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {content.houses.map((h) => (
                <button
                  key={h.id}
                  onClick={() => setActiveHouseId(h.id)}
                  className={`py-2 px-5 rounded-full text-sm font-medium transition-all border ${
                    activeHouseId === h.id
                      ? 'bg-ocean-600 text-white border-ocean-600'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-ocean-300'
                  }`}
                >
                  {h.name}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-serif text-xl font-bold text-ocean-900">
                  Fotos — {activeHouse?.name}
                </h2>
                <div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    multiple
                    className="hidden"
                    onChange={handleUpload}
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="flex items-center gap-2 bg-ocean-600 hover:bg-ocean-700 disabled:bg-ocean-300 text-white font-semibold py-2.5 px-5 rounded-xl transition-all text-sm"
                  >
                    {uploading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
                        </svg>
                        Adicionar Fotos
                      </>
                    )}
                  </button>
                </div>
              </div>

              {(!activeHouse?.images || activeHouse.images.length === 0) ? (
                <div
                  className="border-2 border-dashed border-gray-200 rounded-xl h-48 flex items-center justify-center cursor-pointer hover:border-ocean-300 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="text-center text-gray-400">
                    <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <p className="font-medium">Clique para adicionar fotos</p>
                    <p className="text-sm mt-1">JPG, PNG ou WebP — máx. 5MB cada</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {activeHouse.images.map((img, i) => (
                    <div key={img} className="relative group rounded-xl overflow-hidden aspect-square bg-gray-100">
                      <img src={img} alt={`Foto ${i + 1}`} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <button
                          onClick={() => setMainImage(img)}
                          title="Definir como principal"
                          className={`p-2 rounded-full transition-colors ${
                            activeHouse.mainImage === img
                              ? 'bg-sand-400 text-white'
                              : 'bg-white/90 text-gray-700 hover:bg-sand-400 hover:text-white'
                          }`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeleteImage(img)}
                          title="Remover foto"
                          className="p-2 rounded-full bg-white/90 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                          </svg>
                        </button>
                      </div>
                      {activeHouse.mainImage === img && (
                        <div className="absolute top-2 left-2 bg-sand-400 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                          Principal
                        </div>
                      )}
                    </div>
                  ))}
                  <div
                    className="aspect-square border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center cursor-pointer hover:border-ocean-300 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CASAS TAB */}
        {activeTab === 'casas' && (
          <div className="space-y-6">
            {content.houses.map((house) => (
              <div key={house.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="font-serif text-xl font-bold text-ocean-900 mb-6">{house.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Nome da Casa</label>
                    <input
                      value={house.name}
                      onChange={(e) => updateHouseField(house.id, 'name', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Capacidade (hóspedes)</label>
                    <input
                      type="number"
                      value={house.capacity}
                      onChange={(e) => updateHouseField(house.id, 'capacity', parseInt(e.target.value))}
                      className={inputClass}
                      min={1}
                      max={20}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Descrição Curta</label>
                    <input
                      value={house.shortDescription}
                      onChange={(e) => updateHouseField(house.id, 'shortDescription', e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelClass}>Descrição Completa</label>
                    <textarea
                      value={house.description}
                      onChange={(e) => updateHouseField(house.id, 'description', e.target.value)}
                      className={`${inputClass} resize-none`}
                      rows={4}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Características (uma por linha)</label>
                    <textarea
                      value={(house.features || []).join('\n')}
                      onChange={(e) => updateHouseField(house.id, 'features', e.target.value.split('\n').filter(Boolean))}
                      className={`${inputClass} resize-none`}
                      rows={5}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Comodidades (uma por linha)</label>
                    <textarea
                      value={(house.amenities || []).join('\n')}
                      onChange={(e) => updateHouseField(house.id, 'amenities', e.target.value.split('\n').filter(Boolean))}
                      className={`${inputClass} resize-none`}
                      rows={5}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CONTEUDO TAB */}
        {activeTab === 'conteudo' && (
          <div className="space-y-6">
            {/* Contact info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="font-serif text-xl font-bold text-ocean-900 mb-6">Informações de Contato</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { field: 'phone' as keyof ContentData, label: 'Telefone' },
                  { field: 'whatsapp' as keyof ContentData, label: 'WhatsApp (apenas números, ex: 5548999990000)' },
                  { field: 'email' as keyof ContentData, label: 'E-mail' },
                  { field: 'address' as keyof ContentData, label: 'Endereço' },
                  { field: 'instagram' as keyof ContentData, label: 'Instagram (só o @, sem o @)' },
                  { field: 'facebook' as keyof ContentData, label: 'Facebook (usuário)' },
                ].map(({ field, label }) => (
                  <div key={field}>
                    <label className={labelClass}>{label}</label>
                    <input
                      value={(content[field] as string) || ''}
                      onChange={(e) => updateContactField(field, e.target.value)}
                      className={inputClass}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Texts */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="font-serif text-xl font-bold text-ocean-900 mb-6">Textos do Site</h2>
              <div className="space-y-5">
                <div>
                  <label className={labelClass}>Título do Hero (Página Inicial)</label>
                  <input
                    value={content.heroTitle}
                    onChange={(e) => updateContactField('heroTitle', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Subtítulo do Hero</label>
                  <input
                    value={content.heroSubtitle}
                    onChange={(e) => updateContactField('heroSubtitle', e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Texto Institucional (Página Sobre)</label>
                  <textarea
                    value={content.aboutText}
                    onChange={(e) => updateContactField('aboutText', e.target.value)}
                    className={`${inputClass} resize-none`}
                    rows={10}
                  />
                  <p className="text-xs text-gray-400 mt-1">Separe os parágrafos com uma linha em branco</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
