const card = document.querySelector('.contact-card');
const menuButton = document.querySelector('.menu-fab');
const logoImg = menuButton ? menuButton.querySelector('img') : null;

if (card && menuButton && logoImg) {
    card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const isExpanded = card.classList.toggle('expanded');
        menuButton.setAttribute('aria-expanded', String(isExpanded));
        menuButton.setAttribute(
            'aria-label',
            isExpanded ? 'Mitarbeiterinfos ausblenden' : 'Mitarbeiterinfos anzeigen'
        );

        logoImg.classList.remove('spin-open', 'spin-close');
        void logoImg.offsetWidth;
        logoImg.classList.add(isExpanded ? 'spin-open' : 'spin-close');
        logoImg.addEventListener('animationend', () => {
            logoImg.classList.remove('spin-open', 'spin-close');
        }, { once: true });
    });
}
