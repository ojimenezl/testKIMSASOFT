import { Schema } from "mongoose";

export const ClienteSchema = new Schema({
    nombre: {type:String, required:true},
    apellido: String,
    edad: Number,
    password: {type:String, required:true},
    fechaCreacion:{
        type: Date,
        default: Date.now 
    }
});


