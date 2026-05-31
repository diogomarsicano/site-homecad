import { NextRequest, NextResponse } from 'next/server'
import { ContactFormData } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.phone || !data.email || !data.checkin || !data.checkout) {
      return NextResponse.json({ error: 'Campos obrigatórios não preenchidos' }, { status: 400 })
    }

    // Build email body
    const emailBody = `
Nova solicitação de reserva - Flor do Mar

Nome: ${data.name}
Telefone: ${data.phone}
E-mail: ${data.email}
Casa: ${data.house || 'Não especificada'}
Check-in: ${data.checkin}
Check-out: ${data.checkout}
Hóspedes: ${data.guests}
Mensagem: ${data.message || 'Nenhuma mensagem adicional'}

---
Enviado em: ${new Date().toLocaleString('pt-BR')}
    `.trim()

    // Send via Nodemailer if configured
    const emailUser = process.env.EMAIL_USER
    const emailPass = process.env.EMAIL_PASS
    const emailTo = process.env.EMAIL_TO || 'contato@flordomar.com'

    if (emailUser && emailPass) {
      try {
        const nodemailer = await import('nodemailer')
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_HOST || 'smtp.gmail.com',
          port: parseInt(process.env.EMAIL_PORT || '587'),
          secure: false,
          auth: { user: emailUser, pass: emailPass },
        })

        await transporter.sendMail({
          from: `"Flor do Mar Site" <${emailUser}>`,
          to: emailTo,
          replyTo: data.email,
          subject: `[Flor do Mar] Reserva: ${data.name} — ${data.checkin} a ${data.checkout}`,
          text: emailBody,
          html: emailBody.replace(/\n/g, '<br>'),
        })
      } catch (emailError) {
        console.error('Email send error:', emailError)
        // Continue even if email fails — log the request
      }
    }

    // Log to console for fallback visibility
    console.log('[Contact Form]', emailBody)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact API Error]', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  }
}
