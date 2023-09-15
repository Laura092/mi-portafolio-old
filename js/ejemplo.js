const imageContainer = document.getElementById('image-container');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

let currentIndex = 0;

// Imágenes disponibles
const images = [
    'imagen1.jpg',
    'imagen2.jpg',
];

// Función para actualizar la visualización de las imágenes
function updateImage() {
    const offset = currentIndex * -100;
    imageContainer.style.transform = `translateX(${offset}%)`;
}

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Mostrar la primera imagen al cargar la página
updateImage();