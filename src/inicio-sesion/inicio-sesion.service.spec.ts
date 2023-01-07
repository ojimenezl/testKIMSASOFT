import { Test, TestingModule } from '@nestjs/testing';
import { InicioSesionService } from './inicio-sesion.service';

describe('InicioSesionService', () => {
  let service: InicioSesionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InicioSesionService],
    }).compile();

    service = module.get<InicioSesionService>(InicioSesionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
