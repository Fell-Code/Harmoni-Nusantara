document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btnJelajahi');
    const welcome = document.getElementById('welcome-container');

    btn.addEventListener('click', function() {
        // Menutup gerbang selamat datang
        welcome.classList.add('open');
        
        // Simpan status agar halaman tetap terbuka
        window.history.pushState({page: 'home'}, '', '');
    });
});
