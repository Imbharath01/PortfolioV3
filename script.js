let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top= window.scrollY;
        let offset= sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top< offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav [href*='+ id +']').classList.add('active');
            });
        };

    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.tools-container, .container-box, #contact, .about-me', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .title, .skills-content', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content, ', {origin: 'right'});

// Skills Read More/Show Less functionality for mobile
function setupReadMore(gridId, btnId, initialCount) {
    const grid = document.getElementById(gridId);
    const btn = document.getElementById(btnId);
    if (!grid || !btn) return;
    const cards = Array.from(grid.children);
    let expanded = false;

    function updateView() {
        if (window.innerWidth > 900) {
            // Show all on desktop
            cards.forEach(card => card.style.display = 'flex');
            btn.style.display = 'none';
            grid.classList.add('expanded');
        } else {
            if (!expanded) {
                cards.forEach((card, i) => {
                    card.style.display = i < initialCount ? 'flex' : 'none';
                });
                btn.textContent = 'Read More';
                btn.style.display = cards.length > initialCount ? 'block' : 'none';
                grid.classList.remove('expanded');
            } else {
                cards.forEach(card => card.style.display = 'flex');
                btn.textContent = 'Show Less';
                btn.style.display = 'block';
                grid.classList.add('expanded');
            }
        }
    }

    btn.onclick = function() {
        expanded = !expanded;
        updateView();
    };

    window.addEventListener('resize', updateView);
    updateView();
}

// Setup for each category (show 2 by default on mobile)
setupReadMore('skills-grid-lang', 'read-more-lang', 2);
setupReadMore('skills-grid-fw', 'read-more-fw', 2);
setupReadMore('skills-grid-pro', 'read-more-pro', 2);
setupReadMore('tools-grid', 'read-more-tools', 2);


