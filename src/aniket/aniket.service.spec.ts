import { Test, TestingModule } from '@nestjs/testing';
import { AniketService } from './aniket.service';

describe('AniketService', () => {
  let service: AniketService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AniketService],
    }).compile();

    service = module.get<AniketService>(AniketService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
