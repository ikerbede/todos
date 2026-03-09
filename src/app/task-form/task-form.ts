import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { form, FormField, FormRoot, required } from '@angular/forms/signals';
import { Task, TaskStatus } from '../data-access/task';

@Component({
  selector: 'app-task-form',
  imports: [FormRoot, FormField],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  private http = inject(HttpClient);

  taskModel = signal({ title: '', description: '' });

  taskForm = form(this.taskModel, (schemaPath) => {
    required(schemaPath.title)
  });

  onSubmit(event: Event): void {
    if (this.taskForm().valid()) {
      this.http.post<Task>('http://localhost:3000/todos', {
        title: this.taskModel().title,
        description: this.taskModel().description,
        status: TaskStatus.NotStarted,
        creationDate: new Date().toISOString()
      }).subscribe();
    } else {
      console.error('Form is invalid');
    }
    
    event.preventDefault();
  }
}
