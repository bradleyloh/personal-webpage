import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, NavbarComponent], // ✅ Only import what's needed
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular 19 App';
  taskTitle: string = '';
  tasks: { id: number; title: string; completed: boolean }[] = [];

  addTask() {
    if (this.taskTitle.trim()) {
      const newTask = {
        id: this.tasks.length + 1,
        title: this.taskTitle,
        completed: false
      };
      this.tasks.push(newTask);
      this.taskTitle = '';
    }
  }
}
