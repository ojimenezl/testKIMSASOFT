import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ClienteSchema } from "./schemas/clientes.schema";
@Module({
  imports:[
    MongooseModule.forFeature([
    {name:'Clientes',schema:ClienteSchema }
  ])],
  controllers: [ClientesController],
  providers: [ClientesService]
})
export class ClientesModule {}

