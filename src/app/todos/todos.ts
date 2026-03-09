import { Component, inject, input } from '@angular/core';
import { Task, TaskStatus } from '../data-access/task';
import { Todo } from '../todo/todo';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  imports: [Todo],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
  private http = inject(HttpClient);

  tasks = input<Task[]>([]);

  updateTask(task: Task, updatedStatus: TaskStatus): void {
    this.http.patch(`http://localhost:3000/todos/${task.id}`, { status: updatedStatus }).subscribe();
  }
}
