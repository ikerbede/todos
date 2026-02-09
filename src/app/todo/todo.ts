import { Component, input } from "@angular/core";
import { Task, TaskStatus } from "../data-access/task";
import { TodoStatus } from "../todo-status/todo-status";

@Component({
  selector: 'app-todo',
  imports: [TodoStatus],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {
  task = input.required<Task>();
  detailsDisplayed = false;
  taskStatusEnum = TaskStatus;

  showDetails(): void {
    this.detailsDisplayed = !this.detailsDisplayed;
  }
}
