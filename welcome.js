document.addEventListener("DOMContentLoaded", function() {
    const btnJelajahi = document.getElementById('btnJelajahi');
    const welcomeContainer = document.getElementById('welcome-container');
    const mainFrame = document.getElementById('mainFrame');

    // Membuka gerbang
    if (btnJelajahi) {
        btnJelajahi.addEventListener('click', function() {
            welcomeContainer.classList.add('open');
            mainFrame.src = 'home_content.html';
        });
    }

    // Fungsi global agar bisa dipanggil dari dalam iframe
    window.tutupGerbang = function() {
        welcomeContainer.classList.remove('open');
        setTimeout(() => {
            mainFrame.src = 'about:blank';
        }, 500);
    };
});
