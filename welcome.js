document.addEventListener("DOMContentLoaded", function() {
    const btnJelajahi = document.getElementById('btnJelajahi');
    const welcomeContainer = document.getElementById('welcome-container');
    const mainFrame = document.getElementById('mainFrame');

    // Membuka gerbang
    btnJelajahi.addEventListener('click', function() {
        welcomeContainer.classList.add('open');
        mainFrame.src = 'home_content.html';
    });

    // Fungsi untuk menutup gerbang kembali
    window.tutupGerbang = function() {
        welcomeContainer.classList.remove('open');
        setTimeout(() => {
            mainFrame.src = 'about:blank';
        }, 500);
    };
});
