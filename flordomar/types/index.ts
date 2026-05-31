export interface House {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  capacity: number
  bedrooms: number
  bathrooms: number
  features: string[]
  amenities: string[]
  images: string[]
  mainImage: string
  price?: string
}

export interface ContentData {
  siteName: string
  tagline: string
  heroTitle: string
  heroSubtitle: string
  aboutText: string
  address: string
  phone: string
  whatsapp: string
  email: string
  instagram?: string
  facebook?: string
  googleMapsUrl: string
  googleMapsEmbed: string
  houses: House[]
}

export interface ContactFormData {
  name: string
  phone: string
  email: string
  checkin: string
  checkout: string
  guests: number
  message: string
  house?: string
}

export interface AdminUser {
  username: string
  password: string
}
