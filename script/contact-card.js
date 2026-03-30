const card = document.querySelector('.contact-card');
const menuButton = document.querySelector('.menu-fab');
const emailLink = document.querySelector('.email-link');

const updateEmailCompactState = () => {
    if (!emailLink) return;

    emailLink.classList.remove('email-link--compact');
    const isOverflowing = emailLink.scrollWidth > emailLink.clientWidth + 1;
    emailLink.classList.toggle('email-link--compact', isOverflowing);
};

window.addEventListener('resize', updateEmailCompactState);
updateEmailCompactState();

if (card && menuButton) {
    card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        const isExpanded = card.classList.toggle('expanded');
        menuButton.setAttribute('aria-expanded', String(isExpanded));
        menuButton.setAttribute(
            'aria-label',
            isExpanded ? 'Mitarbeiterinfos ausblenden' : 'Mitarbeiterinfos anzeigen'
        );

        requestAnimationFrame(updateEmailCompactState);
    });
}
