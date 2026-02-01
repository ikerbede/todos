# Typescript

1. Créer un nouveau fichier `src/app/data-access/task.ts` dans lequel un nouveau `type` nommé `Task` représentant la structure de donnée d'un item de la collection située dans le fichier `public/todos.data.json`.
2. Transformer la méthode `fetchTodos` implémentée dans le fichier `src/app/data-access/todos.service.ts` afin d'utiliser le nouveau type `Task`.
3. Ajouter une méthode `getTodosByStatus` qui prendra en paramètre le statut d'une tâche représenté par une `enum` et qui retournera la liste des tâches filtrée par le statut renseigné.
4. Utiliser cette méthode pour afficher les tâches non commencées uniquement.
