import { Controller,Get,Post,Put,Delete,Res,HttpStatus,Body, Param } from '@nestjs/common';

import { CrearClienteDTO } from "./dto/clientes.dto"

import { ClientesService } from "./clientes.service";

@Controller('clientes')
export class ClientesController {

    constructor(private clientesService:ClientesService){}

    @Get('/obtenerClientes')
    async obtenerClientes(@Res() respuesta,@Body() crearClienteDTO:CrearClienteDTO){
        const clientes = await this.clientesService.getClientes()
        return respuesta.status(HttpStatus.OK).json({
            mensaje:'Bienvenido: Todos los Clientes!',
            clientes:clientes
        })
    }

    @Post('/crearCliente')
    async crearCliente(@Res() respuesta,@Body() crearClienteDTO:CrearClienteDTO){
        const cliente= await this.clientesService.crearCliente(crearClienteDTO)
        if(!cliente){
            return respuesta.status(HttpStatus.OK).json({
                mensaje:'Faltan datos necesarios'
            })  
        }else{
            return respuesta.status(HttpStatus.OK).json({
                mensaje:'Cliente Guardado!',
                cliente:cliente
            })
        }
    }

    @Put('/actualizarCliente/:id')
    async actualizarCliente(@Res() respuesta,@Param('id') id,@Body() crearClienteDTO:CrearClienteDTO){
        const cliente = await this.clientesService.actualizarCliente(id,crearClienteDTO)
        if(!cliente){
            return respuesta.status(HttpStatus.OK).json({
                mensaje:'El cliente no se ha actualizado'
            })  
        }else{
            return respuesta.status(HttpStatus.OK).json({
                mensaje:'Cliente Actualizado!',
                cliente:cliente
            })
        }
    }

    @Delete('/eliminarCliente/:id')
    async eliminarCliente(@Res() respuesta,@Param('id') id){
        const cliente= await this.clientesService.eliminarCliente(id)
        if(!cliente){
            return respuesta.status(HttpStatus.OK).json({
                mensaje:'El cliente no se ha eliminado'
            })  
        }else{
            return respuesta.status(HttpStatus.OK).json({
                mensaje:'Cliente Eliminado!',
                cliente:cliente
            })
        }
    }
}
