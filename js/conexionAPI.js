async function listarVideos(){  //CREACION DE FUNCION ASINCRONA
    const conexion = await fetch ("http://localhost:3001/videos")   //LLAMADO DE LA INFORMACION DEL SERVIDOR

    const conexionConvertida =  conexion.json();    //CONVERTIR EL CODIGO DEL SERVIDOR A LENGUAJE QUE ENTIENDA MI PC

        return conexionConvertida       //UNA VEZ CONVERTIDA LA INFORMACION MANDAMELA A LA VARIBLE LOCAL DE LA FUNCION ASICRONA
}

export const conexionAPI = {    //UNA VEZ LLAMADO Y TRANFORMADO LA INFORMACION GUARDAMELA EN UNA VARIABLE QUE SERA COMO MI "PROGRAMA PORTABLE"
    listarVideos
}


/*
RESUMEN

listarVideos----------Funcion asincrona
conexionConvertida----Variable con la informacion a lenguaje PC
conexionAPI-----------Mi manager que solo se aparece cuando lo llaman(tiene toda la informacion recabada)

Cabe mencionar que la BD del API contiene 12 elementos y esta cantidad que se mostrara. 
*/
