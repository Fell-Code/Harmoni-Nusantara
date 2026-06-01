document.addEventListener("DOMContentLoaded", function() {
    const btnJelajahi = document.getElementById('btnJelajahi');
    const welcomeContainer = document.getElementById('welcome-container');
    const mainFrame = document.getElementById('mainFrame');

    // 1. Membuka gerbang dan menambah riwayat
    btnJelajahi.addEventListener('click', function() {
        welcomeContainer.classList.add('open');
        mainFrame.src = 'home_content.html';
        
        // Menambah state ke riwayat browser
        history.pushState({ page: 'content' }, 'Content', '#content');
    });

    // 2. Fungsi untuk menutup gerbang
    window.tutupGerbang = function() {
        welcomeContainer.classList.remove('open');
        setTimeout(() => {
            mainFrame.src = 'about:blank';
        }, 500);
    };

    // 3. Mendeteksi jika tombol "Back" browser ditekan
    window.addEventListener('popstate', function(event) {
        if (!event.state) {
            // Jika kembali ke state awal, tutup gerbang
            window.tutupGerbang();
        }
    });
});
