import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-trapezoid',
  imports: [
    CommonModule
  ],
  templateUrl: './trapezoid.component.html',
  styleUrl: './trapezoid.component.css',
})
export class TrapezoidComponent {
  text = input<string>('Texto por defecto');
}
