import { Module } from '@nestjs/common';
import { TasksModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';
import { AniketModule } from './aniket/aniket.module';

@Module({
  imports: [ TasksModule, AuthModule, AniketModule],

})
export class AppModule {}
