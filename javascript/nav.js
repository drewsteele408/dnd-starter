export function initNav({
    hamburgerSelector = '.hamburger',
    navMenuSelector = '.nav-menu',
    activeClass = 'nav-active',
    toggleClass = 'toggle'
} = {}) {
    const hamburger = document.querySelector(hamburgerSelector);
    const navMenu = document.querySelector(navMenuSelector);

    if (!hamburger || !navMenu) {
        console.warn("initNav: element not found", {hamburgerSelector, navMenuSelector});
        return;
    }

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle(activeClass);
        hamburger.classList.toggle(toggleClass);
    });

}

