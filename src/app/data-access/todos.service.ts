export function fetchTodos(): Promise<any> {
  return fetch('todos.data.json', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  })
    .then((response) => response.json());
}
