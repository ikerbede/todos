import { Component } from '@angular/core';
import { getTodosByStatus } from './data-access/todos.service';
import { TaskStatus } from './data-access/task';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  todos$ = getTodosByStatus(TaskStatus.Completed);
}
