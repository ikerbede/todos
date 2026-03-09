import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from '../data-access/task';

@Pipe({
  name: 'todoStatus',
})
export class TodoStatusPipe implements PipeTransform {

  transform(status: TaskStatus): string {
    switch (status) {
      case TaskStatus.NotStarted:
        return 'A faire';
      case TaskStatus.InProgress:
        return 'En cours';
      case TaskStatus.Completed:
        return 'Terminée';
      default:
        return 'Statut inconnu';
    }
  }

}
