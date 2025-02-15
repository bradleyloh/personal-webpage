import { Component } from '@angular/core';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HelloWorldComponent, TaskListComponent, FormsModule],  // Import other standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular 19 App';
  taskTitle: string = '';  // Declare taskTitle here
  tasks: { id: number; title: string; completed: boolean }[] = [];

  addTask() {
    if (this.taskTitle.trim()) {
      const newTask = {
        id: this.tasks.length + 1,
        title: this.taskTitle,
        completed: false
      };
      this.tasks.push(newTask);
      this.taskTitle = '';  // Clear input field after adding the task
    }
  }
}
