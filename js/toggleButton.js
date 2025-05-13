$(function () {
    function trocarSecao($esconder, $mostrar) {
        $esconder.fadeOut(400, function () {
            $mostrar
                .css({ display: 'block', opacity: 0 })
                .addClass('slide-in-left')
                .fadeTo(600, 1, function () {
                    $(this).removeClass('slide-in-left');
                });
        });
    }
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

    $(".apresentacao__img").on("click", function () {
        let foto = $(this).attr("src");

        if (foto === "assets/eu.jpeg") {
            $(this).attr("src", "assets/danielz.jpeg");
        } else {
            $(this).attr("src", "assets/eu.jpeg");
        }
    })

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
        let conteudoApresentacao = $(".me");
        let form = $(".entre__em__contato");
        let botao = $(this);

        if (conteudoApresentacao.is(":hidden")) {
            trocarSecao(form, conteudoApresentacao);
            botao.text("Entrar em contato")
        } else {
            trocarSecao(conteudoApresentacao, form);
            botao.text("Voltar")
        }
    });
});