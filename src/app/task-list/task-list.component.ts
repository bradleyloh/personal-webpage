import { Component } from '@angular/core';
import { Task } from '../app.models';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];  // Using the Task interface to define the type for tasks
}
