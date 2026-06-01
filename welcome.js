let player;

// Fungsi callback dari YouTube API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        height: '0',
        width: '0',
        videoId: 'SBZIfGsNute_wvpv', // GANTI DENGAN ID VIDEO YOUTUBE ANDA
        playerVars: {
            'autoplay': 0,
            'loop': 1,
            'playlist': 'SBZIfGsNute_wvpv'
        },
        events: {
            'onReady': () => console.log('Player Siap')
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const btnJelajahi = document.getElementById('btnJelajahi');
    const welcomeContainer = document.getElementById('welcome-container');
    const mainFrame = document.getElementById('mainFrame');

    // Klik tombol untuk membuka gerbang
    btnJelajahi.addEventListener('click', function() {
        welcomeContainer.classList.add('open');
        mainFrame.src = 'home_content.html';
        
        // Mulai musik
        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
        }
    });

    // Fungsi untuk menutup gerbang (dipanggil dari iframe)
    window.tutupGerbang = function() {
        welcomeContainer.classList.remove('open');
        mainFrame.src = 'about:blank';
        
        // Reset musik
        if (player) {
            player.stopVideo();
        }
    };
});
