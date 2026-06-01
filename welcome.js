document.addEventListener("DOMContentLoaded", function() {
    // 1. Langsung muat home_content saat halaman dibuka
    loadContent('home_content.html');

    // 2. Logika untuk memutar musik setelah interaksi pertama
    const playMusic = () => {
        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
        }
        // Hapus event listener agar tidak terpicu terus menerus
        document.removeEventListener('click', playMusic);
    };

    document.addEventListener('click', playMusic);
});

function loadContent(page) {
    const mainFrame = document.getElementById('main-frame');
    mainFrame.src = page;
    
    // Sembunyikan elemen welcome jika perlu
    const welcomeContainer = document.getElementById('welcome-container');
    if (welcomeContainer) {
        welcomeContainer.classList.add('hidden'); // Pastikan Anda punya class .hidden { display: none; } di CSS
    }
}
