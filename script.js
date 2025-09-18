document.addEventListener('DOMContentLoaded', () => {

    // Lógica del carrusel (solo en index.html)
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    if (carouselSlides.length > 0) {
        let currentSlide = 0;
        const showSlide = (index) => {
            carouselSlides.forEach((slide) => {
                slide.classList.remove('active');
            });
            carouselSlides[index].classList.add('active');
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % carouselSlides.length;
            showSlide(currentSlide);
        };

        showSlide(currentSlide);
        setInterval(nextSlide, 5000);
    }

    // Lógica para la ventana modal (solo en menu.html)
    const burgerItems = document.querySelectorAll('.burger-item');
    const modal = document.getElementById('modal');
    const modalBurgerName = document.getElementById('modal-burger-name');
    const modalBurgerIngredients = document.getElementById('modal-burger-ingredients');
    const closeButton = document.querySelector('.close-button');

    if (burgerItems.length > 0) {
        burgerItems.forEach(item => {
            item.addEventListener('click', () => {
                const name = item.getAttribute('data-name');
                const ingredients = item.getAttribute('data-ingredients');
                
                modalBurgerName.textContent = name;
                modalBurgerIngredients.textContent = ingredients;
                modal.style.display = 'flex';
            });
        });

        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});