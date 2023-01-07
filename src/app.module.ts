import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { MongooseModule } from "@nestjs/mongoose";
import { InicioSesionModule } from './inicio-sesion/inicio-sesion.module';
@Module({
  imports: [ClientesModule,MongooseModule.forRoot('mongodb+srv://oscar:db12345@cluster0.fm6e7pd.mongodb.net/webApp'), InicioSesionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
