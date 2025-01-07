document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const modalImage = modal.querySelector('img');

    // Dodajemy nasłuchiwanie na wszystkie zdjęcia w sekcji "memes"
    document.querySelectorAll('.meme img').forEach(img => {
        img.addEventListener('click', () => {
            modalImage.src = img.src;
            modal.classList.add('active');
        });
    });

    // Zamknięcie modala po kliknięciu poza obrazkiem
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});