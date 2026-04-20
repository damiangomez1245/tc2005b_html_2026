// 🔐 LOGIN
document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("loginForm");

  if (form) {
    form.addEventListener("submit", async function (event) {

      event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const mensaje = document.getElementById("mensajeError");

      if (username === "" || password === "") {
        mensaje.textContent = "Todos los campos son obligatorios";
        return;
      }

      try {
        const res = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: username,
            password: password
          })
        });

        const data = await res.json();

        if (!res.ok) {
          mensaje.textContent = data.message;
          return;
        }

        localStorage.setItem("userId", data.user.user_id);

        window.location.href = "tags.html";

      } catch (error) {
        mensaje.textContent = "Error de conexión";
      }

    });
  }

});


// 🎮 FUNCIÓN GLOBAL (AQUÍ VA)
function goToGame() {
  const userId = localStorage.getItem("userId");

  if (!userId) {
    alert("Debes iniciar sesión");
    window.location.href = "index.html";
    return;
  }

  window.location.href = "game.html?id=" + userId;
}


// 🚪 LOGOUT (opcional pero recomendado)
function logout() {
  localStorage.removeItem("userId");
  window.location.href = "index.html";
}