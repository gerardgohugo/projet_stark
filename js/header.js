document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Modifiez la valeur selon le défilement souhaité pour l'opacité
            header.classList.add('opaque');
        } else {
            header.classList.remove('opaque');
        }
    });
});