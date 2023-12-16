// Sélectionnez votre élément .hautDePage
var hautDePage = document.querySelector('.hautDePage');

// Ajoutez un gestionnaire d'événements pour le défilement de la page
window.addEventListener('scroll', function() {
    // Vérifiez si la hauteur de défilement est supérieure à 10vh
    if (window.scrollY > 10 * window.innerHeight / 100) {
        // Ajoutez une classe pour changer le style
        hautDePage.classList.add('scrolled');
    } else {
        // Supprimez la classe si la hauteur de défilement est inférieure à 10vh
        hautDePage.classList.remove('scrolled');
    }
});