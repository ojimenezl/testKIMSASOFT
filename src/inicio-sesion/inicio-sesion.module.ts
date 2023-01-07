import { Module } from '@nestjs/common';
import { InicioSesionController } from './inicio-sesion.controller';
import { InicioSesionService } from './inicio-sesion.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ClienteSchema } from "../clientes/schemas/clientes.schema";
@Module({
  imports:[
    MongooseModule.forFeature([
    {name:'Clientes',schema:ClienteSchema }
  ])],
  controllers: [InicioSesionController],
  providers: [InicioSesionService]
})
export class InicioSesionModule {}
