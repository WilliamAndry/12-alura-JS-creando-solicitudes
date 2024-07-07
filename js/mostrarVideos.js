import { conectaAPI } from "./conectaAPI.js";     // Llamado del manager

const lista = document.querySelector("[data-lista]");   // Buscar el elemento en el DOM

// Función para construir la tarjeta de video
export default function construyeCard(titulo, descripcion, url, imagen) {  
    const video = document.createElement("li");         // Crear el elemento <li>
    video.className = "videos__item";                   // Asignar clase al elemento

    // Asignar contenido HTML al elemento
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"    
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; geolocation"
            allowfullscreen></iframe>
        <div class="descripcion-video">
            <img src="${imagen}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descripcion}</p>
        </div>`

    return video;  // Retornar el elemento video con el contenido HTML
}

// Función asíncrona para listar videos
async function listaVideos() {
    try{ 
        const listaAPI = await conectaAPI.listaVideos();   // Llamar al manager para obtener la lista de videos
        listaAPI.forEach(element =>lista                       // Para cada elemento en la lista
            .appendChild(construyeCard(element.titulo, element.descripcion, element.url, element.imagen)));  // Construir y añadir tarjeta al DOM
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">No fue posible cargar la lista de videos</h2>`;
    }
}    

listaVideos();  // Llamar a la función para listar videos
