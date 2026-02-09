import { Component, input } from '@angular/core';
import { Task } from '../data-access/task';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-todos',
  imports: [Todo],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
export class Todos {
  tasks = input<Task[]>([]);
}
