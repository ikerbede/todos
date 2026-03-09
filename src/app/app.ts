import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Task, TaskStatus } from './data-access/task';
import { Filters } from './filters/filters';
import { Todos } from "./todos/todos";
import { TaskForm } from "./task-form/task-form";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, Filters, Todos, TaskForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private http = inject(HttpClient);

  allTodos$ = this.http.get<Task[]>('http://localhost:3000/todos');
  
  filteredTodos$ = this.allTodos$;

  filterTasks(status?: TaskStatus): void {
    if (status) {
      this.filteredTodos$ = this.allTodos$.pipe(
        map((todos) => todos.filter((todo) => todo.status === status))
      );
    } else {
      this.filteredTodos$ = this.allTodos$;
    }
  }
}
