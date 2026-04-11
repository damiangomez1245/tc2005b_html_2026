document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");

    if (form) {

        form.addEventListener("submit", async function (event) {

            event.preventDefault();

            const email = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const mensaje = document.getElementById("mensajeError");

            if (email === "" || password === "") {
                mensaje.textContent = "Todos los campos son obligatorios";
                return;
            }

            try {

                const response = await fetch("http://localhost:3000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                });

                const data = await response.json();

                if (response.ok) {

                    window.location.href = "profile.html";

                } else {

                    mensaje.textContent = data.message;

                }

            } catch (error) {

                mensaje.textContent = "Error conectando con el servidor";

            }

        });

    }

});