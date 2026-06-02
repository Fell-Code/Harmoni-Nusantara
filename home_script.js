// home_script.js
// Versi Stabil - Menangani Animasi Kartu Menu Tanpa Merusak Navigasi

document.addEventListener("DOMContentLoaded", function() {
    const navCards = document.querySelectorAll(".nav-card");

    // Efek Interaktif Hover pada Menu Kotak-Kotak (Nav Card)
    navCards.forEach(function(card) {
        
        card.addEventListener("mouseenter", function() {
            // Memberikan efek transisi naik dan bayangan bercahaya emas saat kursor masuk
            card.style.transform = "translateY(-10px) scale(1.02)";
            card.style.boxShadow = "0 10px 25px rgba(245, 207, 102, 0.2)";
            card.style.transition = "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
        });

        card.addEventListener("mouseleave", function() {
            // Mengembalikan ke posisi semula secara halus saat kursor keluar
            card.style.transform = "translateY(0) scale(1)";
            card.style.boxShadow = "none";
        });

        card.addEventListener("click", function(event) {
            // Mencegah browser melakukan refresh atau melompat ke halaman kosong (Mencegah Bug 404)
            event.preventDefault();
            
            // Catatan masa depan: Jika nanti Anda sudah membuat halaman tujuan (misal: pemandangan.html),
            // Anda bisa mengarahkan rutenya dengan aman di sini menggunakan:
            // window.location.href = "pemandangan.html";
            
            console.log("Menu " + card.querySelector(".label").textContent + " diklik.");
        });
    });
});
