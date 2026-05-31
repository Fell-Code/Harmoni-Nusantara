// home_script.js
document.addEventListener("DOMContentLoaded", function() {
    console.log("Harmoni Nusantara - Home Loaded Successfully");
    
    // Kamu bisa menambahkan fungsi interaksi lain di sini nantinya
    // Jika ingin menambahkan efek muncul perlahan (fade-in) pada konten:
    const container = document.querySelector('.container');
    if (container) {
        container.style.opacity = 0;
        container.style.transition = 'opacity 1.5s ease-in-out';
        setTimeout(() => {
            container.style.opacity = 1;
        }, 500);
    }
});