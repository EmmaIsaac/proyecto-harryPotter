// Definir la función que maneja el scroll
export function handleScroll() {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container').classList.add('show');
    } else {
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

// Definir la función que maneja el click en el botón de "go top"
export function setupGoTopButton() {
    document.querySelector('.go-top-container').addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Función para inicializar el scroll handler
export function initScrollHandler() {
    window.onscroll = handleScroll;
    setupGoTopButton();
}