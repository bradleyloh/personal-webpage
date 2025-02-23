import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  taskTitle: string = '';

  @Output() taskAdded = new EventEmitter<{ id: number; title: string; completed: boolean }>();

  addTask() {
    if (this.taskTitle.trim()) {
      const newTask = {
        id: Date.now(),  // Using timestamp as unique ID
        title: this.taskTitle,
        completed: false
      };

      this.taskAdded.emit(newTask); // Notify parent component
      this.taskTitle = ''; // Clear input field
    }
  }
}
