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
    
    if (!btn) {
        console.error("Tombol dengan ID 'btn-jelajahi' tidak ditemukan!");
        return;
    }

    btn.addEventListener('click', function() {
        console.log("Tombol diklik!"); // Cek di Console Browser (F12)
        if (player) {
            player.playVideo();
        }
        loadContent('home_content.html');
    });
});
