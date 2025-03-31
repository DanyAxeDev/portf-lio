$(function () {
    $(".menu-toggle").on("click", function () {
        let menu = $(".cabecalho__menu__toggle");

        if (menu.is(":hidden")) {
            menu.css("display", "flex").hide().stop().slideDown(400);
        } else {
            menu.stop().slideUp(400, function () {
                menu.css("display", "none");
            });
        }

        let icon = $(this).find("i:first");
        icon.toggleClass("fa-bars fa-xmark");
    });
});