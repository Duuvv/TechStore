// Función para manejar el registro
document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío automático del formulario

    // Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return;
    }

    // Crear un objeto con los datos del usuario
    const user = {
        nombre: nombre,
        email: email,
        password: password
    };

    // Guardar el usuario en el Local Storage (simulación)
    let users = JSON.parse(localStorage.getItem("users")) || []; // Obtener usuarios existentes
    const emailExists = users.some((u) => u.email === email);

    if (emailExists) {
        alert("El correo electrónico ya está registrado.");
        return;
    }

    users.push(user); // Añadir el nuevo usuario
    localStorage.setItem("users", JSON.stringify(users)); // Guardar en Local Storage

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    window.location.href = "login.html"; // Redirigir al login
});