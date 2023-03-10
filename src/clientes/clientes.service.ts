import { Inject, Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Cliente } from "./interfaces/clientes.interface";
import { CrearClienteDTO } from "./dto/clientes.dto";
@Injectable()
export class ClientesService {
    constructor(@InjectModel('Clientes') private readonly clienteModel:Model<Cliente>){}

    async getClientes(): Promise<Cliente[]>{
        const clientes = await this.clienteModel.find()
        return clientes
    }

    async crearCliente(crearClienteDTO:CrearClienteDTO):Promise<Cliente>{
        try {
            const cliente = new this.clienteModel(crearClienteDTO)
            return await cliente.save()          
        } catch (error) {
            console.log(error);           
        }
               
    }

    async actualizarCliente(getId: string,crearClienteDTO:CrearClienteDTO):Promise<Cliente>{
        console.log(crearClienteDTO);
        
        try {
            if(crearClienteDTO.nombre!="" && crearClienteDTO.password!=""){
                const cliente = await this.clienteModel.findByIdAndUpdate(getId,crearClienteDTO,{new:true})
                console.log('cliete',cliente);
                
                return cliente 
            }
        } catch (error) {
            console.log(error);           
        }
        
    }

    async eliminarCliente(getId: string):Promise<Cliente>{
        try {
            return await this.clienteModel.findByIdAndDelete(getId)
        } catch (error) {
            console.log(error);           
        }        
    }
}
