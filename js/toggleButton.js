$(function () {
    $("#card").flip({
        trigger: 'manual'
    });
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

    $(".apresentacao__img__about").on("click", function () {
        let foto = $(this).attr("src");

        if (foto === "assets/eu 2.jpeg") {
            $(this).attr("src", "assets/eu ghibli.jpeg");
        } else {
            $(this).attr("src", "assets/eu 2.jpeg");
        }
    })

    $(".aviso").on("click", function () {
        let mensagemDisplay = $(".mensagem__aviso").css("display")

        if (mensagemDisplay === "none") {
            $(".mensagem__aviso")
                .stop()
                .css("display", "block")
                .css("opacity", 0)
                .animate({
                    opacity: 1,
                    scale: 1
                }, 500);
        } else {
            $(".mensagem__aviso")
                .animate({
                    opacity: 0,
                    scale: 0.1
                }, 500, function () {
                    $(this).css("display", "none");
                });
        }
    })

    $(".mensagem__aviso").on("click", function () {
        let mensagemDisplay = $(this).css("display")

        if (mensagemDisplay === "block") {
            $(".mensagem__aviso")
                .animate({
                    opacity: 0,
                    scale: 0.1
                }, 500, function () {
                    $(this).css("display", "none");
                });
        }
    })

    $(".daniel__card__buttom").on("click", function () {
        $("#card").flip(true);
    });

    $("#voltar").on("click", function () {
        $("#card").flip(false);
    })
});