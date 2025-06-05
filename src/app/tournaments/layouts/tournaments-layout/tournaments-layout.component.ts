import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'tou-tournaments-layout',
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent
  ],
  templateUrl: './tournaments-layout.component.html',
  styleUrl: './tournaments-layout.component.css',
})
export class TournamentsLayoutComponent { }
