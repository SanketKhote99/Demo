import { Test, TestingModule } from '@nestjs/testing';
import { AniketController } from './aniket.controller';

describe('AniketController', () => {
  let controller: AniketController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AniketController],
    }).compile();

    controller = module.get<AniketController>(AniketController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
