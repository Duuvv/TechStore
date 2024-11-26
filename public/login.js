   // Usuario registrado (simulado)
   const registeredUser = {
    username: "usuario123",
    password: "contraseña123"
};

// Función para validar el inicio de sesión
function validateLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validar las credenciales
    if (username === registeredUser.username && password === registeredUser.password) {
        alert("Inicio de sesión exitoso");
        window.location.href = "index.html"; // Redirige al usuario a la página principal
    } else {
        // Muestra un mensaje de error si las credenciales son incorrectas
        const errorMessage = document.getElementById("error-message");
        errorMessage.style.display = "block";
    }
}