document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Fungsi kembali yang stabil dengan tombol ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            // Kita hanya perlu memanggil fungsi tutupGerbang() dari file index.html
            // Hapus history.back() karena itu yang menyebabkan glitch/reload
            if (window.parent && window.parent.tutupGerbang) {
                window.parent.tutupGerbang();
            }
        }
    });

    // 2. Efek Hover pada menu navigasi
    const navCards = document.querySelectorAll('.nav-card');
    navCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = '0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
