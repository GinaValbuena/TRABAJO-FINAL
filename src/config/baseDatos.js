//Importamos las dependencias que necesitamos
import mongoose from 'mongoose';


const conexionMongo = async() => {

    await mongoose.connect(process.env.BD_URL,{})

    // control de errores con try - catch
    try{
        console.log('Excelente!Conexión exitosa');
    } catch (error){
        console.log('Error de conexión:', error.message);
    }

}

//tenemos que exportar nuestra función para llamarla desde nuestro servidor
export default conexionMongo;

