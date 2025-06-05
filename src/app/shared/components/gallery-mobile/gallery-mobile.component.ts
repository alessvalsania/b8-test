import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'sha-gallery-mobile',
  imports: [],
  templateUrl: './gallery-mobile.component.html',
  styleUrl: './gallery-mobile.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryMobileComponent {
  // Inputs
  images = input<string[]>([]);
  currentIndex = input<number>(0);
  isAutoPlaying = input<boolean>(true);
  progress = input<number>(0);

  // Outputs
  indexChange = output<number>();
  toggleAutoPlay = output<void>();
  nextImage = output<void>();
  previousImage = output<void>();

  // Methods
  onThumbnailClick(index: number) {
    this.indexChange.emit(index);
  }
}
