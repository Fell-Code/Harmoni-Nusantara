document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Fungsi Kembali dengan tombol ESC (Tanpa tombol visual)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (window.parent && window.parent.tutupGerbang) {
                window.parent.tutupGerbang();
            }
        }
    });

    // Di dalam home_script.js
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Ini akan memicu tombol Back browser atau fungsi tutup gerbang
        if (window.parent && window.parent.tutupGerbang) {
            window.parent.tutupGerbang();
            // Opsional: memaksa browser kembali ke history sebelumnya
            history.back(); 
        }
    }
});

    // 2. Efek Hover pada menu navigasi (Hanya efek visual)
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
