// script.js

let slideIndex = 1;
showSlides(slideIndex);

// Fonction pour passer à la diapositive suivante/précédente
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Fonction pour afficher la diapositive courante
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Fonction principale pour afficher les diapositives
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
}
