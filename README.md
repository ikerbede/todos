# Component Inputs/Outputs

## Consignes

1. Ajouter un composant `todo-status` qui prendra en input un `TaskStatus` et affichera le libellé du statut de la tâche : "A faire", "En cours" ou "Terminée". Ce composant sera utilisé par le composant `todo` pour l'affichage du statut de la tâche.
Utiliser un `Pipe` pour l'affichage du libellé. La couleur du texte et la couleur du fond seront adaptées au statut :
   - `NOT_STARTED` : rouge foncé sur fond rouge clair
   - `IN_PROGRESS` : orange foncé sur fond orange clair
   - `COMPLETED` : vert foncé sur fond vert clair
2. Ajouter un composant `todos` dédié à l'affichage de la liste de TODOs qui prendra en input une liste de tâches (`Task[]`). Ce composant réutilisera le composant `todo` créé dans l'exercice précédent pour afficher les différentes tâches. Utiliser ce composant dans le composant `app`.
3. Ajouter dans le composant `todo` un bouton qui servira à faire évoluer le statut de la tâche : `IN_PROGRESS` si `NOT_STARTED` et `COMPLETED` si `IN_PROGRESS`. Le composant ne modifiera pas lui-même le statut de la tâche mais informera le composant parent (`todos`) du changement de statut.
4. Ajouter un composant `filters` comprenant 4 boutons pour filtrer la liste des tâches affichées par statut : "Toutes", "A faire", "En cours" et "Terminées".

## Schéma d'architecture

Voici l'architecture de composants attendue dans cet exercice :

```txt
App
  - Filters -> TaskStatus
  - Todos <- Task[] 
    - Todo <- Task -> statusChange
      - TodoStatus <- TaskStatus
```
