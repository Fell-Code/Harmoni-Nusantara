document.addEventListener("DOMContentLoaded", function() {
    const btnJelajahi = document.getElementById('btnJelajahi');
    const welcomeContainer = document.getElementById('welcome-container');
    const mainFrame = document.getElementById('mainFrame');

    btnJelajahi.addEventListener('click', function() {
        welcomeContainer.classList.add('open');
        mainFrame.src = 'home_content.html';
    });

    window.tutupGerbang = function() {
        welcomeContainer.classList.remove('open');
        // Jeda 1.4 detik agar animasi gerbang selesai dulu baru iframe dikosongkan
        setTimeout(() => {
            mainFrame.src = 'about:blank';
        }, 1400);
    };
});
