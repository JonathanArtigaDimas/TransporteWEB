document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.fade-imagen');
    let currentImageIndex = 0;

    function changeImage() {
        // Oculta la imagen actual
        images[currentImageIndex].style.opacity = 0;

        // Calcula el índice de la siguiente imagen
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Muestra la siguiente imagen
        images[currentImageIndex].style.opacity = 1;
    }

    // Cambia la imagen cada 6000 milisegundos
    setInterval(changeImage, 6000);
});
