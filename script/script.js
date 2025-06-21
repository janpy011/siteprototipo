document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavOverlay = document.createElement('div');
    mobileNavOverlay.classList.add('mobile-nav-overlay');
    document.body.appendChild(mobileNavOverlay);

    const mobileNav = document.createElement('nav');
    mobileNav.classList.add('mobile-nav');
    mobileNav.innerHTML = `
        <ul class="mobile-nav-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#tecnologia">Tecnologia</a></li>
            <li><a href="#sustentabilidade">Sustentabilidade</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#ouvidoria">Ouvidoria</a></li>
        </ul>
    `;
    document.body.appendChild(mobileNav);

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        mobileNav.classList.toggle('active');
        mobileNavOverlay.classList.toggle('active');
    });

    mobileNavOverlay.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
        mobileNav.classList.remove('active');
        mobileNavOverlay.classList.remove('active');
    });

    // Fechar menu
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-list a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerMenu.classList.remove('active');
            mobileNav.classList.remove('active');
            mobileNavOverlay.classList.remove('active');
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Chatbot
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');
    const chatbotMessages = document.querySelector('.chatbot-messages');

    function addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chatbot-message', sender);
        messageDiv.textContent = text;
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function handleChatbotInput() {
        const userMessage = chatbotInput.value.trim();
        if (userMessage === '') return;

        addMessage('user', userMessage);
        chatbotInput.value = '';

        // Simulação de resposta do chatbot
        setTimeout(() => {
            let botResponse = 'Desculpe, não entendi sua pergunta.';

            if (userMessage.toLowerCase().includes('embalagens')) {
                botResponse = 'Somos especializados na fabricação de embalagens plásticas e de papel para diversos tipos de alimentos.';
            } else if (userMessage.toLowerCase().includes('contato')) {
                botResponse = 'Você pode nos contatar pelo telefone (XX) XXXX-XXXX ou preenchendo o formulário na seção de Contato.';
            } else if (userMessage.toLowerCase().includes('localizacao') || userMessage.toLowerCase().includes('onde estao')) {
                botResponse = 'Nossa fábrica está localizada em [Endereço da Empresa]. Veja o mapa em nossa seção de Localização.';
            } else if (userMessage.toLowerCase().includes('produtos')) {
                botResponse = 'Oferecemos embalagens para laticínios, carnes, grãos, congelados e muito mais. Visite nossa seção de Produtos para mais detalhes.';
            } else if (userMessage.toLowerCase().includes('qualidade')) {
                botResponse = 'Nossas embalagens seguem rigorosos padrões de qualidade e segurança alimentar, com certificações X, Y e Z.';
            } else if (userMessage.toLowerCase().includes('sustentabilidade')) {
                botResponse = 'Temos um forte compromisso com a sustentabilidade, utilizando materiais recicláveis e processos ecologicamente corretos. Saiba mais em nossa seção de Sustentabilidade.';
            } else if (userMessage.toLowerCase().includes('olá') || userMessage.toLowerCase().includes('oi')) {
                botResponse = 'Olá! Como posso ajudar você hoje?';
            }

            addMessage('bot', botResponse);
        }, 800);
    }

    if (chatbotSendBtn) {
        chatbotSendBtn.addEventListener('click', handleChatbotInput);
    }

    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleChatbotInput();
            }
        });
    }

    // Mensagem inicial do chatbot
    if (chatbotMessages) {
        addMessage('bot', 'Olá! Sou seu assistente virtual. Como posso ajudar com suas perguntas sobre embalagens de alimentos?');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const slideInterval = 2000; // 2 seconds

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initial display
    if (slides.length > 0) {
        showSlide(currentSlide);
        setInterval(nextSlide, slideInterval);
    }
});

//data animar
const animarOnScroll = () => {
    const elementos = document.querySelectorAll('[data-animar]');

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;
        const alturaTela = window.innerHeight * 0.85;

        if (posicao < alturaTela) {
            el.classList.add('ativo');
        }
    });
};


window.addEventListener('scroll', animarOnScroll);
window.addEventListener('load', animarOnScroll);