import { Component } from '@angular/core';
import { fetchTodos } from './data-access/todos.service';
import { AsyncPipe } from '@angular/common';
import { Todos } from "./todos/todos";
import { Filters } from './filters/filters';
import { Task, TaskStatus } from './data-access/task';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, Filters, Todos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private allTodos$ = fetchTodos();
  filteredTodos$: Promise<Task[]> = this.allTodos$;

  filterTasks(status?: TaskStatus): void {
    if (status) {
      this.filteredTodos$ = this.allTodos$.then((todos) =>
        todos.filter((todo) => todo.status === status),
      );
    } else {
      this.filteredTodos$ = this.allTodos$;
    }
  }
}
