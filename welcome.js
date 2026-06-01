document.addEventListener("DOMContentLoaded", function() {
    const btnJelajahi = document.getElementById('btnJelajahi');
    const welcomeContainer = document.getElementById('welcome-container');
    const mainFrame = document.getElementById('mainFrame');

    btnJelajahi.addEventListener('click', function() {
        welcomeContainer.classList.add('open');
        mainFrame.src = 'home_content.html';
        // Tambahkan satu history kosong agar tombol back aktif
        history.pushState({page: 'home'}, '', '');
    });

    window.tutupGerbang = function() {
        welcomeContainer.classList.remove('open');
        setTimeout(() => {
            mainFrame.src = 'about:blank';
        }, 1400); // Sesuaikan dengan durasi transisi CSS (1.4s)
    };

    // Ini kunci agar tombol back menutup gerbang
    window.addEventListener('popstate', function() {
        if (welcomeContainer.classList.contains('open')) {
            window.tutupGerbang();
        }
    });
});
