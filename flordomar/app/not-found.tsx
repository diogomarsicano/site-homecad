import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-50 to-ocean-100 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl mb-6">🌊</div>
        <h1 className="font-serif text-6xl font-bold text-ocean-700 mb-4">404</h1>
        <h2 className="font-serif text-2xl font-bold text-ocean-900 mb-4">Página não encontrada</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Parece que esta onda levou você para águas desconhecidas. Volte para a página inicial e continue navegando!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Voltar ao Início
          </Link>
          <Link href="/casas" className="btn-outline">
            Ver as Casas
          </Link>
        </div>
      </div>
    </div>
  )
}
