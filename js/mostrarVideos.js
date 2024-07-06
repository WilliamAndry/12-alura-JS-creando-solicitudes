import { conexionAPI } from "./conexionAPI.js";     //LLAMADO DEL MANAYER

const lista = document.querySelector("[data-lista]")   //VE AL DOC Y TRAEME LA ETIQUETA

function crearCard(titulo, descripcion,url, imagen){   //CREACION DE FUNCION QUE PEDIRA CIERTOS DATOS ESPECIFICOS

    //LOS DATOS QUE TIENE ESTA BD SON: id, titulo, descripcion, url, imagen
    //ALGUNAS PUEDEN TRAER MAS INFORMACION COMO: fecha de creacion, autor,año,calificacion,etc.

    const video = document.createElement ("li");    //CREACION DE ETIQUETA EN EL HTML
    video.className="videos_item";                  //CREACION LA CLASE A CADA ELEMENTO 
    //CREACION DEL TEXTO HTML QUE DESEO A CADA ELEMENTO EN ESTE CASO OCUPE DEL API LA URL,TITULO,IMAGEN Y DESCRIPCION
    video.innerHTML=`<iframe width="100%" height="72%" src="${url}"    
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
                <div class="descripcion-video">
                    <img src="${imagen}" alt="logo canal alura">
                    <h3>${titulo}</h3>
                    <p>${descripcion}</p>
                </div>`;
    return video;       //DE LA LINEA 11 A LA 21 TODO MANDALO A LA VVARIABLE VIDEO DE LA LINEA 10
}   

async function listarVideos1(){      //CREAME UNA FUNCION ASINCRONA
    const listaAPI = await conexionAPI.listarVideos()   //CREA UNA VARIABLE QUE LLAMA AL MANAGER Y LE PIDE LA INFORMACION QUE QUIERO 

    listaAPI.forEach (video=>lista.appendChild(crearCard(video.titulo, video.descripcion, video.url, video.imagen)))
}

listarVideos1()
