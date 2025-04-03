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
    
    $(".apresentacao__img").on("click", function(){
        let foto = $(this).attr("src");

        if (foto === "assets/eu.jpeg") {
            $(this).attr("src", "assets/danielz.jpeg");
        } else {
            $(this).attr("src", "assets/eu.jpeg");
        }
    })
    $(".apresentacao__img__about").on("click", function(){
        let foto = $(this).attr("src");

        if (foto === "assets/eu 2.jpeg") {
            $(this).attr("src", "assets/eu ghibli.jpeg");
        } else {
            $(this).attr("src", "assets/eu 2.jpeg");
        }
    })
});