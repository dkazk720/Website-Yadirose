const navLinks = document.querySelectorAll('.nav-link');
const indicator = document.getElementById('nav-indicator');
const sections = document.querySelectorAll('section');

function moveIndicator(element) {
    const width = element.offsetWidth;
    const left = element.offsetLeft;

    indicator.style.width = `${width}px`;
    indicator.style.left = `${left}px`;
}

const activeLink = document.querySelector('.nav-link.active');
    if (activeLink) {
    setTimeout(() => {
        moveIndicator(activeLink);
         }, 100); 
 }

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        moveIndicator(this);
    });
});

window.addEventListener('scroll', () => {
    let current = '';
        sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
         }
});

navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
    link.classList.add('active');
    moveIndicator(link);
    }
    });
});

window.addEventListener('resize', () => {
    const currentActive = document.querySelector('.nav-link.active');
    if (currentActive) {
    moveIndicator(currentActive);
    }
});