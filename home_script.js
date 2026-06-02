// home_script.js
// Versi Responsif - Menghidupkan Fungsi Klik Menu Tanpa Error 404

document.addEventListener("DOMContentLoaded", function() {
    const navCards = document.querySelectorAll(".nav-card");

    // 1. Efek Interaktif Hover pada Menu Kotak-Kotak (Nav Card)
    navCards.forEach(function(card) {
        
        card.addEventListener("mouseenter", function() {
            // Efek transisi naik dan bayangan emas saat kursor masuk
            card.style.transform = "translateY(-10px) scale(1.02)";
            card.style.boxShadow = "0 10px 25px rgba(245, 207, 102, 0.2)";
            card.style.transition = "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
        });

        card.addEventListener("mouseleave", function() {
            // Mengembalikan ke posisi semula saat kursor keluar
            card.style.transform = "translateY(0) scale(1)";
            card.style.boxShadow = "none";
        });

        card.addEventListener("click", function(event) {
            // Mengambil link tujuan dari atribut data-url yang ada di HTML
            const targetUrl = card.getAttribute("data-url");
            
            if (targetUrl && targetUrl !== "#") {
                // Mengarahkan halaman iframe menuju file html tujuan (misal: pemandangan.html)
                window.location.href = targetUrl;
            } else {
                // Jika file belum siap/dibuat, kunci agar tidak memicu error 404
                event.preventDefault();
                console.log("Menu " + card.querySelector(".label").textContent + " diklik, tetapi file HTML belum siap.");
            }
        });
    });
});
