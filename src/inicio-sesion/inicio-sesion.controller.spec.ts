import { Test, TestingModule } from '@nestjs/testing';
import { InicioSesionController } from './inicio-sesion.controller';

describe('InicioSesionController', () => {
  let controller: InicioSesionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InicioSesionController],
    }).compile();

    controller = module.get<InicioSesionController>(InicioSesionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
