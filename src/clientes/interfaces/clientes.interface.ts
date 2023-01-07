import { Document } from "mongoose";

export interface Cliente extends Document{
    readonly nombre: string;
    readonly apellido: string;
    readonly edad:number;
    readonly fechaCreacion:Date;
}