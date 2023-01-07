import { Schema } from "mongoose";

export const ClienteSchema = new Schema({
    nombre: String,
    apellido:{type:String, required:true} ,
    edad: Number,
    fechaCreacion:{
        type: Date,
        default: Date.now 
    }
});

