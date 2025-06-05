import { Component, input } from '@angular/core';
import { FounderCardColor } from '../../enum/founder-card-color.enum';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'abt-founder-card',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './founder-card.component.html',
  styleUrl: './founder-card.component.css',
})
export class FounderCardComponent {
  name = input.required<string>();
  lastname = input.required<string>();
  role = input.required<string>();
  imageUrl = input.required<string>();
  color = input.required<FounderCardColor>();
}
