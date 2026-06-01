document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btnJelajahi');
    const welcome = document.getElementById('welcome-container');
    const audio = document.getElementById('backsound');

    // Klik Jelajahi: Tutup gerbang & mulai musik
    btn.addEventListener('click', function() {
        welcome.classList.add('open');
        audio.play().catch(e => console.log("User harus berinteraksi dulu dengan halaman"));
        window.history.pushState({page: 'home'}, '', '#home');
    });

    // Deteksi tombol Back Browser
    window.addEventListener('popstate', function(event) {
        if (!event.state || event.state.page !== 'home') {
            welcome.classList.remove('open');
            audio.pause();
            audio.currentTime = 0; // Reset musik ke awal
        }
    });
});
