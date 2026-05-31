import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getContent, saveContent } from '@/lib/content'
import { writeFile, mkdir, unlink } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const houseId = formData.get('houseId') as string

    if (!file || !houseId) {
      return NextResponse.json({ error: 'Arquivo e ID da casa são obrigatórios' }, { status: 400 })
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json({ error: 'Tipo de arquivo não permitido. Use JPG, PNG ou WebP.' }, { status: 400 })
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: 'Arquivo muito grande. Máximo 5MB.' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadDir = path.join(process.cwd(), 'public', 'uploads', `casa${houseId}`)
    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true })
    }

    const ext = file.name.split('.').pop()?.toLowerCase() || 'jpg'
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
    const filepath = path.join(uploadDir, filename)

    await writeFile(filepath, buffer)

    const imageUrl = `/uploads/casa${houseId}/${filename}`

    // Update content.json
    const content = getContent()
    const house = content.houses.find((h) => h.id === houseId)
    if (house) {
      if (!house.images) house.images = []
      house.images.push(imageUrl)
      if (!house.mainImage || house.mainImage.includes('placeholder')) {
        house.mainImage = imageUrl
      }
      saveContent(content)
    }

    return NextResponse.json({ success: true, url: imageUrl })
  } catch (error) {
    console.error('[Upload Error]', error)
    return NextResponse.json({ error: 'Erro ao fazer upload' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  try {
    const { imageUrl, houseId } = await request.json()

    if (!imageUrl || !houseId) {
      return NextResponse.json({ error: 'Dados inválidos' }, { status: 400 })
    }

    // Security: only allow deleting from uploads folder
    if (!imageUrl.startsWith('/uploads/')) {
      return NextResponse.json({ error: 'Operação não permitida' }, { status: 403 })
    }

    const filepath = path.join(process.cwd(), 'public', imageUrl)
    try {
      await unlink(filepath)
    } catch {
      // File might not exist physically
    }

    // Update content.json
    const content = getContent()
    const house = content.houses.find((h) => h.id === houseId)
    if (house) {
      house.images = (house.images || []).filter((img) => img !== imageUrl)
      if (house.mainImage === imageUrl) {
        house.mainImage = house.images[0] || ''
      }
      saveContent(content)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Delete Error]', error)
    return NextResponse.json({ error: 'Erro ao remover imagem' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 })
  }

  try {
    const { houseId, images, mainImage } = await request.json()

    const content = getContent()
    const house = content.houses.find((h) => h.id === houseId)
    if (house) {
      if (images) house.images = images
      if (mainImage) house.mainImage = mainImage
      saveContent(content)
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erro ao reordenar imagens' }, { status: 500 })
  }
}
