// home_script.js
// Versi Refactor Sinematik - Mengunci Konten & Menghapus Auto-Redirect Pengacau

document.addEventListener("DOMContentLoaded", function() {
    const navCards = document.querySelectorAll(".nav-card");

    // 1. Efek Interaktif Hover pada Menu Kotak-Kotak (Nav Card)
    navCards.forEach(function(card) {
        // Ambil background image dari inline style masing-masing
        const bgUrl = card.style.getPropertyValue('--bg-url');

        card.addEventListener("mouseenter", function() {
            // Berikan efek transisi lembut saat kursor masuk
            card.style.transform = "translateY(-10px) scale(1.02)";
            card.style.boxShadow = "0 10px 25px rgba(245, 207, 102, 0.2)";
            card.style.transition = "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
        });

        card.addEventListener("mouseleave", function() {
            // Kembalikan posisi semula saat kursor keluar
            card.style.transform = "translateY(0) scale(1)";
            card.style.boxShadow = "none";
        });

        card.addEventListener("click", function(event) {
            // Kunci aksi klik bawaan agar browser tidak melompat ke halaman kosong/404
            event.preventDefault();
            
            // Di sini Anda bisa menambahkan animasi atau fungsi tambahan jika nanti 
            // halaman sub-menu (pemandangan, budaya, dll) sudah siap dalam versi HTML statis.
            console.log("Menu " + card.querySelector(".label").textContent + " diklik.");
        });
    });
});
