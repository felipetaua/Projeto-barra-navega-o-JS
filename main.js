const hamburger = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('ativo');
});

const navLinks = document.querySelectorAll('.nav-bar ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900 && navBar.classList.contains('ativo')) {
            navBar.classList.remove('ativo');
        }
    });
});
