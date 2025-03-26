function uianimated() {
    var uianimateds = document.querySelectorAll('.uianimated');

    for (var i = 0; i < uianimateds.length; i++) {
        var windowheight = window.innerHeight;
        var uianimatedtop = uianimateds[i].getBoundingClientRect().top;
        var uianimatedpoint = 225;

        if (uianimatedtop < windowheight - uianimatedpoint) {
            uianimateds[i].classList.add('active');
        } else {
            uianimateds[i].classList.remove('active');
        }
    }
}

function onPageload() {
    uianimated();
    window.addEventListener('scroll', uianimated);
}

window.addEventListener('load', onPageload);

const links = document.querySelectorAll('nav a');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);

        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'      
        });
    });
});