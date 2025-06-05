import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FounderCardComponent } from '../../components/founder-card/founder-card.component';
import { FounderCardColor } from '../../enum/founder-card-color.enum';
import { TrapezoidComponent } from '../../../shared/components/trapezoid/trapezoid.component';

@Component({
  selector: 'abt-about-us-page',
  imports: [
    CommonModule,
    FounderCardComponent,
    TrapezoidComponent
  ],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css',
})
export class AboutUsPageComponent {
  public FounderCardColor = FounderCardColor;
}
