function toggleDropdown() {
    document.querySelector(".dropdown").classList.toggle("show");
}

// Fecha o dropdown se clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.querySelectorAll(".dropdown");
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove("show");
        });
    }
}

// Armazenar o índice de cada carrossel
const carouselIndices = {
    carousel1: 0,
    carousel2: 0,
    carousel3: 0
};

function moveSlide(step, carouselId) {
    const track = document.getElementById(carouselId).querySelector('.carousel-track');
    const items = track.querySelectorAll('.product');
    const totalItems = items.length;
    const itemsPerSlide = Math.floor(document.querySelector(`#${carouselId}`).clientWidth / items[0].clientWidth);
    const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1;

    // Atualizar o índice do carrossel específico
    carouselIndices[carouselId] += step;
    
    // Garantir que o índice não saia dos limites
    if (carouselIndices[carouselId] < 0) {
        carouselIndices[carouselId] = maxIndex;
    } else if (carouselIndices[carouselId] > maxIndex) {
        carouselIndices[carouselId] = 0;
    }

    const moveAmount = carouselIndices[carouselId] * (items[0].clientWidth * itemsPerSlide);
    track.style.transform = `translateX(-${moveAmount}px)`;
}

