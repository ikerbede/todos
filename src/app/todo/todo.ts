import { Component, input, output } from "@angular/core";
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
  updateTaskStatus = output<TaskStatus>();

  detailsDisplayed = false;
  taskStatusEnum = TaskStatus;

  showDetails(): void {
    this.detailsDisplayed = !this.detailsDisplayed;
  }

  updateTask(event: Event): void {
    event.stopPropagation();
    if (this.task().status === TaskStatus.NotStarted) {
      this.updateTaskStatus.emit(TaskStatus.InProgress);
    } else if (this.task().status === TaskStatus.InProgress) {
      this.updateTaskStatus.emit(TaskStatus.Completed);
    }
  }
}
