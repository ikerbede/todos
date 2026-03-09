import { Component, signal } from '@angular/core';
import { form, FormField, FormRoot, required } from '@angular/forms/signals';

@Component({
  selector: 'app-task-form',
  imports: [FormRoot, FormField],
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
})
export class TaskForm {
  taskModel = signal({ title: '', description: '' });

  taskForm = form(this.taskModel, (schemaPath) => {
    required(schemaPath.title)
  });

  onSubmit(): void {
    if (this.taskForm().valid()) {
      console.log(this.taskForm().value());
    } else {
      console.error('Form is invalid');
    }
  }
}
