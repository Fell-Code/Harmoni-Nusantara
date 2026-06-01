let player;

// 1. Inisialisasi YouTube API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'QAE6WhaPwiytt5Q6', // GANTI DENGAN ID VIDEO ANDA
        playerVars: {
            'autoplay': 0, // Jangan auto-play saat load pertama
            'loop': 1,
            'playlist': 'QAE6WhaPwiytt5Q6'
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    console.log("Player Siap");
}

document.addEventListener("DOMContentLoaded", function() {
    const btnJelajahi = document.getElementById('btnJelajahi');
    const welcomeContainer = document.getElementById('welcome-container');
    const mainFrame = document.getElementById('mainFrame');

    // 2. Fungsi saat tombol diklik
    btnJelajahi.addEventListener('click', function() {
        // Jalankan transisi gerbang
        welcomeContainer.classList.add('open');

        // Mainkan musik (hanya bisa setelah interaksi user)
        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
        }

        // Muat konten
        mainFrame.src = 'home_content.html';
    });

    // 3. Logika untuk "Kembali ke Awal" (Navigasi dalam iFrame)
    // Jika Anda ingin tombol "Kembali" di home_content.html memicu ini:
    window.kembaliKeAwal = function() {
        welcomeContainer.classList.remove('open');
        mainFrame.src = 'about:blank';
        
        // Matikan musik atau reset ke awal
        if (player) {
            player.stopVideo();
        }
    };
});
