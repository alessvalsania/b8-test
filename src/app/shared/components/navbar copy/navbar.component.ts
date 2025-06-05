import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { NavbarItem } from '../../interfaces/navbar-item.interface';

@Component({
  selector: 'sha-navbar',
  imports: [
    CommonModule,
    RouterModule,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  isAuth = input<boolean>(false);
  isMenuOpen = false;

  navbarItems: NavbarItem[] = [
    { name: 'Sobre B8', link: '/about-us' },
    { name: 'Torneos', link: '/tournaments/1' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
