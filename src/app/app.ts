import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { fetchTodos } from './data-access/todos.service';

@Component({
  selector: 'app-root',
  imports: [AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  todos$ = fetchTodos();
}
