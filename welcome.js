document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btnJelajahi');
    const welcome = document.getElementById('welcome-container');
    const video = document.getElementById('background-video'); // Pastikan ID di index.html sama

    btn.addEventListener('click', function() {
        // Buka animasi gerbang
        welcome.classList.add('open');
        
        // Aktifkan suara dan putar video
        if (video) {
            video.muted = false; // Mengaktifkan suara
            video.volume = 1.0;  // Set volume maksimal
            video.play();        // Memastikan video tetap berputar
        }
        
        window.history.pushState({page: 'home'}, '', '');
    });

    window.addEventListener('popstate', function() {
        welcome.classList.remove('open');
        if (video) {
            video.muted = true; // Kembali bisukan saat tutup
        }
    });
});
