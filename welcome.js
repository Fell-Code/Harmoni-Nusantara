document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btnJelajahi');
    const welcome = document.getElementById('welcome-container');
    const iframe = document.querySelector('#youtube-player iframe');

    btn.addEventListener('click', function() {
        // Buka gerbang
        welcome.classList.add('open');
        
        // Memaksa iframe untuk unmute (Catatan: Beberapa browser mungkin tetap memblokir 
        // suara otomatis jika belum ada interaksi pengguna yang kuat)
        let src = iframe.src;
        if (src.includes("mute=1")) {
            iframe.src = src.replace("mute=1", "mute=0");
        }
        
        window.history.pushState({page: 'home'}, '', '');
    });
});
