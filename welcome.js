let player;

// Menggunakan script loader agar YouTube API siap tepat waktu
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        videoId: '2P9CVWVZtiR_s8z-', // ID video kamu
        playerVars: { 
            'autoplay': 1, 
            'mute': 1, 
            'loop': 1, 
            'playlist': '2P9CVWVZtiR_s8z-', // Kunci ke video ID yang sama agar tidak pindah
            'controls': 0, 
            'showinfo': 0, 
            'rel': 0, // Mencegah video rekomendasi muncul
            'modestbranding': 1, // Menghilangkan logo YouTube
            'origin': window.location.origin
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btnJelajahi');
    const welcome = document.getElementById('welcome-container');

    btn.addEventListener('click', function() {
        welcome.classList.add('open');
        
        // Membuka suara hanya setelah interaksi user
        if (player && typeof player.unMute === 'function') {
            player.unMute();
            player.setVolume(100);
            player.playVideo();
        }
    });
});
