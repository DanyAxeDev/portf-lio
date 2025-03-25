function openNavigation() {

    const menuToggle = document.querySelector('.cabecalho__menu__toggle');
    const openIcon = document.querySelector('.menu-toggle i:nth-of-type(1)');
    const closeIcon = document.querySelector('.menu-toggle i:nth-of-type(2)');

    const currentDisplay = window.getComputedStyle(menuToggle).display;

    if (currentDisplay === "none") {
        menuToggle.style.display = "flex";
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        menuToggle.style.display = "none";
        openIcon.style.display = "";
        closeIcon.style.display = "none";
    }
}