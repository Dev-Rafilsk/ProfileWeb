AOS.init({
    duration: 1000,
    once: true,
});

document.addEventListener('DOMContentLoaded', function() {

    const menuIcon = document.querySelector('.menu-icon');
    const menuLinks = document.querySelector('.menu-links');
    const linksDoMenu = document.querySelectorAll('.menu-links a');
    const secoes = document.querySelectorAll('section');

    menuIcon.addEventListener('click', (e) => { 
        e.stopPropagation();
        menuLinks.classList.toggle('ativo');
    });

    linksDoMenu.forEach(link => {
        link.addEventListener('click', () => {
            menuLinks.classList.remove('ativo');
        });
    });

    document.addEventListener('click', (e) => {
        if (!menuLinks.contains(e.target) && !menuIcon.contains(e.target)) {
            menuLinks.classList.remove('ativo');
        }
    });

    function ativarLinkNoScroll() {
        let posicaoScroll = window.scrollY;
        let idSecaoAtual = "";

        secoes.forEach(secao => {
            const topoSecao = secao.offsetTop - 150;
            const alturaSecao = secao.offsetHeight;

            if (posicaoScroll >= topoSecao && posicaoScroll < topoSecao + alturaSecao) {
                idSecaoAtual = secao.getAttribute('id');
            } 
        });

        linksDoMenu.forEach(link => {
            link.classList.remove('ativo');
            const href = link.getAttribute('href');
            
            if (idSecaoAtual && href.includes(idSecaoAtual)) {
                link.classList.add('ativo');
            }
        });
    }

    window.addEventListener('scroll', ativarLinkNoScroll);

    const textoParaDigitar = "Desenvolvedor em formação, focado em desenvolvimento Front-end e em transição de carreira. Unindo a disciplina da área da saúde com a lógica da Engenharia de Software para criar soluções robustas e funcionais.";
    const elementoTexto = document.getElementById('texto-digitado');
    const velocidadeDigitacao = 100;
    let indiceAtual = 0;

    function digitar() {
        if (elementoTexto && indiceAtual < textoParaDigitar.length) {
            elementoTexto.innerHTML += textoParaDigitar.charAt(indiceAtual);
            indiceAtual++;
            setTimeout(digitar, velocidadeDigitacao);
        }
    }

    digitar();

    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggleBtn.textContent = 'Modo Escuro';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeToggleBtn.textContent = 'Modo Escuro';
            localStorage.setItem('theme', 'light');
        } else {
            themeToggleBtn.textContent = 'Modo Claro';
            localStorage.setItem('theme', 'dark');
        }
    });

    const cardsCursos = document.querySelectorAll('.card-certificacao');
    const modal = document.getElementById('curso-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    if (modal) {
        cardsCursos.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.getAttribute('data-title');
                const description = card.getAttribute('data-description');

                modalTitle.textContent = title;
                modalDescription.textContent = description;

                modal.showModal();
            });
        });

        closeModalBtn.addEventListener('click', () => {
            modal.close();
        });

        modal.addEventListener('click', (event) => {
            const dialogDimensions = modal.getBoundingClientRect();
            if (
                event.clientX < dialogDimensions.left ||
                event.clientX > dialogDimensions.right ||
                event.clientY < dialogDimensions.top ||
                event.clientY > dialogDimensions.bottom
            ) {
                modal.close();
            }
        });
    }
});