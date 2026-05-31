# Flor do Mar — Site Oficial

Site completo da Flor do Mar, hospedagem premium na Praia do Rosa, Santa Catarina.
Desenvolvido com **Next.js 14**, **TypeScript** e **Tailwind CSS**.

---

## Pré-requisitos

- **Node.js** 18.17 ou superior — [nodejs.org](https://nodejs.org)
- **npm** 9+ (vem junto com o Node.js)

---

## Instalação e execução local

```bash
# 1. Entre na pasta do projeto
cd flordomar

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite o .env.local com suas credenciais

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse: **http://localhost:3000**

---

## Variáveis de ambiente (.env.local)

| Variável | Descrição | Exemplo |
|---|---|---|
| `ADMIN_USER` | Usuário do painel admin | `admin` |
| `ADMIN_PASS` | Senha do painel admin | `suaSenhaSegura` |
| `EMAIL_HOST` | Servidor SMTP | `smtp.gmail.com` |
| `EMAIL_PORT` | Porta SMTP | `587` |
| `EMAIL_USER` | E-mail remetente | `seu@gmail.com` |
| `EMAIL_PASS` | Senha de app do e-mail | `xxxx xxxx xxxx xxxx` |
| `EMAIL_TO` | E-mail destinatário | `contato@flordomar.com` |
| `NEXT_PUBLIC_SITE_URL` | URL do site em produção | `https://flordomar.com` |

### Configurar senha de app do Gmail
1. Acesse myaccount.google.com > Segurança
2. Ative a verificação em duas etapas
3. Pesquise "Senhas de app" e crie uma para o site

---

## Área Administrativa

Acesse: `/admin/login`

**Credenciais padrão:**
- Usuário: `admin`
- Senha: `flordomar2024`

**⚠️ IMPORTANTE:** Altere a senha no `.env.local` antes de publicar!

### Funcionalidades do Admin:
- **Fotos das Casas:** Upload, exclusão, reordenação e definição de foto principal
- **Descrições das Casas:** Edite nome, capacidade, características e comodidades
- **Contato e Textos:** Edite telefone, WhatsApp, e-mail, endereço e textos institucionais

---

## Publicação na Locaweb

### 1. Build de produção
```bash
npm run build
```

### 2. Opção A — Hospedagem Node.js (recomendado)
A Locaweb oferece hospedagem Node.js. Configure:
- Runtime: **Node.js 18+**
- Comando de start: `npm start`
- Porta: **3000** (ou a que a Locaweb definir)

```bash
npm start
```

### 2. Opção B — Export Estático (sem admin)
Se a Locaweb não suportar Node.js, use export estático
(o admin e formulário por e-mail não funcionarão):

```bash
# Adicione no next.config.js: output: 'export'
npm run build
# Faça upload da pasta /out via FTP
```

### 3. Upload via FTP (Locaweb)
Arquivos necessários após build Node.js:
- Pasta `.next/`
- Pasta `public/`
- Pasta `node_modules/` (ou rodar `npm install --production` no servidor)
- `package.json`
- `.env.local` (com variáveis de produção)
- `next.config.js`

### 4. Configuração de domínio
Aponte o domínio `flordomar.com` para o servidor da Locaweb no painel DNS.

---

## Estrutura do Projeto

```
flordomar/
├── app/                    # Páginas (App Router do Next.js)
│   ├── page.tsx            # Página inicial
│   ├── casas/              # Listagem e detalhes das casas
│   ├── sobre/              # Página sobre
│   ├── localizacao/        # Página localização
│   ├── contato/            # Página contato
│   ├── admin/              # Área administrativa (protegida)
│   ├── api/                # Rotas de API
│   ├── sitemap.ts          # Sitemap automático
│   └── robots.ts           # Robots.txt
├── components/             # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── WhatsAppButton.tsx
│   ├── HouseCard.tsx
│   ├── ImageGallery.tsx
│   ├── ContactForm.tsx
│   └── admin/
│       └── AdminDashboard.tsx
├── lib/                    # Lógica de negócio
│   ├── content.ts          # Leitura/escrita de conteúdo
│   └── auth.ts             # Autenticação do admin
├── types/                  # Tipos TypeScript
│   └── index.ts
├── public/
│   └── uploads/            # Fotos das casas (gerado pelo admin)
│       ├── casa1/
│       ├── casa2/
│       ├── casa3/
│       └── casa4/
├── data/                   # Gerado automaticamente
│   └── content.json        # Conteúdo editado pelo admin
├── middleware.ts            # Proteção de rotas
├── .env.local              # Variáveis de ambiente (NÃO commitar)
└── .env.example            # Modelo de variáveis
```

---

## Adicionando fotos pelo Admin

1. Acesse `/admin/login` e faça login
2. Clique na aba **"Fotos das Casas"**
3. Selecione a casa (Casa 01, 02, 03 ou 04)
4. Clique em **"Adicionar Fotos"** e selecione as imagens
5. Para definir a foto principal, passe o mouse sobre a imagem e clique na ⭐
6. Clique em **"Salvar Tudo"** no topo

---

## SEO Implementado

- Meta tags completas (title, description, keywords)
- Open Graph (Facebook, WhatsApp)
- Twitter Cards
- Schema.org para LodgingBusiness
- Sitemap automático (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Imagens otimizadas com Next/Image

---

## Suporte

Para dúvidas técnicas, consulte a documentação do Next.js:
- https://nextjs.org/docs

Para hospedagem Node.js na Locaweb:
- https://www.locaweb.com.br/hospedagem-sites/node-js/
