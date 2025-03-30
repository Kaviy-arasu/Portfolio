// AOS Initialization for Scroll Animations
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
    });
});
// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});