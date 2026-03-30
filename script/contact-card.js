const card = document.querySelector('.contact-card');
const menuButton = document.querySelector('.menu-fab');

if (card && menuButton) {
    card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const isExpanded = card.classList.toggle('expanded');
        menuButton.setAttribute('aria-expanded', String(isExpanded));
        menuButton.setAttribute(
            'aria-label',
            isExpanded ? 'Mitarbeiterinfos ausblenden' : 'Mitarbeiterinfos anzeigen'
        );
    });
}
