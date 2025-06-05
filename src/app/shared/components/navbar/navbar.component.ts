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
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {

  // Input signals
  isAuth = input<boolean>(false);

  // Component state
  isMenuOpen = false;

  // Navigation configuration
  readonly navbarItems: NavbarItem[] = [
    { name: 'Home', link: '/home' },
    { name: 'Sobre B8', link: '/about-us' },
    { name: 'Torneos', link: '/tournaments/1' },
    { name: 'Comunidad', link: '/community' },
  ];

  /**
   * Toggles the mobile menu visibility
   */
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /**
   * Closes the mobile menu
   */
  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
