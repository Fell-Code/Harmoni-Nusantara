document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById('btnJelajahi');
    const welcome = document.getElementById('welcome-container');

    btn.addEventListener('click', function() {
        welcome.classList.add('open');
    });
});
