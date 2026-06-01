let player;

// Fungsi untuk memuat konten
function loadContent(page) {
    const mainFrame = document.getElementById('main-frame');
    const welcomeContainer = document.getElementById('welcome-container');
    
    mainFrame.src = page;
    // Menambahkan class untuk menyembunyikan halaman selamat datang
    welcomeContainer.classList.add('hidden'); 
}

// Inisialisasi YouTube Player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            'onReady': (event) => {
                console.log('Player siap');
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btn-jelajahi');
    const welcomeContainer = document.getElementById('welcome-container');

    // 1. Logika Klik Tombol
    if (btn) {
        btn.addEventListener('click', function() {
            // Putar video saat tombol diklik
            if (player) {
                player.playVideo();
            }
            // Pindah halaman
            loadContent('home_content.html');
        });
    }
});
