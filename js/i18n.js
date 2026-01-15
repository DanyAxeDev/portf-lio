// Sistema de internacionalização (i18n)
const translations = {
    pt: {
        // Navegação
        'nav-technologies': 'Tecnologias',
        'nav-projects': 'Projetos',
        'nav-about': 'Sobre mim',
        
        // Card principal
        'card-title': 'Daniel Machado',
        'card-subtitle': 'Desenvolvedor FullStack',
        'card-button': 'Entre em contato',
        
        // Formulário de contato
        'form-name': 'Digite seu nome...',
        'form-email': 'Digite seu e-mail...',
        'form-message': 'Digite sua mensagem...',
        'form-submit': 'Enviar',
        'form-back': 'Voltar',
        
        // Apresentação
        'presentation-title': 'Eleve seu negócio digital a outro nível',
        'presentation-title-highlight': ' com um desenvolvedor de qualidade!',
        'presentation-text': 'Olá! Sou Daniel Machado, desenvolvedor FullStack com especialidade em Spring Boot e React. Vamos conversar?',
        
        // Tecnologias
        'technologies-title': 'Tecnologias',
        'technologies-drag': 'Você pode arrastar os ícones!',
        'technologies-text-1': 'Possuo domínio de ferramentas para desenvolvimento web, como',
        'technologies-text-1-cont': 'Conhecimento em',
        'technologies-text-1-cont2': 'para Back-End. Além disso, possuo conhecimento sobre Frameworks Javascript, como',
        'technologies-text-1-cont3': ', e Frameworks CSS, como',
        'technologies-text-2': 'Possuo domínio em criação de API\'s Rest utilizando o framework',
        'technologies-text-2-cont': '. Utilização das dependências',
        'technologies-text-2-cont2': ',',
        'technologies-text-2-cont3': ',',
        'technologies-text-2-cont4': ',',
        'technologies-text-2-cont5': 'e',
        'technologies-text-2-cont6': 'para migrations. E também possuo experiência em documentação de API\'s utilizando',
        'technologies-text-3': 'Experiência com versionamento de código utilizando',
        'technologies-text-3-cont': 'e',
        'technologies-text-4': 'Experiência prática com ambiente de trabalho adaptado a metodologias ágeis, como',
        'technologies-text-5': 'Utilizei',
        'technologies-text-5-cont': 'para containerizar aplicações, definindo imagens e containers que padronizam o ambiente de execução, facilitam o deploy e tornam o projeto mais portátil e escalável, eliminando conflitos de dependências.',
        'technologies-text-6': 'Desenvolvimento de aplicações em',
        'technologies-text-6-cont': ', com uso de',
        'technologies-text-6-cont2': 'para construção de interfaces gráficas e',
        'technologies-text-6-cont3': 'para armazenamento e manipulação de dados, aplicando conceitos de lógica, organização de código e persistência.',
        
        // Projetos
        'projects-title': 'Projetos',
        'project-0-title': 'PetConnect',
        'project-0-desc': 'Uma aplicação para adoção de animais de estimação. Realiza a busca por animais disponíveis para adoção, e o cadastro de novos animais. Criado como parte do projeto final do curso de Desenvolvimento FullStack da',
        'project-0-desc-cont': '+PraTi',
        'project-1-title': 'Mural de imagens',
        'project-1-desc': 'Uma aplicação que serve como um mural de fotos, realizando a inserção, e a exclusão de imagens.',
        'project-2-title': 'Conversor de imagens HEIC',
        'project-2-desc': 'Um serviço que recebe a base64 de uma imagem HEIC e retorna ela transformada em jpeg. Utilizado no projeto de mural de fotos',
        'project-3-title': 'API Web Scrapping Amazon',
        'project-3-desc': 'Uma API que realiza um web scrapping na página de produtos da amazon e retorna os itens.',
        'project-4-title': 'Decodificador de texto',
        'project-4-desc': 'Uma aplicação simples que serve para codificar e decodificar mensagens.',
        'button-repository': 'Repositório',
        'button-view': 'Visualizar',
        
        // Sobre mim
        'about-title': 'Sobre mim',
        'about-text-1': 'Me interessei pela área de programação em um trabalho que tive como jovem aprendiz, no qual eu realizava muitas tarefas repetitivas, e percebi que elas poderiam ser automatizadas.',
        'about-text-2': 'Desde então, entrei e me formei no curso de Analise e Desenvolvimento de Sistemas e estou estudando para me tornar um desenvolvedor FullStack.',
        'about-text-3': 'Sou persistente, disciplinado, estou sempre procurando me desenvolver e tentando fazer o meu melhor de forma rápida e criativa.',
        'about-text-4': 'Quero ganhar experiência na área de tecnologia, e conciliar o conhecimento teórico que estou aprendendo, com o conhecimento prático que o trabalho possa me proporcionar.',
        
        // Footer
        'footer-text': 'Developed by'
    },
    en: {
        // Navigation
        'nav-technologies': 'Technologies',
        'nav-projects': 'Projects',
        'nav-about': 'About me',
        
        // Main card
        'card-title': 'Daniel Machado',
        'card-subtitle': 'FullStack Developer',
        'card-button': 'Get in touch',
        
        // Contact form
        'form-name': 'Enter your name...',
        'form-email': 'Enter your e-mail...',
        'form-message': 'Enter your message...',
        'form-submit': 'Send',
        'form-back': 'Back',
        
        // Presentation
        'presentation-title': 'Take your digital business to the next level',
        'presentation-title-highlight': ' with a quality developer!',
        'presentation-text': 'Hello! I\'m Daniel Machado, a FullStack developer specialized in Spring Boot and React. Let\'s talk?',
        
        // Technologies
        'technologies-title': 'Technologies',
        'technologies-drag': 'You can drag the icons!',
        'technologies-text-1': 'I have mastery of web development tools, such as',
        'technologies-text-1-cont': 'Knowledge in',
        'technologies-text-1-cont2': 'for Back-End. Additionally, I have knowledge of JavaScript Frameworks, such as',
        'technologies-text-1-cont3': ', and CSS Frameworks, such as',
        'technologies-text-2': 'I have mastery in creating Rest APIs using the',
        'technologies-text-2-cont': 'framework. Use of dependencies',
        'technologies-text-2-cont2': ',',
        'technologies-text-2-cont3': ',',
        'technologies-text-2-cont4': ',',
        'technologies-text-2-cont5': 'and',
        'technologies-text-2-cont6': 'for migrations. I also have experience in API documentation using',
        'technologies-text-3': 'Experience with code versioning using',
        'technologies-text-3-cont': 'and',
        'technologies-text-4': 'Practical experience with work environment adapted to agile methodologies, such as',
        'technologies-text-5': 'I used',
        'technologies-text-5-cont': 'to containerize applications, defining images and containers that standardize the execution environment, facilitate deployment and make the project more portable and scalable, eliminating dependency conflicts.',
        'technologies-text-6': 'Development of applications in',
        'technologies-text-6-cont': ', using',
        'technologies-text-6-cont2': 'for building graphical interfaces and',
        'technologies-text-6-cont3': 'for data storage and manipulation, applying concepts of logic, code organization and persistence.',
        
        // Projects
        'projects-title': 'Projects',
        'project-0-title': 'PetConnect',
        'project-0-desc': 'An application for pet adoption. Performs searches for animals available for adoption and registration of new animals. Created as part of the final project of the FullStack Development course at',
        'project-0-desc-cont': '+PraTi',
        'project-1-title': 'Image gallery',
        'project-1-desc': 'An application that serves as a photo gallery, performing image insertion and deletion.',
        'project-2-title': 'HEIC image converter',
        'project-2-desc': 'A service that receives a base64 of a HEIC image and returns it transformed into jpeg. Used in the photo gallery project',
        'project-3-title': 'Amazon Web Scraping API',
        'project-3-desc': 'An API that performs web scraping on Amazon product pages and returns the items.',
        'project-4-title': 'Text decoder',
        'project-4-desc': 'A simple application that serves to encode and decode messages.',
        'button-repository': 'Repository',
        'button-view': 'View',
        
        // About me
        'about-title': 'About me',
        'about-text-1': 'I became interested in programming in a job I had as a young apprentice, where I performed many repetitive tasks, and I realized they could be automated.',
        'about-text-2': 'Since then, I entered and graduated from the Systems Analysis and Development course and I am studying to become a FullStack developer.',
        'about-text-3': 'I am persistent, disciplined, I am always looking to develop myself and trying to do my best in a fast and creative way.',
        'about-text-4': 'I want to gain experience in the technology area, and reconcile the theoretical knowledge I am learning with the practical knowledge that work can provide me.',
        
        // Footer
        'footer-text': 'Developed by'
    }
};

// Função para obter o idioma atual
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'pt';
}

// Função para definir o idioma
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-br' : 'en';
    updatePageLanguage();
}

// Função para atualizar todos os textos da página
function updatePageLanguage() {
    const lang = getCurrentLanguage();
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Atualizar elementos com HTML interno (como títulos com strong)
    updateComplexElements(lang);
    
    // Atualizar descrição do PetConnect
    updatePetConnectDesc(lang);
}

// Função para atualizar elementos com HTML mais complexo
function updateComplexElements(lang) {
    // Título da apresentação com strong
    const presentationTitle = document.querySelector('.apresentacao__conteudo__titulo');
    if (presentationTitle && presentationTitle.getAttribute('data-i18n-title')) {
        const titleKey = presentationTitle.getAttribute('data-i18n-title');
        const highlightKey = presentationTitle.getAttribute('data-i18n-highlight');
        if (translations[lang][titleKey] && translations[lang][highlightKey]) {
            presentationTitle.innerHTML = translations[lang][titleKey] + 
                '<strong class="titulo-destaque">' + translations[lang][highlightKey] + '</strong>';
        }
    }
    
    // Textos de tecnologias com múltiplos strongs
    updateTechnologyTexts(lang);
}

// Função para atualizar a descrição do PetConnect
function updatePetConnectDesc(lang) {
    const petConnectDesc = document.querySelector('[data-i18n-petconnect]');
    if (petConnectDesc) {
        const keys = petConnectDesc.getAttribute('data-i18n-petconnect').split(',');
        if (keys.length >= 2 && translations[lang][keys[0]] && translations[lang][keys[1]]) {
            petConnectDesc.innerHTML = translations[lang][keys[0]] + 
                ' <strong class="titulo-destaque">' + translations[lang][keys[1]] + '</strong>.';
        }
    }
}

// Função para atualizar textos de tecnologias
function updateTechnologyTexts(lang) {
    const techText1 = document.querySelector('[data-i18n-tech-1]');
    if (techText1) {
        const keys = techText1.getAttribute('data-i18n-tech-1').split(',');
        if (keys.length >= 4 && translations[lang][keys[0]] && translations[lang][keys[1]] && translations[lang][keys[2]] && translations[lang][keys[3]]) {
            techText1.innerHTML = translations[lang][keys[0]] + 
                ' <strong class="titulo-destaque">HTML</strong>, <strong class="titulo-destaque">CSS</strong> e <strong class="titulo-destaque">Javascript</strong>. ' +
                translations[lang][keys[1]] + 
                ' <strong class="titulo-destaque">Node.js</strong> e <strong class="titulo-destaque">Typescript</strong> ' +
                translations[lang][keys[2]] + 
                ' <strong class="titulo-destaque">jQuery</strong>, <strong class="titulo-destaque">React</strong>' +
                translations[lang][keys[3]] + 
                ' <strong class="titulo-destaque">Boostrap</strong> e <strong class="titulo-destaque">Tailwind</strong>.';
        }
    }
    
    const techText2 = document.querySelector('[data-i18n-tech-2]');
    if (techText2) {
        const keys = techText2.getAttribute('data-i18n-tech-2').split(',');
        if (keys.length >= 7 && translations[lang][keys[0]] && translations[lang][keys[1]] && translations[lang][keys[2]] && 
            translations[lang][keys[3]] && translations[lang][keys[4]] && translations[lang][keys[5]] && translations[lang][keys[6]]) {
            techText2.innerHTML = translations[lang][keys[0]] + 
                ' <strong class="titulo-destaque">Spring Boot</strong>' +
                translations[lang][keys[1]] + 
                ' <strong class="titulo-destaque">Java JPA</strong>' + 
                translations[lang][keys[2]] + 
                ' <strong class="titulo-destaque">Spring Security</strong>' + 
                translations[lang][keys[3]] + 
                ' <strong class="titulo-destaque">Spring Cache</strong>' + 
                translations[lang][keys[4]] + 
                ' <strong class="titulo-destaque">Lombok</strong> ' + 
                translations[lang][keys[5]] + 
                ' <strong class="titulo-destaque">Flyway</strong> ' + 
                translations[lang][keys[6]] + 
                ' <strong class="titulo-destaque">Swagger</strong>.';
        }
    }
    
    const techText3 = document.querySelector('[data-i18n-tech-3]');
    if (techText3) {
        const keys = techText3.getAttribute('data-i18n-tech-3').split(',');
        if (keys.length >= 2 && translations[lang][keys[0]] && translations[lang][keys[1]]) {
            techText3.innerHTML = translations[lang][keys[0]] + 
                ' <strong class="titulo-destaque">Git</strong> ' + 
                translations[lang][keys[1]] + 
                ' <strong class="titulo-destaque">GitHub</strong>.';
        }
    }
    
    const techText4 = document.querySelector('[data-i18n-tech-4]');
    if (techText4) {
        const keys = techText4.getAttribute('data-i18n-tech-4').split(',');
        if (keys.length >= 1 && translations[lang][keys[0]]) {
            techText4.innerHTML = translations[lang][keys[0]] + 
                ' <strong class="titulo-destaque">Scrum</strong>.';
        }
    }
    
    const techText5 = document.querySelector('[data-i18n-tech-5]');
    if (techText5) {
        const keys = techText5.getAttribute('data-i18n-tech-5').split(',');
        if (keys.length >= 2 && translations[lang][keys[0]] && translations[lang][keys[1]]) {
            techText5.innerHTML = translations[lang][keys[0]] + 
                ' <strong class="titulo-destaque">Docker</strong> ' + 
                translations[lang][keys[1]];
        }
    }
    
    const techText6 = document.querySelector('[data-i18n-tech-6]');
    if (techText6) {
        const keys = techText6.getAttribute('data-i18n-tech-6').split(',');
        if (keys.length >= 4 && translations[lang][keys[0]] && translations[lang][keys[1]] && translations[lang][keys[2]] && translations[lang][keys[3]]) {
            techText6.innerHTML = translations[lang][keys[0]] + 
                ' <strong class="titulo-destaque">Python</strong>' + 
                translations[lang][keys[1]] + 
                ' <strong class="titulo-destaque">Tkinter</strong> ' + 
                translations[lang][keys[2]] + 
                ' <strong class="titulo-destaque">SQLite3</strong> ' + 
                translations[lang][keys[3]];
        }
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    document.documentElement.lang = currentLang === 'pt' ? 'pt-br' : 'en';
    updatePageLanguage();
    
    // Adicionar evento ao botão de idioma
    const langButton = document.getElementById('language-toggle');
    if (langButton) {
        langButton.addEventListener('click', function() {
            const currentLang = getCurrentLanguage();
            const newLang = currentLang === 'pt' ? 'en' : 'pt';
            setLanguage(newLang);
            updateLanguageButton(newLang);
        });
        updateLanguageButton(currentLang);
    }
});

// Função para atualizar o texto do botão de idioma
function updateLanguageButton(lang) {
    const langButton = document.getElementById('language-toggle');
    const flagIcon = document.getElementById('flag-icon');
    const langText = document.getElementById('lang-text');
    
    if (langButton && flagIcon && langText) {
        if (lang === 'pt') {
            flagIcon.src = 'assets/brasil.png';
            flagIcon.alt = 'Bandeira do Brasil';
            langText.textContent = 'PT';
            langButton.setAttribute('title', 'Switch to English');
        } else {
            flagIcon.src = 'assets/estados-unidos.png';
            flagIcon.alt = 'Bandeira dos Estados Unidos';
            langText.textContent = 'EN';
            langButton.setAttribute('title', 'Mudar para Português');
        }
    }
}
