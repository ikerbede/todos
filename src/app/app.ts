import { Component } from '@angular/core';
import { fetchTodos } from './data-access/todos.service';
import { Todo } from './todo/todo';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe, Todo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  todos$ = fetchTodos();
}
