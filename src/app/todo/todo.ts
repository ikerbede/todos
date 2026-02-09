import { Component, input } from "@angular/core";
import { Task, TaskStatus } from "../data-access/task";

@Component({
  selector: 'app-todo',
  imports: [],
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
