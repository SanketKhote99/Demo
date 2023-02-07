import { Module } from '@nestjs/common';
import { TasksController } from './task.controller';
import { TasksService } from './task.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService]
})


export class TasksModule {

}
