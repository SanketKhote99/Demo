import { Module } from '@nestjs/common';
import { AniketController } from './aniket.controller';
import { AniketService } from './aniket.service';

@Module({
  controllers: [AniketController],
  providers: [AniketService]
})
export class AniketModule {}
