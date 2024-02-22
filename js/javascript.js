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

function changeLogo() {
    document.getElementById("aufwie-logo").style.display = "none";
    document.getElementById("aufwie-logo-pink").style.display = "inline";
  }
  
 
  function restoreLogo() {
    document.getElementById("aufwie-logo").style.display = "inline";
    document.getElementById("aufwie-logo-pink").style.display = "none";
  }