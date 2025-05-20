document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = encodeURIComponent(document.getElementById("nome").value);
        const email = encodeURIComponent(document.getElementById("email").value);
        const message = encodeURIComponent(document.getElementById("mensagem").value);

        const fullMessage = `Olá, meu nome é ${name}, estou entrando em contato através do seu portfolio%0AE-mail: ${email}%0AAssunto: ${message}`;

        const phoneNumber = "5562982086625";
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

        window.open(whatsappURL, '_blank');

        form.reset();
    });
});