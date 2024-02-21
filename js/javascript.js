let lastScrollTop = 0;

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll hacia abajo
        document.querySelector('.header').classList.add('hidden');
    } else {
        // Scroll hacia arriba
        document.querySelector('.header').classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});