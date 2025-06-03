var typed = new Typed('#element', {
    strings: ['Web Developer.', '&amp; Graphic Designer.'],
    typeSpeed: 100,
});



const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        const targetPosition = targetElement.offsetTop;

        window.scrollTo({
            top: targetPosition - document.querySelector('nav').offsetHeight,
            behavior: 'smooth'
        })
    })
});

function openMenu(){
    menu = document.getElementById('navmenu');
    menu.classList.toggle("rightshw");
}
