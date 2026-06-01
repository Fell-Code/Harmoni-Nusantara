document.addEventListener("DOMContentLoaded", function() {
    // 1. Mengambil semua kartu navigasi
    const navCards = document.querySelectorAll('.nav-card');

    // 2. Memberikan efek hover pada kartu
    navCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = '0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // 3. Optional: Menambahkan animasi saat halaman dimuat
    const title = document.querySelector('.main-title');
    if (title) {
        title.style.opacity = '0';
        title.style.transition = 'opacity 1.5s ease';
        setTimeout(() => {
            title.style.opacity = '1';
        }, 100);
    }
});
