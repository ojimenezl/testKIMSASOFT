import { Controller,Get,Post,Put,Delete,Res,HttpStatus,Body, Param } from '@nestjs/common';
import { CrearClienteDTO } from "../clientes/dto/clientes.dto"

import { InicioSesionService } from "./inicio-sesion.service";

@Controller('inicio-sesion')
export class InicioSesionController {
    constructor(private clientesService:InicioSesionService){}

    @Post('/')
    async crearCliente(@Res() respuesta,@Body() crearClienteDTO:CrearClienteDTO){
        const cliente= await this.clientesService.getCliente(crearClienteDTO.nombre,crearClienteDTO.password)
        if(!cliente){
            return respuesta.status(HttpStatus.OK).json({
                mensaje:'Verifique sus datos',
            })
        }else{
            return respuesta.status(HttpStatus.OK).json({
                mensaje:'Inicio de Sesion Exitosa!',
                cliente:cliente
            })
        }   
    }
}
