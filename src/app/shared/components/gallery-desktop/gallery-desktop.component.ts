import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'sha-gallery-desktop',
  imports: [],
  templateUrl: './gallery-desktop.component.html',
  styleUrl: './gallery-desktop.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryDesktopComponent {
  images = input<string[]>([]);
  currentIndex = input<number>(0);
  isAutoPlaying = input<boolean>(true);
  progress = input<number>(0)

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
