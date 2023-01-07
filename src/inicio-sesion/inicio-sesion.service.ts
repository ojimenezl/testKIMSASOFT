import { Inject, Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Cliente } from "../clientes/interfaces/clientes.interface";

@Injectable()
export class InicioSesionService {
    constructor(@InjectModel('Clientes') private readonly clienteModel:Model<Cliente>){}
    async getCliente(getName: string,password: string):Promise<Cliente>{
        const cliente = await this.clienteModel.findOne({nombre: getName,password:password})
        return cliente
    }
}
