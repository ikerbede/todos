# Todo task component

## Consignes

1. Créer un composant Angular `Todo` dans un dossier `src/app/todo`.
2. Ce composant doit prendre en input un objet de type `Task` fidèle à la structure de donnée d'un item de la collection située dans le fichier `todos.data.json`.
3. Le composant doit afficher le titre de la tâche et son statut uniquement.
4. Au clic sur la tâche les informations supplémentaires telles que la description, sa date de début si elle a été entammée, et sa date de fin si elle a été achevée doivent être affichées. Si on clique à nouveau sur la tâche, celle-ci revient à son affichage initial en cachant les informations supplémentaires.

## Maquettes

```txt
Tâche repliée : 
-----------------------------------------
| titre                          statut |
-----------------------------------------

Tâche dépliée : 
-----------------------------------------
| titre                          statut |
| description                           |
| date début                   date fin |
-----------------------------------------
```
