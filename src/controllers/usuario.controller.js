//importamos dependencias -> lo que necesitamos para funcionamiento de código

import usuarioModel from "../models/usuario.model.js"


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
    
    //Manejo de errores con try y catch

    try{
let usuarios = await usuarioModel.find();
return res.send(usuarios);
    }catch(error){
        return res.json({error:"error al mostrar los datos" + 
        error});
    }
   }
//LÓGICA PARA CREAR USUARIOS
export const postUsuario = async(req, res) => {
//manejo de errores cin try y catch

try{
let datosUsuario = req.body;
let nuevoUsuario = await usuarioModel.create(datosUsuario);
return res.json(nuevoUsuario);
}catch(error){
//Para que me muestre un mensaje que me indique cuál es el
error
    return res .json({error:"error al crear el usuario",
 message:error.message});
}

}
// LÓGICA PARA MODIFICAR USUARIOS
export const putUsuario = async (req, res) => {
    
    try{
let datosModificar =req.body;
let idModificar = req.params._id;

await usuarioModel.findByIdAndUpdate(idModificar,datosModificar);
return res.json({message:"Usuario actualizado correctamente"});
    }catch(error){
        //Para que muestre un mensaje que me indique cual es el
        error
   return res .json({error:"error al modificar el usuario",
 message:error.message});
}
}
//LÓGICA PARA ELIMINAR USUARIOS
export const deleteUsuario = async(req, res) => {

    try{
        let idEliminar = req.params._id;
        let usuarioEliminado = await usuarioModel.findByIdAndDelete(idEliminar);

        if(usuarioEliminado!==true){
            return res.json({message:"Usuario eliminado correctamente"});
        }  else{
            return res.json({message: "ups! no se pudo eliminar usuario"});
        } 

    }catch(error){
        //Para que muestre un mensaje que me indique cual es el
        error
   return res.json({error:"error al eliminar el usuario",
 message:error.message})
}}