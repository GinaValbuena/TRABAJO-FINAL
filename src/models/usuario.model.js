//importar las dependencias que necesitamos usar
import mongoose from "mongoose";

const schema = mongoose.Schema;


//Ahora nos creamos nuestro esquema de datos, que es lo que vamos a guardar en nuestra base de datos

const usuarioSchema = new schema({
    nombreCompleto: {
        type:String, 
        required: true
    },
    correo:{
        type:String,
    requeried: true
},
contrasena:{
    type: String,
    required :true
}
});


//Yo quiero enviar plantilla  (shema) a nuestra base de datos
//crear nuestro modelo 

const usuarioModel = mongoose.model ("usuario" ,usuarioSchema,"usuarioCollection");

//exportamos nuestro modelo

export default usuarioModel;

