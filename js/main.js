// Navbar: fundo sólido ao rolar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Menu mobile
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fechar menu ao clicar em link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Scroll suave para âncoras (fallback para browsers mais antigos)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = document.getElementById('navbar').offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Fade-in ao entrar na viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Formulário de contato → Web3Forms
document.getElementById('contatoForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const btn = this.querySelector('.form-btn');
  btn.disabled = true;
  btn.textContent = 'Enviando...';

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: '838af6b8-b1e2-4788-a7e2-22bbf4881222',
        subject: `Contato via site — ${this.nome.value}`,
        from_name: 'Site Homecad Tecnologia',
        replyto: this.email.value,
        name: this.nome.value,
        email: this.email.value,
        message: this.mensagem.value,
      }),
    });

    const json = await res.json();

    if (json.success) {
      setFormFeedback(this, 'success', 'Mensagem enviada! Retornaremos em breve.');
      this.reset();
    } else {
      setFormFeedback(this, 'error', 'Erro ao enviar. Tente novamente ou fale pelo WhatsApp.');
    }
  } catch {
    setFormFeedback(this, 'error', 'Erro de conexão. Verifique sua internet e tente novamente.');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Enviar mensagem';
  }
});

function setFormFeedback(form, type, message) {
  let el = form.querySelector('.form-feedback');
  if (!el) {
    el = document.createElement('p');
    form.appendChild(el);
  }
  el.className = `form-feedback form-feedback--${type}`;
  el.textContent = message;
}
