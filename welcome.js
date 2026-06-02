// welcome.js
// Versi Refactor Sinematik untuk Proyek Harmoni Nusantara

document.addEventListener("DOMContentLoaded", function() {
    // Mengambil semua elemen yang dibutuhkan
    const btnJelajahi = document.getElementById("btnJelajahi");
    const welcomeContainer = document.getElementById("welcome-container");
    const welcomeContent = document.querySelector(".welcome-content");
    const mainFrame = document.getElementById("mainFrame");

    // Pengaman: Pastikan tombol dan container-nya benar-benar ada di HTML
    if (btnJelajahi && welcomeContainer) {
        
        btnJelajahi.addEventListener("click", function() {
            
            // 1. Berikan efek fade-out lembut pada teks konten agar transisinya mewah
            if (welcomeContent) {
                welcomeContent.style.transition = "opacity 0.5s ease, transform 0.5s ease";
                welcomeContent.style.opacity = "0";
                welcomeContent.style.transform = "translateY(-20px)"; // Efek teks sedikit terangkat saat memudar
            }

            // 2. Tunggu 400ms (saat teks mulai hilang), lalu geser tirai welcome ke atas
            setTimeout(function() {
                welcomeContainer.classList.add("open");
                
                // 3. Pindahkan fokus otomatis ke dalam iframe agar slider di dalamnya langsung aktif
                if (mainFrame) {
                    mainFrame.focus();
                }
            }, 400);

        });

    } else {
        // Log pesan di console F12 jika ada ID HTML yang salah ketik
        console.error("Gagal memuat sistem: ID 'btnJelajahi' atau 'welcome-container' tidak ditemukan.");
    }
});
