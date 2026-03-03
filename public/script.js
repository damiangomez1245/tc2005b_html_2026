document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", function (event) {

            event.preventDefault(); 

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const mensaje = document.getElementById("mensajeError");

            const usuarioCorrecto = "admin";
            const passwordCorrecto = "1234";

            if (username === "" || password === "") {
                mensaje.textContent = "Todos los campos son obligatorios";
                return;
            }

            if (username === usuarioCorrecto && password === passwordCorrecto) {
                window.location.href = "profile.html";
            } else {
                mensaje.textContent = "Usuario o contraseña incorrectos";
            }

        });
    }

});
