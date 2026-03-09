import { Component, input } from '@angular/core';
import { Task, TaskStatus } from '../data-access/task';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-todos',
  imports: [Todo],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
  tasks = input<Task[]>([]);

  updateTask(task: Task, updatedStatus: TaskStatus): void {
    task.status = updatedStatus;
  }
}
