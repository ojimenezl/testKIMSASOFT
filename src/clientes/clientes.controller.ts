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
            mensaje:'Bienvenido Todos los Clientes!',
            clientes:clientes
        })
    }

    @Post('/crearCliente')
    async crearCliente(@Res() respuesta,@Body() crearClienteDTO:CrearClienteDTO){
        const cliente= await this.clientesService.crearCliente(crearClienteDTO)
        return respuesta.status(HttpStatus.OK).json({
            mensaje:'Cliente Guardado!',
            cliente:cliente
        })
    }

    @Put('/actualizarCliente/:id')
    async actualizarCliente(@Res() respuesta,@Param('id') id,@Body() crearClienteDTO:CrearClienteDTO){
        const clienteActualizado = await this.clientesService.actualizarCliente(id,crearClienteDTO)
        return respuesta.status(HttpStatus.OK).json({
            mensaje:'Cliente Actualizado!',
            cliente:clienteActualizado
        })
    }

    @Delete('/eliminarCliente/:id')
    eliminarCliente(@Res() respuesta,@Param('id') id){
        this.clientesService.eliminarCliente(id)
        return respuesta.status(HttpStatus.OK).json({
            mensaje:'Cliente Eliminado!'
        })
    }
}
