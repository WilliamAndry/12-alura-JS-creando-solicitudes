// Función asíncrona para listar videos
async function listaVideos() {
    const conexion = await fetch("http://localhost:3001/videos");   // Llamado de la información del servidor
    const conexionConvertida = await conexion.json();               // Convertir respuesta a JSON
    return conexionConvertida;                                      // Retornar datos convertidos
}

// Función asíncrona para crear un video
async function crearVideo(titulo, descripcion, url, imagen) {
    const conexion = await fetch("http://localhost:3001/videos", {   // Llamado de la información del servidor
        method: "POST",                                             // Tipo de método a utilizar
        headers: {"Content-Type": "application/json",},             // Encabezado para especificar el tipo de contenido
        body: JSON.stringify({                                      // Convertir datos a JSON para enviarlos
            titulo: titulo,                                  
            descripcion: `${descripcion} mil visualizaciones`,
            url: url,
            imagen: imagen
        })
    });

    const conexionConvertida = await conexion.json();               // Convertir respuesta a JSON
    return conexionConvertida;
}

// Exportar las funciones
export const conectaAPI = {
    listaVideos, crearVideo
};

/*
RESUMEN

listarVideos ---------- Función asíncrona para listar videos
conexionConvertida ---- Variable con la información convertida a JSON
conexionAPI ----------- Mi manager que solo se aparece cuando lo llaman (tiene toda la información recabada)

Cabe mencionar que la BD del API contiene 12 elementos y esta cantidad se mostrará a menos que se agregen mas videos.
*/
