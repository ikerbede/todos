import { Task, TaskStatus } from './task';

export function fetchTodos(): Promise<Task[]> {
  return fetch('todos.data.json', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((response) => response.json());
}

export function getTodosByStatus(status: TaskStatus): Promise<Task[]> {
  return fetchTodos().then(todos => todos.filter(todo => todo.status === status))
}
