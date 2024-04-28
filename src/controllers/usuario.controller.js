//importamos dependencias -> lo que necesitamos para funcionamiento de código

import usuarioModel from "../models/user.model.js"


/*
- > PETICIONES
    GET -> me muestra los usuarios
    POST -> me crea usuarios
    PUT -> me modifica USUARIOS
    DELETE -> me elimina usuarios

    */

//prueba inicial

// LÓGICA PARA MOSTRAR USUARIOS
export const getUsuario = async (req, res) => {
    return res.send("Funciona la petición GET");
   }
//LÓGICA PARA CREAR USUARIOS
export const postUsuario = async(req, res) => {

    return res.send("Funciona la petición POST");
}

// LÓGICA PARA MODIFICAR USUARIOS
export const putUsuario = async (req, res) => {
    return res.send("Funciona la petición PUT");
   }
//LÓGICA PARA ELIMINAR USUARIOS
export const deleteUsuario = async(req, res) => {

    return res.send("Funciona la petición DELETE");
}
