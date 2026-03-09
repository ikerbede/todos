import { Component, output } from '@angular/core';
import { TaskStatus } from '../data-access/task';

@Component({
  selector: 'app-filters',
  imports: [],
  templateUrl: './filters.html',
  styleUrl: './filters.scss',
})
export class Filters {
  filterChange = output<TaskStatus | undefined>();
  taskStatusEnum = TaskStatus;

  filterTasks(status?: TaskStatus): void {
    this.filterChange.emit(status);
  }
}
