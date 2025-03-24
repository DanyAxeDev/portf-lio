function openNavigation() {

    const menuToggle = document.querySelector('.cabecalho__menu__toggle');

    const currentDisplay = window.getComputedStyle(menuToggle).display;

    if (currentDisplay === "none") {
        menuToggle.style.display = "flex";
    } else {
        menuToggle.style.display = "none";
    }
}