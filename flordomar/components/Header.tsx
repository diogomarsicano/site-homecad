'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/casas', label: 'Casas' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/localizacao', label: 'Localização' },
  { href: '/contato', label: 'Contato' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClass = isHome
    ? isScrolled
      ? 'bg-white shadow-md text-gray-800'
      : 'bg-transparent text-white'
    : 'bg-white shadow-md text-gray-800'

  const logoClass = isHome && !isScrolled ? 'text-white' : 'text-ocean-700'
  const linkClass = isHome && !isScrolled
    ? 'text-white hover:text-sand-300'
    : 'text-gray-700 hover:text-ocean-600'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className={`font-serif text-2xl font-bold transition-colors ${logoClass}`}>
            <span className="flex items-center gap-2">
              <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5C20 5 8 15 8 25C8 31.627 13.373 37 20 37C26.627 37 32 31.627 32 25C32 15 20 5 20 5Z" fill="currentColor" fillOpacity="0.2"/>
                <path d="M20 10C20 10 13 18 13 25C13 28.866 16.134 32 20 32C23.866 32 27 28.866 27 25C27 18 20 10 20 10Z" fill="currentColor" fillOpacity="0.5"/>
                <path d="M20 16C20 16 16 21 16 25C16 27.209 17.791 29 20 29C22.209 29 24 27.209 24 25C24 21 20 16 20 16Z" fill="currentColor"/>
              </svg>
              Flor do Mar
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${linkClass} ${
                  pathname === link.href ? 'border-b-2 border-current pb-0.5' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              className="bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Reservar
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${isHome && !isScrolled ? 'text-white' : 'text-gray-700'}`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-gray-700 hover:text-ocean-600 hover:bg-ocean-50 font-medium transition-colors ${
                  pathname === link.href ? 'text-ocean-600 bg-ocean-50' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/contato"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center bg-ocean-600 hover:bg-ocean-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
              >
                Reservar Agora
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
