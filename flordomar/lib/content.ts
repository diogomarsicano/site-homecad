import fs from 'fs'
import path from 'path'
import { ContentData } from '@/types'

const contentFilePath = path.join(process.cwd(), 'data', 'content.json')

const defaultContent: ContentData = {
  siteName: 'Flor do Mar',
  tagline: 'Seu refúgio na Praia do Rosa',
  heroTitle: 'Seu refúgio a 100 metros da Praia do Rosa',
  heroSubtitle: 'Casas completas com conforto de pousada, atendimento personalizado e localização privilegiada.',
  aboutText: `A Flor do Mar nasceu do amor pela Praia do Rosa e do desejo de oferecer uma experiência de hospedagem única que une a privacidade e o conforto de uma casa exclusiva com a qualidade de serviços de uma pousada.

Localizada a apenas 100 metros da famosa Praia do Rosa, em Santa Catarina, nossa propriedade oferece 4 casas completamente equipadas em um terreno fechado, seguro e tranquilo. Cada casa foi cuidadosamente decorada para proporcionar conforto, aconchego e uma conexão genuína com a natureza exuberante do litoral catarinense.

Nosso diferencial está no atendimento personalizado: contamos com serviço de camareira diário, Wi-Fi de alta velocidade, estacionamento privativo, sistema de monitoramento por câmeras e acesso controlado ao terreno — tudo para que você e sua família desfrutem de uma estadia tranquila, segura e memorável.

Seja para relaxar nas ondas do Rosa, explorar a gastronomia local ou simplesmente descansar em meio à natureza, a Flor do Mar é o lugar perfeito para criar memórias inesquecíveis.`,
  address: 'Praia do Rosa, Imbituba - SC, Brasil',
  phone: '(48) 99999-0000',
  whatsapp: '5548999990000',
  email: 'contato@flordomar.com',
  instagram: 'flordomarrosa',
  facebook: 'flordomarpraiadorosa',
  googleMapsUrl: 'https://maps.google.com/?q=Praia+do+Rosa+Imbituba+SC',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.123456789!2d-48.6500!3d-28.1300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzQ4LjAiUyA0OMKwMzknMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890',
  houses: [
    {
      id: '1',
      name: 'Casa 01',
      slug: 'casa-01',
      description: 'A Casa 01 é perfeita para famílias que buscam conforto e espaço. Com 2 quartos e 1 suíte, oferece acomodação ampla e bem planejada, com varanda espaçosa para aproveitar as brisas do mar e a natureza ao redor.',
      shortDescription: 'Espaçosa e confortável, ideal para famílias. 2 quartos + suíte com varanda ampla.',
      capacity: 6,
      bedrooms: 3,
      bathrooms: 2,
      features: ['2 Quartos', '1 Suíte', 'Banheiro Social', 'Sala de Estar', 'Varanda Ampla'],
      amenities: ['Ar-condicionado', 'Wi-Fi Gratuito', 'Cozinha Completa', 'Estacionamento Privativo', 'Camareira Diária', 'TV', 'Churrasqueira'],
      images: [],
      mainImage: '/images/placeholder-house.jpg',
    },
    {
      id: '2',
      name: 'Casa 02',
      slug: 'casa-02',
      description: 'A Casa 02 é ideal para casais ou pequenas famílias. Com 1 quarto e sala com bicama, acomoda até 4 hóspedes com toda a comodidade necessária para uma estadia perfeita.',
      shortDescription: 'Aconchegante e funcional. 1 quarto + sala com bicama para até 4 hóspedes.',
      capacity: 4,
      bedrooms: 1,
      bathrooms: 1,
      features: ['1 Quarto', '1 Banheiro', 'Sala com Bicama', 'Capacidade para 4 hóspedes'],
      amenities: ['Ar-condicionado', 'Wi-Fi Gratuito', 'Cozinha Equipada', 'Estacionamento Privativo', 'Camareira Diária', 'TV'],
      images: [],
      mainImage: '/images/placeholder-house.jpg',
    },
    {
      id: '3',
      name: 'Casa 03',
      slug: 'casa-03',
      description: 'A Casa 03 combina praticidade e charme, com 2 quartos e varanda ampla. A garagem coberta e a sala integrada tornam esta casa uma excelente escolha para famílias que valorizam espaço e comodidade.',
      shortDescription: 'Charme e praticidade. 2 quartos com varanda ampla e garagem coberta.',
      capacity: 5,
      bedrooms: 2,
      bathrooms: 1,
      features: ['2 Quartos', 'Banheiro Social', 'Sala Integrada', 'Varanda Ampla', 'Garagem Coberta'],
      amenities: ['Ar-condicionado', 'Wi-Fi Gratuito', 'Cozinha Completa', 'Camareira Diária', 'TV'],
      images: [],
      mainImage: '/images/placeholder-house.jpg',
    },
    {
      id: '4',
      name: 'Casa 04',
      slug: 'casa-04',
      description: 'A Casa 04 é a mais completa do complexo, com pátio privativo, 2 quartos e 1 suíte. A varanda ampla e a sala espaçosa proporcionam uma experiência premium de conforto e privacidade.',
      shortDescription: 'Premium e espaçosa. Pátio privativo, 2 quartos + suíte com varanda ampla.',
      capacity: 7,
      bedrooms: 3,
      bathrooms: 2,
      features: ['Pátio Privativo', '2 Quartos', '1 Suíte', 'Banheiro Social', 'Sala Ampla', 'Varanda Ampla'],
      amenities: ['Ar-condicionado', 'Wi-Fi Gratuito', 'Cozinha Completa', 'Estacionamento Privativo', 'Camareira Diária', 'TV', 'Churrasqueira'],
      images: [],
      mainImage: '/images/placeholder-house.jpg',
    },
  ],
}

export function getContent(): ContentData {
  try {
    if (fs.existsSync(contentFilePath)) {
      const raw = fs.readFileSync(contentFilePath, 'utf-8')
      return JSON.parse(raw)
    }
  } catch {
    // fallback to default
  }
  return defaultContent
}

export function saveContent(data: ContentData): void {
  const dir = path.dirname(contentFilePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  fs.writeFileSync(contentFilePath, JSON.stringify(data, null, 2), 'utf-8')
}

export { defaultContent }
