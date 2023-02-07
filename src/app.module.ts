import { Module } from '@nestjs/common';
import { TasksModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ TasksModule, AuthModule],

})
export class AppModule {}
