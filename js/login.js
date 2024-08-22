document.getElementById('loginForm').addEventListener('submit', function (event) {
    // Obtener valores de los campos de entrada
    var Usuario = document.getElementById('inputUsuario').value;
    var Contraseña = document.getElementById('inputContraseña').value;

    // Verificará si los campos están vacíos
    if (Usuario === "" || Contraseña === "") {
        // Previene el envío del formulario con campos vacíos
        event.preventDefault();
        alert("Por favor, completa ambos campos.");
    }else{
        // Redirige a la página de portada si los campos no están vacíos
        event.preventDefault();  // Previene la recarga del formulario
        window.location.href = "index.html";  // Cambia "index.html" a la ruta correcta
                // Guarda la sesión en localStorage
  localStorage.setItem('sesionIniciada', 'true');
  window.location.href = "index.html";  // Redirige a la página de portada
}
});