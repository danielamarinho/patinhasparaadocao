/* =====================================================
   PATINHAS PARA ADOÇÃO — script.js
   =====================================================
   Configurações fáceis de editar estão no início do
   arquivo. Não é necessário conhecimento técnico para
   atualizar WhatsApp, Instagram, e-mail ou animais.
   ===================================================== */

/* ==================== CONFIGURAÇÕES ==================== */

// Número do WhatsApp (somente números, com código do país e DDD)
const WHATSAPP = '5531999999999';

// Link do Instagram
const INSTAGRAM = 'https://instagram.com/patinhasparaadocao';

// E-mail de contato
const EMAIL = 'contato@patinhasparaadocao.org';

// Cidade e estado
const CIDADE = 'Belo Horizonte, MG';

/* ==================== ANIMAIS ==================== */
/*
  Para adicionar ou editar um animal:
  - Copie um bloco { ... } abaixo
  - Preencha os campos
  - A imagem deve estar em assets/ com o mesmo nome informado em "imagem"
  - Se não tiver imagem, deixe imagem: '' e o card usará um placeholder
*/
const animais = [
  {
    nome: 'Amendoim',
    especie: 'cão',
    sexo: 'Macho',
    idade: '1 ano',
    porte: 'Médio',
    personalidade: 'Brincalhão, curioso e muito carinhoso com crianças.',
    imagem: 'assets/pet-placeholder-1.jpg',
    status: 'Disponível para adoção',
  },
  {
    nome: 'Pipoca',
    especie: 'cão',
    sexo: 'Fêmea',
    idade: '3 anos',
    porte: 'Pequeno',
    personalidade: 'Calma, afetuosa e adora um colo.',
    imagem: 'assets/pet-placeholder-2.jpg',
    status: 'Disponível para adoção',
  },
  {
    nome: 'Mel',
    especie: 'gato',
    sexo: 'Fêmea',
    idade: '2 anos',
    porte: 'Médio',
    personalidade: 'Independente mas muito carinhosa no seu tempo.',
    imagem: 'assets/pet-placeholder-3.jpg',
    status: 'Disponível para adoção',
  },
  {
    nome: 'Biscoito',
    especie: 'cão',
    sexo: 'Macho',
    idade: '5 meses',
    porte: 'Pequeno',
    personalidade: 'Filhote energético, adora explorar e brincar.',
    imagem: 'assets/pet-placeholder-4.jpg',
    status: 'Disponível para adoção',
  },
  {
    nome: 'Caju',
    especie: 'gato',
    sexo: 'Macho',
    idade: '4 anos',
    porte: 'Grande',
    personalidade: 'Tranquilo, gosta de sol e ronrona fácil.',
    imagem: 'assets/pet-placeholder-5.jpg',
    status: 'Disponível para adoção',
  },
  {
    nome: 'Farofa',
    especie: 'cão',
    sexo: 'Fêmea',
    idade: '2 anos',
    porte: 'Grande',
    personalidade: 'Amigável com outros animais e ótima companhia para corridas.',
    imagem: 'assets/pet-placeholder-6.jpg',
    status: 'Disponível para adoção',
  },
];

/* ==================== COMO AJUDAR ==================== */
const formasDeAjuda = [
  {
    icone: '🍖',
    titulo: 'Doar ração ou itens de cuidado',
    descricao: 'Sua doação ajuda nos cuidados diários com os animais acolhidos.',
    mensagem: 'Olá! Gostaria de saber como posso fazer uma doação de ração ou itens de cuidado para a Patinhas para Adoção.',
  },
  {
    icone: '💛',
    titulo: 'Apadrinhar um animal',
    descricao: 'Contribua mensalmente com alimentação, vacinas, exames ou tratamentos.',
    mensagem: 'Olá! Tenho interesse em apadrinhar um animal da Patinhas para Adoção. Como funciona?',
  },
  {
    icone: '🏠',
    titulo: 'Ser lar temporário',
    descricao: 'Ofereça abrigo e carinho enquanto o pet espera pela adoção definitiva.',
    mensagem: 'Olá! Gostaria de ser lar temporário para um animal da Patinhas para Adoção. Como posso ajudar?',
  },
  {
    icone: '📲',
    titulo: 'Divulgar os animais',
    descricao: 'Compartilhar também salva vidas e ajuda cada pet a encontrar uma família.',
    mensagem: 'Olá! Quero ajudar divulgando os animais da Patinhas para Adoção. Como posso fazer isso da melhor forma?',
  },
  {
    icone: '🤝',
    titulo: 'Ser voluntário',
    descricao: 'Ajude em feiras, transporte, fotos, redes sociais ou cuidados.',
    mensagem: 'Olá! Tenho interesse em ser voluntário na Patinhas para Adoção. Como posso contribuir?',
  },
  {
    icone: '🩺',
    titulo: 'Contribuir com custos veterinários',
    descricao: 'Tratamentos, consultas e emergências são parte importante do resgate.',
    mensagem: 'Olá! Gostaria de contribuir com custos veterinários para os animais da Patinhas para Adoção.',
  },
];

/* ==================== FAQ ==================== */
const perguntas = [
  {
    pergunta: 'Como funciona o processo de adoção?',
    resposta: 'O processo começa com uma conversa para entendermos sua rotina, seu espaço e o perfil de animal mais adequado para sua família. A partir daí, apresentamos os animais disponíveis e avaliamos juntos a melhor combinação.',
  },
  {
    pergunta: 'A adoção tem custo?',
    resposta: 'A adoção em si não é uma venda. Em alguns casos, pode ser solicitada uma contribuição solidária para ajudar com custos de cuidado, castração, vacinação ou tratamento. Isso é conversado com transparência durante o processo.',
  },
  {
    pergunta: 'Posso adotar morando em apartamento?',
    resposta: 'Sim, desde que o ambiente seja seguro, telado quando necessário, e adequado ao porte e comportamento do animal. Conversamos sobre isso durante o processo de adoção.',
  },
  {
    pergunta: 'Os animais são castrados e vacinados?',
    resposta: 'Sempre que possível, os animais são encaminhados com acompanhamento veterinário. As informações de cada pet — saúde, histórico e necessidades — são compartilhadas de forma transparente durante o processo.',
  },
  {
    pergunta: 'Como posso ajudar sem adotar?',
    resposta: 'Você pode doar ração ou itens de cuidado, apadrinhar um animal, contribuir com custos veterinários, ser voluntário, oferecer lar temporário ou simplesmente divulgar os animais nas suas redes sociais.',
  },
  {
    pergunta: 'Como faço para ser lar temporário?',
    resposta: 'Entre em contato pelo WhatsApp para conversarmos sobre sua disponibilidade, espaço e experiência com animais. O lar temporário é uma ajuda enorme para os pets que aguardam adoção.',
  },
];

/* ==================== UTILITÁRIOS ==================== */
function whatsappUrl(numero, mensagem) {
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
}

/* ==================== RENDERIZAR PETS ==================== */
function renderizarPets() {
  const grid = document.getElementById('pets-grid');
  if (!grid) return;

  animais.forEach((pet) => {
    const especieEmoji = pet.especie === 'gato' ? '🐱' : '🐶';
    const temImagem = pet.imagem && pet.imagem.trim() !== '';
    const mensagemWpp = `Olá! Tenho interesse em saber mais sobre a adoção d${pet.sexo === 'Fêmea' ? 'a' : 'o'} ${pet.nome}.`;

    const card = document.createElement('article');
    card.className = 'pet-card';
    card.setAttribute('role', 'listitem');

    card.innerHTML = `
      <div class="pet-card__image-wrap">
        ${temImagem
          ? `<img
               src="${pet.imagem}"
               alt="Foto d${pet.sexo === 'Fêmea' ? 'a' : 'o'} ${pet.nome}"
               class="pet-card__image"
               loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
             />
             <div class="pet-card__image-placeholder" style="display:none">
               <span>${especieEmoji}</span>
               <p>${pet.nome}</p>
             </div>`
          : `<div class="pet-card__image-placeholder">
               <span>${especieEmoji}</span>
               <p>${pet.nome}</p>
             </div>`
        }
        <span class="pet-card__status">${pet.status}</span>
        <span class="pet-card__species-badge" aria-hidden="true">${especieEmoji}</span>
      </div>
      <div class="pet-card__body">
        <h3 class="pet-card__name">${pet.nome}</h3>
        <div class="pet-card__meta" aria-label="Características de ${pet.nome}">
          <span class="pet-card__meta-item">${pet.especie === 'gato' ? 'Gato' : 'Cão'}</span>
          <span class="pet-card__meta-item">${pet.sexo}</span>
          <span class="pet-card__meta-item">${pet.idade}</span>
          <span class="pet-card__meta-item">Porte ${pet.porte}</span>
        </div>
        <p class="pet-card__personality">"${pet.personalidade}"</p>
      </div>
      <a
        href="${whatsappUrl(WHATSAPP, mensagemWpp)}"
        class="pet-card__btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tenho interesse em adotar ${pet.nome} — abrir WhatsApp"
      >
        🐾 Tenho interesse
      </a>
    `;

    grid.appendChild(card);
  });
}

/* ==================== RENDERIZAR COMO AJUDAR ==================== */
function renderizarAjuda() {
  const grid = document.getElementById('help-grid');
  if (!grid) return;

  formasDeAjuda.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'help-card';
    card.setAttribute('role', 'listitem');

    card.innerHTML = `
      <div class="help-card__icon" aria-hidden="true">${item.icone}</div>
      <h3 class="help-card__title">${item.titulo}</h3>
      <p class="help-card__text">${item.descricao}</p>
      <a
        href="${whatsappUrl(WHATSAPP, item.mensagem)}"
        class="btn btn--orange help-card__btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="${item.titulo} — abrir WhatsApp"
      >
        Quero ajudar
      </a>
    `;

    grid.appendChild(card);
  });
}

/* ==================== RENDERIZAR CONTATO ==================== */
function renderizarContato() {
  const actionsEl = document.getElementById('contact-actions');
  if (actionsEl) {
    actionsEl.innerHTML = `
      <a
        href="${whatsappUrl(WHATSAPP, 'Olá! Gostaria de saber mais sobre a Patinhas para Adoção.')}"
        class="contact__btn contact__btn--whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Entrar em contato pelo WhatsApp"
      >
        <span class="contact__btn-icon" aria-hidden="true">💬</span>
        WhatsApp
      </a>
      <a
        href="${INSTAGRAM}"
        class="contact__btn contact__btn--instagram"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visitar o Instagram da Patinhas para Adoção"
      >
        <span class="contact__btn-icon" aria-hidden="true">📸</span>
        Instagram
      </a>
      <a
        href="mailto:${EMAIL}"
        class="contact__btn contact__btn--email"
        aria-label="Enviar e-mail para a Patinhas para Adoção"
      >
        <span class="contact__btn-icon" aria-hidden="true">✉️</span>
        E-mail
      </a>
    `;
  }

  const footerSocial = document.getElementById('footer-social');
  if (footerSocial) {
    footerSocial.innerHTML = `
      <div class="footer__social-links">
        <a
          href="${whatsappUrl(WHATSAPP, 'Olá! Gostaria de saber mais sobre a Patinhas para Adoção.')}"
          class="footer__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>
        <a
          href="${INSTAGRAM}"
          class="footer__social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          📸 Instagram
        </a>
        <a href="mailto:${EMAIL}" class="footer__social-link">
          ✉️ ${EMAIL}
        </a>
      </div>
    `;
  }
}

/* ==================== RENDERIZAR FAQ ==================== */
function renderizarFaq() {
  const lista = document.getElementById('faq-list');
  if (!lista) return;

  perguntas.forEach((item, index) => {
    const id = `faq-answer-${index}`;

    const faqItem = document.createElement('div');
    faqItem.className = 'faq__item';

    faqItem.innerHTML = `
      <button
        class="faq__question"
        aria-expanded="false"
        aria-controls="${id}"
        id="faq-btn-${index}"
      >
        ${item.pergunta}
        <span class="faq__icon" aria-hidden="true">+</span>
      </button>
      <div
        class="faq__answer"
        id="${id}"
        role="region"
        aria-labelledby="faq-btn-${index}"
      >
        <div class="faq__answer-inner">${item.resposta}</div>
      </div>
    `;

    lista.appendChild(faqItem);
  });

  // Accordion
  lista.addEventListener('click', (e) => {
    const btn = e.target.closest('.faq__question');
    if (!btn) return;

    const isOpen = btn.getAttribute('aria-expanded') === 'true';
    const answer = document.getElementById(btn.getAttribute('aria-controls'));

    // Fechar todos
    lista.querySelectorAll('.faq__question').forEach((b) => {
      b.setAttribute('aria-expanded', 'false');
      const a = document.getElementById(b.getAttribute('aria-controls'));
      if (a) a.classList.remove('is-open');
    });

    // Abrir o clicado se estava fechado
    if (!isOpen) {
      btn.setAttribute('aria-expanded', 'true');
      if (answer) answer.classList.add('is-open');
    }
  });

  // Acessibilidade via teclado
  lista.addEventListener('keydown', (e) => {
    const btn = e.target.closest('.faq__question');
    if (!btn) return;

    const buttons = Array.from(lista.querySelectorAll('.faq__question'));
    const idx = buttons.indexOf(btn);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = buttons[idx + 1];
      if (next) next.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = buttons[idx - 1];
      if (prev) prev.focus();
    } else if (e.key === 'Home') {
      e.preventDefault();
      buttons[0].focus();
    } else if (e.key === 'End') {
      e.preventDefault();
      buttons[buttons.length - 1].focus();
    }
  });
}

/* ==================== MENU MOBILE ==================== */
function inicializarMenu() {
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (!hamburger || !nav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open');
  });

  // Fechar ao clicar em link
  nav.querySelectorAll('.header__nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    });
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    const header = document.getElementById('header');
    if (!header.contains(e.target)) {
      hamburger.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
}

/* ==================== HEADER — SHADOW AO ROLAR ==================== */
function inicializarHeaderScroll() {
  const header = document.getElementById('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 2px 20px rgba(74, 58, 63, 0.18)';
    } else {
      header.style.boxShadow = '';
    }
  }, { passive: true });
}

/* ==================== INIT ==================== */
document.addEventListener('DOMContentLoaded', () => {
  renderizarPets();
  renderizarAjuda();
  renderizarContato();
  renderizarFaq();
  inicializarMenu();
  inicializarHeaderScroll();
});
