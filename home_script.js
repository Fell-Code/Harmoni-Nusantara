document.addEventListener("DOMContentLoaded", function() {
    // Fungsi Esc untuk kembali
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (window.parent && window.parent.tutupGerbang) {
                window.parent.tutupGerbang();
            }
        }
    });
    
    // (Tambahkan logika hover kartu Anda di sini)
});
