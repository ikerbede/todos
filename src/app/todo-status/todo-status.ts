import { Component, input } from '@angular/core';
import { TaskStatus } from '../data-access/task';
import { TodoStatusPipe } from './todo-status-pipe';

@Component({
  selector: 'app-todo-status',
  imports: [TodoStatusPipe],
  templateUrl: './todo-status.html',
  styleUrl: './todo-status.scss',
})
export class TodoStatus {
  taskStatus = input.required<TaskStatus>();
}
