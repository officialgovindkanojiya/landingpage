// Basic smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(event.target.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-list').classList.toggle('active');
    document.querySelector('.menu-toggle').classList.toggle('active');
});
