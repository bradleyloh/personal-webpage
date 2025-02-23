import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false; // Controls mobile menu visibility

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
