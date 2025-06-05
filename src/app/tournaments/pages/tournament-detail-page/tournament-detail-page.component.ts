import { Component, inject } from '@angular/core';
import { TournamentDetailComponent } from '../../components/tournament-detail/tournament-detail.component';
import { ActivatedRoute, Router } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { TournamentService } from '../../services/tournament.service';
import { of } from 'rxjs';
import { TournamentDetailTableviewComponent } from '../../components/tournament-tableview/tournament-tableview.component';
import { GallerySkeletonComponent } from '../../../shared/components/gallery-skeleton/gallery-skeleton.component';
import { GalleryShellComponent } from '../../../shared/components/gallery-shell/gallery-shell.component';
import { TournamentDetailSkeletonComponent } from '../../components/tournament-detail-skeleton/tournament-detail-skeleton.component';
import { TournamentTableviewSkeletonComponent } from '../../components/tournament-tableview-skeleton/tournament-tableview-skeleton.component';

@Component({
  selector: 'tou-tournament-detail-page',
  imports: [
    GallerySkeletonComponent,
    TournamentDetailComponent,
    TournamentDetailTableviewComponent,
    GalleryShellComponent,
    TournamentDetailSkeletonComponent,
    TournamentTableviewSkeletonComponent
  ],
  templateUrl: './tournament-detail-page.component.html',
  styleUrl: './tournament-detail-page.component.css',
})
export class TournamentDetailPageComponent {

  // * injects
  tournamentId = inject(ActivatedRoute).snapshot.params['id'];
  tournamentService = inject(TournamentService);

  // * signals
  tournamentRes = rxResource({
    request: () => this.tournamentId,
    loader: ({ request }) => {
      if (!request) {
        return of(null);
      }
      return this.tournamentService.getDetailedTournament(request);
    }
  })

}
