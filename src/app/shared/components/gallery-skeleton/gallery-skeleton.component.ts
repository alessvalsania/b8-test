import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'sha-gallery-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery-skeleton.component.html',
  styleUrl: './gallery-skeleton.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GallerySkeletonComponent { }
