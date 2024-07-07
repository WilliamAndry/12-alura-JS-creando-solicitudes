import { conectaAPI } from "./conectaAPI.js";  // Llamado del manager

const formulario = document.querySelector("[data-formulario]");  // Buscar el elemento en el DOM

// Función asíncrona para manejar la creación de un nuevo video
async function crearVideo(evento) {
    evento.preventDefault();  // Prevenir el comportamiento por defecto del formulario

    const imagen = document.querySelector("[data-imagen]").value;  // Obtener el valor de la imagen
    const url = document.querySelector("[data-url]").value;        // Obtener el valor de la URL
    const titulo = document.querySelector("[data-titulo]").value;  // Obtener el valor del título
    const descripcion = Math.floor(Math.random() * 10).toString(); // Generar una descripción aleatoria

    await conectaAPI.crearVideo(titulo, descripcion, url, imagen); // Llamar a la función para crear un nuevo video

    window.location.href = "../pages/envio-concluido.html";  // Redirigir a la página de confirmación
}

formulario.addEventListener("submit", evento => crearVideo(evento));  // Añadir el manejador de evento al formulario
