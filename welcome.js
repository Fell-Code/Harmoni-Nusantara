document.addEventListener("DOMContentLoaded", function() {
    // Mengambil elemen dari index.html
    const btnJelajahi = document.getElementById('btnJelajahi');
    const welcomeContainer = document.getElementById('welcome-container');
    const mainFrame = document.getElementById('mainFrame');

    // 1. Aksi saat tombol "JELAJAHI" diklik
    if (btnJelajahi) {
        btnJelajahi.addEventListener('click', function() {
            // Memberikan class 'open' untuk memicu animasi transisi CSS (gerbang ke atas)
            welcomeContainer.classList.add('open');

            // Memuat halaman konten ke dalam iframe
            mainFrame.src = 'home_content.html';
        });
    }

    // 2. Fungsi Global untuk kembali ke beranda
    // Fungsi ini dipanggil menggunakan "window.parent.tutupGerbang()" 
    // dari file HTML yang ada di dalam iframe
    window.tutupGerbang = function() {
        // Menghapus class 'open' agar gerbang turun kembali ke bawah
        welcomeContainer.classList.remove('open');
        
        // Memberi jeda 500ms agar animasi gerbang terlihat rapi sebelum iframe dikosongkan
        setTimeout(() => {
            mainFrame.src = 'about:blank';
        }, 500);
    };
});
