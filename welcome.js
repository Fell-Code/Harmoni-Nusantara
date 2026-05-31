let player;

// Memuat YouTube IFrame API
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        videoId: '2P9CVWVZtiR_s8z-', // ID video kamu
        playerVars: { 
            'autoplay': 1, 
            'mute': 1, // Harus mute agar autoplay diizinkan browser
            'loop': 1, 
            'playlist': '2P9CVWVZtiR_s8z-', 
            'origin': window.location.origin 
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btnJelajahi');
    const welcome = document.getElementById('welcome-container');
    const iframe = document.getElementById('mainFrame');

    btn.addEventListener('click', function() {
        // Buka gerbang
        welcome.classList.add('open');
        iframe.src = "home_content.html";
        
        // Aktifkan suara
        if (player && typeof player.unMute === 'function') {
            player.seekTo(0);
            player.unMute();
            player.setVolume(100);
            player.playVideo();
        }
        
        window.history.pushState({page: 'home'}, '', '');
    });

    window.addEventListener('popstate', function() {
        welcome.classList.remove('open');
        if (player && typeof player.mute === 'function') {
            player.mute();
            player.pauseVideo();
        }
    });
});
