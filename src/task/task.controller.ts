import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './task.service';

@Controller()
export class TasksController {
    constructor(private readonly tasksService: TasksService){}
    
    @Post()
    create(@Body()task): string  {
        return this.tasksService.create(task);
    }

    @Get()
    findAll(): string [] {
        return this.tasksService.findAll();
    }

    @Get()
        findOne(id): string {
            return this.tasksService.findOne(id);
        }

    @Post()
    update(id: string, @Body()task): string {
        return this.tasksService.update(id, task);
    }

    
    
    
}
