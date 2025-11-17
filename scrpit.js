document.addEventListener('DOMContentLoaded', function() {

    /* --- 1. MENU MOBILE (HAMBURGUER) --- */
    const menuIcon = document.querySelector('.menu-icon');
    const menuLinks = document.querySelector('.menu-links');

    menuIcon.addEventListener('click', () => {
        // Alterna a classe 'ativo' para mostrar/esconder o menu
        menuLinks.classList.toggle('ativo');
    });

    /* --- 2. ATUALIZAÇÃO DE MENU NO SCROLL (Sua lógica melhorada) --- */
    const secoes = document.querySelectorAll('section');
    const linksNavegacao = document.querySelectorAll('.menu-links a');

    function ativarLinkNoScroll() {
        let scrollY = window.scrollY;

        secoes.forEach(secao => {
            let topoSecao = secao.offsetTop - 150; // Ajuste fino para o header fixo
            let alturaSecao = secao.offsetHeight;
            let id = secao.getAttribute('id');

            if (scrollY >= topoSecao && scrollY < topoSecao + alturaSecao) {
                linksNavegacao.forEach(link => {
                    link.classList.remove('ativo');
                    // Seleciona o link que tem o href igual ao ID da seção
                    if (link.getAttribute('href').includes(id)) {
                        link.classList.add('ativo');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', ativarLinkNoScroll);
});