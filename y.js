const navelt = document.querySelector('.navbar');
const buton = document.querySelector('.btn');

window.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 56) {
        navelt.classList.add('navbar-scrolled');
        navelt.classList.add('navbar-dark');
        buton.classList.add('btn-outline-light');
    }
    else if (window.scrollY < 56) {
        navelt.classList.add('blud')
        navelt.classList.remove('navbar-scrolled');
        buton.classList.remove('btn-outline-light');
    }
});