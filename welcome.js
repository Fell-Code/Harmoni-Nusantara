// --- KONFIGURASI GLOBAL ---
let player;
const VIDEO_ID = 'ID_VIDEO_ANDA'; // <-- GANTI DENGAN ID VIDEO YOUTUBE ANDA

// 1. Inisialisasi YouTube API (Wajib ada)
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: DJI7ThiOCQx6aoUe,
        playerVars: {
            'autoplay': 0, // Dibiarkan 0 karena kita panggil via klik
            'loop': 1,
            'playlist': DJI7ThiOCQx6aoUe
        },
        events: {
            'onReady': () => console.log("Player YouTube Siap.")
        }
    });
}

// 2. Fungsi Utama Navigasi
document.addEventListener("DOMContentLoaded", function() {
    const btnJelajahi = document.getElementById('btnJelajahi');
    const welcomeContainer = document.getElementById('welcome-container');
    const mainFrame = document.getElementById('mainFrame');

    // Aksi Klik Jelajahi
    if (btnJelajahi) {
        btnJelajahi.addEventListener('click', function() {
            // Animasi Gerbang Terbuka
            welcomeContainer.classList.add('open');

            // Jalankan Musik
            if (player && typeof player.playVideo === 'function') {
                player.playVideo();
            }

            // Muat Konten Utama
            mainFrame.src = 'home_content.html';
        });
    }

    // 3. Fungsi Global untuk Kembali ke Beranda (Dapat dipanggil dari iframe)
    window.tutupGerbang = function() {
        // Hapus class open agar gerbang menutup kembali
        welcomeContainer.classList.remove('open');
        
        // Hentikan musik
        if (player && typeof player.stopVideo === 'function') {
            player.stopVideo();
        }

        // Reset iframe ke kosong
        setTimeout(() => {
            mainFrame.src = 'about:blank';
        }, 500); // Tunggu animasi transisi selesai (0.5 detik)
    };
});
