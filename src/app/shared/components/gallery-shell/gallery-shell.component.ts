import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, DestroyRef, effect, inject, input, signal } from '@angular/core';
import { GalleryMobileComponent } from '../gallery-mobile/gallery-mobile.component';
import { GalleryDesktopComponent } from '../gallery-desktop/gallery-desktop.component';

@Component({
  selector: 'sha-gallery-shell',
  imports: [
    CommonModule,
    GalleryMobileComponent,
    GalleryDesktopComponent
  ],
  templateUrl: './gallery-shell.component.html',
  styleUrl: './gallery-shell.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryShellComponent {
  // Inputs
  images = input<string[]>([]);
  status = input.required<string>();
  organizer = input.required<string>();

  // Signals for shared state
  currentIndex = signal(0);
  isAutoPlaying = signal(true);
  progress = signal(0);
  destroyRef = inject(DestroyRef);

  // Computed signals
  currentImage = computed(() => this.images()[this.currentIndex()]);

  // Auto-play intervals
  private autoPlayInterval?: ReturnType<typeof setInterval>;
  private progressInterval?: ReturnType<typeof setInterval>;

  constructor() {
    // Effect to handle auto-play
    effect(() => {
      if (this.isAutoPlaying() && this.images().length > 1) {
        this.startAutoPlay();
      } else {
        this.stopAutoPlay();
      }
    });

    // Effect to reset progress when index changes
    effect(() => {
      this.currentIndex(); // Track changes
      this.progress.set(0);
    });
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  // Event handlers for child components
  onIndexChange(index: number) {
    this.currentIndex.set(index);
    this.startAutoPlay();
  }

  onToggleAutoPlay() {
    this.isAutoPlaying.update(current => !current);
  }

  onNextImage() {
    this.nextImage();
  }

  onPreviousImage() {
    this.previousImage();
  }

  // Private methods
  private startAutoPlay() {
    this.stopAutoPlay();

    // Progress bar animation
    this.progressInterval = setInterval(() => {
      this.progress.update(current => {
        if (current >= 100) {
          return 0;
        }
        return current + 2; // 2% every 100ms = 5 seconds total
      });
    }, 100);

    // Image change interval
    this.autoPlayInterval = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = undefined;
    }
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = undefined;
    }
    this.progress.set(0);
  }

  private nextImage() {
    const nextIndex = (this.currentIndex() + 1) % this.images().length;
    this.currentIndex.set(nextIndex);
  }

  private previousImage() {
    const prevIndex = (this.currentIndex() - 1 + this.images().length) % this.images().length;
    this.currentIndex.set(prevIndex);
  }
}
