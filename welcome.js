// welcome.js - Versi Khusus GitHub Pages (Murni Statis & Anti-Mental)

document.addEventListener("DOMContentLoaded", function() {
    const btnJelajahi = document.getElementById("btnJelajahi");
    const welcomeContainer = document.getElementById("welcome-container");
    const welcomeContent = document.querySelector(".welcome-content");

    if (btnJelajahi && welcomeContainer) {
        btnJelajahi.addEventListener("click", function(event) {
            // Mengunci tombol agar tidak me-refresh halaman browser
            event.preventDefault(); 
            
            // Efek teks memudar perlahan
            if (welcomeContent) {
                welcomeContent.style.transition = "opacity 0.5s ease";
                welcomeContent.style.opacity = "0";
            }

            // Tirai bergeser naik ke atas
            setTimeout(function() {
                welcomeContainer.classList.add("open");
            }, 400);
        });
    }

    // PENGAMAN TAMBAHAN: Otomatis mencari semua link kosong di halaman dan menguncinya agar tidak mental ke 404
    const semuaLink = document.querySelectorAll("a");
    semuaLink.forEach(function(link) {
        const href = link.getAttribute("href");
        if (href === "" || href === "#") {
            link.setAttribute("href", "javascript:void(0);");
        }
    });
});

// Fungsi global agar bisa dipanggil dari dalam iframe home.html
window.tutupGerbang = function() {
    const welcomeContainer = document.getElementById("welcome-container");
    const welcomeContent = document.querySelector(".welcome-content");
    
    if (welcomeContainer) {
        // Hapus kelas open agar tirai kembali bergeser turun menutup halaman utama
        welcomeContainer.classList.remove("open");
        
        // Munculkan kembali teks tulisan welcome secara halus
        if (welcomeContent) {
            welcomeContent.style.opacity = "1";
            welcomeContent.style.transform = "translateY(0)";
        }
    }
};
