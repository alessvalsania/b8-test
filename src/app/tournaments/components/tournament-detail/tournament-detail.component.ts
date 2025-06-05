import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'tou-tournament-detail',
  imports: [
    CommonModule
  ],
  templateUrl: './tournament-detail.component.html',
  styleUrl: './tournament-detail.component.css',
})
export class TournamentDetailComponent {
  game = input.required<string>();
  tournamentName = input.required<string>();
  prizePool = input.required<number>();
  date = input.required<Date>();
  bracketFormat = input.required<string>();
  minPlayers = input.required<number>();
  maxPlayers = input.required<number>();
  actualSignedUp = input.required<number>();
}
