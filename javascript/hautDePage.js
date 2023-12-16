document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector('.menu');
    const menuBurger = document.querySelector('.menu-burger');
    const menuList = document.querySelector('.menu ul');

    // Masquer le menu et le menu burger par défaut
    menu.classList.add('hide');
    menuList.classList.remove('show');

    menuBurger.addEventListener('click', function() {
        menuList.classList.toggle('show');
        const hautDePage = document.querySelector(".hautDePage");
        hautDePage.classList.toggle("menu-active");
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            // Afficher le menu et le menu burger si la largeur est inférieure ou égale à 768 pixels
            menu.classList.remove('hide');
        } else {
            // Masquer le menu et le menu burger si la largeur est supérieure à 768 pixels
            menu.classList.add('hide');
            menuList.classList.remove('show');
        }
    });
});