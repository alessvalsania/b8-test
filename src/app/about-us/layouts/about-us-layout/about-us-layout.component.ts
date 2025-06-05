import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'abt-about-us-layout',
  imports: [
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './about-us-layout.component.html',
  styleUrl: './about-us-layout.component.css',
})
export class AboutUsLayoutComponent { }
