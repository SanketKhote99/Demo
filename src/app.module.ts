import { Module } from '@nestjs/common';
import { TasksModule } from './task/task.module';

@Module({
  imports: [ TasksModule],

})
export class AppModule {}
