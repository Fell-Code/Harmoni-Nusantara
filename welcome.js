document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btnJelajahi');
    const iframe = document.querySelector('#youtube-player iframe');

    btn.addEventListener('click', function() {
        document.getElementById('welcome-container').classList.add('open');
        
        // Memaksa suara aktif dengan mengubah parameter URL
        iframe.src = iframe.src.replace("mute=1", "mute=0");
    });
});
