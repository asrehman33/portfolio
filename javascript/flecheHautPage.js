// Sélectionnez votre bouton
var scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Ajoutez un gestionnaire d'événements pour le défilement de la page
window.addEventListener('scroll', function() {
    // Vérifiez si la hauteur de défilement est supérieure à un certain seuil (par exemple, 200px)
    if (window.scrollY > 200) {
        // Affichez le bouton
        scrollToTopBtn.style.display = 'block';
    } else {
        // Cachez le bouton
        scrollToTopBtn.style.display = 'none';
    }
});

// Ajoutez un gestionnaire d'événements pour le clic sur le bouton
scrollToTopBtn.addEventListener('click', function() {
    // Faites défiler la page vers le haut
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});