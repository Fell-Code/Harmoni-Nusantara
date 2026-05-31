let player;

// Memuat YouTube IFrame API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        videoId: 'aKtb7Y3qOck',
        playerVars: { 
            'autoplay': 1, 
            'mute': 1, 
            'loop': 1, 
            'playlist': 'aKtb7Y3qOck',
            'origin': window.location.origin 
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btnJelajahi');
    const welcome = document.getElementById('welcome-container');
    const iframe = document.getElementById('mainFrame');

    btn.addEventListener('click', function() {
        // 1. Jalankan animasi gerbang
        welcome.classList.add('open');
        
        // 2. Muat isi iframe
        iframe.src = "home_content.html";
        
        // 3. Logika suara (Dibuat lebih kuat)
        if (player) {
            player.seekTo(0);
            player.unMute();
            player.setVolume(100);
            player.playVideo();
        }
        
        window.history.pushState({page: 'home'}, '', '');
    });

    window.addEventListener('popstate', function() {
        welcome.classList.remove('open');
        if (player) {
            player.mute();
            player.pauseVideo();
        }
    });
});
