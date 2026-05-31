let player;

// Fungsi dari YouTube API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        videoId: 'aKtb7Y3qOck',
        playerVars: { 
            'autoplay': 1, 
            'mute': 1, // Harus mute di awal agar video bisa ter-load
            'loop': 1, 
            'playlist': 'aKtb7Y3qOck' 
        },
        events: {
            'onReady': function(event) {
                console.log("Player Siap");
            }
        }
    });
}

function bukaGerbang() {
    const welcome = document.getElementById('welcome-container');
    welcome.classList.add('open');
    
    // Logika agar suara muncul:
    if (player) {
        player.seekTo(0);    // Mengulang dari detik ke-0
        player.unMute();     // Membuka suara
        player.setVolume(100);
        player.playVideo();  // Memaksa putar
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btnJelajahi');
    const iframe = document.getElementById('mainFrame');

    btn.addEventListener('click', function() {
        bukaGerbang();
        iframe.src = "home_content.html";
        window.history.pushState({page: 'home'}, '', '');
    });

    window.addEventListener('popstate', function() {
        document.getElementById('welcome-container').classList.remove('open');
        if (player) {
            player.mute(); // Mematikan suara saat kembali ke menu awal
            player.pauseVideo();
        }
    });
});
