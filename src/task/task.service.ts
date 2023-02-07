import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  create(task) {
    this.tasks.push(task);
    return task;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id) {
    return this.tasks.find(task => task.id === id);
  }

  update(id, task) {
    const index = this.tasks.findIndex(t => t.id === id);
    this.tasks[index] = task;
    return task;
  }

  delete(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
