let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'ID_VIDEO_ANDA', // GANTI DENGAN ID VIDEO YOUTUBE ANDA
        events: { 'onReady': () => console.log('Player siap') }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById('btn-jelajahi');
    const welcome = document.getElementById('welcome-container');
    const mainContent = document.getElementById('main-content');
    const mainFrame = document.getElementById('main-frame');

    btn.addEventListener('click', () => {
        // Putar musik
        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
        }

        // Tampilkan konten, sembunyikan welcome
        welcome.style.display = 'none';
        mainContent.style.display = 'block';
        mainFrame.src = 'home_content.html';
    });
});
