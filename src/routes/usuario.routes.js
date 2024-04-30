//Importamos dependencias
//Rutas nos conectan el front (está en el servidor)- con lógica

import express from 'express';
import { getUsuario, postUsuario, putUsuario, 
deleteUsuario } from "../controllers/usuario.controller.js";
//Definir una varible para estas rutas
const usuarioRouter = express . Router ();


//Definira nuestras rutas especificas
//Ruta para obtener usuarios
usuarioRouter.get('/obtenerUsuario', getUsuario);

//Ruta crearusuarios
usuarioRouter.post('/crearUsuario', postUsuario);

//Ruta para modificar usuarios pppor su id identificado único
usuarioRouter.put('/modificarUsuario/:_id', putUsuario);

//Ruta para eliminar usuarios por su id
usuarioRouter.delete('/eliminarUsuario/:_id', deleteUsuario);

//Exportamos las rutas
export default usuarioRouter;