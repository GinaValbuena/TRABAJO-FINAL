//Importamos dependencias
//Rutas nos conectan el front (está en el servidor)- con lógica

import express from ¨express¨ ;
import { getUsuario, postUsuario, putUsuario, 
deleteUsuario } from "../controllers/usuario.controller.js";

const usuarioRouter = express . Router ();



usuarioRouter.get( ¨/obtenerUsuario¨getusuario);


Ruta para crear usuarios
usuarioRouter.postUs
uario¨, postUsuario
